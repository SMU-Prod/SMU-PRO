#!/usr/bin/env node
/**
 * sincronizar-sims.mjs [--aplicar]
 *
 * Compara o HTML de cada simulador publicado (ai_animations) com o arquivo
 * local e mostra o que esta DESATUALIZADO no ar. Com --aplicar, republica.
 *
 * Motivo: publiquei varios sims e DEPOIS os agentes os refinaram — o banco
 * ficou com versao velha (foi o caso do CDJ-400, que o dono viu errado no ar).
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

/* os simuladores agora ficam em subpasta por fabricante (ordem do dono):
   simuladores/dj/<fabricante>/<arquivo>.html  — busca recursiva */
function listarSims(dir) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...listarSims(p));
    else if (e.name.endsWith(".html") && !e.name.startsWith("_")) out.push(p);
  }
  return out;
}

const SIMS = path.join(RAIZ, "simuladores", "dj");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const CURSO = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };
const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status} ${t.slice(0, 140)}`);
  return t && t[0] === "[" ? JSON.parse(t) : t;
};
const md5 = s => crypto.createHash("md5").update(s).digest("hex").slice(0, 8);

/* casa a aula com o arquivo pelo <title> do HTML publicado */
function acharLocal(tituloHtml) {
  for (const abs of listarSims(SIMS)) {
    const f = path.relative(SIMS, abs).split(path.sep).join("/");
    const s = fs.readFileSync(abs, "utf8");
    const m = s.match(/<title>([^<]*)<\/title>/);
    if (m && m[1].trim() === tituloHtml.trim()) return f;
  }
  return null;
}

const aplicar = process.argv.includes("--aplicar");
const mods = (await req("GET", `/modules?course_id=eq.${CURSO}&select=id`)).map(m => m.id).join(",");
const aulas = await req("GET", `/lessons?module_id=in.(${mods})&select=id,titulo&order=titulo`);

let iguais = 0, difs = 0, semArquivo = 0, republicadas = 0, bloqueados = 0;
for (const a of aulas) {
  const an = await req("GET", `/ai_animations?lesson_id=eq.${a.id}&select=id,urls`);
  if (!an.length) continue;
  const noAr = an[0].urls?.[0]?.html;
  if (!noAr) continue;
  const t = (noAr.match(/<title>([^<]*)<\/title>/) || [])[1];
  const arq = t ? acharLocal(t) : null;
  if (!arq) { semArquivo++; continue; }
  const local = fs.readFileSync(path.join(SIMS, arq), "utf8");
  if (md5(local) === md5(noAr)) { iguais++; continue; }

  /* ⛔ GUARD: nao publicar simulador com Banco SMU apontando para caminho
     RELATIVO. O player monta o sim em <iframe srcDoc sandbox> sem
     allow-same-origin e sem <base>: a origem fica opaca (Origin: null) e o
     caminho relativo resolve contra a URL da AULA -> 404 em producao, e o
     aluno ve a barra de musicas sem nenhuma faixa funcionando.
     Libera sozinho quando o base virar URL absoluta — ninguem precisa lembrar
     de tirar filtro. (guard sugerido pela sessao do Banco SMU) */
  const temBanco = /\/\*\s*BANCO-SMU-/.test(local);
  const baseRelativa = /\bbase\s*:\s*["'](?!https?:\/\/)/.test(local)
                    || /\bBASE\s*=\s*["'](?!https?:\/\/)/.test(local);

  /* O marcador pode faltar: o studio tinha o Banco escrito a mao e passou
     batido (achado da sessao do Banco SMU). Entao o guard tambem procura o
     PADRAO, sem depender de ninguem lembrar de marcar: referencia a arquivo
     de audio por caminho relativo. */
  /* exige BARRA de diretorio: "musicas/x.mp3" e caminho relativo (quebra),
     mas "sotex-1.mp3" e so o nome no catalogo, juntado com a base em runtime. */
  /* tira comentarios antes de procurar: o studio EXPLICA a armadilha num
     comentario ("musicas/x.mp3") e o guard casava com o texto, nao com codigo */
  const semComentario = local
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/(^|[^:])\/\/[^\n]*/g, "$1");
  const audioRelativo = /["'`](?!https?:\/\/|data:|blob:|\/\/)[^"'`\s]*\/[^"'`\s]*\.(mp3|wav|ogg|m4a|flac)["'`]/i.test(semComentario);

  const motivo = (temBanco && baseRelativa) ? "Banco SMU com caminho relativo"
               : audioRelativo               ? "referencia a arquivo de audio por caminho relativo"
               : null;
  if (motivo) {
    bloqueados++;
    console.log(`BLOQUEADO      ${arq}`);
    console.log(`   ${motivo} — daria 404 publicado (iframe srcDoc, Origin: null).`);
    console.log(`   Libera sozinho quando o caminho virar URL absoluta com CORS *.`);
    continue;
  }

  difs++;
  const dif = local.length - noAr.length;
  console.log(`DESATUALIZADO  ${arq}`);
  console.log(`   aula: ${a.titulo}`);
  console.log(`   no ar ${(noAr.length / 1024).toFixed(0)}KB  ->  local ${(local.length / 1024).toFixed(0)}KB  (${dif > 0 ? "+" : ""}${(dif / 1024).toFixed(0)}KB)`);
  if (aplicar) {
    await req("PATCH", `/ai_animations?id=eq.${an[0].id}`,
      { urls: [{ html: local }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
    console.log("   -> republicado");
    republicadas++;
  }
}
console.log(`\niguais: ${iguais} | desatualizados: ${difs} | BLOQUEADOS pelo guard: ${bloqueados} | sem arquivo local: ${semArquivo}` +
  (aplicar ? ` | republicados: ${republicadas}` : `\n(rode com --aplicar para republicar)`));
if (bloqueados) console.log(`\n${bloqueados} simulador(es) com Banco SMU nao foram publicados de proposito.\nO guard libera sozinho quando CATALOGO_SMU.base virar URL absoluta com CORS *.`);
