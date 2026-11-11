export const ALTEROSA = {
  name: 'Alterosa Agora',
  channelUrl: 'https://www.youtube.com/@alterosaagoraoficial/streams',
  // TODO: texto curto e genérico; ajustar com detalhes reais do programa (horário, formato) quando o usuário informar.
  description:
    'Pablo Tiago é apresentador do Alterosa Agora, com transmissões ao vivo no canal oficial do programa no YouTube.',
};

export interface LiveVideo {
  id: string; // ID do vídeo no YouTube
  title: string;
  date: string; // data da transmissão (dd/mm/aaaa)
}

// Transmissões mais recentes (nov/2026). Para atualizar, adicione o ID do vídeo no topo da lista
// (o trecho depois de "v=" na URL).
export const LIVE_VIDEOS: LiveVideo[] = [
  { id: 'PazEgvZMPR8', title: 'Alterosa Agora', date: '11/11/2026' },
  { id: 'ZKDvueKRjpI', title: 'Alterosa Agora', date: '10/11/2026' },
  { id: '3p1ZNPOn61I', title: 'Alterosa Agora', date: '09/11/2026' },
  { id: 'wtLA157NXrQ', title: 'Alterosa Agora', date: '06/11/2026' },
  { id: 'jdRf_A18zSI', title: 'Alterosa Agora', date: '05/11/2026' },
  { id: 'erKmMoDGctI', title: 'Alterosa Agora', date: '04/11/2026' },
];
