// Gera os sims 6.2 (contratante) e 6.3 (ética) a partir do motor de decisão do 6.1 (dj-marca-lab.html).
// Troca: <title>, header, coach e o array CEN. Uso: node cursos-novos/pleno-dj/gen-mod6.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const SIM = path.join(__dir, "../../simuladores/dj");
const base = fs.readFileSync(path.join(SIM, "dj-marca-lab.html"), "utf8");

const CONTRATANTE = {
  file: "dj-contratante-lab.html",
  title: "Primeira Conversa com o Contratante — profissionalismo (SMU)",
  header: "PRIMEIRA CONVERSA COM O CONTRATANTE",
  coach: `<b>A gig se ganha na conversa.</b> Responder rápido e bem, fazer as <span class="k">perguntas técnicas certas</span> (equipamento! horário! público!) e <span class="k">confirmar por escrito</span> — é isso que faz o contratante te chamar de novo. Valores e contrato são assunto do módulo de produção.`,
  cen: [
    { tag: "MENSAGEM 1 · O PRIMEIRO CONTATO", tit: "Direct: \"Oi, vi seu trabalho. Você toca dia 24?\" — sua resposta:",
      desc: "O contratante avalia seu profissionalismo desde a primeira mensagem.",
      ops: [
        { t: "Responder 4 dias depois: \"opa, foi mal a demora kkk\"", good: false, fb: "Demora = vaga perdida. Contratante com data na mão chama o próximo da lista em horas, não em dias." },
        { t: "Responder no mesmo dia, agradecer o contato e perguntar sobre o evento: data, local, horário e estilo da festa", good: true, fb: "Rápido, educado e já levantando as informações que você PRECISA para dizer sim com segurança." },
        { t: "\"Fechado!\" — sem perguntar nada", good: false, fb: "Aceitar às cegas é armadilha: pode ser um estilo que você não toca, horário impossível ou cabine sem equipamento." },
      ] },
    { tag: "MENSAGEM 2 · O EQUIPAMENTO DA CASA", tit: "O evento é num bar. Qual é A pergunta técnica que você não pode esquecer?",
      desc: "Tudo que você treinou no curso depende do que existe na cabine.",
      ops: [
        { t: "\"Qual equipamento tem na cabine? (CDJ, controladora, mixer — modelo) E tem monitor?\"", good: true, fb: "A pergunta profissional. Define se você leva controladora, adaptadores, pen formatado — ou se só chega com fone e pens." },
        { t: "\"A cabine é instagramável?\"", good: false, fb: "Prioridade errada. Sem saber o equipamento, você pode chegar e não conseguir NEM tocar." },
        { t: "Não perguntar — \"na hora eu me viro\"", good: false, fb: "Se virar na hora = descobrir que a casa só tem mixer de 2 canais sem entrada USB quando a pista já está cheia." },
      ] },
    { tag: "MENSAGEM 3 · SET E HORÁRIO", tit: "\"Pode chegar lá pelas 22h\" — o que você ainda precisa amarrar?",
      desc: "Horário vago vira problema no dia.",
      ops: [
        { t: "\"Fechou, 22h\" — e nada mais", good: false, fb: "Chegar às 22h para tocar quando? Por quanto tempo? Depois de quem? Sem isso você não prepara o repertório." },
        { t: "Confirmar: horário do SEU set, duração, quem toca antes/depois e que horas a casa abre para passagem de som", good: true, fb: "Agora você sabe o que preparar: warm-up é um repertório, horário de pico é outro. E passagem de som evita surpresa." },
        { t: "\"Toco a hora que eu chegar\"", good: false, fb: "A noite tem curva de energia planejada — o DJ que ignora a grade atropela os colegas e a festa." },
      ] },
    { tag: "MENSAGEM 4 · O PÚBLICO DA CASA", tit: "Você nunca tocou nesse bar. O que perguntar sobre o público?",
      desc: "Repertório certo = leitura antecipada da pista.",
      ops: [
        { t: "\"Que som funciona aí? Qual o perfil do público e o que costuma encher a pista?\"", good: true, fb: "Humildade profissional: você mantém sua identidade, mas chega sabendo o terreno. A casa conhece o público dela." },
        { t: "Nada — \"meu som converte qualquer público\"", good: false, fb: "Arrogância clássica de iniciante. Identidade sem leitura de pista esvazia festa — e queima seu nome na casa." },
        { t: "Prometer tocar \"qualquer coisa que pedirem\"", good: false, fb: "O outro extremo: vira jukebox. O contratante te chamou por um trabalho, não por um pen drive de pedidos." },
      ] },
    { tag: "MENSAGEM 5 · AMARRANDO TUDO", tit: "Conversa alinhada por áudio e telefone. Antes do dia, o que fazer?",
      desc: "O que não está escrito não aconteceu.",
      ops: [
        { t: "Confiar na memória — \"tá tudo combinado\"", good: false, fb: "Combinado por voz evapora: horário muda, ninguém lembra o que prometeu. Sem registro, a palavra é contra a sua." },
        { t: "Mandar UMA mensagem-resumo: data, endereço, horário do set, duração, equipamento da cabine e contato do responsável no dia", good: true, fb: "A confirmação por escrito protege os dois lados e mostra profissionalismo. Se algo mudar, há referência." },
        { t: "Pedir pra confirmar só no dia do evento", good: false, fb: "No dia é tarde: se houve mal-entendido, não há tempo de resolver." },
      ] },
    { tag: "MENSAGEM 6 · DEPOIS DA GIG", tit: "A festa foi boa. O que fazer no dia seguinte?",
      desc: "A próxima gig nasce do pós desta.",
      ops: [
        { t: "Nada — \"toquei, acabou\"", good: false, fb: "Relacionamento é o motor da carreira: quem some é esquecido na próxima data." },
        { t: "Agradecer o contratante, perguntar como avaliaram a noite e mandar 2-3 fotos/vídeos do set marcando a casa", good: true, fb: "Fecha o ciclo: gratidão + feedback + material que divulga VOCÊ e a CASA juntos. É assim que vira residência." },
        { t: "Postar reclamando do equipamento da casa", good: false, fb: "Lavar roupa em público queima você, não a casa. Feedback técnico se dá em privado, com respeito." },
      ] },
  ],
  final: `<ul><li>Responder <b>rápido</b> e perguntar sobre o evento antes de aceitar</li>
  <li>Perguntas técnicas: <b>equipamento da cabine</b>, horário do set, duração, público</li>
  <li><b>Confirmação por escrito</b> antes do dia · pós-gig com agradecimento e material</li></ul>`,
  finalTitle: "✓ Contratante conquistado!",
};

const ETICA = {
  file: "dj-etica-lab.html",
  title: "Ética na Cabine — decisões de quem é profissional (SMU)",
  header: "ÉTICA NA CABINE — GO / NO-GO",
  coach: `<b>Reputação leva anos para construir e uma noite para perder.</b> Aqui são situações REAIS de cabine: pedidos, bebida, equipamento com defeito, colega atrasado, saúde. Decida como profissional — errou, o simulador explica.`,
  cen: [
    { tag: "SITUAÇÃO 1 · O PEDIDO NO AUGE DO SET", tit: "Pista cheia, seu set voando. Chega alguém: \"toca funk agora!\" — e a festa é de techno.",
      desc: "O pedido é o teste diário do DJ.",
      ops: [
        { t: "Destratar: \"sai daqui, aqui não é jukebox\"", good: false, fb: "Grosseria com público é imperdoável — a pessoa pode ser amiga do dono. Recusar SIM, destratar NUNCA." },
        { t: "Agradecer com simpatia e explicar que a proposta da noite é outra — e se fizer sentido mais tarde, encaixar uma ponte", good: true, fb: "Educação + firmeza. Você mantém a curadoria sem criar inimigo. Ler se o pedido representa a pista é parte do ofício." },
        { t: "Tocar na hora, cortando o set no meio", good: false, fb: "Atropelar a própria curadoria por um pedido isolado derruba a energia dos outros 200 que estavam dançando." },
      ] },
    { tag: "SITUAÇÃO 2 · BEBIDA NA CABINE", tit: "Terceiro shot que mandam para a cabine em uma hora. Você está no meio do set.",
      desc: "Você está TRABALHANDO — e é o responsável pelo som da noite.",
      ops: [
        { t: "Virar todos — \"faz parte da vibe\"", good: false, fb: "DJ alterado = beatmatch sujo, volume estourado, decisões ruins e risco pro equipamento. Ninguém contrata de novo o DJ que 'não estava inteiro'." },
        { t: "Agradecer, brindar com moderação (ou água) e manter o foco no trabalho até o fim do set", good: true, fb: "Simpatia sem perder o controle: você é o profissional responsável pela pista até o último minuto." },
        { t: "Aceitar tudo e deixar 'no automático' com SYNC", good: false, fb: "O 'automático' falha na primeira grade mal analisada — e a queda do set vira story dos outros." },
      ] },
    { tag: "SITUAÇÃO 3 · EQUIPAMENTO COM DEFEITO", tit: "Na passagem de som você percebe: o canal 2 do mixer da casa está falhando.",
      desc: "Defeito descoberto ANTES da festa é problema pequeno. Escondido, vira desastre.",
      ops: [
        { t: "Avisar imediatamente o responsável da casa, mostrar o defeito e combinar o plano B (usar canais 1 e 3)", good: true, fb: "Transparência técnica: a casa fica ciente (o defeito é dela), e você já opera com o plano B testado." },
        { t: "Ficar quieto pra 'não criar problema' e torcer", good: false, fb: "Quando falhar às 23h com a pista cheia, o problema vai parecer SEU. Defeito não avisado vira culpa do DJ." },
        { t: "Abrir o mixer da casa para consertar por conta própria", good: false, fb: "Equipamento da casa não se abre sem autorização — se piorar, o prejuízo cai no seu nome." },
      ] },
    { tag: "SITUAÇÃO 4 · O COLEGA ATRASOU", tit: "Seu set acabou, o próximo DJ não chegou. A pista está cheia.",
      desc: "A noite é um trabalho de equipe.",
      ops: [
        { t: "Desligar tudo e ir embora — \"meu horário acabou\"", good: false, fb: "Pista no silêncio = festa morta = prejuízo da casa. 'Não é meu problema' é a frase que encerra carreiras locais." },
        { t: "Avisar a produção, segurar o set com energia adequada e passar a cabine quando o colega chegar — sem drama", good: true, fb: "Profissional segura a onda e resolve com a produção. O colega fica devendo uma, a casa lembra de VOCÊ." },
        { t: "Segurar, mas anunciando no microfone que 'o outro DJ furou'", good: false, fb: "Expor colega em cima do palco é veneno duplo: constrange a casa e mostra que você faz o mesmo com qualquer um." },
      ] },
    { tag: "SITUAÇÃO 5 · IMAGEM DOS OUTROS", tit: "Você quer postar os melhores momentos do seu set. Num dos vídeos, aparece gente identificável na pista.",
      desc: "Divulgação sim — respeito também.",
      ops: [
        { t: "Postar tudo — \"quem foi pra festa sabia que ia aparecer\"", good: false, fb: "Nem sempre: há casas e eventos com política de imagem, e pessoas que não podem/querem aparecer. Reclamação pública sobra pra você e pra casa." },
        { t: "Priorizar takes da cabine e da massa sem close identificável — e seguir a política de imagem da casa (pergunte!)", good: true, fb: "Você divulga o trabalho respeitando o espaço e o público. Casas com política clara (clubes de techno!) valorizam quem respeita." },
        { t: "Postar stories da cabine DURANTE o set inteiro", good: false, fb: "Celular na mão o set todo = DJ que não está tocando. A pista percebe." },
      ] },
    { tag: "SITUAÇÃO 6 · SEU CORPO, SUA FERRAMENTA", tit: "Terceira gig na semana, ouvido apitando desde ontem. Hoje tem mais uma.",
      desc: "Zumbido (tinnitus) é o alarme de incêndio da audição.",
      ops: [
        { t: "Ignorar — \"faz parte da profissão\"", good: false, fb: "Zumbido recorrente é dano se acumulando. Perda auditiva é IRREVERSÍVEL — e encerra a carreira que você está construindo." },
        { t: "Baixar o monitor/fone hoje, usar protetor auricular de músico nos intervalos e dar descanso real ao ouvido entre gigs", good: true, fb: "Gestão profissional da ferramenta nº 1: monitor no mínimo necessário, proteção linear e pausas. DJ de carreira longa cuida do ouvido como piloto cuida da visão." },
        { t: "Aumentar o fone pra 'compensar' o zumbido", good: false, fb: "É o ciclo da surdez: quanto mais dano, mais volume 'precisa', mais dano. Interrompa o ciclo agora." },
      ] },
    { tag: "SITUAÇÃO 7 · PLANO B", tit: "Meia hora antes de sair de casa. O que separa o profissional do azarado?",
      desc: "Na cabine, o imprevisto não é 'se' — é 'quando'.",
      ops: [
        { t: "1 pen drive com as músicas — \"nunca deu problema\"", good: false, fb: "Pen corrompe, porta USB falha, pen fica na mesa da casa anterior. Uma falha = set encerrado." },
        { t: "2 pens idênticos e atualizados + fone reserva + o essencial no celular/notebook como última linha", good: true, fb: "Redundância profissional: o show não para. Todo DJ experiente tem a história do dia em que o backup salvou a noite." },
        { t: "Confiar no Wi-Fi da casa pra streaming", good: false, fb: "Wi-Fi de casa cheia morre no pico. Streaming é complemento, nunca o plano principal de uma gig." },
      ] },
  ],
  final: `<ul><li>Pedidos: recusar com <b>simpatia</b> · Bebida: <b>moderação</b>, você está trabalhando</li>
  <li>Defeito: <b>avisar</b> a casa e ter plano B · Colega: segurar a noite <b>sem drama</b></li>
  <li>Imagem: respeitar a política da casa · Ouvido: <b>proteção sempre</b> · 2 pens, sempre</li></ul>`,
  finalTitle: "✓ Profissional de verdade!",
};

function gen(cfg) {
  let out = base;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${cfg.title}</title>`);
  out = out.replace(/CONSTRUTOR DE MARCA DO DJ/, cfg.header);
  out = out.replace(/<div class="coach">[\s\S]*?<\/div>\n<\/div>\n<\/div>/, `<div class="coach">${cfg.coach}</div>\n</div>\n</div>`);
  const cenStr = "const CEN=" + JSON.stringify(cfg.cen, null, 1) + ";";
  out = out.replace(/const CEN=\[[\s\S]*?\n\];/, cenStr);
  // final screen custom
  out = out.replace(/✓ Marca construída!/, cfg.finalTitle);
  out = out.replace(/<ul><li><b>Nome<\/b>[\s\S]*?<\/ul>/, cfg.final);
  out = out.replace(/Regra de ouro: marca é o que dizem de você quando você não está na sala\./, "Decisão certa repetida todo fim de semana — é isso que constrói carreira.");
  fs.writeFileSync(path.join(SIM, cfg.file), out, "utf8");
  console.log("OK ->", cfg.file, (fs.statSync(path.join(SIM, cfg.file)).size / 1024).toFixed(0) + " KB");
}
gen(CONTRATANTE);
gen(ETICA);
