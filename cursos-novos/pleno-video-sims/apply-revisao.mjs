// REVISÃO DE QUALIDADE do PLENO VÍDEO (pedido do dono: "seja mais específico, esta
// aula não está bacana" — 16 de 32 aulas estavam SEM imagem e o texto do PLENO estava
// mais raso (4-5KB) que o do BÁSICO (7-10KB), o que é o inverso do que deveria ser).
//
// O que este script faz:
//   1. Substitui o conteúdo das aulas reescritas em profundidade (arquivos rev-*.fragment.html)
//   2. Insere imagem nas aulas que ficaram sem reescrita mas estavam sem ilustração
// Só mexe em `conteudo_rico` — NÃO apaga aula, quiz nem simulador (sem DELETE em cascata).
// Uso: node cursos-novos/pleno-video-sims/apply-revisao.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { figure, imgUrl } from "./images.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/29547da5-1a58-4f32-b63c-9d3c40871300/scratchpad/.svckey","utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(m,p,b,x={}){ const r=await fetch(REST+p,{method:m,headers:{...H,...x},body:b?JSON.stringify(b):undefined});
  const t=await r.text(); if(!r.ok) throw new Error(`${m} ${p} -> ${r.status}: ${t.slice(0,200)}`);
  return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }

const readRev = slug => fs.readFileSync(path.join(HERE,`rev-${slug}.fragment.html`),"utf8")
  .replace(/\{\{IMG:([a-z0-9\-]+)\}\}/gi,(_,s)=>figure(s));

// Aulas REESCRITAS em profundidade: lesson_id -> arquivo rev-<slug>
const REESCRITAS = [
  ["fe816937-1c38-4c2b-92d2-f03af6cfb138","resolucao-framerate",  "1.2 Resolução/frame rate"],
  ["0d50ba2c-29f5-40a2-809c-7e3467852c18","estacao-trabalho",     "2.1 Estação de trabalho"],
  ["1e38a69a-2351-4d7d-ad41-27f278f9e49e","cabos-conectores",     "2.2 Cabos e conectores ⭐"],
  ["b7a403fa-e75c-4240-8988-bf6949592d06","conversores-scalers",  "2.3 Conversores/scalers"],
  ["afbd3452-6272-4f3c-82b3-acc06ca9e63e","tecnologias-tela",     "3.1 Tecnologias de tela"],
  ["9d5f181a-170a-4593-919d-5a119a3b25d1","projecao-avancada",    "3.3 Projeção avançada"],
  ["9f3894e5-b753-4183-a302-c5374c579115","media-servers",        "4.3 Media servers"],
  ["1659c14b-12d7-40e3-aede-ec54126a8bea","encode-midia",         "6.1 Encode e mídia"],
  ["6ebdfbb2-c6b9-4bd9-b486-03f040b2aa0e","rider-documentacao",   "6.2 Rider e documentação"],
  ["da0574ff-8ddf-4059-85db-b5b005f987c7","cameras-imag",         "7.5 Câmeras e IMAG"],
];

// Aulas que só precisam GANHAR imagem (o texto já estava razoável)
const SO_IMAGEM = [
  ["fb55c65c-c367-48c1-8961-74cd0f6c8062","edicao-timeline",        "5.2 Edição para eventos"],
  ["8cd7ef59-d8dc-41c9-8c4e-2dc90d04f317","switchers-hardware",     "7.1 Switchers por modelo"],
  ["13e8692d-5ad5-4b97-9235-59d47d847911","media-server-rack",      "7.2 Media servers software"],
  ["200cf42a-7ac2-4138-81b0-1e97e3b5d526","projecao-mapping",       "7.4 Projeção laser/mapping"],
  ["73100000-0000-4000-9000-000000000c02","sending-receiving-card", "9.2 Colorlight LEDVISION"],
  ["75100000-0000-4000-9000-000000000e02","switchers-hardware",     "11.2 Roland V-60HD"],
  ["75100000-0000-4000-9000-000000000e03","cabine-video-multiview", "11.3 Analog Way Aquilon"],
];

// insere a figura depois do primeiro parágrafo (idempotente pela URL)
function comImagem(html, slug){
  if(html.includes(imgUrl(slug))) return html;
  const i = html.indexOf("</p>");
  return i<0 ? figure(slug)+html : html.slice(0,i+4)+"\n"+figure(slug)+html.slice(i+4);
}

(async()=>{
  console.log(`== Pleno Vídeo — revisão de qualidade ${DRY?"(DRY)":""} ==\n`);
  let nR=0, nI=0, faltando=[];

  for(const [lid,slug,tag] of REESCRITAS){
    const arq = path.join(HERE,`rev-${slug}.fragment.html`);
    if(!fs.existsSync(arq)){ faltando.push(`${tag} (rev-${slug})`); continue; }
    const html = readRev(slug);
    const figs = (html.match(/<figure/g)||[]).length;
    const resto = (html.match(/\{\{IMG:/g)||[]).length;
    if(resto) console.log(`  ! ${tag}: ${resto} token(s) de imagem não resolvido(s)`);
    if(DRY){ console.log(`  [dry] ${tag.padEnd(28)} ${Math.round(html.length/1024)}KB  ${figs} img`); nR++; continue; }
    await req("PATCH",`/lessons?id=eq.${lid}`,{conteudo_rico:html},{Prefer:"return=minimal"});
    console.log(`  ✎ ${tag.padEnd(28)} ${Math.round(html.length/1024)}KB  ${figs} img`); nR++;
  }

  for(const [lid,slug,tag] of SO_IMAGEM){
    const rows = await req("GET",`/lessons?id=eq.${lid}&select=conteudo_rico`);
    if(!rows.length){ console.log(`  ! aula ${tag} não encontrada`); continue; }
    const antes = rows[0].conteudo_rico||"";
    const depois = comImagem(antes, slug);
    if(antes===depois){ console.log(`  = ${tag}: imagem já presente`); continue; }
    if(DRY){ console.log(`  [dry] 🖼️ ${tag.padEnd(28)} + ${slug}`); nI++; continue; }
    await req("PATCH",`/lessons?id=eq.${lid}`,{conteudo_rico:depois},{Prefer:"return=minimal"});
    console.log(`  🖼️ ${tag.padEnd(28)} + ${slug}`); nI++;
  }

  if(faltando.length){ console.log(`\n  ⏳ ainda não escritas (agente rodando): ${faltando.join(", ")}`); }
  console.log(`\nDONE: ${nR} aula(s) aprofundada(s), ${nI} imagem(ns) adicionada(s).`);
})().catch(e=>{ console.error("FALHOU:",e.message); process.exit(1); });
