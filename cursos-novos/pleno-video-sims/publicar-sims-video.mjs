// Publica SIMULADORES de vídeo editados no disco -> ai_animations (UPDATE-only).
// Lição do pleno-som (memória smu-sim-consertado-nao-publicado): sim consertado no
// disco NÃO chega ao aluno sozinho — o HTML vive DENTRO do banco. Este script cobre
// TODAS as aulas de vídeo com sim mapeado; confira a lista antes de dizer "pronto".
// Uso: node cursos-novos/pleno-video-sims/publicar-sims-video.mjs [--dry] [--so <trecho-do-arquivo>]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DRY = process.argv.includes("--dry");
const soIx = process.argv.indexOf("--so");
const SO = soIx > -1 ? process.argv[soIx+1] : null;
const HERE = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(HERE, "..", "..");
const SIM = p => path.join(RAIZ, "simuladores", p);
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }

// lesson_id -> arquivo do sim (fonte de verdade: apply-pleno/processadores/switchers/diaadia)
const MAPA = [
  // ⚠️ 8.1 NÃO é o genérico novastar-led: o apply-processadores promoveu a aula ao
  // NovaLCT FIEL de propósito (NOVA_UPGRADE, M8.1 + M7.3). Não reverta.
  ["72100000-0000-4000-9000-000000000b01","video/processadores/novastar-novalct.html","8.1 NovaStar (NovaLCT fiel)"],
  ["72100000-0000-4000-9000-000000000b02","video/switcher-atem.html",                "8.2 mesa de corte"],
  ["72100000-0000-4000-9000-000000000b03","video/resolume-vj.html",                  "8.3 Resolume"],
  ["73100000-0000-4000-9000-000000000c01","video/processadores/novastar-novalct.html","9.1 NovaLCT"],
  ["73100000-0000-4000-9000-000000000c02","video/processadores/colorlight-ledvision.html","9.2 LEDVISION"],
  ["73100000-0000-4000-9000-000000000c03","video/processadores/brompton-tessera.html","9.3 Tessera"],
  ["74100000-0000-4000-9000-000000000d01","video/ligacao-cabos.html",                "10.1 ligação"],
  ["74100000-0000-4000-9000-000000000d02","video/mapeamento-paineis.html",           "10.2 mapeamento"],
  ["75100000-0000-4000-9000-000000000e01","video/switcher-atem.html",                "11.1 ATEM"],
  ["75100000-0000-4000-9000-000000000e02","video/switchers/roland-v60hd.html",       "11.2 V-60HD"],
  ["75100000-0000-4000-9000-000000000e03","video/switchers/analogway-aquilon.html",  "11.3 Aquilon"],
  // Painel FÍSICO do ATEM Mini (réplica por quadrantes, 05/08) — substitui o
  // switcher-atem duplicado no básico 3.3 e no pleno 4.1 (o Software Control fiel
  // continua nas aulas 8.2/11.1, que ensinam o software).
  ["71100000-0000-4000-9000-000000000011","video/switchers/atem-mini-panel.html",    "básico 3.3 mesa de corte (painel ATEM Mini)"],
  ["015f5acc-0d96-43ca-920c-1184115b904e","video/switchers/atem-mini-panel.html",    "pleno 4.1 ATEM/Roland (painel ATEM Mini)"],
  // Sims genéricos M12/M13 (instalados por apply-sims-m12-m13.mjs; daqui em diante
  // atualizados por este publicador)
  ["7f100000-0000-4000-9000-000000001201","video/stream-cadeia.html",       "12.1 cadeia streaming"],
  ["7f100000-0000-4000-9000-000000001202","video/stream-estudio.html",      "12.2 estúdio transmissão"],
  ["7f100000-0000-4000-9000-000000001203","video/stream-bitrate.html",      "12.3 bitrate"],
  ["7f100000-0000-4000-9000-000000001204","video/stream-mixminus.html",     "12.4 mix-minus"],
  ["7f100000-0000-4000-9000-000000001206","video/stream-caso-hibrido.html", "12.6 caso híbrido"],
  ["7f100000-0000-4000-9000-000000001301","video/camera-exposicao.html",    "13.1 exposição"],
  ["7f100000-0000-4000-9000-000000001302","video/imag-cortes.html",         "13.2 IMAG"],
  ["7f100000-0000-4000-9000-000000001303","video/direcao-intercom.html",    "13.3 intercom"],
  ["7f100000-0000-4000-9000-000000001304","video/mediaserver-timeline.html","13.4 timeline"],
  ["7f100000-0000-4000-9000-000000001305","video/cor-engenharia.html",      "13.5 cor"],
  ["7f100000-0000-4000-9000-000000001306","video/dia-tecnico.html",         "13.6 dia do técnico"],
];

(async()=>{
  console.log(`== Publicar sims VÍDEO ${DRY?"(DRY)":""}${SO?` (só *${SO}*)`:""} ==`);
  let n=0;
  for(const [lid, rel, nome] of MAPA){
    if(SO && !rel.includes(SO)) continue;
    const html = fs.readFileSync(SIM(rel), "utf8");
    const rows = await req("GET", `/ai_animations?lesson_id=eq.${lid}&select=id,urls`);
    if(!rows.length){ console.log(`  ! ${nome}: aula ${lid.slice(0,13)} SEM ai_animations — pulei`); continue; }
    const atual = rows[0].urls?.[0]?.html || "";
    if(atual === html){ console.log(`  = ${nome}: já atualizado (${(html.length/1024).toFixed(1)}KB)`); continue; }
    if(DRY){ console.log(`  ~ ${nome}: ${(atual.length/1024).toFixed(1)}KB -> ${(html.length/1024).toFixed(1)}KB`); continue; }
    await req("PATCH", `/ai_animations?id=eq.${rows[0].id}`, { urls: [{ html }] }, {Prefer:"return=minimal"});
    n++; console.log(`  ✓ ${nome}: ${(atual.length/1024).toFixed(1)}KB -> ${(html.length/1024).toFixed(1)}KB`);
  }
  console.log(`DONE. ${n} sims publicados.`);
  await new Promise(r=>setTimeout(r,250));
})().catch(async e=>{ console.error("FALHOU:", e.message); await new Promise(r=>setTimeout(r,250)); process.exit(1); });
