/**
 * apply-aulas-xdj-lote-101-122-125.mjs
 * ---------------------------------------------------------------------------
 * Escreve o conteudo_rico COMPLETO de 5 aulas da familia XDJ (Pioneer DJ):
 *
 *   101  Pioneer XDJ-RX2       (all-in-one · 2 decks + mixer 2 canais)
 *   122  Pioneer XDJ-700       (player de 1 deck · touch 7")
 *   123  Pioneer XDJ-1000MK2   (player de 1 deck · touch 7" · prato do NXS2)
 *   124  Pioneer XDJ-AERO      (all-in-one Wi-Fi · 2012)
 *   125  Pioneer XDJ-RR        (all-in-one · 2 decks + mixer 2 canais)
 *
 * SOMENTE PATCH de `conteudo_rico`. Nao toca em id, module_id, ordem nem
 * ai_animations — o simulador de cada aula ja esta certo e publicado.
 *
 * ---------------------------------------------------------------------------
 * FONTES (REGRA 2 do projeto — nada aqui foi inventado)
 *
 * Manuais OFICIAIS baixados de downloads.support.alphatheta.com e lidos com
 * ferramentas/pdftext.mjs:
 *   • XDJ-RX2 ...... Quick Start Guide DRH1448A (tabela de specs, pag. 18)
 *                    + Operating Instructions DRI1479A (controles, FX, formatos)
 *   • XDJ-700 ...... Quick Start Guide DRH1384D (tabela de specs, pag. 11)
 *   • XDJ-1000MK2 .. Quick Start Guide DRH1671C (tabela de specs, pag. 11)
 *   • XDJ-RR ....... Quick Start Guide DRH1516E (specs, pag. 15)
 *                    + Operating Instructions DRI1568B (controles, FX, formatos)
 *   • XDJ-AERO ..... Operating Instructions DRI1063 (controles, formatos,
 *                    painel traseiro, faixa do TEMPO)
 *
 * Paginas OFICIAIS do produto (pioneerdj.com / AlphaTheta) — usadas so para o
 * que NAO esta na tabela de specs: tamanho e tipo da tela, prato, ano de
 * lancamento, numero de dispositivos Wi-Fi e formatos FLAC/ALAC do 1000MK2.
 *
 * Os proprios simuladores da aula (pioneer-xdj-*-real.html), cujos textos de
 * cada controle ja sairam desses mesmos manuais.
 *
 * ---------------------------------------------------------------------------
 * O QUE NAO FOI ENCONTRADO (marcado como ausente no texto das aulas)
 *
 *  • DIAMETRO DO PRATO (jog) — nao consta na tabela de specs de NENHUM dos 5
 *    manuais. Marcado "nao consta" em todas as fichas.
 *  • XDJ-AERO: dimensoes, peso, resposta de frequencia, S/N, THD, niveis de
 *    entrada/saida e faixa do EQ — o manual DRI1063 NAO TEM tabela de
 *    Specifications (conferido: nenhuma ocorrencia de "S/N", "Vrms", "dBu",
 *    "Frequency response" ou "AC 100" no PDF inteiro). Dimensoes e peso vem da
 *    especificacao oficial do produto (623 x 289,5 x 65 mm · 3,8 kg) e estao
 *    marcados na ficha como fora do manual.
 *  • XDJ-700 e XDJ-1000MK2: o valor exato do WIDE nao consta no Quick Start
 *    Guide (DRH1384D / DRH1671C), que e o unico manual publicado em PDF para
 *    esses dois. Nos irmaos XDJ-RX2 (DRI1479A) e XDJ-RR (DRI1568B) o manual diz
 *    ±100 %. Ficha marca isso explicitamente.
 *  • XDJ-AERO: faixa do EQ em dB — nao consta no manual.
 *
 * DIVERGENCIAS SIMULADOR x MANUAL detectadas (o simulador NAO foi alterado por
 * este script; o texto da aula segue o manual, que e a fonte de verdade):
 *  • XDJ-RX2 — SOUND COLOR FX: o manual DRI1479A lista 4 (DUB ECHO, SWEEP,
 *    NOISE, FILTER); o simulador desenha 6 (inclui SPACE e CRUSH).
 *  • XDJ-RX2 — BEAT FX: o manual lista 8 (DELAY, ECHO, SPIRAL, REVERB, TRANS,
 *    FLANGER, PITCH, ROLL); o texto do simulador cita PING PONG, PHASER,
 *    SLIP ROLL, VINYL BRAKE, HELIX e MOBIUS, que nao existem no RX2.
 *  • XDJ-RX2 — o simulador tem um knob "JOG ADJUST"; o manual so descreve
 *    VINYL SPEED ADJUST (TOUCH/BRAKE). Nao ha JOG ADJUST no RX2.
 * ---------------------------------------------------------------------------
 * Rodar:  node "cursos-novos/pleno-dj/apply-aulas-xdj-lote-101-122-125.mjs"
 * Conferir tamanho sem gravar:  ... --contar
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
/* 101 — PIONEER XDJ-RX2                                                     */
/* ========================================================================= */
const RX2 = `
<h2>1. O que é o XDJ-RX2 e por que ele existe</h2>
<p>O <b>XDJ-RX2</b> é um <em>all-in-one</em>: dois players digitais e um mixer de dois canais no mesmo chassi, com tela colorida de 7" no meio. Não é controlador — não precisa de computador para nada: você espeta o pendrive preparado no rekordbox e toca.</p>
<p>Ele existe para resolver logística. Montar cabine de verdade custa dois CDJ, um DJM, seis cabos RCA, dois de rede, três de força e três cases; o RX2 troca isso por <b>uma peça de 9,1 kg</b>, um par de XLR e um cabo de força.</p>
<p>É a segunda geração da linha: veio em <b>setembro de 2017</b>, substituindo o XDJ-RX (2015), e herdou coisas concretas da série NXS2 — as curvas de EQ e de channel fader do DJM-900NXS2, os SOUND COLOR FX e os BEAT FX. Abaixo dele fica o <b>XDJ-RR</b>; acima, o <b>XDJ-XZ</b> (mixer de 4 canais); depois veio o <b>XDJ-RX3</b>. Fora da Pioneer, disputava com o Denon MCX8000 e depois com o Prime 2.</p>
<p>Onde você encontra hoje: bar de médio porte, festa universitária, casamento, formatura, locadora, palco secundário de festival e — muito — como equipamento de estudo de quem vai migrar para CDJ+DJM.</p>

<h2>2. Ficha técnica</h2>
<p>Fonte: <b>Quick Start Guide DRH1448A</b> e <b>Operating Instructions DRI1479A</b>.</p>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões · peso · alimentação</td><td>728,2 × 108,4 × 443,8 mm · 9,1 kg · AC 110–240 V, 50/60 Hz, 41 W (0,4 W em standby)</td></tr>
<tr><td>Tela</td><td>LCD colorida de 7", sensível ao toque <em>(dado da página oficial — não consta na tabela de specs)</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td><em>não consta no manual nem na spec oficial</em></td></tr>
<tr><td>Amostragem / conversores</td><td>44,1 kHz · A/D e D/A de 24 bit · resposta 20 Hz – 20 kHz</td></tr>
<tr><td>Sinal/ruído</td><td>USB 112 dB · LINE 96 dB · PHONO 85 dB · AUX 96/90 dB · MIC 81 dB</td></tr>
<tr><td>Nível / impedância de entrada</td><td>LINE −12 dBu/47 kΩ · PHONO −52 dBu/47 kΩ · AUX −12 ou −24 dBu/47 kΩ · MIC −57 dBu/3 kΩ</td></tr>
<tr><td>Saídas (nominal / máxima)</td><td>MASTER 1 XLR +6 dBu (máx. +24 dBu) · MASTER 2 RCA +2 dBu (máx. +20 dBu) · BOOTH TRS +6 dBu · PHONES +8 dBu / 32 Ω</td></tr>
<tr><td>EQ</td><td>Canal: HI/MID/LOW de −∞ a +6 dB (20 kHz / 1 kHz / 20 Hz) · Microfone: HI ±12 dB (10 kHz) e LOW ±12 dB (100 Hz), sem MID</td></tr>
<tr><td>Entradas</td><td>PHONO RCA × 2 pares · LINE RCA × 2 pares · MIC 1 e MIC 2 (XLR ou TRS 6,35 mm) · AUX RCA + P2 3,5 mm frontal · SIGNAL GND</td></tr>
<tr><td>Saídas / portas</td><td>MASTER 1 XLR · MASTER 2 RCA · BOOTH TRS 6,35 mm · PHONES 6,35 mm + 3,5 mm · USB tipo A × 2 (5 V/1 A) · USB tipo B × 1</td></tr>
<tr><td>Formatos aceitos</td><td>MP3 (MPEG-1 Layer 3, 32–320 kbps) · AAC .m4a/.aac/.mp4 (MPEG-4 e MPEG-2 AAC LC, 16–320 kbps) · WAV e AIFF 16/24 bit — em 32, 44,1 ou 48 kHz. <b>Não toca FLAC nem ALAC.</b></td></tr>
<tr><td>Sistemas de arquivo do pendrive</td><td>FAT16, FAT32 e HFS+ — <b>NTFS não é suportado</b></td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE (WIDE = ±100 %). Passo de 0,02 % em ±6, 0,05 % em ±10 e ±16, 0,5 % em WIDE</td></tr>
<tr><td>Pads · gravação</td><td>8 pads e 8 hot cues por deck · MASTER REC em WAV no pendrive do slot USB 2 (cerca de 90 min por GB)</td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Tela e navegação</h3>
<ul>
<li><b>SOURCE</b> — de onde vem a música: USB 1, USB 2 ou rekordbox no computador/celular. Sem fonte definida, nada carrega.</li>
<li><b>BROWSE / TAG LIST / PLAYLIST / SEARCH</b> — as portas de entrada na biblioteca. Quem trabalha com a <b>TAG LIST</b> (a fila montada antes do set) erra muito menos do que quem rola pasta no escuro.</li>
<li><b>MENU / UTILITY</b> — toque abre o menu; <b>segurar</b> abre o UTILITY: curva do channel fader e chave EQUALIZER × ISOLATOR.</li>
<li><b>Seletor rotativo</b> — gira e aperta. <b>BACK</b> volta um nível e, segurando, salta ao topo. <b>TRACK FILTER</b> e <b>SHORTCUT</b> filtram pelo BPM/tom da faixa no ar.</li>
<li><b>LOAD 1 / LOAD 2</b> — carregam no deck escolhido; no deck que já toca faz <b>Instant Doubles</b>, copiando a faixa na mesma posição.</li>
<li><i>Erro comum:</i> navegar só na tela e esquecer que o BACK é botão físico. Na pista escura o dedo acha o botão; o olho não acha o ícone.</li>
</ul>

<h3>Deck — transporte e prato</h3>
<ul>
<li><b>PLAY/PAUSE</b> e <b>CUE</b> — tocando, o CUE volta ao ponto e pausa (<em>back cue</em>); parado num ponto novo, grava o cue ali; segurando, toca a partir do ponto e volta ao soltar.</li>
<li><b>JOG WHEEL</b> — com <b>JOG MODE</b> em <b>VINYL</b> (aceso), encostar no topo do prato para o áudio e girar faz scratch. Em <b>CDJ</b> o topo não faz nada e o prato só faz <em>pitch bend</em> — que a borda lateral faz nos dois modos.</li>
<li><b>VINYL SPEED ADJUST</b> — a rampa: quão rápido a música freia ao encostar no prato e quão rápido volta ao soltar. É o "peso" de vinil.</li>
<li><b>TRACK SEARCH</b> pula de faixa; <b>SEARCH</b> varre dentro da faixa. Todo iniciante troca um pelo outro. <b>DIRECTION (REV)</b> toca de trás para frente — com <b>SLIP</b> ligado, ao desligar o REV a música volta para onde estaria.</li>
<li><i>Erro comum:</i> deixar o JOG MODE em CDJ e tentar scratch. O prato gira, nada acontece, e o DJ acha que é defeito.</li>
</ul>

<h3>Loop, cue, pads e andamento</h3>
<ul>
<li><b>LOOP IN / OUT / RELOOP-EXIT</b> — loop manual ao vivo; com SHIFT o IN vira loop automático de 4 tempos.</li>
<li><b>CUE/LOOP CALL ◄ ►</b> — chamam os pontos gravados; durante o loop cortam (1/2X) e dobram (2X). <b>MEMORY</b> e <b>DELETE</b> gravam e apagam o ponto no pendrive — ele volta quando a faixa carregar de novo.</li>
<li><b>SLIP</b> — durante loop, scratch, reverse ou pausa a música continua correndo por baixo; ao soltar, retoma onde estaria. É o segredo do corte que não perde o compasso. <b>QUANTIZE</b> prende cue, loop e pads na grade (exige faixa analisada no rekordbox).</li>
<li><b>PAD MODE (HOT CUE / BEAT LOOP / SLIP LOOP / BEAT JUMP)</b> + os <b>8 pads</b> de cada deck.</li>
<li><b>TEMPO</b> — fader de velocidade, com encaixe no 0,00 %; <b>TEMPO RANGE</b> alterna ±6, ±10, ±16 e WIDE; <b>MASTER TEMPO</b> trava o tom; <b>BEAT SYNC</b> e <b>MASTER</b> casam BPM e fase.</li>
<li><i>Erros comuns:</i> gravar hot cue com QUANTIZE desligado e faixa não analisada (o ponto cai fora do tempo); e mixar house em ±16, quando ±6 dá muito mais resolução ao fader.</li>
</ul>

<h3>Mixer de 2 canais</h3>
<ul>
<li><b>Chave de fonte por canal — DECK / LINE / PHONO</b>. É ela que decide se o canal ouve o player interno, um aparelho de linha ou um toca-discos.</li>
<li><b>TRIM</b> — ganho de entrada. É aqui que se faz o <em>gain staging</em>: o pico deve bater no âmbar, nunca no vermelho.</li>
<li><b>EQ HI / MID / LOW</b> — de −∞ a +6 dB. No UTILITY troca-se EQUALIZER por ISOLATOR; em ISOLATOR o fim de curso mata a banda.</li>
<li><b>COLOR</b> — dosa o SOUND COLOR FX; centro é neutro. Os efeitos do RX2 são <b>DUB ECHO, SWEEP, NOISE e FILTER</b>, e o escolhido vale para os dois canais.</li>
<li><b>CUE por canal</b>, <b>HEADPHONES MIXING</b> e <b>HEADPHONES LEVEL</b> — é assim que se prepara a próxima música sem a pista ouvir. <b>CHANNEL FADER</b>, <b>CROSSFADER</b> e a chave de <b>curva do crossfader</b> (THRU / suave / corte seco) fecham o bloco.</li>
<li><b>MASTER LEVEL</b> e <b>BOOTH MONITOR LEVEL</b> — o booth é independente do master, e é ele que permite subir o monitor da cabine sem estourar a pista.</li>
<li><b>MIC 1 / MIC 2</b> com chave OFF / ON / TALK OVER e EQ de HI e LOW. <b>BEAT FX</b> — os oito efeitos do RX2 são <b>DELAY, ECHO, SPIRAL, REVERB, TRANS, FLANGER, PITCH e ROLL</b>. BEAT ◄ ► escolhem a divisão (1/16 a 16/1), TIME ajusta em milissegundos, LEVEL/DEPTH dosa, e o seletor de canal manda o efeito para 1, 2, AUX, MIC, CROSS FADER A/B ou MASTER.</li>
<li><i>Erro comum:</i> corrigir volume no channel fader em vez do TRIM. O fader é para mixar; quem acerta nível é o TRIM.</li>
</ul>

<h2>4. Como ligar</h2>
<p><b>O RX2 já tem mixer dentro.</b> Não existe "saída do player indo para o canal do mixer": a saída dele é a saída da casa.</p>
<ul>
<li><b>MASTER 1 (XLR, balanceado)</b> → amplificador, processador ou caixas ativas. É a saída certa para tiragem longa de cabo. O manual avisa: use o MASTER 1 <b>só em entrada balanceada</b> e nunca ligue nele nada que forneça <em>phantom power</em>.</li>
<li><b>MASTER 2 (RCA)</b> → para o que só tem RCA, com cabo curto. <b>BOOTH (TRS 6,35 mm, balanceado)</b> → monitor de cabine, com volume próprio. <b>PHONES</b> (frontal) → fone, 6,35 mm ou 3,5 mm.</li>
</ul>
<p><b>As entradas, e a regra que não muda:</b></p>
<ul>
<li><b>CDJ, XDJ, player digital, celular, notebook → LINE.</b> Sinal já forte, sem equalização de disco.</li>
<li><b>Toca-discos com cápsula → PHONO.</b> O sinal da agulha é fraquíssimo (−52 dBu contra −12 dBu do LINE) e vem com a curva RIAA; precisa do pré do canal. Toca-discos em LINE sai baixo e sem grave; CDJ em PHONO sai como um berro distorcido.</li>
<li>O RX2 tem <b>dois pares LINE/PHONO</b>, um por canal, e e a fonte é escolhida na <b>chave DECK / LINE / PHONO</b> do tampo. Com toca-discos, ligue o terra no <b>SIGNAL GND</b>, senão zumbe.</li>
<li><b>AUX</b> — RCA na traseira ou P2 na frente, com chave LINE / OFF / PORTABLE e TRIM próprio: é por onde entra o celular do cliente sem tomar um canal.</li>
<li><b>MIC 1 e MIC 2</b> (combo XLR ou TRS 6,35 mm) e <b>USB tipo B</b> → computador, para rekordbox em Link Export ou para usar o RX2 como controlador MIDI.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ul>
<li>Ponha o <b>JOG MODE em VINYL</b>, encoste no topo do prato e confirme que o áudio para. Troque para <b>CDJ</b> e repita: o som não deve parar.</li>
<li>Grave um <b>hot cue no primeiro tempo</b> no pad 1 e volte nele duas vezes com o <b>QUANTIZE ligado</b>; depois desligue o QUANTIZE e grave o pad 2 fora do tempo.</li>
<li>Faça um <b>loop de 4 tempos</b> com LOOP IN + SHIFT, corte para 1/2X com o CALL ◄, dobre com o CALL ► e saia com RELOOP/EXIT.</li>
<li>Mixe trocando <b>só os graves</b>: baixe o LOW de um canal enquanto sobe o do outro, sem mexer no fader.</li>
<li>Escolha <b>FILTER</b> no SOUND COLOR FX e faça a virada só com o knob COLOR do canal 2.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Tirar o pendrive sem segurar o USB STOP.</b> Cues e loops são gravados no próprio pendrive; arrancar quente corrompe a biblioteca inteira.</li>
<li><b>Levar pendrive NTFS, ou faixa em FLAC.</b> O RX2 lê <b>FAT16, FAT32 e HFS+</b> — e só — e <b>não toca FLAC nem ALAC</b> (isso é do XDJ-1000MK2 e do RX3). Exporte em MP3, AAC, WAV ou AIFF, num pendrive FAT32.</li>
<li><b>Trocar LINE por PHONO.</b> Toca-discos em LINE some; CDJ em PHONO estoura. Confira a chave antes de abrir o fader.</li>
<li><b>Deixar o MASTER LEVEL no talo para "ganhar volume".</b> Quem entrega potência é o amplificador; trabalhe com o medidor no âmbar.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 122 — PIONEER XDJ-700                                                     */
/* ========================================================================= */
const X700 = `
<h2>1. O que é o XDJ-700 e por que ele existe</h2>
<p>O <b>XDJ-700</b> é um <em>player de um deck</em>: ele toca, mas não mixa. Não tem mixer, não tem canal, não tem crossfader. Para fazer set com ele você precisa de <b>dois XDJ-700 e um mixer</b> — exatamente como se faz com CDJ.</p>
<p>Ele chegou em <b>outubro de 2015</b> com uma missão clara: ser o player mais estreito da Pioneer. São <b>238 mm de largura</b> e <b>2 kg</b> — cabe em cabine de bar apertada, em suporte de mesa de casa e em qualquer case de mão. E, apesar do tamanho, ele traz a tela sensível ao toque de <b>7"</b> do irmão maior XDJ-1000, o PRO DJ LINK e o layout de clube que o DJ vai reencontrar num CDJ-2000.</p>
<p>Foi o aparelho que resolveu o dilema de quem queria estudar no equipamento certo sem ter espaço nem dinheiro para dois CDJ. Ele concorria com o Denon SC2900/SC3900 e com controladores de dois decks, mas com uma vantagem que nenhum controlador tem: <b>roda sem computador</b>.</p>
<p>Onde você encontra hoje: bar pequeno, lounge, restaurante, cabine de estúdio, escola de DJ e como par de reserva em festa média. Também é comum ver um XDJ-700 sozinho ao lado de um par de toca-discos, para o DJ que mistura vinil e digital.</p>

<h2>2. Ficha técnica</h2>
<p>Fonte: <b>Quick Start Guide DRH1384D</b>, tabela de especificações da pág. 11.</p>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões com o pé (L × A × P)</td><td>238 × 106,3 × 307,8 mm</td></tr>
<tr><td>Dimensões sem o pé</td><td>238 × 78,8 × 307,8 mm</td></tr>
<tr><td>Peso</td><td>2,0 kg com o pé · 1,7 kg sem o pé</td></tr>
<tr><td>Alimentação</td><td>Fonte externa: AC 100–240 V, 50/60 Hz, 0,6 A → saída DC 12 V / 2 A</td></tr>
<tr><td>Consumo</td><td>DC 12 V, 1200 mA · 0,3 W desligado</td></tr>
<tr><td>Tela</td><td>LCD TFT de matriz ativa, colorida, sensível ao toque, <b>7"</b> · 18 idiomas <em>(o tamanho vem da página oficial; a tabela de specs só diz "TFT de matriz ativa")</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td><em>não consta no manual nem na spec oficial</em></td></tr>
<tr><td>Saída de áudio analógica</td><td>AUDIO OUT L/R em RCA · 2,0 Vrms (1 kHz)</td></tr>
<tr><td>Resposta de frequência</td><td>4 Hz – 20 kHz</td></tr>
<tr><td>Relação sinal/ruído</td><td>115 dB</td></tr>
<tr><td>Distorção (THD)</td><td>0,003 %</td></tr>
<tr><td>Saída digital</td><td><b>não tem</b> — o XDJ-700 só sai em analógico (essa é uma das diferenças para o XDJ-1000MK2)</td></tr>
<tr><td>Portas USB</td><td>Tipo A (pendrive), 5 V / 1 A · Tipo B (computador)</td></tr>
<tr><td>Rede</td><td>LAN 100Base-TX (PRO DJ LINK) — até 4 players ou notebooks num switch</td></tr>
<tr><td>Sistemas de arquivo do pendrive</td><td>FAT16, FAT32 e HFS+ — <b>NTFS não é suportado</b></td></tr>
<tr><td>Pontos salvos no pendrive</td><td>até <b>10 cue ou loop points por faixa</b>; passando disso aparece CUE/LOOP POINT FULL</td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE — <em>o valor exato do WIDE não consta no Quick Start Guide, que é o único manual em PDF publicado para este modelo; nos irmãos XDJ-RX2 e XDJ-RR o manual diz ±100 %</em></td></tr>
</table>

<h2>3. Controle por controle</h2>
<p>Repare numa coisa antes de começar: no XDJ-700 <b>quase toda a metade de cima é tela</b>. BROWSE, TAG LIST, INFO, MENU, PERFORM, as fontes, SYNC, MASTER, QUANTIZE, MEMORY, CUE/LOOP CALL, SLIP e ZOOM <b>são toques na tela</b>, não botões. O que é físico é o transporte, o loop, o prato e o pitch.</p>

<h3>Transporte (físico)</h3>
<ul>
<li><b>PLAY/PAUSE</b> — toca e pausa. Em <b>VINYL MODE</b> a pausa freia o prato como um disco; em modo CDJ ela para seco.</li>
<li><b>CUE</b> — marca e volta ao ponto de partida. Parado num ponto novo, grava o cue ali; tocando, volta ao cue e pausa (<em>back-cue</em>).</li>
<li><b>TRACK SEARCH |◄◄ e ►►|</b> — faixa anterior e próxima faixa da lista.</li>
<li><b>SEARCH ◄◄ e ►►</b> — busca rápida <b>dentro</b> da faixa, com som, enquanto você segura.</li>
<li><i>Erro comum:</i> confundir TRACK SEARCH com SEARCH e trocar de música no ar. São dois pares de botões diferentes, quase iguais na serigrafia.</li>
</ul>

<h3>Loop (físico)</h3>
<ul>
<li><b>LOOP IN / 4 BEAT</b> — marca o início do loop ao vivo. Segurando, cria um loop automático de 4 tempos calculado pelo BPM. Com o loop já feito, o mesmo botão entra no ajuste fino do ponto IN.</li>
<li><b>LOOP OUT</b> — marca o fim: a faixa passa a repetir entre IN e OUT. Com o loop tocando, entra no ajuste fino do OUT.</li>
<li><b>RELOOP / EXIT</b> — sai do loop ou refaz o último, quantas vezes quiser.</li>
<li><i>Erro comum:</i> fechar o loop "de ouvido" com QUANTIZE desligado. Com QUANTIZE ligado (na tela) o ponto cola na grade e o loop sai redondo.</li>
</ul>

<h3>Prato e andamento (físico)</h3>
<ul>
<li><b>JOG WHEEL</b> — o topo para o áudio e faz scratch quando o <b>VINYL MODE</b> está aceso; a borda faz <em>pitch bend</em> para empurrar ou segurar a música e casar a batida.</li>
<li><b>VINYL MODE</b> — o LED que decide se o topo do prato responde ao toque.</li>
<li><b>TEMPO</b> — fader de velocidade, e a chave <b>TEMPO ±6 / ±10 / ±16 / WIDE</b> que define o alcance.</li>
<li><b>MASTER TEMPO</b> — trava o tom (key lock): muda a velocidade sem alterar a afinação. Aceso, aparece MT no visor.</li>
<li><i>Erro comum:</i> mixar em WIDE. O alcance enorme faz cada milímetro valer muito; para casar batida, trabalhe em ±6.</li>
</ul>

<h3>Navegação (físico + toque)</h3>
<ul>
<li><b>Seletor rotativo</b> (gira e aperta) e <b>BACK</b> são físicos — segurando o BACK você salta ao topo da biblioteca.</li>
<li><b>TAG TRACK / REMOVE</b> é físico: põe e tira a faixa da Tag List, a fila rápida do set.</li>
<li>Na tela: <b>BROWSE</b> (segurando, busca por texto), <b>TAG LIST</b>, <b>INFO</b> (segurando, LINK INFO, mostra o que toca nos outros players), <b>MENU</b> (segurando, UTILITY) e <b>PERFORM</b> (onde ficam os hot cues, os loops e a onda grande).</li>
<li>Fontes na tela: <b>rekordbox</b> (PC/celular), <b>LINK</b> (pendrive espetado em outro player da rede) e <b>USB</b> (o pendrive deste aparelho).</li>
<li><b>USB STOP</b> — segure <b>sempre</b> antes de tirar o pendrive.</li>
</ul>

<h3>Performance (na tela)</h3>
<ul>
<li><b>SLIP</b> — durante scratch, loop ou pausa a faixa continua correndo por baixo e volta no lugar certo quando você solta.</li>
<li><b>QUANTIZE</b> — cola cue, loop e hot cue na grade de batidas.</li>
<li><b>MEMORY / DELETE</b> e <b>CUE/LOOP CALL ◄ ►</b> — gravam, apagam e chamam os pontos salvos no pendrive.</li>
<li><b>SYNC</b> e <b>MASTER</b> — sincronizam BPM e fase pela rede PRO DJ LINK.</li>
<li><b>ZOOM / GRID</b> e <b>NEEDLE SEARCH</b> — aproximam a onda e permitem pousar a reprodução em qualquer ponto da faixa, como agulha em disco.</li>
</ul>

<h2>4. Como ligar</h2>
<p>O XDJ-700 <b>não tem mixer</b>. Ele é uma fonte de som, e toda fonte de som precisa entrar em um canal.</p>
<ul>
<li><b>AUDIO OUT L/R (RCA) → entrada LINE de um canal do mixer.</b> Um cabo RCA por player. Dois XDJ-700 ocupam dois canais.</li>
<li><b>Regra que não muda: CDJ / XDJ / player digital vai em LINE. Toca-discos vai em PHONO.</b> A entrada PHONO tem um pré-amplificador com curva RIAA feito para o sinal fraquíssimo da agulha. O XDJ-700 entrega 2,0 Vrms — nível de linha, forte. Ligado em PHONO ele passa pelo pré e sai distorcido e altíssimo. Se o seu mixer tem chave LINE/PHONO no canal, ela precisa estar em <b>LINE</b>.</li>
<li><b>LINK (LAN) → switch de rede</b>, junto do outro player e do computador. É o PRO DJ LINK: até 4 aparelhos compartilham <b>um único pendrive</b> e trocam BPM, grade de batidas e informação de faixa. Configure o <b>PLAYER No.</b> igual ao número do canal em que o player entrou no mixer — se ficarem trocados, a tela mostra a informação do aparelho errado.</li>
<li><b>USB tipo A</b> → pendrive com a biblioteca exportada do rekordbox, ou celular com o rekordbox instalado.</li>
<li><b>USB tipo B</b> → computador, para usar o player como controlador MIDI/HID.</li>
<li><b>DC IN</b> → fonte externa incluída (12 V / 2 A). O XDJ-700 não liga na tomada direto; se a fonte ficar em casa, o player não sai do case.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ul>
<li>Grave um <b>hot cue no primeiro tempo</b> da faixa e volte nele duas vezes seguidas usando a tela PERFORM.</li>
<li>Ligue o <b>VINYL MODE</b>, encoste no topo do prato e confirme que a música para. Desligue e repita: o som segue.</li>
<li>Faça um <b>loop de 4 tempos</b> segurando o LOOP IN, ajuste o ponto OUT com o botão de ajuste fino e saia com RELOOP/EXIT.</li>
<li>Troque o <b>TEMPO RANGE</b> de ±16 para ±6 e tente encostar o BPM de uma faixa na outra. Sinta a diferença de resolução no fader.</li>
<li>Use o <b>NEEDLE SEARCH</b> na onda geral para pular direto para o refrão, com a música tocando.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Ligar o XDJ-700 numa entrada PHONO.</b> Sai um berro distorcido e altíssimo, e com a casa cheia você não tem tempo de descobrir onde está a chave.</li>
<li><b>Arrancar o pendrive sem segurar o USB STOP.</b> Os cues e loops são gravados no próprio pendrive; a retirada quente corrompe a biblioteca inteira.</li>
<li><b>Esquecer a fonte externa.</b> O XDJ-700 usa adaptador DC 12 V. Sem ele, não há tomada que resolva no palco.</li>
<li><b>Deixar o PLAYER No. errado no PRO DJ LINK.</b> A tela mostra o que está tocando no aparelho errado, e o beat countdown some — parece defeito, é configuração.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 123 — PIONEER XDJ-1000MK2                                                 */
/* ========================================================================= */
const MK2 = `
<h2>1. O que é o XDJ-1000MK2 e por que ele existe</h2>
<p>O <b>XDJ-1000MK2</b> é um <em>player de um deck</em> do tamanho de um CDJ — mesmo prato, mesma tela, mesma altura de tampo — só que <b>sem bandeja de CD</b>. Toda a música entra por pendrive, por celular ou pela rede.</p>
<p>Ele existe porque, lá por 2014, o CD já tinha morrido na cabine mas o CDJ-2000NXS custava o dobro. A Pioneer tirou o mecanismo óptico, manteve o resto e criou uma linha mais barata com a mesma ergonomia. O <b>MK2</b>, de 2016, é a segunda geração: herdou <b>o prato e a tela colorida de 7" do CDJ-2000NXS2</b>, ganhou navegação mais rápida, <b>saída digital</b> e — o grande diferencial da família — suporte a <b>FLAC e ALAC</b> até 48 kHz/24 bit.</p>
<p>Na hierarquia: abaixo dele está o <b>XDJ-700</b> (mesma tela, corpo bem menor); acima, o <b>CDJ-2000NXS2</b> e depois o CDJ-3000. Do outro lado do balcão, ele disputava com o Denon SC5000 Prime.</p>
<p>Onde você encontra hoje: clube de médio porte, casa noturna que não quis pagar CDJ, locadora, palco secundário de festival e cabine de rádio. Para o aluno, é o player que ensina exatamente a mesma mão que um CDJ pede.</p>

<h2>2. Ficha técnica</h2>
<p>Fonte: <b>Quick Start Guide DRH1671C</b>, tabela de especificações da pág. 11.</p>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões máximas (L × A × P)</td><td>305 × 110 × 382,5 mm</td></tr>
<tr><td>Peso</td><td>3,7 kg</td></tr>
<tr><td>Alimentação / consumo</td><td>AC 110–240 V, 50/60 Hz · 30 W (0,4 W desligado)</td></tr>
<tr><td>Tela</td><td>LCD TFT de matriz ativa, colorida, sensível ao toque, <b>7"</b> · 18 idiomas <em>(o tamanho vem da página oficial; a tabela de specs só diz "TFT de matriz ativa")</em></td></tr>
<tr><td>Prato (jog)</td><td>o mesmo prato do <b>CDJ-2000NXS2</b>, segundo a página oficial — <em>o diâmetro em mm não consta no manual nem na spec</em></td></tr>
<tr><td>Saída de áudio analógica</td><td>AUDIO OUT L/R em RCA · 2,0 Vrms (1 kHz) · 4 Hz – 20 kHz · S/N 115 dB · THD 0,010 %</td></tr>
<tr><td>Saída digital</td><td>RCA coaxial S/PDIF · 0,5 Vp-p (75 Ω) · 44,1 kHz, 24 ou 16 bit</td></tr>
<tr><td>Portas USB</td><td>Tipo A (pendrive), <b>5 V / 2,1 A</b> — o dobro do XDJ-700, aguenta HD externo · Tipo B (computador)</td></tr>
<tr><td>Rede</td><td>LAN 100Base-TX (PRO DJ LINK) — até 4 players ou notebooks</td></tr>
<tr><td>Formatos aceitos</td><td>MP3, AAC, WAV, AIFF, <b>FLAC e ALAC</b> (até 48 kHz/24 bit) — está serigrafado no próprio painel</td></tr>
<tr><td>Sistemas de arquivo do pendrive</td><td>FAT16, FAT32 e HFS+ — <b>NTFS não é suportado</b></td></tr>
<tr><td>Hot cues</td><td>8 por faixa (A a H), na tela PERFORM</td></tr>
<tr><td>Pontos salvos no pendrive</td><td>até <b>10 cue ou loop points por faixa</b></td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE — <em>o valor exato do WIDE não consta no Quick Start Guide, que é o único manual em PDF publicado para este modelo; nos irmãos XDJ-RX2 e XDJ-RR o manual diz ±100 %</em></td></tr>
<tr><td>Temperatura de trabalho</td><td>+5 °C a +35 °C · umidade 5 % a 85 % sem condensação</td></tr>
</table>

<h2>3. Controle por controle</h2>
<p>Como no XDJ-700, boa parte da operação fina acontece <b>na tela</b>: BROWSE, TAG LIST, INFO, MENU, PERFORM, LINK, USB, SLIP, MEMORY, DELETE, CUE/LOOP CALL, BEAT SYNC, MASTER, NEEDLE SEARCH e os 8 hot cues são <b>toques</b>. O que é físico é o transporte, o loop, o prato, o pitch e o bloco de navegação.</p>

<h3>Mídia e topo do painel</h3>
<ul>
<li><b>Slot USB</b> — entrada do pendrive, com 5 V / 2,1 A. É daqui que o XDJ toca sem computador, com a música preparada no rekordbox.</li>
<li><b>USB STOP</b> — <b>segure por 2 s</b> antes de tirar o pendrive. Retirar sem parar corrompe a mídia e derruba a faixa no ar.</li>
<li><b>TIME MODE / AUTO CUE</b> — um toque alterna o tempo mostrado entre <b>REMAIN</b> (o que falta) e <b>ELAPSED</b> (o que já tocou). Segurar por mais de 1 s liga e desliga o AUTO CUE, que pula o silêncio da abertura.</li>
<li><b>QUANTIZE</b> — com ele ligado, cue, hot cue, loop in/out, reverse e slip caem sempre na batida mais próxima. Exige a faixa analisada no rekordbox.</li>
<li><b>STANDBY</b> — indicador de espera; o auto standby entra sozinho depois de 4 h sem uso. A <b>chave POWER fica no painel traseiro</b>.</li>
</ul>

<h3>Navegação (bloco físico ao redor do seletor)</h3>
<ul>
<li><b>Seletor rotativo</b> — gira para andar na lista, aperta para entrar e carregar.</li>
<li><b>BACK</b> — um toque volta uma tela; segurar mais de 1 s sobe direto para a camada de cima.</li>
<li><b>TAG TRACK / REMOVE</b> — põe e tira a faixa da TAG LIST, a fila que você monta durante a festa.</li>
<li><b>TRACK FILTER / EDIT</b> — filtra pelas informações do rekordbox (tag, BPM, tonalidade). Segurando, edita o filtro.</li>
<li><b>SHORTCUT</b> — abre direto TRACK, PLAYLIST e SEARCH, ou as configurações do aparelho.</li>
<li><i>Erro comum:</i> procurar música rolando pasta com a pista cheia. Prepare TAG LIST e playlists no rekordbox; o filtro é para emergência.</li>
</ul>

<h3>Loop e reverse (físico)</h3>
<ul>
<li><b>IN / 4BEAT (IN ADJUST)</b> — marca o início do loop ao vivo; segurando, faz o loop automático de 4 tempos; com o loop ativo, entra no ajuste fino do IN.</li>
<li><b>OUT (OUT ADJUST)</b> — marca o fim e, com o loop ativo, ajusta o ponto OUT.</li>
<li><b>RELOOP / EXIT</b> — sai do loop ou volta a tocar o último loop gravado.</li>
<li><b>DIRECTION REV</b> — reprodução de trás para frente. Com SLIP ligado, a faixa continua correndo normal por baixo.</li>
</ul>

<h3>Prato e andamento (físico)</h3>
<ul>
<li><b>JOG DIAL</b> — centro faz scratch (modo VINYL); borda faz <em>pitch bend</em>. No meio dele fica o <em>jog dial display</em>, com o endereço de reprodução.</li>
<li><b>JOG MODE VINYL</b> — alterna VINYL e CDJ a cada toque. Em VINYL (aceso), encostar no topo do prato para a música.</li>
<li><b>VINYL SPEED ADJUST — TOUCH / RELEASE</b> — regula quão rápido a música <b>para ao encostar</b> e quão rápido <b>volta ao soltar</b>. É o que dá o "peso" de vinil.</li>
<li><b>TEMPO ±6 / ±10 / ±16 / WIDE</b> e o <b>TEMPO SLIDER</b>, com encaixe no centro.</li>
<li><b>MASTER TEMPO</b> — trava o tom. Aceso, aparece MT na tela.</li>
<li><b>TRACK SEARCH ◄◄ ►►</b> (troca de faixa) e <b>SEARCH ◄◄ ►►</b> (corre dentro da faixa enquanto você segura).</li>
<li><i>Erro comum:</i> mexer no VINYL SPEED ADJUST no meio do set. Ajuste antes, com calma; ele muda a sensação do prato inteiro.</li>
</ul>

<h3>Performance (na tela PERFORM)</h3>
<ul>
<li><b>8 HOT CUE (A–H)</b> — toque grava o ponto atual, toque de novo salta para ele. Ficam gravados no dispositivo e voltam na próxima vez que a faixa carregar.</li>
<li><b>BEAT LOOP</b> e <b>BEAT JUMP</b> — loops por número de tempos e saltos de 1, 2 ou 4 tempos sem perder o compasso.</li>
<li><b>SLIP</b> — durante loop, reverse, scratch ou hot cue a faixa continua correndo por baixo e volta ao lugar certo.</li>
<li><b>MEMORY / DELETE</b> e <b>CUE/LOOP CALL ◄ ►</b> — durante o loop, o CALL ◄ corta pela metade e o CALL ► dobra.</li>
<li><b>BEAT SYNC</b> e <b>BEAT SYNC MASTER</b> — alinham andamento e grade ao player marcado como MASTER na rede.</li>
<li><b>NEEDLE SEARCH</b> — toque em qualquer ponto da onda geral e a faixa pula direto para lá, como pousar a agulha no vinil.</li>
</ul>

<h2>4. Como ligar</h2>
<p>O XDJ-1000MK2 <b>não tem mixer</b>: ele é fonte, e fonte entra em canal.</p>
<ul>
<li><b>AUDIO OUT L/R (RCA) → entrada LINE de um canal do mixer.</b> Um cabo por player.</li>
<li><b>Regra que não muda: CDJ / XDJ / player digital vai em LINE; toca-discos vai em PHONO.</b> A entrada PHONO existe para o sinal fraquíssimo da agulha e aplica a curva RIAA. O XDJ-1000MK2 entrega 2,0 Vrms, nível de linha. Em PHONO, ele passa pelo pré-amplificador e sai distorcido e absurdamente alto. Confira a chave do canal antes de abrir o fader.</li>
<li><b>DIGITAL OUT (RCA coaxial, S/PDIF)</b> → entrada digital do mixer (o DJM-900NXS2 e o DJM-750MK2 têm). Vantagem real: o áudio sai do player e chega ao mixer <b>sem passar por conversão analógica</b>, o que reduz ruído em cabine cheia de fonte chaveada. Um cabo coaxial de 75 Ω, não um RCA de áudio qualquer.</li>
<li><b>LINK (LAN) → switch de rede</b> para o PRO DJ LINK: até 4 players ou notebooks compartilham um pendrive só e trocam BPM, grade e informação de faixa. Case o <b>PLAYER No.</b> com o número do canal do mixer.</li>
<li><b>USB tipo A</b> → pendrive ou HD (aqui a porta entrega 2,1 A, então HD sem fonte funciona). <b>USB tipo B</b> → computador, para MIDI/HID.</li>
<li><b>AC IN</b> → tomada direto, sem fonte externa. A chave POWER fica atrás.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ul>
<li>Grave o <b>HOT CUE A no primeiro tempo</b> da faixa e volte nele duas vezes. Depois grave o B no refrão e alterne entre os dois.</li>
<li>Ligue o <b>QUANTIZE</b>, grave um hot cue de propósito fora do tempo e confirme que ele cola na batida mais próxima.</li>
<li>Ative o <b>SLIP</b>, segure um loop de 4 tempos, solte e observe que a música retoma adiante, no lugar onde estaria.</li>
<li>Alterne o <b>TIME MODE</b> entre REMAIN e ELAPSED e diga em voz alta quanto falta para a faixa acabar — é o hábito que evita o silêncio na virada.</li>
<li>Use o <b>NEEDLE SEARCH</b> na onda geral para pular para o último minuto e volte com o TRACK SEARCH.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Puxar o pendrive sem segurar o USB STOP por 2 s.</b> Corrompe a biblioteca do rekordbox no pendrive e derruba a faixa no ar.</li>
<li><b>Levar pendrive NTFS.</b> Só FAT16, FAT32 e HFS+ montam. É o erro que faz o DJ chegar com a noite inteira preparada e não conseguir tocar nada.</li>
<li><b>Ligar o player em PHONO.</b> Volume gigante e distorção. E na primeira vez o reflexo é baixar o master — o que não resolve, porque o estrago está na entrada.</li>
<li><b>Confiar que "FLAC toca em qualquer XDJ".</b> Toca no 1000MK2; <b>não toca</b> no XDJ-700, no XDJ-RX2 nem no XDJ-RR. Se o seu set roda em vários aparelhos, exporte em AIFF ou WAV.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 124 — PIONEER XDJ-AERO                                                    */
/* ========================================================================= */
const AERO = `
<h2>1. O que é o XDJ-AERO e por que ele existe</h2>
<p>O <b>XDJ-AERO</b> é um <em>all-in-one</em> de 2012: dois decks e um mixer de dois canais no mesmo chassi. Só que ele fez uma coisa que nenhum aparelho de DJ tinha feito antes — <b>ele cria a própria rede Wi-Fi</b>. Até quatro celulares, tablets ou computadores se conectam nele e mandam música por cima do ar, sem cabo e sem pendrive.</p>
<p>Ele existe por um momento específico da história: em 2012 o celular já era a discoteca de bolso de todo mundo, e o DJ ainda precisava exportar tudo para um pendrive antes de sair de casa. O AERO cortou esse passo — você conecta o celular na rede do próprio aparelho, abre o app rekordbox e carrega no deck. Em festa de casa, o convidado carregava a música dele: era o charme e o pesadelo do equipamento.</p>
<p>Na linha do tempo da Pioneer ele é o <b>avô da família XDJ all-in-one</b>: veio antes do XDJ-RX (2015), do XDJ-RX2 (2017) e do XDJ-RR (2018). Concorria com o Numark Mixdeck e com controladores de dois decks da época. Diferente dos netos, ele <b>não tem tela colorida</b>: cada deck tem um visor azul de segmentos, e a navegação é por seletor rotativo.</p>
<p>Onde você encontra hoje: festa de casa, aniversário, escola de DJ, locação de nível básico e mesa de bar pequeno. É também um <b>mixer autônomo</b> decente — o manual diz isso com todas as letras: com as chaves em PHONO/LINE, a seção de mixer funciona como DJ mixer para dois toca-discos ou dois players externos.</p>

<h2>2. Ficha técnica</h2>
<p>Fonte: <b>Operating Instructions DRI1063</b>. <b>Atenção:</b> esse manual <em>não traz tabela de especificações</em> — não há nele dimensão, peso, resposta de frequência, sinal/ruído nem nível de entrada/saída. O que está marcado abaixo como "spec oficial" vem da especificação do produto, não do manual.</p>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões (L × P × A)</td><td>623 × 289,5 × 65 mm — <em>spec oficial do produto; não consta no manual DRI1063</em></td></tr>
<tr><td>Peso</td><td>3,8 kg — <em>spec oficial do produto; não consta no manual</em></td></tr>
<tr><td>Visor</td><td>um LCD azul de segmentos <b>por deck</b> (não é colorido e não é sensível ao toque): tempo REMAIN/ELAPSED, TEMPO em %, BPM, faixa de pitch, endereço de reprodução, loop em batidas e FX ativo</td></tr>
<tr><td>Diâmetro do prato (jog)</td><td><em>não consta no manual nem na spec oficial</em></td></tr>
<tr><td>Alimentação</td><td>fonte externa incluída (DC IN)</td></tr>
<tr><td>Porta USB (pendrive)</td><td><b>5 V / 500 mA</b> — está serigrafado no painel e o manual repete: dispositivo que puxe mais que a corrente nominal de 500 mA não funciona (HD sem fonte própria, por exemplo)</td></tr>
<tr><td>Formatos aceitos</td><td>MP3 .mp3 (MPEG-1, 16 bit, 32–320 kbps, CBR/VBR) · AAC .m4a/.aac/.mp4 (MPEG-4 AAC LC, 16 bit, 16–320 kbps) · WAV 16/24 bit · AIFF 16/24 bit — todos a 44,1 ou 48 kHz</td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE — e aqui vem uma particularidade do AERO: o manual diz que <b>o WIDE vai de −100 % a +16 %</b>, não é simétrico</td></tr>
<tr><td>Wi-Fi</td><td>rede própria do aparelho, com <b>até 4 dispositivos simultâneos</b> (celular, tablet ou computador); emparelhamento por WPS</td></tr>
<tr><td>Loop automático</td><td>knob AUTO BEAT LOOP — gira para escolher o tamanho em batidas, aperta para ligar/desligar</td></tr>
<tr><td>Efeitos</td><td>BEAT FX: TRANS, FLANGER, ECHO, ROLL · filtro contínuo por canal (passa-alta / passa-baixa) · 4 samples no SAMPLE LAUNCH</td></tr>
<tr><td>Gravação</td><td>MASTER REC grava em <b>WAV</b> no pendrive o mesmo som que sai em MASTER OUT 1 e 2</td></tr>
<tr><td>Faixa do EQ em dB</td><td><em>não consta no manual</em></td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Fonte, energia e rede</h3>
<ul>
<li><b>STANDBY / ON</b> — liga e coloca em espera. O LED acende em vermelho no standby.</li>
<li><b>WPS</b> — emparelha o AERO com o roteador apertando um botão, sem digitar senha. É o coração do Wi-Fi Music.</li>
<li><b>Fonte: rekordbox (Wi-Fi) · MIDI · USB</b> — o deck toca da biblioteca que chega pela rede, vira controlador MIDI para um software, ou toca direto do pendrive. O modo USB é o único que roda <b>sem computador nenhum</b>.</li>
<li><b>USB STOP</b> — segure por mais de 2 s antes de tirar o pendrive.</li>
<li><b>MASTER REC</b> — grava a mixagem no pendrive, em WAV.</li>
<li><i>Erro comum:</i> deixar quatro convidados conectados no Wi-Fi durante o set. O manual avisa: usar a rede para outra coisa além de carregar faixa atrapalha a performance.</li>
</ul>

<h3>Deck</h3>
<ul>
<li><b>AUTO BEAT LOOP</b> — o knob que deu fama ao AERO. <b>Gire</b> para escolher o tamanho do loop em número de batidas e <b>aperte</b> para ligar e desligar. O ponto de saída é calculado pelo BPM, então o loop nunca sai do tempo — mas o manual avisa que ele não funciona direito se o BPM não estiver aparecendo no visor.</li>
<li><b>JOG DRUM</b> — transforma o prato em instrumento: cada toque dispara e arranha o sample. <b>SAMPLE LAUNCH (BANK)</b> dispara um dos 4 samples; segurando mais de 1 s, troca de banco.</li>
<li><b>Jog dial</b> — em modo VINYL, girar segurando o topo faz scratch; girar a borda faz <em>pitch bend</em>.</li>
<li><b>TEMPO RANGE</b>, <b>MASTER TEMPO</b> (trava o tom) e o <b>fader TEMPO</b>.</li>
<li><b>SYNC</b> e o indicador <b>MASTER</b> — casam o andamento com o deck de referência.</li>
<li><b>PLAY/PAUSE</b>, <b>CUE</b> e <b>SHIFT</b> — com SHIFT + CUE a faixa volta ao começo (ou ao ponto de auto cue).</li>
<li><b>TIME / AUTO CUE</b> e <b>INFO / UTILITY</b> — o primeiro alterna REMAIN e ELAPSED e, segurando, liga o auto cue; o segundo mostra os dados da faixa e, segurando, abre o UTILITY.</li>
<li><b>BACK / TOP</b> e <b>seletor rotativo</b> — navegação de pasta. Segurando o BACK, salta ao topo da biblioteca.</li>
<li><i>Erro comum:</i> segurar SHIFT e girar o prato achando que é scratch. Nessa combinação o AERO faz varredura rápida da faixa, não scratch.</li>
</ul>

<h3>Mixer</h3>
<ul>
<li><b>Chave DECK / PHONO / LINE por canal</b> — o player interno, um toca-discos ou um aparelho de linha. Com as duas em PHONO/LINE, o AERO vira mixer de DJ comum.</li>
<li><b>TRIM</b> — ganho de entrada; ajuste antes do fader, com o pico no âmbar. <b>EQ HI / MID / LOW</b> por canal.</li>
<li><b>FILTER</b> — filtro contínuo: para a esquerda, passa-baixa (abafa); para a direita, passa-alta (tira o corpo). É o efeito de transição mais usado da noite.</li>
<li><b>MASTER LEVEL</b> e o botão <b>MASTER</b>, que troca o que o medidor mostra: apagado, os canais 1 e 2; aceso, a saída master. Ao lado, <b>CUE dos canais</b>, <b>CUE MASTER</b>, <b>HEADPHONES MIXING</b> e <b>HEADPHONES LEVEL</b>.</li>
<li><b>MIC LEVEL</b>, <b>MIC EQ</b> e <b>MIC ON/OFF</b> — e não esqueça: o <b>MIC ATT.</b> fica na <b>traseira</b>, e é ele que se ajusta antes da festa, com o microfone que você vai usar.</li>
<li><b>AUTO MIX</b> — emenda as faixas de uma playlist automaticamente. Só funciona com <b>os dois canais em DECK</b>; em PHONO/LINE o auto mix não roda.</li>
<li><b>CHANNEL FADER</b>, <b>CROSSFADER</b> e a chave <b>CROSS F. CURVE</b> (THRU / suave / corte).</li>
<li><i>Erro comum:</i> "o crossfader não faz nada". Quase sempre a chave de curva está em <b>THRU</b>, que é a posição que desliga o crossfader.</li>
</ul>

<h2>4. Como ligar</h2>
<p><b>O AERO tem mixer embutido</b> — não existe mixer externo nessa montagem. A saída dele já é a saída da casa. E há uma diferença importante em relação aos XDJ modernos: <b>a chave LINE/PHONO fica no painel traseiro</b>, não no tampo.</p>
<ul>
<li><b>MASTER OUT 1 (TRS 6,35 mm)</b> → caixas ativas. O manual diz que essa saída aceita ligação balanceada ou desbalanceada. É a saída para cabo longo.</li>
<li><b>MASTER OUT 2 (RCA)</b> → amplificador ou componente com entrada RCA. Cabo curto.</li>
<li><b>PHONES</b> (painel frontal) → fone. Há duas entradas, 6,3 mm e 3,5 mm — o manual pede para <b>não usar as duas ao mesmo tempo</b>, porque conectar ou tirar uma faz o volume da outra dar um salto.</li>
<li><b>Não existe saída BOOTH</b> no AERO. Se a cabine precisa de monitor próprio, ele vai ter que sair do MASTER 2 e ser controlado fora do aparelho.</li>
</ul>
<p><b>As entradas, e a regra que não muda:</b></p>
<ul>
<li><b>PHONO1/LINE1</b> e <b>PHONO2/LINE2</b> (RCA) — um par por canal. E a chave que decide o que eles são está <b>atrás</b>: <b>LINE</b> para CDJ, XDJ, player digital ou celular; <b>PHONO</b> para toca-discos com cápsula MM.</li>
<li><b>Por que não dá para trocar:</b> a agulha entrega um sinal fraquíssimo e com a curva RIAA gravada no disco. A posição PHONO liga o pré-amplificador que amplifica e desfaz essa curva. Toca-discos em LINE sai baixo, fino e sem grave; CDJ em PHONO sai distorcido e altíssimo.</li>
<li><b>SIGNAL GND</b> — o fio terra do toca-discos vai aqui. Sem ele, zumbido de 60 Hz na pista inteira.</li>
<li><b>MIC</b> (traseira) + <b>MIC ATT.</b> — ajuste o ATT. com o microfone conectado, antes do evento; durante o set use só o MIC LEVEL do tampo.</li>
<li><b>USB tipo B</b> → computador, para MIDI ou para o software de DJ.</li>
<li><b>DC IN</b> → fonte externa incluída. Use o <b>cord hook</b>: se o cabo da fonte ou o USB for puxado durante a música, o som cai na hora.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ul>
<li>Gire o <b>AUTO BEAT LOOP</b> para 4 tempos e aperte para ligar; depois gire para 1 tempo com o loop rodando e ouça o corte encurtar.</li>
<li>Grave um <b>ponto de CUE no primeiro tempo</b> e volte nele duas vezes com o botão CUE (back-cue).</li>
<li>Ligue o <b>JOG DRUM</b> e dispare o sample batendo no prato; depois troque para <b>SAMPLE LAUNCH</b> e dispare o mesmo som pelo pad.</li>
<li>Faça uma virada usando <b>só o knob FILTER</b> do canal 2, sem tocar no crossfader nem no fader.</li>
<li>Troque a <b>chave do canal 1 de DECK para LINE</b> e confirme que o player interno some do canal — é exatamente o que acontece quando alguém mexe nessa chave sem querer no meio do set.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Contar com o Wi-Fi para tocar a noite inteira.</b> São 4 dispositivos no máximo, e a rede é a do próprio aparelho. Em salão cheio, com dezenas de celulares no ambiente, a carga fica lenta. Leve o pendrive.</li>
<li><b>Ligar HD externo sem fonte na USB.</b> A porta do AERO entrega <b>500 mA</b>. HD que puxa mais que isso não é reconhecido — e você vai passar quinze minutos achando que o HD quebrou.</li>
<li><b>Trocar LINE por PHONO na traseira.</b> Como a chave fica atrás, ninguém confere. Toca-discos em LINE some; player em PHONO estoura.</li>
<li><b>Esquecer o MIC ATT. no mínimo.</b> O ajuste é traseiro e se faz antes do evento. Descobrir no meio do discurso do noivo que o microfone está mudo custa caro.</li>
<li><b>Deixar o CROSS F. CURVE em THRU.</b> O crossfader para de funcionar e o DJ acha que quebrou.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 125 — PIONEER XDJ-RR                                                      */
/* ========================================================================= */
const RR = `
<h2>1. O que é o XDJ-RR e por que ele existe</h2>
<p>O <b>XDJ-RR</b> é um <em>all-in-one</em> de <b>5,2 kg</b>: dois decks e um mixer de dois canais num chassi só, com tela colorida de 7" no meio. Chegou em <b>2018</b> para ocupar o degrau vazio entre o equipamento de casa e o de clube.</p>
<p>Ele herda a cara, as curvas de EQ e de channel fader do <b>DJM-900NXS2</b> e o jeito de trabalhar do CDJ, mas corta o que encarece: <b>sem entrada PHONO, sem saída BOOTH, tela não sensível ao toque</b> e 4 pads por deck em vez de 8.</p>
<p>Na família: abaixo dele, o <b>XDJ-AERO</b> (2012) e os controladores DDJ; acima, o <b>XDJ-RX2</b> — 4 kg mais pesado, com tela touch, 8 pads, dois microfones, duas entradas LINE/PHONO e saída de booth. Fora da casa, disputava com o Denon Prime 2.</p>
<p>Onde você encontra hoje: bar, formatura, aniversário grande, locadora de nível intermediário e — muito — na casa de quem estuda. É o all-in-one que mais se carrega no ombro.</p>

<h2>2. Ficha técnica</h2>
<p>Fonte: <b>Quick Start Guide DRH1516E</b> e <b>Operating Instructions DRI1568B</b>.</p>
<table>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões · peso · alimentação</td><td>625 × 74,2 × 388,5 mm · 5,2 kg · fonte externa incluída (DC IN)</td></tr>
<tr><td>Tela</td><td>LCD colorida de <b>7"</b> — <b>não é sensível ao toque</b>; toda a navegação é pelo seletor rotativo e pelos botões <em>(o tamanho vem da página oficial)</em></td></tr>
<tr><td>Diâmetro do prato (jog)</td><td><em>não consta no manual nem na spec oficial</em></td></tr>
<tr><td>Amostragem / conversores</td><td>44,1 kHz · A/D e D/A de 24 bit · resposta 20 Hz – 20 kHz</td></tr>
<tr><td>Relação sinal/ruído · THD</td><td>USB 112 dB · AUX (LINE) 96 dB · AUX (PORTABLE) 90 dB · MIC 81 dB · THD do USB 0,003 %</td></tr>
<tr><td>Nível / impedância de entrada</td><td>AUX (LINE) −12 dBu/47 kΩ · AUX (PORTABLE) −24 dBu/47 kΩ · MIC −57 dBu/3 kΩ</td></tr>
<tr><td>Saídas (nominal / máxima)</td><td>MASTER 1 XLR +6 dBu (máx. +24 dBu) · MASTER 2 RCA +2 dBu (máx. +20 dBu) · PHONES +8 dBu / 32 Ω</td></tr>
<tr><td>EQ</td><td>Canal: HI/MID/LOW de −∞ a +6 dB (20 kHz / 1 kHz / 20 Hz), alternando EQUALIZER / ISOLATOR no UTILITY · Microfone: HI ±12 dB (10 kHz) e LOW ±12 dB (100 Hz)</td></tr>
<tr><td>Entradas</td><td><b>MIC × 1</b> (XLR ou TRS 6,35 mm) · <b>AUX × 1</b> (RCA) — <b>não há entrada PHONO nem LINE de canal</b></td></tr>
<tr><td>Saídas / portas</td><td>MASTER 1 XLR · MASTER 2 RCA · PHONES 6,35 mm + 3,5 mm · USB tipo A × 2 (5 V/1 A) · USB tipo B × 1 — <b>não há saída BOOTH</b></td></tr>
<tr><td>Formatos aceitos</td><td>MP3 (MPEG-1 Layer 3, 32–320 kbps) · AAC .m4a/.aac/.mp4 (MPEG-4 e MPEG-2 AAC LC, 16–320 kbps) · WAV e AIFF 16/24 bit — em 32, 44,1 ou 48 kHz. <b>Não toca FLAC nem ALAC.</b></td></tr>
<tr><td>Sistemas de arquivo do pendrive</td><td>FAT16, FAT32 e HFS+ — <b>NTFS não é suportado</b></td></tr>
<tr><td>Alcance do fader TEMPO</td><td>±6 · ±10 · ±16 · WIDE (WIDE = ±100 %; em −100 % a reprodução para). Passo de 0,02 % em ±6, 0,05 % em ±10 e ±16, 0,5 % em WIDE</td></tr>
<tr><td>Pads · gravação</td><td><b>4 pads por deck</b> · 8 hot cues por faixa, em <b>2 bancos de 4</b> (A–D e, com SHIFT, E–H) · MASTER REC em WAV no pendrive do slot <b>USB 2</b> (cerca de 90 min por GB)</td></tr>
<tr><td>Efeitos</td><td>SOUND COLOR FX: DUB ECHO, PITCH, NOISE, FILTER · BEAT FX: ECHO, REVERB, FLANGER (chave de 3 posições), aplicáveis ao canal 1, ao 2 ou ao MASTER</td></tr>
</table>

<h2>3. Controle por controle</h2>

<h3>Fonte, mídia e navegação</h3>
<ul>
<li><b>SOURCE: rekordbox · MIDI · USB 1 · USB 2</b> — em USB o RR toca sozinho; em rekordbox conversa com o computador (Link Export); em MIDI vira controlador.</li>
<li><b>BROWSE / TAG LIST / INFO / MENU</b> — navegação, fila de marcadas, dados da faixa e menu. Segurando o MENU você entra no <b>UTILITY</b>: curva do fader, EQUALIZER × ISOLATOR e brilho do LCD.</li>
<li><b>DECK 1/2</b> escolhe o deck de destino; <b>LOAD 1</b> e <b>LOAD 2</b> carregam. <b>Seletor rotativo</b> (gira e aperta), <b>BACK</b> e <b>TAG TRACK / REMOVE</b> completam o bloco.</li>
<li><b>TIME MODE / AUTO CUE</b> — alterna REMAIN e ELAPSED; segurando, liga o auto cue.</li>
<li><b>QUANTIZE</b> — cue, loop e hot cue grudam na grade (faixa analisada no rekordbox).</li>
<li><b>USB 1/2 STOP</b> — segure 2 s antes de tirar o pendrive. <b>MASTER REC (WAKE UP)</b> grava o set em WAV no pendrive do <b>USB 2</b> e acorda o aparelho do modo de economia; <b>TRACK MARK</b> divide a gravação em faixas.</li>
<li><i>Erro comum:</i> procurar toque na tela. O RR <b>não é touch</b> — quem vem do RX2 perde tempo cutucando o vidro.</li>
</ul>

<h3>Deck</h3>
<ul>
<li><b>PLAY/PAUSE</b> e <b>CUE</b> — em modo VINYL a pausa freia como um disco. Parado num ponto novo o CUE grava ali; tocando, volta ao cue e pausa; segurando, toca a partir do cue.</li>
<li><b>JOG MODE VINYL / CDJ</b> — em VINYL (aceso, azul) tocar o topo do prato para a música e permite arranhar; em CDJ o prato só faz <em>pitch bend</em>. <b>TRACK SEARCH ◄ ►</b> troca de faixa e <b>SEARCH ◄◄ ►►</b> varre dentro dela.</li>
<li><b>LOOP IN / 4BEAT</b>, <b>LOOP OUT</b> e <b>RELOOP / EXIT</b> — loop manual, e automático de 4 tempos com SHIFT.</li>
<li><b>CUE/LOOP CALL ◄ ►</b> — chamam os pontos salvos e, durante o loop, cortam (1/2X) e dobram (2X). <b>MEMORY</b> grava no pendrive; <b>DELETE</b> apaga.</li>
<li><b>TEMPO RANGE</b>, <b>MASTER TEMPO</b>, <b>fader TEMPO</b>, <b>SYNC</b> e <b>MASTER</b> — com SHIFT, o MASTER faz <b>Instant Doubles</b>: copia a faixa do outro deck na mesma posição.</li>
<li><b>SHIFT</b> — a segunda camada de tudo. Com só 4 pads, é ele que abre o segundo banco de hot cues.</li>
<li><i>Erro comum:</i> achar que o RR só tem 4 hot cues. Tem 8 — os outros quatro estão no HOT CUE2, com SHIFT.</li>
</ul>

<h3>Pads (4 por deck, 4 modos)</h3>
<ul>
<li><b>HOT CUE</b> (com SHIFT, HOT CUE2) — cada pad grava e salta um ponto; os pontos ficam no pendrive junto da faixa.</li>
<li><b>BEAT LOOP</b> — loops automáticos por número de tempos (1, 2, 4, 8…) pelo BPM; <b>SLIP LOOP</b> é o mesmo com a música correndo por baixo; <b>BEAT JUMP</b> salta blocos de tempos sem perder o compasso.</li>
<li><i>Erro comum:</i> gravar hot cue durante scratch. O manual avisa que a reprodução pode parar por um instante.</li>
</ul>

<h3>Mixer e efeitos</h3>
<ul>
<li><b>TRIM</b> por canal — o <em>gain staging</em>: pico no âmbar, nunca no vermelho. Igualar os TRIMs é o que faz as duas músicas soarem no mesmo volume.</li>
<li><b>EQ/ISO HI / MID / LOW</b> — de −∞ a +6 dB; em ISOLATOR o fim de curso mata a banda. <b>COLOR</b> por canal dosa o SOUND COLOR FX escolhido (<b>DUB ECHO, PITCH, NOISE, FILTER</b>) — o efeito vale para os dois canais, o knob é individual.</li>
<li><b>CUE 1 / CUE 2</b>, <b>HEADPHONES MIXING</b> e <b>HEADPHONES LEVEL</b>. <b>CHANNEL FADER</b> (curva ajustável no UTILITY), <b>CROSSFADER</b>, chave <b>CROSS FADER CURVE</b> e <b>MASTER LEVEL</b>.</li>
<li><b>BEAT FX</b> — chave de <b>ECHO / REVERB / FLANGER</b>, chave de destino <b>1 / 2 / MASTER</b>, botões <b>BEAT ◄ ►</b> para a divisão (segurando, AUTO e TAP), <b>LEVEL/DEPTH</b> e <b>ON/OFF</b>. Detalhe do manual: o <b>quantize não vale para o REVERB</b>.</li>
<li><b>AUX</b> — chave LINE / OFF / PORTABLE e <b>AUX TRIM</b>. <b>MIC</b> — chave OFF / ON / TALK OVER (a música abaixa sozinha quando você fala), <b>MIC LEVEL</b> e EQ de HI e LOW.</li>
<li><i>Erro comum:</i> mandar o BEAT FX para o MASTER e esquecer ligado. Todo o set passa a sair com efeito, inclusive o microfone.</li>
</ul>

<h2>4. Como ligar</h2>
<p><b>O RR já tem mixer dentro</b> — a saída dele vai direto para a caixa ou para o amplificador, sem mixer externo. Mas repare no que ele <b>não tem</b>, porque é aí que a montagem muda:</p>
<ul>
<li><b>MASTER 1 (XLR, balanceado)</b> → amplificador, processador ou caixas ativas. O manual avisa: use o MASTER 1 <b>só em entrada balanceada</b> e nunca ligue nele um cabo que forneça <em>phantom power</em>.</li>
<li><b>MASTER 2 (RCA, desbalanceado)</b> → o que só tem RCA, com cabo curto. <b>PHONES</b> (frontal) → fone, 6,35 mm ou 3,5 mm.</li>
<li><b>Não existe BOOTH.</b> Monitor de cabine sai do MASTER 2, com volume controlado fora. É o motivo mais comum de trocar um RR por um RX2.</li>
</ul>
<p><b>As entradas — e a diferença que pega todo mundo:</b></p>
<ul>
<li><b>O XDJ-RR não tem entrada PHONO</b> nem entrada LINE de canal. Os dois canais do mixer são alimentados <b>só pelos decks internos</b> (pendrive ou rekordbox). Toca-discos <b>não entra</b> neste aparelho — nem com adaptador, porque não há pré-amplificador de agulha.</li>
<li>A única entrada externa é o <b>AUX</b> (RCA), com chave <b>LINE / OFF / PORTABLE</b>: em <b>LINE</b> (−12 dBu) entra CDJ ou aparelho de linha; em <b>PORTABLE</b> (−24 dBu) entra celular. Celular baixo demais quase sempre é a chave em LINE.</li>
<li><b>Guarde a regra mesmo assim</b>, porque ela vale no dia em que você usar um mixer de verdade: <b>CDJ / XDJ / player digital vai em LINE; toca-discos vai em PHONO.</b> O sinal da agulha é fraquíssimo e vem com a curva RIAA — precisa do pré do canal PHONO. Trocar não funciona: toca-discos em LINE some, player em PHONO estoura.</li>
<li><b>MIC</b> — <b>um só</b>, combo XLR ou TRS 6,35 mm. Evento com cerimonialista e noivo vai exigir um mixerzinho de microfone antes.</li>
<li><b>USB tipo A × 2</b> — dois pendrives ao mesmo tempo, e o slot 2 é onde o MASTER REC grava. <b>USB tipo B</b> → computador. <b>DC IN</b> → fonte externa incluída; use o gancho de cabo, porque puxão na fonte derruba o set.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ul>
<li>Grave um <b>hot cue no primeiro tempo</b> no pad 1 e volte nele duas vezes. Depois segure <b>SHIFT</b> e grave outro ponto no <b>HOT CUE2</b> do mesmo pad — são pontos diferentes.</li>
<li>Ponha o <b>JOG MODE em VINYL</b>, encoste no topo do prato e confirme que a música para; troque para CDJ e repita.</li>
<li>Faça um <b>BEAT LOOP de 4 tempos</b> no pad 3, corte para 1/2X com o CALL ◄ e saia com RELOOP/EXIT.</li>
<li>Selecione <b>FILTER</b> no SOUND COLOR FX e faça a entrada do canal 2 só com o knob COLOR.</li>
<li>Ligue o <b>BEAT FX em ECHO</b> no canal 1, ponha 1/1 e derrube o fader — a cauda do eco tem que continuar.</li>
</ul>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Fechar contrato com toca-discos achando que o RR aceita.</b> Não aceita: não há entrada PHONO — e descobrir isso no evento não tem conserto.</li>
<li><b>Prometer monitor de cabine.</b> Não há saída BOOTH: o monitor sai do MASTER 2 e o volume da cabine anda junto com o da pista.</li>
<li><b>Levar pendrive NTFS ou faixa em FLAC.</b> O RR lê FAT16, FAT32 e HFS+ e toca MP3, AAC, WAV e AIFF; FLAC e ALAC <b>não tocam</b>. E nunca arranque o pendrive sem segurar o USB STOP por 2 s — cues e loops moram nele.</li>
<li><b>Contar com dois microfones.</b> O RR tem <b>um</b> — em casamento e formatura isso é o primeiro problema da noite.</li>
</ul>
`.trim();

/* ========================================================================= */
const AULAS = [
  { id: 'd1a00000-0000-4000-9000-000000000101', nome: 'Pioneer XDJ-RX2', html: RX2 },
  { id: 'd1a00000-0000-4000-9000-000000000122', nome: 'Pioneer XDJ-700', html: X700 },
  { id: 'd1a00000-0000-4000-9000-000000000123', nome: 'Pioneer XDJ-1000MK2', html: MK2 },
  { id: 'd1a00000-0000-4000-9000-000000000124', nome: 'Pioneer XDJ-AERO', html: AERO },
  { id: 'd1a00000-0000-4000-9000-000000000125', nome: 'Pioneer XDJ-RR', html: RR },
];

const SO_CONTAR = process.argv.includes('--contar');

for (const a of AULAS) {
  if (SO_CONTAR) {
    console.log(`${a.nome.padEnd(22)} ${String(a.html.length).padStart(6)} chars`);
    continue;
  }
  const r = await fetch(`${REST}/lessons?id=eq.${a.id}&select=id,titulo`, {
    method: 'PATCH',
    headers: H,
    body: JSON.stringify({ conteudo_rico: a.html }),
  });
  const body = await r.text();
  if (!r.ok) {
    console.error(`x ${a.nome}: HTTP ${r.status} - ${body}`);
    process.exitCode = 1;
    continue;
  }
  console.log(`ok ${a.nome.padEnd(22)} ${String(a.html.length).padStart(6)} chars  ${body}`);
}
