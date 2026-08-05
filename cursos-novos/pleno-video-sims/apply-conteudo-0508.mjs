// Revisão de conteúdo 05/08/2026 — nível faculdade (pedido do dono).
// SÓ PATCH de lessons.conteudo_rico a partir dos fragments deste diretório.
// Não cria nem apaga id nenhum (Regra 5 não é acionada; progresso de aluno intacto).
// Uso: node cursos-novos/pleno-video-sims/apply-conteudo-0508.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { figure } from "./images.mjs";

const DRY = process.argv.includes("--dry");
const HERE = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(HERE, "..", "..");
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }

const readFrag = f => fs.readFileSync(path.join(HERE, f + ".fragment.html"), "utf8")
  .replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi, (_, s) => figure(s));

// fragment -> lesson id (ids das faixas do vídeo + nativos; ver _REGISTRO-IDS.mjs)
const MAPA = [
  // M8 — simuladores profissionais
  ["aula-novastar",   "72100000-0000-4000-9000-000000000b01"],
  ["aula-switcher",   "72100000-0000-4000-9000-000000000b02"],
  ["aula-resolume",   "72100000-0000-4000-9000-000000000b03"],
  // M9 — processadores por marca
  ["marca-novastar",  "73100000-0000-4000-9000-000000000c01"],
  ["marca-colorlight","73100000-0000-4000-9000-000000000c02"],
  ["marca-brompton",  "73100000-0000-4000-9000-000000000c03"],
  // M10 — dia a dia
  ["aula-ligacao",    "74100000-0000-4000-9000-000000000d01"],
  ["aula-mapeamento", "74100000-0000-4000-9000-000000000d02"],
  // M11 — switchers por marca
  ["sw-atem",         "75100000-0000-4000-9000-000000000e01"],
  ["sw-roland",       "75100000-0000-4000-9000-000000000e02"],
  ["sw-analogway",    "75100000-0000-4000-9000-000000000e03"],
  // Nativas fracas reescritas (rev2-*) — ids nativos, só PATCH
  ["rev2-funcao",            "86afa2ea-8e43-4458-96fc-7a12b6b6dec1"], // M1.1
  ["rev2-anatomia-telao",    "f62fc874-4863-4615-9181-70c5897a6998"], // M3.2
  ["rev2-switchers-pratica", "015f5acc-0d96-43ca-920c-1184115b904e"], // M4.1
  ["rev2-resolume-arena",    "54cd80d5-8c82-4c15-99a1-e411c851ec62"], // M4.2
  ["rev2-video-mapping",     "3fcd525f-7bb3-4a36-b52c-3806a5702d90"], // M5.1
  ["rev2-edicao-eventos",    "fb55c65c-c367-48c1-8961-74cd0f6c8062"], // M5.2
  // M7 — catálogo de equipamentos do mercado (rev2-m7-*)
  ["rev2-m7-switchers",        "8cd7ef59-d8dc-41c9-8c4e-2dc90d04f317"], // 7.1
  ["rev2-m7-media-servers",    "13e8692d-5ad5-4b97-9235-59d47d847911"], // 7.2
  ["rev2-m7-led-processadores","d7bafede-fd0f-44fe-be6f-c0bcbcc89874"], // 7.3
  ["rev2-m7-projecao",         "200cf42a-7ac2-4138-81b0-1e97e3b5d526"], // 7.4
  ["rev2-m7-conexoes",         "eeb3d3a7-838f-4662-abdf-e3e42083ec25"], // 7.6
];

(async()=>{
  console.log(`== Conteúdo VÍDEO 05/08 ${DRY?"(DRY)":""} ==`);
  for(const [frag, lid] of MAPA){
    const html = readFrag(frag);
    if(DRY){ console.log(`  ${frag}: ${html.length}B -> ${lid.slice(0,13)}…`); continue; }
    const rows = await req("GET", `/lessons?id=eq.${lid}&select=id,titulo,conteudo_rico`);
    if(!rows.length){ console.log(`  ! aula ${lid} NÃO EXISTE — pulei (${frag})`); continue; }
    const antes = (rows[0].conteudo_rico||"").length;
    await req("PATCH", `/lessons?id=eq.${lid}`, { conteudo_rico: html }, {Prefer:"return=minimal"});
    console.log(`  ${rows[0].titulo.slice(0,52)}: ${antes}B -> ${html.length}B`);
  }
  console.log("DONE.");
  await new Promise(r=>setTimeout(r,250));
})().catch(async e=>{ console.error("FALHOU:", e.message); await new Promise(r=>setTimeout(r,250)); process.exit(1); });
