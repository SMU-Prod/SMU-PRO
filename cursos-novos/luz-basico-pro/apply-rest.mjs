// Aplica a REFORMULAÇÃO do curso LUZ BASICO (5407f707) via REST (service key),
// reutilizando o MESMO modelo do gerador (build-sql.mjs). Reliable, verificável passo a passo.
// Uso: node cursos-novos/luz-basico-pro/apply-rest.mjs
import fs from "node:fs";
import { COURSE, MODULES, LAYOUT, MOD, lidHex, qidHex, qqHex, readFrag, readSim, byFrag } from "./build-sql.mjs";

const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/316628a9-19db-4729-a6a2-8cb2c01b8171/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { "apikey": SVC, "Authorization": `Bearer ${SVC}`, "Content-Type": "application/json" };

async function req(method, path, body, extraHeaders={}) {
  const r = await fetch(REST + path, { method, headers: { ...H, ...extraHeaders }, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${path} -> ${r.status}: ${txt.slice(0,300)}`);
  return txt ? (txt[0]==='[' || txt[0]==='{' ? JSON.parse(txt) : txt) : null;
}
const post = (t, body) => req("POST", "/"+t, body, { "Prefer": "return=minimal" });

(async () => {
  console.log("1) DELETE módulos antigos (cascata lessons/quizzes/anim)…");
  await req("DELETE", `/modules?course_id=eq.${COURSE}`, null, { "Prefer": "return=minimal" });

  console.log("2) PATCH curso (metadados)…");
  await req("PATCH", `/courses?id=eq.${COURSE}`, {
    titulo: "Luz — Básico",
    descricao_curta: "Formação base do técnico de iluminação de palco: funções da luz, física (cor/temperatura/ângulo), tipos de refletores, DMX512, endereçamento e patch, cabos e conectores, potência e dimmer, a mesa de luz e a segurança — com imagens realistas e simuladores práticos.",
    categoria: "luz",
    total_aulas: LAYOUT.length,
  }, { "Prefer": "return=minimal" });

  console.log("3) INSERT módulos…");
  await post("modules", MODULES.map(m => ({ id: MOD(m.n), course_id: COURSE, titulo: m.titulo, ordem: m.n })));

  const ordByMod = {};
  let nLessons=0, nQuiz=0, nQ=0, nOpt=0, nSim=0;
  for (let idx=0; idx<LAYOUT.length; idx++) {
    const item = LAYOUT[idx];
    const n = idx+1;
    const les = byFrag[item.frag];
    ordByMod[item.mod] = (ordByMod[item.mod]||0)+1;
    const ordem = ordByMod[item.mod];
    const lid = lidHex(n);
    const isPreview = item.mod===1 && ordem===1;
    await post("lessons", [{
      id: lid, module_id: MOD(item.mod), titulo: les.titulo, tipo: "texto",
      conteudo_rico: readFrag(les.fragment), duracao_min: les.dur||16, ordem,
      tem_quiz: !!les.quiz, preview_gratis: isPreview,
    }]); nLessons++;
    if (les.quiz) {
      const qid = qidHex(n);
      await post("quizzes", [{ id: qid, lesson_id: lid, titulo: les.quiz.titulo }]); nQuiz++;
      const questions = [], options = [];
      les.quiz.questoes.forEach((qq, j) => {
        const qqid = qqHex(n, j+1);
        questions.push({ id: qqid, quiz_id: qid, texto: qq.texto, explicacao: qq.explicacao, ordem: j+1, pontos: 1 });
        qq.opcoes.forEach(([t,c],k) => options.push({ question_id: qqid, texto: t, correta: c, ordem: k+1 }));
      });
      await post("quiz_questions", questions); nQ += questions.length;
      await post("quiz_options", options); nOpt += options.length;
    }
    if (les.sim) {
      const roteiro = { titulo: les.sim.titulo,
        metadata: { titulo_aula: les.sim.titulo, total_cenas: 1, duracao_total: 0, abordagem_didatica: "Simulador interativo — pratique movendo os controles" },
        cenas: [{ numero:1, titulo: les.sim.titulo, modo:"widget", narracao: les.sim.narracao||"", explicacao_texto: les.sim.narracao||"", destaques: les.sim.destaques||[] }] };
      await post("ai_animations", [{ lesson_id: lid, tipo:"interactive", status:"ready", model:"handcrafted-interactive", roteiro, urls:[{ html: readSim(les.sim.file) }] }]); nSim++;
    }
    console.log(`   aula ${n} [M${item.mod}.${ordem}] ok — ${les.titulo.slice(0,40)}`);
  }
  console.log(`\nDONE: ${MODULES.length} módulos, ${nLessons} aulas, ${nQuiz} quizzes, ${nQ} questões, ${nOpt} opções, ${nSim} simuladores.`);
})().catch(e => { console.error("FALHOU:", e.message); process.exit(1); });
