// Integra os SIMULADORES FLAGSHIP e IMAGENS ao curso PLENO VÍDEO (c8ee74bd) — via REST.
// 1) cria Módulo 8 "Simuladores Profissionais" com 3 aulas (NovaStar/Switcher/Resolume) + quiz + sim;
// 2) embute imagens reais em 8 aulas existentes (idempotente);
// 3) faz upgrade dos sims genéricos das 3 aulas por-modelo (M7) para os flagships.
// Uso: node cursos-novos/pleno-video-sims/apply-pleno.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { figure, imgUrl } from "./images.mjs";
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
const MOD8 = "72d00000-0000-4000-9000-000000000008";
const readFrag = f => fs.readFileSync(path.join(HERE,f+".fragment.html"),"utf8").replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi,(_,s)=>figure(s));
const readQuiz = f => JSON.parse(fs.readFileSync(path.join(HERE,f+".quiz.json"),"utf8"));
const readSim = rel => fs.readFileSync(path.join(SIM_DIR,rel),"utf8");
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Simulador interativo — pratique movendo os controles" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

const M8 = [
  { id:"72100000-0000-4000-9000-000000000b01", frag:"aula-novastar", titulo:"Processador de LED (NovaStar): configure a parede de LED", sim:"video/novastar-led.html" },
  { id:"72100000-0000-4000-9000-000000000b02", frag:"aula-switcher", titulo:"Mesa de corte profissional: dirija o corte multicâmera", sim:"video/switcher-atem.html" },
  { id:"72100000-0000-4000-9000-000000000b03", frag:"aula-resolume", titulo:"Software de VJ (Resolume Arena): composição ao vivo", sim:"video/resolume-vj.html" },
];
const QID = n => `72200000-0000-4000-9000-0000000000b${n}`;
const QQID= (n,j)=>`72300000-0000-4000-9000-00000000${String(n).padStart(2,"0")}${String(j).padStart(2,"0")}`;

// imagens -> aulas existentes (lesson_id EXATO, slug)
const IMG_MAP = [
  ["86afa2ea-8e43-4458-96fc-7a12b6b6dec1","cabine-video-multiview"], // M1.1
  ["f62fc874-4863-4615-9181-70c5897a6998","telao-led-palco"],        // M3.2
  ["015f5acc-0d96-43ca-920c-1184115b904e","operador-switcher-show"], // M4.1
  ["54cd80d5-8c82-4c15-99a1-e411c851ec62","vj-operando"],            // M4.2
  ["3fcd525f-7bb3-4a36-b52c-3806a5702d90","projecao-mapping"],       // M5.1
  ["d7bafede-fd0f-44fe-be6f-c0bcbcc89874","rack-processadores-led"], // M7.3
  ["da0574ff-8ddf-4059-85db-b5b005f987c7","camera-ptz-imag"],        // M7.5
  ["eeb3d3a7-838f-4662-abdf-e3e42083ec25","fibra-sdi-pro"],          // M7.6
];
// sim upgrades (aula por-modelo -> flagship)
const SIM_UPGRADE = [
  ["d7bafede-fd0f-44fe-be6f-c0bcbcc89874","video/novastar-led.html","Processador de LED (NovaStar)"], // M7.3
  ["8cd7ef59-d8dc-41c9-8c4e-2dc90d04f317","video/switcher-atem.html","Mesa de corte profissional"],    // M7.1
  ["13e8692d-5ad5-4b97-9235-59d47d847911","video/resolume-vj.html","Software de VJ (Resolume)"],       // M7.2
];

function insertFigure(html, slug){
  if(html.includes(imgUrl(slug))) return html; // idempotente
  const fig = figure(slug);
  const i = html.indexOf("</p>");
  if(i<0) return fig + html;
  return html.slice(0,i+4) + "\n" + fig + html.slice(i+4);
}

(async()=>{
  console.log(`== Pleno Vídeo — integração ${DRY?"(DRY)":""} ==`);

  // TRAVA 1 — faixa: nenhum id fora do espaço do pleno-video (ver _guard.mjs).
  // Os ids que só levam PATCH (imagens/sims em aulas nativas) entram como `nativos`.
  const nativos = [...IMG_MAP.map(([lid])=>lid), ...SIM_UPGRADE.map(([lid])=>lid)];
  conferir("pleno-video", [MOD8, ...M8.map(m=>m.id)], nativos);
  // quiz/questão vivem num espaço que o cartório não modela — conferidos à parte.
  conferirQuiz("pleno-video",
    M8.map((_,i)=>QID(i+1)),
    M8.flatMap((_,i)=>readQuiz(M8[i].frag).questoes.map((_,j)=>QQID(i+1,j+1))));

  if(DRY){
    for(const it of M8){ const f=readFrag(it.frag); const q=readQuiz(it.frag); const s=readSim(it.sim); console.log(`  ${it.frag}: frag=${f.length}B fig=${(f.match(/<figure/g)||[]).length} quiz=${q.questoes.length} sim=${(s.length/1024|0)}KB`); }
    console.log("  IMG_MAP:", IMG_MAP.length, "SIM_UPGRADE:", SIM_UPGRADE.length);
    console.log("DONE (dry)."); return;
  }

  // TRAVA 2 — progresso: o DELETE abaixo cascateia e levaria o histórico do aluno.
  await travaProgresso(req, M8.map(m=>m.id));

  // 1) Módulo 8
  await req("DELETE", `/modules?id=eq.${MOD8}`, null, {Prefer:"return=minimal"});
  await post("modules",[{ id:MOD8, course_id:COURSE, titulo:"Módulo 8 — Simuladores Profissionais (Pratique como num Evento)", ordem:8 }]);
  let n=0;
  for(const it of M8){ n++;
    await req("DELETE", `/lessons?id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("lessons",[{ id:it.id, module_id:MOD8, titulo:it.titulo, tipo:"texto", conteudo_rico:readFrag(it.frag), duracao_min:22, ordem:n, tem_quiz:true, preview_gratis:false }]);
    const quiz=readQuiz(it.frag); const qid=QID(n);
    await post("quizzes",[{ id:qid, lesson_id:it.id, titulo:quiz.titulo }]);
    const qs=[],os=[]; quiz.questoes.forEach((qq,j)=>{ const qqid=QQID(n,j+1); qs.push({id:qqid,quiz_id:qid,texto:qq.texto,explicacao:qq.explicacao||"",ordem:j+1,pontos:1}); qq.opcoes.forEach(([t,ok],k)=>os.push({question_id:qqid,texto:t,correta:!!ok,ordem:k+1})); });
    await post("quiz_questions",qs); await post("quiz_options",os);
    await req("DELETE", `/ai_animations?lesson_id=eq.${it.id}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:it.id, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(it.titulo), urls:[{ html:readSim(it.sim) }] }]);
    console.log(`  Módulo 8 aula ${n}: ${it.titulo.slice(0,44)} (+sim +quiz${quiz.questoes.length})`);
  }

  // 2) imagens nas aulas existentes
  for(const [lid,slug] of IMG_MAP){
    const rows = await req("GET", `/lessons?id=eq.${lid}&select=conteudo_rico`);
    if(!rows.length){ console.log(`  ! aula ${lid} não encontrada (img ${slug})`); continue; }
    const html = rows[0].conteudo_rico||"";
    const updated = insertFigure(html, slug);
    if(updated!==html){ await req("PATCH", `/lessons?id=eq.${lid}`, { conteudo_rico:updated }, {Prefer:"return=minimal"}); console.log(`  img ${slug} -> ${lid.slice(0,8)}`); }
    else console.log(`  img ${slug} já presente em ${lid.slice(0,8)}`);
  }

  // 3) upgrade de sims genéricos -> flagship
  for(const [lid,rel,tit] of SIM_UPGRADE){
    await req("DELETE", `/ai_animations?lesson_id=eq.${lid}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(tit), urls:[{ html:readSim(rel) }] }]);
    console.log(`  sim upgrade -> ${tit} em ${lid.slice(0,8)}`);
  }

  // 4) total_aulas = 24 (21 + 3 do Módulo 8)
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: 24 }, {Prefer:"return=minimal"});
  console.log("  total_aulas=24");
  console.log("DONE.");
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
