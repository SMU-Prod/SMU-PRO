// Aula 7.5 — Roland SP-404 MKII (sampler de performance) no módulo 7 do curso "DJ" ao vivo.
//   node cursos-novos/pleno-dj/apply-sp404.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/87b43c42-b06b-409a-a321-75e301124bef/scratchpad/.svckey", "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
const COURSE = "8febe92b-ca5e-48ce-ab73-0e672fadd3c0";
const MODULE = "d15d0000-57d1-4d00-9000-0000000000f7";
const LID = "d15d0000-57d1-4d00-9000-000000000075";
const QID = "d15d0000-57d1-4d00-9000-000000000085";
const QQ = j => `d15d0000-57d1-4d00-9000-90000000005${j}`;

async function req(m, p, b, x = {}) {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status}: ${t.slice(0, 250)}`);
  return t ? (t[0] === "[" || t[0] === "{" ? JSON.parse(t) : t) : null;
}

const HTML = `
<p><strong>Se a MPC é a fábrica, o SP-404 é o palco.</strong> O sampler da Roland virou culto por um motivo: ele foi feito para <strong>tocar ao vivo</strong> e para "sujar" o som — é a máquina do lo-fi hip-hop, do beat de rua e do set ao vivo de produtor.</p>
<h3>SP-404 × MPC: a diferença que muda tudo</h3>
<ul>
<li><strong>MPC:</strong> cada pad é um <em>golpe</em> (kick, caixa, hat). Você <strong>constrói</strong> a batida somando pads.</li>
<li><strong>SP-404:</strong> cada pad é um <strong>sample inteiro</strong> — um loop de 4 compassos, um vocal, uma levada pronta. Você <strong>dispara e manipula</strong> blocos.</li>
</ul>
<p>Por isso o SP é o preferido para <strong>tocar ao vivo</strong>: você chega com os blocos prontos e faz a performance com os efeitos.</p>
<h3>A linhagem</h3>
<ul>
<li><strong>SP-202 / SP-303 (1998–2001)</strong> — os primeiros; o 303 trouxe o Vinyl Sim que definiu o som lo-fi.</li>
<li><strong>SP-404 (2005) e SP-404SX / A</strong> — a era de ouro: <strong>Madlib</strong> praticamente virou sinônimo da máquina.</li>
<li><strong>SP-404 MKII (2021)</strong> — a atual: tela OLED, <strong>bateria interna</strong>, resampling, sequencer e ~40 efeitos. Preta e fosca, virou padrão de setup de produtor.</li>
</ul>
<h3>Os 3 modos de pad (a base da performance)</h3>
<ul>
<li><strong>GATE</strong> — o sample toca <strong>enquanto você segura</strong>. Soltou, parou. É o modo de picotar vocal na mão.</li>
<li><strong>LOOP</strong> — o sample <strong>trava rodando</strong> até você apertar de novo. É como se segura a base enquanto se toca por cima.</li>
<li><strong>TRIGGER (one-shot)</strong> — dispara e toca até o fim, sozinho. Para one-shots e efeitos.</li>
</ul>
<h3>MFX: a alma da máquina</h3>
<p>O SP é chamado de <em>"sampler and effector"</em> por isso: os efeitos <strong>são o instrumento</strong>, tocados ao vivo com dois knobs (CTRL 1 e CTRL 2).</p>
<ul>
<li><strong>VINYL SIM</strong> — a assinatura: corta agudo, adiciona chiado/crackle e cria o "som de disco". <strong>É esse efeito que fez o lo-fi hip-hop.</strong></li>
<li><strong>CASSETTE SIM</strong> — saturação de fita, banda estreita e wow/flutter (aquele desafinado charmoso).</li>
<li><strong>FILTER, DELAY, REVERB, CHORUS, ISOLATOR</strong> — os clássicos, tocáveis na hora.</li>
<li><strong>BIT CRUSH</strong> — reduz bits/resolução: o "12-bit" que remete às máquinas antigas.</li>
</ul>
<h3>RESAMPLE: o truque profissional</h3>
<p><strong>Resample = gravar a própria saída, com efeito, como um novo sample.</strong> Você toca um loop com Vinyl Sim + Delay, grava o resultado num pad livre — e agora aquele efeito está "queimado" no som, liberando o MFX para a próxima camada. É assim que se empilha textura no SP sem esgotar os efeitos.</p>
<h3>Arquivos e cartão</h3>
<ul>
<li><strong>Cartão SD</strong> (o MKII usa SDHC/SDXC) formatado <strong>pela própria máquina</strong> — não formate pelo computador.</li>
<li>Importe <strong>WAV</strong> (44.1 kHz). O MKII aceita mono e estéreo, 16/24 bits.</li>
<li>O projeto vive na pasta <strong>ROLAND/SP-404MK2</strong> do cartão — <strong>faça backup do cartão inteiro</strong>, não de arquivos soltos.</li>
<li><strong>Sempre desligue pelo botão</strong> (nunca tire a energia na marra): o SP grava o projeto no desligamento.</li>
</ul>
<p><strong>No simulador:</strong> 12 pads × 4 bancos com samples reais, os 3 modos, os 8 MFX principais tocáveis com CTRL 1/2, pattern sequencer e o <strong>RESAMPLE de verdade</strong> (grava sua performance com efeito num pad livre). Ligue o VINYL SIM e ouça o lo-fi nascer.</p>`.trim();

const roteiro = {
  cenas: [{ modo: "widget", numero: 1, titulo: "Roland SP-404 MKII — sampler de performance", duracao: 180,
    destaques: ["12 pads × 4 bancos: um SAMPLE por pad", "Modos GATE / LOOP / TRIGGER", "8 MFX reais (Vinyl Sim, Cassette, Crush…) com CTRL 1/2", "RESAMPLE: grava sua performance com efeito"],
    explicacao_texto: "Toque blocos inteiros e manipule ao vivo com o MFX — a máquina do lo-fi e do set ao vivo. Complete as 6 missões.",
    dica_profissional: "No SP o efeito é o instrumento: Vinyl Sim + CTRL na mão é o que faz o som de disco velho." }],
  metadata: { titulo: "Roland SP-404 MKII", gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 180, abordagem_didatica: "sampler de performance com áudio real (Web Audio)" },
};
const QUIZ = { titulo: "Quiz — Roland SP-404", questoes: [
  { t: "Qual a diferença fundamental entre o SP-404 e a MPC?", e: "Na MPC cada pad é um golpe (kick, caixa) e você constrói a batida; no SP cada pad é um SAMPLE INTEIRO (loop, vocal) que você dispara e manipula.",
    o: [["São iguais", false], ["No SP cada pad é um sample inteiro; na MPC, um golpe do kit", true], ["O SP não tem pads", false], ["O SP só toca bateria", false]] },
  { t: "O que faz o modo GATE?", e: "O sample toca só ENQUANTO você segura o pad — soltou, parou. É o modo de picotar vocal na mão.",
    o: [["Toca até o fim sozinho", false], ["Toca só enquanto você segura o pad", true], ["Trava o loop rodando", false], ["Grava um sample", false]] },
  { t: "Qual efeito do SP é responsável pelo som 'lo-fi hip-hop'?", e: "O VINYL SIM: corta agudos, adiciona chiado/crackle e simula o disco. É a assinatura da máquina.",
    o: [["Reverb", false], ["VINYL SIM (simulador de vinil)", true], ["Chorus", false], ["Isolator", false]] },
  { t: "O que é RESAMPLE e por que é um truque profissional?", e: "É gravar a própria saída (já com efeito) como um novo sample — o efeito fica 'queimado' no som e o MFX fica livre para a próxima camada.",
    o: [["Trocar o cartão SD", false], ["Gravar a própria saída com efeito como um novo sample, liberando o MFX", true], ["Apagar um pad", false], ["Aumentar o BPM", false]] },
] };

(async () => {
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj/roland-sp404-real.html"), "utf8");
  console.log(`SP-404: ${(html.length / 1024).toFixed(0)} KB → aula 7.5`);
  if (DRY) { console.log("[dry-run]"); return; }
  await req("DELETE", `/ai_animations?lesson_id=eq.${LID}`, null, { Prefer: "return=minimal" });
  await req("DELETE", `/quizzes?id=eq.${QID}`, null, { Prefer: "return=minimal" });
  await req("DELETE", `/lessons?id=eq.${LID}`, null, { Prefer: "return=minimal" });
  await req("POST", "/lessons", [{ id: LID, module_id: MODULE, titulo: "Roland SP-404: o sampler de performance (e o som lo-fi)",
    tipo: "texto", conteudo_rico: HTML, duracao_min: 22, ordem: 5, tem_quiz: true, preview_gratis: false }], { Prefer: "return=minimal" });
  await req("POST", "/quizzes", [{ id: QID, lesson_id: LID, titulo: QUIZ.titulo }], { Prefer: "return=minimal" });
  for (let j = 0; j < QUIZ.questoes.length; j++) {
    const q = QUIZ.questoes[j], id = QQ(j + 1);
    await req("POST", "/quiz_questions", [{ id, quiz_id: QID, texto: q.t, explicacao: q.e, ordem: j + 1, pontos: 1 }], { Prefer: "return=minimal" });
    await req("POST", "/quiz_options", q.o.map(([t, c], k) => ({ question_id: id, texto: t, correta: c, ordem: k + 1 })), { Prefer: "return=minimal" });
  }
  await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: LID, tipo: "interactive", status: "ready",
    model: "handcrafted-interactive", roteiro, urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?select=id&module_id=in.(${mods})`);
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: les.length }, { Prefer: "return=minimal" });
  console.log(`✅ 7.5 Roland SP-404 no ar. total_aulas=${les.length}.`);
})();
