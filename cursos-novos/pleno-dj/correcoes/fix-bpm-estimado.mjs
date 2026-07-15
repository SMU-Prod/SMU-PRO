// MARCAÇÃO ⚠️ ESTIMADO (CLAUDE.md regra 3: "sem o dado → pergunte. Se estimar for inevitável:
// marque ESTIMADO no código E no relatório, avise que é chute, deixe PARAMETRIZADO").
//
// POR QUE ESTE É O ÚNICO DADO ESTIMADO DO CURSO
// Todo o resto da frota DJ vem de manual do fabricante. As faixas de BPM por gênero da aula 3.1
// NÃO TÊM FONTE OFICIAL POSSÍVEL: nenhum fabricante publica "house = 120–128" — é convenção de
// mercado, que varia por cena, país e ano. Não dá para conferir em manual porque manual nenhum
// fala disso.
//
// O QUE FOI FEITO (em vez de fingir que é fato ou deixar pendente):
//   1. comentário ⚠️ ESTIMADO no array GENRES, dizendo que é convenção e não spec
//   2. o ALUNO é avisado na tela: "estas faixas são convenção de mercado, não regra —
//      nenhum fabricante publica 'house = 120–128' … use como mapa, não como lei"
//   3. já estava PARAMETRIZADO: `rng` (texto) e `bpm` (tempo tocado) no array — corrigir uma
//      faixa custa 1 linha, sem tocar no motor de áudio.
//
// Se o dono quiser as faixas da prática dele, é editar o GENRES em dj-bpm-genero-lab.html.
//
//   node cursos-novos/pleno-dj/correcoes/fix-bpm-estimado.mjs [--dry]
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

(async () => {
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj/dj-bpm-genero-lab.html"), "utf8");
  if (!/⚠️ ESTIMADO/.test(html)) { console.log("  ✗ falta a marcação ⚠️ ESTIMADO no código — abortado"); process.exit(1); }
  // sem as tags: o aviso na tela tem <b> no meio da frase
  const naTela = html.replace(/<!--[\s\S]*?-->/g, "").replace(/<[^>]+>/g, "");
  if (!/convenção de mercado, não regra/.test(naTela)) { console.log("  ✗ o aluno não está sendo avisado na tela — abortado"); process.exit(1); }
  console.log(`  ✓ dj-bpm-genero-lab.html: ${(html.length / 1024).toFixed(0)} KB · ⚠️ ESTIMADO no código + aviso na tela`);

  const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id,titulo`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=id,lesson_id,urls`);
  const alvos = anims.filter(a => /BPM e G[êe]nero|dj-bpm-genero|Cada g[êe]nero tem/i.test(a.urls?.[0]?.html || ""));
  if (!alvos.length) { console.log("  ✗ nenhuma aula publica este lab — abortado"); process.exit(1); }

  if (DRY) { console.log(`\n[dry-run] ${alvos.length} aula(s) receberiam.`); return; }
  let n = 0;
  for (const a of alvos) {
    await req("PATCH", `/ai_animations?id=eq.${a.id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
    console.log(`    → ${les.find(l => l.id === a.lesson_id)?.titulo?.slice(0, 46)}`);
    n++;
  }
  if (n !== alvos.length) { console.log(`\n❌ ${n}/${alvos.length}`); process.exit(1); }
  console.log(`\n✅ ${n}/${alvos.length}: BPM por gênero marcado como ⚠️ ESTIMADO (código + tela).`);
})();
