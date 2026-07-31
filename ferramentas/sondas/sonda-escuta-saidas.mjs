/* Sonda: o botao de ESCUTA e o ON/MUTE funcionam nas tiras de SAIDA?
 *
 *   SMU_SONDA=ferramentas/sondas/sonda-escuta-saidas.mjs \
 *     node ferramentas/clicar-tudo.mjs simuladores/som/behringer-x32-real.html
 *
 * POR QUE EXISTE
 * O defeito mais repetido da frota de som era o botao de escuta escrito como
 * `if (c.kind === 'ch')`: vivo no canal de entrada, MORTO em toda tira de MIX,
 * MATRIX, DCA e master. Junto vinha o ON/MUTE do master como `on:true` fixo com
 * `toggleOn(){}` vazio. Sete simuladores tinham os dois.
 *
 * O portao sozinho nao pega: ele so' responde "mudou alguma coisa?", e a mudanca
 * aqui e' de estado interno + audio, que ele nao enxerga. Esta sonda fala com o
 * objeto de diagnostico do proprio simulador — o mesmo caminho que se usaria no
 * navegador, sem depender de navegador nenhum.
 *
 * TRES ARMADILHAS QUE ELA JA' CAIU (nao "simplifique" sem ler):
 *  1. `amb.janela` NAO e' o `window` do simulador. Um `window.__dbg = {...}` cai no
 *     GLOBAL DO VM. Por isso tudo passa por avaliar().
 *  2. Cada mesa batizou o proprio objeto: __dbg, __diag, __vi, __ui24, __sig. Em vez
 *     de lista, procura-se qualquer window.__* que tenha `.state`.
 *  3. O botao muda de CLASSE por mesa (.sbtn.cue, .sbtn.solo, .tinyb, .sw.blue). O que
 *     nao muda e' o ROTULO que o operador le'. Procura-se por ele.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const VARRE = fs.readFileSync(path.join(AQUI, "_varre-escuta.js"), "utf8");

/* Acha o objeto de diagnostico do simulador pela ASSINATURA (tem .state), nao pelo nome. */
const ACHA_DIAG = `(function(){
  for (var i = 0, ks = Object.getOwnPropertyNames(window); i < ks.length; i++) {
    var k = ks[i]; if (k.indexOf('__') !== 0) continue;
    var o = window[k];
    if (o && typeof o === 'object' && o.state && typeof o.state === 'object') return k;
  }
  return null; })()`;

export default async function ({ avaliar, ok, rodarTimers }) {
  const chave = avaliar(ACHA_DIAG);
  ok(!!chave, "o simulador expoe objeto de diagnostico" + (chave ? " (window." + chave + ")" : " — nenhum window.__* com .state"));
  if (!chave) return;

  const nTiras = avaliar("document.querySelectorAll('.strip').length");
  ok(nTiras > 0, "achei " + nTiras + " tiras na bancada");
  if (!nTiras) return;

  const rotuloEscuta = avaliar(`(function(){
    var re = /^(CUE|PAFL|AFL|PFL|SOLO)$/i, ts = document.querySelectorAll('.strip');
    for (var i=0;i<ts.length;i++){ var cs = ts[i].querySelectorAll('button,div,span');
      for (var j=0;j<cs.length;j++){ var x=((cs[j].textContent||'')+'').trim();
        if (re.test(x)) return x.toUpperCase(); } }
    return null; })()`);
  ok(!!rotuloEscuta, "as tiras tem botao de escuta" + (rotuloEscuta ? " (" + rotuloEscuta + ")" : " — nenhum rotulo CUE/PAFL/SOLO"));
  if (!rotuloEscuta) return;

  /* injeta os dois parametros e roda a varredura (que vive em _varre-escuta.js) */
  const varre = (rotulos) => {
    avaliar(`var __CHAVE_DIAG=${JSON.stringify(chave)}; var __ROTULOS=${JSON.stringify(rotulos)};`);
    return avaliar(VARRE);
  };

  /* "0 vivas e 0 mortas" NAO e' aprovacao: e' um teste que nao exercitou nada.
     Verde falso e' pior que teste nenhum, entao o veredito exige ter achado botao. */
  const veredito = (r, texto) => {
    const achou = r.vivos + r.mortos.length;
    if (!achou) return ok(false, texto + " — NAO TESTADO: a sonda nao achou o botao em tira nenhuma");
    return ok(r.mortos.length === 0,
      texto + " — " + r.vivos + "/" + achou + " responderam" +
      (r.mortos.length ? "  ·  MORTAS: " + r.mortos.join(", ") : ""));
  };

  veredito(varre(["CUE", "PAFL", "AFL", "PFL", "SOLO"]), "ESCUTA (" + rotuloEscuta + ")");
  veredito(varre(["ON", "MUTE", "OFF", "SEND"]), "ON/MUTE");
  rodarTimers(80);
}
