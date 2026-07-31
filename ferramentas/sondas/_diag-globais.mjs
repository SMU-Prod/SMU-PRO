/* Sonda de diagnostico pontual. Reescrita conforme a duvida do momento —
   nao e' teste de regressao, e' bisturi. */
export default async function ({ avaliar, ok }) {
  const r = avaliar(`(function(){
    var t = document.querySelectorAll('.strip')[0];
    var achados = [];
    var cs = t.querySelectorAll('button,div,span');
    for (var i=0;i<cs.length;i++){
      var x = ((cs[i].textContent||'')+'').trim();
      if (/^(ON|MUTE|OFF|SEND|PFL|CUE|SOLO)$/i.test(x))
        achados.push(x + ' <' + cs[i].tagName + ' class="' + (cs[i].className||'') + '"> onclick=' + (typeof cs[i].onclick));
    }
    /* o que muda ao apertar o MUTE? */
    var mb = null;
    for (var i=0;i<cs.length;i++){ if (((cs[i].textContent||'')+'').trim().toUpperCase()==='MUTE') { mb=cs[i]; break; } }
    var antesCls = mb ? (mb.className||'') : '(sem botao)';
    var erro = null;
    if (mb && mb.onclick) { try { mb.onclick.call(mb, {stopPropagation:function(){},preventDefault:function(){},target:mb,currentTarget:mb}); } catch(e){ erro = String(e && e.message || e); } }
    var depoisCls = mb ? (mb.className||'') : '';
    return { achados: achados, antesCls: antesCls, depoisCls: depoisCls, erro: erro,
             temDbgState: Object.keys(window.__sig ? window.__sig : {}).join(',') };
  })()`);
  ok(true, "botoes na 1a tira: " + r.achados.join("  |  "));
  ok(true, "classe do MUTE antes : " + r.antesCls);
  ok(true, "classe do MUTE depois: " + r.depoisCls);
  ok(!r.erro, "clique do MUTE sem estouro" + (r.erro ? " — " + r.erro : ""));
  ok(true, "chaves do __sig: " + r.temDbgState);
}
