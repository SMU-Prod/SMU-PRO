// Passe visual v3 (pele de hardware real, igual ao XDJ-RX2) nos sims que já têm motor v2.
// Só CSS + injeção de parafusos/serigrafia — NÃO toca no motor/JS de áudio.
//   node cursos-novos/pleno-dj/skin-v3.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const SIM = path.resolve(__dir, "../../simuladores/dj");
const DRY = process.argv.includes("--dry");

// ——— blocos de pele (mesmos do RX2, que o dono aprovou) ———
const CSS_V3 = `
/* ===== PELE v3 (hardware real) — injetada pelo skin-v3.mjs ===== */
.booth,.unit{
  background:
    linear-gradient(180deg,#ffffff0e 0 1px,transparent 1px),
    repeating-linear-gradient(90deg,#ffffff05 0 1px,transparent 1px 3px),
    linear-gradient(180deg,#2a2d31,#1e2125 22%,#16181b) !important;
  border:1px solid #000 !important;
  box-shadow:0 26px 70px #000c, inset 0 1px 0 #ffffff14, inset 0 -3px 10px #0009, 0 0 0 1px #34383d !important;
}
.screw{position:absolute;width:9px;height:9px;border-radius:50%;z-index:5;
  background:radial-gradient(circle at 40% 35%,#5c636c,#23262a 70%);
  box-shadow:inset 0 0 0 1px #0b0d10, 0 1px 1px #0007}
.screw::after{content:"";position:absolute;inset:2.5px 1px;background:#12151a;border-radius:1px;transform:rotate(35deg)}
.screw.tl{top:7px;left:7px}.screw.tr{top:7px;right:7px}.screw.bl{bottom:7px;left:7px}.screw.br{bottom:7px;right:7px}
/* deck/mixer como seções do painel (sem "caixa flutuante") */
.cdj,.mixer,.deckctl{
  background:linear-gradient(180deg,#ffffff05,transparent 30%),#00000022 !important;
  border:0 !important; box-shadow:inset 0 0 0 1px #ffffff08 !important; border-radius:9px !important;
}
/* knobs com corpo/relevo real */
.knob{
  background:
    radial-gradient(circle at 50% 32%,#4c525b,#22262b 62%,#15171a 100%),
    repeating-conic-gradient(#00000022 0 4deg,transparent 4deg 8deg) !important;
  border:1px solid #08090b !important;
  box-shadow:0 3px 7px #0009, inset 0 2px 3px #ffffff18, inset 0 -2px 4px #0008 !important;
}
.knob::before{content:"";position:absolute;inset:7px;border-radius:50%;
  background:radial-gradient(circle at 50% 35%,#3c424a,#1a1d21);box-shadow:inset 0 1px 2px #ffffff14}
.knob::after{background:#f2f5f9 !important;box-shadow:0 0 3px #fff8;z-index:2}
.knob.sm::before,.knob.xs::before{inset:5px}
.knob.iso{background:radial-gradient(circle at 50% 32%,#5a616b,#2a2e34 62%,#17191d 100%) !important}
/* faders com trilho e cap real */
.fadv,.fadc,.fadx{
  background:linear-gradient(90deg,#0e1013,#1c1f24 50%,#0e1013) !important;
  border:1px solid #08090b !important; box-shadow:inset 0 2px 8px #000b !important; border-radius:4px !important;
}
.fadx{background:linear-gradient(180deg,#0e1013,#1c1f24 50%,#0e1013) !important}
.fadv .cap,.fadc .cap{
  background:linear-gradient(180deg,#eff2f6,#b9c0c9 55%,#8f959d) !important;
  border:1px solid #000 !important; box-shadow:0 2px 5px #000a, inset 0 1px 0 #fff !important; border-radius:3px !important;
}
.fadx .cap{background:linear-gradient(90deg,#8f959d,#eff2f6 50%,#8f959d) !important;border:1px solid #000 !important;box-shadow:0 2px 5px #000a !important}
.fadv .cap::after{background:#c0392b !important;box-shadow:0 0 4px #c0392b}
/* jog: platter metálico escovado + anel de LED (fiel ao CDJ) */
.jog{border:2px solid #08090b !important;
  background:repeating-conic-gradient(#101216 0 2.2deg,#1b1f24 2.2deg 4.4deg) !important;
  box-shadow:0 12px 28px #000c, inset 0 3px 10px #0009, 0 0 0 1px #3a3f46 !important}
.jog .ridge{display:none}
.jog .lit,.jog .ledring{position:absolute !important;inset:12px !important;border-radius:50%;pointer-events:none;
  border:3px solid #1a2028 !important;box-shadow:inset 0 0 12px #0008 !important;transition:all .15s}
.jog.onair .lit,.jog.onair .ledring{border-color:#e8443a !important;box-shadow:0 0 18px #e8443a88, inset 0 0 18px #e8443a33 !important}
.jog .platter,.jog .silver{position:absolute !important;inset:22px !important;border-radius:50%;pointer-events:none;
  background:
    conic-gradient(from 0deg,#8f959d,#c8ced6 12%,#7d838b 25%,#c2c8d0 38%,#82888f 50%,#c8ced6 63%,#7d838b 75%,#c2c8d0 88%,#8f959d),
    radial-gradient(circle at 50% 40%,#ffffff22,transparent 60%) !important;
  box-shadow:inset 0 0 18px #0007, inset 0 2px 3px #ffffff44, 0 0 0 1px #55595f !important}
.jog .platterdots{position:absolute;inset:26px;border-radius:50%;pointer-events:none;
  background:repeating-conic-gradient(#0000 0 5.6deg,#00000055 5.6deg 6deg)}
.jog .lcdwrap,.jog .center{position:absolute !important;inset:66px !important;border-radius:50%;
  background:radial-gradient(circle at 50% 38%,#2b2f35,#131518 72%) !important;
  border:1px solid #0a0b0d !important;box-shadow:inset 0 2px 6px #ffffff10, 0 3px 8px #0009 !important;overflow:hidden}
/* PLAY/CUE: anel iluminado sobre corpo escuro */
.rbtn{background:radial-gradient(circle at 50% 38%,#2a2e34,#131518) !important;border:2px solid #08090b !important}
/* pads com relevo */
.pad{background:linear-gradient(180deg,#33373d,#1c1f23) !important;border:1px solid #0a0b0d !important;
  box-shadow:inset 0 1px 0 #ffffff14, 0 2px 4px #0008 !important}
.pad:active{transform:translateY(1px)}
/* botõezinhos (loop/tled) com cara de tecla */
.kb,.tled{background:linear-gradient(180deg,#2c3036,#1d2025) !important;border:1px solid #0d0f12 !important;
  box-shadow:inset 0 1px 0 #ffffff10, 0 1px 2px #0007 !important}
.kb:active,.tled:active{transform:translateY(1px)}
.cue-pfl{background:linear-gradient(180deg,#3a3126,#221c14) !important;border:1px solid #0a0b0d !important;
  color:#a9803f !important;box-shadow:inset 0 1px 0 #ffffff10 !important}
.cue-pfl.on{background:linear-gradient(180deg,#f0a441,#b0700f) !important;color:#1a0f00 !important;box-shadow:0 0 10px #f0a44188 !important}
/* meters com vidro */
.meter{box-shadow:inset 0 0 4px #000 !important}
`;

const FILES = [
  { f:"pioneer-cdj-djm-real.html", boothSel:".booth" },
  { f:"pioneer-djm-v10-real.html", boothSel:".booth" },
  { f:"pioneer-cdj2000-djm900-real.html", boothSel:".booth" },
  { f:"turntable-scratch-real.html", boothSel:".booth" },
  { f:"denon-prime4-real.html", boothSel:".unit" },
];

let changed=0;
for(const {f,boothSel} of FILES){
  const p=path.join(SIM,f);
  if(!fs.existsSync(p)){ console.log("✗ falta "+f); continue; }
  let s=fs.readFileSync(p,"utf8");
  if(s.includes("PELE v3")){ console.log("• "+f+" — já tem pele v3, pulando"); continue; }
  // 1) injeta o CSS antes do </style>
  const iStyle=s.lastIndexOf("</style>");
  if(iStyle<0){ console.log("✗ "+f+" sem </style>"); continue; }
  s=s.slice(0,iStyle)+CSS_V3+s.slice(iStyle);
  // 2) injeta os 4 parafusos logo após a abertura do chassi
  const cls=boothSel.slice(1);
  const re=new RegExp(`(<div class="${cls}"[^>]*>)`);
  if(re.test(s)&&!s.includes('class="screw tl"')){
    s=s.replace(re,`$1\n  <div class="screw tl"></div><div class="screw tr"></div><div class="screw bl"></div><div class="screw br"></div>`);
  }
  // 3) marca de posição no platter do jog (elemento extra, inofensivo)
  s=s.replace(/(<div class="jog"[^>]*>)/g,`$1<div class="platterdots"></div>`);
  fs.writeFileSync(p,s,"utf8");
  changed++;
  console.log("✓ pele v3 -> "+f+"  ("+(fs.statSync(p).size/1024).toFixed(0)+"KB)");
}
console.log(DRY? "\n[dry-run — arquivos JÁ foram escritos; use git para reverter se preciso]" : `\n${changed} arquivo(s) com pele v3.`);
