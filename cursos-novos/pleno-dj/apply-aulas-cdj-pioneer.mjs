// ============================================================================
//  PLENO DJ — conteudo_rico das 5 aulas de players Pioneer (lote CDJ clássicos)
//
//  Aulas tratadas (SÓ conteudo_rico — nada de id, module_id, ordem ou animação):
//    d1a00000-…-105  Pioneer CDJ-100S      d1a00000-…-111  Pioneer CDJ-200
//    d1a00000-…-106  Pioneer CDJ-400       d1a00000-…-112  Pioneer CDJ-800MK2
//    d1a00000-…-107  Pioneer CDJ-1000MK3
//
//  FONTE DE VERDADE (regra 2 do projeto) — manuais oficiais Pioneer em
//  cursos-novos/pleno-dj/manuais:
//    CDJ-100S.pdf (DRB1227) · CDJ-400.pdf (DRB1451) · CDJ-1000MK3.pdf
//    CDJ-200.pdf (DRB1376)  · CDJ-800MK2.pdf (DRB1400A)
//  Os dois últimos foram baixados nesta sessão do servidor oficial
//  downloads.support.alphatheta.com. Todo número da ficha técnica saiu de lá;
//  o que não está no manual está escrito como "não consta no manual".
//
//  Uso:  node "cursos-novos/pleno-dj/apply-aulas-cdj-pioneer.mjs" [--dry]
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DRY = process.argv.includes("--dry");
// A chave sai de SMU-PRO/.local/svckey (ou da env SUPABASE_SERVICE_KEY).
// ⚠️ NÃO aponte para scratchpad de sessão: a pasta morre junto com a sessão e o
// script passa a dar ENOENT em toda execução. Modelo: cursos-novos/auditar-banco.mjs.
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");  // pleno-dj/ -> cursos-novos/ -> SMU-PRO/
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, {
    method,
    headers: { ...H, ...extra },
    body: body ? JSON.stringify(body) : undefined,
  });
  const txt = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${txt.slice(0, 400)}`);
  return txt ? (txt[0] === "[" || txt[0] === "{" ? JSON.parse(txt) : txt) : null;
}

// ---------------------------------------------------------------------------
//  AULA 105 — PIONEER CDJ-100S
// ---------------------------------------------------------------------------
const CDJ100S = `
<h3>1. O que é e por que existe</h3>
<p>O <b>Pioneer CDJ-100S</b> é um CD player de DJ compacto, de carregamento frontal por fenda (<i>slot-in</i>), da primeira geração da linha CDJ — o manual oficial (DRB1227) traz copyright de 1998. É o caçula da família: cabe em meia bancada (217,7 mm), pesa 2,2 kg e vai para qualquer lugar dentro de uma mochila.</p>
<p><b>Que problema ele resolveu.</b> No fim dos anos 90, tocar CD com técnica de DJ tinha duas opções ruins: um duplo de rack barato — sem cue de verdade, sem pitch fino, com partida lenta — ou um CDJ grande e caro. O CDJ-100S ficou no meio-termo. Manteve tudo o que transforma um player em ferramenta de DJ (CUE com back cue e sampler, AUTO CUE, fader de pitch de 100 mm com passo de 0,1 %, partida em <b>0,01 segundo ou menos</b> contra os ~0,3 s de um CD player doméstico) e cortou o que encarecia: prato grande, memória de pontos e saída digital. Concorria com os racks duplos (Numark, Gemini) e com os Denon da mesma faixa.</p>
<p><b>O que ele estreou.</b> O <b>DIGITAL JOG BREAK</b>: três botões (JET, ZIP, WAH) que transformam o jog em controlador de efeito ao vivo. Até então, efeito era assunto de mixer. A ideia atravessou a linha inteira — você reencontra JET e WAH no CDJ-200, no CDJ-400 e nos mixers DJM.</p>
<p><b>Onde você encontra ele hoje.</b> Locadora pequena, escola de DJ, igreja, bar antigo, usado a preço de banana. Não é máquina de festival, mas é um dos jeitos mais baratos de treinar beatmatch <b>de ouvido</b> — sem SYNC, sem grade de batidas, sem pen drive. É o que o aluno precisa aprender antes de subir para um CDJ-3000.</p>

<h3>2. Ficha técnica (manual oficial Pioneer DRB1227)</h3>
<table>
<tr><td><b>Alimentação / consumo</b></td><td>CA 220–240 V, 50/60 Hz · 14 W</td></tr>
<tr><td><b>Peso</b></td><td>2,2 kg</td></tr>
<tr><td><b>Dimensões</b></td><td>217,7 (L) × 310,7 (P) × 94,5 (A) mm</td></tr>
<tr><td><b>Resposta de frequência</b></td><td>4 Hz – 20 kHz (EIAJ)</td></tr>
<tr><td><b>Sinal/ruído · saída</b></td><td>acima de 96 dB (EIAJ) · 2,0 V (EIAJ), 2 canais</td></tr>
<tr><td><b>Mídia aceita</b></td><td>CD de áudio de 12 cm; 8 cm só com adaptador. Suporte a CD-R/CD-RW e a MP3 <b>não consta no manual</b></td></tr>
<tr><td><b>Saídas</b></td><td>AUDIO OUT L/R (RCA) + CONTROL (mini-plug). <b>Não tem DIGITAL OUT</b></td></tr>
<tr><td><b>Fader de pitch</b></td><td>100 mm. Duas faixas: ±10 % (passo 0,1 %) ou +10 %/−16 % (0,1 % no lado + e 0,2 % no −)</td></tr>
<tr><td><b>Busca pelo jog</b></td><td>48 frames por volta completa (1 segundo = 75 frames)</td></tr>
<tr><td><b>Partida (quick start)</b></td><td>0,01 s ou menos</td></tr>
<tr><td><b>Diâmetro do jog</b></td><td>não consta no manual</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h3>3.1 POWER, fenda e EJECT</h3>
<ul>
<li><b>POWER (OFF/ON)</b> — no aparelho real a chave fica no <b>painel traseiro</b>; no topo só existe a serigrafia. Ao ligar, o player volta ao padrão de fábrica: pitch em ±10 %, tempo em REMAIN e AUTO CUE desligado. <b>Erro comum:</b> enfiar o CD com o aparelho desligado — o manual proíbe, dá para danificar o disco e o mecanismo.</li>
<li><b>Fenda frontal (slot-in)</b> — o disco entra direto, sem gaveta. Etiqueta para cima, um disco por vez, nunca disco de formato estranho. Se o mecanismo estiver puxando, não segure.</li>
<li><b>EJECT</b> — para a rotação e devolve o disco. O CDJ-100S <b>não tem botão STOP</b>: quem para o disco é o EJECT. Só ejete com o canal fechado no mixer — o corte seco vai direto para a caixa.</li>
</ul>

<h3>3.2 Visor</h3>
<ul>
<li>Número da faixa, ▶/❚❚, indicador <b>CUE</b>, tempo em M:S:F (minuto, segundo, frame), <b>TEMPO %</b>, <b>MT</b> (master tempo), <b>A.CUE</b> e a barra de endereço. Os indicadores JET/ZIP/WAH piscam com o Jog Break ativo.</li>
<li><b>Barra de endereço</b>: é o "olho na agulha". Cresce (ELAPSED) ou encolhe (REMAIN) e <b>pisca quando faltam 30 segundos</b>. É esse aviso que impede o DJ de ser pego de calças curtas no fim da música.</li>
</ul>

<h3>3.3 TIME MODE / AUTO CUE</h3>
<ul>
<li><b>Toque rápido</b> alterna <b>REMAIN</b> (quanto falta) e <b>ELAPSED</b> (quanto tocou). Ao ligar, o padrão é REMAIN — e em pista é REMAIN que interessa.</li>
<li><b>Segurar 1 segundo</b> liga/desliga o <b>AUTO CUE</b>: o player pula o silêncio do início e fica armado no primeiro som.</li>
<li><b>Erro comum:</b> AUTO CUE ligado numa faixa que abre com atmosfera longa e proposital — o player corta a introdução que você queria usar.</li>
</ul>

<h3>3.4 TRACK SEARCH e SEARCH</h3>
<ul>
<li><b>TRACK SEARCH |◄◄ / ►►|</b> — o primeiro toque no |◄◄ volta ao <b>início da faixa atual</b>; o segundo vai para a anterior. Segurando, a busca vira contínua e acelera depois de 2 segundos.</li>
<li><b>SEARCH ◄◄ / ►►</b> — segure para varrer com som. <b>Em pausa, cada toque anda exatamente 1 frame</b> (1 s = 75 frames): é assim que se afina um cue com precisão cirúrgica. Segurando SEARCH ou TRACK SEARCH <b>e girando o jog</b>, a busca fica super-rápida.</li>
</ul>

<h3>3.5 CUE — o botão mais importante do aparelho</h3>
<ul>
<li><b>Em pausa, aperte CUE</b>: grava o ponto de partida ali; o indicador CUE acende.</li>
<li><b>Tocando, aperte CUE</b>: volta ao ponto e fica em espera (<i>back cue</i>). É o botão que salva a mixagem que saiu do lugar.</li>
<li><b>Segure CUE</b> parado no ponto: o trecho toca enquanto o dedo está em cima e volta ao soltar (<i>cue point sampler</i>). Serve para conferir o ponto e para fazer stutter em cima da batida.</li>
<li><b>Erro comum:</b> gravar o cue "no ouvido", no meio do transiente. O bumbo entra atrasado e a mixagem nasce torta — afine com SEARCH em pausa antes de gravar.</li>
</ul>

<h3>3.6 PLAY/PAUSE, TEMPO e MASTER TEMPO</h3>
<ul>
<li><b>PLAY/PAUSE</b> — partida instantânea. Em pausa, os LEDs de PLAY e CUE piscam.</li>
<li><b>TEMPO</b> — fader de 100 mm. <b>Puxar para você (+)</b> acelera; <b>empurrar para longe (−)</b> desacelera. O centro tem clique = velocidade normal.</li>
<li><b>MASTER TEMPO</b> — trava a afinação: muda a velocidade sem mudar o tom, e acende <b>MT</b> no visor. <b>Segurar 2 segundos</b> troca a faixa do fader entre <b>±10 %</b> e <b>+10 %/−16 %</b>; o novo valor (10.0 ou 16.0) aparece por ~2 segundos.</li>
<li><b>Erro comum:</b> desligar o POWER e achar que a faixa de −16 % ficou salva. Não fica — ao ligar, volta para ±10 %.</li>
</ul>

<h3>3.7 JOG DIAL</h3>
<ul>
<li><b>Tocando</b>, o jog faz <b>pitch bend</b>: gire para frente e a música adianta; solte e ela volta sozinha ao tempo do fader. É o ajuste fino do beatmatch.</li>
<li><b>Em pausa</b>, faz busca por frame — <b>48 frames por volta</b>. Com JET/ZIP/WAH ligado, vira o controle do efeito.</li>
<li><b>Atenção:</b> o CDJ-100S <b>não faz scratch</b>. Não existe modo VINYL aqui — tocar o topo do prato não para a música.</li>
</ul>

<h3>3.8 DIGITAL JOG BREAK — JET, ZIP, WAH e HOLD</h3>
<ul>
<li><b>JET</b> — mistura ao som um <b>delay curtíssimo</b>, criando a interferência que soa como turbina. É o truque de dois players tocando a mesma faixa defasada, feito num aparelho só.</li>
<li><b>ZIP</b> — muda o <b>tom</b> conforme o giro. No anti-horário, o som despenca como um vinil sendo desligado.</li>
<li><b>WAH</b> — filtro cuja frequência de corte varia com o giro; é o "uau-uau" de pedal de guitarra.</li>
<li><b>HOLD</b> — congela o efeito no ponto atual mesmo depois de largar o jog. <b>Erro comum:</b> abrir o Jog Break no auge da pista e esquecer o HOLD ligado — o som fica preso num filtro esquisito e o DJ leva meio minuto para entender por que a música "sumiu".</li>
</ul>

<h3>4. Como ligar</h3>
<ul>
<li><b>AUDIO OUT L/R (RCA)</b> → entrada de <b>LINE / CD / AUX</b> do canal do mixer. Plugue <b>branco no L</b>, <b>vermelho no R</b>.</li>
<li><b>CONTROL (mini-plug)</b> → CONTROL do mixer Pioneer (DJM-300, DJM-500 e sucessores) e você ganha <b>fader start</b>: subir o fader dispara o player, baixar devolve ele ao cue. Ligado no CONTROL de <b>outro CDJ</b>, faz <b>relay play</b>. Os dois usos não convivem: a fiação é diferente.</li>
</ul>
<p><b>A regra que não muda:</b> <b>player digital (CDJ/XDJ) vai em LINE.</b> <b>Toca-discos vai em PHONO</b>, porque a cápsula entrega um sinal fraquíssimo e precisa do pré-amplificador RIAA que existe só na entrada PHONO. Trocar não funciona: CDJ em PHONO joga 2,0 V onde se esperavam milivolts e sai <b>distorção brutal</b>; toca-discos em LINE sai fininho, sem grave e quase inaudível. E o manual é literal em mais um ponto: <b>nunca ligue o player na entrada MIC</b> — o ganho de microfone satura na hora.</p>

<h3>5. Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1. Cue de verdade.</b> Dê PLAY, deixe correr ~10 segundos e aperte CUE: o player volta ao ponto e fica em espera. Aperte PLAY de novo. Repita três vezes até virar reflexo.</li>
<li><b>2. Afinação por frame.</b> Com a faixa em pausa, dê 5 toques no SEARCH ►► (5 frames). Depois gire o jog uma volta completa (48 frames). Aperte CUE para gravar o ponto exatamente ali.</li>
<li><b>3. Sampler.</b> Parado no cue, <b>segure</b> o CUE: o som toca enquanto o dedo está em cima. Faça quatro vezes seguidas, no tempo da música.</li>
<li><b>4. Pitch com e sem trava.</b> Leve o TEMPO para +4 % e leia o visor. Ligue o MASTER TEMPO (MT acende) e repita: a velocidade muda, o tom não. Depois segure o MASTER TEMPO 2 segundos e veja a faixa virar +10 %/−16 %.</li>
<li><b>5. Jog Break.</b> Com a faixa tocando, aperte WAH e gire o jog devagar. Depois aperte HOLD e solte o jog — o efeito congela. Desligue tudo antes de terminar.</li>
</ul>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Ligar o CDJ na entrada PHONO.</b> Sai distorcido e alto. Em cabine escura, com cabo já enrolado, o DJ perde a virada inteira procurando o problema. Confira a chave LINE/PHONO do canal <b>antes</b> de abrir o fader.</li>
<li><b>Esquecer que ele não tem memória de pontos.</b> Trocou o CD, perdeu o cue. Quem trabalha com ele anota os pontos — ou aprende a achar rápido pela barra de endereço.</li>
<li><b>Confiar que o pitch ficou onde você deixou.</b> Ao ligar, a faixa volta para ±10 % e o AUTO CUE volta desligado. Configure <b>antes</b> da primeira música, não durante.</li>
<li><b>Achar que o jog faz scratch.</b> Não faz. Se a sua técnica depende de parar o prato com a mão, esse não é o aparelho — e insistir só arranha o toque do jog.</li>
</ul>
`.trim();

// ---------------------------------------------------------------------------
//  AULA 106 — PIONEER CDJ-400
// ---------------------------------------------------------------------------
const CDJ400 = `
<h3>1. O que é e por que existe</h3>
<p>O <b>Pioneer CDJ-400</b> (manual DRB1451, copyright 2007) é o player que fez a ponte entre o CD e o mundo digital. Tem o tamanho de um CDJ-200 — 217,9 mm de largura, 2,7 kg — mas traz três coisas que nenhum player compacto da Pioneer tinha antes: <b>porta USB frontal</b> para tocar MP3 direto do pen drive, <b>saída MIDI por USB</b> para controlar software no computador e <b>modo VINYL</b> com scratch de verdade.</p>
<p><b>Que problema ele resolveu.</b> Em 2007 o DJ vivia partido ao meio. De um lado a cabine de CD, confiável e cara de alimentar (cada set novo era uma pilha de CD-R). Do outro o laptop com Traktor ou Serato, barato mas dependendo de controladora de plástico com toque de brinquedo. O CDJ-400 é a resposta: <b>um aparelho só</b>, com chassi e jog de player profissional, que toca CD, toca pen drive e ainda vira controladora MIDI do software. Praticamente todo botão e fader sai como mensagem MIDI — o manual publica a tabela inteira, com canal de 1 a 16.</p>
<p><b>Com o que ele concorria.</b> Com o Denon DN-S1200 e com as controladoras da primeira onda (Vestax VCI-100, Numark). O diferencial era o <b>aro azul iluminado do jog</b>, que acende quando o sensor de toque atua — virou marca registrada e apareceu em foto de cabine no mundo inteiro. Hoje você encontra o CDJ-400 em bar e clube pequeno, em locadora e no usado.</p>
<p><b>Um detalhe que confunde muita gente:</b> o CDJ-400 <b>não tem botões HOT CUE dedicados</b>. Quem tem hot cue A/B/C é o CDJ-1000MK3. O que ele oferece é <b>CUE/LOOP MEMORY + CALL</b> (grava e chama pontos da memória interna) e o <b>HOT LOOP</b>, que é uma função do botão LOOP IN.</p>

<h3>2. Ficha técnica (manual oficial Pioneer DRB1451)</h3>
<table>
<tr><td><b>Alimentação / consumo</b></td><td>CA 220–240 V, 50/60 Hz · 19 W</td></tr>
<tr><td><b>Peso</b></td><td>2,7 kg</td></tr>
<tr><td><b>Dimensões</b></td><td>217,9 (L) × 107,5 (A) × 296,3 (P) mm</td></tr>
<tr><td><b>Áudio</b></td><td>4 Hz – 20 kHz · sinal/ruído 115 dB ou mais (JEITA) · distorção 0,006 % (JEITA)</td></tr>
<tr><td><b>Mídia aceita</b></td><td>CD, CD-TEXT, CD-R e CD-RW (áudio ou MP3) · pen drive USB (classe MSC, FAT16/FAT32)</td></tr>
<tr><td><b>MP3</b></td><td>MPEG-1 a 32/44,1/48 kHz, 32–320 kbps · MPEG-2 a 16/22,05/24 kHz, 16–160 kbps · ID3 v1.0 a 2.4 (título, álbum, artista)</td></tr>
<tr><td><b>Limites do pen drive</b></td><td>até 8 níveis de pasta · 10 000 pastas · 20 000 arquivos (máx. 10 000 por pasta) · <b>não ordena nada</b>: toca na ordem em que foi gravado</td></tr>
<tr><td><b>Limites do CD-ROM MP3</b></td><td>até 8 níveis · 2 000 pastas · 3 000 arquivos · ISO9660, sem multissessão</td></tr>
<tr><td><b>Saídas</b></td><td>AUDIO OUT L/R (RCA) · DIGITAL OUT (RCA coaxial) · CONTROL (mini-plug) · USB traseira (computador) · USB frontal (pen drive)</td></tr>
<tr><td><b>Faixas de pitch</b></td><td>±6 % (passo 0,02 %) · ±10 % e ±16 % (0,05 %) · WIDE (0,5 %). Em MP3 só ±6/±10/±16 %. A faixa fica salva ao desligar</td></tr>
<tr><td><b>Efeito JET</b></td><td>delay de 0 ms (jog parado) a 3 ms no máximo</td></tr>
<tr><td><b>Diâmetro do jog</b></td><td>não consta no manual</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h3>3.1 Fonte: SOURCE SELECT (CD · USB · PC)</h3>
<ul>
<li><b>CD</b> toca o disco na fenda. <b>USB</b> toca a porta frontal — cada toque alterna entre <b>USB (MEMORY)</b> e <b>PC</b>. Em <b>PC</b>, o player manda MIDI e pode devolver o áudio do software.</li>
<li><b>Erro comum:</b> arrancar o pen drive no meio da música. Espere o indicador apagar — um pen corrompido no meio de um set não tem conserto na hora.</li>
<li><b>Erro comum 2:</b> pen drive em hub USB. O manual avisa que o comportamento fica errático. Pen direto na porta, sempre.</li>
</ul>

<h3>3.2 Navegação: ROTARY SELECT PUSH, FOLDER BACK, TEXT MODE/UTILITY</h3>
<ul>
<li><b>ROTARY SELECT PUSH</b> — gire para percorrer faixas e pastas, pressione para confirmar. É o embrião do browse dos CDJ modernos.</li>
<li><b>FOLDER BACK</b> — sobe um nível na hierarquia de pastas do pen drive ou do CD-ROM.</li>
<li><b>TEXT MODE / UTILITY</b> — toque mostra o CD-TEXT / nome da faixa. <b>Segure 1 segundo</b> para entrar nas utilidades, onde ficam o <b>JOG ILLUMI</b> (padrões 1 a 6 do aro) e o <b>MIDI CH</b>. O menu sai sozinho depois de 15 segundos.</li>
<li><b>Na prática:</b> monte o pen com pastas rasas e nomes curtos — nome gigante atrasa a leitura na cabine escura.</li>
</ul>

<h3>3.3 Transporte: PLAY/PAUSE, CUE, TRACK SEARCH, SEARCH, EJECT</h3>
<ul>
<li><b>PLAY/PAUSE</b> — em modo VINYL a pausa "freia" como um vinil.</li>
<li><b>CUE</b> — parado num ponto novo, grava o cue ali. Tocando, volta ao cue e fica em espera (back cue). Parado no cue, segure para ouvir o trecho (cue point sampler).</li>
<li><b>TRACK SEARCH |◄◄ / ►►|</b> — faixa anterior / próxima.</li>
<li><b>SEARCH ◄◄ / ►►</b> — varre a faixa com som. Em MP3 a busca só funciona <b>dentro da mesma pasta</b>: está na tabela de defeitos do manual e é a causa nº 1 de "o search parou de funcionar".</li>
<li><b>TIME MODE / AUTO CUE</b> — toque alterna REMAIN e ELAPSED (em MP3 o REMAIN pode demorar). <b>Segurar</b> liga/desliga o AUTO CUE.</li>
</ul>

<h3>3.4 Loop: IN / OUT / RELOOP / BEAT LOOP · LOOP DIVIDE</h3>
<ul>
<li><b>IN / REALTIME CUE / HOT LOOP</b> — marca o início do loop <b>sem parar a música</b>; o mesmo botão grava o cue em tempo real. Durante o loop, devolve a reprodução ao ponto IN (HOT LOOP).</li>
<li><b>OUT / OUT ADJUST</b> — marca o fim: a faixa repete entre IN e OUT. Apertado <b>durante</b> o loop, entra no ajuste do ponto OUT.</li>
<li><b>RELOOP / EXIT</b> — sai do loop ou refaz o último quantas vezes quiser.</li>
<li><b>BEAT LOOP (+)</b> — fora do loop, cria um loop automático de <b>4 tempos</b> calculado pelo BPM. Durante o loop, devolve o trecho ao tamanho <b>original</b>.</li>
<li><b>LOOP DIVIDE (−)</b> — durante o loop, divide o trecho pela metade a cada toque. É assim que se faz o "rolê" que vai fechando até virar um zumbido rítmico.</li>
<li><b>Erro comum:</b> tentar loop em MP3 fora da faixa onde o IN foi marcado. O manual avisa: em MP3 o loop só vale dentro da mesma faixa.</li>
</ul>

<h3>3.5 CUE/LOOP MEMORY · DELETE · CALL</h3>
<ul>
<li><b>MEMORY</b> grava o ponto de cue/loop na memória interna; <b>segurar</b> apaga (DELETE). <b>CALL ◄ / ►</b> chama os pontos gravados.</li>
<li><b>Na prática:</b> grave o ponto de entrada das suas 10 músicas de abertura. Numa troca de cabine apertada, chamar pelo CALL é muito mais rápido do que procurar no jog.</li>
</ul>

<h3>3.6 JOG MODE (VINYL / CDJ), efeitos do prato e HOLD</h3>
<ul>
<li><b>VINYL</b> — tocar o <b>topo</b> do prato <b>para</b> a música; girando, o som sai conforme o movimento. É scratch de verdade, e o modo fica salvo mesmo desligando o aparelho.</li>
<li><b>CDJ</b> — o prato só faz pitch bend; tocar o topo não faz nada. É o modo de quem só mixa.</li>
<li><b>Em VINYL os três botões viram SCRATCH JOG EFFECT:</b> <b>BUBBLE</b> (scratch de bolha), <b>TRANS</b> (corta o som em fatias, como um crossfader rápido) e <b>WAH</b>. O efeito só sai enquanto você scratcha.</li>
<li><b>Em CDJ eles viram DIGITAL JOG BREAK:</b> <b>JET</b> (delay de 0 a 3 ms conforme o giro), <b>ROLL</b> (loop curtíssimo repetido, com tom e tempo variando pelo giro) e <b>WAH</b>.</li>
<li><b>HOLD</b> preserva o efeito depois que você solta o jog. <b>Erro comum:</b> reclamar que "o jog não scratcha" com o player em modo CDJ — olhe o LED do JOG MODE antes de culpar o aparelho.</li>
</ul>

<h3>3.7 DIRECTION REV, TEMPO RANGE, MASTER TEMPO e TEMPO</h3>
<ul>
<li><b>DIRECTION — REVERSE</b> inverte o sentido de reprodução; o LED acende.</li>
<li><b>TEMPO RANGE (±6 / ±10 / ±16 / WIDE)</b> define quanto o fader varia; fica salvo ao desligar. Em MP3 o WIDE não está disponível.</li>
<li><b>MASTER TEMPO</b> trava o tom. O manual avisa com todas as letras: <b>o processamento digital derruba a qualidade do som</b>. Ligue quando precisar, não por hábito.</li>
<li><b>TEMPO</b> — puxando para você (+) acelera; empurrando (−) desacelera.</li>
</ul>

<h3>4. Como ligar</h3>
<ul>
<li><b>AUDIO OUT L/R (RCA)</b> → entrada <b>CD / LINE / AUX</b> do canal do mixer. Branco no L, vermelho no R.</li>
<li><b>DIGITAL OUT (RCA coaxial)</b> → DIGITAL IN de um DJM-800 ou dos canais 4 a 6 de um DJM-1000. Saem só os dados de áudio (sem subcódigos), e todas as funções de DJ continuam valendo.</li>
<li><b>CONTROL (mini-plug)</b> → CONTROL do mixer Pioneer (fader start e back cue) ou CONTROL de outro CDJ (relay play).</li>
<li><b>USB traseira</b> → computador, para MIDI e áudio com o software. <b>USB frontal</b> → pen drive.</li>
</ul>
<p><b>A regra que não muda:</b> <b>CDJ/XDJ/player digital vai em LINE (ou CD/AUX).</b> <b>Toca-discos vai em PHONO</b> — o sinal da cápsula é fraquíssimo e precisa do pré-amplificador RIAA da entrada PHONO. O manual do CDJ-400 diz literalmente: "Connect to the CD or AUX input connectors (Do not use the PHONO input connectors)". Trocar não funciona nos dois sentidos: CDJ em PHONO distorce; toca-discos em LINE sai fino e quase inaudível. E nunca use a entrada MIC para player.</p>

<h3>5. Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1. Loop de 4 tempos e rolê.</b> Com a faixa tocando, aperte BEAT LOOP (+): nasce um loop de 4 tempos. Toque no LOOP DIVIDE (−) três vezes e ouça o trecho fechando. Volte ao original com o (+) e saia com RELOOP/EXIT.</li>
<li><b>2. Loop na mão.</b> No tempo da música, aperte LOOP IN e, quatro tempos depois, LOOP OUT. Se ficou torto, aperte OUT de novo para entrar no OUT ADJUST e acerte.</li>
<li><b>3. Ponto salvo.</b> Marque um cue, grave com CUE/LOOP MEMORY, saia dele e traga de volta com o CUE/LOOP CALL.</li>
<li><b>4. Os dois pratos.</b> Ponha o JOG MODE em VINYL, toque o topo e ouça a música parar. Troque para CDJ e repita — o toque deixa de parar. Depois ligue o TRANS em VINYL e scratche.</li>
<li><b>5. Pitch e trava.</b> Passe o TEMPO RANGE por ±6, ±10, ±16 e WIDE, movendo o fader em cada faixa para sentir a diferença de resolução. Ligue o MASTER TEMPO e repita.</li>
</ul>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Puxar o pen drive antes de o indicador apagar.</b> É o jeito mais rápido de perder a biblioteca inteira no meio de um set. Leve sempre <b>dois</b> pens com o mesmo conteúdo.</li>
<li><b>Confiar na ordem do pen drive.</b> O CDJ-400 <b>não ordena arquivo nenhum</b>: toca na ordem em que foi gravado. Grave a pasta na ordem que quer ouvir, ou vai procurar música às cegas.</li>
<li><b>Esquecer que WIDE não existe em MP3.</b> Você ensaia com CD no WIDE, chega na festa tocando MP3 e o alcance simplesmente não está lá.</li>
<li><b>Master Tempo ligado o set inteiro.</b> O próprio manual avisa da perda de qualidade — em PA grande e bem afinado isso aparece.</li>
<li><b>Achar que o CDJ-400 tem hot cue A/B/C.</b> Não tem. Se o seu set depende de saltar entre três pontos com um toque, o aparelho certo é o CDJ-1000MK3.</li>
</ul>
`.trim();

// ---------------------------------------------------------------------------
//  AULA 107 — PIONEER CDJ-1000MK3
// ---------------------------------------------------------------------------
const CDJ1000MK3 = `
<h3>1. O que é e por que existe</h3>
<p>O <b>Pioneer CDJ-1000MK3</b> é o player que transformou o CDJ no <b>padrão de cabine do mundo inteiro</b>. Terceira geração do CDJ-1000, é grande — 320 mm, 4,2 kg — por um motivo só: o <b>prato de 206 mm de diâmetro</b>, que finalmente deu ao DJ de CD o mesmo toque de um toca-discos.</p>
<p><b>Que problema ele resolveu.</b> Até o CDJ-1000, o DJ de vinil tinha um argumento imbatível contra o CD: "não dá para scratchar e não dá para sentir a música na mão". O MK3 acabou com a discussão. Em <b>modo VINYL</b>, encostar no topo do prato <b>para</b> a música — e o jeito como ela para e volta é ajustável nos dois potenciômetros <b>VINYL SPEED ADJUST</b>. Some o <b>WAVE DISPLAY</b>, os <b>3 hot cues</b> e a memória em <b>cartão SD</b>, e você tem o primeiro player realmente melhor que o vinil para trabalhar.</p>
<p><b>Com o que ele concorria e onde está hoje.</b> Concorria com o Technics SL-1200 e com o Denon DN-S3500/DN-S5000, e venceu por padronização: a partir do MK3, quase toda casa noturna passou a ter <b>dois CDJ-1000MK3 + um DJM-800</b> no meio — a "cabine padrão" dos anos 2000, que ainda aparece em rider técnico. Você o encontra em clube médio, bar consolidado, estúdio, locadora e escola. É o player que todo DJ deveria operar de olhos fechados, porque a lógica dele — CUE, loop, hot cue, jog VINYL, pitch com quatro faixas — é <b>exatamente</b> a dos CDJ-2000/3000 modernos.</p>

<h3>2. Ficha técnica (manual oficial Pioneer do CDJ-1000MK3)</h3>
<table>
<tr><td><b>Alimentação / consumo</b></td><td>CA 120 V, 60 Hz na edição consultada (versões regionais mudam) · 28 W</td></tr>
<tr><td><b>Peso</b></td><td>4,2 kg</td></tr>
<tr><td><b>Dimensões</b></td><td>320 (L) × 370 (P) × 105 (A) mm</td></tr>
<tr><td><b>Áudio</b></td><td>4 Hz – 20 kHz · sinal/ruído 115 dB ou mais (JEITA) · distorção 0,006 % (JEITA)</td></tr>
<tr><td><b>Prato (jog)</b></td><td><b>206 mm</b> de diâmetro, com visor no centro (ON JOG DISPLAY) · busca por frame de 1/75 s em pausa</td></tr>
<tr><td><b>Fader de pitch</b></td><td>100 mm · passo de 0,02 % dentro de ±6 % · faixas ±6 / ±10 / ±16 / WIDE · TEMPO RESET zera na hora</td></tr>
<tr><td><b>Hot cue</b></td><td>3 pontos (A, B, C) — cada um guarda cue <b>ou</b> loop</td></tr>
<tr><td><b>Memória externa</b></td><td>cartão <b>SD</b> ou MMC · até <b>100 pontos por disco</b></td></tr>
<tr><td><b>Mídia aceita</b></td><td>CD, CD-TEXT, CD-R e CD-RW (áudio ou MP3 em CD-ROM)</td></tr>
<tr><td><b>Contador de BPM</b></td><td>automático, faixa de detecção de <b>70 a 180 BPM</b></td></tr>
<tr><td><b>Visor de texto</b></td><td>matriz de 100 × 7 pontos · até 48 caracteres</td></tr>
<tr><td><b>Saídas</b></td><td>AUDIO OUT L/R (RCA) · DIGITAL OUT (RCA coaxial) · CONTROL (mini-plug)</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h3>3.1 O prato de 206 mm e o modo VINYL</h3>
<ul>
<li><b>JOG MODE SELECT</b> alterna VINYL e CDJ; o modo fica <b>salvo mesmo com o aparelho desligado</b>.</li>
<li><b>Modo VINYL:</b> encostar no <b>topo</b> do prato para a música; girando, o som sai conforme direção e velocidade. Isso é scratch. <b>Modo CDJ:</b> tocar o topo não faz nada; o prato só faz <b>pitch bend</b> — empurrar a batida para casar com a outra música.</li>
<li><b>Borda do prato:</b> em qualquer modo é <b>nudge</b> e não para a música — é por ela que se corrige um beatmatch escorregando. <b>Em pausa</b>, o prato faz busca por <b>frame</b> (1/75 s); segurando SEARCH ou TRACK SEARCH <b>e girando</b>, a busca fica super-rápida. O <b>ON JOG DISPLAY</b>, no centro, mostra estado do disco, posição do cue, memória e detecção de toque.</li>
</ul>

<h3>3.2 VINYL SPEED ADJUST e JOG ADJUST — o "toque" do aparelho</h3>
<ul>
<li><b>TOUCH/BRAKE</b> — define <b>quão rápido a música para</b> quando você encosta no prato (ou aperta PAUSE) em modo VINYL. No <b>anti-horário</b>, para na hora; no <b>horário</b>, desacelera devagar, como um vinil desligando.</li>
<li><b>RELEASE/START</b> — define <b>quão rápido a música volta</b> à velocidade normal quando você solta o prato ou dá PLAY. Anti-horário = instantâneo; horário = sobe devagar.</li>
<li><b>JOG ADJUST</b> — regula a <b>carga (resistência)</b> que você sente ao girar o prato, do leve ao pesado.</li>
<li><b>Na prática:</b> quem scratcha quer TOUCH e RELEASE bem no anti-horário e JOG ADJUST pesado. Quem só mixa deixa as rampas mais lentas — o "vinil desligando" no fim de uma música é feito exatamente assim.</li>
<li><b>Erro comum:</b> não conferir esses três controles na chegada. O DJ anterior pode ter deixado a rampa lentíssima — você aperta PAUSE achando que corta e a música desce escorregando na frente de todo mundo.</li>
</ul>

<h3>3.3 HOT CUE A, B, C e REC MODE</h3>
<ul>
<li><b>REC MODE</b> arma a gravação: com ele ligado, os LEDs A/B/C ficam <b>vermelhos</b> e apertar um deles <b>grava</b> o ponto atual. Ao ligar o aparelho o padrão é modo de <b>chamada</b>.</li>
<li><b>LED verde</b> = HOT CUE gravado. <b>LED laranja</b> = HOT LOOP gravado (o hot cue guarda loop também). <b>Apagado</b> = vazio. Com o REC MODE desligado, apertar A, B ou C <b>salta na hora</b> e continua tocando.</li>
<li><b>Na prática:</b> A = início limpo da faixa, B = o drop, C = o breakdown — com esses três você reconstrói a música ao vivo. <b>Erro comum:</b> deixar o REC MODE ligado, porque na hora de saltar você <b>apaga</b> o ponto e grava outro por cima.</li>
</ul>

<h3>3.4 CUE, PLAY/PAUSE e AUTO CUE</h3>
<ul>
<li><b>CUE</b> — parado num ponto novo, grava o cue. Tocando, volta ao cue e fica em espera (back cue). Parado no cue, segure para ouvir (cue point sampler). O LED pisca em pausa avisando que um novo ponto pode ser gravado. Em modo VINYL, o <b>PLAY/PAUSE</b> freia como vinil, com a rampa do TOUCH/BRAKE.</li>
<li><b>TIME MODE / AUTO CUE</b> — toque alterna REMAIN e ELAPSED. <b>Segurar 1 segundo</b> liga/desliga o AUTO CUE; <b>segurar 5 segundos</b> muda o <b>nível</b> dele, isto é, o quão baixo o som precisa estar para o player considerar "silêncio". Tudo fica salvo ao desligar.</li>
</ul>

<h3>3.5 Loop: IN / OUT / RELOOP-EXIT</h3>
<ul>
<li><b>LOOP IN / REALTIME CUE (IN ADJUST)</b> — marca o início do loop ao vivo e também grava o cue em tempo real; durante o loop, ajusta o ponto IN. <b>LOOP OUT (OUT ADJUST)</b> marca o fim, e durante o loop ajusta o OUT.</li>
<li><b>RELOOP / EXIT</b> — sai do loop ou refaz o último quantas vezes quiser. O loop é <b>seamless</b> e pode ser posto <b>no fim da faixa</b> para a música não acabar — recurso clássico para ganhar tempo enquanto procura a próxima.</li>
</ul>

<h3>3.6 Memória em cartão SD: MEMORY, CALL, DELETE</h3>
<ul>
<li><b>MEMORY</b> grava o ponto no cartão (o visor mostra <b>CARD MEMORY</b>). <b>CALL ◄ / ►</b> percorre os pontos do disco e <b>DELETE</b> apaga o selecionado.</li>
<li><b>Limite:</b> 100 pontos por disco (passou disso aparece <b>POINT FULL</b>). Sem cartão aparece <b>NO CARD</b>; com a portinha aberta, <b>CLOSE CARD DOOR</b>. Nunca abra a portinha com o indicador <b>piscando</b> — é acesso em andamento.</li>
</ul>

<h3>3.7 Pitch: TEMPO, RANGE, MASTER TEMPO e TEMPO RESET</h3>
<ul>
<li><b>TEMPO</b> — fader de 100 mm. Puxando para você (+) acelera; afastando (−) desacelera. <b>MASTER TEMPO</b> trava o tom (key lock).</li>
<li><b>TEMPO ±6 / ±10 / ±16 / WIDE</b> — muda o alcance. Em ±6 % a resolução é de 0,02 %: dá para casar batida sem tocar no jog.</li>
<li><b>TEMPO RESET</b> — devolve o pitch a 0,00 % <b>independentemente de onde o fader está</b>, e o indicador acende; apertar de novo libera. É o botão que salva quando você precisa voltar ao BPM original no meio da música.</li>
</ul>

<h3>3.8 Visor, DIRECTION e EJECT UNLOCK/LOCK</h3>
<ul>
<li><b>WAVE DISPLAY</b> — o desenho da faixa inteira comprimido na largura do visor: você <b>vê</b> onde o som cai e onde entra o break antes de chegar lá. O <b>TEXT MODE</b> alterna entre esse desenho e o nome da faixa; ao lado, o calendário e a barra de endereço mostram as faixas seguintes e a posição atual. <b>DIRECTION FWD/REV</b> é a chave de reprodução invertida.</li>
<li><b>EJECT UNLOCK / LOCK</b> — em <b>LOCK</b>, o EJECT <b>não ejeta o disco durante a reprodução</b>: é preciso pausar antes. <b>Deixe sempre em LOCK em cabine pública</b> — é o que impede a pessoa apoiada na bancada de arrancar seu disco no meio da música.</li>
</ul>

<h3>4. Como ligar</h3>
<ul>
<li><b>AUDIO OUT L/R (RCA)</b> → entrada <b>CD / LINE / AUX</b> do canal do mixer. Branco no L, vermelho no R.</li>
<li><b>DIGITAL OUT (RCA coaxial)</b> → DIGITAL IN do mixer (o exemplo do manual é o <b>DJM-800</b>; no DJM-1000, as entradas 4 a 6).</li>
<li><b>CONTROL (mini-plug)</b> → CONTROL do DJM (fader start e back cue) ou de outro CDJ (relay play).</li>
</ul>
<p><b>A regra que não muda:</b> <b>CDJ vai em LINE/CD/AUX; toca-discos vai em PHONO.</b> O manual do MK3 escreve em caixa alta: "DO NOT connect to the PHONO connectors, since it may result in distorted sound or improper playback". O motivo é físico — a entrada PHONO tem um pré-amplificador com equalização RIAA feito para os milivolts de uma cápsula, e o sinal de linha de um CDJ satura esse estágio. O contrário também quebra: toca-discos em LINE sai fino, sem grave e quase inaudível.</p>

<h3>5. Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1. Três hot cues.</b> Ligue o REC MODE, grave A no primeiro tempo, B numa virada e C no refrão. Desligue o REC MODE e salte A → C → B → A, dentro do tempo.</li>
<li><b>2. Scratch de verdade.</b> Ponha o JOG MODE em VINYL, encoste no topo do prato e sinta a música parar; gire para frente e para trás. Troque para CDJ e repita — o toque deixa de parar.</li>
<li><b>3. O toque do aparelho.</b> Gire o TOUCH/BRAKE todo para o horário e aperte PAUSE: a música desce devagar. Volte para o anti-horário: corte seco. Repita com o RELEASE/START.</li>
<li><b>4. Loop de quatro tempos.</b> Aperte LOOP IN num tempo forte e LOOP OUT quatro tempos depois. Ajuste com OUT ADJUST até fechar redondo, saia com RELOOP/EXIT e volte com RELOOP.</li>
<li><b>5. Pitch fino.</b> Ponha o alcance em ±6 % e procure +0,50 %. Depois aperte TEMPO RESET e veja o pitch voltar a 0,00 % com o fader fora do centro.</li>
</ul>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>REC MODE ligado durante o set.</b> Você acha que vai saltar para o hot cue e <b>apaga</b> o ponto, gravando por cima. Vermelho = grava; verde/laranja = salta.</li>
<li><b>EJECT em UNLOCK numa cabine pública.</b> Um esbarrão e o disco sai com a música tocando. Deixe em LOCK.</li>
<li><b>Não conferir o VINYL SPEED ADJUST na chegada.</b> É a causa nº 1 de "apertei pause e a música escorregou". Confira antes da primeira faixa, junto com o modo do jog e a faixa de pitch.</li>
<li><b>Contar com o BPM automático.</b> O contador detecta de <b>70 a 180 BPM</b> e erra em faixa com percussão irregular ou ao vivo — o número é ajuda, não verdade. E nunca mexa no cartão SD com o indicador piscando: corrompe os pontos de todos os discos gravados nele.</li>
</ul>
`.trim();

// ---------------------------------------------------------------------------
//  AULA 111 — PIONEER CDJ-200
// ---------------------------------------------------------------------------
const CDJ200 = `
<h3>1. O que é e por que existe</h3>
<p>O <b>Pioneer CDJ-200</b> (manual DRB1376) é o CD player de entrada que colocou a Pioneer dentro de <b>toda</b> casa noturna pequena, bar, festa de rua e escola de DJ. É compacto — 216 mm de largura, 3,2 kg — e foi desenhado para fazer o essencial muito bem: cue, pitch, loop e efeito, com o mesmo vocabulário dos irmãos maiores.</p>
<p><b>Que problema ele resolveu.</b> O CDJ-1000 era caro demais para um bar; o CDJ-100S, mais velho, já não tocava MP3 nem tinha loop. O CDJ-200 entrou no meio com três novidades que importam: <b>lê MP3 em CD-ROM</b> (com FOLDER SEARCH), tem <b>loop em tempo real com BEAT LOOP e LOOP CUTTER</b>, e traz <b>saída de fone com volume próprio na traseira</b> — raro em player, e que permite conferir a próxima faixa mesmo sem um mixer decente. Concorria com o Denon DN-S1000 e com os racks duplos; ganhou por confiabilidade e familiaridade.</p>
<p><b>Duas coisas que ele NÃO tem, e é importante saber:</b> <b>não tem HOT CUE</b> (nada de A/B/C — quem tem é o CDJ-1000MK3) e <b>não tem modo VINYL</b>. O prato de 100 mm faz pitch bend e busca por frame, mas <b>não para a música quando você toca em cima</b>. Não é aparelho de scratch.</p>
<p><b>Onde você encontra ele hoje.</b> Locadora, bar de bairro, igreja, escola, salão de festa e mercado de usado. Se você faz freelas, a chance de sentar na frente de um par de CDJ-200 ainda é grande — vale conhecer o painel de cor.</p>

<h3>2. Ficha técnica (manual oficial Pioneer DRB1376)</h3>
<table>
<tr><td><b>Alimentação / consumo</b></td><td>CA 220–240 V, 50/60 Hz · 16 W</td></tr>
<tr><td><b>Peso</b></td><td>3,2 kg</td></tr>
<tr><td><b>Dimensões</b></td><td>216 (L) × 292 (P) × 99,5 (A) mm</td></tr>
<tr><td><b>Áudio</b></td><td>4 Hz – 20 kHz · sinal/ruído 110 dB ou mais (JEITA) · distorção 0,006 % (JEITA)</td></tr>
<tr><td><b>Prato (jog)</b></td><td><b>100 mm</b> de diâmetro · busca por frame (1/75 s) em pausa · <b>sem modo VINYL</b></td></tr>
<tr><td><b>Fader de pitch</b></td><td>100 mm · faixas ±6 / ±10 / ±16 % · passo 0,02 % em ±6 % e 0,05 % em ±10 %/±16 % · ao ligar volta para <b>±10 %</b></td></tr>
<tr><td><b>Mídia aceita</b></td><td>CD, CD-TEXT, CD-R e CD-RW (áudio ou MP3 em CD-ROM)</td></tr>
<tr><td><b>MP3</b></td><td>MPEG-1 a 32/44,1/48 kHz, 32–320 kbps · MPEG-2 a 16/22,05/24 kHz, 16–160 kbps · <b>não suporta VBR</b> · mostra nome do arquivo, artista e álbum — <b>não mostra o título da tag ID3</b></td></tr>
<tr><td><b>Limites do CD-ROM MP3</b></td><td>até 8 níveis de pasta · 99 pastas + raiz · 999 arquivos por pasta · ISO9660, Disc At Once ou Track At Once · <b>sem multissessão e sem packet write</b></td></tr>
<tr><td><b>Saídas</b></td><td>AUDIO OUT L/R (RCA) · DIGITAL OUT (coaxial) · CONTROL (mini-plug) · <b>PHONES 6,3 mm com PHONES VOL, na traseira</b></td></tr>
<tr><td><b>Digital Jog Break</b></td><td><b>JET</b>: delay de 0 a 3 ms · <b>ZIP</b>: +100 % de tom no horário e até −1500 % no anti-horário · <b>WAH</b>: filtro de −12 dB/oitava, passa-altas até 4 kHz ou passa-baixas até 150 Hz</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h3>3.1 POWER, EJECT e os botões do visor</h3>
<ul>
<li><b>POWER</b> — a chave fica na <b>traseira</b>; no topo há só a marcação OFF/ON. <b>EJECT</b> para a rotação e devolve o disco — sempre com o canal fechado no mixer.</li>
<li><b>TEXT MODE</b> — alterna a informação de texto: número da faixa, CD-TEXT ou nome do arquivo MP3.</li>
<li><b>TIME MODE</b> — alterna <b>REMAIN</b> (quanto falta) e <b>ELAPSED</b> (quanto tocou). Aqui é um botão <b>separado</b> do AUTO CUE — diferente dos irmãos maiores, onde é o mesmo botão segurado.</li>
<li><b>AUTO CUE</b> — botão próprio: liga/desliga o salto do silêncio inicial e a espera no primeiro som.</li>
<li><b>Visor</b> — faixa, tempo em M:S:F, BPM, barra de endereço, TEMPO %, MT e a faixa de pitch ativa.</li>
</ul>

<h3>3.2 Navegação: FOLDER SEARCH, TRACK SEARCH, SEARCH</h3>
<ul>
<li><b>FOLDER SEARCH ◄ / ►</b> — muda de pasta num CD-ROM de MP3. Em CD de áudio comum não faz nada.</li>
<li><b>TRACK SEARCH ◄ / ►</b> — faixa anterior/próxima; o primeiro toque no ◄ volta ao <b>começo da faixa atual</b>.</li>
<li><b>SEARCH ◄◄ / ►►</b> — varre a faixa com som. Segure SEARCH ou TRACK SEARCH <b>e gire o prato</b> para busca super-rápida.</li>
<li><b>Erro comum:</b> gravar o CD-ROM em multissessão. O CDJ-200 lê <b>só a primeira sessão</b> — as músicas adicionadas depois simplesmente não existem para ele.</li>
</ul>

<h3>3.3 CUE e PLAY/PAUSE</h3>
<ul>
<li><b>CUE</b> — parado num ponto novo, grava o cue ali. Tocando, volta ao ponto e fica em espera (back cue). Parado no cue, segure para ouvir o trecho (cue point sampler).</li>
<li><b>PLAY/PAUSE</b> — como não há modo VINYL, a pausa é <b>seca e instantânea</b>: não existe frenagem de vinil.</li>
<li><b>Fluxo:</b> AUTO CUE marca o grosso → jog em pausa afina o frame → CUE grava o ponto exato.</li>
</ul>

<h3>3.4 Loop: IN/REALTIME CUE · OUT · RELOOP/EXIT · BEAT LOOP/LOOP CUTTER</h3>
<ul>
<li><b>IN / REALTIME CUE / HOT LOOP</b> — marca o início do loop ao vivo, sem parar a música; também grava o cue em tempo real. Apertado <b>durante</b> o loop, devolve a reprodução ao ponto IN (HOT LOOP).</li>
<li><b>OUT / OUT ADJUST</b> — marca o fim; a faixa repete entre IN e OUT. Durante o loop, ajusta o ponto OUT.</li>
<li><b>RELOOP / EXIT</b> — sai do loop ou refaz o último loop gravado.</li>
<li><b>BEAT LOOP / LOOP CUTTER</b> — fora do loop, cria um loop automático cujo fim é calculado pelo <b>BPM</b> da faixa. Apertado <b>com o loop rodando</b>, corta o trecho <b>pela metade</b> a cada toque (LOOP CUTTER). É assim que se fecha um rolê rítmico ao vivo. O <b>indicador BEAT LOOP</b> acende no ponto de loop-in.</li>
<li><b>Na prática:</b> o loop também serve para <b>não deixar a música acabar</b> — ponha um loop nos últimos compassos enquanto procura a próxima.</li>
</ul>

<h3>3.5 Pitch: TEMPO, faixa ±6/±10/±16 e MASTER TEMPO</h3>
<ul>
<li><b>TEMPO</b> — fader de 100 mm. Para você (+) acelera; para longe (−) desacelera; o centro tem clique.</li>
<li><b>TEMPO ±6 / ±10 / ±16</b> — a cada toque muda o alcance. Em ±6 % o passo é de <b>0,02 %</b>; em ±10 % e ±16 %, de 0,05 %.</li>
<li><b>MASTER TEMPO</b> — trava o tom. O manual avisa que o processamento digital <b>derruba a qualidade do som</b>.</li>
<li><b>Erro comum:</b> configurar ±16 % e desligar o aparelho — ao religar ele volta sozinho para <b>±10 %</b>.</li>
</ul>

<h3>3.6 JOG DIAL</h3>
<ul>
<li><b>Tocando</b>: pitch bend. FWD adianta, REV atrasa; ao soltar, volta ao tempo do fader. <b>Em pausa</b>: busca por frame (1/75 s) — é assim que se afina o cue. <b>Com o Jog Break ligado</b>: o prato dosa o efeito. <b>Não é prato de scratch</b> — tocar o topo não para a música.</li>
<li>O <b>indicador do jog</b> conta a história: apagado = sem disco; aceso = disco e modo normal; <b>piscando rápido</b> = Jog Break ativo; <b>piscando devagar</b> = Jog Break em HOLD.</li>
</ul>

<h3>3.7 DIGITAL JOG BREAK: JET, ZIP, WAH e HOLD/RESET</h3>
<ul>
<li><b>JET</b> — soma ao som um delay que varia de 0 ms (prato parado) a <b>3 ms</b> conforme o giro, criando a interferência "de turbina". Girando sem parar, o delay fica indo e voltando entre 0 e 3 ms.</li>
<li><b>ZIP</b> — muda o tom: até <b>+100 %</b> (uma oitava acima) no sentido horário; até <b>−1500 %</b> (quinze oitavas abaixo, já fora da audição) no anti-horário. É por isso que ele soa como um vinil sendo desligado.</li>
<li><b>WAH</b> — filtro de <b>−12 dB por oitava</b>: no horário vira passa-altas de até 4 kHz; no anti-horário, passa-baixas de até 150 Hz.</li>
<li><b>HOLD / RESET</b> — <b>HOLD</b> congela o efeito no valor atual; com ele ligado, apertar de novo faz <b>RESET</b> e desliga tudo. Os três efeitos são <b>cancelados quando o disco é ejetado</b>.</li>
</ul>

<h3>4. Como ligar</h3>
<ul>
<li><b>AUDIO OUT L/R (RCA)</b> → entrada <b>CD / LINE / AUX</b> do canal do mixer. Branco no L, vermelho no R.</li>
<li><b>DIGITAL OUT (coaxial)</b> → entrada digital do mixer ou de um gravador. Saem só os dados de áudio, sem subcódigos.</li>
<li><b>CONTROL (mini-plug)</b> → CONTROL do mixer Pioneer para <b>fader start</b> e back cue. O manual lista os modelos da época: <b>DJM-300, DJM-500, DJM-600, DJM-3000, DJM-707 e DJM-909</b>. Ligado no CONTROL de outro CDJ-200, faz <b>relay play</b>.</li>
<li><b>PHONES (6,3 mm) + PHONES VOL</b>, na traseira → seu fone, para conferir a próxima faixa quando não há mixer com pré-escuta decente.</li>
</ul>
<p><b>Onde cada player entra, segundo o manual:</b> no DJM-600, A nos conectores <b>CD1</b> e B nos <b>CD2</b>; no DJM-3000, A na <b>LINE 1 do canal 1</b> e B na <b>LINE 3 do canal 2</b>; nos DJM-707/909, CH-1 CD para o A e CH-2 CD para o B.</p>
<p><b>A regra que não muda:</b> <b>CDJ/XDJ/player digital vai em LINE (CD/AUX).</b> <b>Toca-discos vai em PHONO</b>, porque a cápsula gera um sinal fraquíssimo que precisa do pré-amplificador com curva RIAA da entrada PHONO. O manual do CDJ-200 é explícito: não ligue na PHONO, "distorção ou funcionamento inadequado podem ocorrer". Ao contrário, toca-discos em LINE sai fino, sem grave e baixíssimo.</p>

<h3>5. Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1. Cue e back cue.</b> Dê PLAY, deixe correr, aperte CUE e veja o player voltar e ficar em espera. Aperte PLAY. Repita três vezes.</li>
<li><b>2. Loop automático e corte.</b> Aperte BEAT LOOP para criar o loop. Com ele rodando, aperte de novo duas vezes (LOOP CUTTER) e ouça o trecho fechando pela metade a cada toque. Saia com RELOOP/EXIT.</li>
<li><b>3. Loop na mão.</b> Aperte IN num tempo forte e OUT quatro tempos depois. Se ficou torto, aperte OUT de novo e ajuste.</li>
<li><b>4. Os três efeitos.</b> Com a faixa tocando, ligue o JET e gire o prato devagar. Depois o ZIP (gire para os dois lados e ouça a diferença). Depois o WAH. Feche cada um antes de abrir o próximo.</li>
<li><b>5. HOLD e RESET.</b> Com o WAH aberto no meio do curso, aperte HOLD e solte o prato — o filtro congela. Aperte de novo: RESET desliga tudo.</li>
</ul>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Chegar procurando o hot cue.</b> O CDJ-200 <b>não tem</b>. Se o seu set depende de saltar entre pontos com um toque, avise a produção antes: você precisa de CDJ-1000MK3 ou superior.</li>
<li><b>Tentar scratchar no prato de 100 mm.</b> Não há modo VINYL. Tocar o topo não para a música — e forçar só desgasta o mecanismo.</li>
<li><b>Gravar o CD-ROM errado.</b> Multissessão, packet write, VBR e mais de 999 arquivos por pasta: nada disso funciona. Queime <b>Disc At Once</b>, MP3 com bitrate fixo, pastas curtas.</li>
<li><b>Confiar no nome que aparece no visor.</b> Ele mostra o <b>nome do arquivo</b>, o artista e o álbum, mas <b>não mostra o título da tag ID3</b>. Nomeie os arquivos direito — "faixa07.mp3" é inútil numa cabine escura.</li>
<li><b>Esquecer o Jog Break aberto ao trocar de música.</b> O efeito só se cancela ao ejetar o disco. Feche antes de abrir o próximo canal.</li>
</ul>
`.trim();

// ---------------------------------------------------------------------------
//  AULA 112 — PIONEER CDJ-800MK2
// ---------------------------------------------------------------------------
const CDJ800MK2 = `
<h3>1. O que é e por que existe</h3>
<p>O <b>Pioneer CDJ-800MK2</b> (manual DRB1400A) é o irmão do meio da família: tem o <b>mesmo prato de 206 mm</b> do CDJ-1000MK3, com o mesmo modo VINYL para scratch, mas num corpo de alumínio prata mais estreito (305 mm contra 320 mm) e por um preço bem menor. Foi ele que levou o scratch de CD para a cabine de quem não podia bancar dois CDJ-1000.</p>
<p><b>Que problema ele resolveu.</b> A conta não fechava para o clube médio: o CDJ-1000MK3 dava o prato certo mas custava caro; o CDJ-200 cabia no orçamento mas não scratchava. O CDJ-800MK2 é a resposta exata dessa faixa — mantém o que a mão sente (prato grande, modo VINYL, VINYL SPEED ADJUST, QUICK RETURN) e corta o que dava para viver sem: nada de <b>hot cue A/B/C</b>, nada de <b>cartão SD</b> (a memória é interna e guarda <b>um</b> ponto por disco), nada de WAVE display.</p>
<p><b>O que ele trouxe de próprio.</b> O <b>AUTO BEAT LOOP</b> com quatro botões — 1, 2, 4 e 8 batidas: um toque e o loop já está redondo no BPM da faixa. Quando já existe um loop manual, os mesmos botões viram <b>BEAT CUT</b> (1/8, 1/4, 1/2, 1/1). É o antepassado direto do BEAT LOOP dos CDJ modernos.</p>
<p><b>Onde você encontra ele hoje.</b> Clube médio, bar grande, locadora e estúdio. É excelente para aprender scratch e loop sem o preço do 1000MK3 — e é o player que mais aparece em cabine "híbrida", ao lado de um CDJ maior.</p>

<h3>2. Ficha técnica (manual oficial Pioneer DRB1400A)</h3>
<table>
<tr><td><b>Alimentação / consumo</b></td><td>CA 220–240 V, 50/60 Hz · 24 W</td></tr>
<tr><td><b>Peso</b></td><td>4,0 kg</td></tr>
<tr><td><b>Dimensões</b></td><td>305 (L) × 344,1 (P) × 108,5 (A) mm</td></tr>
<tr><td><b>Áudio</b></td><td>4 Hz – 20 kHz · sinal/ruído 115 dB ou mais (JEITA) · distorção 0,006 % (JEITA)</td></tr>
<tr><td><b>Prato (jog)</b></td><td><b>206 mm</b> de diâmetro, com visor no centro (ON JOG DISPLAY) · busca por frame (1/75 s) em pausa</td></tr>
<tr><td><b>Fader de pitch</b></td><td>100 mm · passo de 0,05 % dentro de ±10 % · duas faixas: <b>±10 %</b> e <b>WIDE</b></td></tr>
<tr><td><b>WIDE</b></td><td><b>±100 % tocando CD</b> · <b>±16 % tocando MP3</b> (o manual é explícito nessa diferença)</td></tr>
<tr><td><b>Memória de pontos</b></td><td>memória <b>interna</b>: <b>um</b> ponto de cue <b>ou</b> de loop <b>por disco</b> — não usa cartão</td></tr>
<tr><td><b>Loop automático</b></td><td>AUTO BEAT LOOP de 1, 2, 4 ou 8 batidas · BEAT CUT em 1/8, 1/4, 1/2 e 1/1</td></tr>
<tr><td><b>Mídia aceita</b></td><td>CD, CD-TEXT, CD-R e CD-RW (áudio ou MP3 em CD-ROM)</td></tr>
<tr><td><b>Saídas</b></td><td>AUDIO OUT L/R (RCA) · DIGITAL OUT (RCA coaxial) · CONTROL (mini-plug) · <b>DATA IN/OUT</b> (mini-plug) para copiar os pontos para outro CDJ-800MK2</td></tr>
<tr><td><b>Hot cue</b></td><td><b>não tem</b> — o CDJ-800MK2 não possui botões HOT CUE A/B/C</td></tr>
</table>

<h3>3. Controle por controle</h3>

<h3>3.1 O prato de 206 mm, JOG MODE e QUICK RETURN</h3>
<ul>
<li><b>JOG MODE VINYL</b> — com o LED aceso, encostar no <b>topo</b> do prato <b>para</b> a música; girando, o som sai conforme direção e velocidade. O modo fica salvo mesmo com o aparelho desligado. Em <b>modo CDJ</b> o prato só faz <b>pitch bend</b>; tocar o topo não faz nada.</li>
<li><b>Borda do prato</b> — em qualquer modo é <b>nudge</b>: empurra o andamento para casar a batida sem parar a música. O <b>ON JOG DISPLAY</b>, no centro, mostra estado do disco, posição do cue, memória e detecção de toque.</li>
<li><b>QUICK RETURN</b> — botão exclusivo desta linha. Com ele ligado e o jog em VINYL, <b>encostar no topo do prato devolve a música ao ponto de cue na hora</b>. É o atalho mais rápido que existe para reiniciar uma frase.</li>
<li><b>Erro comum:</b> deixar o QUICK RETURN ligado sem querer. Você encosta no prato para dar um nudge e a música <b>volta ao cue</b> na frente da pista.</li>
</ul>

<h3>3.2 VINYL SPEED ADJUST (TOUCH / RELEASE)</h3>
<ul>
<li>Um par de ajustes define as duas rampas do modo VINYL: <b>quão rápido a música para</b> quando você encosta no prato e <b>quão rápido ela volta</b> à velocidade quando solta.</li>
<li><b>Na prática:</b> para scratch, rampas curtas (parada e retomada instantâneas); para o efeito de "vinil desligando" no fim de uma faixa, rampa longa. <b>Erro comum:</b> não conferir isso na chegada — o DJ anterior pode ter deixado a rampa lenta.</li>
</ul>

<h3>3.3 CUE, PLAY/PAUSE e transporte</h3>
<ul>
<li><b>CUE</b> — parado num ponto novo, grava o cue ali. Tocando, volta ao cue e fica em espera (back cue). Parado no cue, segure para ouvir o trecho (cue point sampler). Em VINYL, o <b>PLAY/PAUSE</b> freia como vinil, com a rampa que você regulou.</li>
<li><b>TRACK SEARCH |◄◄ / ►►|</b> — faixa anterior / próxima. <b>SEARCH ◄◄ / ►►</b> varre com som; segure SEARCH, TRACK SEARCH ou FOLDER SEARCH <b>e gire o prato</b> para busca super-rápida. <b>MP3 FOLDER SEARCH ◄ / ►</b> muda de pasta num CD-ROM de MP3.</li>
<li><b>TIME MODE / AUTO CUE</b> — toque alterna REMAIN e ELAPSED; <b>segurar</b> liga/desliga o AUTO CUE. <b>TEXT MODE</b> mostra o nome da faixa (CD-TEXT ou tag do MP3). <b>EJECT</b> para a rotação e devolve o disco, sempre com o canal fechado no mixer.</li>
</ul>

<h3>3.4 Loop manual: REALTIME CUE/LOOP IN · LOOP OUT/CUT ADJUST · RELOOP/EXIT</h3>
<ul>
<li><b>REALTIME CUE / LOOP IN</b> — marca o início do loop <b>ao vivo</b>, sem parar a música; o mesmo botão grava o cue em tempo real. <b>LOOP OUT / CUT ADJUST</b> marca o fim, e é por ele que o loop entra no ajuste de corte.</li>
<li><b>RELOOP / EXIT</b> — sai do loop ou refaz o último quantas vezes quiser. O loop é <b>seamless</b> e pode ser posto no fim da faixa para a música não acabar.</li>
</ul>

<h3>3.5 AUTO BEAT LOOP (1 · 2 · 4 · 8) e BEAT CUT (1/8 · 1/4 · 1/2 · 1/1)</h3>
<ul>
<li><b>Sem loop rodando</b>, cada botão cria na hora um loop calculado pelo BPM: <b>1</b> = 1 batida, <b>2</b> = 2 batidas, <b>4</b> = 4 batidas (um compasso), <b>8</b> = 8 batidas (dois compassos).</li>
<li><b>Com um loop manual já rodando</b>, os mesmos botões viram <b>BEAT CUT</b> e cortam o loop existente: <b>1</b> → 1/8, <b>2</b> → 1/4, <b>4</b> → 1/2, <b>8</b> → devolve ao tamanho cheio (1/1).</li>
<li><b>Na prática:</b> é a maneira mais rápida da geração inteira de montar um build-up. Entre com 8, feche para 4, para 2, para 1 e solte com RELOOP/EXIT no tempo forte. Olhe sempre se já existe loop antes de tocar nesses botões.</li>
</ul>

<h3>3.6 Memória interna: CUE/LOOP MEMORY, CALL, DELETE e DATA IN/OUT</h3>
<ul>
<li><b>CUE/LOOP MEMORY</b> grava o ponto na memória <b>interna</b>; ele volta quando o mesmo disco é recolocado. <b>CALL ◄ / ►</b> chama os pontos e <b>DELETE</b> apaga o selecionado.</li>
<li><b>Limite importante:</b> guarda <b>um</b> ponto de cue <b>ou</b> de loop <b>por disco</b> — nada de 100 pontos em cartão como no CDJ-1000MK3. Planeje qual ponto vale a pena salvar.</li>
<li><b>DATA IN/OUT</b> (traseira) — com um cabo de mini-plug ligando este conector ao mesmo conector de <b>outro CDJ-800MK2</b>, você <b>copia</b> os pontos gravados de um player para o outro.</li>
</ul>

<h3>3.7 REV, pitch e MASTER TEMPO</h3>
<ul>
<li><b>REV</b> — inverte o sentido: a faixa toca de trás para frente, com o LED aceso. Aperte de novo para voltar.</li>
<li><b>TEMPO</b> — fader de 100 mm. Para você (+) acelera; para longe (−) desacelera.</li>
<li><b>TEMPO ±10 / WIDE</b> — só duas faixas. Em ±10 % o passo é de <b>0,05 %</b>; o botão acende quando WIDE está ativo.</li>
<li><b>WIDE tem dois valores diferentes</b>, e isso pega muita gente: <b>±100 % tocando CD</b> e apenas <b>±16 % tocando MP3</b>.</li>
<li><b>MASTER TEMPO</b> — trava o tom (key lock); acende em vermelho quando ativo.</li>
<li><b>Visor</b> — faixa, tempo com frames, TEMPO %, barra de endereço e o <b>BPM automático</b>. A barra avisa o fim da faixa piscando: é o seu relógio de mixagem.</li>
</ul>

<h3>4. Como ligar</h3>
<ul>
<li><b>AUDIO OUT L/R (RCA)</b> → entrada <b>CD / LINE / AUX</b> do canal do mixer. Branco no L, vermelho no R.</li>
<li><b>DIGITAL OUT (RCA coaxial)</b> → DIGITAL IN do mixer (o exemplo do manual é o <b>DJM-800</b>; no DJM-1000, as entradas 4 a 6).</li>
<li><b>CONTROL (mini-plug)</b> → CONTROL do DJM para <b>fader start</b> e back cue, ou de outro CDJ para <b>relay play</b>. <b>DATA IN/OUT</b> → mesmo conector de outro CDJ-800MK2, para copiar os pontos.</li>
</ul>
<p><b>Onde cada player entra, segundo o manual:</b> nos <b>DJM-600/300/500</b>, A nos conectores <b>CD1</b> e B nos <b>CD2</b>; nos <b>DJM-909/707</b>, CH1 CD para o A e CH2 CD para o B; no <b>DJM-3000</b>, A em <b>CH-1 LINE 1</b> e B em <b>CH-2 LINE 3</b>.</p>
<p><b>A regra que não muda:</b> <b>CDJ/XDJ/player digital vai em LINE (CD/AUX).</b> <b>Toca-discos vai em PHONO</b>, porque a cápsula entrega milivolts e depende do pré-amplificador com curva RIAA que só existe na entrada PHONO. O manual do CDJ-800MK2 diz: não ligue nos conectores PHONO IN. Trocar não funciona nos dois sentidos — CDJ em PHONO distorce feio; toca-discos em LINE fica fino e quase inaudível.</p>

<h3>5. Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1. Loop instantâneo e build-up.</b> Com a faixa tocando, aperte o <b>8</b> do AUTO BEAT LOOP. Depois aperte <b>4</b>, <b>2</b> e <b>1</b> em sequência, no tempo, e saia com RELOOP/EXIT num tempo forte.</li>
<li><b>2. Loop na mão + corte.</b> Marque um loop com LOOP IN e LOOP OUT (quatro tempos). Agora aperte o <b>4</b>: como já existe loop, ele vira BEAT CUT e corta o trecho pela metade. Volte ao tamanho cheio com o <b>8</b>.</li>
<li><b>3. Scratch e QUICK RETURN.</b> Ponha o JOG MODE em VINYL, encoste no topo do prato e sinta a música parar; gire para frente e para trás. Depois ligue o QUICK RETURN e encoste de novo — a faixa volta ao cue.</li>
<li><b>4. O toque do aparelho.</b> Mexa no VINYL SPEED ADJUST de um extremo ao outro e aperte PAUSE em cada posição, ouvindo a diferença entre corte seco e frenagem de vinil.</li>
<li><b>5. As duas faixas de pitch.</b> Deixe em ±10 % e procure +2,00 % no visor. Depois passe para WIDE e mova o mesmo tanto — perceba como o alcance explode e como a precisão some.</li>
</ul>

<h3>6. Erros que custam caro</h3>
<ul>
<li><b>Contar com hot cue.</b> O CDJ-800MK2 <b>não tem</b> A/B/C, e a memória interna guarda <b>um</b> ponto por disco. Se o seu set precisa de três pontos por música, é CDJ-1000MK3 para cima.</li>
<li><b>Assumir que WIDE é sempre ±100 %.</b> Em MP3 ele vira <b>±16 %</b>. Você ensaia com CD, chega na festa tocando MP3 e o alcance não está lá.</li>
<li><b>QUICK RETURN esquecido ligado.</b> Um encostão no prato para dar nudge e a música volta ao cue na frente da pista. Confira o LED na chegada — junto com o VINYL SPEED ADJUST, origem clássica do "apertei pause e a música escorregou".</li>
<li><b>Apertar o AUTO BEAT LOOP sem olhar se já há loop.</b> Fora do loop, "1" cria um loop de 1 batida; dentro do loop, "1" corta para <b>1/8</b>. São resultados totalmente diferentes.</li>
</ul>
`.trim();

// ---------------------------------------------------------------------------
const AULAS = [
  { id: "d1a00000-0000-4000-9000-000000000105", nome: "Pioneer CDJ-100S", html: CDJ100S },
  { id: "d1a00000-0000-4000-9000-000000000106", nome: "Pioneer CDJ-400", html: CDJ400 },
  { id: "d1a00000-0000-4000-9000-000000000107", nome: "Pioneer CDJ-1000MK3", html: CDJ1000MK3 },
  { id: "d1a00000-0000-4000-9000-000000000111", nome: "Pioneer CDJ-200", html: CDJ200 },
  { id: "d1a00000-0000-4000-9000-000000000112", nome: "Pioneer CDJ-800MK2", html: CDJ800MK2 },
];

(async () => {
  let erro = false;
  for (const a of AULAS) {
    const l = await req("GET", `/lessons?id=eq.${a.id}&select=id,titulo,conteudo_rico`);
    if (!l.length) throw new Error("aula não encontrada: " + a.id + " (" + a.nome + ")");
    a.antes = (l[0].conteudo_rico || "").length;
    a.titulo = l[0].titulo;
    if (/<script|<style|<img/i.test(a.html)) throw new Error("HTML proibido em " + a.nome);
    const faixa = a.html.length >= 6000 && a.html.length <= 11000;
    if (!faixa) erro = true;
    console.log(
      `${a.nome.padEnd(22)} ${String(a.antes).padStart(5)} -> ${String(a.html.length).padStart(6)} chars ` +
        `${faixa ? "OK " : "FORA DA FAIXA 6k-11k "}[${a.titulo}]`
    );
  }
  if (erro) throw new Error("alguma aula está fora da faixa 6.000–11.000 caracteres");
  if (DRY) {
    console.log("\n[dry-run] nada gravado.");
    return;
  }
  for (const a of AULAS) {
    await req("PATCH", `/lessons?id=eq.${a.id}`, { conteudo_rico: a.html }, { Prefer: "return=minimal" });
    console.log(`✓ gravado ${a.nome} (${a.html.length} chars)`);
  }
  console.log("\n— conferência pós-gravação —");
  for (const a of AULAS) {
    const l = await req("GET", `/lessons?id=eq.${a.id}&select=conteudo_rico`);
    const n = (l[0].conteudo_rico || "").length;
    console.log(`${a.nome.padEnd(22)} ${n} chars  ${n === a.html.length ? "OK" : "DIVERGENTE"}`);
  }
})();
