/**
 * apply-aulas-allinone-126-129.mjs
 * ---------------------------------------------------------------------------
 * Escreve o conteudo_rico COMPLETO das 4 aulas de all-in-one do catálogo DJ:
 *
 *   126  Pioneer XDJ-RX3
 *   127  Pioneer XDJ-XZ
 *   128  AlphaTheta OPUS-QUAD
 *   129  AlphaTheta XDJ-AZ
 *
 * SOMENTE PATCH de `conteudo_rico`. Não toca em id, module_id, ordem nem
 * ai_animations — o simulador de cada aula já está certo e publicado.
 *
 * FONTES (Regra 2 do projeto — nada aqui foi inventado):
 *  • XDJ-RX3 ...... Operating Instructions DRI1702C (specs na pág. 122)
 *                   downloads.support.alphatheta.com/manuals/XDJ_RX3_DRI1702C_manual.pdf
 *  • XDJ-XZ ....... Operating Instructions DRI1625B  +  Quick Start Guide
 *                   DRH1643D (a tabela de specs do XZ SÓ existe no QSG, pág.17)
 *  • OPUS-QUAD .... Operating Instructions DRI1795D (specs na pág. 137)
 *  • XDJ-AZ ....... Operating Instructions DRI1936C (specs na pág. 151)
 *  • Tela e prato (não constam nas tabelas de spec dos manuais): páginas
 *    oficiais do produto — pioneerdj.com (RX3 10,1" · XZ 7") e
 *    alphatheta.com (OPUS-QUAD 10,1" / jog 206 mm · XDJ-AZ 10,1" / jog 206 mm).
 *  • Rótulos e comportamento de cada controle: os próprios simuladores
 *    `pioneer-xdj-rx3-real.html`, `pioneer-xdj-xz-real.html`,
 *    `alphatheta-opus-quad-real.html`, `alphatheta-xdj-az-real.html`,
 *    cujos textos já saíram desses mesmos manuais.
 *
 * O QUE NÃO FOI ENCONTRADO (marcado como ausente no texto das aulas):
 *  • diâmetro do prato do XDJ-RX3 e do XDJ-XZ — não consta em manual nem spec
 *  • tamanho da tela — não consta na tabela de specs de NENHUM dos 4 manuais
 *  • peso/dimensão do XDJ-XZ só existe no Quick Start Guide, não no manual
 * ---------------------------------------------------------------------------
 * Rodar:  node "cursos-novos/pleno-dj/apply-aulas-allinone-126-129.mjs"
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// A chave sai de SMU-PRO/.local/svckey (ou da env SUPABASE_SERVICE_KEY).
// ⚠️ NÃO aponte para scratchpad de sessão: a pasta morre junto com a sessão e o
// script passa a dar ENOENT em toda execução. Modelo: cursos-novos/auditar-banco.mjs.
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");  // pleno-dj/ -> cursos-novos/ -> SMU-PRO/
const KEY = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, '.local', 'svckey'), 'utf8').trim();
const REST = 'https://pshynylvvkhhohftouoe.supabase.co/rest/v1';
const H = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
  'Content-Type': 'application/json',
  Prefer: 'return=representation',
};

/* ========================================================================= */
/* 126 — PIONEER XDJ-RX3                                                     */
/* ========================================================================= */
const RX3 = `
<h2>1. O que é o XDJ-RX3 e por que ele existe</h2>
<p>O <strong>XDJ-RX3</strong> é um <em>all-in-one</em>: dois players digitais e um mixer de dois canais num chassi só, com tela sensível ao toque no meio. Não é "um CDJ pequeno" nem um controlador — é a cabine inteira reduzida a uma peça, e roda <strong>sozinho, sem computador</strong>, lendo direto do pendrive.</p>
<p>Para entender por que ele existe, lembre do que era montar cabine antes: dois CDJ, um DJM, seis cabos RCA, dois de rede, três de força, três cases. O RX3 resolve na força bruta — um cabo de força, um par de XLR, um pendrive, e você toca; <strong>9,3 kg</strong> num case só.</p>
<p>É a terceira geração da família — XDJ-RX, XDJ-RX2 e RX3 (o manual do RX3 é de 2021). Abaixo dele fica o <strong>XDJ-RR</strong>, mais simples; acima, o <strong>XDJ-XZ</strong>, com mixer de quatro canais. Fora da casa Pioneer, disputa com o <strong>Denon Prime 4</strong> e o <strong>Prime 2</strong> — tela maior e disco interno, mas sem a nomenclatura que o rider brasileiro pede.</p>
<p>Onde encontrar hoje: bar de médio porte, festa universitária, casamento, formatura, cabine de locadora e reserva de festival. Aceita <strong>rekordbox</strong> e <strong>Serato DJ Pro</strong> em <em>hardware unlock</em> — quem chega com laptop toca sem pagar licença.</p>

<h2>2. Ficha técnica (manual DRI1702C)</h2>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões máximas (L × A × P)</td><td>728,1 × 118,4 × 469,5 mm</td></tr>
<tr><td>Peso</td><td>9,3 kg</td></tr>
<tr><td>Alimentação / consumo</td><td>AC 110–240 V, 50/60 Hz · 54 W (0,3 W desligado)</td></tr>
<tr><td>Tela</td><td>touch de 10,1" — <em>da página oficial do produto; não consta na tabela de specs do manual</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td><em>não consta no manual nem na spec oficial</em></td></tr>
<tr><td>Amostragem / conversores</td><td>44,1 kHz · A/D e D/A de 24 bit</td></tr>
<tr><td>Resposta de frequência</td><td>20 Hz – 20 kHz (USB, LINE, AUX, MIC 1, MIC 2)</td></tr>
<tr><td>Relação sinal/ruído</td><td>USB 110 dB · LINE 94 dB · PHONO 83 dB · AUX LINE 94 dB · AUX PORTABLE 88 dB · MIC 81 dB</td></tr>
<tr><td>Distorção (THD)</td><td>USB 0,003 % · LINE 0,006 % · PHONO 0,020 %</td></tr>
<tr><td>Nível/impedância de entrada</td><td>LINE −12 dBu/47 kΩ · PHONO −52 dBu/47 kΩ · AUX PORTABLE −24 dBu/47 kΩ · MIC −57 dBu/3 kΩ</td></tr>
<tr><td>Saídas (nominal / máx.)</td><td>MASTER 1 XLR +6 dBu (máx. +25 dBu) · MASTER 2 RCA +2 dBu (máx. +21 dBu) · BOOTH TRS +6 dBu · PHONES +8 dBu/32 Ω</td></tr>
<tr><td>EQ de canal</td><td>−26 a +6 dB no modo EQUALIZER · −∞ a +6 dB no modo ISOLATOR (20 kHz / 1 kHz / 20 Hz)</td></tr>
<tr><td>EQ do microfone</td><td>HI ±12 dB (10 kHz) · LOW ±12 dB (100 Hz) — o RX3 <b>não tem</b> MID de microfone</td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE (WIDE = ±100 %)</td></tr>
<tr><td>Formatos aceitos</td><td>MP3 (32–320 kbps) · AAC .m4a/.aac/.mp4 (16–320 kbps) · WAV e AIFF 16/24 bit · FLAC — em 32, 44,1 ou 48 kHz</td></tr>
<tr><td>Entradas</td><td>PHONO RCA × 2 pares · LINE RCA × 2 pares · MIC 1 e MIC 2 (XLR ou TRS 6,35 mm) · AUX RCA + P2 3,5 mm</td></tr>
<tr><td>Saídas / portas</td><td>MASTER 1 XLR · MASTER 2 RCA · BOOTH TRS · PHONES 6,35 mm + 3,5 mm · USB tipo A × 2 (5 V/1 A) · USB tipo B × 1</td></tr>
<tr><td>Rede</td><td><b>sem porta LAN</b> — o PRO DJ LINK é por pendrive (USB Export) ou cabo USB (Link Export)</td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Tela e navegação</h3>
<ul>
<li><b>SOURCE</b> — abre a lista de dispositivos (USB 1, USB 2, rekordbox no PC/celular, SOFTWARE CONTROL). É o primeiro botão de toda cabine: sem escolher a fonte, nada carrega.</li>
<li><b>BROWSE / TAG LIST / PLAYLIST / SEARCH</b> — as quatro portas de entrada na biblioteca. Na correria da pista, quem trabalha com <b>TAG LIST</b> (a fila montada antes) erra menos do que quem rola pasta.</li>
<li><b>MENU / UTILITY</b> — toque abre o menu; <b>segurar</b> abre o UTILITY: curva de fader, EQ×ISOLATOR, atenuador do master e MIXER MODE.</li>
<li><b>Seletor rotativo</b> (gira/aperta), <b>BACK</b> (segurando salta ao topo da árvore), <b>TRACK FILTER</b> e <b>SHORTCUT</b>.</li>
<li><b>LOAD 1 / LOAD 2</b> — carregam no deck. Apertar duas vezes = <b>INSTANT DOUBLES</b>: copia o deck que está tocando na mesma posição.</li>
<li><i>Erro comum:</i> navegar só pela tela e esquecer que o <b>BACK</b> é botão físico. Na pista escura, o dedo acha o botão; o olho não acha o ícone.</li>
</ul>

<h3>Deck — transporte e prato</h3>
<ul>
<li><b>PLAY/PAUSE</b> e <b>CUE</b> — tocando, o CUE volta ao ponto marcado e pausa (<i>back cue</i>); pausado num ponto novo, grava o cue ali; segurando, toca a partir do cue e para ao soltar.</li>
<li><b>Jog</b> — o topo é sensível ao toque. Com <b>JOG MODE</b> em <b>VINYL</b>, tocar o topo para o áudio e você faz scratch; a borda lateral faz <i>pitch bend</i>. Em <b>CDJ</b>, o topo não para nada.</li>
<li><b>JOG ADJUST</b> (peso do prato, LIGHT a HEAVY) e <b>VINYL SPEED ADJUST</b> (rampa de parada e retomada, imitando o vinil desacelerando).</li>
<li><b>TEMPO</b> + <b>TEMPO ±6/±10/±16/WIDE</b> + <b>MASTER TEMPO</b> — o fader varia a velocidade; o botão de alcance define quão fina é a variação; o MASTER TEMPO trava o tom.</li>
<li><b>BEAT SYNC</b> e <b>MASTER</b> casam BPM e grade com o deck eleito referência; o <b>SLIP</b> deixa a música correndo por baixo durante loop, scratch ou reverse; o <b>QUANTIZE</b> prende cue, loop e pads na grade.</li>
<li><i>Erro comum:</i> ficar em WIDE por esquecimento. O passo em WIDE é de 0,5 %, grosso demais para casar batida — o disco "anda" na sua mão.</li>
</ul>

<h3>Loop e pads</h3>
<ul>
<li><b>LOOP IN / LOOP OUT / RELOOP-EXIT</b> — loop manual ao vivo; o RELOOP refaz o último.</li>
<li><b>CUE/LOOP CALL ◄ ►</b> — passeiam pelos pontos gravados; com SHIFT viram 1/2X e 2X do loop.</li>
<li><b>MEMORY</b> e <b>DELETE</b> — gravam e apagam o cue/loop <b>no pendrive</b>, junto da faixa; os pontos voltam na próxima vez que você tocar a música.</li>
<li><b>PAD MODE</b> — quatro botões: <b>HOT CUE</b> (com SHIFT, GATE CUE), <b>BEAT LOOP</b>, <b>SLIP LOOP</b> (com SHIFT, RELEASE FX) e <b>BEAT JUMP</b>. São <b>8 hot cues por faixa</b>.</li>
<li><i>Erro comum:</i> gravar hot cue e não dar MEMORY. Ao trocar de deck ou recarregar, o ponto some.</li>
</ul>

<h3>Mixer</h3>
<ul>
<li><b>Chave de fonte por canal — DECK / LINE / PHONO</b>: decide se o canal ouve o player interno, a entrada de linha ou o toca-discos.</li>
<li><b>TRIM</b> — ganho de entrada. Ajuste pelo medidor: pico no âmbar, nunca no vermelho.</li>
<li><b>EQ/ISO HI · MID · LOW</b> — em EQUALIZER corta até −26 dB; em ISOLATOR corta até o silêncio. Trocar os graves entre dois canais é a base da mixagem.</li>
<li><b>COLOR</b> — dosa o SOUND COLOR FX escolhido (SPACE, DUB ECHO, SWEEP, NOISE, CRUSH, FILTER). Centro é neutro.</li>
<li><b>CUE do canal</b>, <b>CHANNEL FADER</b>, <b>CROSSFADER</b> e <b>CROSSFADER CURVE</b> (THRU, suave, corte seco).</li>
<li><b>MASTER LEVEL</b>, <b>MASTER CUE</b> e <b>BOOTH MONITOR LEVEL</b> — o booth é independente do master: é assim que o DJ escuta sem mandar mais som à pista.</li>
<li><b>HEADPHONES CUE / MIXING / LEVEL</b> — o MIXING é o que permite casar a batida ouvindo o master e a próxima ao mesmo tempo.</li>
</ul>

<h3>Microfone, AUX, efeitos e gravação</h3>
<ul>
<li><b>MIC OFF / ON / TALK OVER</b>, com <b>MIC 1 e 2 LEVEL</b> e <b>MIC EQ HI/LOW</b>. Em TALK OVER a música abaixa sozinha com o mic aberto.</li>
<li><b>AUX — LINE / OFF / PORTABLE</b> com <b>AUX TRIM</b>: LINE para aparelho de linha, PORTABLE para o celular no P2 frontal.</li>
<li><b>BEAT FX</b> — seletor (DELAY, ECHO, PING PONG, SPIRAL, REVERB, TRANS, FILTER, FLANGER, PHASER, PITCH, SLIP ROLL, ROLL, VINYL BRAKE, HELIX), <b>CH SELECT</b> (canal 1, 2, MIC, AUX, CF.A, CF.B, MASTER), <b>BEAT ◄ ►</b>, <b>TIME</b>, <b>LEVEL/DEPTH</b>, <b>TAP/AUTO</b> e <b>ON/OFF</b>.</li>
<li><b>MASTER REC</b> e <b>TRACK MARK</b> — grava o set em WAV no pendrive da <b>USB 2</b> (REC***.WAV, ~<b>90 min por GB</b>). O TRACK MARK divide o arquivo onde você aperta.</li>
<li><b>USB 1 / USB 2 STOP</b> — segure até o LED apagar <b>antes</b> de puxar o pendrive.</li>
<li><i>Erro comum:</i> aplicar BEAT FX com o CH SELECT no canal errado e não entender por que o efeito não aparece.</li>
</ul>

<h2>4. Como ligar</h2>
<p>A regra que não muda, e vale para qualquer mixer do mundo:</p>
<ul>
<li><b>CDJ, XDJ, media player, notebook, celular → LINE.</b> Sinal já forte, entra direto.</li>
<li><b>Toca-discos → PHONO.</b> A cápsula entrega −52 dBu com a curva RIAA invertida, e só a entrada PHONO amplifica e corrige. Toca-discos em LINE fica fininho e quase inaudível; CDJ em PHONO estoura e distorce. Trocar não funciona.</li>
<li>O fio-terra do toca-discos vai no <b>SIGNAL GND</b>. Sem ele, zumbido de 60 Hz.</li>
</ul>
<p>Saídas: <b>MASTER 1 (XLR balanceado)</b> vai para o amplificador ou as caixas ativas — é a saída de trabalho, e o manual proíbe adaptador XLR→RCA aqui. <b>MASTER 2 (RCA)</b> serve para equipamento desbalanceado. <b>BOOTH (TRS)</b> vai para o monitor de cabine, com volume próprio. Microfones nas combos XLR/TRS; pendrives nas duas <b>USB tipo A</b> do topo (duas existem para trocar de DJ sem parar a música); <b>USB tipo B</b> traseiro para o PC/Mac; fone no painel frontal, um conector de cada vez.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ul>
<li>Carregue uma faixa no deck 1, ponha o <b>PAD MODE em HOT CUE</b>, grave um hot cue no primeiro tempo e volte nele duas vezes usando o pad.</li>
<li>Com o deck 1 tocando, faça a troca completa: canal 2 em CUE no fone, casar a batida pelo <b>TEMPO</b>, cortar o <b>LOW</b> do canal 2, abrir o fader e devolver o grave só quando o outro sair.</li>
<li>Ponha o <b>JOG MODE em VINYL</b>, toque no topo do prato para parar o som e solte. Depois mude para <b>CDJ</b> e repita — sinta a diferença.</li>
<li>Escolha o <b>FILTER</b> no SOUND COLOR FX e faça uma subida girando o <b>COLOR</b> do canal que está tocando até o fim à direita.</li>
<li>Ligue o <b>BEAT FX</b> em ECHO com <b>CH SELECT</b> no canal certo, ajuste <b>BEAT</b> para 1/2 e dispare no fim de uma frase de 8 tempos.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Puxar o pendrive sem dar USB STOP.</b> A base do rekordbox corrompe e você perde cues, loops e playlists do set inteiro — no meio da festa.</li>
<li><b>Subir o MASTER LEVEL para "ficar mais alto".</b> O certo é acertar o TRIM canal por canal e deixar o volume da casa no amplificador. Master no talo com trim baixo só entrega ruído.</li>
<li><b>Ligar toca-discos no LINE (ou CDJ no PHONO).</b> No primeiro caso quase não sai som e o DJ sobe tudo até realimentar; no segundo, estoura o pré e distorce na cara do público.</li>
<li><b>Confiar no BEAT SYNC sem conferir a grade.</b> Se a faixa não foi analisada direito no rekordbox, o sync casa com a grade errada e a mixagem sai torta com o LED aceso.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 127 — PIONEER XDJ-XZ                                                      */
/* ========================================================================= */
const XZ = `
<h2>1. O que é o XDJ-XZ e por que ele existe</h2>
<p>O <strong>XDJ-XZ</strong> é o all-in-one <em>de topo</em> da Pioneer DJ: dois decks com pratos do tamanho dos de CDJ e um mixer de <strong>quatro canais</strong> — não dois — num corpo de 878 mm e 13 kg. Nasceu em 2019 para resolver um problema específico: o all-in-one resolvia a logística, mas obrigava o DJ a abrir mão do mixer de quatro canais.</p>
<p>É por isso que o XZ existe. Com quatro canais os dois decks internos tocam <em>e ainda</em> entram um toca-discos, um sampler, o laptop de outro DJ ou um CDJ externo, sem desconectar nada. É o aparelho de quem faz b2b, toca vinil ao lado do digital e usa DVS.</p>
<p>Fica acima do <strong>XDJ-RX3</strong> (dois canais) e abaixo do conjunto clássico CDJ + DJM. Do outro lado do balcão, o <strong>Denon Prime 4</strong> e o <strong>SC LIVE 4</strong>. Você o encontra em casas noturnas de médio porte, palcos secundários de festival e cabines de aluguel premium.</p>

<h3>O ponto que mais confunde: para onde vai cada deck</h3>
<p>Grave isto, porque é a pergunta número um de quem senta no XZ pela primeira vez: <strong>os dois decks internos saem SEMPRE nos canais 1 e 2</strong>. Deck 1 no canal 1, deck 2 no canal 2 — nada muda isso. Os <strong>canais 3 e 4 são para fontes externas</strong> e têm uma chave de entrada <b>USB / LINE / PHONO</b>: em <b>USB</b> o canal recebe o áudio do computador (rekordbox em quatro decks); em <b>LINE</b>, um CDJ ou outro player; em <b>PHONO</b>, um toca-discos.</p>
<p>O manual deixa explícito: para tocar pelos canais 1 e 2 você <b>não precisa</b> mexer em chave nenhuma. Se o som do deck interno "sumiu", o problema quase nunca é a fonte — é fader, TRIM ou o CROSSFADER ASSIGN.</p>

<h2>2. Ficha técnica (Quick Start Guide DRH1643D, pág. 17)</h2>
<p><em>Fonte: o manual completo do XZ (DRI1625B) não traz tabela de especificações — os números abaixo estão no Quick Start Guide oficial.</em></p>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões máximas (L × P × A)</td><td>878,0 × 466,1 × 118,4 mm</td></tr>
<tr><td>Peso</td><td>13,0 kg</td></tr>
<tr><td>Alimentação / consumo</td><td>AC 110–240 V, 50/60 Hz · 55 W (0,3 W em espera)</td></tr>
<tr><td>Tela</td><td>LCD touch de 7" — <em>da página oficial do produto; não consta na tabela de specs</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td><em>não consta no manual nem no QSG; a Pioneer só o descreve como "full-size"</em></td></tr>
<tr><td>Amostragem</td><td>44,1 kHz · resposta 20 Hz – 20 kHz (USB, LINE, AUX, MIC)</td></tr>
<tr><td>Sinal/ruído e THD</td><td>USB 111 dB / 0,003 % · LINE 96 dB / 0,005 % · PHONO 83 dB / 0,021 % · AUX LINE 96 dB · AUX PORTABLE 90 dB · MIC 81 dB</td></tr>
<tr><td>Nível/impedância de entrada</td><td>LINE −12 dBu/47 kΩ · PHONO −52 dBu/47 kΩ · AUX PORTABLE −24 dBu/47 kΩ · MIC −57 dBu/3 kΩ</td></tr>
<tr><td>Saídas (nominal / máx.)</td><td>MASTER 1 XLR +6 dBu (máx. +24 dBu) · MASTER 2 RCA +2 dBu (máx. +20 dBu) · BOOTH +6 dBu (máx. +24 dBu) · SEND −12 dBu · PHONES +8 dBu/32 Ω</td></tr>
<tr><td>EQ de canal e de master</td><td>−26 dB a +6 dB (20 kHz / 1 kHz / 20 Hz)</td></tr>
<tr><td>EQ do microfone</td><td>HI ±12 dB (10 kHz) · MID ±12 dB (2,5 kHz) · LOW ±12 dB (100 Hz)</td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 (passo 0,02 %) · ±10 e ±16 (0,05 %) · WIDE = ±100 % (0,5 %)</td></tr>
<tr><td>Formatos aceitos</td><td>MP3 (32–320 kbps) · AAC (16–320 kbps) · WAV e AIFF 16/24 bit · FLAC — 32, 44,1 ou 48 kHz</td></tr>
<tr><td>Entradas</td><td>PHONO RCA · LINE RCA · AUX RCA + P2 3,5 mm · MIC 1 e MIC 2 (XLR ou TRS 6,35 mm)</td></tr>
<tr><td>Saídas / portas</td><td>MASTER 1 XLR · MASTER 2 RCA · BOOTH · <b>SEND</b> · PHONES 6,35 mm + 3,5 mm · USB para PC/Mac · LINK (EXTENSION) · LINK (CH3/CH4)</td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Navegação e tela</h3>
<ul>
<li><b>BROWSE / TAG LIST / INFO / MENU-UTILITY</b> — a árvore de pastas, a fila de marcadas, os detalhes da faixa e o menu (segurando o MENU abre o UTILITY).</li>
<li><b>Fontes: rekordbox · LINK · USB 1 · USB 2</b> — botões dedicados. São <b>duas portas USB</b> no topo, para troca de DJ sem parar o som.</li>
<li><b>ROTARY SELECTOR</b> (gira/aperta), <b>BACK</b>, <b>TAG TRACK</b>, <b>TRACK FILTER/EDIT</b>, <b>SHORTCUT</b> e <b>LOAD 1 / LOAD 2</b>.</li>
<li><b>TIME MODE / AUTO CUE</b> (alterna tempo decorrido/restante) e <b>DECK QUANTIZE</b> (prende cue, loop e pads na grade).</li>
</ul>

<h3>Deck</h3>
<ul>
<li><b>PLAY/PAUSE</b> e <b>CUE</b> — o CUE tocando volta ao ponto e pausa; segurando no cue, toca só enquanto pressionado.</li>
<li><b>JOG DIAL com visor central colorido</b> — o centro faz scratch em VINYL, a borda faz <i>nudge</i>. O aro do jog acende.</li>
<li><b>JOG MODE (VINYL / CDJ)</b>, <b>JOG ADJUST (LIGHT ↔ HEAVY)</b> e <b>VINYL SPEED ADJUST</b> — comportamento, peso e rampa de frenagem do prato.</li>
<li><b>TEMPO de 100 mm</b>, <b>TEMPO RANGE</b>, <b>MASTER TEMPO</b> e <b>TEMPO RESET</b> (zera o pitch na hora, sem correr o fader ao centro).</li>
<li><b>BEAT SYNC (INST. DOUBLES)</b> e <b>MASTER</b> — segurando o SYNC você duplica a faixa do outro deck na mesma posição.</li>
<li><b>SLIP</b>, <b>DIRECTION REV</b>, <b>TRACK SEARCH ⏮⏭</b>, <b>SEARCH ◄◄ ►►</b> e <b>SHIFT</b>. <i>Erro comum:</i> tentar scratch com o jog em modo CDJ — nesse modo o topo do prato não para nada.</li>
</ul>

<h3>Loop e pads</h3>
<ul>
<li><b>LOOP IN / CUE (IN ADJUST)</b> e <b>LOOP OUT (OUT ADJUST)</b> — loop ao vivo, com ajuste fino dos dois pontos.</li>
<li><b>4/8 BEAT (LOOP CUTTER)</b> — loop instantâneo de 4 tempos (segurando, 8) e corte pela metade. É o loop que salva quando a próxima ainda não está pronta.</li>
<li><b>RELOOP/EXIT</b>, <b>CUE/LOOP CALL ◄ ►</b> (com SHIFT, 1/2X e 2X), <b>MEMORY</b> e <b>DELETE</b>.</li>
<li><b>PAD MODE</b> — HOT CUE, BEAT LOOP, SLIP LOOP e BEAT JUMP; com SHIFT, KEYBOARD, PAD FX, KEY SHIFT e BEAT JUMP. São <b>8 pads por deck</b>.</li>
</ul>

<h3>Mixer de 4 canais</h3>
<ul>
<li><b>Chave de entrada dos canais 3 e 4 — USB / LINE / PHONO.</b> Só eles têm essa chave; os canais 1 e 2 são dos decks internos, ponto final.</li>
<li><b>TRIM</b> (−∞ a +9 dB), <b>EQ/ISOLATOR HI · MID · LOW</b> (−26 a +6 dB) e <b>COLOR</b> por canal.</li>
<li><b>CUE do canal</b> e <b>CHANNEL FADER</b> — os quatro faders do XZ são <b>magnéticos</b>, sem contato mecânico.</li>
<li><b>CROSSFADER ASSIGN (A / THRU / B)</b> por canal — decide se o canal passa pelo crossfader e por qual lado. Em <b>THRU</b> ele ignora o crossfader.</li>
<li><b>MASTER LEVEL</b>, <b>MASTER CUE</b>, <b>MASTER EQ (LOW/MID/HI)</b>, <b>BOOTH LEVEL</b> e <b>AUX (OFF/LINE/PORTABLE)</b> com <b>AUX TRIM</b>.</li>
<li><i>Erro comum:</i> abrir o fader do canal 3 e não ouvir nada porque o CROSSFADER ASSIGN dele está no lado oposto ao do crossfader.</li>
</ul>

<h3>Microfone, efeitos e a saída SEND</h3>
<ul>
<li><b>MIC 1 / MIC 2 ON</b>, <b>MIC LEVEL</b>, <b>MIC EQ de 3 bandas</b> e <b>TALK OVER</b> — EQ de três bandas para os microfones, coisa que o RX3 não tem.</li>
<li><b>FEEDBACK REDUCER</b> com chave <b>LIGHT / HEAVY</b> — detecta a frequência que apita e insere um filtro só nela. LIGHT preserva o timbre (voz cantada, rap); HEAVY corta mais largo, para fala e MC. É o recurso que salva evento com microfone em cima da caixa.</li>
<li><b>BEAT FX</b> — 14 efeitos (FILTER, TRANS, PITCH, SLIP ROLL, ROLL, VINYL BRAKE, HELIX, DELAY, ECHO, PING PONG, SPIRAL, REVERB, PHASER, FLANGER), com <b>FX CH SELECT</b> (canais 1 a 4, MIC, AUX, CF.A, CF.B, MASTER), <b>BEAT ◄►</b>, <b>TIME</b>, <b>LEVEL/DEPTH</b>, <b>AUTO/TAP</b>, <b>TAP</b>, <b>FX QUANTIZE</b> e <b>FX FREQUENCY LOW/MID/HI</b> — este escolhe em que faixa o efeito age, então dá para efeitar só o agudo.</li>
<li><b>X-PAD</b> — tira sensível ao toque: liga o BEAT FX enquanto o dedo está encostado e varre o parâmetro pela posição.</li>
<li><b>SEND</b> — saída dedicada que manda para fora <b>o canal escolhido no FX CH SELECT</b>, para alimentar um sampler ou processador. Atenção: o XZ tem SEND mas <b>não tem RETURN</b> — o retorno volta por um canal de entrada.</li>
<li><b>MASTER REC</b> e <b>TRACK MARK</b> — gravam o set em WAV no pendrive.</li>
</ul>

<h2>4. Como ligar</h2>
<p>Regra que não muda: <b>CDJ, XDJ e qualquer player digital vão em LINE; toca-discos vai em PHONO.</b> A cápsula entrega −52 dBu e precisa do pré com curva RIAA que só existe no PHONO. Toca-discos em LINE some; CDJ em PHONO estoura. O fio-terra vai no <b>SIGNAL GND</b>.</p>
<p>Ligação típica do XZ:</p>
<ul>
<li><b>MASTER 1 (XLR)</b> → amplificador ou caixas ativas (nada de adaptador XLR→RCA). <b>MASTER 2 (RCA)</b> → equipamento desbalanceado. <b>BOOTH (TRS)</b> → monitor de cabine.</li>
<li><b>PHONO</b> → toca-discos · <b>LINE</b> → CDJ/player · <b>AUX</b> → celular ou linha extra.</li>
<li><b>LINK (CH3/CH4)</b> → cabo de rede de um CDJ Pioneer (PRO DJ LINK). <b>LINK (EXTENSION)</b> → expansão da rede ou o PC com rekordbox.</li>
<li><b>USB (tipo B)</b> → PC/Mac. Nesse modo os canais 3 e 4 em <b>USB</b> recebem os decks 3 e 4 do rekordbox.</li>
<li><b>SEND</b> → entrada do sampler/efeito externo; o retorno volta por LINE de um canal livre.</li>
</ul>
<p>Detalhe que vale ouro em cabine: no UTILITY existem <b>CH3/CH4 CONTROL TONE</b>, que definem se o <em>timecode</em> do DVS chega pelo PHONO ou pelo LINE daquele canal. É por aí que se toca com vinil de controle no XZ.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ul>
<li>Dê play no deck 1 e confirme com os olhos: o medidor que se mexe é o do <b>canal 1</b>. Repita com o deck 2 e o canal 2 — essa é a lição do roteamento.</li>
<li>Ponha o <b>CROSSFADER ASSIGN</b> do canal 1 em <b>A</b> e o do 2 em <b>B</b> e mixe só no crossfader. Depois ponha o canal 1 em <b>THRU</b> e veja o crossfader deixar de agir sobre ele.</li>
<li>Ponha o canal 3 em <b>PHONO</b> e depois em <b>LINE</b>, e diga em voz alta qual aparelho você ligaria em cada posição.</li>
<li>Faça um loop de 4 tempos com o <b>4/8 BEAT</b>, corte pela metade no LOOP CUTTER e saia no <b>RELOOP/EXIT</b> sem perder o compasso.</li>
<li>Ligue o <b>BEAT FX</b> em ECHO com o <b>FX CH SELECT</b> no canal que está tocando, ajuste o <b>BEAT</b> para 1/2 e dispare no fim de uma frase de 8 tempos.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Procurar a chave de fonte dos canais 1 e 2.</b> Ela não existe. Quem a caça no escuro deixa o som parado por nada — o problema está no fader, no TRIM ou no CROSSFADER ASSIGN.</li>
<li><b>Esquecer um canal em THRU.</b> Ele fica sempre no ar e a mixagem no crossfader deixa de funcionar — normalmente durante a virada, na frente da pista.</li>
<li><b>Ligar o toca-discos no LINE do canal 3.</b> Quase não sai som, e o DJ compensa subindo TRIM e master até o sistema realimentar. O inverso, CDJ em PHONO, distorce na hora.</li>
<li><b>Usar o MASTER EQ para consertar mixagem.</b> Ele é EQ de saída, para casar com a sala. Mexer nele durante o set desmonta o trabalho de todos os canais de uma vez.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 128 — ALPHATHETA OPUS-QUAD                                                */
/* ========================================================================= */
const OPUS = `
<h2>1. O que é o OPUS-QUAD e por que ele existe</h2>
<p>O <strong>OPUS-QUAD</strong> é o all-in-one topo de linha da AlphaTheta (a empresa que passou a assinar os produtos Pioneer DJ). Põe <strong>quatro decks</strong> e um mixer de quatro canais numa peça só, com <strong>dois pratos</strong> e tela touch de 10,1" no centro — e abandona o formato retangular: o corpo é curvo, em leque, preto com detalhes em cobre.</p>
<p>Por que existe? Porque o all-in-one tinha chegado a um teto de imagem: o XDJ-XZ resolveu a técnica, mas a cabine continuava parecendo "equipamento de aluguel". O OPUS-QUAD foi desenhado para ficar bonito num booth de festa premium, casamento de alto padrão e evento de marca — o desenho é parte do produto. Junto vieram recursos que o XZ não tem: <strong>Smooth Echo</strong>, saída <strong>ZONE</strong> independente, <strong>Wi-Fi</strong>, <strong>Bluetooth</strong> de entrada e <strong>CloudDirectPlay</strong>.</p>
<p>Concorre com o próprio XDJ-XZ (mais barato, mais "cabine de trabalho"), com o <strong>Denon Prime 4+</strong> e com a montagem clássica de quatro CDJ-3000 mais um DJM. Você o encontra em casas noturnas de alto padrão, eventos corporativos, formaturas caras e como destaque em locadoras.</p>
<p>Detalhe importante: <strong>4 decks com 2 pratos</strong>. Cada metade alterna entre dois decks (a esquerda entre 1 e 3, a direita entre 2 e 4). O deck que sai do controle do prato <b>continua tocando</b> — só deixa de responder àquele jog. Quem não entende isso trava na primeira vez que aperta o botão de deck.</p>

<h2>2. Ficha técnica (manual DRI1795D, pág. 137)</h2>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões máximas (L × P × A)</td><td>925,7 × 499,7 × 142 mm</td></tr>
<tr><td>Peso</td><td>13,2 kg</td></tr>
<tr><td>Alimentação / consumo</td><td>AC 110–240 V, 50/60 Hz · 60 W (0,3 W desligado)</td></tr>
<tr><td>Tela</td><td>touch de 10,1" — <em>da spec oficial do produto; não consta na tabela do manual</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td>206 mm (8,1") — <em>da spec oficial; também não está na tabela do manual</em></td></tr>
<tr><td>Amostragem / conversores</td><td>44,1 kHz · D/A do master de <b>32 bit</b> · demais A/D e D/A de 24 bit</td></tr>
<tr><td>Resposta de frequência</td><td>20 Hz – 20 kHz (USB, LINE, MIC 1, MIC 2)</td></tr>
<tr><td>Relação sinal/ruído</td><td>USB 114 dB · LINE 96 dB · PHONO 85 dB · MIC 79 dB</td></tr>
<tr><td>Distorção (THD)</td><td>USB 0,003 % · LINE 0,005 %</td></tr>
<tr><td>Nível/impedância de entrada</td><td>LINE −12 dBu/47 kΩ · PHONO −52 dBu/47 kΩ · MIC −57 dBu/3 kΩ</td></tr>
<tr><td>Saídas (nominal / máx.)</td><td>MASTER 1 XLR +6 dBu (máx. +25 dBu) · MASTER 2 RCA +2 dBu (máx. +21 dBu) · <b>ZONE</b> +6 dBu · BOOTH +6 dBu · PHONES +8 dBu/32 Ω</td></tr>
<tr><td>EQ de canal</td><td>−26 dB a +6 dB (20 kHz / 1 kHz / 20 Hz)</td></tr>
<tr><td>EQ do microfone</td><td>HI ±12 dB (10 kHz) · MID ±12 dB (2,5 kHz) · LOW ±12 dB (100 Hz)</td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 (passo 0,02 %) · ±10 e ±16 (0,05 %) · WIDE = ±100 % (0,5 %)</td></tr>
<tr><td>Formatos aceitos</td><td>MP3 (32–320 kbps) · AAC (16–320 kbps) · WAV e AIFF 16/24 bit · <b>ALAC (Apple Lossless)</b> · FLAC — 44,1 / 48 / <b>88,2 / 96 kHz</b> em WAV, AIFF, ALAC e FLAC</td></tr>
<tr><td>Entradas</td><td>LINE/PHONO RCA × 2 pares (combinadas) · MIC 1 e MIC 2 (XLR ou TRS 6,35 mm)</td></tr>
<tr><td>Saídas / portas</td><td>MASTER 1 XLR · MASTER 2 RCA · ZONE XLR · BOOTH TRS · PHONES 6,35 mm + 3,5 mm · USB tipo A × 3 · USB tipo C × 1 · LINK LAN 1000BASE-T</td></tr>
<tr><td>Sem fio</td><td>Wi-Fi IEEE 802.11 a/b/g/n/ac (2,4 e 5 GHz) · Bluetooth 4.2, ~20 m, codecs SBC e AAC</td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Tela, navegação e escolha de deck</h3>
<ul>
<li><b>WAVEFORM</b> e <b>BEAT FX</b> — alternam a tela entre a visão de tocar (forma de onda) e o painel do Beat FX.</li>
<li><b>SOURCE / BROWSE / PLAYLIST / TAG LIST</b> — fonte (USB 1, USB 2, rekordbox, rede LAN, Bluetooth) e as três portas de entrada na biblioteca.</li>
<li><b>SHORTCUT</b> — segurando, entra em UTILITY. É também por aqui que se liga a saída <b>ZONE</b> e a <b>gravação</b>.</li>
<li><b>ROTARY SELECTOR</b> (gira/aperta, com setas ▲▼◄►), <b>BACK</b>, <b>TAG TRACK</b> e <b>LOAD 1/3 · LOAD 2/4</b> (duplo toque = INSTANT DOUBLES).</li>
<li><b>Botões DECK 1/3 e 2/4</b> — trocam qual deck aquele prato controla. <i>Erro comum:</i> apertar DECK 3 e achar que o deck 1 parou. Ele não parou: continua tocando, só saiu do controle do prato.</li>
</ul>

<h3>Deck e prato</h3>
<ul>
<li><b>PLAY/PAUSE</b> e <b>CUE</b> — em modo VINYL a pausa freia como um vinil, no tempo do VINYL SPEED ADJUST.</li>
<li><b>Jog de 206 mm com visor no centro</b>: BEAT LOOP e BEAT JUMP ativos, quantize, número da faixa, capa, tom (KEY), TEMPO, BPM e tempo restante.</li>
<li><b>JOG MODE VINYL / CDJ</b>, <b>JOG FEEL (LIGHT ↔ HEAVY)</b> e <b>VINYL SPEED ADJUST (TOUCH / BRAKE)</b>.</li>
<li><b>TEMPO</b>, <b>TEMPO RANGE</b>, <b>MASTER TEMPO</b>, <b>TEMPO RESET</b>, <b>BEAT SYNC</b> e <b>MASTER</b>; o <b>KEY SYNC</b> ajusta o tom para casar harmonicamente com o outro deck.</li>
<li><b>QUANTIZE / WAKE UP</b> — prende tudo na grade; segurando, acorda o aparelho do modo de espera.</li>
<li><b>SLIP REVERSE</b> — toca de trás para frente enquanto segurado e, ao soltar, a música volta para onde <em>estaria</em>.</li>
<li><b>TRACK SEARCH ⏮⏭</b> (com SHIFT viram CUE/LOOP CALL) e <b>SHIFT</b>.</li>
</ul>

<h3>Loop e pads</h3>
<ul>
<li><b>LOOP IN (4 BEAT)</b> e <b>LOOP OUT</b> — loop ao vivo; segurando o IN, loop automático de 4 tempos.</li>
<li><b>Knob BEAT LOOP / RELOOP</b> — gira para escolher o tamanho do loop em batidas e <b>pressiona</b> para entrar. É o jeito mais rápido de segurar um trecho enquanto procura a próxima.</li>
<li><b>BEAT JUMP ◄ ►</b> — pula um número exato de batidas sem sair do tempo; com SHIFT vira VALUE, que muda o tamanho do salto.</li>
<li><b>8 HOT CUES por deck (A a H)</b> — grava, dispara, e com SHIFT apaga.</li>
</ul>

<h3>Mixer de 4 canais</h3>
<ul>
<li><b>Ordem física dos canais: 3 · 1 · 2 · 4.</b> Os canais 1 e 2 ficam no meio (os dois decks "da frente") e o 3 e o 4 nas pontas. É ergonomia, não erro de fábrica. Quem lê "1, 2, 3, 4" da esquerda para a direita mexe no canal errado.</li>
<li><b>Escolha de entrada dos canais 3 e 4</b> — a diferença para o XZ: aqui ela é <b>na tela</b>, e as opções são <b>DECK 3 / DECK 4</b> (internos), <b>LINE</b>, <b>PHONO</b> e <b>Bluetooth</b>. Os canais 1 e 2 são sempre os decks 1 e 2.</li>
<li><b>TRIM</b>, <b>EQ HI · MID · LOW</b> (−26 a +6 dB; no mínimo mata a banda) e <b>COLOR</b> por canal.</li>
<li><b>CUE do canal</b>, <b>CHANNEL FADER</b>, <b>CROSSFADER</b> (com ASSIGN A/THRU/B por canal), <b>MASTER LEVEL</b> com <b>CLIP</b>, <b>BOOTH LEVEL</b> e <b>HEADPHONES MIX / LEVEL</b>.</li>
<li><b>ZONE LEVEL</b> — saída extra, com XLR próprio, que manda para outro ambiente da casa o canal 3, o canal 4 ou o master. No SHORTCUT você escolhe em <em>Zone Assign</em>: em CH 3 ou CH 4 o som sai <b>independente da posição do fader</b>; em MASTER, independente do knob MASTER. Resolve "som no lounge" sem um segundo aparelho.</li>
</ul>

<h3>Microfone, efeitos e Smooth Echo</h3>
<ul>
<li><b>MIC OFF / ON / TALKOVER</b>, <b>MIC 1 LEVEL</b> e <b>EQ de 3 bandas</b> comum aos dois microfones, mais o <b>Feedback Reducer</b> pela tela.</li>
<li><b>SOUND COLOR FX</b> — SPACE, DUB ECHO, CRUSH, SWEEP, NOISE e FILTER, dosados pelos knobs COLOR. O efeito vale para os quatro canais; o knob de cada canal decide quanto entra.</li>
<li><b>BEAT FX</b> — <b>FX SELECT</b>, <b>BEAT ◄►</b>, <b>TIME</b>, <b>LEVEL/DEPTH</b>, <b>TAP/AUTO</b>, <b>ON/OFF</b> e o <b>Beat FX Bank</b> na tela, com até 4 efeitos prontos a um toque.</li>
<li><b>SMOOTH ECHO</b> — exclusivo do OPUS-QUAD. O knob dosa e o botão liga; <b>segurando o ON por mais de 1 segundo</b> abre o ajuste do gatilho: HOT CUE, CUE, PAUSE, LOAD, CHANNEL FADER ou CROSSFADER. O eco entra sozinho quando você fecha o fader, dá pause ou carrega outra música — é a ferramenta para sumir com o final de uma faixa sem cortar seco.</li>
<li><b>Gravação</b> — grava o master em WAV (REC***.WAV, ~90 min por GB), mas <b>sem botão físico</b>: pelo SHORTCUT, escolhendo o dispositivo USB e tocando em <em>Rec</em>. Não grava com a entrada em Bluetooth.</li>
</ul>

<h2>4. Como ligar</h2>
<p>A regra de ouro continua valendo: <b>CDJ, XDJ e qualquer player digital vão em LINE; toca-discos vai em PHONO.</b> A diferença aqui é que os conectores traseiros são <b>combinados LINE/PHONO</b> — o mesmo par de RCA serve para os dois — e <b>quem decide é a tela</b>, no seletor de entrada do canal 3 ou 4. O manual avisa: se o ajuste não bater com o que está plugado, pode sair volume altíssimo. Confira antes de subir o fader. O fio-terra vai no <b>SIGNAL GND</b>.</p>
<ul>
<li><b>MASTER 1 (XLR balanceado)</b> → amplificador ou caixas ativas, sem adaptador XLR→RCA. <b>MASTER 2 (RCA)</b> → equipamento desbalanceado.</li>
<li><b>ZONE (XLR balanceado)</b> → o segundo ambiente (lounge, área externa, bar). <b>BOOTH (TRS)</b> → monitor de cabine.</li>
<li><b>LINE/PHONO (RCA × 2 pares)</b> → toca-discos ou player externo, com a escolha feita na tela.</li>
<li><b>MIC 1</b> no painel traseiro, <b>MIC 2</b> no frontal (ambos XLR ou TRS).</li>
<li><b>USB tipo A × 2 no topo</b> → pendrives · <b>USB 3 traseiro</b> e <b>USB tipo C</b> → PC/Mac (cabo de até 2 m, diz o manual) · <b>LINK (LAN 1000BASE-T)</b> → rekordbox ou rede PRO DJ LINK.</li>
</ul>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ul>
<li>Toque no deck 1, aperte <b>DECK 3</b> naquela metade e observe: o prato passa a controlar o deck 3, mas o deck 1 <b>não parou</b>. Volte para o deck 1.</li>
<li>Grave um <b>hot cue</b> no primeiro tempo de uma faixa e volte nele duas vezes pelos pads A–H.</li>
<li>Gire o knob <b>BEAT LOOP</b> para 4 tempos, pressione para entrar no loop, dobre para 8 e saia sem perder o compasso.</li>
<li>Ligue o <b>SMOOTH ECHO</b> e feche o <b>CHANNEL FADER</b> de quem está tocando — ouça o eco entrar sozinho no lugar do corte seco.</li>
<li>Ponha o canal 3 em <b>PHONO</b> e depois em <b>LINE</b>, e diga qual aparelho você ligaria em cada caso. Depois abra o <b>ZONE</b> e mande esse canal para a outra sala.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Ler a fileira de canais como 1-2-3-4.</b> No OPUS-QUAD a ordem é <b>3-1-2-4</b>. No escuro, isso vira grave cortado no canal errado no meio da virada.</li>
<li><b>Deixar o seletor do canal em PHONO com um CDJ plugado.</b> O manual avisa: pode sair volume altíssimo de uma vez. Confira a fonte antes de abrir o fader.</li>
<li><b>Achar que o deck que saiu do prato parou.</b> Ele continua tocando. Fechar o fader errado achando que é "o que sobrou" derruba a música que está no ar.</li>
<li><b>Tirar o pendrive sem desmontar pela tela.</b> A biblioteca do rekordbox corrompe e você perde cues, loops e playlists do set inteiro.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 129 — ALPHATHETA XDJ-AZ                                                   */
/* ========================================================================= */
const AZ = `
<h2>1. O que é o XDJ-AZ e por que ele existe</h2>
<p>O <strong>XDJ-AZ</strong> é o all-in-one de <strong>quatro canais e quatro decks</strong> lançado pela AlphaTheta em 2024 como sucessor direto do XDJ-XZ. Ele mantém a ideia do XZ — cabine inteira num corpo só, com pratos grandes de verdade — e resolve as duas queixas que o XZ acumulou em cinco anos de estrada: <strong>a tela era pequena</strong> (7") e o aparelho <strong>não tinha conectividade sem fio</strong>.</p>
<p>No AZ a tela virou uma <strong>capacitiva de 10,1"</strong> que mostra até 13 faixas de uma vez (contra 8 no XZ), com <em>Touch Preview</em> (ouvir a faixa sem carregar), <em>Touch Cue</em> (ouvir um trecho adiante da música que já está tocando) e <em>Playlist Bank</em>, com até quatro playlists a um toque. Entraram Wi-Fi, Bluetooth 5.3, CloudDirectPlay e <strong>SonicLink</strong> — a conexão sem fio para os fones AlphaTheta.</p>
<p>Ele fica no topo da linha de all-in-one ao lado do OPUS-QUAD, que é o irmão "de vitrine": o OPUS aposta no desenho curvo, no Smooth Echo e na saída ZONE; o AZ aposta no formato de trabalho, retangular, com alças de transporte no chassi. Concorre com o <strong>Denon Prime 4+</strong> e, no rider, com a montagem clássica de CDJ + DJM. Você o encontra em casas noturnas, palcos de festival, eventos e cabines de locadora de nível alto.</p>
<p>Assim como no OPUS-QUAD, aqui são <strong>4 decks com 2 pratos</strong>: cada lado alterna entre dois decks, e o deck que sai do prato continua tocando.</p>

<h2>2. Ficha técnica (manual DRI1936C, pág. 151)</h2>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões máximas (L × P × A)</td><td>895 × 504,1 × 133,4 mm</td></tr>
<tr><td>Peso</td><td>13,5 kg</td></tr>
<tr><td>Alimentação / consumo</td><td>AC 110–240 V, 50/60 Hz · 60 W (0,3 W desligado)</td></tr>
<tr><td>Tela</td><td>touch capacitiva de 10,1", até 13 faixas por vez — <em>da página oficial do produto; não consta na tabela de specs do manual</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td>206 mm — <em>da spec oficial do produto; também não está na tabela do manual</em></td></tr>
<tr><td>Amostragem / conversores</td><td>44,1 kHz · D/A do master de <b>32 bit</b> · demais A/D e D/A de 24 bit</td></tr>
<tr><td>Resposta de frequência</td><td>20 Hz – 20 kHz (USB, LINE, MIC 1, MIC 2)</td></tr>
<tr><td>Relação sinal/ruído</td><td>USB <b>115 dB</b> · LINE 96 dB · PHONO 85 dB · MIC 79 dB</td></tr>
<tr><td>Distorção (THD)</td><td>USB 0,0018 % · LINE 0,005 %</td></tr>
<tr><td>Nível/impedância de entrada</td><td>LINE −12 dBu/47 kΩ · PHONO −52 dBu/47 kΩ · MIC −57 dBu/3 kΩ</td></tr>
<tr><td>Saídas (nominal / máx.)</td><td>MASTER 1 XLR +6 dBu (máx. +25 dBu) · MASTER 2 RCA +2 dBu (máx. +21 dBu) · BOOTH TRS +6 dBu · PHONES +8 dBu/32 Ω</td></tr>
<tr><td>Diafonia (crosstalk)</td><td>LINE 84 dB</td></tr>
<tr><td>EQ de canal e EQ do master</td><td>−26 dB a +6 dB (10 kHz / 1 kHz / 20 Hz)</td></tr>
<tr><td>EQ do microfone</td><td>HI ±12 dB (10 kHz) · MID ±12 dB (2,5 kHz) · LOW ±12 dB (100 Hz)</td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE, mais o botão <b>TEMPO RESET</b></td></tr>
<tr><td>Formatos aceitos</td><td>MP3 (32–320 kbps) · AAC (16–320 kbps) · WAV e AIFF 16/24 bit · <b>ALAC</b> · FLAC — 44,1 / 48 / <b>88,2 / 96 kHz</b></td></tr>
<tr><td>Entradas</td><td>LINE/PHONO RCA × 2 pares (combinadas) · MIC 1 e MIC 2 (XLR ou TRS 6,35 mm)</td></tr>
<tr><td>Saídas / portas</td><td>MASTER 1 XLR · MASTER 2 RCA · BOOTH TRS · PHONES 6,35 mm + 3,5 mm · USB tipo A × 2 (5 V/1 A) · USB tipo C × 1 · LINK LAN 100BASE-TX</td></tr>
<tr><td>Sem fio</td><td>Wi-Fi IEEE 802.11 a/b/g/n/ac (2,4 e 5 GHz) · Bluetooth 5.3 (~20 m, SBC e AAC) · SonicLink (~5 m)</td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Tela e navegação</h3>
<ul>
<li><b>SOURCE</b> — escolhe a fonte: USB 1, USB 2, rekordbox no PC/celular, CloudDirectPlay e streaming.</li>
<li><b>BROWSE / TAG LIST / PLAYLIST / SEARCH / MENU</b> — a fileira de navegação. O <b>PLAYLIST</b> dá acesso ao Playlist Bank, com quatro playlists a um toque.</li>
<li><b>ROTARY SELECTOR (push)</b>, <b>BACK</b>, <b>TAG TRACK/REMOVE</b>, <b>TRACK FILTER/EDIT</b> e <b>SHORT CUT</b>.</li>
<li><b>LOAD 1 · 2 · 3 · 4</b> — quatro botões de carga, um por deck; dois toques fazem INSTANT DOUBLES.</li>
<li><b>Touch Preview e Touch Cue</b> — o primeiro deixa ouvir uma faixa da lista sem carregar; o segundo, tocando na forma de onda geral, deixa ouvir no fone um trecho adiante da música que está no ar, <b>sem afetar a saída</b>. Para o Touch Cue funcionar, aperte antes o <b>LINK CUE</b>.</li>
</ul>

<h3>Deck e prato</h3>
<ul>
<li><b>PLAY/PAUSE</b> e <b>CUE</b> — em modo VINYL a parada imita a frenagem do vinil.</li>
<li><b>Jog de 206 mm com visor central</b> — centro faz scratch em VINYL, borda faz <i>nudge</i>.</li>
<li><b>JOG MODE (VINYL / CDJ)</b>, <b>JOG FEEL (LIGHT ↔ HEAVY)</b> e <b>VINYL SPEED ADJUST</b>.</li>
<li><b>TEMPO</b>, <b>TEMPO ±6/±10/±16/WIDE</b>, <b>MASTER TEMPO</b> e <b>TEMPO RESET</b> — este último devolve o BPM original da faixa na hora, onde quer que o fader esteja.</li>
<li><b>BEAT SYNC (INST. DOUBLES)</b>, <b>MASTER</b> e <b>KEY SYNC</b>.</li>
<li><b>SLIP</b> e <b>SLIP REVERSE</b>, <b>QUANTIZE</b>, <b>TRACK SEARCH ⏮⏭</b>, <b>SEARCH ◄◄ ►►</b> e <b>SHIFT</b>.</li>
<li><b>DECK SELECT</b> — escolhe qual dos quatro decks aquele lado controla (3 ou 1 à esquerda, 2 ou 4 à direita).</li>
</ul>

<h3>Loop e pads</h3>
<ul>
<li><b>LOOP IN / CUE</b>, <b>LOOP OUT</b> e <b>RELOOP / EXIT</b>.</li>
<li><b>BEAT LOOP 4 (1/2X)</b> e <b>BEAT LOOP 8 (2X)</b> — loops automáticos de 4 e 8 tempos com um toque; com SHIFT, cortam e dobram o loop ativo.</li>
<li><b>BEAT JUMP ◄ ►</b>, <b>MEMORY</b>, <b>DELETE</b> e <b>CUE/LOOP CALL ◄ ►</b>.</li>
<li><b>PAD MODE</b> — HOT CUE (com SHIFT, <b>GATE CUE</b>: a música só toca enquanto o pad está pressionado), BEAT LOOP, SLIP LOOP (com SHIFT, KEY SHIFT) e BEAT JUMP. São 8 pads de borracha retroiluminados por deck.</li>
</ul>

<h3>Mixer de 4 canais</h3>
<ul>
<li><b>Ordem física dos canais: 3 · 1 · 2 · 4</b>, igual ao OPUS-QUAD. Decore isso antes de tocar no escuro.</li>
<li><b>Seleção de fonte dos decks 3 e 4 — pela tela</b>, no menu <em>Mixer</em>: DECK, LINE, PHONO ou Bluetooth. Os canais 1 e 2 são sempre os decks internos.</li>
<li><b>TRIM</b> (−∞ a +9 dB), <b>EQ/ISO HI · MID · LOW</b> (−26 a +6 dB) e <b>COLOR</b> por canal.</li>
<li><b>CUE do canal</b>, <b>CHANNEL FADER</b> e <b>CROSSFADER</b> — a curva do crossfader e a do channel fader se ajustam no <b>MIXER SETTINGS</b>.</li>
<li><b>MIXER SETTINGS</b> — botão dedicado que abre na tela curva de crossfader, curva de channel fader, tipo de EQ/ISOLATOR, limiter do master e a gravação.</li>
<li><b>MASTER LEVEL</b>, <b>MASTER CUE</b>, <b>MASTER EQ (LOW/MID/HI)</b> e <b>BOOTH LEVEL</b>.</li>
<li><b>LINK CUE</b>, <b>HEADPHONES MIX</b> e <b>HEADPHONES LEVEL</b>.</li>
</ul>

<h3>Microfone e efeitos</h3>
<ul>
<li><b>MIC 1 ON / MIC 2 ON com PUSH TO TALK</b> — segurando, o microfone abre só enquanto pressionado. Há <b>TALK OVER</b> e EQ de LEVEL/LOW/MID/HI por microfone, com LEDs de SIGNAL e CLIP.</li>
<li><b>SOUND COLOR FX</b> — SPACE, DUB ECHO, CRUSH, SWEEP, NOISE e FILTER, com o knob <b>PARAMETER</b>.</li>
<li><b>BEAT FX</b> — 14 efeitos: DELAY, ECHO, PING PONG, SPIRAL, HELIX, REVERB, FLANGER, PHASER, FILTER, <b>TRIPLET FILTER</b>, TRANS, ROLL, <b>TRIPLET ROLL</b> e <b>MOBIUS</b>. Com <b>TIME</b>, <b>LEVEL/DEPTH</b>, <b>BEAT ◄►</b>, <b>AUTO/TAP</b>, <b>TAP</b> e <b>FX QUANTIZE</b>.</li>
<li><b>FX FREQUENCY LOW / MID / HI</b> — liga e desliga cada faixa na <em>entrada</em> do efeito. É assim que se efeita só o agudo e se preserva o grave da pista.</li>
<li><b>X-PAD</b> — a tira de toque que varre o parâmetro do Beat FX em tempo real.</li>
<li><b>Gravação</b> — o AZ grava o master em WAV (REC***.WAV, ~90 min por GB), mas <b>sem botão físico</b>: aperte <b>MIXER SETTINGS</b>, escolha o dispositivo USB e toque em <em>Rec</em>. Não grava com a entrada em Bluetooth.</li>
</ul>

<h2>4. Como ligar</h2>
<p>Regra que não muda: <b>CDJ, XDJ e qualquer player digital vão em LINE; toca-discos vai em PHONO.</b> A cápsula entrega −52 dBu com a curva RIAA invertida, e só a entrada PHONO amplifica e corrige. No XDJ-AZ os conectores traseiros são <b>LINE/PHONO combinados</b> (dois pares de RCA) e <b>quem decide é a tela</b>, em <em>DECK3 Input Select</em> e <em>DECK4 Input Select</em>. O manual é explícito: se a escolha não bater com o que está plugado, pode sair volume muito alto. O fio-terra do toca-discos vai no <b>SIGNAL GND</b>.</p>
<ul>
<li><b>MASTER 1 (XLR balanceado)</b> → amplificador ou caixas ativas. Nada de adaptador XLR→RCA.</li>
<li><b>MASTER 2 (RCA)</b> → equipamento desbalanceado.</li>
<li><b>BOOTH (TRS balanceado)</b> → monitor de cabine, com volume próprio.</li>
<li><b>MIC 1</b> e <b>MIC 2</b> nas combos traseiras XLR/TRS.</li>
<li><b>USB tipo A × 2</b> no topo → pendrives · <b>USB tipo C</b> → PC/Mac.</li>
<li><b>LINK (LAN 100BASE-TX)</b> → player compatível com PRO DJ LINK ou PC com rekordbox.</li>
<li><b>PHONES</b> no painel frontal (6,35 mm ou 3,5 mm), ao lado do botão <b>PAIRING</b> do SonicLink.</li>
</ul>
<p>Armadilha de configuração que derruba set: no UTILITY existe <b>PRO DJ LINK Mode</b>. Quando ele está em <b>On</b> (para ligar o AZ a um CDJ pela LAN), <b>os decks 3 e 4 do próprio aparelho ficam indisponíveis</b>. Se você planejou tocar em quatro decks internos, esse ajuste precisa ficar em Off.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ul>
<li>Grave um <b>hot cue</b> no primeiro tempo, volte nele duas vezes e depois experimente o <b>GATE CUE</b> (SHIFT + HOT CUE): o som só sai enquanto o pad está apertado.</li>
<li>Toque no deck 1 e use o <b>DECK SELECT</b> para passar aquele lado ao deck 3. Confirme que o deck 1 continua tocando.</li>
<li>Dispare o <b>BEAT LOOP 4</b>, dobre para 8 com SHIFT e saia no <b>RELOOP/EXIT</b> sem perder o compasso.</li>
<li>Ligue o <b>BEAT FX</b> em ECHO e desligue o <b>FX FREQUENCY LOW</b> — ouça o efeito deixar o grave intacto enquanto trabalha só em cima.</li>
<li>Abra o <b>MIXER SETTINGS</b>, troque a curva do crossfader e refaça a mesma mixagem nas duas curvas para sentir a diferença.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Ler a fileira de canais como 1-2-3-4.</b> A ordem física é <b>3-1-2-4</b>. É o erro que mais mata mixagem em cabine escura.</li>
<li><b>Deixar o PRO DJ LINK Mode ligado sem precisar.</b> Você perde os decks 3 e 4 do aparelho e passa o set achando que é defeito.</li>
<li><b>Ligar CDJ na entrada com o seletor em PHONO.</b> O manual avisa que o volume pode sair altíssimo de uma vez. Confira a fonte na tela antes de abrir o fader.</li>
<li><b>Confiar só no MASTER EQ e no limiter.</b> Eles são rede de segurança e ajuste de sala. Gain staging se faz no TRIM, canal por canal, com o medidor no âmbar.</li>
</ul>
`.trim();

/* ========================================================================= */
const AULAS = [
  { id: 'd1a00000-0000-4000-9000-000000000126', nome: 'Pioneer XDJ-RX3', html: RX3 },
  { id: 'd1a00000-0000-4000-9000-000000000127', nome: 'Pioneer XDJ-XZ', html: XZ },
  { id: 'd1a00000-0000-4000-9000-000000000128', nome: 'AlphaTheta OPUS-QUAD', html: OPUS },
  { id: 'd1a00000-0000-4000-9000-000000000129', nome: 'AlphaTheta XDJ-AZ', html: AZ },
];

const SO_CONTAR = process.argv.includes('--contar');

for (const a of AULAS) {
  if (SO_CONTAR) {
    console.log(`${a.nome.padEnd(24)} ${String(a.html.length).padStart(6)} chars`);
    continue;
  }
  const r = await fetch(`${REST}/lessons?id=eq.${a.id}&select=id,titulo`, {
    method: 'PATCH',
    headers: H,
    body: JSON.stringify({ conteudo_rico: a.html }),
  });
  const body = await r.text();
  if (!r.ok) {
    console.error(`✗ ${a.nome}: HTTP ${r.status} — ${body}`);
    process.exitCode = 1;
    continue;
  }
  console.log(`✓ ${a.nome.padEnd(24)} ${String(a.html.length).padStart(6)} chars  ${body}`);
}
