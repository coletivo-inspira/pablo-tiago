// Conteúdo de exemplo — substitua pelas propostas reais.

export interface Proposal {
  id: string;
  area: string;
  title: string;
  summary: string;
  problem: string;
  solution: string;
}

export const PROPOSALS: Proposal[] = [
  {
    id: 'saude-proxima',
    area: 'Saúde',
    title: 'Saúde mais perto de casa',
    summary: 'Reduzir filas de consultas e exames nos centros de saúde com agenda transparente.',
    problem: 'Moradores esperam semanas sem saber a posição na fila de consultas e exames.',
    solution: 'Painel público com a fila de espera por unidade e fiscalização do cumprimento dos prazos.',
  },
  {
    id: 'escola-integral',
    area: 'Educação',
    title: 'Escola integral e acolhedora',
    summary: 'Ampliar vagas na educação infantil e o tempo integral com qualidade.',
    problem: 'Famílias não encontram vaga em creches perto de casa.',
    solution: 'Mapeamento de vagas por regional e prioridade para as regiões com maior demanda.',
  },
  {
    id: 'bairro-cuidado',
    area: 'Zeladoria urbana',
    title: 'Bairro cuidado',
    summary: 'Resposta rápida para buracos, iluminação, capina e limpeza.',
    problem: 'Pedidos de zeladoria ficam sem retorno e sem prazo.',
    solution: 'Acompanhamento público de cada solicitação, com prazo e status por regional.',
  },
  {
    id: 'mobilidade',
    area: 'Mobilidade e trânsito',
    title: 'Mobilidade para todos',
    summary: 'Transporte coletivo mais pontual, calçadas acessíveis e travessias seguras.',
    problem: 'Calçadas quebradas e pontos de ônibus sem estrutura afetam a rotina.',
    solution: 'Plano de calçadas acessíveis e fiscalização da qualidade do transporte coletivo.',
  },
  {
    id: 'transparencia',
    area: 'Transparência',
    title: 'Mandato aberto',
    summary: 'Prestação de contas periódica e acesso fácil a votos, gastos e agenda.',
    problem: 'A população tem dificuldade de acompanhar o que o vereador faz.',
    solution: 'Relatório mensal publicado e canal direto de demandas, como este portal.',
  },
  {
    id: 'seguranca-urbana',
    area: 'Segurança',
    title: 'Espaços públicos seguros',
    summary: 'Iluminação, praças ocupadas e integração com a guarda municipal.',
    problem: 'Locais escuros e abandonados aumentam a sensação de insegurança.',
    solution: 'Priorizar iluminação e revitalização de praças nos pontos mais críticos.',
  },
];
