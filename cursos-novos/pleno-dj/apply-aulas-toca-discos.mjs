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
<p>O <strong>SL-1200</strong> é o toca-discos que virou padrão de cabine no mundo inteiro. A Technics parou de fabricá-lo em 2010 e, por quase dez anos, quem quisesse um prato novo teve que comprar de outra marca. O <strong>SL-1200MK7</strong> é o retorno: mesma silhueta e as medidas de sempre (tampo de 453 × 353 mm), com o miolo refeito para o DJ de hoje.</p>
<p>O que mudou de verdade está no motor: um <strong>direct drive coreless</strong> — sem núcleo de ferro, portanto sem o "solavanco" magnético (cogging) dos motores tradicionais — com controle <strong>digital</strong> que troca o modo de acionamento conforme o momento (arrancando, em regime, freando). É isso que dá torque alto e pitch estável ao mesmo tempo. O braço mantém a suspensão em <strong>gimbal</strong> com rolamento usinado de alta precisão, que segura a agulha no sulco durante um scratch pesado.</p>
<p>E ganhou o que o MK2 nunca teve: <strong>torque regulável</strong> em 4 níveis, <strong>freio regulável</strong> em 4 níveis, <strong>reprodução ao contrário (reverse)</strong>, opção de <strong>78 rpm</strong>, LED azul ou vermelho, alcance de pitch <strong>×2</strong> (±16 %) e um botão <strong>RESET</strong> que zera o pitch na hora.</p>
<p>Concorre de frente com o <strong>Pioneer PLX-1000</strong>, o <strong>Reloop RP-8000</strong> e o <strong>Audio-Technica AT-LP1240</strong>. Onde você encontra hoje: clube com cabine de vinil, setup de battle/scratch, rádio, estúdio e a casa do DJ que leva o próprio equipamento.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(manual oficial, pág. 23)</span></h2>
<table>
<tr><td><strong>Tipo / motor</strong></td><td>Toca-discos manual de tração direta — motor DC sem escovas, coreless, controle digital</td></tr>
<tr><td><strong>Dimensões (L × A × P)</strong></td><td>453 × 169 × 353 mm</td></tr>
<tr><td><strong>Peso</strong></td><td>aprox. 9,6 kg</td></tr>
<tr><td><strong>Alimentação / consumo</strong></td><td>AC 120 V, 60 Hz — 8,0 W ligado / aprox. 0,2 W desligado <em>(valor do manual norte-americano)</em></td></tr>
<tr><td><strong>Prato</strong></td><td>Alumínio injetado — diâmetro 332 mm, aprox. 1,8 kg (já com slipmat e slip sheet)</td></tr>
<tr><td><strong>Velocidades</strong></td><td>33 1/3 e 45 rpm (78 rpm liberado por chave interna)</td></tr>
<tr><td><strong>Alcance do pitch</strong></td><td>±8 % e ±16 %</td></tr>
<tr><td><strong>Torque / partida / freio</strong></td><td>1,8 kg·cm · 0,7 s da parada até 33 1/3 rpm · freio eletrônico</td></tr>
<tr><td><strong>Wow &amp; flutter</strong></td><td>0,025 % WRMS</td></tr>
<tr><td><strong>Braço</strong></td><td>Estático (static balance) — efetivo 230 mm, overhang 15 mm, offset 22°; erro de rastreamento até 2° 32' (sulco externo) e 0° 32' (interno) num disco de 30 cm</td></tr>
<tr><td><strong>Altura do braço (VTA) / força da agulha</strong></td><td>0 a 6 mm / 0 a 4 g, leitura direta no anel</td></tr>
<tr><td><strong>Headshell / cápsulas aceitas</strong></td><td>aprox. 7,6 g, terminal de 4 pinos ø 1,2 mm; cápsulas de 5,6 a 12,0 g (14,3 a 20,7 g com o headshell)</td></tr>
<tr><td><strong>Saídas</strong></td><td>PHONO OUT L/R + terminal <strong>PHONO EARTH</strong> (terra) + entrada AC. Cabo PHONO e fio terra acompanham o aparelho</td></tr>
</table>
<p><em>Não consta no manual:</em> relação sinal/ruído e rumble do MK7 (o MK2 publicava; o MK7 não), e nenhum dado de cápsula — porque o MK7 sai <strong>sem cápsula</strong>, ela é compra à parte.</p>

<h2>3. Controle por controle</h2>

<h3>Rotação e partida</h3>
<ul>
<li><strong>ON/OFF (chave giratória, frente-esquerda)</strong> — liga o aparelho e acende a luz do estroboscópio. <em>Erro comum:</em> desligar o POWER com o prato girando — o freio eletrônico não trabalha assim e o prato desce solto.</li>
<li><strong>START·STOP</strong> — dá partida e para. São 0,7 s até 33 1/3 rpm; ao parar, o freio eletrônico segura o prato. <em>Na prática:</em> o DJ usa como efeito, para o clássico "desligar a vitrola" no fim da faixa.</li>
<li><strong>33 1/3 / 45</strong> — velocidade: LP em 33, compacto em 45. Com o modo 78 habilitado por dentro, <strong>33 e 45 apertados juntos</strong> dão 78 rpm. <em>Erro comum:</em> tocar um compacto em 33 e achar que a agulha está com defeito porque "ficou grave".</li>
<li><strong>Adaptador EP</strong> — mora num recesso no canto traseiro-esquerdo; encaixa no eixo para centralizar compacto de furo grande.</li>
</ul>

<h3>Pitch — velocidade fina</h3>
<ul>
<li><strong>PITCH ADJ</strong> — o cursor comprido à direita, escala <strong>8 6 4 2 0 2 4 6 8</strong>; com o aparelho na sua frente, o lado <strong>+</strong> é o de baixo (perto de você). Confira a escala impressa antes de empurrar: quem vem de player digital erra o lado no primeiro dia.</li>
<li><strong>×2 (PITCH RANGE)</strong> — LED apagado = ±8 %; aceso = ±16 %. <em>Na prática:</em> ±8 % para casar BPM entre discos parecidos; ±16 % para andamentos bem diferentes. Dobrar o alcance dobra a sensibilidade: o mesmo milímetro de cursor mexe o dobro.</li>
<li><strong>RESET</strong> — botão de apertar. Com o LED <strong>aceso</strong>, o prato fica travado na rotação exata e o PITCH ADJ <strong>não faz efeito nenhum</strong>. Aperte de novo e o cursor volta a mandar. <em>Erro comum:</em> empurrar o pitch meio minuto sem nada acontecer — o RESET estava aceso.</li>
<li><strong>Estroboscópio</strong> — as 4 fileiras de espelhinhos na borda do prato, iluminadas por um LED sincronizado com a frequência exata do controle digital. Cada fileira é um desvio: <strong>+6,4 % / +3,3 % / rotação normal / −3,3 %</strong>. A fileira que fica <strong>parada</strong> mostra a velocidade real. O manual é explícito: <em>use sempre a luz do próprio aparelho</em> — luz de casa de show engana.</li>
</ul>

<h3>Braço, cápsula e o que se ajusta nele</h3>
<ul>
<li><strong>Contrapeso</strong> — equilibre o braço no ar (ele flutua) e depois gire só o <strong>anel numerado</strong> até a força que a cápsula pede. Faixa 0 a 4 g, leitura direta.</li>
<li><strong>ANTI-SKATING</strong> — compensa a força que puxa a agulha para o centro. Regra do manual: <strong>mesmo valor da força da agulha</strong>; a partir de <strong>3 g, anti-skating em 3</strong>. Fazendo scratch, ajuste conforme o movimento.</li>
<li><strong>Anel de altura do braço (VTA) + ARM LOCK</strong> — sobe/desce o braço de 0 a 6 mm. Tabela do manual: cápsula de 17 mm → posição 0; 18 → 1; até 23 mm → 6 (com o headshell de fábrica). Não sabe a altura? Pouse a agulha no disco e ajuste até o <strong>braço ficar paralelo ao disco</strong>. Depois <strong>trave o arm lock até o fim</strong> — pode precisar de força. O manual proíbe usar o aparelho com o arm lock solto.</li>
<li><strong>Alavanca de cue (lift)</strong> — sobe e desce o braço com amortecimento hidráulico; a altura vem de fábrica entre 8 e 13 mm, regulável por parafuso sextavado. <strong>Descanso + arm clamp</strong>: devolva o braço e trave o grampo antes de mexer no aparelho ou transportar.</li>
<li><strong>Headshell + porca de trava</strong> — a concha de baioneta com a cápsula, que solta girando a porca. <em>Na prática:</em> tenha um segundo headshell já regulado no <strong>suporte de headshell</strong> ao lado — troca de cápsula em 5 segundos, sem reajustar nada no meio do set.</li>
<li><strong>Luz da agulha (stylus light)</strong> — aperte e o poste cromado sobe com um LED branco em cima da agulha. Aperte para baixo para recolher.</li>
</ul>

<h3>Ajustes internos (o que o MK2 não tinha)</h3>
<p>Bloco de chaves DIP embaixo do aparelho. O manual manda <strong>desligar e tirar o plugue da tomada</strong> e usar chave Phillips fina:</p>
<ul>
<li><strong>Chave 1 (LED)</strong> — cor do estroboscópio, dos botões de velocidade, do ×2 e do LED do RESET: OFF = vermelho (fábrica), ON = azul.</li>
<li><strong>Chave 3 (REV)</strong> — libera a <strong>reprodução ao contrário</strong>: com o prato girando, aperte o(s) botão(ões) de velocidade junto com o START·STOP e a faixa toca de trás para frente.</li>
<li><strong>Chave 4 (78)</strong> — libera o 78 rpm (33 + 45 juntos).</li>
<li><strong>Chaves 5 e 6 (TQ1/TQ2)</strong> — <strong>torque</strong> em 4 níveis. Alto = prato reage rápido, bom para scratch; baixo = arranque mais suave.</li>
<li><strong>Chaves 7 e 8 (BK1/BK2)</strong> — <strong>freio</strong> em 4 níveis: de "corta seco" a "desce devagar como vitrola velha".</li>
</ul>

<h2>4. Como ligar</h2>
<p>Aqui não há espaço para criatividade. A regra vale para o resto da vida:</p>
<ul>
<li><strong>Toca-discos vai em PHONO.</strong> O sinal da cápsula magnética é fraquíssimo (milivolts) e vem com a curva RIAA gravada no disco. A entrada PHONO do mixer tem o pré-amplificador que amplifica esse sinal e desfaz a curva. O manual avisa em letra de forma: <em>se o amplificador não tiver entrada PHONO, você não terá volume nem qualidade adequados.</em></li>
<li><strong>CDJ, XDJ, player digital e controlador vão em LINE.</strong> Já saem em nível de linha: no PHONO saturam e distorcem. E toca-discos no LINE fica fino, baixo e sem grave.</li>
<li>Se o canal tiver <strong>chave LINE/PHONO</strong>, coloque em PHONO. Se o mixer não tiver entrada phono, use um <strong>pré-amplificador phono externo</strong> — e a saída do pré entra em LINE.</li>
</ul>
<p><strong>O fio terra não é opcional.</strong> Além do PHONO OUT L/R, o MK7 tem um parafuso marcado <strong>PHONO EARTH</strong>; o fio terra que vem na caixa liga esse parafuso ao GND do mixer. O manual: <em>"Be sure to connect the PHONO earth lead. Otherwise mains hum may occur"</em> — sem terra, ou com o terra frouxo, entra <strong>zumbido de rede</strong>. Aperte com chave Phillips: contato bambo zumbe igual a contato nenhum.</p>
<p><strong>Ordem:</strong> desligue tudo e tire o cabo de força da tomada; ligue o cabo PHONO e o fio terra; só então ligue a força.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Ligue o <strong>POWER</strong>, aperte <strong>START·STOP</strong> e conte: 0,7 s até estabilizar. Aperte de novo e repare no freio eletrônico segurando.</li>
<li>Aperte <strong>×2</strong> e leve o <strong>PITCH ADJ</strong> ao extremo de baixo; confirme na leitura os +16 %. Volte para ±8 % e repita: o mesmo curso agora dá metade.</li>
<li>Com o cursor fora do zero, aperte <strong>RESET</strong>: o LED acende e a velocidade volta ao exato. Aperte de novo e devolva o comando ao cursor.</li>
<li>Ajuste o pitch até a <strong>fileira do meio do estroboscópio ficar parada</strong>. Depois ache as fileiras do +3,3 % e do −3,3 % e veja para que lado elas andam.</li>
<li>Levante a <strong>alavanca de cue</strong>, arraste o braço para o meio do disco e baixe; acenda a <strong>luz da agulha</strong> e devolva o braço ao descanso. Depois aperte <strong>33 e 45 juntos</strong> e ouça o que 78 rpm faz com a faixa.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Esquecer o fio terra.</strong> O zumbido quase nunca aparece no teste de tarde com o PA baixo — aparece com a casa cheia e o sistema no talo. Terra ligado e apertado, sempre.</li>
<li><strong>Ligar o toca-discos em LINE.</strong> O som fica baixo e fino, o DJ abre o gain no talo e o que entra é chiado. Não é defeito do prato: é a entrada errada.</li>
<li><strong>Transportar sem travar o braço.</strong> Agulha quebrada em transporte é o prejuízo mais bobo da profissão. Braço no descanso, clamp fechado e a tampa fora.</li>
<li><strong>Anti-skating no zero com força de agulha alta.</strong> Pula no scratch e come o sulco. Casou VTF, casou anti-skating (a partir de 3 g, anti-skating em 3).</li>
<li><strong>Ler o estroboscópio na luz da casa.</strong> LED de palco e fluorescente piscam em frequências que mentem: só a lâmpada do próprio aparelho é confiável. E mexer nas chaves DIP com o aparelho ligado é proibido pelo manual — desligue e tire da tomada.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════
   TECHNICS SL-1200MK2
   ═══════════════════════════════════════════════════════════════════════════ */
const MK2 = `
<h2>1. O que é e por que existe</h2>
<p>O <strong>SL-1200MK2</strong> saiu em 1979 e criou a profissão como ela existe. Antes dele, prato de DJ era prato de hi-fi adaptado: tração por correia, que escorrega quando você segura o disco, e chassi leve, que realimenta com o grave da pista. A Technics resolveu os dois de uma vez — <strong>tração direta</strong> (o prato é o próprio rotor do motor), <strong>controle por quartzo</strong> e gabinete de alumínio injetado sobre base de borracha pesada com quatro pés amortecedores.</p>
<p>O que isso significou na prática: dava para <strong>segurar o disco com a mão e soltar</strong>, e ele voltava à rotação em 0,7 s — o gesto que virou o scratch e o beat juggling. Deu para pôr o prato do lado da caixa sem o som "uivar". E o cursor de pitch de <strong>±8 %</strong>, longo e travado no centro pelo quartzo, deu ao DJ a ferramenta para casar BPM na mão, décadas antes do botão SYNC.</p>
<p>A produção foi encerrada em 2010, e é por isso que o MK2 vale o que vale no usado. Ele concorria com pratos de correia hi-fi (Thorens, Dual) e depois com os direct drive que copiaram sua receita (Vestax PDX, Numark TT, Stanton STR8). Hoje você o encontra em clube antigo, estúdio, rádio e — muito — nas mãos de quem faz scratch. Aprender o MK2 é aprender o vocabulário: quase todo prato de DJ desde então tem os mesmos controles nos mesmos lugares.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(manual oficial, "Specifications", pág. 8)</span></h2>
<table>
<tr><td><strong>Tipo / motor</strong></td><td>Quartz direct drive, toca-discos manual — motor DC sem escovas</td></tr>
<tr><td><strong>Dimensões (L × A × P)</strong></td><td>45,3 × 16,2 × 36 cm</td></tr>
<tr><td><strong>Peso</strong></td><td>12,5 kg (27,6 lb)</td></tr>
<tr><td><strong>Alimentação / consumo</strong></td><td>120 V AC, 60 Hz — 14 W</td></tr>
<tr><td><strong>Prato</strong></td><td>Alumínio injetado — diâmetro 33,2 cm, peso 2 kg</td></tr>
<tr><td><strong>Velocidades</strong></td><td>33 1/3 e 45 rpm</td></tr>
<tr><td><strong>Alcance do pitch</strong></td><td>±8 % (quartz lock no centro)</td></tr>
<tr><td><strong>Torque / partida / freio</strong></td><td>1,5 kg·cm (1,3 lb·in) · 0,7 s da parada até 33 1/3 rpm · freio eletrônico</td></tr>
<tr><td><strong>Wow &amp; flutter</strong></td><td>0,01 % WRMS (só o conjunto do prato) · 0,025 % WRMS (JIS C5521) · ±0,035 % pico (IEC 98A ponderado)</td></tr>
<tr><td><strong>Rumble</strong></td><td>−56 dB (IEC 98A sem ponderação) · −78 dB (IEC 98A ponderado)</td></tr>
<tr><td><strong>Braço</strong></td><td>Universal, em S — efetivo 230 mm, overhang 15 mm, offset 22°, massa efetiva 12 g sem cápsula, atrito menor que 7 mg; erro de rastreamento até 2° 32' (sulco externo) e 0° 32' (interno) num disco de 30 cm</td></tr>
<tr><td><strong>VTA / VTF / headshell</strong></td><td>0 a 6 mm (anel marcado a cada 0,5 mm) · 0 a 2,5 g · headshell de 7,5 g</td></tr>
<tr><td><strong>Cápsulas aceitas</strong></td><td>6 a 10 g (13,5 a 17,5 g com headshell) · com peso auxiliar 9,5 a 13 g (17 a 20,5 g com headshell) · com o peso de shell 3,5 a 6,5 g (11 a 14 g com headshell)</td></tr>
<tr><td><strong>Saídas</strong></td><td>Cabo com RCA <strong>L (branco)</strong> e <strong>R (vermelho)</strong> + fio <strong>GND</strong> com terminal tipo garfo (spade lug)</td></tr>
</table>
<p><em>Não consta no manual:</em> tensão de saída (depende da cápsula, que é comprada à parte) e nenhuma medida de torque do freio — no MK2 o freio não é ajustável, isso só apareceu no MK7.</p>

<h2>3. Controle por controle</h2>

<h3>Rotação, partida e o cursor de pitch</h3>
<ul>
<li><strong>POWER (chave giratória, frente-esquerda)</strong> — liga o aparelho e acende o <strong>farolete do estroboscópio</strong>. Detalhe do manual que quase ninguém sabe: ao ligar o POWER, a mesa <strong>seleciona 33 1/3 sozinha</strong>; se o disco é de 45, aperte o botão 45 depois de ligar. <em>Erro comum:</em> desligar o POWER com o prato ainda girando — <strong>o freio eletrônico não funciona</strong> se o POWER for cortado antes do START/STOP. O prato desce solto e a agulha sofre.</li>
<li><strong>START·STOP</strong> — o botão soft-touch grande. Arranque em 0,7 s (um quarto de volta), freio eletrônico na parada. Foi feito exatamente assim para não disparar por esbarrão.</li>
<li><strong>33 1/3 / 45</strong> — velocidade. LED aceso na velocidade escolhida.</li>
<li><strong>PITCH ADJ (±8 %)</strong> — cursor longo à direita, escala serigrafada com o <strong>+</strong> para baixo (perto de você) e o <strong>−</strong> para cima. Com ele no centro, o <strong>LED verde</strong> acende: é o <em>quartz lock</em>, a rotação travada pelo cristal, exata. O MK2 <strong>não tem</strong> botão ×2 nem RESET — quem quiser ±16 % precisa do MK7 ou de outro prato.</li>
<li><strong>Estroboscópio</strong> — quatro fileiras de pontos usinados na borda do prato, iluminadas por um farolete pulsado <strong>sincronizado com o quartzo</strong> do próprio aparelho (não com a rede elétrica, como nos concorrentes da época). A fileira parada indica o desvio: <strong>+6 % / +3,3 % / rotação exata / −3,3 %</strong>. O manual avisa: <em>a leitura não funciona com lâmpada fluorescente</em>.</li>
<li><strong>Adaptador de 45 rpm</strong> — guardado no recesso traseiro-esquerdo; encaixa no eixo para compacto de furo grande. Guarde de volta: adaptador solto na cabine some.</li>
</ul>

<h3>Braço e cápsula — o que se regula (e nessa ordem)</h3>
<ul>
<li><strong>Fiação da cápsula</strong> — os quatro fios do headshell são coloridos: <strong>branco</strong> = esquerdo +, <strong>azul</strong> = esquerdo −, <strong>vermelho</strong> = direito +, <strong>verde</strong> = direito −. Trocar dois deles inverte a fase de um canal e o grave some na soma.</li>
<li><strong>Overhang</strong> — o manual traz um <strong>gabarito</strong> exclusivo desse braço: encaixe o headshell, afrouxe os parafusos e mova a cápsula até a ponta da agulha coincidir com a borda do gabarito. É o ajuste que dá o menor erro de rastreamento e a menor distorção.</li>
<li><strong>Equilíbrio horizontal e força da agulha</strong> — solte o clamp, tire o protetor da agulha e gire o <strong>contrapeso inteiro</strong> até o braço flutuar na horizontal. Depois segure o contrapeso e gire <strong>só o anel numerado</strong> até o "0" alinhar com a linha central do eixo; então gire o contrapeso até o número que a cápsula pede (0 a 2,5 g).</li>
<li><strong>ANTI-SKATING (0 a 3)</strong> — compensa a força que puxa a agulha para o centro. Regra do manual: <strong>o mesmo valor da força da agulha</strong>.</li>
<li><strong>Altura do braço (VTA) + ARM LOCK</strong> — destrave o arm lock e gire o anel serrilhado (0 a 6 mm, marcações de 0,5 em 0,5). Tabela do manual: cápsula de <strong>15 mm → posição 0</strong>, 16 → 1, 17 → 2, 18 → 3, 19 → 4, 20 → 5, 21 mm → 6. Cápsula de 17,5 mm? Entre 2 e 3. <strong>Trave depois</strong> — sem travar, a altura muda sozinha no scratch.</li>
<li><strong>Alavanca de cue (lift)</strong> — sobe e desce o braço com amortecedor. A distância entre a agulha e o disco com o braço levantado vem de fábrica entre <strong>8 e 13 mm</strong>; o parafuso de ajuste é sextavado e só gira com o lift abaixado.</li>
<li><strong>Descanso + arm clamp</strong> — devolva sempre o braço e feche o grampo.</li>
<li><strong>Stylus illuminator</strong> — o poste que sobe aceso apontando para a agulha. O manual avisa: <em>a chave precisa ser apertada até o fim</em> — pela metade, a lâmpada acende mas o poste não sobe.</li>
<li><strong>Tampa e pés</strong> — a tampa encaixa pelos dois lados e o manual pede para <strong>não abrir nem fechar com o disco tocando</strong> (a vibração faz a agulha pular). Os quatro pés são reguláveis e servem para nivelar o aparelho: prato torto puxa a agulha para um lado.</li>
</ul>

<h2>4. Como ligar</h2>
<p><strong>Toca-discos vai em PHONO. Sempre.</strong> A cápsula magnética entrega milivolts, e o disco é gravado com a curva RIAA (grave cortado, agudo realçado) para caber no sulco. Quem amplifica e desfaz essa curva é o <strong>pré-amplificador phono</strong> que existe dentro da entrada PHONO do mixer. Em LINE dá aquele som fino, distante e sem grave que todo iniciante já ouviu e achou que era defeito.</p>
<p><strong>CDJ, XDJ, player digital, notebook e controlador vão em LINE.</strong> Já entregam nível de linha; jogados no PHONO entram uns 40 dB acima do que deviam e distorcem feio.</p>
<p>No MK2 as ligações estão descritas no manual assim:</p>
<ul>
<li><strong>L (branco)</strong> → canal esquerdo da entrada PHONO do mixer/amplificador.</li>
<li><strong>R (vermelho)</strong> → canal direito da mesma entrada.</li>
<li><strong>GND (terminal tipo garfo)</strong> → parafuso <strong>GND</strong> do mixer/amplificador. O manual é direto: <em>"Be sure to connect the ground terminal firmly... If this connection is not made or is loose, a power source HUM will result."</em> Sem terra, ou com terra frouxo, o que sai é <strong>zumbido de 60 Hz</strong>.</li>
<li>Só depois de tudo ligado é que entra o <strong>cabo de força</strong> na tomada.</li>
</ul>
<p>Se o canal do mixer tem chave <strong>LINE/PHONO</strong>, ponha em PHONO. Se o mixer não tem entrada phono, use um <strong>pré-amplificador phono externo</strong> — e a saída dele vai em LINE.</p>
<p>Onde instalar (também está no manual): superfície firme e nivelada, longe das caixas, sem sol direto, sem umidade e ventilado. Rádio ligado perto do prato pode captar interferência.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Gire o <strong>POWER</strong>, veja o farolete acender e repare que o aparelho já assume 33 1/3. Aperte 45 e ouça a diferença.</li>
<li>Aperte <strong>START·STOP</strong> e cronometre a partida; aperte de novo e observe o freio. Depois tente o contrário: desligue o POWER com o prato girando e compare a parada (é o erro que o manual proíbe).</li>
<li>Leve o <strong>PITCH ADJ</strong> ao extremo de baixo e depois volte devagar até o <strong>LED verde do centro</strong> acender — esse é o quartz lock, a rotação exata.</li>
<li>Ajuste o pitch até uma fileira do estroboscópio ficar parada e identifique qual: 0, +3,3 % ou −3,3 %.</li>
<li>Levante a <strong>alavanca de cue</strong>, arraste o braço até o meio do disco, baixe a alavanca e escute. Depois recolha o braço para o descanso e feche a <strong>trava</strong>.</li>
<li>No <strong>anti-skating</strong>: para uma cápsula de 2 g, que valor o manual manda usar?</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Fio terra solto ou não ligado.</strong> É a causa número 1 de zumbido em cabine de vinil — e o zumbido só aparece quando o sistema está alto, ou seja, na frente do público.</li>
<li><strong>Prato em LINE.</strong> Som fino e baixo, DJ abre o gain, entra chiado, e alguém acaba culpando o cabo. Confira a chave LINE/PHONO do canal antes de acusar qualquer coisa.</li>
<li><strong>Cortar o POWER com o prato girando.</strong> O freio eletrônico não atua; o prato desce solto e você maltrata agulha e disco. START/STOP primeiro, POWER depois.</li>
<li><strong>Anti-skating no zero.</strong> A agulha pula no scratch, o canal direito distorce antes do esquerdo e o sulco vai embora. Casou VTF, casou anti-skating.</li>
<li><strong>Trocar de cápsula sem refazer overhang, VTF, anti-skating e VTA.</strong> Cápsula nova com regulagem da antiga = distorção e agulha comendo o disco. Quem troca muito tem um <strong>segundo headshell já regulado</strong>. E para transportar: braço travado no descanso e tampa fora da caixa.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════
   PIONEER PLX-1000
   ═══════════════════════════════════════════════════════════════════════════ */
const PLX = `
<h2>1. O que é e por que existe</h2>
<p>Quando a Technics parou de fabricar o SL-1200 em 2010, o mercado ficou com um buraco: clube que quebrava um prato não tinha o que comprar novo. O <strong>PLX-1000</strong> é a resposta da Pioneer DJ a esse buraco — um toca-discos <strong>direct drive</strong> profissional pensado para <em>substituir o padrão sem obrigar ninguém a reaprender nada</em>.</p>
<p>Ele copia o que precisava ser copiado: mesmo tampo de <strong>453 × 353 mm</strong>, prato de alumínio de <strong>332 mm</strong>, braço universal em <strong>S</strong> com rolamento em gimbal e comprimento efetivo de <strong>230 mm</strong>. Qualquer capa, case, slipmat ou headshell de SL-1200 serve. E melhora onde a Pioneer podia melhorar: <strong>torque de partida maior que 4,5 kgf·cm</strong> (contra 1,5 do MK2), partida em <strong>0,3 s</strong>, alcance de tempo de <strong>±8 / ±16 / ±50 %</strong> — os ±50 % transformam um disco de rock em techno — e, o detalhe que salva show, <strong>cabo de áudio destacável</strong>.</p>
<p>Concorre com o Reloop RP-8000, o Audio-Technica AT-LP1240 e, desde 2019, com o próprio Technics SL-1200MK7. Onde você encontra: cabine de clube que faz vinil, battle de scratch e casa de DJ que quer um prato novo com garantia — justamente por ser fácil de repor.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(especificação oficial Pioneer DJ)</span></h2>
<table>
<tr><td><strong>Método de tração</strong></td><td>Quartz lock, servo-type, direct drive</td></tr>
<tr><td><strong>Motor</strong></td><td>DC sem escovas, 3 fases</td></tr>
<tr><td><strong>Dimensões (L × A × P)</strong></td><td>453 × 159 × 353 mm</td></tr>
<tr><td><strong>Peso</strong></td><td>14,6 kg</td></tr>
<tr><td><strong>Prato</strong></td><td>Alumínio injetado — diâmetro 332 mm</td></tr>
<tr><td><strong>Velocidades</strong></td><td>33 1/3 e 45 rpm</td></tr>
<tr><td><strong>Alcance do ajuste de rotação</strong></td><td>±8 %, ±16 % e ±50 %</td></tr>
<tr><td><strong>Torque de partida</strong></td><td>maior que 4,5 kgf·cm</td></tr>
<tr><td><strong>Tempo de partida</strong></td><td>até 0,3 s (a 33 1/3 rpm)</td></tr>
<tr><td><strong>Freio</strong></td><td>Eletrônico</td></tr>
<tr><td><strong>Wow &amp; flutter</strong></td><td>menor que 0,01 % (medido pelo gerador de frequência interno do motor)</td></tr>
<tr><td><strong>Relação sinal/ruído</strong></td><td>70 dB</td></tr>
<tr><td><strong>Braço</strong></td><td>Universal em S — rolamento em gimbal, balanço estático (static balance)</td></tr>
<tr><td><strong>Comprimento efetivo / overhang</strong></td><td>230 mm / 15 mm</td></tr>
<tr><td><strong>Erro de rastreamento</strong></td><td>até 3°</td></tr>
<tr><td><strong>Altura do braço (VTA)</strong></td><td>0 a 6 mm</td></tr>
<tr><td><strong>Força da agulha (VTF)</strong></td><td>0 a 4 g (cada divisão = 0,1 g)</td></tr>
<tr><td><strong>Cápsulas aceitas</strong></td><td>2,5 a 12 g (já com os materiais de fixação)</td></tr>
<tr><td><strong>Saída</strong></td><td>1 saída analógica RCA (cabo destacável) + terminal de terra</td></tr>
<tr><td><strong>Na caixa</strong></td><td>PLX-1000, cabo de força, cabo de áudio, fio terra, adaptador EP, turntable sheet, slipmat + sheet, tampa, headshell, pesos (balance, sub e shell)</td></tr>
</table>
<p><em>Não consta na especificação oficial:</em> consumo em watts, peso do prato isolado e a massa efetiva do braço — a Pioneer não publica esses três. Não invente: se um cliente pedir, o caminho é medir ou perguntar ao fabricante.</p>

<h2>3. Controle por controle</h2>

<h3>Rotação e partida</h3>
<ul>
<li><strong>POWER</strong> — chave giratória. Em <strong>ON</strong> o aparelho liga e a <strong>lâmpada estroboscópica lateral acende</strong>, iluminando os pontos da borda do prato. Em OFF, nada responde.</li>
<li><strong>START/STOP</strong> — dá a partida e para. Com mais de 4,5 kgf·cm de torque, o prato chega na rotação em menos de meia volta (0,3 s). <em>Na prática:</em> esse torque alto é o que permite parar o disco com a mão e soltar sem perder o tempo — a diferença que o scratcher sente na hora.</li>
<li><strong>33 / 45</strong> — botões de velocidade. LP em 33 1/3; compacto em 45 (fica cerca de 35 % mais rápido e mais agudo).</li>
<li><strong>Adaptador EP</strong> — guardado num recesso no canto. Encaixa no eixo para centralizar compacto de furo grande.</li>
</ul>

<h3>Tempo (pitch) — o diferencial do PLX</h3>
<ul>
<li><strong>TEMPO RANGE</strong> — cada toque troca o alcance do fader: <strong>±8 % → ±16 % → ±50 %</strong>. O indicador ao lado <strong>acende em azul</strong> mostrando qual está ativo. <em>Na prática:</em> ±8 % para casar BPM com precisão fina; ±16 % quando os discos são bem diferentes; ±50 % é criação, não mixagem — vira o caráter da música inteira.</li>
<li><strong>TEMPO slider</strong> — o ajuste fino da rotação. É com ele que se casa o BPM de um disco com o do outro. Quanto maior o alcance escolhido, mais bruto fica cada milímetro do curso.</li>
<li><strong>RESET</strong> — aperte e o indicador acende: o prato passa a girar na <strong>rotação exata</strong> travada pelo quartzo (33 1/3 ou 45), <strong>ignorando a posição do fader</strong>. Aperte de novo para devolver o comando ao fader. <em>Erro comum:</em> tentar casar BPM com o RESET aceso — o fader não faz nada e o DJ pensa que o prato quebrou.</li>
<li><strong>Estroboscópio</strong> — pontos usinados na borda do prato, iluminados pela lâmpada lateral. É a leitura visual de quanto o TEMPO está desviando da rotação exata.</li>
</ul>

<h3>Braço, cápsula e ajustes</h3>
<ul>
<li><strong>Balance weight (contrapeso)</strong> — primeiro se <strong>equilibra o braço no ar</strong>; só depois se aplica peso. Sem esse passo, todo o resto do ajuste está errado.</li>
<li><strong>Stylus pressure adjustment ring (anel de pressão)</strong> — o anel numerado do contrapeso. Gire até o valor que o <strong>fabricante da cápsula</strong> indica (uma Concorde de DJ costuma pedir cerca de 3 g). Faixa 0 a 4 g, cada divisão vale 0,1 g.</li>
<li><strong>ANTI SKATING</strong> — anula a força que puxa a agulha para dentro do disco. Case o valor com a força da agulha.</li>
<li><strong>HEIGHT ADJUST (anel graduado 0 a 6) + trava</strong> — regula a altura do braço. Com o disco tocando, o <strong>tubo do braço tem de ficar paralelo ao disco</strong>. Solte a trava para regular e <strong>trave depois</strong>: se ficar solta, a altura muda sozinha no meio do set.</li>
<li><strong>Arm lifter + lifter lever</strong> — o elevador do braço e sua alavanca. Puxando, o braço sobe; empurrando, desce devagar sobre o sulco. É assim que se pousa a agulha sem riscar.</li>
<li><strong>Arm rest + clamper</strong> — apoio e trava do braço. Sempre trave para transportar.</li>
<li><strong>Headshell + headshell stand</strong> — a concha removível com a cápsula, e o poste ao lado para deixar um segundo headshell montado e pronto. Troca de cápsula em segundos, sem refazer regulagem.</li>
<li><strong>Stylus illuminator + switch</strong> — a lâmpada branca sobe até a altura da agulha para você ver o sulco no escuro. Aperte de novo para recolher.</li>
<li><strong>Prato + slipmat</strong> — 332 mm de alumínio injetado. Segure e arraste para dar scratch ou para segurar/puxar a batida.</li>
</ul>

<h2>4. Como ligar</h2>
<p><strong>Toca-discos vai em PHONO.</strong> A cápsula magnética entrega milivolts e o disco vem gravado com a curva RIAA. Quem amplifica esse sinal e desfaz a curva é o pré-amplificador phono que mora na entrada PHONO do mixer. É por isso que trocar não funciona: em LINE o vinil fica fino, baixo e sem grave.</p>
<p><strong>CDJ, XDJ, player digital e controlador vão em LINE.</strong> Eles já saem em nível de linha; no PHONO entram muito acima e distorcem.</p>
<ul>
<li><strong>Saída analógica RCA (destacável)</strong> → entrada <strong>PHONO</strong> do canal do mixer. Vermelho no direito, branco no esquerdo.</li>
<li><strong>Fio terra</strong> → parafuso <strong>GND/SIGNAL GND</strong> do mixer. Sem terra, ou com o parafuso frouxo, entra <strong>zumbido de rede</strong>. Aperte com a mão firme, não deixe "encostado".</li>
<li>Se o canal do mixer tem chave <strong>LINE/PHONO</strong>, coloque em PHONO. Sem entrada phono no mixer, use um <strong>pré-amplificador phono externo</strong> e a saída dele entra em LINE.</li>
<li><strong>Cabo de força</strong> por último, depois que áudio e terra já estiverem ligados.</li>
</ul>
<p><strong>Por que o cabo destacável importa:</strong> o ponto que mais dá problema em prato antigo é a solda do cabo de áudio dentro do aparelho, que quebra com o vai-e-vem do transporte e faz o canal sumir no meio do show. No PLX-1000 você troca o cabo em 10 segundos e continua tocando. Leve um cabo reserva na maleta — custa pouco e resolve o problema mais chato da noite.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Ligue o <strong>POWER</strong>, dê <strong>START/STOP</strong> e repare como o prato chega na rotação quase instantaneamente (0,3 s de spec contra 0,7 s do Technics).</li>
<li>Aperte <strong>TEMPO RANGE</strong> três vezes e acompanhe o indicador azul: ±8 → ±16 → ±50. Em cada alcance, leve o fader ao extremo e observe o que acontece com a música.</li>
<li>Com o fader fora do zero, aperte <strong>RESET</strong>: o indicador acende e a rotação volta a ser a exata. Mexa o fader e comprove que ele ficou sem efeito. Aperte de novo para liberar.</li>
<li>Use a <strong>alavanca do lifter</strong> para levantar o braço, arraste-o até outro trecho do disco e baixe. Depois recolha no <strong>arm rest</strong> e feche o clamper.</li>
<li>Ajuste o <strong>anel de altura</strong> e o <strong>anti-skating</strong> e explique em voz alta, para você mesmo, o que cada um está corrigindo. Se não souber explicar, volte à seção 3.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Prato ligado em LINE.</strong> O clássico: som fino e fraco, o DJ abre o gain no talo e entra chiado. Confira a chave LINE/PHONO do canal antes de mexer em qualquer outra coisa.</li>
<li><strong>Fio terra não ligado.</strong> Zumbido garantido — e ele só aparece com o sistema alto, na frente do público. Terra ligado e parafuso apertado.</li>
<li><strong>RESET aceso e ninguém percebe.</strong> O fader de tempo fica morto. Antes de dizer que "o pitch não funciona", olhe o indicador do RESET.</li>
<li><strong>±50 % sem querer.</strong> Trocar o alcance no meio de uma mixagem faz o BPM sair do lugar na hora. Escolha o alcance <strong>antes</strong> de começar a casar as batidas, não durante.</li>
<li><strong>Trava de altura solta.</strong> O VTA vai mudando sozinho enquanto você scratcha, a agulha começa a pular e você culpa o disco. Regule primeiro, trave depois.</li>
<li><strong>Transportar sem travar o braço.</strong> Agulha quebrada por descuido de transporte é o prejuízo mais evitável da profissão.</li>
</ul>
`.trim();

/* ═══════════════════════════════════════════════════════════════════════════
   NUMARK NS7
   ═══════════════════════════════════════════════════════════════════════════ */
const NS7 = `
<h2>1. O que é e por que existe</h2>
<p>Em 2009, o DJ de vinil que quisesse usar a biblioteca digital tinha um caminho só: dois toca-discos + mixer + interface + vinil de timecode (Serato Scratch Live). Cinco caixas, muito cabo e um ponto de falha em cada emenda. O <strong>Numark NS7</strong>, feito com a <strong>Serato</strong>, resolveu isso em um aparelho só.</p>
<p>Ele é um <strong>controlador com placa de som embutida</strong> e — esta é a jogada — com <strong>dois pratos motorizados de 7 polegadas em alumínio</strong>, com slipmat e <strong>disco de vinil de verdade</strong> por cima (adaptador de 45 rpm preso pelo parafuso do eixo). O prato gira sozinho: você segura, solta, arranha, e o motor devolve a rotação. Chassi todo em metal, faders de linha D-TYPE e crossfader <strong>CP-PRO substituível pelo usuário</strong>. E a <strong>Strip Search</strong>, uma fita sensível ao toque cujo comprimento representa a faixa inteira — tocar num ponto é o equivalente digital de pousar a agulha ali.</p>
<p>Saiu com o <strong>Serato ITCH</strong>, que lê crates, loops e cue points do Scratch Live — dava para migrar sem perder a biblioteca. Concorria com o Vestax VCI-300, o Denon DN-HS/HC e o conjunto Rane TTM57 + Scratch Live. Hoje você o encontra usado, e a linhagem continua nos NS7II e NS7III. É o aparelho certo para entender <strong>o que é um controlador com placa de som</strong> — e por que ele se liga de um jeito completamente diferente de um toca-discos.</p>

<h2>2. Ficha técnica <span style="font-weight:400">(manual oficial v1.1, pág. 31)</span></h2>
<table>
<tr><td><strong>Dimensões (L × P × A)</strong></td><td>762 × 403,2 × 98,4 mm (30" × 15 7/8" × 3 7/8")</td></tr>
<tr><td><strong>Peso</strong></td><td>16,1 kg (35,5 lb) — só o NS7, com os pratos montados</td></tr>
<tr><td><strong>Pratos</strong></td><td>2 × 7", alumínio, motorizados, com slipmat e vinil (adaptador de 45 rpm incluso)</td></tr>
<tr><td><strong>Áudio digital</strong></td><td>44,1 kHz / 24 bits</td></tr>
<tr><td><strong>Resposta de frequência</strong></td><td>22 Hz a 22 kHz (+0 / −0,5 dB)</td></tr>
<tr><td><strong>Sinal/ruído · THD+N</strong></td><td>XLR e RCA &gt; 98 dB(A), fone &gt; 93 dB(A) · THD+N &lt; 0,01 % em todas</td></tr>
<tr><td><strong>Saída máxima</strong></td><td>XLR +26,3 dBu em &gt; 1 kΩ · RCA +14,25 dBu em &gt; 1 kΩ · fone +19 dBu em &gt; 32 Ω</td></tr>
<tr><td><strong>Saídas</strong></td><td>MASTER XLR balanceado · MASTER RCA · BOOTH RCA · fone 1/4" e 1/8"</td></tr>
<tr><td><strong>Entradas</strong></td><td>MIC 1/4" · AUX RCA (nível de linha) · USB (áudio e controle)</td></tr>
<tr><td><strong>Alcance do pitch · software</strong></td><td>±8 %, ±16 % e ±50 % · Serato ITCH (lê crates, loops e cue points do Scratch Live)</td></tr>
<tr><td><strong>Na caixa</strong></td><td>NS7, 2 conjuntos de prato (alumínio + slipmat + vinil com adaptador), pôster de quickstart, cabo IEC, cabo USB, CD de software/driver, parafuso do eixo, chave allen, adesivos</td></tr>
</table>
<p><em>Não consta no manual:</em> consumo elétrico, torque dos motores em kgf·cm e tempo de partida dos pratos — a Numark não publica. <em>Divergência registrada:</em> o simulador desta aula foi construído com a proporção 711 × 394 mm passada no briefing; o manual oficial diz <strong>762 × 403,2 mm</strong>. Valem os números do manual, que é a fonte.</p>

<h2>3. Controle por controle</h2>

<h3>Seção de mixer (itens 1 a 12 do manual)</h3>
<ul>
<li><strong>GAIN TRIM</strong> — nível <em>pré-fader e pré-EQ</em> do canal no software. Gain staging: suba até o pico bater no âmbar, nunca no vermelho constante.</li>
<li><strong>TREBLE / MID / BASS</strong> — EQ de 3 bandas: à esquerda é <strong>kill</strong> (corte total), no meio é plano, à direita dá 6 ou 12 dB conforme o Setup. Regra de cabine: <strong>cortar, não somar</strong>.</li>
<li><strong>CHANNEL FADER</strong> e <strong>CROSSFADER</strong> — volume do canal e mistura entre os lados. O crossfader é <strong>substituível pelo usuário</strong>: é peça de desgaste, quem arranha troca sempre.</li>
<li><strong>MASTER</strong> e <strong>BOOTH VOLUME</strong> — mixagem principal (XLR e RCA) e monitor de cabine, com volumes independentes: é assim que você ouve alto sem estourar a pista.</li>
<li><strong>HEADPHONE MIX / MODE</strong> — o MIX mistura no fone o áudio <em>pré-fader</em> dos canais 1 e 2; o MODE escolhe entre <strong>MASTER</strong> (o que está tocando) e <strong>CH1 CH2</strong> (o cue, para preparar a próxima faixa).</li>
<li><strong>METER MODE + LED METERS</strong> — em CH1-CH2 o medidor esquerdo é o canal 1 e o direito é o 2; em MASTER, a mixagem em estéreo.</li>
<li><strong>BPM METER</strong> — LED branco central aceso = decks no mesmo BPM; fora do centro, pende para o mais rápido. Também acusa quando um loop foi exatamente dobrado ou dividido pela metade.</li>
</ul>

<h3>Transporte e pratos (itens 13 a 18)</h3>
<ul>
<li><strong>PLATTER</strong> — em <strong>Scratch Mode</strong> (o padrão), segurar o vinil para o áudio como num disco de verdade e mover arranha. Em <strong>Nudge Mode</strong> (SCRATCH OFF aceso), mover só adianta ou atrasa a faixa. No Scratch Mode dá para dar nudge girando o <strong>alumínio pela borda</strong>.</li>
<li><strong>PLAY / PAUSE</strong> com <strong>START TIME / STOP TIME</strong> — os knobs regulam a rapidez do arranque e da parada, do instantâneo ao clássico "desligar a vitrola".</li>
<li><strong>CUE</strong> — pausado, marca o ponto; tocando, volta ao ponto e pausa; segurando, toca a partir dele e ao soltar volta e pausa. <strong>SYNC</strong> casa o andamento com o do outro deck.</li>
<li><strong>BLEEP / REVERSE</strong> — chave de 3 posições. Em <strong>REVERSE</strong> a faixa toca ao contrário e, ao voltar ao centro, segue de onde parou. Em <strong>BLEEP</strong> (com mola) também inverte, mas ao soltar volta para onde <em>estaria</em> se nunca tivesse invertido — é o censurador de palavrão ao vivo.</li>
</ul>

<h3>Cue points e loops (itens 19 a 30)</h3>
<ul>
<li><strong>HOT CUE 1 a 5</strong> — apagado, grava o cue point e acende branco; aceso, pula para lá. Pausado, segurar toca dali e soltar volta e pausa.</li>
<li><strong>DELETE CUE</strong> — <strong>cue point não se sobrescreve</strong>: apague antes. Apertar apaga um; segurar apaga vários.</li>
<li><strong>ON/OFF, IN, OUT, SELECT, RELOOP</strong> — o loop manual: IN marca o começo, OUT marca o fim e o loop repete; SELECT percorre os loops da faixa (e cancela um iniciado por engano); RELOOP volta ao início e liga.</li>
<li><strong>MODE</strong> — alterna os quatro botões entre <strong>Manual</strong> e <strong>Autoloop</strong> (loops prontos de 1, 2, 4 e 8 tempos). <strong>1/2 X</strong> e <strong>2 X</strong> dividem ou dobram o loop; <strong>SHIFT LEFT/RIGHT</strong> deslocam o loop <em>o próprio comprimento dele</em>.</li>
</ul>

<h3>Faixa, pitch e navegação (itens 31 a 47)</h3>
<ul>
<li><strong>STRIP SEARCH</strong> — o comprimento da fita é a faixa inteira; encoste num ponto e o áudio pula para lá. O manual é explícito: <strong>não é para correr o dedo</strong> — para varrer, gire o prato.</li>
<li><strong>TRACK ◄◄ / ►►</strong> — volta ao começo (ou à faixa anterior, se nos primeiros segundos) e pula para a próxima. <strong>TAP</strong> corrige o BPM que o software leu errado.</li>
<li><strong>SCRATCH OFF</strong> — desliga o motor e para o prato. Obrigatório para afinar Loop In/Out girando o prato: com o motor ligado, ele puxa de volta.</li>
<li><strong>KEYLOCK</strong> — trava o tom original com o pitch mexido. O manual avisa que ele é <strong>desligado sozinho enquanto você manipula o prato</strong>, para o scratch soar natural.</li>
<li><strong>PITCH RANGE</strong> (±8 %, ±16 % e ±50 %), <strong>PITCH FADER</strong> (LED acende em 0 %) e <strong>PITCH BEND (+ / −)</strong>, que adianta ou atrasa enquanto você segura.</li>
<li><strong>SCROLL KNOB, BACK/FWD, CRATES, PREPARE, FILES</strong> — navegação: gire, aperte para trocar de painel. <strong>LOAD A / B</strong> carregam nos decks (dois toques = <em>Instant Double</em>); <strong>LOAD PREPARE</strong> manda para a fila.</li>
</ul>

<h3>Painel frontal</h3>
<ul>
<li>MIC (1/4"), AUX (RCA), chave MIC/AUX (desligue quando não usar), MIC/AUX GAIN, BASS e TREBLE (<strong>analógicos</strong>), fone 1/4" e 1/8" e HEADPHONE VOLUME.</li>
<li><strong>FADER START</strong> de cada lado, <strong>MOTOR TORQUE</strong> (alto = prato moderno; baixo = prato clássico), <strong>XFADER CONTOUR</strong> (esquerda = fade suave; direita = corte seco para scratch) e <strong>XFADER REVERSE</strong>.</li>
</ul>

<h2>4. Como ligar</h2>
<p>Preste atenção nesta diferença, porque é o erro que mais estraga som de festa: <strong>o NS7 não é um toca-discos</strong>. Ele tem placa de som dentro e entrega <strong>nível de linha</strong> — os pratos dele são controladores, não cápsulas magnéticas.</p>
<ul>
<li><strong>Controlador, CDJ, XDJ e player digital vão em LINE.</strong> Ao plugar o MASTER RCA do NS7 num mixer de casa, o canal tem de estar em <strong>LINE</strong>. Em PHONO o sinal cai num pré-amplificador de ~40 dB com curva RIAA por cima: distorção bruta, e não adianta baixar o gain.</li>
<li><strong>Toca-discos vai em PHONO.</strong> Vale para o Technics e o PLX-1000 das outras aulas — sinal fraco, precisa do pré-amplificador. Trocar não funciona nos dois sentidos.</li>
</ul>
<p><strong>As saídas do NS7 e onde cada uma entra:</strong></p>
<ul>
<li><strong>MASTER (XLR balanceado)</strong> → PA da casa ou caixas ativas. É a saída preferida com cabo longo: balanceado rejeita ruído no caminho.</li>
<li><strong>MASTER (RCA)</strong> → amplificador, caixa ativa ou um canal <strong>LINE</strong> do mixer da casa (mesmo knob MASTER). <strong>BOOTH (RCA)</strong> → monitor de cabine, com volume próprio.</li>
<li><strong>MIC (1/4") e AUX (RCA)</strong>, no painel frontal → microfone e aparelho de nível de linha (CD player, celular, sampler). <strong>USB</strong> → computador com o Serato ITCH; <strong>fone</strong> em 1/4" ou 1/8".</li>
</ul>
<p><strong>Ordem de ligar e desligar (está no manual e evita estouro de caixa):</strong> ligue (1) fontes auxiliares, (2) NS7, (3) amplificadores/caixas. Ao terminar, desligue ao contrário. Antes de conectar qualquer coisa, deixe <strong>todos os faders e gains no zero</strong>.</p>
<p><strong>Troca de DJ sem cortar o som:</strong> o manual ensina — coloque uma faixa de transição entrando pelo AUX (que vai direto ao MASTER OUTPUT), abaixe os dois decks, pare a reprodução, abra o ITCH no computador do próximo DJ e troque o cabo USB. Em até dez segundos o NS7 é reconhecido de novo.</p>

<h2>5. Na prática — faça no simulador desta aula</h2>
<ol>
<li>Grave um <strong>hot cue no primeiro tempo</strong> e volte nele duas vezes. Tente gravar por cima do mesmo botão: não sobrescreve. Use o <strong>DELETE CUE</strong> e regrave.</li>
<li>Monte um loop manual com <strong>IN</strong> e <strong>OUT</strong>, aperte <strong>1/2 X</strong> e <strong>2 X</strong> e ouça o loop encolher e crescer. Depois use <strong>SHIFT RIGHT</strong> e repare que ele anda o próprio comprimento.</li>
<li>Aperte <strong>MODE</strong>, entre no <strong>Autoloop</strong> e dispare um loop de 4 tempos direto — compare com o loop manual que você acabou de fazer.</li>
<li>Ligue o <strong>SCRATCH OFF</strong> de um deck e mova o prato: o motor não puxa mais de volta. Desligue e sinta a diferença.</li>
<li>Case os dois decks só com o <strong>PITCH FADER</strong>, olhando o <strong>BPM METER</strong> até o LED branco central acender. Só depois use o <strong>SYNC</strong> e compare: você precisa saber fazer na mão antes de confiar no botão.</li>
</ol>

<h2>6. Erros que custam caro</h2>
<ul>
<li><strong>Ligar o MASTER do NS7 na entrada PHONO do mixer da casa.</strong> Distorção imediata e feia, e alguém vai achar que a mesa está com defeito. Controlador é LINE, ponto.</li>
<li><strong>Ligar os amplificadores antes do NS7.</strong> O estouro do power-on vai direto para as caixas. Fontes primeiro, NS7 depois, amplificadores por último — e o contrário para desligar.</li>
<li><strong>Correr o dedo pela Strip Search.</strong> Ela é para <em>tocar num ponto</em>, como pousar a agulha; arrastar dá salto errático. E afinar Loop In/Out sem o <strong>SCRATCH OFF</strong> aceso não fecha nunca: o motor puxa o prato de volta.</li>
<li><strong>Fader Start ligado sem querer.</strong> O crossfader passa a dar play sozinho. As chaves ficam no painel frontal e os LEDs no superior avisam — olhe antes de começar.</li>
<li><strong>Calibrar errado.</strong> Ao recalibrar (depois de firmware novo), ponha todos os knobs e faders <strong>no extremo</strong>, deixe os <strong>faders por último</strong> e lembre que <strong>MIC/AUX GAIN, BASS e TREBLE são analógicos</strong> e ficam de fora. Meio milímetro fora do fim de curso já dá calibração torta.</li>
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
