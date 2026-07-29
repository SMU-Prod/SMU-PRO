/**
 * apply-aulas-toca-discos.mjs — conteúdo COMPLETO das aulas de toca-disco/prato motorizado
 *
 * Aulas tratadas (SÓ PATCH de conteudo_rico — não toca id, module_id, ordem nem ai_animations):
 *   d1a00000-…-000000000201  Technics SL-1200MK7
 *   d1a00000-…-000000000202  Technics SL-1200MK2
 *   d1a00000-…-000000000121  Pioneer PLX-1000
 *   d1a00000-…-000000000401  Numark NS7
 *
 * FONTE DE VERDADE (Regra 2 do CLAUDE.md) — o que foi lido, e onde:
 *   • Technics SL-1200MK7 — manual oficial Panasonic/Technics "SL-1200MK7 Owner's Manual"
 *     (cursos-novos/pleno-dj/manuais/Technics-SL-1200MK7.pdf), lido com ferramentas/pdftext.mjs.
 *     Specs da pág. 23; ligações pág. 12; ajustes págs. 14-17; pitch/estroboscópio pág. 20.
 *   • Technics SL-1200MK2 — manual oficial (manuais/Technics-SL-1200MK2.pdf) É UM SCAN:
 *     0 objetos de texto, 10 imagens 3456x4412 1-bit. Foi lido pelas IMAGENS das páginas
 *     (Specifications na pág. 8, Connections na pág. 5, How to operate na pág. 6).
 *   • Pioneer PLX-1000 — o PDF do manual saiu do ar (docs.pioneerdj.com → 404/403).
 *     Ficha técnica tirada da PÁGINA OFICIAL de especificações da Pioneer DJ
 *     (pioneerdj.com/en/product/turntable/plx-1000/black/specifications/, snapshot 2021).
 *     Controle a controle: simulador da aula, cujos textos vieram do manual oficial (págs. 9 e 10).
 *   • Numark NS7 — manual oficial "NS7 Reference Manual v1.1" baixado de
 *     numark.com/images/product_downloads/ns7_reference_manual___v1.1.pdf.
 *     Specs da pág. 31; painéis traseiro/frontal pág. 5; top panel págs. 6-8; calibração pág. 27.
 *
 * Rodar:  node cursos-novos/pleno-dj/apply-aulas-toca-discos.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REST = 'https://pshynylvvkhhohftouoe.supabase.co/rest/v1';
const KEY = fs.readFileSync(path.resolve(__dirname, '../../.local/svckey'), 'utf8').trim();

/* ═══════════════════════════════════════════════════════════════════════════
   TECHNICS SL-1200MK7
   ═══════════════════════════════════════════════════════════════════════════ */
const MK7 = `
<h2>1. O que é e por que existe</h2>
<p>O <b>SL-1200</b> é o toca-discos que virou padrão de cabine no mundo inteiro. A Technics parou de fabricá-lo em 2010 e, por quase dez anos, quem quisesse um prato novo teve que comprar de outra marca. O <b>SL-1200MK7</b> é o retorno: mesma silhueta e as medidas de sempre (tampo de 453 × 353 mm), com o miolo refeito para o DJ de hoje.</p>
<p>O que mudou de verdade está no motor: um <b>direct drive coreless</b> — sem núcleo de ferro, portanto sem o "solavanco" magnético (cogging) dos motores tradicionais — com controle <b>digital</b> que troca o modo de acionamento conforme o momento (arrancando, em regime, freando). É isso que dá torque alto e pitch estável ao mesmo tempo. O braço mantém a suspensão em <b>gimbal</b> com rolamento usinado de alta precisão, que segura a agulha no sulco durante um scratch pesado.</p>
<p>E ganhou o que o MK2 nunca teve: <b>torque</b> e <b>freio</b> reguláveis em 4 níveis, <b>reprodução ao contrário (reverse)</b>, opção de <b>78 rpm</b>, LED azul ou vermelho, alcance de pitch <b>×2</b> (±16 %) e um <b>RESET</b> que zera o pitch na hora.</p>
<p>Concorre com o <b>Pioneer PLX-1000</b>, o <b>Reloop RP-8000</b> e o <b>Audio-Technica AT-LP1240</b>. Onde encontrar hoje: clube com cabine de vinil, setup de battle/scratch, rádio, estúdio e a casa do DJ que leva o próprio equipamento.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(manual oficial, pág. 23)</span></h2>
<table>
<tr><td><b>Tipo / motor</b></td><td>Toca-discos manual de tração direta — motor DC sem escovas, coreless, controle digital</td></tr>
<tr><td><b>Dimensões / peso</b></td><td>453 × 169 × 353 mm (L × A × P) · aprox. 9,6 kg</td></tr>
<tr><td><b>Alimentação / consumo</b></td><td>AC 120 V, 60 Hz — 8,0 W ligado / 0,2 W desligado <em>(manual norte-americano)</em></td></tr>
<tr><td><b>Prato</b></td><td>Alumínio injetado — diâmetro 332 mm, aprox. 1,8 kg (já com slipmat e slip sheet)</td></tr>
<tr><td><b>Velocidades / pitch</b></td><td>33 1/3 e 45 rpm (78 rpm por chave interna) · pitch ±8 % e ±16 %</td></tr>
<tr><td><b>Torque / partida / freio</b></td><td>1,8 kg·cm · 0,7 s da parada até 33 1/3 rpm · freio eletrônico</td></tr>
<tr><td><b>Wow &amp; flutter</b></td><td>0,025 % WRMS</td></tr>
<tr><td><b>Braço</b></td><td>Estático (static balance) — efetivo 230 mm, overhang 15 mm, offset 22°; erro de rastreamento até 2° 32' (sulco externo) e 0° 32' (interno) num disco de 30 cm</td></tr>
<tr><td><b>Altura do braço (VTA) / força da agulha</b></td><td>0 a 6 mm / 0 a 4 g, leitura direta no anel</td></tr>
<tr><td><b>Headshell / cápsulas</b></td><td>7,6 g, terminal de 4 pinos ø 1,2 mm; cápsulas de 5,6 a 12,0 g (14,3 a 20,7 g com headshell)</td></tr>
<tr><td><b>Saídas</b></td><td>PHONO OUT L/R + terminal <b>PHONO EARTH</b> (terra) + entrada AC. Cabo PHONO e fio terra acompanham o aparelho</td></tr>
</table>
<p><em>Não consta no manual:</em> relação sinal/ruído e rumble do MK7 (o MK2 publicava; o MK7 não), e nenhum dado de cápsula — porque o MK7 sai <b>sem cápsula</b>, ela é compra à parte.</p>

<h2>3. Controle por controle</h2>

<h3>Rotação e partida</h3>
<ul>
<li><b>ON/OFF (chave giratória, frente-esquerda)</b> — liga o aparelho e acende a luz do estroboscópio. <em>Erro comum:</em> desligar o POWER com o prato girando — o freio não trabalha assim e o prato desce solto.</li>
<li><b>START·STOP</b> — dá partida e para: 0,7 s até 33 1/3 rpm e freio eletrônico na parada. <em>Na prática:</em> vira efeito, o clássico "desligar a vitrola" no fim da faixa.</li>
<li><b>33 1/3 / 45</b> — velocidade: LP em 33, compacto em 45 (com o <b>adaptador EP</b>, que mora no recesso traseiro-esquerdo, se o furo for grande). Com o modo 78 habilitado por dentro, <b>33 e 45 juntos</b> dão 78 rpm. <em>Erro comum:</em> tocar um compacto em 33 e achar que a agulha está com defeito porque "ficou grave".</li>
</ul>

<h3>Pitch — velocidade fina</h3>
<ul>
<li><b>PITCH ADJ</b> — o cursor comprido à direita, escala <b>8 6 4 2 0 2 4 6 8</b>; com o aparelho na sua frente, o lado <b>+</b> é o de baixo (perto de você). Confira a escala impressa antes de empurrar: quem vem de player digital erra o lado no primeiro dia.</li>
<li><b>×2 (PITCH RANGE)</b> — LED apagado = ±8 %; aceso = ±16 %. <em>Na prática:</em> ±8 % para discos parecidos, ±16 % para andamentos bem diferentes. Dobrar o alcance dobra a sensibilidade.</li>
<li><b>RESET</b> — botão de apertar. Com o LED <b>aceso</b>, o prato fica travado na rotação exata e o PITCH ADJ <b>não faz efeito nenhum</b>. Aperte de novo e o cursor volta a mandar. <em>Erro comum:</em> empurrar o pitch meio minuto sem nada acontecer — o RESET estava aceso.</li>
<li><b>Estroboscópio</b> — as 4 fileiras de espelhinhos na borda do prato, iluminadas por um LED sincronizado com a frequência exata do controle digital. Cada fileira é um desvio: <b>+6,4 % / +3,3 % / rotação normal / −3,3 %</b>. A fileira que fica <b>parada</b> mostra a velocidade real. O manual é explícito: <em>use sempre a luz do próprio aparelho</em> — luz de casa de show engana.</li>
</ul>

<h3>Braço, cápsula e o que se ajusta nele</h3>
<ul>
<li><b>Contrapeso</b> — equilibre o braço no ar (ele flutua) e depois gire só o <b>anel numerado</b> até a força que a cápsula pede. Faixa 0 a 4 g, leitura direta.</li>
<li><b>ANTI-SKATING</b> — compensa a força que puxa a agulha para o centro. Regra do manual: <b>mesmo valor da força da agulha</b>; de <b>3 g em diante, anti-skating em 3</b>.</li>
<li><b>Anel de altura do braço (VTA) + ARM LOCK</b> — sobe/desce o braço de 0 a 6 mm. Tabela do manual: cápsula de 17 mm → posição 0; 18 → 1; até 23 mm → 6 (headshell de fábrica). Não sabe a altura? Pouse a agulha no disco e ajuste até o <b>braço ficar paralelo ao disco</b>. Depois <b>trave o arm lock até o fim</b> — o manual proíbe usar o aparelho com ele solto.</li>
<li><b>Alavanca de cue (lift)</b> — sobe e desce o braço com amortecimento hidráulico; a altura vem de fábrica entre 8 e 13 mm, regulável por parafuso sextavado. <b>Descanso + arm clamp</b>: devolva o braço e trave o grampo antes de mexer no aparelho ou transportar.</li>
<li><b>Headshell</b> — a concha de baioneta com a cápsula, que solta girando a porca de trava. <em>Na prática:</em> tenha um segundo headshell já regulado no <b>suporte de headshell</b> ao lado: troca de cápsula em 5 segundos, sem reajustar nada no meio do set. A <b>luz da agulha</b> fica logo à frente — aperte e o poste cromado sobe com um LED branco sobre a agulha.</li>
</ul>

<h3>Ajustes internos (o que o MK2 não tinha)</h3>
<p>Bloco de chaves DIP embaixo do aparelho. O manual manda <b>desligar e tirar o plugue da tomada</b> e usar chave Phillips fina:</p>
<ul>
<li><b>Chave 1 (LED)</b> — cor do estroboscópio, dos botões de velocidade, do ×2 e do LED do RESET: OFF = vermelho (fábrica), ON = azul.</li>
<li><b>Chave 3 (REV)</b> — libera a <b>reprodução ao contrário</b>: com o prato girando, aperte o(s) botão(ões) de velocidade junto com o START·STOP.</li>
<li><b>Chave 4 (78)</b> — libera o 78 rpm (33 + 45 juntos).</li>
<li><b>Chaves 5 e 6 (TQ1/TQ2)</b> — <b>torque</b> em 4 níveis. Alto = prato reage rápido, bom para scratch; baixo = arranque mais suave.</li>
<li><b>Chaves 7 e 8 (BK1/BK2)</b> — <b>freio</b> em 4 níveis: de "corta seco" a "desce devagar como vitrola velha".</li>
</ul>

<h2>4. Como ligar</h2>
<p>Aqui não há espaço para criatividade. A regra vale para o resto da vida:</p>
<ul>
<li><b>Toca-discos vai em PHONO.</b> O sinal da cápsula magnética é fraquíssimo (milivolts) e vem com a curva RIAA gravada no disco; a entrada PHONO tem o pré-amplificador que amplifica e desfaz a curva. O manual avisa: <em>se o amplificador não tiver entrada PHONO, você não terá volume nem qualidade adequados.</em></li>
<li><b>CDJ, XDJ, player digital e controlador vão em LINE.</b> Já saem em nível de linha: no PHONO saturam e distorcem. E toca-discos no LINE fica fino, baixo e sem grave.</li>
<li>Se o canal tiver <b>chave LINE/PHONO</b>, coloque em PHONO. Se o mixer não tiver entrada phono, use um <b>pré-amplificador phono externo</b> — e a saída do pré entra em LINE.</li>
</ul>
<p><b>O fio terra não é opcional.</b> Além do PHONO OUT L/R, o MK7 tem um parafuso marcado <b>PHONO EARTH</b>; o fio terra que vem na caixa liga esse parafuso ao GND do mixer. O manual: <em>"Be sure to connect the PHONO earth lead. Otherwise mains hum may occur"</em> — sem terra, ou com o terra frouxo, entra <b>zumbido de rede</b>. Aperte com chave Phillips: contato bambo zumbe igual a contato nenhum.</p>
<p><b>Ordem:</b> tudo desligado, cabo de força fora da tomada; ligue o cabo PHONO e o fio terra; só então a força.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Ligue o <b>POWER</b>, aperte <b>START·STOP</b> e conte os 0,7 s até estabilizar; aperte de novo e repare no freio.</li>
<li>Aperte <b>×2</b> e leve o <b>PITCH ADJ</b> ao extremo de baixo; confirme os +16 %. Volte para ±8 %: o mesmo curso agora dá metade.</li>
<li>Com o cursor fora do zero, aperte <b>RESET</b>: o LED acende e a velocidade volta ao exato; aperte de novo para liberar o cursor.</li>
<li>Ajuste o pitch até a <b>fileira do meio do estroboscópio ficar parada</b>; depois ache as do +3,3 % e do −3,3 % e veja para que lado elas andam.</li>
<li>Levante a <b>alavanca de cue</b>, arraste o braço para o meio do disco e baixe; acenda a <b>luz da agulha</b> e devolva o braço ao descanso. Depois aperte <b>33 e 45 juntos</b> e ouça o que 78 rpm faz com a faixa.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Esquecer o fio terra.</b> O zumbido quase nunca aparece no teste de tarde — aparece com a casa cheia e o sistema no talo.</li>
<li><b>Ligar o toca-discos em LINE.</b> Som baixo e fino, o DJ abre o gain no talo e entra chiado. Não é defeito do prato: é a entrada errada.</li>
<li><b>Transportar sem travar o braço.</b> Agulha quebrada em transporte é o prejuízo mais bobo da profissão: braço no descanso, clamp fechado, tampa fora.</li>
<li><b>Anti-skating no zero com força de agulha alta.</b> Pula no scratch e come o sulco. Casou VTF, casou anti-skating (de 3 g em diante, anti-skating em 3).</li>
<li><b>Ler o estroboscópio na luz da casa.</b> LED de palco e fluorescente piscam em frequências que mentem: só a lâmpada do aparelho é confiável. E mexer nas chaves DIP com ele ligado é proibido pelo manual.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════
   TECHNICS SL-1200MK2
   ═══════════════════════════════════════════════════════════════════════════ */
const MK2 = `
<h2>1. O que é e por que existe</h2>
<p>O <b>SL-1200MK2</b> saiu em 1979 e criou a profissão como ela existe. Antes dele, prato de DJ era prato de hi-fi adaptado: tração por correia, que escorrega quando você segura o disco, e chassi leve, que realimenta com o grave da pista. A Technics resolveu os dois de uma vez — <b>tração direta</b> (o prato é o próprio rotor do motor), <b>controle por quartzo</b> e gabinete de alumínio injetado sobre base de borracha pesada com quatro pés amortecedores.</p>
<p>O que isso significou na prática: dava para <b>segurar o disco com a mão e soltar</b>, e ele voltava à rotação em 0,7 s — o gesto que virou o scratch e o beat juggling. Deu para pôr o prato do lado da caixa sem o som "uivar". E o cursor de pitch de <b>±8 %</b>, longo e travado no centro pelo quartzo, deu ao DJ a ferramenta para casar BPM na mão, décadas antes do botão SYNC.</p>
<p>A produção foi encerrada em 2010, e é por isso que o MK2 vale o que vale no usado. Ele concorria com pratos de correia hi-fi (Thorens, Dual) e depois com os direct drive que copiaram sua receita (Vestax PDX, Numark TT, Stanton STR8). Hoje você o encontra em clube antigo, estúdio, rádio e — muito — nas mãos de quem faz scratch. Aprender o MK2 é aprender o vocabulário: quase todo prato de DJ desde então tem os mesmos controles nos mesmos lugares.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(manual oficial, "Specifications", pág. 8)</span></h2>
<table>
<tr><td><b>Tipo / motor</b></td><td>Quartz direct drive, toca-discos manual — motor DC sem escovas</td></tr>
<tr><td><b>Dimensões / peso</b></td><td>45,3 × 16,2 × 36 cm (L × A × P) · 12,5 kg (27,6 lb)</td></tr>
<tr><td><b>Alimentação / consumo</b></td><td>120 V AC, 60 Hz — 14 W</td></tr>
<tr><td><b>Prato</b></td><td>Alumínio injetado — diâmetro 33,2 cm, peso 2 kg</td></tr>
<tr><td><b>Velocidades / pitch</b></td><td>33 1/3 e 45 rpm · pitch ±8 % (quartz lock no centro)</td></tr>
<tr><td><b>Torque / partida / freio</b></td><td>1,5 kg·cm (1,3 lb·in) · 0,7 s da parada até 33 1/3 rpm · freio eletrônico</td></tr>
<tr><td><b>Wow &amp; flutter</b></td><td>0,01 % WRMS (só o conjunto do prato) · 0,025 % WRMS (JIS C5521) · ±0,035 % pico (IEC 98A ponderado)</td></tr>
<tr><td><b>Rumble</b></td><td>−56 dB (IEC 98A sem ponderação) · −78 dB (IEC 98A ponderado)</td></tr>
<tr><td><b>Braço</b></td><td>Universal, em S — efetivo 230 mm, overhang 15 mm, offset 22°, massa efetiva 12 g sem cápsula, atrito menor que 7 mg; erro de rastreamento até 2° 32' (sulco externo) e 0° 32' (interno) num disco de 30 cm</td></tr>
<tr><td><b>VTA / VTF / headshell</b></td><td>0 a 6 mm (anel marcado a cada 0,5 mm) · 0 a 2,5 g · headshell de 7,5 g</td></tr>
<tr><td><b>Cápsulas aceitas</b></td><td>6 a 10 g (13,5 a 17,5 g com headshell) · com peso auxiliar 9,5 a 13 g (17 a 20,5 g com headshell) · com o peso de shell 3,5 a 6,5 g (11 a 14 g com headshell)</td></tr>
<tr><td><b>Saídas</b></td><td>Cabo com RCA <b>L (branco)</b> e <b>R (vermelho)</b> + fio <b>GND</b> com terminal tipo garfo (spade lug)</td></tr>
</table>
<p><em>Não consta no manual:</em> tensão de saída (depende da cápsula, que é comprada à parte) e nenhuma medida de torque do freio — no MK2 o freio não é ajustável, isso só apareceu no MK7.</p>

<h2>3. Controle por controle</h2>

<h3>Rotação, partida e o cursor de pitch</h3>
<ul>
<li><b>POWER (chave giratória, frente-esquerda)</b> — liga o aparelho e acende o <b>farolete do estroboscópio</b>. Detalhe do manual que quase ninguém sabe: ao ligar, o aparelho <b>assume 33 1/3 sozinho</b>; se o disco é de 45, aperte o 45 depois. <em>Erro comum:</em> desligar o POWER com o prato girando — <b>o freio eletrônico não funciona</b> se o POWER for cortado antes do START/STOP.</li>
<li><b>START·STOP</b> — o botão soft-touch grande: arranque em 0,7 s (um quarto de volta) e freio eletrônico na parada. É soft-touch para não disparar por esbarrão. Os botões <b>33/45</b> ao lado acendem o LED da velocidade escolhida.</li>
<li><b>PITCH ADJ (±8 %)</b> — cursor longo à direita, escala serigrafada com o <b>+</b> para baixo (perto de você) e o <b>−</b> para cima. Com ele no centro, o <b>LED verde</b> acende: é o <em>quartz lock</em>, a rotação travada pelo cristal, exata. O MK2 <b>não tem</b> botão ×2 nem RESET — quem quiser ±16 % precisa do MK7 ou de outro prato.</li>
<li><b>Estroboscópio</b> — quatro fileiras de pontos usinados na borda do prato, iluminadas por um farolete pulsado <b>sincronizado com o quartzo</b> do próprio aparelho (não com a rede elétrica, como nos concorrentes da época). A fileira parada indica o desvio: <b>+6 % / +3,3 % / rotação exata / −3,3 %</b>. O manual avisa: <em>a leitura não funciona com lâmpada fluorescente</em>.</li>
<li><b>Adaptador de 45 rpm</b> — guardado no recesso traseiro-esquerdo; encaixa no eixo para compacto de furo grande. Guarde de volta: adaptador solto na cabine some.</li>
</ul>

<h3>Braço e cápsula — o que se regula (e nessa ordem)</h3>
<ul>
<li><b>Fiação da cápsula</b> — os quatro fios do headshell são coloridos: <b>branco</b> = esquerdo +, <b>azul</b> = esquerdo −, <b>vermelho</b> = direito +, <b>verde</b> = direito −. Trocar dois deles inverte a fase de um canal e o grave some na soma.</li>
<li><b>Overhang</b> — o manual traz um <b>gabarito</b> exclusivo desse braço: encaixe o headshell, afrouxe os parafusos e mova a cápsula até a ponta da agulha coincidir com a borda do gabarito. É o que dá o menor erro de rastreamento e a menor distorção.</li>
<li><b>Equilíbrio horizontal e força da agulha</b> — solte o clamp, tire o protetor da agulha e gire o <b>contrapeso inteiro</b> até o braço flutuar na horizontal. Depois segure o contrapeso e gire <b>só o anel numerado</b> até o "0" alinhar com a linha central do eixo; então gire o contrapeso até o número que a cápsula pede (0 a 2,5 g).</li>
<li><b>ANTI-SKATING (0 a 3)</b> — compensa a força que puxa a agulha para o centro. Regra do manual: <b>o mesmo valor da força da agulha</b>.</li>
<li><b>Headshell</b> — a concha de baioneta removível que leva a cápsula; solta girando a porca de trava. Tenha um segundo já regulado e a troca leva segundos.</li>
<li><b>Altura do braço (VTA) + ARM LOCK</b> — destrave o arm lock e gire o anel serrilhado (0 a 6 mm, marcações de 0,5 em 0,5). Tabela do manual: cápsula de <b>15 mm → posição 0</b>, 16 → 1, 17 → 2, 18 → 3, 19 → 4, 20 → 5, 21 mm → 6. Cápsula de 17,5 mm? Entre 2 e 3. <b>Trave depois</b> — sem travar, a altura muda sozinha no scratch.</li>
<li><b>Alavanca de cue (lift)</b> — sobe e desce o braço com amortecedor; a distância entre agulha e disco com o braço levantado vem de fábrica entre <b>8 e 13 mm</b> (parafuso sextavado, só gira com o lift abaixado). Terminou, devolva o braço ao <b>descanso</b> e feche o grampo.</li>
<li><b>Stylus illuminator</b> — o poste que sobe aceso apontando para a agulha. O manual avisa: <em>a chave precisa ser apertada até o fim</em> — pela metade, a lâmpada acende mas o poste não sobe.</li>
<li><b>Tampa e pés</b> — o manual pede para <b>não abrir nem fechar a tampa com o disco tocando</b> (a vibração faz a agulha pular). Os quatro pés são reguláveis, para nivelar: prato torto puxa a agulha para um lado.</li>
</ul>

<h2>4. Como ligar</h2>
<p><b>Toca-discos vai em PHONO. Sempre.</b> A cápsula magnética entrega milivolts, e o disco é gravado com a curva RIAA (grave cortado, agudo realçado) para caber no sulco. Quem amplifica e desfaz essa curva é o <b>pré-amplificador phono</b> da entrada PHONO do mixer. Em LINE dá aquele som fino e sem grave que todo iniciante já ouviu e achou que era defeito. <b>CDJ, XDJ, player digital e controlador vão em LINE</b> — já entregam nível de linha e, jogados no PHONO, entram uns 40 dB acima do que deviam.</p>
<p>No MK2 as ligações estão descritas no manual assim:</p>
<ul>
<li><b>L (branco)</b> → canal esquerdo da entrada PHONO do mixer/amplificador.</li>
<li><b>R (vermelho)</b> → canal direito da mesma entrada.</li>
<li><b>GND (terminal tipo garfo)</b> → parafuso <b>GND</b> do mixer/amplificador. O manual é direto: <em>"Be sure to connect the ground terminal firmly... If this connection is not made or is loose, a power source HUM will result."</em> Sem terra, ou com terra frouxo, o que sai é <b>zumbido de 60 Hz</b>.</li>
<li>Só depois de tudo ligado é que entra o <b>cabo de força</b> na tomada.</li>
</ul>
<p>Se o canal do mixer tem chave <b>LINE/PHONO</b>, ponha em PHONO. Se o mixer não tem entrada phono, use um <b>pré-amplificador phono externo</b> — e a saída dele vai em LINE.</p>
<p>Onde instalar (também está no manual): superfície firme e nivelada, longe das caixas, sem sol direto e ventilado. Rádio ligado perto do prato pode captar interferência.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Gire o <b>POWER</b>, veja o farolete acender e repare que o aparelho já assume 33 1/3. Aperte 45 e ouça a diferença.</li>
<li>Aperte <b>START·STOP</b> e cronometre a partida; aperte de novo e observe o freio. Depois tente o contrário: desligue o POWER com o prato girando e compare a parada (é o erro que o manual proíbe).</li>
<li>Leve o <b>PITCH ADJ</b> ao extremo e volte devagar até o <b>LED verde do centro</b> acender: é o quartz lock, a rotação exata.</li>
<li>Ajuste o pitch até uma fileira do estroboscópio ficar parada e identifique qual: 0, +3,3 % ou −3,3 %.</li>
<li>Levante a <b>alavanca de cue</b>, arraste o braço até o meio do disco, baixe e escute. Depois recolha o braço e feche a <b>trava</b>.</li>
<li>No <b>anti-skating</b>: para uma cápsula de 2 g, que valor o manual manda usar?</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Fio terra solto ou não ligado.</b> Causa número 1 de zumbido em cabine de vinil — e ele só aparece com o sistema alto, na frente do público.</li>
<li><b>Prato em LINE.</b> Som fino e baixo, o DJ abre o gain e entra chiado. Confira a chave LINE/PHONO do canal antes de acusar o cabo.</li>
<li><b>Cortar o POWER com o prato girando.</b> O freio não atua e o prato desce solto. START/STOP primeiro, POWER depois.</li>
<li><b>Anti-skating no zero.</b> A agulha pula no scratch, o canal direito distorce antes do esquerdo e o sulco vai embora. Casou VTF, casou anti-skating.</li>
<li><b>Trocar de cápsula sem refazer overhang, VTF, anti-skating e VTA.</b> Cápsula nova com regulagem da antiga = distorção e agulha comendo o disco. Quem troca muito tem um <b>segundo headshell já regulado</b>. E para transportar: braço travado no descanso e tampa fora da caixa.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════
   PIONEER PLX-1000
   ═══════════════════════════════════════════════════════════════════════════ */
const PLX = `
<h2>1. O que é e por que existe</h2>
<p>Quando a Technics parou de fabricar o SL-1200 em 2010, o mercado ficou com um buraco: clube que quebrava um prato não tinha o que comprar novo. O <b>PLX-1000</b> é a resposta da Pioneer DJ a esse buraco — um toca-discos <b>direct drive</b> profissional pensado para <em>substituir o padrão sem obrigar ninguém a reaprender nada</em>.</p>
<p>Ele copia o que precisava ser copiado: mesmo tampo de <b>453 × 353 mm</b>, prato de alumínio de <b>332 mm</b>, braço universal em <b>S</b> com rolamento em gimbal e comprimento efetivo de <b>230 mm</b>. Qualquer capa, case, slipmat ou headshell de SL-1200 serve. E melhora onde a Pioneer podia melhorar: <b>torque de partida maior que 4,5 kgf·cm</b> (contra 1,5 do MK2), partida em <b>0,3 s</b>, alcance de tempo de <b>±8 / ±16 / ±50 %</b> — os ±50 % transformam um disco de rock em techno — e, o detalhe que salva show, <b>cabo de áudio destacável</b>.</p>
<p>Concorre com o Reloop RP-8000, o Audio-Technica AT-LP1240 e, desde 2019, com o próprio Technics SL-1200MK7. Onde você encontra: cabine de clube que faz vinil, battle de scratch e casa de DJ que quer um prato novo com garantia — justamente por ser fácil de repor.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(especificação oficial Pioneer DJ)</span></h2>
<table>
<tr><td><b>Método de tração</b></td><td>Quartz lock, servo-type, direct drive</td></tr>
<tr><td><b>Motor</b></td><td>DC sem escovas, 3 fases</td></tr>
<tr><td><b>Dimensões (L × A × P)</b></td><td>453 × 159 × 353 mm</td></tr>
<tr><td><b>Peso</b></td><td>14,6 kg</td></tr>
<tr><td><b>Prato</b></td><td>Alumínio injetado — diâmetro 332 mm</td></tr>
<tr><td><b>Velocidades</b></td><td>33 1/3 e 45 rpm</td></tr>
<tr><td><b>Alcance do ajuste de rotação</b></td><td>±8 %, ±16 % e ±50 %</td></tr>
<tr><td><b>Torque de partida</b></td><td>maior que 4,5 kgf·cm</td></tr>
<tr><td><b>Tempo de partida</b></td><td>até 0,3 s (a 33 1/3 rpm)</td></tr>
<tr><td><b>Freio</b></td><td>Eletrônico</td></tr>
<tr><td><b>Wow &amp; flutter</b></td><td>menor que 0,01 % (medido pelo gerador de frequência interno do motor)</td></tr>
<tr><td><b>Relação sinal/ruído</b></td><td>70 dB</td></tr>
<tr><td><b>Braço</b></td><td>Universal em S — rolamento em gimbal, balanço estático (static balance)</td></tr>
<tr><td><b>Comprimento efetivo / overhang</b></td><td>230 mm / 15 mm</td></tr>
<tr><td><b>Erro de rastreamento</b></td><td>até 3°</td></tr>
<tr><td><b>Altura do braço (VTA)</b></td><td>0 a 6 mm</td></tr>
<tr><td><b>Força da agulha (VTF)</b></td><td>0 a 4 g (cada divisão = 0,1 g)</td></tr>
<tr><td><b>Cápsulas aceitas</b></td><td>2,5 a 12 g (já com os materiais de fixação)</td></tr>
<tr><td><b>Saída</b></td><td>1 saída analógica RCA (cabo destacável) + terminal de terra</td></tr>
<tr><td><b>Na caixa</b></td><td>PLX-1000, cabo de força, cabo de áudio, fio terra, adaptador EP, turntable sheet, slipmat + sheet, tampa, headshell, pesos (balance, sub e shell)</td></tr>
</table>
<p><em>Não consta na especificação oficial:</em> consumo em watts, peso do prato isolado e a massa efetiva do braço — a Pioneer não publica esses três. Não invente: se um cliente pedir, o caminho é medir ou perguntar ao fabricante.</p>

<h2>3. Controle por controle</h2>

<h3>Rotação e partida</h3>
<ul>
<li><b>POWER</b> — chave giratória. Em <b>ON</b> o aparelho liga e a <b>lâmpada estroboscópica lateral acende</b>, iluminando os pontos da borda do prato. Em OFF, nada responde.</li>
<li><b>START/STOP</b> — dá a partida e para. Com mais de 4,5 kgf·cm de torque, o prato chega na rotação em menos de meia volta (0,3 s). <em>Na prática:</em> esse torque alto é o que permite parar o disco com a mão e soltar sem perder o tempo — a diferença que o scratcher sente na hora.</li>
<li><b>33 / 45</b> — botões de velocidade. LP em 33 1/3; compacto em 45 (fica cerca de 35 % mais rápido e mais agudo).</li>
<li><b>Adaptador EP</b> — guardado num recesso no canto. Encaixa no eixo para centralizar compacto de furo grande.</li>
</ul>

<h3>Tempo (pitch) — o diferencial do PLX</h3>
<ul>
<li><b>TEMPO RANGE</b> — cada toque troca o alcance do fader: <b>±8 % → ±16 % → ±50 %</b>. O indicador ao lado <b>acende em azul</b> mostrando qual está ativo. <em>Na prática:</em> ±8 % para casar BPM com precisão fina; ±16 % quando os discos são bem diferentes; ±50 % é criação, não mixagem — vira o caráter da música inteira.</li>
<li><b>TEMPO slider</b> — o ajuste fino da rotação. É com ele que se casa o BPM de um disco com o do outro. Quanto maior o alcance escolhido, mais bruto fica cada milímetro do curso.</li>
<li><b>RESET</b> — aperte e o indicador acende: o prato passa a girar na <b>rotação exata</b> travada pelo quartzo (33 1/3 ou 45), <b>ignorando a posição do fader</b>. Aperte de novo para devolver o comando ao fader. <em>Erro comum:</em> tentar casar BPM com o RESET aceso — o fader não faz nada e o DJ pensa que o prato quebrou.</li>
<li><b>Estroboscópio</b> — pontos usinados na borda do prato, iluminados pela lâmpada lateral. É a leitura visual de quanto o TEMPO está desviando da rotação exata.</li>
</ul>

<h3>Braço, cápsula e ajustes</h3>
<ul>
<li><b>Balance weight (contrapeso)</b> — primeiro se <b>equilibra o braço no ar</b>; só depois se aplica peso. Sem esse passo, todo o resto do ajuste está errado.</li>
<li><b>Stylus pressure adjustment ring (anel de pressão)</b> — o anel numerado do contrapeso. Gire até o valor que o <b>fabricante da cápsula</b> indica (uma Concorde de DJ costuma pedir cerca de 3 g). Faixa 0 a 4 g, cada divisão vale 0,1 g.</li>
<li><b>ANTI SKATING</b> — anula a força que puxa a agulha para dentro do disco. Case o valor com a força da agulha.</li>
<li><b>HEIGHT ADJUST (anel graduado 0 a 6) + trava</b> — regula a altura do braço. Com o disco tocando, o <b>tubo do braço tem de ficar paralelo ao disco</b>. Solte a trava para regular e <b>trave depois</b>: se ficar solta, a altura muda sozinha no meio do set.</li>
<li><b>Arm lifter + lifter lever</b> — o elevador do braço e sua alavanca. Puxando, o braço sobe; empurrando, desce devagar sobre o sulco. É assim que se pousa a agulha sem riscar.</li>
<li><b>Arm rest + clamper</b> — apoio e trava do braço. Sempre trave para transportar.</li>
<li><b>Headshell + headshell stand</b> — a concha removível com a cápsula, e o poste ao lado para deixar um segundo headshell montado e pronto. Troca de cápsula em segundos, sem refazer regulagem.</li>
<li><b>Stylus illuminator + switch</b> — a lâmpada branca sobe até a altura da agulha para você ver o sulco no escuro. Aperte de novo para recolher.</li>
<li><b>Prato + slipmat</b> — 332 mm de alumínio injetado. Segure e arraste para dar scratch ou para segurar/puxar a batida.</li>
</ul>

<h2>4. Como ligar</h2>
<p><b>Toca-discos vai em PHONO.</b> A cápsula magnética entrega milivolts e o disco vem gravado com a curva RIAA. Quem amplifica esse sinal e desfaz a curva é o pré-amplificador phono que mora na entrada PHONO do mixer. É por isso que trocar não funciona: em LINE o vinil fica fino, baixo e sem grave.</p>
<p><b>CDJ, XDJ, player digital e controlador vão em LINE.</b> Eles já saem em nível de linha; no PHONO entram muito acima e distorcem.</p>
<ul>
<li><b>Saída analógica RCA (destacável)</b> → entrada <b>PHONO</b> do canal do mixer. Vermelho no direito, branco no esquerdo.</li>
<li><b>Fio terra</b> → parafuso <b>GND/SIGNAL GND</b> do mixer. Sem terra, ou com o parafuso frouxo, entra <b>zumbido de rede</b>. Aperte com a mão firme, não deixe "encostado".</li>
<li>Se o canal do mixer tem chave <b>LINE/PHONO</b>, coloque em PHONO. Sem entrada phono no mixer, use um <b>pré-amplificador phono externo</b> e a saída dele entra em LINE.</li>
<li><b>Cabo de força</b> por último, depois que áudio e terra já estiverem ligados.</li>
</ul>
<p><b>Por que o cabo destacável importa:</b> o ponto que mais dá problema em prato antigo é a solda do cabo de áudio dentro do aparelho, que quebra com o vai-e-vem do transporte e faz o canal sumir no meio do show. No PLX-1000 você troca o cabo em 10 segundos e continua tocando. Leve um cabo reserva na maleta — custa pouco e resolve o problema mais chato da noite.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Ligue o <b>POWER</b>, dê <b>START/STOP</b> e repare como o prato chega na rotação quase instantaneamente (0,3 s de spec contra 0,7 s do Technics).</li>
<li>Aperte <b>TEMPO RANGE</b> três vezes e acompanhe o indicador azul: ±8 → ±16 → ±50. Em cada alcance, leve o fader ao extremo e observe o que acontece com a música.</li>
<li>Com o fader fora do zero, aperte <b>RESET</b>: o indicador acende e a rotação volta a ser a exata. Mexa o fader e comprove que ele ficou sem efeito. Aperte de novo para liberar.</li>
<li>Use a <b>alavanca do lifter</b> para levantar o braço, arraste-o até outro trecho do disco e baixe. Depois recolha no <b>arm rest</b> e feche o clamper.</li>
<li>Ajuste o <b>anel de altura</b> e o <b>anti-skating</b> e explique em voz alta, para você mesmo, o que cada um está corrigindo. Se não souber explicar, volte à seção 3.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Prato ligado em LINE.</b> O clássico: som fino e fraco, o DJ abre o gain no talo e entra chiado. Confira a chave LINE/PHONO do canal antes de mexer em qualquer outra coisa.</li>
<li><b>Fio terra não ligado.</b> Zumbido garantido — e ele só aparece com o sistema alto, na frente do público. Terra ligado e parafuso apertado.</li>
<li><b>RESET aceso e ninguém percebe.</b> O fader de tempo fica morto. Antes de dizer que "o pitch não funciona", olhe o indicador do RESET.</li>
<li><b>±50 % sem querer.</b> Trocar o alcance no meio de uma mixagem faz o BPM sair do lugar na hora. Escolha o alcance <b>antes</b> de começar a casar as batidas, não durante.</li>
<li><b>Trava de altura solta.</b> O VTA vai mudando sozinho enquanto você scratcha, a agulha começa a pular e você culpa o disco. Regule primeiro, trave depois.</li>
<li><b>Transportar sem travar o braço.</b> Agulha quebrada por descuido de transporte é o prejuízo mais evitável da profissão.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════
   NUMARK NS7
   ═══════════════════════════════════════════════════════════════════════════ */
const NS7 = `
<h2>1. O que é e por que existe</h2>
<p>Em 2009, o DJ de vinil que quisesse usar a biblioteca digital tinha um caminho só: dois toca-discos + mixer + interface + vinil de timecode (Serato Scratch Live). Cinco caixas e um ponto de falha em cada emenda. O <b>Numark NS7</b>, feito com a <b>Serato</b>, resolveu isso em um aparelho só.</p>
<p>Ele é um <b>controlador com placa de som embutida</b> e — esta é a jogada — com <b>dois pratos motorizados de 7 polegadas em alumínio</b>, com slipmat e <b>vinil de verdade</b> por cima. O prato gira sozinho: você segura, solta, arranha, e o motor devolve a rotação. Chassi todo em metal, faders D-TYPE e crossfader <b>CP-PRO substituível pelo usuário</b>. E a <b>Strip Search</b>, fita sensível ao toque cujo comprimento representa a faixa inteira — tocar num ponto é o equivalente digital de pousar a agulha ali.</p>
<p>Saiu com o <b>Serato ITCH</b>, que lê crates, loops e cue points do Scratch Live — dava para migrar sem perder a biblioteca. Concorria com o Vestax VCI-300, o Denon DN-HS/HC e o conjunto Rane TTM57 + Scratch Live; hoje você o encontra usado, e a linhagem segue nos NS7II e NS7III. É o aparelho certo para entender <b>o que é um controlador com placa de som</b> — e por que ele se liga diferente de um toca-discos.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(manual oficial v1.1, pág. 31)</span></h2>
<table>
<tr><td><b>Dimensões (L × P × A)</b></td><td>762 × 403,2 × 98,4 mm (30" × 15 7/8" × 3 7/8")</td></tr>
<tr><td><b>Peso</b></td><td>16,1 kg (35,5 lb) — só o NS7, com os pratos montados</td></tr>
<tr><td><b>Pratos</b></td><td>2 × 7", alumínio, motorizados, com slipmat e vinil (adaptador de 45 rpm incluso)</td></tr>
<tr><td><b>Áudio digital</b></td><td>44,1 kHz / 24 bits</td></tr>
<tr><td><b>Resposta de frequência</b></td><td>22 Hz a 22 kHz (+0 / −0,5 dB)</td></tr>
<tr><td><b>Sinal/ruído · THD+N</b></td><td>XLR e RCA &gt; 98 dB(A), fone &gt; 93 dB(A) · THD+N &lt; 0,01 % em todas</td></tr>
<tr><td><b>Saídas</b></td><td>MASTER XLR balanceado (máx. +26,3 dBu) · MASTER RCA (+14,25 dBu) · BOOTH RCA · fone 1/4" e 1/8" (+19 dBu em &gt; 32 Ω)</td></tr>
<tr><td><b>Entradas</b></td><td>MIC 1/4" · AUX RCA (nível de linha) · USB (áudio e controle)</td></tr>
<tr><td><b>Alcance do pitch · software</b></td><td>±8 %, ±16 % e ±50 % · Serato ITCH (lê crates, loops e cue points do Scratch Live)</td></tr>
</table>
<p><em>Não consta no manual:</em> consumo elétrico, torque dos motores em kgf·cm e tempo de partida dos pratos — a Numark não publica. <em>Divergência registrada:</em> o simulador desta aula foi construído com a proporção 711 × 394 mm passada no briefing; o manual oficial diz <b>762 × 403,2 mm</b>. Valem os números do manual, que é a fonte.</p>

<h2>3. Controle por controle</h2>

<h3>Seção de mixer (itens 1 a 12 do manual)</h3>
<ul>
<li><b>GAIN TRIM</b> — nível <em>pré-fader e pré-EQ</em> do canal no software. Gain staging: suba até o pico bater no âmbar, nunca no vermelho constante.</li>
<li><b>TREBLE / MID / BASS</b> — EQ de 3 bandas: à esquerda é <b>kill</b> (corte total), no meio é plano, à direita dá 6 ou 12 dB conforme o Setup. Regra de cabine: <b>cortar, não somar</b>.</li>
<li><b>CHANNEL FADER</b> e <b>CROSSFADER</b> — volume do canal e mistura entre os lados. O crossfader é <b>substituível pelo usuário</b>: peça de desgaste, quem arranha troca sempre.</li>
<li><b>MASTER</b> e <b>BOOTH VOLUME</b> — mixagem principal e monitor de cabine, com volumes independentes: é assim que você ouve alto sem estourar a pista.</li>
<li><b>HEADPHONE MIX / MODE</b> — o MIX mistura no fone o áudio <em>pré-fader</em> dos canais 1 e 2; o MODE escolhe entre <b>MASTER</b> (o que toca) e <b>CH1 CH2</b> (o cue, para preparar a próxima faixa).</li>
<li><b>METER MODE + LED METERS</b> — em CH1-CH2 o medidor esquerdo é o canal 1 e o direito é o 2; em MASTER, a mixagem em estéreo. O <b>BPM METER</b> acende o LED branco central quando os decks estão no mesmo BPM (fora do centro, pende para o mais rápido) e também acusa quando um loop foi exatamente dobrado ou dividido pela metade.</li>
</ul>

<h3>Transporte e pratos (itens 13 a 18)</h3>
<ul>
<li><b>PLATTER</b> — em <b>Scratch Mode</b> (o padrão), segurar o vinil para o áudio como num disco e mover arranha. Em <b>Nudge Mode</b> (SCRATCH OFF aceso), mover só adianta ou atrasa a faixa. No Scratch Mode dá para dar nudge girando o <b>alumínio pela borda</b>.</li>
<li><b>PLAY / PAUSE</b> com <b>START TIME / STOP TIME</b> — os knobs regulam a rapidez do arranque e da parada, do instantâneo ao "desligar a vitrola".</li>
<li><b>CUE</b> — pausado, marca o ponto; tocando, volta ao ponto e pausa; segurando, toca dali e ao soltar volta e pausa. <b>SYNC</b> casa o andamento com o do outro deck.</li>
<li><b>BLEEP / REVERSE</b> — chave de 3 posições. Em <b>REVERSE</b> a faixa toca ao contrário e, ao voltar ao centro, segue de onde parou. Em <b>BLEEP</b> (com mola) também inverte, mas ao soltar volta para onde <em>estaria</em> se nunca tivesse invertido: é o censurador de palavrão ao vivo.</li>
</ul>

<h3>Cue points e loops (itens 19 a 30)</h3>
<ul>
<li><b>HOT CUE 1 a 5</b> — apagado, grava o cue point e acende branco; aceso, pula para lá. Pausado, segurar toca dali e soltar volta e pausa. <b>DELETE CUE</b>: <b>cue point não se sobrescreve</b>, apague antes — apertar apaga um, segurar apaga vários.</li>
<li><b>ON/OFF, IN, OUT, SELECT, RELOOP</b> — o loop manual: IN marca o começo, OUT marca o fim e o loop repete; SELECT percorre os loops da faixa (e cancela um iniciado por engano); RELOOP volta ao início.</li>
<li><b>MODE</b> — alterna os quatro botões entre <b>Manual</b> e <b>Autoloop</b> (loops de 1, 2, 4 e 8 tempos). <b>1/2 X</b> e <b>2 X</b> dividem ou dobram; <b>SHIFT LEFT/RIGHT</b> deslocam o loop <em>o próprio comprimento dele</em>.</li>
</ul>

<h3>Faixa, pitch e navegação (itens 31 a 47)</h3>
<ul>
<li><b>STRIP SEARCH</b> — o comprimento da fita é a faixa inteira; encoste num ponto e o áudio pula para lá. O manual é explícito: <b>não é para correr o dedo</b>.</li>
<li><b>TRACK ◄◄ / ►►</b> — volta ao começo (ou à faixa anterior, se nos primeiros segundos) e pula para a próxima; <b>TAP</b> corrige o BPM lido errado. <b>SCRATCH OFF</b> desliga o motor e para o prato — obrigatório para afinar Loop In/Out girando o prato.</li>
<li><b>KEYLOCK</b> — trava o tom original com o pitch mexido; o manual avisa que ele é <b>desligado sozinho enquanto você manipula o prato</b>, para o scratch soar natural.</li>
<li><b>PITCH RANGE</b> (±8, ±16 e ±50 %), <b>PITCH FADER</b> (LED acende em 0 %) e <b>PITCH BEND (+ / −)</b>, que adianta ou atrasa enquanto segurado.</li>
<li><b>SCROLL KNOB, BACK/FWD, CRATES, PREPARE, FILES</b> — navegação: gire, aperte para trocar de painel. <b>LOAD A / B</b> carregam nos decks (dois toques = <em>Instant Double</em>); <b>LOAD PREPARE</b> manda para a fila.</li>
</ul>

<h3>Painel frontal</h3>
<ul>
<li><b>FADER START</b>, <b>MOTOR TORQUE</b> (alto = prato moderno; baixo = prato clássico), <b>XFADER CONTOUR</b> (esquerda = fade suave; direita = corte seco), <b>XFADER REVERSE</b>, MIC/AUX GAIN, BASS e TREBLE (<b>analógicos</b>) e HEADPHONE VOLUME.</li>
</ul>

<h2>4. Como ligar</h2>
<p>Preste atenção nesta diferença, que é o erro que mais estraga som de festa: <b>o NS7 não é um toca-discos</b>. Ele tem placa de som dentro e entrega <b>nível de linha</b> — os pratos são controladores, não cápsulas magnéticas.</p>
<ul>
<li><b>Controlador, CDJ, XDJ e player digital vão em LINE.</b> Ao plugar o MASTER RCA do NS7 num mixer de casa, o canal tem de estar em <b>LINE</b>: em PHONO o sinal cai num pré-amplificador de ~40 dB com curva RIAA por cima e distorce, e não adianta baixar o gain.</li>
<li><b>Toca-discos vai em PHONO.</b> Vale para o Technics e o PLX-1000 das outras aulas: sinal fraco, precisa do pré. Trocar não funciona nos dois sentidos.</li>
</ul>
<p><b>As saídas do NS7 e onde cada uma entra:</b></p>
<ul>
<li><b>MASTER (XLR balanceado)</b> → PA da casa ou caixas ativas. É a saída preferida com cabo longo: balanceado rejeita ruído no caminho.</li>
<li><b>MASTER (RCA)</b> → amplificador, caixa ativa ou um canal <b>LINE</b> do mixer da casa (mesmo knob MASTER). <b>BOOTH (RCA)</b> → monitor de cabine, com volume próprio.</li>
<li><b>MIC (1/4") e AUX (RCA)</b>, no frontal → microfone e aparelho de nível de linha (CD player, celular). <b>USB</b> → computador com o ITCH; <b>fone</b> em 1/4" ou 1/8".</li>
</ul>
<p><b>Ordem de ligar (manual, evita estouro de caixa):</b> (1) fontes auxiliares, (2) NS7, (3) amplificadores. Ao terminar, ao contrário. Antes de conectar, deixe <b>faders e gains no zero</b>.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Grave um <b>hot cue no primeiro tempo</b> e volte nele duas vezes. Tente gravar por cima: não sobrescreve — use o <b>DELETE CUE</b> e regrave.</li>
<li>Monte um loop manual com <b>IN</b> e <b>OUT</b>, aperte <b>1/2 X</b> e <b>2 X</b> e ouça o loop encolher e crescer; use <b>SHIFT RIGHT</b> e repare que ele anda o próprio comprimento. Depois entre no <b>Autoloop</b> pelo <b>MODE</b> e dispare um loop de 4 tempos direto.</li>
<li>Case os dois decks só com o <b>PITCH FADER</b>, olhando o <b>BPM METER</b> até o LED branco acender. Só depois use o <b>SYNC</b>: você precisa saber fazer na mão antes de confiar no botão.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><b>Ligar o MASTER do NS7 na entrada PHONO do mixer da casa.</b> Distorção imediata e feia. Controlador é LINE, ponto.</li>
<li><b>Ligar os amplificadores antes do NS7.</b> O estouro do power-on vai direto para as caixas. Fontes, NS7, amplificadores — e o contrário para desligar.</li>
<li><b>Correr o dedo pela Strip Search.</b> Ela é para <em>tocar num ponto</em>; arrastar dá salto errático. E afinar Loop In/Out sem o <b>SCRATCH OFF</b> aceso não fecha nunca: o motor puxa o prato de volta.</li>
<li><b>Fader Start ligado sem querer.</b> O crossfader passa a dar play sozinho — as chaves ficam no painel frontal e os LEDs no superior avisam.</li>
<li><b>Calibrar errado.</b> Ao recalibrar, ponha knobs e faders <b>no extremo</b>, deixe os <b>faders por último</b> e lembre que <b>MIC/AUX GAIN, BASS e TREBLE são analógicos</b> e ficam de fora.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════ */
const AULAS = [
  { id: 'd1a00000-0000-4000-9000-000000000201', nome: 'Technics SL-1200MK7', html: MK7 },
  { id: 'd1a00000-0000-4000-9000-000000000202', nome: 'Technics SL-1200MK2', html: MK2 },
  { id: 'd1a00000-0000-4000-9000-000000000121', nome: 'Pioneer PLX-1000',    html: PLX },
  { id: 'd1a00000-0000-4000-9000-000000000401', nome: 'Numark NS7',          html: NS7 },
];

const H = {
  apikey: KEY,
  Authorization: 'Bearer ' + KEY,
  'Content-Type': 'application/json',
  Prefer: 'return=representation',
};

async function main() {
  // guarda: nenhuma aula fora da faixa d1a00000 (faixa do pleno-dj, _REGISTRO-IDS.mjs)
  for (const a of AULAS) {
    if (!a.id.startsWith('d1a00000-')) throw new Error('id fora da faixa do pleno-dj: ' + a.id);
  }

  for (const a of AULAS) {
    const antes = await (
      await fetch(REST + '/lessons?id=eq.' + a.id + '&select=id,titulo,conteudo_rico', { headers: H })
    ).json();
    if (!antes.length) { console.error('✗ aula não encontrada:', a.id, a.nome); continue; }
    const de = (antes[0].conteudo_rico || '').length;

    const r = await fetch(REST + '/lessons?id=eq.' + a.id, {
      method: 'PATCH',
      headers: H,
      body: JSON.stringify({ conteudo_rico: a.html }),   // SÓ conteudo_rico
    });
    if (!r.ok) { console.error('✗ PATCH falhou', a.nome, r.status, await r.text()); continue; }
    const j = await r.json();
    const para = (j[0].conteudo_rico || '').length;
    console.log('✓ ' + a.nome.padEnd(22) + ' ' + String(de).padStart(5) + ' → ' + String(para).padStart(6) + ' caracteres   [' + antes[0].titulo + ']');
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
