// Adiciona ao PLENO VÍDEO o Módulo 10 "Ligação e Mapeamento — Trabalhos do Dia a Dia".
// 2 aulas: (1) ligação de cabos da cadeia; (2) mapeamento mesma imagem × dividida × diferentes.
// Uso: node cursos-novos/pleno-video-sims/apply-diaadia.mjs [--dry]
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
const MOD10 = "74d00000-0000-4000-9000-000000000010";
const readFrag = f => fs.readFileSync(path.join(HERE,f+".fragment.html"),"utf8").replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi,(_,s)=>figure(s));
const readQuiz = f => JSON.parse(fs.readFileSync(path.join(HERE,f+".quiz.json"),"utf8"));
const readSim = rel => fs.readFileSync(path.join(SIM_DIR,rel),"utf8");
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Simulador prático — resolva o trabalho do dia a dia" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

const M10 = [
  { id:"74100000-0000-4000-9000-000000000d01", frag:"aula-ligacao",    titulo:"Ligando os cabos: a cadeia de vídeo do PC ao telão", sim:"video/ligacao-cabos.html" },
  { id:"74100000-0000-4000-9000-000000000d02", frag:"aula-mapeamento", titulo:"Mapeamento: mesma imagem, imagem dividida ou conteúdos diferentes", sim:"video/mapeamento-paineis.html" },
];
const QID = n => `74200000-0000-4000-9000-0000000000d${n}`;
const QQID= (n,j)=>`74300000-0000-4000-9000-00000000${String(n).padStart(2,"0")}${String(j).padStart(2,"0")}`;

(async()=>{
  console.log(`== Pleno Vídeo — Dia a Dia (Ligação + Mapeamento) ${DRY?"(DRY)":""} ==`);
  if(DRY){ for(const it of M10){ const f=readFrag(it.frag); const q=readQuiz(it.frag); const s=readSim(it.sim); console.log(`  ${it.frag}: frag=${f.length}B fig=${(f.match(/<figure/g)||[]).length} quiz=${q.questoes.length} sim=${(s.length/1024|0)}KB`); } console.log("DONE (dry)."); return; }
  await req("DELETE", `/modules?id=eq.${MOD10}`, null, {Prefer:"return=minimal"});
  await post("modules",[{ id:MOD10, course_id:COURSE, titulo:"Módulo 10 — Ligação e Mapeamento (Trabalhos do Dia a Dia)", ordem:10 }]);
  let n=0;
  for(const it of M10){ n++;
    await req("DELETE", `/lessons?id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("lessons",[{ id:it.id, module_id:MOD10, titulo:it.titulo, tipo:"texto", conteudo_rico:readFrag(it.frag), duracao_min:18, ordem:n, tem_quiz:true, preview_gratis:false }]);
    const quiz=readQuiz(it.frag); const qid=QID(n);
    await post("quizzes",[{ id:qid, lesson_id:it.id, titulo:quiz.titulo }]);
    const qs=[],os=[]; quiz.questoes.forEach((qq,j)=>{ const qqid=QQID(n,j+1); qs.push({id:qqid,quiz_id:qid,texto:qq.texto,explicacao:qq.explicacao||"",ordem:j+1,pontos:1}); qq.opcoes.forEach(([t,ok],k)=>os.push({question_id:qqid,texto:t,correta:!!ok,ordem:k+1})); });
    await post("quiz_questions",qs); await post("quiz_options",os);
    await req("DELETE", `/ai_animations?lesson_id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:it.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(it.titulo), urls:[{ html:readSim(it.sim) }] }]);
    console.log(`  M10 aula ${n}: ${it.titulo.slice(0,48)} (+sim +quiz${quiz.questoes.length})`);
  }
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: 29 }, {Prefer:"return=minimal"});
  console.log("  total_aulas=29\nDONE.");
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
