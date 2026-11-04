import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2, MapPin, Send } from 'lucide-react';
import { CATEGORIAS, REGIONAIS } from '../data/config';
import { fetchDemands, sendDemand, isDemoMode, type Demand } from '../data/api';

const EMPTY = {
  nome: '',
  contato: '',
  regional: '',
  bairro: '',
  categoria: '',
  titulo: '',
  descricao: '',
  website: '',
};

const field =
  'w-full rounded-xl border border-ice-200 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-navy-800/40 focus:outline-none focus:ring-2 focus:ring-brand-400';

function formatDate(s: string) {
  const d = new Date(s);
  return isNaN(d.getTime()) ? s : d.toLocaleDateString('pt-BR');
}

export default function Demands() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [error, setError] = useState('');
  const [demands, setDemands] = useState<Demand[] | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    fetchDemands()
      .then(setDemands)
      .catch(() => setLoadError(true));
  }, []);

  const set = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      await sendDemand(form);
      setStatus('ok');
      setForm(EMPTY);
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Não foi possível enviar. Tente novamente.');
    }
  }

  return (
    <>
      <section id="demanda" className="py-20 bg-gradient-to-br from-navy-950 to-navy-800 text-white">
        <div className="max-w-3xl mx-auto px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Participação popular</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Sua voz sobre BH</h2>
          <p className="mt-3 text-white/80">
            Tem algum problema no seu bairro? Envie sua demanda. Ela chega direto à equipe do mandato e, se
            aprovada, pode aparecer no mural público (sem seus dados pessoais).
          </p>

          {status === 'ok' ? (
            <div className="mt-8 rounded-2xl bg-white text-navy-900 p-8 text-center">
              <CheckCircle2 className="mx-auto text-brand-600" size={48} />
              <h3 className="mt-4 text-xl font-bold">Demanda enviada!</h3>
              <p className="mt-2 text-sm text-navy-800/80">Obrigado por participar. Nossa equipe vai analisar.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold"
              >
                Enviar outra
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="mt-8 rounded-2xl bg-white text-navy-900 p-6 md:p-8 grid gap-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input className={field} placeholder="Seu nome" required value={form.nome} onChange={set('nome')} />
                <input
                  className={field}
                  placeholder="WhatsApp ou e-mail (não será publicado)"
                  required
                  value={form.contato}
                  onChange={set('contato')}
                />
                <select className={field} required value={form.regional} onChange={set('regional')}>
                  <option value="">Regional</option>
                  {REGIONAIS.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
                <input className={field} placeholder="Bairro" required value={form.bairro} onChange={set('bairro')} />
                <select className={field} required value={form.categoria} onChange={set('categoria')}>
                  <option value="">Categoria</option>
                  {CATEGORIAS.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <input
                  className={field}
                  placeholder="Título da demanda"
                  required
                  maxLength={120}
                  value={form.titulo}
                  onChange={set('titulo')}
                />
              </div>
              <textarea
                className={field}
                rows={5}
                placeholder="Descreva o problema e o local (rua, referência...)"
                required
                maxLength={2000}
                value={form.descricao}
                onChange={set('descricao')}
              />
              {/* honeypot anti-spam */}
              <input
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="hidden"
                value={form.website}
                onChange={set('website')}
              />
              {status === 'error' && <p className="text-sm text-red-600">{error}</p>}
              {isDemoMode && (
                <p className="text-xs text-navy-800/60">Modo demonstração: configure APPS_SCRIPT_URL para enviar de verdade.</p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-600 text-white font-semibold hover:bg-brand-500 disabled:opacity-60 transition-colors"
              >
                {status === 'sending' ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                {status === 'sending' ? 'Enviando...' : 'Enviar minha demanda'}
              </button>
            </form>
          )}
        </div>
      </section>

      <section id="mural" className="py-20 bg-ice-50">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600">Mural público</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-navy-900">Demandas da população</h2>
          <p className="mt-3 text-navy-800/80 max-w-2xl">Solicitações selecionadas pelo mandato e acompanhadas aqui.</p>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {demands === null && !loadError && <p className="text-navy-800/70">Carregando...</p>}
            {loadError && <p className="text-navy-800/70">Não foi possível carregar o mural agora.</p>}
            {demands?.length === 0 && <p className="text-navy-800/70">Nenhuma demanda publicada ainda.</p>}
            {demands?.map((d) => (
              <article key={d.id} className="bg-white rounded-2xl border border-ice-200 p-6 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-brand-600 uppercase tracking-wider">{d.categoria}</span>
                  <span className="px-2.5 py-1 rounded-full bg-ice-100 text-navy-800 font-semibold">{d.status || 'Recebida'}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-navy-900">{d.titulo}</h3>
                <p className="mt-2 text-sm text-navy-800/80">{d.descricao}</p>
                {d.resposta && (
                  <p className="mt-3 text-sm rounded-lg bg-ice-100 p-3 text-navy-900">
                    <strong>Resposta:</strong> {d.resposta}
                  </p>
                )}
                <p className="mt-4 flex items-center gap-1.5 text-xs text-navy-800/60">
                  <MapPin size={14} /> {d.bairro} · {d.regional} · {formatDate(d.data)}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
