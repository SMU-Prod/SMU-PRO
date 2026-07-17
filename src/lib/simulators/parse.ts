import type { Segmento, Simulator } from "./types";

export function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Remove ruído de marca dos <title>: sufixos "(… SMU …)", "(réplica…)",
// prefixos "SMU PRO ·", e "Simulador —"/"— Simulador".
export function cleanTitle(raw: string): string {
  let t = (raw ?? "").trim();
  t = t.replace(/^SMU\s*PRO\s*·\s*/i, "");
  t = t.replace(/\((?:[^)]*\bSMU\b[^)]*|réplica[^)]*)\)\s*$/i, "").trim();
  t = t.replace(/^simulador\s*[—-]\s*/i, "").trim();
  t = t.replace(/\s*[—-]\s*simulador$/i, "").trim();
  return t || "Simulador";
}

export function deriveSegment(topFolder: string): Segmento {
  const base = topFolder.replace(/-(basico|legado)$/i, "");
  const map: Record<string, Segmento> = {
    som: "som", luz: "luz", dj: "dj", video: "video", producao: "producao", efeito: "efeito",
  };
  return map[base] ?? "producao";
}

export function deriveNivel(topFolder: string): "basico" | "avancado" | "legado" {
  if (/-basico$/i.test(topFolder)) return "basico";
  if (/-legado$/i.test(topFolder)) return "legado";
  return "avancado";
}

export function deriveTipo(basename: string): "real" | "lab" | "sim" {
  if (/-real$/i.test(basename)) return "real";
  if (/-lab$/i.test(basename)) return "lab";
  return "sim";
}

// Deduplica pares "x.html" e "x-real.html" do mesmo equipamento: mantém o -real.
export function dedupe(entries: Simulator[]): Simulator[] {
  const realBases = new Set(
    entries
      .filter((e) => e.tipo === "real")
      .map((e) => e.arquivo.replace(/-real\.html$/i, "")),
  );
  return entries.filter((e) => {
    if (e.tipo === "real") return true;
    const base = e.arquivo.replace(/\.html$/i, "");
    return !realBases.has(base);
  });
}
