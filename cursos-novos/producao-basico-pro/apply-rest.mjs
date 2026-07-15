// Aplica a RECONSTRUÇÃO do PRODUÇÃO — BÁSICO (1a9c9747) via REST (service key).
// O curso tinha 1 módulo com 2 aulas-esqueleto -> vira 3 módulos / 12 aulas / 8 simuladores.
// Faz backup (módulos+aulas+simuladores), remove os módulos antigos e recria a estrutura.
// Uso: node cursos-novos/producao-basico-pro/apply-rest.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { COURSE, MODULES, LAYOUT, readFrag, readQuiz, readSim } from "./build.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/8fd20cdc-9ebc-46ef-af35-7d39227ac99c/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };

async function req(method, p, body, extra={}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body?JSON.stringify(body):undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`);
  return t ? (t[0]==='['||t[0]==='{'?JSON.parse(t):t) : null;
}
const get   = (p)   => req("GET", p);
const post  = (t,b) => req("POST","/"+t,b,{Prefer:"return=minimal"});
const patch = (p,b) => req("PATCH",p,b,{Prefer:"return=minimal"});
const del   = (p)   => req("DELETE",p,null,{Prefer:"return=minimal"});

const LID = n => `7b110000-0000-4000-9000-0000${String(n).padStart(8,"0")}`;
const QID = n => `7b120000-0000-4000-9000-0000${String(n).padStart(8,"0")}`;
const QQID= (n,j)=>`7b130000-0000-4000-9000-${String(n).padStart(4,"0")}${String(j).padStart(8,"0")}`;

const modById = Object.fromEntries(MODULES.map(m=>[m.n,m]));

(async()=>{
  console.log(`== Produção — Básico · reconstrução ${DRY?"(DRY)":""} ==`);

  // ---------- 1) BACKUP ----------
  const before = await get(`/modules?course_id=eq.${COURSE}&select=*,lessons(*)`);
  fs.writeFileSync(path.join(HERE,"backup-antes.json"), JSON.stringify(before,null,2));
  const oldIds = before.flatMap(m=>(m.lessons||[]).map(l=>l.id));
  console.log(`1) Backup: ${before.length} módulos, ${oldIds.length} aulas -> backup-antes.json`);
  if (oldIds.length) {
    const anims = await get(`/ai_animations?lesson_id=in.(${oldIds.join(",")})&select=*`);
    fs.writeFileSync(path.join(HERE,"backup-antes-animations.json"), JSON.stringify(anims,null,2));
    console.log(`   Backup de simuladores: ${anims.length} -> backup-antes-animations.json`);
  }

  // Trava anti-sequestro: nenhum id de módulo meu pode pertencer a outro curso.
  for (const m of MODULES) {
    const ja = await get(`/modules?id=eq.${m.id}&select=id,course_id,titulo`);
    if (ja.length && ja[0].course_id !== COURSE)
      throw new Error(`COLISÃO DE ID: módulo ${m.id} ("${ja[0].titulo}") pertence ao curso ${ja[0].course_id}. Escolha outro id em build.mjs.`);
  }
  console.log(`   sanidade: nenhum id de módulo colide com outro curso.`);

  if (DRY) {
    const ordBy={};
    for (const it of LAYOUT){ ordBy[it.mod]=(ordBy[it.mod]||0)+1;
      console.log(`   M${it.mod}.${ordBy[it.mod]} ${it.titulo}${it.sim?"  +sim":""}`); }
    console.log(`DRY: ${MODULES.length} módulos, ${LAYOUT.length} aulas, ${LAYOUT.filter(x=>x.sim).length} simuladores. Nada foi escrito.`);
    return;
  }

  // ---------- 2) LIMPA O ANTIGO ----------
  await del(`/modules?course_id=eq.${COURSE}`);   // cascata: aulas antigas + suas animações
  console.log(`2) ${before.length} módulo(s) antigo(s) removido(s) (cascata em ${oldIds.length} aulas-esqueleto).`);

  // ---------- 3) MÓDULOS ----------
  await post("modules", MODULES.map(m=>({ id:m.id, course_id:COURSE, titulo:m.titulo, ordem:m.n })));
  console.log(`3) ${MODULES.length} módulos criados.`);

  // ---------- 4) AULAS + QUIZ + SIM ----------
  const ordByMod={}; let nL=0,nQ=0,nS=0;
  for (let i=0;i<LAYOUT.length;i++){
    const it=LAYOUT[i]; const n=i+1;
    ordByMod[it.mod]=(ordByMod[it.mod]||0)+1; const ordem=ordByMod[it.mod];
    const lid=LID(n);
    const preview = (it.mod===1 && ordem===1);   // 1ª aula liberada como amostra

    await post("lessons", [{ id:lid, module_id:modById[it.mod].id, titulo:it.titulo, tipo:"texto",
      conteudo_rico:readFrag(it.frag), duracao_min:it.dur, ordem, tem_quiz:true, preview_gratis:preview }]);
    nL++;

    const quiz=readQuiz(it.frag);
    if (quiz){
      const qid=QID(n);
      await post("quizzes",[{ id:qid, lesson_id:lid, titulo:quiz.titulo }]);
      const questions=[], options=[];
      quiz.questoes.forEach((qq,j)=>{
        const qqid=QQID(n,j+1);
        questions.push({ id:qqid, quiz_id:qid, texto:qq.texto, explicacao:qq.explicacao||"", ordem:j+1, pontos:1 });
        qq.opcoes.forEach(([txt,ok],k)=> options.push({ question_id:qqid, texto:txt, correta:!!ok, ordem:k+1 }));
      });
      await post("quiz_questions", questions);
      await post("quiz_options", options);
      nQ++;
    }

    if (it.sim){
      const html=readSim(it.sim);
      const roteiro={ titulo:it.titulo,
        metadata:{ titulo_aula:it.titulo, total_cenas:1, duracao_total:0,
                   abordagem_didatica:"Simulador interativo — exercício avaliado" },
        cenas:[{ numero:1, titulo:it.titulo, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] };
      await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready",
        model:"handcrafted-interactive", custo_usd:0, roteiro, urls:[{ html }] }]);
      nS++;
    }
    console.log(`   M${it.mod}.${ordem} ${it.titulo.slice(0,46)}${it.sim?" +sim":""}`);
  }

  // ---------- 5) CURSO ----------
  const carga = LAYOUT.reduce((a,x)=>a+x.dur,0);
  await patch(`/courses?id=eq.${COURSE}`, {
    titulo: "Produção — Básico",
    descricao_curta: "A porta de entrada na produção de eventos: o que o produtor faz de verdade (do escritório ao palco), os tipos de evento, quem é quem no organograma, o dia do load-in ao load-out, a primeira conversa com o cliente, rider técnico, camarim e transporte, orçamento, cronograma, logística, comunicação e pós-evento — com 8 simuladores de exercício.",
    total_aulas: LAYOUT.length,
    carga_horaria: carga,
  });
  console.log(`\nDONE: ${MODULES.length} módulos, ${nL} aulas, ${nQ} quizzes, ${nS} simuladores. Carga: ${carga} min.`);
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
