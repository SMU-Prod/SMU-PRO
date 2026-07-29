#!/usr/bin/env node
/**
 * montar-aula-cabine.mjs — gera DUAS aulas a partir do MESMO modelo
 * (_cabine-modelo.html), com os SIMULADORES REAIS embutidos como OPCOES e com
 * as TRASEIRAS MEDIDAS NO MANUAL injetadas como dado.
 *
 *   1) ligando-a-cabine.html          MODO "cabeamento"
 *      escolher o equipamento -> SO A TRASEIRA de cada um -> passar os cabos:
 *      AC (regua / fonte 12 V / cabo cativo), RCA (LINE x PHONO, canal por
 *      canal) e RJ45 (PRO DJ LINK, com switch quando o mixer nao tem porta).
 *
 *   2) praticando-montagem-cabine.html  MODO "praticando"
 *      escolher o equipamento -> A MESA: mixer no centro, player da ESQUERDA
 *      no CANAL 1 e o da DIREITA no CANAL 2. Sem perguntar canal. O aluno
 *      opera os aparelhos de verdade; cada um ocupa a largura toda e amplia.
 *
 * O modelo e um so. O que muda e a constante MODO, trocada abaixo.
 *
 * ⛔ NAO existe mais tabela de traseira escrita a mao. A que existia dentro do
 *    _cabine-modelo.html estava espelhada (cdj1000, cdj400, sl1200), com os
 *    canais invertidos (djm800, djm600) e com um "MASTER OUT" inventado.
 *    Agora a fonte e _ref-traseiras/traseiras.json e traseiras-mixers.json,
 *    medidos na figura vetorial do manual oficial. Modelo sem fonte sai
 *    marcado ⚠️ ESTIMADO na tela — nao se inventa traseira.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, "..", "..");
const SIMS = path.join(RAIZ, "simuladores", "dj");
const DIR_AULAS = path.join(SIMS, "_aulas");
const REF = path.join(AQUI, "_ref-traseiras");

/* as duas aulas que saem deste mesmo modelo.
   ATENCAO: os dois nomes JA ESTAO PUBLICADOS — nao renomear. */
const AULAS = [
  { modo: "cabeamento", arq: "ligando-a-cabine.html" },
  { modo: "praticando", arq: "praticando-montagem-cabine.html" },
  /* Aula de scratch: em vez do simulador generico de 37KB que estava no ar
     (sem POS, sem AR, nada a ver com um SL-1200), esta aula EMBUTE O MK7 DE
     VERDADE duas vezes, com um mixer de 2 canais no meio. O dono foi claro:
     "e para pegar os simuladores que fizemos e colocar para aparecer nesta
     janela quando selecionado, e deve continuar funcionando". */
  { modo: "praticando", arq: "battle-2x-sl1200mk7.html",
    preset: { d1:"sl1200", mix:"djm450", d2:"sl1200" } },
];

/* --------------------------------------------------------------------------
   BUILD DE DIAGNOSTICO — para responder MEDINDO "a culpa e da ponte?".
     node montar-aula-cabine.mjs                  -> producao (ponte inteira)
     node montar-aula-cabine.mjs --ponte=min      -> so caixa-preta + tamanho
     node montar-aula-cabine.mjs --ponte=none     -> aparelho cru, sem ponte
   Os dois ultimos saem com sufixo no nome do arquivo e NUNCA sobrescrevem a
   aula publicada.                                                          */
const argPonte = (process.argv.find(a => a.startsWith("--ponte=")) || "").split("=")[1] || "full";
if (!["full", "min", "none"].includes(argPonte)) throw new Error("--ponte= full | min | none");
const SUFIXO = argPonte === "full" ? "" : "-PONTE-" + argPonte;

/* TODOS os simuladores ficam disponiveis (ordem do dono).
   `tras` = chave do modelo nos JSON de _ref-traseiras. null = sem fonte. */
const CATALOGO = [
  /* --- players digitais: saida LINE --- */
  { id:"cdj100s",  arq:"pioneer-cdj-100s-real.html",     tipo:"deck", sub:"CD player · Jog Break",        tras:"cdj-100s" },
  { id:"cdj200",   arq:"pioneer-cdj-200-real.html",      tipo:"deck", sub:"CD compacto · Beat Loop",      tras:"cdj-200" },
  { id:"cdj400",   arq:"pioneer-cdj-400-real.html",      tipo:"deck", sub:"CD/USB · Hot Loop",            tras:"cdj-400" },
  { id:"cdj800mk2",arq:"pioneer-cdj-800mk2-real.html",   tipo:"deck", sub:"vinil · Auto Beat Loop",       tras:"cdj-800mk2" },
  { id:"cdj850",   arq:"pioneer-cdj-850-real.html",      tipo:"deck", sub:"rekordbox · jog grande",       tras:"cdj-850" },
  { id:"cdj900nxs",arq:"pioneer-cdj-900nxs-real.html",   tipo:"deck", sub:"Nexus · memoria de pontos",    tras:"cdj-900nxs" },
  { id:"cdj1000",  arq:"pioneer-cdj-1000mk3-real.html",  tipo:"deck", sub:"padrao de clube · scratch",    tras:"cdj-1000mk3" },
  { id:"cdj2000",  arq:"pioneer-cdj-2000nxs2-real.html", tipo:"deck", sub:"tela colorida · 8 hot cue",    tras:"cdj-2000nxs2" },
  { id:"cdj3000",  arq:"pioneer-cdj-3000-real.html",     tipo:"deck", sub:"flagship · tela 9\"",          tras:"cdj-3000" },
  { id:"xdj700",   arq:"pioneer-xdj-700-real.html",      tipo:"deck", sub:"USB · touch compacto",         tras:"xdj-700" },
  { id:"xdj1000",  arq:"pioneer-xdj-1000mk2-real.html",  tipo:"deck", sub:"touch 7\" · sem bandeja",      tras:"xdj-1000mk2" },
  /* --- toca-discos: saida PHONO + fio terra --- */
  { id:"plx1000",  arq:"pioneer-plx-1000-real.html",     tipo:"deck", sub:"toca-discos direct drive",     tras:"plx-1000" },
  { id:"sl1200mk2",arq:"technics-sl1200mk2-real.html",   tipo:"deck", sub:"toca-discos · o classico",     tras:"technics-sl-1200mk2" },
  { id:"sl1200",   arq:"technics-sl1200mk7-real.html",   tipo:"deck", sub:"toca-discos · atual",          tras:"technics-sl-1200mk7" },
  /* --- tudo-em-um: player + mixer no MESMO corpo --- */
  { id:"xdjrr",    arq:"pioneer-xdj-rr-real.html",       tipo:"allinone", sub:"all-in-one · 2 canais",    tras:"xdj-rr" },
  { id:"xdjrx2",   arq:"pioneer-xdj-rx2-real.html",      tipo:"allinone", sub:"all-in-one · tela 7\"",    tras:"xdj-rx2" },
  { id:"xdjrx3",   arq:"pioneer-xdj-rx3-real.html",      tipo:"allinone", sub:"all-in-one · tela 10,1\"", tras:"xdj-rx3" },
  { id:"xdjxz",    arq:"pioneer-xdj-xz-real.html",       tipo:"allinone", sub:"all-in-one · 4 canais",    tras:"xdj-xz" },
  { id:"opusquad", arq:"alphatheta-opus-quad-real.html", tipo:"allinone", sub:"AlphaTheta · 4 decks",     tras:"opus-quad" },
  { id:"xdjaz",    arq:"alphatheta-xdj-az-real.html",    tipo:"allinone", sub:"AlphaTheta · bateria",     tras:"xdj-az" },
  { id:"prime4",   arq:"denon-prime4-real.html",         tipo:"allinone", sub:"Denon · 4 decks + tela",   tras:"prime4" },
  /* --- mixers --- */
  { id:"djm450",   arq:"pioneer-djm-450-real.html",      tipo:"mixer", sub:"2 canais · COLOR FX",         tras:"djm-450" },
  { id:"djm600",   arq:"pioneer-djm-600-real.html",      tipo:"mixer", sub:"4 canais · Beat FX",          tras:"djm-600" },
  { id:"djm750",   arq:"pioneer-djm-750mk2-real.html",   tipo:"mixer", sub:"4 canais · COLOR",            tras:"djm-750mk2" },
  { id:"djm800",   arq:"pioneer-djm-800-real.html",      tipo:"mixer", sub:"4 canais · COLOR",            tras:"djm-800" },
  { id:"djm900",   arq:"pioneer-djm-900nxs2-real.html",  tipo:"mixer", sub:"4 canais · padrao de clube",  tras:"djm-900nxs2" },
  { id:"djm2000",  arq:"pioneer-djm-2000-real.html",     tipo:"mixer", sub:"4 canais · flagship",         tras:"djm-2000" },
  { id:"djmv10",   arq:"pioneer-djm-v10-real.html",      tipo:"mixer", sub:"6 canais · EQ 4 bandas",      tras:"djm-v10" },
  { id:"x1850",    arq:"denon-x1850-real.html",          tipo:"mixer", sub:"Denon Prime · 4 canais",      tras:"denon-x1850" },
];

/* ==========================================================================
   PONTE SMU — o unico ponto de contato entre a aula e cada simulador.
   ---------------------------------------------------------------------------
   Ela ja embrulhava o AudioContext para o `destination` devolver um GainNode
   controlavel. Aqui ela ganhou o que faltava para o som ATRAVESSAR a cabine:

   lado DECK   recebe {smu:"vol", v, eq:{hi,mid,low}} e aplica no proprio grafo
               (ganho + 3 bandas). Manda {smu:"nivel"} com o pico MEDIDO ANTES
               do ganho — assim a aula sabe se o player esta tocando mesmo
               quando o mixer o esta cortando.
   lado MIXER  publica {smu:"estado"} com fader, trim, EQ, crossfader, assign,
               master e seletor de entrada de cada canal. A aula traduz pela
               POSICAO (esquerda = CH1, direita = CH2) e manda ganho aos decks.
   os dois     respondem {smu:"tam"} com o tamanho NATURAL do aparelho, que e
               como a moldura sabe a altura certa sem cortar nada.

   ⚠️ AudioParam: nada de setTargetAtTime aqui. Ele e exponencial e NUNCA
   termina, o parametro vira a-rate e o biquad recalcula coeficiente por
   amostra (foi o que deixou a CL5 em 34,5% de CPU). Usamos rampa LINEAR, que
   acaba, e o parametro volta a k-rate.
   ========================================================================== */
const PONTE = `<script>/* PONTE SMU */
/* ---------------------------------------------------------------------------
   CAIXA-PRETA — primeira coisa do arquivo, de proposito.
   O iframe e srcdoc com sandbox="allow-scripts": origem OPACA. O pai NAO
   consegue ler o console dele, entao um erro de script dentro do aparelho
   sumia sem deixar rastro e a gente ficava adivinhando. Daqui em diante todo
   erro sobe para a aula por postMessage.                                    */
(function(){
  var PAI = (window.parent && window.parent!==window) ? window.parent : null;
  function grita(m){ if(PAI) try{ PAI.postMessage(m,"*"); }catch(e){} }
  window.__SMU_ERROS = [];
  addEventListener("error", function(e){
    var m = {smu:"erroJS", msg:String(e.message||e.type), src:String(e.filename||""), linha:e.lineno||0};
    window.__SMU_ERROS.push(m); grita(m);
  }, true);
  addEventListener("unhandledrejection", function(e){
    var r = e.reason, m = {smu:"erroJS", msg:"promessa: "+String((r&&r.message)||r), src:"", linha:0};
    window.__SMU_ERROS.push(m); grita(m);
  });
  /* SONDA: a aula pergunta, o aparelho responde de dentro da caixa opaca.
     E so leitura — nao muda comportamento nenhum.                           */
  addEventListener("message", function(e){
    var d=e.data; if(!d||d.smu!=="probe") return;
    var r; try{ r = (0,eval)(d.expr); }catch(err){ r = "ERRO: "+(err&&err.message||err); }
    try{ r = JSON.parse(JSON.stringify(r)); }catch(_){ r = String(r); }
    grita({smu:"probeOk", id:d.id, val:r});
  });
})();
/* ---------------------------------------------------------------------------
   PRATO EM BRANCO — causa achada medindo, nao deduzindo.
   No simulador AVULSO o jog desenha certo (medido: caixa 244x244, canvas
   420x420). Embutido, a superficie aparece mas o disco nao. O motivo e que o
   sim desenha UMA vez no init(); dentro de um iframe com srcdoc o layout ainda
   nao aconteceu nessa hora, a caixa do canvas vale 0, e o desenho vai para o
   vazio. Como o jog so e redesenhado quando alguem o gira, ele fica branco
   para sempre.
   Conserto no ENCAIXE, sem tocar em simulador nenhum: quando o tamanho real
   chegar, mandamos o sim desenhar de novo.                                  */
(function(){
  var jaOk = false;
  function redesenhar(){
    try {
      /* os sims expoem uma destas: frame() e o padrao da frota */
      ["frame","desenhar","render","draw","drawAll","pinta"].forEach(function(n){
        if (typeof window[n] === "function") { window[n](); jaOk = true; }
      });
      /* muitos recalculam sozinhos no resize */
      window.dispatchEvent(new Event("resize"));
    } catch(e){}
  }
  function medir(){
    var c = document.querySelector('canvas[id*="jog"],canvas.jogc,canvas');
    return c ? Math.round(c.getBoundingClientRect().width) : 0;
  }
  /* tenta ate a caixa ter largura de verdade — sem laco infinito */
  var n = 0;
  var t = setInterval(function(){
    n++;
    if (medir() > 0) { redesenhar(); }
    if (n > 20 || (jaOk && medir() > 0)) clearInterval(t);
  }, 100);
  addEventListener("load", redesenhar);
  /* e sempre que a aula mudar o tamanho do aparelho (ampliar, girar o iPad) */
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function(){ redesenhar(); });
    addEventListener("DOMContentLoaded", function(){ ro.observe(document.body); });
  }
})();
(function(){
  var PAI = (window.parent && window.parent!==window) ? window.parent : null;
  function env(m){ if(PAI) try{ PAI.postMessage(m,"*"); }catch(e){} }
  function c01(v){ return v<0?0:v>1?1:v; }

  /* ---------- 1. audio: o destino do simulador vira um grafo nosso ---------- */
  var O = window.AudioContext || window.webkitAudioContext;
  window.__g=[]; window.__cad=[];
  /* ⛔ O ganho pedido pela aula tem de SOBREVIVER ao aparelho ainda nao ter
     ligado o audio. MEDIDO na aula: a aula manda {vol,v:0} para o mixer assim
     que o estado chega, mas nessa hora o AudioContext do mixer AINDA NAO
     EXISTE (__cad vazio) — o comando caia no vazio. Quando o aluno tocava no
     mixer, ele ligava o audio com ganho 1 e as bases de demonstracao DELE
     tocavam por cima do player. Agora o pedido fica guardado e e aplicado no
     instante em que o contexto nasce.                                       */
  var ultVol = {v:1, eq:null, temPedido:false};
  if(O){
    function P(){
      var c=new O(), destReal=c.destination;
      var pre=c.createGain(); pre.gain.value=1;          /* o sim conecta AQUI */
      var an=c.createAnalyser(); an.fftSize=512; pre.connect(an);
      var g=c.createGain(); g.gain.value=1; pre.connect(g);
      var lo=c.createBiquadFilter(); lo.type="lowshelf";  lo.frequency.value=200;  lo.gain.value=0;
      var md=c.createBiquadFilter(); md.type="peaking";   md.frequency.value=1000; md.Q.value=0.9; md.gain.value=0;
      var hi=c.createBiquadFilter(); hi.type="highshelf"; hi.frequency.value=4000; hi.gain.value=0;
      g.connect(lo); lo.connect(md); md.connect(hi); hi.connect(destReal);
      try{ Object.defineProperty(c,"destination",{get:function(){return pre},configurable:true}); }catch(e){}
      window.__g.push(g); window.__cad.push({ctx:c,an:an,g:g,lo:lo,md:md,hi:hi});
      if(ultVol.temPedido){                 /* o pedido que chegou antes da hora */
        g.gain.value = ultVol.v;
        if(ultVol.eq){ lo.gain.value=ultVol.eq.low||0; md.gain.value=ultVol.eq.mid||0; hi.gain.value=ultVol.eq.hi||0; }
      }
      return c;
    }
    P.prototype=O.prototype; window.AudioContext=P; window.webkitAudioContext=P;
  }
  function rampa(p,v){ try{
      var t=(window.__cad[0]&&window.__cad[0].ctx?window.__cad[0].ctx.currentTime:0);
      p.cancelScheduledValues(t); p.setValueAtTime(p.value,t); p.linearRampToValueAtTime(v,t+0.02);
    }catch(e){ try{ p.value=v; }catch(_){} } }
  function volume(v,eq){
    ultVol.v = v; ultVol.eq = eq; ultVol.temPedido = true;
    (window.__cad||[]).forEach(function(a){
      rampa(a.g.gain, v);
      if(eq){ rampa(a.lo.gain, eq.low||0); rampa(a.md.gain, eq.mid||0); rampa(a.hi.gain, eq.hi||0); }
    });
  }
  /* pico ANTES do ganho: diz se o PLAYER esta tocando, nao se o mixer deixou passar */
  var buf=null;
  function pico(){
    var a=(window.__cad||[])[0]; if(!a) return 0;
    if(!buf||buf.length!==a.an.fftSize) buf=new Uint8Array(a.an.fftSize);
    a.an.getByteTimeDomainData(buf);
    var p=0; for(var i=0;i<buf.length;i+=4){ var x=Math.abs(buf[i]-128)/128; if(x>p)p=x; }
    return p;
  }

  /* ---------- 1b. VU: o AUDIO nao atravessa o iframe, o SINAL sim ----------
     O mixer embutido nao recebe audio nenhum — quem toca e o deck, no outro
     iframe. Entao os medidores dele mediam silencio e ficavam apagados nos
     dois lugares (canal e master), que foi o que o dono viu.

     ⛔ Nada de inventar escala de dB aqui. Cada simulador ja tem a escala do
     MANUAL dele (o DJM-900NXS2 tem 15 segmentos por medidor: canal +12..-30 e
     master +15..-27 dB, conferido na pagina "Control Panel" do manual — e o
     sim desenha 15). Se a ponte "acendesse N LEDs" estaria reescrevendo essa
     calibracao por fora.
     O que a ponte faz e o degrau ANTES: entrega ao analisador do mixer a mesma
     ONDA que existiria se o cabo estivesse ligado. Dai o codigo do proprio
     aparelho mede e acende — igualzinho ao avulso, sem tocar em simulador.
     Como so o analisador e alimentado (nada chega ao destination), NAO SAI SOM.

     Onde mora o analisador (levantado arquivo por arquivo, nao chutado):
       chans[n].analyser + masterAn ... DJM-450/750MK2/800/900NXS2/V10, X1850
       d.an / b.an / d.masterAn ....... DJM-600
       dA.an / dB.an / masterAn ....... DJM-2000
     Os tres casos leem por getByteTimeDomainData, entao um so remendo serve. */
  function achaAnalisadores(){
    var A={ch:{}, master:[]};
    function po(o){ return o && typeof o==="object"; }
    try{ if(typeof chans!=="undefined" && po(chans))
      for(var k in chans){ if(po(chans[k]) && chans[k].analyser) A.ch[k]=chans[k].analyser; } }catch(e){}
    try{ if(!A.ch["1"] && typeof d!=="undefined" && po(d) && d.an) A.ch["1"]=d.an; }catch(e){}
    try{ if(!A.ch["2"] && typeof b!=="undefined" && po(b) && b.an) A.ch["2"]=b.an; }catch(e){}
    try{ if(!A.ch["1"] && typeof dA!=="undefined" && po(dA) && dA.an) A.ch["1"]=dA.an; }catch(e){}
    try{ if(!A.ch["2"] && typeof dB!=="undefined" && po(dB) && dB.an) A.ch["2"]=dB.an; }catch(e){}
    try{ if(typeof masterAn!=="undefined" && masterAn) A.master.push(masterAn); }catch(e){}
    try{ if(typeof d!=="undefined" && po(d) && d.masterAn) A.master.push(d.masterAn); }catch(e){}
    return A;
  }
  /* onda senoidal com o PICO pedido. Senoide de proposito: quem mede por RMS
     (DJM-2000) le pico/raiz(2), que e o valor fisicamente certo. */
  function alimentar(an, nome){
    if(!an || an.__smuVU) return;
    an.__smuVU = {nivel:0, fase:0};
    var orig = an.getByteTimeDomainData;
    an.getByteTimeDomainData = function(buf){
      var s=this.__smuVU;
      if(s.nivel<=0){ for(var i=0;i<buf.length;i++) buf[i]=128; return; }
      var amp=Math.min(1,s.nivel)*127, w=2*Math.PI*12/buf.length;
      for(var j=0;j<buf.length;j++) buf[j]=128+Math.round(amp*Math.sin(s.fase+j*w));
      s.fase=(s.fase+0.7)%(2*Math.PI);
    };
    an.__smuVUorig = orig;
  }
  function porVU(msg){
    var A=achaAnalisadores(), viu=0;
    for(var c in (msg.ch||{})){
      var an=A.ch[c]; if(!an) continue;
      alimentar(an,"ch"+c); an.__smuVU.nivel = +msg.ch[c]||0; viu++;
    }
    for(var i=0;i<A.master.length;i++){
      alimentar(A.master[i],"master"); A.master[i].__smuVU.nivel = +msg.master||0; viu++;
    }
    return viu;
  }

  /* ---------- 2. tamanho natural do aparelho ---------- */
  function tamanho(){
    var w=document.querySelector(".wrap")||document.body;
    return {w:w.offsetWidth||560, h:w.offsetHeight||760};
  }
  function mandaTam(){ var t=tamanho(); if(t.w>0&&t.h>0) env({smu:"tam",w:t.w,h:t.h}); }

  /* ---------- 3. ler o estado do MIXER ----------
     Nao ha um "modelo de dados" comum aos 15 simuladores, entao lemos em
     cascata: primeiro a variavel global do proprio simulador, depois o DOM
     (a posicao do cursor do fader / o giro do knob). O que nao der para ler
     sai NULO — e a aula trata nulo como "nao sei", nunca como "fechado".
     Silenciar por chute seria pior que nao silenciar. */
  function G(n){ try{
      switch(n){
        case "faderVal": return typeof faderVal!=="undefined"?faderVal:undefined;
        case "knobState":return typeof knobState!=="undefined"?knobState:undefined;
        case "xf":       return typeof xf!=="undefined"?xf:undefined;
        case "assignMode":return typeof assignMode!=="undefined"?assignMode:undefined;
        case "els":      return typeof els!=="undefined"?els:undefined;
        case "swPos":    return typeof swPos!=="undefined"?swPos:undefined;
        case "SEL_LAB":  return typeof SEL_LAB!=="undefined"?SEL_LAB:undefined;
        case "SWST":     return typeof SWST!=="undefined"?SWST:undefined;
        case "V":        return typeof V!=="undefined"?V:undefined;
      }
    }catch(e){} return undefined; }
  var LETRA=["A","B","C","D","E","F"];
  function capV(el,eixo){
    if(!el) return null; var c=el.querySelector?el.querySelector(".cap"):null; if(!c) return null;
    var s=eixo==="left"?c.style.left:c.style.top; var n=parseFloat(s);
    if(!isFinite(n)) return null;
    var v=eixo==="left" ? (n-7)/86 : 1-(n-6)/88;
    return c01(v);
  }
  function posClasse(el){ if(!el||!el.classList) return null;
    return el.classList.contains("p2")?2:el.classList.contains("p1")?1:0; }
  function knob(act){
    var KS=G("knobState"), VV=G("V");
    if(KS&&KS[act]!=null) return c01(+KS[act]);
    if(VV&&VV[act]!=null) return c01(+VV[act]);
    var e=document.querySelector('[data-act="'+act+'"]');
    if(e){ var r=parseFloat(e.style.rotate);
      if(!isFinite(r)&&e.style.transform){ var m=/rotate\\(([-\\d.]+)deg/.exec(e.style.transform); if(m) r=parseFloat(m[1]); }
      if(isFinite(r)) return c01(r/270+0.5); }
    return null;
  }
  /* junta as linhas da serigrafia numa lista de POSICOES de verdade:
     ["CD","/DIGITAL","LINE"] = chave de 2 posicoes -> ["CD/DIGITAL","LINE"] */
  function opcoesSel(labs){
    if(!labs||!labs.length) return null;
    var o=[], atual="";
    for(var i=0;i<labs.length;i++){
      var t=String(labs[i]);
      if(/^\\s*\\//.test(t) && atual){ atual+=t.trim(); }
      else { if(atual) o.push(atual); atual=t.trim(); }
    }
    if(atual) o.push(atual);
    return o;
  }
  /* Cada simulador batiza o proprio estado de um jeito (faderVal / V.fdr1 /
     els.fader1 / so o DOM). Lemos em CASCATA e paramos no primeiro que existir. */
  function faderDo(c,FV,VV,EL,fads){
    if(FV&&FV[c]!=null&&isFinite(+FV[c])) return c01(+FV[c]);
    var nomes=["fader"+c,"fdr"+c,"chfader"+c,"ch"+c,"f"+c];
    for(var i=0;i<nomes.length;i++) if(VV&&VV[nomes[i]]!=null&&isFinite(+VV[nomes[i]])) return c01(+VV[nomes[i]]);
    for(var j=0;j<nomes.length;j++) if(EL&&EL[nomes[j]]){ var v=capV(EL[nomes[j]],"top"); if(v!=null) return v; }
    if(fads[c-1]){ var w=capV(fads[c-1],"top"); if(w!=null) return w; }
    return null;
  }
  function masterDo(VV,EL){
    var k=knob("masterlvl"); if(k!=null) return k;
    k=knob("master");        if(k!=null) return k;
    k=knob("masterlevel");   if(k!=null) return k;
    if(VV){ var n=["fdrM","master","masterlvl","masterlevel","mastervol"];
      for(var i=0;i<n.length;i++) if(VV[n[i]]!=null&&isFinite(+VV[n[i]])) return c01(+VV[n[i]]); }
    if(EL&&EL.fdrM){ var v=capV(EL.fdrM,"top"); if(v!=null) return v; }
    return null;
  }
  function selIdxDo(c,SW,SWS){
    if(typeof SW==="function"){ try{ var p=SW("sel"+c); if(p!=null&&isFinite(p)) return p; }catch(e){} }
    if(SWS){ if(SWS["sel"+c]!=null) return +SWS["sel"+c];
             if(SWS["sel"+LETRA[c-1]]!=null) return +SWS["sel"+LETRA[c-1]]; }
    var e=document.querySelector('[data-act="sel'+c+'"]')||document.querySelector('[data-act="sel'+LETRA[c-1]+'"]');
    return posClasse(e);
  }
  function estado(){
    var FV=G("faderVal"), EL=G("els"), SW=G("swPos"), AM=G("assignMode"),
        SL=G("SEL_LAB"), SWS=G("SWST"), VV=G("V");
    var fads=document.querySelectorAll(".fad,.fader");
    var est={fader:{},trim:{},eq:{},selIdx:{},selOps:{},assign:{},xf:null,master:null};
    for(var c=1;c<=6;c++){
      var v=faderDo(c,FV,VV,EL,fads); if(v!=null) est.fader[c]=v;
      var t=knob("trim"+c); if(t==null&&VV&&VV["trim"+c]!=null) t=c01(+VV["trim"+c]);
      if(t!=null) est.trim[c]=t;
      var h=knob("hi"+c), m=knob("mid"+c), l=knob("low"+c);
      if(h!=null||m!=null||l!=null) est.eq[c]={hi:h,mid:m,low:l};
      var pos=selIdxDo(c,SW,SWS);   if(pos!=null) est.selIdx[c]=pos;
      var ops=opcoesSel(SL&&SL[c-1]); if(ops) est.selOps[c]=ops;
      var a=null;
      if(AM&&AM[c]!=null) a=String(AM[c]);
      else { var ea=document.querySelector('[data-act="assign'+c+'"]'); var p=posClasse(ea);
        if(p!=null) a=["A","THRU","B"][p]; }
      if(a) est.assign[c]=a;
    }
    var X=G("xf");
    if(typeof X==="number"&&isFinite(X)) est.xf=c01(X);
    else if(VV&&VV.crossfader!=null&&isFinite(+VV.crossfader)) est.xf=c01(+VV.crossfader);
    else est.xf=capV(document.querySelector(".xfad,.xf"),"left");
    est.master = masterDo(VV,EL);
    return est;
  }

  /* ---------- 4. conversa ---------- */
  var anterior="";
  window.addEventListener("message",function(e){
    var d=e.data; if(!d||!d.smu) return;
    if(d.smu==="vol"){ volume(typeof d.v==="number"?d.v:1, d.eq||null); return; }
    if(d.smu==="tam?"){ mandaTam(); return; }
    if(d.smu==="vu"){ porVU(d); return; }
    if(d.smu==="estado?"){ env({smu:"estado",est:estado()}); return; }
    if(d.smu==="faixas?"){
      var f=(window.BANCO_SMU&&window.BANCO_SMU.faixas)||[];
      env({smu:"faixas", lista:f.map(function(x,i){
        return {i:i, nome:x.nome||x.titulo||("Faixa "+(i+1)), bpm:x.bpm||null}; })});
      return;
    }
    /* -------------------------------------------------------------------
       TROCAR A FAIXA — antes isto exigia window.BANCO_SMU no aparelho.
       So alguns dos 29 tem o Banco dentro; nos outros a escolha do aluno era
       IGNORADA em silencio e o deck seguia com a faixa de demonstracao
       (era por isso que o visor mostrava "SMU-DEMO-128" depois de escolher).
       Agora a PONTE baixa e decodifica ela mesma e entrega o buffer pronto,
       entao funciona em qualquer aparelho, com ou sem Banco.             */
    if(d.smu==="faixa"){
      /* se o aparelho tem Banco, mantem o caminho nativo dele */
      if(window.BANCO_SMU){
        var L=window.BANCO_SMU.faixas||[];
        window.BANCO_SMU.escolhida = (d.i===null||d.i===undefined) ? null : L[d.i];
      }
      if(!d.url){ return; }              /* tirou a faixa: volta a demo */
      trocarFaixa(d.url, d.nome, d.bpm);
      return;
    }
    /* tela cheia: o contrato html.smu-fs desce ate o simulador */
    if(d.smu==="fullscreen"){ document.documentElement.classList.toggle("smu-fs",!!d.on);
      dispatchEvent(new Event("resize")); return; }
    /* a ponte do YouTube mora na moldura da aula; aqui so passa */
    if(d.smu==="ytev"){ return; }
  });

  /* ---------------------------------------------------------------------
     Baixa o MP3, decodifica no AudioContext do proprio aparelho e enfia o
     buffer no motor dele. Nao existe uma API unica na frota, entao tentamos
     os tres caminhos que os simuladores usam, do mais limpo ao mais direto.
     URL absoluta com CORS estrela e obrigatoria: aqui a origem e opaca.     */
  var BUF_CACHE = {};
  function trocarFaixa(url, nome, bpm){
    var AC = window.__SMU_AC || window.AC || null;          /* o AC do sim */
    function aplicar(buf){
      var ok = false;
      /* 1) o caminho oficial da frota: renderTrack(kind) devolve o buffer.
            Embrulhamos para ele passar a devolver a faixa escolhida.      */
      if (typeof window.renderTrack === "function" && !window.__smuRTWrap){
        var orig = window.renderTrack;
        window.__smuRTWrap = true;
        window.renderTrack = function(kind){
          return window.__smuBuf || orig.apply(this, arguments);
        };
        ok = true;
      }
      window.__smuBuf = buf;
      /* 2) alguns guardam os decks num objeto: troca o buffer e o tamanho */
      ["decks","DECKS","D","d"].forEach(function(n){
        var o = window[n]; if(!o || typeof o!=="object") return;
        Object.keys(o).forEach(function(k){
          var dk = o[k]; if(!dk || typeof dk!=="object") return;
          if("buf" in dk || "buffer" in dk){
            if("buf" in dk) dk.buf = buf; else dk.buffer = buf;
            if("len" in dk) dk.len = buf.length;
            if("pos" in dk) dk.pos = 0;
            if("titulo" in dk) dk.titulo = nome;
            if("nome" in dk)   dk.nome   = nome;
            if(bpm && "bpm" in dk) dk.bpm = bpm;
            ok = true;
          }
        });
      });
      /* 3) alguns expoem um carregador direto */
      ["carregarFaixa","loadTrack","setTrack","carregar"].forEach(function(n){
        if(typeof window[n]==="function"){ try{ window[n](buf, nome, bpm); ok=true; }catch(e){} }
      });
      /* redesenha a forma de onda e o visor */
      ["frame","desenhar","render","draw","picos","peaks"].forEach(function(n){
        if(typeof window[n]==="function"){ try{ window[n](); }catch(e){} }
      });
      env({smu:"faixaOk", nome:nome, aplicada:ok});
    }
    if (BUF_CACHE[url]) { aplicar(BUF_CACHE[url]); return; }
    fetch(url).then(function(r){
      if(!r.ok) throw new Error("HTTP "+r.status);
      return r.arrayBuffer();
    }).then(function(ab){
      if(!AC) throw new Error("o aparelho ainda nao ligou o audio");
      return AC.decodeAudioData(ab);
    }).then(function(buf){
      BUF_CACHE[url] = buf; aplicar(buf);
    }).catch(function(e){
      env({smu:"faixaErro", nome:nome, erro:String(e && e.message || e)});
    });
  }

  function bater(){
    var e=estado(); var j=JSON.stringify(e);
    if(j!==anterior){ anterior=j; env({smu:"estado",est:e}); }
    env({smu:"nivel",v:pico()});
  }
  function comecar(){ mandaTam(); setTimeout(mandaTam,400); setTimeout(mandaTam,1500);
    setInterval(bater,150); }
  if(document.readyState==="complete"||document.readyState==="interactive") setTimeout(comecar,0);
  else window.addEventListener("DOMContentLoaded",comecar);
  window.addEventListener("resize",mandaTam);

  window.__SMU_EMBUTIDO = 1;   /* o Banco SMU nao monta a barra aqui dentro */
})();
<\/script>`;

/* A CAIXA-PRETA sozinha: so escuta erro e responde sonda. Nao embrulha o
   AudioContext, nao redesenha o prato, nao manda tamanho. E o "aparelho cru"
   do teste — passiva de proposito, senao eu media as cegas.                */
const CAIXA_PRETA = PONTE.slice(0, PONTE.indexOf("/* ---------------------------------------------------------------------------\n   PRATO EM BRANCO")) + "<\\/script>";

/* A ponte MINIMA do build de diagnostico: caixa-preta + envio do tamanho. */
const PONTE_MIN = PONTE.slice(0, PONTE.indexOf("/* ---------------------------------------------------------------------------\n   PRATO EM BRANCO")) + `
(function(){
  var PAI=(window.parent&&window.parent!==window)?window.parent:null;
  function env(m){ if(PAI) try{ PAI.postMessage(m,"*"); }catch(e){} }
  function mandaTam(){ var w=document.querySelector(".wrap")||document.body;
    var t={w:w.offsetWidth||560,h:w.offsetHeight||760};
    if(t.w>0&&t.h>0) env({smu:"tam",w:t.w,h:t.h}); }
  addEventListener("DOMContentLoaded",function(){ mandaTam(); setTimeout(mandaTam,400); setTimeout(mandaTam,1500); });
  addEventListener("resize",mandaTam);
  window.__SMU_EMBUTIDO=1;
})();
<\/script>`;
const PONTE_USADA = argPonte === "full" ? PONTE : argPonte === "min" ? PONTE_MIN : CAIXA_PRETA;

/* ==========================================================================
   TRASEIRAS — normalizacao dos dois JSON num formato so
   ========================================================================== */
function categoria(sig, tipo) {
  const s = `${sig || ""} ${tipo || ""}`;
  if (/cabo cativo/i.test(tipo || "")) return "plugAC";
  if (/tomada IEC|entrada do cabo de forca|AC \(~\)|\bAC IN\b/i.test(s)) return "ac";
  if (/jack de forca DC|conector barril|fonte externa|DC IN/i.test(s)) return "dcin";
  if (/RJ45/i.test(s)) return "link";
  if (/parafuso de terra|borne|EARTH|SIGNAL GND/i.test(s)) return "gnd";
  if (/entrada phono|entrada de linha|pares RCA com chave|pares RCA por canal/i.test(tipo || "")) return "rca-in";
  if (/RCA \(saida analogica\)|saida phono|par RCA \(saida\)$/i.test(tipo || "")) return "rca-out";
  return "outro";
}
function nPortas(tipo) {
  const m = /(\d+)\s*(?:x\s*)?RJ45/i.exec(tipo || "");
  return m ? +m[1] : 1;
}
/* junta o par L/R de um player num alvo so: o aluno pluga O CABO, nao o pino */
function agrupaPares(itens) {
  const saida = [];
  for (const c of itens) {
    const ant = saida[saida.length - 1];
    if (ant && ant.cat === c.cat && (c.cat === "rca-out" || c.cat === "rca-in") && ant.sig === c.sig) {
      const x0 = Math.min(ant.x, c.x), y0 = Math.min(ant.y, c.y);
      const x1 = Math.max(ant.x + ant.w, c.x + c.w), y1 = Math.max(ant.y + ant.h, c.y + c.h);
      ant.x = x0; ant.y = y0; ant.w = x1 - x0; ant.h = y1 - y0;
      ant.det = "L+R";
      continue;
    }
    saida.push({ ...c });
  }
  return saida;
}
function lerTraseiras() {
  const players = JSON.parse(fs.readFileSync(path.join(REF, "traseiras.json"), "utf8")).modelos;
  const mix = JSON.parse(fs.readFileSync(path.join(REF, "traseiras-mixers.json"), "utf8"));
  const fora = {};

  for (const [chave, v] of Object.entries(players)) {
    const r = v.recorte_pt;
    const cons = v.conectores || [];
    if (!r || !cons.length) {
      fora[chave] = {
        temDados: false,
        modelo: v.modelo,
        motivo: (v.fonte && v.fonte.ressalva) || (v.dimensoes_mm && v.dimensoes_mm.fonte) || "manual sem figura de painel traseiro.",
        cativoAC: /cativ|CATIVO|cabo de forca CATIVO|nao tem conectores/i.test(v.observacao_layout || ""),
        cativoRCA: /PHONO CATIVO|cabo PHONO CATIVO/i.test(v.observacao_layout || ""),
        cativoGND: /spade lug|garfo/i.test(v.observacao_layout || ""),
      };
      continue;
    }
    const itens = agrupaPares(cons.map(c => ({
      sig: c.serigrafia || (c.detalhe || "conector"),
      det: c.serigrafia ? (c.detalhe || "") : "",
      tipo: c.tipo, cat: categoria(c.serigrafia, c.tipo), canal: null,
      portas: nPortas(c.tipo),
      x: c.x, y: c.y, w: c.w, h: c.h,
    })));
    fora[chave] = {
      temDados: true, modelo: v.modelo,
      razao: (r.x1 - r.x0) / (r.y1 - r.y0),
      fonte: `manual ${v.modelo}${v.fonte && v.fonte.pagina ? " p." + v.fonte.pagina : ""}`,
      itens,
    };
  }

  for (const grupo of ["mixers", "tudo_em_um"]) {
    for (const [chave, v] of Object.entries(mix[grupo] || {})) {
      const cons = v.conectores || [];
      if (!cons.length) { fora[chave] = { temDados: false, modelo: v.nome, motivo: "sem lista de conectores no JSON." }; continue; }
      const itens = agrupaPares(cons.map(c => ({
        sig: c.serigrafia, det: "", tipo: c.tipo,
        cat: categoria(c.serigrafia, c.tipo), canal: c.canal ?? null,
        portas: nPortas(c.tipo),
        x: c.x_pct - c.largura_pct / 2, y: c.y_pct - c.altura_pct / 2,
        w: c.largura_pct, h: c.altura_pct,
      })));
      fora[chave] = {
        temDados: true, modelo: v.nome,
        razao: v.razao_largura_altura_medida || 3.5,
        canais: v.canais || null,
        ordemCanais: v.ordem_dos_canais || null,
        fonte: String(v.fonte || "").split(",")[0].slice(0, 60),
        itens,
      };
    }
  }
  return fora;
}

/* ========================================================================== */
function acharSim(nome) {
  const pilha = [SIMS];
  while (pilha.length) {
    const d = pilha.pop();
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const q = path.join(d, e.name);
      if (e.isDirectory()) pilha.push(q); else if (e.name === nome) return q;
    }
  }
  return null;
}
const esc = s => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const traseiras = lerTraseiras();

const lista = CATALOGO.map(c => {
  const p = acharSim(c.arq);
  if (!p) throw new Error("simulador nao encontrado: " + c.arq);
  let h = fs.readFileSync(p, "utf8");
  const nome = (h.match(/<title>([^<]*)<\/title>/) || [, c.arq])[1].replace(/\s*—.*$/, "").trim();
  h = h.replace(/<head>/i, "<head>\n" + PONTE_USADA);
  /* ------------------------------------------------------------------------
     ⛔ NAO APAGAR A BARRA `util`. ESCONDER.
     Isto aqui era `h.replace(/<div class="util">…<\/div>/, "")` — apagava a
     barra de missoes/Ligar audio do simulador. Parecia inofensivo: e so
     enfeite, a aula tem a barra dela.
     So que `build()` TERMINA chamando `renderMission()`, que faz
     `$("#mIdx").textContent = …`. Sem o `util` no DOM, `$("#mIdx")` e null e
     a linha ESTOURA. O `throw` sobe pelo `build()` e mata o `init()` inteiro:
        init(){ build(); frame(); paintFxCh(); $("#btnStart")…; fit(); }
     Resultado MEDIDO na aula (erro capturado pela caixa-preta, 3 de 3
     aparelhos): "Cannot set properties of null (setting 'textContent')" —
     o painel fica PINTADO mas o `frame()` nunca comeca, o visor nunca e
     desenhado (os "retangulos vazios"), o `fit()` nunca roda e o IIFE do
     `BANCO_SMU`, que vem depois do `init()` no MESMO script, nunca executa
     (por isso a faixa escolhida era ignorada).
     Era exatamente o que o dono viu: "esta pegando imagem que nao tem
     funcionalidade".
     Escondendo por CSS os elementos continuam no DOM, `renderMission()`
     acha o `#mIdx`, o `init()` chega ao fim e o aparelho fica VIVO — e a
     barra some da tela do aluno do mesmo jeito.                            */
  h = h.replace(/<\/head>/i,
    '<style>/* SMU: a barra do sim some da TELA, mas continua no DOM — apagar mata o init() */\n' +
    '.util{display:none!important}</style>\n</head>');
  return { id: c.id, tipo: c.tipo, sub: c.sub, nome, html: esc(h), kb: Math.round(h.length / 1024) };
});

/* mapa id-do-catalogo -> traseira normalizada (so o que existe) */
const TRAS = {};
for (const c of CATALOGO) {
  const t = c.tras ? traseiras[c.tras] : null;
  TRAS[c.id] = t || { temDados: false, modelo: c.id, motivo: "não há figura de painel traseiro conferida para este modelo." };
}

const modelo = fs.readFileSync(path.join(DIR_AULAS, "_cabine-modelo.html"), "utf8");
const jsonSims = JSON.stringify(lista);
const jsonTras = JSON.stringify(TRAS);

for (const a of AULAS) {
  /* replace com FUNCAO de proposito: com string, um "$&" ou "$'" dentro do HTML
     de algum simulador seria interpretado como referencia da substituicao. */
  const out = modelo
    .replace("__SIMS__", () => jsonSims)
    .replace("__TRAS__", () => jsonTras)
    .replace("__MODO__", () => a.modo)
    .replace("__PRESET__", () => JSON.stringify(a.preset || null));
  for (const marca of ["__SIMS__", "__TRAS__", "__MODO__", "__PRESET__"])
    if (out.includes(marca)) throw new Error(`o modelo nao tem o marcador ${marca}: ${a.arq}`);
  const nomeSaida = a.arq.replace(/\.html$/, SUFIXO + ".html");
  fs.writeFileSync(path.join(DIR_AULAS, nomeSaida), out, "utf8");
  console.log(`aula montada [${a.modo}] ponte=${argPonte}: ${nomeSaida} — ${(out.length / 1024).toFixed(0)}KB`);
}

const comDados = Object.values(TRAS).filter(t => t.temDados).length;
const conect = Object.values(TRAS).reduce((n, t) => n + ((t.itens || []).length), 0);
console.log(`\n${lista.length} simuladores embutidos.`);
console.log(`traseiras: ${comDados}/${Object.keys(TRAS).length} com figura do manual · ${conect} conectores posicionados`);
Object.entries(TRAS).filter(([, t]) => !t.temDados).forEach(([k]) => console.log(`  ⚠️ ESTIMADO (sem traseira): ${k}`));
