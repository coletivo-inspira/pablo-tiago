import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { CANDIDATE } from '../data/config';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-brand-600 text-white min-h-[560px] md:min-h-[680px] flex items-end md:items-center"
    >
      {/* Foto de fundo (public/pablo.jpg). Se não existir, fica só o gradiente. */}
      <img
        src={CANDIDATE.photo}
        alt={CANDIDATE.name}
        className="absolute inset-0 w-full h-full object-cover object-[30%_20%] md:inset-y-0 md:left-[30%] md:w-[70%] md:object-[25%_20%] md:[mask-image:linear-gradient(to_right,transparent,black_55%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent,black_55%)]"
        onError={(e) => (e.currentTarget.style.display = 'none')}
      />
      {/* Overlay azul: mais forte à esquerda, onde fica o texto */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-navy-950/95 via-navy-900/70 to-brand-600/20" />

      <div className="relative w-full max-w-6xl mx-auto px-5 pt-16 pb-28 md:pt-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/25 text-xs font-semibold uppercase tracking-wider">
            {CANDIDATE.role}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold uppercase leading-[1.02]">
            Um repórter que <span className="text-sky-300">escuta</span> e luta por BH
          </h1>
          <p className="mt-5 text-lg text-white/90 max-w-xl">
            Conheça as propostas de {CANDIDATE.name} e envie diretamente o problema do seu bairro. Sua demanda
            chega ao mandato e pode aparecer no mural público.
          </p>
        </motion.div>
      </div>

      {/* Botão único, centralizado, com seta que "rola" para baixo */}
      <motion.a
        href="#propostas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white font-bold uppercase text-sm tracking-widest hover:text-sky-300 transition-colors whitespace-nowrap"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        Conheça as propostas
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex"
        >
          <ArrowDown size={26} />
        </motion.span>
      </motion.a>
    </section>
  );
}
