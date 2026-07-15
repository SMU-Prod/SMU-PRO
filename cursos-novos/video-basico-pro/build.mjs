// Modelo do curso VÍDEO BÁSICO (profissional) — reconstrói o curso EXISTENTE 53070493.
// Exporta COURSE, MODULES, LAYOUT e helpers. Usado por apply-rest.mjs.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { IMAGES, imgUrl } from "./images.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../../simuladores");

export const COURSE = "53070493-ec56-461c-b591-e247645f3b91";

export const MODULES = [
  { n: 1, titulo: "Módulo 1 — Fundamentos do Vídeo e da Função" },
  { n: 2, titulo: "Módulo 2 — Cabos, Conexões e Equipamentos" },
  { n: 3, titulo: "Módulo 3 — Telas, Projeção e a Prática" },
];

// frag = arquivo base (sem .fragment.html); img = slugs a embutir (na ordem dos tokens {{IMG:...}});
// sim = caminho do HTML do simulador relativo a /simuladores (ou null); titulo = título da aula.
// `n` = NÚMERO PERMANENTE da aula — é ele que vira o id (LID(n)), NÃO a posição na
// lista (Regra 5 do CLAUDE.md: id é endereço fixo, não número de fila).
//   - Apagar aula: remova a linha e NÃO renumere as outras (buraco no `n` é ok).
//   - Aula nova: próximo `n` livre; nunca reaproveite `n` usado (id antigo pode ter progresso).
//   - Reordenar: mova a linha; o `n` acompanha a aula e o id não muda.
export const LAYOUT = [
  { n:1,  mod:1, frag:"aula-01-funcao-tecnico-video",  titulo:"O que faz o técnico de vídeo em eventos ao vivo", sim:null },
  { n:2,  mod:1, frag:"aula-02-resolucao-proporcao",   titulo:"Resolução, proporção e como encaixar a imagem", sim:"video-basico/aspect-fit.html" },
  { n:3,  mod:1, frag:"aula-03-framerate-sinal",       titulo:"Frame rate, sincronismo e o sinal de vídeo", sim:null },
  { n:4,  mod:2, frag:"aula-04-cabos-conectores",      titulo:"Cabos e conectores de vídeo (HDMI, SDI, DP, VGA)", sim:"video-basico/conector-match.html" },
  { n:5,  mod:2, frag:"aula-05-distancia-fibra-rede",  titulo:"Levando o sinal longe: fibra, HDBaseT e rede", sim:null },
  { n:6,  mod:2, frag:"aula-06-conversores-scaler",    titulo:"Conversores, distribuidores, splitters e scalers", sim:"video-basico/signal-scaler.html" },
  { n:7,  mod:2, frag:"aula-07-estacao-pc-video",      titulo:"A estação do técnico (PC/notebook de playback e VJ)", sim:null },
  { n:8,  mod:2, frag:"aula-08-escolha-da-tela",       titulo:"Escolhendo a tela: TV, telão de LED ou projetor", sim:null },
  { n:9,  mod:3, frag:"aula-09-telao-led-por-dentro",  titulo:"O telão de LED por dentro: módulo, cabinet e processador", sim:"video-basico/led-wall-build.html" },
  { n:10, mod:3, frag:"aula-10-projecao-lumens-throw", titulo:"Projeção: lúmens, distância (throw) e ajuste da imagem", sim:"video-basico/projector-calc.html" },
  { n:11, mod:3, frag:"aula-11-mesa-de-corte-basica",  titulo:"A mesa de corte (switcher) básica", sim:"video/switcher-atem.html" },
  { n:12, mod:3, frag:"aula-12-cadeia-montagem-checklist", titulo:"Ligando tudo: cadeia do evento, ordem e checklist", sim:null },
];

// Trava barata: `n` ausente/duplicado = duas aulas no mesmo id (uma come a outra).
(() => {
  const vistos = new Set();
  for (const it of LAYOUT) {
    if (!Number.isInteger(it.n) || it.n < 1) throw new Error(`LAYOUT: aula sem \`n\` válido: ${it.frag}`);
    if (vistos.has(it.n)) throw new Error(`LAYOUT: \`n\` duplicado (${it.n}) em ${it.frag} — dois ids iguais.`);
    vistos.add(it.n);
  }
})();

// ---- helpers ----
const imgBySlug = Object.fromEntries(IMAGES.map(i => [i.slug, i]));
export function figure(slug){
  const im = imgBySlug[slug];
  if(!im) return "";
  return `<figure style="margin:18px 0"><img src="${imgUrl(slug)}" alt="${(im.alt||"").replace(/"/g,'&quot;')}" style="width:100%;border-radius:10px;display:block"/>`+
         `<figcaption style="font-size:13px;color:#94a3b8;margin-top:6px;line-height:1.4">${im.caption||""}</figcaption></figure>`;
}
export function readFrag(frag){
  const p = path.join(HERE, frag + ".fragment.html");
  let html = fs.readFileSync(p, "utf8");
  html = html.replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi, (_,slug)=>figure(slug));
  return html;
}
export function readQuiz(frag){
  const p = path.join(HERE, frag + ".quiz.json");
  if(!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
export function readSim(rel){
  if(!rel) return null;
  return fs.readFileSync(path.join(SIM_DIR, rel), "utf8");
}
