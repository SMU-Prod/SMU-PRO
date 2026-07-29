#!/usr/bin/env node
/**
 * checar-pos.mjs <arquivo.html>
 * Verifica o LAYOUT sem precisar de navegador (cada agente roda o seu, em paralelo).
 * Lê o objeto POS={act:[x,y,w,h]} e o AR do HTML e reprova se houver:
 *   (1) VAZAMENTO  — elemento fora do painel (0..100%)
 *   (2) COLISÃO    — dois controles sobrepostos
 * Elementos do conjunto ROUND são circularizados (h = w * AR) como no runtime.
 * Sai 1 se reprovar.
 */
import fs from "node:fs";
const file = process.argv[2];
const s = fs.readFileSync(file, "utf8");

const mPos = s.match(/const POS\s*=\s*\{([\s\S]*?)\n\};/);
if (!mPos) { console.error("POS não encontrado em " + file); process.exit(2); }
const mAR = s.match(/const AR\s*=\s*([0-9.]+)\s*\/\s*([0-9.]+)/);
const AR = mAR ? (+mAR[1] / +mAR[2]) : 1;
const mRound = s.match(/const ROUND\s*=\s*new Set\(\[([^\]]*)\]/);
const ROUND = new Set(mRound ? [...mRound[1].matchAll(/"([^"]+)"/g)].map(m => m[1]) : []);

const POS = {};
for (const m of mPos[1].matchAll(/(\w+)\s*:\s*\[([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\]/g)) {
  POS[m[1]] = [+m[2], +m[3], +m[4], +m[5]];
}

// aplica a circularização igual ao runtime
const box = {};
for (const [k, p] of Object.entries(POS)) {
  let [x, y, w, h] = p;
  if (ROUND.has(k)) { const nh = w * AR; y = y + h / 2 - nh / 2; h = nh; }
  box[k] = { x, y, w, h, x2: x + w, y2: y + h };
}

const vaz = [], col = [];
for (const [k, b] of Object.entries(box)) {
  const f = [];
  if (b.x < -0.5) f.push("esquerda"); if (b.x2 > 100.5) f.push("direita");
  if (b.y < -0.5) f.push("topo");     if (b.y2 > 100.5) f.push("base");
  if (f.length) vaz.push(`${k} vaza pela ${f.join("+")} (x ${b.x.toFixed(1)}→${b.x2.toFixed(1)}, y ${b.y.toFixed(1)}→${b.y2.toFixed(1)})`);
}
const keys = Object.keys(box);

/* ⛔ NADA pode ficar sobre o prato nem sobre o visor — no aparelho real nao
   existe botao em cima do jog nem em cima da tela (ordem do dono).
   Mas o teste tem de respeitar a FORMA: o jog e um CIRCULO. Um botao no canto
   da caixa dele nao encosta no disco — testar retangulo x retangulo daria
   falso positivo em quase toda a frota. */

// o eixo central do prato fica dentro dele; nao e sobreposicao
const NUCLEO = /^(spindle|hub|centro|jogdisp|jogscreen)/i;

function sobrepoe(ka, kb) {
  const a = box[ka], b = box[kb];
  const ra = ROUND.has(ka), rb = ROUND.has(kb);
  // converte % para uma escala isotropica (px relativos) antes de medir distancia
  const X = v => v, Y = v => v / AR;
  const cx = o => X(o.x + o.w / 2), cy = o => Y(o.y + o.h / 2), rad = o => X(o.w) / 2;

  if (ra && rb) {                              // circulo x circulo
    const d = Math.hypot(cx(a) - cx(b), cy(a) - cy(b));
    const s = rad(a) + rad(b) - d;
    return s > 0.6 ? { ox: s, oy: s } : null;
  }
  if (ra || rb) {                              // circulo x retangulo
    const c = ra ? a : b, r = ra ? b : a;
    const px = Math.max(X(r.x), Math.min(cx(c), X(r.x2)));
    const py = Math.max(Y(r.y), Math.min(cy(c), Y(r.y2)));
    const d = Math.hypot(cx(c) - px, cy(c) - py);
    const s = rad(c) - d;
    return s > 0.6 ? { ox: s, oy: s } : null;
  }
  const ox = Math.min(a.x2, b.x2) - Math.max(a.x, b.x);   // retangulo x retangulo
  const oy = Math.min(a.y2, b.y2) - Math.max(a.y, b.y);
  return (ox > 0.6 && oy > 0.6) ? { ox, oy } : null;
}

for (let i = 0; i < keys.length; i++) for (let j = i + 1; j < keys.length; j++) {
  if (NUCLEO.test(keys[i]) || NUCLEO.test(keys[j])) continue;
  const s = sobrepoe(keys[i], keys[j]);
  if (s) col.push(`${keys[i]} × ${keys[j]} (sobrepõe ${s.ox.toFixed(1)}% x ${s.oy.toFixed(1)}%)`);
}

const guards = {
  loop: /pos>=len\)\s*\w\.pos-=len/.test(s),
  bars16: /bars=16/.test(s),
  fader: /gain\.value=0\.9/.test(s),
  semFoto: !/data:image\/(jpeg|png);base64/.test(s),
  // frame() em qualquer ponto do corpo do init() (nao so na mesma linha)
  desenhaAntesDoAudio: /function init\(\)\s*\{[\s\S]{0,600}?\bframe\(\)/.test(s),
};
const ok = !vaz.length && !col.length && Object.values(guards).every(Boolean);
console.log(JSON.stringify({ arquivo: file.split(/[\\/]/).pop(), ok, AR: +AR.toFixed(3), controles: keys.length, guards, vazamentos: vaz, colisoes: col }, null, 1));
process.exit(ok ? 0 : 1);
