#!/usr/bin/env node
/**
 * publicar-plano-b.mjs
 * Publica o simulador de EMERGÊNCIA NA CABINE na aula
 * "Plano B: o que fazer quando tudo dá errado ao vivo" (Módulo 8 — Profissional na Cabine).
 *
 * Só mexe em ai_animations. NÃO toca em id, module_id, ordem, título nem em outra aula.
 * REGRA 5: nenhum id novo é inventado aqui — a aula já existe na faixa 8a100000-*.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const AULA = "8a100000-0000-4000-9000-000000000803";
const TITULO = "Plano B: o que fazer quando tudo dá errado ao vivo";
const ARQ = path.join(RAIZ, "simuladores", "dj", "_aulas", "plano-b-ao-vivo-real.html");

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 200)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

/* ---------- 1. é a aula certa? ---------- */
const aulas = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo,module_id,ordem`);
if (!aulas.length) throw new Error(`ABORTADO: a aula ${AULA} não existe`);
const aula = aulas[0];
if (aula.titulo.trim() !== TITULO) throw new Error(`ABORTADO: id ${AULA} é "${aula.titulo}", não "${TITULO}"`);
console.log(`aula conferida: "${aula.titulo}" (módulo ${aula.module_id}, ordem ${aula.ordem})`);

/* ---------- 2. o simulador ---------- */
const html = fs.readFileSync(ARQ, "utf8");
const g = (cond, msg) => { if (!cond) throw new Error("guard: " + msg); };
g(/<script>/.test(html) && !/<script[^>]+src=/i.test(html), "não pode ter <script> externo");
g(!/\bfetch\s*\(|XMLHttpRequest|import\s*\(/.test(html), "não pode ter fetch/import em runtime");
g(!/(src|href)\s*=\s*["']https?:/i.test(html), "não pode ter imagem/arquivo externo");
g(/id="stage"/.test(html) && /class="wrap"/.test(html) && /const fit=/.test(html), "falta o #stage/.wrap/fit() do padrão");
g(/function podeIr\(n\)/.test(html), "falta a trava de ordem podeIr()");
for (const id of ["pendrive", "canal", "distorcao", "usb-alheio", "energia", "monitor", "cabo-deck"])
  g(new RegExp(`id:"${id}"`).test(html), `falta a pane "${id}"`);
console.log(`simulador ok: ${(html.length / 1024).toFixed(0)} KB, 7 panes, sem dependência externa`);

/* ---------- 3. grava a animação (custo_usd = 0 sempre: null derruba o player) ---------- */
const roteiro = {
  cenas: [{ modo: "widget", numero: 1, titulo: "Emergência na cabine", duracao: 900 }],
  metadata: { titulo: "Plano B: emergência na cabine", tipo: "simulador", curso: "pleno-dj" }
};
const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?lesson_id=eq.${AULA}`,
    { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
  console.log(`PATCH em ${an.length} animação(ões) desta aula`);
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive", roteiro, urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
  console.log("POST: animação criada");
}

/* ---------- 4. confere o que ficou gravado ---------- */
const fim = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id,status,custo_usd,urls`);
const bytes = JSON.stringify(fim[0].urls).length;
if (fim[0].custo_usd !== 0) throw new Error("ABORTADO: custo_usd não ficou 0 — o player derruba");
if (fim[0].status !== "ready") throw new Error("ABORTADO: status não ficou ready");
if (bytes < 30000) throw new Error("ABORTADO: o html gravado veio pequeno demais (" + bytes + " bytes)");
const dep = await req("GET", `/lessons?id=eq.${AULA}&select=titulo,module_id,ordem`);
if (dep[0].titulo !== aula.titulo || dep[0].module_id !== aula.module_id || dep[0].ordem !== aula.ordem)
  throw new Error("ABORTADO: a aula mudou — não era para mexer nela");
console.log(`OK no ar: ${fim.length} animação, status=${fim[0].status}, custo_usd=${fim[0].custo_usd}, ${(bytes / 1024).toFixed(0)} KB`);
console.log("aula intacta: título, module_id e ordem inalterados.");
