#!/usr/bin/env node
/**
 * layout-tracer — copia o LAYOUT de um equipamento a partir do diagrama do manual.
 *
 * PROCESSO (reutilizável p/ CDJ, DJM, XDJ, Technics, Denon...):
 *   1. Abra o diagrama "Names and Functions of Parts" do manual (PNG).
 *   2. Meça em PIXELS: a bbox do painel (cara do aparelho) + o centro/tamanho de cada controle.
 *      (use `node layout-tracer.mjs grid <img>` p/ gerar uma grade fina e ler os pixels)
 *   3. Escreva um spec JSON com esses pixels.
 *   4. `node layout-tracer.mjs build <spec.json>` gera:
 *        - <nome>-coords.js  → o array CONTROLS pronto (em % relativo ao painel)
 *        - <nome>-verify.png → o diagrama com as caixas desenhadas (confira o alinhamento!)
 *
 * Assim o layout é CÓPIA do manual, não chute. Confira o -verify.png ANTES de desenhar.
 */
import fs from "node:fs";
import { execFileSync } from "node:child_process";

const [,, cmd, arg, arg2] = process.argv;

// ---- QUADRANTES (padrão do dono): X = ALTURA (linhas X1..X10, de cima p/ baixo),
//      Y = LARGURA (colunas Y1..Y8, da esquerda p/ direita). Tamanho fixo: 10% x 12.5%.
//      Uso: node layout-tracer.mjs quadrantes <img> [x0,y0,x1,y1]  (bbox do aparelho em px; senão, imagem toda)
if (cmd === "quadrantes") {
  const img = arg;
  const bbox = arg2 ? arg2.split(",").map(Number) : null;
  const out = img.replace(/\.[^.]+$/, "") + "_quad.png";
  const py = `
from PIL import Image, ImageDraw
im=Image.open(r"${img}").convert("RGB"); W,H=im.size
bx=${bbox ? `[${bbox.join(",")}]` : "[0,0,W,H]"}
x0,y0,x1,y1=bx; PW=x1-x0; PH=y1-y0
sc=max(1,int(1400/W)); im=im.resize((W*sc,H*sc),Image.LANCZOS)
x0,y0,x1,y1,PW,PH=[v*sc for v in (x0,y0,x1,y1,PW,PH)]
d=ImageDraw.Draw(im,"RGBA")
d.rectangle([x0,y0,x1,y1],outline=(255,0,0,255),width=3)
# PAPEL MILIMETRADO (padrão do dono): célula fina de 2% altura x 2,5% largura;
# linha MESTRA (escura) a cada 5 finas => quadrante X1..X10 (altura) x Y1..Y8 (largura).
FR,FC=50,40   # 50 linhas finas x 40 colunas finas
for r in range(FR+1):
    y=y0+r*PH/FR; major=(r%5==0)
    d.line([(x0,y),(x1,y)],fill=(255,50,50,235) if major else (0,200,255,110),width=2 if major else 1)
for c in range(FC+1):
    x=x0+c*PW/FC; major=(c%5==0)
    d.line([(x,y0),(x,y1)],fill=(255,50,50,235) if major else (0,200,255,110),width=2 if major else 1)
for r in range(10):
    for c in range(8):
        d.text((x0+c*PW/8+3,y0+r*PH/10+2),f"X{r+1}Y{c+1}",fill=(255,235,0,255))
im.save(r"${out}"); print("quadrantes:",r"${out}", "| celula = 10% altura x 12.5% largura")
`;
  console.log(execFileSync("python", ["-c", py]).toString());
  console.log("Padrão: X=ALTURA (X1 topo → X10 base) · Y=LARGURA (Y1 esquerda → Y8 direita).");
  console.log("Conversão p/ CSS: top% = (X-1)*10 · left% = (Y-1)*12.5. Compare o quadrante do elemento na imagem REAL com o da réplica.");
  process.exit(0);
}

// ---- gera grade fina p/ medir pixels (usa Python+PIL, já disponível) ----
if (cmd === "grid") {
  const img = arg;
  const out = img.replace(/\.[^.]+$/, "") + "_grid.png";
  const py = `
from PIL import Image, ImageDraw
im=Image.open(r"${img}").convert("RGB"); W,H=im.size
sc=max(1,int(1600/W)); im=im.resize((W*sc,H*sc),Image.LANCZOS); W,H=im.size
d=ImageDraw.Draw(im)
for x in range(0,W,int(W*0.025)):
    d.line([(x,0),(x,H)],fill=(0,200,255) if (x//int(W*0.025))%4 else (255,40,40),width=1)
    d.text((x+1,1),str(round(x/W*100)),fill=(230,190,0))
for y in range(0,H,int(H*0.025)):
    d.line([(0,y),(W,y)],fill=(0,200,255) if (y//int(H*0.025))%4 else (255,40,40),width=1)
    d.text((1,y+1),str(round(y/H*100)),fill=(230,190,0))
im.save(r"${out}"); print("grade em %:",r"${out}", im.size)
`;
  console.log(execFileSync("python", ["-c", py]).toString());
  process.exit(0);
}

// ---- converte spec (px do diagrama) → coords % relativas ao painel + overlay de verificação ----
if (cmd === "build") {
  const spec = JSON.parse(fs.readFileSync(arg, "utf8"));
  const [x0, y0, x1, y1] = spec.panel;      // bbox do painel em px
  const PW = x1 - x0, PH = y1 - y0;
  const rows = spec.controls.map(c => {
    const left = ((c.cx - c.w / 2) - x0) / PW * 100;
    const top  = ((c.cy - c.h / 2) - y0) / PH * 100;
    const w = c.w / PW * 100, h = c.h / PH * 100;
    return { ...c, left: +left.toFixed(1), top: +top.toFixed(1), wPct: +w.toFixed(1), hPct: +h.toFixed(1) };
  });
  // 1) array JS pronto p/ colar
  const js = "const CTRL_FROM_MANUAL = [\n" + rows.map(r =>
    `  {act:${JSON.stringify(r.act)}, x:${r.left}, y:${r.top}, w:${r.wPct}, h:${r.hPct}${r.round ? ", round:1" : ""}${r.kind ? `, kind:${JSON.stringify(r.kind)}` : ""}},`
  ).join("\n") + "\n];\n";
  const jsOut = arg.replace(/\.json$/, "") + "-coords.js";
  fs.writeFileSync(jsOut, js);
  // 2) overlay de verificação (desenha as caixas no diagrama)
  const boxes = JSON.stringify(spec.controls.map(c => [c.act, c.cx, c.cy, c.w, c.h, !!c.round]));
  const png = arg.replace(/\.json$/, "") + "-verify.png";
  const py = `
from PIL import Image, ImageDraw
import json
im=Image.open(r"${spec.image}").convert("RGB"); d=ImageDraw.Draw(im,"RGBA")
d.rectangle([${x0},${y0},${x1},${y1}], outline=(255,0,0,255), width=2)
for name,cx,cy,w,h,rnd in json.loads('''${boxes}'''):
    l,t,r,b=cx-w/2,cy-h/2,cx+w/2,cy+h/2
    (d.ellipse if rnd else d.rectangle)([l,t,r,b], outline=(0,229,255,255), width=2)
    d.text((l+1,t+1), name, fill=(255,255,0,255))
sc=max(1,int(1500/im.width)); im=im.resize((im.width*sc,im.height*sc),Image.LANCZOS)
im.save(r"${png}"); print("verifique:", r"${png}", im.size)
`;
  console.log(execFileSync("python", ["-c", py]).toString());
  console.log("coords →", jsOut);
  console.log(`painel: ${PW}x${PH}px | ${rows.length} controles`);
  process.exit(0);
}

console.log(`uso:
  node layout-tracer.mjs grid <diagrama.png>     # gera grade em % p/ medir os pixels
  node layout-tracer.mjs build <spec.json>       # gera coords % + overlay de verificação
spec.json: { "image":"diagrama.png", "panel":[x0,y0,x1,y1], "controls":[{"act":"play","cx":..,"cy":..,"w":..,"h":..,"round":true}, ...] }`);
