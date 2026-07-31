#!/usr/bin/env node
/**
 * publicar-mesas-som.mjs  [--publicar]
 *
 * As 13 aulas de mesa do curso pleno-som e o arquivo de cada uma.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * O publish-faithful-sims.mjs tem lista explicita e so' cobria 3 mesas (SQ, DiGiCo,
 * X32), com CL5 e DM7 COMENTADOS e as outras 8 sem entrada nenhuma. Resultado: uma
 * mesa consertada no disco podia ficar meses sem chegar ao aluno, e ninguem via.
 * Aqui a lista esta COMPLETA e o modo padrao e' CONFERIR, nao publicar:
 *
 *   node cursos-novos/publicar-mesas-som.mjs              -> so' compara e relata
 *   node cursos-novos/publicar-mesas-som.mjs --publicar   -> sobe o que estiver diferente
 *
 * Escreve SO' em ai_animations.urls[0].html. Nao cria aula, nao mexe em `ativo`,
 * nao toca em custo_usd (os applies de producao conferem custo_usd===0).
 *
 * Os lesson_id foram lidos do banco, nao inventados.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";

function chave() {
  if (process.env.SUPABASE_SERVICE_KEY) return process.env.SUPABASE_SERVICE_KEY.trim();
  const f = path.join(RAIZ, ".local", "svckey");           // caminho ESTAVEL (ver publicar-sim.mjs)
  if (fs.existsSync(f)) return fs.readFileSync(f, "utf8").trim();
  throw new Error("sem chave de servico: ponha em SMU-PRO/.local/svckey");
}
const KEY = chave();
const H = { apikey: KEY, Authorization: "Bearer " + KEY, "Content-Type": "application/json" };

const MESAS = [
  { m: "M8/1",  lesson: "5504c000-5011-4a00-9000-0000000000b1", file: "yamaha-cl5-real.html",         nome: "Yamaha CL5" },
  { m: "M8/2",  lesson: "abe880d4-78bd-4530-89c0-d176ce6fdbf1", file: "yamaha-m7cl-real.html",        nome: "Yamaha M7CL" },
  { m: "M8/3",  lesson: "7ea3b1fe-98bd-4e7d-9866-6bab7839c073", file: "yamaha-ls9-real.html",         nome: "Yamaha LS9" },
  { m: "M8/4",  lesson: "c1bedcf4-d3ed-4f13-aa33-5e5e98b97676", file: "yamaha-rivage-pm7-real.html",  nome: "RIVAGE PM7" },
  { m: "M8/5",  lesson: "18b8e8ac-afaa-4a35-92ca-005bbc917ecb", file: "yamaha-rivage-pm10-real.html", nome: "RIVAGE PM10" },
  { m: "M8/6",  lesson: "c7dc8eb4-1734-4492-bafa-e96663f5e5b8", file: "yamaha-dm7-real.html",         nome: "Yamaha DM7" },
  { m: "M8/7",  lesson: "32b67c6a-8180-4d04-b481-132c9d658af1", file: "yamaha-tf5-real.html",         nome: "Yamaha TF5" },
  { m: "M9/1",  lesson: "5504c000-5011-4a00-9000-0000000000b3", file: "allen-heath-sq-real.html",     nome: "Allen & Heath SQ" },
  { m: "M10/1", lesson: "5504c000-5011-4a00-9000-0000000000b4", file: "digico-sd-real.html",          nome: "DiGiCo Quantum 338" },
  { m: "M11/1", lesson: "e7281a26-f496-41d2-8dd8-e7a13bd8debd", file: "behringer-x32-real.html",      nome: "Behringer X32" },
  { m: "M12/1", lesson: "e5a774ec-047f-4277-ba8f-dea18e322eae", file: "soundcraft-vi-real.html",      nome: "Soundcraft Vi3000" },
  { m: "M12/2", lesson: "27663106-8693-42d1-aa49-9fb779440e19", file: "soundcraft-ui24r-real.html",   nome: "Soundcraft Ui24R" },
  { m: "M12/3", lesson: "f9bf2d1b-a80c-44fe-a6df-7e28f29c2431", file: "soundcraft-signature-real.html", nome: "Soundcraft Signature 22 MTK" },
  { m: "M13/1", lesson: "473a7f1a-d2c1-436d-a8d6-407f285f7497", file: "presonus-studiolive-real.html", nome: "PreSonus StudioLive 32SC" },
];

const publicar = process.argv.includes("--publicar");
let difs = 0, iguais = 0, erros = 0;

for (const s of MESAS) {
  const abs = path.join(RAIZ, "simuladores", "som", s.file);
  if (!fs.existsSync(abs)) { console.log("  FALTA ARQUIVO  " + s.file); erros++; continue; }
  const disco = fs.readFileSync(abs, "utf8");

  const r = await fetch(`${REST}/ai_animations?select=id,urls&lesson_id=eq.${s.lesson}`, { headers: H });
  if (!r.ok) { console.log("  ERRO HTTP " + r.status + "  " + s.nome); erros++; continue; }
  const linhas = await r.json();
  if (!linhas.length) { console.log("  SEM ANIMACAO NO BANCO  " + s.nome); erros++; continue; }

  const noAr = linhas[0]?.urls?.[0]?.html || "";
  const kbD = (disco.length / 1024).toFixed(0), kbA = (noAr.length / 1024).toFixed(0);

  if (noAr === disco) { console.log(`  ok        ${s.m.padEnd(6)} ${s.nome.padEnd(28)} ${kbD} KB`); iguais++; continue; }

  difs++;
  console.log(`  DIFERENTE ${s.m.padEnd(6)} ${s.nome.padEnd(28)} disco ${kbD} KB  ×  no ar ${kbA} KB`);
  if (!publicar) continue;

  const up = await fetch(`${REST}/ai_animations?id=eq.${linhas[0].id}`, {
    method: "PATCH", headers: { ...H, Prefer: "return=minimal" },
    body: JSON.stringify({ urls: [{ html: disco }], updated_at: new Date().toISOString() }),
  });
  console.log(up.ok ? "            -> publicado" : "            -> FALHOU " + up.status + " " + (await up.text()).slice(0, 160));
  if (!up.ok) erros++;
}

console.log(`\n  ${MESAS.length} mesas · ${iguais} iguais · ${difs} diferentes · ${erros} erros`);
if (!publicar && difs) console.log("  (rode com --publicar para subir as diferentes)");
/* Node 24 + Windows: sair logo apos um fetch bate na assercao do libuv e sai 127. */
setTimeout(() => process.exit(erros ? 1 : 0), 250);
