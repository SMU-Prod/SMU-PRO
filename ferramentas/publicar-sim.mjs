#!/usr/bin/env node
/**
 * publicar-sim.mjs <lesson_id> <arquivo.html>
 *
 * Publica o HTML de um simulador na aula correspondente (tabela ai_animations).
 * A chave de servico vem de um caminho ESTAVEL do projeto — os scripts antigos
 * liam de pastas de scratchpad de sessao, que sao apagadas e quebravam tudo.
 *
 * Ordem de busca da chave:
 *   1. env SUPABASE_SERVICE_KEY
 *   2. SMU-PRO/.local/svckey        <- padrao (esta no .gitignore)
 *   3. SMU-PRO/.env.local           (SUPABASE_SERVICE_ROLE_KEY=...)
 *
 * Guards: recusa publicar se o sim nao passar nas regras de audio/layout.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";

function chave() {
  if (process.env.SUPABASE_SERVICE_KEY) return process.env.SUPABASE_SERVICE_KEY.trim();
  const f = path.join(RAIZ, ".local", "svckey");
  if (fs.existsSync(f)) return fs.readFileSync(f, "utf8").trim();
  const env = path.join(RAIZ, ".env.local");
  if (fs.existsSync(env)) {
    const m = fs.readFileSync(env, "utf8").match(/SUPABASE_SERVICE_ROLE_KEY\s*=\s*(\S+)/);
    if (m) return m[1].trim();
  }
  throw new Error(
    "chave de servico nao encontrada.\n" +
    "  Coloque-a em SMU-PRO/.local/svckey (ja esta no .gitignore)\n" +
    "  ou exporte SUPABASE_SERVICE_KEY."
  );
}


/* o arquivo pode estar em simuladores/dj/<fabricante>/ — procura recursiva */
function acharSim(nome) {
  const pilha = [SIMS];
  while (pilha.length) {
    const d = pilha.pop();
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) pilha.push(p);
      else if (e.name === nome) return p;
    }
  }
  return null;
}

const GUARDS = [
  [/pos>=len\)\s*\w\.pos-=len/, "loop continuo (a base tem que voltar ao inicio sozinha)"],
  [/bars=16/,                   "render rapido (bars=16)"],
  [/gain\.value=0\.9/,          "fader abre em 0.9 (som ao dar play)"],
  [/function init\(\)\s*\{[\s\S]{0,600}?\bframe\(\)/, "desenha antes de ligar o audio"],
];

async function main() {
  const [, , lessonId, arquivo] = process.argv;
  if (!lessonId || !arquivo) {
    console.error("uso: node publicar-sim.mjs <lesson_id> <arquivo.html>");
    process.exit(2);
  }
  const alvo = path.isAbsolute(arquivo) ? arquivo : (acharSim(arquivo) || path.join(SIMS, arquivo));
  const html = fs.readFileSync(alvo, "utf8");

  for (const [re, nome] of GUARDS)
    if (!re.test(html)) throw new Error(`guard reprovou: ${nome}`);
  if (/data:image\/(jpeg|png);base64/.test(html))
    throw new Error("guard reprovou: foto embutida (a replica deve ser desenhada)");

  const K = chave();
  const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
  const req = async (m, p, b, x = {}) => {
    const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
    const t = await r.text();
    if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 160)}`);
    return t && t[0] === "[" ? JSON.parse(t) : t;
  };

  const an = await req("GET", `/ai_animations?lesson_id=eq.${lessonId}&select=id`);
  if (!an.length) throw new Error(`a aula ${lessonId} nao tem animacao cadastrada`);
  await req("PATCH", `/ai_animations?id=eq.${an[0].id}`,
    { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });

  console.log(`OK ${path.basename(alvo)} (${(html.length / 1024).toFixed(0)}KB) -> aula ...${lessonId.slice(-4)}`);
}

main().catch(e => { console.error("FALHOU:", e.message); process.exit(1); });
