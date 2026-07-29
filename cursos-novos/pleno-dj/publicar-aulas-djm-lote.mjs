#!/usr/bin/env node
/**
 * publicar-aulas-djm-lote.mjs
 * ---------------------------------------------------------------------------
 * Escreve o conteudo_rico COMPLETO das 5 aulas de mixer Pioneer deste lote.
 *
 * ESCOPO (trava dura mais abaixo): SO faz PATCH de `conteudo_rico`.
 * Nao toca em id, module_id, ordem, titulo nem ai_animations — o simulador de
 * cada aula ja esta certo e publicado.
 *
 * REGRA 5 — faixa deste curso: d1a00000-0000-4000-9000-*
 *   As 5 aulas ja existem; nenhum id novo e inventado aqui.
 *
 * REGRA 2 — fonte de verdade de cada aula (declarada em FONTE[]):
 *   DJM-600     manual oficial DRB1319  (cursos-novos/pleno-dj/manuais/DJM-600.pdf)  0 buracos
 *   DJM-800     manual oficial DRB1393-C(cursos-novos/pleno-dj/manuais/DJM-800.pdf)  0 buracos
 *   DJM-2000    manual oficial DRB1496-D(cursos-novos/pleno-dj/manuais/DJM-2000.pdf) 14 buracos
 *   DJM-750MK2  manual oficial DRI1470-C baixado de downloads.support.alphatheta.com
 *               + Quick Start Guide via espelho (o DRI1470 NAO traz tabela de spec)
 *   DJM-450     spec via espelho do Quick Start Guide + simulador conferido
 *
 * O que nao foi encontrado esta escrito "nao consta" DENTRO da aula, nunca chutado.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const P = "d1a00000-0000-4000-9000-";

const K = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const H = { apikey: K, Authorization: `Bearer ${K}`, "Content-Type": "application/json" };

const req = async (m, p, b, x = {}) => {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(m + " " + p + " -> " + r.status + " " + t.slice(0, 200));
  return t && t[0] === "[" ? JSON.parse(t) : t;
};

/* ========================================================================== */
/*  AULA 108 — Pioneer DJM-600                                                */
/*  fonte: manual DRB1319 (c) 2001, extraido com 0 buracos + simulador         */
/* ========================================================================== */
const DJM600 = `
<h2>Pioneer DJM-600 — o mixer de 4 canais que formou uma geracao</h2>

<h3>1. O que e e por que existe</h3>
<p>O <b>DJM-600</b> e o mixer de <b>4 canais</b> que a Pioneer colocou na cabine na virada dos anos 2000.
Ele resolveu um problema concreto: o DJ estava saindo de dois toca-discos com mixer de 2 canais e
passando a rodar <b>CD player + vinil + fita + microfone ao mesmo tempo</b>. Faltava uma mesa que
aceitasse tudo isso sem gambiarra e ainda trouxesse efeito embutido, para nao ter que carregar rack.</p>

<p>A resposta foram <b>10 entradas</b> num chassi so — 2 CD, 3 LINE, 3 PHONO e 2 microfones — mais duas
saidas de master (RCA e XLR profissional), monitor de cabine e saida de gravacao. Junto veio a caixa de
<b>BEAT EFFECTS</b> amarrada a um contador de BPM automatico, e o <b>BEAT SAMPLER</b>, que grava um
pedaco da musica no ritmo e devolve em loop — naquele momento, funcao de equipamento separado.</p>

<p>O manual cita o <b>fader start</b> com os players <b>CDJ-100S, CDJ-700S e CDJ-500 II</b> ligados por
control cord: era esse o ecossistema, e o DJM-600 e a mesa do trio. Hoje voce o encontra em
<b>estudio, escola, bar e festa de bairro</b> — barato no usado, quase nao quebra, e ensina a mesma
logica de canal (entrada → TRIM → EQ → fader → crossfader → master) de um DJM-A9 de clube.</p>

<h3>2. Ficha tecnica</h3>
<p>Da secao SPECIFICATIONS do manual oficial (DRB1319).</p>
<table>
<tr><th>Item</th><th>Valor de manual</th></tr>
<tr><td>Canais</td><td>4 canais + 2 microfones (principal e sub)</td></tr>
<tr><td>Dimensoes</td><td>320 (L) x 372 (P) x 107 (A) mm</td></tr>
<tr><td>Peso</td><td>6,6 kg</td></tr>
<tr><td>Alimentacao</td><td>AC 120 V, 60 Hz — 36 W (o painel traseiro tem <b>VOLTAGE SELECTOR</b> 110-120 V / 220-230-240 V)</td></tr>
<tr><td>Entradas (nivel/impedancia)</td><td>CD/LINE -14 dBV/22 kΩ · PHONO -54 dBV/47 kΩ · MAIN MIC -54 dBV/3 kΩ · SUB MIC -60 dBV/3 kΩ · RETURN -14 dBV/22 kΩ</td></tr>
<tr><td>Saidas (nivel/impedancia)</td><td>MASTER OUT1 (RCA) 0 dBV/1 kΩ · MASTER OUT2 (XLR) 4 dBm/600 Ω · REC OUT -10 dBV · BOOTH 0 dBV/1 kΩ · SEND -14 dBV · PHONES 0 dBV/22 Ω</td></tr>
<tr><td>Resposta de frequencia</td><td>CD/LINE/PHONO/MIC: 20 Hz a 20 kHz</td></tr>
<tr><td>Sinal/ruido · distorcao · diafonia</td><td>CD/LINE 87 dB · PHONO 77 dB · MIC 69 dB · THD abaixo de 0,02 % · crosstalk acima de 70 dB</td></tr>
<tr><td>Equalizador de canal</td><td>HI +12 / -26 dB (13 kHz) · MID +12 / -26 dB (1 kHz) · LOW +12 / -26 dB (70 Hz)</td></tr>
<tr><td>Equalizador do microfone</td><td>HI, MID e LOW: +12 / -12 dB (10 kHz, 1 kHz e 100 Hz)</td></tr>
<tr><td>Faixa dos efeitos</td><td>DELAY e ECHO 1 a 3500 ms · PAN, TRANS, FILTER e FLANGER 10 a 16000 ms · REVERB 1 a 100 % · PITCH 0 a ±100 %</td></tr>
<tr><td>Contador de BPM</td><td>duas faixas de leitura: 70-139 e 91-180 BPM</td></tr>
<tr><td>Cartucho de agulha aceito</td><td>somente <b>MM</b> (moving magnet)</td></tr>
<tr><td>Taxa de amostragem / conversores</td><td><b>nao consta no manual</b> — o DJM-600 e mesa analogica com bloco de efeito digital</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h4>Seletor de entrada (o controle mais mal-entendido da mesa)</h4>
<ul>
<li><b>O que e:</b> chave no topo de cada canal que decide de onde vem o som. As posicoes <b>nao sao iguais nos quatro</b>:
<b>CH-1</b> CD1/LINE ou LINE · <b>CH-2</b> CD2/LINE ou PHONO 1 · <b>CH-3</b> LINE ou PHONO 2 · <b>CH-4</b> LINE ou SUB MIC/PHONO 3.</li>
<li><b>Na pratica:</b> a primeira coisa ao chegar na cabine e conferir essas quatro chaves. Canal mudo com o LED apagado? A chave e a suspeita numero um — antes do cabo, antes do fader.</li>
<li><b>Erro comum:</b> plugar toca-discos no CH-1. <b>O CH-1 nao tem PHONO</b> — vinil so no CH-2, CH-3 ou CH-4.</li>
</ul>

<h4>TRIM (ganho de entrada)</h4>
<ul>
<li><b>O que faz:</b> ajusta o nivel de entrada do canal, de -&#8734; ate <b>+9 dB</b>. O <b>peak level meter</b> ao lado vai de -24 a +14 dB e segura o pico por 2 s.</li>
<li><b>Quando o DJ usa:</b> sempre, antes de subir o fader. Toque a musica e gire o TRIM ate os LEDs baterem em volta do <b>0</b>.</li>
<li><b>Erro comum:</b> deixar o TRIM no maximo "para ficar alto". Satura a entrada, o som suja antes de chegar ao master, e nenhum ajuste depois recupera.</li>
</ul>

<h4>EQ de 3 bandas — com funcao de KILL</h4>
<ul>
<li><b>HI</b> 13 kHz, <b>MID</b> 1 kHz, <b>LOW</b> 70 Hz. Sobem ate <b>+12 dB</b> e descem ate <b>-26 dB</b>.</li>
<li><b>O detalhe que importa:</b> -26 dB nao e "abaixar um pouco", e <b>matar a banda</b> — por isso o manual chama de kill. E assim que se troca o bumbo.</li>
<li><b>Erro comum:</b> usar o EQ so para levantar (+12). Mixagem boa e feita <b>cortando</b>.</li>
</ul>

<h4>Channel fader, CROSS FADER ASSIGN e CROSS FADER CURVE</h4>
<ul>
<li><b>Channel fader:</b> volume do canal na mistura, escala 0 a 10.</li>
<li><b>CROSS FADER ASSIGN A e B:</b> duas chaves rotativas que escolhem <b>o que fica em cada lado do crossfader</b>. Posicoes: <b>1, 2, 3, 4, THRU e SAMPLER</b>. Em <b>THRU</b> o canal ignora o crossfader.</li>
<li><b>CROSS FADER CURVE:</b> <b>3 posicoes</b> — mistura longa (transicao de pista), intermediaria, e <b>corte rapido</b>, em que o canal ja entra cheio nos primeiros milimetros (scratch e cut).</li>
<li><b>Erro comum:</b> "o crossfader nao faz nada". Quase sempre os dois ASSIGN estao em THRU, ou os dois no mesmo lado.</li>
</ul>

<h4>Fone, master e microfone</h4>
<ul>
<li><b>HEADPHONES CUE</b> por canal (CH-1 a CH-4), mais <b>MASTER</b> e <b>EFFECTS/SAMPLER</b> — pode apertar varios e pre-escutar a mistura. <b>MIXING</b> gira entre o CUE e o MASTER; <b>LEVEL</b> e o volume do fone.</li>
<li><b>MONO SPLIT / STEREO:</b> em MONO SPLIT o CUE sai no ouvido esquerdo e o master no direito — e assim que se bate ritmo em cabine barulhenta.</li>
<li><b>MASTER LEVEL</b>, <b>MASTER BALANCE</b> (L/R), chave <b>MONO/STEREO</b> e <b>BOOTH MONITOR</b>, este ultimo com volume <b>independente do master</b> — e o que salva o DJ que nao se escuta.</li>
<li><b>MIC:</b> entrada cannon/XLR no canto superior esquerdo, com <b>MIC LEVEL</b> e EQ de 3 bandas (±12 dB). O <b>TALK OVER</b> abaixa ~<b>14 dB</b> tudo que nao e o microfone principal.</li>
</ul>

<h4>BEAT EFFECTS, AUTO BPM COUNTER e BEAT SAMPLER</h4>
<ul>
<li><b>Seletor de efeito:</b> DELAY, ECHO, PAN, TRANS, FILTER, FLANGER, REVERB, PITCH e <b>SND/RTN</b> (processador externo), mais a posicao <b>AUTO BPM</b>, em que o bloco vira so contador.</li>
<li><b>CH. SELECT:</b> escolhe <b>quem recebe o efeito</b> e quem e medido pelo contador: 1, 2, 3, 4, CF.A, CF.B, MIC ou MASTER.</li>
<li><b>BEAT esquerda/direita:</b> fracao de compasso (1/4, 1/2, 3/4, 1/1, 2/1, 4/1, 8, 16). O tempo sai do BPM medido — o efeito "cai no ritmo" sozinho.</li>
<li><b>PARAMETER 1 (TIME)</b> e <b>PARAMETER 2 (LEVEL/DEPTH):</b> tempo e quantidade do efeito.</li>
<li><b>ON/OFF · TAP:</b> liga o efeito. Em AUTO BPM vira <b>TAP</b>: bata no ritmo 2 vezes ou mais e o contador usa o BPM batido. O <b>BPM RANGE</b> troca a faixa (70-139 / 91-180) e cancela o TAP.</li>
<li><b>BEAT SAMPLER:</b> grava um numero de tempos da musica (REC), toca em LOOP ou SINGLE, e tem STRETCH e EDIT. Pode ser disparado pelo crossfader.</li>
</ul>

<h3>4. Como ligar</h3>
<p><b>A regra que nao muda:</b> <b>CD player / XDJ / player digital vai em LINE (ou CD)</b>; <b>toca-discos vai em PHONO</b>. O sinal de agulha e 40 dB mais fraco (-54 dBV contra -14 dBV) e precisa do pre-amplificador com curva RIAA que so existe no PHONO. Toca-discos no LINE fica quase inaudivel; CD player no PHONO estoura e distorce.</p>

<h4>Entradas (painel traseiro)</h4>
<ul>
<li><b>CH-1</b> CD 1/LINE e LINE (<b>sem PHONO</b>) · <b>CH-2</b> CD 2/LINE e PHONO 1 · <b>CH-3</b> LINE e PHONO 2 · <b>CH-4</b> LINE e PHONO 3.</li>
<li><b>PHONO 3 e compartilhada com o SUB MIC:</b> o manual avisa que, com o microfone auxiliar ligado, ela nao pode ser usada.</li>
<li><b>SIGNAL GND:</b> parafuso de terra do toca-discos. Sem ele o vinil zumbe. O manual e explicito: <b>nao e aterramento de seguranca</b>.</li>
<li><b>Plugues de curto-circuito:</b> a mesa sai de fabrica com <b>6 plugues</b> nas PHONO 1, 2 e 3, que cortam ruido enquanto nao ha toca-discos. Tire para usar o vinil e <b>guarde</b>; ao desligar, recoloque.</li>
<li><b>PLAYER CONTROL:</b> entradas P2 (3,5 mm) para o control cord dos CDJ — e o que faz o <b>FADER START</b> funcionar: subir o fader da play, baixar volta ao cue.</li>
</ul>

<h4>Saidas</h4>
<ul>
<li><b>MASTER OUT 1 (RCA)</b> e <b>MASTER OUT 2 (XLR balanceada)</b> — a XLR e a saida para PA de verdade. Pinagem do manual: <b>1 GND, 2 HOT (+), 3 COLD (-)</b>.</li>
<li><b>MASTER LEVEL ATT.</b> — atenuador traseiro (-&#8734; a 0 dB), para proteger amplificador e caixa. Som baixo com o MASTER LEVEL no talo? Olhe este botao primeiro.</li>
<li><b>BOOTH MONITOR</b> — caixa da cabine. <b>PHONES</b> — fone, no painel frontal.</li>
<li><b>REC OUT</b> — grava a mesma fonte do master, mas <b>sem sofrer</b> o MASTER LEVEL, o MASTER BALANCE nem a chave MONO: mexer no volume da pista nao muda a gravacao.</li>
<li><b>SEND / RETURN</b> — processador externo. Efeito mono? Ligue no <b>L</b>: o SEND manda L+R somados e o RETURN devolve nos dois lados.</li>
</ul>

<h3>5. Na pratica (faca no simulador desta aula)</h3>
<ol>
<li><b>Ganho antes de tudo:</b> com os faders em zero, ajuste o <b>TRIM</b> dos canais 1 e 2 ate o peak meter bater em torno do <b>0</b>, sem acender o topo. So depois suba os faders.</li>
<li><b>Troca com grave:</b> com as duas bases tocando, gire o <b>LOW do CH-2</b> ate o fim (-26 dB), passe o crossfader para o lado B e devolva o LOW ao centro. Nunca houve dois bumbos juntos.</li>
<li><b>Descubra a curva:</b> ponha o <b>CROSS FADER CURVE</b> no corte rapido e mexa o crossfader poucos milimetros. Depois volte a curva longa e repita.</li>
<li><b>Efeito no ritmo:</b> escolha <b>ECHO</b>, <b>CH. SELECT</b> no canal que toca, <b>BEAT</b> em 1/2, suba o <b>LEVEL/DEPTH</b> e ligue na virada de 8 tempos. Desligue antes da proxima frase.</li>
<li><b>Prove o TAP:</b> seletor em <b>AUTO BPM</b>, bata o TAP 4 vezes no ritmo e compare com o que o contador automatico mostrava.</li>
</ol>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Achar que a mesa quebrou porque o vinil quase nao sai.</b> Antes de trocar cabo, confira se o toca-discos esta na <b>PHONO</b> e se a chave do canal esta em PHONO. E o chamado de "mesa com defeito" que nao e defeito.</li>
<li><b>Perder os 6 plugues de curto-circuito, ou ligar o SUB MIC sem saber.</b> Sem os plugues nas PHONO livres a mesa capta chiado; e o SUB MIC ocupa a PHONO 3 — liga um, some o outro.</li>
<li><b>Esquecer o MASTER LEVEL ATT. traseiro atenuado.</b> Voce passa o show com o master no maximo achando que a mesa e fraca, e ainda entrega sinal ruidoso para o PA.</li>
<li><b>Deixar o TALK OVER ligado depois do anuncio.</b> A musica fica 14 dB mais baixa o resto da noite e ninguem descobre por que "a pista esfriou".</li>
</ul>
`.trim();

/* ========================================================================== */
/*  AULA 109 — Pioneer DJM-800                                                */
/*  fonte: manual DRB1393-C (c) 2005, extraido com 0 buracos + simulador       */
/* ========================================================================== */
const DJM800 = `
<h2>Pioneer DJM-800 — o mixer que virou o padrao de clube</h2>

<h3>1. O que e e por que existe</h3>
<p>O <b>DJM-800</b> e a mesa de 4 canais que a Pioneer lancou em <b>2005</b> para fazer par com o
CDJ-1000MK3. Se o DJM-600 resolveu "como ligar tudo numa mesa so", o DJM-800 resolveu outro problema:
o DJ agora queria <b>tocar o efeito como instrumento</b>, ao vivo, sem tirar a mao da mesa — e queria
que a cabine falasse a mesma lingua do computador.</p>

<p>Duas invencoes desta mesa ficaram para sempre no padrao Pioneer. A primeira e o <b>SOUND COLOR FX</b>:
um botao <b>COLOR</b> em cada canal, e quatro efeitos (HARMONIC, SWEEP, CRUSH, FILTER) que voce escolhe
uma vez e aplica girando o COLOR do canal que quiser. Filtro passou a ser gesto, nao menu. A segunda e o
bloco de <b>BEAT EFFECTS</b> com <b>14 efeitos</b> sincronizados ao BPM e com <b>CH SELECT</b> — voce escolhe
sobre qual sinal o efeito age (canal, microfone, lado do crossfader ou master).</p>

<p>Some a isso o caminho digital: <b>96 kHz / 24 bits</b>, <b>4 entradas digitais coaxiais</b>, saida digital
com seletor de taxa e uma porta <b>MIDI OUT</b> que transmite a posicao de praticamente todo botao e knob da
mesa. Foi a mesa que colocou o DJ de vinil, o DJ de CD e o DJ de laptop na mesma cabine sem briga.</p>

<p>Onde voce encontra hoje: e a mesa que ainda esta pendurada em <b>casa noturna media, festa universitaria,
locadora de som e escola</b>. O layout dela e literalmente o mesmo dos DJM-900 e DJM-A9 de hoje —
quem aprende no 800 senta em qualquer DJM moderno e sabe onde a mao vai.</p>

<h3>2. Ficha tecnica</h3>
<p>Tudo abaixo saiu da secao SPECIFICATIONS do manual oficial (DRB1393-C).</p>
<table>
<tr><th>Item</th><th>Valor de manual</th></tr>
<tr><td>Canais</td><td>4 canais + 2 microfones</td></tr>
<tr><td>Dimensoes maximas</td><td>320 (L) x 381 (P) x 108 (A) mm</td></tr>
<tr><td>Peso</td><td>8,0 kg</td></tr>
<tr><td>Alimentacao</td><td>AC 120 V, 60 Hz — 32 W</td></tr>
<tr><td>Taxa de amostragem</td><td>96 kHz</td></tr>
<tr><td>Conversores A/D e D/A</td><td>24 bits</td></tr>
<tr><td>Resposta de frequencia</td><td>LINE 20 Hz-20 kHz · MIC 20 Hz-20 kHz · PHONO 20 Hz-20 kHz (RIAA)</td></tr>
<tr><td>Relacao sinal/ruido</td><td>LINE 105 dB · PHONO 88 dB · MIC 84 dB</td></tr>
<tr><td>Distorcao (LINE-MASTER 1)</td><td>0,005 %</td></tr>
<tr><td>Diafonia (LINE)</td><td>82 dB</td></tr>
<tr><td>Entradas (nivel/impedancia)</td><td>PHONO 2 a 4: -52 dBu/47 kΩ · MIC 1 e 2: -52 dBu/3 kΩ · LINE e LINE/CD 1 a 4: -12 dBu/22 kΩ · RETURN -12 dBu/22 kΩ</td></tr>
<tr><td>Saidas (nivel/carga/impedancia)</td><td>MASTER 1 +2 dBu/10 kΩ/10 Ω ou menos · MASTER 2 +2 dBu/10 kΩ/1 kΩ · REC -8 dBu · BOOTH +2 dBu/600 Ω/600 Ω · SEND -12 dBu · PHONES +8,5 dBu/32 Ω/22 Ω ou menos</td></tr>
<tr><td>Saida nominal</td><td>MASTER 1: +22 dBu/10 kΩ · MASTER 2: +20 dBu/10 kΩ</td></tr>
<tr><td>Equalizador de canal</td><td>HI -26 a +6 dB (13 kHz) · MID -26 a +6 dB (1 kHz) · LOW -26 a +6 dB (70 Hz)</td></tr>
<tr><td>Equalizador do microfone</td><td>HI -12 a +6 dB (10 kHz) · LOW -12 a +6 dB (100 Hz)</td></tr>
<tr><td>Conectores de entrada</td><td>PHONO RCA x3 · LINE/CD RCA x4 · LINE RCA x1 · MIC XLR/P10 combo x1 e P10 x1 · DIGITAL coaxial RCA x4 · RETURN P10 x1</td></tr>
<tr><td>Conectores de saida</td><td>MASTER XLR x1 e RCA x1 · BOOTH P10 x1 · REC RCA x1 · SEND P10 x1 · DIGITAL coaxial RCA x1 · MIDI OUT DIN 5 pinos x1 · PHONES P10 estereo x1 · CONTROL P2 (3,5 mm) x4</td></tr>
<tr><td>Cartucho de agulha aceito</td><td>somente <b>MM</b></td></tr>
</table>

<h3>3. Controle por controle</h3>

<h4>Seletor de entrada — o que cada canal aceita</h4>
<ul>
<li><b>CH-1:</b> CD/DIGITAL ou LINE. <b>Nao tem PHONO</b> — o manual diz isso com todas as letras.</li>
<li><b>CH-2:</b> CD/DIGITAL ou PHONO.</li>
<li><b>CH-3 e CH-4:</b> LINE/DIGITAL ou PHONO.</li>
<li><b>Erro comum:</b> selecionar CD/DIGITAL com a chave traseira em DIGITAL sem cabo coaxial ligado. O canal fica mudo e parece defeito — sao <b>duas</b> chaves em serie, a de cima e a de tras.</li>
</ul>

<h4>TRIM, EQ e medidor</h4>
<ul>
<li><b>TRIM:</b> -&#8734; a <b>+9 dB</b>. Suba ate o LED beirar o <b>0</b> sem acender <b>OVER</b>.</li>
<li><b>EQ HI / MID / LOW:</b> vao de <b>-26 dB a +6 dB</b>. Repare na assimetria proposital: <b>corta muito e levanta pouco</b>. Isso e um convite de projeto para voce mixar cortando.</li>
<li><b>CHANNEL LEVEL:</b> escala OVER, 10, 7, 4, 2, 1, 0 e para baixo ate -24 dB. E lido antes do fader, entao serve para ajustar TRIM com o fader ainda em zero.</li>
</ul>

<h4>SOUND COLOR FX — o botao COLOR</h4>
<ul>
<li><b>HARMONIC:</b> realca os harmonicos; o COLOR escolhe quais parciais sobem.</li>
<li><b>SWEEP:</b> COLOR no sentido horario abre um passa-faixa; no anti-horario vira notch.</li>
<li><b>CRUSH:</b> esmaga o som; o COLOR joga a enfase no grave (esquerda) ou no agudo (direita).</li>
<li><b>FILTER:</b> COLOR a direita = passa-altas; a esquerda = passa-baixas. Vale para os canais 1 a 4.</li>
<li><b>Na pratica:</b> escolhe-se o tipo uma vez na noite inteira; o que se toca e o knob COLOR de cada canal, no centro (neutro) para fora.</li>
</ul>

<h4>BEAT EFFECTS</h4>
<ul>
<li><b>14 efeitos:</b> DELAY, ECHO, REV DLY, PAN, TRANS, FILTER, FLANGER, PHASER, REVERB, ROBOT, CHORUS, ROLL, REV ROLL e <b>SND/RTN</b> (processador externo).</li>
<li><b>CH SELECT:</b> 1, 2, 3, 4, MIC, CF.A, CF.B ou MASTER — onde o efeito age.</li>
<li><b>BEAT esquerda/direita:</b> divide (1/1 → 1/2 → 1/4) ou multiplica (2/1 → 4/1 → 8/1) o tempo do efeito.</li>
<li><b>AUTO/TAP</b> e <b>TAP:</b> leitura de BPM automatica ou batida na mao (2 toques ou mais).</li>
<li><b>TIME</b> (parametro 1) e <b>LEVEL/DEPTH</b> (parametro 2). Girando o TIME com o TAP apertado, voce ajusta o BPM direto.</li>
<li><b>CUE do efeito:</b> escute o efeito no fone <b>antes</b> de soltar na pista. Poucos usam; e o que separa o DJ que erra do que nao erra.</li>
</ul>

<h4>Faders, curvas e assign</h4>
<ul>
<li><b>CROSS FADER ASSIGN</b> por canal: <b>A</b>, <b>THRU</b> (ignora o crossfader) ou <b>B</b>.</li>
<li><b>CH FADER</b> (curva do fader de canal) e <b>CROSS FADER</b> (curva do crossfader): subida rapida, intermediaria ou linear.</li>
</ul>

<h4>Master, booth, microfone e MIDI</h4>
<ul>
<li><b>MASTER LEVEL</b>, <b>BALANCE</b> (vale para master, booth, rec e saida digital) e <b>STEREO/MONO</b>.</li>
<li><b>BOOTH MONITOR:</b> volume proprio, independente do MASTER LEVEL.</li>
<li><b>MIC 1</b> combo XLR/P10 e <b>MIC 2</b> P10, com EQ HI/LOW e chave <b>OFF / ON / TALK OVER</b> — no TALK OVER o resto abaixa <b>20 dB</b> quando voce fala.</li>
<li><b>MIDI START/STOP:</b> manda clock MIDI para o software; segurando, envia um snapshot com a posicao de tudo.</li>
</ul>

<h3>4. Como ligar</h3>
<p><b>Regra fixa:</b> <b>CDJ/XDJ/player digital em CD ou LINE</b>; <b>toca-discos em PHONO</b>. No DJM-800 a
diferenca de nivel entre as duas entradas e de <b>40 dB</b> (-52 dBu no PHONO contra -12 dBu no LINE/CD),
alem da equalizacao RIAA. Nao ha como um substituir o outro.</p>

<h4>Painel de conexao, terminal por terminal (numeracao do manual)</h4>
<ul>
<li><b>PHONO (RCA, x3):</b> nivel de agulha, <b>cartucho MM</b>. O manual avisa: nao entre com sinal de linha aqui.</li>
<li><b>SIGNAL GND:</b> terra do toca-discos. Nao e aterramento de seguranca.</li>
<li><b>CD (RCA):</b> nivel de linha, para DJ CD player.</li>
<li><b>LINE (RCA):</b> nivel de linha, para tape deck e afins.</li>
<li><b>DIGITAL IN (RCA coaxial, x4):</b> uma por canal, para a saida digital do player.</li>
<li><b>Chaves DIGITAL/CD e DIGITAL/LINE:</b> ficam no painel traseiro e escolhem entre a entrada analogica e a digital daquele canal.</li>
<li><b>CONTROL (P2 3,5 mm, x4):</b> control cord dos players Pioneer — habilita o <b>fader start/stop</b>.</li>
<li><b>RETURN (P10) / SEND (P10):</b> processador externo. So o canal L ligado? O SEND sai mono L+R e o RETURN entra nos dois lados.</li>
<li><b>MASTER 1 (XLR macho, balanceada):</b> a saida para o PA. O manual recomenda: se voce so tem cabo RCA, use a MASTER 2 direto, <b>nao</b> um adaptador XLR/RCA.</li>
<li><b>MASTER 2 (RCA, desbalanceada)</b> e <b>REC (RCA)</b> para gravacao.</li>
<li><b>BOOTH (P10 TRS):</b> aceita ligacao balanceada e desbalanceada.</li>
<li><b>MASTER ATT:</b> atenuador de master no painel traseiro — <b>0, -3, -6 e -12 dB</b>.</li>
<li><b>MIC SIGNAL ADD/CUT:</b> em <b>ADD</b> o microfone sai tambem no BOOTH; em <b>CUT</b>, nao sai. Em CUT voce evita microfonia da caixa da cabine.</li>
<li><b>fs 48 k / 96 k:</b> taxa da saida digital. <b>Desligue a mesa antes de mexer nesta chave</b> — instrucao do proprio manual.</li>
<li><b>MIDI OUT (DIN 5 pinos)</b> e <b>DIGITAL OUT (RCA coaxial)</b>.</li>
</ul>

<h3>5. Na pratica (faca no simulador desta aula)</h3>
<ol>
<li><b>Ganho estruturado:</b> com os faders em zero, ajuste o TRIM dos canais 1 e 2 ate o CHANNEL LEVEL bater no <b>0</b> sem acender OVER. Depois suba os faders e confira o MASTER LEVEL.</li>
<li><b>COLOR como instrumento:</b> selecione <b>FILTER</b> no SOUND COLOR FX e, com as duas bases tocando, gire o COLOR do canal 1 lentamente para a direita durante 8 tempos, e devolva ao centro na virada.</li>
<li><b>Efeito no lado certo:</b> ligue <b>ECHO</b> com <b>CH SELECT</b> em <b>CF.A</b>, ponha o crossfader no lado A e ouca. Agora mude o CH SELECT para <b>MASTER</b> e repita. Perceba que o mesmo efeito muda de funcao.</li>
<li><b>THRU existe por um motivo:</b> ponha o CROSS FADER ASSIGN do canal 2 em <b>THRU</b> e mexa o crossfader de ponta a ponta. O canal 2 nao sai mais. Devolva para B.</li>
<li><b>Duas curvas, dois oficios:</b> troque a chave CROSS FADER entre corte rapido e linear e refaca a mesma transicao. Escolha qual serve para virada de pista e qual serve para scratch.</li>
</ol>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Tentar ligar toca-discos no canal 1.</b> Ele nao tem PHONO. Voce vai perder 10 minutos de festa procurando um defeito que nao existe.</li>
<li><b>Chave traseira em DIGITAL sem cabo coaxial.</b> Canal mudo. Antes de acusar cabo ou player, confira a chave DIGITAL/CD (ou DIGITAL/LINE) daquele canal.</li>
<li><b>Mudar o fs 48k/96k com a mesa ligada.</b> O manual manda desligar. Alem do risco, o audio corta na hora — no meio do show isso e um silencio publico.</li>
<li><b>Deixar MIC SIGNAL em ADD com a caixa da cabine perto do microfone.</b> Microfonia na hora do anuncio, na frente de todo mundo.</li>
<li><b>Adaptador XLR/RCA na MASTER 1.</b> O proprio fabricante desaconselha. Use a MASTER 2, que ja e RCA.</li>
</ul>
`.trim();

/* ========================================================================== */
/*  AULA 110 — Pioneer DJM-2000                                               */
/*  fonte: manual DRB1496-D (c) 2010 (14 buracos; secao de spec legivel) + sim */
/* ========================================================================== */
const DJM2000 = `
<h2>Pioneer DJM-2000 — a mesa com tela que virou instrumento</h2>

<h3>1. O que e e por que existe</h3>
<p>O <b>DJM-2000</b> e o carro-chefe que a Pioneer lancou em <b>2010</b>. O manual o define como um mixer de
alto desempenho para <b>DJ profissional</b>, e o que ele tentou responder foi uma pergunta nova da epoca:
se o DJ ja tinha 4 players ligados em rede e a musica toda dentro do rekordbox, <b>por que o efeito ainda
era um knob cego?</b></p>

<p>A resposta foi por um caminho que nenhum mixer tinha tomado: uma <b>tela LCD multi-touch de 5,8"</b> no
meio da mesa. Nela rodam tres coisas que voce nao acha em nenhum DJM anterior:</p>
<ul>
<li><b>FREQUENCY MIX</b> — divide a faixa em <b>sete bandas</b> de frequencia mostradas graficamente e deixa
voce misturar dois canais ou <b>trocar instrumentos (partes)</b> de uma musica pela outra, arrastando o dedo.</li>
<li><b>SIDECHAIN REMIX</b> — usa o som de um canal como <b>gatilho</b> para aplicar efeito nos outros. E o
efeito "respirando" no bumbo, feito na mesa e nao no software.</li>
<li><b>LIVE SAMPLER</b> — amostra ate <b>8 segundos</b> do microfone ou do master e devolve num player, ao vivo.</li>
</ul>

<p>Do lado de fora da tela veio o <b>INST FX</b>: seis efeitos instantaneos (NOISE, ZIP, CRUSH, JET, HPF, LPF)
aplicados simplesmente girando o knob <b>FILTER</b> de cada canal. E, no painel traseiro, o detalhe mais
importante para quem trabalha: <b>6 portas LINK</b> (PRO DJ LINK), suficientes para <b>4 players e 2
computadores</b> na mesma rede.</p>

<p>Hoje voce encontra o DJM-2000 em <b>clube grande, festival e locadora de porte</b>. Ele nao e a mesa mais
simples para comecar — e a mesa que mostra ate onde um mixer de DJ pode ir.</p>

<h3>2. Ficha tecnica</h3>
<p>Da secao Specifications do manual oficial (DRB1496-D).</p>
<table>
<tr><th>Item</th><th>Valor de manual</th></tr>
<tr><td>Canais</td><td>4 canais + microfone</td></tr>
<tr><td>Dimensoes</td><td>430 (L) x 107,9 (A) x 409 (P) mm</td></tr>
<tr><td>Peso</td><td>8,5 kg</td></tr>
<tr><td>Alimentacao</td><td>AC 120 V, 60 Hz — 42 W (0,4 W em espera)</td></tr>
<tr><td>Tela</td><td>LCD multi-touch de <b>5,8 polegadas</b></td></tr>
<tr><td>Taxa de amostragem</td><td>96 kHz</td></tr>
<tr><td>Conversores A/D e D/A</td><td>24 bits</td></tr>
<tr><td>Resposta de frequencia</td><td>CD / LINE / MIC: 20 Hz a 20 kHz</td></tr>
<tr><td>Relacao sinal/ruido</td><td>PHONO 93 dB · CD/DIGITAL e LINE 107 dB · MIC 85 dB</td></tr>
<tr><td>Distorcao (LINE-MASTER1)</td><td>0,004 %</td></tr>
<tr><td>Diafonia (LINE)</td><td>82 dB</td></tr>
<tr><td>Entradas (nivel/impedancia)</td><td>PHONO -52 dBu/47 kΩ · CD/LINE -12 dBu/47 kΩ · MIC -52 dBu/8 kΩ · RETURN -12 dBu/47 kΩ</td></tr>
<tr><td>Saidas (nivel/carga/impedancia)</td><td>MASTER1 +8 dBu/10 kΩ/1 Ω ou menos · MASTER2 +2 dBu/10 kΩ/22 Ω ou menos · REC OUT -8 dBu/10 kΩ · SEND -12 dBu/10 kΩ · PHONES +8,5 dBu/32 Ω · <b>BOOTH: o numero nao saiu legivel na extracao do manual</b></td></tr>
<tr><td>Saida nominal</td><td>MASTER1 +26 dBu/10 kΩ · MASTER2 +20 dBu/10 kΩ</td></tr>
<tr><td>Equalizador de canal</td><td>HI -26 a +6 dB (13 kHz) · MID -26 a +6 dB (1 kHz) · LOW -26 a +6 dB (70 Hz)</td></tr>
<tr><td>Equalizador do microfone</td><td>HI -12 a +12 dB (10 kHz) · LOW -12 a +12 dB (100 Hz)</td></tr>
<tr><td>Conectores de entrada</td><td>PHONO RCA x2 · CD RCA x4 · LINE RCA x2 · MIC combo XLR/P10 x1 · RETURN P10 x1 · DIGITAL IN coaxial RCA x4</td></tr>
<tr><td>Conectores de saida</td><td>MASTER XLR x1 e RCA x1 · BOOTH P10 x1 · REC OUT RCA x1 · SEND P10 x1 · DIGITAL OUT coaxial RCA x1 · MIDI OUT DIN 5 pinos x1 · PHONES P10 estereo x1</td></tr>
<tr><td>Rede e computador</td><td><b>LINK: 6 portas LAN 100Base-TX</b> · USB tipo B x1 · CONTROL P2 (3,5 mm) x2</td></tr>
<tr><td>Leitura de BPM</td><td>AUTO detecta de <b>70 a 180 BPM</b></td></tr>
</table>

<h3>3. Controle por controle</h3>

<h4>Seletor de entrada — cada canal tem posicoes diferentes</h4>
<ul>
<li><b>CH-1:</b> CD/DIGITAL · <b>PHONO</b> · USB 1/2</li>
<li><b>CH-2:</b> CD/DIGITAL · LINE · USB 3/4</li>
<li><b>CH-3:</b> CD/DIGITAL · LINE · USB 5/6</li>
<li><b>CH-4:</b> CD/DIGITAL · <b>PHONO</b> · USB 7/8</li>
<li><b>Guarde isto:</b> <b>toca-discos so entra no CH-1 e no CH-4.</b> Os canais 2 e 3 nao tem PHONO — bate com a spec, que traz apenas <b>2 entradas PHONO</b> e <b>2 LINE</b>.</li>
<li>A posicao <b>USB x/x</b> e o par de canais que o computador manda pela mesma porta USB. E assim que se roda DVS/software sem placa externa.</li>
</ul>

<h4>TRIM, EQ/ISO e medidor</h4>
<ul>
<li><b>TRIM:</b> -&#8734; a <b>+9 dB</b>, por canal.</li>
<li><b>Chave CH EQ — ISOLATOR / EQ:</b> decide o comportamento dos tres knobs. Em <b>EQ</b> eles cortam ate -26 dB; em <b>ISOLATOR</b> a banda <b>some por completo</b>. Uma chave, duas mesas diferentes.</li>
<li><b>Channel Level Indicator:</b> 15 segmentos, de OVER ate -24 dB. E por ele que se acerta o TRIM.</li>
</ul>

<h4>INST FX — o knob FILTER de cada canal</h4>
<ul>
<li><b>Seis efeitos:</b> NOISE, JET, ZIP, HPF, CRUSH e LPF. Voce escolhe um nos botoes vermelhos e aplica girando o <b>FILTER</b> do canal desejado. No centro e neutro; para os lados, MIN → MAX.</li>
<li><b>PARAMETER:</b> segundo parametro do INST FX (volume do ruido, quantidade do efeito).</li>
<li><b>Na pratica:</b> e o efeito de improviso. Escolhe-se o tipo no comeco do set e toca-se com os quatro knobs FILTER.</li>
</ul>

<h4>BEAT EFFECT</h4>
<ul>
<li><b>Doze efeitos:</b> DELAY, MULTI TAP DELAY, ROLL, REV ROLL, TRANS, GATE, ECHO, REVERB, SLIP ROLL, FILTER, PHASER e SEND/RETURN.</li>
<li><b>CH SELECT:</b> 1, 2, 3, 4, MIC, A, B (lados do crossfader) e M (master).</li>
<li><b>Botoes de beat:</b> 1/8, 1/4, 1/2, 3/4, 1/1, 2/1 e 4/1. Segurando um deles e girando o TIME voce faz o ajuste fino.</li>
<li><b>EFFECT FREQUENCY HI / MID / LOW:</b> este e o controle que quase ninguem usa e que faz diferenca. Ele <b>dosa o efeito por faixa</b> — voce pode botar um delay que pega so o agudo e deixa o bumbo limpo.</li>
<li><b>TIME</b> e <b>LEVEL/DEPTH</b>, <b>AUTO/TAP</b> e <b>TAP</b>, e o <b>ON/OFF</b> grande.</li>
<li><b>Aviso do proprio manual:</b> os efeitos <b>ECHO, REVERB, ROLL, SLIP ROLL e REV ROLL nao podem ser monitorados no CUE</b> — o circuito que gera o eco fica <b>depois</b> do circuito de efeito. Nao e defeito.</li>
</ul>

<h4>Tela multi-touch</h4>
<ul>
<li><b>MIX</b> abre o FREQUENCY MIX, <b>REMIX</b> abre o SIDECHAIN REMIX, e o <b>ON/OFF</b> ao lado liga o efeito da tela.</li>
<li><b>MIDI</b> transforma a tela em superficie de controle para o software.</li>
<li><b>LIVE SAMPLER (UTILITY, WAKE UP):</b> abre o sampler. Segurando <b>1 segundo</b>, entra no menu UTILITY; tambem tira a mesa do modo de espera.</li>
<li><b>CUE</b> proprios para o painel tactil e para o LIVE SAMPLER.</li>
</ul>

<h4>Master, fone e microfone</h4>
<ul>
<li><b>MASTER LEVEL</b>, <b>BALANCE</b> (so em STEREO), chave <b>MONO/STEREO</b> para todas as saidas e <b>BOOTH MONITOR</b> com volume proprio.</li>
<li><b>CURVE SETTING:</b> curva do <b>CH FADER</b> e curva do <b>CROSS FADER</b>, separadas.</li>
<li><b>Fone:</b> CUE por canal, CUE MASTER, CUE LINK (pre-escuta a faixa selecionada no rekordbox pelo PRO DJ LINK), <b>MONO SPLIT/STEREO</b>, <b>MIXING</b> e <b>LEVEL</b>.</li>
<li><b>Microfone:</b> combo XLR/TRS, <b>MIC LEVEL</b>, EQ HI/LOW (±12 dB) e chave <b>OFF / ON / TALK OVER</b>.</li>
<li><b>MIDI ON/OFF</b> e <b>START/STOP</b>: envia MIDI Start/Stop; segurar 2 segundos manda o <b>SNAPSHOT</b> com a posicao de tudo.</li>
</ul>

<h3>4. Como ligar</h3>
<p><b>A regra de sempre:</b> <b>CDJ/XDJ/player digital vai em CD (ou LINE)</b>; <b>toca-discos vai em PHONO</b>.
No DJM-2000 a diferenca e de <b>40 dB</b> (-52 dBu contra -12 dBu). E aqui ha uma pegadinha extra: <b>so os
canais 1 e 4 tem PHONO</b>. Se voce chegar numa cabine com dois toca-discos, eles vao nos canais das pontas.</p>

<h4>Entradas (painel traseiro, nomes do manual)</h4>
<ul>
<li><b>PHONO</b> — nivel de agulha, cartucho MM. O manual e explicito: <b>nao entre com sinal de linha</b>.</li>
<li><b>CD</b> — DJ player ou qualquer fonte de nivel de linha.</li>
<li><b>LINE</b> — tape deck e afins.</li>
<li><b>SIGNAL GND</b> — terra do toca-discos, para tirar o zumbido.</li>
<li><b>DIGITAL IN (x4)</b> — saida coaxial digital dos players. A chave <b>CD / DIGITAL</b> escolhe entre a entrada analogica e a digital daquele canal.</li>
<li><b>CONTROL</b> — control cord dos players Pioneer (fader start).</li>
<li><b>USB</b> — computador.</li>
<li><b>LINK (6 portas)</b> — <b>PRO DJ LINK</b>. Com cabo de rede voce liga ate 4 players Pioneer e 2 computadores rodando rekordbox. Uma unica faixa fica disponivel para todos os players.</li>
</ul>

<h4>Saidas</h4>
<ul>
<li><b>MASTER1</b> (XLR balanceada, pinagem 1 GND / 2 HOT / 3 COLD) e <b>MASTER2</b> (RCA) — as duas para amplificador.</li>
<li><b>MASTER ATT.</b> — atenua o que sai por MASTER1 e MASTER2: <b>0 dB, -3 dB ou -6 dB</b>.</li>
<li><b>BOOTH</b> (P10 TRS, aceita balanceado e desbalanceado) — monitor de cabine.</li>
<li><b>REC OUT</b> — gravacao.</li>
<li><b>SEND / RETURN</b> — processador externo. So o L ligado? O SEND sai mono e o RETURN entra nos dois lados.</li>
<li><b>DIGITAL OUT</b> — sinal do canal master em digital.</li>
<li><b>MIDI OUT</b> — para sequenciador externo.</li>
</ul>

<h3>5. Na pratica (faca no simulador desta aula)</h3>
<ol>
<li><b>Estrutura de ganho:</b> com os faders em zero, acerte o <b>TRIM</b> dos canais 1 e 2 ate o medidor bater perto do <b>0</b> sem acender OVER. So depois suba os faders.</li>
<li><b>EQ x ISOLATOR:</b> gire o LOW do canal 1 ao minimo com a chave <b>CH EQ</b> em EQ e ouca. Passe para <b>ISOLATOR</b> e repita. A diferenca entre -26 dB e o silencio total e o que voce acabou de ouvir.</li>
<li><b>INST FX no dedo:</b> selecione <b>HPF</b>, gire o <b>FILTER</b> do canal 1 lentamente para o MAX durante 8 tempos e devolva ao centro na virada. Depois troque para <b>CRUSH</b> e faca o mesmo movimento.</li>
<li><b>Efeito so no agudo:</b> ligue <b>DELAY</b> com beat <b>1/2</b>, feche o <b>EFFECT FREQUENCY LOW</b> e abra o <b>HI</b>. Ouca como o bumbo continua limpo enquanto o resto repica.</li>
<li><b>Escolha o alvo:</b> com o efeito ligado, mude o <b>CH SELECT</b> de <b>1</b> para <b>M</b> (master). E o mesmo efeito virando outra coisa.</li>
</ol>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Chegar com dois toca-discos e tentar usar os canais 2 e 3.</b> Nao tem PHONO ali: vinil e CH-1 e CH-4.</li>
<li><b>Achar que o CUE do efeito quebrou.</b> ECHO, REVERB, ROLL, SLIP ROLL e REV ROLL <b>nao</b> sao monitoraveis — esta escrito no manual. Nao gaste o show procurando defeito.</li>
<li><b>Nao conferir o MASTER ATT.</b> Com -6 dB engatado voce vai passar a noite empurrando o MASTER LEVEL e entregando sinal pior para o PA.</li>
<li><b>Calibracao da tela.</b> Se o toque nao responde onde voce encosta, nao e defeito: e a calibracao do painel, ajustavel no <b>CLUB SETUP</b>. Confira na passagem de som, nao no meio do set.</li>
</ul>
`.trim();

/* ========================================================================== */
/*  AULA 117 — Pioneer DJM-450                                                */
/*  fonte: simulador conferido + spec do Quick Start Guide via espelho         */
/*  (nao ha PDF oficial do DJM-450 na pasta manuais/ deste curso)              */
/* ========================================================================== */
const DJM450 = `
<h2>Pioneer DJM-450 — o mixer de 2 canais para quem esta montando cabine</h2>

<h3>1. O que e e por que existe</h3>
<p>O <b>DJM-450</b> e o mixer de <b>2 canais</b> da Pioneer feito para um cenario muito especifico: a cabine
pequena e o estudio de casa. Ele resolveu um problema que a linha grande nao resolvia — <b>caber</b>. Com
<b>230 mm de largura</b> e <b>3,2 kg</b>, ele entra numa bancada onde um DJM de 4 canais nao entra, cabe na
mochila e ainda assim entrega a mesma logica de canal, o mesmo desenho de EQ e a mesma familia de efeitos
das mesas de clube.</p>

<p>Tres coisas fazem dele mais do que um "mixer de entrada". A primeira e o <b>MAGVEL FADER</b>, o crossfader
<b>magnetico</b> — sem contato mecanico, ele nao desenvolve o ponto morto que mata crossfader comum depois de
alguns meses de scratch. A segunda e a <b>placa de som embutida</b>: a mesa e uma interface de audio USB, e
com ela voce roda <b>DVS</b> (vinil ou CD de time code controlando o software) sem caixinha extra. A terceira
e o <b>SEND/RETURN com porta USB tipo A</b>, que aceita <b>celular ou tablet</b> como processador de efeito —
e ainda alimenta o aparelho enquanto toca.</p>

<p>Onde voce encontra: estudio, cabine de bar, aula, e como mesa reserva de DJ que trabalha. E o degrau
natural antes do <b>DJM-750MK2</b> de 4 canais — a mao aprendida aqui vale nele inteirinha.</p>

<h3>2. Ficha tecnica</h3>
<p><b>Origem dos numeros:</b> a pasta de manuais deste curso <b>nao tem o PDF oficial do DJM-450</b>. Os valores
abaixo vieram da tabela Specifications do <i>Quick Start Guide</i> do aparelho, lida em espelho de manual, e
nao de um PDF baixado do servidor da AlphaTheta. Tratam-se de numeros de fabricante, mas <b>sem a conferencia
direta no PDF oficial</b> que as outras aulas deste modulo tem.</p>
<table>
<tr><th>Item</th><th>Valor publicado</th></tr>
<tr><td>Canais</td><td>2 canais + AUX + 1 microfone</td></tr>
<tr><td>Dimensoes</td><td>230 (L) x 107,9 (A) x 319,5 (P) mm</td></tr>
<tr><td>Peso</td><td>3,2 kg</td></tr>
<tr><td>Alimentacao</td><td><b>DC 12 V, 1700 mA</b> — por <b>fonte externa</b> (adaptador AC). Consumo em espera 0,5 W</td></tr>
<tr><td>Temperatura / umidade de operacao</td><td>+5 °C a +35 °C · 5 % a 85 % sem condensacao</td></tr>
<tr><td>Taxa de amostragem</td><td>48 kHz</td></tr>
<tr><td>Conversores</td><td>24 bits</td></tr>
<tr><td>Resposta de frequencia</td><td>LINE: 20 Hz a 20 kHz</td></tr>
<tr><td>Relacao sinal/ruido</td><td>PHONO 80 dB · LINE 94 dB · MIC 77 dB · AUX 96 dB</td></tr>
<tr><td>Distorcao (LINE-MASTER1)</td><td>0,005 %</td></tr>
<tr><td>Diafonia (LINE)</td><td>90 dB</td></tr>
<tr><td>Equalizador de canal</td><td>HI, MID e LOW: -26 dB a +6 dB cada</td></tr>
<tr><td>Equalizador do microfone</td><td>LOW 0 a -12 dB · HI 0 a -12 dB (o MIC TONE e um knob so, com LOW de um lado e HI do outro)</td></tr>
<tr><td>Conectores</td><td>PHONO RCA x2 · LINE RCA x2 · MIC TRS x1 · AUX RCA x1 · MASTER XLR x1 e RCA x1 · PHONES P10 x1 e P2 (3,5 mm) x1 · USB tipo A x1 e tipo B x1</td></tr>
<tr><td>Saida BOOTH</td><td><b>nao consta</b> na lista de terminais publicada — o DJM-450 nao traz monitor de cabine separado</td></tr>
<tr><td>Niveis e impedancias de entrada/saida detalhados</td><td><b>nao conferidos</b> no PDF oficial; nao publicados aqui para nao virar chute</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h4>Seletor de entrada (por canal)</h4>
<ul>
<li><b>USB</b> — o deck do software, pela placa de som interna da propria mesa.</li>
<li><b>LINE</b> — CD player, media player, qualquer fonte de nivel de linha.</li>
<li><b>PHONO</b> — toca-discos, com o pre-amplificador de agulha.</li>
<li><b>Erro comum:</b> deixar o canal em USB e nao entender por que o CDJ nao sai. O seletor manda mais que o cabo.</li>
</ul>

<h4>TRIM e medidor</h4>
<ul>
<li><b>TRIM:</b> ganho de entrada, -&#8734; a <b>+9 dB</b>.</li>
<li><b>CHANNEL LEVEL:</b> escala 12, 9, 6, 3, 0 e abaixo, em dB, com <b>CLIP</b> no topo. Ajuste o TRIM ate beirar o 0 sem acender o CLIP.</li>
</ul>

<h4>EQ e a chave EQ CURVE</h4>
<ul>
<li><b>HI</b> 13 kHz, <b>MID</b> 1 kHz, <b>LOW</b> 70 Hz, de <b>-26 dB a +6 dB</b>.</li>
<li><b>EQ CURVE — ISOLATOR / EQ:</b> em <b>EQ</b> o corte maximo e -26 dB; em <b>ISOLATOR</b> o minimo vira <b>-&#8734;</b> e a banda desaparece. E o mesmo knob virando duas ferramentas: equalizar (EQ) ou trocar instrumento (ISOLATOR).</li>
</ul>

<h4>SOUND COLOR FX — o knob COLOR</h4>
<ul>
<li><b>DUB ECHO</b> — eco com realimentacao. COLOR a esquerda o eco pega os medios; a direita, os agudos. O <b>PARAMETER</b> ajusta a quantidade.</li>
<li><b>SWEEP</b> — a esquerda abafa (passa-baixa com ressonancia); a direita corta o grave e deixa so a parte de cima, tipo gate.</li>
<li><b>NOISE</b> — mistura ruido branco ao canal. O COLOR varre o filtro do ruido; o PARAMETER define o nivel.</li>
<li><b>FILTER</b> — COLOR a esquerda = passa-baixa; a direita = passa-alta. O PARAMETER ajusta a ressonancia.</li>
<li><b>PARAMETER</b> e comum aos dois canais; o <b>COLOR</b> e individual.</li>
</ul>

<h4>BEAT FX</h4>
<ul>
<li><b>Oito efeitos:</b> DELAY, ECHO, SPIRAL, REVERB, TRANS, FLANGER, PITCH e ROLL.</li>
<li><b>CH SELECT:</b> 1, 2, MIC, AUX, MASTER ou os lados A/B do crossfader.</li>
<li><b>BEAT ◀ / ▶:</b> muda a divisao (…4 → 2 → 1 → 1/2). <b>TIME</b> define o tempo; <b>LEVEL/DEPTH</b>, a quantidade.</li>
<li><b>TAP:</b> bata 2 vezes ou mais para acertar o BPM na mao; segurando, volta para <b>AUTO</b>.</li>
<li><b>Display:</b> mostra AUTO ou TAP, o BPM lido e o valor de beat (o do meio, destacado).</li>
</ul>

<h4>Crossfader MAGVEL, curva e reverse</h4>
<ul>
<li><b>MAGVEL FADER:</b> crossfader magnetico. Mistura o lado <b>A</b> (CH 1) com o lado <b>B</b> (CH 2).</li>
<li><b>CROSS F. CURVE:</b> <b>THRU</b> (o crossfader nao age), curva intermediaria, ou <b>corte rapido</b> para scratch.</li>
<li><b>CROSS F. REVERSE:</b> inverte os lados — o que era A passa para B. Util para canhoto e para efeito de corte; <b>letal</b> se ficar ligado sem voce saber.</li>
</ul>

<h4>SEND/RETURN, AUX e microfone</h4>
<ul>
<li><b>SEND/RETURN ON/OFF</b> e <b>LEVEL</b> (MIN a MAX) controlam o efeito externo.</li>
<li><b>RETURN TYPE:</b> em <b>AUX</b> o retorno volta como canal auxiliar (soma ao som); em <b>INSERT</b> ele <b>substitui</b> o sinal enviado — efeito externo em serie.</li>
<li><b>Porta USB (5 V ⎓ 1 A):</b> USB tipo A do SEND/RETURN. Liga celular ou tablet com app de efeito, e alimenta o aparelho.</li>
<li><b>AUX:</b> canal auxiliar com fonte <b>USB</b>, <b>LINE</b> ou <b>RETURN (AUX)</b>, e <b>AUX LEVEL</b> proprio. Ele entra <b>direto no master</b>, sem passar pelo channel fader — cuidado ao subir.</li>
<li><b>MIC LEVEL</b> e <b>MIC TONE</b>: o timbre do microfone num knob so — a esquerda puxa o grave (LOW), a direita o agudo (HI), centro plano. A entrada e uma <b>combo XLR/P10 no painel traseiro</b>.</li>
</ul>

<h4>Fone e master</h4>
<ul>
<li><b>CUE</b> por canal (somam) e <b>CUE MASTER</b>.</li>
<li><b>MONO SPLIT / STEREO:</b> em MONO SPLIT o CUE sai no ouvido esquerdo e o MASTER no direito.</li>
<li><b>HEADPHONES MIXING</b> e <b>LEVEL</b>. Ha <b>duas</b> saidas de fone no painel frontal: P10 e P2 (3,5 mm).</li>
<li><b>MASTER LEVEL</b> e medidor com <b>CLIP</b>.</li>
</ul>

<h3>4. Como ligar</h3>
<p><b>A regra que nao muda:</b> <b>CDJ/XDJ/player digital vai em LINE</b>; <b>toca-discos vai em PHONO</b>.
O sinal de agulha e fraco demais e precisa do pre-amplificador com curva RIAA da entrada PHONO. Toca-discos
no LINE fica quase inaudivel; player no PHONO estoura e distorce.</p>

<h4>Entradas</h4>
<ul>
<li><b>PHONO (RCA x2):</b> nivel de agulha, cartucho MM. O manual e explicito: <b>nao entre com sinal de linha</b>.</li>
<li><b>LINE (RCA x2):</b> DJ player ou fonte de nivel de linha.</li>
<li><b>SIGNAL GND:</b> terra do toca-discos, para tirar o zumbido.</li>
<li><b>MIC:</b> combo no painel traseiro. <b>Nao tem phantom power</b> — microfone condensador que precise de 48 V nao funciona sozinho aqui.</li>
<li><b>AUX (RCA):</b> fonte auxiliar.</li>
<li><b>USB (tipo B):</b> computador. E por ele que a mesa vira placa de som e que o DVS funciona.</li>
</ul>

<h4>Saidas</h4>
<ul>
<li><b>MASTER1 (XLR, balanceada):</b> a saida boa, para caixa ativa ou amplificador. <b>Use como balanceada.</b></li>
<li><b>MASTER2 (RCA, desbalanceada):</b> para amplificador de entrada RCA.</li>
<li><b>SEND / RETURN (P10):</b> processador externo, ou a porta USB tipo A para celular/tablet.</li>
<li><b>PHONES:</b> P10 e P2 no painel frontal.</li>
<li><b>DC IN:</b> a mesa <b>nao</b> liga direto na tomada — ela usa <b>fonte externa de 12 V</b>. Existe um <b>gancho de cabo</b> no painel traseiro justamente para prender o fio da fonte.</li>
</ul>

<h3>5. Na pratica (faca no simulador desta aula)</h3>
<ol>
<li><b>Confira o REVERSE antes de qualquer coisa:</b> o simulador inicia com o <b>CROSS F. REVERSE</b> em <b>ON</b>, como na foto oficial. Mexa o crossfader, veja o que sai errado, desligue o reverse e faca de novo. Essa e a checagem de 5 segundos que salva a primeira transicao da noite.</li>
<li><b>Ganho antes do fader:</b> com os faders em zero, suba o <b>TRIM</b> dos dois canais ate o medidor beirar o <b>0</b> sem acender <b>CLIP</b>. So depois abra os faders.</li>
<li><b>EQ x ISOLATOR:</b> gire o <b>LOW do CH-2</b> ao minimo com o <b>EQ CURVE</b> em EQ, ouca, e repita em ISOLATOR. Depois faca a troca de bumbo usando o modo que voce achou melhor.</li>
<li><b>COLOR de ponta a ponta:</b> selecione <b>FILTER</b> no SOUND COLOR FX e leve o COLOR do canal 1 do centro ao extremo direito durante 8 tempos, voltando ao centro na virada. Repita com <b>DUB ECHO</b>.</li>
<li><b>Curva de scratch:</b> ponha o <b>CROSS F. CURVE</b> no corte rapido e mexa o MAGVEL poucos milimetros. Depois volte para a curva suave e faca uma transicao longa. Mesmo fader, dois oficios.</li>
</ol>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Esquecer o CROSS F. REVERSE ligado.</b> Voce puxa o crossfader para o lado que sempre puxou e entra a musica errada, na frente da pista. Confira na passagem de som.</li>
<li><b>Perder a fonte de 12 V.</b> O DJM-450 nao usa cabo de forca comum: sem o adaptador dele, a mesa e um tijolo. Leve na mochila, junto com a mesa, sempre.</li>
<li><b>Subir o AUX LEVEL achando que passa pelo fader.</b> O AUX entra <b>direto no master</b>. O que voce girar, vai para a pista na hora.</li>
<li><b>Levar microfone condensador contando com phantom.</b> A entrada MIC nao fornece 48 V. Ou dinamico, ou uma fonte phantom externa.</li>
<li><b>Deixar o canal em USB sem software rodando.</b> Silencio absoluto com o cabo certo plugado — e o chamado de "mesa quebrada" mais comum nesta mesa.</li>
</ul>
`.trim();

/* ========================================================================== */
/*  AULA 118 — Pioneer DJM-750MK2                                             */
/*  fonte: manual oficial DRI1470-C (alphatheta) + spec do QSG via espelho     */
/* ========================================================================== */
const DJM750 = `
<h2>Pioneer DJM-750MK2 — o primeiro mixer de 4 canais "de clube" da sua vida</h2>

<h3>1. O que e e por que existe</h3>
<p>O <b>DJM-750MK2</b> e a mesa de <b>4 canais</b> que a Pioneer lancou em <b>2017</b> com uma proposta declarada:
colocar o DJ dentro do padrao de clube <b>antes</b> de ele pagar o preco de um DJM-900. Ele resolve o degrau que
existe entre o mixer de 2 canais e a mesa de casa noturna — porque num clube voce quase nunca tem so dois
decks: sao dois players, um toca-discos e o laptop do DJ que vai entrar depois.</p>

<p>O que ele traz de la de cima, sem cortar: <b>SOUND COLOR FX</b> por canal, <b>BEAT FX</b> com display proprio,
<b>EQ/ISOLATOR</b> comutavel, <b>MAGVEL FADER</b> (crossfader magnetico), <b>saida BOOTH balanceada</b> e uma
<b>placa de som USB</b> que roda <b>rekordbox dj com DVS</b> — a serigrafia de cada canal ja traz o deck do
software (<b>3/C, 1/A, 2/B, 4/D</b>). E um <b>SEND/RETURN</b> que aceita processador de rack ou
<b>celular/tablet pela USB</b>.</p>

<p>Onde voce encontra hoje: bar, casa media, formatura, locadora e estudio. Quem senta no DJM-750MK2 e depois
num DJM-900NXS2 nao muda de mao — muda so o tamanho da mesa. E por isso que ele existe: e o mixer que
<b>prepara</b> para a cabine.</p>

<h3>2. Ficha tecnica</h3>
<p><b>Origem dos numeros:</b> o manual oficial <b>DRI1470-C</b>, baixado do servidor da AlphaTheta, foi usado para
todo o resto desta aula — <b>mas ele nao tem tabela de Specifications</b> (a spec do DJM-750MK2 sai apenas no
<i>Quick Start Guide</i> impresso). Os valores da tabela abaixo vieram do Quick Start Guide lido em espelho de
manual; o que nao pude confirmar esta marcado.</p>
<table>
<tr><th>Item</th><th>Valor</th><th>Origem</th></tr>
<tr><td>Canais</td><td>4 canais + 1 microfone</td><td>manual oficial DRI1470-C</td></tr>
<tr><td>Dimensoes maximas</td><td>320 (L) x 107,9 (A) x 387,9 (P) mm</td><td>Quick Start Guide (espelho)</td></tr>
<tr><td>Peso</td><td>6,6 kg</td><td>Quick Start Guide (espelho)</td></tr>
<tr><td>Alimentacao</td><td>AC 110 V a 240 V, 50/60 Hz — 40 W (0,3 W em espera). Liga direto na tomada, com cabo de forca proprio</td><td>Quick Start Guide (espelho)</td></tr>
<tr><td>Taxa de amostragem</td><td>48 kHz</td><td>Quick Start Guide (espelho)</td></tr>
<tr><td>Relacao sinal/ruido (LINE)</td><td>105 dB</td><td>Quick Start Guide (espelho)</td></tr>
<tr><td>Distorcao (LINE-MASTER1)</td><td>0,005 %</td><td>Quick Start Guide (espelho)</td></tr>
<tr><td>Equalizador de canal</td><td>HI 13 kHz · MID 1 kHz · LOW 70 Hz — de -26 dB a +6 dB (ou ate -&#8734; em ISOLATOR)</td><td>manual oficial + simulador conferido</td></tr>
<tr><td>Equalizador do microfone</td><td>HI -12 a +12 dB (10 kHz) · LOW -12 a +12 dB (100 Hz)</td><td>simulador conferido</td></tr>
<tr><td>Faixa do BEAT FX</td><td>beat de <b>1/16 a 16</b> tempos · TIME de <b>1 a 4000 ms</b></td><td>manual oficial DRI1470-C</td></tr>
<tr><td>Entradas por canal</td><td>USB · LINE · PHONO · RETURN AUX — nos <b>quatro</b> canais</td><td>manual oficial DRI1470-C</td></tr>
<tr><td>Saidas</td><td>MASTER1 (balanceada) · MASTER2 · BOOTH (balanceada) · SEND · PHONES · USB</td><td>manual oficial DRI1470-C</td></tr>
<tr><td>Phantom power no MIC</td><td><b>nao ha</b> — o manual afirma expressamente que nao e suportado</td><td>manual oficial DRI1470-C</td></tr>
<tr><td>Niveis, impedancias e contagem exata de terminais</td><td><b>nao conferidos</b> no PDF oficial (o DRI1470-C nao publica spec); nao inventados aqui</td><td>—</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h4>Seletor de entrada — quatro posicoes, nos quatro canais</h4>
<p>Esta e a maior diferenca para os DJM antigos: aqui <b>todo canal aceita tudo</b>. O manual descreve as quatro posicoes:</p>
<ul>
<li><b>USB</b> — o computador ligado na porta USB vira a fonte do canal. A sigla ao lado (<b>3/C, 1/A, 2/B, 4/D</b>) e o deck correspondente no software.</li>
<li><b>LINE</b> — o aparelho ligado nos terminais LINE.</li>
<li><b>PHONO</b> — o toca-discos ligado nos terminais PHONO.</li>
<li><b>RETURN AUX</b> — traz o som do <b>RETURN</b> do SEND/RETURN para dentro do canal. Para isso funcionar, o <b>RETURN TYPE</b> tem que estar em <b>AUX</b>.</li>
</ul>

<h4>TRIM, EQ e a chave EQ CURVE</h4>
<ul>
<li><b>TRIM:</b> -&#8734; a <b>+9 dB</b>. Suba ate o medidor beirar o <b>0</b> sem estourar.</li>
<li><b>EQ HI/MID/LOW:</b> -26 dB a +6 dB (13 kHz / 1 kHz / 70 Hz).</li>
<li><b>EQ CURVE — ISOLATOR / EQ:</b> em <b>ISOLATOR</b> o minimo vira <b>-&#8734;</b> e a banda some por completo. E a chave que transforma o EQ em ferramenta de troca de instrumento.</li>
<li><b>CHANNEL LEVEL:</b> medidor em dB (12 a -24), lido <b>antes</b> do channel fader — por isso da para acertar o TRIM com o fader ainda fechado.</li>
</ul>

<h4>SOUND COLOR FX</h4>
<ul>
<li><b>DUB ECHO</b> — eco que decai. COLOR a esquerda aplica o eco so nos medios; a direita, so nos agudos. O <b>PARAMETER</b> aumenta a realimentacao.</li>
<li><b>SWEEP</b> — COLOR a esquerda produz um <b>gate</b> (som mais apertado, com menos volume aparente); a direita, um <b>passa-faixa</b> que vai estreitando.</li>
<li><b>NOISE</b> — injeta ruido branco junto do canal; o COLOR muda a faixa do ruido.</li>
<li><b>FILTER</b> — COLOR a esquerda = passa-baixas, a direita = passa-altas. Vale para os 4 canais.</li>
<li><b>PARAMETER</b> e comum aos quatro canais; cada canal tem seu <b>COLOR</b>.</li>
</ul>

<h4>BEAT FX</h4>
<ul>
<li><b>Onze efeitos:</b> DELAY, ECHO, PING PONG, SPIRAL, REVERB, TRANS, FLANGER, PITCH, ROLL, VINYL BRAKE e HELIX.</li>
<li><b>CH SELECT:</b> 1, 2, 3, 4, MIC, MASTER ou os lados A/B do crossfader.</li>
<li><b>BEAT ◄ / ►:</b> divide ou dobra o tempo. O manual da a faixa: <b>1/16 a 16 tempos</b> do BPM, e <b>TIME de 1 a 4000 ms</b>.</li>
<li><b>FX FREQUENCY LOW / MID / HI:</b> tres botoes que <b>ligam e desligam cada faixa na entrada do efeito</b>. Apague o LOW e o delay para de pegar o bumbo — o efeito fica limpo e a pista nao perde o chao.</li>
<li><b>AUTO/TAP</b>, <b>TAP</b>, <b>TIME</b>, <b>LEVEL/DEPTH</b> e o <b>ON/OFF</b>.</li>
<li><b>Truque do manual:</b> no DELAY e no ECHO, <b>abaixar o channel fader com o efeito ligado deixa o rabo do eco tocando</b> — e assim que se faz um fade-out que nao soa cortado.</li>
</ul>

<h4>Faders, curvas e assign</h4>
<ul>
<li><b>CROSS FADER ASSIGN</b> por canal: <b>A</b>, <b>THRU</b> (ignora o crossfader) ou <b>B</b>.</li>
<li><b>CH FADER</b> (curva dos quatro faders de canal) e <b>CROSS FADER</b> (curva do MAGVEL): corte seco, intermediaria ou linear.</li>
<li><b>MAGVEL FADER:</b> crossfader magnetico, sem contato — feito para durar e para aguentar scratch.</li>
</ul>

<h4>SEND/RETURN</h4>
<ul>
<li><b>1/4" JACK / USB:</b> escolhe se o efeito externo entra e sai pelos <b>P10 traseiros</b> ou pela <b>porta USB do painel superior</b> (celular/tablet).</li>
<li><b>RETURN TYPE — AUX / INSERT:</b> em <b>AUX</b> o retorno <b>soma</b> ao som; em <b>INSERT</b> ele <b>substitui</b> o sinal enviado.</li>
<li><b>SEND/RETURN LEVEL</b> e <b>ON/OFF</b>.</li>
</ul>

<h4>Master, booth, fone e microfone</h4>
<ul>
<li><b>MASTER LEVEL</b> e medidor L/R com <b>CLIP</b>.</li>
<li><b>BOOTH MONITOR:</b> volume proprio, independente do MASTER LEVEL.</li>
<li><b>CUE</b> por canal, <b>CUE MASTER</b>, <b>MONO SPLIT/STEREO</b>, <b>MIXING</b> e <b>LEVEL</b>. Duas saidas de fone: <b>P10</b> e <b>P2</b>.</li>
<li><b>MIC LEVEL</b>, <b>MIC EQ HI/LOW</b> (±12 dB) e chave <b>OFF / ON / TALK OVER</b>.</li>
<li><b>UTILITY (WAKE UP):</b> abre o menu de ajustes e tira a mesa do modo de espera.</li>
</ul>

<h3>4. Como ligar</h3>
<p><b>A regra que nao muda:</b> <b>CDJ/XDJ/player digital vai em LINE</b>; <b>toca-discos vai em PHONO</b>.
O manual do DJM-750MK2 diz nas duas pontas: nos terminais PHONO, "conecte um dispositivo de saida em nivel
phono (cartucho MM) — <b>nao entre com sinal de nivel de linha</b>"; nos terminais LINE, "conecte um DJ player
ou componente de saida em nivel de linha". Aqui a boa noticia e que <b>os quatro canais tem as duas entradas</b>,
entao voce nao precisa decorar qual canal aceita o que.</p>

<h4>Painel traseiro, terminal por terminal (nomes do manual)</h4>
<ul>
<li><b>Botao POWER</b> — liga e desliga.</li>
<li><b>RETURN</b> — saida do processador externo. So o <b>L (MONO)</b> ligado? O sinal do L entra tambem no R.</li>
<li><b>SIGNAL GND</b> — fio terra do toca-discos, para reduzir o zumbido.</li>
<li><b>PHONO</b> — nivel de agulha, cartucho MM.</li>
<li><b>LINE</b> — DJ player ou fonte de nivel de linha.</li>
<li><b>MIC</b> — microfone. <b>Sem phantom power.</b></li>
<li><b>Trava Kensington</b> — cadeado antifurto.</li>
<li><b>USB</b> — computador, com o cabo que vem na caixa.</li>
<li><b>BOOTH</b> — monitor de cabine. O manual manda: <b>use como saida balanceada</b>.</li>
<li><b>MASTER2</b> — para a entrada analogica de amplificador.</li>
<li><b>MASTER1</b> — para amplificador, <b>como saida balanceada</b>. Dois avisos do fabricante: <b>nao</b> enfie aqui por engano o cabo de forca de outro aparelho, e <b>nao</b> ligue em equipamento que mande phantom power.</li>
<li><b>SEND</b> — entrada do processador externo. So o <b>L (MONO)</b> ligado? Sai sinal mono.</li>
<li><b>AC IN</b> — ligue a forca <b>por ultimo</b>, depois de todas as outras conexoes, com o cabo que veio na caixa.</li>
</ul>

<h3>5. Na pratica (faca no simulador desta aula)</h3>
<ol>
<li><b>Ganho antes do fader:</b> faders em zero, suba o <b>TRIM</b> dos canais 1 e 2 ate o CHANNEL LEVEL beirar o <b>0</b> sem <b>CLIP</b>. Depois abra os faders e olhe o medidor de master.</li>
<li><b>Fade-out que o manual ensina:</b> ligue o <b>ECHO</b> num canal e, com ele soando, <b>feche o channel fader</b>. Ouca o eco terminar sozinho. Repita com o DELAY e compare.</li>
<li><b>Efeito sem perder o chao:</b> com o BEAT FX ligado, <b>apague o FX FREQUENCY LOW</b> e ouca. O efeito para de pegar o bumbo. Volte a ligar e sinta a diferenca na base.</li>
<li><b>ISOLATOR na troca:</b> ponha o <b>EQ CURVE</b> em ISOLATOR, mate o <b>LOW do CH-2</b>, passe o crossfader e devolva o LOW ao centro. Nunca houve dois bumbos juntos.</li>
<li><b>THRU e assign:</b> ponha o <b>CROSS FADER ASSIGN</b> do canal 3 em <b>THRU</b> e o do canal 1 em <b>A</b>. Mexa o crossfader e veja quem obedece.</li>
</ol>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Usar a MASTER1 desbalanceada, ou pior, ligar nela algo que mande phantom power.</b> O manual avisa dos dois. Phantom entrando numa saida e o caminho curto para queimar a mesa.</li>
<li><b>Deixar o canal em RETURN AUX com o RETURN TYPE em INSERT.</b> O canal fica mudo e voce vai procurar defeito no cabo. Sao duas chaves que precisam concordar.</li>
<li><b>Levar microfone condensador contando com phantom.</b> A entrada MIC nao fornece 48 V — esta escrito no manual.</li>
<li><b>Ligar a forca antes das outras conexoes</b>, ou <b>esquecer um canal em USB sem o software aberto</b>. A primeira estoura o PA; a segunda da silencio com o cabo certo plugado.</li>
</ul>
`.trim();

/* ========================================================================== */
/*  APLICACAO                                                                 */
/* ========================================================================== */
const AULAS = [
  { id: P + "000000000108", nome: "Pioneer DJM-600",    html: DJM600,  fonte: "manual oficial DRB1319 (0 buracos) + simulador" },
  { id: P + "000000000109", nome: "Pioneer DJM-800",    html: DJM800,  fonte: "manual oficial DRB1393-C (0 buracos) + simulador" },
  { id: P + "000000000110", nome: "Pioneer DJM-2000",   html: DJM2000, fonte: "manual oficial DRB1496-D (14 buracos) + simulador" },
  { id: P + "000000000117", nome: "Pioneer DJM-450",    html: DJM450,  fonte: "simulador conferido + spec do Quick Start Guide (espelho)" },
  { id: P + "000000000118", nome: "Pioneer DJM-750MK2", html: DJM750,  fonte: "manual oficial DRI1470-C + spec do Quick Start Guide (espelho)" },
];

/* --- guardas: nada sai daqui sem passar --- */
const MIN = 6000, MAX = 11000;
for (const a of AULAS) {
  if (!a.id.startsWith(P)) throw new Error("guard REGRA 5: id fora da faixa do curso -> " + a.id);
  if (a.id.split("-").pop().length !== 12) throw new Error("guard: uuid malformado -> " + a.id);
  if (a.html.length < MIN) throw new Error("guard: " + a.nome + " tem so " + a.html.length + " chars (minimo " + MIN + ")");
  if (a.html.length > MAX) throw new Error("guard: " + a.nome + " tem " + a.html.length + " chars (maximo " + MAX + ")");
  if (/<script|<style|<img|https?:\/\//i.test(a.html)) throw new Error("guard: " + a.nome + " tem script/style/imagem/link externo");
}

const seco = process.argv.includes("--seco");

console.log("Faixa REGRA 5: " + P + "*   |   modo: " + (seco ? "SECO (nao grava)" : "GRAVANDO"));
console.log("");

for (const a of AULAS) {
  const antes = await req("GET", "/lessons?id=eq." + a.id + "&select=id,titulo,conteudo_rico");
  if (!antes.length) throw new Error("aula nao encontrada no banco: " + a.id + " (" + a.nome + ")");
  const de = (antes[0].conteudo_rico || "").length;

  if (!seco) {
    await req("PATCH", "/lessons?id=eq." + a.id, { conteudo_rico: a.html }, { Prefer: "return=minimal" });
    const dep = await req("GET", "/lessons?id=eq." + a.id + "&select=conteudo_rico");
    const para = (dep[0].conteudo_rico || "").length;
    if (para !== a.html.length) throw new Error("verificacao falhou em " + a.nome + ": gravou " + para + ", esperado " + a.html.length);
    console.log(a.nome.padEnd(22) + " " + String(de).padStart(5) + " -> " + String(para).padStart(5) + " chars   [" + a.fonte + "]");
  } else {
    console.log(a.nome.padEnd(22) + " " + String(de).padStart(5) + " -> " + String(a.html.length).padStart(5) + " chars (seco)   [" + a.fonte + "]");
  }
}

console.log("");
console.log("OK — so conteudo_rico foi tocado. id/module_id/ordem/titulo/ai_animations intactos.");
