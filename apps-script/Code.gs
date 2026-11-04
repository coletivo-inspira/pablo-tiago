/**
 * Portal de demandas — Pablo Tiago
 * Planilha: aba "Demandas". Cole este código em Extensões > Apps Script.
 *
 * Colunas (linha 1 = cabeçalho, criado por setup()):
 * A Data | B ID | C Nome | D Contato | E Regional | F Bairro | G Categoria |
 * H Título | I Descrição | J Publicar | K Status | L Resposta
 *
 * O mural do site só mostra linhas com "Publicar" marcado (TRUE).
 * Nome e contato NUNCA são devolvidos pela API pública.
 */

var SHEET_NAME = 'Demandas';
var HEADERS = ['Data', 'ID', 'Nome', 'Contato', 'Regional', 'Bairro', 'Categoria', 'Título', 'Descrição', 'Publicar', 'Status', 'Resposta'];
var STATUS_OPTIONS = ['Recebida', 'Em análise', 'Encaminhada', 'Resolvida', 'Arquivada'];
var MAX = { nome: 120, contato: 120, regional: 40, bairro: 80, categoria: 60, titulo: 120, descricao: 2000 };

/** Rode UMA vez no editor para criar a aba, cabeçalho, caixas de seleção e menus. */
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  sh.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]).setFontWeight('bold').setBackground('#0b2a5b').setFontColor('#ffffff');
  sh.setFrozenRows(1);
  sh.getRange('J2:J1000').insertCheckboxes();
  sh.getRange('K2:K1000').setDataValidation(
    SpreadsheetApp.newDataValidation().requireValueInList(STATUS_OPTIONS, true).setAllowInvalid(true).build()
  );
  sh.setColumnWidths(1, HEADERS.length, 130);
  sh.setColumnWidth(8, 220);
  sh.setColumnWidth(9, 380);
  sh.setColumnWidth(12, 300);
}

function getSheet_() {
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (!sh) throw new Error('Aba "' + SHEET_NAME + '" não encontrada. Rode setup().');
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function clean_(v, max) {
  var s = String(v == null ? '' : v).trim().slice(0, max);
  // evita injeção de fórmula na planilha
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

/** Recebe a demanda do formulário (JSON enviado como text/plain). */
function doPost(e) {
  var lock = LockService.getScriptLock();
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // honeypot: robôs preenchem, humanos não
    if (body.website) return json_({ ok: true });

    var d = {};
    for (var k in MAX) d[k] = clean_(body[k], MAX[k]);
    var required = ['nome', 'contato', 'regional', 'bairro', 'categoria', 'titulo', 'descricao'];
    for (var i = 0; i < required.length; i++) {
      if (!d[required[i]]) return json_({ ok: false, error: 'Preencha todos os campos.' });
    }

    lock.waitLock(10000);
    var sh = getSheet_();
    var row = sh.getLastRow() + 1;
    sh.getRange(row, 1, 1, 12).setValues([[
      new Date(), Utilities.getUuid().slice(0, 8), d.nome, d.contato, d.regional, d.bairro,
      d.categoria, d.titulo, d.descricao, false, 'Recebida', ''
    ]]);
    sh.getRange(row, 10).insertCheckboxes();
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: 'Erro ao registrar a demanda.' });
  } finally {
    try { lock.releaseLock(); } catch (x) {}
  }
}

/** Lista só as demandas marcadas como "Publicar", sem dados pessoais. */
function doGet(e) {
  try {
    var values = getSheet_().getDataRange().getValues();
    var out = [];
    for (var i = 1; i < values.length; i++) {
      var r = values[i];
      if (r[9] !== true) continue;
      out.push({
        id: String(r[1]),
        data: r[0] instanceof Date ? Utilities.formatDate(r[0], 'America/Sao_Paulo', 'yyyy-MM-dd') : String(r[0]),
        regional: String(r[4]),
        bairro: String(r[5]),
        categoria: String(r[6]),
        titulo: String(r[7]),
        descricao: String(r[8]),
        status: String(r[10] || 'Recebida'),
        resposta: String(r[11] || '')
      });
    }
    out.reverse(); // mais recentes primeiro
    return json_({ ok: true, demands: out });
  } catch (err) {
    return json_({ ok: false, error: 'Erro ao listar demandas.' });
  }
}

/** Teste rápido pelo editor: simula um envio e uma leitura. */
function testeLocal() {
  var res = doPost({ postData: { contents: JSON.stringify({
    nome: 'Teste', contato: 'teste@exemplo.com', regional: 'Pampulha', bairro: 'Centro',
    categoria: 'Zeladoria urbana', titulo: 'Teste de demanda', descricao: 'Mensagem de teste.', website: ''
  }) } });
  Logger.log(res.getContent());
  Logger.log(doGet({}).getContent());
}
