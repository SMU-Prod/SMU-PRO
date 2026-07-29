#!/usr/bin/env node
/**
 * publicar-cache-contrato.mjs
 * Publica o simulador "Fechar um evento: cachê, contrato e MEI" na aula
 * "DJ formalizado: MEI, contrato e cachê por escrito" (Módulo 8 — Profissional na Cabine).
 *
 * REGRA 5: este script NÃO cria nem move id de aula/módulo. Ele só escreve em
 * ai_animations (chaveado por lesson_id). A aula já existe, na faixa 8a100000-*
 * registrada em cursos-novos/_REGISTRO-IDS.mjs como "pleno-dj-exp".
 *
 * custo_usd TEM que ser 0 — null derruba o player.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const AULA = "8a100000-0000-4000-9000-000000000805";
const TITULO_ESPERADO = "DJ formalizado: MEI, contrato e cachê por escrito";
const ARQ = path.join(RAIZ, "simuladores", "dj", "_aulas", "cache-contrato-real.html");

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 200)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

/* ---------- guardas do HTML ---------- */
const html = fs.readFileSync(ARQ, "utf8");
const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).pop();
if (!script) throw new Error("guard: nenhum bloco <script> no simulador");
new Function(script);                                              // sintaxe
if (/<script[^>]+src=/i.test(html)) throw new Error("guard: <script src> externo");
if (/\bfetch\s*\(/.test(html)) throw new Error("guard: fetch no simulador");
if (/<img/i.test(html)) throw new Error("guard: imagem externa");
if (!/function podeIr\(/.test(script)) throw new Error("guard: falta a trava podeIr()");
if (!/#stage/.test(html) || !/const fit=/.test(script)) throw new Error("guard: falta stage/fit");
if (!/R\$ 81\.000/.test(html) || !/86,05/.test(html)) throw new Error("guard: sumiram os números do MEI");

/* ---------- confere que é a aula certa ---------- */
const L = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo,module_id,ordem`);
if (!L.length) throw new Error(`ABORTADO: a aula ${AULA} não existe`);
if (L[0].titulo.trim() !== TITULO_ESPERADO)
  throw new Error(`ABORTADO: id pertence a outra aula -> "${L[0].titulo}"`);
console.log(`aula conferida: "${L[0].titulo}" (módulo ${L[0].module_id}, ordem ${L[0].ordem})`);

/* ---------- grava só a animação; id/module_id/ordem ficam intocados ---------- */
const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?lesson_id=eq.${AULA}`,
    { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
  console.log(`~ ai_animations atualizado (${an.length} registro)`);
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive",
    roteiro: {
      cenas: [{ modo: "widget", numero: 1, titulo: "Fechar um evento: cachê, contrato e MEI", duracao: 900 }],
      metadata: { titulo: "Fechar um evento: cachê, contrato e MEI" }
    },
    urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
  console.log("+ ai_animations criado");
}

const chk = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id,status,custo_usd`);
if (chk[0].custo_usd !== 0) throw new Error("ABORTADO: custo_usd não ficou 0 — o player cai");
console.log(`OK · ${(html.length / 1024).toFixed(1)} KB · status=${chk[0].status} · custo_usd=${chk[0].custo_usd}`);
