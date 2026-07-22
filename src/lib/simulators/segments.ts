import type { Segmento, SegmentoEscola, SegmentoEventos } from "./types";

/** Ordem das prateleiras no portal de EVENTOS (www.smuproducoes.com). */
export const SEGMENT_ORDER: SegmentoEventos[] = ["som", "luz", "dj", "video", "producao", "efeito"];

/**
 * Ordem das prateleiras na ESCOLA PROFISSIONALIZANTE (aula.smuproducoes.com).
 * Regra do dono: as duas escolas NÃO se misturam — cada portal só vê os seus segmentos.
 */
export const AULA_SEGMENT_ORDER: SegmentoEscola[] = [
  "marcenaria",
  "eletrica",
  "hidraulica",
  "construcao",
  "energia-solar",
  "eletrodomesticos",
  "celular",
  "informatica",
  "cftv",
  "alarmes",
  "mecanica",
  "carros-eletricos",
  "bicicletas",
  "tratores",
  "manicure",
  "renda",
  "ferramentas",
];

/** Segmentos visíveis no portal detectado pelo host (aula = escola; main = eventos). */
export function segmentsForPortal(portal: "aula" | "main"): Segmento[] {
  return portal === "aula" ? AULA_SEGMENT_ORDER : SEGMENT_ORDER;
}

export const SEGMENT_META: Record<Segmento, { label: string; emoji: string; gradient: string }> = {
  // Eventos (www)
  som:      { label: "Sonorização", emoji: "🎚", gradient: "from-amber-500/30 to-amber-700/10" },
  luz:      { label: "Iluminação",  emoji: "💡", gradient: "from-blue-500/30 to-indigo-700/10" },
  dj:       { label: "DJ",          emoji: "🎛", gradient: "from-fuchsia-500/30 to-purple-700/10" },
  video:    { label: "Vídeo",       emoji: "📺", gradient: "from-cyan-500/30 to-teal-700/10" },
  producao: { label: "Produção",    emoji: "📋", gradient: "from-emerald-500/30 to-green-700/10" },
  efeito:   { label: "Efeitos",     emoji: "🎆", gradient: "from-red-500/30 to-orange-700/10" },
  // Escola profissionalizante (aula)
  marcenaria:         { label: "Marcenaria",        emoji: "🪚", gradient: "from-amber-500/30 to-amber-700/10" },
  eletrica:           { label: "Elétrica",          emoji: "⚡", gradient: "from-yellow-500/30 to-amber-700/10" },
  hidraulica:         { label: "Hidráulica",        emoji: "🚿", gradient: "from-blue-500/30 to-indigo-700/10" },
  construcao:         { label: "Construção Civil",  emoji: "🧱", gradient: "from-orange-500/30 to-red-700/10" },
  "energia-solar":    { label: "Energia Solar",     emoji: "☀️", gradient: "from-yellow-500/30 to-orange-700/10" },
  eletrodomesticos:   { label: "Eletrodomésticos",  emoji: "🔌", gradient: "from-emerald-500/30 to-green-700/10" },
  celular:            { label: "Celulares",         emoji: "📱", gradient: "from-cyan-500/30 to-teal-700/10" },
  informatica:        { label: "Informática",       emoji: "💻", gradient: "from-blue-500/30 to-cyan-700/10" },
  cftv:               { label: "CFTV",              emoji: "📷", gradient: "from-slate-500/30 to-gray-700/10" },
  alarmes:            { label: "Alarmes",           emoji: "🚨", gradient: "from-red-500/30 to-orange-700/10" },
  mecanica:           { label: "Mecânica",          emoji: "🔧", gradient: "from-zinc-500/30 to-gray-700/10" },
  "carros-eletricos": { label: "Carros Elétricos",  emoji: "🔋", gradient: "from-green-500/30 to-emerald-700/10" },
  bicicletas:         { label: "Bicicletas",        emoji: "🚲", gradient: "from-lime-500/30 to-green-700/10" },
  tratores:           { label: "Tratores",          emoji: "🚜", gradient: "from-green-500/30 to-yellow-700/10" },
  manicure:           { label: "Manicure",          emoji: "💅", gradient: "from-pink-500/30 to-rose-700/10" },
  renda:              { label: "Renda em Casa",     emoji: "🏠", gradient: "from-purple-500/30 to-fuchsia-700/10" },
  ferramentas:        { label: "Ferramentas",       emoji: "🧰", gradient: "from-stone-500/30 to-gray-700/10" },
};
