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
import path from "node:path";
import { fileURLToPath } from "node:url";
import { REGISTRO, donoDoId } from "./_REGISTRO-IDS.mjs";

// A chave sai de SMU-PRO/.local/svckey (ou da env), igual aos demais scripts.
// ⚠️ NÃO aponte para scratchpad de sessão: a pasta morre com a sessão e o auditor
// passa a dar ENOENT em toda execução — foi exatamente o que aconteceu aqui.
// RAIZ vem do import.meta.url para o script rodar de qualquer cwd (a REGRA 5 manda
// chamá-lo de SMU-PRO/ como `node cursos-novos/auditar-banco.mjs`).
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}` };
// ⚠️ TODO GET passa por aqui e EXIGE array de volta. Não é preciosismo:
// quando a chave está inválida/expirada o PostgREST responde 401 com um OBJETO
// ({message,hint}) — que é JSON perfeitamente válido. Sem esta conferência,
// `JSON.parse` engolia o objeto, `j.length` virava undefined, `undefined < 1000`
// dava false e o gAll NUNCA retornava: laço infinito pedindo Range 0-999,
// 1000-1999, 2000-2999… para sempre, sem imprimir uma linha. O dono via o
// comando "pendurado" e nenhuma mensagem de erro. (comprovado em 29/07/2026)
// Melhor morrer alto com o corpo da resposta do que travar mudo.
const pega = async (p, extra) => {
  const r = await fetch(REST + p, { headers: extra ? { ...H, ...extra } : H });
  const txt = await r.text();
  let j = null;
  try { j = JSON.parse(txt); } catch { /* HTML de proxy/502 cai aqui */ }
  if (!r.ok || !Array.isArray(j)) {
    console.error(`\n🔴 AUDITOR ABORTADO — o banco não respondeu uma lista.`);
    console.error(`   GET ${p}`);
    console.error(`   -> HTTP ${r.status} ${r.statusText}; resposta: ${txt.slice(0, 300)}`);
    if (r.status === 401)
      console.error(`   👉 chave inválida ou expirada: confira a env SUPABASE_SERVICE_KEY ou SMU-PRO/.local/svckey`);
    // ⚠️ NÃO troque isto por `throw`, nem tire a espera. Medido em 29/07/2026 neste
    // Node 24 + Windows: sair (por exceção OU por process.exit) com socket do undici
    // ainda fechando bate numa asserção do libuv (UV_HANDLE_CLOSING), ABORTA com
    // código 127 e ainda imprime lixo em cima da mensagem acima — quebrando o
    // contrato "sai 1" da linha 4. Com a espera curta o socket fecha e sai 1 limpo.
    await new Promise(s => setTimeout(s, 200));
    process.exit(1);
  }
  return j;
};
const g = p => pega(p);
// ⚠️ O REST corta em 1000 linhas por resposta (o `limit=` da URL NÃO passa disso).
// Em 21/07 o banco cruzou 1000 aulas e o auditor ficou cego para o excedente sem avisar.
// gAll pagina por Range até vir página incompleta. Passar do fim da tabela é seguro:
// medido em 29/07, o Supabase devolve 200 com `[]` (NÃO 416), então total múltiplo
// exato de `chunk` também para — a última volta só traz página vazia.
const gAll = async (p, chunk = 1000) => {
  let out = [], off = 0;
  for (;;) {
    const j = await pega(p, { "Range-Unit": "items", Range: `${off}-${off + chunk - 1}` });
    out = out.concat(j);
    if (j.length < chunk) return out;
    off += chunk;
  }
};

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
const mods    = await gAll(`/modules?select=id,course_id,titulo,ordem&order=id`);
const lessons = await gAll(`/lessons?select=id,module_id,titulo&order=id`);
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
