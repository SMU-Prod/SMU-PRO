#!/usr/bin/env node
/**
 * publicar-battle-mk7.mjs
 * A aula "Technics SL-1200MK7 (2x) + battle mixer" estava usando um simulador
 * GENERICO de 37KB (sem POS, sem AR, sem .deck) que nao lembra um SL-1200.
 * O dono: "olha a diferenca de uma com a outra... vira esta merda generica que
 * nao tem nada a ver com o aparelho original".
 * Aqui trocamos pelo que JA EXISTE e esta aprovado: o technics-sl1200mk7-real
 * embutido DUAS vezes, com um mixer de 2 canais no meio.
 *
 * REGRA 5: nao cria aula nem id novo — so troca a animacao da aula existente.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const AULA = "d1a00000-0000-4000-9000-000000000201";

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 160)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

const html = fs.readFileSync(
  path.join(RAIZ, "simuladores", "dj", "_aulas", "battle-2x-sl1200mk7.html"), "utf8");

/* guardas: se qualquer uma falhar, e melhor nao publicar */
if (!/srcdoc=/.test(html)) throw new Error("guard: a aula nao tem simulador embutido");
if (!/"d1":"sl1200"/.test(html)) throw new Error("guard: o preset do MK7 nao esta na aula");
if (html.length < 500e3) throw new Error("guard: aula pequena demais, algo faltou");

/* REGRA 5: so mexe se a aula for mesmo a do MK7 */
const l = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo`);
if (!l.length) throw new Error(`ABORTA: a aula ${AULA} nao existe`);
if (!/1200MK7/i.test(l[0].titulo)) throw new Error(`ABORTA: id pertence a "${l[0].titulo}"`);

const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?id=eq.${an[0].id}`,
    { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive", urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
}
console.log(`OK "${l[0].titulo}" agora usa o MK7 de verdade (${Math.round(html.length/1024)}KB).`);
await new Promise(r => setTimeout(r, 250));
