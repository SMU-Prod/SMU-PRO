// PONTE DE TOQUE (celular / iPad) — injetada pelo player em TODO simulador.
// ─────────────────────────────────────────────────────────────────────────────
// POR QUE ISTO EXISTE (a causa, não o sintoma)
//
// O dono reportou, no Backstage: "quando vou baixar o sinal do potenciômetro o programa fecha a
// tela, perco a tela expandida; toda vez que clico e arrasto fica marcando ou selecionando a
// página; tenho que clicar, temos que arrastar".
//
// São TRÊS defeitos distintos, todos do mesmo lugar — o simulador não diz ao navegador que o
// gesto é dele:
//
// Números do levantamento no banco em 31/07/2026 — 306 simuladores, 98 com arraste de verdade
// e 115 com `<input type=range>`:
//
// 1) ARRASTE VIRA ROLAGEM. Sem `touch-action` declarado, o navegador começa o gesto como
//    rolagem da página. No primeiro `touchmove` ele "trava" a decisão, manda `pointercancel`
//    e o simulador PARA de receber `pointermove` — o fader congela no meio. Pior: no iOS, uma
//    rolagem para baixo dentro de um elemento em tela cheia é o gesto de SAIR da tela cheia.
//    84 sims com controle não têm `touch-action:none` em lugar nenhum. Nem a CL5, a mais bem
//    construída da frota, protege tudo: lá é `body{touch-action:manipulation}`, que continua
//    liberando pan — só o `<canvas>` está coberto.
//
// 2) SELEÇÃO DE TEXTO. Sem `user-select:none` (e sem o prefixo `-webkit-`, que iPad em iOS 15/16
//    ainda exige) o arraste pinta a página de azul e o iOS abre o balão de copiar/definir.
//    86 sims sem `user-select:none`; nenhum dos 306 declara `-webkit-touch-callout`.
//
// 3) ARRASTE INEXISTENTE. 1 sim (pleno-video, "Edição para eventos") só escuta `mousedown`/
//    `mousemove`. O navegador sintetiza mouse no TOQUE (tap), mas NUNCA sintetiza `mousemove`
//    durante um arraste de dedo — ali o aluno só consegue clicar.
//    ⚠️ Este número saiu de 15 para 1 quando a contagem passou a exigir uma LIGAÇÃO
//    (`onMouseMove: fn`) em vez da palavra solta: 14 daqueles sims carregam o React minificado,
//    que cita `case "onMouseMove":` na própria tabela de eventos. Contar palavra em arquivo
//    minificado mede o bundle, não o autor. Ver `precisaPonteMouse` no fim deste arquivo.
//
// POR QUE AQUI, E NÃO EM CADA SIMULADOR
// O HTML dos 306 sims mora dentro do banco (`ai_animations.urls[0].html`). Corrigir um a um é
// 306 edições + republicação, e cada republicação é uma chance de sobrescrever trabalho de outra
// sessão. O player já injeta um script em todo sim (a ponte `SMU-FS`); este é o mesmo ponto,
// vale para os cursos todos e para todo simulador FUTURO, sem tocar no banco.
//
// PRINCÍPIO: aditivo e reversível. Nada aqui remove comportamento que o sim já tinha — sim que
// já declara `touch-action:none` e chama `setPointerCapture` (CL5, DJ, Yamaha) continua idêntico.

/** Marcador de idempotência: `preparaWidget` não injeta duas vezes, nem sobre sim que já traz. */
export const MARCA_TOQUE = "SMU-TOQUE";
export const MARCA_MOUSE = "SMU-MOUSE";

// ── 1. CSS ───────────────────────────────────────────────────────────────────
// `-webkit-` na frente de propósito: iPad em iOS 15/16 (que é o que o aluno tem) só entende a
// forma prefixada de `user-select` e `touch-callout`. A forma sem prefixo é para o resto.
//
// `input[type=range]` e `canvas` levam `touch-action:none` porque são O potenciômetro: em 108
// sims o fader é um `<input type=range>` e nos consoles é o `<canvas>`. Sem isso o dedo empurra
// a página em vez de mover o controle. Campo de texto continua selecionável — quem digita
// precisa marcar o que escreveu.
const CSS_TOQUE = `
html,body{
  -webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;
  -webkit-touch-callout:none;
  -webkit-tap-highlight-color:transparent;
  overscroll-behavior:none;
}
input,textarea,select,[contenteditable],[contenteditable="true"],.smu-texto,.smu-texto *{
  -webkit-user-select:text;-moz-user-select:text;user-select:text;
  -webkit-touch-callout:default;
}
input[type=range],canvas,svg{touch-action:none}
`.replace(/\s*\n\s*/g, "");

// ── 2. JS: quem é o dono do gesto ────────────────────────────────────────────
// A regra não é "bloqueie tudo": simulador com lista rolável (a CL5 tem `.mdi{overflow-y:auto}`
// no modo telefone) precisa continuar rolando. A pergunta certa é: ESTE dedo pousou num
// CONTROLE? Se pousou, o arraste é do simulador e a rolagem do navegador tem de calar.
//
// Três sinais, do mais forte ao mais fraco — o primeiro que der positivo decide:
//   a) o sim chamou `preventDefault()` no `pointerdown` — ele já declarou que o gesto é dele;
//   b) o sim chamou `setPointerCapture()` — idem, e é o padrão da frota nova (93 sims);
//   c) aparência de controle — para os sims antigos que não fazem nem (a) nem (b).
//
// A ordem dos eventos no toque é `pointerdown` → `touchstart` → (movimento) `pointermove` /
// `touchmove`. Ou seja: quando o `touchmove` chega, (a) e (b) JÁ aconteceram e podem ser lidos.
// É isso que torna a decisão exata em vez de chute.
//
// ⚠️ DUAS ARMADILHAS MEDIDAS EM TESTE, não deduzidas (31/07/2026, CL5 em viewport de iPad):
//
// 1) `touch-action` só vale como sinal quando é `none`/`pinch-zoom`. A primeira versão aceitava
//    "diferente de `auto`" e QUEBROU a rolagem da CL5: ela declara `body{touch-action:manipulation}`
//    — que significa o CONTRÁRIO ("pode rolar, só não dê zoom por duplo toque"). Subindo a árvore,
//    todo elemento herdava esse "sim" do <body> e a área `.mdi` (rolável no modo telefone) parava
//    de rolar. Daí também o `break` em <body>/<html>: declaração global não é controle.
//
// 2) `cursor:pointer` saiu da lista. Todo botão tem, e o dedo do aluno pousa em botão o tempo
//    todo enquanto rola uma lista — aceitar isso travaria a rolagem. Ficaram só os cursores que
//    significam arraste de verdade (`grab`, `move`, `*-resize`).
//
// E a busca PARA ao encontrar um ancestral que rola de verdade: ali o gesto é da rolagem. A ordem
// dentro do laço importa — os sinais de arraste são testados ANTES, para um <canvas> dentro de uma
// lista rolável continuar ganhando o gesto.
//
// 3) `draggable="true"` NÃO conta como controle, e o bloqueio de `dragstart` abre exceção para
//    ele. 7 sims usam arrastar-e-soltar do HTML5 de verdade (5 do pleno-produtor, 1 vídeo, 1 DJ —
//    os outros 17 que citavam `dataTransfer` era o bundle do React de novo). Bloquear o
//    `dragstart` deles quebraria a montagem no desktop; e tratá-los como controle no toque
//    seria pior ainda: o arrastar-e-soltar do HTML5 não existe em navegador de celular, então o
//    gesto seria roubado da rolagem para não fazer NADA.
//    ⚠️ Isso quer dizer que esses 7 continuam sem arraste no dedo — é defeito PRÉ-EXISTENTE,
//    fora do alcance desta ponte (precisa de polyfill por sim). Está reportado ao dono.
const JS_TOQUE = `(function(){
if(window.__smuToque)return;window.__smuToque=1;
var d=document,dono=false,idPtr=null;
var ARRASTA=/fader|knob|slider|pot\\b|dial|encoder|jog|crossfad|handle|thumb|drag|trilho|rotativ|xy|joystick|scrub/i;
var CURSOR=/^(grab|grabbing|move|ns-resize|ew-resize|row-resize|col-resize|all-scroll|nwse-resize|nesw-resize)$/;
var TEXTO=/^(INPUT|TEXTAREA|SELECT|OPTION)$/;
function campoTexto(n){for(var i=0;n&&i<4;n=n.parentElement,i++){
  if(n.isContentEditable)return true;
  if(n.tagName==='INPUT'&&/^(text|search|email|number|tel|url|password)$/i.test(n.type||'text'))return true;
  if(n.tagName==='TEXTAREA')return true;}return false;}
function rola(s,n){
  if((s.overflowY==='auto'||s.overflowY==='scroll')&&n.scrollHeight>n.clientHeight+1)return true;
  if((s.overflowX==='auto'||s.overflowX==='scroll')&&n.scrollWidth>n.clientWidth+1)return true;
  return false;}
function controle(n){for(var i=0;n&&n.nodeType===1&&i<6;n=n.parentElement,i++){
  if(n===d.body||n===d.documentElement)break;
  var t=n.tagName;
  if(t==='CANVAS'||t==='svg'||t==='SVG')return true;
  if(t==='INPUT'&&(n.type||'')==='range')return true;
  var m=(n.className&&n.className.baseVal!==undefined?n.className.baseVal:n.className)||'';
  if(typeof m==='string'&&(ARRASTA.test(m)||ARRASTA.test(n.id||'')))return true;
  if(n.hasAttribute&&n.hasAttribute('data-arrasta'))return true;
  var s=null;try{s=getComputedStyle(n);}catch(e){}
  if(s){
    if(s.touchAction==='none'||s.touchAction==='pinch-zoom')return true;
    if(CURSOR.test(s.cursor))return true;
    if(rola(s,n))return false;}}
  return false;}
function capturou(n){for(var i=0;n&&n.nodeType===1&&i<6;n=n.parentElement,i++){
  try{if(idPtr!==null&&n.hasPointerCapture&&n.hasPointerCapture(idPtr))return true;}catch(e){}}return false;}
// DUAS FASES de propósito. 35 sims da frota chamam \`stopPropagation()\` nos próprios handlers:
// se a ponte só escutasse na bolha, nesses o evento nunca chegaria e o fader continuaria
// perdendo o gesto para a rolagem — o defeito consertado em 271 e sobrevivendo em 35.
//   captura -> sempre roda (guarda o pointerId e já testa a aparência de controle);
//   bolha   -> roda DEPOIS dos handlers do sim, que é quando \`defaultPrevented\` e
//              \`hasPointerCapture\` já refletem o que ele decidiu.
d.addEventListener('pointerdown',function(e){
  if(e.pointerType==='mouse')return;
  idPtr=e.pointerId; dono=controle(e.target);},true);
d.addEventListener('pointerdown',function(e){
  if(e.pointerType==='mouse')return;
  if(!dono)dono=e.defaultPrevented||capturou(e.target);},false);
d.addEventListener('touchstart',function(e){
  if(e.touches.length>1){dono=false;return;}          // pinça é do navegador, não do fader
  if(!dono)dono=capturou(e.target)||controle(e.target);},{capture:true,passive:true});
// Não-passivo: é o único jeito de cancelar a rolagem que o navegador ia iniciar.
// Em CAPTURA pelo mesmo motivo dos de cima — sim que chama stopPropagation no touchmove não
// pode cegar a ponte.
d.addEventListener('touchmove',function(e){
  if(dono&&e.cancelable)e.preventDefault();},{capture:true,passive:false});
function solta(){dono=false;idPtr=null;}
d.addEventListener('touchend',solta,{capture:true,passive:true});
d.addEventListener('touchcancel',solta,{capture:true,passive:true});
d.addEventListener('pointerup',solta,{capture:true,passive:true});
d.addEventListener('pointercancel',solta,{capture:true,passive:true});
// mouse: mata o rastro azul de seleção no arraste (o "fica marcando a página" no desktop também).
d.addEventListener('selectstart',function(e){if(!campoTexto(e.target))e.preventDefault();},true);
function ddSolta(n){for(var i=0;n&&n.nodeType===1&&i<6;n=n.parentElement,i++){
  if(n.getAttribute&&n.getAttribute('draggable')==='true')return true;}return false;}
d.addEventListener('dragstart',function(e){
  if(ddSolta(e.target))return;
  if(!campoTexto(e.target)&&!TEXTO.test(e.target&&e.target.tagName))e.preventDefault();},true);
})();`;

/** O bloco que vai para dentro do `<body>` de todo simulador. */
export const PONTE_TOQUE =
  `<style>/*${MARCA_TOQUE}*/${CSS_TOQUE}</style>` +
  `<script>/*${MARCA_TOQUE}*/${JS_TOQUE}<\/script>`;

// ── 3. Ponte mouse→toque (SÓ para os sims que não escutam ponteiro) ──────────
// Traduz o dedo em `mousedown`/`mousemove`/`mouseup`. Aplicada CONDICIONALMENTE (ver
// `precisaPonteMouse`): jogar isto num sim que já usa `pointermove` faria o fader andar DUAS
// vezes por gesto — o navegador já entrega ponteiro no toque. Por isso a condição exige mouse
// E ausência de ponteiro/toque.
//
// `preventDefault()` no `touchend` é obrigatório: sem ele o navegador ainda dispara o par
// sintético `mousedown`/`mouseup`/`click` do tap, e o botão alternaria duas vezes. Como isso
// também mata o `click` legítimo, o `click` é reemitido à mão quando o dedo NÃO andou.
// Elemento nativo (input/botão/link/label) fica de fora: ali o comportamento do navegador já
// está certo e mexer só quebraria foco e teclado.
const JS_MOUSE = `(function(){
if(window.__smuMouse)return;window.__smuMouse=1;
var d=document,alvo=null,andou=false,x0=0,y0=0;
var NATIVO=/^(INPUT|TEXTAREA|SELECT|OPTION|BUTTON|A|LABEL|SUMMARY)$/;
function nativo(n){for(var i=0;n&&n.nodeType===1&&i<3;n=n.parentElement,i++){
  if(NATIVO.test(n.tagName)||n.isContentEditable)return true;}return false;}
function emite(tipo,t,btn){
  alvo.dispatchEvent(new MouseEvent(tipo,{bubbles:true,cancelable:true,view:window,
    clientX:t.clientX,clientY:t.clientY,screenX:t.screenX,screenY:t.screenY,
    button:0,buttons:btn,detail:tipo==='click'?1:0}));}
d.addEventListener('touchstart',function(e){
  if(e.touches.length!==1||nativo(e.target)){alvo=null;return;}
  alvo=e.target;andou=false;x0=e.touches[0].clientX;y0=e.touches[0].clientY;
  emite('mousedown',e.touches[0],1);},{passive:true});
d.addEventListener('touchmove',function(e){
  if(!alvo||e.touches.length!==1)return;
  var t=e.touches[0];
  if(!andou&&Math.abs(t.clientX-x0)+Math.abs(t.clientY-y0)>3)andou=true;
  emite('mousemove',t,1);},{passive:true});
d.addEventListener('touchend',function(e){
  if(!alvo)return;
  var t=e.changedTouches[0];
  emite('mouseup',t,0);
  if(!andou)emite('click',t,0);
  if(e.cancelable)e.preventDefault();
  alvo=null;},{passive:false});
d.addEventListener('touchcancel',function(){alvo=null;},{passive:true});
})();`;

export const PONTE_MOUSE = `<script>/*${MARCA_MOUSE}*/${JS_MOUSE}<\/script>`;

// ── 4. Contrato de tela cheia (player ⇄ simulador) ──────────────────────────
// O player avisa; o simulador decide. Aqui mora o SINAL, um lugar só, valendo para todos os
// cursos e para todo simulador futuro. A RESPOSTA é de cada simulador: só ele conhece o próprio
// layout — mesa de zoom-fit não pode virar 2 colunas, cenário fluido pode.
//
// Como o simulador responde: escreva CSS contra `html.smu-fs`. Nada de JS. Ex.:
//   @media (min-width:1250px){
//     html.smu-fs .app{max-width:1900px;display:block;columns:2}   /* `columns` exige block */
//   }
// Quem não tiver esse CSS simplesmente não reage — é assim que som/DJ/vídeo ficam a salvo.
//
// O `resize` é disparado junto porque a classe muda o layout sem gerar evento nenhum, e os
// simuladores redimensionam o canvas no `resize` — sem ele o arraste sai desalinhado.
export const PONTE_TELA_CHEIA =
  `<script>/*SMU-FS*/addEventListener('message',function(e){var d=e&&e.data;` +
  `if(d&&d.smu==='fullscreen'){document.documentElement.classList.toggle('smu-fs',!!d.on);` +
  `dispatchEvent(new Event('resize'));}});<\/script>`;

/**
 * Prepara o HTML do simulador antes de virar `srcDoc`.
 *
 * PRECISA ser pura e não depender do estado de tela cheia: qualquer mudança no `srcDoc` remonta
 * o iframe e o aluno perde o que já fez. Remove também o controle de zoom antigo (script marcado
 * com SMU-ZOOM), que sobrepunha os botões do simulador — o zoom hoje é o GLOBAL (PageZoom).
 *
 * Três pontes, cada uma com sua condição própria:
 *   SMU-FS    — tela cheia (o sim reage por CSS a `html.smu-fs`);
 *   SMU-TOQUE — dedo: o arraste do fader deixa de virar rolagem e a página para de ser
 *               selecionada. Vai em TODOS: é aditiva, sim já preparado não muda de comportamento;
 *   SMU-MOUSE — só nos sims que arrastam exclusivamente por evento de mouse (ver
 *               `precisaPonteMouse`): aplicá-la onde já existe ponteiro faria o fader andar
 *               DUAS vezes por gesto.
 * Cada uma checa a própria marca antes de entrar — sim que já traz a ponte embutida não duplica.
 */
export function preparaSimulador(html: string): string {
  const limpo = html.replace(/<script[^>]*>\s*\/\*SMU-ZOOM\*\/[\s\S]*?<\/script>/gi, "");

  let pontes = "";
  if (!limpo.includes("/*SMU-FS*/")) pontes += PONTE_TELA_CHEIA;
  if (!limpo.includes(`/*${MARCA_TOQUE}*/`)) pontes += PONTE_TOQUE;
  if (!limpo.includes(`/*${MARCA_MOUSE}*/`) && precisaPonteMouse(limpo)) pontes += PONTE_MOUSE;
  if (!pontes) return limpo;

  // `replace` com STRING, e o texto injetado pode conter `$&`/`$'` — que viram padrão de
  // substituição e corrompem o HTML (armadilha já registrada no CLAUDE.md). Por isso o
  // segundo argumento é FUNÇÃO: função devolve o texto literal, sem interpretar `$`.
  // Se não houver </body>, anexa no fim — o navegador resolve.
  return limpo.includes("</body>")
    ? limpo.replace("</body>", () => `${pontes}\n</body>`)
    : limpo + pontes;
}

/**
 * O simulador arrasta SÓ por eventos de mouse?
 *
 * Procura REGISTRO de handler (`addEventListener('mousemove'`, `onMouseMove=`), não a palavra
 * solta: 14 dos 15 sims mouse-only carregam o React minificado embutido, e o bundle do React
 * cita "mousemove"/"touchmove" em `switch/case`. Contar a palavra dava 118 sims "com arraste"
 * quando o número real era 106 — foi assim que o levantamento errado quase virou correção
 * errada.
 */
export function precisaPonteMouse(html: string): boolean {
  const reg = (ev: string) =>
    new RegExp(
      `addEventListener\\s*\\(\\s*["'\`]${ev}["'\`]|on${ev}\\s*=|on${ev[0].toUpperCase()}${ev.slice(1)}\\s*[=:]`,
      "i",
    ).test(html);
  // React em JSX vira `onMouseMove={...}` no fonte, mas o bundle compilado guarda a prop como
  // `onMouseMove:` — daí o `[=:]` acima.
  const mouse = reg("mousemove") || reg("mousedown");
  const ponteiro = reg("pointermove") || reg("pointerdown");
  const toque = reg("touchmove") || reg("touchstart");
  return mouse && !ponteiro && !toque;
}
