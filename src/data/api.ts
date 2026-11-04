import { APPS_SCRIPT_URL } from './config';

export interface Demand {
  id: string;
  data: string;
  regional: string;
  bairro: string;
  categoria: string;
  titulo: string;
  descricao: string;
  status: string;
  resposta: string;
}

export interface DemandInput {
  nome: string;
  contato: string;
  regional: string;
  bairro: string;
  categoria: string;
  titulo: string;
  descricao: string;
  website: string; // honeypot
}

export const isDemoMode = !APPS_SCRIPT_URL;

const DEMO: Demand[] = [
  {
    id: 'demo-1',
    data: '2026-10-28',
    regional: 'Pampulha',
    bairro: 'Exemplo',
    categoria: 'Zeladoria urbana',
    titulo: 'Buraco na rua principal',
    descricao: 'Demanda de exemplo exibida no modo demonstração.',
    status: 'Em análise',
    resposta: '',
  },
  {
    id: 'demo-2',
    data: '2026-10-30',
    regional: 'Venda Nova',
    bairro: 'Exemplo',
    categoria: 'Saúde',
    titulo: 'Falta de médico no posto',
    descricao: 'Demanda de exemplo exibida no modo demonstração.',
    status: 'Encaminhada',
    resposta: 'Ofício enviado à secretaria responsável.',
  },
];

export async function fetchDemands(): Promise<Demand[]> {
  if (isDemoMode) return DEMO;
  const res = await fetch(`${APPS_SCRIPT_URL}?action=list`);
  if (!res.ok) throw new Error('Falha ao carregar demandas');
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || 'Erro ao carregar demandas');
  return json.demands as Demand[];
}

export async function sendDemand(input: DemandInput): Promise<void> {
  if (isDemoMode) {
    await new Promise((r) => setTimeout(r, 700));
    return;
  }
  // text/plain evita preflight CORS, que o Apps Script não suporta.
  const res = await fetch(APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(input),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(json.error || 'Erro ao enviar');
}
