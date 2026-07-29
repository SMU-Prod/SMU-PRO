#!/usr/bin/env node
/**
 * publicar-microfone.mjs
 * Publica o simulador de MICROFONE NA CABINE na aula ja existente
 *   "Microfone e o DJ de festa: falar sem se enrolar"
 *
 * Escreve APENAS em ai_animations (urls/status/custo_usd).
 * NAO toca em id, module_id, ordem, titulo nem conteudo da aula.
 * REGRA 5: nao cria id novo em lessons/modules — nao ha faixa a consumir aqui.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const AULA = "8a100000-0000-4000-9000-000000000804";
const TITULO = "Microfone e o DJ de festa: falar sem se enrolar";
const ARQ = path.join(RAIZ, "simuladores", "dj", "_aulas", "microfone-dj-real.html");

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 200)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

/* ---------- guardas do arquivo ---------- */
const html = fs.readFileSync(ARQ, "utf8");
if (/<script[^>]+src=/i.test(html)) throw new Error("guard: o HTML tem <script src> externo");
if (/<img[^>]+src="https?:/i.test(html)) throw new Error("guard: o HTML tem imagem externa");
if (/\bfetch\s*\(/.test(html)) throw new Error("guard: o HTML faz fetch");
if (!/OfflineAudioContext/.test(html)) throw new Error("guard: falta a sintese da musica");
if (!/createDelay/.test(html)) throw new Error("guard: falta o laco de realimentacao (microfonia)");
if (!/function podeIr/.test(html)) throw new Error("guard: falta o travamento de passos");
new Function([...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]).pop());

/* ---------- confere que e a aula certa ---------- */
const aula = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo,module_id,ordem`);
if (!aula.length) throw new Error(`ABORTADO: a aula ${AULA} nao existe`);
if (aula[0].titulo.trim() !== TITULO)
  throw new Error(`ABORTADO: id ${AULA} pertence a "${aula[0].titulo}", nao a "${TITULO}"`);
console.log(`aula conferida: "${aula[0].titulo}" (modulo ${aula[0].module_id}, ordem ${aula[0].ordem})`);

/* ---------- grava o simulador ---------- */
const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?lesson_id=eq.${AULA}`,
    { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
  console.log(`~ ai_animations atualizado (${an.length} registro(s))`);
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive",
    roteiro: {
      cenas: [{ modo: "widget", numero: 1, titulo: "Microfone na cabine", duracao: 900 }],
      metadata: { titulo: "Microfone na cabine: falar sem se enrolar" }
    },
    urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
  console.log("+ ai_animations criado");
}

const conf = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=status,custo_usd`);
if (conf.some(x => x.custo_usd === null)) throw new Error("ABORTADO: custo_usd ficou null — derruba o player");
console.log(`OK simulador publicado (${(html.length / 1024).toFixed(1)} KB) · status=${conf.map(x => x.status).join(",")} · custo_usd=${conf.map(x => x.custo_usd).join(",")}`);
