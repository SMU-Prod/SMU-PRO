// Varredura de SINTAXE dos simuladores: extrai cada <script> inline e valida a
// sintaxe com new Function (sem executar). Pega JS quebrado — a causa mais comum
// de um simulador que "abre mas não funciona". Não pega erros de runtime.
import { readdirSync, statSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, "simuladores");

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
const broken = [];
let scriptsChecked = 0;

for (const full of files) {
  const rel = relative(SRC_DIR, full).split(sep).join("/");
  const html = readFileSync(full, "utf8");
  // Captura scripts inline (ignora <script src=...> e type module/json).
  const re = /<script(?![^>]*\bsrc=)(?![^>]*type=["'](?:module|application\/json|application\/ld\+json)["'])[^>]*>([\s\S]*?)<\/script>/gi;
  let m;
  const errors = [];
  while ((m = re.exec(html))) {
    const code = m[1];
    if (!code.trim()) continue;
    scriptsChecked++;
    try {
      // Valida sintaxe sem executar. Script clássico → corpo de função serve.
      new Function(code);
    } catch (e) {
      if (e instanceof SyntaxError) errors.push(e.message);
    }
  }
  if (errors.length) broken.push({ rel, errors });
}

console.log(`[audit-syntax] ${files.length} simuladores, ${scriptsChecked} scripts inline verificados.`);
console.log(`[audit-syntax] ${broken.length} com ERRO de sintaxe.`);
for (const b of broken) console.log(`  ✗ ${b.rel} — ${b.errors[0]}`);

// Grava relatório
const out = [
  `# Auditoria de sintaxe dos simuladores`,
  ``,
  `${files.length} simuladores · ${scriptsChecked} scripts inline verificados · ${broken.length} com erro de sintaxe.`,
  ``,
  ...(broken.length
    ? broken.map((b) => `- \`${b.rel}\` — ${b.errors.map((e) => e).join("; ")}`)
    : ["Nenhum erro de sintaxe encontrado."]),
  ``,
].join("\n");
writeFileSync(join(ROOT, "audit-syntax-report.md"), out);
