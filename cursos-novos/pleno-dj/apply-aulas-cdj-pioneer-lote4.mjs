/**
 * apply-aulas-cdj-pioneer-lote4.mjs
 *
 * Reescreve o conteudo_rico de 4 aulas de equipamento do Pleno — DJ:
 *   113 Pioneer CDJ-850 · 114 Pioneer CDJ-900NXS
 *   115 Pioneer CDJ-2000NXS2 · 116 Pioneer CDJ-3000
 *
 * FONTES (REGRA 2 — nada inventado):
 *  1) Spec oficial Pioneer DJ (paginas "Specifications" de cada modelo,
 *     recuperadas integralmente pelo Internet Archive):
 *       CDJ-850     -> pioneerdj.com/en/product/player/archive/cdj-850/black/specifications/
 *       CDJ-900NXS  -> .../archive/cdj-900nxs/black/specifications/
 *       CDJ-2000NXS2-> .../player/cdj-2000nxs2/black/specifications/
 *       CDJ-3000    -> .../player/cdj-3000/black/specifications/  (+ pagina viva de produto)
 *  2) Os proprios simuladores da aula (campos k/d, ja tirados do manual oficial
 *     por quem construiu a replica) em SMU-PRO/simuladores/dj/pioneer/.
 *
 * Nada de numero chutado: o que nao aparece na spec vai escrito como
 * "nao consta na spec oficial".
 *
 * SO faz PATCH de conteudo_rico. Nao toca em id, module_id, ordem nem ai_animations.
 */
import fs from 'node:fs';
import path from 'node:path';

const REST = 'https://pshynylvvkhhohftouoe.supabase.co/rest/v1';
const KEY = fs.readFileSync(path.resolve('D:/Show smu producoes/SMU-PRO/.local/svckey'), 'utf8').trim();

/* ========================================================================= */
/* 113 — PIONEER CDJ-850                                                     */
/* ========================================================================= */
const CDJ850 = `
<h2>1. O que é e por que existe</h2>
<p>O <strong>Pioneer CDJ-850</strong> nasceu em 2010, no mesmo fôlego em que a Pioneer lançou o CDJ-2000, o CDJ-900 e o software <strong>rekordbox</strong>. O problema que ele resolveu: naquele momento, quem quisesse tocar de pen drive com a biblioteca organizada em casa — playlists prontas, cue e loop gravados, BPM analisado — precisava comprar um player de topo de linha.</p>
<p>O CDJ-850 pegou a <em>lógica</em> do topo de linha e desceu ela de preço: mesmo <strong>prato de 206 mm</strong>, mesmo seletor rotativo, BROWSE, TAG LIST, memória de cue/loop e rekordbox. O que não tem é tela colorida (o visor é de <strong>3 linhas de texto</strong>) e a rede <strong>PRO DJ LINK</strong> — não existe entrada LAN. Cada player precisa do próprio pen drive, ou você liga o aparelho no computador pela USB-B.</p>
<p>De preço ele brigava com os players intermediários da Denon e da Numark da época e, dentro de casa, com o CDJ-900. Hoje você encontra o CDJ-850 em <strong>escola de DJ, locadora, bar, lounge, festa pequena e como par reserva</strong>. É excelente para aprender: quem domina o CDJ-850 senta em qualquer CDJ moderno e reconhece o caminho.</p>

<h2>2. Ficha técnica</h2>
<p>Da <strong>spec oficial Pioneer DJ do CDJ-850</strong>. O que não aparece lá vai marcado como ausente — não é chute.</p>
<table>
<tbody>
<tr><td><strong>Dimensões (L × A × P)</strong></td><td>305 mm × 105,5 mm × 364,4 mm</td></tr>
<tr><td><strong>Peso</strong></td><td>3,3 kg</td></tr>
<tr><td><strong>Formatos de áudio</strong></td><td>MP3 (MPEG-1 32–320 kbps / MPEG-4 16–160 kbps), AAC, WAV, AIFF</td></tr>
<tr><td><strong>Mídias que ele toca</strong></td><td>Drive óptico (CD, CD-R/RW) e dispositivos USB (pen drive, HD externo)</td></tr>
<tr><td><strong>Saídas</strong></td><td>1 ANALOGUE (RCA) · 1 CONTROL (mini-jack)</td></tr>
<tr><td><strong>Saída digital</strong></td><td>Não tem — a spec lista só a saída analógica e o CONTROL</td></tr>
<tr><td><strong>Rede PRO DJ LINK (LAN)</strong></td><td>Não consta na spec — o CDJ-850 não faz rede entre players</td></tr>
<tr><td><strong>Nível de saída de áudio</strong></td><td>2,0 Vrms (1 kHz, 0 dB)</td></tr>
<tr><td><strong>Resposta de frequência</strong></td><td>4 – 20.000 Hz</td></tr>
<tr><td><strong>Sinal/ruído e distorção</strong></td><td>&gt; 115 dB (JEITA) · &lt; 0,003 % (JEITA)</td></tr>
<tr><td><strong>Visor principal</strong></td><td>3 linhas de texto (+ barra de endereço e display no prato)</td></tr>
<tr><td><strong>Prato (jog)</strong></td><td>206 mm, sensível ao toque, modos CDJ e VINYL</td></tr>
<tr><td><strong>Alcance de pitch (CD)</strong></td><td>±6 % · ±10 % · ±16 % · ±100 % (WIDE)</td></tr>
<tr><td><strong>Alcance de pitch (MP3)</strong></td><td>±6 % · ±10 % · ±16 % — <strong>o WIDE não vale para MP3</strong> na spec oficial</td></tr>
<tr><td><strong>Passo do pitch</strong></td><td>0,02 % em ±6 % · 0,05 % em ±10 % e ±16 % · 0,5 % em WIDE · busca por quadro 1/75 s</td></tr>
<tr><td><strong>Outros</strong></td><td>Controle MIDI (pela USB-B), anti-vibração, Resume, Auto Standby, Master Tempo, contador de BPM</td></tr>
</tbody>
</table>

<h2>3. Controle por controle</h2>

<h3>Transporte — o que faz a música andar</h3>
<ul>
<li><strong>PLAY / PAUSE</strong> — toca e pausa. Em modo VINYL a pausa <em>freia</em> o prato como um toca-discos; em modo CDJ corta seco.</li>
<li><strong>CUE</strong> — o coração do CDJ. Parado num ponto novo, ele <em>grava</em> o cue ali. Tocando, ele <em>volta</em> ao cue e pausa (back-cue). <em>Quando usa:</em> para deixar a próxima faixa "armada" no primeiro tempo enquanto a atual toca. <em>Erro comum:</em> apertar CUE com a música tocando achando que vai marcar ponto novo — ele volta ao antigo e você perde a mão.</li>
<li><strong>SEARCH ◄◄ / ►►</strong> — busca rápida <em>dentro</em> da faixa, enquanto segurado.</li>
<li><strong>TRACK SEARCH ◄ / ►</strong> — faixa anterior / próxima. Segurando, corre a lista.</li>
<li><strong>DIRECTION — REV</strong> — toca de trás para frente. Aceso em vermelho = reverso ligado. <em>Erro comum:</em> esquecer o REV aceso e voltar do fone para o ar com a música ao contrário.</li>
</ul>

<h3>O prato e a velocidade</h3>
<ul>
<li><strong>Jog wheel (206 mm)</strong> — <em>centro</em> = scratch e parada (só em modo VINYL); <em>borda</em> = pitch bend, o empurrão que casa a batida sem mudar o pitch.</li>
<li><strong>JOG MODE (VINYL / CDJ)</strong> — em <strong>VINYL</strong> encostar no topo do prato para a música; em <strong>CDJ</strong> o prato só faz pitch bend. <em>Erro comum:</em> apoiar a mão no prato em modo VINYL enquanto conversa — a música para no ar.</li>
<li><strong>VINYL SPEED ADJUST (TOUCH/RELEASE)</strong> — regula a frenagem e a retomada do prato: à esquerda para e volta seco, à direita imita a inércia do vinil.</li>
<li><strong>TEMPO (fader de pitch)</strong> — muda a velocidade dentro do alcance escolhido. <strong>Atenção:</strong> no CDJ-850 o <strong>−</strong> fica em cima e o <strong>+</strong> embaixo — puxar para perto de você <em>acelera</em>. Olhe a marcação impressa ao lado do fader.</li>
<li><strong>±RANGE (±6 / ±10 / ±16 / WIDE)</strong> — ±6 % é o mais fino e é onde se mixa de verdade; WIDE (±100 %, só em CD) é efeito. <em>Erro comum:</em> tentar casar batida em ±16 % — o fader fica nervoso demais.</li>
<li><strong>MASTER TEMPO</strong> — trava o tom: muda a velocidade sem alterar a afinação. Aceso = ligado.</li>
</ul>

<h3>Loop</h3>
<ul>
<li><strong>LOOP IN / CUE</strong> e <strong>LOOP OUT</strong> — marcam início e fim do loop ao vivo; a faixa passa a repetir o trecho. As etiquetas <em>IN ADJUST</em> e <em>OUT ADJUST</em> acendem para ajuste dos pontos.</li>
<li><strong>RELOOP / EXIT</strong> — sai do loop ou refaz o último loop gravado.</li>
<li><strong>AUTO BEAT LOOP 1 · 2 · 4 · 8</strong> — loop automático de 1, 2, 4 ou 8 tempos, calculado pelo BPM; você não marca nada. O <strong>4</strong> (um compasso) é o mais usado para segurar a base durante a mixagem.</li>
<li><strong>BEAT SELECT</strong> — troca a escala desses quatro botões para <strong>1/16 · 1/8 · 1/4 · 1/2</strong> de tempo: loops curtíssimos, efeito de roll.</li>
<li><strong>MEMORY · CUE/LOOP CALL ◄ ► · DELETE</strong> — gravam, chamam e apagam pontos de cue e loop na mídia. <em>Erro comum:</em> apagar sem olhar o visor e perder a entrada da faixa.</li>
</ul>

<h3>Fonte, navegação e visor</h3>
<ul>
<li><strong>SOURCE — PC / USB / DISC</strong> — de onde a música vem: computador pela USB-B, pen drive do painel de cima, ou CD.</li>
<li><strong>Entrada USB (5 V, 500 mA)</strong> e <strong>USB STOP</strong> — o pen drive entra em cima; o USB STOP desmonta a mídia com segurança antes de puxar.</li>
<li><strong>Seletor rotativo</strong> — gire para andar na lista, aperte para entrar/carregar. É a navegação do aparelho.</li>
<li><strong>BROWSE · TAG LIST · INFO · MENU (UTILITY) · BACK</strong> — abre pastas e playlists; mostra a fila marcada; mostra BPM, tom e taxa de bits; abre as preferências (AUTO CUE, ajuste do jog, brilho); volta um nível.</li>
<li><strong>TAG TRACK / REMOVE</strong> — põe e tira a faixa da TAG LIST: o jeito rápido de montar a fila da noite.</li>
<li><strong>TIME MODE / AUTO CUE</strong> — alterna o visor entre <strong>REMAIN</strong> e <strong>ELAPSED</strong>. Segurando, liga/desliga o AUTO CUE, que pula o silêncio do começo da faixa.</li>
<li><strong>DISC EJECT ⏏</strong> — só com a reprodução parada; é proteção contra cortar o som no ar.</li>
<li><strong>STANDBY</strong> — a chave POWER fica no <strong>painel traseiro</strong>; em cima existe só o LED de STANDBY.</li>
</ul>

<h2>4. Como ligar</h2>
<p>A regra que não muda em cabine nenhuma: <strong>player digital (CDJ, XDJ) vai em LINE. Toca-discos vai em PHONO.</strong> A entrada PHONO tem um pré-amplificador com equalização RIAA — ela existe para levantar o sinal fraquíssimo da agulha. Se você põe o CDJ ali, o som sai estourado, sujo e com o grave e o agudo torcidos. Se você põe o toca-discos no LINE, quase não sai som. Não é preferência: é circuito.</p>
<ul>
<li><strong>AUDIO OUT (RCA L/R)</strong> → entrada <strong>LINE</strong> (ou CD) de um canal do mixer, com a chave <strong>LINE/PHONO</strong> daquele canal em <strong>LINE</strong>.</li>
<li><strong>CONTROL (mini-jack)</strong> → tomada CONTROL do mesmo canal. É por esse cabo fino que funciona o <strong>fader start</strong>: abrir o fader dá play no player, fechar volta ao cue. O cabo vem na caixa.</li>
<li><strong>USB-B (traseira)</strong> → computador: toca a biblioteca do rekordbox direto do PC e usa o aparelho como controlador MIDI. <strong>USB-A (em cima)</strong> → pen drive ou HD com a biblioteca exportada.</li>
<li><strong>Não existe LAN nem saída digital no CDJ-850.</strong> Dois CDJ-850 não conversam entre si: cada um precisa do seu próprio pen drive (ou os dois ligados no mesmo computador).</li>
</ul>
<p>Cabine típica: player esquerdo em RCA no canal 1 (LINE), player direito no canal 3 (LINE), os dois cabos CONTROL nos respectivos canais, mixer no MASTER da PA e o BOOTH na caixa de retorno.</p>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ol>
<li>Dê <strong>PLAY</strong>, deixe correr uns segundos e aperte <strong>CUE</strong>: a música volta e pausa no ponto de partida. Repita duas vezes até a mão pegar o gesto do back-cue.</li>
<li>Em pausa, ande com o prato até um ponto novo, aperte <strong>CUE</strong> para gravar ali e depois <strong>MEMORY</strong>. Chame o ponto de volta com <strong>CUE/LOOP CALL ◄ ►</strong>.</li>
<li>Tocando, faça um loop manual: <strong>LOOP IN</strong> na batida e <strong>LOOP OUT</strong> quatro tempos depois. Saia com <strong>RELOOP/EXIT</strong> e refaça o loop apertando RELOOP de novo.</li>
<li>Aperte <strong>AUTO BEAT LOOP 4</strong>, depois <strong>BEAT SELECT</strong> e repita na escala de frações (1/16 · 1/8 · 1/4 · 1/2): escute a diferença entre um loop de compasso e um roll.</li>
<li>Ponha o <strong>±RANGE</strong> em ±6 %, mexa no <strong>TEMPO</strong> e observe o BPM. Depois ligue o <strong>MASTER TEMPO</strong> e repita: a velocidade muda, o tom não.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Puxar o pen drive sem o USB STOP.</strong> Campeão de dor de cabeça: a base do rekordbox corrompe e você perde playlists, cues e loops — às vezes no meio do set.</li>
<li><strong>Ligar o CDJ na entrada PHONO do mixer.</strong> Som estourado e distorcido na PA, e você ainda leva a culpa pelo "mixer com defeito". Confira a chave LINE/PHONO antes de abrir o fader.</li>
<li><strong>Deixar o REV ou o modo VINYL contra você.</strong> Reverso aceso, ou a mão apoiada no prato em VINYL, e a música morre no ar. Antes de abrir o fader, olhe os LEDs.</li>
<li><strong>Mixar com o ±RANGE em ±16 % ou WIDE.</strong> Cada milímetro do fader vira uma diferença enorme de BPM e você nunca acerta o encaixe fino. Mixagem se faz em ±6 %. E lembre: na spec oficial o WIDE só existe para CD, não para MP3.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 114 — PIONEER CDJ-900NXS                                                  */
/* ========================================================================= */
const CDJ900 = `
<h2>1. O que é e por que existe</h2>
<p>O <strong>Pioneer CDJ-900NXS</strong> é a versão <em>Nexus</em> do CDJ-900, de 2014. A geração Nexus foi o momento em que a Pioneer decidiu que a cabine inteira devia estar em rede: players e mixer ligados por cabo de rede (<strong>PRO DJ LINK</strong>), um único pen drive alimentando todos, BPM e grade de batidas circulando entre eles, sincronismo e quantize disponíveis.</p>
<p>O 900NXS existe para o clube que quer a experiência Nexus sem pagar o preço do CDJ-2000NXS. Trouxe <strong>tela colorida com Wave Zoom</strong> (forma de onda ampliada), contador de compassos, <strong>SLIP</strong>, <strong>QUANTIZE</strong>, <strong>BEAT SYNC</strong>, <strong>BEAT DIVIDE</strong>, loop cutter e a chance de tocar direto do computador, do iPhone/iPad ou de um Android.</p>
<p><strong>O ponto que mais confunde quem senta nele pela primeira vez: o CDJ-900NXS não tem botões de HOT CUE.</strong> Está conferido no manual e não é defeito — é a divisão de linha da época. Aqui o trabalho com pontos é feito por <strong>MEMORY</strong> (grava), <strong>CUE/LOOP CALL ◄ ►</strong> (chama) e <strong>DELETE</strong> (apaga). Quem aprende assim ganha disciplina: os pontos ficam <em>salvos na mídia</em> e chegam prontos de casa.</p>
<p>Você encontra o CDJ-900NXS em <strong>clubes de médio porte, locadoras, palcos secundários de festival e como deck reserva</strong> de cabines que já migraram para NXS2/3000.</p>

<h2>2. Ficha técnica</h2>
<p>Da <strong>spec oficial Pioneer DJ do CDJ-900NXS</strong>. O que não estiver lá vai marcado como ausente.</p>
<table>
<tbody>
<tr><td><strong>Dimensões (L × A × P)</strong></td><td>320 mm × 105,5 mm × 401,8 mm</td></tr>
<tr><td><strong>Peso</strong></td><td>4,3 kg</td></tr>
<tr><td><strong>Formatos de áudio</strong></td><td>MP3 (MPEG-1 32–320 kbps / MPEG-2 16–160 kbps), AAC, WAV, AIFF</td></tr>
<tr><td><strong>Mídias que ele toca</strong></td><td>Drive óptico (CD, CD-R/RW), dispositivos USB, computador (Mac/Windows), iPhone/iPad/iPod touch e Android</td></tr>
<tr><td><strong>Saídas</strong></td><td>1 ANALOGUE (RCA) · 1 S/PDIF digital (RCA) · 1 CONTROL (mini-jack)</td></tr>
<tr><td><strong>Rede</strong></td><td>1 LAN 100Base-TX (PRO DJ LINK)</td></tr>
<tr><td><strong>Conversor / placa de som</strong></td><td>DAC Wolfson · 24 bit / 48 kHz</td></tr>
<tr><td><strong>Saída / resposta</strong></td><td>2,0 Vrms (1 kHz, 0 dB) · 4 – 20.000 Hz</td></tr>
<tr><td><strong>Sinal/ruído e distorção</strong></td><td>&gt; 115 dB (JEITA) · &lt; 0,003 % (JEITA)</td></tr>
<tr><td><strong>Visor principal</strong></td><td>LCD colorido (o tamanho em polegadas <strong>não consta na spec oficial</strong>) · Wave Zoom, contador de compassos, barra de endereço e display no prato</td></tr>
<tr><td><strong>Prato (jog)</strong></td><td>206 mm, sensível ao toque, modos CDJ e VINYL</td></tr>
<tr><td><strong>Alcance de pitch</strong></td><td>±6 % · ±10 % · ±16 % · ±100 % (WIDE) — vale para CD e para MP3</td></tr>
<tr><td><strong>Passo do pitch</strong></td><td>0,02 % em ±6 % · 0,05 % em ±10 % e ±16 % · 0,5 % em WIDE · busca por quadro 1/150 s</td></tr>
<tr><td><strong>Hot Cue</strong></td><td><strong>Não tem botões de hot cue</strong> — trabalha com MEMORY / CALL / DELETE</td></tr>
<tr><td><strong>Recursos de performance</strong></td><td>Beat Sync, Slip, Quantize, Beat Loop Divide, 4-Beat Loop, Loop Cutter, Active Loop, Reverse, Vinyl Speed Adjust, My Settings, Master Tempo</td></tr>
</tbody>
</table>

<h2>3. Controle por controle</h2>

<h3>Transporte</h3>
<ul>
<li><strong>PLAY / PAUSE</strong> — acende tocando e pisca em pausa. Em modo VINYL a pausa freia como um vinil.</li>
<li><strong>CUE</strong> — acende quando existe cue definido e pisca quando dá para definir um novo em pausa. Tocando, faz o back-cue: volta ao ponto e pausa. <em>Erro comum:</em> não olhar o LED e não saber se o cue está no lugar certo.</li>
<li><strong>SEARCH ◄◄ / ►►</strong> — enquanto segurado, corre rápido dentro da faixa.</li>
<li><strong>TRACK SEARCH ◄ / ►</strong> — faixa anterior / próxima.</li>
<li><strong>DIRECTION REV</strong> — liga e desliga a reprodução ao contrário.</li>
</ul>

<h3>Prato e velocidade</h3>
<ul>
<li><strong>Jog dial</strong> — <em>centro</em> = scratch e parada no modo VINYL; <em>borda</em> = pitch bend (nudge), para casar a batida sem mexer no fader.</li>
<li><strong>JOG MODE VINYL/CDJ</strong> — aceso = VINYL (encostar no topo para a música); apagado = CDJ (o prato só faz nudge).</li>
<li><strong>VINYL SPEED ADJUST — TOUCH/RELEASE</strong> — regula a velocidade com que a música freia ao tocar no prato e com que ela volta ao normal quando você solta.</li>
<li><strong>TEMPO SLIDER</strong> — velocidade dentro do alcance escolhido. Olhe a marcação <strong>+/−</strong> impressa ao lado do fader antes de puxar.</li>
<li><strong>TEMPO ±6 / ±10 / ±16 / WIDE</strong> — troca o alcance. ±6 % é o de trabalho; WIDE chega a ±100 %.</li>
<li><strong>MASTER TEMPO</strong> — muda a velocidade sem alterar o tom.</li>
<li><strong>BEAT SYNC</strong> e <strong>MASTER</strong> — o SYNC casa BPM e grade com o player mestre; o MASTER elege este player como mestre. <em>Erro comum:</em> trocar o mestre no meio da virada.</li>
</ul>

<h3>Loop e efeito de batida</h3>
<ul>
<li><strong>LOOP IN / CUE (IN ADJUST)</strong> e <strong>LOOP OUT (OUT ADJUST)</strong> — marcam início e fim do loop ao vivo; segurando, entram no ajuste fino de cada ponto.</li>
<li><strong>RELOOP / EXIT</strong> — sai do loop ou refaz o último.</li>
<li><strong>4-BEAT LOOP (LOOP CUTTER)</strong> — cria um loop de 4 tempos a partir do ponto atual. Apertado <em>durante</em> o loop, corta o loop pela metade.</li>
<li><strong>CUE/LOOP CALL ◄ (1/2X) e ► (2X)</strong> — fora do loop chamam os pontos salvos; dentro do loop, dividem e dobram o tamanho dele. Dois usos no mesmo botão: preste atenção no estado do player.</li>
<li><strong>BEAT DIVIDE 3/4 · 1/3 · 1/2 · 1/4 · 1/8</strong> — repete uma fração do compasso sem perder o tempo. O 1/2 é a "gagueira" clássica; o 1/8 vira quase um roll. Com o SLIP aceso, viram slip beat loop.</li>
<li><strong>SLIP</strong> — a faixa corre por baixo enquanto você faz loop, scratch ou reverso; ao soltar, volta onde estaria.</li>
<li><strong>QUANTIZE</strong> — cola cue, loop in/out, reverse e slip na batida mais próxima da grade. <em>Só funciona em faixa analisada no rekordbox.</em></li>
</ul>

<h3>Memória de pontos (o jeito do 900NXS)</h3>
<ul>
<li><strong>MEMORY</strong> — guarda o cue ou o loop atual na memória da mídia. Como o aparelho não tem hot cue, <em>este</em> é o botão que salva seu trabalho.</li>
<li><strong>CUE/LOOP CALL ◄ ►</strong> — percorre e chama os pontos salvos. Na prática você chega com eles já gravados de casa pelo rekordbox. <strong>DELETE</strong> apaga o ponto mostrado.</li>
</ul>

<h3>Fonte, navegação e visor</h3>
<ul>
<li><strong>rekordbox · LINK · USB · DISC</strong> — a coluna de fontes. <strong>LINK</strong> é a que confunde: toca a mídia que está em <em>outro</em> player da rede PRO DJ LINK.</li>
<li><strong>Slot USB (5 V, 2,1 A)</strong> e <strong>USB STOP</strong> — segure o USB STOP por pelo menos <strong>2 segundos</strong> antes de tirar o pen drive.</li>
<li><strong>ROTARY SELECTOR</strong> — gire para mover o cursor, aperte para entrar/carregar.</li>
<li><strong>BROWSE · TAG LIST · INFO (LINK INFO) · MENU (UTILITY) · BACK</strong> — navegar na mídia; fila marcada; dados da faixa (segurando 1 s, mostra o que está nos outros players); menu e preferências; voltar uma tela.</li>
<li><strong>TAG TRACK / REMOVE</strong> — adiciona e remove faixas da TAG LIST. <strong>DISC EJECT ⏏</strong> só funciona com a reprodução parada.</li>
<li><strong>TIME MODE / AUTO CUE</strong> — alterna REMAIN/ELAPSED; segurando 1 s liga/desliga o AUTO CUE.</li>
<li><strong>Visor</strong> — nome da faixa, forma de onda ampliada e geral, tempo, BPM, TEMPO, QUANTIZE, memórias e as telas BROWSE / TAG LIST / INFO / MENU.</li>
</ul>

<h2>4. Como ligar</h2>
<p>Regra de cabine, sem exceção: <strong>CDJ vai em LINE; toca-discos vai em PHONO.</strong> O PHONO tem pré-amplificador com curva RIAA porque a agulha entrega um sinal fraquíssimo. Jogar o CDJ ali estoura o pré e o som chega sujo e desequilibrado na PA. Toca-discos no LINE dá quase silêncio.</p>
<ul>
<li><strong>AUDIO OUT (RCA L/R)</strong> → entrada <strong>LINE</strong>/CD de um canal do mixer; chave do canal em <strong>LINE</strong>.</li>
<li><strong>DIGITAL OUT (S/PDIF coaxial, RCA)</strong> → entrada <strong>DIGITAL</strong> do mixer (DJM-900NXS2 e similares). O sinal vai ao mixer sem virar analógico no meio: uma conversão a menos. Sem entrada digital, use o RCA.</li>
<li><strong>CONTROL (mini-jack)</strong> → CONTROL do mesmo canal: habilita <strong>fader start</strong> e back cue pelo fader do mixer.</li>
<li><strong>LAN (100Base-TX)</strong> → hub da cabine ou porta LAN do mixer. É o <strong>PRO DJ LINK</strong>: um pen drive só alimenta todos os players, e BPM, grade e dados de faixa circulam entre eles. Cada player com <strong>número diferente</strong> (1, 2, 3, 4).</li>
<li><strong>USB-B</strong> → computador, para tocar do rekordbox e para controle MIDI.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ol>
<li>Dê <strong>PLAY</strong>, deixe correr e volte com o <strong>CUE</strong>. Duas vezes seguidas, até o back-cue virar reflexo.</li>
<li>Como <strong>este player não tem hot cue</strong>, treine o fluxo dele: pare num ponto, aperte <strong>MEMORY</strong> e chame o ponto de volta com <strong>CUE/LOOP CALL ◄ ►</strong>. Salve dois pontos e alterne entre eles.</li>
<li>Faça um loop manual com <strong>LOOP IN → LOOP OUT</strong>, saia com <strong>RELOOP/EXIT</strong> e crie um automático com <strong>4-BEAT LOOP</strong>. Dentro do loop, aperte 4-BEAT LOOP de novo e ouça o <em>loop cutter</em>.</li>
<li>Ligue o <strong>SLIP</strong>, faça um scratch no centro do prato e solte: a música deve voltar onde estaria. Repita com o SLIP desligado e compare.</li>
<li>Segure um <strong>BEAT DIVIDE 1/2</strong> antes de uma virada e depois um <strong>1/8</strong>. Escute a diferença entre a gagueira e o roll.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Procurar o hot cue que não existe.</strong> Quem chega do CDJ-2000 perde tempo caçando as pastilhas. Decore: <strong>MEMORY</strong> grava, <strong>CALL ◄ ►</strong> chama, <strong>DELETE</strong> apaga. Melhor ainda: chegue com os cues já salvos de casa pelo rekordbox.</li>
<li><strong>Contar com o QUANTIZE em faixa não analisada.</strong> Sem análise do rekordbox não há grade de batidas e o quantize não alinha nada. Analise a biblioteca antes de sair de casa.</li>
<li><strong>Puxar o pen drive sem segurar USB STOP por 2 segundos.</strong> Corrompe a base do rekordbox e leva junto playlists, cues e loops.</li>
<li><strong>Repetir número de player na rede PRO DJ LINK.</strong> Dois players com o mesmo número brigam e o LINK cai no meio do set. Numere 1, 2, 3, 4 antes da porta abrir.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 115 — PIONEER CDJ-2000NXS2                                                */
/* ========================================================================= */
const CDJNXS2 = `
<h2>1. O que é e por que existe</h2>
<p>Se existe um aparelho que virou <em>padrão mundial de cabine</em>, é o <strong>Pioneer CDJ-2000NXS2</strong> (2016). Durante anos o rider de clube e de festival dizia a mesma frase: <strong>"2 × CDJ-2000NXS2 + 1 × DJM-900NXS2"</strong>. Em qualquer casa séria do país, é provável que seja isso que esteja te esperando.</p>
<p>Ele existe porque o CDJ-2000NXS já era ótimo, mas tinha três limites: tela pequena para biblioteca grande, áudio parado em 24 bit/48 kHz e nada de <strong>FLAC</strong> ou <strong>ALAC</strong>. O NXS2 resolveu os três: <strong>tela de 7 polegadas sensível ao toque</strong>, <strong>24 bit/96 kHz com conversor Asahi Kasei AK4490</strong>, resposta até <strong>40 kHz</strong> e FLAC/ALAC.</p>
<p>Veio junto a mão cheia de recursos que hoje o DJ considera básicos: <strong>8 hot cues</strong> em dois bancos (A–D e E–H), <strong>beat jump</strong>, <strong>needle search</strong> (tocar na barra da tela e cair naquele ponto), quantize, slip, loop cutter e PRO DJ LINK com um pen drive alimentando até quatro players.</p>
<p>Onde encontrar: clube, festival, casa de show, locadora e boa parte das cabines profissionais do Brasil. É o aparelho que você <em>tem</em> que saber operar de olhos fechados.</p>

<h2>2. Ficha técnica</h2>
<p>Da <strong>spec oficial Pioneer DJ do CDJ-2000NXS2</strong>.</p>
<table>
<tbody>
<tr><td><strong>Dimensões (L × A × P)</strong></td><td>320 mm × 113,2 mm × 414,4 mm</td></tr>
<tr><td><strong>Peso</strong></td><td>5,7 kg</td></tr>
<tr><td><strong>Formatos de áudio</strong></td><td>MP3, AAC, WAV, AIFF, <strong>FLAC</strong> e <strong>ALAC</strong> · pen drive em FAT, FAT32 ou HFS+</td></tr>
<tr><td><strong>Mídias que ele toca</strong></td><td>USB (pen drive/HD), cartão SD, drive óptico (CD, CD-R/RW, DVD±R/RW/R-DL), computador (Mac/Windows), iPhone/iPad e Android</td></tr>
<tr><td><strong>Saídas</strong></td><td>1 ANALOGUE (RCA) · 1 DIGITAL (coaxial)</td></tr>
<tr><td><strong>Rede e USB</strong></td><td>1 LAN 100Base-TX (PRO DJ LINK) · 1 porta USB A · 1 porta USB B</td></tr>
<tr><td><strong>Conversor / placa de som</strong></td><td>Asahi Kasei AK4490EQ · 24 bit / 96 kHz</td></tr>
<tr><td><strong>Saída / resposta / ruído</strong></td><td>2,0 Vrms (1 kHz, 0 dB) · 4 – 40.000 Hz · 115 dB · distorção &lt; 0,0018 %</td></tr>
<tr><td><strong>Visor</strong></td><td>Tela colorida de <strong>7 polegadas</strong>, sensível ao toque, + display colorido no centro do prato</td></tr>
<tr><td><strong>Prato (jog)</strong></td><td>206 mm</td></tr>
<tr><td><strong>Hot Cue</strong></td><td>Sim — 4 pastilhas × 2 bancos = <strong>8 hot cues</strong> (A–D / E–H)</td></tr>
<tr><td><strong>Recursos de performance</strong></td><td>Slip, Reverse, Needle Search / Needle Drop, Quantize, Beat Jump, Loop Cutter, Beat Sync, My Settings, Vinyl Speed Adjust, Master Tempo</td></tr>
<tr><td><strong>Alcance de pitch</strong></td><td>±6 % · ±10 % · ±16 % · WIDE (os valores em % <strong>não constam na spec oficial publicada</strong>)</td></tr>
</tbody>
</table>

<h2>3. Controle por controle</h2>

<h3>Transporte e sentido</h3>
<ul>
<li><strong>PLAY / PAUSE</strong> — acende tocando, pisca em pausa. Em VINYL o prato continua vivo sob o dedo.</li>
<li><strong>CUE</strong> — acende quando há cue gravado, pisca quando dá para gravar um novo em pausa. Tocando, faz back-cue.</li>
<li><strong>SEARCH ◄◄ / ►►</strong> e <strong>TRACK SEARCH ❙◄◄ / ►►❙</strong> — busca rápida dentro da faixa; faixa anterior / próxima.</li>
<li><strong>DIRECTION — FWD / REV / SLIP REV</strong> — alavanca de sentido. FWD normal, REV ao contrário, <strong>SLIP REV</strong> reverte com a música correndo por baixo. O indicador <strong>REV</strong> acende quando está invertido. <em>Erro comum:</em> deixar a alavanca em REV e voltar do fone para o ar.</li>
</ul>

<h3>Hot cues — o que mudou de verdade</h3>
<ul>
<li><strong>HOT CUE A · B · C · D</strong> — pastilha vazia: aperte e ela <em>grava</em> o ponto atual. Gravada: aperte e ela <em>salta</em> para lá tocando. A cor vem do rekordbox.</li>
<li><strong>HOT CUE BANK</strong> — troca o banco entre <strong>A–D</strong> e <strong>E–H</strong>: 8 hot cues no total, quatro botões físicos. <strong>CALL ◄</strong> traz os hot cues já salvos na mídia; <strong>DELETE ✕</strong> apaga os do banco em uso.</li>
<li><em>Quando o DJ usa:</em> pular direto para o refrão, para a entrada da batida ou para o drop; e tocar a faixa como instrumento. <em>Erro comum:</em> disparar hot cue com o <strong>QUANTIZE desligado</strong> — o salto cai fora do tempo e a mixagem desmonta.</li>
</ul>

<h3>Loop</h3>
<ul>
<li><strong>LOOP IN/CUE (IN ADJUST)</strong> e <strong>LOOP OUT (OUT ADJUST)</strong> — marcam início e fim ao vivo, com ajuste fino de cada ponto. <strong>RELOOP/EXIT</strong> sai ou refaz o último.</li>
<li><strong>4/8BEAT (LOOP CUTTER)</strong> — loop automático de 4 tempos (segurando, 8). Dentro do loop, corta pela metade.</li>
<li><strong>CUE/LOOP CALL ◄ (1/2X) e ► (2X)</strong> — fora do loop chamam os pontos salvos; dentro do loop, cortam e dobram o tamanho. <strong>MEMORY</strong> e <strong>DELETE</strong> gravam e apagam esses pontos.</li>
<li><strong>SLIP</strong> — a música continua correndo por baixo durante loop, scratch ou reverso; ao soltar, volta para onde estaria.</li>
<li><strong>QUANTIZE</strong> — cola hot cue, cue e loop na batida mais próxima da grade do rekordbox. Ligado, nada dispara fora do compasso.</li>
</ul>

<h3>Prato, velocidade e sincronismo</h3>
<ul>
<li><strong>Jog dial (206 mm) com anel iluminado</strong> — topo = scratch/parada em VINYL; borda = pitch bend. No centro, o display do jog. <strong>JOG MODE</strong> alterna VINYL ⇄ CDJ.</li>
<li><strong>JOG ADJUST</strong> — regula o <em>peso</em> do prato: LIGHT gira leve, HEAVY gira pesado como um toca-discos.</li>
<li><strong>VINYL SPEED ADJUST — TOUCH/BRAKE</strong> e <strong>RELEASE/START</strong> — um regula a rapidez com que a música <em>para</em> ao tocar no prato; o outro, com que ela <em>volta</em> ao normal.</li>
<li><strong>TEMPO (fader)</strong> e <strong>±6/±10/±16/WIDE</strong> — velocidade dentro do alcance escolhido; quanto menor o alcance, mais fino o ajuste. Mixagem se faz em ±6 %. Olhe a marcação <strong>+/−</strong> impressa ao lado do fader.</li>
<li><strong>MASTER TEMPO</strong> trava o tom; <strong>TEMPO RESET</strong> zera o pitch na hora, onde quer que o fader esteja.</li>
<li><strong>BEAT SYNC</strong> e <strong>MASTER</strong> — casa BPM e grade com o player mestre; o MASTER elege este player como mestre.</li>
</ul>

<h3>Fonte, navegação e tela</h3>
<ul>
<li><strong>rekordbox · LINK · USB · SD · DISC</strong> — a coluna de fontes. <strong>LINK</strong> é a que confunde: toca a mídia que está em <em>outro</em> player, pela rede PRO DJ LINK.</li>
<li><strong>Entrada USB</strong> e <strong>USB STOP</strong> — a luz pisca enquanto o player lê a mídia; nunca puxe piscando. Segure USB STOP por <strong>2 segundos</strong> antes de tirar.</li>
<li><strong>Slot de cartão SD</strong> — a mídia reserva clássica: muita gente leva o set duplicado no SD. <strong>Seletor rotativo</strong>: gire para mover o cursor, aperte para carregar.</li>
<li><strong>BROWSE (SEARCH) · TAG LIST · INFO (LINK INFO) · MENU (UTILITY) · BACK</strong> — navegar (segurando 1 s, busca por texto); fila marcada; detalhes da faixa e do que toca nos outros players; menu e preferências; voltar.</li>
<li><strong>TRACK FILTER / EDIT</strong> e <strong>SHORTCUT</strong> — filtram pelas marcações do rekordbox (BPM, tom, tags) e dão atalho para TRACK, PLAYLIST e SEARCH. <strong>TIME MODE / AUTO CUE</strong> alterna REMAIN ↔ ELAPSED e, segurando 1 s, liga o AUTO CUE.</li>
<li><strong>Tela de 7 polegadas</strong> — forma de onda ampliada colorida, forma de onda da faixa inteira, tempo, BPM, ±RANGE, hot cues, LOOP e QUANTIZE. Sensível ao toque: o <em>needle search</em> deixa você tocar na barra e cair naquele ponto da faixa.</li>
</ul>

<h2>4. Como ligar</h2>
<p>A regra de sempre: <strong>CDJ vai em LINE; toca-discos vai em PHONO.</strong> O PHONO tem pré-amplificador com curva RIAA para levantar o sinal fraquíssimo da agulha. Player digital ali estoura o pré e chega distorcido na PA; toca-discos no LINE quase não faz som.</p>
<ul>
<li><strong>AUDIO OUT (RCA L/R)</strong> → entrada <strong>LINE</strong>/CD de um canal do mixer, com a chave do canal em LINE.</li>
<li><strong>DIGITAL OUT (coaxial)</strong> → entrada <strong>DIGITAL</strong> do mixer (DJM-900NXS2 e afins). Preferível quando existe: o áudio sai já digital, sem conversão D/A + A/D no caminho. Com 24 bit/96 kHz, faz diferença.</li>
<li><strong>LAN (100Base-TX)</strong> → hub da cabine ou porta LAN do mixer. É o <strong>PRO DJ LINK</strong>: um pen drive alimenta até quatro players, com faixa, BPM e grade circulando entre eles. Cada player com <strong>número diferente</strong> (1 a 4).</li>
<li><strong>USB A (em cima)</strong> → pen drive/HD. <strong>USB B (traseira)</strong> → computador, para rekordbox e MIDI.</li>
<li>⚠️ <strong>Não consta na spec oficial</strong> uma saída CONTROL separada para o NXS2 — a lista traz só ANALOGUE e DIGITAL. Se a cabine usa fader start com mixer antigo, confira o painel traseiro antes de prometer o recurso.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ol>
<li>Grave um <strong>hot cue no primeiro tempo</strong> da faixa (pastilha A) e volte nele <strong>duas vezes</strong>. Depois grave B no refrão e alterne A ↔ B no compasso.</li>
<li>Aperte <strong>BANK</strong> e repita no banco <strong>E–H</strong>: são 8 hot cues em quatro botões. Confira que A–D continuam lá quando você volta o banco.</li>
<li>Ligue o <strong>QUANTIZE</strong> e dispare os mesmos hot cues fora do tempo de propósito: veja o player encaixar na batida. Depois desligue e repita — a diferença é o motivo do botão existir.</li>
<li>Faça um loop com <strong>4/8BEAT</strong>, aperte de novo dentro do loop (loop cutter) e use <strong>CALL ► (2X)</strong> para dobrar. Saia com <strong>RELOOP/EXIT</strong>.</li>
<li>Ponha o <strong>±RANGE em ±6 %</strong>, desafine a faixa no <strong>TEMPO</strong> e devolva ela à velocidade original com <strong>TEMPO RESET</strong> — sem tocar no fader.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Confiar no SYNC sem ouvir.</strong> O beat sync só é tão bom quanto a grade que o rekordbox criou. Faixa com grade torta (gravação ao vivo, BPM não constante) desanda no ar. Ouça sempre no fone antes de abrir o fader.</li>
<li><strong>Puxar o pen drive com a luz piscando.</strong> Piscando = o player está lendo. Segure USB STOP por 2 segundos e espere. Base corrompida no meio do set é set perdido.</li>
<li><strong>Esquecer a alavanca DIRECTION em REV.</strong> Acontece muito com quem usa SLIP REV como efeito. Antes de abrir o fader, cheque o indicador REV.</li>
<li><strong>Chegar com a biblioteca sem exportar pelo rekordbox.</strong> Copiar MP3 na mão para o pen drive funciona, mas você perde grade, hot cue, tag list e busca. Metade do que este aparelho sabe fazer depende da análise feita em casa.</li>
</ul>
`.trim();

/* ========================================================================= */
/* 116 — PIONEER CDJ-3000                                                    */
/* ========================================================================= */
const CDJ3000 = `
<h2>1. O que é e por que existe</h2>
<p>O <strong>Pioneer CDJ-3000</strong> (2020) é o topo de linha atual e o primeiro player da família com <strong>MPU</strong> (unidade de processamento) própria. Foi essa mudança que permitiu a tela de <strong>9 polegadas HD sensível ao toque</strong>, o cache do arquivo de áudio inteiro na memória e o <strong>KEY SYNC / KEY SHIFT</strong>, que trabalha a tonalidade em tempo real.</p>
<p>Três coisas mudam a vida de quem vem de um CDJ-2000NXS2:</p>
<ul>
<li><strong>Oito pastilhas de HOT CUE em linha (A–H)</strong>, sem banco.</li>
<li><strong>Não tem leitor de CD.</strong> Na lista oficial de mídias tocáveis não existe drive óptico — só USB, computador, iPhone e o que chega pela rede. É o primeiro "CDJ" sem CD; o nome ficou por herança.</li>
<li><strong>Rede Gigabit (1000Base-T)</strong> em vez de 100 Mbit: com um mixer de 6 canais (como o DJM-V10), <strong>até 6 CDJ-3000</strong> dividem a mesma mídia no PRO DJ LINK.</li>
</ul>
<p>A spec cita "SD Card" entre as mídias tocáveis, mas os terminais listados são só <strong>1 USB A, 1 USB B e LAN</strong>: não há leitor de cartão no corpo, e o diagrama do painel no manual confirma. SD chega lido em outro player, pela rede.</p>
<p>Onde encontrar: clube grande, festival, palco principal e locadora de ponta. É o que aparece no rider quando o artista pede o melhor.</p>

<h2>2. Ficha técnica</h2>
<p>Da <strong>spec oficial Pioneer DJ do CDJ-3000</strong>.</p>
<table>
<tbody>
<tr><td><strong>Dimensões e peso</strong></td><td>329 mm (L) × 118 mm (A) × 453 mm (P) · 5,5 kg</td></tr>
<tr><td><strong>Formatos de áudio</strong></td><td>MP3, AAC, WAV, AIFF, <strong>FLAC</strong>, <strong>ALAC</strong></td></tr>
<tr><td><strong>Sistemas de arquivo do pen drive</strong></td><td>FAT, FAT32, <strong>exFAT</strong>, HFS+</td></tr>
<tr><td><strong>Mídias que ele toca</strong></td><td>USB, computador (Mac/Windows), iPhone e cartão SD lido por outro player na rede — <strong>sem leitor de CD e sem slot de SD próprio</strong></td></tr>
<tr><td><strong>Saídas</strong></td><td>1 ANALOGUE (RCA) · 1 DIGITAL (coaxial)</td></tr>
<tr><td><strong>Rede e USB</strong></td><td>1 LAN <strong>1000Base-T</strong> (PRO DJ LINK, até 6 players) · 1 USB A · 1 USB B</td></tr>
<tr><td><strong>Conversor / saída / resposta</strong></td><td>D/A de <strong>32 bit</strong> · 2,0 Vrms (1 kHz, 0 dB) · 4 – 40.000 Hz · distorção &lt; 0,0018 %</td></tr>
<tr><td><strong>Relação sinal/ruído</strong></td><td><strong>Não consta na spec oficial</strong> deste modelo</td></tr>
<tr><td><strong>Visor e prato</strong></td><td>Tela de <strong>9 polegadas</strong> HD colorida sensível ao toque · LCD colorido no centro do prato · jog de 206 mm</td></tr>
<tr><td><strong>Hot Cue</strong></td><td>Sim — <strong>8 pastilhas coloridas A–H</strong>, sem troca de banco</td></tr>
<tr><td><strong>Performance</strong></td><td>Auto Beat Loop, Beat Jump / Loop Move, Beat Sync, <strong>Key Sync / Key Shift</strong>, Slip, Reverse, Vinyl Speed Adjust, Quantize, Master Tempo</td></tr>
<tr><td><strong>Alcance de pitch</strong></td><td>±6 % · ±10 % · ±16 % · WIDE (os valores em % <strong>não constam na spec oficial publicada</strong>)</td></tr>
<tr><td><strong>Softwares compatíveis</strong></td><td>rekordbox, Serato DJ Pro, djay PRO AI (Mac), TRAKTOR PRO 3 · MIDI e PRO DJ LINK Lighting</td></tr>
</tbody>
</table>

<h2>3. Controle por controle</h2>

<h3>Transporte e sentido</h3>
<ul>
<li><strong>PLAY / PAUSE</strong> — toca e pausa. Botão redesenhado, mais resistente que o das gerações anteriores.</li>
<li><strong>CUE</strong> — define e volta ao ponto cue; tocando faz back-cue; parado num ponto novo, fixa o cue.</li>
<li><strong>SEARCH ◄◄ / ►►</strong> e <strong>TRACK SEARCH ◄◄ / ►►</strong> — busca rápida dentro da faixa; faixa anterior / próxima.</li>
<li><strong>DIRECTION (FWD / REV / SLIP REV)</strong> — sentido da faixa e do prato. SLIP REV reverte com a música correndo por baixo.</li>
<li><strong>POWER</strong> — no alto, atrás do painel. O cabo tem trava <strong>V-lock</strong>: ninguém arranca a energia no meio do show.</li>
</ul>

<h3>Os 8 hot cues</h3>
<ul>
<li><strong>Pastilhas A–H</strong> — vazia: aperte e ela <em>grava</em> o ponto atual na cor definida. Gravada: aperte e ela <em>salta</em> para lá tocando.</li>
<li><strong>CALL / DELETE</strong> — chama os pontos de cue/loop salvos na mídia; <strong>segurar apaga</strong>. Para apagar um hot cue: aperte CALL/DELETE (ele acende) e depois a pastilha.</li>
<li><em>Quando o DJ usa:</em> marcar a entrada da batida, o refrão, o drop e a saída — com 8 pontos à mão dá para tocar a música fora da ordem. <em>Erro comum:</em> gravar por cima de um ponto que já existia; pastilha acesa já está gravada.</li>
</ul>

<h3>Loop e salto</h3>
<ul>
<li><strong>IN / CUE (IN ADJUST)</strong> e <strong>OUT (OUT ADJUST)</strong> — marcam início e fim do loop ao vivo, com ajuste fino de cada ponto. <strong>RELOOP / EXIT</strong> sai ou refaz o último.</li>
<li><strong>BEAT LOOP 4 (1/2X) e BEAT LOOP 8 (2X)</strong> — loops automáticos de 4 e de 8 batidas. O 8 é novidade em relação ao clássico botão de 4 tempos.</li>
<li><strong>BEAT JUMP ◄ / ►</strong> — salta em blocos de batidas <em>sem perder o tempo</em>: o jeito limpo de pular oito compassos de introdução sem quebrar a mixagem.</li>
<li><strong>MEMORY · CUE/LOOP CALL ◄ ► · DELETE</strong> — salvam, chamam e apagam pontos de cue/loop na mídia.</li>
<li><strong>SLIP</strong> — a faixa corre por baixo; ao soltar loop, scratch ou hot cue, ela volta para onde estaria. <strong>QUANTIZE</strong> alinha hot cues e loops à grade: ligado, nada dispara fora do tempo.</li>
</ul>

<h3>Prato, velocidade e tonalidade</h3>
<ul>
<li><strong>Jog wheel (206 mm) com LCD colorido no centro</strong> — centro = scratch em modo VINYL; borda = nudge. O display central mostra arte e posição da faixa: você não tira o olho do prato. <strong>JOG MODE</strong> e o indicador <strong>VINYL/CDJ</strong> alternam e mostram o modo.</li>
<li><strong>JOG ADJUST</strong> — peso do prato entre LIGHT e HEAVY: pesado demais atrapalha o scratch, leve demais atrapalha o nudge. <strong>VINYL SPEED ADJUST (TOUCH / BRAKE)</strong> define quão rápido o prato para e volta.</li>
<li><strong>TEMPO (fader)</strong> e <strong>±RANGE</strong> — velocidade em ±6 / ±10 / ±16 / WIDE; ±6 % é onde se mixa. Olhe a marcação <strong>+/−</strong> impressa ao lado do fader antes de puxar.</li>
<li><strong>MASTER TEMPO</strong> trava o tom (LED aceso = ativo); <strong>TEMPO RESET</strong> devolve a faixa a 0 % na hora, ignorando onde está o fader.</li>
<li><strong>BEAT SYNC / MASTER</strong> — sincroniza BPM e grade com o outro player pela rede; MASTER elege este como mestre.</li>
<li><strong>KEY SYNC</strong> — casa a <em>tonalidade</em> desta faixa com a do outro deck: o recurso que mais separa o CDJ-3000 dos anteriores. <em>Cuidado:</em> forçar tom demais deixa timbre artificial.</li>
</ul>

<h3>Fonte, navegação e tela</h3>
<ul>
<li><strong>SOURCE</strong> — a origem: USB, rekordbox (USB/Wi-Fi/link) ou mídia de outros players via PRO DJ LINK.</li>
<li><strong>BROWSE · TAG LIST · PLAY LIST · SEARCH · MENU (UTILITY) · BACK</strong> — a fileira de navegação. SEARCH busca por texto (nome, artista, BPM, tom); MENU segurado abre as preferências; BACK sobe um nível.</li>
<li><strong>TAG TRACK / REMOVE · TRACK FILTER / EDIT · SHORT CUT</strong> — monta a fila; filtra por BPM, tom e avaliação; abre os atalhos de tela.</li>
<li><strong>Seletor rotativo (push)</strong> — gira para percorrer, aperta para carregar. <strong>USB STOP</strong> desconecta o pen drive com segurança. <strong>TIME MODE</strong> alterna REMAIN ↔ ELAPSED e, segurando, liga o AUTO CUE.</li>
<li><strong>Tela touch de 9 polegadas</strong> — forma de onda, tempo, BPM, tom (key), os 8 hot cues coloridos, artwork e barra de reprodução. O brilho máximo é bem maior que o do NXS2: resolve tela apagada em palco claro.</li>
</ul>

<h2>4. Como ligar</h2>
<p>Vale a mesma lei: <strong>CDJ vai em LINE; toca-discos vai em PHONO.</strong> O PHONO tem pré-amplificador com curva RIAA porque a agulha entrega sinal fraquíssimo. Player digital ali estoura o pré; toca-discos no LINE quase não faz som. Trocar não funciona — é circuito, não gosto.</p>
<ul>
<li><strong>AUDIO OUT (RCA L/R)</strong> → entrada <strong>LINE</strong>/CD de um canal do mixer, chave do canal em LINE.</li>
<li><strong>DIGITAL OUT (coaxial)</strong> → entrada <strong>DIGITAL</strong> do mixer. Com conversor de 32 bit dentro do player, é aqui que o CDJ-3000 mostra serviço: o áudio sai digital, sem conversão extra.</li>
<li><strong>LAN (1000Base-T)</strong> → hub gigabit da cabine ou porta LAN do mixer. É o <strong>PRO DJ LINK</strong>: com mixer de 6 canais, até <strong>6 players</strong> dividem a mesma mídia. Cabo em bom estado — a rede é o sistema nervoso da cabine.</li>
<li><strong>USB A (em cima)</strong> → pen drive com a biblioteca exportada do rekordbox. <strong>USB B (traseira)</strong> → computador: rekordbox, Serato DJ Pro, TRAKTOR PRO 3, djay PRO AI e MIDI.</li>
<li><strong>Força</strong> → o cabo tem trava <strong>V-lock</strong> (em algumas regiões): encaixe até travar. ⚠️ E lembre que <strong>não há entrada de SD nem leitor de CD</strong> — se o contratante prometeu "toca CD", esse não é o aparelho.</li>
</ul>

<h2>5. Na prática (faça no simulador desta aula)</h2>
<ol>
<li>Grave um <strong>hot cue no primeiro tempo</strong> (pastilha A) e volte nele <strong>duas vezes</strong>. Depois grave B, C e D em pontos diferentes e ande entre eles no compasso.</li>
<li>Apague um hot cue do jeito certo: aperte <strong>CALL/DELETE</strong> (ele acende) e depois a pastilha.</li>
<li>Faça um <strong>BEAT LOOP 4</strong>, depois um <strong>BEAT LOOP 8</strong>, saia com <strong>RELOOP/EXIT</strong> e use <strong>BEAT JUMP ◄ ►</strong> para pular oito compassos sem perder o tempo.</li>
<li>Ligue o <strong>SLIP</strong>, segure o centro do prato e faça um scratch. Solte: a música tem que voltar onde estaria. Repita com o SLIP desligado e compare o estrago.</li>
<li>Desafine a faixa com o <strong>TEMPO</strong>, ligue o <strong>MASTER TEMPO</strong> e volte a zero com o <strong>TEMPO RESET</strong>. Por último, experimente o <strong>KEY SYNC</strong>.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Chegar com CD achando que o CDJ-3000 toca.</strong> Não toca: não tem drive óptico. Quem tem acervo em CD leva tudo em pen drive exportado pelo rekordbox, ou pede outro player no rider.</li>
<li><strong>Formatar o pen drive no sistema errado.</strong> A spec aceita FAT, FAT32, exFAT e HFS+. Fora disso o player não monta a mídia — e você descobre na frente do público.</li>
<li><strong>Abusar do KEY SHIFT / KEY SYNC.</strong> Deslocar muito a tonalidade deixa a voz metálica e o grave sem corpo: é tempero, não base da mixagem.</li>
<li><strong>Rede improvisada e pen drive puxado no susto.</strong> Cabo ruim, switch doméstico ou número de player repetido derrubam o PRO DJ LINK — com 6 players numa mídia só, derrubar a rede é derrubar a cabine. E puxar o pen drive sem USB STOP corrompe a base do rekordbox.</li>
</ul>
`.trim();

/* ========================================================================= */

const AULAS = [
  { id: 'd1a00000-0000-4000-9000-000000000113', nome: 'Pioneer CDJ-850',      html: CDJ850 },
  { id: 'd1a00000-0000-4000-9000-000000000114', nome: 'Pioneer CDJ-900NXS',   html: CDJ900 },
  { id: 'd1a00000-0000-4000-9000-000000000115', nome: 'Pioneer CDJ-2000NXS2', html: CDJNXS2 },
  { id: 'd1a00000-0000-4000-9000-000000000116', nome: 'Pioneer CDJ-3000',     html: CDJ3000 },
];

async function main() {
  for (const a of AULAS) {
    const r = await fetch(REST + '/lessons?id=eq.' + a.id, {
      method: 'PATCH',
      headers: {
        apikey: KEY,
        Authorization: 'Bearer ' + KEY,
        'Content-Type': 'application/json',
        Prefer: 'return=representation',
      },
      body: JSON.stringify({ conteudo_rico: a.html }),
    });
    const txt = await r.text();
    if (!r.ok) {
      console.error('FALHOU', a.nome, r.status, txt.slice(0, 300));
      process.exitCode = 1;
      continue;
    }
    const j = JSON.parse(txt);
    console.log(
      String(r.status).padEnd(4),
      a.nome.padEnd(22),
      'chars gravados:', (j[0] && j[0].conteudo_rico ? j[0].conteudo_rico.length : 0)
    );
  }
}
main();
