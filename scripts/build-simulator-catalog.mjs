import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from "node:fs";
import { join, relative, basename, sep } from "node:path";

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, "simuladores");
const PUBLIC_DIR = join(ROOT, "public", "simuladores");
const OUT_TS = join(ROOT, "src", "lib", "simulators", "catalog.ts");

function slugify(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function cleanTitle(raw) {
  let t = (raw ?? "").trim();
  t = t
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
  t = t.replace(/^SMU\s*PRO\s*·\s*/i, "");
  t = t.replace(/\((?:[^)]*\bSMU\b[^)]*|réplica[^)]*)\)\s*$/i, "").trim();
  t = t.replace(/^simulador\s*[—-]\s*/i, "").trim();
  t = t.replace(/\s*[—-]\s*simulador(?:\s+(?:fiel|smu|real))?$/i, "").trim();
  return t || "Simulador";
}
function deriveSegment(top) {
  const base = top.replace(/-(basico|legado)$/i, "");
  return ({ som: "som", luz: "luz", dj: "dj", video: "video", producao: "producao", efeito: "efeito" })[base] ?? "producao";
}
function deriveNivel(top) {
  if (/-basico$/i.test(top)) return "basico";
  if (/-legado$/i.test(top)) return "legado";
  return "avancado";
}
function deriveTipo(name) {
  if (/-real$/i.test(name)) return "real";
  if (/-lab$/i.test(name)) return "lab";
  return "sim";
}
function dedupe(entries) {
  const realBases = new Set(entries.filter((e) => e.tipo === "real").map((e) => e.arquivo.replace(/-real\.html$/i, "")));
  return entries.filter((e) => e.tipo === "real" ? true : !realBases.has(e.arquivo.replace(/\.html$/i, "")));
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".html") && !name.startsWith("_")) out.push(full);
  }
  return out;
}

const files = walk(SRC_DIR);
const entries = [];
for (const full of files) {
  const rel = relative(SRC_DIR, full).split(sep).join("/"); // ex: "som/yamaha-cl5-real.html"
  const top = rel.split("/")[0];
  const name = basename(rel, ".html");
  const html = readFileSync(full, "utf8");
  const m = html.match(/<title>([^<]*)<\/title>/i);
  const titulo = cleanTitle(m ? m[1] : name);
  const segmento = deriveSegment(top);
  entries.push({
    id: slugify(`${segmento}-${name}`),
    titulo,
    segmento,
    nivel: deriveNivel(top),
    tipo: deriveTipo(name),
    arquivo: `/simuladores/${rel}`,
  });
}

const deduped = dedupe(entries).sort(
  (a, b) => a.segmento.localeCompare(b.segmento) || a.titulo.localeCompare(b.titulo),
);

// 1) Gera o catálogo TS
const header = `// GERADO por scripts/build-simulator-catalog.mjs — não editar à mão.\n` +
  `import type { Simulator } from "./types";\n\n` +
  `export const SIMULATORS: Simulator[] = ${JSON.stringify(deduped, null, 2)};\n`;
mkdirSync(join(ROOT, "src", "lib", "simulators"), { recursive: true });
writeFileSync(OUT_TS, header);

// 2) Copia os HTMLs para public/ (servidos estáticos)
rmSync(PUBLIC_DIR, { recursive: true, force: true });
mkdirSync(PUBLIC_DIR, { recursive: true });
cpSync(SRC_DIR, PUBLIC_DIR, { recursive: true });

console.log(`[catalog] ${deduped.length} simuladores (de ${entries.length} arquivos) -> catalog.ts + public/simuladores/`);
