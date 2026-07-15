// Cria o MÓDULO 7 "Produção: MPC e Grooveboxes" no curso "DJ" ao vivo, com 4 aulas + quizzes
// e o simulador de MPC (akai-mpc-real.html) nas aulas de prática.
//   node cursos-novos/pleno-dj/apply-mpc.mjs [--dry]
// IDs fixos (idempotente). Dados técnicos conferidos com manuais/specs oficiais Akai.
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
const MODULE = "d15d0000-57d1-4d00-9000-0000000000f7"; // módulo 7 (novo)
const LID = n => `d15d0000-57d1-4d00-9000-0000000000${70 + n}`;
const QID = n => `d15d0000-57d1-4d00-9000-0000000000${80 + n}`;
// 12 hex no último grupo: "9" + 9 zeros + n + j
const QQ  = (n, j) => `d15d0000-57d1-4d00-9000-9000000000${n}${j}`;

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${txt.slice(0, 300)}`);
  return txt ? (txt[0] === "[" || txt[0] === "{" ? JSON.parse(txt) : txt) : null;
}
const SIM = "akai-mpc-real.html";
const roteiro = (t, sub, dica, dest) => ({
  cenas: [{ modo: "widget", numero: 1, titulo: t, duracao: 180, destaques: dest, explicacao_texto: sub, dica_profissional: dica }],
  metadata: { titulo: t, gerado_por: "simulador-fiel-smu", total_cenas: 1, duracao_total: 180, abordagem_didatica: "simulador de produção com áudio real (Web Audio)" },
});

const AULAS = [
{ n:1, ordem:1, dur:20, sim:true,
  titulo:"O que é uma MPC: a máquina que criou o hip-hop moderno",
  html:`
<p><strong>MPC = Music Production Center.</strong> É sampler + sequenciador + instrumento de performance numa caixa só — a ferramenta que definiu o som do hip-hop, do boom bap ao trap, e que atravessou a música eletrônica inteira.</p>
<h3>A história em 4 marcos</h3>
<ul>
<li><strong>1988 — MPC60:</strong> projetada por <strong>Roger Linn</strong> (o mesmo da LinnDrum) para a Akai. 16 pads sensíveis à força, sampler de <strong>12 bits / 40 kHz</strong> e o sequenciador com o <em>swing</em> lendário. Nasce o padrão que existe até hoje.</li>
<li><strong>1994 — MPC3000:</strong> 16 bits, filtros analógicos. A máquina de <strong>DJ Premier, Pete Rock, Dilla</strong> — o som do rap dos anos 90 saiu daqui.</li>
<li><strong>2000 — MPC2000XL:</strong> a mais popular de todos os tempos: barata, robusta, disquete/Zip. Democratizou a produção.</li>
<li><strong>Hoje — MPC Live II / One / X / Key 61:</strong> <strong>standalone</strong> (não precisa de computador), tela colorida touch, pads RGB, SSD interno, som de 24 bits e o mesmo fluxo de 1988.</li>
</ul>
<h3>Por que a MPC mudou tudo</h3>
<p>Antes dela, sequenciar era digitar em telas. A MPC trouxe o <strong>toque</strong>: você bate no pad com a mão, a máquina grava <em>a sua</em> levada — com a força (velocity) e o atraso humano que você tocou. Foi o instrumento que fez o produtor <strong>tocar</strong> a batida em vez de programá-la.</p>
<ul>
<li><strong>Swing/groove:</strong> o "atraso" característico da MPC (o famoso swing de 54%) é o que dá o balanço do boom bap. J Dilla virou lenda desligando a quantização e tocando "torto" de propósito.</li>
<li><strong>Velocity:</strong> pad batido forte soa diferente de batido fraco — é o que separa uma batida viva de um loop robótico.</li>
<li><strong>Sampling:</strong> pegar um trecho de disco, fatiar e tocar nos pads criou uma linguagem inteira.</li>
</ul>
<h3>O ecossistema hoje (e as concorrentes)</h3>
<ul>
<li><strong>Akai MPC</strong> (Live II, One+, X SE, Key 61) — o padrão da produção standalone.</li>
<li><strong>Native Instruments Maschine</strong> — mesma filosofia, mas ancorada no computador.</li>
<li><strong>Roland SP-404 MKII</strong> — sampler de performance, queridinho do lo-fi.</li>
<li><strong>Elektron (Digitakt/Octatrack)</strong> — sequenciamento por step, cena techno.</li>
<li><strong>Ableton Push / Novation Circuit</strong> — grooveboxes de outra escola.</li>
</ul>
<p><strong>Para o DJ:</strong> dominar a MPC é o passo natural depois da cabine — é como você deixa de <em>tocar</em> a música dos outros e passa a <strong>fazer a sua</strong>. Muitos DJs viram produtores exatamente aqui.</p>`,
  quiz:{ titulo:"Quiz — O que é uma MPC", questoes:[
    { t:"O que significa MPC e o que ela é?", e:"Music Production Center: sampler + sequenciador + instrumento de performance numa máquina só.",
      o:[["Multi Player Console, um tocador de música",false],["Music Production Center: sampler + sequenciador + performance",true],["Mixer Pro Channel, um mixer de DJ",false],["Um tipo de fone",false]] },
    { t:"Quem projetou a MPC60 (1988) e o que ela trouxe de revolucionário?", e:"Roger Linn projetou para a Akai: 16 pads sensíveis à força + sequenciador com swing — o produtor passou a TOCAR a batida.",
      o:[["Bob Moog, trouxe o sintetizador",false],["Roger Linn: 16 pads com velocity e o sequenciador com swing",true],["A Pioneer, trouxe o CDJ",false],["Ninguém sabe",false]] },
    { t:"O que é 'velocity' num pad de MPC?", e:"É a força do toque: bater forte ou fraco muda o som — é o que dá vida humana à batida.",
      o:[["A velocidade do BPM",false],["A força do toque no pad, que muda o som",true],["A rotação do disco",false],["O volume geral",false]] },
    { t:"Qual destas é a MPC moderna standalone (sem computador)?", e:"A linha atual (MPC Live II, One, X, Key 61) roda standalone, com tela touch, pads RGB e SSD interno.",
      o:[["MPC60",false],["MPC Live II / One / X",true],["MPC2000XL",false],["Nenhuma, MPC sempre precisa de PC",false]] },
  ]} },

{ n:2, ordem:2, dur:24, sim:true,
  titulo:"Anatomia da MPC e os arquivos certos (.XPM, .WAV, .SXQ, .XPJ)",
  html:`
<p><strong>A MPC tem uma hierarquia — e entender ela é 90% do trabalho.</strong> Quem erra o tipo de arquivo perde o beat, não consegue abrir o projeto no estúdio do parceiro, ou entrega um pen drive que ninguém carrega.</p>
<h3>A hierarquia da MPC (de baixo para cima)</h3>
<ol>
<li><strong>SAMPLE</strong> — o som cru de um pad (um kick, um vocal, um trecho de disco).</li>
<li><strong>PROGRAM</strong> — o "kit": o conjunto dos 16 pads (× 4 bancos = 64 sons) com os ajustes de cada um (tune, decay, filtro, nível, layers).</li>
<li><strong>SEQUENCE</strong> — o loop que você gravou (geralmente 2, 4 ou 8 compassos), com as notas/pads no tempo.</li>
<li><strong>SONG</strong> — as sequences <strong>encadeadas</strong> = a música inteira (intro → verso → refrão → saída).</li>
<li><strong>PROJECT</strong> — tudo junto: programs + sequences + samples + configurações.</li>
</ol>
<h3>Os arquivos certos (MPC moderna — Live II / One / X)</h3>
<ul>
<li><strong>.XPJ</strong> — <strong>Projeto</strong>. É o que você abre e salva ao trabalhar. Vem com a pasta <em>[Projeto]Project Data</em> ao lado: <strong>as duas coisas viajam juntas</strong> (copiou só o .XPJ? perdeu os samples).</li>
<li><strong>.XPM</strong> — <strong>Program</strong> (o kit). É o arquivo que você troca/compartilha para levar um kit inteiro.</li>
<li><strong>.WAV</strong> — <strong>Sample</strong>. O padrão universal: 16 ou 24 bits, 44.1 kHz. <strong>Use WAV, não MP3</strong>: MP3 já vem comprimido com perda e fica pior a cada exportação.</li>
<li><strong>.SXQ</strong> — <strong>Sequence</strong> exportada (a MPC moderna também exporta <strong>.MID</strong> para levar ao computador).</li>
<li><strong>Legado:</strong> <strong>.PGM</strong> (program do MPC clássico), <strong>.SND</strong> (sample do MPC3000/2000), <strong>.APS</strong> (MPC1000/2500). A MPC moderna <em>importa</em> esses antigos — bom para usar kits históricos.</li>
</ul>
<h3>Regras de ouro de arquivo (do manual, e da vida real)</h3>
<ul>
<li><strong>Formate o pen/SSD em exFAT</strong> (a MPC lê FAT32 e exFAT; exFAT aceita arquivos grandes).</li>
<li><strong>Salve o projeto com "Save As" a cada etapa</strong> (beat_v1, beat_v2…): a MPC não tem histórico infinito de undo.</li>
<li><strong>Grave seus samples em WAV 44.1 kHz</strong>. Se importar MP3, converta primeiro — não empilhe compressão.</li>
<li><strong>Ao entregar para outro produtor:</strong> mande o <strong>projeto (.XPJ + pasta de dados)</strong>, ou exporte <strong>stems em WAV</strong>. Nunca só o .XPM (sem os samples ele abre mudo).</li>
</ul>
<h3>Anatomia física</h3>
<ul>
<li><strong>16 pads RGB</strong> (4×4) sensíveis à força + <strong>bancos A/B/C/D</strong> = 64 sons por program.</li>
<li><strong>Q-LINK</strong> — knobs que editam o pad selecionado ao vivo (tune, decay, filtro, nível).</li>
<li><strong>Transport</strong> — PLAY, STOP, REC, OVERDUB, TAP TEMPO.</li>
<li><strong>Tela touch</strong> — modos MAIN, BROWSE (arquivos), PROGRAM (editar kit), STEP SEQ (grade).</li>
<li><strong>Entradas/saídas</strong> — line/mic in (para samplear), saídas main, fone, MIDI e USB.</li>
</ul>
<p><strong>No simulador:</strong> repare no canto da tela: ele mostra os arquivos do projeto (.XPM, .WAV, .SXQ, .XPJ) e o nome do program carregado muda quando você troca de kit — exatamente como na máquina.</p>`,
  quiz:{ titulo:"Quiz — Anatomia e arquivos da MPC", questoes:[
    { t:"Qual é a hierarquia correta da MPC?", e:"Sample → Program (kit) → Sequence (loop) → Song (sequences encadeadas) → Project (tudo).",
      o:[["Song → Sample → Program",false],["Sample → Program → Sequence → Song → Project",true],["Project → Sample → Song",false],["Não existe hierarquia",false]] },
    { t:"Você vai mandar seu beat para outro produtor abrir na MPC dele. O que envia?", e:"O projeto: .XPJ MAIS a pasta [Projeto]Project Data (com os samples). Só o .XPM abre sem som.",
      o:[["Só o arquivo .XPM",false],["O .XPJ junto com a pasta Project Data (ou stems em WAV)",true],["Um print da tela",false],["Só o .SXQ",false]] },
    { t:"Qual formato usar para os samples?", e:"WAV (16/24 bits, 44.1 kHz). MP3 já é comprimido com perda e piora a cada etapa.",
      o:[["MP3, porque é menor",false],["WAV 44.1 kHz — sem perda",true],["Tanto faz",false],["AAC",false]] },
    { t:"O que é o arquivo .XPM?", e:"É o PROGRAM: o kit com os 16 pads (×4 bancos) e os ajustes de cada som.",
      o:[["O projeto inteiro",false],["O PROGRAM (kit de pads) da MPC",true],["Um sample",false],["Uma música exportada",false]] },
  ]} },

{ n:3, ordem:3, dur:26, sim:true,
  titulo:"Programando o beat: pads, velocity, quantize e note repeat",
  html:`
<p><strong>Programar na MPC é tocar, não digitar.</strong> Este é o fluxo que todo produtor repete desde 1988 — e que você vai executar no simulador.</p>
<h3>O fluxo de gravação (o mesmo em qualquer MPC)</h3>
<ol>
<li><strong>Escolha o PROGRAM</strong> (o kit). Cada kit tem BPM sugerido: boom bap ~90, house ~124, trap ~140.</li>
<li><strong>Ajuste o BPM</strong> — ou use <strong>TAP TEMPO</strong> batendo no tempo da ideia que está na sua cabeça.</li>
<li><strong>Aperte REC + PLAY</strong> e toque os pads no tempo. A MPC grava a sua levada com a <em>velocity</em> de cada batida.</li>
<li><strong>OVERDUB</strong> — grava por cima sem apagar: primeiro o kick, depois a caixa, depois o hi-hat. É camada por camada.</li>
<li><strong>Corrija com TIMING CORRECT</strong> (quantize) e polir com ERASE/UNDO.</li>
</ol>
<h3>TIMING CORRECT (quantize): o ajuste mais mal-entendido</h3>
<p>Ele <strong>encaixa</strong> suas batidas na grade:</p>
<ul>
<li><strong>1/16</strong> — o padrão. Segura hi-hats e levadas normais.</li>
<li><strong>1/8</strong> — mais solto, para batidas simples.</li>
<li><strong>1/4</strong> — só nos tempos; endurece tudo.</li>
<li><strong>OFF</strong> — <strong>a escolha do Dilla</strong>: nada é corrigido, o "erro" humano vira o groove. Só use quando sua mão já for firme.</li>
</ul>
<p><strong>Segredo profissional:</strong> quantize forte demais mata o balanço. O <strong>swing</strong> (54–58% no boom bap) existe justamente para devolver o "atraso" que humaniza — quantizar em 100% de rigidez é o que faz um beat soar de máquina.</p>
<h3>NOTE REPEAT: o rolo de hi-hat</h3>
<p>Segure o pad com o NOTE REPEAT ligado e ele <strong>repete no tempo</strong> (1/8, 1/16, 1/32). É assim que se faz o rolo de hi-hat do trap e as levadas rápidas que a mão não alcança. Mudando a divisão no meio do rolo, você cria a aceleração clássica.</p>
<h3>Velocity: onde mora a vida</h3>
<p>Bata o <strong>kick forte</strong> no tempo 1 e mais <strong>fraco</strong> nas notas de passagem; alterne a força dos hi-hats. Um beat com velocity variada respira; um com tudo em 127 soa plástico. No simulador, <strong>bater na parte de cima do pad = forte, na de baixo = fraco</strong>.</p>
<p><strong>No simulador:</strong> ligue o PLAY, aperte REC e toque. Se errar o tempo, ligue o TIMING CORRECT 1/16. Depois desligue o quantize e sinta a diferença. Use o NOTE REPEAT 1/16 num hi-hat e ouça o rolo nascer.</p>`,
  quiz:{ titulo:"Quiz — Programando o beat", questoes:[
    { t:"Qual a diferença entre REC e OVERDUB?", e:"REC grava a passagem (substituindo); OVERDUB grava POR CIMA sem apagar — é como se empilha kick, caixa e hi-hat.",
      o:[["São a mesma coisa",false],["OVERDUB grava por cima sem apagar o que já existe",true],["OVERDUB apaga tudo",false],["REC só toca",false]] },
    { t:"O que faz o TIMING CORRECT (quantize)?", e:"Encaixa as batidas tocadas na grade de tempo (1/4, 1/8, 1/16). Em OFF, mantém o groove humano.",
      o:[["Muda o volume",false],["Encaixa as batidas na grade de tempo escolhida",true],["Troca o kit",false],["Grava por cima",false]] },
    { t:"Por que J Dilla é lenda por desligar a quantização?", e:"Com o quantize OFF o 'erro' humano vira groove — o balanço nasce do atraso, não da grade perfeita.",
      o:[["Porque assim é mais rápido",false],["Porque o 'erro' humano vira groove — a rigidez mata o balanço",true],["Porque a MPC estragava",false],["Porque não sabia usar",false]] },
    { t:"Para que serve o NOTE REPEAT?", e:"Segurando o pad, ele repete no tempo (1/8, 1/16, 1/32) — é como se faz o rolo de hi-hat do trap.",
      o:[["Repetir a música inteira",false],["Repetir o pad no tempo enquanto você segura (rolo de hi-hat)",true],["Salvar o projeto",false],["Aumentar o BPM",false]] },
  ]} },

{ n:4, ordem:4, dur:26, sim:true,
  titulo:"Trocando os sons dos pads e montando a cena (Program → Sequence → Song)",
  html:`
<p><strong>Um beat pronto é program + sequences + song.</strong> Aqui você aprende a mudar o som de cada pad e a transformar loops soltos numa música com começo, meio e fim.</p>
<h3>1) Trocando/editando o som de um pad</h3>
<p>Todo pad tem um sample e um conjunto de parâmetros. Na MPC você edita no modo <strong>PROGRAM</strong>; no simulador, com os <strong>Q-LINK</strong>:</p>
<ul>
<li><strong>TUNE</strong> (semitons) — afina o sample. Baixar o tune de um kick o deixa mais grave e pesado; subir um vocal cria o efeito "chipmunk" do soul sample.</li>
<li><strong>DECAY</strong> — quanto tempo o som dura. Encurtar o 808 deixa o beat "seco"; alongar cria aquele sub arrastado do trap.</li>
<li><strong>FILTER</strong> (corte) — abafa o brilho. É o que dá o ar "lo-fi/vinil" numa levada.</li>
<li><strong>LEVEL</strong> — o volume daquele pad no kit. É o seu equilíbrio interno (o kick não pode atropelar a caixa).</li>
<li>Na máquina real ainda tem <strong>layers</strong> (até 4 samples por pad, alternando por velocity), <strong>start/end</strong> (fatiar o sample), <strong>envelope</strong> e <strong>LFO</strong>.</li>
</ul>
<p><strong>Regra prática:</strong> a edição é <strong>por pad</strong> — mexer no TUNE do pad 1 não afeta o pad 2. E ela vive dentro do <strong>PROGRAM (.XPM)</strong>: salvou o program, salvou seus ajustes.</p>
<h3>2) Sampling: de onde vêm os sons</h3>
<ul>
<li><strong>Grave pela entrada</strong> (toca-discos, teclado, microfone) ou <strong>importe WAV</strong> pelo modo BROWSE.</li>
<li><strong>Chop (fatiar):</strong> pegue um trecho de disco e corte em pedaços — cada fatia vai para um pad. É a essência do hip-hop.</li>
<li><strong>Direitos:</strong> sample de disco alheio em lançamento comercial exige <strong>clearance</strong> (autorização). Para treino/portfólio, use <strong>packs livres de royalties</strong> ou grave você mesmo.</li>
</ul>
<h3>3) SEQUENCE: os loops</h3>
<p>Cada sequence é um trecho (2/4/8 compassos). O profissional cria variações: <strong>SEQ 1</strong> = groove principal; <strong>SEQ 2</strong> = variação com virada; <strong>SEQ 3</strong> = quebra (só bateria/vocal); <strong>SEQ 4</strong> = clímax. O botão <strong>COPY SEQ</strong> duplica uma sequence para você editar a variação sem começar do zero.</p>
<h3>4) SONG MODE: a cena</h3>
<p>No <strong>SONG MODE</strong> você <strong>encadeia</strong> as sequences numa ordem, com quantas repetições quiser — e isso vira a música:</p>
<p style="background:#0c0e12;border-left:3px solid #f4a02a;padding:8px 12px;font-family:Consolas,monospace;font-size:12px">
INTRO: SEQ 3 ×2 → VERSO: SEQ 1 ×8 → VIRADA: SEQ 2 ×1 → REFRÃO: SEQ 4 ×8 → SAÍDA: SEQ 3 ×2</p>
<p>É o mesmo raciocínio de <strong>phrasing</strong> que você aprendeu na cabine: blocos de 8/16 compassos. A MPC só te dá o controle de montá-los.</p>
<h3>5) Exportando</h3>
<ul>
<li><strong>Stems (WAV por track)</strong> — para mixar depois num DAW ou entregar ao engenheiro de mixagem.</li>
<li><strong>Mixdown (WAV estéreo)</strong> — a música pronta, para tocar no seu set.</li>
<li><strong>.MID</strong> — só as notas, para reabrir noutro programa.</li>
<li><strong>Fechou o beat?</strong> Exporte em WAV e leve para o seu pen drive de DJ — é assim que o produtor toca a própria música na pista.</li>
</ul>
<p><strong>No simulador:</strong> grave a SEQ 1, use COPY SEQ para criar a SEQ 2 e altere-a, depois ligue o <strong>SONG MODE</strong> e ouça as duas encadeadas. Antes disso, selecione um pad e mude TUNE/DECAY — repare que só aquele pad muda.</p>`,
  quiz:{ titulo:"Quiz — Sons, sequences e song", questoes:[
    { t:"Você mudou o TUNE do pad 1. O que acontece com o pad 2?", e:"Nada: a edição é POR PAD e vive dentro do PROGRAM (.XPM).",
      o:[["Muda junto",false],["Nada — a edição é por pad, dentro do program",true],["Apaga o pad 2",false],["Muda o BPM",false]] },
    { t:"O que é o SONG MODE?", e:"É onde você encadeia as sequences numa ordem com repetições — os loops viram uma música completa.",
      o:[["Um efeito de reverb",false],["Onde as sequences são encadeadas em ordem = a música completa",true],["Um tipo de sample",false],["O modo de gravar",false]] },
    { t:"Você quer usar um trecho de um disco famoso num lançamento comercial. O que é preciso?", e:"Clearance (autorização dos detentores). Para treino/portfólio, use packs livres de royalties ou grave você mesmo.",
      o:[["Nada, sample é livre",false],["Clearance (autorização) — ou usar packs royalty-free",true],["Só creditar no Instagram",false],["Mudar o tune resolve",false]] },
    { t:"Terminou o beat e quer tocá-lo no seu set de DJ. O que exportar?", e:"Um mixdown em WAV estéreo — daí vai para o pen drive/rekordbox. Stems servem para mixar depois.",
      o:[["O arquivo .XPM",false],["Um mixdown em WAV estéreo",true],["Um print da tela",false],["Só o .SXQ",false]] },
  ]} },
];

(async () => {
  const html = fs.readFileSync(path.join(ROOT, "simuladores/dj", SIM), "utf8");
  console.log(`Simulador MPC: ${(html.length / 1024).toFixed(0)} KB`);
  AULAS.forEach(a => console.log(`✓ 7.${a.ordem} ${a.titulo.slice(0, 56)}${a.sim ? "  [+SIM]" : ""}`));
  if (DRY) { console.log("[dry-run]"); return; }

  // módulo 7
  await req("DELETE", `/modules?id=eq.${MODULE}`, null, { Prefer: "return=minimal" });
  await req("POST", "/modules", [{ id: MODULE, course_id: COURSE, titulo: "Produção: MPC e Grooveboxes", ordem: 7 }], { Prefer: "return=minimal" });

  for (const a of AULAS) {
    const lid = LID(a.n), qid = QID(a.n);
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
    if (a.sim) {
      const r = { 1: roteiro("MPC — conheça a máquina", "Esta é a MPC: 16 pads sensíveis à força, sequenciador e kits. Bata nos pads e sinta a velocity — o toque que Roger Linn inventou em 1988 e que criou o hip-hop moderno.", "Bater forte ou fraco muda o som: é a velocity que separa uma batida viva de um loop de máquina.", ["16 pads RGB velocity-sensitive", "4 programs: Boom Bap, 808 Trap, House, MPC60", "O fluxo Program → Sequence → Song", "Sequenciador real com swing e quantize"]),
                  2: roteiro("MPC — anatomia e arquivos", "Explore a máquina: 16 pads RGB × 4 bancos, Q-LINK, transport e a tela mostrando os arquivos do projeto (.XPM/.WAV/.SXQ/.XPJ).", "Projeto = .XPJ + pasta Project Data. As duas coisas viajam juntas, sempre.", ["16 pads RGB + bancos A–D (64 sons)", "Tela com program, BPM, bar e arquivos", "Q-LINK: tune, decay, filter, level", "4 programs reais (Boom Bap, 808, House, MPC60)"]),
                 3: roteiro("MPC — programe seu beat", "REC + PLAY e toque os pads. Corrija com TIMING CORRECT, engrosse com OVERDUB e faça rolo de hi-hat com NOTE REPEAT.", "Quantize demais mata o balanço. Grave em 1/16, depois experimente OFF e sinta o groove humano.", ["REC/OVERDUB/PLAY/STOP + TAP TEMPO", "TIMING CORRECT: OFF, 1/4, 1/8, 1/16", "NOTE REPEAT (rolo de hi-hat)", "Velocity real: topo do pad = forte"]),
                 4: roteiro("MPC — sons e SONG MODE", "Edite o som de cada pad nos Q-LINK, grave variações em SEQ 1–4 e encadeie tudo no SONG MODE: os loops viram música.", "Program → Sequence → Song. É esse caminho desde a MPC60 de 1988.", ["Q-LINK edita POR PAD (tune/decay/filter)", "4 sequences + COPY SEQ", "SONG MODE encadeia as cenas", "Troca de program muda kit e BPM"]) }[a.n];
      await req("POST", "/ai_animations", [{ id: crypto.randomUUID(), lesson_id: lid, tipo: "interactive", status: "ready",
        model: "handcrafted-interactive", roteiro: r, urls: [{ html }], custo_usd: 0 }], { Prefer: "return=minimal" });
    }
    console.log(`  ✓ publicada: 7.${a.ordem} ${a.titulo.slice(0, 50)}`);
  }
  const mods = (await req("GET", `/modules?course_id=eq.${COURSE}&select=id`)).map(m => m.id).join(",");
  const les = await req("GET", `/lessons?select=id&module_id=in.(${mods})`);
  await req("PATCH", `/courses?id=eq.${COURSE}`, { total_aulas: les.length }, { Prefer: "return=minimal" });
  console.log(`\n✅ Módulo 7 (MPC) no ar: ${AULAS.length} aulas. total_aulas=${les.length}.`);
})();
