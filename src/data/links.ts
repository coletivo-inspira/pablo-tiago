import { Send, ListChecks, Mic, MessageSquare, Radio, type LucideIcon } from 'lucide-react';
import { FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { CANDIDATE } from './config';
import { PODCAST } from './podcast';
import { ALTEROSA } from './alterosa';

const base = import.meta.env.BASE_URL;

export interface SocialLink {
  label: string;
  icon: IconType;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { label: 'Instagram', icon: FaInstagram, url: CANDIDATE.instagram },
  { label: 'YouTube', icon: FaYoutube, url: PODCAST.channelUrl },
  ...(CANDIDATE.whatsapp
    ? [{ label: 'WhatsApp', icon: FaWhatsapp, url: `https://wa.me/${CANDIDATE.whatsapp}` }]
    : []),
];

export interface BioLinkItem {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  external?: boolean;
}

// Links da página /links (a que vai na bio do Instagram). Edite a ordem à vontade.
export const bioLinks: BioLinkItem[] = [
  {
    title: 'Enviar minha demanda',
    description: 'Conte o problema do seu bairro',
    url: `${base}#demanda`,
    icon: Send,
  },
  {
    title: 'Conheça as propostas',
    description: 'O plano para Belo Horizonte',
    url: `${base}#propostas`,
    icon: ListChecks,
  },
  {
    title: 'Mural de demandas',
    description: 'Veja o que a população pediu',
    url: `${base}#mural`,
    icon: MessageSquare,
  },
  {
    title: 'Alterosa Agora ao vivo',
    description: 'Assista às transmissões no YouTube',
    url: ALTEROSA.channelUrl,
    icon: Radio,
    external: true,
  },
  {
    title: 'Podcast De Frente Comigo',
    description: 'Assista aos episódios no YouTube',
    url: PODCAST.channelUrl,
    icon: Mic,
    external: true,
  },
];
