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
  t = t.replace(/\s*·\s*SMU(\s*PRO)?\s*$/i, "");   // mesmo selo, mas no fim do título
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
/* A réplica fiel SUBSTITUI a versão genérica: existindo `X-real.html`, o `X.html` sai
   do catálogo (senão o portal mostraria o mesmo aparelho duas vezes).
   ⚠️ Isto é a ÚNICA forma de um simulador afetar outro neste projeto — a regra da casa é
   que dá para apagar e incluir sem mexer em nada. Por isso a supressão agora é ANUNCIADA,
   nome por nome: antes só saía um total ("200 de 207") e o arquivo sumia do portal calado.
   O risco concreto: quem criar `m7cl-real.html` amanhã derruba o `m7cl.html` de hoje sem
   perceber — e são 144 arquivos a um nome de distância disso. */
function dedupe(entries) {
  const semExt = (a) => a.replace(/-real\.html$/i, "").replace(/\.html$/i, "");
  const porBase = new Map();
  for (const e of entries) if (e.tipo === "real") porBase.set(semExt(e.arquivo), e.arquivo);
  const suprimidos = [];
  const mantidos = entries.filter((e) => {
    if (e.tipo === "real") return true;
    const dono = porBase.get(semExt(e.arquivo));
    if (dono) { suprimidos.push({ saiu: e.arquivo, por: dono }); return false; }
    return true;
  });
  if (suprimidos.length) {
    console.log(`[catalog] ${suprimidos.length} suprimido(s) por existir a réplica -real (continuam servidos, mas FORA do portal):`);
    for (const s of suprimidos) console.log(`[catalog]    ${s.saiu}  <-  substituído por ${s.por}`);
  }
  return mantidos;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    // "_" = interno (backup, referência, work-in-progress). Vale para pasta e arquivo:
    // sem isso, _backup_prefaithful/ e _ref-*/ vazavam para o portal público.
    if (name.startsWith("_")) continue;
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
// Não publica o que é interno ("_"): backups e as pastas de referência de captura
// (_ref-venu360, _ref-cl-editor, …) somavam ~194 MB indo para o deploy à toa.
// Nenhum simulador carrega esses caminhos em runtime — os engines são inlinados.
cpSync(SRC_DIR, PUBLIC_DIR, {
  recursive: true,
  filter: (src) => !basename(src).startsWith("_"),
});

console.log(`[catalog] ${deduped.length} simuladores (de ${entries.length} arquivos) -> catalog.ts + public/simuladores/`);
