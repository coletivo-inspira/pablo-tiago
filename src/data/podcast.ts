export const PODCAST = {
  name: 'De Frente Comigo',
  channelUrl: 'https://www.youtube.com/@podcastdefrentecomigo/videos',
  description:
    'Podcast conduzido por Pablo Tiago, apresentador do SBT TV Alterosa, que combina jornalismo de qualidade com conversas profundas e descontraídas. A cada episódio, recebe artistas, empreendedores, atletas e especialistas para compartilhar histórias e bastidores de suas trajetórias.',
};

export interface Episode {
  id: string; // ID do vídeo no YouTube
  ep: string;
  title: string;
  guest?: string;
}

// Episódios mais recentes. Para atualizar, adicione o ID do vídeo no topo da lista.
export const EPISODES: Episode[] = [
  { id: 'ChQChtMpaaQ', ep: '#74', title: 'Ela me hipnotizou ao vivo', guest: 'Pollyanna Amorim' },
  { id: 'U-8fB2leGAg', ep: '#73', title: 'Não faça consórcio antes de assistir a esse episódio' },
  { id: '05X5xvoQxlg', ep: '#72', title: 'Farmando aura na terceira idade', guest: 'Maria Helena e Tarcísio' },
  { id: 'aJ353Qq63tQ', ep: '#71', title: 'A escola vê o que os pais não veem', guest: 'Bárbara Lopes' },
  { id: '13YpFxxb3aE', ep: '#70', title: 'A porta fechou. O sucesso veio!', guest: 'Lamarques — Chapa Mágica' },
  { id: 'tfj6RyjogMY', ep: '#70', title: 'Seu pet faz isso?', guest: 'Dra. Aline Andrade' },
];
