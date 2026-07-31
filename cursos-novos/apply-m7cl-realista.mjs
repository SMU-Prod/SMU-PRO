#!/usr/bin/env node
/**
 * apply-m7cl-realista.mjs  [--aplicar]
 *
 * Põe a aula "M7CL realista" no módulo Yamaha do curso pleno-som.
 *
 * ⛔ NÃO ENCOSTA na aula M7CL que já existe (abe880d4-…, ordem 2, o Editor de
 * PC). Ordem do dono: "NAO MEXA NA AULA DA M7 QUE EXISTE". Este script só
 * CRIA a aula nova (ordem 8) e a animação dela. Se algum dia precisar mexer
 * na antiga, não é aqui.
 *
 * REGRA 5 — faixa de id:
 *   curso pleno-som, faixa 5504c000. O id sai de idAula(f, 8, 8), nunca à mão
 *   e nunca derivado da posição no array. conferirFaixa() aborta se escapar.
 *   Rode auditar-banco.mjs ANTES e DEPOIS.
 *
 *   node cursos-novos/apply-m7cl-realista.mjs             -> só mostra o que faria
 *   node cursos-novos/apply-m7cl-realista.mjs --aplicar   -> escreve no banco
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { faixa, idAula, conferirFaixa } from "./_REGISTRO-IDS.mjs";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";

function chave() {
  if (process.env.SUPABASE_SERVICE_KEY) return process.env.SUPABASE_SERVICE_KEY.trim();
  const f = path.join(RAIZ, ".local", "svckey");        // caminho ESTÁVEL
  if (fs.existsSync(f)) return fs.readFileSync(f, "utf8").trim();
  throw new Error("sem chave de serviço: ponha em SMU-PRO/.local/svckey");
}
const KEY = chave();
const H = { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" };

/* ---- alvos, todos LIDOS do banco, não inventados ---- */
const MODULO_YAMAHA = "5504c000-5011-4a00-9000-0000000000a1";  // "Simulador Yamaha — CL5, M7CL, LS9…"
const AULA_ANTIGA   = "abe880d4-78bd-4530-89c0-d176ce6fdbf1";  // ⛔ o Editor — NÃO TOCAR
const F = faixa("pleno-som");
const AULA_NOVA = idAula(F, 8, 8);                              // 5504c000-…-000000000808
const ORDEM = 8;                                                // depois das 7 existentes

conferirFaixa(F, [AULA_NOVA]);   // aborta antes de qualquer escrita

const HTML = fs.readFileSync(path.join(RAIZ, "simuladores", "som", "m7cl.html"), "utf8");

const CONTEUDO = `
<h2>1. Esta é a mesa, não o software dela</h2>
<p>A aula anterior de M7CL usa o <strong>M7CL Editor</strong>, o programa que roda no
computador. Ele serve para preparar o show em casa. Esta aula é a <strong>console
física</strong>: a superfície que você vai encontrar montada na casa de show, com os
faders, os 33 knobs da seção SELECTED CHANNEL e a tela no meio.</p>
<p>As duas se completam. Quem só conhece o Editor trava na hora que senta na mesa,
porque na mesa nada está onde está na tela do PC.</p>

<h2>2. O que você tem em mãos</h2>
<ul>
  <li><strong>48 canais mono + 4 ST IN</strong>, em quatro blocos de 8 como na mesa real</li>
  <li><strong>SELECTED CHANNEL</strong> com os 16 encoders de MIX/MATRIX e o EQ de 4 bandas</li>
  <li><strong>Centralogic</strong>: 8 faders que assumem o grupo escolhido nas NAVIGATION KEYS</li>
  <li><strong>28 telas</strong> do manual: OVERVIEW, SELECTED CHANNEL VIEW, EQ, dinâmica,
      cenas, rack de GEQ e efeitos, patch, monitor, meters, MIDI e sistema</li>
  <li><strong>Bibliotecas de fábrica</strong>: 39 presets de EQ e 41 de dinâmica, com os
      nomes e valores do manual da Yamaha</li>
</ul>

<h2>3. Mixe música de verdade</h2>
<p>No botão <strong>MIX</strong> da tela você escolhe uma das músicas multitrack do acervo —
de 14 a 42 faixas separadas: bumbo, caixa, surdo, baixo, guitarra, teclado, voz. Cada faixa
entra num canal da mesa, <strong>com todos os faders fechados</strong>. A mixagem é sua.</p>
<p>Comece pelo ganho: suba o HA até o meter trabalhar sem estourar. Depois abra os faders,
ajuste o pan, corte o que sobra no EQ. É a mesma ordem da passagem de som.</p>

<h2>4. Guarde a sua cena</h2>
<p>Em <strong>CENAS</strong> você guarda a mixagem na sua conta, com número de 1 a 300 como
na mesa real. Feche a aula, volte amanhã e chame de volta. É assim que se trabalha: o show
de sexta começa da cena que você deixou pronta na quinta.</p>

<h2>5. O que treinar nesta aula</h2>
<ol>
  <li>Carregue uma música e monte a mixagem do zero, do ganho ao fader</li>
  <li>Mande quatro canais para o MIX 1 em <strong>SENDS ON FADER</strong> — é o monitor do palco</li>
  <li>Ponha bateria inteira num <strong>DCA</strong> e controle tudo com um fader só</li>
  <li>Guarde como cena 001. Mude a mixagem, guarde como 002, e vá e volte entre elas</li>
  <li>Ligue o <strong>RECALL SAFE</strong> no canal do vocal e veja ele não obedecer ao recall</li>
</ol>

<p><em>Dica de operação:</em> o botão <strong>AMPLIAR TELA</strong> existe só aqui, no
simulador. A tela da M7CL é pequena de propósito — 16,8% da largura da mesa — e num
notebook ela fica ilegível. Na mesa de verdade você vai estar de pé, na frente dela.</p>
`.trim();

const AULA = {
  id: AULA_NOVA,
  module_id: MODULO_YAMAHA,
  titulo: "M7CL realista — a console física: 28 telas, mix multitrack e cenas na sua conta",
  tipo: "misto",
  conteudo_rico: CONTEUDO,
  duracao_min: 45,
  ordem: ORDEM,
  tem_quiz: false,
  preview_gratis: false,
};

const aplicar = process.argv.includes("--aplicar");
const get = async (q) => {
  const r = await fetch(REST + q, { headers: H });
  const t = await r.text();
  try { return JSON.parse(t); } catch { return { erro: r.status, txt: t.slice(0, 200) }; }
};

console.log("módulo   :", MODULO_YAMAHA, "(Simulador Yamaha)");
console.log("aula nova:", AULA_NOVA, "ordem", ORDEM);
console.log("intocada :", AULA_ANTIGA, "(M7CL Editor — ordem 2)");
console.log("html     :", (HTML.length / 1024).toFixed(0), "KB\n");

/* 1. a aula antiga tem que continuar exatamente onde está */
const antes = await get(`/lessons?select=id,titulo,ordem,module_id&id=eq.${AULA_ANTIGA}`);
if (!Array.isArray(antes) || !antes[0]) { console.error("não achei a aula antiga — abortando"); process.exit(1); }
console.log("aula antiga agora: ordem", antes[0].ordem, "|", antes[0].titulo.slice(0, 60));

if (!aplicar) {
  console.log("\n(simulação — rode com --aplicar para escrever)");
  setTimeout(() => process.exit(0), 250);
} else {
  /* 2. cria/atualiza SÓ a aula nova */
  let r = await fetch(`${REST}/lessons`, {
    method: "POST",
    headers: { ...H, Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify(AULA),
  });
  console.log("aula:", r.ok ? "OK" : "FALHOU " + r.status + " " + (await r.text()).slice(0, 200));

  /* 3. a animação com o simulador */
  if (r.ok) {
    const ja = await get(`/ai_animations?select=id&lesson_id=eq.${AULA_NOVA}`);
    /* colunas LIDAS da animação da CL5/M7CL existente — ai_animations não tem
       `titulo`; o nome da cena vive dentro de `roteiro`. */
    const corpo = {
      lesson_id: AULA_NOVA,
      tipo: "interactive",
      status: "ready",
      model: "handcrafted-interactive",
      roteiro: { cenas: [{ numero: 1, modo: "widget",
        titulo: "Yamaha M7CL-48 — a console física, 28 telas do manual" }] },
      urls: [{ html: HTML }],
      custo_usd: 0,          // ⚠️ null aqui derrubava o player (bug já conhecido)
      updated_at: new Date().toISOString(),
    };
    if (Array.isArray(ja) && ja[0]) {
      r = await fetch(`${REST}/ai_animations?id=eq.${ja[0].id}`, {
        method: "PATCH", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify(corpo) });
      console.log("animação (update):", r.ok ? "OK" : "FALHOU " + r.status + " " + (await r.text()).slice(0, 200));
    } else {
      r = await fetch(`${REST}/ai_animations`, {
        method: "POST", headers: { ...H, Prefer: "return=minimal" }, body: JSON.stringify(corpo) });
      console.log("animação (insert):", r.ok ? "OK" : "FALHOU " + r.status + " " + (await r.text()).slice(0, 200));
    }
  }

  /* 4. confere que a antiga não se moveu */
  const depois = await get(`/lessons?select=id,titulo,ordem,module_id&id=eq.${AULA_ANTIGA}`);
  const igual = depois[0] && depois[0].ordem === antes[0].ordem &&
                depois[0].module_id === antes[0].module_id &&
                depois[0].titulo === antes[0].titulo;
  console.log("aula antiga intocada:", igual ? "SIM" : "⛔ MUDOU — confira!");
  setTimeout(() => process.exit(igual ? 0 : 1), 250);
}
