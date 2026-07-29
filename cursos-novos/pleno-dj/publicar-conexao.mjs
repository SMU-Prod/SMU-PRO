#!/usr/bin/env node
/**
 * publicar-conexao.mjs
 * Publica a aula "Simulador de conexao" — a que mostra SO A TRASEIRA de cada
 * aparelho escolhido, para o aluno entender as ligacoes.
 * Ordem do dono: "quando o aluno escolher os equipamentos, vai aparecer
 * somente a parte de tras de cada equipamento respectivo".
 *
 * REGRA 5: faixa deste curso = d1a00000-0000-4000-9000-*
 *   modulo PRATICANDO = ...0005 -> aulas 05xx
 *   0501 = praticar com simulador (a mesa)   0502 = simulador de conexao
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const CURSO = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
const P = "d1a00000-0000-4000-9000-";
const MOD  = P + "000000000005";
const AULA = P + "000000000502";

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 160)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

const html = fs.readFileSync(path.join(SIMS, "_aulas", "ligando-a-cabine.html"), "utf8");
if (!/srcdoc=/.test(html)) throw new Error("guard: a aula nao tem simulador embutido");
if (AULA.split("-").pop().length !== 12) throw new Error("guard: uuid malformado");

/* REGRA 5: a guarda de sequestro de id esta logo abaixo, junto do titulo */

const TITULO = "Simulador de conexão: a traseira de cada aparelho";
const conteudo = `<p><strong>Antes de operar, é preciso ligar.</strong> Nesta aula você escolhe os aparelhos e vê <em>só a traseira</em> deles — que é como você chega numa cabine de verdade: por trás, decidindo onde cada cabo entra.</p>
<p><strong>A pegadinha que derruba iniciante:</strong> na traseira dos mixers Pioneer os canais ficam <strong>ao contrário</strong> do painel de cima — lê-se <strong>CH4, CH3, CH2, CH1</strong> da esquerda para a direita. Quem liga "na ordem" olhando por trás pluga tudo no canal errado.</p>
<p><strong>Nem todo canal aceita toca-discos.</strong> O DJM-800 não tem PHONO no canal 1; o DJM-2000 só tem nas pontas (CH1 e CH4); e o XDJ-RR não tem PHONO nenhum. <strong>CDJ e XDJ vão em LINE</strong> (sinal forte); <strong>pickup vai em PHONO</strong> (sinal fraco, precisa do pré-amplificador) e ainda precisa do <strong>terra</strong>.</p>
<p><strong>Nem todo aparelho tem tomada comum:</strong> o DJM-450 e o XDJ-RR usam <strong>fonte externa de 12 V</strong>, não cabo de força. E o Technics SL-1200MK2 não tem conector nenhum atrás — os cabos saem direto do aparelho.</p>
<p>Força primeiro, depois sinal. Sem energia não há o que testar.</p>`;

const ja = await req("GET", `/lessons?id=eq.${AULA}&select=id,titulo`);
if (ja.length && !/conex/i.test(ja[0].titulo)) throw new Error(`ABORTADO: id ja usado por "${ja[0].titulo}"`);

if (!ja.length) {
  await req("POST", "/lessons", [{
    id: AULA, module_id: MOD, titulo: TITULO,
    tipo: "texto", conteudo_rico: conteudo, duracao_min: 25, ordem: 1,
    tem_quiz: false, preview_gratis: false
  }], { Prefer: "return=minimal" });
} else {
  await req("PATCH", `/lessons?id=eq.${AULA}`, { conteudo_rico: conteudo, module_id: MOD, ordem: 1, titulo: TITULO }, { Prefer: "return=minimal" });
}

const an = await req("GET", `/ai_animations?lesson_id=eq.${AULA}&select=id`);
if (an.length) {
  await req("PATCH", `/ai_animations?id=eq.${an[0].id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
} else {
  await req("POST", "/ai_animations", [{
    id: crypto.randomUUID(), lesson_id: AULA, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive", urls: [{ html }], custo_usd: 0
  }], { Prefer: "return=minimal" });
}

console.log(`OK aula de conexão publicada (${Math.round(html.length/1024)}KB).`);
await new Promise(r => setTimeout(r, 250));
