import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CANDIDATE } from '../data/config';
import { bioLinks, socialLinks } from '../data/links';

const ease = [0.16, 1, 0.3, 1] as const;

export default function BioLink() {
  const [photoOk, setPhotoOk] = useState(true);

  return (
    <main className="min-h-screen bg-ice-50 selection:bg-brand-600 selection:text-white flex flex-col items-center py-16 px-6 relative overflow-hidden">
      {/* brilho azul de fundo */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-brand-400 rounded-full blur-3xl opacity-25 pointer-events-none" />

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Perfil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col items-center text-center mb-12"
        >
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 bg-navy-900 text-white grid place-items-center ring-4 ring-white shadow-[0_10px_40px_-10px_rgba(11,42,91,0.45)]">
            {photoOk ? (
              <img
                src={CANDIDATE.photo}
                alt={CANDIDATE.name}
                className="w-full h-full object-cover"
                onError={() => setPhotoOk(false)}
              />
            ) : (
              <span className="font-sora font-extrabold text-3xl">PT</span>
            )}
          </div>

          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-600">Repórter</p>
          <h1 className="mt-1 text-3xl md:text-4xl font-extrabold text-navy-900 uppercase">{CANDIDATE.name}</h1>

          <a
            href={CANDIDATE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-navy-800/70 mt-2 hover:text-brand-600 transition-colors"
          >
            {CANDIDATE.instagramHandle}
          </a>

          <p className="mt-4 text-xs text-navy-800/60 uppercase tracking-[0.25em] font-medium">
            Belo Horizonte
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            {socialLinks.map(({ label, icon: Icon, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-white border border-ice-200 flex items-center justify-center text-navy-800 hover:text-white hover:bg-brand-600 hover:border-brand-600 transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <div className="flex flex-col gap-4">
          {bioLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.url}
                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.08, ease }}
                className="group w-full flex items-center justify-between p-4 rounded-full bg-white text-navy-900 border border-ice-200 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex items-center gap-4 pl-1">
                  <span className="w-11 h-11 rounded-full bg-brand-600 text-white grid place-items-center shrink-0">
                    <Icon size={20} />
                  </span>
                  <span className="flex flex-col items-start">
                    <span className="font-semibold text-sm md:text-base">{item.title}</span>
                    <span className="text-xs mt-0.5 text-navy-800/60">{item.description}</span>
                  </span>
                </div>
                <span className="w-10 h-10 rounded-full flex items-center justify-center mr-1 bg-ice-100 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} strokeWidth={1.75} className="text-brand-600" />
                </span>
              </motion.a>
            );
          })}

          <Link
            to="/"
            className="group block w-full rounded-full p-3 text-center transition-colors hover:bg-white/70"
          >
            <span className="font-medium text-sm text-navy-800 underline decoration-brand-400/60 underline-offset-4 group-hover:text-brand-600">
              Me conheça melhor
            </span>
          </Link>
        </div>

        <div className="mt-16 text-center">
          <div className="w-px h-10 bg-gradient-to-b from-navy-800/40 to-transparent mx-auto mb-5" />
          <p className="text-[10px] text-navy-800/60 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} • {CANDIDATE.name}
          </p>
        </div>
      </div>
    </main>
  );
}
