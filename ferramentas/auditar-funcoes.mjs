#!/usr/bin/env node
/**
 * auditar-funcoes.mjs <arquivo.html>|--todos
 *
 * Encontra CONTROLE MORTO: declarado no painel, mas que não faz nada além de
 * acender. Foi assim que apareceram os 6 do CDJ-1000MK3 (VINYL SPEED ADJUST,
 * JOG ADJUST, MP3 FOLDER SEARCH) — o dono cobrou "tudo tem que funcionar
 * como no original".
 *
 * Um controle conta como VIVO se o `act` dele aparece em qualquer lugar do
 * script fora da própria declaração: num if/else do handler, num objeto de
 * estado (KNOB/KV), num bind específico, num regex de despacho, etc.
 * Não é prova de que a função está CERTA — é prova de que existe.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";


/* os simuladores agora ficam em subpasta por fabricante (ordem do dono):
   simuladores/dj/<fabricante>/<arquivo>.html  — busca recursiva */
function listarSims(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listarSims(p));
    else if (e.name.endsWith(".html") && !e.name.startsWith("_")) out.push(p);
  }
  return out;
}

const SIMS = path.join(path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".."), "simuladores", "dj");

/* controles que não são botão: o visor, o prato e placas decorativas */
const NAO_BOTAO = /^(display|screen|disp[AB]?|waveform|jog|platter|jogwell|meter|mastermeter|mtr|plate|well|logo)/i;

function auditar(arquivo) {
  const s = fs.readFileSync(arquivo, "utf8");
  const nome = path.basename(arquivo);

  // controles declarados: {act:"x"  |  add("x","kind"  |  chaves do POS
  const acts = new Set();
  /* act literal. Ignora os montados por template ({act:"pm1"+S) — nesses o
     nome final (pm1A/pm1B) e resolvido em tempo de execucao e o despacho
     costuma ser por regex sobre a base, o que daria falso positivo. */
  for (const m of s.matchAll(/\{\s*act\s*:\s*"([A-Za-z0-9_]+)"\s*([,}])/g)) acts.add(m[1]);
  for (const m of s.matchAll(/add\(\s*"([A-Za-z0-9_]+)"\s*,/g)) acts.add(m[1]);
  if (!acts.size) {
    // o POS lista todo elemento posicionado — serve como inventario de controles
    const mp = s.match(/const POS\s*=\s*\{([\s\S]*?)\n\s*\};/);
    if (mp) for (const m of mp[1].matchAll(/^\s*([A-Za-z0-9_]+)\s*:\s*\[/gm)) acts.add(m[1]);
  }
  if (!acts.size) return { nome, erro: "nenhum controle declarado (formato desconhecido)" };

  const mortos = [];
  for (const a of acts) {
    if (NAO_BOTAO.test(a)) continue;
    // ocorrências fora da declaração
    const decl = new RegExp(`\\{\\s*act\\s*:\\s*"${a}"|add\\(\\s*"${a}"\\s*,`, "g");
    const semDecl = s.replace(decl, "");
    const usos = [
      new RegExp(`"${a}"`),            // comparação/objeto/Set
      new RegExp(`\\b${a}\\s*:`),      // chave de objeto de estado (KNOB/KV/DEF)
      new RegExp(`\\.${a}\\b`),        // KNOB.x / d.x
      new RegExp(`\\b${a}\\b\\s*[=(]`) // função/variável com o mesmo nome
    ];
    // regex de despacho, ex.: /^play[AB]$/ cobre playA/playB
    const base = a.replace(/[AB0-9]+$/, "");
    const porPadrao = base.length > 2 && new RegExp(`\\^?${base}\\[|\\b${base}\\d|\\b${base}\\[AB\\]`).test(semDecl);
    if (!usos.some(r => r.test(semDecl)) && !porPadrao) mortos.push(a);
  }
  return { nome, total: acts.size, mortos };
}

const arg = process.argv[2];
if (!arg) { console.error("uso: node auditar-funcoes.mjs <arquivo.html>|--todos"); process.exit(2); }

const lista = arg === "--todos"
  ? listarSims(SIMS).filter(f => f.endsWith("-real.html"))
  : [path.isAbsolute(arg) ? arg : path.join(SIMS, arg)];

let comMortos = 0, totalMortos = 0;
for (const f of lista) {
  const r = auditar(f);
  if (r.erro) { console.log(`?  ${r.nome}: ${r.erro}`); continue; }
  if (r.mortos.length) {
    comMortos++; totalMortos += r.mortos.length;
    console.log(`X  ${r.nome}  (${r.mortos.length}/${r.total} sem funcao)`);
    console.log(`     ${r.mortos.join(", ")}`);
  } else if (arg !== "--todos") {
    console.log(`OK ${r.nome}: os ${r.total} controles têm função`);
  }
}
if (arg === "--todos")
  console.log(`\n${lista.length} simuladores | ${comMortos} com controle morto | ${totalMortos} controles mortos no total`);
process.exit(totalMortos ? 1 : 0);
