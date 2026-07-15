// CORREÇÃO por FONTE DE VERDADE (CLAUDE.md regra 2): nome do crossfader nos mixers Pioneer.
//
// O QUE ESTAVA ERRADO (achado pela auditoria de nomenclatura contra os manuais oficiais)
//   DJM-A9  exibia "MAGVEL FADER PRO" -> o PRO não é deste equipamento
//   DJM-V10 exibia "MAGVEL PRO"       -> esse nome não existe em lugar nenhum da Pioneer
//
// FONTES (15/07/2026):
//  - Página oficial do DJM-A9: "With the third-generation MAGVEL FADER crossfader, you can enjoy
//    rapid and stable scratching."  -> é MAGVEL FADER (3ª geração), SEM "PRO".
//  - Página oficial "Inside story – MAGVEL FADER evolution": o MAGVEL FADER **PRO** está em
//    DJM-S11, DJM-S7, DJM-S5 e DDJ-REV7 (os mixers de scratch). O DJM-A9 não está nessa lista.
//  - Página oficial do DJM-V10: a palavra MAGVEL não aparece. O V10 não é anunciado com MAGVEL.
//  - Página oficial do DJM-900NXS2: "Our robust Magvel Faders ensure smooth control..."
//    -> o rótulo "MAGVEL FADER" no sim do 900NXS2 já estava CERTO e NÃO foi mexido.
//  - Manuais do DJM-A9 e do DJM-V10: ambos chamam o controle de "CROSSFADER" e
//    "CROSSFADER ASSIGN (A, THRU, B)". MAGVEL é o nome da tecnologia, não do controle —
//    por isso o V10 passou a exibir "CROSSFADER", que é o termo do próprio manual.
//
// O QUE NÃO MUDA: só o RÓTULO. O controle é o elemento .fadx[data-xfader], irmão do .xlab;
// testado depois da troca (cap em 10px / 66,5px / 123px de A ao B) — a curva de ganho continua.
//
//   node cursos-novos/pleno-dj/correcoes/fix-magvel.mjs [--dry]
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

// IDs REAIS, consultados no banco. Não dá para deduzi-los do padrão "d15d0000-…-0000000000NN":
// as aulas do módulo 4/5 têm UUID aleatório, e uma primeira versão deste script inventou os IDs
// pelo padrão, não achou nada e ainda assim imprimiu "✅ corrigido" (ver guarda de publicação
// no fim). O simulador da cabine CDJ-3000+DJM-A9 alimenta DUAS aulas: 4.2 e 5.1.
const ALVOS = [
  { sim: "pioneer-cdj-djm-real.html", nome: "Cabine CDJ-3000 + DJM-A9", aulas: [
      "79bb3e24-0745-4789-a64b-941307bbc314",   // 4.2 Beatmatching: alinhando as batidas
      "127588cc-7f55-4ba2-9904-7d85eedb7d8a",   // 5.1 Mixagem básica: transições suaves
  ] },
  { sim: "pioneer-djm-v10-real.html", nome: "DJM-V10", aulas: [
      "46cdc703-f813-480f-a9f8-b97c32e4805e",   // 4.1 Operação dos equipamentos e configuração do setup
  ] },
];

(async () => {
  let publicados = 0, esperados = 0;
  for (const a of ALVOS) {
    const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", a.sim), "utf8");
    // A guarda tem de olhar o que o ALUNO vê. Os comentários do código citam "MAGVEL FADER PRO"
    // justamente para explicar que ele NÃO é deste mixer — checar o arquivo cru acusaria a própria
    // documentação da correção como se fosse o erro.
    const visivel = html.replace(/<!--[\s\S]*?-->/g, "");
    if (/MAGVEL FADER PRO|MAGVEL PRO/.test(visivel)) { console.log(`  ✗ ${a.nome}: ainda exibe nome de fader errado — abortado`); continue; }
    if (!/data-xfader/.test(html)) { console.log(`  ✗ ${a.nome}: sumiu o controle [data-xfader] — abortado`); continue; }
    console.log(`  ✓ ${a.nome}: ${(html.length / 1024).toFixed(0)} KB · rótulo conferido`);
    esperados += a.aulas.length;
    if (DRY) continue;
    for (const lid of a.aulas) {
      const an = await req("GET", `/ai_animations?lesson_id=eq.${lid}&tipo=eq.interactive&select=id`);
      if (!an.length) { console.log(`    ✗ aula ${lid.slice(-6)}: sem ai_animations`); continue; }
      await req("PATCH", `/ai_animations?id=eq.${an[0].id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
      publicados++;
      console.log(`    → aula …${lid.slice(-6)} republicada`);
    }
  }
  if (DRY) { console.log("\n[dry-run] nada gravado."); return; }
  // Guarda: a primeira versão deste script errou os lesson_id, não publicou NADA e mesmo assim
  // imprimiu sucesso. Relatório que não conta o que gravou não serve para conferir.
  if (publicados !== esperados) {
    console.log(`\n❌ publicado em ${publicados}/${esperados} aulas — NÃO está tudo no ar. Confira os lesson_id.`);
    process.exit(1);
  }
  console.log(`\n✅ ${publicados}/${esperados} aulas republicadas: rótulo do crossfader conforme a fonte oficial de cada mixer.`);
})();
