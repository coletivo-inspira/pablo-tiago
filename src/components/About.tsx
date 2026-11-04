import { FaInstagram } from 'react-icons/fa';
import { CANDIDATE } from '../data/config';

// TODO: texto de exemplo — substituir por fatos reais da trajetória (cidade natal, veículos, coberturas, formação).
const PARAGRAPHS = [
  `${CANDIDATE.name} é apresentador do SBT TV Alterosa e conduz o podcast De Frente Comigo. Construiu sua trajetória escutando as pessoas. Como repórter, passou anos nas ruas de Belo Horizonte registrando o que os moradores vivem no dia a dia: o buraco que nunca é tapado, a fila que não anda, a praça abandonada e a escola que precisa de atenção.`,
  `Esse olhar de quem apura, pergunta e checa os fatos é o que ele leva para a política. Para ele, informação de qualidade é a base de qualquer decisão pública: sem dados claros, não há como cobrar resultado nem prestar contas à população.`,
  `A experiência de reportagem mostrou uma verdade simples: os problemas de BH quase sempre são conhecidos por quem mora no bairro, mas raramente chegam a quem decide. Por isso, a ideia central do mandato é ser um canal aberto, com portas abertas para a população apontar o que precisa ser resolvido.`,
  `Entre as prioridades estão saúde com filas transparentes, educação infantil com mais vagas, zeladoria com prazo e resposta, mobilidade com calçadas e transporte decentes, e espaços públicos seguros e bem cuidados. Em todas, o compromisso é o mesmo: informar, fiscalizar e acompanhar até o fim.`,
  `Um mandato aberto significa prestar contas de forma simples e regular: o que foi votado, o que foi pedido, o que foi encaminhado e o que foi resolvido. As demandas enviadas pelo portal ficam registradas e, quando selecionadas, aparecem no mural público com status e resposta, para que todos possam acompanhar.`,
  `Belo Horizonte é feita por quem vive nela. A missão de ${CANDIDATE.shortName} é transformar essas histórias em ação e fazer com que a voz de cada regional, do Barreiro a Venda Nova, seja ouvida na Câmara Municipal.`,
];

const PILLARS = [
  { t: 'Informação', d: 'Dados claros e checados para decidir e cobrar.' },
  { t: 'Escuta', d: 'Um canal direto com cada regional da cidade.' },
  { t: 'Prestação de contas', d: 'Mandato aberto, com resultados acompanháveis.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[1fr_1.5fr] gap-12 items-start">
        <div className="md:sticky md:top-24 space-y-5">
          <div className="rounded-3xl bg-gradient-to-br from-navy-900 to-brand-600 text-white p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-sky-300">Biografia</p>
            <h2 className="mt-2 text-3xl font-bold">Quem é {CANDIDATE.name}</h2>
            <p className="mt-2 text-sm text-white/80">{CANDIDATE.role}</p>
            <blockquote className="mt-6 text-lg text-white/90 border-l-4 border-sky-300 pl-4">
              “Uma cidade melhor também se constrói ouvindo quem vive nela.”
            </blockquote>
            <a
              href={CANDIDATE.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/20 transition-colors"
            >
              <FaInstagram /> {CANDIDATE.instagramHandle}
            </a>
          </div>
          <ul className="grid gap-3">
            {PILLARS.map((p) => (
              <li key={p.t} className="rounded-2xl border border-ice-200 bg-ice-50 p-4">
                <strong className="text-navy-900">{p.t}</strong>
                <p className="text-sm text-navy-800/80">{p.d}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 text-navy-800/90 leading-relaxed text-[17px]">
          {PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
