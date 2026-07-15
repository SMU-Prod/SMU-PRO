// Porta o Denon Prime 4+ para o MOTOR v2 (faixa real em buffer, scratch no jog, 6 BEAT FX, tela real),
// mantendo a pele v3 e a arquitetura de 4 decks com toggle L=1/3 e R=2/4.
// Substitui apenas o bloco de motor do <script>; a UI/HTML/CSS ficam intactos.
//   node cursos-novos/pleno-dj/port-prime4-v2.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const F = path.resolve(__dir, "../../simuladores/dj/denon-prime4-real.html");
let s = fs.readFileSync(F, "utf8");
if (s.includes("MOTOR v2 · PRIME4")) { console.log("• já portado — nada a fazer"); process.exit(0); }

/* ---- 1) trocar GROOVES + buildGraph + buildDeck + voices + schedule pelo motor v2 ---- */
const i0 = s.indexOf("const GROOVES={");
const i1 = s.indexOf("function applyTempo(d)");
if (i0 < 0 || i1 < 0) { console.error("âncoras não encontradas"); process.exit(1); }

const MOTOR = `/* ===== MOTOR v2 · PRIME4 (faixa real + scratch + FX) ===== */
const SPEC={A:{bpm:124,root:110},B:{bpm:128,root:98},C:{bpm:122,root:87},D:{bpm:126,root:82}};
async function renderTrack(id){
  const sr=44100, S=SPEC[id], bpm=S.bpm, root=S.root, spb=60/bpm, bars=32, dur=spb*4*bars;
  const off=new OfflineAudioContext(2,Math.ceil(dur*sr),sr), dst=off.destination;
  const noise=off.createBuffer(1,sr*0.4,sr); const nd=noise.getChannelData(0);
  for(let i=0;i<nd.length;i++)nd[i]=Math.random()*2-1;
  const step=spb/4;
  const P={
    A:{k:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],s:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],h:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],o:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],b:[1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0],t:[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0]},
    B:{k:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],s:[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],h:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],o:[0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1],b:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],t:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0]},
    C:{k:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],s:[0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],h:[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0],o:[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],b:[1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0],t:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
    D:{k:[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],s:[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],h:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],o:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],b:[1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0],t:[0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0]}
  }[id];
  const kick=t=>{const o=off.createOscillator(),a=off.createGain();o.frequency.setValueAtTime(150,t);o.frequency.exponentialRampToValueAtTime(47,t+0.12);a.gain.setValueAtTime(0.85,t);a.gain.exponentialRampToValueAtTime(0.001,t+0.3);o.connect(a);a.connect(dst);o.start(t);o.stop(t+0.32);};
  const clap=t=>{const s2=off.createBufferSource();s2.buffer=noise;const bp=off.createBiquadFilter();bp.type="bandpass";bp.frequency.value=1800;const a=off.createGain();a.gain.setValueAtTime(0.5,t);a.gain.exponentialRampToValueAtTime(0.001,t+0.15);s2.connect(bp);bp.connect(a);a.connect(dst);s2.start(t);s2.stop(t+0.17);};
  const hat=(t,op)=>{const s2=off.createBufferSource();s2.buffer=noise;const hp=off.createBiquadFilter();hp.type="highpass";hp.frequency.value=8200;const a=off.createGain();const d2=op?0.14:0.045;a.gain.setValueAtTime(op?0.28:0.24,t);a.gain.exponentialRampToValueAtTime(0.001,t+d2);s2.connect(hp);hp.connect(a);a.connect(dst);s2.start(t);s2.stop(t+d2+0.03);};
  const bass=t=>{const o=off.createOscillator();o.type="sawtooth";o.frequency.value=root;const lp=off.createBiquadFilter();lp.type="lowpass";lp.frequency.setValueAtTime(460,t);lp.frequency.exponentialRampToValueAtTime(122,t+0.15);lp.Q.value=5;const a=off.createGain();a.gain.setValueAtTime(0.0001,t);a.gain.linearRampToValueAtTime(0.38,t+0.01);a.gain.exponentialRampToValueAtTime(0.001,t+0.2);o.connect(lp);lp.connect(a);a.connect(dst);o.start(t);o.stop(t+0.22);};
  const stab=t=>{[0,3,7].forEach(se=>{const o=off.createOscillator();o.type="square";o.frequency.value=root*2*Math.pow(2,se/12);const a=off.createGain();a.gain.setValueAtTime(0.0001,t);a.gain.linearRampToValueAtTime(0.07,t+0.008);a.gain.exponentialRampToValueAtTime(0.001,t+0.3);o.connect(a);a.connect(dst);o.start(t);o.stop(t+0.32);});};
  for(let bar=0;bar<bars;bar++){ const brk=bar>=16&&bar<20;
    for(let st=0;st<16;st++){ const t=(bar*16+st)*step;
      if(!brk&&P.k[st])kick(t); if(P.s[st]&&!brk)clap(t); if(P.h[st])hat(t,false); if(P.o[st]&&!brk)hat(t,true);
      if(!brk&&P.b[st])bass(t); if(P.t[st]&&(brk||bar%4===3))stab(t); } }
  return await off.startRendering();
}
const buildPeaks=(buf,n)=>{const ch=buf.getChannelData(0),per=Math.floor(ch.length/n),out=new Float32Array(n);
  for(let i=0;i<n;i++){let m=0;const o=i*per;for(let j=0;j<per;j+=24){const v=Math.abs(ch[o+j]);if(v>m)m=v;}out[i]=m;}return out;};

/* FX bank v2 */
const FXLIST=["ECHO","DELAY","PING PONG","SPIRAL","REVERB","FLANGER"];
let curFx="ECHO", fxOn=false, fxBeat=0.5, fxConnected=null;
const irBuffer=(sec,dec)=>{const n=Math.floor(AC.sampleRate*sec),b=AC.createBuffer(2,n,AC.sampleRate);
  for(let c=0;c<2;c++){const d=b.getChannelData(c);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,dec);}return b;};
function buildGraph(){
  AC=new (window.AudioContext||window.webkitAudioContext)();
  masterGain=AC.createGain(); masterGain.gain.value=1;
  comp=AC.createDynamicsCompressor(); comp.threshold.value=-9; comp.knee.value=24; comp.ratio.value=3.2; comp.attack.value=0.004; comp.release.value=0.18;
  fxNode.in=AC.createGain(); fxNode.send=AC.createGain(); fxNode.dry=AC.createGain(); fxNode.dry.gain.value=1;
  fxNode.wet=AC.createGain(); fxNode.wet.gain.value=0; fxNode.wet.connect(masterGain);
  fxNode.in.connect(fxNode.dry); fxNode.dry.connect(masterGain);
  fxNode.units={};
  {const dl=AC.createDelay(3),fb=AC.createGain(),lp=AC.createBiquadFilter();fb.gain.value=0.5;lp.type="lowpass";lp.frequency.value=4500;
   dl.connect(lp);lp.connect(fb);fb.connect(dl);fxNode.units["ECHO"]={inp:dl,out:lp,setTime:t=>dl.delayTime.value=t};}
  {const dl=AC.createDelay(3),fb=AC.createGain();fb.gain.value=0.22;dl.connect(fb);fb.connect(dl);
   fxNode.units["DELAY"]={inp:dl,out:dl,setTime:t=>dl.delayTime.value=t};}
  {const dL=AC.createDelay(3),dR=AC.createDelay(3),fb=AC.createGain(),pL=AC.createStereoPanner(),pR=AC.createStereoPanner(),sum=AC.createGain(),inp=AC.createGain();
   fb.gain.value=0.45;pL.pan.value=-0.9;pR.pan.value=0.9;
   inp.connect(dL);dL.connect(pL);pL.connect(sum);dL.connect(dR);dR.connect(pR);pR.connect(sum);dR.connect(fb);fb.connect(dL);
   fxNode.units["PING PONG"]={inp,out:sum,setTime:t=>{dL.delayTime.value=t;dR.delayTime.value=t;}};}
  {const dl=AC.createDelay(3),fb=AC.createGain(),bp=AC.createBiquadFilter(),lfo=AC.createOscillator(),lg=AC.createGain();
   fb.gain.value=0.62;bp.type="bandpass";bp.frequency.value=900;bp.Q.value=2.5;lfo.frequency.value=0.35;lg.gain.value=700;
   lfo.connect(lg);lg.connect(bp.frequency);lfo.start();dl.connect(bp);bp.connect(fb);fb.connect(dl);
   fxNode.units["SPIRAL"]={inp:dl,out:bp,setTime:t=>dl.delayTime.value=t};}
  {const cv=AC.createConvolver();cv.buffer=irBuffer(1.8,2.6);fxNode.units["REVERB"]={inp:cv,out:cv,setTime:()=>{}};}
  {const dl=AC.createDelay(0.05),fb=AC.createGain(),lfo=AC.createOscillator(),lg=AC.createGain(),inp=AC.createGain(),sum=AC.createGain();
   dl.delayTime.value=0.004;fb.gain.value=0.55;lfo.frequency.value=0.28;lg.gain.value=0.0028;
   lfo.connect(lg);lg.connect(dl.delayTime);lfo.start();inp.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(sum);inp.connect(sum);
   fxNode.units["FLANGER"]={inp,out:sum,setTime:()=>{}};}
  connectFx("ECHO");
  masterGain.connect(comp); comp.connect(AC.destination);
  cueBus=AC.createGain(); cueBus.gain.value=0.5; cueBus.connect(AC.destination);
}
function connectFx(name){
  if(fxConnected){ try{fxNode.in.disconnect(fxNode.units[fxConnected].inp);}catch(e){} try{fxNode.send.disconnect(fxNode.units[fxConnected].inp);}catch(e){} try{fxNode.units[fxConnected].out.disconnect(fxNode.wet);}catch(e){} }
  const u=fxNode.units[name]; fxNode.in.connect(u.inp); fxNode.send.connect(u.inp); u.out.connect(fxNode.wet); fxConnected=name; syncFxTime();
}
function syncFxTime(){ const md=decks[window._masterDeck]||decks.A; if(!md)return;
  const u=fxNode.units[fxConnected]; if(u)u.setTime(Math.min(2.8,(60/md.bpm)*fxBeat));
  const e1=$("#fxBpm"); if(e1)e1.textContent=md.bpm.toFixed(1)+" BPM"; }
function refreshWet(){ const base= curFx==="REVERB"?0.62: curFx==="FLANGER"?0.72:0.5;
  fxNode.wet.gain.setTargetAtTime(fxOn?base:0,AC.currentTime,0.04);
  fxNode.dry.gain.setTargetAtTime(fxOn?(curFx==="FLANGER"?0.6:0.78):1,AC.currentTime,0.04); }
function setFxOn(on){ fxOn=on; refreshWet(); const b=$("[data-act='fxon']"); if(b)b.classList.toggle("on",on); }

function buildDeck(id,buffer){
  const S=SPEC[id];
  const d={ id, buffer, data:buffer.getChannelData(0), len:buffer.length, peaks:buildPeaks(buffer,700),
    baseBpm:S.bpm, bpm:S.bpm, pitch:0, range:8, mt:true, playing:false, pos:0, rate:0,
    touching:false, targetPos:0, cuePoint:0, hotcues:{}, loopOn:false, loopStart:0, loopEnd:0 };
  d.pre=AC.createGain(); d.trim=AC.createGain(); d.trim.gain.value=0.9;
  d.eqLow=AC.createBiquadFilter(); d.eqLow.type="lowshelf"; d.eqLow.frequency.value=120;
  d.eqMid=AC.createBiquadFilter(); d.eqMid.type="peaking"; d.eqMid.frequency.value=1000; d.eqMid.Q.value=0.8;
  d.eqHi=AC.createBiquadFilter(); d.eqHi.type="highshelf"; d.eqHi.frequency.value=3500;
  d.color=AC.createBiquadFilter(); d.color.type="allpass"; d.color.frequency.value=1000;
  d.fader=AC.createGain(); d.fader.gain.value=0;
  d.xf=AC.createGain(); d.xf.gain.value=1;
  d.pfl=AC.createGain(); d.pfl.gain.value=0;
  d.pre.connect(d.trim); d.trim.connect(d.eqLow); d.eqLow.connect(d.eqMid); d.eqMid.connect(d.eqHi); d.eqHi.connect(d.color);
  d.color.connect(d.fader); d.fader.connect(d.xf); d.xf.connect(fxNode.in);
  d.color.connect(d.pfl); d.pfl.connect(cueBus);
  d.analyser=AC.createAnalyser(); d.analyser.fftSize=256; d.color.connect(d.analyser);
  const sp=AC.createScriptProcessor(512,0,1); d.sp=sp;
  sp.onaudioprocess=e=>{ const out=e.outputBuffer.getChannelData(0), data=d.data, len=d.len;
    for(let i=0;i<out.length;i++){
      if(d.touching){ const np=d.pos+(d.targetPos-d.pos)*0.0025; d.rate=np-d.pos; d.pos=np; }
      else { const tgt=d.playing?(1+d.pitch/100):0; d.rate+=(tgt-d.rate)*0.0022; d.pos+=d.rate; }
      if(d.loopOn&&d.rate>0&&d.pos>=d.loopEnd)d.pos=d.loopStart+(d.pos-d.loopEnd);
      if(d.pos<0){ d.pos=0; if(d.targetPos<0)d.targetPos=0; d.rate=0; }
      else if(d.pos>=len-1){ d.pos=len-1; if(d.targetPos>len-1)d.targetPos=len-1; d.rate=0; }
      let i0=Math.floor(d.pos); const fr=d.pos-i0; i0=((i0%len)+len)%len; const i1=(i0+1)%len;
      out[i]=data[i0]*(1-fr)+data[i1]*fr; } };
  sp.connect(d.pre);
  decks[id]=d;
}
const secOf=(d,s)=>s/d.buffer.sampleRate;
const posSec=d=>secOf(d,d.pos);
const effBpm=d=>d.baseBpm*(1+d.pitch/100);
const beatLen=d=>60/effBpm(d)*d.buffer.sampleRate;
function schedule(){ autoCheck(); } // compat: o áudio agora roda no read-head
`;
s = s.slice(0, i0) + MOTOR + s.slice(i1);

/* ---- 2) ajustes pontuais das funções que dependiam do sequencer antigo ---- */
const REPL = [
  // tempo/pitch
  [/function applyTempo\(d\)\{ d\.bpm=d\.baseBpm\*\(1\+d\.pitch\/100\); \}/,
   `function applyTempo(d){ d.bpm=effBpm(d); }`],
  // play: sem d.next
  [/if\(d\.playing\)\{ if\(d\.next<AC\.currentTime\)d\.next=AC\.currentTime\+0\.05; if\(!d\.startTime\)d\.startTime=AC\.currentTime; \}/,
   `if(d.playing&&!d.startTime)d.startTime=AC.currentTime;
  const jg=$(\`[data-jog-side="\${["L","R"].find(sd=>sideDeck[sd]===d.id)||"L"}"]\`); if(jg&&(sideDeck.L===d.id||sideDeck.R===d.id))jg.classList.toggle("onair",d.playing);`],
  // cue: posição real
  [/function cueDeck\(d\)\{ if\(!started\)startAudio\(\); d\.abs=0; d\.step=0; d\.bar=0; d\.next=AC\.currentTime\+0\.02; if\(!d\.playing\)playDeck\(d,true\); \}/,
   `function cueDeck(d){ if(!ready)return;
  if(d.playing){ playDeck(d,false); d.pos=d.cuePoint; }
  else { if(Math.abs(d.pos-d.cuePoint)>200)d.cuePoint=d.pos; else d.pos=d.cuePoint; } }`],
  // sync: fase por posição
  [/d\.abs=md\.abs; d\.step=md\.step; d\.bar=md\.bar; d\.next=md\.next; b\.classList\.add\("on"\); refreshDeckUI\(d\); checkTempoMission\(\); markMission\("beatmatch"\); \}/,
   `const blD=beatLen(d)*4, blM=beatLen(md)*4;
  d.pos=Math.floor(d.pos/blD)*blD+((md.pos%blM)/blM)*blD;
  b.classList.add("on"); refreshDeckUI(d); checkTempoMission(); markMission("beatmatch"); }`],
  // loops por posição
  [/case "beatloop":d\.loopOn=!d\.loopOn;d\.loopLen=\+b\.dataset\.len;d\.loopStartAbs=d\.abs;b\.classList\.toggle\("on",d\.loopOn\);break;/,
   `case "beatloop": if(d.loopOn){d.loopOn=false;b.classList.remove("on");} else {d.loopStart=d.pos;d.loopEnd=d.pos+beatLen(d)*4;d.loopOn=true;b.classList.add("on");} break;`],
  [/case "reloop":d\.loopOn=true;d\.loopStartAbs=d\.abs;\$\(`\[data-loops-side="\$\{side\}"\] \[data-act="beatloop"\]`\)\.classList\.add\("on"\);break;/,
   `case "reloop": if(d.loopEnd>d.loopStart){d.loopOn=!d.loopOn;$(\`[data-loops-side="\${side}"] [data-act="beatloop"]\`).classList.toggle("on",d.loopOn);} break;`],
  [/case "cueout":d\.loopOn=false;\$\(`\[data-loops-side="\$\{side\}"\] \[data-act="beatloop"\]`\)\.classList\.remove\("on"\);break;/,
   `case "cueout": d.loopOn=false; $(\`[data-loops-side="\${side}"] [data-act="beatloop"]\`).classList.remove("on"); break;`],
  // hotcue por posição
  [/if\(!d\.hotcues\[c\]\)\{ d\.hotcues\[c\]=d\.abs; el\.classList\.add\("set"\); \} else \{ d\.abs=d\.hotcues\[c\]; d\.next=AC\.currentTime\+0\.02;/,
   `if(d.hotcues[c]===undefined){ d.hotcues[c]=d.pos; el.classList.add("set"); } else { d.pos=d.hotcues[c]; if(!d.playing)playDeck(d,true);`],
  // jog: scratch no centro / nudge na borda
  [/el\.addEventListener\("pointerdown",e=>\{ if\(!started\)startAudio\(\); drag=true; last=ang\(e\); el\.setPointerCapture\(e\.pointerId\); e\.preventDefault\(\); \}\);\n  el\.addEventListener\("pointermove",e=>\{ if\(!drag\)return; let a=ang\(e\),da=a-last; if\(da>Math\.PI\)da-=2\*Math\.PI; if\(da<-Math\.PI\)da\+=2\*Math\.PI; last=a; const d=decks\[sideDeck\[side\]\]; if\(d\)d\.nudge-=da\*0\.05; rot\+=da;/,
   `el.addEventListener("pointerdown",e=>{ if(!ready)return; const d=decks[sideDeck[side]];
    const r=el.getBoundingClientRect(); const dist=Math.hypot(e.clientX-(r.left+r.width/2),e.clientY-(r.top+r.height/2))/(r.width/2);
    mode= dist<0.62?"scratch":"edge"; if(mode==="scratch"&&d){ d.touching=true; d.targetPos=d.pos; }
    drag=true; last=ang(e); try{el.setPointerCapture(e.pointerId);}catch(x){} e.preventDefault(); });
  el.addEventListener("pointermove",e=>{ if(!drag)return; let a=ang(e),da=a-last; if(da>Math.PI)da-=2*Math.PI; if(da<-Math.PI)da+=2*Math.PI; last=a;
    const d=decks[sideDeck[side]];
    if(d){ if(mode==="scratch")d.targetPos+=da*d.buffer.sampleRate*0.37; else d.pos=Math.max(0,Math.min(d.len-1,d.pos+da*d.buffer.sampleRate*0.02)); }
    rot+=da;`],
  [/function bindJogLazy\(side\)\{ const el=\$\(`\[data-jog-side="\$\{side\}"\]`\); let last=null,drag=false,rot=0;/,
   `function bindJogLazy(side){ const el=$(\`[data-jog-side="\${side}"]\`); let last=null,drag=false,rot=0,mode="edge";`],
  [/el\.addEventListener\("pointerup",\(\)=>drag=false\); el\.addEventListener\("pointercancel",\(\)=>drag=false\); \}\nfunction bindTempoFaderLazy/,
   `const endJ=()=>{ if(!drag)return; drag=false; const d=decks[sideDeck[side]]; if(d&&mode==="scratch")d.touching=false; };
  el.addEventListener("pointerup",endJ); el.addEventListener("pointercancel",endJ); el.addEventListener("pointerleave",endJ); }
function bindTempoFaderLazy`],
];
let applied=0;
for(const [re,to] of REPL){ if(re.test(s)){ s=s.replace(re,to); applied++; } else console.log("  ~ padrão não casou: "+String(re).slice(0,58)+"…"); }

/* ---- 3) waveform/fase/leitura por posição real + boot assíncrono ---- */
s = s.replace(/function drawWaveforms\(\)\{[\s\S]*?\n\}\nfunction updateMeters/,
`function drawWaveforms(){ IDS.forEach(id=>{ const d=decks[id]; if(!d||!d.peaks)return;
  const cv=$(\`[data-wf="\${id}"]\`); if(!cv)return;
  const w=cv.width=cv.clientWidth||300,h=cv.height=cv.clientHeight||34; const ctx=cv.getContext("2d");
  ctx.fillStyle="#000"; ctx.fillRect(0,0,w,h);
  const n=d.peaks.length, dur=d.buffer.duration, pos=posSec(d);
  for(let i=0;i<n;i++){ const amp=d.peaks[i]*h*0.92, x=i/n*w, bw=Math.max(1,w/n), played=(i/n*dur)<pos;
    const col={A:["#5bd0ff","#2b6fb0"],B:["#ffa24d","#a86a2a"],C:["#7CFC5A","#3a7a2a"],D:["#e07cff","#7a3a8a"]}[id];
    ctx.fillStyle=played?col[1]:col[0]; ctx.fillRect(x,(h-amp)/2,bw,amp); }
  if(d.loopOn){ ctx.fillStyle="#f4a02a44"; ctx.fillRect(secOf(d,d.loopStart)/dur*w,0,secOf(d,d.loopEnd-d.loopStart)/dur*w,h); }
  Object.values(d.hotcues).forEach(p=>{ const x=secOf(d,p)/dur*w; ctx.fillStyle="#fff"; ctx.fillRect(x,0,1,5); });
  ctx.fillStyle="#fff"; ctx.fillRect(pos/dur*w,0,2,h); }); }
function updateMeters`);

s = s.replace(/function updatePhase\(\)\{[\s\S]*?if\(matched\)markMission\("beatmatch"\); \}/,
`const beatPhase=d=>(posSec(d)*effBpm(d)/60)%4;
function updatePhase(){ const a=decks.A,b=decks.B; if(!a||!b)return; $("#bpmDelta").textContent=Math.abs(a.bpm-b.bpm).toFixed(1);
  let diff=beatPhase(b)/4-beatPhase(a)/4; if(diff>0.5)diff-=1; if(diff<-0.5)diff+=1;
  const ind=$("#phaseInd"); if(ind)ind.style.left=(50+diff*100)+"%";
  const matched=a.playing&&b.playing&&Math.abs(a.bpm-b.bpm)<0.4&&Math.abs(diff)<0.04;
  $("#phasebar").classList.toggle("good",matched);
  const beat=Math.floor(beatPhase(a)),lamps=$("#beatLamps");
  if(lamps){ lamps.innerHTML=""; for(let i=0;i<4;i++){ const s2=document.createElement("span"); s2.className="beat-lamp"+(i===beat&&a.playing?" on":""); lamps.appendChild(s2);} }
  if(matched)markMission("beatmatch"); }`);

s = s.replace(/case "beatmatch":\{ const pa=\(a\.abs%16\)\/16,pb=\(b\.abs%16\)\/16; let df=pb-pa;/,
  `case "beatmatch":{ const pa=beatPhase(a)/4,pb=beatPhase(b)/4; let df=pb-pa;`);

s = s.replace(/function startAudio\(\)\{ if\(started\)return; buildGraph\(\); started=true; \$\("#acDot"\)\.classList\.remove\("off"\); \$\("#acState"\)\.textContent="ligado"; \$\("#btnStart"\)\.textContent="● Áudio ligado"; if\(AC\.resume\)AC\.resume\(\); IDS\.forEach\(id=>refreshDeckUI\(decks\[id\]\)\); setInterval\(schedule,TICK\); \}/,
`let ready=false;
async function startAudio(){ if(started)return; started=true;
  $("#acState").textContent="carregando as faixas…"; buildGraph();
  const bufs=await Promise.all(IDS.map(id=>renderTrack(id)));
  IDS.forEach((id,i)=>buildDeck(id,bufs[i]));
  ["L","R"].forEach(sd=>{ if(typeof bindTempoFaderLazy==="function"){} });
  ready=true;
  $("#acDot").classList.remove("off"); $("#acState").textContent="ligado"; $("#btnStart").textContent="● Áudio ligado";
  if(AC.resume)AC.resume(); IDS.forEach(id=>refreshDeckUI(decks[id])); syncFxTime();
  setInterval(()=>{ autoCheck(); updatePhase(); },250); }`);

s = s.replace(/function frame\(\)\{ if\(started\)\{ drawWaveforms\(\); updateMeters\(\); updatePhase\(\); autoCheck\(\); IDS\.forEach\(id=>\{ const d=decks\[id\]; const sec=d\.playing\?\(AC\.currentTime-d\.startTime\):0; const el=\$\("#time"\+id\); if\(el\)\{ const m=Math\.floor\(sec\/60\),s=Math\.floor\(sec%60\); el\.textContent=String\(m\)\.padStart\(2,"0"\)\+":"\+String\(s\)\.padStart\(2,"0"\); \} \}\); \} requestAnimationFrame\(frame\); \}/,
`function frame(){ if(ready){ drawWaveforms(); updateMeters();
  IDS.forEach(id=>{ const d=decks[id]; const el=$("#time"+id); if(el){ const p=posSec(d),m=Math.floor(p/60),s2=Math.floor(p%60);
    el.textContent=String(m).padStart(2,"0")+":"+String(s2).padStart(2,"0"); }
    const pe=$("#pct"+id); if(pe)pe.textContent=(d.pitch>=0?"+":"")+d.pitch.toFixed(1)+"%"; }); }
  requestAnimationFrame(frame); }`);

// guardas de "ready" nos handlers principais
s = s.replace(/function playDeck\(d,on\)\{ if\(!started\)startAudio\(\);/, `function playDeck(d,on){ if(!ready)return;`);
s = s.replace(/function handleSideAct\(side,act,b\)\{ const id=sideDeck\[side\]; const d=decks\[id\]; if\(!started&&\(act==="play"\|\|act==="cue"\)\)startAudio\(\);/,
  `function handleSideAct(side,act,b){ if(!ready){ if(!started)startAudio(); return; } const id=sideDeck[side]; const d=decks[id];`);
s = s.replace(/function hotcue\(id,c,el\)\{ const d=decks\[id\]; if\(!started\)\{ startAudio\(\); \} if\(!decks\[id\]\)return;/,
  `function hotcue(id,c,el){ if(!ready)return; const d=decks[id];`);
s = s.replace(/function setPitch\(d,pct\)\{ d\.pitch=clamp\(pct,-d\.range,d\.range\); applyTempo\(d\); refreshDeckUI\(d\); checkTempoMission\(\); \}/,
  `function setPitch(d,pct){ d.pitch=clamp(pct,-d.range,d.range); applyTempo(d); refreshDeckUI(d); syncFxTime(); checkTempoMission(); }`);
// FX UI: usa connectFx + setFxOn v2
s = s.replace(/b\.addEventListener\("pointerdown",\(\)=>\{ \$\$\("#fxsel \.fb"\)\.forEach\(x=>x\.classList\.remove\("on"\)\); b\.classList\.add\("on"\); \$\("#fxName"\)\.textContent=f; \}\); sel\.appendChild\(b\); \}\); \}/,
  `b.addEventListener("pointerdown",()=>{ $$("#fxsel .fb").forEach(x=>x.classList.remove("on")); b.classList.add("on"); curFx=f; $("#fxName").textContent=f; if(ready){ connectFx(f); refreshWet(); } }); sel.appendChild(b); }); }`);
s = s.replace(/\$\("\[data-act='fxon'\]"\)\.addEventListener\("pointerdown",\(\)=>\{ if\(!started\)startAudio\(\); const el=\$\("\[data-act='fxon'\]"\); el\.classList\.toggle\("on"\); const on=el\.classList\.contains\("on"\); if\(fxNode\.wet\)\{ fxNode\.wet\.gain\.setTargetAtTime\(on\?0\.5:0,AC\.currentTime,0\.05\); fxNode\.dry\.gain\.setTargetAtTime\(on\?0\.75:1,AC\.currentTime,0\.05\);\} \}\);/,
  `$("[data-act='fxon']").addEventListener("pointerdown",()=>{ if(ready)setFxOn(!fxOn); });`);
// missão fxon
s = s.replace(/case "fxon":return !!fxNode\.wet&&fxNode\.wet\.gain\.value>0\.1;/, `case "fxon":return fxOn;`);

fs.writeFileSync(F, s, "utf8");
console.log(`✓ Prime 4+ portado para o motor v2 (${applied}/${REPL.length} patches) — ${(fs.statSync(F).size/1024).toFixed(0)}KB`);
