/**
 * verificar-layout.js — cole no console (ou rode via javascript_tool) em qualquer simulador SMU.
 * REGRA DO DONO: nenhum elemento pode ULTRAPASSAR a borda do aparelho nem SAIR DA POSIÇÃO
 * (sobrepor outro). Este teste reprova o sim se qualquer uma das duas coisas acontecer.
 *
 * Retorna {ok, vazamentos[], colisoes[], texto_estourado[]}.
 */
(function verificarLayout(){
  const SEL = '.btn,.rbtn,.rdk,.big,.knob,.rotary,.swp,.tempo,.fader,.pitch,.dispc,.pad,.spd,.x2,' +
              '.startstop,.hc,.loop,.screen,.armpart,.disp';
  const deckEl = document.querySelector('.deck,.unit,.body');
  if(!deckEl) return JSON.stringify({erro:'sem .deck'});
  const D = deckEl.getBoundingClientRect();
  const pc = r => ({
    x:+((r.left-D.left)/D.width*100).toFixed(1), y:+((r.top-D.top)/D.height*100).toFixed(1),
    w:+(r.width/D.width*100).toFixed(1), h:+(r.height/D.height*100).toFixed(1)
  });
  const nome = e => (e.dataset && e.dataset.act) || (e.textContent||'').replace(/\s+/g,' ').trim().slice(0,14) || e.className.split(' ')[0];

  const els = [...document.querySelectorAll(SEL)].filter(e=>{
    const r=e.getBoundingClientRect();
    return r.width>2 && r.height>2 && getComputedStyle(e).visibility!=='hidden';
  });

  // 1) VAZAMENTO: elemento fora dos limites do aparelho (tolerância 0.5%)
  const tol = D.width*0.005;
  const vazamentos = [];
  els.forEach(e=>{
    const r=e.getBoundingClientRect();
    const fora=[];
    if(r.left   < D.left  -tol) fora.push('esquerda');
    if(r.right  > D.right +tol) fora.push('direita');
    if(r.top    < D.top   -tol) fora.push('topo');
    if(r.bottom > D.bottom+tol) fora.push('base');
    if(fora.length) vazamentos.push({el:nome(e), fora:fora.join('+'), ...pc(r)});
  });

  // 2) COLISÃO: dois controles se sobrepondo (>5px nos dois eixos)
  const colisoes = [];
  for(let i=0;i<els.length;i++) for(let j=i+1;j<els.length;j++){
    if(els[i].contains(els[j]) || els[j].contains(els[i])) continue;   // aninhado é ok
    const a=els[i].getBoundingClientRect(), b=els[j].getBoundingClientRect();
    const ox=Math.min(a.right,b.right)-Math.max(a.left,b.left);
    const oy=Math.min(a.bottom,b.bottom)-Math.max(a.top,b.top);
    if(ox>5&&oy>5) colisoes.push({a:nome(els[i]), b:nome(els[j]), sobrepoe:Math.round(ox)+'x'+Math.round(oy)+'px'});
  }

  // 3) TEXTO ESTOURADO: rótulo maior que o botão que o contém
  const texto_estourado = [];
  els.forEach(e=>{
    if(e.scrollWidth > e.clientWidth+2 && e.clientWidth>0)
      texto_estourado.push({el:nome(e), precisa:e.scrollWidth, cabe:e.clientWidth});
  });

  const ok = !vazamentos.length && !colisoes.length && !texto_estourado.length;
  return JSON.stringify({ok, total_elementos:els.length,
    vazamentos:vazamentos.slice(0,8), colisoes:colisoes.slice(0,8), texto_estourado:texto_estourado.slice(0,8)});
})()
