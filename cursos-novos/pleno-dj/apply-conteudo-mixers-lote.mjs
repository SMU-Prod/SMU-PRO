// ============================================================================
// CONTEÚDO COMPLETO — 4 aulas de equipamento do módulo de catálogo do pleno-dj
//   119 Pioneer DJM-900NXS2 · 120 Pioneer DJM-V10
//   302 Denon DJ X1850 Prime · 301 Denon DJ Prime 4+
//
// SÓ faz PATCH de `conteudo_rico`. Não toca em id, module_id, ordem nem
// ai_animations (o simulador de cada aula já está certo e publicado).
//
// FONTES (REGRA 2 — nunca inventar):
//  · Denon Prime 4 ....... manual oficial (manuais/Denon-Prime-4.pdf), seções
//                          Features > Top Panel / Rear Panel e Appendix >
//                          Technical Specifications (p. 34-35).
//  · Denon X1850 Prime ... textos do simulador denon-x1850-real.html, traduzidos
//                          do X1850 PRIME User Guide v1.1 (Features > Top Panel);
//                          dimensões citadas no próprio sim (User Guide v1.1, p. 74).
//  · DJM-900NXS2 / V10 ... textos do simulador (serigrafia do painel + material
//                          oficial Pioneer DJ) e proporção de painel medida na
//                          foto oficial de topo, registrada no código do sim.
//                          O PDF oficial dos dois NÃO foi obtido (docs.pioneerdj.com
//                          e pioneerdj.com devolvem 403 a curl) — tudo que dependia
//                          só dele está marcado "não consta" na ficha técnica.
//
//   node cursos-novos/pleno-dj/apply-conteudo-mixers-lote.mjs [--dry]
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

async function req(m, p, b, x = {}) {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${m} ${p} -> ${r.status}: ${t.slice(0, 300)}`);
  return t ? (t[0] === "[" || t[0] === "{" ? JSON.parse(t) : t) : null;
}

// O player já estiliza table/th/td e aside[data-callout] no globals.css (.smu-rich).
// Nada de style inline nem de <style> — só as tags, como nas aulas do padrão da casa.
const TB = 'class="spec"';
const TH = "";
const TD = "";
const TDK = "";
const AVISO = 'data-callout="atencao"';

// ============================================================================
// 119 — PIONEER DJM-900NXS2
// ============================================================================
const DJM900NXS2 = `
<p><b>Se você entrar num clube de porte médio para cima em qualquer lugar do mundo, tem uma chance enorme de o mixer da cabine ser este.</b> O DJM-900NXS2 não é o mais novo nem o mais completo da Pioneer DJ — é o mais <i>instalado</i>. Saber operá-lo de olhos fechados é o mesmo que saber dirigir carro com câmbio manual: não impressiona ninguém, mas sem isso você não trabalha.</p>

<h3>O que é e por que existe</h3>
<p>Um mixer de clube resolve um problema que não é musical, é logístico: <b>todo fim de semana entra um DJ diferente na cabine</b>. Se cada casa tivesse um mixer diferente, o visitante gastaria 20 minutos procurando o CUE. A indústria elegeu um padrão, e a Pioneer ganhou essa eleição com a linha DJM de 4 canais: DJM-800 (2006), DJM-900NXS (2011) e o <b>DJM-900NXS2 (2016)</b>.</p>
<p>O NXS2 fez par com o CDJ-2000NXS2 e trouxe quatro coisas que o DJ sente na mão: <b>placa de som de 96 kHz / 24 bits</b>, <b>duas placas USB independentes</b>, <b>faders MAGVEL</b> (magnéticos, sem contato mecânico) em todos os canais e no crossfader, e um <b>gain structure redesenhado</b>, com mais margem antes de estourar. Ganhou também o <b>FX FREQUENCY</b> (efeito só no grave, só no médio ou só no agudo) e o <b>Send/Return por USB</b>, para plugar um iPad com app de efeito.</p>
<p>Concorrentes: <b>Allen &amp; Heath Xone:92 / 96</b>, <b>Rane MP2015</b> e <b>Denon X1800 / X1850 Prime</b>. O sucessor é o <b>DJM-A9</b> (2022), mas a base instalada do 900NXS2 é gigantesca e vai seguir em cabine por muitos anos.</p>

<h3>Ficha técnica</h3>
<table ${TB}>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Canais</td><td>4 de programa + 2 de microfone. Fontes: USB A · USB B · DIGITAL · LINE · PHONO · RETURN AUX — <b>phono nos 4 canais</b>. TRIM de −∞ a +9 dB</td></tr>
<tr><td>EQ</td><td>Canal: 3 bandas (HI / MID / LOW), −26 a +6 dB (em ISOLATOR o mínimo vira −∞) · Microfone: 2 bandas, −12 a +12 dB</td></tr>
<tr><td>Medidores</td><td>Canal: +12 a −30 dB · Master: +15 a −27 dB</td></tr>
<tr><td>Placa de som USB</td><td>Duas independentes — 96 kHz / 24 bits, 4 entradas e 5 saídas simultâneas</td></tr>
<tr><td>Efeitos</td><td><b>14 Beat FX</b>: DELAY, ECHO, PING PONG, SPIRAL, REVERB, TRANS, FILTER, FLANGER, PHASER, PITCH, SLIP ROLL, ROLL, VINYL BRAKE, HELIX · <b>6 Sound Color FX</b>: SPACE, DUB ECHO, SWEEP, NOISE, CRUSH, FILTER</td></tr>
<tr><td>Faders e fone</td><td>MAGVEL (magnético) nos 4 canais e no crossfader, curva ajustável · fone P10 6,3 mm + P2 3,5 mm</td></tr>
<tr><td>Send/Return</td><td>P10 traseiro <b>ou</b> USB do topo (5 V ⎓ 2,1 A, iPhone/iPad). Modo INSERT ou AUX</td></tr>
<tr><td>Saídas de programa</td><td>MASTER, BOOTH, REC e DIGITAL (as quatro atendidas pelo BALANCE)</td></tr>
<tr><td>Painel (largura × profundidade)</td><td>320 × 384 mm (medido na foto oficial de topo, usada para desenhar o simulador)</td></tr>
<tr><td>Altura, peso, consumo, resposta de frequência</td><td><b>Não consta</b> — o PDF oficial do DJM-900NXS2 não pôde ser baixado nesta rodada</td></tr>
</table>

<h3>Controle por controle</h3>

<h3>1 · Entrada do canal — seletor, TRIM, CLIP e medidor</h3>
<ul>
<li><b>SELETOR DE ENTRADA</b> — a fonte do canal: 💻A, 💻B (as duas placas USB), DIGITAL, LINE, PHONO ou RETURN AUX. <i>Erro comum:</i> subir o fader com o seletor na fonte errada e concluir que o canal está mudo.</li>
<li><b>TRIM</b> — nível de entrada, −∞ a +9 dB. Suba até o medidor beirar o 0 dB nos picos. <i>Erro comum:</i> deixar no máximo para dar mais volume — o que sobra vira distorção, não volume.</li>
<li><b>CLIP</b> — acende quando a entrada satura. Acendeu, baixa o TRIM; nunca compense no master.</li>
<li><b>CHANNEL LEVEL (medidor)</b> — +12 a −30 dB. Serve para casar o volume dos canais antes de abrir o fader: duas faixas no mesmo ponto do medidor entram na mesma altura.</li>
</ul>

<h3>2 · EQ e EQ CURVE</h3>
<ul>
<li><b>HI / MID / LOW</b> — −26 a +6 dB. A mixagem de verdade acontece no LOW: você tira o grave da faixa que sai e entrega o grave para a que entra. Dois bumbos juntos embolam.</li>
<li><b>EQ CURVE (ISOLATOR / EQ)</b> — em ISOLATOR o mínimo mata a banda (−∞); em EQ o corte máximo é −26 dB, mais musical. ISOLATOR para troca seca; EQ para correção de timbre. <i>Erro comum:</i> não saber em qual dos dois o mixer está e achar que o grave não some direito.</li>
</ul>

<h3>3 · SOUND COLOR FX + COLOR</h3>
<ul>
<li>Os seis efeitos: <b>SPACE</b> (só o ambiente), DUB ECHO, SWEEP (direita band-pass, esquerda notch), NOISE, CRUSH (bit crush) e FILTER (direita high-pass, esquerda low-pass).</li>
<li><b>COLOR (um por canal)</b> — dosa o efeito naquele canal; centro = neutro. O efeito é escolhido uma vez à esquerda e vale para os 4 canais; o que muda por canal é o quanto você gira o COLOR. O PARAMETER faz o ajuste fino, comum aos quatro.</li>
<li><i>Erro comum:</i> sair da cabine com um COLOR fora do centro. O próximo DJ ouve o canal filtrado e não sabe por quê.</li>
</ul>

<h3>4 · CUE, faders e crossfader</h3>
<ul>
<li><b>CUE do canal</b> — manda o canal para o fone; vários somam. É onde você prepara a próxima faixa sem a pista ouvir.</li>
<li><b>CHANNEL FADER (MAGVEL)</b> — volume do canal, magnético e sem contato. A curva vem da chave CH FADER (rápido no começo / linear / lento no começo).</li>
<li><b>CROSS FADER ASSIGN</b> — lado A, THRU (ignora o crossfader) ou lado B. <i>Erro clássico:</i> canal em A ou B com o crossfader parado do outro lado — o canal não sai. Em set de mixagem longa, deixe tudo em THRU.</li>
<li><b>CROSSFADER (MAGVEL)</b> + chave de curva — corte seco (scratch), intermediária ou suave.</li>
</ul>

<h3>5 · Master, booth, microfone e fone</h3>
<ul>
<li><b>MASTER LEVEL</b> e CLIP do master — clip do master aceso, o problema está nos canais. BALANCE — equilíbrio L/R das saídas master, booth, rec e digital.</li>
<li><b>BOOTH MONITOR</b> — volume do retorno da cabine, independente do master. É o que salva seu ouvido; nunca use o master para ouvir melhor.</li>
<li><b>MIC 1 / MIC 2 LEVEL</b>, MIC EQ HI / LOW (−12 a +12 dB) e a chave OFF / ON / TALK OVER — em TALK OVER a música abaixa sozinha quando alguém fala.</li>
<li><b>HEADPHONES MIXING</b> — o fone entre CUE (o que você prepara) e MASTER (o que está tocando), com LEVEL próprio.</li>
<li><b>MONO SPLIT / STEREO</b> — em MONO SPLIT o CUE vai no ouvido esquerdo e o MASTER no direito: é assim que se casa batida em festa barulhenta. LINK CUE — pelo Pro DJ Link, monitora a faixa carregada nos players em rede.</li>
</ul>

<h3>6 · BEAT FX</h3>
<ul>
<li><b>Seletor BEAT FX</b> (14 efeitos) e CH SELECT — em quem o efeito age: 1, 2, 3, 4, MIC, CROSS FADER A/B ou MASTER.</li>
<li><b>BEAT ◄ / ►</b> — divide ou dobra o tempo do efeito (1/16 até 4). TIME e LEVEL/DEPTH são os parâmetros 1 e 2.</li>
<li><b>AUTO / TAP</b> e TAP — BPM automático ou batido na mão. QUANTIZE encaixa o efeito na grade do rekordbox.</li>
<li><b>FX FREQUENCY (LOW / MID / HI)</b> — em que faixa o efeito age. Desligue o LOW e ecoe só a voz e o chimbal, sem borrar o bumbo: é o botão que separa efeito bonito de efeito lambança.</li>
<li><b>X-PAD</b> — faixa de toque: escolhe a divisão de beat e dispara o efeito com um dedo só. DISPLAY OLED — efeito, BPM, QUANTIZE, divisão e barra de tempo. ON/OFF aceso em azul = efeito na pista.</li>
</ul>

<h3>7 · SEND/RETURN e USB / MIDI</h3>
<ul>
<li><b>SEND/RETURN — 1/4" JACK / USB</b> — por onde entra o efeito externo: P10 traseiros ou a porta USB do topo (5 V ⎓ 2,1 A, iPhone/iPad). Tem LEVEL e ON/OFF próprios, então dá para usar efeito externo junto com o Beat FX interno.</li>
<li><b>RETURN TYPE — AUX / INSERT</b> — em INSERT o som passa pelo aparelho externo; em AUX o retorno é somado ao som original.</li>
<li><b>USB A / USB B + MIDI ON/OFF</b> — duas placas USB: dois notebooks ao mesmo tempo, troca de DJ sem cortar o som. Com MIDI ligado, o mixer vira controlador do software.</li>
</ul>

<h3>Como ligar</h3>
<p>O DJM-900NXS2 é o <b>centro</b> da cabine: tudo entra nele e só ele fala com o PA.</p>
<ul>
<li><b>CDJ / XDJ / player digital → LINE.</b> O player entrega sinal de linha, já amplificado. Se tiver saída digital coaxial, dá para usar a posição DIGITAL do mesmo canal.</li>
<li><b>Toca-discos → PHONO</b>, com o fio terra no borne. A cápsula de agulha entrega sinal fraquíssimo e sem equalização; a posição PHONO liga o pré-amplificador que corrige as duas coisas. No 900NXS2 os 4 canais têm PHONO, o que não é comum.</li>
<li><b>Trocar os dois não funciona, e o motivo é físico:</b> toca-discos em LINE sai fino e baixíssimo (falta o pré e a curva RIAA); CDJ em PHONO sai estourado. O problema é a chave, não o cabo.</li>
<li><b>Computador → USB A ou USB B</b>, com o canal no seletor 💻A ou 💻B. Microfone → entradas de MIC do painel traseiro.</li>
<li><b>Saídas:</b> MASTER (processador/PA), BOOTH (retorno da cabine, volume próprio), REC e DIGITAL.</li>
<li><b>Ordem:</b> fontes, mixer, amplificação. Para desligar, o inverso — ligar o PA primeiro é como se estoura tweeter da casa.</li>
</ul>
<aside ${AVISO}><p><b>O que não consta:</b> o tipo de conector de cada saída (XLR, RCA, P10) não está no material que consultei. Antes de montar cabo, confira o manual ou o próprio painel.</p></aside>

<h3>Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1.</b> Ligue o áudio e gire o TRIM do CH 1 até o medidor bater no topo do verde sem acender o CLIP. Faça o mesmo no CH 2: os dois têm que parar na mesma altura.</li>
<li><b>2.</b> Suba os dois faders. Tire todo o LOW do CH 2 e devolva devagar enquanto baixa o LOW do CH 1 — é a troca de bumbo, o movimento mais usado do mundo.</li>
<li><b>3.</b> Escolha FILTER no Sound Color FX e gire o COLOR do CH 1 para os dois lados (direita high-pass, esquerda low-pass). Depois volte o COLOR ao centro — acostume a mão a fazer sempre.</li>
<li><b>4.</b> Ponha o CH SELECT do Beat FX no canal 1, escolha ECHO, ajuste o BEAT em 1/2 e ligue o ON/OFF. Depois desligue o FX FREQUENCY LOW: o eco sai do bumbo e a base fica limpa.</li>
<li><b>5.</b> Passe o CH 1 para o lado A e o CH 2 para o B no CROSS FADER ASSIGN e mixe só com o crossfader. Depois ponha os dois em THRU e confirme que ele deixou de agir.</li>
</ul>

<h3>Erros que custam caro</h3>
<ul>
<li><b>Master estourando e você subindo o master.</b> O CLIP do master é sintoma; a causa está no TRIM ou nos faders. Subir o master só empurra distorção para o PA — e quem paga o driver queimado é a casa.</li>
<li><b>Sair do set com controle fora do lugar.</b> COLOR fora do centro, EQ cortado, ASSIGN em A/B, Beat FX ligado, microfone em ON. O próximo DJ sobe o fader, não sai som, e a plateia acha que foi ele.</li>
<li><b>Trocar LINE e PHONO no susto.</b> Ninguém erra na montagem calma; erra às 2 da manhã, com a pista cheia. Confira a chave antes de subir o fader.</li>
<li><b>Depender do TALK OVER sem testar.</b> Com o microfone em ON (e não em TALK OVER), tudo que se fala na cabine vai para o PA. Teste no soundcheck e deixe em OFF quando não estiver usando.</li>
</ul>
`.trim();

// ============================================================================
// 120 — PIONEER DJM-V10
// ============================================================================
const DJMV10 = `
<p><b>O DJM-V10 é o mixer que a Pioneer DJ fez quando parou de perguntar "o que o DJ de clube precisa" e passou a perguntar "o que o produtor que toca ao vivo precisa".</b> Ele tem <b>6 canais</b>, <b>EQ de 4 bandas</b> e um <b>compressor por canal</b>. Essas três coisas mudam o jeito de trabalhar — e é sobre isso que esta aula é.</p>

<h3>O que é e por que existe</h3>
<p>Um DJM de clube tem 4 canais e EQ de 3 bandas porque esse é o mínimo para tocar disco atrás de disco. O V10 (2020) atende outro público: <b>quem toca em camadas</b>. Um canal para a batida, um para o baixo, um para o loop de sintetizador, um para a voz, um para o sampler, um para o efeito. Com 4 canais isso não cabe. Com 6, cabe.</p>
<p>É a resposta da Pioneer a mixers de performance como o <b>Allen &amp; Heath Xone:96</b> e o <b>Rane MP2015</b>. Onde você encontra: festival grande, palco de live set e residência de DJ que trabalha com stems. <b>Não</b> é o mixer padrão de balada — lá você acha o 900NXS2 ou o A9.</p>

<h3>Por que 6 canais e 4 bandas mudam o trabalho</h3>
<p><b>Os 6 canais</b> mudam o que dá para manter tocando <i>ao mesmo tempo</i>. Num mixer de 4, o DJ soma duas faixas mais um microfone e ainda precisa de canal livre para a próxima. No V10 ele mantém uma base em loop, empilha um a cappella, entra com um segundo groove e ainda sobra canal para o sampler. Isso transforma "mixar duas músicas" em "montar um arranjo ao vivo".</p>
<p><b>O EQ de 4 bandas</b> muda a precisão do corte. Num EQ de 3 bandas, tudo entre o bumbo e o chimbal está num knob só: o MID carrega o corpo do bumbo, o baixo, o corpo do vocal, a caixa e o brilho da voz. Cortou o MID para abrir espaço, cortou tudo junto e a faixa ficou oca. O V10 divide essa região em <b>LOW MID</b> (o embolamento entre bumbo e corpo do vocal) e <b>HI MID</b> (o brilho da voz e a caixa): você tira o embolamento sem tirar o brilho e junta duas faixas densas sem que uma coma a outra. É a diferença entre equalizar com faca de cozinha e com bisturi.</p>
<p>Some o <b>compressor em cada canal</b>, que segura os picos e adensa o som, e você tem um mixer que faz na cabine trabalho que antes só se fazia no estúdio.</p>

<h3>Ficha técnica</h3>
<table ${TB}>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Canais</td><td><b>6</b> de programa + 2 de microfone. Fontes: USB A · USB B · DIGITAL · LINE · <b>PHONO nos canais 1, 3, 4 e 6</b> · <b>MULTI I/O nos canais 2 e 5</b> · BUILT-IN · EXT 1 · EXT 2. TRIM de −∞ a +9 dB</td></tr>
<tr><td>EQ por canal</td><td><b>4 bandas</b> — HI (−∞ a +6 dB, isolador no mínimo), HI MID (−26 a +6 dB), LOW MID (−26 a +6 dB), LOW (−∞ a +6 dB, isolador no mínimo)</td></tr>
<tr><td>Efeitos</td><td>Compressor e filtro em cada um dos 6 canais · 4 efeitos de SEND · <b>14 Beat FX</b>: DELAY, ECHO, PING PONG, SPIRAL, HELIX, REVERB, SHIMMER, FLANGER, PHASER, FILTER, TRANS, ROLL, PITCH, VINYL BRAKE</td></tr>
<tr><td>Master e booth</td><td>Isolador de 3 bandas no master (−∞ a +9 dB, com botão ON) · booth com nível próprio e EQ de 2 bandas (−12 a +6 dB)</td></tr>
<tr><td>Saídas de fone</td><td><b>Duas independentes</b> (A e B), com MIX e LEVEL próprios; a A tem ainda LINK CUE, PRE EQ e MONO SPLIT, em P10 6,3 mm e P2 3,5 mm</td></tr>
<tr><td>Medidores</td><td>Canal: +12 a −30 dB · Master: +9 a −33 dB. MASTER LEVEL de −∞ a +5 dB (0 dB marcado)</td></tr>
<tr><td>Microfone</td><td>2 entradas, EQ de 2 bandas (−12 a +12 dB) e chave OFF / ON / TALK OVER</td></tr>
<tr><td>MULTI I/O</td><td>Conector com 5 V ⎓ 2,1 A; modo USB ou 1/4" JACK; entra como CH 2 / CH 5 ou como INSERT; CH SELECT entre MIC, 1–6 e MASTER</td></tr>
<tr><td>USB / MIDI e faders</td><td>Duas portas USB independentes (A e B), com MIDI ON e START/STOP · channel fader <b>longo</b> + crossfader MAGVEL</td></tr>
<tr><td>Painel (largura × profundidade)</td><td>437 × 431 mm (medido na foto oficial de topo, usada para desenhar o simulador)</td></tr>
<tr><td>Altura, peso, consumo, taxa de amostragem</td><td><b>Não consta</b> — o PDF oficial do DJM-V10 não pôde ser baixado nesta rodada</td></tr>
</table>

<h3>Controle por controle</h3>

<h3>1 · A tira do canal (repetida 6 vezes)</h3>
<ul>
<li><b>SELETOR DE ENTRADA</b> — USB A, USB B, DIGITAL, LINE, PHONO (canais 1/3/4/6) ou MULTI I/O (canais 2 e 5), BUILT-IN, EXT 1 e EXT 2. Erro comum: procurar PHONO no canal 2 ou 5 — não existe.</li>
<li><b>TRIM</b> — −∞ a +9 dB. Suba até o medidor beirar o 0 sem vermelho.</li>
<li><b>COMPRESSOR</b> — a marca do V10. Girando, você aperta a dinâmica: o som fica mais denso e constante. Use pouco, em canal de voz ou a cappella, para o vocal não sumir na base.</li>
<li><b>EQ HI</b> e EQ LOW (−∞ a +6 dB) — no mínimo são isoladores: a banda some por completo. EQ HI MID (−26 a +6 dB) é o brilho da voz e da caixa; EQ LOW MID (−26 a +6 dB), o embolamento entre bumbo e corpo do vocal.</li>
<li><b>FILTER</b> — filtro do canal; o tipo (LPF/HPF) e a RESONANCE vêm da seção FILTER, à esquerda, e valem para todos.</li>
<li><b>BEAT FX ASSIGN</b> — aceso, este canal vai para o Beat FX. CUE manda o canal para o fone.</li>
<li><b>SEND</b> — quanto deste canal vai para a seção SEND: é assim que se joga eco só na voz sem processar a base. <b>CHANNEL FADER (longo)</b> tem curso maior que o de um DJM comum; abaixo dele ficam o CROSS FADER ASSIGN (A / THRU / B) e o indicador A/B.</li>
</ul>

<h3>2 · Seção FILTER (global)</h3>
<ul>
<li><b>LPF / HPF</b> — põe os filtros dos 6 canais em passa-baixa (girando o FILTER você corta os agudos) ou passa-alta (corta os graves).</li>
<li><b>RESONANCE</b> — MIN a MAX: quanto maior, mais o filtro assobia na frequência de corte. Erro comum: ressonância no talo com o master alto — o pico do filtro sozinho já acende o clip.</li>
</ul>

<h3>3 · Seção SEND</h3>
<ul>
<li><b>SHORT DELAY · LONG DELAY · DUB ECHO · REVERB</b> — os quatro efeitos internos; EXT 1 e EXT 2 mandam o send para fora.</li>
<li><b>MASTER MIX</b> — aceso, o retorno entra no master; apagado, fica só no fone/booth. É assim que se prepara o efeito antes de soltar na pista.</li>
<li><b>SIZE / FEEDBACK</b>, TIME, TONE e MASTER MIX LEVEL — tamanho, tempo, timbre e quanto do retorno entra na mistura.</li>
</ul>

<h3>4 · Master, isolador e booth</h3>
<ul>
<li><b>MASTER LEVEL</b> (−∞ a +5 dB) e CLIP. Clip aceso, baixe TRIM/fader: nunca ande no master.</li>
<li><b>ISOLATOR ON + HI / MID / LOW</b> (−∞ a +9 dB) — isolador de 3 bandas na saída inteira: é o controle de derrubar o grave da pista numa quebra. Erro comum: confundir com o EQ do canal — este pega tudo.</li>
<li><b>FILTER e BEAT FX ASSIGN do master</b> — filtro e efeito na mistura toda. <b>BOOTH LEVEL + BOOTH EQ HI / LOW</b> (−12 a +6 dB): o retorno da cabine tem EQ próprio, que não mexe no que vai para a pista. Grave demais no palco? Corte no BOOTH EQ, não no canal.</li>
</ul>

<h3>5 · Fone A e fone B</h3>
<ul>
<li><b>Fone A</b> — LINK CUE (liga o cue do A ao do B), PRE EQ (monitora o canal <i>antes</i> do EQ: você ouve o som cru mesmo com o EQ mexido), MONO SPLIT, MIX e LEVEL.</li>
<li><b>Fone B</b> — LINK CUE, MIX e LEVEL. Duas saídas independentes = b2b de verdade, cada DJ com seu cue. Erro comum: monitorar pelo B, que não tem PRE EQ, e achar que o EQ do canal não funciona.</li>
</ul>

<h3>6 · MULTI I/O</h3>
<ul>
<li><b>Conector</b> com 5 V ⎓ 2,1 A, para alimentar o aparelho externo. MODE: USB ou 1/4" JACK; entrada (CH 2 / CH 5) ou INSERT. <b>CH SELECT</b> escolhe entre MIC, 1 a 6 ou MASTER; há ainda LEVEL e ON/OFF. É por aqui que entram sampler, drum machine, pedal de efeito ou um iPad.</li>
</ul>

<h3>7 · BEAT FX</h3>
<ul>
<li><b>Seletor</b> com 14 efeitos e display com AUTO/TAP, QUANTIZE, efeito, BPM e X-PAD; BEAT ◄ / ► e TAP (2 toques ou mais definem o BPM na mão). <b>FX FREQUENCY LOW / MID / HI</b> escolhe a faixa em que o efeito age; TIME e LEVEL/DEPTH são os parâmetros.</li>
<li><b>ON/OFF</b> — liga o Beat FX no que estiver marcado nos ASSIGN. Erro comum: apertar o ON sem marcar nenhum ASSIGN e concluir que o efeito não funciona.</li>
</ul>

<h3>Como ligar</h3>
<ul>
<li><b>CDJ / XDJ / player digital → LINE</b> (ou DIGITAL, se ele tiver essa saída).</li>
<li><b>Toca-discos → PHONO</b>, com fio terra no borne. No V10 só os canais <b>1, 3, 4 e 6</b> têm PHONO: com dois toca-discos use 1 e 6, e deixe 2 e 5 para os players e o MULTI I/O.</li>
<li><b>Nunca troque os dois.</b> Toca-discos em LINE sai fino e quase inaudível (falta o pré e a correção RIAA); CDJ em PHONO sai estourado, porque o pré amplifica um sinal que já era forte.</li>
<li><b>Computador → USB A ou USB B</b>: duas portas, dois notebooks juntos.</li>
<li><b>Sampler / drum machine / pedal / iPad → MULTI I/O</b> (USB ou 1/4" JACK, como CH 2 / CH 5 ou INSERT). <b>Processador externo → EXT 1 / EXT 2</b>, que voltam pelas posições EXT do seletor.</li>
<li><b>Saídas:</b> MASTER para o PA, BOOTH (nível e EQ próprios) para a cabine e os dois fones na frente. <b>Ordem:</b> fontes → mixer → amplificação; desligar, o inverso.</li>
</ul>
<aside ${AVISO}><p><b>O que não consta:</b> o tipo de conector de cada entrada e saída traseira do V10 não está no material que consultei. Antes de comprar cabo, confira o manual ou o painel.</p></aside>

<h3>Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1.</b> Ligue o áudio e suba o channel fader longo do CH 1: o curso é maior que o de um DJM de 4 canais, então dá para entrar com a faixa em muito mais passos.</li>
<li><b>2. O exercício do EQ de 4 bandas.</b> Com CH 1 e CH 2 tocando juntos, corte o LOW MID do CH 2 e ouça o embolamento sumir sem perder brilho. Agora corte o HI MID no lugar dele: a voz apaga e o grave continua embolado. É a escolha que um mixer de 3 bandas não deixa fazer.</li>
<li><b>3.</b> Leve o EQ LOW do CH 1 ao mínimo e confirme que o grave some por completo: no V10, HI e LOW são isoladores, não EQ.</li>
<li><b>4.</b> Gire o COMPRESSOR do CH 1 e ouça a dinâmica apertar; volte ao zero e repita para gravar a diferença no ouvido.</li>
<li><b>5.</b> Escolha HPF na seção FILTER, suba a RESONANCE e gire o FILTER do CH 2. Depois marque o BEAT FX ASSIGN do CH 2, escolha um efeito e aperte o ON/OFF vermelho.</li>
</ul>

<h3>Erros que custam caro</h3>
<ul>
<li><b>Comprimir tudo.</b> O compressor por canal é ferramenta de precisão, não botão de deixar mais alto. Seis canais no talo viram parede de som sem dinâmica — a pista cansa em 10 minutos e ninguém sabe explicar por quê.</li>
<li><b>Contar com PHONO nos canais 2 e 5.</b> Eles não têm. Montou dois toca-discos no 2 e no 5, você perde o soundcheck descobrindo isso. Planeje o mapa de canais antes de encostar em cabo.</li>
<li><b>Confundir ISOLATOR de master com EQ de canal.</b> O isolador pega a mistura inteira, inclusive o microfone e o que o outro DJ toca no b2b. Derrubar o LOW ali é decisão de sala, não de faixa.</li>
<li><b>Encher os 6 canais porque eles existem.</b> Seis fontes ao mesmo tempo viram lama se você não abriu espaço no EQ para cada uma. O V10 dá o bisturi; não decide onde cortar.</li>
</ul>
`.trim();

// ============================================================================
// 302 — DENON DJ X1850 PRIME
// ============================================================================
const X1850 = `
<p><b>O X1850 Prime é a aposta da Denon DJ para tirar o mixer do clube das mãos da Pioneer.</b> Mesmo formato de 4 canais, mesma cabine, preço menor — e três coisas que o concorrente não faz do mesmo jeito: <b>Sweep FX por canal</b>, <b>Flex Fader com tensão regulável</b> e o <b>Engine Connect</b>, que amarra o mixer aos players Denon por cabo de rede.</p>

<h3>O que é e por que existe</h3>
<p>Durante quase 15 anos, ter mixer de clube significava ter um DJM. A Denon DJ (da inMusic) atacou esse monopólio com a linha <b>Prime</b>: os players SC5000/SC6000 e os mixers <b>X1800</b> (2017) e <b>X1850</b> (2019) — este último o refinamento do primeiro, com efeitos e faders melhorados.</p>
<p>O argumento de venda é direto: pelo preço de um mixer intermediário da concorrência, você leva um mixer de clube completo, com <b>duas portas USB</b>, <b>DVS embutido</b> (vinil de controle sem caixinha extra), <b>filtro</b> e <b>Sweep FX por canal</b> e um módulo de <b>BPM FX</b> com faixa de toque.</p>
<p>Concorrentes: <b>Pioneer DJM-900NXS2 / A9</b> (o alvo declarado) e <b>Allen &amp; Heath Xone:96</b>. Onde você encontra: clubes que padronizaram Denon, palco secundário de festival, DJ residente com cabine própria e locadora. Ele faz par com o SC6000 — e essa dupla é a alternativa mais séria ao par CDJ + DJM.</p>

<h3>Ficha técnica</h3>
<table ${TB}>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Canais</td><td>4 de programa + 2 de microfone. Fontes: DIGITAL · LINE · PHONO · USB · <b>DVS</b> (vinil de controle)</td></tr>
<tr><td>Portas USB</td><td>Duas — <b>dois computadores ao mesmo tempo</b>; a chave USB 1/2 escolhe de qual porta vem o canal. Placa de som interna de 4 canais</td></tr>
<tr><td>EQ por canal</td><td>3 bandas (HIGH / MID / LOW). O <b>tipo</b> de EQ se escolhe no menu Utility</td></tr>
<tr><td>Filtro e Sweep FX</td><td>Filtro por canal (esquerda LPF, direita HPF, centro neutro), ligado pelo botão FILTER global · 4 Sweep FX (DUB ECHO · NOISE · WASH OUT · GATE), com knob próprio em cada canal</td></tr>
<tr><td>Entradas de microfone</td><td>MIC 1 combo <b>XLR + P10 (6,35 mm)</b> no painel superior; MIC 2 em P10 atrás. EQ HIGH/LOW <b>compartilhado</b> pelos dois</td></tr>
<tr><td>Saídas</td><td>Master XLR balanceada + RCA, com chave <b>STEREO / MONO</b> e <b>PAN</b> · booth com volume próprio · fone P10 6,35 mm e P2 3,5 mm, com SPLIT CUE e CUE MIX</td></tr>
<tr><td>Crossfader</td><td><b>Flex Fader</b>, tensão regulável por baixo do painel, curva no X FADER CONTOUR · fader start de canal e de crossfader (com players Denon ligados)</td></tr>
<tr><td>BPM FX e displays</td><td>Módulo com FX SELECT, AMOUNT, TIME/PARAMETER, FREQUENCY, CUE, faixa de toque e modo INSTANT; destino em canal 1–4, X-FADER A/B, MIC ou MASTER. Dois displays monocromáticos mostram efeito, canal, BPM, divisão de tempo e o menu Utility</td></tr>
<tr><td>Dimensões (L × P × A)</td><td>12,2" × 17,5" × 4,3" = <b>311 × 445 × 108 mm</b> (X1850 PRIME User Guide v1.1, p. 74)</td></tr>
<tr><td>Peso, consumo, resposta de frequência</td><td><b>Não consta</b> no material que consultei nesta rodada</td></tr>
</table>

<h3>Controle por controle</h3>

<h3>1 · A tira do canal</h3>
<ul>
<li><b>INPUT SELECT</b> — DIGITAL, LINE, PHONO, USB ou DVS. O DVS embutido é um diferencial real: você toca com vinil de controle sem interface externa. Erro comum: deixar em USB sem computador ligado e achar que o canal queimou.</li>
<li><b>USB 1 / 2</b> — com o INPUT SELECT em USB, escolhe de qual das duas portas vem o canal. É o que permite trocar de DJ sem parar o som.</li>
<li><b>LEVEL / TRIM</b> — ganho de entrada, antes do fader e antes do EQ. É aqui que se acerta o nível olhando o medidor.</li>
<li><b>EQ HIGH / MID / LOW</b> — <i>detalhe do X1850:</i> o tipo de EQ (o quanto o mínimo corta) se escolhe no menu Utility. Dois X1850 podem responder diferente ao mesmo giro.</li>
<li><b>FILTER (knob)</b> — esquerda LPF, direita HPF, centro neutro. Só funciona com o botão FILTER global aceso. SWEEP FX (knob) — dosa o Sweep escolhido, do seco (centro) ao cheio em cada lado.</li>
<li><b>CHANNEL CUE</b> e CHANNEL LEVEL METER — os dois trabalham pré-fader: você ouve e mede o canal antes do fader.</li>
<li><b>BPM FX INDICATOR</b> — é indicador, não botão. Acende quando o canal está sendo afetado pelo BPM FX.</li>
<li><b>CHANNEL FADER</b> (curva no CH FADER CONTOUR) e CROSSFADER ASSIGN — lado A, lado B ou THRU (centro), que ignora o crossfader.</li>
</ul>

<h3>2 · Botão FILTER e os SWEEP FX</h3>
<ul>
<li><b>FILTER (botão)</b> — liga/desliga o filtro de todos os canais de uma vez; sem ele aceso, os knobs FILTER não fazem nada.</li>
<li><b>DUB ECHO</b> — eco curto. Do centro para a esquerda encurta o delay e sobe a realimentação; para a direita alonga o delay, também subindo a realimentação.</li>
<li><b>NOISE</b> — à esquerda, ruído branco com gate sincronizado ao andamento; à direita, ruído branco puro.</li>
<li><b>WASH OUT</b> — transição. No extremo esquerdo aplica eco de 1/2 tempo e silencia o áudio normal do canal; no direito, eco de 1 tempo. É o "apagar a faixa" numa quebra. Erro comum: girar até o fim e esquecer — o canal fica mudo e você procura defeito no player.</li>
<li><b>GATE</b> — gate ritmado. Do centro para a esquerda, sincronizado ao andamento; para a direita, atenuando cada vez mais. Regra da seção: <b>só um Sweep FX por vez</b> — escolher outro desliga o anterior.</li>
</ul>

<h3>3 · Módulo BPM FX</h3>
<ul>
<li><b>BPM FX ON/OFF</b> — liga o módulo (Echo, Delay, Roll, BeatBreak…). FX AMOUNT — quanto do sinal processado sai na mistura.</li>
<li><b>FX SELECT / ENTER</b> — gira para escolher o efeito; no Utility, gira para navegar e aperta para confirmar. FX CHANNEL ASSIGN — onde o efeito age: canal 1–4, X-FADER A ou B, MIC ou MASTER.</li>
<li><b>FX TIME / PARAMETER</b> — gira para escolher a divisão de tempo; apertando, alterna entre divisão e milissegundos.</li>
<li><b>FX FREQUENCY</b> — em que faixa o efeito age; no centro (12h) pega o espectro inteiro. <b>FX CUE</b> escuta o efeito no fone antes de soltar no PA (nem todo efeito aceita).</li>
<li><b>FX TOUCH STRIP</b> + INSTANT — com o INSTANT apagado, tocar a faixa escolhe a divisão de tempo; com ele aceso, encostar dispara o efeito e arrastar muda a divisão.</li>
<li><b>TAP / -AUTO</b> — bate o andamento na mão; segurando, volta para AUTO. QUANTIZE / -UTILITY — quantiza aos players das portas Link; segurando, entra e sai do menu Utility (sair salva).</li>
</ul>

<h3>4 · Master, booth e microfone</h3>
<ul>
<li><b>MASTER</b> — volume das saídas XLR e RCA. STEREO / MONO soma os dois canais quando a sala pede mono; PAN posiciona o master no campo estéreo; BOOTH é o volume do monitor da cabine, independente do master.</li>
<li><b>MIC 1 / MIC 2 LEVEL</b> e ON/OFF — cada um com LED de nível: verde (ótimo), laranja (médio), vermelho (pico). <b>MIC EQ HIGH / LOW</b> mexe nos <b>dois microfones ao mesmo tempo</b>: não dá para equalizar um sem mexer no outro.</li>
<li><b>TALK OVER</b> — abaixa a mistura quando você fala; o quanto e a velocidade de volta se ajustam no menu Utility.</li>
</ul>

<h3>5 · Fone, faders e rede</h3>
<ul>
<li><b>SPLIT CUE</b> — em ON, cue em mono no ouvido esquerdo e master em mono no direito. CUE MIX e HEADPHONE LEVEL — quanto de cada um e o volume do fone.</li>
<li><b>CH FADER CONTOUR</b> e X FADER CONTOUR — curva dos faders: à esquerda o volume sobe perto do topo e o crossfader mistura macio; à direita sobe logo e o crossfader corta seco, para scratch.</li>
<li><b>CROSSFADER (FLEX FADER)</b> — tensão regulável por baixo do painel: DJ de scratch aperta, DJ de mixagem longa afrouxa.</li>
<li><b>CHANNEL FADER START</b> e X FADER START — com media player Denon ligado, subir o fader (ou mover o crossfader) dá play sozinho. Erro comum: deixar ligado sem querer e o player disparar quando você só ia conferir o nível.</li>
<li><b>ENGINE CONNECT</b> — com os players Denon nas portas Link, o mixer recebe andamento e BPM e troca faixas e perfis entre eles. USB 1 / 2 ligam dois computadores; MIDI START/STOP envia Start/Stop pela USB ou pela saída MIDI.</li>
</ul>

<h3>Como ligar</h3>
<ul>
<li><b>Media player / CDJ / SC6000 → LINE</b> (ou DIGITAL, pela saída digital dele).</li>
<li><b>Toca-discos → PHONO</b>, com fio terra no borne. Sinal de agulha é fraquíssimo: só a posição PHONO liga o pré-amplificador e a correção RIAA. <b>Som fino e baixo = toca-discos em LINE; estouro distorcido = player em PHONO.</b></li>
<li><b>Toca-discos com vinil de controle → PHONO no cabo, DVS no INPUT SELECT.</b> O DVS é embutido, sem interface externa.</li>
<li><b>Computador → USB 1 ou USB 2</b>, INPUT SELECT em USB e a chave USB 1/2 do canal na porta certa.</li>
<li><b>Microfone 1 → combo XLR/P10 de cima; microfone 2 → P10 traseiro.</b></li>
<li><b>Players Denon → portas Link</b>, com cabo de rede, para Engine Connect, fader start e quantize.</li>
<li><b>Saídas:</b> MASTER XLR para o PA (balanceada, aguenta cabo longo sem chiado), MASTER RCA para gravação e BOOTH para a cabine; fone na frente. <b>Ordem:</b> fontes → mixer → amplificação; desligar, o inverso.</li>
</ul>

<h3>Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1.</b> Ligue o áudio e acerte o LEVEL/TRIM dos canais 1 e 2 olhando o CHANNEL LEVEL METER — ele mede antes do fader, então o nível certo aparece mesmo com o fader baixo.</li>
<li><b>2.</b> Aperte o botão FILTER (verde) e só então gire o knob FILTER do canal 1 para os dois lados. Depois desligue o botão e gire de novo: nada acontece.</li>
<li><b>3.</b> Escolha WASH OUT e leve o knob SWEEP FX do canal 2 até o extremo esquerdo. O canal silencia e fica só o eco — é o efeito, não um defeito. Volte o knob ao centro.</li>
<li><b>4.</b> Ponha o FX CHANNEL ASSIGN no canal 1, ligue o BPM FX ON/OFF e suba o FX AMOUNT. Depois experimente apertar o FX TIME/PARAMETER para alternar entre divisão de tempo e milissegundos.</li>
<li><b>5.</b> Mixe canal 1 e canal 2 só com o FLEX FADER. Depois mude o X FADER CONTOUR de um extremo ao outro e sinta a diferença entre corte seco e mistura macia.</li>
</ul>

<h3>Erros que custam caro</h3>
<ul>
<li><b>Esquecer que o EQ é configurável no Utility.</b> Você aprende a mão num X1850 e, no outro, o corte do LOW responde diferente. Antes de set em mixer emprestado, entre no Utility (segurando QUANTIZE) e confira o tipo de EQ e o TALK OVER.</li>
<li><b>Deixar o WASH OUT ou o GATE fora do centro.</b> São os dois Sweep FX que mutam ou picotam o canal — fora do centro, ele parece defeituoso. No fim de cada transição, o knob volta ao centro.</li>
<li><b>Fader start ligado sem querer.</b> Com players Denon em rede, encostar no fader dá play — e numa conferência de nível antes do show isso solta música no PA na frente do público.</li>
<li><b>Confundir o BPM FX INDICATOR com um botão.</b> Ele só informa: quem escolhe o destino é o FX CHANNEL ASSIGN e quem liga é o BPM FX ON/OFF. Perder três minutos apertando um LED no meio do set é constrangedor e comum.</li>
</ul>
`.trim();

// ============================================================================
// 301 — DENON DJ PRIME 4+
// ============================================================================
const PRIME4 = `
<p><b>O Prime 4 é uma cabine inteira dentro de um aparelho só — e sem computador.</b> Quatro decks, mixer de 4 canais, tela de 10,1", e a música vindo de pendrive, cartão SD ou de um HD parafusado <i>dentro</i> dele. Você chega com o Prime 4, dois cabos XLR e um fone. Acabou a montagem.</p>

<h3>O que é e por que existe</h3>
<p>O DJ de casamento, formatura e evento corporativo tem um problema que o DJ de clube não tem: <b>ele leva a cabine</b>. Cada aparelho a mais é uma caixa no carro, um cabo a mais para dar defeito e dez minutos de montagem num salão com o cliente impaciente. O padrão CDJ + mixer resolve o problema do clube, não o dele.</p>
<p>Os all-in-one nasceram para isso. A Pioneer fez o XDJ-RX e depois o RR / RX2 / RX3 e o XZ — hoje os concorrentes diretos. A Denon respondeu com o <b>Prime 4</b> (2019), apostando no que os rivais não tinham: <b>4 decks</b> (não 2) e <b>tela de 10,1"</b>, a maior da categoria. O <b>Prime 4+</b> é a revisão com Engine OS novo, streaming e nuvem. O que ele resolveu: <b>tocar quatro faixas ao mesmo tempo, sem laptop, sem interface e sem mixer separado</b> — e ainda mandar uma segunda sala pela <b>Zone</b>.</p>

<h3>Ficha técnica</h3>
<p>Números do <b>Prime 4 User Guide</b> oficial (Appendix, p. 34-35).</p>
<table ${TB}>
<tr><th>Item</th><th>Valor</th></tr>
<tr><td>Dimensões (L × P × A)</td><td>28,68" × 19,56" × 4,08" = <b>728,47 × 496,82 × 103,63 mm</b></td></tr>
<tr><td>Peso</td><td>21,34 lb = <b>9,7 kg</b></td></tr>
<tr><td>Decks e telas</td><td>4 decks (cada lado controla o 1/3 ou o 2/4) · tela de toque de <b>10,1" / 257 mm</b> (216 × 139 mm) · prato <b>2,2" / 56 mm</b> · FX OLED 128 × 32 px</td></tr>
<tr><td>Áudio</td><td>24 bits · 44,1 kHz · 20 Hz – 20 kHz (±1 dB) · dinâmica &gt; 117 dB · SNR &gt; 93 dB (pond. A) · THD line/phono &lt; 0,01%, mic &lt; 0,02%</td></tr>
<tr><td>Mídia e formatos</td><td>SD / SDHC / SDXC, pendrive, HD USB e <b>SATA 2,5" interno</b>, em exFAT ou FAT32. Toca AAC/M4A · AIF/AIFF · ALAC · FLAC · MP3 (32–320 kbps, VBR) · MP4 · Ogg Vorbis · WAV (AIFF e WAV até 192 kHz / 32 bits)</td></tr>
<tr><td>Saídas</td><td>2 XLR master (balanceada, +24 dBu máx) · 1 par RCA master (+20 dBu máx) · 2 XLR booth · 2 XLR <b>zone</b> · fone P10 e P2 (&lt; 150 mW em 40 Ω)</td></tr>
<tr><td>Entradas de áudio</td><td>2 pares RCA de linha · 2 pares RCA <b>line ou phono</b> (com chave e borne de terra) · 2 combo XLR + P10 (microfone)</td></tr>
<tr><td>Outras conexões</td><td>4 USB para pendrive (a <b>porta 4 dá 5 V / 1 A</b>) · 1 USB para computador · 1 Ethernet (Link/StagelinQ) · IEC 100–240 V, 38–45 W</td></tr>
<tr><td>Alcance de pitch e tamanho do prato</td><td><b>Não constam</b> na tabela do manual: o range é ajustável por Shift + PITCH BEND, mas os valores não são publicados; do prato só consta a tela</td></tr>
</table>

<h3>Controle por controle</h3>

<h3>1 · Deck — transporte e prato</h3>
<ul>
<li><b>PLATTER</b> — prato capacitivo. Com VINYL aceso, girar o topo faz scratch; tocando só a lateral, faz pitch bend para casar a batida. Erro comum: tentar scratch com o VINYL apagado — aí ele só empurra o andamento.</li>
<li><b>PLAY / PAUSE</b> — toca ou pausa; com Shift, stutter-play a partir do cue inicial. <b>CUE / TRACK START</b>: tocando, volta ao cue temporário e pausa; pausado num ponto novo, define o cue ali; segurando, toca a partir dele e, ao soltar, volta e pausa.</li>
<li><b>SYNC</b> alinha BPM e batida com o outro deck; <b>KEY LOCK / KEY SYNC</b> trava o tom mesmo mudando a velocidade. <b>CENSOR / REVERSE</b>: segure para tocar de trás para frente sem perder o lugar; ao soltar, a música volta ao ponto certo. É o botão do palavrão.</li>
<li><b>SLIP</b> — a linha do tempo continua correndo durante loop, cue ou scratch; ao soltar, a música retoma onde estaria. É o que deixa fazer maluquice sem perder a batida.</li>
<li><b>PITCH FADER</b> e PITCH BEND − / + — velocidade da faixa e o empurrão momentâneo. <b>DECK 1/3 e 2/4</b> escolhe qual deck este lado controla; TRACK SKIP e BEAT JUMP trocam de faixa e saltam no tamanho do Auto Loop.</li>
</ul>

<h3>2 · Loop e pads</h3>
<ul>
<li><b>LOOP IN / LOOP OUT</b> — início e fim do loop manual. <b>AUTO LOOP / LOOP MOVE</b>: gire para o tamanho, pressione para ligar/desligar, com Shift desloca o loop.</li>
<li><b>HOT CUE</b> — os 8 pads viram pontos quentes: pad apagado grava o hot cue ali, pad aceso salta para ele, Shift + pad apaga. <b>LOOP</b>: a primeira apertada é loop manual (o pad marca IN e, na 2ª vez, OUT) e a segunda entra em Auto Loop, com um tamanho por pad.</li>
<li><b>ROLL</b> — segure um pad para disparar um loop-roll momentâneo; ao soltar, a faixa continua de onde estaria (rolls em tercina acendem em outra cor). <b>SLICER</b>: os 8 pads viram 8 batidas da grade e apertar um toca aquela fatia; a segunda apertada vira Slicer Loop. <b>PARAMETER ◄ / ►</b> ajusta o modo ativo.</li>
<li><b>EDIT GRID</b> e BEAT GRID ◄ / ► — corrigem a grade de batidas. Faixa antiga ou tocada por músico vivo quase sempre precisa, senão o SYNC erra.</li>
</ul>

<h3>3 · Mixer — a tira do canal</h3>
<ul>
<li><b>INPUT SELECTOR</b> (na frente) — Engine/USB (pendrive, SD ou software) ou Line (aparelho ligado atrás). Atenção: em Line, dos Sweep FX só o Filter age.</li>
<li><b>CHANNEL LEVEL</b> — ganho pré-fader e pré-EQ: é o gain staging, olhando o LEVEL METER (verde/âmbar; vermelho é clip).</li>
<li><b>CHANNEL EQ (HIGH / MID / LOW)</b> e SWEEP FX (um knob por canal, centro neutro). CHANNEL FX 1 / 2 manda o canal para o módulo Effect 1 ou 2; CUE manda o sinal pré-fader para o fone; o CROSSFADER ASSIGN joga o canal em L, R ou Thru (centro).</li>
<li>Detalhe do layout: os canais estão na ordem física <b>3 · 1 | 2 · 4</b>, com os cues 3 e 4 em verde e 1 e 2 em azul — para os decks principais ficarem no centro.</li>
</ul>

<h3>4 · Sweep FX e os módulos FX 1 / FX 2</h3>
<ul>
<li>Os quatro Sweep FX, sempre do centro para os lados: <b>FILTER</b> (esquerda passa-baixa, direita passa-alta) · <b>ECHO</b> (esquerda encurta o delay e sobe a realimentação, direita alonga) · <b>NOISE</b> (esquerda rosa, direita branco) · <b>WASH OUT</b> (no mínimo, eco de 1 tempo que também muta o canal; no máximo, eco de 1/2). Só um fica ativo por vez.</li>
<li><b>FX 1 / FX 2</b> (módulos independentes) — cada um com FX ON, FX SELECT, FX PARAMETER (knob + botão do parâmetro secundário), FX FREQUENCY (12h = espectro inteiro), WET/DRY, RESET e BEATS.</li>
<li>Efeitos do manual: <b>Reverb, Echo, Delay, Hall Echo, Ping Pong, Auto Gate, Flanger, Filter LFO, Phaser, Bit Crush, Roll e Rev. Roll</b>, com divisões de 1/32 a 8 tempos e Dry/Wet 0 a 100.</li>
</ul>

<h3>5 · Master, Booth, Zone e microfone</h3>
<ul>
<li><b>MASTER LEVEL</b> — volume do master. <b>BOOTH LEVEL + BOOTH EQ</b> controlam o monitor da cabine.</li>
<li><b>ZONE CHANNEL ASSIGN + ZONE LEVEL + ZONE EQ</b> — o recurso que vende o aparelho. Apertando o Zone Assign, o Deck 4 vira playlist independente que sai só pelas saídas Zone, e o level e o EQ do canal 4 são ignorados. Pista no salão, lounge com outra playlist, um aparelho.</li>
<li><b>MIC 1 / MIC 2 ON-OFF, LEVEL e EQ</b> — MIC 1 tem EQ de 3 bandas; MIC 2, só 2. Os LEDs indicam verde (baixo), âmbar (ótimo) e vermelho (pico); ECHO ON/OFF, MIC ECHO LEVEL e TALKOVER completam a seção. <b>Atenção de rota:</b> pelo manual o sinal dos microfones vai <b>direto para as saídas Master</b> — não passa pelo canal, então não tente equalizá-lo no EQ do canal.</li>
</ul>

<h3>6 · Navegação, mídia e fone</h3>
<ul>
<li><b>Tela de 10,1"</b> — biblioteca, waveforms dos 4 decks, cue points e loops; ela e os controles físicos operam a mesma interface. Navega-se pelo <b>BROWSE</b> (gira para percorrer, aperta para entrar), BACK, FWD, VIEW/MENU e LOAD ◄ / ►.</li>
<li>A mídia entra pelo <b>SD CARD SLOT</b> e pelas USB 1 / 2 do topo e 3 / 4 de trás — e o <b>EJECT</b> é obrigatório antes de arrancar o pendrive.</li>
<li><b>PHONES MIX</b>, PHONES LEVEL e SPLIT CUE (cue em mono à esquerda, master à direita). <b>FADER START L / R</b> e <b>X-FADER CONTOUR</b> (esquerda = fade suave, direita = corte seco).</li>
</ul>

<h3>Como ligar</h3>
<p>O Prime 4 <b>é</b> o mixer: tudo entra nele e só ele fala com o PA.</p>
<ul>
<li><b>Toca-discos → entradas Line/Phono RCA com a chave em PHONO</b> e o fio terra no borne. O manual é explícito: a posição Phono dá a amplificação extra que o sinal de agulha precisa. Zumbido é quase sempre terra solto.</li>
<li><b>CD player, sampler, celular, notebook → entradas de linha</b> (ou as Line/Phono com a chave em LINE): player digital nunca vai em PHONO. <b>Trocar os dois não funciona</b> — toca-discos em LINE sai fino e baixíssimo, player em PHONO sai estourado. Confira a chave antes do fader.</li>
<li><b>Microfone → as duas combo XLR/P10</b>. <b>Computador → USB B</b> (MIDI) e <b>rede → Link/Ethernet</b>, para software de luz e vídeo com StagelinQ.</li>
<li><b>Música → pendrive nas USB 1–4, cartão SD ou HD SATA interno</b>, em exFAT ou FAT32 e com a biblioteca preparada no Engine.</li>
<li><b>Saídas:</b> MASTER XLR para o PA (balanceada), MASTER RCA para gravação, BOOTH XLR para a cabine e ZONE XLR para a segunda sala.</li>
<li><b>Ordem, direto do manual:</b> (1) fontes, (2) Prime 4, (3) amplificação; desligar, o inverso. Siga o aviso da tela, que desmonta a mídia com segurança.</li>
</ul>

<h3>Na prática — faça no simulador desta aula</h3>
<ul>
<li><b>1.</b> Dê PLAY no deck esquerdo, deixe correr e aperte CUE: volta ao ponto de partida. Pause num ponto novo e aperte CUE — o ponto mudou para ali.</li>
<li><b>2. Grave um hot cue no primeiro tempo e volte nele duas vezes.</b> No modo HOT CUE, aperte um pad apagado na primeira batida: ele acende. Deixe a música correr e aperte-o duas vezes para saltar de volta.</li>
<li><b>3.</b> Faça um loop de 4 tempos com LOOP IN e LOOP OUT, deixe rodar e desligue. Refaça pelo AUTO LOOP e veja qual é mais rápido.</li>
<li><b>4.</b> Ligue o VINYL e faça scratch segurando o centro do prato. Apague o VINYL e repita: agora o prato só faz pitch bend.</li>
<li><b>5.</b> Abra o crossfader de um lado ao outro com os dois decks tocando; depois ponha os canais em Thru (centro do Assign) e confirme que ele deixou de agir.</li>
</ul>

<h3>Erros que custam caro</h3>
<ul>
<li><b>Arrancar o pendrive sem ejetar.</b> O Engine grava dados na mídia; puxar no meio de uma escrita corrompe a biblioteca — e você descobre na próxima festa.</li>
<li><b>Chegar com a biblioteca sem análise.</b> O Prime 4 analisa ao carregar, mas leva tempo e você fica parado com a pista olhando. Prepare no Engine em casa.</li>
<li><b>Esquecer o Zone atribuído.</b> Com ele ligado, o Deck 4 sai só na Zone e o level e o EQ do canal 4 não fazem nada — e você jura que o canal quebrou.</li>
<li><b>Confiar no SYNC sem conferir a grade.</b> Ele alinha pela beat grid que o Engine calculou; em faixa antiga, ao vivo ou com introdução livre a grade sai torta e o SYNC acerta no lugar errado. Use o EDIT GRID antes do show, não durante.</li>
</ul>
`.trim();

// ============================================================================
const AULAS = [
  { id: "d1a00000-0000-4000-9000-000000000119", nome: "Pioneer DJM-900NXS2", html: DJM900NXS2 },
  { id: "d1a00000-0000-4000-9000-000000000120", nome: "Pioneer DJM-V10", html: DJMV10 },
  { id: "d1a00000-0000-4000-9000-000000000302", nome: "Denon DJ X1850 Prime", html: X1850 },
  { id: "d1a00000-0000-4000-9000-000000000301", nome: "Denon DJ Prime 4+", html: PRIME4 },
];

// guarda-corpo da REGRA 5: só escreve na faixa d1a00000-*
const FAIXA = "d1a00000";
function conferirFaixa(id) {
  if (!id.startsWith(FAIXA + "-")) throw new Error(`ABORTADO — id ${id} está fora da faixa ${FAIXA}-* (REGRA 5)`);
}

(async () => {
  for (const a of AULAS) {
    conferirFaixa(a.id);
    const antes = await req("GET", `/lessons?id=eq.${a.id}&select=id,titulo,conteudo_rico`);
    if (!antes.length) throw new Error(`aula ${a.id} não existe`);
    const de = (antes[0].conteudo_rico || "").length;
    if (DRY) {
      console.log(`[dry] ${a.nome.padEnd(22)} ${String(de).padStart(6)} -> ${String(a.html.length).padStart(6)} chars`);
      continue;
    }
    await req("PATCH", `/lessons?id=eq.${a.id}`, { conteudo_rico: a.html }, { Prefer: "return=minimal" });
    const dep = await req("GET", `/lessons?id=eq.${a.id}&select=conteudo_rico,module_id,ordem`);
    console.log(`OK  ${a.nome.padEnd(22)} ${String(de).padStart(6)} -> ${String((dep[0].conteudo_rico || "").length).padStart(6)} chars   (mod ${dep[0].module_id.slice(-4)} ord ${dep[0].ordem} intactos)`);
  }
  console.log(DRY ? "\n(dry-run — nada gravado)" : "\nPronto.");
})().catch(e => { console.error("FALHOU:", e.message); process.exit(1); });
