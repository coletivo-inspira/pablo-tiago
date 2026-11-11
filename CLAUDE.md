# CLAUDE.md — Site Pablo Tiago

Guia para futuras conversas. Responda sempre em português do Brasil, com linguagem direta.

## O que é
Site estático de uma página para Pablo Tiago (repórter, apresentador do SBT TV Alterosa e do podcast "De Frente Comigo"), voltado a Belo Horizonte. Objetivo: apresentar quem ele é e suas propostas, mostrar o podcast e receber **demandas da população**, com um mural público das que o gabinete decidir publicar.

Projeto irmão: `nathalia-verri` (mesma stack). A página `/links` foi baseada na página de cupons dela.

## Stack
Vite + React 19 + TypeScript + Tailwind v4 (plugin `@tailwindcss/vite`) + framer-motion + lucide-react + react-icons + react-router-dom. Sem backend próprio.

## Comandos
- `npm install`, `npm run dev`, `npm run build` (roda `tsc -b` e `vite build`), `npm run lint`.
- Antes de dar uma tarefa por concluída, rode `npm run build` e `npm run lint`.
- Dica: em ambiente com a pasta montada, `npm install` pode ser muito lento; copie o projeto (sem `node_modules`) para uma pasta local, instale e compile lá.

## Estrutura
- `src/App.tsx`: ordem das seções (Navbar, Hero, Proposals, About, Podcast, Demands, Footer).
- `src/pages/BioLink.tsx`: página `/links`, a que vai na bio do Instagram.
- `src/main.tsx`: rotas (`/`, `/links`, 404).
- `src/data/config.ts`: nome, cargo, Instagram, foto, WhatsApp, `APPS_SCRIPT_URL`, regionais e categorias.
- `src/data/proposals.ts`: propostas. `src/data/podcast.ts`: episódios (IDs do YouTube). `src/data/links.ts`: cartões e redes da página `/links`. `src/data/api.ts`: chamadas ao Apps Script.
- `src/components/Demands.tsx`: formulário e mural.
- `apps-script/Code.gs` e `apps-script/LEIAME.md`: backend em Google Sheets e passo a passo.
- `public/pablo.jpg`: foto do hero e da página `/links` (hoje quadrada, 1080x1080).

## Deploy
GitHub Pages em `https://coletivo-inspira.github.io/pablo-tiago/` (workflow em `.github/workflows/deploy.yml`, copia `index.html` para `404.html`).
- `vite.config.ts` usa `base: '/'` (domínio próprio, via `public/CNAME`; sem domínio, volte para `'/pablo-tiago/'`) e `main.tsx` usa `import.meta.env.BASE_URL`. **Nunca** escreva caminhos absolutos como `/algo`; use `import.meta.env.BASE_URL`.
- Se for adotado domínio próprio, volte `base` para `'/'`.

## Design
Tema azul: tokens em `src/index.css` (`navy-*`, `brand-*`, `ice-*`, `sky-300`). Fontes Sora (títulos) e Inter (texto). Hero com foto em tela cheia, overlay azul e título em caixa alta, inspirado em gabrielazevedo.com. O hero tem um único destaque: "Conheça as propostas" com seta descendo, sem botão. Mantenha esse estilo ao mexer.

## Portal de demandas
- Formulário envia JSON como `text/plain` ao Web App do Apps Script (evita preflight CORS). O mural lê `?action=list`.
- Planilha, aba "Demandas": o mural só mostra linhas com **Publicar** marcado; nome e contato nunca saem da API.
- Com `APPS_SCRIPT_URL` vazia o site roda em **modo demonstração** (não envia nada e mostra demandas fictícias). Nunca deixe isso em produção.
- Ao alterar o contrato da API, atualize juntos `Code.gs`, `api.ts` e o `LEIAME.md`, e crie nova versão da implantação.

## Cuidados importantes
- Pablo é pessoa real. O texto de biografia, propostas, slogan e citação atuais são **exemplos escritos por Claude**, não fatos. Não invente trajetória nem posições; use apenas o que o usuário fornecer.
- O cargo "Candidato a vereador" em `config.ts` é suposição não confirmada.
- Há dados pessoais no formulário (LGPD): não registre dados reais em arquivos nem logs.
- Não baixe fotos de pessoas da internet para o site; o usuário fornece as imagens.
- O Instagram exige login e não pode ser lido pelas ferramentas.

## Planejamento em andamento
Existe uma auditoria com 55 itens numerados (K, U, F, N, T, S, E) esperando decisão do usuário: https://claude.ai/artifact/9WoUdTtxLKYgVTDtd6xpPw. **Não implemente itens dela sem aprovação explícita**, item a item. Os críticos (K1 a K6) são pré-requisito para divulgar o site.

## Como trabalhar
- Mudanças pequenas e pedidas: faça direto, depois rode build e lint.
- Mudanças grandes ou ambíguas: confirme antes.
- Ao entregar, diga em poucas linhas o que mudou e o que não foi testado.
