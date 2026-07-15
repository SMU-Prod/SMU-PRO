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
export const LAYOUT = [
  { mod:1, frag:"aula-01-funcao-tecnico-video",  titulo:"O que faz o técnico de vídeo em eventos ao vivo", sim:null },
  { mod:1, frag:"aula-02-resolucao-proporcao",   titulo:"Resolução, proporção e como encaixar a imagem", sim:"video-basico/aspect-fit.html" },
  { mod:1, frag:"aula-03-framerate-sinal",       titulo:"Frame rate, sincronismo e o sinal de vídeo", sim:null },
  { mod:2, frag:"aula-04-cabos-conectores",      titulo:"Cabos e conectores de vídeo (HDMI, SDI, DP, VGA)", sim:"video-basico/conector-match.html" },
  { mod:2, frag:"aula-05-distancia-fibra-rede",  titulo:"Levando o sinal longe: fibra, HDBaseT e rede", sim:null },
  { mod:2, frag:"aula-06-conversores-scaler",    titulo:"Conversores, distribuidores, splitters e scalers", sim:"video-basico/signal-scaler.html" },
  { mod:2, frag:"aula-07-estacao-pc-video",      titulo:"A estação do técnico (PC/notebook de playback e VJ)", sim:null },
  { mod:2, frag:"aula-08-escolha-da-tela",       titulo:"Escolhendo a tela: TV, telão de LED ou projetor", sim:null },
  { mod:3, frag:"aula-09-telao-led-por-dentro",  titulo:"O telão de LED por dentro: módulo, cabinet e processador", sim:"video-basico/led-wall-build.html" },
  { mod:3, frag:"aula-10-projecao-lumens-throw", titulo:"Projeção: lúmens, distância (throw) e ajuste da imagem", sim:"video-basico/projector-calc.html" },
  { mod:3, frag:"aula-11-mesa-de-corte-basica",  titulo:"A mesa de corte (switcher) básica", sim:"video/switcher-atem.html" },
  { mod:3, frag:"aula-12-cadeia-montagem-checklist", titulo:"Ligando tudo: cadeia do evento, ordem e checklist", sim:null },
];

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
