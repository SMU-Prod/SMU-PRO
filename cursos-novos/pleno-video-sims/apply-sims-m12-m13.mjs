// Instala os SIMULADORES GENÉRICOS das aulas de M12 (Transmissão) e M13 (Câmera/IMAG)
// do Pleno — Vídeo (pedido do dono, 05/08/2026). Regra do som: aula de conceito recebe
// sim genérico com exercício; réplica de marca fica nas aulas de equipamento.
// NÃO cria/apaga lesson nenhuma — só ai_animations (DELETE por lesson_id + POST).
// 12.5 já tinha sim (interactive-handmade) e NÃO é tocada aqui.
// Uso: node cursos-novos/pleno-video-sims/apply-sims-m12-m13.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DRY = process.argv.includes("--dry");
const HERE = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(HERE, "..", "..");
const SIM = p => path.join(RAIZ, "simuladores", p);
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }
const post=(t,b)=>req("POST","/"+t,b,{Prefer:"return=minimal"});
const roteiroFor = t => ({ titulo:t, metadata:{ titulo_aula:t, total_cenas:1, duracao_total:0, abordagem_didatica:"Simulador interativo — pratique movendo os controles" }, cenas:[{ numero:1, titulo:t, modo:"widget", narracao:"", explicacao_texto:"", destaques:[] }] });

// lesson_id (faixa 7f1* da expansão) -> sim novo
const MAPA = [
  ["7f100000-0000-4000-9000-000000001201","video/stream-cadeia.html",       "12.1 cadeia do streaming"],
  ["7f100000-0000-4000-9000-000000001202","video/stream-estudio.html",      "12.2 estúdio de transmissão"],
  ["7f100000-0000-4000-9000-000000001203","video/stream-bitrate.html",      "12.3 laboratório de bitrate"],
  ["7f100000-0000-4000-9000-000000001204","video/stream-mixminus.html",     "12.4 áudio da live (mix-minus)"],
  ["7f100000-0000-4000-9000-000000001206","video/stream-caso-hibrido.html", "12.6 estudo de caso híbrido"],
  ["7f100000-0000-4000-9000-000000001301","video/camera-exposicao.html",    "13.1 exposição da câmera"],
  ["7f100000-0000-4000-9000-000000001302","video/imag-cortes.html",         "13.2 posições de câmera/IMAG"],
  ["7f100000-0000-4000-9000-000000001303","video/direcao-intercom.html",    "13.3 direção/intercom"],
  ["7f100000-0000-4000-9000-000000001304","video/mediaserver-timeline.html","13.4 media server timeline"],
  ["7f100000-0000-4000-9000-000000001305","video/cor-engenharia.html",      "13.5 cor/matching de telões"],
  ["7f100000-0000-4000-9000-000000001306","video/dia-tecnico.html",         "13.6 dia do técnico"],
];

(async()=>{
  console.log(`== Sims M12/M13 ${DRY?"(DRY)":""} ==`);
  let n=0;
  for(const [lid, rel, nome] of MAPA){
    const html = fs.readFileSync(SIM(rel), "utf8");
    const rows = await req("GET", `/lessons?id=eq.${lid}&select=id,titulo`);
    if(!rows.length){ console.log(`  ! ${nome}: aula ${lid.slice(-4)} NÃO EXISTE — pulei`); continue; }
    if(DRY){ console.log(`  ~ ${nome}: ${(html.length/1024).toFixed(1)}KB -> ${rows[0].titulo.slice(0,44)}`); continue; }
    await req("DELETE", `/ai_animations?lesson_id=eq.${lid}`, null, {Prefer:"return=minimal"});
    await post("ai_animations",[{ lesson_id:lid, tipo:"interactive", status:"ready", model:"handcrafted-interactive", custo_usd:0, roteiro:roteiroFor(rows[0].titulo), urls:[{ html }] }]);
    n++; console.log(`  ✓ ${nome}: ${(html.length/1024).toFixed(1)}KB`);
  }
  console.log(`DONE. ${n} sims instalados.`);
  await new Promise(r=>setTimeout(r,250));
})().catch(async e=>{ console.error("FALHOU:", e.message); await new Promise(r=>setTimeout(r,250)); process.exit(1); });
