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
  /* CABINES de aula: as tres estavam servindo simulador generico sem POS.
     Agora usam os aparelhos de verdade, travados pelo preset. */
  { modo: "praticando", arq: "cabine-cdj2000-djm900.html",
    preset: { d1:"cdj2000", mix:"djm900", d2:"cdj2000" } },
  { modo: "praticando", arq: "cabine-cdj3000-djmv10.html",
    preset: { d1:"cdj3000", mix:"djmv10", d2:"cdj3000" } },
  { modo: "praticando", arq: "cabine-cdj3000-djma9.html",
    preset: { d1:"cdj3000", mix:"djma9", d2:"cdj3000" } },
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

/* ==========================================================================
   VISOR — como CADA aparelho escolhe musica NA TELA DELE
   --------------------------------------------------------------------------
   Ordem do dono (29/07/2026): "as musicas devem ser selecionadas na tela da
   CDJ e nao em uma lista no cabecalho, ate a procura do YouTube".

   Aqui nao se chuta: o modo sai do que o aparelho REALMENTE tem.
     "lista"  visor grafico que mostra LISTA de faixas (browse do proprio
              aparelho). toque:true so onde a tela e SENSIVEL AO TOQUE —
              CDJ-2000NXS2 (7" touch), CDJ-3000 (9" touch), XDJ-700 (7" touch),
              XDJ-1000MK2 (7" touch), OPUS-QUAD (10,1" touch), XDJ-AZ (touch),
              Prime 4 (10,1" touch). CDJ-850 e CDJ-900NXS TEM lista no visor
              mas a tela NAO e touch: navegam so pelo SELETOR ROTATIVO.
     "faixa"  visor de texto/segmento: nao existe lista rolando. E CD player —
              anda faixa a faixa com TRACK SEARCH, que ja e o gesto real.
              texto:false no CDJ-100S, que nao mostra titulo (so numero).
     "nativo" o aparelho JA tem browse proprio (bloco BROWSE-USB-PADRAO):
              XDJ-RR / RX2 / RX3 / XZ. Nao se poe nada por cima — a playlist
              da aula e injetada no BANCO_SMU e o browse dele mostra.
     "nenhum" NAO TEM VISOR (toca-discos). ⛔ Nao inventar display: a escolha
              cai no painel de ensino do proprio simulador.

   carga: como a faixa entra no motor de audio do aparelho, MEDIDO no codigo:
     "deck"    o onaudioprocess le D.data a CADA chamada -> trocar o buffer no
               objeto do deck ja muda o som (OPUS-QUAD e Prime 4).
     "reload"  o onaudioprocess fechou por cima de `data`/`len` do startAudio()
               -> trocar D.data NAO muda o som. Para valer, o audio e religado
               (e o que a CDJ real faz no LOAD: zera pitch, cue e loops).

   demo: o TITULO DE DEMONSTRACAO que o simulador desenha no visor, LITERAL,
   copiado do fillText de cada arquivo. A ponte troca por IGUALDADE EXATA (nada
   de regex solta em cima do canvas: um "DEMO" generico reescreveria texto que
   nao e titulo). Aparelho cujo visor nao mostra titulo nao entra na lista.
   ========================================================================== */
const V_CD    = (t, demo) => ({ modo:"faixa", texto:t !== false, decks:1, carga:"reload", demo:demo||[] });
const V_LISTA = (toque, decks, carga, demo) => ({ modo:"lista", toque:!!toque, decks:decks||1, carga:carga||"reload", demo:demo||[] });

/* TODOS os simuladores ficam disponiveis (ordem do dono).
   `tras` = chave do modelo nos JSON de _ref-traseiras. null = sem fonte. */
const CATALOGO = [
  /* --- players digitais: saida LINE --- */
  { id:"cdj100s",  arq:"pioneer-cdj-100s-real.html",     tipo:"deck", sub:"CD player · Jog Break",        tras:"cdj-100s", visor:V_CD(false) },
  { id:"cdj200",   arq:"pioneer-cdj-200-real.html",      tipo:"deck", sub:"CD compacto · Beat Loop",      tras:"cdj-200", visor:V_CD(false) },
  { id:"cdj400",   arq:"pioneer-cdj-400-real.html",      tipo:"deck", sub:"CD/USB · Hot Loop",            tras:"cdj-400", visor:V_CD(true,["SMU-DEMO-128"]) },
  { id:"cdj800mk2",arq:"pioneer-cdj-800mk2-real.html",   tipo:"deck", sub:"vinil · Auto Beat Loop",       tras:"cdj-800mk2", visor:V_CD(true,["SMU-PRO / DEMO 128"]) },
  { id:"cdj850",   arq:"pioneer-cdj-850-real.html",      tipo:"deck", sub:"rekordbox · jog grande",       tras:"cdj-850", visor:V_LISTA(false) },
  { id:"cdj900nxs",arq:"pioneer-cdj-900nxs-real.html",   tipo:"deck", sub:"Nexus · memoria de pontos",    tras:"cdj-900nxs", visor:V_LISTA(false,1,"reload",["♪ Catch The Break"]) },
  { id:"cdj1000",  arq:"pioneer-cdj-1000mk3-real.html",  tipo:"deck", sub:"padrao de clube · scratch",    tras:"cdj-1000mk3", visor:V_CD(true,["SMU-DEMO-128","SMU-PRO / DEMO TRACK 128"]) },
  { id:"cdj2000",  arq:"pioneer-cdj-2000nxs2-real.html", tipo:"deck", sub:"tela colorida · 8 hot cue",    tras:"cdj-2000nxs2", visor:V_LISTA(true,1,"reload",["SMU DEMO — Dance Floor Bomb"]) },
  { id:"cdj3000",  arq:"pioneer-cdj-3000-real.html",     tipo:"deck", sub:"flagship · tela 9\"",          tras:"cdj-3000", visor:V_LISTA(true,1,"reload",["ABOVE THE CLOUD E.P."]) },
  { id:"xdj700",   arq:"pioneer-xdj-700-real.html",      tipo:"deck", sub:"USB · touch compacto",         tras:"xdj-700", visor:V_LISTA(true,1,"reload",["♪  SMU DEMO — Cryin' Through The Rain"]) },
  { id:"xdj1000",  arq:"pioneer-xdj-1000mk2-real.html",  tipo:"deck", sub:"touch 7\" · sem bandeja",      tras:"xdj-1000mk2", visor:V_LISTA(true) },
  /* --- toca-discos: saida PHONO + fio terra --- */
  { id:"plx1000",  arq:"pioneer-plx-1000-real.html",     tipo:"deck", sub:"toca-discos direct drive",     tras:"plx-1000", visor:{modo:"nenhum",decks:1,carga:"reload",demo:["TRAINING TRAX"]} },
  { id:"sl1200mk2",arq:"technics-sl1200mk2-real.html",   tipo:"deck", sub:"toca-discos · o classico",     tras:"technics-sl-1200mk2", visor:{modo:"nenhum",decks:1,carga:"reload",demo:[]} },
  { id:"sl1200",   arq:"technics-sl1200mk7-real.html",   tipo:"deck", sub:"toca-discos · atual",          tras:"technics-sl-1200mk7", visor:{modo:"nenhum",decks:1,carga:"reload",demo:[]} },
  /* --- tudo-em-um: player + mixer no MESMO corpo --- */
  { id:"xdjrr",    arq:"pioneer-xdj-rr-real.html",       tipo:"allinone", sub:"all-in-one · 2 canais",    tras:"xdj-rr", visor:{modo:"nativo",decks:2} },
  { id:"xdjrx2",   arq:"pioneer-xdj-rx2-real.html",      tipo:"allinone", sub:"all-in-one · tela 7\"",    tras:"xdj-rx2", visor:{modo:"nativo",decks:2} },
  { id:"xdjrx3",   arq:"pioneer-xdj-rx3-real.html",      tipo:"allinone", sub:"all-in-one · tela 10,1\"", tras:"xdj-rx3", visor:{modo:"nativo",decks:2} },
  { id:"xdjxz",    arq:"pioneer-xdj-xz-real.html",       tipo:"allinone", sub:"all-in-one · 4 canais",    tras:"xdj-xz", visor:{modo:"nativo",decks:2} },
  { id:"opusquad", arq:"alphatheta-opus-quad-real.html", tipo:"allinone", sub:"AlphaTheta · 4 decks",     tras:"opus-quad", visor:V_LISTA(true,2,"deck") },
  { id:"xdjaz",    arq:"alphatheta-xdj-az-real.html",    tipo:"allinone", sub:"AlphaTheta · bateria",     tras:"xdj-az", visor:V_LISTA(true,2,"reload") },
  { id:"prime4",   arq:"denon-prime4-real.html",         tipo:"allinone", sub:"Denon · 4 decks + tela",   tras:"prime4", visor:V_LISTA(true,2,"deck") },
  /* --- mixers --- */
  { id:"djm450",   arq:"pioneer-djm-450-real.html",      tipo:"mixer", sub:"2 canais · COLOR FX",         tras:"djm-450" },
  { id:"djm600",   arq:"pioneer-djm-600-real.html",      tipo:"mixer", sub:"4 canais · Beat FX",          tras:"djm-600" },
  { id:"djm750",   arq:"pioneer-djm-750mk2-real.html",   tipo:"mixer", sub:"4 canais · COLOR",            tras:"djm-750mk2" },
  { id:"djm800",   arq:"pioneer-djm-800-real.html",      tipo:"mixer", sub:"4 canais · COLOR",            tras:"djm-800" },
  { id:"djm900",   arq:"pioneer-djm-900nxs2-real.html",  tipo:"mixer", sub:"4 canais · padrao de clube",  tras:"djm-900nxs2" },
  { id:"djm2000",  arq:"pioneer-djm-2000-real.html",     tipo:"mixer", sub:"4 canais · flagship",         tras:"djm-2000" },
  { id:"djma9",    arq:"pioneer-djm-a9-real.html",       tipo:"mixer", sub:"flagship · 4 canais · MULTI I/O" },
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
  var ultVol = {v:1, eq:null, filtros:null, temPedido:false};
  if(O){
    function P(){
      var c=new O(), destReal=c.destination;
      /* ⛔ PODA. O LOAD do visor RELIGA o audio do aparelho (fecha o contexto e
         chama startAudio() de novo). Sem podar, __cad[0] fica sendo o contexto
         MORTO — o pico() mediria silencio para sempre e a aula acusaria
         "o player nao esta tocando" com a musica no ar. */
      window.__cad = (window.__cad||[]).filter(function(a){
        try{ return a.ctx && a.ctx.state !== "closed"; }catch(e){ return false; } });
      window.__g = window.__cad.map(function(a){ return a.g; });
      var pre=c.createGain(); pre.gain.value=1;          /* o sim conecta AQUI */
      var an=c.createAnalyser(); an.fftSize=512; pre.connect(an);
      var g=c.createGain(); g.gain.value=1; pre.connect(g);
      /* ---------------------------------------------------------------
         A TIRA DE CANAL DO MIXER, DENTRO DO DECK.
         O audio nao atravessa o iframe, entao o timbre nao pode "vir
         pronto" do mixer. O que atravessa e a DESCRICAO dos filtros que o
         mixer tem ligados; aqui existem biquads DE VERDADE, e o som do
         player passa por eles. Quatro: as 3 bandas do EQ + o COLOR/FILTER.
         O tipo/frequencia/Q de cada um NAO e chutado aqui — chega do
         proprio no do mixer (ver a funcao cadeia() no lado mixer). Estes valores
         iniciais so valem enquanto o mixer nao falou.                  */
      var lo=c.createBiquadFilter(); lo.type="lowshelf";  lo.frequency.value=200;  lo.gain.value=0;
      var md=c.createBiquadFilter(); md.type="peaking";   md.frequency.value=1000; md.Q.value=0.9; md.gain.value=0;
      var hi=c.createBiquadFilter(); hi.type="highshelf"; hi.frequency.value=4000; hi.gain.value=0;
      var col=c.createBiquadFilter(); col.type="allpass"; col.frequency.value=1000; col.Q.value=1; col.gain.value=0;
      /* 5a casa: mixer de 4 bandas (DJM-V10) precisa dela alem do FILTER */
      var col2=c.createBiquadFilter(); col2.type="allpass"; col2.frequency.value=1000; col2.Q.value=1; col2.gain.value=0;
      /* torneira de bancada: 1 em producao. Serve para MEDIR sem tocar som
         na maquina de quem esta testando (window.__SMU_MUDO=1). */
      var sai=c.createGain(); sai.gain.value = window.__SMU_MUDO ? 0 : 1;
      g.connect(lo); lo.connect(md); md.connect(hi); hi.connect(col); col.connect(col2);
      col2.connect(sai); sai.connect(destReal);
      try{ Object.defineProperty(c,"destination",{get:function(){return pre},configurable:true}); }catch(e){}
      var reg={ctx:c,an:an,g:g,lo:lo,md:md,hi:hi,col:col,col2:col2,sai:sai,dest:destReal};
      reg.f=[lo,md,hi,col,col2];
      window.__g.push(g); window.__cad.push(reg);
      if(ultVol.temPedido){                 /* o pedido que chegou antes da hora */
        g.gain.value = ultVol.v;
        if(ultVol.eq){ lo.gain.value=ultVol.eq.low||0; md.gain.value=ultVol.eq.mid||0; hi.gain.value=ultVol.eq.hi||0; }
        if(ultVol.filtros) porFiltros(reg, ultVol.filtros, true);
      }
      return c;
    }
    P.prototype=O.prototype; window.AudioContext=P; window.webkitAudioContext=P;
  }
  function rampa(p,v){ try{
      if(!isFinite(v)) return;
      if(Math.abs(p.value-v) < 1e-6) return;         /* ja esta la: nao agenda nada */
      var t=(window.__cad[0]&&window.__cad[0].ctx?window.__cad[0].ctx.currentTime:0);
      p.cancelScheduledValues(t); p.setValueAtTime(p.value,t); p.linearRampToValueAtTime(v,t+0.02);
    }catch(e){ try{ p.value=v; }catch(_){} } }
  /* ---------------------------------------------------------------------
     O TIMBRE DO MIXER APLICADO AQUI DENTRO.
     O parametro fs e a lista de filtros que o mixer REALMENTE tem ligados, cada um
     {t:tipo, f:frequencia, q:Q, g:ganho em dB}, lida dos nos dele. Nada e
     inventado deste lado: se o mixer nao mandar, o filtro fica em allpass
     (transparente), que e o mesmo que nao existir.
     ⚠️ Rampa LINEAR de 20 ms, que TERMINA. Nada de setTargetAtTime: ele e
     exponencial e nunca acaba, o parametro vira a-rate e o biquad passa a
     recalcular coeficiente por amostra (34,5% de CPU na CL5).           */
  function porFiltros(a, fs, direto){
    if(!a || !a.f) return;
    for(var i=0;i<a.f.length;i++){
      var n=a.f[i], s=fs&&fs[i];
      if(!s){                                   /* sobra de filtro: transparente */
        try{ n.type="allpass"; }catch(e){}
        if(direto){ try{ n.gain.value=0; }catch(e){} } else rampa(n.gain,0);
        continue;
      }
      try{ if(s.t && n.type!==s.t) n.type=s.t; }catch(e){}
      if(direto){
        try{ if(s.f!=null) n.frequency.value=s.f; if(s.q!=null) n.Q.value=s.q; if(s.g!=null) n.gain.value=s.g; }catch(e){}
      } else {
        if(s.f!=null) rampa(n.frequency, s.f);
        if(s.q!=null) rampa(n.Q, s.q);
        if(s.g!=null) rampa(n.gain, s.g);
      }
    }
  }
  function volume(v,eq,filtros){
    ultVol.v = v; ultVol.eq = eq; if(filtros!==undefined) ultVol.filtros = filtros;
    ultVol.temPedido = true;
    (window.__cad||[]).forEach(function(a){
      rampa(a.g.gain, v);
      if(filtros) porFiltros(a, filtros, false);
      else if(eq){ rampa(a.lo.gain, eq.low||0); rampa(a.md.gain, eq.mid||0); rampa(a.hi.gain, eq.hi||0); }
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
  function po(o){ return o && typeof o==="object"; }
  /* ---------------------------------------------------------------------
     OS CANAIS DO MIXER — o mesmo levantamento arquivo por arquivo que ja
     servia para achar os analisadores serve para achar a TIRA DE CANAL
     inteira. Cada simulador guarda o canal num objeto so; o que muda e o
     nome da variavel.                                                   */
  function achaCanais(){
    var C={};
    try{ if(typeof chans!=="undefined" && po(chans))
      for(var k in chans){ if(po(chans[k])) C[k]=chans[k]; } }catch(e){}
    try{ if(!C["1"] && typeof d!=="undefined" && po(d) && (d.fader||d.trim)) C["1"]=d; }catch(e){}
    try{ if(!C["2"] && typeof b!=="undefined" && po(b) && (b.fader||b.trim)) C["2"]=b; }catch(e){}
    try{ if(!C["1"] && typeof dA!=="undefined" && po(dA) && (dA.fader||dA.trim)) C["1"]=dA; }catch(e){}
    try{ if(!C["2"] && typeof dB!=="undefined" && po(dB) && (dB.fader||dB.trim)) C["2"]=dB; }catch(e){}
    /* DJM-A9: os canais moram em CH */
    try{ if(!C["1"] && typeof CH!=="undefined" && po(CH))
      for(var j in CH){ if(po(CH[j])) C[j]=CH[j]; } }catch(e){}
    return C;
  }
  /* ⚠️ Procurar por NOME nao basta: ha simulador em que c.ch e o NUMERO do
     canal e nao o no de ganho. Por isso cada leitor so aceita o que de fato
     tem o parametro que ele vai ler, e segue procurando quando nao tem.    */
  function pgan(o,nomes){
    for(var i=0;i<nomes.length;i++){
      try{ var n=o[nomes[i]];
        if(n && n.gain && typeof n.gain.value==="number") return +n.gain.value;
      }catch(e){}
    }
    return null;
  }
  function pgan1(n){ try{ return (n && n.gain && typeof n.gain.value==="number") ? +n.gain.value : null; }catch(e){ return null; } }
  function pbq(o,nomes){
    for(var i=0;i<nomes.length;i++){
      try{ var n=o[nomes[i]];
        if(n && n.frequency && typeof n.frequency.value==="number" && n.type)
          return {t:String(n.type), f:+n.frequency.value, q:(n.Q?+n.Q.value:1), g:(n.gain?+n.gain.value:0)};
      }catch(e){}
    }
    return null;
  }
  /* ---------------------------------------------------------------------
     CADEIA — o caminho do som DENTRO do mixer, lido dos nos de audio.
     ⛔ Nao se re-deduz dB por angulo de knob aqui. O simulador ja converteu
     posicao em parametro (o DJM-900NXS2 faz -26..+6 dB por banda, e o TRIM
     -inf..+9 dB, exatamente como o manual dele). Ler o NO e a fonte de
     verdade; refazer a conta do lado de fora seria inventar uma segunda.
     So existe depois que o aluno liga o audio do mixer. Antes disso volta
     null e a aula cai no caminho antigo, por posicao de controle.       */
  function cadeia(){
    var C=achaCanais(), out={ch:{}, master:null, bus:{}}, achou=false;
    var xa=null, xb=null, th=null, ms=null, am=null;
    try{ if(typeof xfA!=="undefined") xa=xfA; }catch(e){}
    try{ if(typeof xfB!=="undefined") xb=xfB; }catch(e){}
    try{ if(typeof thru!=="undefined") th=thru; }catch(e){}
    try{ if(th==null && typeof thruBus!=="undefined") th=thruBus; }catch(e){}
    try{ if(typeof master!=="undefined") ms=master; }catch(e){}
    try{ if(typeof assignMode!=="undefined") am=assignMode; }catch(e){}
    try{ if(!am && typeof xfAssign!=="undefined" && po(xfAssign)) am=xfAssign; }catch(e){}   /* Denon X1850 */
    try{ if(!am && typeof SW!=="undefined" && po(SW))
      am={1:SW.assign1,2:SW.assign2,3:SW.assign3,4:SW.assign4}; }catch(e){}                  /* DJM-A9 */
    out.bus.A=pgan1(xa); out.bus.B=pgan1(xb); out.bus.T=pgan1(th);
    out.master=pgan1(ms);
    /* DJM-600: nao tem master global — o volume de saida mora no canal 1 */
    if(out.master==null) for(var m1 in C){ var mv=pgan(C[m1],["masterVol","masterG","mst"]);
      if(mv!=null){ out.master=mv; break; } }
    for(var k in C){
      var c=C[k];
      var e={
        trim : pgan(c,["trim","gain","gan"]),
        /* "ch" fica por ULTIMO de proposito: em alguns simuladores ch e o
           NUMERO do canal, nao o no de ganho. pgan() so aceita quem tem
           .gain.value, entao segue procurando em vez de aceitar o numero.
           ⚠️ chFader ANTES de fader, e a ordem tem motivo MEDIDO: no DJM-600 o
           objeto do canal 1 carrega os dois — "fader" e o volume de SAIDA do
           aparelho e "chFader" e o do canal. Lendo "fader" primeiro, o canal 1
           publicava o master e o canal 2 publicava o dele: o fader do canal 1
           nao mexia no deck 1 e o master mexia duas vezes. */
        fader: pgan(c,["chFader","chfader","fader","fdr","ch"]),
        hi   : pbq(c,["hi","high","eqHi","eqhi","treble"]),
        mid  : pbq(c,["mid","eqMid","eqmid","himid","midHi","midhi"]),
        low  : pbq(c,["low","eqLo","eqLow","eqlow","bass"]),
        color: pbq(c,["color","colour","filter","filt","filtro","cf"])
      };
      if(e.trim==null && e.fader==null && !e.hi && !e.low) continue;
      /* a 4a banda do DJM-V10 e o corte -inf do ISOLATOR entram como fator */
      var extra = pbq(c,["midLow","midlow","lowMid","lowmid","mid2"]);
      if(extra) e.mid2=extra;
      var iso = pgan(c,["isoCut","iso","kill"]);
      if(iso!=null && e.trim!=null) e.trim*=iso; else if(iso!=null) e.trim=iso;
      var src = pgan(c,["src","fonte","input"]);        /* seletor de entrada modelado no audio */
      if(src!=null && e.trim!=null) e.trim*=src;
      /* PARA QUE BARRAMENTO DO CROSSFADER ESTE CANAL VAI — tres fontes:
         1) o proprio canal ja aplica a lei do crossfader num no dele
            (DJM-2000: d.xf). E o mais fiel: nem precisa saber o assign.
         2) o assign publicado pelo simulador + o ganho do barramento.
         3) mixer de 2 canais sem assign nenhum (DJM-450): CH1 vai no A e CH2
            no B porque e assim que o proprio simulador liga o grafo
            (c.dry.connect(n==="1"?xfA:xfB)) — e assim que a mesa de battle e
            fisicamente montada. Em mixer de 4 canais NAO se chuta: fica nulo,
            e nulo faz o crossfader nao mexer no ganho. */
      var proprio = pgan(c,["xf","xfG","xfGain"]);
      var modo = null; try{ if(am && am[k]!=null) modo=String(am[k]); }catch(_){}
      if(proprio!=null) e.bus = proprio;
      else if(/^A$/i.test(modo||"")) e.bus = out.bus.A;
      else if(/^B$/i.test(modo||"")) e.bus = out.bus.B;
      else if(/THRU|OFF|CENTER/i.test(modo||"")) e.bus = (out.bus.T==null?1:out.bus.T);
      else e.bus = null;
      out.ch[k]=e; achou=true;
    }
    var chaves=Object.keys(out.ch);
    if(chaves.length===2 && out.ch[chaves[0]].bus==null && out.ch[chaves[1]].bus==null
       && out.bus.A!=null && out.bus.B!=null){
      out.ch[chaves[0]].bus = out.bus.A;
      out.ch[chaves[1]].bus = out.bus.B;
    }
    return achou ? out : null;
  }
  function achaAnalisadores(){
    var A={ch:{}, master:[]};
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
  /* ACHAR O ELEMENTO DE UM CONTROLE — nesta ordem, e a ordem tem motivo:
     o mapa els do proprio simulador vem primeiro porque e ele que guarda a
     PELE (e a pele e quem recebe a classe "on"); o [data-act] do DOM e a
     camada .hit transparente por cima, que nunca acende. Procurar so pelo
     data-act fazia todo CUE parecer apagado. */
  function elDe(EL, nomes){
    for(var i=0;i<nomes.length;i++){
      try{ if(EL && EL[nomes[i]]) return EL[nomes[i]]; }catch(e){}
    }
    for(var j=0;j<nomes.length;j++){
      var e2=document.querySelector('[data-act="'+nomes[j]+'"]');
      if(e2) return e2;
    }
    return null;
  }
  /* Posicao de uma CHAVE (2 ou 3 posicoes): o simulador marca com p1/p2.
     ⛔ So vale para CHAVE. Ler um KNOB por aqui devolve 0 sempre — e 0 nao e
     "nao sei", e "primeira posicao". Foi exatamente isso que aconteceu quando
     o seletor de entrada do DJM-900NXS2 (que e um knob rotativo, nao uma
     chave) passou a ser encontrado: a aula concluiu "o canal esta em USB A",
     achou que nao casava com o player e EMUDECEU os dois decks. Quem nao e
     chave sai NULO, e nulo a aula trata como "nao sei" — nunca como fechado. */
  function ehChave(el){ if(!el||!el.classList) return false;
    if(el.classList.contains("knob")) return false;
    return el.classList.contains("swp")||el.classList.contains("swv")||
           el.classList.contains("sw")||el.classList.contains("p1")||el.classList.contains("p2"); }
  function posClasse(el){ if(!ehChave(el)) return null;
    return el.classList.contains("p2")?2:el.classList.contains("p1")?1:0; }
  function knob(act){
    var KS=G("knobState"), VV=G("V");
    if(KS&&KS[act]!=null) return c01(+KS[act]);
    if(VV&&VV[act]!=null) return c01(+VV[act]);
    var e=elDe(G("els"),[act]);
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
    /* DJM-450: swPos e um OBJETO com a posicao de cada chave. E o estado do
       proprio simulador — vale mais que ler classe de CSS. */
    if(SW && typeof SW==="object"){
      if(SW["sel"+c]!=null && isFinite(+SW["sel"+c])) return +SW["sel"+c];
      if(SW["sel"+LETRA[c-1]]!=null && isFinite(+SW["sel"+LETRA[c-1]])) return +SW["sel"+LETRA[c-1]];
    }
    if(SWS){ if(SWS["sel"+c]!=null) return +SWS["sel"+c];
             if(SWS["sel"+LETRA[c-1]]!=null) return +SWS["sel"+LETRA[c-1]]; }
    return posClasse(elDe(G("els"),["sel"+c,"sel"+LETRA[c-1]]));
  }
  function estado(){
    var FV=G("faderVal"), EL=G("els"), SW=G("swPos"), AM=G("assignMode"),
        SL=G("SEL_LAB"), SWS=G("SWST"), VV=G("V");
    var fads=document.querySelectorAll(".fad,.fader");
    var est={fader:{},trim:{},eq:{},filter:{},cue:{},on:{},selIdx:{},selOps:{},assign:{},xf:null,master:null,aud:null};
    for(var c=1;c<=6;c++){
      var v=faderDo(c,FV,VV,EL,fads); if(v!=null) est.fader[c]=v;
      var t=knob("trim"+c); if(t==null&&VV&&VV["trim"+c]!=null) t=c01(+VV["trim"+c]);
      if(t!=null) est.trim[c]=t;
      var h=knob("hi"+c), m=knob("mid"+c), l=knob("low"+c);
      if(h!=null||m!=null||l!=null) est.eq[c]={hi:h,mid:m,low:l};
      /* FILTER / SOUND COLOR FX do canal: knob CENTRADO — 0,5 e neutro.
         Publicado em -1..+1, que e como o proprio simulador trata (setColor
         recebe (v-0,5)*2). O NOME do efeito escolhido vem em est.fx.       */
      var fl=knob("color"+c); if(fl==null) fl=knob("filter"+c); if(fl==null) fl=knob("filtro"+c);
      if(fl!=null) est.filter[c]=+( (fl-0.5)*2 ).toFixed(4);
      /* CUE do canal: e monitoracao de fone. Publicado para a aula MOSTRAR;
         ⛔ nao entra no ganho — ela nao tem saida de fone separada. */
      var ce=elDe(EL,["cue"+c,"cueCh"+c,"hp"+c]);
      if(ce&&ce.classList) est.cue[c]=ce.classList.contains("on");
      /* ON/OFF do canal: so os mixers que TEM a tecla. O DJM-900NXS2 nao tem
         (o painel do manual nao traz essa tecla) — ali fica indefinido, e a
         aula trata indefinido como LIGADO. Nao se inventa botao. */
      var oe=elDe(EL,["on"+c,"ch"+c+"on","chon"+c]);
      if(oe&&oe.classList) est.on[c]=oe.classList.contains("on");
      var pos=selIdxDo(c,SW,SWS);   if(pos!=null) est.selIdx[c]=pos;
      var ops=opcoesSel(SL&&SL[c-1]); if(ops) est.selOps[c]=ops;
      var a=null;
      if(AM&&AM[c]!=null) a=String(AM[c]);
      else { var p=posClasse(elDe(EL,["assign"+c]));
        if(p!=null) a=["A","THRU","B"][p]; }
      if(a) est.assign[c]=a;
    }
    var X=G("xf");
    if(typeof X==="number"&&isFinite(X)) est.xf=c01(X);
    else if(VV&&VV.crossfader!=null&&isFinite(+VV.crossfader)) est.xf=c01(+VV.crossfader);
    else est.xf=capV(document.querySelector(".xfad,.xf"),"left");
    est.master = masterDo(VV,EL);
    try{ if(typeof scType!=="undefined" && scType) est.fx=String(scType); }catch(e){}
    est.aud = cadeia();          /* a fonte de verdade, quando o audio ja ligou */
    return est;
  }

  /* ---------- 4. conversa ---------- */
  var anterior="";
  window.addEventListener("message",function(e){
    var d=e.data; if(!d||!d.smu) return;
    /* "canal" e o nome novo do mesmo caminho: o deck recebe a tira de canal
       que o mixer aplicou nele. "vol" continua valendo (contrato antigo). */
    if(d.smu==="canal"||d.smu==="vol"){
      volume(typeof d.v==="number"?d.v:(typeof d.g==="number"?d.g:1), d.eq||null,
             d.filtros!==undefined?d.filtros:undefined);
      return;
    }
    if(d.smu==="tam?"){ mandaTam(); return; }
    if(d.smu==="mudo"){ (window.__cad||[]).forEach(function(a){ try{ a.sai.gain.value = d.on?0:1; }catch(e){} });
      window.__SMU_MUDO = !!d.on; return; }
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

  /* ---------------------------------------------------------------------
     QUANDO O MIXER AVISA
     Antes so havia batida de 150 ms. Passar a avisar NA HORA tira o atraso
     de ate 150 ms que dava sensacao de fader mole.
     ⚠️ Nada de mandar mensagem a cada pointermove — foi redraw sincrono por
     movimento que travou o iPad. O ponteiro so LEVANTA UMA BANDEIRA; quem
     monta e envia o estado e o requestAnimationFrame, uma vez por quadro.
     A batida de 150 ms fica como rede: em aba escondida o rAF nao roda.   */
  var quadro=0;
  function publicar(){
    if(quadro){ try{ cancelAnimationFrame(quadro); }catch(e){} quadro=0; }
    var e=estado(); var j=JSON.stringify(e);
    if(j===anterior) return;
    anterior=j; env({smu:"estado",est:e});
    /* contrato por canal, que e como a aula pensa: um aviso por canal */
    for(var c=1;c<=2;c++){
      var q=e.eq[c]||{};
      env({smu:"mix", ch:c, trim:e.trim[c]==null?null:e.trim[c],
           hi:q.hi==null?null:q.hi, mid:q.mid==null?null:q.mid, low:q.low==null?null:q.low,
           filter:e.filter[c]==null?null:e.filter[c], fader:e.fader[c]==null?null:e.fader[c],
           xf:e.xf, cue:e.cue[c]==null?null:e.cue[c], on:e.on[c]==null?null:e.on[c],
           assign:e.assign[c]||null, master:e.master, fx:e.fx||null,
           aud:e.aud&&e.aud.ch?e.aud.ch[c]:null, audMaster:e.aud?e.aud.master:null});
    }
  }
  function agenda(){ if(quadro) return;
    quadro = (window.requestAnimationFrame||function(f){return setTimeout(f,16)})(function(){ quadro=0; publicar(); }); }
  function bater(){ publicar(); env({smu:"nivel",v:pico()}); }
  /* pendura o aviso nas proprias funcoes do simulador, sem reescrever nenhuma:
     declaracao function no topo do script vira propriedade de window, entao
     trocar window.setEq troca o que as chamadas de dentro enxergam. Chamamos
     a original SEMPRE e devolvemos o retorno dela. */
  function pendurar(){
    ["setEq","setColor","applyColor","applyAllColor","applyXf","setAssign","onKnob",
     "setFader","applyFader","applyEq","applyCross","applyTrim","setTrim","setMaster"]
    .forEach(function(n){
      var f=window[n];
      if(typeof f!=="function" || f.__smuAviso) return;
      var w=function(){ var r=f.apply(this,arguments); try{ agenda(); }catch(e){} return r; };
      w.__smuAviso=1; try{ window[n]=w; }catch(e){}
    });
  }
  function comecar(){ mandaTam(); setTimeout(mandaTam,400); setTimeout(mandaTam,1500);
    pendurar(); setTimeout(pendurar,1200);     /* de novo: quem so nasce no startAudio */
    /* so levanta a bandeira. Em pointermove sem botao apertado (mouse so
       passeando) nem isso: nao ha o que publicar e o estado() custa DOM. */
    var bandeira=function(ev){ if(ev.type==="pointermove" && !ev.buttons) return; agenda(); };
    ["pointerdown","pointermove","pointerup","pointercancel","wheel","keydown"]
      .forEach(function(t){ addEventListener(t, bandeira, true); });
    setInterval(bater,150); }
  if(document.readyState==="complete"||document.readyState==="interactive") setTimeout(comecar,0);
  else window.addEventListener("DOMContentLoaded",comecar);
  window.addEventListener("resize",mandaTam);

  window.__SMU_EMBUTIDO = 1;   /* o Banco SMU nao monta a barra aqui dentro */
})();
__VISOR__
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
/* ==========================================================================
   VISOR SMU — A MUSICA SE ESCOLHE NA TELA DO APARELHO
   --------------------------------------------------------------------------
   ORDEM DO DONO, palavra final (29/07/2026):
     "as musicas devem ser selecionadas na tela da CDJ e nao em uma lista no
      cabecalho, ate a procura do YouTube. E preciso que estas musicas possam
      ter varias salvas na playlist, assim o usuario vai mixando como um
      pen drive."

   POR QUE ESTE MODULO E NA PONTE, e nao dentro de cada simulador:
   sao 29 aparelhos. Reescrever o visor de cada um seria REDESENHAR A PELE —
   proibido. O que muda aqui e COMPORTAMENTO: a lista aparece EM CIMA do visor
   do proprio aparelho (mesma coisa que o bloco BROWSE-USB-PADRAO ja faz nos
   XDJ-RX2/RX3/XZ, onde "com a lista aberta o visor E a lista"), presa ao
   MESMO elemento de tela que o simulador desenha, e some quando fecha.

   COMO ABRE — pelo controle REAL do aparelho, nunca por botao inventado:
     BROWSE / MENU / TAG LIST / INFO ... telas do browse
     USB / SD / porta de midia ......... espetar a midia abre a lista
     SELETOR ROTATIVO .................. gira = anda · aperta = CARREGA
     BACK .............................. volta / fecha
     TRACK SEARCH ...................... anda na lista (e no CD player e o
                                         proprio gesto de trocar de faixa)
   A tela so responde a TOQUE onde a tela e touch de verdade (ver a tabela
   `visor` la em cima). No CDJ-850 e no CDJ-900NXS, tocar no visor avisa que
   aquele visor nao e sensivel — e o que acontece no aparelho.

   O CAMINHO DO AUDIO segue sendo o que ja funcionava: baixa o MP3, decodifica
   NO AudioContext DO PROPRIO APARELHO (senao a taxa de amostragem nao bate e a
   musica toca acelerada) e entrega ao motor dele.
   ⚠️ `AC` e `d` sao `let` de topo de script: NAO existem em `window`. Por isso
   se le por eval indireto — foi o que sempre faltou (o trocarFaixa antigo
   procurava window.AC, achava undefined e morria em "o aparelho ainda nao
   ligou o audio", em silencio).
   ========================================================================== */
const VISOR_JS = `
/* VISOR SMU — escolher musica na tela do aparelho */
(function(){
  var CFG = window.__SMU_VISOR;
  if(!CFG || !CFG.modo) return;                 /* mixer: nao escolhe musica */
  var PAI=(window.parent&&window.parent!==window)?window.parent:null;
  function env(m){ if(PAI) try{ PAI.postMessage(m,"*"); }catch(e){} }
  function ev(n){ try{ return (0,eval)(n); }catch(e){ return undefined; } }
  function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
  function clamp(v,a,b){ return v<a?a:v>b?b:v; }

  var ST = { slot:null, banco:[], playlist:[], aberto:false, tela:"raiz",
             sel:0, topo:0, lado:1, msg:"", carregada:{}, ocupado:false };
  window.__SMU_VISOR_ST = ST;                     /* a sonda da aula le daqui */

  /* ---------------------------------------------------------------------
     1. TITULO NO VISOR — troca por IGUALDADE EXATA do literal de demo.
     Nada de regex por cima do canvas: cada aparelho tem o titulo dele e um
     "DEMO" solto reescreveria texto que nao e titulo.                    */
  (function(){
    var lista = CFG.demo || [];
    if(!lista.length || !window.CanvasRenderingContext2D) return;
    var p = CanvasRenderingContext2D.prototype, orig = p.fillText;
    p.fillText = function(t,x,y,mw){
      if(typeof t === "string" && window.__SMU_TITULO){
        for(var i=0;i<lista.length;i++){
          if(t === lista[i]){
            /* preserva o prefixo grafico do aparelho (o "♪ " do CDJ-900NXS) */
            var pre = /^[^A-Za-z0-9]*/.exec(lista[i])[0];
            t = pre + window.__SMU_TITULO; break;
          }
        }
      }
      return (mw===undefined) ? orig.call(this,t,x,y) : orig.call(this,t,x,y,mw);
    };
  })();

  /* ---------------------------------------------------------------------
     2. CARREGAR DE VERDADE
     --------------------------------------------------------------------- */
  var CACHE = {};
  var CARGA = { buf:{}, bpm:{}, nome:{}, kinds:[] };

  /* renderTrack e o unico ponto comum aos 29 motores. Embrulhado, ele passa a
     devolver a faixa escolhida do lado pedido. A ORDEM em que o aparelho pede
     as faixas e que diz qual kind e o lado 1 e qual e o lado 2 — nao se chuta,
     grava-se na primeira vez. */
  function embrulharRender(){
    if(window.__smuVisorRT || typeof window.renderTrack !== "function") return;
    var orig = window.renderTrack; window.__smuVisorRT = 1;
    window.renderTrack = function(kind){
      var k = String(kind===undefined ? "_" : kind);
      if(CARGA.kinds.indexOf(k) < 0) CARGA.kinds.push(k);
      var lado = CARGA.kinds.indexOf(k) + 1;
      var b = CARGA.buf[lado];
      if(b){ window.__BANCO_BPM = CARGA.bpm[lado] || null; return b; }
      return orig.apply(this, arguments);
    };
  }

  function decksDo(){
    var fora = [];
    ["DK","decks","DECKS"].forEach(function(n){
      var o = ev(n); if(!o || typeof o !== "object") return;
      Object.keys(o).forEach(function(k){
        var v = o[k];
        if(v && typeof v === "object" && v.data && v.len && fora.indexOf(v) < 0) fora.push(v);
      });
    });
    ["d","dL","dR","dA","dB"].forEach(function(n){
      var v = ev(n);
      if(v && typeof v === "object" && v.data && v.len && fora.indexOf(v) < 0) fora.push(v);
    });
    return fora;
  }
  function picos(data,len){
    var N=320, p=new Float32Array(N), blk=Math.max(1,Math.floor(len/N));
    for(var i=0;i<N;i++){ var mx=0;
      for(var j=0;j<blk;j+=32){ var v=Math.abs(data[i*blk+j]||0); if(v>mx)mx=v; }
      p[i]=mx; }
    return p;
  }
  function acAtual(){ return ev("AC") || null; }
  function esperarDecks(){
    return new Promise(function(ok){
      var n = 0;
      (function bate(){
        var L = decksDo();
        if(L.length || n > 60) return ok(L);
        n++; setTimeout(bate, 100);
      })();
    });
  }

  async function baixar(url){
    if(CACHE[url]) return CACHE[url];
    var ac = acAtual();
    if(!ac && typeof window.startAudio === "function"){ await window.startAudio(); ac = acAtual(); }
    if(!ac) throw new Error("o aparelho ainda nao ligou o audio");
    var r = await fetch(url);
    if(!r.ok) throw new Error("HTTP " + r.status);
    var buf = await ac.decodeAudioData(await r.arrayBuffer());
    CACHE[url] = buf; return buf;
  }

  /* carga "deck": o onaudioprocess le D.data a cada chamada — trocar o buffer
     no objeto ja muda o som (medido em OPUS-QUAD e Prime 4). */
  function porNoDeck(D, buf, faixa){
    D.buffer = buf; D.data = buf.getChannelData(0); D.len = D.data.length;
    D.pos = 0; D.cuePoint = 0; D.rate = 0; D.playing = false;
    D.loopOn = false; D.loopIn = false;
    if(faixa.bpm) D.baseBpm = faixa.bpm;
    ["title","titulo","nome"].forEach(function(k){ if(k in D) D[k] = faixa.nome; });
    try{ D.peaks = picos(D.data, D.len); }catch(e){}
  }

  /* carga "reload": o onaudioprocess fechou por cima de "data"/"len" do
     startAudio() — trocar D.data NAO muda o som. Entao o audio e religado, que
     e o que a CDJ real faz no LOAD (zera pitch, cue e loops). */
  async function religar(){
    var ac = acAtual();
    if(ev("started")){
      try{ if(ac && ac.close) ac.close(); }catch(e){}
      try{ (0,eval)("started=false; ready=false;"); }catch(e){}
    }
    if(typeof window.startAudio !== "function") throw new Error("este aparelho nao expoe startAudio()");
    await window.startAudio();
  }

  /* Cala o que estiver tocando NESTE lado, venha de onde vier. Chamada antes
     de toda carga. O tipoNovo diz o que vai entrar, para nao derrubar a toa o
     motor que a proxima faixa vai usar. */
  async function silenciarLado(lado, tipoNovo){
    var anterior = ST.carregada && ST.carregada[lado];
    /* 1) se havia YouTube neste lado, para e desmonta o player da moldura —
          ele NAO morre sozinho: vive fora do iframe e sobrevive ao reload. */
    if(anterior && anterior.tipo === "yt"){
      var slot = (ST.slot||"1")+"-"+lado;
      env({smu:"yt", cmd:"stop",    slot:slot});
      env({smu:"yt", cmd:"unmount", slot:slot});
    }
    /* 2) se havia MP3 tocando e o que entra e YouTube, o motor do deck tem de
          calar — senao os dois tocam juntos. Pausa pelo proprio aparelho quando
          ele expoe pausa; se nao expoe, fecha o contexto (o proximo LOAD de MP3
          religa de qualquer jeito). */
    if(tipoNovo === "yt"){
      var parou = false;
      ["pausar","pause","pausePlay","stopAudio"].forEach(function(n){
        if(!parou && typeof window[n] === "function"){ try{ window[n](); parou = true; }catch(e){} }
      });
      if(!parou){
        var ac = acAtual();
        try{ if(ac && ac.state === "running" && ac.suspend) await ac.suspend(); }catch(e){}
      }
      /* zera o ponteiro dos decks para o visor nao mentir sobre o tempo */
      try{ decksDo().forEach(function(D){ if(D && "pos" in D) D.pos = 0; }); }catch(e){}
    }
  }

  /* ------------------------------------------------------------------
     TRANSPORTE DO YOUTUBE — o PLAY do aparelho tem de valer para ele.
     Faltava o elo: nao existia UM cmd:"play" no codigo todo. A faixa do
     YouTube carregava e ficava parada, porque o botao PLAY do aparelho
     dirige o motor de MP3 e o player do YouTube mora na moldura, sem
     ninguem mandando nele. Reclamacao do dono: "copio e colo o link e nao
     toca a musica".
     Aqui espelhamos o transporte do deck no player: o aluno aperta PLAY no
     aparelho e o YouTube anda junto. So dispara na MUDANCA, para nao
     inundar a moldura de mensagens a cada quadro.                       */
  var YT_ANT = {};                      /* lado -> ultimo estado espelhado */
  function espelharTransporte(){
    var L = decksDo();
    for(var lado=1; lado<=2; lado++){
      var f = ST.carregada && ST.carregada[lado];
      if(!f || f.tipo !== "yt"){ YT_ANT[lado] = undefined; continue; }
      var D = L[lado-1] || L[0];
      if(!D) continue;
      var tocando = !!(D.playing || D.tocando || D.play);
      if(YT_ANT[lado] === tocando) continue;   /* so na mudanca */
      YT_ANT[lado] = tocando;
      env({smu:"yt", cmd: tocando ? "play" : "pause", slot:(ST.slot||"1")+"-"+lado});
    }
  }
  /* Laco PROPRIO, e nao pendurado no publicar() do mixer: aquele vive em OUTRA
     IIFE (fecha antes desta) — chamar de la daria ReferenceError, que o
     try/catch engoliria calado e o conserto viraria nada.
     4 vezes por segundo basta: e transporte, nao e ganho. */
  setInterval(function(){ try{ espelharTransporte(); }catch(e){} }, 250);

  /* ⛔ E POR QUE O ESPELHO SOZINHO NAO BASTA.
     playDeck() do simulador comeca com um if(!ready) return: o d.playing SO muda
     se o audio de MP3 do deck ja tiver sido ligado. Quem poe uma faixa do
     YouTube nao aperta "Ligar audio" do MP3 — entao ready e falso, d.playing
     nunca vira verdadeiro, e observar essa variavel nunca dispara nada.
     Foi por isso que o primeiro conserto nao adiantou.
     Aqui interceptamos o BOTAO, que responde com audio ligado ou nao.        */
  var YT_TOCA = {};                     /* lado -> estamos tocando no YouTube? */
  function ladoDoAlvo(el){
    /* aparelho de 1 deck = lado 1. Nos de 2 decks o act termina em 1/2 ou L/R */
    var a = el.getAttribute("data-act") || "";
    if(/2$|R$|_R$/.test(a)) return 2;
    return 1;
  }
  function interceptarTransporte(){
    document.addEventListener("pointerdown", function(ev){
      var el = ev.target && ev.target.closest && ev.target.closest("[data-act]");
      if(!el) return;
      var act = el.getAttribute("data-act") || "";
      if(!/^(play|pp|playpause|cue)[0-9LR_]*$/i.test(act)) return;
      var lado = ladoDoAlvo(el);
      var f = ST.carregada && ST.carregada[lado];
      if(!f || f.tipo !== "yt") return;          /* faixa de MP3: nao e conosco */
      var slot = (ST.slot||"1")+"-"+lado;
      if(/^cue/i.test(act)){
        /* CUE na CDJ real: volta ao ponto e fica em pausa enquanto solto */
        env({smu:"yt", cmd:"seek",  slot:slot, val:0});
        env({smu:"yt", cmd:"pause", slot:slot});
        YT_TOCA[lado] = false;
        return;
      }
      YT_TOCA[lado] = !YT_TOCA[lado];
      env({smu:"yt", cmd: YT_TOCA[lado] ? "play" : "pause", slot:slot});
    }, true);                                    /* captura: antes do sim      */
  }
  try{ interceptarTransporte(); }catch(e){}

  async function carregar(lado, faixa){
    if(ST.ocupado) return;
    ST.ocupado = true; ST.msg = "carregando " + faixa.nome + "…"; pintar();
    try{
      /* ⛔ SILENCIAR O QUE JA TOCAVA NESTE LADO, SEMPRE.
         Faixa do banco e faixa do YouTube tocam em MOTORES DIFERENTES: o MP3
         no AudioContext do deck, o YouTube num player que vive na MOLDURA da
         aula, fora do iframe. Nenhum dos dois desligava o outro, entao carregar
         a segunda musica somava em cima da primeira — e atualizar a pagina nao
         resolvia, porque o player do YouTube esta FORA do que recarrega.
         Reclamacao do dono em 29/07/2026. */
      await silenciarLado(lado, faixa.tipo);

      if(faixa.tipo === "yt"){
        /* streaming: o player mora na moldura da aula (sem allow-same-origin o
           onReady nunca chega — provado em teste A/B). A ESCOLHA e daqui. */
        env({smu:"yt", cmd:"load", slot:(ST.slot||"1")+"-"+lado,
             label:"DECK "+lado, videoId:faixa.yt});
        ST.carregada[lado] = faixa; ST.msg = "";
        window.__SMU_TITULO = faixa.nome;
        env({smu:"carregou", lado:lado, nome:faixa.nome, bpm:faixa.bpm||null,
             tipo:"yt", amostras:0, taxa:0});
        fechar();
      } else {
        var buf = await baixar(faixa.url);
        embrulharRender();
        CARGA.buf[lado] = buf; CARGA.bpm[lado] = faixa.bpm || null; CARGA.nome[lado] = faixa.nome;
        if(CFG.carga === "deck"){
          /* ⛔ ESPERAR O MOTOR FICAR PRONTO. MEDIDO no Prime 4: apertar USB ja
             chama startAudio(), que e async — o AudioContext existe no mesmo
             instante mas os decks so nascem no fim. Sem esta espera o LOAD
             caia em "nao achei o deck deste aparelho" com o aparelho ligando
             normalmente atras. */
          var L = await esperarDecks();
          var D = L[lado-1] || L[0];
          if(!D) throw new Error("o aparelho ainda nao terminou de ligar o audio");
          porNoDeck(D, buf, faixa);
        } else {
          await religar();
        }
        ST.carregada[lado] = faixa;
        window.__SMU_TITULO = faixa.nome;
        var Dv = decksDo()[lado-1] || decksDo()[0] || {};
        ST.msg = "";
        env({smu:"carregou", lado:lado, nome:faixa.nome, bpm:faixa.bpm||null, tipo:"mp3",
             amostras:(Dv.len||buf.length), taxa:buf.sampleRate});
        fechar();
      }
    }catch(e){
      ST.msg = "falhou: " + (e && e.message || e);
      env({smu:"carregouErro", lado:lado, nome:faixa.nome, erro:String(e && e.message || e)});
      pintar();
    }
    ST.ocupado = false;
  }

  /* ---------------------------------------------------------------------
     3. A LISTA — o que o visor mostra
     --------------------------------------------------------------------- */
  /* A RAIZ e o nivel de cima do browse — a "arvore" que a CDJ real mostra
     (USB > Playlists > faixas). E ela que faz o aparelho de tela NAO sensivel
     navegar de verdade: gira o rotativo na pasta, aperta para entrar, BACK
     sobe um nivel. Sem isso, num CDJ-850 so daria para trocar de tela tocando
     no visor — e o visor dele nao e touch. */
  function raiz(){
    return [
      {id:"#playlist", pasta:"playlist", nome:"PLAYLIST — o seu pen drive (" + ST.playlist.length + ")"},
      {id:"#usb",      pasta:"usb",      nome:"USB — BANCO SMU (" + ST.banco.length + ")"},
      {id:"#yt",       pasta:"yt",       nome:"YOUTUBE — colar endereço"}
    ];
  }
  function itens(){
    if(ST.tela === "raiz") return raiz();
    if(ST.tela === "playlist") return ST.playlist;
    if(ST.tela === "yt") return [];
    return ST.banco;
  }
  function naPlaylist(f){
    for(var i=0;i<ST.playlist.length;i++) if(ST.playlist[i].id === f.id) return true;
    return false;
  }
  function ajustar(){
    if(CFG.modo === "faixa"){                 /* CD player: nao ha lista rolando */
      var L = ST.playlist.length ? ST.playlist : ST.banco;
      ST.sel = L.length ? clamp(ST.sel, 0, L.length - 1) : 0;
      return;
    }
    var n = itens().length;
    ST.sel = n ? clamp(ST.sel, 0, n-1) : 0;
    var vis = LINHAS();
    if(ST.sel < ST.topo) ST.topo = ST.sel;
    if(ST.sel > ST.topo + vis - 1) ST.topo = ST.sel - vis + 1;
    ST.topo = clamp(ST.topo, 0, Math.max(0, n - vis));
  }
  function mover(n){
    var t = itens().length; if(!t){ ST.sel=0; ST.topo=0; return; }
    ST.sel = (ST.sel + n % t + t) % t; ajustar(); pintar();
  }
  function confirmar(){
    var L = itens(), it = L[ST.sel];
    if(!it){ ST.msg = "nada para carregar"; pintar(); return; }
    if(it.pasta){ irPara(it.pasta); return; }        /* pasta: entra um nivel */
    carregar(ST.lado, it);
  }
  function irPara(tela){ ST.tela = tela; ST.sel = 0; ST.topo = 0; ST.msg = ""; ajustar(); pintar(); }
  /* BACK do Pioneer: volta UM nivel; no topo, sai. */
  function voltar(){
    if(!ST.aberto) return;
    if(ST.tela === "raiz") fechar(); else irPara("raiz");
  }
  function guardar(){                       /* + / − na playlist (o "pen drive") */
    var L = itens(), it = L[ST.sel]; if(!it || it.pasta) return;
    env({smu:"plToggle", faixa:it});
    ST.msg = naPlaylist(it) ? "tirada da playlist" : "guardada na playlist";
    pintar();
  }
  function abrir(tela){
    if(tela) ST.tela = tela;
    ST.aberto = true; ST.msg = ""; ajustar(); pintar();
  }
  function fechar(){ ST.aberto = false; pintar(); }

  /* ---------------------------------------------------------------------
     4. ONDE FICA A TELA DO APARELHO
     A lista e IRMA do canvas do visor e copia o posicionamento em % dele.
     Assim ela acompanha o fit()/transform do simulador sem medir nada em px
     (medir em px do viewport quebraria: o #stage e escalado por transform).
     --------------------------------------------------------------------- */
  var CX = null, OV = null;
  function achaTela(){
    if(CX && CX.isConnected) return CX;
    var e = null;
    var els = ev("els");
    if(els && els.display && els.display.isConnected) e = els.display;
    if(!e){
      var cands = [].slice.call(document.querySelectorAll("canvas"));
      var melhor = null, area = 0;
      for(var i=0;i<cands.length;i++){
        var c = cands[i];
        if(/jog/i.test(c.className)) continue;         /* o prato nao e visor */
        var w = c.offsetWidth, h = c.offsetHeight;
        if(!w || !h) continue;
        if(w/h < 1.15) continue;                        /* visor e deitado */
        if(w*h > area){ area = w*h; melhor = c; }
      }
      e = melhor;
    }
    CX = e; return e;
  }
  function molde(){
    var t = achaTela(); if(!t) return null;
    var pai = t.parentNode, s = t.style;
    if(!pai) return null;
    if(s.left && s.top && s.width && s.height)
      return {pai:pai, left:s.left, top:s.top, width:s.width, height:s.height};
    /* sem estilo em linha: cai para a caixa medida DENTRO do pai (o pai tambem
       esta dentro do transform, entao a conta continua valendo) */
    var rp = pai.getBoundingClientRect(), rt = t.getBoundingClientRect();
    if(!rp.width || !rp.height) return null;
    return {pai:pai,
      left:((rt.left-rp.left)/rp.width*100)+"%", top:((rt.top-rp.top)/rp.height*100)+"%",
      width:(rt.width/rp.width*100)+"%",         height:(rt.height/rp.height*100)+"%"};
  }
  function LINHAS(){
    if(!OV) return 7;
    var h = OV.clientHeight || 0;
    if(!h) return 7;
    return clamp(Math.floor((h*0.70) / Math.max(12, h*0.105)), 3, 12);
  }
`;

const VISOR_JS2 = `
  /* ---------------------------------------------------------------------
     5. DESENHO
     --------------------------------------------------------------------- */
  var CSS = "" +
  ".smuv{position:absolute;z-index:40;overflow:hidden;border-radius:2px;" +
    "background:#000205;color:#cfd8e3;font-family:Inter,Arial,sans-serif;" +
    "display:none;flex-direction:column;box-shadow:0 0 0 1px #0d2340 inset}" +
  ".smuv.on{display:flex}" +
  ".smuv *{box-sizing:border-box}" +
  ".smuv .tp{display:flex;align-items:center;gap:.35em;padding:.28em .5em;flex:0 0 auto;" +
    "background:linear-gradient(180deg,#16385f,#081a30);border-bottom:1px solid #0d2340}" +
  ".smuv .tab{font-size:.62em;font-weight:800;letter-spacing:.04em;padding:.28em .6em;border-radius:.35em;" +
    "color:#7f97b3;background:#0a1726;border:1px solid #13324f;white-space:nowrap}" +
  ".smuv .tab.on{color:#fff;background:#1d5f9e;border-color:#4a90d0}" +
  ".smuv .dv{margin-left:auto;font-size:.55em;font-weight:800;color:#8fa8c4;white-space:nowrap}" +
  ".smuv .co{display:flex;padding:.14em .6em;font-size:.52em;font-weight:800;color:#6d7684;flex:0 0 auto}" +
  ".smuv .co u{margin-left:auto;text-decoration:none}" +
  ".smuv .ls{flex:1 1 auto;min-height:0;overflow:hidden;display:flex;flex-direction:column}" +
  ".smuv .r{display:flex;align-items:center;gap:.4em;padding:0 .6em;font-size:.66em;font-weight:800;" +
    "flex:1 1 0;min-height:0;" +
    "color:#cfd8e3;background:#0d1219;border-bottom:1px solid #05080c}" +
  ".smuv .r:nth-child(even){background:#0b0f15}" +
  ".smuv .r.on{background:#1d5f9e;color:#fff;box-shadow:.16em 0 0 #8fd4ff inset}" +
  ".smuv .r i{font-style:normal;color:#242c37;flex:0 0 auto}" +
  ".smuv .r.pl i{color:#f0a63c}" +
  ".smuv .r b{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:800}" +
  ".smuv .r u{flex:0 0 auto;text-decoration:none;color:#f0a63c;font-variant-numeric:tabular-nums}" +
  ".smuv .r.on u{color:#ffe6bd}" +
  ".smuv .vz{padding:1em .8em;text-align:center;color:#5a6472;font-size:.62em;font-weight:800;line-height:1.5}" +
  ".smuv .ft{flex:0 0 auto;padding:.26em .6em;font-size:.5em;font-weight:800;color:#6d7684;" +
    "background:#0a0e14;border-top:1px solid #05080c;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
  ".smuv .ft.al{color:#f0a63c}" +
  ".smuv .yt{padding:.5em .6em;font-size:.58em;line-height:1.5;color:#9fb0c4;overflow:auto}" +
  ".smuv .yt b{color:#fff}" +
  ".smuv .yt input{width:100%;font:inherit;font-size:1em;padding:.4em .5em;margin:.4em 0;border-radius:.3em;" +
    "background:#0c1015;color:#dbe4ee;border:1px solid #22303c}" +
  ".smuv .yt button{font:inherit;font-size:.95em;font-weight:800;padding:.4em .8em;border-radius:.3em;cursor:pointer;" +
    "background:#1d5f9e;color:#fff;border:1px solid #4a90d0}" +
  /* faixa a faixa (CD player): uma TARJA de uma linha, nao uma lista */
  ".smuf{position:absolute;z-index:40;display:none;align-items:center;gap:.5em;padding:0 .5em;" +
    "background:#04070b;color:#cfd8e3;font-family:Inter,Arial,sans-serif;font-weight:800;" +
    "box-shadow:0 0 0 1px #1b2530 inset;overflow:hidden}" +
  ".smuf.on{display:flex}" +
  ".smuf .n{color:#f0a63c;white-space:nowrap}" +
  ".smuf .t{flex:1 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}" +
  /* aparelho SEM VISOR: cai no painel de ensino do proprio simulador */
  ".smud{display:flex;flex-wrap:wrap;align-items:center;gap:5px;margin-top:6px;width:100%}" +
  ".smud .e{font-size:9px;font-weight:900;letter-spacing:.5px;color:#f0a63c}" +
  ".smud button{font:inherit;font-size:10px;font-weight:800;padding:4px 7px;border-radius:5px;cursor:pointer;" +
    "color:#cdd5e0;background:#141a22;border:1px solid #2a3038;touch-action:manipulation}" +
  ".smud button.on{border-color:#39d271;color:#7df0a8;background:#0f2418}";

  function estilo(){
    if(document.getElementById("smuVisorCss")) return;
    var s = document.createElement("style"); s.id = "smuVisorCss"; s.textContent = CSS;
    document.head.appendChild(s);
  }

  function criar(){
    if(OV && OV.isConnected) return OV;
    var m = molde(); if(!m) return null;
    estilo();
    OV = document.createElement("div");
    OV.className = (CFG.modo === "faixa") ? "smuf" : "smuv";
    OV.style.left = m.left; OV.style.top = m.top;
    OV.style.width = m.width; OV.style.height = m.height;
    m.pai.appendChild(OV);
    if(CFG.modo === "faixa"){
      /* a tarja ocupa so a faixa de texto do visor, nao o visor todo */
      OV.style.top = "calc(" + m.top + " + " + m.height + " * 0.62)";
      OV.style.height = "calc(" + m.height + " * 0.30)";
    }
    ligarToque();
    if(window.ResizeObserver){
      try{ new ResizeObserver(function(){ ajustarFonte(); }).observe(m.pai); }catch(e){}
    }
    ajustarFonte();
    return OV;
  }
  function ajustarFonte(){
    if(!OV) return;
    var h = OV.clientHeight || 0;
    if(h > 0) OV.style.fontSize = Math.max(6, h * (CFG.modo === "faixa" ? 0.52 : 0.115)) + "px";
  }

  function linhaHTML(f,i){
    var sel = (i === ST.sel);
    if(f.pasta) return '<div class="r' + (sel ? " on" : "") + '" data-i="' + i + '">' +
      '<i>▸</i><b>' + esc(f.nome) + '</b><u></u></div>';
    return '<div class="r' + (sel ? " on" : "") + (naPlaylist(f) ? " pl" : "") + '" data-i="' + i + '">' +
      '<i>' + (naPlaylist(f) ? "★" : "☆") + '</i>' +
      '<b>' + esc(f.nome) + (f.tipo === "yt" ? "  ▶" : "") + '</b>' +
      '<u>' + (f.bpm ? (+f.bpm).toFixed(1) : (f.tipo === "yt" ? "YT" : "—")) + '</u></div>';
  }
  function pintar(){
    if(CFG.modo === "nenhum"){ pintarSemVisor(); return; }
    if(CFG.modo === "faixa"){ pintarFaixa(); return; }
    var o = criar(); if(!o) return;
    o.classList.toggle("on", ST.aberto);
    if(!ST.aberto){ o.innerHTML = ""; return; }
    var L = itens(), vis = LINHAS();
    ajustar();
    /* A fita de cima e o CAMINHO (USB > PLAYLIST > …). Em tela sensivel ela
       tambem serve de atalho; em tela que NAO e sensivel ela e so leitura —
       ali se anda pelo rotativo e pelo BACK, como no aparelho. */
    var abas = [["raiz","▸ TOPO"],
                ["playlist","PLAYLIST (" + ST.playlist.length + ")"],
                ["usb","USB — BANCO SMU (" + ST.banco.length + ")"],
                ["yt","YOUTUBE"]];
    var topo = '<div class="tp">' + abas.map(function(a){
        return '<span class="tab' + (ST.tela === a[0] ? " on" : "") + '" data-tela="' + a[0] + '">' + a[1] + '</span>';
      }).join("") + '<span class="dv">' + (CFG.decks > 1 ? ("LOAD " + ST.lado) : "DECK") + '</span></div>';
    var corpo;
    if(ST.tela === "yt"){
      corpo = '<div class="yt"><b>YouTube</b> — cole o endereço do vídeo. ' +
        'Ele entra na playlist como as outras e você carrega no deck do mesmo jeito.' +
        '<input id="smuYt" placeholder="youtube.com/watch?v=… ou youtu.be/…">' +
        '<button data-yt="1">GUARDAR NA PLAYLIST</button>' +
        '<div style="margin-top:.5em;color:#6d7684">Procurar POR NOME ainda não está no ar: ' +
        'depende da chave da API do YouTube no servidor. Enquanto não houver, é o endereço colado — ' +
        'que não gasta cota nenhuma. No deck, faixa de streaming só faz play/pause: ' +
        'o áudio do YouTube não pode ser processado (nada de EQ, pitch ou scratch).</div></div>';
    } else if(!L.length){
      corpo = '<div class="vz">' + (ST.tela === "playlist"
        ? "PLAYLIST VAZIA<br>Vá em <b>USB — BANCO SMU</b> e guarde as faixas que quer levar."
        : "NENHUMA FAIXA") + '</div>';
    } else {
      var linhas = "";
      for(var i = ST.topo; i < Math.min(L.length, ST.topo + vis); i++) linhas += linhaHTML(L[i], i);
      corpo = '<div class="co"><span>TRACK</span><u>BPM</u></div><div class="ls">' + linhas + '</div>';
    }
    var carreg = ST.carregada[ST.lado];
    var pe = ST.msg ? ST.msg
      : (CFG.toque ? "toque na faixa · toque de novo CARREGA"
                   : "gire o SELETOR ROTATIVO · aperte para ENTRAR / CARREGAR") +
        "  ·  BACK volta um nível" + (carreg ? ("  ·  no deck: " + carreg.nome) : "") +
        (L.length ? ("  ·  " + (ST.sel + 1) + "/" + L.length) : "");
    o.innerHTML = topo + corpo + '<div class="ft' + (ST.msg ? " al" : "") + '">' + esc(pe) + '</div>';
    ajustarFonte();
  }

  /* --- CD player: nao ha lista rolando, ha FAIXA n de N (TRACK SEARCH) --- */
  function pintarFaixa(){
    var o = criar(); if(!o) return;
    var L = ST.playlist.length ? ST.playlist : ST.banco;
    var carreg = ST.carregada[1];
    var n = 0;
    for(var i=0;i<L.length;i++) if(carreg && L[i].id === carreg.id) n = i + 1;
    var mostra = ST.aberto || !!carreg || !!ST.msg;
    o.classList.toggle("on", mostra && L.length > 0);
    if(!mostra) { o.innerHTML = ""; return; }
    var atual = L[ST.sel] || carreg;
    o.innerHTML = '<span class="n">TRK ' + (ST.sel + 1) + '/' + L.length + '</span>' +
      (CFG.texto ? ('<span class="t">' + esc(ST.msg || (atual ? atual.nome : "—")) + '</span>') : '<span class="t"></span>') +
      (atual && atual.bpm ? ('<span class="n">' + (+atual.bpm).toFixed(1) + '</span>') : "");
    ajustarFonte();
  }

  /* --- toca-discos: NAO TEM VISOR. Vai para o painel de ensino do sim. --- */
  var DSC = null;
  function pintarSemVisor(){
    var t = document.getElementById("teach"); if(!t) return;
    estilo();
    if(!DSC || !DSC.isConnected){
      DSC = document.createElement("div"); DSC.className = "smud";
      t.appendChild(DSC);
      DSC.addEventListener("click", function(e){
        var b = e.target.closest("button[data-i]"); if(!b) return;
        e.stopPropagation();
        var L = ST.playlist.length ? ST.playlist : ST.banco;
        var f = L[+b.dataset.i]; if(f) carregar(1, f);
      });
    }
    var L = ST.playlist.length ? ST.playlist : ST.banco;
    var carreg = ST.carregada[1];
    DSC.innerHTML = '<span class="e">O DISCO NA MÃO — este aparelho NÃO TEM VISOR: ' +
      'no mundo real quem troca a música é a sua mão, escolhendo o vinil.</span>' +
      L.map(function(f,i){
        return '<button data-i="' + i + '" class="' + (carreg && carreg.id === f.id ? "on" : "") + '">' +
          esc(f.nome) + '</button>';
      }).join("") + (ST.msg ? ('<span class="e">' + esc(ST.msg) + '</span>') : "");
  }
`;

const VISOR_JS3 = `
  /* ---------------------------------------------------------------------
     6. OS CONTROLES DO APARELHO — nada de botao inventado
     --------------------------------------------------------------------- */
  var ABRE   = ["browse","navbrowse","usbport","usbslot","usb","sdslot","srcusb","srcusb1","srcusb2",
                "source","playlist","shortcut","disc","pc","srcrb","srclink","srcdisc","usb1","usb2"];
  var TELAS  = { browse:"usb", navbrowse:"usb", playlist:"playlist", shortcut:"playlist",
                 taglist:"playlist", navtag:"playlist" };
  /* ⛔ so o TAG TRACK / REMOVE. Nada de sequestrar o MEMORY: naquele botao o
     aparelho grava PONTO DE CUE — usar para playlist seria ensinar errado. */
  var GUARDA = ["tagtrack"];
  var PROX   = ["trknext","tracksearchR","srchfwd","foldernext","folder2","callnext"];
  var ANT    = ["trkprev","tracksearchL","srchback","folderprev","folder","callprev"];

  function ligarControles(){
    document.addEventListener("pointerdown", function(e){
      var alvo = e.target && e.target.closest ? e.target.closest("[data-act]") : null;
      if(!alvo) return;
      var a = alvo.dataset.act;
      /* ⛔ nunca stopPropagation: o handler do proprio aparelho tem de rodar
         igual. Aqui so se ACRESCENTA comportamento. */
      if(CFG.modo === "faixa"){
        if(PROX.indexOf(a) >= 0){ andarCD(1); return; }
        if(ANT.indexOf(a)  >= 0){ andarCD(-1); return; }
        return;
      }
      if(CFG.modo !== "lista") return;
      if(a === "back"){ voltar(); return; }
      if(TELAS[a]){ abrir(TELAS[a]); return; }
      if(ABRE.indexOf(a) >= 0){ abrir("raiz"); return; }
      if(GUARDA.indexOf(a) >= 0 && ST.aberto){ guardar(); return; }
      if(ST.aberto && PROX.indexOf(a) >= 0){ mover(1); return; }
      if(ST.aberto && ANT.indexOf(a)  >= 0){ mover(-1); return; }
      /* LOAD de cada aparelho, com o nome que ELE usa (levantado arquivo por
         arquivo): XDJ-AZ/RX = load1/load2 · Prime 4 = loadl/loadr ·
         OPUS-QUAD = load13/load24 (um botao serve dois decks). */
      var lado = {load1:1, loadl:1, load13:1, load3:1,
                  load2:2, loadr:2, load24:2, load4:2}[a];
      if(lado){ ST.lado = lado; if(ST.aberto) confirmar(); else abrir("raiz"); return; }
    }, true);

    /* SELETOR ROTATIVO: girar anda, apertar carrega. Arrasto vertical serve de
       giro — e como se gira um encoder com o dedo no iPad. */
    ligarRotativo();
  }
  function achaRotativo(){
    var n = ["rotary","selectpush","select","folder","browseknob"];
    for(var i=0;i<n.length;i++){
      var e = document.querySelector('[data-act="' + n[i] + '"]');
      if(e) return e;
    }
    return null;
  }
  var rotLigado = false;
  function ligarRotativo(){
    if(rotLigado) return;
    var r = achaRotativo(); if(!r) return;
    rotLigado = true;
    var y0 = 0, acc = 0, andou = false, t0 = 0, ativo = false;
    r.addEventListener("pointerdown", function(e){
      ativo = true; andou = false; acc = 0; y0 = e.clientY; t0 = Date.now();
    });
    document.addEventListener("pointermove", function(e){
      if(!ativo) return;
      /* um passo por ~1/6 da altura do proprio seletor: medido no CDJ-850, com
         0,28 da altura um arrasto curto de dedo nao virava passo nenhum e o
         rotativo parecia morto. */
      var passo = Math.max(7, (r.offsetHeight || 40) * 0.16);
      acc += (e.clientY - y0); y0 = e.clientY;
      while(Math.abs(acc) >= passo){
        if(!ST.aberto) abrir("raiz");
        mover(acc > 0 ? 1 : -1);
        acc += (acc > 0 ? -passo : passo);
        andou = true;
      }
    });
    document.addEventListener("pointerup", function(){
      if(!ativo) return;
      ativo = false;
      if(andou || (Date.now() - t0) > 600) return;      /* girou: nao e clique */
      if(!ST.aberto) abrir("raiz");
      else confirmar();
    });
  }

  /* CD player: TRACK SEARCH anda na playlist e JA CARREGA — e o gesto real de
     um CD player, onde nao existe "selecionar sem carregar". */
  function andarCD(n){
    var L = ST.playlist.length ? ST.playlist : ST.banco;
    if(!L.length){ ST.msg = "sem faixas: guarde alguma na playlist"; pintarFaixa(); return; }
    ST.aberto = true;
    ST.sel = (ST.sel + n % L.length + L.length) % L.length;
    pintarFaixa();
    carregar(1, L[ST.sel]);
  }

  /* toque NA TELA — so onde a tela e touch de verdade */
  function ligarToque(){
    if(!OV || CFG.modo !== "lista") return;
    OV.addEventListener("pointerdown", function(e){
      e.stopPropagation();
      /* ⛔ o campo do YouTube e a unica coisa que responde ao dedo em TODO
         aparelho: e teclado, nao tela sensivel. O resto segue o aparelho. */
      if(e.target.closest("[data-yt]")){ guardarYT(); return; }
      if(e.target.tagName === "INPUT") return;
      if(!CFG.toque){
        ST.msg = "este visor NÃO é sensível ao toque — gire o SELETOR ROTATIVO e aperte";
        pintar(); return;
      }
      var t = e.target.closest("[data-tela]");
      if(t){ irPara(t.dataset.tela); return; }
      var r = e.target.closest(".r");
      if(!r) return;
      var i = +r.dataset.i;
      /* a estrela e o TAG TRACK da tela: guarda/tira da playlist */
      if(e.target.tagName === "I"){ ST.sel = i; ajustar(); guardar(); return; }
      if(i === ST.sel) confirmar();          /* 2o toque na mesma linha carrega */
      else { ST.sel = i; ajustar(); ST.msg = ""; pintar(); }
    });
  }
  function idYoutube(t){
    t = (t || "").trim(); if(!t) return null;
    if(/^[\\w-]{11}$/.test(t)) return t;
    var m = t.match(/(?:youtu\\.be\\/|v=|\\/embed\\/|\\/shorts\\/|\\/live\\/)([\\w-]{11})/);
    return m ? m[1] : null;
  }
  function guardarYT(){
    var c = document.getElementById("smuYt");
    var id = idYoutube(c ? c.value : "");
    if(!id){ ST.msg = "não reconheci esse endereço do YouTube"; pintar(); return; }
    env({smu:"plNova", faixa:{id:"yt:" + id, nome:"YouTube " + id, bpm:null, tipo:"yt", yt:id}});
    ST.msg = "guardada na playlist";
    ST.tela = "playlist"; ST.sel = 0; ST.topo = 0;
    pintar();
  }

  /* ---------------------------------------------------------------------
     7. CONVERSA COM A AULA
     --------------------------------------------------------------------- */
  window.addEventListener("message", function(e){
    var d = e.data; if(!d || !d.smu) return;
    if(d.smu === "cabine"){ ST.slot = d.slot; return; }
    if(d.smu === "biblioteca"){
      ST.banco = d.banco || []; ST.playlist = d.playlist || [];
      /* aparelho com browse PROPRIO (BROWSE-USB-PADRAO): a playlist vira o
         conteudo do pendrive DELE e quem mostra e o visor dele. */
      if(window.BANCO_SMU){
        var L = ST.playlist.length ? ST.playlist : ST.banco;
        window.BANCO_SMU.faixas = L.map(function(f){
          return { arquivo:f.arquivo || f.id, nome:f.nome, bpm:f.bpm || 0, url:f.url, tipo:f.tipo };
        });
      }
      ajustar(); pintar(); return;
    }
    if(d.smu === "ladoVisor"){ ST.lado = d.lado || 1; pintar(); return; }
    if(d.smu === "ytev" && d.ev === "semPonte"){
      ST.msg = "YouTube só toca com a aula aberta DENTRO do curso — o player mora na moldura";
      ST.aberto = true; pintar(); return;
    }
  });

  function comecar(){
    if(CFG.modo === "nenhum"){ pintarSemVisor(); return; }
    if(CFG.modo === "nativo") return;             /* o browse dele ja resolve */
    ligarControles();
    /* o rotativo so existe depois do build(): tenta de novo por um tempo */
    var n = 0, t = setInterval(function(){ n++; ligarRotativo(); if(rotLigado || n > 25) clearInterval(t); }, 200);
    embrulharRender();
    pintar();
  }
  if(document.readyState === "complete" || document.readyState === "interactive") setTimeout(comecar, 0);
  else window.addEventListener("DOMContentLoaded", comecar);
})();
`;

const PONTE_USADA = (argPonte === "full" ? PONTE : argPonte === "min" ? PONTE_MIN : CAIXA_PRETA)
  .replace("__VISOR__", () => (argPonte === "full" ? VISOR_JS + VISOR_JS2 + VISOR_JS3 : ""));

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
  /* o VISOR de cada aparelho — tem de estar declarado ANTES da ponte, que le
     window.__SMU_VISOR logo na entrada. Mixer nao recebe: nao escolhe musica. */
  const cfgVisor = c.visor
    ? "<script>window.__SMU_VISOR=" + JSON.stringify(c.visor) + ";<" + "/script>\n"
    : "";
  h = h.replace(/<head>/i, "<head>\n" + cfgVisor + PONTE_USADA);
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
/* Aula com PRESET fala de aparelhos especificos: embutir os 29 nela e carregar
   3,5 MB para mostrar 3. Regra do dono: "na aula o aluno acessa o equipamento
   exclusivo da aula". Entao a aula travada leva SO os aparelhos dela.        */
function simsDaAula(a) {
  if (!a.preset) return lista;
  const querer = new Set([a.preset.d1, a.preset.d2, a.preset.mix].filter(Boolean));
  const so = lista.filter(s => querer.has(s.id));
  if (so.length !== querer.size)
    throw new Error(`preset de ${a.arq} pede ${[...querer].join(",")} e o catalogo so tem ${so.map(x => x.id).join(",")}`);
  return so;
}
const jsonSims = JSON.stringify(lista);
const jsonTras = JSON.stringify(TRAS);

for (const a of AULAS) {
  /* replace com FUNCAO de proposito: com string, um "$&" ou "$'" dentro do HTML
     de algum simulador seria interpretado como referencia da substituicao. */
  const out = modelo
    .replace("__SIMS__", () => JSON.stringify(simsDaAula(a)))
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
