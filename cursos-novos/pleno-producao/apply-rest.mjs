// Aplica a REESTRUTURAÇÃO do PLENO — PRODUTOR (f82b5aeb) via REST (service key).
// IN-PLACE: NÃO deleta módulos nem aulas existentes -> progresso e matrículas ficam intactos.
//   1) backup completo
//   2) POST dos módulos novos (M8, M9) + PATCH dos títulos dos 7 existentes
//   3) PATCH das 24 aulas existentes (module_id, ordem, titulo, duracao)
//   4) POST das 5 aulas novas (+quiz)
//   5) UPSERT dos simuladores em ai_animations (apaga o anterior da aula e recria)
//   6) PATCH do curso (total_aulas, descrição, carga horária)
// Uso: node cursos-novos/pleno-producao/apply-rest.mjs [--dry]
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
const get   = (p)     => req("GET", p);
const post  = (t,b)   => req("POST","/"+t,b,{Prefer:"return=minimal"});
const patch = (p,b)   => req("PATCH",p,b,{Prefer:"return=minimal"});
const del   = (p)     => req("DELETE",p,null,{Prefer:"return=minimal"});

// ⚠️ NADA de id derivado de POSIÇÃO. Todo id de aula vem explícito do LAYOUT.
// O quiz é chaveado pela AULA (delete by lesson_id), não por índice: inserir um módulo
// no meio do curso não pode renomear/duplicar nada.
// As questões usam id gerado pelo banco (não precisam de id estável).

const modById = Object.fromEntries(MODULES.map(m=>[m.n,m]));

(async()=>{
  console.log(`== Pleno — Produtor · reestruturação IN-PLACE ${DRY?"(DRY)":""} ==`);

  // ---------- 1) BACKUP ----------
  const before = await get(`/modules?course_id=eq.${COURSE}&select=*,lessons(*)`);
  fs.writeFileSync(path.join(HERE,"backup-antes.json"), JSON.stringify(before,null,2));
  const nBefore = before.reduce((a,m)=>a+(m.lessons?.length||0),0);
  console.log(`1) Backup: ${before.length} módulos, ${nBefore} aulas -> backup-antes.json`);

  // Backup dos simuladores existentes: o passo 5 faz DELETE+POST em ai_animations e
  // SOBRESCREVE o simulador que já estiver na aula. Sem este backup, o anterior é perdido.
  const allLessonIds = before.flatMap(m=>(m.lessons||[]).map(l=>l.id));
  if (allLessonIds.length) {
    const anims = await get(`/ai_animations?lesson_id=in.(${allLessonIds.join(",")})&select=*`);
    fs.writeFileSync(path.join(HERE,"backup-antes-animations.json"), JSON.stringify(anims,null,2));
    const toReplace = LAYOUT.filter(x=>x.sim && x.id && anims.some(a=>a.lesson_id===x.id && a.tipo==="interactive"));
    console.log(`   Backup de simuladores: ${anims.length} -> backup-antes-animations.json`);
    if (toReplace.length) console.log(`   ⚠️ ${toReplace.length} simulador(es) existente(s) serão SUBSTITUÍDOS: ${toReplace.map(x=>x.titulo.slice(0,28)).join(" | ")}`);
  }

  // sanidade: toda aula com id declarado no LAYOUT existe mesmo?
  // Sanidade. Toda aula do LAYOUT tem id explícito; as `novo:true` podem ainda não existir.
  const semId = LAYOUT.filter(x=>!x.id);
  if (semId.length) throw new Error(`Aula sem id explícito no LAYOUT (id posicional é proibido): ${semId.map(x=>x.titulo).join(", ")}`);
  const dups = LAYOUT.map(x=>x.id).filter((v,i,a)=>a.indexOf(v)!==i);
  if (dups.length) throw new Error(`Id de aula repetido no LAYOUT: ${[...new Set(dups)].join(", ")}`);

  const existingIds = new Set(before.flatMap(m=>(m.lessons||[]).map(l=>l.id)));
  const preexist = LAYOUT.filter(x=>!x.novo);
  const missing = preexist.filter(x=>!existingIds.has(x.id));
  if (missing.length) throw new Error(`Aulas pré-existentes declaradas que sumiram do banco: ${missing.map(m=>m.titulo).join(", ")}`);
  const orphans = [...existingIds].filter(id=>!LAYOUT.some(d=>d.id===id));
  if (orphans.length) throw new Error(`Aulas no banco que o LAYOUT não cobre (ficariam órfãs de módulo): ${orphans.join(", ")}`);
  const criar = LAYOUT.filter(x=>x.novo && !existingIds.has(x.id)).length;
  console.log(`   sanidade: ${LAYOUT.length} aulas no LAYOUT, ${preexist.length} pré-existentes mapeadas, ${criar} a criar, 0 órfãs.`);

  if (DRY) {
    const ordBy={};
    for (const it of LAYOUT){ ordBy[it.mod]=(ordBy[it.mod]||0)+1;
      const tag = !it.novo ? "[keep]" : (existingIds.has(it.id) ? "[upd ]" : "[NOVA]");
      console.log(`   M${it.mod}.${ordBy[it.mod]} ${tag} ${it.titulo}${it.sim?"  +sim":""}`); }
    console.log(`DRY: ${LAYOUT.length} aulas (${preexist.length} preservadas, ${criar} novas), ${LAYOUT.filter(x=>x.sim).length} simuladores. Nada foi escrito.`);
    return;
  }

  // ---------- 2) MÓDULOS ----------
  // Trava anti-sequestro: um id de módulo "novo" que já exista e pertença a OUTRO curso
  // significa colisão de UUID. Nunca faça PATCH nele — isso rouba o módulo do outro curso
  // (foi exatamente o que 72d00000-*-08 fez com o Módulo 8 do Pleno — Vídeo).
  for (const m of MODULES) {
    const ja = await get(`/modules?id=eq.${m.id}&select=id,course_id,titulo`);
    if (ja.length && ja[0].course_id !== COURSE) {
      throw new Error(`COLISÃO DE ID: o módulo ${m.id} ("${ja[0].titulo}") pertence ao curso ${ja[0].course_id}. `+
                      `Escolha outro id para "${m.titulo}" em build.mjs — não faça PATCH neste.`);
    }
    if (ja.length) await patch(`/modules?id=eq.${m.id}`, { course_id:COURSE, titulo:m.titulo, ordem:m.n });
    else           await post("modules", [{ id:m.id, course_id:COURSE, titulo:m.titulo, ordem:m.n }]);
  }
  console.log(`2) Módulos: ${MODULES.length} (${MODULES.filter(m=>m.novo).length} novos).`);

  // ---------- 3/4) AULAS ----------
  const ordByMod={}; let nKeep=0,nNew=0,nQ=0,nSim=0;
  for (const it of LAYOUT){
    ordByMod[it.mod]=(ordByMod[it.mod]||0)+1; const ordem=ordByMod[it.mod];
    const mod = modById[it.mod];
    const lid = it.id;                       // sempre explícito — jamais posicional

    if (!it.novo) {
      // aula pré-existente: só remaneja. conteudo_rico e id intactos (progresso preservado).
      await patch(`/lessons?id=eq.${lid}`, { module_id:mod.id, titulo:it.titulo, ordem, duracao_min:it.dur });
      nKeep++;
    } else {
      // aula deste projeto: cria ou atualiza pelo id explícito (idempotente)
      const ja = await get(`/lessons?id=eq.${lid}&select=id`);
      const row = { id:lid, module_id:mod.id, titulo:it.titulo, tipo:"texto",
                    conteudo_rico:readFrag(it.frag), duracao_min:it.dur, ordem,
                    tem_quiz:true, preview_gratis:false };
      if (ja.length) await patch(`/lessons?id=eq.${lid}`, row);
      else           await post("lessons", [row]);
      nNew++;

      const quiz = readQuiz(it.frag);
      if (quiz) {
        // Chaveado pela AULA, não por índice: apaga o quiz DESTA aula e recria.
        // O id do quiz e das questões vem do banco — nada posicional para desalinhar.
        await del(`/quizzes?lesson_id=eq.${lid}`);       // cascata nas questões/opções
        const [q] = await req("POST","/quizzes",[{ lesson_id:lid, titulo:quiz.titulo }],
                              {Prefer:"return=representation"});
        for (let j=0;j<quiz.questoes.length;j++){
          const qq = quiz.questoes[j];
          const [qrow] = await req("POST","/quiz_questions",
            [{ quiz_id:q.id, texto:qq.texto, explicacao:qq.explicacao||"", ordem:j+1, pontos:1 }],
            {Prefer:"return=representation"});
          await post("quiz_options", qq.opcoes.map(([txt,ok],k)=>
            ({ question_id:qrow.id, texto:txt, correta:!!ok, ordem:k+1 })));
        }
        nQ++;
      }
    }

    // ---------- 5) SIMULADOR ----------
    if (it.sim) {
      const html = readSim(it.sim);
      const roteiro = { titulo: it.titulo,
        metadata:{ titulo_aula: it.titulo, total_cenas:1, duracao_total:0,
                   abordagem_didatica:"Simulador interativo — exercício avaliado" },
        cenas:[{ numero:1, titulo:it.titulo, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] };
      await del(`/ai_animations?lesson_id=eq.${lid}&tipo=eq.interactive`);
      await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready",
        model:"handcrafted-interactive", custo_usd:0, roteiro, urls:[{ html }] }]);
      nSim++;
    }
    console.log(`   M${it.mod}.${ordem} ${it.novo?"NOVA":"keep"} ${it.titulo.slice(0,46)}${it.sim?" +sim":""}`);
  }

  // ---------- 6) CURSO ----------
  const carga = LAYOUT.reduce((a,x)=>a+x.dur,0);
  await patch(`/courses?id=eq.${COURSE}`, {
    titulo: "Pleno — Produtor",
    descricao_curta: "Formação completa do produtor executivo de eventos: briefing e viabilidade, contratos e ECAD, os três riders (técnico, camarim e transporte), planilhas e precificação, cronogramas e run of show, equipe e fornecedores, logística e credenciamento, comunicação e organização em nuvem, e o fechamento financeiro do show — com 15 simuladores de exercício, do escritório ao palco.",
    total_aulas: LAYOUT.length,
    carga_horaria: carga,
  });
  console.log(`\nDONE: ${MODULES.length} módulos, ${LAYOUT.length} aulas (${nKeep} preservadas, ${nNew} novas), ${nQ} quizzes novos, ${nSim} simuladores. Carga: ${carga} min.`);
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
