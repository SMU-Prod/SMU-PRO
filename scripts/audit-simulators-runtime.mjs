// Varredura de RUNTIME dos simuladores com Playwright (Chromium headless).
// Abre cada HTML, espera carregar, e coleta: exceções JS não tratadas (pageerror),
// console.error, e se o body renderizou conteúdo. Gera relatório dos suspeitos.
import { chromium } from "playwright";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, "simuladores");
const CONCURRENCY = 6;
const NAV_TIMEOUT = 15000;
const SETTLE_MS = 1200; // deixa scripts de init rodarem

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
const browser = await chromium.launch();

async function audit(full) {
  const rel = relative(SRC_DIR, full).split(sep).join("/");
  const page = await browser.newContext().then((c) => c.newPage());
  const pageErrors = [];
  const consoleErrors = [];
  page.on("pageerror", (e) => pageErrors.push(String(e.message || e)));
  page.on("console", (msg) => { if (msg.type() === "error") consoleErrors.push(msg.text()); });

  let renderChars = 0;
  let navOk = true;
  try {
    await page.goto(pathToFileURL(full).href, { waitUntil: "load", timeout: NAV_TIMEOUT });
    await page.waitForTimeout(SETTLE_MS);
    renderChars = await page.evaluate(() => (document.body?.innerText || "").trim().length);
  } catch (e) {
    navOk = false;
    pageErrors.push("NAV: " + String(e.message || e));
  }
  await page.context().close();

  const status = !navOk || pageErrors.length ? "QUEBRA"
    : renderChars < 10 ? "VAZIO"
    : consoleErrors.length ? "AVISO" : "OK";
  return { rel, status, pageErrors, consoleErrors, renderChars };
}

// Fila com concorrência limitada
const results = [];
let idx = 0;
async function worker() {
  while (idx < files.length) {
    const i = idx++;
    const r = await audit(files[i]);
    results.push(r);
    if (r.status !== "OK") console.log(`  ${r.status}  ${r.rel}${r.pageErrors[0] ? " — " + r.pageErrors[0].slice(0, 90) : ""}`);
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
await browser.close();

results.sort((a, b) => a.rel.localeCompare(b.rel));
const by = (s) => results.filter((r) => r.status === s);
const quebra = by("QUEBRA"), vazio = by("VAZIO"), aviso = by("AVISO"), ok = by("OK");

console.log(`\n[audit-runtime] ${files.length} simuladores:`);
console.log(`  OK: ${ok.length} · AVISO(console.error): ${aviso.length} · VAZIO: ${vazio.length} · QUEBRA: ${quebra.length}`);

const md = [
  `# Auditoria de runtime dos simuladores`,
  ``,
  `${files.length} simuladores abertos em Chromium headless.`,
  ``,
  `- **OK:** ${ok.length}`,
  `- **AVISO** (renderiza, mas emite console.error): ${aviso.length}`,
  `- **VAZIO** (carrega sem erro mas quase sem conteúdo): ${vazio.length}`,
  `- **QUEBRA** (exceção JS não tratada ou falha de navegação): ${quebra.length}`,
  ``,
  `## QUEBRA`,
  ...(quebra.length ? quebra.map((r) => `- \`${r.rel}\` — ${r.pageErrors[0] ?? "?"}`) : ["_nenhum_"]),
  ``,
  `## VAZIO`,
  ...(vazio.length ? vazio.map((r) => `- \`${r.rel}\` (${r.renderChars} chars)`) : ["_nenhum_"]),
  ``,
  `## AVISO (console.error)`,
  ...(aviso.length ? aviso.map((r) => `- \`${r.rel}\` — ${r.consoleErrors[0]?.slice(0, 120) ?? "?"}`) : ["_nenhum_"]),
  ``,
].join("\n");
writeFileSync(join(ROOT, "audit-runtime-report.md"), md);
console.log(`\nRelatório: audit-runtime-report.md`);
