// Aplica a RECONSTRUÇÃO do curso VÍDEO BÁSICO (53070493) via REST (service key).
// Faz backup do conteúdo antigo, DELETE módulos (cascata), PATCH curso, e POST toda a estrutura.
// Uso: node cursos-novos/video-basico-pro/apply-rest.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { COURSE, MODULES, LAYOUT, readFrag, readQuiz, readSim } from "./build.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/29547da5-1a58-4f32-b63c-9d3c40871300/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };

async function req(method, p, body, extra={}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body?JSON.stringify(body):undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`);
  return t ? (t[0]==='['||t[0]==='{'?JSON.parse(t):t) : null;
}
const post = (t,b)=>req("POST","/"+t,b,{Prefer:"return=minimal"});

// UUID helpers (12 hex no último segmento)
const MOD = n => `71d00000-0000-4000-9000-0000000000${String(n).padStart(2,"0")}`;
const LID = n => `71100000-0000-4000-9000-0000${String(n).padStart(8,"0")}`;
const QID = n => `71200000-0000-4000-9000-0000${String(n).padStart(8,"0")}`;
const QQID= (n,j)=>`71300000-0000-4000-9000-${String(n).padStart(4,"0")}${String(j).padStart(8,"0")}`;

(async()=>{
  console.log(`== Vídeo Básico — apply ${DRY?"(DRY)":""} ==`);

  // 1) BACKUP
  const mods = await req("GET", `/modules?course_id=eq.${COURSE}&select=*,lessons(*)`);
  fs.writeFileSync(path.join(HERE,"backup-antigo-53070493.json"), JSON.stringify(mods,null,2));
  console.log(`1) Backup salvo (${mods.length} módulos antigos).`);
  if (DRY) { console.log("DRY: parando antes de escrever."); return; }

  // 2) DELETE
  // TRAVA DE PROGRESSO: a cascata deste DELETE leva lessons, quizzes, ai_animations
  // (os SIMULADORES) e o `progress` dos alunos — sem desfazer. Curso vazio: seguro.
  // Curso com aluno: aborta. Para reformular mesmo assim: FORCAR=1 node apply-rest.mjs
  const modsAtuais = await req("GET", `/modules?course_id=eq.${COURSE}&select=id,lessons(id)`);
  const lessonIds = (modsAtuais ?? []).flatMap(m => (m.lessons ?? []).map(l => l.id));
  if (lessonIds.length) {
    const prog = await req("GET", `/progress?lesson_id=in.(${lessonIds.join(",")})&select=id&limit=1`);
    if (prog?.length && process.env.FORCAR !== "1") {
      throw new Error(
        "ABORTADO: há progresso de aluno nas aulas deste curso.\n" +
        "O DELETE apagaria esse histórico em cascata, sem volta.\n" +
        "Se a reformulação for mesmo para valer, rode com FORCAR=1.");
    }
  }
  await req("DELETE", `/modules?course_id=eq.${COURSE}`, null, {Prefer:"return=minimal"});
  console.log("2) Módulos antigos removidos (cascata).");

  // 3) PATCH course
  await req("PATCH", `/courses?id=eq.${COURSE}`, {
    titulo: "Vídeo — Básico",
    descricao_curta: "Formação base do técnico de vídeo para eventos ao vivo: função e cadeia do vídeo, resolução e proporção, cabos e conectores (HDMI, SDI, fibra, HDBaseT), conversores e scalers, telas, telão de LED e seu processador, projeção, a mesa de corte e a montagem completa — com imagens realistas e simuladores práticos.",
    categoria: "vj",
    total_aulas: LAYOUT.length,
  }, {Prefer:"return=minimal"});
  console.log("3) Curso atualizado (Vídeo — Básico).");

  // 4) modules
  await post("modules", MODULES.map(m=>({ id:MOD(m.n), course_id:COURSE, titulo:m.titulo, ordem:m.n })));
  console.log("4) Módulos criados.");

  // 5) lessons/quizzes/anim
  const ordByMod={}; let nL=0,nQ=0,nQu=0,nO=0,nS=0;
  for (let i=0;i<LAYOUT.length;i++){
    const it=LAYOUT[i]; const n=it.n; // número permanente da aula — NUNCA a posição (Regra 5)
    ordByMod[it.mod]=(ordByMod[it.mod]||0)+1; const ordem=ordByMod[it.mod];
    const lid=LID(n);
    const preview = it.mod===1 && ordem===1;
    await post("lessons", [{ id:lid, module_id:MOD(it.mod), titulo:it.titulo, tipo:"texto",
      conteudo_rico:readFrag(it.frag), duracao_min:16, ordem, tem_quiz:true, preview_gratis:preview }]);
    nL++;
    const quiz=readQuiz(it.frag);
    if (quiz){
      const qid=QID(n);
      await post("quizzes",[{ id:qid, lesson_id:lid, titulo:quiz.titulo }]); nQ++;
      const questions=[], options=[];
      quiz.questoes.forEach((qq,j)=>{
        const qqid=QQID(n,j+1);
        questions.push({ id:qqid, quiz_id:qid, texto:qq.texto, explicacao:qq.explicacao||"", ordem:j+1, pontos:1 });
        qq.opcoes.forEach(([txt,ok],k)=> options.push({ question_id:qqid, texto:txt, correta:!!ok, ordem:k+1 }));
      });
      await post("quiz_questions", questions); nQu+=questions.length;
      await post("quiz_options", options); nO+=options.length;
    }
    if (it.sim){
      const html=readSim(it.sim);
      const roteiro={ titulo:it.titulo,
        metadata:{ titulo_aula:it.titulo, total_cenas:1, duracao_total:0, abordagem_didatica:"Simulador interativo — pratique movendo os controles" },
        cenas:[{ numero:1, titulo:it.titulo, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] };
      await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro, urls:[{ html }] }]); nS++;
    }
    console.log(`   aula ${n} [M${it.mod}.${ordem}] ${it.titulo.slice(0,42)}${it.sim?" +sim":""}`);
  }
  console.log(`\nDONE: ${MODULES.length} módulos, ${nL} aulas, ${nQ} quizzes, ${nQu} questões, ${nO} opções, ${nS} simuladores.`);
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
