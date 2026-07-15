// Gerador da migration SQL — Curso "DJ — Formação Profissional" (nível pleno).
// Padrão de referência: pleno "Som — Formação Completa" (teoria rica + simuladores fiéis).
// Cria curso NOVO (ativo=false) com 3 módulos, aulas + quizzes e os SIMULADORES FIÉIS:
// cabine club-standard (2× CDJ-3000 + DJM-A9) e toca-discos (2× Technics SL-1200MK7),
// ambos com áudio real (Web Audio). categorias='{tecnico,dj}' => portal aula.
// Aditivo e idempotente (reaplicar reescreve). Aplicar: SQL Editor do Supabase.
// Uso:  node cursos-novos/pleno-dj/build-sql.mjs  -> supabase/migrations/20260711_pleno_dj.sql
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const jsonb = (obj) => q(JSON.stringify(obj)) + "::jsonb";
const readSim = (f) => fs.readFileSync(path.join(ROOT, "simuladores/dj", f), "utf8");

// IDs determinísticos (namespace "d1"/dj)
const COURSE = "d1000000-d100-4d00-9000-000000000001";
const MOD = (n) => "d1000000-d100-4d00-9000-0000000a" + String(n).padStart(4, "0");
const LID = (n) => "d1000000-d100-4d00-9000-0000000b" + String(n).padStart(4, "0");
const QID = (n) => "d1000000-d100-4d00-9000-0000000c" + String(n).padStart(4, "0");
const QQ  = (l, n) => "d1000000-d100-4d00-9000-00000000" + l.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0");

const SIMS = {
  booth: { file: "pioneer-cdj-djm-real.html", roteiro: {
    titulo: "Cabine de DJ — 2× CDJ-3000 + DJM-A9",
    cenas: [{ numero: 1, titulo: "Mixe na cabine (áudio real)", modo: "widget",
      narracao: "Cabine club-standard com dois CDJ-3000 e o mixer DJM-A9, com áudio de verdade. Toque, pré-escute no fone, case o BPM e a fase, troque graves no EQ e faça a virada. Complete as 7 missões.",
      explicacao_texto: "Simulador fiel da cabine profissional. Motor de áudio Web Audio (grooves sintetizados — placeholder até plugarmos as faixas reais da SMU).",
      destaques: ["2× CDJ-3000: jog, tempo, cue, hot cues, loop", "DJM-A9: trim, EQ 3 bandas, color filter, crossfader", "Pré-escuta no fone (CUE/PFL) e BEAT FX", "Beatmatch real: BPM + fase"] }] } },
  rx3: { file: "pioneer-xdj-rx3-real.html", roteiro: {
    titulo: "Pioneer XDJ-RX3 — All-in-One",
    cenas: [{ numero: 1, titulo: "Mixe no all-in-one (áudio real)", modo: "widget",
      narracao: "Controladora all-in-one: 2 decks + mixer + tela central num corpo só. Mesmos conceitos da cabine: toque, pré-escute no fone, case BPM e fase, troque graves e faça a virada. Complete as 7 missões.",
      explicacao_texto: "Simulador fiel do XDJ-RX3 (formato de casa/entrada). Mesmo motor de áudio da cabine (grooves sintetizados).",
      destaques: ["2 decks integrados + tela central com as 2 waveforms", "Mixer 2 canais: TRIM, EQ, COLOR, CUE, crossfader", "Beatmatch real (BPM + fase) e BEAT FX", "Conceitos transferem 1:1 para os CDJs do clube"] }] } },
  nxs2: { file: "pioneer-cdj2000-djm900-real.html", roteiro: {
    titulo: "Cabine clássica — 2× CDJ-2000NXS2 + DJM-900NXS2",
    cenas: [{ numero: 1, titulo: "Mixe na cabine clássica (áudio real)", modo: "widget",
      narracao: "A geração NXS2: o CDJ-2000NXS2 e o DJM-900NXS2 — o mixer mais comum do mundo. Hot cues em coluna com bancos A-D/E-H e SOUND COLOR FX no knob COLOR. Complete as 7 missões.",
      explicacao_texto: "Simulador fiel da cabine clássica dos clubes (geração NXS2). Mesmo motor de áudio da cabine nova.",
      destaques: ["CDJ-2000NXS2: hot cues em coluna + bancos A-D/E-H", "DJM-900NXS2: SOUND COLOR FX (FILTER, SWEEP, DUB ECHO, CRUSH…)", "Decks nos canais 2 e 3 (layout clássico de cabine)", "Mesmo fluxo: BPM, fase, EQ e virada"] }] } },
  v10: { file: "pioneer-djm-v10-real.html", roteiro: {
    titulo: "Cabine 6 canais — 2× CDJ-3000 + DJM-V10",
    cenas: [{ numero: 1, titulo: "Mixe no V10 (áudio real)", modo: "widget",
      narracao: "O DJM-V10: 6 canais, EQ de 4 bandas, FILTER e SEND por canal e o MASTER ISOLATOR — três knobs que esculpem o grave/médio/agudo da casa inteira. Complete as 7 missões (a última é no isolator).",
      explicacao_texto: "Simulador fiel da cabine com DJM-V10 (6 canais). Isolator processa o áudio de verdade no bus master.",
      destaques: ["6 canais: decks nos canais 3 e 4", "EQ de 4 bandas (HI, HI MID, LOW MID, LOW)", "FILTER + SEND com assign de FX por canal", "MASTER ISOLATOR real (LOW/MID/HI da casa)"] }] } },
  prime4: { file: "denon-prime4-real.html", roteiro: {
    titulo: "Denon Prime 4+ — All-in-One 4 decks",
    cenas: [{ numero: 1, titulo: "Mixe com 4 decks (áudio real)", modo: "widget",
      narracao: "Standalone Denon com 4 decks e mixer de 4 canais (Engine DJ). Cada lado controla 2 decks (botões DECK 1/3 e 2/4). Faça o fluxo completo nos decks 1 e 2 e depois experimente trazer o 3 e o 4. Complete as 7 missões.",
      explicacao_texto: "Simulador fiel do Prime 4+ (ecossistema Denon/Engine DJ). Mesmo motor de áudio da cabine, estendido para 4 decks (grooves sintetizados).",
      destaques: ["4 decks reais: 2 jogs com toggle DECK 1/3 e 2/4", "Mixer 4 canais: TRIM, EQ, SWEEP FX, CUE", "Tela central com as 4 waveforms (Engine OS)", "FX1/FX2 com knob WET — ecossistema Denon"] }] } },
  turntable: { file: "turntable-scratch-real.html", roteiro: {
    titulo: "Toca-discos + Scratch — 2× Technics SL-1200MK7",
    cenas: [{ numero: 1, titulo: "Arranhe no vinil (áudio real)", modo: "widget",
      narracao: "Dois Technics SL-1200MK7 e um mixer de batalha. Ligue no START/STOP, arraste o prato para arranhar (o som segue a mão, inclusive no reverso) e corte com o crossfader. Complete as 5 missões de scratch.",
      explicacao_texto: "Simulador fiel de toca-discos com motor de scratch real (read-head por velocidade do prato). Áudio sintetizado: beat no Deck A, vocal no Deck B.",
      destaques: ["Prato arrastável: scratch para frente e reverso", "START/STOP com inércia de motor", "Pitch fader e crossfader de corte", "Baby scratch, forward e transform"] }] } },
};

// ── AULAS ─────────────────────────────────────────────────────────────
// mod: 1 (Fundamentos e Equipamento) | 2 (Mixagem na Prática)
const LESSONS = [
{ mod:1, dur:18, preview:true, titulo:"A cabine profissional: o padrão CDJ + mixer",
  html:`
<p><strong>Ser DJ profissional é dominar a cabine que existe no mundo inteiro.</strong> De um clube em São Paulo a um festival na Europa, a cabine "club-standard" é quase sempre a mesma: <strong>dois (ou quatro) players CDJ e um mixer no meio</strong>. Quem entende essa cabine chega em qualquer casa e toca — sem depender do próprio equipamento.</p>
<h3>Por que existe um "padrão"</h3>
<p>A Pioneer DJ (hoje AlphaTheta) tornou-se o padrão de fato dos clubes. A ergonomia — player à esquerda, mixer no centro, player à direita — vira memória muscular: você não pensa onde está o PLAY, o CUE ou o crossfader, porque está sempre no mesmo lugar. Esse é o motivo de estudarmos o padrão e não uma controladora específica.</p>
<h3>As três peças da cabine</h3>
<ul>
<li><strong>Os players (CDJ/XDJ):</strong> reproduzem a música (de USB/rekordbox). São o "toca-discos digital": jog wheel, pitch, cue, hot cues, loops. Referências: <strong>CDJ-3000</strong> (topo atual), CDJ-2000NXS2, CDJ-900; e a linha XDJ (XDJ-1000MK2, XDJ-700).</li>
<li><strong>O mixer (DJM):</strong> junta os players, controla volume de cada canal, EQ, filtro, efeitos e a transição (crossfader). Referências: <strong>DJM-A9</strong> e DJM-900NXS2 (2/4 canais), DJM-V10 (6 canais).</li>
<li><strong>O monitoramento (fone + retorno da cabine/booth):</strong> o fone é onde o DJ prepara a próxima música <em>sem</em> a plateia ouvir. Sem fone, não há beatmatch.</li>
</ul>
<h3>Setups que você vai encontrar</h3>
<ul>
<li><strong>2 CDJ + 1 mixer:</strong> o clássico. É o que treinamos aqui.</li>
<li><strong>4 CDJ + mixer 4 canais:</strong> festivais e back-to-back (dois DJs).</li>
<li><strong>All-in-one (XDJ-RX3, XDJ-AZ, Denon Prime 4+):</strong> players + mixer num corpo só. Mesmos conceitos.</li>
<li><strong>Toca-discos (Technics SL-1200MK7, Pioneer PLX-1000) + mixer:</strong> o setup de vinil e de scratch — assunto de um módulo próprio.</li>
</ul>
<p><strong>No restante do curso</strong> você vai destrinchar cada controle e, no simulador fiel da cabine (2× CDJ-3000 + DJM-A9, com áudio de verdade), vai <strong>tocar, casar batidas e fazer viradas</strong> — o treino real do ofício.</p>`,
  quiz:{ titulo:"Quiz — A cabine profissional", questoes:[
    { texto:"Qual é a cabine 'club-standard' que existe na maioria dos clubes do mundo?", explicacao:"O padrão é dois players (CDJ) com um mixer (DJM) no meio — ergonomia que vira memória muscular.",
      opcoes:[["Um notebook com um controlador pequeno",false],["Dois players (CDJ) + um mixer no centro",true],["Apenas um toca-discos",false],["Uma mesa de som de banda",false]] },
    { texto:"Para que serve o fone de ouvido na cabine?", explicacao:"O fone é onde o DJ pré-escuta e prepara a próxima música sem a plateia ouvir. Sem ele não há beatmatch.",
      opcoes:[["Só para proteger a audição",false],["Para pré-escutar e preparar a próxima música sem a plateia ouvir",true],["Para aumentar o volume da sala",false],["Não tem função real",false]] },
    { texto:"O que faz o mixer (DJM)?", explicacao:"O mixer junta os players e controla volume, EQ, filtro, efeitos e a transição (crossfader).",
      opcoes:[["Só liga na tomada",false],["Reproduz a música do USB",false],["Junta os players e controla volume, EQ, filtro, FX e a transição",true],["Grava a apresentação",false]] },
  ]} },

{ mod:1, dur:22, titulo:"Anatomia do CDJ-3000 e do mixer DJM-A9",
  html:`
<p><strong>Antes de mixar, você precisa saber o que cada botão faz.</strong> Vamos percorrer os controles reais do CDJ-3000 (o player) e do DJM-A9 (o mixer) — os mesmos que estão no simulador desta aula.</p>
<h3>CDJ-3000 — o player</h3>
<ul>
<li><strong>Tela (rekordbox):</strong> mostra a forma de onda, o BPM, o tempo, o tom (key) e a grade de batidas. É onde você "enxerga" a música.</li>
<li><strong>Jog wheel:</strong> a roda grande. Em modo VINYL, tocar no topo pausa/scratcha; na lateral, você "empurra" a música para adiantar ou atrasar a batida (o <em>nudge</em> do beatmatch). É a peça central do ajuste fino.</li>
<li><strong>PLAY/PAUSE e CUE:</strong> PLAY toca; CUE marca e volta ao ponto de partida (cue point). Segurar CUE toca em prévia e solta de volta.</li>
<li><strong>Tempo fader (pitch):</strong> a régua vertical. Muda a velocidade/BPM em ±6/±10/±16/WIDE. É com ele que você iguala o BPM de uma música à outra.</li>
<li><strong>MASTER TEMPO:</strong> mantém o <em>tom</em> mesmo mudando a velocidade (evita o efeito "vozes de esquilo").</li>
<li><strong>HOT CUE (A–H):</strong> pontos salvos para saltar na hora (entrada de refrão, drop, virada).</li>
<li><strong>LOOP (IN/OUT, BEAT LOOP, RELOOP):</strong> repete um trecho para estender uma parte da música.</li>
<li><strong>BEAT SYNC:</strong> sincroniza BPM e fase automaticamente. Ferramenta útil — mas você vai aprender a fazer no ouvido, que é o que forma o DJ de verdade.</li>
</ul>
<h3>DJM-A9 — o mixer</h3>
<p>Cada canal (channel) tem, de cima para baixo, a mesma sequência — a <strong>ordem do ganho</strong>:</p>
<ul>
<li><strong>TRIM (gain):</strong> ajusta o volume de entrada do canal. Regra de ouro: acerte o trim para o VU bater na região amarela nos picos, sem estourar no vermelho.</li>
<li><strong>EQ HI / MID / LOW:</strong> três bandas. No DJ, o EQ é <em>ferramenta de mixagem</em>: cortar o grave de uma música para dar lugar ao grave da outra é a base da virada limpa.</li>
<li><strong>COLOR (filtro):</strong> um knob que varre de um filtro passa-baixa (esquerda, abafa/tira agudos) a passa-alta (direita, tira graves). Ótimo para tensão e transições criativas.</li>
<li><strong>CUE (PFL):</strong> manda o canal para o fone (pré-escuta) sem afetar o que a plateia ouve.</li>
<li><strong>Channel fader:</strong> o volume final daquele canal na mistura.</li>
</ul>
<p><strong>No centro:</strong> MASTER (volume da casa), BOOTH (volume do retorno da cabine), <strong>crossfader</strong> (transição da esquerda A para a direita B), a seção de <strong>BEAT FX</strong> (echo, filter, flanger, roll…) e os controles de <strong>fone</strong> (MIX cue↔master e nível).</p>
<p><strong>Pratique no simulador:</strong> identifique cada controle acima na cabine da tela. Toque nos knobs, mova os faders e a jog wheel. Nas próximas aulas você usa tudo isso para mixar de verdade.</p>`,
  sim:"booth",
  quiz:{ titulo:"Quiz — Anatomia CDJ e DJM", questoes:[
    { texto:"Para que serve o MASTER TEMPO no CDJ?", explicacao:"Ele mantém o tom (key) da música mesmo quando você muda a velocidade pelo tempo fader, evitando o efeito 'esquilo'.",
      opcoes:[["Aumenta o volume geral",false],["Mantém o tom mesmo mudando a velocidade",true],["Liga o efeito echo",false],["Salva um hot cue",false]] },
    { texto:"Qual a função do knob TRIM (gain) do canal?", explicacao:"O TRIM ajusta o volume de ENTRADA do canal. Acerte-o para o VU bater no amarelo nos picos, sem estourar.",
      opcoes:[["É o volume final da mistura",false],["Ajusta o volume de entrada do canal (gain staging)",true],["Controla o crossfader",false],["Muda o BPM",false]] },
    { texto:"O que o CUE (PFL) do canal faz?", explicacao:"Manda o canal para o fone (pré-escuta) sem afetar o som que a plateia ouve.",
      opcoes:[["Toca o canal no master imediatamente",false],["Manda o canal para o fone (pré-escuta), sem afetar a plateia",true],["Silencia o canal para sempre",false],["Grava o canal",false]] },
    { texto:"No DJ, para que serve principalmente o EQ (HI/MID/LOW)?", explicacao:"É ferramenta de mixagem: cortar o grave de uma música para dar lugar ao grave da outra é a base da virada limpa.",
      opcoes:[["Só para deixar a música mais bonita",false],["Como ferramenta de mixagem — trocar graves entre as músicas na virada",true],["Para aumentar o BPM",false],["Para ligar o fone",false]] },
  ]} },

{ mod:2, dur:26, titulo:"Beatmatching: casar BPM e fase (o coração do DJ)",
  html:`
<p><strong>Beatmatching é sincronizar duas músicas para que as batidas toquem juntas.</strong> É a habilidade fundamental do DJ. Existe o botão SYNC — mas quem sabe beatmatchar no ouvido tem controle total e nunca fica "refém" da tecnologia. São <strong>dois ajustes</strong>: igualar o BPM e alinhar a fase.</p>
<h3>Passo 1 — Iguale o BPM (velocidade)</h3>
<p>BPM (batidas por minuto) é a velocidade da música. Se o Deck A toca a 124 e o Deck B a 128, elas se afastam. Use o <strong>tempo fader</strong> do Deck B para reduzir até ler <strong>124.0</strong> — igual ao A. No simulador, o indicador <em>Δ BPM</em> tem que ir a <strong>0.0</strong>.</p>
<h3>Passo 2 — Alinhe a fase (o "1")</h3>
<p>Mesmo com BPM igual, as batidas podem estar "trocadas" — o tempo 1 de uma cai no 3 da outra. Para alinhar, <strong>empurre a jog wheel</strong> do Deck B levemente para frente (adianta) ou para trás (atrasa) até o bumbo dos dois cair junto. No simulador, a barra <em>FASE A↔B</em> deve ficar no centro (e fica <span style="color:#37d07a"><strong>verde</strong></span> quando casou).</p>
<h3>Como treinar o ouvido</h3>
<ul>
<li><strong>Pré-escute o B no fone</strong> (aperte CUE do canal) enquanto o A toca na sala.</li>
<li>Se o B "corre na frente", ele está mais rápido → puxe o tempo para baixo. Se "arrasta", está mais lento.</li>
<li>Ouça o <em>bumbo</em>: dois bumbos juntos soam como um só, firme. Desalinhados soam como "batata-batata" (galopando).</li>
<li>Pequenos toques na jog corrigem a fase; o tempo fader corrige a velocidade. São ajustes diferentes — não confunda.</li>
</ul>
<h3>SYNC: quando usar</h3>
<p>O SYNC casa BPM e fase na hora. É legítimo — muitos profissionais usam para liberar as mãos para efeitos e criatividade. Mas <strong>aprenda primeiro no ouvido</strong>: assim você entende o que o SYNC faz, corrige quando ele erra (grades mal analisadas) e toca em qualquer equipamento, até sem sync.</p>
<h3>Missões do simulador</h3>
<p>No simulador desta aula: (1) toque o A; (2) pré-escute o B no fone; (3) dê play no B; (4) iguale o BPM pelo tempo fader; (5) alinhe a fase pela jog wheel até ficar verde. Repita até virar automático — é assim que se forma o DJ.</p>`,
  sim:"booth",
  quiz:{ titulo:"Quiz — Beatmatching", questoes:[
    { texto:"O que é beatmatching?", explicacao:"É sincronizar duas músicas para que as batidas toquem juntas — igualando BPM e alinhando a fase.",
      opcoes:[["Aumentar o volume das duas músicas",false],["Sincronizar duas músicas para as batidas tocarem juntas",true],["Trocar o tom da música",false],["Adicionar efeito na voz",false]] },
    { texto:"Qual controle iguala a VELOCIDADE (BPM) de uma música à outra?", explicacao:"O tempo fader (pitch) do player muda a velocidade/BPM. A jog wheel ajusta a fase, não a velocidade.",
      opcoes:[["A jog wheel",false],["O tempo fader (pitch)",true],["O crossfader",false],["O knob de TRIM",false]] },
    { texto:"Depois de igualar o BPM, as batidas ainda estão trocadas. O que você usa para alinhar a fase?", explicacao:"Empurrar a jog wheel levemente adianta/atrasa a música até o bumbo dos dois cair junto.",
      opcoes:[["O tempo fader de novo",false],["Empurrar a jog wheel para frente/trás",true],["O EQ LOW",false],["O botão de hot cue",false]] },
    { texto:"Por que aprender a beatmatchar no ouvido, e não só usar o SYNC?", explicacao:"Você entende o que acontece, corrige quando o SYNC erra (grade mal analisada) e toca em qualquer equipamento.",
      opcoes:[["Porque o SYNC é proibido",false],["Para ter controle total, corrigir erros do sync e tocar em qualquer setup",true],["Porque soa melhor no vermelho",false],["Não há motivo, use sempre o sync",false]] },
  ]} },

{ mod:2, dur:24, titulo:"Mixagem com EQ e ganho: a virada limpa",
  html:`
<p><strong>Casar as batidas é metade do trabalho; a outra metade é a transição.</strong> Uma virada boa não "empurra" uma música por cima da outra — ela troca os elementos com equilíbrio. A ferramenta principal é o <strong>EQ</strong>, apoiada no <strong>ganho</strong> e no <strong>fader</strong>.</p>
<h3>Gain staging primeiro</h3>
<p>Antes de tudo, acerte o <strong>TRIM</strong> de cada canal para que os dois VUs batam na mesma região (amarelo nos picos). Se um canal está muito mais alto que o outro, a virada dá um "salto" de volume. Nível parelho = transição suave.</p>
<h3>A técnica do "bass swap" (troca de graves)</h3>
<p>Dois bumbos + dois baixos tocando juntos viram uma lama sem definição. A regra de ouro da virada limpa:</p>
<ul>
<li><strong>Deixe a nova música entrar sem grave:</strong> antes de subir o fader do Deck B, <strong>corte o LOW</strong> dele.</li>
<li><strong>Faça a troca no momento certo</strong> (numa virada/phrase): <strong>corte o LOW do A</strong> e ao mesmo tempo <strong>abra o LOW do B</strong>. O grave "passa" de uma música para a outra sem sobrepor.</li>
<li><strong>Complete a transição:</strong> agora traga médios/agudos e o crossfader/fader até o B assumir por completo.</li>
</ul>
<p>No simulador: corte o LOW do canal A, abra o LOW do canal B e suba o fader do B — a missão de "troca de graves" confirma quando você acerta.</p>
<h3>Crossfader x channel faders</h3>
<ul>
<li><strong>Channel faders:</strong> controle independente de cada canal — permite viradas longas e com EQ, mais musicais.</li>
<li><strong>Crossfader:</strong> transição rápida entre A e B — essencial no scratch e em cortes secos. Muitos DJs de club fazem quase tudo nos channel faders e deixam o crossfader no centro.</li>
</ul>
<h3>Tipos de transição</h3>
<ul>
<li><strong>Blend/fusão longa:</strong> as duas músicas convivem por vários compassos, trocando EQ — o padrão do house/techno.</li>
<li><strong>Cut/corte:</strong> troca seca no tempo 1 — funciona quando as músicas têm energia parecida.</li>
<li><strong>Filtro:</strong> use o COLOR (passa-alta) para "sugar" os graves da música que sai enquanto a nova entra.</li>
</ul>
<p><strong>Erro clássico do iniciante:</strong> subir o fader do B com o grave aberto sobre o A. O resultado é abafado e sem punch. Corte primeiro, troque depois.</p>`,
  sim:"booth",
  quiz:{ titulo:"Quiz — Mixagem com EQ", questoes:[
    { texto:"Por que se corta o grave (LOW) de uma música na virada?", explicacao:"Dois graves juntos viram lama sem definição. Corta-se o LOW de uma para dar lugar ao grave da outra.",
      opcoes:[["Para deixar a música mais aguda",false],["Porque dois graves juntos embolam — troca-se o grave de uma para a outra",true],["Para aumentar o BPM",false],["Para ligar o efeito",false]] },
    { texto:"Qual a ordem correta do 'bass swap' na virada?", explicacao:"Entra sem grave (LOW do B cortado) → no momento certo, corta o LOW do A e abre o LOW do B → completa a transição.",
      opcoes:[["Sobe o B com grave aberto por cima do A",false],["Corta o LOW do B; na virada, corta o LOW do A e abre o LOW do B; completa",true],["Aumenta o master no talo",false],["Usa só o botão sync",false]] },
    { texto:"O que é 'gain staging' antes de mixar?", explicacao:"Acertar o TRIM de cada canal para os VUs baterem parelhos (amarelo nos picos), evitando saltos de volume.",
      opcoes:[["Deixar um canal bem mais alto",false],["Acertar o TRIM para os dois canais ficarem no mesmo nível",true],["Cortar todos os agudos",false],["Ligar o crossfader",false]] },
    { texto:"Diferença entre channel fader e crossfader?", explicacao:"Channel faders controlam cada canal (viradas longas/musicais); o crossfader alterna A↔B (corte e scratch).",
      opcoes:[["São a mesma coisa",false],["Channel fader controla cada canal; crossfader alterna A↔B (corte/scratch)",true],["Crossfader muda o BPM",false],["Channel fader liga o fone",false]] },
  ]} },

{ mod:2, dur:24, titulo:"Phrasing, harmonic mixing, hot cues, loops e FX",
  html:`
<p><strong>O que separa uma virada "certa" de uma virada "mágica" é <em>quando</em> e <em>com o quê</em> você mistura.</strong> Aqui entram o phrasing (estrutura musical), o harmonic mixing (tom) e as ferramentas criativas: hot cues, loops e efeitos.</p>
<h3>Phrasing: a matemática da música</h3>
<p>Música eletrônica é construída em <strong>frases de 8, 16 e 32 compassos</strong>. As mudanças (entra o bumbo, entra o vocal, o drop) caem no início de uma frase. Para uma virada natural, <strong>alinhe as frases</strong>: comece a trazer a nova música no início de uma frase de 16/32 para que os elementos entrem e saiam nos lugares certos. Contar "1-2-3-4" em grupos de 8 vira automático com prática — a grade da tela do CDJ ajuda a visualizar.</p>
<h3>Harmonic mixing: mixar no tom certo</h3>
<p>Músicas em tons compatíveis soam consonantes juntas; tons incompatíveis "brigam". A <strong>roda de Camelot</strong> (mostrada como 7A, 8A… na tela/rekordbox) simplifica: combine o <strong>mesmo número</strong> (8A→8A), <strong>vizinhos</strong> (8A→7A ou 9A) ou a troca letra (8A→8B). É a diferença entre uma mistura que "flui" e uma que soa desafinada.</p>
<h3>Hot cues: saltar na hora</h3>
<p>Salve pontos importantes (início do drop, entrada do vocal, uma virada) nos pads <strong>HOT CUE (A–H)</strong>. Num set, você pula direto para a parte que quer — reorganiza a música ao vivo, cria intros e reentradas. No simulador, toque um pad para gravar; toque de novo para saltar.</p>
<h3>Loops: estender e criar tensão</h3>
<p>Um <strong>loop</strong> repete um trecho (4, 8, 16 batidas). Usos: estender uma intro/outro para ter tempo de mixar, segurar um clímax, ou criar tensão antes do drop. IN/OUT marca manual; BEAT LOOP faz loops exatos na grade.</p>
<h3>BEAT FX: tempero, não muleta</h3>
<ul>
<li><strong>Echo/Delay:</strong> cria uma "cauda" — ótimo para tirar uma música (echo out) suavemente.</li>
<li><strong>Filter:</strong> varre graves/agudos para tensão e transições.</li>
<li><strong>Reverb / Flanger / Roll:</strong> textura e impacto em momentos pontuais.</li>
</ul>
<p><strong>Regra de ouro dos efeitos:</strong> menos é mais. O FX serve a um momento (um drop, uma saída); usado o tempo todo, cansa e esconde erros de mixagem em vez de resolvê-los.</p>
<p><strong>No simulador:</strong> grave hot cues, faça um beat loop, e ligue um BEAT FX (ECHO/FILTER) num drop. Junte tudo o que aprendeu: case, troque graves, use o phrasing e finalize com um efeito bem colocado — é um set de DJ profissional.</p>`,
  sim:"booth",
  quiz:{ titulo:"Quiz — Phrasing, harmonia e ferramentas", questoes:[
    { texto:"Em quantos compassos a música eletrônica costuma ser construída (frases)?", explicacao:"Em frases de 8, 16 e 32 compassos — as mudanças caem no início de uma frase.",
      opcoes:[["Em frases de 3 em 3",false],["Em frases de 8, 16 e 32 compassos",true],["Não tem padrão",false],["Sempre de 5 em 5",false]] },
    { texto:"Para que serve a roda de Camelot (ex.: 7A, 8A)?", explicacao:"Para harmonic mixing: combinar músicas em tons compatíveis (mesmo número, vizinhos ou troca de letra).",
      opcoes:[["Medir o volume",false],["Mixar em tons compatíveis (harmonia entre as músicas)",true],["Definir o BPM",false],["Escolher o efeito",false]] },
    { texto:"O que é um hot cue?", explicacao:"Um ponto salvo (drop, vocal, virada) para saltar na hora e reorganizar a música ao vivo.",
      opcoes:[["Um tipo de efeito",false],["Um ponto salvo para saltar instantaneamente na música",true],["O volume do fone",false],["Um filtro de graves",false]] },
    { texto:"Qual a regra de ouro no uso de BEAT FX?", explicacao:"Menos é mais: o efeito serve a um momento; usado o tempo todo cansa e esconde erros de mixagem.",
      opcoes:[["Usar efeito o tempo todo",false],["Menos é mais — efeito serve a um momento pontual",true],["Sempre no máximo",false],["Nunca usar efeito",false]] },
  ]} },

{ mod:3, dur:26, titulo:"Toca-discos e scratch: a técnica do vinil",
  html:`
<p><strong>O vinil é a raiz da cultura DJ — e o scratch é a sua assinatura.</strong> Mesmo na era digital, dominar o toca-discos separa o DJ completo do apertador de SYNC. Aqui você aprende o setup de vinil e as técnicas de scratch fundamentais, e treina no simulador de dois <strong>Technics SL-1200MK7</strong> com mixer de batalha.</p>
<h3>O toca-discos de referência</h3>
<p>O <strong>Technics SL-1200/1210</strong> é o padrão histórico dos clubes e do turntablism: tração direta (direct drive) com torque alto, prato pesado e estável, e pitch fader preciso. A versão atual é a <strong>MK7</strong>. Alternativas modernas: <strong>Pioneer PLX-1000</strong> (mesma filosofia) e PLX-CRSS12 (com "DVS" sem agulha). Peças-chave:</p>
<ul>
<li><strong>Prato (platter) + slipmat:</strong> o disco gira sobre um feltro (slipmat) que permite segurar o vinil parado enquanto o prato continua girando embaixo — é isso que torna o scratch e o backspin possíveis.</li>
<li><strong>Braço e agulha (cápsula):</strong> lê o sulco. Para scratch usa-se cápsula/agulha específica (ex.: Shure/Ortofon) e ajuste de peso para não pular.</li>
<li><strong>START/STOP:</strong> liga o motor; o direct drive atinge a rotação quase instantaneamente (e para com leve inércia).</li>
<li><strong>Pitch fader:</strong> ajusta a velocidade (±8% típico) — é o beatmatch do vinil, igual ao do CDJ.</li>
<li><strong>33/45 RPM:</strong> a rotação do disco conforme o formato.</li>
</ul>
<h3>O mixer de batalha e o crossfader</h3>
<p>Para scratch, o mixer costuma ser um <strong>battle mixer</strong> (2 canais, ex.: DJM-S7/S11), com o <strong>crossfader</strong> central de curva ajustável. Na curva de <strong>corte</strong> (sharp), um pequeno movimento já liga/desliga o canal — essencial para os cortes rítmicos do scratch. Na curva <strong>suave</strong>, a transição é gradual (para blends).</p>
<h3>Técnicas de scratch fundamentais</h3>
<ul>
<li><strong>Baby scratch:</strong> o mais básico — empurrar o disco para frente e para trás em ritmo, sem tocar no crossfader. É a base de tudo.</li>
<li><strong>Forward / Cut scratch:</strong> empurra para frente com o som aberto e corta (crossfader) na volta, deixando só a ida audível.</li>
<li><strong>Transform:</strong> mantém o disco em movimento e "pica" o som ligando/desligando com o crossfader em ritmo.</li>
<li><strong>Chirp, Flare, Crab:</strong> combinações mais avançadas de mão no disco + dedos no crossfader (evolução natural com prática).</li>
</ul>
<h3>Beatmatch no vinil</h3>
<p>Mesma lógica do CDJ: iguale o BPM pelo <strong>pitch fader</strong> e ajuste a fase <strong>empurrando/segurando o prato</strong> (aqui, literalmente com a mão no disco). O slipmat é o que permite esse controle fino sem parar o motor.</p>
<p><strong>No simulador desta aula:</strong> ligue os decks, arraste o prato do Deck B para arranhar o vocal (o som segue a sua mão, inclusive no reverso), e use o crossfader de corte para transform. Complete as 5 missões: primeiro scratch, baby scratch, transform e soltar no tempo.</p>`,
  sim:"turntable",
  quiz:{ titulo:"Quiz — Toca-discos e scratch", questoes:[
    { texto:"Qual é o toca-discos de referência histórica do DJ/turntablism?", explicacao:"O Technics SL-1200/1210 (atual MK7): direct drive, torque alto e pitch preciso. PLX-1000 é a alternativa Pioneer.",
      opcoes:[["Um toca-CD comum",false],["Technics SL-1200/1210 (MK7)",true],["Qualquer vitrola antiga",false],["Um alto-falante bluetooth",false]] },
    { texto:"Para que serve o slipmat (feltro) sobre o prato?", explicacao:"Permite segurar o vinil parado (ou movê-lo com a mão) enquanto o prato/motor continua girando — base do scratch e do backspin.",
      opcoes:[["Só enfeitar",false],["Permitir mover/segurar o disco com a mão enquanto o motor gira",true],["Aumentar o volume",false],["Proteger a agulha do sol",false]] },
    { texto:"O que é o baby scratch?", explicacao:"A técnica base: empurrar o disco para frente e para trás em ritmo, sem usar o crossfader.",
      opcoes:[["Cortar o som com o crossfader parado",false],["Empurrar o disco para frente e para trás em ritmo (sem crossfader)",true],["Aumentar o pitch ao máximo",false],["Trocar de música",false]] },
    { texto:"Na curva de CORTE (sharp) do crossfader, o que acontece?", explicacao:"Um pequeno movimento já liga/desliga o canal — essencial para os cortes rítmicos do scratch (ex.: transform).",
      opcoes:[["A transição fica bem gradual",false],["Um pequeno movimento já liga/desliga o canal (para cortes de scratch)",true],["O crossfader deixa de funcionar",false],["Muda o BPM",false]] },
  ]} },

{ mod:1, dur:18, titulo:"O formato all-in-one (Pioneer XDJ-RX3)",
  html:`
<p><strong>Nem todo mundo começa direto no clube.</strong> Muitos DJs treinam e tocam em <strong>controladoras all-in-one</strong> — 2 (ou 4) decks, mixer e tela num corpo só, sem precisar de players e mixer separados. A boa notícia: <strong>os conceitos são exatamente os mesmos</strong> da cabine profissional. Quem aprende no all-in-one chega no clube e reconhece tudo.</p>
<h3>O que é um all-in-one</h3>
<p>É um equipamento integrado que junta players + mixer. Toca direto de USB (ou de um software como rekordbox/Serato) sem computador obrigatório. Referências: <strong>Pioneer XDJ-RX3</strong> e XDJ-AZ, <strong>Denon Prime 4+</strong> (4 decks), Denon SC Live. É o formato de casa, bar e festas menores.</p>
<h3>Por que os conceitos transferem</h3>
<ul>
<li><strong>Decks:</strong> jog, PLAY/CUE, pitch, hot cues e loops — iguais aos do CDJ.</li>
<li><strong>Mixer:</strong> TRIM, EQ de 3 bandas, COLOR (filtro), CUE (fone) e crossfader — igual ao DJM.</li>
<li><strong>Tela central:</strong> mostra as duas músicas (waveforms), BPM, tom e a grade — como duas telas de CDJ lado a lado.</li>
<li><strong>Fluxo de mixagem:</strong> beatmatch (BPM + fase), pré-escuta no fone, troca de graves na virada e BEAT FX — passo a passo idêntico.</li>
</ul>
<h3>All-in-one x cabine de clube</h3>
<p>A diferença é física, não conceitual: no clube os players e o mixer são peças separadas (padrão porque cada casa monta o seu). Praticar no all-in-one <strong>constrói a mesma memória muscular</strong>; quando você chegar num setup de 2 CDJ + DJM, só muda a distância entre as mãos. Por isso este curso treina os dois formatos.</p>
<p><strong>No simulador desta aula:</strong> é o XDJ-RX3 completo. Repita o fluxo que você já treinou: play no Deck 1, cue do Deck 2 no fone, iguale o BPM, alinhe a fase, troque os graves e ligue um BEAT FX. Note como é o mesmo jogo da cabine — só num corpo só.</p>`,
  sim:"rx3",
  quiz:{ titulo:"Quiz — All-in-one (XDJ-RX3)", questoes:[
    { texto:"O que é uma controladora all-in-one?", explicacao:"Um equipamento integrado que junta players + mixer num corpo só, tocando direto de USB/software, sem computador obrigatório.",
      opcoes:[["Só um mixer avulso",false],["Um equipamento que junta players + mixer num corpo só",true],["Um par de caixas de som",false],["Um software de gravação",false]] },
    { texto:"Os conceitos de mixagem do all-in-one, comparados aos da cabine de clube, são:", explicacao:"Os mesmos — beatmatch, EQ, cue, crossfader e FX funcionam igual. Muda só a forma física (integrado x peças separadas).",
      opcoes:[["Totalmente diferentes",false],["Exatamente os mesmos (muda só a forma física)",true],["Mais fáceis por não ter EQ",false],["Só servem para gravar",false]] },
    { texto:"Cite uma referência de all-in-one profissional:", explicacao:"Pioneer XDJ-RX3/XDJ-AZ e Denon Prime 4+ são exemplos comuns de all-in-one.",
      opcoes:[["Technics SL-1200",false],["Pioneer XDJ-RX3 / Denon Prime 4+",true],["DJM-A9 sozinho",false],["Um CDJ isolado",false]] },
  ]} },

{ mod:2, dur:22, titulo:"Mixagem com 4 decks e o ecossistema Denon (Prime 4+)",
  html:`
<p><strong>Dois decks são o padrão; quatro decks são a liberdade.</strong> Com 4 canais você mantém uma base tocando, prepara a próxima música e ainda sobrepõe uma terceira camada (um loop, um acapella, um efeito). É o formato dos festivais (4 CDJs) e dos standalones grandes — e aqui você treina no <strong>Denon Prime 4+</strong>, o principal concorrente da Pioneer.</p>
<h3>O ecossistema Denon (Engine DJ)</h3>
<p>A Denon DJ construiu uma linha profissional em volta do <strong>Engine OS</strong>: players <strong>SC6000/SC6000M</strong> e o LC6000 (deck de controle), o mixer <strong>X1850</strong>, e os standalones <strong>Prime 4/Prime 4+</strong>. Muitos clubes e DJs usam Denon pelo hardware forte (telas grandes, SSD interno, streaming integrado). Conceitos idênticos aos da Pioneer — muda a marca, não o ofício.</p>
<h3>Como funciona um 4 decks com 2 jogs</h3>
<p>No Prime 4+ há <strong>4 canais no mixer</strong>, mas <strong>2 jog wheels</strong>. Cada lado controla dois decks, alternados pelos botões <strong>DECK 1/3</strong> (esquerda) e <strong>DECK 2/4</strong> (direita) — o LED e a tela indicam o deck ativo. O canal do mixer é sempre fixo (canal 3 = deck 3), o que muda é qual deck a jog/transport comanda.</p>
<h3>Técnicas com 4 decks</h3>
<ul>
<li><strong>Camada de percussão/loop:</strong> deixe um loop de bateria no deck 3 embaixo da mix principal para engordar a transição.</li>
<li><strong>Acapella por cima:</strong> vocal no deck 4, sincronizado, sobre a base instrumental dos decks 1–2.</li>
<li><strong>Transição em ponte:</strong> use o deck 3 como "ponte" harmônica entre duas músicas difíceis de casar direto.</li>
<li><strong>Regra de ouro:</strong> cada camada nova ocupa espaço — corte graves das camadas secundárias (LOW fechado ou SWEEP FX) e deixe só UMA música dona do grave.</li>
</ul>
<h3>Gerenciando o caos</h3>
<p>Com 4 decks, a organização vira sobrevivência: gain staging parelho nos 4 canais, saber sempre <em>qual deck está no ar</em> (olhe os medidores), e tirar da mix (fader embaixo) o que não está em uso. DJ profissional não é quem toca 4 músicas ao mesmo tempo — é quem sabe <strong>quando</strong> uma terceira camada soma e quando atrapalha.</p>
<p><strong>No simulador desta aula:</strong> o Prime 4+ completo. Faça o fluxo padrão nos decks 1 e 2 (missões) e depois: alterne o lado esquerdo para o <span style="color:#f4a02a"><strong>DECK 3</strong></span>, dê play e suba o fader do canal 3 com o LOW fechado — sua primeira mix de 3 camadas.</p>`,
  sim:"prime4",
  quiz:{ titulo:"Quiz — 4 decks e ecossistema Denon", questoes:[
    { texto:"No Prime 4+ há 4 canais e 2 jog wheels. Como se controla os decks 3 e 4?", explicacao:"Cada lado alterna entre dois decks pelos botões DECK (esquerda: 1/3; direita: 2/4). O canal do mixer é fixo; muda o deck que a jog comanda.",
      opcoes:[["Não dá para usar os decks 3 e 4",false],["Alternando cada lado pelos botões DECK 1/3 e 2/4",true],["Ligando um segundo aparelho",false],["Pelo crossfader",false]] },
    { texto:"Qual é a regra de ouro ao somar uma 3ª camada (loop/acapella) na mix?", explicacao:"Cada camada ocupa espaço: corte os graves das camadas secundárias — só UMA música deve ser dona do grave.",
      opcoes:[["Subir tudo no máximo",false],["Cortar os graves das camadas secundárias — só uma música é dona do grave",true],["Desligar o EQ",false],["Usar sempre o deck 4",false]] },
    { texto:"Quais equipamentos formam o ecossistema profissional da Denon DJ?", explicacao:"Players SC6000/SC6000M (e LC6000), mixer X1850 e os standalones Prime 4/4+ — tudo rodando Engine OS.",
      opcoes:[["CDJ-3000 e DJM-A9",false],["SC6000, X1850 e Prime 4/4+ (Engine OS)",true],["Technics SL-1200",false],["Apenas softwares de notebook",false]] },
    { texto:"Para que serve um deck extra numa 'transição em ponte'?", explicacao:"O deck 3 entra como ponte harmônica/rítmica entre duas músicas difíceis de casar diretamente.",
      opcoes:[["Para aumentar o volume do master",false],["Como ponte harmônica entre duas músicas difíceis de casar",true],["Para gravar o set",false],["Para trocar o crossfader",false]] },
  ]} },

{ mod:1, dur:20, titulo:"A cabine clássica: CDJ-2000NXS2 + DJM-900NXS2",
  html:`
<p><strong>Antes do CDJ-3000, o mundo girou por uma década em cima do CDJ-2000NXS2 — e o DJM-900NXS2 segue sendo o mixer mais comum do planeta.</strong> Você VAI encontrar essa cabine: em clubes que ainda não trocaram de geração, em casas menores e em metade das riders do Brasil. DJ profissional toca nas duas gerações sem pestanejar.</p>
<h3>O que muda do 3000 para o 2000NXS2</h3>
<ul>
<li><strong>Hot cues:</strong> no 2000NXS2 ficam numa <strong>coluna de 4 botões (A–D)</strong> ao lado do jog, com um <strong>banco</strong> que alterna para E–H — em vez da fileira de 8 pads do 3000.</li>
<li><strong>Tela:</strong> menor e sem toque em boa parte das funções — navega-se mais pelo <strong>seletor rotativo</strong>.</li>
<li><strong>Fontes:</strong> botões dedicados <strong>LINK / USB / SD / DISC</strong> (o 2000NXS2 ainda toca CD!).</li>
<li><strong>O resto é igual:</strong> jog, CUE/PLAY, tempo fader (±6/10/16/WIDE), MASTER TEMPO, loops e SYNC. Sua memória muscular transfere direto.</li>
</ul>
<h3>DJM-900NXS2: o rei dos mixers</h3>
<p>A base do canal é a mesma do A9 (TRIM → EQ 3 bandas → COLOR → CUE → fader). A assinatura do 900NXS2 é o <strong>SOUND COLOR FX</strong>: seis efeitos (<strong>SPACE, DUB ECHO, SWEEP, NOISE, CRUSH, FILTER</strong>) que você seleciona por botão e <strong>aplica girando o knob COLOR de cada canal</strong>. É o efeito "de mão" mais usado do mundo club:</p>
<ul>
<li><strong>FILTER:</strong> o clássico — LPF para um lado, HPF para o outro.</li>
<li><strong>SWEEP:</strong> varredura com ressonância, ótima para tensão.</li>
<li><strong>DUB ECHO:</strong> manda o canal para um eco curto — perfeito para tirar uma música.</li>
<li><strong>SPACE / NOISE / CRUSH:</strong> reverb, ruído e esmagamento — texturas para momentos.</li>
</ul>
<p>No lado direito fica o <strong>BEAT FX</strong> (echo, delay, ping pong, spiral, reverb, flanger…) com o <strong>X-PAD</strong> para tocar o efeito com o dedo.</p>
<h3>Na cabine real</h3>
<p>Nos clubes, os players costumam ligar nos <strong>canais 2 e 3</strong> (os do meio) do DJM — os canais 1 e 4 sobram para um terceiro player, um sampler ou o notebook. O simulador desta aula segue esse layout clássico.</p>
<p><strong>No simulador:</strong> mesma rotina — play, cue no fone, BPM, fase, troca de graves — e na missão final experimente o <strong>SOUND COLOR FX</strong>: escolha SWEEP ou DUB ECHO e gire o COLOR do canal. Depois alterne o <strong>banco de hot cues</strong> (A–D ↔ E–H).</p>`,
  sim:"nxs2",
  quiz:{ titulo:"Quiz — Cabine clássica NXS2", questoes:[
    { texto:"Onde ficam os hot cues no CDJ-2000NXS2?", explicacao:"Numa coluna de 4 botões (A–D) ao lado do jog, com banco que alterna para E–H — diferente da fileira de 8 pads do CDJ-3000.",
      opcoes:[["Numa fileira de 8 pads embaixo da tela",false],["Numa coluna de 4 botões (A–D) com banco para E–H",true],["No mixer",false],["Não tem hot cue",false]] },
    { texto:"O que é o SOUND COLOR FX do DJM-900NXS2?", explicacao:"Seis efeitos (SPACE, DUB ECHO, SWEEP, NOISE, CRUSH, FILTER) selecionados por botão e aplicados girando o knob COLOR de cada canal.",
      opcoes:[["Um equalizador extra",false],["Efeitos aplicados pelo knob COLOR de cada canal (FILTER, SWEEP, DUB ECHO…)",true],["Um segundo crossfader",false],["O volume do fone",false]] },
    { texto:"Em quais canais do DJM os players costumam ligar na cabine real?", explicacao:"Nos canais 2 e 3 (os do meio) — os canais 1 e 4 sobram para um terceiro player, sampler ou notebook.",
      opcoes:[["Sempre 1 e 4",false],["Nos canais 2 e 3 (os do meio)",true],["Tanto faz, não muda nada",false],["Só no canal 1",false]] },
    { texto:"Por que aprender a geração NXS2 se já existe o CDJ-3000?", explicacao:"Porque ela ainda está em metade das cabines do mundo — o profissional toca nas duas gerações sem depender do equipamento.",
      opcoes:[["Não precisa, é obsoleta",false],["Porque ainda domina muitas cabines — o profissional toca nas duas gerações",true],["Porque o 3000 não faz beatmatch",false],["Porque o NXS2 é mais novo",false]] },
  ]} },

{ mod:2, dur:22, titulo:"O mixer de 6 canais: DJM-V10 e o Master Isolator",
  html:`
<p><strong>O DJM-V10 é o mixer que os DJs de techno e house pediram durante anos.</strong> Seis canais, EQ de 4 bandas e uma seção master digna de estúdio. Está em clubes de referência no mundo todo (e na versão V10-LF, com faders longos, para quem mixa longo). Dominar o V10 é dominar a mixagem como escultura de som.</p>
<h3>O que muda em relação ao DJM padrão</h3>
<ul>
<li><strong>6 canais:</strong> espaço para 4 players + toca-discos + notebook, tudo ao mesmo tempo. Os decks principais costumam ficar nos <strong>canais 3 e 4</strong> (centro).</li>
<li><strong>EQ de 4 bandas:</strong> HI, <strong>HI MID</strong>, <strong>LOW MID</strong> e LOW. O médio dividido em dois permite tirar a "caixa" de uma música (LOW MID) sem perder o brilho do vocal (HI MID) — cirurgia que o EQ de 3 bandas não faz.</li>
<li><strong>FILTER por canal:</strong> knob dedicado de filtro (LPF/HPF) em cada canal, separado do EQ — no 900NXS2 isso dependia do SOUND COLOR FX.</li>
<li><strong>SEND por canal:</strong> cada canal tem um knob <strong>SEND</strong> com botão de <strong>assign</strong> (vermelho) que manda o sinal para o efeito — dose exata de echo/reverb por música, como numa mesa de estúdio.</li>
<li><strong>Compressor por canal</strong> (no aparelho real) e fone com <strong>duas saídas</strong> (HEADPHONES A/B) para back-to-back.</li>
</ul>
<h3>MASTER ISOLATOR: a assinatura do V10</h3>
<p>Três knobs grandes — <strong>LOW / MID / HI</strong> — que equalizam <strong>a saída master inteira</strong> (a casa, não um canal). É a ferramenta de "esculpir a pista":</p>
<ul>
<li><strong>Corte o LOW do isolator</strong> na quebra e <strong>devolva no drop</strong> — o clube inteiro sente o grave voltar.</li>
<li>Segure só o médio para criar tensão; abra tudo para explodir.</li>
<li>Diferente do EQ de canal: o isolator age depois da mistura, sobre as DUAS músicas ao mesmo tempo.</li>
</ul>
<h3>Quando você vai encontrar um V10</h3>
<p>Clubes de música eletrônica "de som" (techno, house, minimal), cabines de residência longa e riders de DJs que fazem sets de 3+ horas. Em show de baile/funk/comercial, o 900NXS2/A9 seguem mais comuns. O profissional conhece os dois mundos.</p>
<p><strong>No simulador desta aula:</strong> a rotina completa nos canais 3 e 4 — e a missão final é no <strong>MASTER ISOLATOR</strong>: corte o LOW da casa e devolva no tempo certo. Experimente também o EQ de 4 bandas (tire o LOW MID de uma música e ouça o espaço abrir) e o <strong>SEND</strong> com assign para dosar o efeito por canal.</p>`,
  sim:"v10",
  quiz:{ titulo:"Quiz — DJM-V10 e Master Isolator", questoes:[
    { texto:"O que é o MASTER ISOLATOR do DJM-V10?", explicacao:"Três knobs (LOW/MID/HI) que equalizam a saída master inteira — as duas músicas ao mesmo tempo, depois da mistura.",
      opcoes:[["Um EQ que age num canal só",false],["Três knobs que equalizam a saída master inteira (a casa)",true],["Um tipo de crossfader",false],["O volume do fone",false]] },
    { texto:"Qual a vantagem do EQ de 4 bandas sobre o de 3?", explicacao:"O médio dividido (HI MID e LOW MID) permite cortar a 'caixa' de uma música sem perder o brilho do vocal — mais cirurgia.",
      opcoes:[["É só mais bonito",false],["O médio dividido permite cortes mais cirúrgicos (LOW MID sem mexer no HI MID)",true],["Aumenta o BPM",false],["Não há vantagem",false]] },
    { texto:"Para que serve o knob SEND com assign em cada canal do V10?", explicacao:"Manda uma dose exata do canal para o efeito (echo/reverb), como um send de mesa de estúdio.",
      opcoes:[["Trocar de música",false],["Dosar quanto do canal vai para o efeito (send de FX)",true],["Ligar o fone",false],["Controlar o crossfader",false]] },
    { texto:"Um uso clássico do isolator na pista é:", explicacao:"Cortar o LOW na quebra e devolver no drop — a casa inteira sente o grave voltar.",
      opcoes:[["Deixar sempre tudo no máximo",false],["Cortar o LOW na quebra e devolver no drop",true],["Silenciar o master",false],["Substituir o beatmatch",false]] },
  ]} },
];

// ── monta SQL ─────────────────────────────────────────────────────────
const MODULES = [
  { n:1, titulo:"Fundamentos e Equipamento" },
  { n:2, titulo:"Mixagem na Prática" },
  { n:3, titulo:"Vinil e Scratch" },
];
const L = [];
L.push("-- ====================================================================");
L.push("-- SMU PRO — Curso 'DJ — Formação Profissional' (nível pleno)");
L.push("-- Padrão pleno (teoria rica + simulador fiel). Curso NOVO, ativo=false.");
L.push(`-- Aulas: ${LESSONS.length}. Simulador: cabine 2× CDJ-3000 + DJM-A9 (áudio real).`);
L.push("-- Aditivo/idempotente. Aplicar: SQL Editor do Supabase ou supabase db push.");
L.push("-- ====================================================================");
L.push("begin;");
L.push("");
L.push("-- limpeza p/ reaplicar");
LESSONS.forEach((_, i) => {
  L.push(`delete from public.ai_animations where lesson_id = ${q(LID(i + 1))};`);
  L.push(`delete from public.quizzes where id = ${q(QID(i + 1))};`);
  L.push(`delete from public.lessons where id = ${q(LID(i + 1))};`);
});
MODULES.forEach(m => L.push(`delete from public.modules where id = ${q(MOD(m.n))};`));
L.push(`delete from public.courses where id = ${q(COURSE)};`);
L.push("");
L.push("-- CURSO (ativo=false — revise e publique)");
L.push("insert into public.courses (id,titulo,slug,descricao_curta,nivel,categoria,categorias,tipo,carga_horaria,total_aulas,ativo,destaque,ordem) values");
L.push(`  (${q(COURSE)},${q("DJ — Formação Profissional")},${q("dj-formacao-profissional")},${q("Aprenda a tocar na cabine club-standard (2× CDJ-3000 + DJM-A9): beatmatching, mixagem com EQ, phrasing, harmonic mixing, hot cues, loops e FX — com simulador fiel de áudio real.")},'pleno','dj','{tecnico,dj}','pago',0,${LESSONS.length},false,false,20);`);
L.push("");
MODULES.forEach(m => L.push(`insert into public.modules (id,course_id,titulo,ordem) values (${q(MOD(m.n))},${q(COURSE)},${q(m.titulo)},${m.n});`));
L.push("");

LESSONS.forEach((les, i) => {
  const lid = LID(i + 1);
  L.push(`-- AULA ${i + 1} (mód ${les.mod}): ${les.titulo}`);
  L.push("insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values");
  L.push(`  (${q(lid)},${q(MOD(les.mod))},${q(les.titulo)},'texto',${q(les.html.trim())},${les.dur},${i + 1},${les.quiz ? "true" : "false"},${les.preview ? "true" : "false"});`);
  if (les.quiz) {
    const qid = QID(i + 1);
    L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(qid)},${q(lid)},${q(les.quiz.titulo)});`);
    les.quiz.questoes.forEach((qq, j) => {
      const qqid = QQ(i + 1, j + 1);
      L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(qqid)},${q(qid)},${q(qq.texto)},${q(qq.explicacao)},${j + 1},1);`);
      qq.opcoes.forEach(([t, c], k) => L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(qqid)},${q(t)},${c},${k + 1});`));
    });
  }
  if (les.sim) {
    const s = SIMS[les.sim];
    const urls = [{ html: readSim(s.file) }];
    L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,roteiro,urls) values (${q(lid)},'interactive','ready','handcrafted-interactive',${jsonb(s.roteiro)},${jsonb(urls)});`);
  }
  L.push("");
});

L.push(`update public.courses set total_aulas = ${LESSONS.length} where id = ${q(COURSE)};`);
L.push("commit;");
L.push("");
const out = path.join(ROOT, "supabase/migrations/20260711_pleno_dj.sql");
fs.writeFileSync(out, L.join("\n"), "utf8");
console.log("OK ->", path.relative(ROOT, out), "|", (fs.statSync(out).size / 1024).toFixed(1), "KB |", LESSONS.length, "aula(s)");
