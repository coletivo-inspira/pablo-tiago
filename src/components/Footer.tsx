import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { CANDIDATE } from '../data/config';

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
      <p className="max-w-6xl mx-auto px-5 mt-6 text-xs text-white/50">
        © {new Date().getFullYear()} {CANDIDATE.name}. Os dados pessoais enviados no formulário não são publicados.
      </p>
    </footer>
  );
}
