// CORREÇÃO por FONTE DE VERDADE (CLAUDE.md regra 2): nomenclatura e controles do toca-discos.
//
// FONTE: Technics/Panasonic, "SL-1200MK7 Owner's Manual" (TQBM0410, EN/FR) — 111k chars extraídos.
//
// O QUE ESTAVA ERRADO
//   exibia "TARGET" -> "target light" é termo de OUTRAS marcas (Vestax/Numark). No SL-1200MK7 a
//                      luz vermelha ao lado do START-STOP é a "Strobe light" (acende os pontos do
//                      estroboscópio do prato). A luz do braço, essa sim, é a "Stylus light" —
//                      outra peça.                                        => agora "STROBE"
//   exibia "PITCH"   -> o manual nomeia o fader como "PITCH ADJ control". => agora "PITCH ADJ"
//
// O QUE FALTAVA (controle real do aparelho, conferido na lista de peças do manual)
//   RESET button + RESET LED lamp. E o comportamento NÃO é "zerar o fader" — o manual diz:
//     "Press [RESET] to light the pitch control RESET LED lamp. The unit plays at a preset pitch
//      (33-1/3, 45 or 78 rpm) REGARDLESS OF THE [PITCH ADJ] control"
//   ou seja: acende o LED e IGNORA o fader, que fica exatamente onde o DJ deixou. Aperta de novo
//   e o fader volta a valer, com o valor que já estava. É assim que está implementado, e o
//   mostrador exibe "—" enquanto o RESET está aceso (o pitch do fader não está em uso).
//   Testado: fader em +3,5% -> RESET aceso: pitch efetivo 0 e o fader NÃO se mexe -> RESET
//   desligado: pitch volta a +3,5%. O RESET de um prato não afeta o outro.
//
// AINDA FALTA (não inventei: são controles reais que o sim não tem)
//   - Stylus light (luz da agulha)
//   - Pitch range select button ([×2]: ±8% -> ±16%)
//   Ficam para o dono decidir se entram; o sim hoje é fixo em ±8%.
//
// O battle mixer do sim é genérico (não afirma marca), então TRIM/CROSSFADER não são auditáveis
// contra o manual do Technics — não são erro, são de outro equipamento.
//
//   node cursos-novos/pleno-dj/correcoes/fix-technics.mjs [--dry]
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
const SIM = "turntable-scratch-real.html";

(async () => {
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", SIM), "utf8");
  const visivel = html.replace(/<!--[\s\S]*?-->/g, "");   // os comentários citam "TARGET" de propósito

  if (/>TARGET</.test(visivel)) { console.log('  ✗ ainda exibe "TARGET" (não existe na Technics) — abortado'); process.exit(1); }
  for (const [t, o] of [[">STROBE<", "Strobe light"], ["PITCH ADJ", "PITCH ADJ control"], ['data-act="reset"', "RESET button"]])
    if (!visivel.includes(t)) { console.log(`  ✗ falta ${t} (manual: ${o}) — abortado`); process.exit(1); }
  // os 2 pratos têm de ter o SEU próprio RESET (um replace_all descuidado já deixou os dois como "A")
  const decksReset = [...html.matchAll(/data-act="reset" data-deck="([AB])"/g)].map(m => m[1]);
  if (decksReset.join("") !== "AB") { console.log(`  ✗ RESET mal ligado aos pratos: [${decksReset}] — abortado`); process.exit(1); }
  if (!/pitchReset\[id\] \? 0 : pct/.test(html)) { console.log("  ✗ o RESET não está ignorando o PITCH ADJ — abortado"); process.exit(1); }
  console.log(`  ✓ ${SIM}: ${(html.length / 1024).toFixed(0)} KB · STROBE + PITCH ADJ + RESET (A e B) conferidos`);

  const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id,titulo`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=id,lesson_id,urls`);
  const alvos = anims.filter(a => /SL-1200MK7/.test(a.urls?.[0]?.html || ""));
  if (!alvos.length) { console.log("  ✗ nenhuma aula publica o sim dos toca-discos — abortado"); process.exit(1); }

  if (DRY) { console.log(`\n[dry-run] ${alvos.length} aula(s) receberiam a atualização.`); return; }
  let n = 0;
  for (const a of alvos) {
    await req("PATCH", `/ai_animations?id=eq.${a.id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
    console.log(`    → ${les.find(x => x.id === a.lesson_id)?.titulo?.slice(0, 46)} republicada`);
    n++;
  }
  if (n !== alvos.length) { console.log(`\n❌ ${n}/${alvos.length} publicadas.`); process.exit(1); }
  console.log(`\n✅ ${n}/${alvos.length} aula(s): nomenclatura Technics + botão RESET no ar.`);
})();
