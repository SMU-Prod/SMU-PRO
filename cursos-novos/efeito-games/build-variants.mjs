// Gera as variantes do catálogo de efeitos (pleno) inlinando o motor StageFX.
//   node cursos-novos/efeito-games/build-variants.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const ENGINE = fs.readFileSync(path.join(ROOT, "simuladores", "efeito-basico", "_engine.js"), "utf8");
const TPL = fs.readFileSync(path.join(__dir, "pleno-tipos.template.html"), "utf8");
const OUT = path.join(ROOT, "simuladores", "efeito");

export const VARIANTS = [
  { file: "tipos-de-efeito", show: null, title: "Tipos de Efeito Pirotécnico", sub: "Catálogo interativo — escolha, configure e dispare" },
  { file: "atmosfera", show: ["fumaca", "hazer", "lowfog", "co2"], title: "Atmosfera — Fumaça, Hazer e Low Fog", sub: "Máquinas atmosféricas: dê corpo ao ar e revele a luz" },
  { file: "frios-celebracao", show: ["faisca", "co2", "confete", "serpentina"], title: "Efeitos Frios e de Celebração", sub: "Faísca fria, CO₂, confete e serpentina — seguros perto do público" },
  { file: "pirotecnia", show: ["gerb", "shell", "foguete", "chama"], title: "Pirotecnia e Disparo", sub: "Gerb, shell, foguete e lança-chamas — categorias F2 a F4" },
];

export function buildVariant(v) {
  const showLit = v.show ? "[" + v.show.map(s => JSON.stringify(s)).join(",") + "]" : "null";
  const html = TPL
    .replace("__ENGINE__", () => ENGINE)
    .replace("__SHOW__", () => showLit)
    .replaceAll("__TITLE__", () => JSON.stringify(v.title))
    .replaceAll("__SUBTITLE__", () => JSON.stringify(v.sub));
  fs.writeFileSync(path.join(OUT, v.file + ".html"), html);
  return html.length;
}

if (import.meta.url === `file://${process.argv[1].replace(/\\/g, "/")}` || process.argv[1].endsWith("build-variants.mjs")) {
  for (const v of VARIANTS) {
    const len = buildVariant(v);
    console.log("✓", v.file + ".html", (len / 1024).toFixed(0) + "KB", "· efeitos:", v.show ? v.show.join(",") : "todos");
  }
}
