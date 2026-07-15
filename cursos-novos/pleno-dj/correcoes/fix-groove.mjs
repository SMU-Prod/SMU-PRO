// CORREÇÃO por FONTE DE VERDADE (CLAUDE.md regra 2): nomenclatura da frota de grooveboxes.
//
// FONTES (15/07/2026):
//  - Akai, "MPC Standalone OS — User Guide — v3.7" (1.559k chars extraídos)
//  - Roland, "SP-404MK2 Reference Manual v4.00" (281k chars) + página oficial do produto
//
// O QUE ESTAVA ERRADO
//   MPC exibia "T.C." no LCD -> a Akai abrevia "TC", sem pontos ("the TC field or Timing Correct
//        window"). "Timing Correct" aparece 33x e "TC" 25x; "T.C." aparece ZERO vezes.
//        (o texto da aula já usava "TIMING CORRECT" certo — só o LCD destoava)  => "TC"
//   SP-404 exibia "SP-404 MKII" (com espaço) -> a Roland grafa "SP-404MKII", sem espaço, no
//        título e nos headings da página oficial do produto.                    => "SP-404MKII"
//
// ⚠️ ARMADILHA QUE QUASE ME PEGOU (regra 4: entender antes de "consertar")
//   O manual da Roland usa "SP-404MK2" 26x contra "SP-404MKII" 1x. Ia trocar MKII -> MK2 e
//   ESTRAGARIA um acerto: o nome do PRODUTO é "SP-404MKII" (site oficial); "SP-404MK2" é a forma
//   abreviada que o manual e a URL usam. Manual não é a única fonte — para NOME DE PRODUTO, a
//   fonte é a página do produto. Só o espaço estava errado.
//
// FALSOS POSITIVOS conferidos e mantidos de propósito:
//   - "MPC" na tela do SP-404: é comparação didática ("Diferente da MPC, que é um kit de bateria
//     por pad"), não contaminação de nomenclatura.
//   - "ARQUIVOS", "PAD SELECIONADO": rótulos didáticos nossos, em português.
//
//   node cursos-novos/pleno-dj/correcoes/fix-groove.mjs [--dry]
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

// `marca` casa o sim JÁ PUBLICADO (versão antiga) — por isso não pode usar o nome que esta
// correção introduz: procurar "SP-404MKII" no que está no ar, onde ainda há "SP-404 MKII",
// não acha nada e o sim ficaria de fora sem ninguém perceber. Use um traço estável do arquivo.
const ALVOS = [
  { sim: "akai-mpc-real.html", nome: "Akai MPC", marca: /Akai MPC/,
    proibido: [[/T\.C\./, '"T.C." (a Akai abrevia "TC")']],
    exigido: [['<span class="lab">TC</span>', 'LCD com "TC"']] },
  { sim: "roland-sp404-real.html", nome: "Roland SP-404MKII", marca: /SP-404 ?MK(II|2)/,
    proibido: [[/SP-404 MKII/, '"SP-404 MKII" com espaço'], [/SP-404MK2/, '"SP-404MK2" (é a abreviação do manual, não o nome do produto)']],
    exigido: [["SP-404MKII", "nome oficial do produto"]] },
];

(async () => {
  const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?module_id=in.(${mods})&select=id,titulo`);
  const anims = await req("GET", `/ai_animations?lesson_id=in.(${les.map(l => l.id).join(",")})&tipo=eq.interactive&select=id,lesson_id,urls`);

  let pub = 0, esp = 0, semAula = 0;
  for (const a of ALVOS) {
    const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", a.sim), "utf8");
    const visivel = html.replace(/<!--[\s\S]*?-->/g, "");
    let ok = true;
    for (const [rx, oq] of a.proibido) if (rx.test(visivel)) { console.log(`  ✗ ${a.nome}: ainda exibe ${oq} — pulado`); ok = false; }
    for (const [t, oq] of a.exigido) if (!visivel.includes(t)) { console.log(`  ✗ ${a.nome}: falta ${oq} — pulado`); ok = false; }
    if (!ok) continue;
    console.log(`  ✓ ${a.nome}: ${(html.length / 1024).toFixed(0)} KB`);

    const alvos = anims.filter(x => a.marca.test(x.urls?.[0]?.html || ""));
    // Um sim sem aula é FALHA, não "nada a fazer": era o que escondia o SP-404 ficando de fora.
    if (!alvos.length) { console.log(`    ✗ nenhuma aula publica este sim — FALHA`); semAula++; continue; }
    esp += alvos.length;
    if (DRY) { console.log(`    [dry] ${alvos.length} aula(s)`); continue; }
    for (const x of alvos) {
      await req("PATCH", `/ai_animations?id=eq.${x.id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
      console.log(`    → ${les.find(l => l.id === x.lesson_id)?.titulo?.slice(0, 44)}`);
      pub++;
    }
  }
  if (DRY) { console.log("\n[dry-run] nada gravado."); return; }
  if (semAula || !esp || pub !== esp) { console.log(`\n❌ publicado em ${pub}/${esp} aulas; ${semAula} sim(s) sem aula.`); process.exit(1); }
  console.log(`\n✅ ${pub}/${esp} aula(s): nomenclatura Akai e Roland conforme a fonte oficial.`);
})();
