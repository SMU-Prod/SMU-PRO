// ============================================================================
//  AUDITOR DO BANCO — rode ANTES e DEPOIS de qualquer apply de curso.
//  node cursos-novos/auditar-banco.mjs
//  Sai com código 1 se achar problema — dá para usar em pre-commit/CI.
// ============================================================================
//
//  POR QUE: em 15/07/2026 um `apply` roubou o Módulo 8 do Pleno — Vídeo por colisão
//  de UUID, e ninguém teria notado sem auditoria. Este script procura, no banco
//  INTEIRO, os erros que um curso comete no outro:
//    1. prefixo de id usado por mais de um curso  (a colisão que causou o incidente)
//    2. id fora da faixa registrada em _REGISTRO-IDS.mjs
//    3. módulo/aula órfão
//    4. módulo vazio (resíduo de troca de esquema de id — o aluno vê módulo duplicado)
//    5. ordem de módulo duplicada dentro do mesmo curso
//    6. total_aulas do curso divergindo da contagem real
//
import fs from "node:fs";
import { REGISTRO, donoDoId } from "./_REGISTRO-IDS.mjs";

const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/8fd20cdc-9ebc-46ef-af35-7d39227ac99c/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}` };
const g = async p => JSON.parse(await (await fetch(REST+p,{headers:H})).text());

// ⚠️ NÃO filtre por miolo de uuid. A 1ª versão disto usava /^[0-9a-f]{8}-0000-4000-9000-/ e
// ficava CEGA para luz (miolo b551-4c00), som (b551-4c00), dj (57d1-4d00) e pleno-som
// (5011-4a00) — auditava 7 prefixos e reportava "45 cursos limpos". Falsa confiança.
// O que define id gerenciado é o PREFIXO estar no cartório, não o miolo.
const PREFIXOS = new Map();   // prefixo(8 hex) -> { chave, curso }
for (const [chave, r] of Object.entries(REGISTRO)) {
  for (const p of [r.mod, r.aula]) if (p && !PREFIXOS.has(p)) PREFIXOS.set(p, { chave, curso: r.curso || chave });
}
const gerenciado = (id) => PREFIXOS.get(String(id).slice(0, 8)) || null;
const problemas = [];
const P = (grave, msg) => problemas.push({ grave, msg });

const courses = await g(`/courses?select=id,slug,titulo,total_aulas&order=slug`);
const mods    = await g(`/modules?select=id,course_id,titulo,ordem&limit=3000`);
const lessons = await g(`/lessons?select=id,module_id,titulo&limit=5000`);
const slugDe  = Object.fromEntries(courses.map(c=>[c.id,c.slug]));
const modDe   = Object.fromEntries(mods.map(m=>[m.id,m]));
console.log(`auditando: ${courses.length} cursos · ${mods.length} módulos · ${lessons.length} aulas\n`);

// ---- 1) prefixo usado por mais de um curso (a colisão que causou o incidente) ----
// Detecta SEM depender do cartório: prefixo que se repete = id feito à mão (uuid aleatório
// não repete prefixo). Assim pega curso novo que ninguém registrou ainda.
const porPrefixo = {};
const anota = (id, slug) => { if(!slug) return;
  (porPrefixo[String(id).slice(0,8)] ||= { ids:new Set(), cursos:new Set() });
  porPrefixo[id.slice(0,8)].ids.add(id); porPrefixo[id.slice(0,8)].cursos.add(slug); };
mods.forEach(m=>anota(m.id, slugDe[m.course_id]));
lessons.forEach(l=>anota(l.id, slugDe[modDe[l.module_id]?.course_id]));
let nMao=0;
for (const [p,c] of Object.entries(porPrefixo)){
  if(c.ids.size < 2) continue;                     // 1 id só: uuid aleatório, seguro
  nMao++;
  if(c.cursos.size > 1)
    P(true, `prefixo "${p}-*" usado por ${c.cursos.size} CURSOS: ${[...c.cursos].join(", ")} — um vai comer o outro`);
  if(!gerenciado(p+"-") && !PREFIXOS.has(p))
    P(false, `prefixo "${p}-*" (${c.ids.size} ids, curso ${[...c.cursos][0]}) não está no cartório — registre-o`);
}
console.log(`prefixos feitos à mão: ${nMao} · registrados no cartório: ${PREFIXOS.size}
`);

// ---- 2) id sentado no curso errado ----
// Compara com o campo `curso` do cartório (a CHAVE mente: "pleno-dj" -> curso "dj",
// "som-basico" -> curso "som-basico-formacao"). Comparar com a chave dá falso positivo.
const confereDono = (id, meu, rotulo, titulo) => {
  const g = gerenciado(id); if(!g || !meu) return;
  if(g.curso !== meu)
    P(true, `${rotulo} "${titulo?.slice(0,38)}" está no curso "${meu}" mas usa a faixa de "${g.curso}" (cartório: ${g.chave})`);
};
mods.forEach(m=>confereDono(m.id, slugDe[m.course_id], "módulo", m.titulo));
lessons.forEach(l=>confereDono(l.id, slugDe[modDe[l.module_id]?.course_id], "aula", l.titulo));

// ---- 3) órfãos ----
for (const m of mods) if(!slugDe[m.course_id]) P(true, `módulo órfão (curso inexistente): ${m.id}`);
for (const l of lessons) if(!modDe[l.module_id]) P(true, `aula órfã (módulo inexistente): ${l.id}`);

// ---- 4) módulo vazio (só cobra dos cursos registrados — o resto é legado de outra gente) ----
const registrados = new Set(Object.values(REGISTRO).map(r=>r.mod));
const comAula = new Set(lessons.map(l=>l.module_id));
for (const m of mods){
  if(comAula.has(m.id)) continue;
  const meu = slugDe[m.course_id];
  if(gerenciado(m.id))
    P(true, `módulo VAZIO num curso registrado — o aluno vê módulo duplicado: ${meu} · M${m.ordem} "${m.titulo?.slice(0,40)}"`);
  else
    P(false, `módulo vazio (legado, fora do registro): ${meu} · M${m.ordem} "${m.titulo?.slice(0,36)}"`);
}

// ---- 5) ordem duplicada ----
const vistos = {};
for (const m of mods){
  const k = m.course_id+"|"+m.ordem;
  if(vistos[k]) P(false, `ordem de módulo repetida em ${slugDe[m.course_id]}: M${m.ordem} = "${vistos[k]}" e "${m.titulo?.slice(0,30)}"`);
  else vistos[k]=m.titulo;
}

// ---- 6) total_aulas × real ----
const contaPorCurso = {};
for (const m of mods) contaPorCurso[m.course_id] = (contaPorCurso[m.course_id]||0) + lessons.filter(l=>l.module_id===m.id).length;
for (const c of courses){
  const real = contaPorCurso[c.id]||0;
  if(real !== c.total_aulas) P(false, `${c.slug}: total_aulas declara ${c.total_aulas}, real ${real}`);
}

// ---- relatório ----
const graves = problemas.filter(p=>p.grave), leves = problemas.filter(p=>!p.grave);
if(graves.length){ console.log(`🔴 ${graves.length} GRAVE(S) — corrija antes de publicar:`); graves.forEach(p=>console.log("   • "+p.msg)); console.log(); }
else console.log("✅ nenhum problema grave: nenhum prefixo cruza cursos, nenhum id fora de faixa, nenhum órfão.\n");
if(leves.length){ console.log(`⚪ ${leves.length} aviso(s) (legado de outros cursos, fora do escopo do registro):`);
  leves.slice(0,6).forEach(p=>console.log("   · "+p.msg));
  if(leves.length>6) console.log(`   · … e mais ${leves.length-6}`); }
process.exit(graves.length ? 1 : 0);
