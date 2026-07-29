// CATÁLOGO POR MARCA (ordem do dono 2026-07-21): cada MARCA = um módulo, cada MODELO = uma aula.
// Começa pela Pioneer (é a marca com mais aparelho já funcionando). ADITIVO: não mexe nos módulos
// pedagógicos existentes; cria um módulo novo de catálogo.
//
// REGRA 5 (faixa de id): este catálogo escreve SÓ na faixa "d1a00000-*". Registrar no
// _REGISTRO-IDS.mjs e rodar auditar-banco.mjs antes e depois.
//
// Reusa o HTML dos simuladores QUE JÁ ESTÃO NO AR (fonte de verdade = ai_animations), então cada
// aula do catálogo mostra exatamente o sim testado, sem rebuild. Modelos standalone que ainda não
// existem entram depois, um a um, conforme eu construir cada pele fiel.
//
//   node cursos-novos/pleno-dj/apply-catalogo-pioneer.mjs [--dry]
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
const PREF = "d1a00000";                          // faixa deste catálogo (Regra 5)
const MOD_PIONEER = `${PREF}-0000-4000-9000-000000000001`;
const idAula = n => `${PREF}-0000-4000-9000-0000000001${String(n).padStart(2, "0")}`;

// cada MODELO/SETUP do módulo Pioneer, com o TÍTULO do sim já publicado que o alimenta
const MODELOS = [
  { n: 1, titulo: "Pioneer XDJ-RX2 — All-in-One", simTitle: "Pioneer XDJ-RX2",
    intro: "O all-in-one completo: 2 decks + mixer + tela, num aparelho só. É o padrão de balada e do DJ que viaja leve." },
  { n: 2, titulo: "Pioneer CDJ-3000 + DJM-A9 — cabine flagship", simTitle: "Cabine de DJ",
    intro: "A cabine topo de linha atual: 2× CDJ-3000 (o multi-player de referência) com o mixer DJM-A9 de 4 canais." },
  { n: 3, titulo: "Pioneer CDJ-2000NXS2 + DJM-900NXS2 — cabine clássica", simTitle: "Cabine clássica",
    intro: "O padrão Nexus que reinou nos clubes: 2× CDJ-2000NXS2 com o DJM-900NXS2, o par mais usado do mundo por anos." },
  { n: 4, titulo: "Pioneer DJM-V10 (6 canais) + CDJ-3000", simTitle: "Cabine 6 canais",
    intro: "O mixer de 6 canais com EQ de 4 bandas e compressor, para quem trabalha em camadas. Aqui pareado com CDJ-3000." },
];

(async () => {
  // 1) puxa o HTML de cada sim já publicado (fonte de verdade)
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=urls`);
  const byTitle = {};
  for (const a of anims) { const h = a.urls?.[0]?.html || ""; const t = /<title>([^<—]+)/.exec(h)?.[1]?.trim(); if (t && !byTitle[t]) byTitle[t] = h; }

  console.log("=== resolvendo sims do módulo Pioneer ===");
  let falta = false;
  for (const m of MODELOS) {
    const h = byTitle[m.simTitle];
    if (!h) { console.log(`  ✗ sim não encontrado no ar: "${m.simTitle}" (aula "${m.titulo}")`); falta = true; }
    else { m.html = h; console.log(`  ✓ ${m.titulo}  ← "${m.simTitle}" (${(h.length / 1024).toFixed(0)} KB)`); }
  }
  if (falta) { console.log("\n❌ abortado: algum sim base não está publicado."); process.exit(1); }

  if (DRY) { console.log(`\n[dry-run] criaria módulo Pioneer + ${MODELOS.length} aulas na faixa ${PREF}.`); return; }

  // 2) cria o módulo Pioneer (ordem 10, depois dos pedagógicos)
  await req("DELETE", `/ai_animations?lesson_id=in.(${MODELOS.map(m => idAula(m.n)).join(",")})`, null, { Prefer: "return=minimal" }).catch(() => {});
  await req("DELETE", `/lessons?module_id=eq.${MOD_PIONEER}`, null, { Prefer: "return=minimal" }).catch(() => {});
  await req("DELETE", `/modules?id=eq.${MOD_PIONEER}`, null, { Prefer: "return=minimal" }).catch(() => {});
  await req("POST", "/modules", [{ id: MOD_PIONEER, course_id: COURSE, titulo: "🎛️ Pioneer DJ — por modelo", ordem: 10 }], { Prefer: "return=minimal" });

  // 3) cria cada aula-modelo + anexa o sim
  for (const m of MODELOS) {
    const lid = idAula(m.n);
    const conteudo = `<p><strong>${m.titulo.split("—")[0].trim()}.</strong> ${m.intro}</p>
<p>Pratique no simulador abaixo: PLAY toca a base (que fica em loop), o jog faz scratch no centro e nudge na borda, e cada controle responde como no aparelho real. Métricas e nomes conferidos no manual oficial da Pioneer.</p>`;
    await req("POST", "/lessons", [{ id: lid, module_id: MOD_PIONEER, titulo: m.titulo, tipo: "texto",
      conteudo_rico: conteudo, duracao_min: 12, ordem: m.n, tem_quiz: false, preview_gratis: false }], { Prefer: "return=minimal" });
    await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: lid, tipo: "interactive", status: "ready",
      model: "handcrafted-interactive", roteiro: { cenas: [{ modo: "widget", numero: 1, titulo: m.titulo, duracao: 180 }], metadata: { titulo: m.titulo } },
      urls: [{ html: m.html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    console.log(`  → aula criada: ${m.titulo}`);
  }

  // 4) atualiza total_aulas
  const les2 = await req("GET", `/lessons?module_id=in.(${(await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(x => x.id).join(",")})&select=id`);
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: les2.length }, { Prefer: "return=minimal" });
  console.log(`\n✅ Módulo Pioneer criado com ${MODELOS.length} modelos. total_aulas=${les2.length}.`);
  console.log("   Próximos: CDJ-100/200/400/800/1000 standalone, DJMs antigos — depois Technics/Denon/Numark.");
})();
