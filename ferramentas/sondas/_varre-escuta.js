/* Varredura executada DENTRO do vm do simulador.
   Recebe por variaveis injetadas: __CHAVE_DIAG (string) e __ROTULOS (array).
   Devolve {vivos, mortos}.

   Vive em arquivo separado de proposito: montar este codigo por template literal
   dentro da sonda quebrava com "missing ) after argument list" — JS gerando JS com
   aspas e escapes aninhados e' fragil e o erro nao diz onde. */
(function () {
  var d = window[__CHAVE_DIAG];
  var S = d.state;
  var CH = d.CH || [];
  var semFn = function (k, v) { return typeof v === "function" ? undefined : v; };

  /* A foto precisa cobrir TRES lugares, senao a sonda acusa defeito que nao existe:
       state ......... escuta/ON das SAIDAS na maioria das mesas
       CH[i] ......... cue/on/mute de CANAL, que ficam fora do state
       lampadas ...... os arrays de escuta das saidas vivem no FECHO do modulo; a
                       lampada e' desenhada pelo getter do proprio simulador, entao
                       se ela virou, o estado interno virou. */
  function lampadas() {
    var out = "", bs = document.querySelectorAll(".strip button, .strip div, .strip span");
    for (var i = 0; i < bs.length; i++) {
      var c = bs[i].className || "";
      out += (c.indexOf("act") >= 0 ? "1" : (c.indexOf("lit") >= 0 ? "2" : (c.indexOf("on") >= 0 ? "3" : "0")));
    }
    return out;
  }
  function foto() {
    try {
      var a = JSON.stringify(S, semFn);
      var b = JSON.stringify(CH.map(function (c) { return [c.cue, c.on, c.mute]; }), semFn);
      return a + "|" + b + "|" + lampadas();
    } catch (e) { return "erro" + Math.random(); }
  }

  var tiras = document.querySelectorAll(".strip");
  var vivos = 0, mortos = [];

  for (var i = 0; i < tiras.length; i++) {
    var t = tiras[i];
    /* O nome do canal esta em .cn numa mesa, .cname noutra, .lcd noutra. Sem achar,
       NAO se pula: pular por falta de rotulo fez a sonda nao testar nada em duas
       mesas e ainda assim dar verde. Sem rotulo, usa-se a posicao. */
    var el = t.querySelector(".cn") || t.querySelector(".cname") || t.querySelector(".lcd");
    var nome = ((el ? el.textContent : "") || "").trim() || ("tira " + (i + 1));
    if (nome === "—") continue;                    /* tira vazia: inerte e' o certo */

    /* So' vale como BOTAO quem tem tratador (ou e' <button>). Sem este filtro a sonda
       pegava o <div class="kv">OFF</div> da Signature — que e' o VALOR MOSTRADO de um
       knob, nao um botao — clicava nele, nada acontecia, e acusava a tira de morta.
       Estava testando o mostrador em vez do controle. */
    var b = null, cand = t.querySelectorAll("button, div, span");
    for (var j = 0; j < cand.length; j++) {
      var el2 = cand[j];
      var x = ((el2.textContent || "") + "").trim().toUpperCase();
      if (__ROTULOS.indexOf(x) < 0) continue;
      if (typeof el2.onclick !== "function" && el2.tagName !== "BUTTON") continue;
      /* Botao que o aluno NAO VE nao e' botao morto — e' botao que o aparelho nao tem.
         Ex.: a tecla de CUE some na tira MONITOR, porque o monitor e' o DESTINO da
         escuta, nao algo que se cueia. O portao principal ja' usa esta mesma regra. */
      if (el2.style && (el2.style.visibility === "hidden" || el2.style.display === "none")) continue;
      b = el2; break;
    }
    if (!b) continue;

    /* Chamar como o NAVEGADOR chama: `this` = o botao, e com objeto de evento.
       b.onclick() cru quebrava na Ui24R (usa e.stopPropagation) e na Signature
       (usa this.classList), e o estouro aparecia como "botao morto". */
    var ev = { stopPropagation: function () { }, preventDefault: function () { },
               stopImmediatePropagation: function () { }, target: b, currentTarget: b,
               type: "click", bubbles: true };
    var aperta = function (bt) {
      try { if (bt.onclick) bt.onclick.call(bt, ev); else if (bt.click) bt.click(); }
      catch (e) { return String((e && e.message) || e); }
      return null;
    };

    var antes = foto();
    var err = aperta(b);
    if (err) { mortos.push(nome + " [estourou: " + err + "]"); continue; }
    if (foto() !== antes) { vivos++; aperta(b); }
    else mortos.push(nome);
  }
  return { vivos: vivos, mortos: mortos };
})()
