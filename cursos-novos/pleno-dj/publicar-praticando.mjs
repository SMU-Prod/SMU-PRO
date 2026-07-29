#!/usr/bin/env node
/**
 * publicar-praticando.mjs
 * Cria o modulo "PRATICANDO COM SIMULADOR" e publica a aula de montagem de
 * cabine, que traz os SIMULADORES REAIS embutidos.
 *
 * REGRA 5: faixa deste curso = d1a00000-0000-4000-9000-*
 *   modulo PRATICANDO = ...0005   -> aulas 05xx
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const CURSO = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
const P = "d1a00000-0000-4000-9000-";
const MOD = P + "000000000005";
const AULA = P + "000000000501";

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 160)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

const html = fs.readFileSync(path.join(SIMS, "praticando-montagem-cabine.html"), "utf8");
if (!/srcdoc=/.test(html)) throw new Error("guard: a aula nao tem simulador embutido");
if ((html.match(/PONTE SMU/g) || []).length < 3) throw new Error("guard: falta a ponte de audio em algum embutido");
if (AULA.split("-").pop().length !== 12) throw new Error("guard: uuid malformado");

/* modulo */
const m = await req("GET", `/modules?id=eq.${MOD}&select=id`);
if (!m.length) {
  await req("POST", "/modules", [{
    id: MOD, course_id: CURSO, titulo: "🎚️ PRATICANDO COM SIMULADOR",
    descricao: "Monte a cabine do zero: escolha os aparelhos, ligue os cabos RCA na entrada certa e faça o som sair.",
    ordem: 14
  }], { Prefer: "return=minimal" });
  console.log("+ modulo criado: PRATICANDO COM SIMULADOR");
}

const conteudo = `<p><strong>Agora é você que monta.</strong> Nesta aula os aparelhos são os <em>mesmos simuladores</em> que você usou nas aulas anteriores — funcionando de verdade, dentro da bancada.</p>
<p><strong>O que praticar:</strong> ligue o cabo <strong>RCA</strong> da saída de cada aparelho na entrada de um canal do mixer, escolha a entrada certa, suba o fader do canal, abra o master e dê play.</p>
<p><strong>A regra que não perdoa:</strong> <strong>CDJ e XDJ vão em LINE</strong> (saída digital, nível forte). <strong>Pickup vai em PHONO</strong> (sinal fraco, precisa do pré-amplificador). Trocar os dois não funciona — e o simulador não deixa o som passar, igual à vida real.</p>
<p>Repare que os faders começam no <strong>mínimo</strong> e o <strong>master fechado</strong>: essa é a ordem certa de subir numa cabine. O painel da direita mostra o que ainda falta para o som sair.</p>`;

const ja = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo`);
if (ja.length && !/cabine/i.test(ja[0].titulo)) throw new Error(`ABORTADO: id ja usado por "${ja[0].titulo}"`);

if (!ja.length) {
  await req("POST", "/lessons", [{
    id: AULA, module_id: MOD, titulo: "Monte a sua cabine: cabos, canais e o som saindo",
    tipo: "texto", conteudo_rico: conteudo, duracao_min: 20, ordem: 1,
    tem_quiz: false, preview_gratis: false
  }], { Prefer: "return=minimal" });
} else {
  await req("PATCH", `/lessons?id=eq.${AULA}`, { conteudo_rico: conteudo, module_id: MOD, ordem: 1 }, { Prefer: "return=minimal" });
}

const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?id=eq.${an[0].id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive",
    roteiro: { cenas: [{ modo: "widget", numero: 1, titulo: "Monte a sua cabine", duracao: 600 }],
               metadata: { titulo: "Monte a sua cabine" } },
    urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
}

const ms = (await req("GET", `/modules?course_id=eq.${CURSO}&select=id`)).map(x => x.id).join(",");
const ls = await req("GET", `/lessons?module_id=in.(${ms})&select=id`);
await req("PATCH", `/courses?id=eq.${CURSO}`, { total_aulas: ls.length }, { Prefer: "return=minimal" });

console.log(`OK aula publicada (${(html.length / 1024).toFixed(0)}KB). Curso com ${ls.length} aulas.`);
