// Adiciona ao PLENO VÍDEO o Módulo 9 "Processadores de LED por Marca — Software Real"
// (NovaStar NovaLCT, Colorlight LEDVISION, Brompton Tessera — réplicas fiéis + link oficial + quiz).
// Também faz UPGRADE do sim NovaStar das aulas existentes (M8.1 e M7.3) para a NovaLCT fiel.
// Uso: node cursos-novos/pleno-video-sims/apply-processadores.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { figure } from "./images.mjs";
import { conferir, conferirQuiz, travaProgresso } from "./_guard.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../../simuladores");
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/29547da5-1a58-4f32-b63c-9d3c40871300/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }
const post=(t,b)=>req("POST","/"+t,b,{Prefer:"return=minimal"});

const COURSE = "c8ee74bd-37a4-4ca1-bac4-00d6535d7a5e";
const MOD9 = "73d00000-0000-4000-9000-000000000009";
const readFrag = f => fs.readFileSync(path.join(HERE,f+".fragment.html"),"utf8").replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi,(_,s)=>figure(s));
const readQuiz = f => JSON.parse(fs.readFileSync(path.join(HERE,f+".quiz.json"),"utf8"));
const readSim = rel => fs.readFileSync(path.join(SIM_DIR,rel),"utf8");
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Réplica fiel do software real — siga o procedimento da marca" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

const M9 = [
  { id:"73100000-0000-4000-9000-000000000c01", frag:"marca-novastar",   titulo:"NovaStar — NovaLCT: o procedimento oficial (Advanced Login, Send to HW)", sim:"video/processadores/novastar-novalct.html" },
  { id:"73100000-0000-4000-9000-000000000c02", frag:"marca-colorlight", titulo:"Colorlight — LEDVISION: Setup, Smart Setting e Display Connection", sim:"video/processadores/colorlight-ledvision.html" },
  { id:"73100000-0000-4000-9000-000000000c03", frag:"marca-brompton",   titulo:"Brompton — Tessera: ShutterSync, HDR e virtual production", sim:"video/processadores/brompton-tessera.html" },
];
const QID = n => `73200000-0000-4000-9000-0000000000c${n}`;
const QQID= (n,j)=>`73300000-0000-4000-9000-00000000${String(n).padStart(2,"0")}${String(j).padStart(2,"0")}`;

// upgrade do sim NovaStar (aulas existentes) -> NovaLCT fiel
const NOVA_UPGRADE = [
  ["72100000-0000-4000-9000-000000000b01","Processador de LED (NovaStar) — NovaLCT"], // M8.1
  ["d7bafede-fd0f-44fe-be6f-c0bcbcc89874","Processador de LED (NovaStar) — NovaLCT"], // M7.3
];
const NOVA_SIM = "video/processadores/novastar-novalct.html";

(async()=>{
  console.log(`== Pleno Vídeo — Processadores por Marca ${DRY?"(DRY)":""} ==`);
  if(DRY){
    for(const it of M9){ const f=readFrag(it.frag); const q=readQuiz(it.frag); const s=readSim(it.sim); const dl=(s.match(/href="(https?:\/\/[^"]+)"[^>]*rel="noopener"/)||s.match(/dlbar[^]*?href="(https?:\/\/[^"]+)"/)||[])[1]; console.log(`  ${it.frag}: frag=${f.length}B quiz=${q.questoes.length} sim=${(s.length/1024|0)}KB dl=${dl||'?'}`); }
    console.log("DONE (dry)."); return;
  }
  // TRAVA 1 — faixa (m9 tem prefixo próprio: 73d00000/73100000).
  // NOVA_UPGRADE só faz PATCH de sim em aulas já existentes -> nativos.
  conferir("pleno-video-m9", [MOD9, ...M9.map(m=>m.id)], NOVA_UPGRADE.map(([lid])=>lid));
  // quiz/questão: espaço que o cartório não modela — conferido à parte.
  conferirQuiz("pleno-video-m9",
    M9.map((_,i)=>QID(i+1)),
    M9.flatMap((_,i)=>readQuiz(M9[i].frag).questoes.map((_,j)=>QQID(i+1,j+1))));
  // TRAVA 2 — progresso: o DELETE abaixo cascateia.
  await travaProgresso(req, M9.map(m=>m.id));

  // Módulo 9
  await req("DELETE", `/modules?id=eq.${MOD9}`, null, {Prefer:"return=minimal"});
  await post("modules",[{ id:MOD9, course_id:COURSE, titulo:"Módulo 9 — Processadores de LED por Marca (software real)", ordem:9 }]);
  let n=0;
  for(const it of M9){ n++;
    await req("DELETE", `/lessons?id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("lessons",[{ id:it.id, module_id:MOD9, titulo:it.titulo, tipo:"texto", conteudo_rico:readFrag(it.frag), duracao_min:20, ordem:n, tem_quiz:true, preview_gratis:false }]);
    const quiz=readQuiz(it.frag); const qid=QID(n);
    await post("quizzes",[{ id:qid, lesson_id:it.id, titulo:quiz.titulo }]);
    const qs=[],os=[]; quiz.questoes.forEach((qq,j)=>{ const qqid=QQID(n,j+1); qs.push({id:qqid,quiz_id:qid,texto:qq.texto,explicacao:qq.explicacao||"",ordem:j+1,pontos:1}); qq.opcoes.forEach(([t,ok],k)=>os.push({question_id:qqid,texto:t,correta:!!ok,ordem:k+1})); });
    await post("quiz_questions",qs); await post("quiz_options",os);
    await req("DELETE", `/ai_animations?lesson_id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:it.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(it.titulo), urls:[{ html:readSim(it.sim) }] }]);
    console.log(`  M9 aula ${n}: ${it.titulo.slice(0,46)} (+sim +quiz${quiz.questoes.length})`);
  }
  // upgrade NovaStar sims
  for(const [lid,tit] of NOVA_UPGRADE){
    await req("DELETE", `/ai_animations?lesson_id=eq.${lid}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(tit), urls:[{ html:readSim(NOVA_SIM) }] }]);
    console.log(`  NovaLCT upgrade -> ${lid.slice(0,8)}`);
  }
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: 27 }, {Prefer:"return=minimal"});
  console.log("  total_aulas=27\nDONE.");
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
