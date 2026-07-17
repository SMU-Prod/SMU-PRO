import type { Segmento } from "./types";

export const SEGMENT_ORDER: Segmento[] = ["som", "luz", "dj", "video", "producao", "efeito"];

export const SEGMENT_META: Record<Segmento, { label: string; emoji: string; gradient: string }> = {
  som:      { label: "Sonorização", emoji: "🎚", gradient: "from-amber-500/30 to-amber-700/10" },
  luz:      { label: "Iluminação",  emoji: "💡", gradient: "from-blue-500/30 to-indigo-700/10" },
  dj:       { label: "DJ",          emoji: "🎛", gradient: "from-fuchsia-500/30 to-purple-700/10" },
  video:    { label: "Vídeo",       emoji: "📺", gradient: "from-cyan-500/30 to-teal-700/10" },
  producao: { label: "Produção",    emoji: "📋", gradient: "from-emerald-500/30 to-green-700/10" },
  efeito:   { label: "Efeitos",     emoji: "🎆", gradient: "from-red-500/30 to-orange-700/10" },
};
