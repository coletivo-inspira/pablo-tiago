import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import { ALTEROSA, LIVE_VIDEOS } from '../data/alterosa';

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

// Espelho da seção Podcast: fundo claro e lista de vídeos à esquerda, player à direita.
export default function Alterosa() {
  const [current, setCurrent] = useState(LIVE_VIDEOS[0]);
  const [playing, setPlaying] = useState(false);

  const select = (v: (typeof LIVE_VIDEOS)[number]) => {
    setCurrent(v);
    setPlaying(false);
  };

  return (
    <section id="alterosa" className="py-20 bg-ice-50 text-navy-950">
      <div className="max-w-6xl mx-auto px-5 lg:text-right">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Ao vivo</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy-900">{ALTEROSA.name}</h2>
        <p className="mt-3 text-navy-800/80 max-w-3xl lg:ml-auto">{ALTEROSA.description}</p>

        {current && (
          <div className="mt-10 grid lg:grid-cols-[1fr_1.6fr] gap-6 text-left">
            {/* Lista de transmissões (à esquerda no desktop) */}
            <ul className="grid gap-3 content-start order-2 lg:order-1">
              {LIVE_VIDEOS.map((v) => (
                <li key={v.id}>
                  <button
                    onClick={() => select(v)}
                    className={clsx(
                      'w-full flex gap-3 text-left rounded-xl p-2 border transition-colors',
                      v.id === current.id ? 'bg-white border-brand-600/60' : 'border-ice-200 hover:bg-white',
                    )}
                  >
                    <img src={thumb(v.id)} alt="" loading="lazy" className="w-28 aspect-video object-cover rounded-lg shrink-0" />
                    <span className="min-w-0">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-600">{v.date}</span>
                      <span className="block text-sm font-semibold leading-snug line-clamp-2 text-navy-900">{v.title}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>

            {/* Player principal: só carrega o YouTube após o clique */}
            <div className="order-1 lg:order-2">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
                {playing ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
                    title={`${ALTEROSA.name} ${current.date}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <button
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 w-full h-full"
                    aria-label={`Assistir ${current.title} de ${current.date}`}
                  >
                    <img src={thumb(current.id)} alt="" className="w-full h-full object-cover" />
                    <span className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors" />
                    <span className="absolute inset-0 grid place-items-center">
                      <span className="w-16 h-16 rounded-full bg-brand-600 text-white grid place-items-center group-hover:scale-110 transition-transform">
                        <Play fill="currentColor" size={26} />
                      </span>
                    </span>
                  </button>
                )}
              </div>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-brand-600">Transmissão de {current.date}</p>
              <h3 className="mt-1 text-xl font-bold text-navy-900">{current.title}</h3>
            </div>
          </div>
        )}

        <a
          href={ALTEROSA.channelUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-navy-900/30 text-navy-900 font-semibold text-sm hover:bg-white transition-colors"
        >
          Ver todas as transmissões no YouTube <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
