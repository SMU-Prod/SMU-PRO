// Substitui os simuladores GENÉRICOS (IA antiga) do Pleno Vídeo pelos autorais/fiéis já prontos,
// e re-publica o Resolume (agora com link oficial de download) nas aulas que o usam.
// Uso: node cursos-novos/pleno-video-sims/apply-upgrade-genericos.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../../simuladores");
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/29547da5-1a58-4f32-b63c-9d3c40871300/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }
const post=(t,b)=>req("POST","/"+t,b,{Prefer:"return=minimal"});
const readSim = rel => fs.readFileSync(path.join(SIM_DIR,rel),"utf8");
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Simulador interativo — pratique movendo os controles" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

const PLENO = "c8ee74bd-37a4-4ca1-bac4-00d6535d7a5e";

// (módulo.ordem, aula.ordem) -> simulador que substitui o genérico
const UP = [
  { mod:1, ord:1, sim:"video-basico/cadeia-video.html" },
  { mod:1, ord:2, sim:"video-basico/framerate-lab.html" },
  { mod:2, ord:1, sim:"video-basico/estacao-pc.html" },
  { mod:2, ord:2, sim:"video-basico/conector-match.html" },
  { mod:2, ord:3, sim:"video-basico/signal-scaler.html" },
  { mod:3, ord:1, sim:"video-basico/escolha-tela.html" },
  { mod:3, ord:3, sim:"video-basico/projector-calc.html" },
  { mod:4, ord:1, sim:"video/switcher-atem.html" },        // FIEL ATEM
  { mod:4, ord:2, sim:"video/resolume-vj.html" },           // FIEL Resolume
  { mod:4, ord:3, sim:"video/resolume-vj.html" },           // media server
  { mod:5, ord:1, sim:"video/video-mapping.html" },         // warp/mask/blend
  { mod:7, ord:2, sim:"video/resolume-vj.html" },           // re-publica c/ link
  { mod:7, ord:4, sim:"video-basico/projector-calc.html" },
  { mod:7, ord:6, sim:"video-basico/distancia-transporte.html" },
];
// re-publicar Resolume atualizado (link de download) no Módulo 8
const REPUB = [{ id:"72100000-0000-4000-9000-000000000b03", sim:"video/resolume-vj.html", tit:"Software de VJ (Resolume Arena)" }];

(async()=>{
  console.log(`== Pleno Vídeo — upgrade dos genéricos ${DRY?"(DRY)":""} ==`);
  const mods = await req("GET", `/modules?course_id=eq.${PLENO}&select=id,ordem&order=ordem`);
  const byOrdem = Object.fromEntries(mods.map(m=>[m.ordem,m.id]));
  let n=0;
  for (const u of UP) {
    const mid = byOrdem[u.mod]; if(!mid){ console.log(`  ! módulo ${u.mod} não achado`); continue; }
    const les = await req("GET", `/lessons?module_id=eq.${mid}&ordem=eq.${u.ord}&select=id,titulo`);
    if(!les.length){ console.log(`  ! aula ${u.mod}.${u.ord} não achada`); continue; }
    const l = les[0]; const html = readSim(u.sim);
    if(DRY){ console.log(`  [dry] ${u.mod}.${u.ord} ${l.titulo.slice(0,40)} <- ${u.sim}`); continue; }
    await req("DELETE", `/ai_animations?lesson_id=eq.${l.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:l.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(l.titulo), urls:[{ html }] }]);
    console.log(`  ✓ ${u.mod}.${u.ord} ${l.titulo.slice(0,42)} <- ${u.sim.split('/')[1]}`); n++;
  }
  for (const r of REPUB) {
    if(DRY){ console.log(`  [dry] repub ${r.tit}`); continue; }
    await req("DELETE", `/ai_animations?lesson_id=eq.${r.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:r.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(r.tit), urls:[{ html:readSim(r.sim) }] }]);
    console.log(`  ✓ repub ${r.tit} (com link de download)`); n++;
  }
  console.log(`\nDONE — ${n} aulas atualizadas.`);
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
