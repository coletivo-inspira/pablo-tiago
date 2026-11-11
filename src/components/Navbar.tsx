import { useState } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { CANDIDATE } from '../data/config';

const LINKS = [
  { href: '#propostas', label: 'Propostas' },
  { href: '#sobre', label: 'Quem é' },
  { href: '#alterosa', label: 'Alterosa Agora' },
  { href: '#podcast', label: 'Podcast' },
  { href: '#mural', label: 'Mural' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-ice-200">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="leading-tight">
            <span className="block text-[11px] font-semibold text-brand-600 uppercase tracking-widest">Repórter</span>
            <span className="block font-sora font-extrabold text-lg text-navy-900 uppercase">{CANDIDATE.name}</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-navy-800">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-brand-600 transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#demanda"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 transition-colors"
          >
            <Send size={15} /> Enviar demanda
          </a>
        </nav>

        <button
          className="md:hidden p-2 text-navy-900"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ice-200 bg-white px-5 py-4 flex flex-col gap-4 text-navy-800 font-medium">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#demanda"
            onClick={() => setOpen(false)}
            className="text-center px-4 py-3 rounded-full bg-brand-600 text-white font-semibold"
          >
            Enviar demanda
          </a>
        </div>
      )}
    </header>
  );
}
