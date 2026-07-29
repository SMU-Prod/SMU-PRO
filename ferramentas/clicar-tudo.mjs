/* clicar-tudo.mjs — o portao que faltava.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * O dono viu botao morto na tela enquanto o auditar-funcoes.mjs dizia
 * "0 controles mortos em 47 simuladores". Os dois verificadores que existiam
 * conferem GEOMETRIA (checar-pos) e CONTROLE DECLARADO SEM TRATAMENTO
 * (auditar-funcoes). Nenhum dos dois CLICA em nada. Entao um botao que foi
 * desenhado e nunca recebeu acao passa batido pelos dois.
 *
 * Este aqui monta a interface do simulador num DOM de mentira, acha TODO
 * elemento que parece controle e CLICA num por um, medindo se alguma coisa
 * mudou. O que nao muda nada e reportado com o rotulo que aparece na tela,
 * para dar para achar o botao olhando o aparelho.
 *
 * COMO ELE MEDE (leia antes de confiar no numero)
 * 1. Carrega o <body> REAL do arquivo. Nao inventa id: o simulador acha os
 *    elementos que ele espera achar, do jeito que estao na marcacao.
 * 2. Roda TODOS os blocos <script> no mesmo contexto (node:vm), na ordem,
 *    igual ao navegador. Depois dispara DOMContentLoaded e load.
 * 3. Quem e "controle": o proprio CSS do arquivo responde. Toda regra com
 *    cursor:pointer vira seletor de candidato — se o mouse vira mãozinha, o
 *    aluno VAI clicar. Somem os rotulos de serigrafia sem precisar de lista.
 * 4. Controles empilhados (a pele .rbtn embaixo e a .hit por cima) sao
 *    agrupados por SOBREPOSICAO geometrica: o humano clica num LUGAR da tela,
 *    nao num no do DOM. O grupo e testado junto.
 * 5. Escalada de gesto: clique -> arrasto -> roda -> change/input -> Enter.
 *    Knob e fader so respondem a arrasto; sem isso eram falso positivo em
 *    massa. O evento BORBULHA ate document e window, que e onde os
 *    simuladores registram o pointermove/pointerup do arrasto.
 * 6. Duas passadas. Na 1a o aparelho acabou de ligar e um monte de ramo
 *    legitimo esta guardado (RELOOP sem loop, DELETE sem memoria). A 1a
 *    passada AQUECE a maquina, o motor de audio anda de verdade (o
 *    onaudioprocess roda, entao a faixa sai do zero) e a 2a passada re-testa
 *    so quem ficou mudo, agora num estado rico. So e morto quem calou nas duas.
 * 7. O que conta como EFEITO:
 *      A estado do simulador mudou (variaveis do proprio script, lidas no vm)
 *      B mudou DOM FORA da pele do proprio controle e fora do ruido comum
 *        (ruido = o que quase todo controle mexe: painel de ensino, tooltip)
 *      C efeito externo (location.reload, alert, localStorage, postMessage...)
 *      D o desenho do canvas mudou (so quando o desenho e estavel em repouso)
 *      E escreveu em parametro de audio (gain/frequency/...)
 *    Acender a propria pele NAO conta — e exatamente "so acende" que o dono
 *    reclamou.
 * 8. Cada acusado sai com o DIAGNOSTICO, porque o conserto de cada um e outro:
 *      (sem tratador) ninguem escuta o clique      -> falta ligar o handler
 *      (so acende)    o handler so acende a pele   -> falta a funcao
 *      (sem reacao)   handler existe e nada mudou  -> ramo ausente, ou
 *                     guardado por condicao (ex.: deck sem faixa carregada)
 * 9. Rotulo duvidoso (serigrafia, visor, conector, peca de arrastar) vai para
 *    "? suspeito" em vez de virar acusacao: falso positivo em massa e pior
 *    que silencio.
 *
 * O QUE ELE NAO E
 * Nao prova que a funcao esta CERTA — prova que existe resposta. E nao
 * conserta nada: a entrega e a MEDICAO.
 * LIMITE CONHECIDO: o que so funciona com faixa carregada de verdade
 * (arquivo local / YouTube) sai como "(sem reacao)" — o teste nao tem como
 * carregar musica. Confira esses no aparelho antes de mexer.
 *
 * DIAGNOSTICO (variaveis de ambiente, para quem for consertar):
 *   SMU_PORQUE=1  imprime, controle a controle, por que foi vivo ou morto
 *   SMU_PASSO=1   imprime cada controle no momento em que e clicado
 *   SMU_DEPURA=1  imprime o estado do simulador antes e depois da varredura
 *                 (SMU_DEPURA='^(d|ready)$' filtra as variaveis por regex)
 *
 * uso:  node ferramentas/clicar-tudo.mjs <arquivo.html>
 *       node ferramentas/clicar-tudo.mjs --todos     (simuladores/dj)
 *       node ferramentas/clicar-tudo.mjs --tudo      (todas as pastas)
 *       node ferramentas/clicar-tudo.mjs <pasta>
 *       ... --detalhe   mostra o rotulo de todo controle sem funcao
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const SIMS = path.join(path.resolve(AQUI, ".."), "simuladores");

/* ======================================================================== */
/* 1. REGISTRO DE MUTACAO                                                    */
/* ======================================================================== */
/* Toda alteracao no DOM falso passa por aqui. Guardamos QUEM mudou, nao so
   "mudou alguma coisa": e a diferenca entre saber que o botao acendeu e saber
   que o botao fez o aparelho reagir. */
let REG = null;                 /* Set de uid enquanto estamos medindo */
let EXTERNO = 0;                /* location.reload, alert, storage, ... */
let AUDIO = 0;                  /* escritas em parametro de audio */
function toca(el) { if (REG && el) REG.add(el._uid); }
function tocaExterno() { EXTERNO++; }
function tocaAudio() { AUDIO++; }

let SEQ = 0;

/* ======================================================================== */
/* 2. DOM DE MENTIRA                                                         */
/* ======================================================================== */
const VAZIOS = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input",
  "link", "meta", "param", "source", "track", "wbr", "path", "circle", "rect",
  "line", "polygon", "polyline", "ellipse", "stop", "use", "image"]);
const CRU = new Set(["script", "style", "textarea", "title"]);

class NoTexto {
  constructor(t) { this._uid = ++SEQ; this.nodeType = 3; this.data = t; this.parentElement = null; }
  get textContent() { return this.data; }
  set textContent(v) { if (v !== this.data) toca(this.parentElement); this.data = String(v); }
  get nodeValue() { return this.data; }
}

function estiloDe(dono) {
  const bruto = {};
  const cru = k => String(k).replace(/[A-Z]/g, m => "-" + m.toLowerCase());
  return new Proxy(bruto, {
    get(o, k) {
      if (k === "setProperty") return (p, v) => { const c = cru(p); if (o[c] !== v) toca(dono); o[c] = String(v); };
      if (k === "getPropertyValue") return p => o[cru(p)] ?? "";
      if (k === "removeProperty") return p => { delete o[cru(p)]; toca(dono); };
      if (k === "cssText") return Object.entries(o).map(([a, b]) => a + ":" + b).join(";");
      if (typeof k !== "string") return undefined;
      return o[cru(k)] ?? "";
    },
    set(o, k, v) {
      if (k === "cssText") {                       /* atalho usado por varios sims */
        for (const par of String(v).split(";")) { const i = par.indexOf(":"); if (i > 0) o[par.slice(0, i).trim()] = par.slice(i + 1).trim(); }
        toca(dono); return true;
      }
      const c = cru(k); const s = v == null ? "" : String(v);
      if (o[c] !== s) { o[c] = s; toca(dono); }
      return true;
    }
  });
}

const EVENTOS_INLINE = ["click", "dblclick", "pointerdown", "pointerup", "pointermove",
  "pointerenter", "pointerleave", "pointercancel", "mousedown", "mouseup", "mousemove",
  "mouseenter", "mouseleave", "mouseover", "mouseout", "change", "input", "keydown",
  "keyup", "keypress", "wheel", "touchstart", "touchend", "touchmove", "contextmenu",
  "focus", "blur", "load", "error", "submit", "scroll", "animationend", "transitionend"];

class El {
  constructor(tag = "div") {
    this._uid = ++SEQ;
    this.nodeType = 1;
    this.tagName = String(tag).toUpperCase();
    this.localName = String(tag).toLowerCase();
    this._filhos = [];
    this._attr = new Map();
    this._on = Object.create(null);
    this.parentElement = null;
    this.style = estiloDe(this);
    this._valor = "";
    this._checked = false;
    this._canvas = null;
    this.width = 300; this.height = 150;
  }
  /* ---- arvore ---- */
  get parentNode() { return this.parentElement; }
  get childNodes() { return this._filhos; }
  get children() { return this._filhos.filter(n => n.nodeType === 1); }
  get firstChild() { return this._filhos[0] || null; }
  get lastChild() { return this._filhos[this._filhos.length - 1] || null; }
  get firstElementChild() { return this.children[0] || null; }
  get lastElementChild() { const c = this.children; return c[c.length - 1] || null; }
  get childElementCount() { return this.children.length; }
  get nextElementSibling() { const p = this.parentElement; if (!p) return null; const c = p.children; return c[c.indexOf(this) + 1] || null; }
  get previousElementSibling() { const p = this.parentElement; if (!p) return null; const c = p.children; return c[c.indexOf(this) - 1] || null; }
  appendChild(c) { if (!c) return c; if (c._frag) { c._filhos.slice().forEach(x => this.appendChild(x)); return c; } if (c.parentElement) c.parentElement._tira(c); c.parentElement = this; this._filhos.push(c); toca(this); return c; }
  append(...cs) { cs.forEach(c => this.appendChild(typeof c === "string" ? new NoTexto(c) : c)); }
  prepend(...cs) { cs.reverse().forEach(c => this.insertBefore(typeof c === "string" ? new NoTexto(c) : c, this._filhos[0])); }
  _tira(c) { const i = this._filhos.indexOf(c); if (i >= 0) { this._filhos.splice(i, 1); toca(this); } }
  insertBefore(n, ref) { if (!ref) return this.appendChild(n); const i = this._filhos.indexOf(ref); if (n.parentElement) n.parentElement._tira(n); n.parentElement = this; this._filhos.splice(i < 0 ? this._filhos.length : i, 0, n); toca(this); return n; }
  removeChild(c) { this._tira(c); c.parentElement = null; return c; }
  replaceChild(novo, velho) { const i = this._filhos.indexOf(velho); if (i >= 0) { this._filhos[i] = novo; novo.parentElement = this; velho.parentElement = null; toca(this); } return velho; }
  remove() { if (this.parentElement) { this.parentElement._tira(this); this.parentElement = null; } }
  replaceWith(...ns) { const p = this.parentElement; if (!p) return; const i = p._filhos.indexOf(this); p._filhos.splice(i, 1, ...ns); ns.forEach(n => n.parentElement = p); toca(p); }
  after(...ns) { const p = this.parentElement; if (!p) return; let ref = this.nextSibling; ns.forEach(n => p.insertBefore(typeof n === "string" ? new NoTexto(n) : n, ref)); }
  before(...ns) { const p = this.parentElement; if (!p) return; ns.forEach(n => p.insertBefore(typeof n === "string" ? new NoTexto(n) : n, this)); }
  get nextSibling() { const p = this.parentElement; if (!p) return null; return p._filhos[p._filhos.indexOf(this) + 1] || null; }
  get previousSibling() { const p = this.parentElement; if (!p) return null; return p._filhos[p._filhos.indexOf(this) - 1] || null; }
  get options() { return this.children.filter(c => c.tagName === "OPTION"); }
  add(op) { this.appendChild(op); }
  get selectedIndex() { return this.options.findIndex(o => o._attr.get("value") === this._valor); }
  set selectedIndex(i) { const o = this.options[i]; if (o) this.value = o.getAttribute("value") ?? o.textContent; }
  cloneNode(fundo) { const c = new El(this.localName); for (const [k, v] of this._attr) c._attr.set(k, v); if (fundo) this._filhos.forEach(f => c.appendChild(f.nodeType === 3 ? new NoTexto(f.data) : f.cloneNode(true))); return c; }
  contains(o) { for (let n = o; n; n = n.parentElement) if (n === this) return true; return false; }

  /* ---- atributos ---- */
  setAttribute(k, v) { k = String(k).toLowerCase(); const s = v == null ? "" : String(v); if (this._attr.get(k) !== s) { this._attr.set(k, s); toca(this); } }
  getAttribute(k) { const v = this._attr.get(String(k).toLowerCase()); return v === undefined ? null : v; }
  hasAttribute(k) { return this._attr.has(String(k).toLowerCase()); }
  removeAttribute(k) { if (this._attr.delete(String(k).toLowerCase())) toca(this); }
  get attributes() { return [...this._attr].map(([name, value]) => ({ name, value })); }
  get id() { return this._attr.get("id") || ""; }
  set id(v) { this.setAttribute("id", v); }
  get className() { return this._attr.get("class") || ""; }
  set className(v) { this.setAttribute("class", v); }
  get _cls() { return new Set((this._attr.get("class") || "").split(/\s+/).filter(Boolean)); }
  get classList() {
    const eu = this;
    const ler = () => (eu._attr.get("class") || "").split(/\s+/).filter(Boolean);
    const gravar = a => eu.setAttribute("class", a.join(" "));
    return {
      add: (...c) => { const a = ler(); let m = 0; c.forEach(x => { if (x && !a.includes(x)) { a.push(x); m++; } }); if (m) gravar(a); },
      remove: (...c) => { let a = ler(); const n = a.filter(x => !c.includes(x)); if (n.length !== a.length) gravar(n); },
      toggle: (c, f) => { const a = ler(); const tem = a.includes(c); const alvo = f === undefined ? !tem : !!f; if (alvo !== tem) { alvo ? a.push(c) : a.splice(a.indexOf(c), 1); gravar(a); } return alvo; },
      contains: c => ler().includes(c),
      replace: (a1, b1) => { const a = ler(); const i = a.indexOf(a1); if (i >= 0) { a[i] = b1; gravar(a); } },
      get length() { return ler().length; },
      item: i => ler()[i] ?? null,
      forEach: f => ler().forEach(f),
      [Symbol.iterator]: function* () { yield* ler(); }
    };
  }
  get dataset() {
    const eu = this;
    const cru = k => "data-" + String(k).replace(/[A-Z]/g, m => "-" + m.toLowerCase());
    return new Proxy({}, {
      get: (_, k) => typeof k === "string" ? eu._attr.get(cru(k)) : undefined,
      set: (_, k, v) => { eu.setAttribute(cru(k), v); return true; },
      has: (_, k) => eu._attr.has(cru(k)),
      deleteProperty: (_, k) => { eu.removeAttribute(cru(k)); return true; },
      ownKeys: () => [...eu._attr.keys()].filter(k => k.startsWith("data-")).map(k => k.slice(5).replace(/-(\w)/g, (_, x) => x.toUpperCase())),
      getOwnPropertyDescriptor: () => ({ enumerable: true, configurable: true })
    });
  }
  /* <select> sem nada escolhido vale a PRIMEIRA option, como no navegador.
     Sem isso o valor vinha "" e a conta do simulador estourava em undefined. */
  get value() {
    if (this._valor !== "") return this._valor;
    if (this.tagName === "SELECT") { const o = this.options.find(x => x.hasAttribute("selected")) || this.options[0]; return o ? (o.getAttribute("value") ?? o.textContent) : ""; }
    if (this.tagName === "OPTION") return this._attr.has("value") ? this._attr.get("value") : this.textContent;
    return this._attr.get("value") || "";
  }
  set value(v) { const s = v == null ? "" : String(v); if (s !== this._valor) { this._valor = s; toca(this); } }
  get checked() { return this._checked; }
  set checked(v) { if (!!v !== this._checked) { this._checked = !!v; toca(this); } }
  get disabled() { return this._attr.has("disabled"); }
  set disabled(v) { v ? this.setAttribute("disabled", "") : this.removeAttribute("disabled"); }
  get type() { return this._attr.get("type") || (this.tagName === "BUTTON" ? "submit" : "text"); }
  set type(v) { this.setAttribute("type", v); }
  get href() { return this._attr.get("href") || ""; }
  set href(v) { this.setAttribute("href", v); }
  get src() { return this._attr.get("src") || ""; }
  set src(v) { this.setAttribute("src", v); if (this._on.load) disparar(this, "load"); }

  /* ---- texto e html ---- */
  get textContent() { return this._filhos.map(n => n.textContent).join(""); }
  set textContent(v) { const s = v == null ? "" : String(v); if (s === this.textContent && this._filhos.length <= 1) return; this._filhos = []; if (s !== "") { const t = new NoTexto(s); t.parentElement = this; this._filhos.push(t); } toca(this); }
  get innerText() { return this.textContent; }
  set innerText(v) { this.textContent = v; }
  get innerHTML() { return this._filhos.map(serializar).join(""); }
  /* CUIDADO: nunca sair daqui sem esvaziar os filhos. Um atalho "se o html e o
     mesmo, nao faz nada" fazia `svg.innerHTML=""` NAO limpar — a roda camelot
     acumulava 48 elementos por clique, a arvore explodia e o teste travava. */
  set innerHTML(v) { const s = v == null ? "" : String(v); const mudou = s !== this._htmlAnterior; this._htmlAnterior = s; this._filhos = []; montarEm(this, analisarHTML(s)); if (mudou) toca(this); }
  get outerHTML() { return serializar(this); }
  insertAdjacentHTML(pos, h) {
    const filhos = []; const caixa = new El("div"); montarEm(caixa, analisarHTML(h)); filhos.push(...caixa._filhos.slice());
    if (pos === "beforeend") filhos.forEach(f => this.appendChild(f));
    else if (pos === "afterbegin") filhos.reverse().forEach(f => this.insertBefore(f, this._filhos[0]));
    else if (pos === "beforebegin" && this.parentElement) filhos.forEach(f => this.parentElement.insertBefore(f, this));
    else if (pos === "afterend" && this.parentElement) filhos.reverse().forEach(f => this.parentElement.insertBefore(f, this.nextElementSibling));
    toca(this);
  }

  /* ---- eventos ---- */
  addEventListener(t, f) { if (typeof f !== "function") return; (this._on[t] = this._on[t] || []).push(f); }
  removeEventListener(t, f) { const a = this._on[t]; if (a) { const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); } }
  dispatchEvent(ev) { disparar(this, ev && ev.type, ev); return true; }
  click() { disparar(this, "click"); }
  focus() { } blur() { } select() { }
  setPointerCapture() { } releasePointerCapture() { } hasPointerCapture() { return false; }
  scrollIntoView() { } scrollTo() { } closest(sel) { for (let n = this; n; n = n.parentElement) if (casaSeletor(n, sel)) return n; return null; }
  matches(sel) { return casaSeletor(this, sel); }

  /* ---- medidas ----------------------------------------------------------
     O DOM falso nao tem layout, mas NAO pode devolver lixo: as peles sao
     posicionadas em %, e devolver "17,06" como se fosse pixel dava largura
     zero -> divisao por zero -> d.pos virou NaN e CONGELOU o estado do
     simulador inteiro (todo controle depois disso parecia morto). Projetamos
     a % num palco virtual de 1400x900 e nunca devolvemos caixa de area 0. */
  getBoundingClientRect() {
    const px = (v, base, padrao) => {
      const s = String(v || ""); const m = /(-?[\d.]+)/.exec(s);
      if (!m) return padrao;
      const n = parseFloat(m[1]);
      return /%/.test(s) ? n / 100 * base : n;
    };
    const l = px(this.style.left, 1400, 0), t = px(this.style.top, 900, 0);
    const w = Math.max(1, px(this.style.width, 1400, 100)), h = Math.max(1, px(this.style.height, 900, 40));
    return { left: l, top: t, width: w, height: h, right: l + w, bottom: t + h, x: l, y: t, toJSON() { return this; } };
  }
  get offsetWidth() { return this.getBoundingClientRect().width; }
  get offsetHeight() { return this.getBoundingClientRect().height; }
  get clientWidth() { return this.offsetWidth; }
  get clientHeight() { return this.offsetHeight; }
  get offsetLeft() { return numEstilo(this.style.left); }
  get offsetTop() { return numEstilo(this.style.top); }
  get scrollHeight() { return 400; } get scrollWidth() { return 400; }
  get offsetParent() { return this.parentElement; }
  get parentSize() { return null; }

  /* ---- canvas ---- */
  getContext() { if (!this._canvas) this._canvas = contextoCanvas(this); return this._canvas; }
  toDataURL() { return "data:image/png;base64,"; }
  /* ---- media / iframe ---- */
  play() { return Promise.resolve(); } pause() { } load() { }
  get contentWindow() { return { postMessage: () => tocaExterno(), document: null }; }
  get contentDocument() { return null; }
  querySelector(s) { return buscar(this, s, true); }
  querySelectorAll(s) { return buscar(this, s, false); }
  getElementsByClassName(c) { return buscar(this, "." + c, false); }
  getElementsByTagName(t) { return buscar(this, t, false); }
}
for (const ev of EVENTOS_INLINE) {
  Object.defineProperty(El.prototype, "on" + ev, {
    get() { return (this._on[ev] || [])[0] || null; },
    set(f) { if (typeof f === "function") this._on[ev] = [f]; else delete this._on[ev]; },
    configurable: true
  });
}
function numEstilo(v) { const m = /(-?[\d.]+)/.exec(String(v || "")); return m ? parseFloat(m[1]) : 0; }
function serializar(n) {
  if (n.nodeType === 3) return n.data;
  const at = [...n._attr].map(([k, v]) => ` ${k}="${v}"`).join("");
  const est = n.style.cssText ? ` style="${n.style.cssText}"` : "";
  const t = n.localName;
  if (VAZIOS.has(t)) return `<${t}${at}${est}>`;
  return `<${t}${at}${est}>${n._filhos.map(serializar).join("")}</${t}>`;
}

/* ======================================================================== */
/* 3. PARSER DE HTML — de verdade: aninha, guarda texto e atributos          */
/* ======================================================================== */
/* O parser antigo era raso: varria <tag> com regex, nao aninhava e jogava o
   texto fora. Resultado: todo elemento que o simulador esperava achar pronto
   voltava null (a enxurrada de "Cannot set properties of null") e o rotulo do
   botao saia vazio, o que deixa o relatorio inutil para o humano. */
function analisarHTML(html) {
  const raiz = { filhos: [], tag: "#raiz" };
  const pilha = [raiz];
  const topo = () => pilha[pilha.length - 1];
  let i = 0;
  const n = html.length;
  while (i < n) {
    const lt = html.indexOf("<", i);
    if (lt < 0) { texto(html.slice(i)); break; }
    if (lt > i) texto(html.slice(i, lt));
    if (html.startsWith("<!--", lt)) { const f = html.indexOf("-->", lt); i = f < 0 ? n : f + 3; continue; }
    if (html.startsWith("<!", lt)) { const f = html.indexOf(">", lt); i = f < 0 ? n : f + 1; continue; }
    if (html.startsWith("</", lt)) {
      const f = html.indexOf(">", lt); if (f < 0) break;
      const nome = html.slice(lt + 2, f).trim().toLowerCase();
      for (let k = pilha.length - 1; k > 0; k--) if (pilha[k].tag === nome) { pilha.length = k; break; }
      i = f + 1; continue;
    }
    /* tag de abertura */
    const f = fimDaTag(html, lt);
    if (f < 0) { texto(html.slice(lt)); break; }
    const bruto = html.slice(lt + 1, f);
    const mn = /^([A-Za-z][\w:-]*)/.exec(bruto);
    if (!mn) { texto(html.slice(lt, f + 1)); i = f + 1; continue; }
    const tag = mn[1].toLowerCase();
    const no = { tag, attr: atributos(bruto.slice(mn[1].length)), filhos: [], texto: null };
    topo().filhos.push(no);
    i = f + 1;
    const autoFecha = /\/\s*$/.test(bruto) || VAZIOS.has(tag);
    if (CRU.has(tag)) {                       /* conteudo cru: nao e marcacao */
      const fim = html.toLowerCase().indexOf("</" + tag, i);
      const corpo = fim < 0 ? html.slice(i) : html.slice(i, fim);
      no.texto = corpo;
      no.filhos.push({ tag: "#texto", dado: corpo });
      i = fim < 0 ? n : html.indexOf(">", fim) + 1;
      continue;
    }
    if (!autoFecha) pilha.push(no);
  }
  function texto(t) { if (t) topo().filhos.push({ tag: "#texto", dado: t }); }
  return raiz.filhos;
}
function fimDaTag(h, ini) {           /* respeita aspas: style="a>b" nao fecha a tag */
  let aspas = null;
  for (let i = ini + 1; i < h.length; i++) {
    const c = h[i];
    if (aspas) { if (c === aspas) aspas = null; continue; }
    if (c === '"' || c === "'") { aspas = c; continue; }
    if (c === ">") return i;
  }
  return -1;
}
function atributos(s) {
  const m = new Map();
  const re = /([A-Za-z_:@][-\w:.]*)\s*(?:=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>`]+)))?/g;
  let x;
  while ((x = re.exec(s))) {
    const nome = x[1].toLowerCase();
    if (nome === "/") continue;
    m.set(nome, decodificar(x[2] ?? x[3] ?? x[4] ?? ""));
  }
  return m;
}
const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", times: "×", middot: "·", mdash: "—", ndash: "–", hellip: "…", deg: "°" };
function decodificar(s) {
  if (!s.includes("&")) return s;
  return s.replace(/&(#x?[0-9a-fA-F]+|\w+);/g, (t, c) => {
    if (c[0] === "#") { const n = c[1] === "x" || c[1] === "X" ? parseInt(c.slice(2), 16) : parseInt(c.slice(1), 10); return Number.isFinite(n) ? String.fromCodePoint(n) : t; }
    return ENT[c] ?? t;
  });
}
function montarEm(pai, nos) {
  for (const no of nos) {
    if (no.tag === "#texto") { const t = new NoTexto(decodificar(no.dado)); t.parentElement = pai; pai._filhos.push(t); continue; }
    const el = new El(no.tag);
    for (const [k, v] of no.attr) {
      if (k === "style") { for (const par of v.split(";")) { const j = par.indexOf(":"); if (j > 0) el.style[par.slice(0, j).trim()] = par.slice(j + 1).trim(); } }
      else el._attr.set(k, v);
    }
    el.parentElement = pai; pai._filhos.push(el);
    if (!CRU.has(no.tag)) montarEm(el, no.filhos);
    else if (no.texto != null) { const t = new NoTexto(no.texto); t.parentElement = el; el._filhos.push(t); }
  }
}

/* ======================================================================== */
/* 4. SELETORES                                                              */
/* ======================================================================== */
const CACHE_SEL = new Map();
function compilar(sel) {
  let c = CACHE_SEL.get(sel);
  if (c) return c;
  c = String(sel).split(",").map(s => s.trim()).filter(Boolean).map(compilarUm).filter(Boolean);
  CACHE_SEL.set(sel, c);
  return c;
}
function compilarUm(s) {
  const toks = s.replace(/\s*([>+~])\s*/g, " $1 ").trim().split(/\s+/);
  const partes = [];
  let comb = " ";
  for (const t of toks) {
    if (t === ">" || t === "+" || t === "~") { comb = t; continue; }
    partes.push({ comb, comp: composto(t) });
    comb = " ";
  }
  return partes.length ? partes : null;
}
function composto(t) {
  const o = { tag: null, id: null, cls: [], attr: [], nao: [], pseudo: [] };
  const re = /([#.][\w-]+)|(\[[^\]]*\])|(:{1,2}[\w-]+(?:\(([^()]*)\))?)|([*\w-]+)/g;
  let m, primeiro = true;
  while ((m = re.exec(t))) {
    if (m[1]) { if (m[1][0] === "#") o.id = m[1].slice(1); else o.cls.push(m[1].slice(1)); }
    else if (m[2]) {
      const a = /^\[\s*([-\w:]+)\s*(?:([~^$*|]?=)\s*"?'?([^"'\]]*)"?'?\s*)?\]$/.exec(m[2]);
      if (a) o.attr.push({ n: a[1].toLowerCase(), op: a[2] || null, v: a[3] ?? null });
    }
    else if (m[3]) { const p = m[3].replace(/^:+/, "").split("(")[0]; if (p === "not" && m[4]) o.nao.push(m[4]); else o.pseudo.push(p); }
    else if (m[5] && primeiro) o.tag = m[5].toUpperCase();
    primeiro = false;
  }
  return o;
}
function casaComposto(el, o) {
  if (el.nodeType !== 1) return false;
  if (o.tag && o.tag !== "*" && el.tagName !== o.tag) return false;
  if (o.id && el.id !== o.id) return false;
  if (o.cls.length) { const c = el._cls; for (const x of o.cls) if (!c.has(x)) return false; }
  for (const a of o.attr) {
    const v = el.getAttribute(a.n);
    if (a.op === null) { if (v === null) return false; continue; }
    if (v === null) return false;
    if (a.op === "=" && v !== a.v) return false;
    if (a.op === "^=" && !v.startsWith(a.v)) return false;
    if (a.op === "$=" && !v.endsWith(a.v)) return false;
    if (a.op === "*=" && !v.includes(a.v)) return false;
    if (a.op === "~=" && !v.split(/\s+/).includes(a.v)) return false;
  }
  for (const n of o.nao) if (casaSeletor(el, n)) return false;
  for (const p of o.pseudo) {
    if (p === "first-child" && el.previousElementSibling) return false;
    if (p === "last-child" && el.nextElementSibling) return false;
    if (p === "checked" && !el.checked) return false;
    if (p === "disabled" && !el.disabled) return false;
    /* :hover/:active/:focus/::before nao existem sem usuario nem layout — passam */
  }
  return true;
}
function casaCaminho(el, partes, i) {
  if (!casaComposto(el, partes[i].comp)) return false;
  if (i === 0) return true;
  const comb = partes[i].comb;
  if (comb === " ") { for (let p = el.parentElement; p; p = p.parentElement) if (casaCaminho(p, partes, i - 1)) return true; return false; }
  if (comb === ">") return el.parentElement ? casaCaminho(el.parentElement, partes, i - 1) : false;
  if (comb === "+") { const s = el.previousElementSibling; return s ? casaCaminho(s, partes, i - 1) : false; }
  if (comb === "~") { for (let s = el.previousElementSibling; s; s = s.previousElementSibling) if (casaCaminho(s, partes, i - 1)) return true; return false; }
  return false;
}
function casaSeletor(el, sel) {
  for (const partes of compilar(sel)) if (casaCaminho(el, partes, partes.length - 1)) return true;
  return false;
}
function descendentes(raiz, saida = []) {
  for (const c of raiz._filhos) if (c.nodeType === 1) { saida.push(c); descendentes(c, saida); }
  return saida;
}
function buscar(raiz, sel, um) {
  const compiladas = compilar(sel);
  if (!compiladas.length) return um ? null : [];
  const achados = [];
  for (const el of descendentes(raiz)) {
    for (const partes of compiladas) if (casaCaminho(el, partes, partes.length - 1)) { if (um) return el; achados.push(el); break; }
  }
  return um ? null : achados;
}

/* ======================================================================== */
/* 5. EVENTOS                                                                */
/* ======================================================================== */
function novoEvento(tipo, alvo, extra) {
  let parou = false;
  const ev = {
    type: tipo, target: alvo, currentTarget: alvo, bubbles: true, cancelable: true,
    defaultPrevented: false, isTrusted: true, timeStamp: 0,
    clientX: 50, clientY: 20, offsetX: 20, offsetY: 10, pageX: 50, pageY: 20,
    screenX: 50, screenY: 20, movementX: 0, movementY: 0, deltaY: 0, deltaX: 0,
    button: 0, buttons: 1, pointerId: 1, pointerType: "mouse", pressure: 0.5,
    key: "", code: "", keyCode: 0, which: 1, shiftKey: false, ctrlKey: false, altKey: false, metaKey: false,
    touches: [{ clientX: 50, clientY: 20, identifier: 1 }],
    changedTouches: [{ clientX: 50, clientY: 20, identifier: 1 }],
    detail: 1, relatedTarget: null,
    preventDefault() { ev.defaultPrevented = true; },
    stopPropagation() { parou = true; },
    stopImmediatePropagation() { parou = true; },
    composedPath: () => [alvo],
    get _parou() { return parou; }
  };
  if (extra) Object.assign(ev, extra);
  return ev;
}
/* document e window sao o TOPO da borbulha. Sem eles, todo knob e fader morre:
   o pointerdown fica no elemento, mas `pointermove`/`pointerup` do arrasto sao
   registrados em DOCUMENT (padrao dos simuladores). Faltando esse degrau, o
   relatorio acusava painel inteiro de EQ como botao morto. */
let DOC_ATUAL = null, JAN_ATUAL = null, COMPILA = null;
/* onclick="calcEcad()" escrito NA MARCACAO tambem e tratador. Sem compilar
   isso, os simuladores da producao-legado (que usam inline em tudo) saiam com
   painel inteiro "(sem tratador)" — falso positivo por culpa do teste. */
function ligarInline(n, tipo) {
  if (!COMPILA || !n._attr) return;
  const chave = "on" + tipo;
  if (!n._attr.has(chave) || (n._inline && n._inline[chave])) return;
  (n._inline = n._inline || {})[chave] = true;
  const f = COMPILA(n._attr.get(chave));
  if (f) (n._on[tipo] = n._on[tipo] || []).unshift(f);
}
function disparar(alvo, tipo, evPronto, extra) {
  if (!tipo) return;
  const ev = evPronto && evPronto.type ? evPronto : novoEvento(tipo, alvo, extra);
  ev.target = ev.target || alvo;
  const chamar = (dono, fns) => { if (!fns || !fns.length) return; ev.currentTarget = dono; for (const f of fns.slice()) { try { f.call(dono, ev); } catch (e) { registrarEstouro(e); } } };
  for (let n = alvo; n; n = n.parentElement) {
    ligarInline(n, tipo);
    chamar(n, n._on && n._on[tipo]);
    if (ev._parou || !ev.bubbles) return;
  }
  if (DOC_ATUAL) { chamar(DOC_ATUAL, DOC_ATUAL._on[tipo]); if (ev._parou) return; }
  if (JAN_ATUAL) chamar(JAN_ATUAL.dono, JAN_ATUAL.ouve[tipo]);
  /* comportamento NATIVO que o navegador da de graca e nao tem handler:
     <label for=x> repassa o clique para o controle x, e <input type=file>
     abre o seletor do sistema. Sem isto o botao "Adicionar musicas" do
     smu-dj-studio (que e um <label>) era acusado de morto — falso positivo. */
  if (tipo !== "click" || ev._parou) return;
  if (alvo.tagName === "INPUT" && /^file$/i.test(alvo.getAttribute("type") || "")) tocaExterno();   /* abre o seletor do sistema */
  if (alvo.tagName === "A" && alvo.getAttribute("href") && alvo.getAttribute("href") !== "#") tocaExterno();  /* navega */
  if (alvo.tagName === "LABEL" && !ev._nativo) {
    const par = alvo.getAttribute("for");
    const dest = par && DOC_ATUAL ? DOC_ATUAL.getElementById(par) : descendentes(alvo).find(e => /^(INPUT|SELECT|TEXTAREA|BUTTON)$/.test(e.tagName));
    if (dest) { const ev2 = novoEvento("click", dest); ev2._nativo = true; disparar(dest, "click", ev2); }
  }
}
let ESTOUROS = [];
function registrarEstouro(e) { if (ESTOUROS.length < 40) ESTOUROS.push(String(e && e.message || e).slice(0, 120)); }

/* ======================================================================== */
/* 6. CANVAS / AUDIO                                                         */
/* ======================================================================== */
/* O canvas guarda a SEQUENCIA de chamadas. Se o desenho muda depois do
   clique, alguma coisa reagiu — mesmo que nenhum id do DOM tenha mexido. */
function contextoCanvas(dono) {
  const alvo = { canvas: dono, _ops: "", _n: 0 };
  const marca = (t) => { alvo._n++; if (alvo._ops.length < 4000) alvo._ops += t + "|"; };
  return new Proxy(alvo, {
    get(o, k) {
      if (k in o) return o[k];
      if (k === "createLinearGradient" || k === "createRadialGradient" || k === "createPattern")
        return (...a) => { marca(String(k) + a.join(",")); return { addColorStop() { } }; };
      if (k === "measureText") return t => ({ width: String(t).length * 6, actualBoundingBoxAscent: 8, actualBoundingBoxDescent: 2 });
      if (k === "getImageData") return (x, y, w, h) => ({ data: new Uint8ClampedArray(Math.max(4, (w | 0) * (h | 0) * 4)), width: w | 0, height: h | 0 });
      if (k === "createImageData") return (w, h) => ({ data: new Uint8ClampedArray(Math.max(4, (w | 0) * (h | 0) * 4)), width: w | 0, height: h | 0 });
      if (k === "getContextAttributes") return () => ({});
      return (...a) => { marca(String(k) + ":" + a.map(x => typeof x === "number" ? Math.round(x * 100) / 100 : typeof x === "string" ? x : "~").join(",")); toca(dono); };
    },
    set(o, k, v) { if (typeof v !== "object") marca(String(k) + "=" + v); o[k] = v; toca(dono); return true; }
  });
}
function param(v) {
  return new Proxy({ value: v, defaultValue: v, minValue: -3.4e38, maxValue: 3.4e38 }, {
    get: (o, k) => k in o ? o[k] : ((...a) => { tocaAudio(); if (a.length) o.value = typeof a[0] === "number" ? a[0] : o.value; return o; }),
    set: (o, k, x) => { if (k === "value" && o.value !== x) tocaAudio(); o[k] = x; return true; }
  });
}
/* Nos de audio que tem onaudioprocess. O transporte dos simuladores (d.pos)
   anda DENTRO desse callback. Se ele nunca roda, a faixa fica parada no zero e
   controles legitimos (TRACK SEARCH, SEARCH, BEAT JUMP) "nao mudam nada" — era
   falso positivo puro. Rodamos o motor ENTRE as passadas, nunca durante a
   medicao (senao tudo mudaria sempre e tudo pareceria vivo). */
let PROCESSADORES = [];
const BLOCO_AUDIO = new Float32Array(512);
function rodarAudio(blocos = 400) {
  if (!PROCESSADORES.length) return;
  const buf = { getChannelData: () => BLOCO_AUDIO, numberOfChannels: 1, length: 512, sampleRate: 44100, duration: 512 / 44100 };
  const ev = { outputBuffer: buf, inputBuffer: buf, playbackTime: 0 };
  for (let i = 0; i < blocos; i++) for (const p of PROCESSADORES) { try { p.onaudioprocess(ev); } catch (e) { registrarEstouro(e); return; } }
}
function noAudio() {
  const o = {
    gain: param(1), frequency: param(350), detune: param(0), Q: param(1), pan: param(0),
    delayTime: param(0), threshold: param(-24), knee: param(30), ratio: param(12),
    attack: param(0.003), release: param(0.25), playbackRate: param(1), offset: param(0),
    type: "sine", buffer: null, loop: false, loopStart: 0, loopEnd: 0, curve: null,
    fftSize: 2048, frequencyBinCount: 1024, smoothingTimeConstant: 0.8,
    minDecibels: -100, maxDecibels: -30, normalize: true, channelCount: 2, numberOfInputs: 1, numberOfOutputs: 1,
    onended: null, onaudioprocess: null, port: { postMessage() { }, onmessage: null },
    connect() { return noAudio(); }, disconnect() { }, start() { tocaAudio(); }, stop() { tocaAudio(); },
    setValueCurveAtTime() { tocaAudio(); }, setPeriodicWave() { },
    getFloatTimeDomainData(a) { if (a && a.fill) a.fill(0); },
    getByteTimeDomainData(a) { if (a && a.fill) a.fill(128); },
    getFloatFrequencyData(a) { if (a && a.fill) a.fill(-100); },
    getByteFrequencyData(a) { if (a && a.fill) a.fill(0); },
    addEventListener() { }, removeEventListener() { }
  };
  return new Proxy(o, {
    get: (t, k) => k in t ? t[k] : (() => noAudio()),
    set: (t, k, v) => { t[k] = v; if (k === "onaudioprocess" && typeof v === "function" && !PROCESSADORES.includes(t)) PROCESSADORES.push(t); return true; }
  });
}
function bufferAudio(canais, quadros, sr) {
  const n = Math.min(Math.max(1, quadros | 0), 2_000_000);
  const dados = [];
  for (let i = 0; i < Math.max(1, canais); i++) dados.push(new Float32Array(n));
  return { numberOfChannels: Math.max(1, canais), length: n, sampleRate: sr || 44100, duration: n / (sr || 44100), getChannelData: i => dados[i] || dados[0], copyToChannel() { }, copyFromChannel() { } };
}
function contextoAudio(canais, quadros, sr) {
  const ctx = {
    destination: noAudio(), currentTime: 0, sampleRate: sr || 44100, state: "running",
    listener: noAudio(), baseLatency: 0.01, outputLatency: 0.02, audioWorklet: { addModule: () => Promise.resolve() },
    createGain: noAudio, createBiquadFilter: noAudio, createBufferSource: noAudio, createAnalyser: noAudio,
    createOscillator: noAudio, createDelay: noAudio, createDynamicsCompressor: noAudio, createWaveShaper: noAudio,
    createStereoPanner: noAudio, createPanner: noAudio, createConvolver: noAudio, createChannelSplitter: noAudio,
    createChannelMerger: noAudio, createConstantSource: noAudio, createIIRFilter: noAudio, createScriptProcessor: noAudio,
    createMediaElementSource: noAudio, createMediaStreamDestination: noAudio, createPeriodicWave: () => ({}),
    createBuffer: (c, q, s) => bufferAudio(c, q, s),
    decodeAudioData: (_, ok) => { const b = bufferAudio(2, 44100 * 4, 44100); if (ok) ok(b); return Promise.resolve(b); },
    startRendering: () => Promise.resolve(bufferAudio(Math.max(1, canais || 2), quadros || 44100 * 4, sr || 44100)),
    resume: () => Promise.resolve(), suspend: () => Promise.resolve(), close: () => Promise.resolve(),
    addEventListener() { }, removeEventListener() { }
  };
  return ctx;
}

/* ======================================================================== */
/* 7. AMBIENTE (o que faltava: location, navigator, timers, URL, Blob...)    */
/* ======================================================================== */
function montarAmbiente(html) {
  ESTOUROS = [];
  EXTERNO = 0; AUDIO = 0; PROCESSADORES = [];

  const nos = analisarHTML(html);
  const doc = new El("html");
  montarEm(doc, nos);
  let raizHtml = buscar(doc, "html", true) || doc;
  let head = buscar(raizHtml, "head", true);
  let body = buscar(raizHtml, "body", true);
  if (!body) { body = new El("body"); raizHtml.appendChild(body); }
  if (!head) { head = new El("head"); raizHtml.insertBefore(head, body); }

  /* --------- timers: guardam, nao travam. Rodamos quando MANDAMOS --------- */
  const fila = [];
  let idTimer = 1;
  const agendar = (fn, ms, rep, args) => { if (typeof fn !== "function") return 0; const id = idTimer++; fila.push({ id, fn, ms: +ms || 0, rep, args: args || [], vivo: true }); return id; };
  const cancelar = id => { const t = fila.find(x => x.id === id); if (t) t.vivo = false; };
  const quadros = [];
  let idQuadro = 1;

  const loc = {
    href: "http://localhost/sim.html", protocol: "http:", host: "localhost", hostname: "localhost",
    port: "", pathname: "/sim.html", search: "", hash: "", origin: "http://localhost",
    reload: () => tocaExterno(), assign: () => tocaExterno(), replace: () => tocaExterno(), toString() { return this.href; }
  };
  const armadilhaLoc = new Proxy(loc, { set: (o, k, v) => { if (o[k] !== v) tocaExterno(); o[k] = v; return true; } });

  const guardaLocal = (() => { const m = new Map(); return { getItem: k => m.has(String(k)) ? m.get(String(k)) : null, setItem: (k, v) => { tocaExterno(); m.set(String(k), String(v)); }, removeItem: k => { tocaExterno(); m.delete(String(k)); }, clear: () => { tocaExterno(); m.clear(); }, key: i => [...m.keys()][i] ?? null, get length() { return m.size; } }; })();

  const documento = {
    nodeType: 9,
    documentElement: raizHtml, body, head, title: "", readyState: "loading",
    location: armadilhaLoc, cookie: "", referrer: "", characterSet: "UTF-8", hidden: false, visibilityState: "visible",
    activeElement: body, scrollingElement: body, fullscreenElement: null,
    querySelector: s => buscar(raizHtml, s, true),
    querySelectorAll: s => buscar(raizHtml, s, false),
    getElementById: id => buscar(raizHtml, "#" + CSS_id(id), true),
    getElementsByClassName: c => buscar(raizHtml, "." + c, false),
    getElementsByTagName: t => t === "*" ? descendentes(raizHtml) : buscar(raizHtml, t, false),
    getElementsByName: n => buscar(raizHtml, `[name="${n}"]`, false),
    createElement: t => new El(t),
    createElementNS: (_, t) => new El(t),
    createTextNode: t => new NoTexto(String(t)),
    createDocumentFragment: () => { const f = new El("#fragment"); f._frag = true; return f; },
    createEvent: t => novoEvento(t, body),
    createRange: () => ({ selectNodeContents() { }, setStart() { }, setEnd() { } }),
    importNode: (n, d) => n.cloneNode(d),
    adoptNode: n => n,
    execCommand: () => { tocaExterno(); return true; },
    elementFromPoint: () => null,
    exitFullscreen: () => Promise.resolve(),
    addEventListener(t, f) { (this._on[t] = this._on[t] || []).push(f); },
    removeEventListener(t, f) { const a = this._on[t]; if (a) { const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); } },
    dispatchEvent(ev) { const a = this._on[ev && ev.type]; if (a) for (const f of a.slice()) { try { f(ev); } catch (e) { registrarEstouro(e); } } return true; },
    _on: Object.create(null),
    defaultView: null
  };
  /* o <body>/<html> tambem recebe eventos delegados: ligamos os dois mundos */
  raizHtml.parentElement = null;

  /* Os ouvintes de window ficam num mapa FECHADO, nao em `this`: dentro do vm
     `window` e o proprio global, e `this` na chamada seria outro objeto. */
  const ouveJanela = Object.create(null);

  const janela = {
    innerWidth: 1400, innerHeight: 900, outerWidth: 1400, outerHeight: 900,
    devicePixelRatio: 1, scrollX: 0, scrollY: 0, pageXOffset: 0, pageYOffset: 0,
    screen: { width: 1920, height: 1080, availWidth: 1920, availHeight: 1040, orientation: { type: "landscape-primary", addEventListener() { } } },
    location: armadilhaLoc, name: "", closed: false, isSecureContext: true, origin: "http://localhost",
    localStorage: guardaLocal, sessionStorage: guardaLocal,
    navigator: {
      userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) SMU-clicar-tudo",
      platform: "Win32", language: "pt-BR", languages: ["pt-BR", "pt"], vendor: "",
      maxTouchPoints: 0, hardwareConcurrency: 8, deviceMemory: 8, onLine: true, cookieEnabled: true,
      vibrate: () => { tocaExterno(); return true; },
      clipboard: { writeText: () => { tocaExterno(); return Promise.resolve(); }, readText: () => Promise.resolve("") },
      mediaDevices: { getUserMedia: () => Promise.reject(new Error("sem microfone no teste")), enumerateDevices: () => Promise.resolve([]) },
      share: () => { tocaExterno(); return Promise.resolve(); },
      userAgentData: { platform: "Windows", mobile: false },
      serviceWorker: { register: () => Promise.resolve({}) }
    },
    performance: { now: () => Date.now() % 1e7, timeOrigin: 0, mark() { }, measure() { }, getEntriesByName: () => [], getEntriesByType: () => [] },
    history: { length: 1, state: null, pushState: () => tocaExterno(), replaceState: () => tocaExterno(), back: () => tocaExterno(), forward: () => tocaExterno(), go: () => tocaExterno() },
    matchMedia: q => ({ matches: /min-width|landscape/.test(String(q)), media: String(q), addListener() { }, removeListener() { }, addEventListener() { }, removeEventListener() { }, onchange: null }),
    getComputedStyle: el => {
      const base = el && el.style ? el.style : {};
      return new Proxy({}, {
        get(_, k) {
          if (k === "getPropertyValue") return p => base[p] ?? padraoCSS(p);
          if (typeof k !== "string") return undefined;
          return base[k] || padraoCSS(k);
        }
      });
    },
    alert: () => tocaExterno(), confirm: () => { tocaExterno(); return true; }, prompt: () => { tocaExterno(); return ""; },
    open: () => { tocaExterno(); return null; }, close: () => tocaExterno(), print: () => tocaExterno(), focus() { }, blur() { },
    postMessage: () => tocaExterno(),
    scrollTo() { }, scrollBy() { }, moveTo() { }, resizeTo() { },
    requestAnimationFrame: fn => { if (typeof fn === "function") quadros.push(fn); return idQuadro++; },
    cancelAnimationFrame: () => { },
    requestIdleCallback: fn => { if (typeof fn === "function") quadros.push(() => fn({ timeRemaining: () => 5, didTimeout: false })); return idQuadro++; },
    cancelIdleCallback: () => { },
    setTimeout: (fn, ms, ...a) => agendar(fn, ms, false, a),
    setInterval: (fn, ms, ...a) => agendar(fn, ms, true, a),
    clearTimeout: cancelar, clearInterval: cancelar,
    queueMicrotask: fn => { try { queueMicrotask(fn); } catch (_) { } },
    addEventListener(t, f) { if (typeof f === "function") (ouveJanela[t] = ouveJanela[t] || []).push(f); },
    removeEventListener(t, f) { const a = ouveJanela[t]; if (a) { const i = a.indexOf(f); if (i >= 0) a.splice(i, 1); } },
    dispatchEvent(ev) { const a = ouveJanela[ev && ev.type]; if (a) for (const f of a.slice()) { try { f(ev); } catch (e) { registrarEstouro(e); } } return true; },
    document: documento
  };

  /* AudioContext / OfflineAudioContext */
  function CtxAudio() { return contextoAudio(2, 44100 * 4, 44100); }
  function CtxOffline(c, q, s) { return contextoAudio(c, q, s); }

  /* O global do vm E a janela: `window.x=1` e depois `x` tem de funcionar,
     igual ao navegador. Por isso espalhamos `janela` no sandbox e, ja dentro
     do contexto, apontamos window/self/top/parent para o proprio globalThis. */
  const sandbox = {
    ...janela,
    document: documento,
    console: { log() { }, warn() { }, error() { }, info() { }, debug() { }, table() { }, time() { }, timeEnd() { }, group() { }, groupEnd() { }, trace() { }, assert() { }, dir() { }, count() { } },
    clearTimeout: cancelar, clearInterval: cancelar,
    AudioContext: CtxAudio, webkitAudioContext: CtxAudio, OfflineAudioContext: CtxOffline, webkitOfflineAudioContext: CtxOffline,
    AudioBuffer: function () { return bufferAudio(2, 44100, 44100); },
    Audio: function () { return Object.assign(new El("audio"), { play: () => Promise.resolve(), pause() { } }); },
    Image: class { constructor() { this.width = 0; this.height = 0; this.onload = null; this.onerror = null; } set src(v) { this._src = v; if (this.onload) setImmediate(() => { try { this.onload(); } catch (e) { registrarEstouro(e); } }); } get src() { return this._src; } addEventListener() { } },
    URL: class extends URL { static createObjectURL() { return "blob:sim"; } static revokeObjectURL() { } },
    URLSearchParams, Blob: class { constructor(p) { this.size = (p || []).join("").length; this.type = ""; } text() { return Promise.resolve(""); } arrayBuffer() { return Promise.resolve(new ArrayBuffer(0)); } slice() { return this; } },
    File: class { constructor(p, n) { this.name = n || "f"; this.size = 0; } },
    FileReader: class { readAsDataURL() { if (this.onload) this.onload({ target: { result: "data:," } }); } readAsText() { if (this.onload) this.onload({ target: { result: "" } }); } addEventListener() { } },
    FormData: class { append() { } get() { return null; } },
    Headers: class { get() { return null; } has() { return false; } append() { } },
    fetch: () => Promise.resolve({
      ok: false, status: 404, statusText: "sem rede no teste", headers: { get: () => null },
      json: () => Promise.resolve({}), text: () => Promise.resolve(""),
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(8)), blob: () => Promise.resolve({ size: 0 })
    }),
    XMLHttpRequest: class { open() { } send() { if (this.onerror) this.onerror(new Error("sem rede")); } setRequestHeader() { } addEventListener() { } },
    WebSocket: class { constructor() { this.readyState = 3; } send() { } close() { } addEventListener() { } },
    Worker: class { postMessage() { } terminate() { } addEventListener() { } },
    MediaRecorder: class { constructor() { this.state = "inactive"; } start() { this.state = "recording"; } stop() { this.state = "inactive"; if (this.onstop) this.onstop({}); } pause() { } resume() { } addEventListener(t, f) { if (t === "stop") this.onstop = f; } requestData() { } static isTypeSupported() { return false; } },
    MediaStream: class { getTracks() { return []; } getAudioTracks() { return []; } addTrack() { } },
    MediaSource: class { addSourceBuffer() { return { appendBuffer() { } }; } },
    Notification: class { static requestPermission() { return Promise.resolve("denied"); } },
    ResizeObserver: class { observe() { } unobserve() { } disconnect() { } },
    IntersectionObserver: class { observe() { } unobserve() { } disconnect() { } takeRecords() { return []; } },
    MutationObserver: class { observe() { } disconnect() { } takeRecords() { return []; } },
    Event: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    CustomEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), { detail: (o || {}).detail ?? null }, o || {}); } },
    MouseEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    PointerEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    KeyboardEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    WheelEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    TouchEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    DragEvent: class { constructor(t, o) { Object.assign(this, novoEvento(t, null), o || {}); } },
    Option: function (texto, valor) { const o = new El("option"); if (texto != null) o.textContent = String(texto); o.setAttribute("value", valor != null ? String(valor) : String(texto ?? "")); return o; },
    Element: El, HTMLElement: El, HTMLCanvasElement: El, HTMLInputElement: El, HTMLDivElement: El,
    HTMLOptionElement: El, HTMLSelectElement: El, HTMLButtonElement: El, HTMLAudioElement: El, HTMLImageElement: El,
    SVGElement: El, Node: El, Text: NoTexto, DocumentFragment: El,
    DOMParser: class { parseFromString(s) { const d = new El("html"); montarEm(d, analisarHTML(s)); d.querySelector = x => buscar(d, x, true); d.querySelectorAll = x => buscar(d, x, false); return d; } },
    XMLSerializer: class { serializeToString(n) { return serializar(n); } },
    structuredClone: o => { try { return JSON.parse(JSON.stringify(o)); } catch (_) { return o; } },
    crypto: { randomUUID: () => "00000000-0000-4000-9000-000000000000", getRandomValues: a => { if (a && a.fill) a.fill(7); return a; } },
    speechSynthesis: { speak: () => tocaExterno(), cancel() { }, getVoices: () => [] },
    SpeechSynthesisUtterance: class { constructor(t) { this.text = t; } },
    /* Math.random determinístico: dois testes do mesmo arquivo dao o mesmo numero */
    Math: Object.create(Math, { random: { value: (() => { let s = 42; return () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff; })() } })
  };

  const ctx = vm.createContext(sandbox);
  vm.runInContext("var window=globalThis,self=globalThis,top=globalThis,parent=globalThis,frames=globalThis;", ctx);
  documento.defaultView = vm.runInContext("globalThis", ctx);
  DOC_ATUAL = documento;
  JAN_ATUAL = { dono: documento.defaultView, ouve: ouveJanela };
  COMPILA = codigo => { try { return vm.runInContext(`(function(event){${codigo}\n})`, ctx); } catch (_) { return null; } };

  const rodarQuadros = (n = 1) => {
    for (let i = 0; i < n; i++) {
      const lote = quadros.splice(0, quadros.length);
      for (const f of lote) { try { f(16.7 * (i + 1)); } catch (e) { registrarEstouro(e); } }
      if (!lote.length) break;
    }
    quadros.length = 0;                      /* nao deixamos o laco de render acumular */
  };
  const rodarTimers = (max = 300) => {
    let n = 0;
    for (let volta = 0; volta < 6 && n < max; volta++) {
      const lote = fila.splice(0, fila.length).filter(t => t.vivo).sort((a, b) => a.ms - b.ms);
      if (!lote.length) break;
      for (const t of lote) {
        if (n++ >= max) break;
        try { t.fn(...t.args); } catch (e) { registrarEstouro(e); }
      }
    }
    fila.length = 0;
  };

  return { ctx, documento, janela, raizHtml, body, head, rodarTimers, rodarQuadros, loc: armadilhaLoc };
}
function CSS_id(id) { return String(id).replace(/([^\w-])/g, "\\$1"); }
function padraoCSS(p) {
  if (p === "display") return "block";
  if (p === "visibility") return "visible";
  if (p === "opacity") return "1";
  if (p === "position") return "static";
  if (p === "cursor") return "auto";
  return "";
}

/* ======================================================================== */
/* 8. CSS: quem tem cursor:pointer e candidato a botao                      */
/* ======================================================================== */
/* "o mouse muda de forma" = o aluno entende que da para mexer. Alem de
   pointer, os knobs usam ns-resize e os pratos grab — se so olhassemos
   pointer, o painel de EQ inteiro ficaria de fora do teste. */
const CURSOR_MEXIVEL = /cursor\s*:\s*(pointer|grab|grabbing|move|ns-resize|ew-resize|col-resize|row-resize|all-scroll|crosshair)/i;
function seletoresClicaveis(html) {
  const sels = new Set();
  for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) {
    const css = m[1].replace(/\/\*[\s\S]*?\*\//g, "");
    for (const r of css.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      if (!CURSOR_MEXIVEL.test(r[2])) continue;
      let sel = r[1];
      sel = sel.replace(/^[\s\S]*\{/, "");                 /* tira o "@media ...{" grudado */
      for (let s of sel.split(",")) {
        s = s.trim().replace(/::?(hover|active|focus|focus-visible|before|after|first-line)\b(\([^)]*\))?/g, "");
        s = s.trim();
        if (s && !s.startsWith("@") && !/^\*$/.test(s)) sels.add(s);
      }
    }
  }
  return [...sels];
}

/* ======================================================================== */
/* 9. ESTADO DO SIMULADOR (variaveis do proprio script, lidas dentro do vm)  */
/* ======================================================================== */
const RESERVADAS = new Set(["if", "for", "in", "of", "let", "var", "new", "do", "function", "return", "class", "const", "window", "document", "true", "false", "null", "undefined", "this"]);
function nomesDeclarados(fontes) {
  const nomes = new Set();
  for (const src of fontes) {
    /* fatia por \r\n TAMBEM: o lerTexto ja normaliza, mas quem chamar esta
       funcao com texto cru de outro lugar nao pode perder as 124 variaveis em
       silencio — o `(.*)$` abaixo nao casa linha que ainda carrega o \r. */
    for (const l of src.split(/\r?\n/)) {
      const m = /^[ \t]{0,3}(?:const|let|var)\s+(.*)$/.exec(l);
      if (!m) continue;
      let d = 0, atual = "", pedacos = [];
      for (const c of m[1]) {
        if ("([{".includes(c)) d++;
        else if (")]}".includes(c)) d--;
        if (c === "," && d === 0) { pedacos.push(atual); atual = ""; continue; }
        atual += c;
      }
      pedacos.push(atual);
      for (const p of pedacos) {
        const id = /^\s*([A-Za-z_$][\w$]*)/.exec(p);
        if (id && !RESERVADAS.has(id[1])) nomes.add(id[1]);
      }
    }
  }
  return [...nomes].slice(0, 400);
}
function scriptDeEstado(nomes) {
  if (!nomes.length) return null;
  const corpo = nomes.map(n => `try{__o[${JSON.stringify(n)}]=${n}}catch(__e){}`).join("");
  return new vm.Script(`(function(){var __o={};${corpo}return __o})()`, { filename: "estado-smu" });
}
function resumir(v, prof = 0, visto = new Set()) {
  if (v === null) return "n";
  const t = typeof v;
  if (t === "number") return Number.isFinite(v) ? String(Math.round(v * 1e4) / 1e4) : "NaN";
  if (t === "string") return v.length > 60 ? v.slice(0, 60) + "#" + v.length : v;
  if (t === "boolean") return v ? "T" : "F";
  if (t === "undefined") return "u";
  if (t === "function") return "f";
  if (t === "object") {
    if (ArrayBuffer.isView(v)) return v.constructor.name + v.length + ":" + Array.from(v.slice(0, 4)).map(x => Math.round(x * 100) / 100).join(",");
    if (v.nodeType === 1 || v.nodeType === 3) return "<el>";
    if (v._ops !== undefined) return "<ctx>";
    if (prof > 3) return "…";
    if (visto.has(v)) return "@";
    visto.add(v);
    if (Array.isArray(v)) return "[" + v.slice(0, 40).map(x => resumir(x, prof + 1, visto)).join(",") + (v.length > 40 ? "+" + v.length : "") + "]";
    const ks = Object.keys(v).slice(0, 120);
    return "{" + ks.map(k => k + ":" + resumir(v[k], prof + 1, visto)).join(",") + "}";
  }
  return String(v);
}

/* ======================================================================== */
/* 10. SERIGRAFIA — rotulo impresso no chassi NAO e botao                    */
/* ======================================================================== */
/* Rede de seguranca. Com o cursor:pointer a maior parte da serigrafia ja nao
   entra como candidata, mas o que passar aqui vira "? suspeito", nunca
   acusacao: falso positivo em massa e pior que silencio. */
const SERIGRAFIA = new RegExp("^(" + [
  "pioneer( dj)?", "technics", "denon( dj)?", "numark", "akai( professional)?", "roland",
  "alphatheta", "allen ?& ?heath", "a&h", "yamaha", "behringer", "soundcraft", "presonus",
  "digico", "dbx", "novastar", "blackmagic", "resolume", "smu( pro)?",
  "rekordbox", "serato", "traktor", "nexus", "pro ?dj ?link", "multi ?player", "cd ?player",
  "compact ?disc", "digital", "analog", "master", "booth", "phono", "line", "mic", "aux",
  "usb ?[0-9]?", "sd", "link", "power", "on", "off", "l", "r", "a", "b", "c", "d",
  "ch ?[0-9]+", "deck ?[0-9a-d]?", "canal ?[0-9]+", "in", "out", "send", "return", "mix",
  "eq", "hi", "mid", "low", "gain", "trim", "level", "vol", "cue", "pgm",
  "db", "dbu", "dbfs", "bpm", "hz", "khz", "ms", "min", "max", "%",
  "[-+]?[0-9]+([.,][0-9]+)?\\s*(%|db|hz|khz|ms|s|k)?", "[-+±]", "[•·–—▲▼◀▶←→↑↓]+",
  "1/[0-9]+", "[0-9]+/[0-9]+"
].join("|") + ")$", "i");

/* Nomes de elemento que sao VISOR/PECA, nao botao: nunca acusar.
   Duas familias, porque a forma de escrever difere:
   - LEITURA: casa em qualquer posicao do nome (mtr1, bpmdisp, paramdisp,
     mtrML...). Sem isso o teste acusava MEDIDOR DE PICO de "botao morto".
   - PECA: palavra inteira, para nao engolir nome de botao de verdade. */
const NAO_BOTAO_LEITURA = /(display|disp\b|dispc|screen|waveform|meter|mtr|vumet|readout|visor|lcd|oled|bpmdisp|paramdisp|\brng[a-z]?\b)/i;
const NAO_BOTAO = /\b(wave|vu|logo|plate|well|hood|deco|serig|lab|caption|cap2?|legend|nota|hint|dica|texto|title|titulo|badge|pill|tag|led|lamp|glow|shadow|rule|brk|grid|bg|fundo|moldura|frame|chassi|painel-?fundo|jack\d*|micjack\d*|xlr|plug|conector|socket|usbport|sdslot|phones?\d*|porta|slot|hinge|spindle|screw|parafuso|pino|pe|foot)\b/i;

/* Gestos que nao sao clique — knob/fader vivem de arrasto (ja testamos), mas
   se nem no arrasto responderem entram como suspeito e nao como morto. */
const ARRASTAVEL = /\b(knob|pot|fader|slider|jog|platter|prato|encoder|wheel|roda|dial|tempo|xf|crossfader|range|scrub)\b/i;

/* ======================================================================== */
/* 11. O TESTE                                                               */
/* ======================================================================== */
const MODELO = /^_.*modelo|modelo\.html$/i;

async function respirar(n = 3) { for (let i = 0; i < n; i++) await new Promise(r => setImmediate(r)); }

/* LEITURA NORMALIZADA — o \r NAO passa daqui para dentro.
   O repositorio esta com core.autocrlf=true, logo TODO simulador no disco esta
   em CRLF: o numero que a ferramenta reportava no uso normal era o INFLADO.
   CAUSA: em JavaScript o `.` da regex NAO casa \r. CR e LineTerminator do
   mesmo jeito que \n (diferente de Perl/PCRE, onde `.` so exclui \n). Como
   nomesDeclarados fatiava por "\n" puro, cada linha ficava com o \r no fim, o
   `(.*)$` falhava em TODAS elas e o teste enxergava 0 de 124 variaveis do
   simulador. Sem estado, o controle que so mexe em const/let parece nao fazer
   nada. Medido em 29/07/2026 no pioneer-djm-900nxs2-real.html, MESMO conteudo:
     LF   -> 29 mortos / 3 suspeitos
     CRLF -> 37 mortos / 8 suspeitos   (assign1-4, eqcurve, sron, autotap,
                                        quantize + os knobs = falso positivo)
   Normalizamos na PORTA DE ENTRADA, nao em cada regex: a proxima regex escrita
   neste arquivo nasce imune sem ninguem precisar lembrar do \r. Contagem de \n
   nao muda, entao o numero de linha do erro continua valendo. */
function lerTexto(p) { return fs.readFileSync(p, "utf8").replace(/\r\n?/g, "\n"); }

async function testar(arquivo) {
  const nome = path.basename(arquivo);
  const html = lerTexto(arquivo);

  /* blocos <script> na ORDEM, com a linha de origem para o erro sair util */
  const blocos = [];
  for (const m of html.matchAll(/<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi)) {
    const attrs = m[1] || "";
    const linha = html.slice(0, m.index).split("\n").length;
    const msrc = /\bsrc\s*=\s*["']([^"']+)["']/i.exec(attrs);
    if (msrc) {
      /* script vizinho no disco (ex.: _engine.js do playground de efeitos):
         carregamos de verdade — senao o motor "nao existe" e o arquivo inteiro
         entra como "nao rodou" por culpa do teste, nao do simulador. */
      if (/^(https?:)?\/\//.test(msrc[1])) continue;             /* CDN: nao ha rede aqui */
      const alvoJs = path.resolve(path.dirname(arquivo), msrc[1].split("?")[0]);
      if (fs.existsSync(alvoJs)) blocos.push({ src: lerTexto(alvoJs), linha: 1, nome: path.basename(alvoJs) });
      continue;
    }
    if (/type\s*=\s*"(?!text\/javascript|module)/i.test(attrs)) continue;
    blocos.push({ src: m[2], linha });
  }
  if (!blocos.length) return { nome, arquivo, erro: "sem <script> proprio" };

  const amb = montarAmbiente(html);
  const alvos = seletoresClicaveis(html);

  /* --- roda os blocos, um a um, no mesmo contexto (igual navegador) --- */
  for (const b of blocos) {
    try {
      new vm.Script(b.src, { filename: b.nome || nome, lineOffset: b.linha }).runInContext(amb.ctx, { timeout: 20000 });
    } catch (e) {
      return { nome, arquivo, erro: mensagem(e), ondeErro: local(e, b.nome || nome) };
    }
  }
  /* --- DOMContentLoaded / load: 45 dos 58 simuladores montam a tela aqui --- */
  amb.documento.readyState = "interactive";
  try { amb.documento.dispatchEvent(novoEvento("DOMContentLoaded", amb.documento)); } catch (e) { registrarEstouro(e); }
  amb.documento.readyState = "complete";
  try { amb.janela.dispatchEvent(novoEvento("load", amb.janela)); } catch (e) { registrarEstouro(e); }
  await respirar(4);
  amb.rodarTimers(200); amb.rodarQuadros(1);
  await respirar(4);

  /* --- estado: nomes declarados no topo dos scripts + globais do vm --- */
  const nomes = new Set(nomesDeclarados(blocos.map(b => b.src)));
  try { for (const k of vm.runInContext("Object.keys(globalThis)", amb.ctx)) if (/^[A-Za-z_$][\w$]*$/.test(k)) nomes.add(k); } catch (_) { }
  for (const k of ["window", "document", "self", "top", "parent", "globalThis", "console", "location", "navigator", "Math"]) nomes.delete(k);
  const scriptEstado = scriptDeEstado([...nomes]);
  const lerEstado = () => { if (!scriptEstado) return ""; try { return resumir(scriptEstado.runInContext(amb.ctx, { timeout: 8000 })); } catch (_) { return ""; } };

  /* --- candidatos: quem o CSS diz que e clicavel + os controles nativos --- */
  const todosEls = descendentes(amb.raizHtml);
  const ehCandidato = el => {
    const t = el.tagName;
    /* escondido nao esta na tela — nao da para ser "botao que nao funciona" */
    if (el.hasAttribute("hidden") || el.style.display === "none" || el.style.visibility === "hidden") return false;
    for (let p = el.parentElement; p; p = p.parentElement) if (p.style.display === "none") return false;
    if (t === "BUTTON" || t === "SELECT" || t === "TEXTAREA") return true;
    if (t === "INPUT" && !/^(hidden)$/i.test(el.getAttribute("type") || "")) return true;
    if (t === "A" && el.hasAttribute("href")) return true;
    if (el.getAttribute("role") === "button" || el.hasAttribute("onclick")) return true;
    if (el.getAttribute("data-act") || el.getAttribute("data-k")) return true;
    for (const s of alvos) { try { if (casaSeletor(el, s)) return true; } catch (_) { } }
    return false;
  };
  let candidatos = todosEls.filter(ehCandidato);

  /* --- agrupa por SOBREPOSICAO: o humano clica num LUGAR, nao num no --- */
  const grupos = agrupar(candidatos);

  /* --- ordem: quem liga o aparelho primeiro, senao o resto nasce travado --- */
  grupos.sort((a, b) => (ligaAparelho(b) ? 1 : 0) - (ligaAparelho(a) ? 1 : 0));

  /* --- estabilidade do canvas (so entao o desenho vale como sinal) --- */
  const opsCanvas = () => todosEls.filter(e => e._canvas).map(e => e._canvas._ops).join("#");
  const c1 = opsCanvas(); amb.rodarQuadros(1); const c2 = opsCanvas();
  const canvasEstavel = c1 === c2;

  if (process.env.SMU_DEPURA) {
    console.log("[depura] candidatos:", candidatos.length, "grupos:", grupos.length, "canvasEstavel:", canvasEstavel);
    console.log("[depura] 1o grupo (deve ser o que LIGA):", grupos[0] && grupos[0].rotulo);
    const alvoDep = new RegExp(process.env.SMU_DEPURA === "1" ? "^(started|ready|playing|on|ligado)$" : process.env.SMU_DEPURA);
    try {
      const bruto = scriptEstado ? scriptEstado.runInContext(amb.ctx) : {};
      console.log("[depura] estado:", Object.keys(bruto).filter(k => alvoDep.test(k)).map(k => k + "=" + resumir(bruto[k]).slice(0, 120)).join(" | ") || "(nenhuma variavel casou)");
    } catch (e) { console.log("[depura] estado falhou:", mensagem(e)); }
  }

  /* --- varredura em DUAS PASSADAS ---------------------------------------
     A 1a passada roda com o aparelho recem-ligado: nesse estado um monte de
     controle LEGITIMO nao muda nada porque o ramo dele esta guardado (RELOOP
     sem loop gravado, DELETE sem memoria, USB STOP com o deck ja parado,
     TRACK SEARCH com a faixa ja no zero). Acusar isso seria falso positivo.
     A 1a passada tambem AQUECE a maquina (deu play, gravou hot cue, marcou
     loop). A 2a passada re-testa so quem nao reagiu, agora num estado rico.
     So e morto quem ficou mudo nas duas. */
  const resultados = new Map();
  const testados = new Set();
  let estadoAntes = lerEstado();

  const rodarLote = async (lote, passada) => {
    for (const g of lote) {
      const chave = g.els.map(e => e._uid).join(",");
      const anterior = resultados.get(chave);
      if (passada > 1 && anterior && (anterior.estado || anterior.externo || anterior.audio || anterior.desenho)) continue;
      g.els.forEach(e => testados.add(e._uid));
      if (process.env.SMU_PASSO) process.stderr.write(`   [passo ${passada}] ${g.rotulo}\n`);
      const r = await medirGrupo(g, amb, lerEstado, () => estadoAntes, v => estadoAntes = v, opsCanvas, canvasEstavel);
      if (anterior) {                                  /* acumula os dois testes */
        r.mexeu = new Set([...anterior.mexeu, ...r.mexeu]);
        r.estado = r.estado || anterior.estado; r.externo = r.externo || anterior.externo;
        r.audio = r.audio || anterior.audio; r.desenho = r.desenho || anterior.desenho;
        r.temOuvinte = r.temOuvinte || anterior.temOuvinte; r.acendeu = r.acendeu || anterior.acendeu;
      }
      resultados.set(chave, r);
      /* "Ligar audio" e assincrono (renderTrack/decodeAudioData). Sem esperar
         aqui, TODO o resto cai no `if(!ready)return` e o relatorio acusa o
         aparelho inteiro de morto. */
      if (ligaAparelho(g)) { for (let i = 0; i < 12; i++) { await respirar(4); amb.rodarTimers(200); } estadoAntes = lerEstado(); }
    }
  };

  await rodarLote(grupos, 1);
  /* deixa o motor de audio ANDAR e inverte a ordem: assim um par como
     SEARCH ◄◄ / ►► nao e julgado sempre no mesmo ponto da faixa. */
  rodarAudio(); amb.rodarTimers(100); await respirar(2); estadoAntes = lerEstado();
  await rodarLote([...grupos].reverse(), 2);
  /* controles que so existem depois de um clique (quiz que troca de carta) */
  for (let volta = 0; volta < 2; volta++) {
    const novos = agrupar(descendentes(amb.raizHtml).filter(el => !testados.has(el._uid) && ehCandidato(el)));
    if (!novos.length) break;
    await rodarLote(novos, 1);
    rodarAudio(); await respirar(1); estadoAntes = lerEstado();
    await rodarLote([...novos].reverse(), 2);
  }

  if (process.env.SMU_DEPURA) {
    const alvoDep = new RegExp(process.env.SMU_DEPURA === "1" ? "^(started|ready|playing|on|ligado)$" : process.env.SMU_DEPURA);
    try {
      const bruto = scriptEstado ? scriptEstado.runInContext(amb.ctx) : {};
      console.log("[depura] estado DEPOIS da varredura:", Object.keys(bruto).filter(k => alvoDep.test(k)).map(k => k + "=" + resumir(bruto[k]).slice(0, 1500)).join(" | "));
    } catch (e) { console.log("[depura] estado falhou:", mensagem(e)); }
    if (ESTOUROS.length) console.log("[depura] estouros dentro de handler:", ESTOUROS.slice(0, 6).join(" ;; "));
  }

  /* --- ruido comum: o que QUASE TODO controle mexe (painel de ensino) ---
     Sem isto o `teach()`/tooltip que todo controle escreve faria TUDO parecer
     vivo — foi exatamente esse tipo de cegueira que deixou passar o botao
     morto que o dono viu na tela. */
  const lista = [...resultados.values()];
  const conta = new Map();
  for (const r of lista) for (const u of r.mexeu) conta.set(u, (conta.get(u) || 0) + 1);
  /* 25%: o painel de ensino nao e escrito por 100% dos controles — controles
     vizinhos costumam ter o MESMO texto de ajuda e ai nao ha mutacao. Com 60%
     o painel escapava do filtro e CUE 1 e 4 passavam por "vivos" enquanto CUE
     2 e 3, identicos no codigo, eram acusados. */
  const limite = Math.max(4, Math.ceil(lista.length * 0.25));
  const ruido = new Set([...conta].filter(([, c]) => c >= limite).map(([u]) => u));

  /* --- veredito --- */
  const mortos = [], suspeitos = [];
  for (const r of lista) {
    const foraDoProprio = [...r.mexeu].filter(u => !r.proprios.has(u) && !ruido.has(u));
    const vivo = r.estado || r.externo || r.audio || foraDoProprio.length > 0 || (canvasEstavel && r.desenho);
    if (process.env.SMU_PORQUE) {
      const quem = foraDoProprio.map(u => { const e = todosEls.find(x => x._uid === u) || descendentes(amb.raizHtml).find(x => x._uid === u); return e ? (e.localName + (e.id ? "#" + e.id : "") + (e.className ? "." + e.className.split(/\s+/).join(".") : "")) : "u" + u; });
      console.log(`   ${vivo ? "vivo " : "MORTO"} ${r.rotulo} :: estado=${r.estado ? 1 : 0} audio=${r.audio ? 1 : 0} ext=${r.externo ? 1 : 0} desenho=${r.desenho ? 1 : 0} ouvinte=${r.temOuvinte ? 1 : 0} fora=[${quem.join(" ")}]`);
    }
    if (vivo) continue;
    /* sem NENHUM tratador no caminho de borbulha = o clique nao e nem escutado.
       Isso e fato, nao heuristica: acusa. Com tratador e sem efeito nas duas
       passadas, acusa tambem — mas o rotulo duvidoso vai para "? suspeito". */
    /* tres diagnosticos diferentes, e o conserto de cada um e outro:
       (sem tratador) = ninguem escuta o clique       -> falta ligar o handler
       (so acende)    = o handler so acende a pele    -> falta a funcao
       (sem reacao)   = handler existe e nada mudou   -> ramo ausente ou
                        guardado por condicao (ex.: deck sem faixa carregada) */
    const marca = !r.temOuvinte ? " (sem tratador)" : r.acendeu ? " (so acende)" : " (sem reacao)";
    if (r.duvidoso) suspeitos.push(r.rotulo + marca);
    else mortos.push(r.rotulo + marca);
  }
  return {
    nome, arquivo, total: lista.length, canvasEstavel,
    mortos: unicos(mortos), suspeitos: unicos(suspeitos),
    estouros: ESTOUROS.slice(0, 5)
  };
}
function unicos(a) { return [...new Set(a)]; }

function ligaAparelho(g) {
  const txt = (g.rotulo || "").toLowerCase();
  const id = g.els.map(e => e.id).join(" ").toLowerCase();
  if (/reiniciar|reset|parar|stop/.test(txt)) return false;
  return /ligar|iniciar|come[cç]ar|start|ativar|liga o|power on/.test(txt) || /start|ligar|iniciar/.test(id);
}

/* Agrupa candidatos que ocupam o MESMO lugar (pele + hit sobreposta). */
function agrupar(els) {
  const pai = new Map(els.map(e => [e._uid, e._uid]));
  const achar = u => { while (pai.get(u) !== u) { pai.set(u, pai.get(pai.get(u))); u = pai.get(u); } return u; };
  const unir = (a, b) => { const x = achar(a), y = achar(b); if (x !== y) pai.set(x, y); };
  /* ordenado por x: so comparamos vizinhos horizontais, senao e O(n^2) e um
     painel grande derruba o tempo do teste */
  const caixas = els.map(el => ({ el, cx: caixa(el) })).filter(c => c.cx).sort((a, b) => a.cx.x - b.cx.x);
  for (let i = 0; i < caixas.length; i++) {
    const A = caixas[i].cx;
    for (let j = i + 1; j < caixas.length; j++) {
      const B = caixas[j].cx;
      if (B.x - A.x > Math.max(A.w, B.w)) break;
      if (A.un !== B.un) continue;
      if (sobrepoe(A, B)) unir(caixas[i].el._uid, caixas[j].el._uid);
    }
  }
  /* elemento dentro de outro candidato (o rotulo dentro do botao) tambem junta */
  for (const el of els) for (let p = el.parentElement; p; p = p.parentElement) if (pai.has(p._uid)) { unir(el._uid, p._uid); break; }

  const mapa = new Map();
  for (const el of els) { const r = achar(el._uid); if (!mapa.has(r)) mapa.set(r, []); mapa.get(r).push(el); }
  return [...mapa.values()].map(lista => ({ els: lista, rotulo: rotuloDe(lista), duvidoso: duvidoso(lista) }));
}
function caixa(el) {
  const l = el.style.left, t = el.style.top;
  if (!l || !t) return null;
  const un = /%/.test(l) ? "%" : "px";
  const n = v => { const m = /(-?[\d.]+)/.exec(String(v)); return m ? parseFloat(m[1]) : NaN; };
  const x = n(l), y = n(t), w = n(el.style.width) || 0.001, h = n(el.style.height) || 0.001;
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return { x, y, w, h, un };
}
function sobrepoe(A, B) {
  const ix = Math.min(A.x + A.w, B.x + B.w) - Math.max(A.x, B.x);
  const iy = Math.min(A.y + A.h, B.y + B.h) - Math.max(A.y, B.y);
  if (ix <= 0 || iy <= 0) return false;
  const inter = ix * iy, a = A.w * A.h, b = B.w * B.h;
  return inter > 0.5 * Math.min(a, b);
}
/* O rotulo tem de servir para o humano ACHAR o botao na tela. Por isso vem o
   texto que aparece no aparelho E, entre colchetes, o act/id interno — sem o
   act o relatorio de um painel cheio de setas ("◄◄ ◄◄ ►►") e inutil. */
function rotuloDe(els) {
  const limpa = s => String(s || "").replace(/\s+/g, " ").trim().slice(0, 46);
  let face = "";
  for (const el of els) { const t = limpa(el.textContent); if (t) { face = t; break; } }
  if (!face) for (const el of els) { const t = limpa(el.getAttribute("aria-label") || el.getAttribute("title") || el.getAttribute("data-face") || el.getAttribute("value") || el.getAttribute("placeholder")); if (t) { face = t; break; } }
  let chave = "";
  for (const el of els) { const a = el.getAttribute("data-act") || el.getAttribute("data-k") || el.id; if (a) { chave = a; break; } }
  if (!chave) for (const el of els) { const c = el.className; if (c) { chave = "." + c.split(/\s+/).join("."); break; } }
  if (face && chave && face !== chave) return `${face} [${chave}]`;
  return face || chave || (els[0] ? els[0].localName : "?");
}
function duvidoso(els) {
  const rot = rotuloDe(els);
  const classes = els.map(e => e.className).join(" ");
  const acts = els.map(e => e.getAttribute("data-act") || "").join(" ");
  const ids = els.map(e => e.id).join(" ");
  if (SERIGRAFIA.test(rot.replace(/^[[#.]|]$/g, ""))) return true;
  if (NAO_BOTAO.test(classes) || NAO_BOTAO.test(acts) || NAO_BOTAO.test(ids)) return true;
  if (NAO_BOTAO_LEITURA.test(classes) || NAO_BOTAO_LEITURA.test(acts) || NAO_BOTAO_LEITURA.test(ids)) return true;
  if (ARRASTAVEL.test(classes) || ARRASTAVEL.test(acts) || ARRASTAVEL.test(rot)) return true;
  if (!rot || rot === "?" ) return true;
  return false;
}

/* Escalada de gesto: clique -> arrasto -> roda -> change. Para no primeiro
   que produzir efeito. Knob/fader so respondem a arrasto — sem isso viravam
   falso positivo em massa. */
async function medirGrupo(g, amb, lerEstado, pegaAntes, poeAntes, opsCanvas, canvasEstavel) {
  const proprios = new Set(), nucleo = new Set();
  for (const el of g.els) {
    proprios.add(el._uid); nucleo.add(el._uid);
    descendentes(el).forEach(d => { proprios.add(d._uid); nucleo.add(d._uid); });
    for (let p = el.parentElement; p; p = p.parentElement) proprios.add(p._uid);
  }

  const antesEstado = pegaAntes();
  const antesDesenho = canvasEstavel ? opsCanvas() : "";
  const extAntes = EXTERNO, audAntes = AUDIO;
  const mexeu = new Set();
  REG = mexeu;

  const alvo = g.els.find(e => e._on && Object.keys(e._on).length) || g.els[0];
  /* tem alguem escutando clique no caminho de borbulha? (fato, nao palpite) */
  const GESTOS = ["click", "pointerdown", "mousedown", "pointerup", "mouseup", "change", "input", "keydown", "wheel", "touchstart", "dblclick"];
  let temOuvinte = false;
  for (const el of g.els) for (let n = el; n && !temOuvinte; n = n.parentElement)
    if ((n._on && GESTOS.some(t => n._on[t] && n._on[t].length)) || (n._attr && GESTOS.some(t => n._attr.has("on" + t)))) temOuvinte = true;
  /* o clique cai no CENTRO do controle; o arrasto anda 1/3 da caixa.
     Handler que le e.clientX contra getBoundingClientRect precisa disso. */
  const r0 = alvo.getBoundingClientRect();
  const cx = r0.left + r0.width / 2, cy = r0.top + r0.height / 2;
  const dx = Math.max(8, r0.width / 3), dy = Math.max(8, r0.height / 3);
  const P = (x, y, mais) => Object.assign({ clientX: x, clientY: y, pageX: x, pageY: y, offsetX: x - r0.left, offsetY: y - r0.top }, mais || {});

  const gestos = [
    () => { disparar(alvo, "pointerdown", null, P(cx, cy)); disparar(alvo, "mousedown", null, P(cx, cy)); disparar(alvo, "pointerup", null, P(cx, cy)); disparar(alvo, "mouseup", null, P(cx, cy)); disparar(alvo, "click", null, P(cx, cy)); },
    () => {
      disparar(alvo, "pointerdown", null, P(cx, cy));
      disparar(alvo, "pointermove", null, P(cx + dx, cy - dy, { movementX: dx, movementY: -dy }));
      disparar(alvo, "mousemove", null, P(cx + dx, cy - dy, { movementX: dx, movementY: -dy }));
      disparar(alvo, "pointerup", null, P(cx + dx, cy - dy));
    },
    () => { disparar(alvo, "wheel", null, P(cx, cy, { deltaY: -120 })); },
    () => {
      if (!/^(INPUT|SELECT|TEXTAREA)$/.test(alvo.tagName)) return;
      if (/checkbox|radio/i.test(alvo.getAttribute("type") || "")) alvo.checked = !alvo.checked;
      else if (alvo.tagName === "SELECT") {           /* escolhe OUTRA option de verdade */
        const ops = alvo.options; if (!ops.length) return;
        const atual = alvo.value; const prox = ops.find(o => (o.getAttribute("value") ?? o.textContent) !== atual);
        if (prox) alvo.value = prox.getAttribute("value") ?? prox.textContent;
      }
      else if (/^(range|number)$/i.test(alvo.getAttribute("type") || "")) alvo.value = String((parseFloat(alvo.value) || 0) + 7);
      else alvo.value = alvo.value === "1" ? "2" : "1";
      disparar(alvo, "input"); disparar(alvo, "change");
    },
    () => { disparar(alvo, "keydown", null, { key: "Enter", code: "Enter", keyCode: 13 }); disparar(alvo, "keyup", null, { key: "Enter", keyCode: 13 }); }
  ];

  /* CLIQUE e ARRASTO rodam SEMPRE. Antes eu parava no primeiro gesto que
     "mexeu em alguma coisa" — mas nessa hora o filtro de ruido ainda nao
     existe, entao escrever no painel de ensino contava como efeito e o knob
     NUNCA chegava a ser arrastado. No fim o ruido era descontado e o painel
     de EQ inteiro saia como "sem reacao". Os gestos 3+ e que sao opcionais. */
  let estado = false, desenho = false;
  for (let i = 0; i < gestos.length; i++) {
    const gesto = gestos[i];
    try { gesto(); } catch (e) { registrarEstouro(e); }
    amb.rodarTimers(60);
    await respirar(1);
    amb.rodarTimers(30);
    const agora = lerEstado();
    if (agora !== antesEstado) { estado = true; poeAntes(agora); }
    if (canvasEstavel) { amb.rodarQuadros(1); if (opsCanvas() !== antesDesenho) desenho = true; }
    if (i < 1) continue;                                  /* clique e arrasto: sempre os dois */
    const foraDoProprio = [...mexeu].some(u => !proprios.has(u));
    if (estado || desenho || EXTERNO > extAntes || AUDIO > audAntes || foraDoProprio) break;
  }
  REG = null;
  const agora = lerEstado(); if (agora !== antesEstado) { estado = true; }
  poeAntes(agora);
  return {
    rotulo: g.rotulo, duvidoso: g.duvidoso, proprios, mexeu, temOuvinte,
    acendeu: [...mexeu].some(u => nucleo.has(u)),
    estado, desenho, externo: EXTERNO > extAntes, audio: AUDIO > audAntes
  };
}

function mensagem(e) { return String((e && e.message) || e).replace(/\s+/g, " ").slice(0, 110); }
function local(e, nome) {
  const s = String((e && e.stack) || "");
  const m = new RegExp(nome.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ":(\\d+)").exec(s);
  return m ? "linha " + m[1] : "";
}

/* ======================================================================== */
/* 12. LINHA DE COMANDO                                                      */
/* ======================================================================== */
const args = process.argv.slice(2);
const DETALHE = args.includes("--detalhe");
const JSONSOLO = args.includes("--json");
const arg = args.find(a => !a.startsWith("--"));
const modo = args.find(a => a === "--todos" || a === "--tudo");
if (!arg && !modo) { console.log("uso: node clicar-tudo.mjs <arquivo.html>|<pasta>|--todos|--tudo [--detalhe]"); process.exit(2); }

/* Handler assincrono que estoura (ex.: uma API de navegador que nao existe
   aqui) NAO pode derrubar a medicao inteira — anotamos e seguimos. */
process.on("unhandledRejection", r => registrarEstouro(r && r.message || r));

function listar(dir) {
  const out = [];
  (function anda(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) { if (!/^_(ref|backup|viref)/.test(e.name)) anda(p); }
      else if (e.name.endsWith(".html")) out.push(p);
    }
  })(dir);
  return out.sort();
}
let lista;
if (modo === "--tudo") lista = listar(SIMS);
else if (modo === "--todos") lista = listar(path.join(SIMS, "dj"));
else if (fs.existsSync(arg) && fs.statSync(arg).isDirectory()) lista = listar(arg);
else lista = [path.isAbsolute(arg) ? arg : path.resolve(arg)];

/* modelos do gerador nao sao simuladores: tem marcador (__SIMS__) no lugar do conteudo */
const pulados = lista.filter(f => MODELO.test(path.basename(f)));
lista = lista.filter(f => !MODELO.test(path.basename(f)));

/* --- um arquivo so, em processo proprio: imprime JSON para o pai --------- */
if (JSONSOLO) {
  let r;
  try { r = await testar(lista[0]); }
  catch (e) { r = { nome: path.basename(lista[0]), arquivo: lista[0], erro: "harness: " + mensagem(e) }; }
  process.stdout.write("<<<SMU>>>" + JSON.stringify(r) + "<<</SMU>>>");
  await new Promise(r2 => setTimeout(r2, 120));
  process.exit(0);
}

const ranking = [], quebrados = [];
let comMorto = 0, mortosTotal = 0, suspeitosTotal = 0;

/* Cada arquivo roda num processo proprio quando sao varios: um simulador que
   trava ou estoura nao pode levar junto a medicao dos outros 57. */
async function medirArquivo(f) {
  if (lista.length === 1) {
    try { return await testar(f); }
    catch (e) { return { nome: path.basename(f), arquivo: f, erro: "harness: " + mensagem(e) }; }
  }
  return await new Promise(resolve => {
    const filho = spawn(process.execPath, [fileURLToPath(import.meta.url), f, "--json"], { stdio: ["ignore", "pipe", "pipe"] });
    let saida = "", err = "";
    const relogio = setTimeout(() => { filho.kill("SIGKILL"); }, 120000);
    filho.stdout.on("data", d => saida += d);
    filho.stderr.on("data", d => err += d);
    filho.on("close", code => {
      clearTimeout(relogio);
      const ini = saida.indexOf("<<<SMU>>>"), fim = saida.indexOf("<<</SMU>>>");
      const m = ini >= 0 && fim > ini ? [null, saida.slice(ini + 9, fim)] : null;
      if (m) { try { return resolve(JSON.parse(m[1])); } catch (_) { } }
      if (code === null) return resolve({ nome: path.basename(f), arquivo: f, erro: "travou (>120s) - laco infinito ou arvore explodindo" });
      const linha = (err.split("\n").find(l => /Error|error:/.test(l)) || "sem resultado").trim();
      resolve({ nome: path.basename(f), arquivo: f, erro: "processo caiu: " + linha.slice(0, 110) });
    });
  });
}

const FILA = lista.slice();
const resultadosArq = [];
await Promise.all(Array.from({ length: Math.min(4, FILA.length) }, async () => {
  for (let f = FILA.shift(); f; f = FILA.shift()) resultadosArq.push(await medirArquivo(f));
}));

for (const r of resultadosArq) {
  if (r.erro) { quebrados.push(r); continue; }
  suspeitosTotal += r.suspeitos.length;
  if (r.mortos.length) { comMorto++; mortosTotal += r.mortos.length; ranking.push(r); }
  else if (lista.length === 1) console.log(`OK ${r.nome}: os ${r.total} controles respondem`);
  if (lista.length === 1 && r.suspeitos.length) console.log(`?  suspeitos (nao acuso): ${r.suspeitos.join(" · ")}`);
}

ranking.sort((a, b) => b.mortos.length - a.mortos.length);
for (const r of ranking) {
  console.log(`\nX ${r.nome} - ${r.mortos.length} sem funcao (de ${r.total} controles)`);
  const n = DETALHE ? r.mortos.length : 16;
  console.log("   " + r.mortos.slice(0, n).join(" · ") + (r.mortos.length > n ? ` ... (+${r.mortos.length - n})` : ""));
  if (r.suspeitos.length && DETALHE) console.log("   ? suspeito: " + r.suspeitos.join(" · "));
}
if (quebrados.length) {
  console.log("\n--- NAO RODARAM (o teste nao vale para estes) ---");
  for (const q of quebrados) console.log(`!! ${q.nome}: ${q.erro}${q.ondeErro ? " (" + q.ondeErro + ")" : ""}`);
}
if (pulados.length) console.log(`\n(pulados: ${pulados.map(p => path.basename(p)).join(", ")} - modelo do gerador, nao e simulador)`);

console.log(`\n${lista.length} simuladores | ${comMorto} com botao sem funcao | ${mortosTotal} botoes mortos | ${suspeitosTotal} suspeitos | ${quebrados.length} nao rodaram`);
await new Promise(r => setTimeout(r, 200));       /* Node 24 + Windows: sair logo apos I/O sai 127 */
process.exitCode = mortosTotal ? 1 : 0;
