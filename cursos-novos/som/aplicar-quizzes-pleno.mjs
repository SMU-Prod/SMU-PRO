/* Cria os 14 quizzes que faltavam no curso "Pleno — Som" (módulos 8, 11, 12, 13 e 14).
   Todas as aulas de simulador de console/DSP estavam sem avaliação.

   Fonte das afirmações: manuais/refs já capturados neste projeto
   (simuladores/som/_ref-venu360, _ref-pa2, _ref-260) e o comportamento
   implementado nos próprios simuladores. Onde havia risco de decorar
   folheto, a pergunta cobra OPERAÇÃO, não número.

     node cursos-novos/som/aplicar-quizzes-pleno.mjs --dry
     node cursos-novos/som/aplicar-quizzes-pleno.mjs
*/
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync(path.join(ROOT, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };

async function req(method, p, body, extra = {}) {
  const r = await fetch(REST + p, { method, headers: { ...H, ...extra }, body: body ? JSON.stringify(body) : undefined });
  const t = await r.text();
  if (!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0, 260)}`);
  return t ? JSON.parse(t) : null;
}

/* q = [pergunta, [op1,op2,op3,op4], indiceCorreto, explicacao] */
const QUIZZES = {
  "abe880d4-78bd-4530-89c0-d176ce6fdbf1": ["Yamaha M7CL", [
    ["O que a seção Centralogic do M7CL faz?", [
      "Dá 8 faders no centro que assumem o bloco selecionado, com a mesma tela para todos",
      "É o compressor master da mesa",
      "É a matriz de saída para transmissão",
      "É o roteamento de Dante"], 0,
      "Centralogic é a ideia central do M7CL: em vez de andar entre camadas, você escolhe um bloco de 8 canais e ele cai nos 8 faders centrais, com a tela mostrando exatamente aquele bloco."],
    ["No M7CL, qual a diferença prática entre o EQ Type I e o Type II?", [
      "Type I é mais suave nos extremos; Type II aperta menos o ganho ao juntar bandas vizinhas",
      "Type I é paramétrico e Type II é gráfico",
      "Type II só funciona nos canais estéreo",
      "Não há diferença: é só o nome da curva"], 0,
      "São dois algoritmos de EQ. O Type II foi desenhado para se comportar melhor quando bandas próximas trabalham juntas, evitando o acúmulo exagerado de ganho."],
    ["Você precisa que 12 canais desapareçam da mixagem num único toque, mas SEM perder o ajuste de cada fader. O que usar?", [
      "Mute Group", "Baixar o master", "Tirar o phantom", "Zerar o gain de cada canal"], 0,
      "Mute group silencia um conjunto sem mexer em fader nenhum — os níveis relativos continuam lá quando você tira o mute."],
    ["Por que se ajusta o HA (head amp) com o fader do canal fechado?", [
      "Porque um sinal alto entrando de repente pode estourar no PA e na caixa",
      "Porque o phantom só liga com o fader fechado",
      "Porque o EQ não funciona com o fader aberto",
      "Porque o gain só responde com o fader em zero"], 0,
      "É procedimento de segurança: você ajusta o ganho olhando o medidor, não ouvindo o PA. Com o fader aberto, um pico manda tudo para a caixa de uma vez."],
    ["No M7CL, o que diferencia um MIX de uma MATRIX?", [
      "MIX soma canais (retorno, efeito); MATRIX soma MIXes e o master, para saídas como transmissão e delay",
      "MATRIX é sempre mono e MIX é sempre estéreo",
      "MIX é digital e MATRIX é analógico",
      "São nomes diferentes para a mesma coisa"], 0,
      "MIX é alimentado pelos canais. MATRIX é alimentado pelas MIXes e pelo master — por isso serve para montar saídas derivadas da mistura pronta."]]],

  "7ea3b1fe-98bd-4e7d-9866-6bab7839c073": ["Yamaha LS9", [
    ["Como se navega o LS9, que não tem tela sensível ao toque?", [
      "Pelo cursor e pelo dial, selecionando o campo na tela e girando para editar",
      "Só por mouse USB", "Apenas pelo aplicativo do tablet", "Arrastando o dedo na tela"], 0,
      "O LS9 é anterior ao touch: a navegação é por teclas de cursor mais o dial. Saber isso é o que diferencia operar com fluidez de ficar perdido na tela."],
    ["Para que servem as camadas (layers) no LS9?", [
      "Para caber mais canais do que existem faders físicos, trocando o que cada fader controla",
      "Para separar o áudio em frequências",
      "Para gravar cenas", "Para dividir o palco em zonas de energia"], 0,
      "Layer é o jeito de uma mesa com poucos faders controlar muitos canais — a mesma régua física atende conjuntos diferentes."],
    ["O que uma CENA (scene) guarda?", [
      "Um retrato dos parâmetros da mesa, para ser chamado de volta na hora certa do show",
      "Só o volume do master", "Apenas o roteamento de saída", "A gravação do áudio do show"], 0,
      "Cena é memória de estado. Em teatro e culto ela é o que permite mudar toda a mesa entre um número e outro sem tocar em cada canal."],
    ["Você chamou uma cena no meio do show e o ganho de um microfone mudou sozinho, causando microfonia. Como se evita isso?", [
      "Usando o RECALL SAFE no canal, para que ele não seja afetado pelas cenas",
      "Desligando as cenas", "Baixando o master antes de cada cena", "Trocando o microfone"], 0,
      "Recall safe protege canais específicos da troca de cena — é exatamente para o caso do microfone que precisa manter o ajuste do momento."],
    ["No LS9, qual é a lógica correta para montar o retorno do palco?", [
      "Enviar os canais por MIX (aux), com o send ajustado por músico",
      "Usar o master do PA", "Copiar o fader do PA para o palco", "Ligar o retorno na matriz de gravação"], 0,
      "Retorno se monta por send de MIX: cada músico ouve uma mistura própria, independente do que a plateia ouve."]]],

  "c1bedcf4-d3ed-4f13-aa33-5e5e98b97676": ["Rivage PM7", [
    ["O que é o SILK no Rivage?", [
      "Emulação do transformador e do circuito Rupert Neve, com controle de textura por canal",
      "Um tipo de cabo óptico", "O protocolo de rede da mesa", "O compressor do master"], 0,
      "SILK traz a coloração dos transformadores Neve para o domínio digital, com o botão TEXTURE dosando a intensidade — é assinatura sonora, não correção."],
    ["A dinâmica dupla do Rivage significa que:", [
      "Cada canal tem dois processadores de dinâmica independentes em série",
      "O compressor trabalha em estéreo", "Existem dois limiters no master", "A dinâmica funciona em duas taxas de amostragem"], 0,
      "Dois blocos por canal permitem, por exemplo, um gate no primeiro e um compressor no segundo — ou dois compressores com funções distintas."],
    ["Ter 4 tipos de EQ por canal serve para quê, na prática?", [
      "Escolher a curva que combina com a fonte, em vez de forçar um só comportamento em tudo",
      "Aumentar o número de bandas", "Dobrar o ganho disponível", "Reduzir a latência"], 0,
      "Tipos diferentes de EQ têm comportamentos diferentes de Q e de ganho. Escolher o tipo é decisão sonora, anterior a mexer nas bandas."],
    ["Por que uma mesa de grande porte usa redundância de fonte e de rede?", [
      "Porque em show ao vivo não existe segunda chance: uma falha não pode calar o PA",
      "Para dobrar o volume", "Para reduzir o consumo", "Para aumentar a taxa de amostragem"], 0,
      "Redundância é requisito de show grande. A pergunta que o técnico faz é sempre: se isto falhar agora, o som para?"],
    ["O que o TEXTURE do SILK controla?", [
      "A quantidade de coloração harmônica aplicada, do sutil ao evidente",
      "O brilho do EQ", "O tempo de ataque do compressor", "O ganho do head amp"], 0,
      "TEXTURE é a dose. É o que permite usar SILK como tempero leve em toda a mesa ou como efeito marcante num canal só."]]],

  "18b8e8ac-afaa-4a35-92ca-005bbc917ecb": ["Rivage PM10", [
    ["Para que serve o Theatre Mode do Rivage PM10?", [
      "Guardar variações de EQ e dinâmica por personagem/cena, trocando com a cena sem refazer o canal",
      "Aumentar o volume do PA", "Desligar os efeitos", "Mudar a taxa de amostragem"], 0,
      "Em teatro, o mesmo canal atende atores diferentes ao longo do espetáculo. O Theatre Mode guarda esses ajustes e chama junto com a cena."],
    ["Qual a diferença entre o PM10 e o PM7 na prática de operação?", [
      "Compartilham o mesmo motor e a mesma lógica; mudam porte, entradas/saídas e recursos de sistema",
      "O PM7 é analógico", "O PM10 não tem SILK", "O PM7 não aceita rede"], 0,
      "São da mesma família. Quem aprende um opera o outro — o que muda é escala, não filosofia."],
    ["Numa mesa que atende musical com muitos microfones de lapela, o recurso mais valioso é:", [
      "Cena com Theatre Mode, para cada quadro ter seu ajuste sem intervenção manual",
      "Mais reverb", "Mais canais de matriz", "Fader motorizado mais rápido"], 0,
      "O problema do musical é a quantidade de trocas. Automatizar o estado é o que torna o show operável."],
    ["O que é uma DCA e por que ela não substitui um grupo?", [
      "DCA controla o nível de vários canais sem somá-los num bus; o grupo soma o áudio e permite processar o conjunto",
      "DCA é o mesmo que grupo", "DCA só funciona em mono", "Grupo não afeta o volume"], 0,
      "DCA é controle remoto de fader — não existe áudio passando por ela. Se você quer comprimir o conjunto, precisa de grupo, não de DCA."],
    ["Por que o operador de teatro trabalha com o PA e o monitor na mesma mesa com mais cuidado?", [
      "Porque um erro de cena afeta simultaneamente a plateia e o palco, e o espetáculo não para",
      "Porque a mesa esquenta", "Porque o teatro não usa retorno", "Porque não existe talkback"], 0,
      "Em teatro a margem de erro é menor: não há como pedir para repetir. Por isso cena e recall safe são tão usados."]]],

  "c7dc8eb4-1734-4492-bafa-e96663f5e5b8": ["Yamaha DM7", [
    ["O que caracteriza a interface do DM7?", [
      "Duas telas sensíveis ao toque trabalhando junto com a seção SELECTED CHANNEL",
      "Uma tela pequena com dial", "Nenhuma tela, só faders", "Controle apenas por tablet"], 0,
      "O DM7 combina touch duplo com o canal selecionado em controles dedicados — rápido no toque e preciso no botão físico."],
    ["Para que serve a seção SELECTED CHANNEL?", [
      "Dar controles físicos dedicados ao canal em foco, sem precisar caçar na tela",
      "Selecionar a saída de gravação", "Escolher a cena", "Ligar o phantom de todos"], 0,
      "É o princípio 'um canal, todos os controles à mão' — o que dá velocidade quando o show está acontecendo."],
    ["Numa mesa moderna com touch, qual é o risco operacional a evitar?", [
      "Depender só do toque e perder tempo navegando quando o show exige reação imediata",
      "A tela queimar", "O touch aumentar a latência", "O touch desligar o phantom"], 0,
      "Touch é ótimo para configurar e ruim para emergência. Por isso as mesas mantêm controles físicos para o que precisa ser instantâneo."],
    ["O que é um DCA e quando ele salva o operador?", [
      "Um controle de nível de vários canais ao mesmo tempo — por exemplo, toda a bateria num fader só",
      "Um tipo de efeito", "Um conversor digital", "Um cabo de rede"], 0,
      "DCA agrupa o controle sem somar o áudio. Em show, é o que permite abaixar 'a banda toda' sem desmontar a mistura."],
    ["Qual o procedimento correto ao ligar phantom num canal já aberto no PA?", [
      "Fechar o fader antes, ligar o phantom, esperar estabilizar e reabrir",
      "Ligar direto, não há risco", "Ligar com o master no máximo", "Tirar o cabo, ligar e recolocar"], 0,
      "O estouro do phantom entrando é alto e vai direto para a caixa. Fechar o fader antes é regra, não preciosismo."]]],

  "32b67c6a-8180-4d04-b481-132c9d658af1": ["Yamaha TF5", [
    ["O que o GainFinder mostra?", [
      "Uma faixa-alvo no medidor de entrada, indicando quando o ganho está na região correta",
      "A frequência de microfonia", "O tempo de reverb", "A latência da rede"], 0,
      "GainFinder é a tradução visual do gain staging: o técnico ajusta até o indicador entrar na faixa, sem depender de decorar valores."],
    ["O que o 1-knob COMP faz?", [
      "Controla vários parâmetros do compressor por um único botão, seguindo uma curva pronta",
      "Liga e desliga o compressor", "Ajusta só o threshold", "Faz o mesmo que o fader"], 0,
      "É um atalho: um knob move threshold, ratio e make-up juntos. Ótimo para começar rápido — e um limite quando você precisa de controle fino."],
    ["Por que o TF5 é uma escolha comum em igreja e evento corporativo?", [
      "Porque entrega recurso profissional com curva de aprendizado curta e operação por toque",
      "Porque é a mesa mais barata", "Porque não precisa de ganho", "Porque dispensa retorno"], 0,
      "O contexto costuma ter equipe voluntária ou rotativa. Uma mesa que reduz o tempo até o primeiro som decente tem valor real ali."],
    ["Qual a limitação do 1-knob que o operador precisa conhecer?", [
      "Ele segue uma curva pronta; quando a fonte pede ataque ou release específico, é preciso ir no modo completo",
      "Ele desliga o EQ", "Ele só funciona em canais pares", "Ele aumenta a latência"], 0,
      "Atalho é atalho. Saber quando ele deixa de servir é parte de dominar a ferramenta."],
    ["No TouchFlow, o que agiliza o trabalho durante a passagem de som?", [
      "Selecionar o canal e ajustar direto na tela, com o retorno visual imediato do que mudou",
      "Desligar a tela", "Usar apenas os faders", "Operar sem selecionar canal"], 0,
      "O ganho de tempo vem de ver e tocar no mesmo lugar. A tela deixa de ser menu e passa a ser a própria superfície de trabalho."]]],

  "e7281a26-f496-41d2-8dd8-e7a13bd8debd": ["Behringer X32 / Midas M32", [
    ["O que é o canal físico do X32/M32?", [
      "Uma faixa de controles dedicada ao canal selecionado, com 6 encoders para os blocos do processamento",
      "O cabo do canal", "A entrada analógica", "O fader do master"], 0,
      "É o mesmo princípio do 'selected channel': o canal em foco ganha controles físicos, e os 6 encoders percorrem gate, EQ, dinâmica e sends."],
    ["Qual a relação entre X32 e M32?", [
      "Mesma plataforma; o M32 traz pré-amplificadores e acabamento da linha Midas",
      "São mesas sem relação", "O M32 é analógico", "O X32 não tem efeitos"], 0,
      "A arquitetura é compartilhada. A diferença está no pré-amplificador e na construção, não na lógica de operação."],
    ["Por que o X32 popularizou o retorno por in-ear em bandas pequenas?", [
      "Porque entrega muitos sends de mix a um custo acessível, com controle pelo celular do músico",
      "Porque tem mais volume", "Porque dispensa cabo", "Porque tem mais reverb"], 0,
      "O gargalo do in-ear sempre foi quantidade de mixes independentes. Uma mesa acessível com muitos sends mudou o que é possível numa banda pequena."],
    ["O que fazer quando o show acaba e você quer repetir o mesmo ajuste na semana seguinte?", [
      "Salvar a cena/show file e recarregar no próximo evento",
      "Fotografar a mesa", "Anotar os valores num papel", "Refazer tudo do zero"], 0,
      "Memória de cena é o que transforma um bom ajuste em um ativo reutilizável — e é o que separa o amador do profissional na rotina."],
    ["Você abriu o gain e o LED de clip do canal acende antes do fader chegar na unidade. O que está errado?", [
      "O ganho de entrada está alto demais: o estouro é anterior ao fader",
      "O fader está com defeito", "Falta phantom", "O EQ está desligado"], 0,
      "Clip no canal é problema de entrada. Abaixar o fader não resolve, porque o sinal já entrou distorcido antes dele."]]],

  "e5a774ec-047f-4277-ba8f-dea18e322eae": ["Soundcraft Vi3000", [
    ["O que é o Vistonics II?", [
      "Encoders posicionados na própria tela, alinhados ao parâmetro que controlam",
      "Um tipo de conversor", "O protocolo de rede", "O compressor do master"], 0,
      "A ideia do Vistonics é acabar com a tradução mental entre tela e botão: o encoder fica embaixo do parâmetro que ele move."],
    ["O que são D-EQ e D-Dynamics no Vi3000?", [
      "Blocos adicionais de EQ e dinâmica com comportamento próprio, além do processamento padrão do canal",
      "Efeitos de reverb", "Saídas digitais", "Modos de economia de energia"], 0,
      "São ferramentas extras de canal — dão outra opção sonora sem gastar um insert externo."],
    ["No Vi3000, o VCA cumpre qual papel?", [
      "Controlar o nível de um conjunto de canais sem somá-los num bus de áudio",
      "Converter analógico em digital", "Alimentar o phantom", "Gerar o talkback"], 0,
      "VCA é controle, não caminho de áudio. É a mesma ideia da DCA em outras marcas."],
    ["Por que uma mesa de FOH grande separa claramente bus de grupo e VCA?", [
      "Porque o grupo soma o áudio e permite processar o conjunto; o VCA só move níveis",
      "Porque o VCA tem mais latência", "Porque o grupo não afeta o som", "Porque são a mesma coisa"], 0,
      "Confundir os dois leva a erro clássico: tentar comprimir 'o grupo' por um VCA, que não tem áudio passando por ele."],
    ["Qual a vantagem operacional de encoders na tela durante um show?", [
      "Reduz o tempo entre ver o problema e corrigir, porque o controle está onde a informação aparece",
      "Aumenta o volume", "Diminui a latência do áudio", "Elimina a necessidade de cena"], 0,
      "Em show, tempo de reação é qualidade. Toda a ergonomia da mesa existe para encurtar esse caminho."]]],

  "27663106-8693-42d1-aa49-9fb779440e19": ["Soundcraft Ui24R", [
    ["Como se opera o Ui24R?", [
      "Por navegador, via Wi-Fi, em qualquer dispositivo — a mesa não tem superfície de faders",
      "Só por faders físicos", "Apenas por MIDI", "Somente por cabo serial"], 0,
      "O Ui24R é um mixer de rack: a interface é uma página web. Isso muda o fluxo de trabalho inteiro, para melhor e para pior."],
    ["Qual é o risco operacional específico de um mixer controlado por Wi-Fi?", [
      "Perder a rede no meio do show e ficar sem controle da mesa",
      "O áudio passar pela rede e atrasar", "O phantom desligar", "O EQ resetar"], 0,
      "O áudio não depende da rede, mas o CONTROLE sim. Por isso se usa roteador próprio, canal limpo e, quando possível, um dispositivo cabeado de reserva."],
    ["Para que serve o mix pessoal no Ui24R?", [
      "Cada músico acessa e ajusta o próprio retorno pelo celular, sem pedir ao técnico",
      "Gravar o show", "Aumentar o volume do PA", "Trocar o padrão polar do microfone"], 0,
      "Transferir o retorno para o músico resolve o maior gargalo do palco: a fila de pedidos durante a passagem."],
    ["O Ui24R grava multipista. Por que isso é valioso mesmo em evento pequeno?", [
      "Permite refazer a mixagem depois e usar o material como registro e estudo",
      "Aumenta o volume", "Reduz a microfonia", "Elimina a necessidade de soundcheck"], 0,
      "Gravar o multipista transforma cada show em material de estudo e em possível produto — sem custo adicional de equipamento."],
    ["Numa igreja com equipe rotativa, qual a maior vantagem do controle por navegador?", [
      "Qualquer pessoa autorizada opera de onde estiver, inclusive de dentro da plateia, ouvindo o que o público ouve",
      "Dispensa o gain staging", "Elimina o cabo de microfone", "Aumenta o número de canais"], 0,
      "Poder mixar ouvindo do lugar do público é uma vantagem real — o FOH fixo nem sempre está no melhor ponto da sala."]]],

  "f9bf2d1b-a80c-44fe-a6df-7e28f29c2431": ["Soundcraft Signature 22 MTK", [
    ["O que significa MTK no nome da mesa?", [
      "Multi-track: ela envia e recebe multipista por USB, além de mixar",
      "Mais Tecnologia Konsole", "Modo Trabalho", "Multi-Track apenas em analógico"], 0,
      "A MTK é uma mesa analógica com interface multipista embutida — grava cada canal separado no computador enquanto mixa ao vivo."],
    ["O que caracteriza o chamado EQ britânico desta linha?", [
      "Curvas musicais, pensadas para soar bem mesmo com ajustes largos",
      "Um EQ que só corta", "EQ com 31 bandas", "EQ que funciona só em agudos"], 0,
      "É uma escolha de projeto: bandas com Q e pontos escolhidos para 'errar bonito'. Em mesa analógica, a curva é a identidade sonora."],
    ["Numa mesa analógica, onde se resolve o gain staging?", [
      "No GAIN de entrada, olhando o PFL/medidor, antes de qualquer outra coisa",
      "No fader do master", "No EQ", "No compressor de saída"], 0,
      "Analógica não perdoa: o ruído e a distorção entram na entrada. Se o ganho está errado, nada depois conserta."],
    ["Qual a vantagem prática de uma mesa analógica hoje?", [
      "Cada função tem um controle visível e permanente: não há menu, e o estado é lido de relance",
      "Tem mais canais", "Tem menos ruído que qualquer digital", "Grava cena"], 0,
      "O valor da analógica é a transparência operacional. A limitação é a falta de memória: o que você ajustou, você anotou ou perdeu."],
    ["Você quer gravar o culto em multipista e mixar depois. Nessa mesa, isso é feito:", [
      "Pela saída USB multipista, com cada canal indo separado para o computador",
      "Gravando a saída master em estéreo apenas", "Por microfone na sala", "Não é possível"], 0,
      "É exatamente a razão de existir da versão MTK. Multipista permite refazer decisões depois — estéreo do master, não."]]],

  "473a7f1a-d2c1-436d-a8d6-407f285f7497": ["PreSonus StudioLive 32SC", [
    ["O que é o Fat Channel?", [
      "Um bloco único que reúne gate, compressor, EQ e limiter do canal, com a mesma interface para todos",
      "Um tipo de cabo", "O canal de maior volume", "A saída de subwoofer"], 0,
      "A ideia é padronizar: o mesmo conjunto de processamento, acessado do mesmo jeito, em qualquer canal."],
    ["O que é uma FlexMix?", [
      "Uma saída que pode ser configurada como aux, subgrupo ou matriz, conforme a necessidade",
      "Um efeito de modulação", "Um tipo de microfone", "Uma entrada digital"], 0,
      "FlexMix é flexibilidade de arquitetura: a mesma saída assume papéis diferentes conforme o evento pede."],
    ["No SOLO em modo PFL, o que você escuta?", [
      "O sinal antes do fader — útil para conferir ganho sem depender do volume do canal",
      "Sempre o master", "O sinal depois de todos os efeitos", "O retorno do palco"], 0,
      "PFL (pre-fader listen) é a ferramenta de diagnóstico: escuta o canal como ele entrou, independente de onde está o fader."],
    ["Por que a mesma cadeia de processamento em todos os canais ajuda o operador?", [
      "Porque elimina a hesitação: você já sabe onde está cada controle em qualquer canal",
      "Porque reduz a latência", "Porque aumenta o ganho", "Porque dispensa EQ"], 0,
      "Consistência de interface vira velocidade. Em show, hesitar é perder o momento."],
    ["Você precisa de mais um envio de retorno e já usou todos os aux. Numa mesa com FlexMix, a saída é:", [
      "Reconfigurar uma FlexMix disponível como aux",
      "Comprar outra mesa", "Usar a saída de fone", "Somar no master"], 0,
      "É justamente o caso de uso: a arquitetura se adapta ao evento, em vez de o evento se adaptar à mesa."]]],

  "7c100000-0000-4000-9000-000000000101": ["dbx DriveRack VENU360", [
    ["No VENU360, onde fica o bloco de AutoEQ?", [
      "Na SAÍDA", "Na entrada, antes do crossover", "Dentro do limiter", "No bloco de delay de entrada"], 0,
      "É um detalhe que muda a operação: o AutoEQ do VENU360 age na saída. Quem procura na entrada não encontra — e ajusta o bloco errado."],
    ["Quais tipos de crossover o VENU360 oferece?", [
      "Butterworth e Linkwitz-Riley", "Butterworth, Bessel e Linkwitz-Riley", "Apenas Bessel", "Apenas Linkwitz-Riley"], 0,
      "O VENU360 NÃO traz Bessel — quem vem do DriveRack 260, que tem, costuma procurar e não achar. Conferido no manual oficial."],
    ["Qual a função do limiter na saída de um processador de sistema?", [
      "Impedir que o amplificador entregue à caixa mais do que ela aguenta, protegendo o driver",
      "Aumentar o volume médio", "Corrigir a fase", "Equalizar a sala"], 0,
      "No PA, o limiter é peça de proteção do investimento. Ele é o último portão antes do amplificador."],
    ["Para que serve o AFS (Advanced Feedback Suppression)?", [
      "Detectar a frequência que está microfonando e aplicar um filtro estreito nela",
      "Aumentar o ganho do microfone", "Trocar o padrão polar", "Somar os subwoofers"], 0,
      "AFS trabalha com filtros notch automáticos. É rede de segurança, não substituto de posicionamento e EQ bem feitos."],
    ["O System Wizard existe para quê?", [
      "Conduzir a configuração inicial (tipo de caixa, amplificador, crossover) por perguntas, evitando erro grosseiro",
      "Gravar o show", "Substituir o operador", "Alinhar a fase automaticamente entre torres"], 0,
      "O wizard entrega um ponto de partida seguro. O ajuste fino continua sendo trabalho de quem ouve a sala."]]],

  "7c100000-0000-4000-9000-000000000102": ["dbx DriveRack PA2", [
    ["O que o AutoEQ do PA2 faz?", [
      "Mede a resposta da sala com microfone de referência e aplica correção de EQ",
      "Aumenta o volume automaticamente", "Alinha o delay das torres", "Troca o crossover"], 0,
      "AutoEQ é medição mais correção. Serve como ponto de partida — a decisão final continua sendo de quem ouve."],
    ["Qual a diferença de proposta entre o PA2 e o VENU360?", [
      "O PA2 mira sistemas menores e configuração assistida; o VENU360 tem mais saídas e recursos de sistema maior",
      "O PA2 é analógico", "O VENU360 não tem limiter", "São idênticos"], 0,
      "São o mesmo conceito em escalas diferentes. Saber qual usar é parte do dimensionamento do serviço."],
    ["Por que o microfone de medição precisa estar na posição da plateia, e não junto à caixa?", [
      "Porque a correção deve considerar a sala, que é o que o público realmente ouve",
      "Porque perto da caixa o microfone queima", "Porque o cabo não alcança", "Porque perto da caixa não há som"], 0,
      "Equalizar pela resposta junto à caixa ignora justamente o problema que se quer resolver: o que a sala faz com o som."],
    ["Depois de rodar o wizard, qual é o passo que nenhum automatismo substitui?", [
      "Ouvir material conhecido na sala cheia e ajustar pelo que se escuta",
      "Rodar o wizard de novo", "Aumentar o limiter", "Desligar o crossover"], 0,
      "Sala vazia e sala cheia são acústicas diferentes. O automático dá o ponto de partida; o ouvido fecha o trabalho."],
    ["No PA2, o crossover define:", [
      "Em que frequência cada via (grave, médio, agudo) começa e termina",
      "O volume do master", "O tempo de reverberação", "O ganho de entrada"], 0,
      "Crossover é a divisão do espectro entre os drivers. Errar aqui manda grave para o tweeter — e o tweeter não volta."]]],

  "7c100000-0000-4000-9000-000000000103": ["dbx DriveRack 260", [
    ["O DriveRack 260 oferece qual tipo de crossover que o VENU360 não tem?", [
      "Bessel", "Linkwitz-Riley", "Butterworth", "Nenhum: os dois têm os mesmos"], 0,
      "O 260 traz Bessel entre as opções; o VENU360 não. É a diferença que mais confunde quem migra de um para o outro."],
    ["O que caracteriza o filtro Linkwitz-Riley, o mais usado em PA?", [
      "Soma plana no ponto de corte quando as duas vias estão em fase — as bandas se juntam sem pico nem buraco",
      "Corta mais forte que todos", "Não tem inclinação", "Só funciona em subgrave"], 0,
      "É a razão da popularidade dele: no cruzamento, o que sai é a soma correta das duas vias, sem ressalto."],
    ["Por que o 260 continua em uso mesmo sendo o modelo antigo da família?", [
      "Porque faz o essencial com confiabilidade: crossover, EQ, delay, limiter e compressão de sistema",
      "Porque é mais barato que qualquer outro", "Porque tem tela colorida", "Porque não precisa de configuração"], 0,
      "Em áudio profissional, equipamento que faz o básico sem falhar tem vida longa. O 260 é caso clássico disso."],
    ["Para que serve o delay dentro do processador de sistema?", [
      "Alinhar no tempo caixas que estão a distâncias diferentes do público",
      "Criar efeito de eco artístico", "Aumentar o grave", "Reduzir a microfonia"], 0,
      "Delay de sistema é alinhamento, não efeito. É o que faz duas fontes distantes chegarem juntas ao ouvinte."],
    ["Ao configurar o limiter de saída, o valor de referência correto vem de:", [
      "Potência do amplificador e limite da caixa, convertidos para o nível de saída do processador",
      "Do gosto do operador", "Do volume da última música", "Da temperatura do rack"], 0,
      "Limiter mal ajustado é decoração. O número tem que sair do datasheet do amplificador e da caixa, não do chute."]]],
};

const total = Object.keys(QUIZZES).length;
let feitos = 0, pulados = 0, perguntas = 0;

for (const [lessonId, [nome, qs]] of Object.entries(QUIZZES)) {
  const ja = await req("GET", `/quizzes?lesson_id=eq.${lessonId}&select=id`);
  if (ja && ja.length) { console.log(`· ${nome}: já tinha quiz — pulado`); pulados++; continue; }
  if (DRY) { console.log(`+ ${nome}: criaria quiz com ${qs.length} questões`); feitos++; perguntas += qs.length; continue; }

  const [quiz] = await req("POST", "/quizzes", {
    lesson_id: lessonId,
    titulo: `Avaliação — ${nome}`,
    descricao: `Confira se você domina a operação do ${nome}. Aprovação a partir de 70%.`,
    nivel_minimo_aprovacao: 70, tentativas_permitidas: 3, embaralhar_questoes: true,
  }, { Prefer: "return=representation" });

  for (let i = 0; i < qs.length; i++) {
    const [texto, ops, certa, expl] = qs[i];
    const [q] = await req("POST", "/quiz_questions", {
      /* enum question_type do banco = multiple_choice | true_false (conferido em pg_enum;
         "multipla_escolha" NÃO existe e devolve 22P02) */
      quiz_id: quiz.id, texto, explicacao: expl, ordem: i + 1, pontos: 1, tipo: "multiple_choice",
    }, { Prefer: "return=representation" });
    await req("POST", "/quiz_options",
      ops.map((t, j) => ({ question_id: q.id, texto: t, correta: j === certa, ordem: j + 1 })));
    perguntas++;
  }
  await req("PATCH", `/lessons?id=eq.${lessonId}`, { tem_quiz: true });
  console.log(`✓ ${nome}: quiz criado (${qs.length} questões)`);
  feitos++;
}
console.log(`\n${DRY ? "SIMULAÇÃO" : "APLICADO"} — ${feitos}/${total} quizzes, ${perguntas} questões, ${pulados} pulados.`);
