// Inventário READ-ONLY dos cursos de vídeo (video-basico + pleno-video).
// Uso: node cursos-novos/pleno-video-sims/inventario-video.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}` };
async function get(p){ const r=await fetch(REST+p,{headers:H}); const t=await r.text(); if(!r.ok) throw new Error(`GET ${p} -> ${r.status}: ${t.slice(0,200)}`); return JSON.parse(t); }

(async()=>{
  const courses = await get(`/courses?slug=in.(video-basico,pleno-video)&select=id,slug,titulo,total_aulas,categorias`);
  for(const c of courses){
    console.log(`\n===== ${c.slug} (${c.id}) — "${c.titulo}" total_aulas=${c.total_aulas} categorias=${JSON.stringify(c.categorias)}`);
    const mods = await get(`/modules?course_id=eq.${c.id}&select=id,titulo,ordem&order=ordem`);
    for(const m of mods){
      console.log(`\n  M${m.ordem} [${m.id}] ${m.titulo}`);
      const ls = await get(`/lessons?module_id=eq.${m.id}&select=id,titulo,ordem,tipo,duracao_min,tem_quiz,material_links,conteudo_rico&order=ordem`);
      for(const l of ls){
        const len = (l.conteudo_rico||"").length;
        const figs = ((l.conteudo_rico||"").match(/<figure/g)||[]).length;
        const ml = Array.isArray(l.material_links) ? l.material_links.length : (l.material_links ? "?" : 0);
        console.log(`    ${String(m.ordem).padStart(2)}.${l.ordem} [${l.id}] ${l.titulo}`);
        console.log(`         tipo=${l.tipo} html=${len}B figs=${figs} quiz=${l.tem_quiz} links=${ml} dur=${l.duracao_min}`);
      }
      // sims por aula
      const ids = ls.map(l=>l.id);
      if(ids.length){
        const sims = await get(`/ai_animations?lesson_id=in.(${ids.join(",")})&select=lesson_id,tipo,status,model,urls`);
        for(const s of sims){
          const html = s.urls?.[0]?.html || "";
          const l = ls.find(x=>x.id===s.lesson_id);
          console.log(`         SIM em ${String(m.ordem)}.${l?.ordem}: ${s.model} status=${s.status} html=${(html.length/1024).toFixed(1)}KB`);
        }
      }
    }
  }
  await new Promise(r=>setTimeout(r,250));
})().catch(async e=>{ console.error("FALHOU:", e.message); await new Promise(r=>setTimeout(r,250)); process.exit(1); });
