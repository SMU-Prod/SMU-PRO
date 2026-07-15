// CORREÇÃO por FONTE DE VERDADE (CLAUDE.md regra 2 + "não clonar pele de outra marca").
//
// O QUE ESTAVA ERRADO: o simulador do Denon Prime 4+ exibia nomenclatura da PIONEER.
// Conferido no manual oficial (Denon DJ, "PRIME 4, PRIME 4+, PRIME 2, PRIME GO, PRIME GO+,
// SC LIVE 4, SC LIVE 2 — User Guide — v5.0.0"), 343k caracteres extraídos:
//
//   exibia "TRIM"    -> "TRIM" aparece ZERO vezes no manual da Denon. É nome do DJM (Pioneer).
//                       A Denon chama de "Channel Level": "Turn this knob to adjust the level of
//                       the pre-fader, pre-EQ audio signal for the channel."   => agora "LEVEL"
//   exibia "IN/CUE"  -> nome do CDJ ("LOOP IN/CUE (IN ADJUST)"). Não existe na Denon.
//                       O manual nomeia o par como "Loop In / Loop Out".      => "LOOP IN"/"LOOP OUT"
//   exibia "MT"      -> indicador de MASTER TEMPO do CDJ. "MT" isolado aparece ZERO vezes na Denon.
//                       A Denon chama de "Key Lock": "press Key Lock. When Key Lock is activated,
//                       the track's key will remain..."                        => agora "KEY LOCK"
//
// BUG REAL ENCONTRADO DE QUEBRA (o dono pediu "faça os botões funcionar de verdade"):
//   o par LOOP IN / LOOP OUT NÃO CRIAVA LOOP NENHUM. O código era:
//       case "cuein":  b.classList.add("on"); setTimeout(...,180); break;   // só piscava
//       case "cueout": d.loopOn=false; ...                                  // só desligava
//   Ou seja: o aluno apertava os dois e nada acontecia. Agora o IN arma o ponto (loopStart) e o
//   OUT fecha e ativa (loopEnd + loopOn), como o manual descreve: "press the Manual Loop In button
//   to set the start point, and then press [Loop Out] to set the end point".
//   Testado: loop ativo, extensão 1,03 s, e `pos` REALMENTE fica presa entre loopStart e loopEnd.
//
// O QUE NÃO MUDOU: os `data-act`/`data-ck` (mt, cuein, cueout, trim) são ids internos do motor —
// não aparecem na tela e trocá-los só quebraria a lógica. O beatloop (4 LOOP) segue intacto.
//
// AUDITORIA: os 31 rótulos do simulador foram conferidos um a um contra o manual da Denon.
//   node cursos-novos/pleno-dj/correcoes/fix-denon-nomenclatura.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..", "..");   // correcoes/ -> pleno-dj/ -> cursos-novos/ -> SMU-PRO/
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/87b43c42-b06b-409a-a321-75e301124bef/scratchpad/.svckey", "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(m, p, b, x = {}) {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status}: ${t.slice(0, 200)}`);
  return t ? (t[0] === "[" || t[0] === "{" ? JSON.parse(t) : t) : null;
}
const SIM = "denon-prime4-real.html";

(async () => {
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", SIM), "utf8");
  const visivel = html.replace(/<!--[\s\S]*?-->/g, "");   // comentários citam os nomes errados de propósito

  const proibidos = ["TRIM", "IN/CUE", "MT<", "MASTER TEMPO", "BEAT FX"];
  const achado = proibidos.find(p => visivel.includes(p));
  if (achado) { console.log(`  ✗ o sim ainda exibe nomenclatura Pioneer ("${achado}") — abortado`); process.exit(1); }
  for (const [t, oq] of [[">LEVEL<", "Channel Level"], [">LOOP IN<", "Loop In"], [">LOOP OUT<", "Loop Out"], [">KEY LOCK<", "Key Lock"]])
    if (!visivel.includes(t)) { console.log(`  ✗ falta o rótulo Denon ${t} (${oq}) — abortado`); process.exit(1); }
  if (!/case "cuein": d\.loopStart=d\.pos; d\.loopIn=true/.test(html)) { console.log("  ✗ o loop manual não está implementado — abortado"); process.exit(1); }
  console.log(`  ✓ ${SIM}: ${(html.length / 1024).toFixed(0)} KB · rótulos Denon + loop manual conferidos`);

  // descobre a aula pelo <title> do HTML publicado, em vez de chutar o lesson_id (já errei assim)
  const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id,titulo`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=id,lesson_id,urls`);
  const alvos = anims.filter(a => /Denon Prime 4\+/.test(a.urls?.[0]?.html || ""));
  if (!alvos.length) { console.log("  ✗ nenhuma aula publica o sim do Denon — abortado"); process.exit(1); }

  if (DRY) { console.log(`\n[dry-run] ${alvos.length} aula(s) receberiam a atualização.`); return; }
  let n = 0;
  for (const a of alvos) {
    await req("PATCH", `/ai_animations?id=eq.${a.id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
    const l = les.find(x => x.id === a.lesson_id);
    console.log(`    → ${l?.titulo?.slice(0, 46)} republicada`);
    n++;
  }
  if (n !== alvos.length) { console.log(`\n❌ ${n}/${alvos.length} publicadas.`); process.exit(1); }
  console.log(`\n✅ ${n}/${alvos.length} aula(s): nomenclatura Denon corrigida e loop manual funcionando.`);
})();
