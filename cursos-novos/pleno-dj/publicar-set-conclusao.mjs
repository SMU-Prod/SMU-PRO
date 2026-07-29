#!/usr/bin/env node
/**
 * publicar-set-conclusao.mjs
 * Publica o simulador "Set de conclusão: montar, gravar e ouvir" na aula
 * 8a100000-0000-4000-9000-000000000806 (Módulo 8 — Profissional na Cabine).
 *
 * SÓ MEXE EM ai_animations. Não toca em id, module_id, ordem, título nem em
 * nenhuma outra aula. Confere o título antes de gravar e aborta se não casar.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const AULA = "8a100000-0000-4000-9000-000000000806";
const TITULO_ESPERADO = "Set de conclusão: gravar, ouvir e evoluir";
const ARQ = path.join(RAIZ, "simuladores", "dj", "_aulas", "set-conclusao-real.html");

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 200)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

/* ---- guardas do arquivo ---- */
const html = fs.readFileSync(ARQ, "utf8");
const bloco = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].pop();
if (!bloco) throw new Error("guard: o HTML não tem bloco <script>");
new Function(bloco[1]);                                        // sintaxe
if (/<script[^>]+src=/i.test(html)) throw new Error("guard: script externo");
if (/<img|url\(http|fetch\(/i.test(html)) throw new Error("guard: imagem/fetch externo");
if (!/id="stage"/.test(html) || !/const fit=/.test(html)) throw new Error("guard: falta #stage/fit()");
["function podeIr(", "function camelotOk(", "function analisar(", "function podeGravar(", "function fichaOk("]
  .forEach(f => { if (html.indexOf(f) < 0) throw new Error("guard: motor incompleto, falta " + f); });

/* ---- confere que é a aula certa ---- */
const aula = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo,module_id,ordem`);
if (!aula.length) throw new Error("ABORTADO: aula " + AULA + " não existe");
if (aula[0].titulo.trim() !== TITULO_ESPERADO)
  throw new Error(`ABORTADO: título não casa.\n  no banco: "${aula[0].titulo}"\n  esperado: "${TITULO_ESPERADO}"`);
console.log(`aula conferida: "${aula[0].titulo}" (módulo ${aula[0].module_id}, ordem ${aula[0].ordem})`);

/* ---- ai_animations: PATCH se existe, POST se não ---- */
const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?lesson_id=eq.${AULA}`,
    { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
  console.log(`PATCH em ${an.length} registro(s) de ai_animations`);
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive",
    roteiro: {
      cenas: [{ modo: "widget", numero: 1, titulo: "Set de conclusão: montar, gravar e ouvir", duracao: 900 }],
      metadata: { titulo: "Set de conclusão: montar, gravar e ouvir" }
    },
    urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
  console.log("POST: ai_animations criado");
}

/* ---- confere o que ficou gravado ---- */
const fim = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id,status,custo_usd,urls`);
const rec = fim[0];
if (!rec) throw new Error("pós-checagem: nada gravado");
if (rec.custo_usd !== 0) throw new Error("pós-checagem: custo_usd=" + rec.custo_usd + " (null/≠0 derruba o player)");
if (rec.status !== "ready") throw new Error("pós-checagem: status=" + rec.status);
const gravado = rec.urls?.[0]?.html || "";
if (gravado.length !== html.length) throw new Error("pós-checagem: HTML gravado com tamanho diferente do arquivo");
console.log(`OK — ${(html.length / 1024).toFixed(1)} KB no ar · status=${rec.status} · custo_usd=${rec.custo_usd}`);
