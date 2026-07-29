// CATÁLOGO POR MARCA — continua a biblioteca (Pioneer já foi em apply-catalogo-pioneer.mjs).
// Abre os módulos Technics e Denon com os simuladores QUE JÁ ESTÃO NO AR e testados.
// Mesma faixa registrada d1a00000 (Regra 5); cada marca num módulo, cada modelo numa aula.
//
//   node cursos-novos/pleno-dj/apply-catalogo-marcas.mjs [--dry]
import fs from "node:fs";
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
const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
const PREF = "d1a00000";
const modId = n => `${PREF}-0000-4000-9000-00000000000${n}`;          // 2=Technics, 3=Denon
// último grupo = 12 hex: 9 zeros + bloco(1 díg) + aula(2 díg). Pioneer usou bloco "1".
const aulaId = (blk, n) => `${PREF}-0000-4000-9000-000000000${blk}${String(n).padStart(2, "0")}`;

// marca → módulo (ordem no curso) + modelos (cada um puxa um sim já publicado por título)
const MARCAS = [
  { mod: modId(2), ordem: 11, titulo: "💿 Technics — por modelo", blk: "2", modelos: [
    { n: 1, titulo: "Technics SL-1200MK7 (2×) + battle mixer", simTitle: "Toca-discos + Scratch",
      intro: "O toca-discos direct-drive que definiu o DJing e o turntablism. Par de SL-1200MK7 com battle mixer para treinar scratch e mixagem de vinil." },
  ] },
  { mod: modId(3), ordem: 12, titulo: "🟦 Denon DJ — por modelo", blk: "3", modelos: [
    { n: 1, titulo: "Denon Prime 4+ — All-in-One 4 decks", simTitle: "Denon Prime 4+",
      intro: "O all-in-one da Denon com 4 decks reais, tela grande e ecossistema Engine DJ. O principal rival do XDJ na cabine standalone." },
  ] },
];

(async () => {
  // puxa o HTML dos sims já publicados (fonte de verdade)
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=urls`);
  const byTitle = {};
  for (const a of anims) { const h = a.urls?.[0]?.html || ""; const t = /<title>([^<—]+)/.exec(h)?.[1]?.trim(); if (t && !byTitle[t]) byTitle[t] = h; }

  console.log("=== resolvendo sims ===");
  let falta = false;
  for (const mk of MARCAS) for (const m of mk.modelos) {
    m.html = byTitle[m.simTitle];
    if (!m.html) { console.log(`  ✗ sim ausente no ar: "${m.simTitle}"`); falta = true; }
    else console.log(`  ✓ ${m.titulo}  ← "${m.simTitle}" (${(m.html.length / 1024).toFixed(0)} KB)`);
  }
  if (falta) { console.log("\n❌ abortado."); process.exit(1); }
  if (DRY) { console.log(`\n[dry-run] criaria ${MARCAS.length} módulos de marca.`); return; }

  for (const mk of MARCAS) {
    // recria só o módulo DESTA marca (nunca toca em outro)
    await req("DELETE", `/ai_animations?lesson_id=in.(${mk.modelos.map(m => aulaId(mk.blk, m.n)).join(",")})`, null, { Prefer: "return=minimal" }).catch(() => {});
    await req("DELETE", `/lessons?module_id=eq.${mk.mod}`, null, { Prefer: "return=minimal" }).catch(() => {});
    await req("DELETE", `/modules?id=eq.${mk.mod}`, null, { Prefer: "return=minimal" }).catch(() => {});
    await req("POST", "/modules", [{ id: mk.mod, course_id: COURSE, titulo: mk.titulo, ordem: mk.ordem }], { Prefer: "return=minimal" });
    for (const m of mk.modelos) {
      const lid = aulaId(mk.blk, m.n);
      const conteudo = `<p><strong>${m.titulo.split("—")[0].split("(")[0].trim()}.</strong> ${m.intro}</p>
<p>Pratique no simulador abaixo: PLAY toca a base em loop, o jog/prato faz scratch, e cada controle responde como no aparelho real. Nomes e métricas conferidos no manual oficial.</p>`;
      await req("POST", "/lessons", [{ id: lid, module_id: mk.mod, titulo: m.titulo, tipo: "texto",
        conteudo_rico: conteudo, duracao_min: 12, ordem: m.n, tem_quiz: false, preview_gratis: false }], { Prefer: "return=minimal" });
      await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: lid, tipo: "interactive", status: "ready",
        model: "handcrafted-interactive", roteiro: { cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 180 }], metadata: { titulo: m.titulo } },
        urls: [{ html: m.html }], custo_usd: 0 }], { Prefer: "return=minimal" });
      console.log(`  → ${mk.titulo}: ${m.titulo}`);
    }
  }
  const les2 = await req("GET", `/lessons?module_id=in.(${(await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(x => x.id).join(",")})&select=id`);
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: les2.length }, { Prefer: "return=minimal" });
  console.log(`\n✅ Módulos Technics e Denon criados. total_aulas=${les2.length}.`);
})();
