// Revisão de conteúdo 05/08/2026 (nível profissionalizante) — VÍDEO BÁSICO.
// SÓ PATCH de lessons.conteudo_rico a partir dos fragments (via readFrag do build.mjs).
// Nenhum id criado/apagado; progresso de aluno intacto.
// Uso: node cursos-novos/video-basico-pro/apply-conteudo-0508.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { LAYOUT, readFrag } from "./build.mjs";

const DRY = process.argv.includes("--dry");
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }

const LID = n => `71100000-0000-4000-9000-0000000000${String(n).padStart(2,"0")}`;

(async()=>{
  console.log(`== Conteúdo VÍDEO BÁSICO 05/08 ${DRY?"(DRY)":""} ==`);
  for(const it of LAYOUT){
    const html = readFrag(it.frag);
    const lid = LID(it.n);
    if(DRY){ console.log(`  ${it.frag}: ${html.length}B -> ${lid.slice(-4)}`); continue; }
    const rows = await req("GET", `/lessons?id=eq.${lid}&select=id,titulo,conteudo_rico`);
    if(!rows.length){ console.log(`  ! aula ${lid} NÃO EXISTE — pulei (${it.frag})`); continue; }
    const antes = (rows[0].conteudo_rico||"").length;
    await req("PATCH", `/lessons?id=eq.${lid}`, { conteudo_rico: html }, {Prefer:"return=minimal"});
    console.log(`  ${it.titulo.slice(0,52)}: ${antes}B -> ${html.length}B`);
  }
  console.log("DONE.");
  await new Promise(r=>setTimeout(r,250));
})().catch(async e=>{ console.error("FALHOU:", e.message); await new Promise(r=>setTimeout(r,250)); process.exit(1); });
