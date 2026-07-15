// Gerador da migration SQL — REFORMULAÇÃO do curso EXISTENTE "LUZ BASICO" (5407f707).
// NÃO cria curso novo: apaga os módulos/aulas antigos e reconstrói em nível profissional
// (3 módulos, 11 aulas) com teoria + IMAGENS realistas + simulador + quiz.
// Uso:  node cursos-novos/luz-basico-pro/build-sql.mjs
// Saída: supabase/migrations/20260717_luz_basico_pro.sql
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { figure } from "./images.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const jsonb = (obj) => q(JSON.stringify(obj)) + "::jsonb";
const applyImgs = (html) => html.replace(/\{\{IMG:([a-z0-9-]+)\}\}/g, (_, slug) => figure(slug));
const readFrag = (f) => applyImgs(fs.readFileSync(path.join(__dirname, f), "utf8").trim());
const readSim = (f) => fs.readFileSync(path.join(ROOT, "simuladores/luz-basico", f), "utf8");

const COURSE = "5407f707-4dac-4a8e-913c-197aa8ad3877";
// IDs determinísticos NOVOS (prefixo 10c0 = luz; não colide com nada existente)
// O bloco final do uuid tem 12 hex EXATOS. Aqui o "a" marca módulo e sobra 1 dígito só, então
// o módulo vai em HEX: 1..9 saem idênticos aos ids que já estão no banco, 10..15 viram a..f.
// Do 16 em diante o id ficaria com 13 chars — uuid inválido, o insert seria recusado. Explode
// aqui, na hora de escrever o módulo, e não no meio de um apply.
const MOD = (n) => {
  if (!Number.isInteger(n) || n < 1 || n > 15)
    throw new Error(`módulo ${n} fora de 1..15: o bloco "a{hex}" só cabe 1 dígito. ` +
      `Para passar de 15, registre um bloco novo no _REGISTRO-IDS.mjs — não alargue este.`);
  return "10c00000-b551-4c00-9000-0000000000a" + n.toString(16);
};
const lidHex = (n) => "10c00000-b551-4c00-9000-0000000b" + String(n).padStart(4, "0");
const qidHex = (n) => "10c00000-b551-4c00-9000-0000000c" + String(n).padStart(4, "0");
const qqHex  = (l, n) => "10c00000-b551-4c00-9000-00000000" + l.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0");

// ── AULAS (fragment + dur + sim + quiz) ───────────────────────────────
const LESSONS = [
  {
    titulo: "O técnico de luz e as funções da luz no show",
    fragment: "aula-o-que-faz-tecnico-luz.fragment.html", dur: 16,
    quiz: { titulo: "Quiz — O técnico e as funções da luz", questoes: [
      { texto: "Qual NÃO é uma das funções da luz no espetáculo?",
        explicacao: "As funções da luz são visibilidade, foco/composição, cor, atmosfera e ritmo. Amplificar o som é função do sistema de áudio, não da luz.",
        opcoes: [["Deixar ver quem está no palco (visibilidade)", false],["Guiar o olhar e destacar o solista (foco)", false],["Amplificar o som da banda", true],["Criar clima e ritmo com cor e movimento", false]] },
      { texto: "A diferença entre o operador de luz e o light designer (LD) é que:",
        explicacao: "O LD concebe/desenha o projeto de luz (o 'como vai ser'); o operador monta, endereça e opera a mesa executando esse projeto ao vivo. Em eventos menores a mesma pessoa faz os dois.",
        opcoes: [["São exatamente a mesma coisa", false],["O LD concebe o projeto; o operador executa e opera ao vivo", true],["O operador só carrega equipamento", false],["O LD trabalha só com som", false]] },
      { texto: "Por que a fumaça/haze é importante para a luz?",
        explicacao: "Sem partículas no ar o facho não aparece — você só vê onde a luz bate. Com haze/fumaça o feixe fica visível no ar, revelando o desenho dos beams.",
        opcoes: [["Para esfriar as fixtures", false],["Para o facho ficar visível no ar (revela os beams)", true],["Para aumentar a potência da lâmpada", false],["Para limpar as lentes", false]] },
      { texto: "Um artista iluminado SÓ por contraluz, sem luz frontal, fica:",
        explicacao: "Vira silhueta — a plateia não vê o rosto. Precisa de luz frontal para a visibilidade.",
        opcoes: [["Com o rosto muito bem iluminado", false],["Como uma silhueta (rosto escondido)", true],["Invisível por completo", false],["Colorido de azul", false]] },
      { texto: "Onde o técnico de luz costuma atuar?",
        explicacao: "Luz de palco está em shows, igrejas, eventos corporativos, teatro, festas/baladas e TV — o mercado é amplo.",
        opcoes: [["Apenas em grandes festivais", false],["Shows, igrejas, corporativo, teatro, festas e TV", true],["Somente em estúdio de gravação de áudio", false],["Só em casamentos", false]] },
      { texto: "Uma postura profissional essencial do técnico de luz é:",
        explicacao: "Segurança em primeiro lugar (energia e altura matam), além de pontualidade, ler o rider e trabalhar em equipe com som e palco.",
        opcoes: [["Improvisar ligações de energia sem conferir", false],["Priorizar a segurança, a pontualidade e o trabalho em equipe", true],["Trabalhar sozinho e ignorar o rider", false],["Deixar os cabos soltos pelo palco", false]] },
    ] },
  },
  {
    titulo: "A física da luz: intensidade, cor, temperatura e ângulo",
    fragment: "aula-fisica-luz.fragment.html", dur: 20,
    sim: { file: "color-mixer.html", titulo: "Simulador — Mistura de Cor (RGBW + Dimmer)",
      narracao: "Some vermelho, verde e azul para criar qualquer cor e use o dimmer para a intensidade. Complete as 5 missões.",
      destaques: ["Mistura aditiva RGB → luz", "Canal W (branco) para pastéis e brancos limpos", "Dimmer = intensidade", "R+G+B no máximo = branco"] },
    quiz: { titulo: "Quiz — Física da luz", questoes: [
      { texto: "Na mistura ADITIVA (LED), Vermelho + Verde + Azul no máximo resulta em:",
        explicacao: "Somando as três primárias da luz no máximo você obtém branco. É o oposto da tinta (subtrativa), onde misturar tudo dá preto.",
        opcoes: [["Preto", false],["Branco", true],["Marrom", false],["Vermelho", false]] },
      { texto: "Vermelho + Verde (sem azul) na luz dá:",
        explicacao: "Na mistura aditiva, vermelho somado ao verde produz amarelo.",
        opcoes: [["Azul", false],["Amarelo", true],["Magenta", false],["Ciano", false]] },
      { texto: "Para que serve o canal W (branco) num LED RGBW?",
        explicacao: "Só RGB gera um branco 'sujo'/esverdeado. O emissor branco dedicado dá pastéis suaves e um branco limpo.",
        opcoes: [["Aumentar só o vermelho", false],["Dar pastéis e um branco limpo que o RGB puro não faz bem", true],["Controlar o movimento", false],["Ligar a fumaça", false]] },
      { texto: "Temperatura de cor baixa (~3200K) produz uma luz:",
        explicacao: "Kelvin baixo = quente/amarelada (tungstênio, aconchego). Kelvin alto (~6500K) = fria/azulada (luz do dia).",
        opcoes: [["Fria e azulada", false],["Quente e amarelada", true],["Verde", false],["Sem cor nenhuma", false]] },
      { texto: "Um moving BEAM tem facho estreito; um WASH tem facho:",
        explicacao: "Beam = facho concentrado que 'viaja' longe. Wash = facho aberto e suave, para banhar de cor. O zoom abre/fecha o ângulo.",
        opcoes: [["Ainda mais estreito que o beam", false],["Aberto e suave (banho)", true],["Sempre vermelho", false],["Sem lente", false]] },
      { texto: "Pela lei do inverso do quadrado, ao DOBRAR a distância da fixture ao alvo, a intensidade no alvo cai para cerca de:",
        explicacao: "Dobrar a distância deixa aproximadamente 1/4 da intensidade. Por isso fixtures longe do palco precisam ser mais potentes.",
        opcoes: [["A metade", false],["Um quarto (1/4)", true],["O dobro", false],["Não muda", false]] },
    ] },
  },
  {
    titulo: "Tipos de refletores: dos convencionais aos moving heads",
    fragment: "aula-tipos-refletores.fragment.html", dur: 20,
    quiz: { titulo: "Quiz — Tipos de refletores", questoes: [
      { texto: "O PAR (PAR64 / PAR LED) é usado principalmente para:",
        explicacao: "O PAR dá um banho de cor forte e barato, sem foco nem recorte — é o 'cavalo de batalha' do banho.",
        opcoes: [["Recortar um logo com precisão", false],["Dar banho de cor (sem foco)", true],["Projetar gobos nítidos", false],["Fazer o facho de beam no ar", false]] },
      { texto: "Qual fixture serve para RECORTAR a luz com facas (shutters) e projetar gobos com nitidez?",
        explicacao: "O elipsoidal / ERS / recorte (tipo Source Four) tem facas de corte, porta-gobo e íris — é o 'canhão de recorte' do teatro.",
        opcoes: [["PAR LED", false],["Elipsoidal (recorte / ERS)", true],["Strobe", false],["Blinder", false]] },
      { texto: "O moving head SPOT se diferencia por:",
        explicacao: "O spot tem facho definido com roda de gobos, íris, foco e prisma — recorta e projeta desenhos. O beam é estreito e denso; o wash é aberto e suave.",
        opcoes: [["Ser um facho aberto e sem borda", false],["Ter facho definido com gobos, foco e prisma (recorta/projeta)", true],["Não ter movimento", false],["Ser só uma lâmpada quente", false]] },
      { texto: "O moving BEAM é conhecido por:",
        explicacao: "Um facho muito estreito e denso, o 'tubo de luz' no ar — espetacular com fumaça. Tem pouca abertura de zoom.",
        opcoes: [["Banhar grandes áreas de cor", false],["Um facho muito estreito e denso (tubo no ar)", true],["Recortar cenário com facas", false],["Iluminar o rosto suavemente", false]] },
      { texto: "A regra prática 'WASH pinta, SPOT desenha, BEAM risca o ar' quer dizer que o WASH:",
        explicacao: "O wash tem facho largo e suave, ideal para pintar/banhar de cor. Spot desenha (gobo/recorte) e beam risca o ar (facho fino).",
        opcoes: [["Serve para banhar/pintar de cor grandes áreas", true],["Projeta logos nítidos", false],["Faz o facho fino no ar", false],["Só pisca (strobe)", false]] },
      { texto: "Um BLINDER serve para:",
        explicacao: "O blinder são lâmpadas quentes apontadas para a PLATEIA, usadas como efeito (estourar na batida). Não é para iluminar o artista.",
        opcoes: [["Iluminar suavemente o rosto do cantor", false],["Efeito jogando luz quente na plateia", true],["Recortar cenário", false],["Colorir o fundo", false]] },
    ] },
  },
  {
    titulo: "Iluminação de 3 pontos e as posições no palco",
    fragment: "aula-iluminacao-3-pontos.fragment.html", dur: 18,
    sim: { file: "luz-3-pontos.html", titulo: "Simulador — Iluminação de 3 Pontos",
      narracao: "Acenda key, fill e contraluz e veja o artista ganhar volume. Complete as 4 missões.",
      destaques: ["Key = luz principal", "Fill = suaviza a sombra", "Contraluz = separa do fundo", "Só contraluz = silhueta"] },
    quiz: { titulo: "Quiz — Iluminação de 3 pontos", questoes: [
      { texto: "A luz KEY (principal) é responsável por:",
        explicacao: "O key é a luz principal, geralmente frontal-lateral a ~45°, que define o rosto e a sombra do sujeito.",
        opcoes: [["Separar o sujeito do fundo", false],["Ser a luz principal que define o rosto e a sombra", true],["Colorir o ciclorama", false],["Cegar a plateia", false]] },
      { texto: "A função da luz FILL é:",
        explicacao: "O fill vem do lado oposto ao key, mais fraco, e suaviza a sombra sem apagá-la totalmente.",
        opcoes: [["Criar a sombra dura", false],["Suavizar a sombra do lado oposto ao key", true],["Fazer o contorno brilhante", false],["Projetar gobo", false]] },
      { texto: "O BACK LIGHT / contraluz fica atrás e acima do sujeito para:",
        explicacao: "Ele cria um brilho no contorno que separa a pessoa do fundo, dando profundidade (efeito tridimensional).",
        opcoes: [["Iluminar o rosto de frente", false],["Separar o sujeito do fundo com um contorno brilhante", true],["Iluminar a plateia", false],["Substituir o key", false]] },
      { texto: "Sem NENHUMA luz frontal, com só contraluz, o artista aparece como:",
        explicacao: "Silhueta — bonito às vezes, mas a plateia não vê o rosto. Precisa de frontal para visibilidade.",
        opcoes: [["Rosto bem iluminado", false],["Silhueta (rosto escondido)", true],["Totalmente colorido", false],["Igual à luz do dia", false]] },
      { texto: "Um ângulo frontal MUITO baixo (quase na horizontal do rosto) tende a:",
        explicacao: "Frontal baixo cega o artista e apaga as sombras (rosto 'chapado'); muito alto faz sombra no olho ('caveira'). ~45° é o ponto de partida.",
        opcoes: [["Dar o melhor volume possível", false],["Cegar o artista e apagar as sombras (chapado)", true],["Criar contraluz", false],["Colorir o fundo", false]] },
      { texto: "A luz de FUNDO / cyc serve para:",
        explicacao: "Ela colore o ciclorama/telão atrás, criando ambiente — mas sozinha não ilumina o artista.",
        opcoes: [["Iluminar o rosto", false],["Colorir o ciclorama/fundo atrás", true],["Fazer o strobo", false],["Ser a luz principal", false]] },
    ] },
  },
  {
    titulo: "DMX512: o idioma entre a mesa e as luzes",
    fragment: "aula-dmx512.fragment.html", dur: 18,
    sim: { file: "dmx-sinal.html", titulo: "Simulador — Sinal DMX e Daisy Chain",
      narracao: "Ligue as fixtures em cadeia (daisy chain), use cabo DMX e terminador, e veja o sinal chegar. Complete as 3 missões.",
      destaques: ["OUT → IN em cadeia", "Cabo DMX (não de microfone)", "Terminador 120Ω na última", "512 valores por universo"] },
    quiz: { titulo: "Quiz — DMX512", questoes: [
      { texto: "Um UNIVERSO DMX512 tem quantos canais?",
        explicacao: "512 canais por universo. Shows grandes usam vários universos.",
        opcoes: [["256", false],["512", true],["1024", false],["100", false]] },
      { texto: "O valor de cada canal DMX varia de:",
        explicacao: "Cada canal vai de 0 (nada/apagado) a 255 (máximo) — 8 bits.",
        opcoes: [["0 a 100", false],["0 a 255", true],["1 a 512", false],["0 a 1000", false]] },
      { texto: "A ligação em cadeia OUT→IN entre fixtures se chama:",
        explicacao: "Daisy chain: o DMX sai da mesa, entra na fixture 1 (IN), sai (OUT) e vai para a fixture 2, e assim por diante.",
        opcoes: [["Estrela", false],["Daisy chain (cadeia)", true],["Wireless", false],["Paralelo de energia", false]] },
      { texto: "O TERMINADOR (120Ω) na última fixture serve para:",
        explicacao: "Evita que o sinal reflita de volta na linha e cause erros. É colocado no DMX OUT da última fixture.",
        opcoes: [["Dar mais energia às luzes", false],["Evitar o sinal refletir e causar erros", true],["Aumentar o número de canais", false],["Ligar a fumaça", false]] },
      { texto: "O DMX é um protocolo:",
        explicacao: "Unidirecional: só a mesa fala e as fixtures ouvem. A fixture não devolve informação pela linha DMX.",
        opcoes: [["Bidirecional (a fixture responde)", false],["Unidirecional (só a mesa fala)", true],["Sem fio por padrão", false],["De áudio", false]] },
      { texto: "Para controlar muito mais que 512 canais num show grande, usa-se:",
        explicacao: "Vários universos (Universo 1, 2, 3...). Protocolos de rede como Art-Net/sACN transportam muitos universos por um cabo de rede (assunto do Pleno).",
        opcoes: [["Um cabo DMX mais grosso", false],["Vários universos (e redes como Art-Net/sACN)", true],["Aumentar a tensão", false],["Um terminador maior", false]] },
    ] },
  },
  {
    titulo: "Endereçamento e patch: o CEP de cada luminária",
    fragment: "aula-enderecamento-patch.fragment.html", dur: 20,
    sim: { file: "dmx-patch.html", titulo: "Simulador — Endereçamento e Patch DMX",
      narracao: "Dê a cada fixture um endereço inicial sem sobrepor, respeitando o footprint de cada modo. Complete as 4 missões.",
      destaques: ["Endereço inicial (start address)", "Footprint = canais por modo", "Não sobrepor", "Channel check"] },
    quiz: { titulo: "Quiz — Endereçamento e patch", questoes: [
      { texto: "O ENDEREÇO INICIAL (start address) de uma fixture é:",
        explicacao: "É o número do primeiro canal dela dentro do universo — o 'CEP' que diz à mesa onde aquela luz mora.",
        opcoes: [["A cor dela", false],["O número do primeiro canal dela no universo", true],["A potência em watts", false],["O modelo do fabricante", false]] },
      { texto: "O FOOTPRINT de uma fixture é:",
        explicacao: "Quantos canais ela ocupa, que depende do MODO escolhido (ex.: 3ch RGB ocupa 3; 16ch ocupa 16).",
        opcoes: [["A marca dela", false],["Quantos canais ela ocupa (depende do modo)", true],["O peso dela", false],["O tamanho do cabo", false]] },
      { texto: "A Fixture 1 usa 8 canais no endereço 1 (canais 1–8). A Fixture 2 idêntica deve começar em:",
        explicacao: "Depois do footprint da anterior: canais 1–8 ocupados, a próxima começa no 9. Começar no 5 sobreporia.",
        opcoes: [["5", false],["9", true],["1", false],["2", false]] },
      { texto: "Duas fixtures no MESMO endereço e mesmo modo vão:",
        explicacao: "Fazer exatamente a mesma coisa (clones). Útil para pares simétricos, mas perde-se o controle individual.",
        opcoes: [["Fazer exatamente a mesma coisa (clones)", true],["Se apagar", false],["Trocar de cor sozinhas", false],["Dar erro na energia", false]] },
      { texto: "O PATCH na mesa serve para:",
        explicacao: "Dizer à mesa QUAL modelo está em QUAL endereço, para ela mostrar os controles certos (cor, foco, gobo). Endereço na fixture e patch na mesa têm que bater.",
        opcoes: [["Aumentar a potência", false],["Dizer à mesa o modelo e o endereço de cada fixture", true],["Colorir o fundo", false],["Ligar a fumaça", false]] },
      { texto: "Se o endereço na fixture e o patch na mesa NÃO batem:",
        explicacao: "A mesa manda os comandos para os canais errados — você mexe na cor e outra coisa responde. Eles precisam coincidir.",
        opcoes: [["Funciona igual", false],["A mesa controla os canais errados (a luz errada responde)", true],["A fixture pega fogo", false],["Melhora o desempenho", false]] },
    ] },
  },
  {
    titulo: "Cabos e conectores de luz: DMX, energia e a linha bem feita",
    fragment: "aula-cabos-conectores-luz.fragment.html", dur: 16,
    quiz: { titulo: "Quiz — Cabos e conectores de luz", questoes: [
      { texto: "Por que NÃO se deve usar cabo de microfone no lugar do cabo DMX?",
        explicacao: "Cabo de microfone é 75Ω; DMX pede 120Ω. O de microfone 'funciona às vezes' e gera erros intermitentes (luz piscando/travando) difíceis de achar.",
        opcoes: [["Porque é grosso demais", false],["Porque a impedância errada (75Ω) causa erros intermitentes", true],["Porque não tem conector XLR", false],["Não há problema nenhum", false]] },
      { texto: "O conector DMX mais comum no Brasil é o:",
        explicacao: "XLR de 3 pinos. O padrão original é 5 pinos (pinos 4/5 quase nunca usados); há adaptadores 3↔5.",
        opcoes: [["RCA", false],["XLR de 3 pinos", true],["Speakon", false],["P2", false]] },
      { texto: "O terminador DMX é colocado:",
        explicacao: "No DMX OUT da ÚLTIMA fixture da linha. É um plugue com resistor de 120Ω que impede a reflexão do sinal.",
        opcoes: [["Na saída da mesa", false],["No DMX OUT da última fixture da linha", true],["Em toda fixture", false],["Na tomada de energia", false]] },
      { texto: "Um SPLITTER / buffer óptico DMX serve para:",
        explicacao: "Dividir uma linha em vários ramos isolados (ex.: 1 entra, 8 saem), cada ramo com seu terminador; isola defeitos (um ramo ruim não derruba os outros).",
        opcoes: [["Dividir a linha em ramos isolados", true],["Aumentar a tensão", false],["Colorir as luzes", false],["Substituir o terminador da mesa", false]] },
      { texto: "O conector de energia travável tipo PowerCon permite:",
        explicacao: "Fazer o LINK/daisy chain de energia entre fixtures (respeitando a corrente máxima somada). Azul = entrada (IN), cinza = saída (OUT).",
        opcoes: [["Enviar dados DMX", false],["Ligar a energia em cadeia entre fixtures (link)", true],["Só funcionar em LED", false],["Substituir o cabo DMX", false]] },
      { texto: "Sobre energia e dados no mesmo caminho:",
        explicacao: "Devem andar separados para evitar interferência; se precisarem cruzar, cruze em 90°. Cabo de força é sempre separado do DMX.",
        opcoes: [["Podem ser amarrados juntos sem problema", false],["Devem andar separados; se cruzar, cruze em 90°", true],["Devem usar o mesmo conector", false],["Tanto faz", false]] },
    ] },
  },
  {
    titulo: "Potência e dimmer: acendendo com segurança e sem estourar disjuntor",
    fragment: "aula-potencia-dimmer.fragment.html", dur: 18,
    quiz: { titulo: "Quiz — Potência e dimmer", questoes: [
      { texto: "Um refletor CONVENCIONAL (PAR64 de lâmpada) regula a intensidade através de:",
        explicacao: "Ele não regula sozinho: é ligado num DIMMER/rack externo, que corta a onda da rede para variar a intensidade. Cada canal do rack tem um endereço DMX.",
        opcoes: [["Um dimmer/rack externo", true],["Um controle interno próprio", false],["A quantidade de fumaça", false],["O cabo DMX apenas", false]] },
      { texto: "Uma fixture de LED ou moving head, para variar a intensidade, precisa apenas de:",
        explicacao: "Elas têm dimmer eletrônico próprio: precisam só de ENERGIA + DMX. A mesa manda o valor e a fixture regula.",
        opcoes: [["Ir num rack de dimmer", false],["Energia + DMX (têm dimmer próprio)", true],["Dois amplificadores", false],["Um terminador em cada uma", false]] },
      { texto: "Por que NÃO se liga uma fixture de LED num canal de dimmer (rack)?",
        explicacao: "O dimmer corta a onda da rede e estraga/queima a fonte do LED. LED vai direto na energia limpa.",
        opcoes: [["Porque o LED é fraco", false],["Porque o dimmer corta a onda e danifica a fonte do LED", true],["Porque o LED não usa DMX", false],["Não há problema", false]] },
      { texto: "Um circuito de 20A em 220V suporta aproximadamente quantos watts?",
        explicacao: "P = V × I = 220 × 20 ≈ 4400W. Some o consumo das fixtures e deixe folga (~20%) para não estourar o disjuntor.",
        opcoes: [["440W", false],["≈ 4400W", true],["44000W", false],["220W", false]] },
      { texto: "10 fixtures de 200W somam 2000W. Em 220V, isso dá cerca de:",
        explicacao: "I = P / V = 2000 / 220 ≈ 9A — cabe num circuito de 16A com folga.",
        opcoes: [["≈ 9A", true],["≈ 90A", false],["≈ 1A", false],["≈ 45A", false]] },
      { texto: "Um cuidado essencial de distribuição de energia é:",
        explicacao: "Usar cabo de bitola certa (cabo fino esquenta/derrete), aterrar, distribuir a carga entre circuitos/fases e conferir a tensão (110/220) antes de ligar.",
        opcoes: [["Usar o cabo mais fino disponível", false],["Cabo de bitola certa, aterramento e carga distribuída", true],["Ligar tudo num único circuito", false],["Ignorar a tensão da rede", false]] },
    ] },
  },
  {
    titulo: "A mesa de luz: canais, cenas, chases e a lógica de operação",
    fragment: "aula-mesa-luz-basica.fragment.html", dur: 18,
    sim: { file: "mesa-luz.html", titulo: "Simulador — Mesa de Luz Básica",
      narracao: "Monte looks com os faders, grave cenas nos playbacks, teste o blackout e rode um chase. Complete as 5 missões.",
      destaques: ["Fader de canal e Grand Master", "Gravar/chamar cenas (playbacks)", "Blackout (DBO)", "Chase no ritmo"] },
    quiz: { titulo: "Quiz — A mesa de luz", questoes: [
      { texto: "O GRAND MASTER da mesa faz o quê?",
        explicacao: "É o fader geral que limita TUDO. Se ele está abaixado, nada acende — é o erro clássico do iniciante ('a mesa não funciona').",
        opcoes: [["Controla só um canal", false],["Limita a intensidade geral de tudo", true],["Grava cenas", false],["Liga a fumaça", false]] },
      { texto: "Uma CENA (memória/look) é:",
        explicacao: "Um estado de luz gravado: você acende do jeito que quer e grava; depois chama a cena e tudo volta àquele look.",
        opcoes: [["Um tipo de cabo", false],["Um estado de luz gravado que você chama depois", true],["A potência da fixture", false],["Um conector DMX", false]] },
      { texto: "Um CHASE é:",
        explicacao: "Uma sequência de cenas que se alternam em loop, na velocidade (rate/BPM) que você define — o 'pisca-pisca' ritmado.",
        opcoes: [["Uma única cena estática", false],["Uma sequência de cenas alternando em loop e no ritmo", true],["Um cabo de energia", false],["O terminador da linha", false]] },
      { texto: "O BLACKOUT (DBO) serve para:",
        explicacao: "Apagar tudo instantaneamente — útil nas viradas e finais.",
        opcoes: [["Acender tudo no máximo", false],["Apagar tudo instantaneamente", true],["Gravar a cena atual", false],["Aumentar a velocidade do chase", false]] },
      { texto: "Na lógica HTP × LTP, os canais de dimmer geralmente seguem:",
        explicacao: "HTP (Highest Takes Precedence): vale o MAIOR valor entre as fontes. Já atributos de moving (cor, posição) seguem o ÚLTIMO comando (LTP).",
        opcoes: [["O último comando (LTP)", false],["O maior valor entre as fontes (HTP)", true],["A cor mais clara", false],["A fixture mais próxima", false]] },
      { texto: "Um console para MOVING LIGHTS (grandMA, Avolites, Chamsys...) trabalha com:",
        explicacao: "Fixtures inteligentes e seus atributos (pan/tilt, cor, gobo), com grupos e paletas — é mais que a mesa manual de dimmers. Aprofundado no Pleno.",
        opcoes: [["Apenas faders de dimmer", false],["Fixtures inteligentes, atributos, grupos e paletas", true],["Só áudio", false],["Somente uma cor fixa", false]] },
    ] },
  },
  {
    titulo: "Segurança: elétrica, altura, rigging e a truss",
    fragment: "aula-seguranca.fragment.html", dur: 18,
    quiz: { titulo: "Quiz — Segurança", questoes: [
      { texto: "Além da garra (clamp), toda fixture pendurada deve ter:",
        explicacao: "Um cabo de aço de segurança (safety) preso à estrutura — se a garra falhar, o safety segura. Fixture caindo mata.",
        opcoes: [["Uma segunda cor", false],["Um cabo de aço de segurança (safety)", true],["Mais um cabo DMX", false],["Uma etiqueta", false]] },
      { texto: "A NR35 trata de:",
        explicacao: "Trabalho em ALTURA (acima de 2m): exige treinamento, cinto/talabarte e ancoragem. A NR10 trata de eletricidade.",
        opcoes: [["Trabalho em altura", true],["Cor das fixtures", false],["Tamanho do cabo DMX", false],["Volume do som", false]] },
      { texto: "Sobre a carga (peso) na truss e na talha:",
        explicacao: "Cada truss e talha tem um limite de peso (kg). Some o peso das fixtures, distribua a carga e NUNCA ultrapasse o limite.",
        opcoes: [["Pode-se pendurar o quanto quiser", false],["Há um limite de kg que não se pode ultrapassar", true],["O peso não importa", false],["Só a cor importa", false]] },
      { texto: "A NR10 trata de:",
        explicacao: "Segurança em instalações e serviços em ELETRICIDADE — quem mexe em energia precisa de treinamento.",
        opcoes: [["Eletricidade", true],["Altura", false],["Máquinas de fumaça", false],["Cores da luz", false]] },
      { texto: "Cabos no chão em áreas de passagem devem ser:",
        explicacao: "Fixados com fita/gaffer e protegidos com canaleta/passa-cabo — risco de tropeço e de puxar uma fixture.",
        opcoes: [["Deixados soltos", false],["Fixados e protegidos com canaleta nas passagens", true],["Pendurados no teto sempre", false],["Enrolados no pescoço", false]] },
      { texto: "Na dúvida sobre estrutura ou energia, o técnico deve:",
        explicacao: "Chamar o responsável. Segurança vem antes do show — não se improvisa com energia e altura.",
        opcoes: [["Improvisar uma gambiarra", false],["Chamar o responsável (segurança antes do show)", true],["Ignorar e seguir", false],["Aumentar a carga para testar", false]] },
    ] },
  },
  {
    titulo: "Montagem, endereçamento e o checklist do show (prática)",
    fragment: "aula-montagem-checklist.fragment.html", dur: 20,
    sim: { file: "dmx-patch.html", titulo: "Simulador — Patch do Rig (prática)",
      narracao: "Pratique o endereçamento do rig sem sobrepor e faça o channel check, como no dia do evento. Complete as 4 missões.",
      destaques: ["Endereçar sem sobrepor", "Modo/footprint por fixture", "Channel check", "Patch batendo com a fixture"] },
    quiz: { titulo: "Quiz — Montagem e checklist", questoes: [
      { texto: "Qual é a ordem geral correta na montagem de luz?",
        explicacao: "Rigging/estrutura → energia → dados (DMX) → endereçamento → patch → channel check → foco → programação. Sempre a estrutura e a segurança primeiro.",
        opcoes: [["Programar primeiro, montar depois", false],["Estrutura → energia → DMX → endereços → patch → teste → foco", true],["Foco → energia → estrutura", false],["Não há ordem", false]] },
      { texto: "O 'channel check' (teste canal a canal) serve para:",
        explicacao: "Subir cada fixture sozinha e conferir se a que acende é a endereçada e se cor/pan/tilt/gobo respondem — achar troca de endereço/cabo ruim ANTES do show.",
        opcoes: [["Testar o som", false],["Conferir fixture por fixture se responde certo", true],["Aumentar a potência", false],["Gravar cenas", false]] },
      { texto: "Refletor convencional (lâmpada) vai ligado em..., e LED/moving vão...:",
        explicacao: "Convencional vai no rack de DIMMER; LED e moving vão direto na energia (têm dimmer próprio).",
        opcoes: [["...no dimmer; ...direto na energia", true],["...direto na energia; ...no dimmer", false],["ambos no dimmer", false],["ambos sem energia", false]] },
      { texto: "Antes de subir na truss para montar, o técnico deve:",
        explicacao: "Conferir a carga da estrutura, usar EPI (capacete, cinto/talabarte) e seguir a NR35 de altura. Segurança primeiro.",
        opcoes: [["Subir correndo sem equipamento", false],["Conferir a carga e usar EPI (altura/NR35)", true],["Energizar a truss com alguém em cima", false],["Ignorar o peso", false]] },
      { texto: "Um bom item do checklist final é:",
        explicacao: "Safety em toda fixture, terminador na ponta, carga dentro do disjuntor, endereços sem sobrepor, patch batendo, channel check feito e reservas à mão.",
        opcoes: [["Deixar cabos reserva em casa", false],["Safety em todas, terminador na ponta, channel check feito e reservas à mão", true],["Não conferir nada e confiar", false],["Endereços sobrepostos de propósito", false]] },
    ] },
  },
];

// ── Módulos e ordem ───────────────────────────────────────────────────
const MODULES = [
  { n: 1, titulo: "Módulo 1 — A Luz e o Palco" },
  { n: 2, titulo: "Módulo 2 — DMX, Ligações e Potência" },
  { n: 3, titulo: "Módulo 3 — A Mesa e a Prática" },
];
// `n` = NÚMERO PERMANENTE da aula. É ele que vira o id (lidHex(n)), NÃO a posição
// na lista. Regra 5 do CLAUDE.md: id é endereço fixo, não número de fila.
//   - Apagar uma aula: REMOVA a linha e NÃO renumere as outras. O buraco no `n` é
//     esperado e inofensivo (a ordem exibida vem de `ordem`, calculada por módulo).
//   - Aula nova: use o PRÓXIMO `n` livre (nunca reaproveite um `n` já usado — o id
//     antigo pode ter progresso de aluno preso nele).
//   - Reordenar: mexa na posição da linha; o `n` fica com a aula, o id não muda.
const LAYOUT = [
  { n: 1,  mod: 1, frag: "aula-o-que-faz-tecnico-luz.fragment.html" },
  { n: 2,  mod: 1, frag: "aula-fisica-luz.fragment.html" },
  { n: 3,  mod: 1, frag: "aula-tipos-refletores.fragment.html" },
  { n: 4,  mod: 1, frag: "aula-iluminacao-3-pontos.fragment.html" },
  { n: 5,  mod: 2, frag: "aula-dmx512.fragment.html" },
  { n: 6,  mod: 2, frag: "aula-enderecamento-patch.fragment.html" },
  { n: 7,  mod: 2, frag: "aula-cabos-conectores-luz.fragment.html" },
  { n: 8,  mod: 2, frag: "aula-potencia-dimmer.fragment.html" },
  { n: 9,  mod: 3, frag: "aula-mesa-luz-basica.fragment.html" },
  { n: 10, mod: 3, frag: "aula-seguranca.fragment.html" },
  { n: 11, mod: 3, frag: "aula-montagem-checklist.fragment.html" },
];

// Trava barata: `n` duplicado ou ausente = duas aulas no mesmo id (uma come a outra).
// Melhor explodir aqui do que descobrir no banco depois.
(() => {
  const vistos = new Set();
  for (const it of LAYOUT) {
    if (!Number.isInteger(it.n) || it.n < 1) throw new Error(`LAYOUT: aula sem \`n\` válido: ${it.frag}`);
    if (vistos.has(it.n)) throw new Error(`LAYOUT: \`n\` duplicado (${it.n}) em ${it.frag} — dois ids iguais.`);
    vistos.add(it.n);
  }
})();

// ── Monta SQL ─────────────────────────────────────────────────────────
const byFrag = Object.fromEntries(LESSONS.map((l) => [l.fragment, l]));
const L = [];
L.push("-- ====================================================================");
L.push("-- SMU PRO — REFORMULAÇÃO do curso 'LUZ BASICO' (5407f707)");
L.push(`-- Apaga módulos/aulas antigos e reconstrói (3 módulos, ${LAYOUT.length} aulas).`);
L.push("-- Mantém o MESMO curso (id/slug/matrículas/certificados). Idempotente ao reaplicar.");
L.push("-- ====================================================================");
L.push("begin;");
L.push("");
L.push("-- 1) Limpa conteúdo antigo do curso (cascata: lessons/quizzes/anim/progress/notas).");
// Só os módulos DESTE script (faixa 10c0), nunca `course_id = <curso>`: com o filtro por
// curso, um módulo que outra sessão acrescentasse ao luz-basico seria levado na cascata sem
// ninguém pedir. Mesmo escopo que o apply-rest.mjs já usa.
MODULES.forEach((m) => L.push(`delete from public.modules where id = ${q(MOD(m.n))};`));
L.push("");
L.push("-- 2) Atualiza metadados do curso.");
L.push("update public.courses set");
L.push(`  titulo = ${q("Luz — Básico")},`);
L.push(`  descricao_curta = ${q("Formação base do técnico de iluminação de palco: funções da luz, física (cor/temperatura/ângulo), tipos de refletores, DMX512, endereçamento e patch, cabos e conectores, potência e dimmer, a mesa de luz e a segurança — com imagens realistas e simuladores práticos.")},`);
L.push(`  categoria = 'luz', total_aulas = ${LAYOUT.length}`);
L.push(`  where id = ${q(COURSE)};`);
L.push("");
L.push("-- 3) Módulos");
MODULES.forEach((m) => {
  L.push(`insert into public.modules (id,course_id,titulo,ordem) values (${q(MOD(m.n))},${q(COURSE)},${q(m.titulo)},${m.n});`);
});
L.push("");

const ordByMod = {};
LAYOUT.forEach((item) => {
  const n = item.n; // número permanente da aula — NUNCA a posição no array (Regra 5)
  const les = byFrag[item.frag];
  if (!les) throw new Error("LAYOUT aponta p/ fragment sem lesson: " + item.frag);
  ordByMod[item.mod] = (ordByMod[item.mod] || 0) + 1;
  const ordem = ordByMod[item.mod];
  const lid = lidHex(n);
  const conteudo = readFrag(les.fragment);
  const isPreview = item.mod === 1 && ordem === 1;
  L.push(`-- AULA ${n} [M${item.mod}.${ordem}]: ${les.titulo}`);
  L.push("insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values");
  L.push(`  (${q(lid)},${q(MOD(item.mod))},${q(les.titulo)},'texto',${q(conteudo)},${les.dur || 16},${ordem},${les.quiz ? "true" : "false"},${isPreview});`);
  if (les.quiz) {
    const qid = qidHex(n);
    L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(qid)},${q(lid)},${q(les.quiz.titulo)});`);
    les.quiz.questoes.forEach((qq, j) => {
      const qqid = qqHex(n, j + 1);
      L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(qqid)},${q(qid)},${q(qq.texto)},${q(qq.explicacao)},${j + 1},1);`);
      qq.opcoes.forEach(([t, c], k) => L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(qqid)},${q(t)},${c},${k + 1});`));
    });
  }
  if (les.sim) {
    const roteiro = { titulo: les.sim.titulo,
      metadata: { titulo_aula: les.sim.titulo, total_cenas: 1, duracao_total: 0, abordagem_didatica: "Simulador interativo — pratique movendo os controles" },
      cenas: [{ numero: 1, titulo: les.sim.titulo, modo: "widget", narracao: les.sim.narracao || "", explicacao_texto: les.sim.narracao || "", destaques: les.sim.destaques || [] }] };
    const urls = [{ html: readSim(les.sim.file) }];
    // custo_usd:0 é OBRIGATÓRIO — o player faz `custo_usd.toFixed()` e com null estoura,
    // fazendo o simulador SUMIR da tela. O insert não reclama; o erro só aparece na aula.
    L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,custo_usd,roteiro,urls) values (${q(lid)},'interactive','ready','handcrafted-interactive',0,${jsonb(roteiro)},${jsonb(urls)});`);
  }
  L.push("");
});

L.push("commit;");
L.push("");
// Só escreve o arquivo quando rodado DIRETO (`node build-sql.mjs`).
// Este módulo também é importado pelo apply-rest.mjs (que reusa COURSE/MODULES/LAYOUT/
// helpers). Sem esta guarda, o simples `import` regravava a migration de 190 KB e sujava
// o working tree sem ninguém pedir — já travou um rebase com "unstaged changes", e várias
// sessões dividem esta mesma árvore. Gerar é efeito de RODAR, não de importar.
// Mesmo padrão já usado em efeito-games/build-variants.mjs.
const rodadoDireto =
  import.meta.url === `file://${(process.argv[1] || "").replace(/\\/g, "/")}` ||
  (process.argv[1] || "").endsWith("build-sql.mjs");
if (rodadoDireto) {
  const out = path.join(ROOT, "supabase/migrations/20260717_luz_basico_pro.sql");
  fs.writeFileSync(out, L.join("\n"), "utf8");
  console.log("OK ->", path.relative(ROOT, out), "|", (fs.statSync(out).size / 1024).toFixed(1), "KB |", LAYOUT.length, "aulas, 3 módulos");
}

// Exporta o modelo p/ o aplicador REST (apply-rest.mjs) reutilizar os MESMOS dados.
export { COURSE, MODULES, LAYOUT, LESSONS, MOD, lidHex, qidHex, qqHex, readFrag, readSim, byFrag };
