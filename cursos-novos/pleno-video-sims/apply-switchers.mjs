// Adiciona ao PLENO VÍDEO o Módulo 11 "Switchers / Mesas de Corte por Marca (software real)"
// (Blackmagic ATEM, Roland V-60HD, Analog Way Aquilon — réplicas fiéis + link oficial + quiz).
// Também RE-PUBLICA o switcher ATEM atualizado (branding+download) nas aulas que já o usam (M8.2, M7.1).
// Uso: node cursos-novos/pleno-video-sims/apply-switchers.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { figure } from "./images.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../../simuladores");
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/29547da5-1a58-4f32-b63c-9d3c40871300/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }
const post=(t,b)=>req("POST","/"+t,b,{Prefer:"return=minimal"});

const COURSE = "c8ee74bd-37a4-4ca1-bac4-00d6535d7a5e";
const MOD11 = "75d00000-0000-4000-9000-000000000011";
const readFrag = f => fs.readFileSync(path.join(HERE,f+".fragment.html"),"utf8").replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi,(_,s)=>figure(s));
const readQuiz = f => JSON.parse(fs.readFileSync(path.join(HERE,f+".quiz.json"),"utf8"));
const readSim = rel => fs.readFileSync(path.join(SIM_DIR,rel),"utf8");
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Réplica fiel do software real — siga o procedimento da marca" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

const M11 = [
  { id:"75100000-0000-4000-9000-000000000e01", frag:"sw-atem",      titulo:"Blackmagic ATEM — ATEM Software Control (paletas, USK/DSK, DVE)", sim:"video/switcher-atem.html" },
  { id:"75100000-0000-4000-9000-000000000e02", frag:"sw-roland",    titulo:"Roland V-60HD — mesa de hardware plug-n-play (PinP, Key, Memory)", sim:"video/switchers/roland-v60hd.html" },
  { id:"75100000-0000-4000-9000-000000000e03", frag:"sw-analogway", titulo:"Analog Way Aquilon — Web RCS: camadas, telas e presets (seamless)", sim:"video/switchers/analogway-aquilon.html" },
];
const QID = n => `75200000-0000-4000-9000-0000000000e${n}`;
const QQID= (n,j)=>`75300000-0000-4000-9000-00000000${String(n).padStart(2,"0")}${String(j).padStart(2,"0")}`;

// re-publicar o switcher ATEM atualizado nas aulas existentes
const ATEM_REPUB = [
  ["72100000-0000-4000-9000-000000000b02","Mesa de corte profissional"], // M8.2
  ["8cd7ef59-d8dc-41c9-8c4e-2dc90d04f317","Switchers (ATEM/Roland/Analog Way)"], // M7.1
];

(async()=>{
  console.log(`== Pleno Vídeo — Switchers por Marca ${DRY?"(DRY)":""} ==`);
  if(DRY){ for(const it of M11){ const f=readFrag(it.frag); const q=readQuiz(it.frag); const s=readSim(it.sim); const dl=(s.match(/href="(https?:\/\/[^"]+)"[^>]*rel="noopener"/)||[])[1]; console.log(`  ${it.frag}: frag=${f.length}B quiz=${q.questoes.length} sim=${(s.length/1024|0)}KB dl=${dl||'?'}`); } console.log("DONE (dry)."); return; }
  // Módulo 11
  await req("DELETE", `/modules?id=eq.${MOD11}`, null, {Prefer:"return=minimal"});
  await post("modules",[{ id:MOD11, course_id:COURSE, titulo:"Módulo 11 — Switchers / Mesas de Corte por Marca (software real)", ordem:11 }]);
  let n=0;
  for(const it of M11){ n++;
    await req("DELETE", `/lessons?id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("lessons",[{ id:it.id, module_id:MOD11, titulo:it.titulo, tipo:"texto", conteudo_rico:readFrag(it.frag), duracao_min:18, ordem:n, tem_quiz:true, preview_gratis:false }]);
    const quiz=readQuiz(it.frag); const qid=QID(n);
    await post("quizzes",[{ id:qid, lesson_id:it.id, titulo:quiz.titulo }]);
    const qs=[],os=[]; quiz.questoes.forEach((qq,j)=>{ const qqid=QQID(n,j+1); qs.push({id:qqid,quiz_id:qid,texto:qq.texto,explicacao:qq.explicacao||"",ordem:j+1,pontos:1}); qq.opcoes.forEach(([t,ok],k)=>os.push({question_id:qqid,texto:t,correta:!!ok,ordem:k+1})); });
    await post("quiz_questions",qs); await post("quiz_options",os);
    await req("DELETE", `/ai_animations?lesson_id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:it.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(it.titulo), urls:[{ html:readSim(it.sim) }] }]);
    console.log(`  M11 aula ${n}: ${it.titulo.slice(0,46)} (+sim +quiz${quiz.questoes.length})`);
  }
  // re-publicar ATEM atualizado
  const atemHtml=readSim("video/switcher-atem.html");
  for(const [lid,tit] of ATEM_REPUB){
    await req("DELETE", `/ai_animations?lesson_id=eq.${lid}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(tit), urls:[{ html:atemHtml }] }]);
    console.log(`  ATEM re-publicado -> ${lid.slice(0,8)}`);
  }
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: 32 }, {Prefer:"return=minimal"});
  console.log("  total_aulas=32\nDONE.");
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
