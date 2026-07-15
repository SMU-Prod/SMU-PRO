// Modelo do curso PRODUÇÃO — BÁSICO (1a9c9747). Reconstrução total:
// o curso tinha 1 módulo com 2 aulas-esqueleto; vira 3 módulos / 12 aulas / 8 simuladores.
// Exporta COURSE, MODULES, LAYOUT e helpers. Usado por apply-rest.mjs.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../../simuladores");

export const COURSE = "1a9c9747-23be-4a9b-b961-53e311eaaa02";

// ⚠️ Namespace 7b1xxxxx é EXCLUSIVO deste curso. Antes de inventar um id de módulo,
// cheque colisão no banco — um PATCH num id de outro curso ROUBA o módulo dele.
export const MODULES = [
  { n: 1, id: "7b100000-0000-4000-9000-0000000000b1", titulo: "Módulo 1 — A função e o evento" },
  { n: 2, id: "7b100000-0000-4000-9000-0000000000b2", titulo: "Módulo 2 — Os documentos e o dinheiro" },
  { n: 3, id: "7b100000-0000-4000-9000-0000000000b3", titulo: "Módulo 3 — Fazer acontecer" },
];

// frag = base do arquivo; titulo = título da aula; sim = HTML relativo a /simuladores ou null.
export const LAYOUT = [
  // ---- M1 — A função e o evento
  { mod:1, frag:"aula-01-o-que-faz-o-produtor", titulo:"O que faz o produtor: do escritório ao palco", dur:18, sim:"producao-basico/mapa-da-funcao.html" },
  { mod:1, frag:"aula-02-tipos-de-evento",      titulo:"Cada evento pede uma produção diferente",     dur:18, sim:"producao-basico/tipo-de-evento.html" },
  { mod:1, frag:"aula-03-quem-e-quem",          titulo:"Quem é quem no evento e para quem eu falo",   dur:18, sim:"producao-basico/organograma-evento.html" },
  { mod:1, frag:"aula-04-dia-do-evento",        titulo:"O dia do evento: do load-in ao load-out",     dur:20, sim:"producao-basico/dia-do-evento.html" },

  // ---- M2 — Os documentos e o dinheiro
  { mod:2, frag:"aula-05-primeira-conversa",    titulo:"A primeira conversa com o cliente",           dur:18, sim:"producao-basico/primeira-conversa.html" },
  { mod:2, frag:"aula-06-rider-tecnico",        titulo:"Rider técnico: o que o artista pede",         dur:20, sim:"producao-basico/rider-leitura.html" },
  { mod:2, frag:"aula-07-camarim-e-transporte", titulo:"Camarim e transporte: o resto do pedido",     dur:18, sim:null },
  { mod:2, frag:"aula-08-orcamento",            titulo:"Orçamento: o que custa um evento",            dur:22, sim:"producao-basico/orcamento-basico.html" },

  // ---- M3 — Fazer acontecer
  { mod:3, frag:"aula-09-cronograma",           titulo:"Cronograma: encaixar tudo no tempo",          dur:20, sim:"producao-basico/cronograma-basico.html" },
  { mod:3, frag:"aula-10-logistica",            titulo:"Logística: transporte, carga e equipe",       dur:18, sim:null },
  { mod:3, frag:"aula-11-comunicacao-documentacao", titulo:"Comunicação e documentação: rádio, grupo, e-mail e nuvem", dur:20, sim:null },
  { mod:3, frag:"aula-12-imprevistos-pos-evento",   titulo:"Imprevistos, desmontagem e pós-evento",   dur:20, sim:null },
];

// ---- helpers ----
export function readFrag(frag){
  return fs.readFileSync(path.join(HERE, frag + ".fragment.html"), "utf8");
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
