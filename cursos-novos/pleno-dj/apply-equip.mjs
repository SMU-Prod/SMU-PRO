// Publica 3 AULAS NOVAS de equipamento no curso "DJ" ao vivo (módulo 2 — Equipamentos Essenciais):
//   2.5 Escolhendo o fone de DJ (lab de escuta)  -> dj-fones-lab-real.html
//   2.6 Escolhendo caixas de som e P.A.          -> dj-caixas-lab-real.html
//   2.7 Configurando o setup (gain staging)      -> dj-setup-gain-real.html
// Cada aula: teoria profissional + quiz + simulador de áudio real. IDs fixos (idempotente).
//   node cursos-novos/pleno-dj/apply-equip.mjs [--dry]
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
const MODULE = "2008d4d2-aa4c-4004-a773-90cf81ac79a6"; // Equipamentos Essenciais

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${txt.slice(0, 300)}`);
  return txt ? (txt[0] === "[" || txt[0] === "{" ? JSON.parse(txt) : txt) : null;
}
const LID = n => `d15d0000-57d1-4d00-9000-0000000000${10 + n}`; // ...0011/12/13
const QID = n => `d15d0000-57d1-4d00-9000-0000000000${20 + n}`;
const QQ = (n, j) => `d15d0000-57d1-4d00-9000-00000000${30 + n}0${j}`;

const AULAS = [
{ n: 1, ordem: 5, dur: 22, sim: "dj-fones-lab-real.html",
  titulo: "Escolhendo o fone de DJ: isolamento, driver e saúde auditiva",
  html: `
<p><strong>O fone é a ferramenta de trabalho mais pessoal do DJ</strong> — é nele que você prepara a próxima música com a pista berrando do lado. Fone errado = beatmatch impossível. Nesta aula você aprende o que separa um fone de DJ de um fone comum, e <strong>escuta a diferença</strong> no laboratório.</p>
<h3>O que o fone de DJ precisa ter</h3>
<ul>
<li><strong>Concha FECHADA (isolamento):</strong> a exigência nº 1. A concha fechada bloqueia a pista para você ouvir o cue. Fone aberto (de estúdio) deixa o ruído invadir — na cabine ele é inútil.</li>
<li><strong>Driver com pressão (40–50 mm):</strong> precisa entregar volume limpo acima do barulho da festa, com grave firme para ouvir o bumbo do beatmatch.</li>
<li><strong>Impedância adequada (25–70 Ω):</strong> baixa o suficiente para o mixer empurrar com folga. Fones de estúdio de 250 Ω ficam fracos na saída do DJM.</li>
<li><strong>Construção de estrada:</strong> dobradiça, concha giratória (para o "um ouvido só"), cabo substituível. O fone do DJ cai, roda e viaja.</li>
</ul>
<h3>As referências da cabine</h3>
<ul>
<li><strong>Sennheiser HD-25:</strong> o padrão há 30 anos — leve (140 g), 70 Ω, isolamento altíssimo, praticamente indestrutível.</li>
<li><strong>Pioneer DJ HDJ-X10 / HDJ-CX:</strong> a linha profissional da marca das cabines; driver de 50 mm, over-ear, feito para clube.</li>
<li><strong>AIAIAI TMA-2:</strong> modular (troca driver, almofada, cabo) — favorito nas cenas de house e techno.</li>
<li><strong>V-Moda M-100, Sony MDR-7506 (fechado):</strong> alternativas sólidas que aparecem em muitas cabines.</li>
</ul>
<h3>A técnica do "um ouvido só"</h3>
<p>O DJ clássico monitora com <strong>uma concha no ouvido e a outra atrás da orelha</strong>: cue de um lado, pista do outro — é assim que se compara a batida das duas músicas. Por isso concha giratória importa tanto.</p>
<h3>Saúde auditiva: seu ouvido é seu instrumento</h3>
<p><strong>Perda auditiva é irreversível e é a doença ocupacional do DJ.</strong> Regras de ouro: volume do fone no mínimo necessário (isolamento substitui volume!), pausas fora da cabine, e considere protetores auriculares de músico (atenuação linear) nas horas em que não está tocando. Fone acima de ~85% por horas seguidas = dano permanente.</p>
<p><strong>No simulador:</strong> vista cada fone com a pista lotada e compare no medidor o que chega ao seu ouvido. Complete as 6 missões — incluindo a do volume seguro.</p>`,
  quiz: { titulo: "Quiz — Escolhendo o fone de DJ", questoes: [
    { t: "Qual é a exigência nº 1 de um fone de cabine?", e: "Concha FECHADA, que isola a pista para você ouvir o cue. Fone aberto deixa o ruído invadir.",
      o: [["Ser sem fio", false], ["Concha fechada com bom isolamento", true], ["Ter LED colorido", false], ["Ser o mais barato", false]] },
    { t: "Por que um fone de estúdio de 250 Ω não é ideal no mixer de DJ?", e: "Impedância alta demais: a saída de fone do mixer não empurra com folga e o volume fica fraco na cabine.",
      o: [["Porque é feio", false], ["Impedância alta = volume fraco na saída do mixer", true], ["Porque não tem grave nenhum", false], ["Não há problema", false]] },
    { t: "O que é a técnica do 'um ouvido só'?", e: "Uma concha no ouvido (cue) e a outra atrás da orelha (pista) — para comparar as duas batidas no beatmatch.",
      o: [["Ouvir só o master", false], ["Uma concha no ouvido (cue), outra fora (pista), para comparar as batidas", true], ["Usar dois fones", false], ["Tirar o fone no drop", false]] },
    { t: "Sobre saúde auditiva, o correto é:", e: "Isolamento substitui volume: fone fechado permite trabalhar com volume MENOR. Perda auditiva é irreversível.",
      o: [["Volume no máximo para sentir a música", false], ["Isolamento substitui volume — trabalhe com o mínimo necessário e faça pausas", true], ["Fone aberto protege mais", false], ["Ouvido se acostuma e se recupera", false]] },
  ] } },
{ n: 2, ordem: 6, dur: 22, sim: "dj-caixas-lab-real.html",
  titulo: "Escolhendo caixas de som: P.A., subwoofer e monitor de cabine",
  html: `
<p><strong>A caixa de som é onde o seu trabalho vira festa.</strong> Escolher errado = pista sem grave, som rasgando ou equipamento queimado. Nesta aula você monta o P.A. do DJ e <strong>ouve a diferença</strong> entre cada tipo de caixa no laboratório.</p>
<h3>Os tipos que importam</h3>
<ul>
<li><strong>Caixa ativa 12"/15" (tipo QSC K12, JBL EON/PRX, Electro-Voice ZLX/EKX):</strong> o cavalo de batalha — amplificador embutido, DSP de proteção, entra XLR e toca. Em par sobre tripés, cobre de festa em casa a evento médio.</li>
<li><strong>Subwoofer ativo 15"/18":</strong> quem faz o GRAVE de verdade. Nenhuma caixa de topo entrega os 30–90 Hz que fazem a pista "sentir no peito". Liga-se com <strong>crossover</strong>: o sub cuida do grave, o topo do resto.</li>
<li><strong>Monitor de estúdio (5"–8"):</strong> som plano e honesto para treinar e produzir em casa. NÃO é P.A.: não tem pressão para festa.</li>
<li><strong>Caixinha bluetooth:</strong> não é ferramenta de trabalho. Sem grave, sem pressão, comprime tudo — você vai ouvir isso claramente no simulador.</li>
</ul>
<h3>Como ler as especificações (sem cair em marketing)</h3>
<ul>
<li><strong>Potência RMS (contínua)</strong> é a que vale — desconfie de "PMPO" e "potência de pico" gigantes.</li>
<li><strong>SPL máximo (dB):</strong> a pressão que a caixa entrega — é isso que dimensiona o tamanho da festa (cada +3 dB dobra a potência necessária).</li>
<li><strong>Resposta de frequência:</strong> caixa de topo que "vai até 45 Hz" no papel raramente enche uma pista de grave — por isso o sub existe.</li>
<li><strong>Cobertura (ex.: 90°×60°):</strong> o ângulo que a corneta espalha — importa para posicionar o par.</li>
</ul>
<h3>O monitor de cabine (booth)</h3>
<p><strong>O DJ não pode se guiar pelo P.A. da pista:</strong> longe da cabine, o som chega com atraso e engana o beatmatch. Por isso existe o <strong>monitor de cabine</strong> — uma caixa apontada para o DJ, com volume próprio (o knob BOOTH do mixer). Cabine profissional sempre tem.</p>
<h3>Dimensionando o kit</h3>
<ul>
<li><strong>Festa em casa (≤50 pessoas):</strong> 1–2 ativas 10"/12". Sub é bem-vindo.</li>
<li><strong>Bar/evento (~200):</strong> par de ativas 12"/15" + <strong>1–2 subs</strong> + monitor de cabine. O kit clássico do DJ.</li>
<li><strong>Balada/show (1000+):</strong> line array e banco de subs dimensionados por técnico de P.A. — aí entra a equipe de som (e o curso de SOM da SMU).</li>
</ul>
<p><strong>No simulador:</strong> ouça a mesma música em cada caixa, ligue o sub e sinta o grave aparecer, ative o monitor de cabine e dimensione o kit certo para um evento de 200 pessoas.</p>`,
  quiz: { titulo: "Quiz — Caixas de som e P.A.", questoes: [
    { t: "Quem produz o grave que 'bate no peito' na pista?", e: "O subwoofer (30–90 Hz), ligado com crossover. Caixa de topo sozinha não entrega essa faixa com pressão.",
      o: [["A caixa de topo 12\"", false], ["O subwoofer, com crossover", true], ["O tweeter", false], ["O monitor de cabine", false]] },
    { t: "Qual especificação de potência realmente vale na hora de comparar caixas?", e: "A potência RMS (contínua). 'PMPO' e picos gigantes são marketing.",
      o: [["PMPO", false], ["Potência RMS (contínua)", true], ["A cor do LED", false], ["O peso", false]] },
    { t: "Para que serve o monitor de cabine (booth)?", e: "O P.A. chega atrasado na cabine e engana o beatmatch — o monitor deixa o DJ se ouvir sem atraso, com volume próprio.",
      o: [["Deixar a cabine bonita", false], ["O DJ se ouvir sem o atraso do P.A. da pista", true], ["Substituir o fone", false], ["Aumentar o grave da pista", false]] },
    { t: "Kit clássico para um evento de ~200 pessoas:", e: "Par de ativas 12\"/15\" + sub(s) + monitor de cabine — o kit de trabalho do DJ.",
      o: [["Uma caixinha bluetooth potente", false], ["Par de ativas 12\"/15\" + subwoofer + monitor de cabine", true], ["Só monitores de estúdio", false], ["Line array de festival", false]] },
  ] } },
{ n: 3, ordem: 7, dur: 24, sim: "dj-setup-gain-real.html",
  titulo: "Configurando o setup: ganho, níveis e som limpo (gain staging)",
  html: `
<p><strong>Som profissional não é som alto — é som LIMPO em cada etapa.</strong> A habilidade que separa o DJ profissional do amador chama-se <strong>gain staging</strong>: entregar sinal forte e sem distorção de um estágio para o próximo, do player até a caixa. Nesta aula você configura a cadeia inteira <strong>ouvindo</strong> o que acontece quando ela está certa — e quando está estourada.</p>
<h3>A cadeia de ganho do DJ</h3>
<p><strong>DECK → TRIM (canal) → FADER + MASTER → CAIXA ATIVA.</strong> Cada elo tem seu medidor e seu headroom. A regra de ouro: <strong>se um estágio clipa (vermelho), a distorção segue para todos os seguintes</strong> — abaixar o próximo estágio NÃO conserta, só esconde o estrago mais baixo.</p>
<ol>
<li><strong>DECK/fonte:</strong> saída do player em nível saudável (notebook: volume do sistema em ~80–100%, nunca "boostado" por equalizador do Windows).</li>
<li><strong>TRIM (gain) do canal:</strong> o ajuste mais importante da mesa. Toque o trecho mais forte da música e ajuste o TRIM para os picos baterem no <strong>fim do verde/amarelo</strong> — nunca no vermelho. Cada música tem gravação diferente: reajuste o TRIM a cada faixa!</li>
<li><strong>FADER + MASTER:</strong> fader trabalhando em ~85% (sobra curso para dinâmica) e MASTER limpo — é o nível que sai para o sistema.</li>
<li><strong>CAIXA ATIVA:</strong> o volume da SALA se faz aqui, por último. Com sinal limpo chegando, a caixa trabalha folgada e o DSP não entra em proteção.</li>
</ol>
<h3>Diagnóstico como profissional</h3>
<ul>
<li><strong>"Não sai som":</strong> siga a cadeia na ordem, olhando os medidores — o problema está no primeiro estágio onde o medidor morre (cabo? trim zerado? fader embaixo? caixa desligada?). Nunca saia girando tudo para o máximo.</li>
<li><strong>"Tá estourando":</strong> encontre o estágio que está no vermelho e corrija ELE. O erro clássico: trim estourado com master abaixado "compensando" — o som continua sujo, só que mais baixo.</li>
</ul>
<h3>Cabos: a parte que ninguém vê e todo mundo ouve</h3>
<p>Em tiragem longa até a caixa, use <strong>cabo balanceado (XLR ou P10 TRS)</strong>: ele cancela interferência. Cabo P10 comum (desbalanceado) longo capta <strong>zumbido de rede (60 Hz)</strong> e rádio — aquele "bzzz" que estraga a festa. RCA só para curtas distâncias entre player e mixer.</p>
<p><strong>No simulador:</strong> a cadeia completa com medidores em cada estágio e <strong>clipping audível de verdade</strong>. Resolva os dois cenários-problema ("não sai som" e "tá estourando") e feche com o desafio do som limpo — igual chegar numa cabine desconhecida no dia do evento.</p>`,
  quiz: { titulo: "Quiz — Gain staging e configuração", questoes: [
    { t: "Um estágio da cadeia está clipando (vermelho). Abaixar o estágio SEGUINTE resolve?", e: "Não — a distorção já aconteceu e segue para frente. Corrige-se o estágio que está clipando.",
      o: [["Sim, o som volta a ficar limpo", false], ["Não — a distorção segue; corrija o estágio que clipa", true], ["Sim, se abaixar bem rápido", false], ["Tanto faz", false]] },
    { t: "Como se ajusta o TRIM (gain) do canal corretamente?", e: "No trecho mais forte da música, picos batendo no fim do verde/amarelo — e reajuste a cada faixa, pois cada gravação tem nível diferente.",
      o: [["Sempre no máximo", false], ["Picos no fim do verde/amarelo no trecho mais forte, reajustando a cada música", true], ["Sempre no mínimo", false], ["Igual para todas as músicas", false]] },
    { t: "'Não sai som'. Qual é o procedimento profissional?", e: "Seguir a cadeia na ordem (deck → canal → master → caixa) olhando os medidores: o problema está no primeiro estágio onde o sinal morre.",
      o: [["Girar tudo para o máximo", false], ["Seguir a cadeia na ordem, achando o primeiro estágio sem sinal", true], ["Reiniciar o notebook", false], ["Trocar todas as caixas", false]] },
    { t: "Para levar sinal até uma caixa a 20 metros, o cabo certo é:", e: "Balanceado (XLR ou P10 TRS): cancela interferência. Desbalanceado longo capta zumbido de 60 Hz.",
      o: [["P10 comum (desbalanceado)", false], ["XLR balanceado (ou P10 TRS)", true], ["RCA", false], ["Qualquer um", false]] },
  ] } },
];

function roteiro(a) {
  const map = {
    1: { t: "Lab de Fones — escute a diferença", d: ["5 fones reais comparados (HD-25, HDJ-X10, TMA-2…)", "Isolamento e resposta com áudio real", "Técnica do 'um ouvido só'", "Missão de volume seguro (saúde auditiva)"], s: "Vista cada fone com a pista lotada e compare o que chega ao seu ouvido. 6 missões." },
    2: { t: "Lab de Caixas — monte o P.A.", d: ["4 caixas + subwoofer com resposta real", "Crossover: o sub fazendo o grave de verdade", "Monitor de cabine (booth)", "Dimensionamento por tamanho de festa"], s: "Ouça a mesma música em cada caixa, ligue o sub e monte o kit certo. 6 missões." },
    3: { t: "Setup & Gain Staging — som limpo", d: ["Cadeia completa: deck → trim → master → caixa", "Clipping AUDÍVEL em cada estágio", "Cenários-problema: 'não sai som' e 'tá estourando'", "Cabo balanceado × zumbido"], s: "Configure a cadeia de ganho ouvindo o resultado e resolva os cenários. 5 missões." },
  }[a.n];
  return { cenas: [{ modo: "widget", numero: 1, titulo: map.t, duracao: 150, destaques: map.d, explicacao_texto: map.s,
      dica_profissional: "Equipamento é ferramenta: quem conhece a ferramenta trabalha em qualquer casa." }],
    metadata: { titulo: map.t, gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 150, abordagem_didatica: "laboratório com áudio real (Web Audio)" } };
}

(async () => {
  for (const a of AULAS) {
    const p = path.join(ROOT, "simuladores/dj", a.sim);
    if (!fs.existsSync(p)) { console.log("✗ falta " + a.sim); process.exit(1); }
    console.log(`✓ ${a.ordem} ${a.titulo.slice(0, 56)} <- ${a.sim} (${(fs.statSync(p).size / 1024).toFixed(0)} KB)`);
  }
  if (DRY) { console.log("[dry-run]"); return; }
  for (const a of AULAS) {
    const lid = LID(a.n), qid = QID(a.n);
    const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", a.sim), "utf8");
    // limpeza (idempotente)
    await req("DELETE", `/ai_animations?lesson_id=eq.${lid}`, null, { Prefer: "return=minimal" });
    await req("DELETE", `/quizzes?id=eq.${qid}`, null, { Prefer: "return=minimal" });
    await req("DELETE", `/lessons?id=eq.${lid}`, null, { Prefer: "return=minimal" });
    await req("POST", "/lessons", [{ id: lid, module_id: MODULE, titulo: a.titulo, tipo: "texto",
      conteudo_rico: a.html.trim(), duracao_min: a.dur, ordem: a.ordem, tem_quiz: true, preview_gratis: false }], { Prefer: "return=minimal" });
    await req("POST", "/quizzes", [{ id: qid, lesson_id: lid, titulo: a.quiz.titulo }], { Prefer: "return=minimal" });
    for (let j = 0; j < a.quiz.questoes.length; j++) {
      const q = a.quiz.questoes[j], qqid = QQ(a.n, j + 1);
      await req("POST", "/quiz_questions", [{ id: qqid, quiz_id: qid, texto: q.t, explicacao: q.e, ordem: j + 1, pontos: 1 }], { Prefer: "return=minimal" });
      await req("POST", "/quiz_options", q.o.map(([t, c], k) => ({ question_id: qqid, texto: t, correta: c, ordem: k + 1 })), { Prefer: "return=minimal" });
    }
    await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: lid, tipo: "interactive", status: "ready",
      model: "handcrafted-interactive", roteiro: roteiro(a), urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    console.log(`  ✓ publicada: ${a.titulo.slice(0, 60)}`);
  }
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?select=id&module_id=in.(${mods})`);
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: les.length }, { Prefer: "return=minimal" });
  console.log(`\n✅ 3 aulas de equipamento no ar. total_aulas=${les.length}.`);
})();
