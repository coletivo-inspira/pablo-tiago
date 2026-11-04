import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CANDIDATE } from '../data/config';

const base = import.meta.env.BASE_URL;

const NAV = [
  { label: 'Propostas', href: `${base}#propostas` },
  { label: 'Quem é', href: `${base}#sobre` },
  { label: 'Podcast', href: `${base}#podcast` },
  { label: 'Enviar demanda', href: `${base}#demanda` },
  { label: 'Mural', href: `${base}#mural` },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/80 py-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <div>
          <p className="font-sora font-bold text-white">{CANDIDATE.name}</p>
          <p className="text-sm">{CANDIDATE.role}</p>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href={CANDIDATE.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-sky-300">
            <FaInstagram />
          </a>
          {CANDIDATE.whatsapp && (
            <a
              href={`https://wa.me/${CANDIDATE.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="hover:text-sky-300"
            >
              <FaWhatsapp />
            </a>
          )}
        </div>
      </div>

      <nav
        aria-label="Links do rodapé"
        className="max-w-6xl mx-auto px-5 mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-x-6 gap-y-2 text-sm"
      >
        {NAV.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-sky-300 transition-colors">
            {l.label}
          </a>
        ))}
        <Link to="/links" className="font-semibold text-sky-300 hover:text-white transition-colors">
          Todos os links
        </Link>
      </nav>

      <p className="max-w-6xl mx-auto px-5 mt-6 text-xs text-white/50">
        © {new Date().getFullYear()} {CANDIDATE.name}. Os dados pessoais enviados no formulário não são publicados.
      </p>
    </footer>
  );
}
