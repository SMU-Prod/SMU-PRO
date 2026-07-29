#!/usr/bin/env node
/**
 * montar-aula-cabine.mjs — gera a aula "Monte a sua cabine" com os SIMULADORES
 * REAIS embutidos como OPCOES que o aluno escolhe.
 *
 * Fluxo que o dono pediu: escolher o equipamento -> ver a TRASEIRA e ligar
 * forca (regua AC) + RCA (+ fio terra no toca-discos) -> virar para a FRENTE e
 * fazer o som sair, com o master comecando fechado.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const SAIDA = path.join(SIMS, "_aulas", "praticando-montagem-cabine.html");

/* o que o aluno pode escolher */
const CATALOGO = [
  { id:"cdj1000", arq:"pioneer-cdj-1000mk3-real.html", tipo:"deck",  sub:"CD player · scratch" },
  { id:"cdj400",  arq:"pioneer-cdj-400-real.html",     tipo:"deck",  sub:"CD/USB · jog break" },
  { id:"sl1200",  arq:"technics-sl1200mk7-real.html",  tipo:"deck",  sub:"toca-discos" },
  { id:"djm800",  arq:"pioneer-djm-800-real.html",     tipo:"mixer", sub:"4 canais · COLOR" },
  { id:"djm600",  arq:"pioneer-djm-600-real.html",     tipo:"mixer", sub:"4 canais · Beat FX" },
];

const PONTE = `<script>/* PONTE SMU */
(function(){
  var O = window.AudioContext || window.webkitAudioContext; if(!O) return;
  window.__g=[];
  function P(){ var c=new O(), g=c.createGain(); g.gain.value=1; g.connect(c.destination);
    try{Object.defineProperty(c,"destination",{get:function(){return g},configurable:true})}catch(e){}
    window.__g.push(g); return c; }
  P.prototype=O.prototype; window.AudioContext=P; window.webkitAudioContext=P;
  window.addEventListener("message",function(e){ var d=e.data; if(!d)return;
    if(d.smu==="vol")(window.__g||[]).forEach(function(g){try{g.gain.value=d.v}catch(_){}}); });
  window.__SMU_EMBUTIDO = 1;   /* o Banco SMU nao monta a barra aqui dentro */
})();
<\/script>`;

function acharSim(nome){
  const pilha=[SIMS];
  while(pilha.length){ const d=pilha.pop();
    for(const e of fs.readdirSync(d,{withFileTypes:true})){
      const q=path.join(d,e.name);
      if(e.isDirectory()) pilha.push(q); else if(e.name===nome) return q; } }
  return null;
}
const esc = s => s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

const lista = CATALOGO.map(c => {
  const p = acharSim(c.arq);
  if(!p) throw new Error("simulador nao encontrado: " + c.arq);
  let h = fs.readFileSync(p,"utf8");
  const nome = (h.match(/<title>([^<]*)<\/title>/)||[,c.arq])[1].replace(/\s*—.*$/,"").trim();
  h = h.replace(/<head>/i, "<head>\n" + PONTE);
  h = h.replace(/<div class="util">[\s\S]*?<\/div>\s*(?=<div class="deck")/i, "");
  return { id:c.id, tipo:c.tipo, sub:c.sub, nome, html: esc(h), kb: Math.round(h.length/1024) };
});

const modelo = fs.readFileSync(path.join(SIMS,"_aulas","_cabine-modelo.html"),"utf8");
const out = modelo.replace("__SIMS__", JSON.stringify(lista));
fs.writeFileSync(SAIDA, out, "utf8");

console.log(`aula montada: ${(out.length/1024).toFixed(0)}KB`);
lista.forEach(s => console.log(`  ${s.tipo.padEnd(6)} ${s.nome}  (${s.kb}KB)`));
