# Configurar a planilha e o Apps Script

1. Crie uma planilha no Google Sheets (ex.: "Demandas - Pablo Tiago").
2. **Extensões > Apps Script**. Apague o conteúdo e cole `Code.gs`. Salve.
3. Selecione a função `setup` e clique em **Executar** (autorize quando pedir). Isso cria a aba "Demandas", o cabeçalho, a caixa **Publicar** e o menu de **Status**.
4. (Opcional) Rode `testeLocal` e confira se surgiu uma linha de teste e se o log mostra `{"ok":true}`. Apague a linha depois.
5. **Implantar > Nova implantação > Tipo: App da Web**
   - Executar como: **Eu**
   - Quem tem acesso: **Qualquer pessoa**
6. Copie a URL terminada em `/exec` e cole em `src/data/config.ts`, em `APPS_SCRIPT_URL`.
7. `npm run build` e publique.

## Como o vereador usa
- Cada demanda chega como uma linha nova.
- Marque a caixa **Publicar** (coluna J) para a demanda aparecer no mural do site. Sem marcar, ela fica privada.
- Atualize **Status** (coluna K) e **Resposta** (coluna L) — aparecem no mural.
- Nome e contato (colunas C e D) nunca são enviados ao site.

## Atenção
- Ao alterar `Code.gs`, faça **Implantar > Gerenciar implantações > Editar > Nova versão**; a URL continua a mesma.
- Moderação: o texto publicado vem do cidadão. Revise antes de marcar **Publicar**.
