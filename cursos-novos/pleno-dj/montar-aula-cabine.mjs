#!/usr/bin/env node
/**
 * montar-aula-cabine.mjs [deck1] [deck2] [mixer]
 *
 * Gera a aula "PRATICANDO — monte a sua cabine" com os SIMULADORES REAIS
 * embutidos (ordem do dono: "vai ser com as cdj que fizemos... e usar os
 * simuladores").
 *
 * POR QUE EMBUTIR e nao buscar em runtime — dois bloqueios confirmados:
 *   1. a chave `anon` NAO le ai_animations (RLS barra leitura anonima).
 *   2. o player monta o sim em <iframe srcDoc sandbox> SEM allow-same-origin
 *      e sem <base>: a origem fica opaca (Origin: null) e caminho relativo
 *      resolve contra a URL da aula. Qualquer fetch externo quebra publicado.
 * Embutido nao faz fetch nenhum — imune aos dois.
 *
 * PONTE DE AUDIO: cada simulador embutido recebe, ANTES do script dele, um
 * wrapper de AudioContext que envolve o `destination` num GainNode. Assim o
 * fader do canal e o master do mixer controlam o volume REAL do simulador,
 * por postMessage — sem alterar uma linha dos 31 simuladores.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const SAIDA = path.join(SIMS, "_aulas", "praticando-montagem-cabine.html");

const [, , a1, a2, am] = process.argv;
const D1 = a1 || "pioneer-cdj-1000mk3-real.html";
const D2 = a2 || "pioneer-cdj-400-real.html";
const MX = am || "pioneer-djm-800-real.html";

/* ---------- ponte injetada em cada simulador embutido ---------- */
const PONTE = `<script>/* PONTE SMU — nao faz parte do aparelho */
(function(){
  var OrigAC = window.AudioContext || window.webkitAudioContext;
  if(!OrigAC) return;
  window.__smuGanhos = [];
  function Patched(){
    var ctx = new OrigAC();
    var real = Object.getPrototypeOf(ctx);
    var dst = ctx.destination;
    var g = ctx.createGain();
    g.gain.value = 1;
    g.connect(dst);
    try{ Object.defineProperty(ctx, "destination", { get: function(){ return g; }, configurable:true }); }catch(e){}
    window.__smuGanhos.push(g);
    return ctx;
  }
  Patched.prototype = OrigAC.prototype;
  window.AudioContext = Patched; window.webkitAudioContext = Patched;
  /* volume vindo do mixer da aula + resposta se o deck esta tocando */
  function estaTocando(){
    try{
      if (window.d && typeof window.d.playing === "boolean") return window.d.playing;      /* players de 1 deck */
      if (window.A && window.A.playing) return true;                                        /* all-in-one A/B */
      if (window.B && window.B.playing) return true;
      if (window.decks) for (var k in window.decks) if (window.decks[k] && window.decks[k].playing) return true;
      if (window.chans) for (var j in window.chans) if (window.chans[j] && window.chans[j].playing) return true;
    }catch(_){}
    return false;
  }
  window.addEventListener("message", function(e){
    var d = e.data; if(!d) return;
    if (d.smu === "vol") (window.__smuGanhos||[]).forEach(function(g){ try{ g.gain.value = d.v; }catch(_){} });
    else if (d.smu === "tocando?" && e.source) e.source.postMessage({ smu:"tocando", v: estaTocando() }, "*");
  });
  /* Bandeira para o Banco SMU nao montar a barra aqui dentro: na viewport
     pequena do aparelho embutido ela cobriria o painel.
     NAO usar CSS nem "self !== top": em uso normal o simulador JA roda dentro
     de um iframe (srcDoc do player), entao "self !== top" e sempre verdadeiro
     e sumiria com a barra na frota inteira. O Banco v2 decide por
     "parent !== top" (2 niveis) e respeita esta bandeira. */
  window.__SMU_EMBUTIDO = 1;
})();
<\/script>`;

/* o simulador agora mora em simuladores/dj/<fabricante>/ */
function acharSim(nome){
  const pilha=[SIMS];
  while(pilha.length){ const d=pilha.pop();
    for(const e of fs.readdirSync(d,{withFileTypes:true})){
      const q=path.join(d,e.name);
      if(e.isDirectory()) pilha.push(q); else if(e.name===nome) return q; } }
  return null;
}
function preparar(arq) {
  const p = acharSim(arq) || path.join(SIMS, arq);
  if (!fs.existsSync(p)) throw new Error("simulador nao encontrado: " + arq);
  let h = fs.readFileSync(p, "utf8");
  const titulo = (h.match(/<title>([^<]*)<\/title>/) || [, arq])[1]
    .replace(/\s*—.*$/, "").trim();
  // a ponte entra logo apos <head> — antes de qualquer script do aparelho
  h = h.replace(/<head>/i, "<head>\n" + PONTE);
  // dentro do iframe nao ha barra de utilidades da aula: some com ela
  h = h.replace(/<div class="util">[\s\S]*?<\/div>\s*(?=<div class="deck")/i, "");
  return { titulo, html: h };
}

const d1 = preparar(D1), d2 = preparar(D2), mx = preparar(MX);
const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const modelo = fs.readFileSync(path.join(SIMS, "_praticando-modelo.html"), "utf8");
const out = modelo
  .replace("__D1_TITULO__", d1.titulo).replace("__D1_HTML__", esc(d1.html))
  .replace("__D2_TITULO__", d2.titulo).replace("__D2_HTML__", esc(d2.html))
  .replace("__MX_TITULO__", mx.titulo).replace("__MX_HTML__", esc(mx.html));

fs.writeFileSync(SAIDA, out, "utf8");
console.log(`aula montada: ${path.basename(SAIDA)}  (${(out.length / 1024).toFixed(0)}KB)`);
console.log(`  deck 1: ${d1.titulo}   (${(d1.html.length / 1024).toFixed(0)}KB)`);
console.log(`  deck 2: ${d2.titulo}   (${(d2.html.length / 1024).toFixed(0)}KB)`);
console.log(`  mixer : ${mx.titulo}   (${(mx.html.length / 1024).toFixed(0)}KB)`);
