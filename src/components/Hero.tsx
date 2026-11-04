import { ArrowDown, Send, ShieldCheck, Eye, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { CANDIDATE } from '../data/config';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-brand-600 text-white">
      <div className="absolute -right-32 -top-32 w-[28rem] h-[28rem] rounded-full bg-sky-300/20 blur-3xl" />
      <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-28 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-wider">
            {CANDIDATE.role}
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Uma BH que <span className="text-sky-300">escuta</span> e resolve.
          </h1>
          <p className="mt-5 text-lg text-white/85 max-w-xl">
            Conheça as propostas de {CANDIDATE.name} e envie diretamente o problema do seu bairro. Sua demanda
            chega ao mandato e pode aparecer no mural público.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#propostas"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-navy-900 font-semibold hover:bg-ice-100 transition-colors"
            >
              Conheça as propostas <ArrowDown size={18} />
            </a>
            <a
              href="#demanda"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-sky-300 text-navy-950 font-semibold hover:bg-sky-200 transition-colors"
            >
              <Send size={18} /> Enviar minha demanda
            </a>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <li className="flex items-center gap-2"><ShieldCheck size={16} /> Compromisso</li>
            <li className="flex items-center gap-2"><Eye size={16} /> Transparência</li>
            <li className="flex items-center gap-2"><Users size={16} /> Participação popular</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="justify-self-center"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-3xl bg-white/10 border border-white/20 overflow-hidden grid place-items-center text-center">
            <div className="p-6">
              <div className="text-6xl font-sora font-extrabold">{CANDIDATE.number}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-white/70">{CANDIDATE.party}</div>
            </div>
            <img
              src={CANDIDATE.photo}
              alt={CANDIDATE.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
