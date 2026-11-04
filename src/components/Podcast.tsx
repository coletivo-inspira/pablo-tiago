import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import clsx from 'clsx';
import { EPISODES, PODCAST } from '../data/podcast';

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export default function Podcast() {
  const [current, setCurrent] = useState(EPISODES[0]);
  const [playing, setPlaying] = useState(false);

  const select = (ep: (typeof EPISODES)[number]) => {
    setCurrent(ep);
    setPlaying(false);
  };

  return (
    <section id="podcast" className="py-20 bg-navy-950 text-white">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Podcast</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold">{PODCAST.name}</h2>
        <p className="mt-3 text-white/80 max-w-3xl">{PODCAST.description}</p>

        <div className="mt-10 grid lg:grid-cols-[1.6fr_1fr] gap-6">
          {/* Player principal: só carrega o YouTube após o clique */}
          <div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
              {playing ? (
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${current.id}?autoplay=1&rel=0`}
                  title={`${PODCAST.name} ${current.ep}`}
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <button
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 w-full h-full"
                  aria-label={`Assistir ${current.title}`}
                >
                  <img src={thumb(current.id)} alt="" className="w-full h-full object-cover" />
                  <span className="absolute inset-0 bg-navy-950/30 group-hover:bg-navy-950/10 transition-colors" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="w-16 h-16 rounded-full bg-brand-600 grid place-items-center group-hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={26} />
                    </span>
                  </span>
                </button>
              )}
            </div>
            <p className="mt-4 text-xs font-bold uppercase tracking-widest text-sky-300">
              Episódio {current.ep}
              {current.guest ? ` · ${current.guest}` : ''}
            </p>
            <h3 className="mt-1 text-xl font-bold">{current.title}</h3>
          </div>

          {/* Lista de episódios */}
          <ul className="grid gap-3 content-start">
            {EPISODES.map((ep) => (
              <li key={ep.id}>
                <button
                  onClick={() => select(ep)}
                  className={clsx(
                    'w-full flex gap-3 text-left rounded-xl p-2 border transition-colors',
                    ep.id === current.id ? 'bg-white/10 border-sky-300/60' : 'border-white/10 hover:bg-white/5',
                  )}
                >
                  <img src={thumb(ep.id)} alt="" loading="lazy" className="w-28 aspect-video object-cover rounded-lg shrink-0" />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-bold uppercase tracking-wider text-sky-300">{ep.ep}</span>
                    <span className="block text-sm font-semibold leading-snug line-clamp-2">{ep.title}</span>
                    {ep.guest && <span className="block text-xs text-white/60 truncate">{ep.guest}</span>}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={PODCAST.channelUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 font-semibold text-sm hover:bg-white/10 transition-colors"
        >
          Ver todos os episódios no YouTube <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}
