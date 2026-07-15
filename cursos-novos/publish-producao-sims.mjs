// Republica APENAS o HTML dos simuladores de PRODUÇÃO já no ar (UPDATE-only).
// Não mexe em curso, módulo, aula, quiz nem em `ativo`. Use depois de editar um
// arquivo em /simuladores/producao* — o arquivo é só fonte; a produção lê do banco.
// Uso: node cursos-novos/publish-producao-sims.mjs [--dry] [filtro]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LAYOUT as L_PLENO }  from "./pleno-producao/build.mjs";
import { LAYOUT as L_BASICO, A as A_BASICO } from "./producao-basico-pro/build.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const SIM_DIR = path.resolve(HERE, "../simuladores");
const DRY = process.argv.includes("--dry");
const FILTRO = process.argv.slice(2).filter(a=>!a.startsWith("--"))[0] || "";

const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/8fd20cdc-9ebc-46ef-af35-7d39227ac99c/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(m,p,b,x={}){ const r=await fetch(REST+p,{method:m,headers:{...H,...x},body:b?JSON.stringify(b):undefined});
  const t=await r.text(); if(!r.ok) throw new Error(`${m} ${p} -> ${r.status}: ${t.slice(0,200)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }
const get=p=>req("GET",p), patch=(p,b)=>req("PATCH",p,b,{Prefer:"return=minimal"});

// ⚠️ Este script tinha geradores POSICIONAIS aqui — inclusive `72100000-*`, que é a faixa de
// AULA do **Pleno — Vídeo**. Ou seja: um `--filtro` errado publicaria simulador de produção
// dentro de aula do vídeo. Removidos. O lesson_id vem EXPLÍCITO do LAYOUT (faixa do cartório).

// resolve lesson_id de cada item com simulador
const alvos = [];
// Pleno: o id é explícito no LAYOUT.
L_PLENO.forEach(it=>{ if(it.sim) alvos.push({ lid: it.id, sim: it.sim, tit: it.titulo, curso:"pleno" }); });
// Básico: o LAYOUT não guarda id — o apply gera com A(modulo, ordem-dentro-do-modulo).
// Reproduzimos a MESMA conta aqui. Se divergir, publicaríamos na aula errada.
{
  const ord = {};
  for (const it of L_BASICO) {
    ord[it.mod] = (ord[it.mod] || 0) + 1;
    if (it.sim) alvos.push({ lid: A_BASICO(it.mod, ord[it.mod]), sim: it.sim, tit: it.titulo, curso: "basico" });
  }
}

// LEGADO: os 14 simuladores `interactive-game-smu` do pleno (gerados em 01/07). Não têm entrada
// no LAYOUT — viviam SÓ no banco, sem fonte. Exportados para simuladores/producao-legado/ para
// virarem fonte versionada e receberem a correção de celular (14/14 vazavam ou tinham alvo de
// toque < 34px). O _MAPA.json amarra arquivo -> lesson_id.
const MAPA_LEGADO = path.resolve(SIM_DIR, "producao-legado/_MAPA.json");
if (fs.existsSync(MAPA_LEGADO)) {
  for (const x of JSON.parse(fs.readFileSync(MAPA_LEGADO, "utf8")))
    alvos.push({ lid: x.lesson_id, sim: `producao-legado/${x.arquivo}`, tit: x.titulo, curso: "pleno-legado" });
}

(async()=>{
  const lista = alvos.filter(a=>!FILTRO || a.sim.includes(FILTRO));
  console.log(`== Republicar simuladores de produção ${DRY?"(DRY)":""} ${FILTRO?`· filtro "${FILTRO}"`:""} ==`);
  let up=0, same=0, miss=0;
  // TRAVA: a aula-alvo tem que ser de um dos DOIS cursos de produção. Sem isto, um id errado
  // aqui publica simulador de produção dentro da aula de outro curso — e ninguém percebe.
  const CURSOS_OK = new Set(["f82b5aeb-95fd-4212-a067-4bec55c0fb6d",   // pleno-produtor
                             "1a9c9747-23be-4a9b-b961-53e311eaaa02"]); // producao-basico
  for (const a of lista){
    const html = fs.readFileSync(path.join(SIM_DIR, a.sim), "utf8");
    const dono = await get(`/lessons?id=eq.${a.lid}&select=titulo,modules(course_id)`);
    if(!dono.length){ miss++; console.log(`   AULA NÃO EXISTE: ${a.sim} (lesson ${a.lid})`); continue; }
    const cid = dono[0].modules?.course_id;
    if(!CURSOS_OK.has(cid)) throw new Error(
      `ABORTADO: a aula ${a.lid} ("${dono[0].titulo}") pertence ao curso ${cid}, que NÃO é de produção. ` +
      `Publicar aqui sobrescreveria o simulador de outro curso.`);
    const cur = await get(`/ai_animations?lesson_id=eq.${a.lid}&tipo=eq.interactive&select=id,urls`);
    if(!cur.length){ miss++; console.log(`   SEM SIM NO BANCO: ${a.sim} (lesson ${a.lid})`); continue; }
    if(cur[0].urls?.[0]?.html === html){ same++; console.log(`   =  ${a.sim}`); continue; }
    if(!DRY) await patch(`/ai_animations?id=eq.${cur[0].id}`, { urls:[{ html }], updated_at:new Date().toISOString() });
    up++; console.log(`   ${DRY?"→":"✓"}  ${a.sim}  (${(html.length/1024).toFixed(0)}KB)  ${a.tit.slice(0,36)}`);
  }
  console.log(`\n${lista.length} simuladores: ${up} ${DRY?"a atualizar":"atualizados"}, ${same} já iguais, ${miss} ausentes.`);
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
