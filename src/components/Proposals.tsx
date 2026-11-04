import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';
import { PROPOSALS } from '../data/proposals';

export default function Proposals() {
  const areas = useMemo(() => ['Todas', ...Array.from(new Set(PROPOSALS.map((p) => p.area)))], []);
  const [area, setArea] = useState('Todas');
  const [openId, setOpenId] = useState<string | null>(null);

  const list = PROPOSALS.filter((p) => area === 'Todas' || p.area === area);

  return (
    <section id="propostas" className="py-20 bg-ice-50">
      <div className="max-w-6xl mx-auto px-5">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Plano de ação</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy-900">Propostas para Belo Horizonte</h2>
        <p className="mt-3 text-navy-800/80 max-w-2xl">
          Entenda o problema que queremos enfrentar e como cada proposta pretende funcionar.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {areas.map((a) => (
            <button
              key={a}
              onClick={() => setArea(a)}
              className={clsx(
                'px-4 py-2 rounded-full text-sm font-medium border transition-colors',
                a === area
                  ? 'bg-brand-600 border-brand-600 text-white'
                  : 'bg-white border-ice-200 text-navy-800 hover:border-brand-400',
              )}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p, i) => {
            const open = openId === p.id;
            return (
              <article key={p.id} className="bg-white rounded-2xl border border-ice-200 p-6 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-brand-600 uppercase tracking-wider">{p.area}</span>
                  <span className="text-navy-800/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-navy-900">{p.title}</h3>
                <p className="mt-2 text-sm text-navy-800/80">{p.summary}</p>

                {open && (
                  <div className="mt-4 space-y-3 text-sm border-t border-ice-200 pt-4">
                    <div>
                      <strong className="text-navy-900">O problema</strong>
                      <p className="text-navy-800/80">{p.problem}</p>
                    </div>
                    <div>
                      <strong className="text-navy-900">Como funciona</strong>
                      <p className="text-navy-800/80">{p.solution}</p>
                    </div>
                  </div>
                )}

                <button
                  onClick={() => setOpenId(open ? null : p.id)}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-500"
                >
                  {open ? 'Fechar' : 'Conheça a proposta'}
                  <ChevronDown size={16} className={clsx('transition-transform', open && 'rotate-180')} />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
