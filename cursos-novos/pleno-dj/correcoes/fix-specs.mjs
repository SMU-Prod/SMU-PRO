// CORREÇÃO por FONTE DE VERDADE (CLAUDE.md regra 2 e 3): specs de fones e caixas conferidas
// nos documentos OFICIAIS dos fabricantes. Onde o fabricante não publica o dado, o curso passa
// a dizer isso — em vez de exibir um número inventado com cara de catálogo.
//
// Corrige as aulas 2.5 (fones) e 2.6 (caixas) e republica os 2 simuladores.
//
// FONTES CONSULTADAS (15/07/2026) — todas primárias, do próprio fabricante:
//  - Sennheiser, especificação oficial do HD 25:
//      Dinâmico / on-ear / 16–22.000 Hz / 70 Ω / SPL 120 dB / THD <0,3% @1kHz / 140 g
//      >> o TAMANHO DO DRIVER não é publicado em lugar nenhum da spec oficial.
//  - AlphaTheta (Pioneer DJ), manual oficial do HDJ-X10 (DRB1760-F, ©2020), tabela SPECIFICATIONS
//    conferida nas 7 línguas do manual (EN/FR/DE/IT/NL/ES/PT), que batem entre si:
//      Closed, Dynamic / ø50 mm / 5 Hz–40.000 Hz / 106 dB / 3.500 mW / 328 g (sem cabo)
//      cabo destacável mini-XLR 4 polos.  >> a IMPEDÂNCIA não consta no manual.
//  - AIAIAI, página oficial do preset TMA-2 DJ (S02+H02+E02+C02):
//      32 Ω / 40 mm bio-cellulose / 20 Hz–20 kHz / 97 dB @1mW / 190 g / 30 mW rated, 70 mW max
//      >> é MODULAR: a spec pertence à speaker unit (S02), não a "um TMA-2".
//  - beyerdynamic, DT 990 PRO 250 Ω:
//      aberto / 5–35.000 Hz / 250 Ω / SPL 96 dB / 250 g (sem cabo); existe também em 80 Ω.
//      >> o tamanho do driver não é publicado.
//  - QSC, spec sheet oficial "K.2 Series Specifications" (q_spk_k2_specs.pdf):
//      K8.2  8"  55 Hz–20 kHz (−10 dB) / 105° / 128 dB pico / 12,2 kg
//      K10.2 10" 50 Hz–20 kHz (−10 dB) /  90° / 130 dB pico / 14,5 kg
//      K12.2 12" 45 Hz–20 kHz (−10 dB) /  75° / 132 dB pico / 17,7 kg
//      amplificador Class D — "Peak: 1800 W (LF), 225 W (HF)"; SPL de pico medido no eixo a 1 m
//      com ruído rosa dinâmico.  >> o "2000 W" anunciado é a SOMA DOS PICOS, não potência contínua.
//  - Yamaha, specs oficiais da série HS (HS5/HS7/HS8):
//      HS5 5" 54 Hz–30 kHz (−10 dB) / 70 W (45 LF + 25 HF) / 5,3 kg
//      HS7 6,5" 43 Hz–30 kHz / 95 W / 8,2 kg    HS8 8" 38 Hz–30 kHz / 120 W / 10,2 kg
//      >> a Yamaha NÃO publica SPL máximo da série HS.
//
// ERROS REAIS QUE ESTAVAM PUBLICADOS E ESTE SCRIPT REMOVE:
//   HD 25      "Driver 40 mm"   -> não publicado pela Sennheiser        (removido)
//   HDJ-X10    "32 Ω"           -> não consta no manual                 (removido)
//   HDJ-X10    "330 g"          -> o manual diz 328 g (sem cabo)        (corrigido)
//   DT 990 PRO "280 g"/"45 mm"  -> 250 g; driver não publicado          (corrigido/removido)
//   monitor 5" "55 Hz–22 kHz" / "SPL ~101 dB" -> HS5 é 54 Hz–30 kHz e a Yamaha não publica SPL
//   P.A. 15"   "SPL máx ~136 dB" -> número inventado; a K.2 nem tem 15" (trocado pela K8.2 real)
//   bluetooth  "SPL ~85 dB" etc  -> números inventados p/ uma categoria (removidos)
//
//   node cursos-novos/pleno-dj/correcoes/fix-specs.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
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
const L25 = "d15d0000-57d1-4d00-9000-000000000011"; // fones
const L26 = "d15d0000-57d1-4d00-9000-000000000012"; // caixas

/* ---------- 2.5: referências da cabine, agora com a spec oficial de cada uma ---------- */
const FONES = `
<h3>As referências da cabine (specs do fabricante, não de blog)</h3>
<ul>
<li><strong>Sennheiser HD 25</strong> — o padrão há 30 anos: <strong>70 Ω</strong>, <strong>140 g</strong>, dinâmico on-ear fechado, <strong>16–22.000 Hz</strong>, SPL <strong>120 dB</strong> e distorção <strong>abaixo de 0,3%</strong>. Leve, isola muito e é praticamente indestrutível. <em>Repare: a Sennheiser não publica o tamanho do driver dele — quem te disser "40 mm" está chutando.</em></li>
<li><strong>Pioneer DJ HDJ-X10</strong> — o topo de linha da marca das cabines: driver de <strong>ø50 mm</strong>, fechado over-ear, <strong>5 Hz–40.000 Hz</strong>, sensibilidade <strong>106 dB</strong>, aguenta <strong>3.500 mW</strong> de entrada e pesa <strong>328 g</strong> sem o cabo. O cabo é destacável, com <strong>mini-XLR de 4 polos</strong> (o do HDJ-2000 é de 3 e não serve). <em>A impedância não consta no manual.</em></li>
<li><strong>AIAIAI TMA-2 DJ</strong> — <strong>32 Ω</strong>, driver de <strong>40 mm</strong> de bio-cellulose, <strong>20 Hz–20 kHz</strong>, <strong>97 dB @ 1 mW</strong>, <strong>190 g</strong>. O detalhe que importa: ele é <strong>modular</strong> — essas specs são do preset DJ, com a <strong>unidade S02</strong>. Trocou a speaker unit, mudou a spec. Não existe "o TMA-2": existe o TMA-2 que você montou.</li>
<li><strong>V-Moda M-100, Sony MDR-7506</strong> — fechados, alternativas sólidas que aparecem em muitas cabines.</li>
</ul>
<h3>O contra-exemplo: por que o fone de estúdio não serve</h3>
<p>Pegue o <strong>beyerdynamic DT 990 PRO</strong> na versão de <strong>250 Ω</strong>: <strong>5–35.000 Hz</strong>, SPL <strong>96 dB</strong>, <strong>250 g</strong>. No papel parece superior ao HD 25 — e é, <em>para estúdio</em>. Na cabine ele falha por dois motivos que a spec entrega:</p>
<ul>
<li><strong>É aberto.</strong> A pista invade o seu cue e o seu cue vaza para o microfone. Isolamento perto de zero.</li>
<li><strong>250 Ω contra os 70 Ω do HD 25.</strong> Quanto maior a impedância, mais tensão o amplificador precisa para o mesmo volume. A saída de fone do DJM entrega folga de sobra para 32–70 Ω; nos 250 Ω o fone fica fraco justo quando a pista está no pico.</li>
</ul>
<p><strong>Lição de leitura de spec:</strong> repare que três fabricantes diferentes <strong>não publicam</strong> o tamanho do driver (Sennheiser e beyerdynamic) ou a impedância (Pioneer). Isso não é descuido: <strong>o número que o fabricante escolhe publicar é o que ele considera que define o produto.</strong> Quando um vendedor te recita uma spec que nem o fabricante publica, ele está repetindo boato.</p>`.trim();

/* ---------- 2.6: como ler spec, agora com a prova documental da QSC ---------- */
const CAIXAS = `
<h3>Como ler as especificações (sem cair em marketing)</h3>
<ul>
<li><strong>Potência: cuidado com o número da capa.</strong> A <strong>QSC K12.2</strong> é vendida como caixa de <strong>"2000 W"</strong>. Abra o spec sheet oficial e o que está escrito é <em>"Peak: 1800 W (LF), 225 W (HF)"</em> — ou seja, os <strong>2000 W são a soma dos PICOS</strong> dos dois amplificadores, não potência contínua e não o que ela sustenta a noite toda. Não é mentira da QSC (está tudo publicado); é você que precisa saber ler. Fuja de "PMPO".</li>
<li><strong>SPL máximo (dB):</strong> a pressão que a caixa entrega — é isso que dimensiona a festa. <strong>Cada +3 dB exige o dobro de potência.</strong> Na família K.2 dá para ver o preço disso: <strong>K8.2 = 128 dB</strong>, <strong>K10.2 = 130 dB</strong>, <strong>K12.2 = 132 dB</strong> (pico). Só que <strong>o número tem letra miúda</strong>: a QSC informa que mede <em>no eixo, a 1 metro, com ruído rosa dinâmico</em>. Ninguém dança a 1 metro da caixa, no eixo. É um número de comparação entre modelos, não a pressão que chega na pista.</li>
<li><strong>Resposta de frequência — e a régua do −10 dB.</strong> A K12.2 vai a <strong>45 Hz (−10 dB)</strong>, mas a <strong>50 Hz (−6 dB)</strong>: mesma caixa, dois números, porque a régua mudou. <strong>Sempre compare com a mesma régua.</strong> E mesmo esses 45 Hz saem já caindo 10 dB — é por isso que a caixa de topo "chega a 45 Hz" no papel e mesmo assim <strong>o sub continua fazendo falta</strong>.</li>
<li><strong>Cobertura:</strong> na própria K.2, <strong>K8.2 = 105°</strong>, <strong>K10.2 = 90°</strong>, <strong>K12.2 = 75°</strong>. Repare no contra-senso aparente: <strong>a caixa maior espalha MENOS</strong> — ela concentra para jogar longe. Público perto e largo pede ângulo aberto; pista funda pede ângulo fechado.</li>
</ul>
<h3>O teste que desmonta o mito do "tamanho"</h3>
<p>Compare, com os dados oficiais, um monitor de estúdio e uma P.A. pequena:</p>
<ul>
<li><strong>Yamaha HS5</strong> (monitor 5"): <strong>54 Hz</strong>–30 kHz (−10 dB), <strong>70 W</strong> (45 LF + 25 HF), 5,3 kg.</li>
<li><strong>QSC K8.2</strong> (P.A. 8"): <strong>55 Hz</strong>–20 kHz (−10 dB), pico 1800+225 W, 128 dB, 12,2 kg.</li>
</ul>
<p>O grave dos dois <strong>começa praticamente no mesmo lugar</strong> — 54 contra 55 Hz. Se "grave" fosse a resposta no papel, o monitorzinho de estúdio tocaria a festa. <strong>A diferença não é a frequência: é a PRESSÃO.</strong> A K8.2 sustenta 128 dB de pico; o HS5 não tem nem como — e aqui vem o detalhe mais revelador: <strong>a Yamaha simplesmente não publica SPL máximo da série HS.</strong> Não é omissão, é definição de categoria: <strong>monitor de estúdio se vende por resposta plana e honesta, P.A. se vende por pressão.</strong> Cada um mostra o número que importa no seu mundo.</p>`.trim();

/* ---------- aplica ---------- */
const trocaBloco = (html, de, ate, novo, tag) => {
  const a = html.indexOf(de), b = html.indexOf(ate);
  if (a < 0 || b <= a) { console.log(`  ✗ ${tag}: âncoras não encontradas ("${de}" / "${ate}")`); return null; }
  console.log(`  ✓ ${tag}: bloco substituído (${b - a} chars -> ${novo.length})`);
  return html.slice(0, a) + novo + "\n" + html.slice(b);
};

(async () => {
  console.log("— corrigindo o TEXTO das aulas —");
  const les = await req("GET", `/lessons?id=in.(${L25},${L26})&select=id,conteudo_rico`);
  const by = Object.fromEntries(les.map(l => [l.id, l.conteudo_rico]));

  let h25 = trocaBloco(by[L25], "<h3>As referências da cabine", '<h3>A técnica do "um ouvido só"</h3>', FONES, "2.5 fones");
  if (h25) h25 = h25.replace(/HD-25/g, "HD 25"); // a Sennheiser grafa "HD 25", sem hífen
  let h26 = trocaBloco(by[L26], "<h3>Como ler as especificações", "<h3>O monitor de cabine (booth)</h3>", CAIXAS, "2.6 caixas");

  if (!DRY) {
    if (h25) await req("PATCH", `/lessons?id=eq.${L25}`, { conteudo_rico: h25 }, { Prefer: "return=minimal" });
    if (h26) await req("PATCH", `/lessons?id=eq.${L26}`, { conteudo_rico: h26 }, { Prefer: "return=minimal" });
  }

  console.log("\n— republicando os SIMULADORES corrigidos —");
  for (const [lid, file, nome] of [[L25, "dj-fones-lab-real.html", "2.5 Lab de Fones"], [L26, "dj-caixas-lab-real.html", "2.6 Lab de Caixas"]]) {
    const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", file), "utf8");
    // guarda de sanidade: não republicar um sim que ainda carregue spec inventada
    const proibido = [/Driver 40 mm[^]{0,80}70 Ω/, /"32 Ω","Isolamento alto","330 g"/, /SPL ~136 dB/, /SPL ~101 dB/, /SPL ~85 dB/];
    const erro = proibido.find(rx => rx.test(html));
    if (erro) { console.log(`  ✗ ${nome}: ainda contém spec inventada (${erro}) — NÃO publicado`); continue; }
    console.log(`  ✓ ${nome}: ${(html.length / 1024).toFixed(0)} KB`);
    if (DRY) continue;
    const anim = await req("GET", `/ai_animations?lesson_id=eq.${lid}&tipo=eq.interactive&select=id,roteiro`);
    if (!anim.length) { console.log(`  ✗ ${nome}: sem ai_animations — abortado`); continue; }
    // UPDATE-only: preserva id e roteiro, troca só o HTML (mesmo padrão do publish-faithful-sims)
    await req("PATCH", `/ai_animations?id=eq.${anim[0].id}`, { urls: [{ html }], status: "ready", custo_usd: 0 }, { Prefer: "return=minimal" });
  }
  console.log(DRY ? "\n[dry-run] nada gravado." : "\n✅ aulas 2.5/2.6 e seus simuladores corrigidos com spec oficial de fabricante.");
})();
