// CORREÇÃO DE UM ERRO MEU (CLAUDE.md regra 4: entender a CAUSA, não consertar por cima).
//
// O QUE ACONTECEU
// Em 15/07/2026 o fix-specs.mjs REMOVEU a impedância "32 Ω" do Pioneer HDJ-X10 alegando que
// "não consta no manual". A impedância CONSTA, sim — está na tabela SPECIFICATIONS do manual
// oficial, na linha "Impedance ... 32 Ω". O dado original estava CERTO e eu o apaguei.
//
// A CAUSA (não foi desatenção — foi ferramenta com bug)
// O ferramentas/pdftext.mjs tinha um defeito no extrator: em fontes Identity-H o texto vem quase
// todo como `[<0029> -20 <0048>] TJ` — strings hex DENTRO de um array TJ — e o regex só casava
// `<hex> Tj` fora de array. Resultado: a extração devolvia a tabela PELA METADE, sem a linha da
// impedância, mas com aparência de tabela completa e legítima. Concluí "não consta" a partir de
// uma leitura incompleta que eu não tinha como perceber que estava incompleta.
//
// POR QUE ISSO IMPORTA MAIS QUE O ERRO EM SI
// Foi exatamente o caso da rampa do SMU World: mexer numa coisa que já estava certa. A lição não
// é "conferir melhor" — é que uma FONTE LIDA POR FERRAMENTA SÓ VALE SE A FERRAMENTA FOR VERIFICADA.
// Um extrator que devolve menos texto do que existe é pior que um que não devolve nada: ele
// produz uma ausência convincente. Antes de concluir "o fabricante não publica X", agora é
// obrigatório checar se a extração está completa (ver o teste de regressão abaixo).
//
// FERRAMENTA JÁ CORRIGIDA. Prova (manual HDJ-X10, tabela SPECIFICATIONS, extração completa):
//   Type: Closed, Dynamic | Impedance: 32 Ω | Sensitivity: 106 dB | Frequency response: 5 Hz–40.000 Hz
//   Maximum input power: 3.500 mW | Driver: ø50 mm | Weight: 328 g (without cable)
// (a correção 330 g -> 328 g, essa sim, estava certa e permanece.)
//
// RE-CONFERIDO com a ferramenta consertada, para não repetir o erro:
//  - Sennheiser HD 25 — PRODUCT SPECIFICATION V1.0 (art. 506909), lista COMPLETA de specs:
//      dynamic/closed, supraaural, 16–22.000 Hz, 70 Ω, load rating 200 mW, SPL 120 dB,
//      THD <0,3% @1kHz, pressão ~2,5 N, ~140 g (sem cabo), cabo ~1,5 m.
//      >> NÃO traz tamanho de driver. A conclusão anterior estava CERTA. (+ load rating 200 mW, novo)
//  - beyerdynamic DT 990 PRO — tabela oficial completa: over-ear, aberto, 250 g, 5–35.000 Hz,
//      96 dB, pressão ~3,5–5,5 N; existe em 80 Ω e 250 Ω.
//      >> NÃO traz tamanho de driver. A conclusão anterior estava CERTA.
//
//   node cursos-novos/pleno-dj/correcoes/fix-hdjx10-impedancia.mjs [--dry]
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
const L25 = "d15d0000-57d1-4d00-9000-000000000011";

/* As duas frases que afirmam a informação errada, e o que entra no lugar. */
const TROCAS = [
  // 1) a ficha do HDJ-X10 na aula
  [`aguenta <strong>3.500 mW</strong> de entrada e pesa <strong>328 g</strong> sem o cabo. O cabo é destacável, com <strong>mini-XLR de 4 polos</strong> (o do HDJ-2000 é de 3 e não serve). <em>A impedância não consta no manual.</em>`,
   `<strong>32 Ω</strong>, aguenta <strong>3.500 mW</strong> de entrada e pesa <strong>328 g</strong> sem o cabo. O cabo é destacável, com <strong>mini-XLR de 4 polos</strong> (o do HDJ-2000 é de 3 e não serve).`],

  // 2) o HD 25 ganha o load rating que estava na spec oficial
  [`<strong>70 Ω</strong>, <strong>140 g</strong>, dinâmico on-ear fechado, <strong>16–22.000 Hz</strong>, SPL <strong>120 dB</strong> e distorção <strong>abaixo de 0,3%</strong>.`,
   `<strong>70 Ω</strong>, <strong>~140 g</strong>, dinâmico fechado supra-aural, <strong>16–22.000 Hz</strong>, <strong>load rating de 200 mW</strong>, SPL <strong>120 dB</strong> e distorção <strong>abaixo de 0,3%</strong>.`],

  // 3) a lição: some a alegação falsa sobre a Pioneer; entra a lição que o erro ensinou
  [`<p><strong>Lição de leitura de spec:</strong> repare que três fabricantes diferentes <strong>não publicam</strong> o tamanho do driver (Sennheiser e beyerdynamic) ou a impedância (Pioneer). Isso não é descuido: <strong>o número que o fabricante escolhe publicar é o que ele considera que define o produto.</strong> Quando um vendedor te recita uma spec que nem o fabricante publica, ele está repetindo boato.</p>`,
   `<p><strong>Lição de leitura de spec:</strong> repare numa coisa. A Pioneer publica a ficha inteira do HDJ-X10 — tipo, driver, resposta, impedância, sensibilidade, potência e peso. Já <strong>Sennheiser e beyerdynamic não publicam o tamanho do driver</strong> dos seus fones, e a lista delas está completa assim mesmo. Não é descuido: <strong>o número que o fabricante escolhe publicar é o que ele considera que define o produto.</strong> A Sennheiser acha que o HD 25 se define por isolar, aguentar pressão e pesar 140 g — não por ter um cone de X milímetros. Quando alguém te recita uma spec que nem o fabricante publica, está repetindo boato.</p>
<p><strong>E o aviso mais útil que este curso pode te dar sobre ficha técnica:</strong> "não achei o dado" <strong>não é</strong> a mesma coisa que "o dado não existe". Esta própria aula já publicou que o HDJ-X10 não tinha impedância no manual — tinha: <strong>32 Ω</strong>, escrito na tabela. O erro veio de uma leitura incompleta do manual que <em>parecia</em> completa. Se a spec sumiu, desconfie primeiro da sua leitura; só depois do fabricante.</p>`],
];

(async () => {
  console.log("— corrigindo a aula 2.5 —");
  const [l] = await req("GET", `/lessons?id=eq.${L25}&select=conteudo_rico`);
  let h = l.conteudo_rico, n = 0;
  for (const [de, para] of TROCAS) {
    if (!h.includes(de)) { console.log(`  ✗ trecho não encontrado: "${de.slice(0, 58)}…"`); continue; }
    h = h.replace(de, para); n++;
    console.log(`  ✓ trocado: "${de.slice(0, 58)}…"`);
  }
  if (/não consta no manual|a impedância \(Pioneer\)/i.test(h)) { console.log("  ✗ AINDA sobrou afirmação de que a impedância não consta — abortando"); process.exit(1); }
  if (!DRY && n) await req("PATCH", `/lessons?id=eq.${L25}`, { conteudo_rico: h }, { Prefer: "return=minimal" });

  console.log("\n— republicando o Lab de Fones —");
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj/dj-fones-lab-real.html"), "utf8");
  if (!/"Driver ø50 mm","5 Hz–40.000 Hz","32 Ω"/.test(html)) { console.log("  ✗ o HDJ-X10 no simulador ainda está sem os 32 Ω — abortando"); process.exit(1); }
  console.log(`  ✓ HDJ-X10 com 32 Ω · ${(html.length / 1024).toFixed(0)} KB`);
  if (!DRY) {
    const a = await req("GET", `/ai_animations?lesson_id=eq.${L25}&tipo=eq.interactive&select=id`);
    await req("PATCH", `/ai_animations?id=eq.${a[0].id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
  }
  console.log(DRY ? "\n[dry-run] nada gravado." : `\n✅ ${n} trecho(s) corrigidos + simulador republicado. O 32 Ω voltou.`);
})();
