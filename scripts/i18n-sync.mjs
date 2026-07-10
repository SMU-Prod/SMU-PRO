#!/usr/bin/env node
/**
 * ── Tradutor interno da interface (i18n) ──────────────────────────────────────
 *
 * Varre o código-fonte, encontra TODA string de interface embrulhada em t("…")
 * (client) ou getServerT()/t("…") (server) e garante que exista tradução EN/ES.
 * As que faltam são traduzidas automaticamente (OpenAI, mesmo modelo do app) e
 * gravadas em src/lib/i18n/dict.generated.ts (DICT_AUTO). As traduções curadas
 * à mão ficam em dict.ts (DICT) e têm prioridade — este script nunca as toca.
 *
 * Uso:
 *   node scripts/i18n-sync.mjs            → traduz as que faltam e grava (precisa OPENAI_API_KEY)
 *   node scripts/i18n-sync.mjs --check    → só reporta o que falta; sai 1 se faltar (sem chave; p/ CI/commit)
 *   node scripts/i18n-sync.mjs --list     → lista as strings sem tradução e sai 0
 *
 * Fluxo automático: rode após adicionar/alterar textos da interface. O hook de
 * pré-commit (husky) roda `--check` para não deixar string sem tradução escapar.
 * ─────────────────────────────────────────────────────────────────────────────
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SRC = path.join(ROOT, "src");
const DICT_FILE = path.join(SRC, "lib/i18n/dict.ts");
const GEN_FILE = path.join(SRC, "lib/i18n/dict.generated.ts");

const MODE = process.argv.includes("--check")
  ? "check"
  : process.argv.includes("--list")
  ? "list"
  : "fill";

// ── Carrega OPENAI_API_KEY do ambiente ou de .env.local / .env ────────────────
function loadEnvKey() {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  for (const name of [".env.local", ".env"]) {
    const p = path.join(ROOT, name);
    if (!fs.existsSync(p)) continue;
    const m = fs.readFileSync(p, "utf8").match(/^\s*OPENAI_API_KEY\s*=\s*(.+)\s*$/m);
    if (m) return m[1].replace(/^["']|["']$/g, "").trim();
  }
  return null;
}

// ── Extrai as chaves de tradução de um arquivo dict (keys de topo) ────────────
function keysOf(file) {
  const set = new Set();
  if (!fs.existsSync(file)) return set;
  const src = fs.readFileSync(file, "utf8");
  const re = /^\s*("(?:[^"\\]|\\.)*")\s*:\s*\{\s*en:/gm;
  let m;
  while ((m = re.exec(src))) {
    try { set.add(JSON.parse(m[1])); } catch {}
  }
  return set;
}

// ── Reconstrói o mapa {pt:{en,es}} já presente no dict.generated.ts ───────────
function readGenerated() {
  const map = new Map();
  if (!fs.existsSync(GEN_FILE)) return map;
  const src = fs.readFileSync(GEN_FILE, "utf8");
  const re = /^\s*("(?:[^"\\]|\\.)*")\s*:\s*\{\s*en:\s*("(?:[^"\\]|\\.)*")\s*,\s*es:\s*("(?:[^"\\]|\\.)*")\s*\}\s*,?\s*$/gm;
  let m;
  while ((m = re.exec(src))) {
    try {
      map.set(JSON.parse(m[1]), { en: JSON.parse(m[2]), es: JSON.parse(m[3]) });
    } catch {}
  }
  return map;
}

// ── Varre src/ e coleta todas as chaves usadas em t("…") / t('…') ─────────────
function walk(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...walk(p));
    else if (/\.(tsx?|jsx?)$/.test(e.name)) out.push(p);
  }
  return out;
}

function collectUsedKeys() {
  const used = new Set();
  const callRe = /\bt\(\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*[,)]/g;
  for (const f of walk(SRC)) {
    const src = fs.readFileSync(f, "utf8");
    let m;
    while ((m = callRe.exec(src))) {
      const raw = m[1];
      let val;
      try {
        val = raw.startsWith("'")
          ? JSON.parse('"' + raw.slice(1, -1).replace(/\\'/g, "'").replace(/(?<!\\)"/g, '\\"') + '"')
          : JSON.parse(raw);
      } catch { continue; }
      if (val && val.trim()) used.add(val);
    }
  }
  return used;
}

// ── Escreve o dict.generated.ts a partir de um mapa (ordenado, formato estável) ─
function writeGenerated(map) {
  const lines = [...map.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], "pt"))
    .map(([pt, v]) => `  ${JSON.stringify(pt)}: { en: ${JSON.stringify(v.en)}, es: ${JSON.stringify(v.es)} },`);
  const out = `/**
 * Dicionário de tradução da interface GERADO AUTOMATICAMENTE pelo tradutor interno
 * (\`npm run i18n:sync\`). Contém as strings de UI que o tradutor preencheu em EN/ES.
 *
 * NÃO edite à mão sem necessidade: rodar o sync novamente só ADICIONA chaves novas
 * (nunca sobrescreve as existentes), então correções manuais aqui são preservadas.
 * As traduções curadas à mão ficam em \`dict.ts\` (DICT) e têm prioridade sobre estas.
 */
import type { Lang } from "./dict";

export const DICT_AUTO: Record<string, { en: string; es: string }> = {
${lines.join("\n")}
};

export type { Lang };
`;
  fs.writeFileSync(GEN_FILE, out, "utf8");
}

// ── Tradução via OpenAI (mesmo modelo do app: gpt-4.1) ────────────────────────
async function translateBatch(strings, apiKey) {
  const { default: OpenAI } = await import("openai");
  const openai = new OpenAI({ apiKey });
  const sys = `You are a professional UI localizer for an online events-production school (live sound, lighting, video, DJ, effects, production).
Translate each Brazilian-Portuguese interface string to English (en) and Spanish (es).
RULES:
- Keep it concise and natural for a UI button/label/message; match the register and capitalization style of the source.
- PRESERVE exactly: placeholders and symbols like (Ctrl+K), (%), *, (min), R$, PDF, NR, CPF, URL, SEO, YouTube, Asaas, Wallet, IA→AI/IA, numbers, emojis and punctuation (…, :, /, ·, ×).
- Do NOT translate proper nouns/acronyms that have no target equivalent (keep as-is).
- Preserve leading/trailing spaces and line breaks (\\n).
Return ONLY a JSON object: { "items": [ { "pt": <original>, "en": <english>, "es": <spanish> } ... ] } with one entry per input, in the same order.`;
  const resp = await openai.chat.completions.create({
    model: "gpt-4.1",
    messages: [
      { role: "system", content: sys },
      { role: "user", content: JSON.stringify({ strings }) },
    ],
    temperature: 0.2,
    response_format: { type: "json_object" },
  });
  const json = JSON.parse(resp.choices[0]?.message?.content || "{}");
  const items = json.items || [];
  const byPt = new Map(items.map((it) => [it.pt, it]));
  return strings.map((s) => {
    const it = byPt.get(s);
    return { pt: s, en: it?.en ?? s, es: it?.es ?? s };
  });
}

// ── Main ──────────────────────────────────────────────────────────────────────
(async () => {
  const dictKeys = keysOf(DICT_FILE);
  const genMap = readGenerated();
  const covered = new Set([...dictKeys, ...genMap.keys()]);
  const used = collectUsedKeys();
  const missing = [...used].filter((k) => !covered.has(k)).sort((a, b) => a.localeCompare(b, "pt"));

  console.log(`[i18n] chaves usadas: ${used.size} · curadas: ${dictKeys.size} · auto: ${genMap.size} · faltando: ${missing.length}`);

  if (missing.length === 0) {
    console.log("[i18n] ✓ tudo traduzido.");
    process.exit(0);
  }

  if (MODE === "list" || MODE === "check") {
    console.log("\nStrings sem tradução:");
    for (const k of missing) console.log("  • " + JSON.stringify(k.length > 90 ? k.slice(0, 90) + "…" : k));
    if (MODE === "check") {
      console.error(`\n[i18n] ✗ ${missing.length} string(s) sem tradução. Rode \`npm run i18n:sync\` para preencher.`);
      process.exit(1);
    }
    process.exit(0);
  }

  // MODE === "fill"
  const apiKey = loadEnvKey();
  if (!apiKey) {
    console.error("[i18n] OPENAI_API_KEY não encontrada (env, .env.local ou .env). Não é possível traduzir automaticamente.");
    process.exit(1);
  }

  const BATCH = 40;
  let added = 0;
  for (let i = 0; i < missing.length; i += BATCH) {
    const chunk = missing.slice(i, i + BATCH);
    console.log(`[i18n] traduzindo ${i + 1}–${i + chunk.length} de ${missing.length}…`);
    let results;
    try {
      results = await translateBatch(chunk, apiKey);
    } catch (err) {
      console.error("[i18n] erro na tradução do lote:", err?.message || err);
      process.exit(1);
    }
    for (const r of results) {
      genMap.set(r.pt, { en: r.en, es: r.es });
      added++;
    }
    writeGenerated(genMap); // grava incrementalmente (resiliente a interrupção)
  }

  console.log(`[i18n] ✓ ${added} string(s) traduzida(s) e gravada(s) em src/lib/i18n/dict.generated.ts`);
})();
