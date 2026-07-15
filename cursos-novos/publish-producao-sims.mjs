// Republica APENAS o HTML dos simuladores de PRODUÇÃO já no ar (UPDATE-only).
// Não mexe em curso, módulo, aula, quiz nem em `ativo`. Use depois de editar um
// arquivo em /simuladores/producao* — o arquivo é só fonte; a produção lê do banco.
// Uso: node cursos-novos/publish-producao-sims.mjs [--dry] [filtro]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LAYOUT as L_PLENO }  from "./pleno-producao/build.mjs";
import { LAYOUT as L_BASICO } from "./producao-basico-pro/build.mjs";

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

const BASICO_LID = n => `7b110000-0000-4000-9000-0000${String(n).padStart(8,"0")}`;
const PLENO_LID  = n => `72100000-0000-4000-9000-0000${String(n).padStart(8,"0")}`;

// resolve lesson_id de cada item com simulador
const alvos = [];
L_PLENO.forEach((it,i)=>{ if(it.sim) alvos.push({ lid: it.id || PLENO_LID(i+1), sim: it.sim, tit: it.titulo, curso:"pleno"  }); });
L_BASICO.forEach((it,i)=>{ if(it.sim) alvos.push({ lid: BASICO_LID(i+1),        sim: it.sim, tit: it.titulo, curso:"basico" }); });

(async()=>{
  const lista = alvos.filter(a=>!FILTRO || a.sim.includes(FILTRO));
  console.log(`== Republicar simuladores de produção ${DRY?"(DRY)":""} ${FILTRO?`· filtro "${FILTRO}"`:""} ==`);
  let up=0, same=0, miss=0;
  for (const a of lista){
    const html = fs.readFileSync(path.join(SIM_DIR, a.sim), "utf8");
    const cur = await get(`/ai_animations?lesson_id=eq.${a.lid}&tipo=eq.interactive&select=id,urls`);
    if(!cur.length){ miss++; console.log(`   SEM SIM NO BANCO: ${a.sim} (lesson ${a.lid})`); continue; }
    if(cur[0].urls?.[0]?.html === html){ same++; console.log(`   =  ${a.sim}`); continue; }
    if(!DRY) await patch(`/ai_animations?id=eq.${cur[0].id}`, { urls:[{ html }], updated_at:new Date().toISOString() });
    up++; console.log(`   ${DRY?"→":"✓"}  ${a.sim}  (${(html.length/1024).toFixed(0)}KB)  ${a.tit.slice(0,36)}`);
  }
  console.log(`\n${lista.length} simuladores: ${up} ${DRY?"a atualizar":"atualizados"}, ${same} já iguais, ${miss} ausentes.`);
})().catch(e=>{ console.error("FALHOU:", e.message); process.exit(1); });
