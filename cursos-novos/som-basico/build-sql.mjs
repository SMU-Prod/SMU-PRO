// Gerador da migration SQL — Curso "Som — Básico" (nível iniciante/trainee).
// Data-driven e multi-aula: adicione itens em LESSONS e rode de novo.
// Cada aula: teoria (fragment) + quiz opcional + simulador genérico opcional (ai_animations).
// Uso:  node cursos-novos/som-basico/build-sql.mjs
// Saída: supabase/migrations/20260711_som_basico.sql
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const jsonb = (obj) => q(JSON.stringify(obj)) + "::jsonb";
const readFrag = (f) => fs.readFileSync(path.join(__dirname, f), "utf8").trim();
const readSim = (f) => fs.readFileSync(path.join(ROOT, "simuladores/som-basico", f), "utf8");

// IDs determinísticos
const COURSE = "5b000000-b551-4c00-9000-000000000001";
const MODULE = "5b000000-b551-4c00-9000-0000000000a1";
const lidHex = (n) => "5b000000-b551-4c00-9000-0000000b" + String(n).padStart(4, "0");   // lesson
const qidHex = (n) => "5b000000-b551-4c00-9000-0000000c" + String(n).padStart(4, "0");   // quiz
const qqHex  = (l, n) => "5b000000-b551-4c00-9000-00000000" + l.toString(16).padStart(2, "0") + n.toString(16).padStart(2, "0"); // question (12 hex no fim)

// ── AULAS ─────────────────────────────────────────────────────────────
const LESSONS = [
  {
    titulo: "A cadeia do som ao vivo: da voz até a caixa",
    fragment: "aula-01-cadeia-do-som.fragment.html",
    dur: 20,
    sim: { file: "cadeia-do-som.html", titulo: "Simulador — A Cadeia do Som",
      narracao: "Monte a cadeia do som e aprenda a achar onde o sinal trava. Complete as 4 missões.",
      destaques: ["Fonte → mic/DI → cabo → mesa → amp → caixa", "Níveis de sinal", "Troubleshooting: achar onde travou"] },
    quiz: {
      titulo: "Quiz — A cadeia do som ao vivo",
      questoes: [
        { texto: 'O que é a "cadeia do som"?',
          explicacao: "É a sequência de etapas por onde o sinal passa, da fonte (voz/instrumento) até a caixa acústica. Se uma etapa trava, o som não chega.",
          opcoes: [["Um tipo de cabo de microfone", false],
                   ["A sequência de etapas por onde o sinal passa, da fonte até a caixa", true],
                   ["Uma marca de mesa de som", false],
                   ["O nome do show de abertura", false]] },
        { texto: "Qual etapa transforma o som acústico (uma voz) em sinal elétrico?",
          explicacao: "O microfone converte a energia acústica em sinal elétrico, que então segue pelo cabo até a mesa.",
          opcoes: [["O amplificador", false], ["O microfone", true], ["A caixa acústica", false], ["O cabo", false]] },
        { texto: "Um teclado, que tem saída elétrica, normalmente entra na mesa por:",
          explicacao: "Instrumentos com saída elétrica (teclado, baixo, violão com captador) entram por uma DI ou entrada de linha — não precisam de microfone.",
          opcoes: [["Um microfone apontado para ele", false],
                   ["Uma DI / entrada de linha", true],
                   ["Direto no alto-falante", false],
                   ["Não pode ser ligado na mesa", false]] },
        { texto: '"Não sai som." Qual é a atitude correta do técnico?',
          explicacao: "Seguir a cadeia na ordem — microfone, cabo, mesa (ganho/mute/fader), amplificador — checando cada etapa até achar onde travou.",
          opcoes: [["Trocar a mesa de som inteira", false],
                   ["Aumentar tudo no máximo de uma vez", false],
                   ["Seguir a cadeia na ordem, checando cada etapa até achar onde travou", true],
                   ["Reiniciar o show", false]] },
        { texto: "Uma caixa acústica PASSIVA precisa de:",
          explicacao: "A caixa passiva não tem amplificador embutido; precisa de um amplificador externo entre a mesa e a caixa. A caixa ativa já tem amplificador dentro.",
          opcoes: [["Nada, liga direto na tomada e funciona", false],
                   ["Um amplificador externo entre a mesa e a caixa", true],
                   ["Dois microfones", false],
                   ["Apenas um cabo de rede", false]] },
        { texto: "Onde você NUNCA deve ligar o sinal de saída de um amplificador (nível de alto-falante)?",
          explicacao: "O nível de alto-falante é potente; ligá-lo numa entrada de microfone (que espera um sinal fraquíssimo) danifica a entrada.",
          opcoes: [["Numa caixa passiva", false],
                   ["Numa entrada de microfone da mesa", true],
                   ["Num alto-falante compatível", false],
                   ["Em lugar nenhum, amplificador não tem saída", false]] },
      ] },
  },
  {
    titulo: "Microfones: tipos, phantom power e padrão polar",
    fragment: "aula-02-microfones.fragment.html",
    dur: 22,
    sim: { file: "microfones.html", titulo: "Simulador — Microfones e Padrão Polar",
      narracao: "Escolha o microfone certo para cada situação e use o padrão polar contra microfonia. Complete as 4 missões.",
      destaques: ["Dinâmico × condensador × lapela × sem fio", "Phantom power +48V", "Padrão polar e microfonia"] },
    quiz: {
      titulo: "Quiz — Microfones",
      questoes: [
        { texto: "Qual microfone é o padrão para voz ao vivo num ambiente barulhento?",
          explicacao: "O dinâmico cardioide é robusto, aguenta pressão sonora alta e rejeita o som de trás — ideal para voz ao vivo. Não precisa de phantom.",
          opcoes: [["Condensador de estúdio", false], ["Dinâmico cardioide", true], ["Lapela omnidirecional", false], ["Qualquer um, tanto faz", false]] },
        { texto: "Um microfone condensador precisa de:",
          explicacao: "O condensador precisa de phantom power (+48V), enviado pela mesa pelo cabo XLR. Sem isso, ele não funciona.",
          opcoes: [["Nada, funciona sozinho", false], ["Phantom power (+48V)", true], ["Um amplificador externo", false], ["Duas pilhas AA sempre", false]] },
        { texto: "O que faz um padrão polar cardioide?",
          explicacao: "O cardioide capta na frente e rejeita atrás. Por isso você aponta a parte de trás (zona surda) para as caixas, evitando microfonia.",
          opcoes: [["Capta igualmente de todos os lados", false], ["Capta na frente e rejeita atrás", true], ["Só capta sons agudos", false], ["Desliga o microfone", false]] },
        { texto: "Para evitar microfonia (feedback), o microfone deve:",
          explicacao: "O mic não deve 'olhar' para as caixas. Aponte a zona de rejeição do padrão polar para a PA/retorno, e mantenha o ganho só o necessário.",
          opcoes: [["Apontar direto para a caixa de retorno", false],
                   ["Ter a zona de rejeição apontada para as caixas", true],
                   ["Ficar o mais longe possível da boca", false],
                   ["Estar sempre com o ganho no máximo", false]] },
        { texto: "Um palestrante que anda pelo palco e precisa das mãos livres deve usar:",
          explicacao: "Lapela ou headset sem fio: mãos livres e distância constante da boca, ideal para quem se move.",
          opcoes: [["Microfone de mão com fio", false], ["Lapela ou headset sem fio", true], ["Condensador num pedestal fixo", false], ["Nenhum, projetar a voz", false]] },
        { texto: "Dois microfones sem fio ligados no mesmo canal/frequência causam:",
          explicacao: "Interferência e cortes. Cada sistema sem fio precisa de um canal/frequência diferente para funcionar sem conflito.",
          opcoes: [["Mais volume", false], ["Interferência e cortes no áudio", true], ["Melhor qualidade", false], ["Economia de pilha", false]] },
      ] },
  },
  {
    titulo: "A mesa analógica: canais, ganho e EQ de 3 bandas (notebook via P2→P10)",
    fragment: "aula-03-mesa-analogica.fragment.html",
    dur: 24,
    sim: { file: "mesa-analogica.html", titulo: "Simulador — Mesa Analógica (EQ 3 bandas)",
      narracao: "Opere uma mesa analógica de corporativo: notebook via P2→P10, ganho sem clip, EQ de 3 bandas e retorno. Complete as 5 missões.",
      destaques: ["Notebook via cabo P2→P10 estéreo", "Ganho sem estourar (PEAK)", "EQ de 3 bandas por canal", "AUX/retorno do palestrante"] },
    quiz: {
      titulo: "Quiz — Mesa analógica e conexões",
      questoes: [
        { texto: "Para ligar a saída de som de um notebook na mesa, o cabo correto costuma ser:",
          explicacao: "A saída de fone do notebook é P2 (3,5 mm); a entrada de linha estéreo da mesa é P10. Logo, cabo P2 → P10 estéreo.",
          opcoes: [["XLR para XLR", false], ["P2 (fone do notebook) → P10 estéreo (linha da mesa)", true], ["Cabo de rede (Dante)", false], ["Cabo de força", false]] },
        { texto: "O EQ de 3 bandas de um canal controla:",
          explicacao: "As três bandas são LOW (graves), MID (médios) e HIGH (agudos). Cada uma realça ou corta sua faixa de frequência.",
          opcoes: [["Volume, ganho e pan", false], ["Graves (LOW), médios (MID) e agudos (HIGH)", true], ["Três canais diferentes", false], ["Três saídas de retorno", false]] },
        { texto: "O que o knob de GANHO (trim) ajusta?",
          explicacao: "O ganho define quanto o sinal da entrada é amplificado logo na entrada do canal. Microfone precisa de mais; linha (notebook) precisa de pouco.",
          opcoes: [["O volume final na PA", false], ["Quanto o sinal da entrada é amplificado na entrada do canal", true], ["A quantidade de grave", false], ["O envio de retorno", false]] },
        { texto: "O LED PEAK aceso o tempo todo significa:",
          explicacao: "Sinal forte demais, prestes a distorcer (clip). A solução é abaixar o ganho até o PEAK parar de acender constantemente.",
          opcoes: [["Que está tudo perfeito", false], ["Sinal forte demais, risco de distorção — abaixe o ganho", true], ["Que o canal está mutado", false], ["Que falta phantom power", false]] },
        { texto: "Para que serve o envio AUX de um canal?",
          explicacao: "O AUX cria uma mistura separada — tipicamente o retorno (monitor) do palestrante/músico, independente do fader principal.",
          opcoes: [["Aumentar o grave do canal", false], ["Criar uma mistura separada, como o retorno do palestrante", true], ["Ligar o phantom", false], ["Silenciar o canal", false]] },
        { texto: "Comparando entrada de linha (notebook) e entrada de microfone:",
          explicacao: "A linha traz um sinal mais forte e precisa de pouco ganho; o microfone traz um sinal fraco e precisa de bastante ganho.",
          opcoes: [["São iguais, tanto faz onde ligar", false],
                   ["Linha é sinal forte (pouco ganho); microfone é fraco (precisa de ganho)", true],
                   ["Microfone é mais forte que a linha", false],
                   ["A linha precisa de phantom power", false]] },
      ] },
  },
  {
    titulo: "Microfones sem fio: canal, frequência, sincronismo e bateria",
    fragment: "aula-04-microfone-sem-fio.fragment.html",
    dur: 20,
    sim: { file: "microfone-sem-fio.html", titulo: "Simulador — Microfone sem fio",
      narracao: "Ligue o sistema, ache um canal livre com SCAN, sincronize e cuide da bateria. Complete as 4 missões.",
      destaques: ["Canal/frequência por microfone", "SCAN contra interferência", "SYNC transmissor↔receptor", "Bateria e dropout"] },
    quiz: {
      titulo: "Quiz — Microfones sem fio",
      questoes: [
        { texto: "Se você usa três microfones sem fio ao mesmo tempo, eles devem estar em:",
          explicacao: "Cada sistema precisa de um canal/frequência diferente. Dois no mesmo canal geram interferência e cortes.",
          opcoes: [["Todos no mesmo canal", false], ["Três canais/frequências diferentes, todos livres", true], ["Qualquer canal, não importa", false], ["Todos desligados menos um", false]] },
        { texto: "O canal do receptor está com interferência. O que fazer?",
          explicacao: "Fazer um SCAN para o receptor achar um canal livre e mudar para ele. Depois, sincronizar o transmissor.",
          opcoes: [["Aumentar o volume da mesa", false], ["Fazer SCAN e mudar para um canal livre", true], ["Trocar o microfone por um com fio na hora", false], ["Ignorar, vai melhorar sozinho", false]] },
        { texto: "Para que serve o SYNC entre transmissor e receptor?",
          explicacao: "O SYNC coloca o transmissor no mesmo canal/frequência do receptor. Em canais diferentes, não há áudio.",
          opcoes: [["Carregar a bateria", false], ["Colocar transmissor e receptor no mesmo canal", true], ["Aumentar o grave", false], ["Ligar o phantom", false]] },
        { texto: "No visor do receptor, o indicador RF mostra:",
          explicacao: "RF é a força do sinal de rádio entre transmissor e receptor. RF baixo indica risco de dropout (cortes).",
          opcoes: [["O nível de bateria da mesa", false], ["A força do sinal de rádio entre transmissor e receptor", true], ["O volume dos graves", false], ["A temperatura do equipamento", false]] },
        { texto: "Qual é a causa mais comum de o microfone sem fio falhar no meio do evento?",
          explicacao: "Bateria fraca. Comece com bateria nova/carregada, tenha reserva e acompanhe o indicador durante o evento.",
          opcoes: [["Excesso de bateria", false], ["Bateria fraca", true], ["Phantom power ligado", false], ["Cabo XLR muito curto", false]] },
        { texto: "Um dropout (corte rápido do áudio) pode ser causado por:",
          explicacao: "Distância/obstrução, interferência de outro canal, bateria fraca ou antenas mal posicionadas — todos reduzem o sinal de rádio.",
          opcoes: [["Somente pela cor do microfone", false],
                   ["Distância/obstáculo, interferência, bateria fraca ou antenas mal posicionadas", true],
                   ["Ter escolhido um canal livre", false],
                   ["Usar bateria nova", false]] },
      ] },
  },
  {
    titulo: "Analógico × Digital e gain staging: sinal forte e limpo",
    fragment: "aula-05-analogico-digital.fragment.html",
    dur: 20,
    sim: { file: "gain-staging.html", titulo: "Simulador — Gain Staging (dBFS)",
      narracao: "Ajuste o ganho para o pico ficar forte e limpo — sem ruído nem distorção. Compare analógico e digital. Complete as 3 missões.",
      destaques: ["dBFS e o teto de 0", "Headroom (folga para picos)", "Piso de ruído", "Analógico satura × digital corta"] },
    quiz: {
      titulo: "Quiz — Analógico, digital e gain staging",
      questoes: [
        { texto: "O que é gain staging?",
          explicacao: "É acertar o nível do sinal em cada etapa: forte o bastante para ficar acima do ruído, mas com folga para não distorcer.",
          opcoes: [["Um tipo de microfone", false], ["Acertar o nível do sinal em cada etapa (nem fraco, nem alto demais)", true], ["Um efeito de reverb", false], ["A ordem de ligar a mesa", false]] },
        { texto: "No áudio digital, o teto absoluto de nível é:",
          explicacao: "0 dBFS. Passar de 0 causa clipping (distorção dura). Por isso se trabalha com folga abaixo de 0.",
          opcoes: [["+12 dBFS", false], ["0 dBFS", true], ["-60 dBFS", false], ["Não existe teto no digital", false]] },
        { texto: "Um sinal fraco demais na entrada resulta em:",
          explicacao: "Como você precisa aumentar muito depois, o ruído/chiado de fundo sobe junto. Melhor manter bom nível já na entrada.",
          opcoes: [["Mais distorção", false], ["Mais ruído/chiado ao aumentar depois", true], ["Nada, é sempre melhor", false], ["Mais grave", false]] },
        { texto: "Headroom é:",
          explicacao: "A folga entre o nível de trabalho e o teto (0 dBFS), reservada para os picos imprevisíveis da música e da fala.",
          opcoes: [["A folga entre o nível de trabalho e o teto, para os picos", true],
                   ["O ruído de fundo do sistema", false],
                   ["O volume do retorno", false],
                   ["Um tipo de cabo", false]] },
        { texto: "AD / DA se refere a:",
          explicacao: "Conversão Analógico→Digital (AD) e Digital→Analógico (DA), que acontece entre o microfone, a mesa digital e a saída.",
          opcoes: [["Dois modelos de microfone", false], ["Conversão analógico↔digital", true], ["Ajuste de agudos e graves", false], ["Antenas de sistema sem fio", false]] },
        { texto: "Qual o alvo prático de nível ao ajustar o ganho?",
          explicacao: "Picar em torno de −18 dBFS: forte, acima do ruído, e com bastante folga (headroom) até o teto de 0.",
          opcoes: [["Colar em 0 dBFS", false], ["Picar em torno de −18 dBFS", true], ["Ficar sempre abaixo de −50 dBFS", false], ["Deixar no vermelho", false]] },
      ] },
  },
  {
    titulo: "PA de menor porte: caixa ativa × passiva, amplificação e posicionamento",
    fragment: "aula-06-pa-sistema.fragment.html",
    dur: 20,
    sim: { file: "pa-sistema.html", titulo: "Simulador — Montando o PA",
      narracao: "Monte a cadeia de saída (ativa × passiva), posicione contra microfonia e adicione o sub. Complete as 4 missões.",
      destaques: ["Caixa ativa liga direto", "Passiva precisa de amplificador", "Caixas à frente dos mics", "Subgrave para os graves"] },
    quiz: {
      titulo: "Quiz — PA e caixas",
      questoes: [
        { texto: "Uma caixa acústica ATIVA:",
          explicacao: "A caixa ativa tem amplificador embutido — liga direto na saída da mesa. Só precisa de energia (tomada).",
          opcoes: [["Precisa de amplificador externo", false], ["Tem amplificador embutido e liga direto na mesa", true], ["Não funciona em eventos", false], ["Só toca graves", false]] },
        { texto: "Para uma caixa PASSIVA funcionar, o caminho correto é:",
          explicacao: "A passiva não tem amplificador; precisa de um amplificador externo: Mesa → Amplificador → Caixa Passiva.",
          opcoes: [["Mesa → Caixa Passiva (direto)", false], ["Mesa → Amplificador → Caixa Passiva", true], ["Caixa Passiva → Mesa", false], ["Não precisa de nada", false]] },
        { texto: "Para evitar microfonia, as caixas de PA devem ficar:",
          explicacao: "À frente dos microfones, apontando para a plateia. Caixa atrás ou apontando para o mic realimenta e apita.",
          opcoes: [["Atrás dos microfones", false], ["À frente dos microfones, apontando para a plateia", true], ["Em cima dos microfones", false], ["Não importa a posição", false]] },
        { texto: "O subgrave (sub) serve para:",
          explicacao: "Reforçar as frequências graves (o 'peso' do som). Útil em música/festa; numa palestra só de fala, muitas vezes nem é necessário.",
          opcoes: [["Deixar a voz mais aguda", false], ["Reforçar as frequências graves", true], ["Substituir o amplificador", false], ["Evitar microfonia sozinho", false]] },
        { texto: "Ligar a saída de um amplificador de potência numa caixa ATIVA é:",
          explicacao: "Errado e perigoso: a caixa ativa já tem amplificador interno. Enviar nível de alto-falante nela pode danificar o equipamento.",
          opcoes: [["Recomendado, dá mais volume", false], ["Errado e pode danificar — a ativa já tem amplificador", true], ["Necessário sempre", false], ["Indiferente", false]] },
        { texto: "Num evento pequeno (palestra), um arranjo típico de PA é:",
          explicacao: "Uma ou duas caixas de PA para a plateia (à frente, em tripé) e um AUX/retorno para o apresentador se ouvir, se necessário.",
          opcoes: [["Dez caixas ao redor da plateia", false],
                   ["Uma/duas caixas para a plateia + um retorno (AUX) para o apresentador", true],
                   ["Só o notebook, sem caixas", false],
                   ["Caixas apontando para o microfone", false]] },
      ] },
  },
  {
    titulo: "Ordem de ligar e desligar o sistema (proteja as caixas)",
    fragment: "aula-07-ordem-ligar.fragment.html",
    dur: 14,
    sim: { file: "ordem-ligar.html", titulo: "Simulador — Ordem de ligar o sistema",
      narracao: "Ligue na ordem certa (fontes→mesa→amplificação) e desligue no inverso, sem estouro. Complete as 2 missões.",
      destaques: ["Amplificação liga por último", "Amplificação desliga primeiro", "O 'tump' que danifica caixas"] },
    quiz: {
      titulo: "Quiz — Ordem de ligar o sistema",
      questoes: [
        { texto: "Ao LIGAR o sistema, a amplificação (amplificador/caixas ativas) deve ser:",
          explicacao: "A amplificação liga por ÚLTIMO — só quando fontes e mesa já estão ligadas e estáveis, para o transiente não ir às caixas.",
          opcoes: [["A primeira a ligar", false], ["A última a ligar", true], ["Ligada junto com as fontes", false], ["Não precisa ligar", false]] },
        { texto: "Ao DESLIGAR o sistema, a amplificação deve ser:",
          explicacao: "A amplificação desliga PRIMEIRO. Assim, o tump de desligar mesa/fontes não é amplificado para as caixas.",
          opcoes: [["A última a desligar", false], ["A primeira a desligar", true], ["Deixada sempre ligada", false], ["Desligada no meio", false]] },
        { texto: "Por que existe essa ordem de ligar/desligar?",
          explicacao: "Para que o estouro (tump/pop) de ligar e desligar equipamentos não seja amplificado e enviado às caixas, o que as danifica.",
          opcoes: [["Para economizar energia", false],
                   ["Para o estouro (tump) não ir às caixas e danificá-las", true],
                   ["Para o som ficar mais grave", false],
                   ["Não faz diferença", false]] },
        { texto: "Ligar as caixas ativas ANTES da mesa pode causar:",
          explicacao: "O transiente/pop dos equipamentos ligando depois vai amplificado para os alto-falantes.",
          opcoes: [["Melhor qualidade de som", false], ["Um pop/estouro indo para os alto-falantes", true], ["Economia de bateria", false], ["Nada de errado", false]] },
        { texto: "Qual a sequência correta para LIGAR?",
          explicacao: "Fontes → Mesa → Amplificação (a amplificação sempre por último).",
          opcoes: [["Amplificação → Mesa → Fontes", false], ["Fontes → Mesa → Amplificação", true], ["Mesa → Amplificação → Fontes", false], ["Tudo ao mesmo tempo", false]] },
        { texto: "Qual a sequência correta para DESLIGAR?",
          explicacao: "Amplificação → Mesa → Fontes (a amplificação sempre primeiro).",
          opcoes: [["Amplificação → Mesa → Fontes", true], ["Fontes → Mesa → Amplificação", false], ["Mesa → Fontes → Amplificação", false], ["Tudo ao mesmo tempo", false]] },
      ] },
  },
  {
    titulo: "Passagem de som: o checklist do técnico (capstone)",
    fragment: "aula-08-passagem-de-som.fragment.html",
    dur: 18,
    sim: { file: "passagem-de-som.html", titulo: "Simulador — Passagem de som",
      narracao: "Faça uma passagem de som completa: ligar na ordem, notebook, sem fio, ganho, EQ, retorno e teste. Complete os 7 itens.",
      destaques: ["Roteiro completo da passagem", "Junta todas as habilidades", "Teste final sem microfonia"] },
    quiz: {
      titulo: "Quiz — Passagem de som",
      questoes: [
        { texto: "Para que serve a passagem de som?",
          explicacao: "Para montar, ajustar e testar tudo ANTES do evento começar, resolvendo problemas enquanto ainda há tempo.",
          opcoes: [["Para o público entrar mais cedo", false], ["Para montar, ajustar e testar tudo antes do evento", true], ["Para desligar o sistema", false], ["Só para tocar música", false]] },
        { texto: "Qual a ordem geral correta numa passagem de som?",
          explicacao: "Ligar na ordem (fontes→mesa→amp) → conectar fontes → configurar microfones → ganho → EQ → retorno → teste final.",
          opcoes: [["Testar primeiro, ligar depois", false],
                   ["Ligar na ordem → conectar fontes → mics → ganho → EQ → retorno → testar", true],
                   ["EQ → retorno → ligar → ganho", false],
                   ["Não há ordem, é tudo junto", false]] },
        { texto: "Um bom técnico, antes do evento, sempre:",
          explicacao: "Chega com antecedência para montar e testar sem pressa, e leva reserva (pilhas, cabos, mic extra).",
          opcoes: [["Chega na hora exata do início", false], ["Chega cedo, testa tudo e leva reserva", true], ["Confia que vai dar certo", false], ["Deixa para configurar durante o evento", false]] },
        { texto: "Se, ao testar o microfone, aparecer microfonia, você deve:",
          explicacao: "Reduzir o ganho, reposicionar a caixa/microfone ou cortar com EQ a frequência que está apitando.",
          opcoes: [["Aumentar o ganho do microfone", false],
                   ["Reduzir o ganho, reposicionar a caixa/mic ou cortar a frequência", true],
                   ["Ignorar, some sozinho", false],
                   ["Desligar tudo e recomeçar o evento", false]] },
        { texto: "Ao conectar o notebook para a passagem, um bom ajuste inicial é:",
          explicacao: "Cabo P2→P10 e volume do notebook em torno de 70–80% (não no talo), ajustando o resto na mesa.",
          opcoes: [["Volume do notebook em 100%", false], ["Cabo P2→P10 e volume do notebook ~70–80%", true], ["Notebook mudo e só mesa", false], ["Ligar na entrada de microfone com phantom", false]] },
        { texto: "Durante o evento (depois da passagem), o técnico deve:",
          explicacao: "Ficar atento: medidores, bateria dos sem fio e som da sala, ajustando volumes conforme o evento.",
          opcoes: [["Sair, já que passou o teste", false], ["Ficar atento aos medidores, bateria e som, ajustando conforme necessário", true], ["Desligar a amplificação", false], ["Aumentar tudo no máximo", false]] },
      ] },
  },
];

// ── monta SQL ─────────────────────────────────────────────────────────
const L = [];
L.push("-- ====================================================================");
L.push("-- SMU PRO — Curso 'Som — Básico' (nível iniciante)");
L.push("-- Aditivo e idempotente: cria curso NOVO com ativo=false. Revise e publique.");
L.push(`-- Aulas neste arquivo: ${LESSONS.length}. Aplicar: SQL Editor do Supabase ou supabase db push.`);
L.push("-- ====================================================================");
L.push("begin;");
L.push("");
L.push("-- limpeza p/ reaplicar");
LESSONS.forEach((_, i) => {
  L.push(`delete from public.ai_animations where lesson_id = ${q(lidHex(i + 1))};`);
  L.push(`delete from public.quizzes where id = ${q(qidHex(i + 1))};`);
  L.push(`delete from public.lessons where id = ${q(lidHex(i + 1))};`);
});
L.push(`delete from public.modules where id = ${q(MODULE)};`);
L.push(`delete from public.courses where id = ${q(COURSE)};`);
L.push("");
L.push("-- CURSO (ativo=false)");
L.push("insert into public.courses (id,titulo,slug,descricao_curta,nivel,categoria,categorias,tipo,carga_horaria,total_aulas,ativo,destaque,ordem) values");
L.push(`  (${q(COURSE)},${q("Som — Básico")},${q("som-basico-formacao")},${q("Fundamentos do som ao vivo para iniciantes: a cadeia do som, microfones, cabos, mesa, e como ligar tudo — com simuladores práticos.")},'trainee','som','{som}','free',0,${LESSONS.length},false,false,10);`);
L.push("");
L.push("-- MÓDULO");
L.push(`insert into public.modules (id,course_id,titulo,ordem) values (${q(MODULE)},${q(COURSE)},${q("Fundamentos do Som ao Vivo")},1);`);
L.push("");

LESSONS.forEach((les, i) => {
  const lid = lidHex(i + 1);
  const conteudo = readFrag(les.fragment);
  L.push(`-- AULA ${i + 1}: ${les.titulo}`);
  L.push("insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values");
  L.push(`  (${q(lid)},${q(MODULE)},${q(les.titulo)},'texto',${q(conteudo)},${les.dur || 15},${i + 1},${les.quiz ? "true" : "false"},${i === 0 ? "true" : "false"});`);
  if (les.quiz) {
    const qid = qidHex(i + 1);
    L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(qid)},${q(lid)},${q(les.quiz.titulo)});`);
    les.quiz.questoes.forEach((qq, j) => {
      const qqid = qqHex(i + 1, j + 1);
      L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(qqid)},${q(qid)},${q(qq.texto)},${q(qq.explicacao)},${j + 1},1);`);
      qq.opcoes.forEach(([t, c], k) => L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(qqid)},${q(t)},${c},${k + 1});`));
    });
  }
  if (les.sim) {
    const roteiro = { titulo: les.sim.titulo, cenas: [{ numero: 1, titulo: les.sim.titulo, modo: "widget",
      narracao: les.sim.narracao || "", explicacao_texto: les.sim.narracao || "", destaques: les.sim.destaques || [] }] };
    const urls = [{ html: readSim(les.sim.file) }];
    L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,roteiro,urls) values (${q(lid)},'interactive','ready','handcrafted-interactive',${jsonb(roteiro)},${jsonb(urls)});`);
  }
  L.push("");
});

L.push("commit;");
L.push("");
const out = path.join(ROOT, "supabase/migrations/20260711_som_basico.sql");
fs.writeFileSync(out, L.join("\n"), "utf8");
console.log("OK ->", path.relative(ROOT, out), "|", (fs.statSync(out).size / 1024).toFixed(1), "KB |", LESSONS.length, "aula(s)");
