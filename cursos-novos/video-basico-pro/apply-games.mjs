// Anexa os games que faltavam às 6 aulas do VIDEO BÁSICO sem simulador (12/12)
// e recalcula a carga_horaria dos dois cursos de vídeo (estava errada: "15min").
// Uso: node cursos-novos/video-basico-pro/apply-games.mjs [--dry]
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
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Game interativo — resolva o desafio" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

const BASICO = "53070493-ec56-461c-b591-e247645f3b91";
const PLENO  = "c8ee74bd-37a4-4ca1-bac4-00d6535d7a5e";

// (módulo.ordem, aula.ordem) -> game
const GAMES = [
  { mod:1, ord:1, sim:"video-basico/cadeia-video.html" },
  { mod:1, ord:3, sim:"video-basico/framerate-lab.html" },
  { mod:2, ord:2, sim:"video-basico/distancia-transporte.html" },
  { mod:2, ord:4, sim:"video-basico/estacao-pc.html" },
  { mod:2, ord:5, sim:"video-basico/escolha-tela.html" },
  { mod:3, ord:4, sim:"video-basico/checklist-montagem.html" },
];

async function cargaHoraria(cid){
  const mods = await req("GET", `/modules?course_id=eq.${cid}&select=id`);
  let total = 0, n = 0;
  for (const m of mods) {
    const les = await req("GET", `/lessons?module_id=eq.${m.id}&select=duracao_min`);
    les.forEach(l => { total += (l.duracao_min || 0); n++; });
  }
  return { minutos: total, aulas: n };
}

(async()=>{
  console.log(`== Vídeo Básico — games faltantes + carga horária ${DRY?"(DRY)":""} ==`);

  // 1) anexar games
  const mods = await req("GET", `/modules?course_id=eq.${BASICO}&select=id,ordem&order=ordem`);
  const byOrdem = Object.fromEntries(mods.map(m=>[m.ordem,m.id]));
  for (const g of GAMES) {
    const mid = byOrdem[g.mod];
    if(!mid){ console.log(`  ! módulo ${g.mod} não encontrado`); continue; }
    const les = await req("GET", `/lessons?module_id=eq.${mid}&ordem=eq.${g.ord}&select=id,titulo`);
    if(!les.length){ console.log(`  ! aula M${g.mod}.${g.ord} não encontrada`); continue; }
    const l = les[0];
    const html = readSim(g.sim);
    if(DRY){ console.log(`  [dry] M${g.mod}.${g.ord} ${l.titulo.slice(0,42)} <- ${g.sim} (${(html.length/1024|0)}KB)`); continue; }
    await req("DELETE", `/ai_animations?lesson_id=eq.${l.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:l.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(l.titulo), urls:[{ html }] }]);
    console.log(`  ✓ M${g.mod}.${g.ord} ${l.titulo.slice(0,44)} <- ${g.sim.split('/')[1]}`);
  }

  // 2) carga horária dos dois cursos
  for (const [nome,cid] of [["Vídeo — Básico",BASICO],["Pleno — Vídeo",PLENO]]) {
    const { minutos, aulas } = await cargaHoraria(cid);
    if(DRY){ console.log(`  [dry] ${nome}: ${aulas} aulas = ${minutos} min (${(minutos/60).toFixed(1)}h)`); continue; }
    await req("PATCH", `/courses?id=eq.${cid}`, { carga_horaria: minutos, total_aulas: aulas }, {Prefer:"return=minimal"});
    console.log(`  ✓ ${nome}: carga_horaria=${minutos} min (${(minutos/60).toFixed(1)}h), total_aulas=${aulas}`);
  }
  console.log("DONE.");
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
