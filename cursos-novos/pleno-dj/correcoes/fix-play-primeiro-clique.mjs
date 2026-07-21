// CORREÇÃO DE BUG (o dono: "tem aulas que nao da play de primeira na xdj").
//
// A CAUSA: o handler do PLAY fazia "liga o áudio OU toca", nunca os dois no mesmo clique:
//     if(!started) startAudio();        // 1º clique: só LIGA (e startAudio é async — renderiza a faixa)
//     else if(ready) playDeck(...)      // só o 2º clique, já com ready=true, tocava
// Resultado: o aluno apertava PLAY e não acontecia nada; só no 2º toque tocava. Em sim com
// startAudio async, às vezes nem o 2º pegava (o render ainda não terminara).
//
// A CORREÇÃO: o handler virou async e AGUARDA o startAudio antes de tocar, no MESMO clique:
//     if(!started) await startAudio();  // liga e espera as faixas renderizarem
//     if(ready) playDeck(...)           // e toca
//
// Afeta os 4 sims cujo transporte tinha esse padrão + startAudio async:
//   pioneer-xdj-rx2-real     (o citado pelo dono)   .tb.play  / .tb.cue
//   pioneer-cdj-djm-real                            .rbtn.play / .rbtn.cue
//   pioneer-djm-v10-real                            .rbtn.play / .rbtn.cue
//   denon-prime4-real        handleSideAct virou async; espera o render e re-despacha a ação
// (o cdj2000-djm900 NÃO tem o bug: startAudio é síncrono e os decks já existem antes de ligar.)
//
// TESTADO (1 clique em página recém-carregada, sem tocar em "Ligar áudio" antes):
//   XDJ-RX2 deckA tocando + áudio pico 229 · CDJ-3000 tocando · Denon deck tocando · V10 idem.
//
//   node cursos-novos/pleno-dj/correcoes/fix-play-primeiro-clique.mjs [--dry]
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

// cada sim + um traço estável que prova que a correção está no arquivo
const ALVOS = [
  { sim: "pioneer-xdj-rx2-real.html",  marca: /XDJ-RX2/,                prova: /if\(!started\)await startAudio\(\); if\(ready\)playDeck/ },
  { sim: "pioneer-cdj-djm-real.html",  marca: /CDJ-3000 \+ DJM-A9|2× CDJ-3000/, prova: /if\(!started\)await startAudio\(\); if\(ready\)playDeck/ },
  { sim: "pioneer-djm-v10-real.html",  marca: /DJM-V10/,               prova: /if\(!started\)await startAudio\(\); if\(ready\)playDeck/ },
  { sim: "denon-prime4-real.html",     marca: /Denon Prime 4\+/,       prova: /async function handleSideAct/ },
];

(async () => {
  const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id,titulo`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=id,lesson_id,urls`);

  let pub = 0, esp = 0, semAula = 0;
  for (const a of ALVOS) {
    const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", a.sim), "utf8");
    if (!a.prova.test(html)) { console.log(`  ✗ ${a.sim}: a correção do play NÃO está no arquivo — abortado`); process.exit(1); }
    // o antipadrão não pode ter sobrado
    if (/if\(!started\)\{?startAudio\(\);?\}? else if\(ready\)/.test(html)) { console.log(`  ✗ ${a.sim}: ainda tem o padrão de duplo-clique — abortado`); process.exit(1); }
    console.log(`  ✓ ${a.sim}: play no 1º clique conferido`);

    const alvos = anims.filter(x => a.marca.test(x.urls?.[0]?.html || ""));
    if (!alvos.length) { console.log(`    ✗ nenhuma aula publica ${a.sim} — FALHA`); semAula++; continue; }
    esp += alvos.length;
    if (DRY) { console.log(`    [dry] ${alvos.length} aula(s)`); continue; }
    for (const x of alvos) {
      await req("PATCH", `/ai_animations?id=eq.${x.id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
      console.log(`    → ${les.find(l => l.id === x.lesson_id)?.titulo?.slice(0, 44)}`);
      pub++;
    }
  }
  if (DRY) { console.log("\n[dry-run] nada gravado."); return; }
  if (semAula || !esp || pub !== esp) { console.log(`\n❌ publicado ${pub}/${esp}; ${semAula} sim(s) sem aula.`); process.exit(1); }
  console.log(`\n✅ ${pub}/${esp} aula(s): PLAY funciona no primeiro clique.`);
})();
