// Gera os sims do módulo 1 a partir do motor de decisão (dj-marca-lab.html):
//   dj-historia-lab.html (1.2 História do DJ) e dj-tipos-lab.html (1.4 Tipos de DJs)
// Uso: node cursos-novos/pleno-dj/gen-mod1.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const SIM = path.join(__dir, "../../simuladores/dj");
const base = fs.readFileSync(path.join(SIM, "dj-marca-lab.html"), "utf8");

const HIST = {
  file: "dj-historia-lab.html",
  title: "Linha do Tempo do DJ — dos block parties ao streaming (SMU)",
  header: "LINHA DO TEMPO DO DJ",
  coach: `<b>Quem conhece a história toca com contexto.</b> Cada era criou uma técnica que você usa até hoje: o <span class="k">break</span> virou loop, o <span class="k">scratch</span> virou performance, a house/techno viraram a pista moderna. Percorra as eras e acerte o que marcou cada uma.`,
  cen: [
    { tag: "ERA 1 · ANOS 70 — O NASCIMENTO (BRONX, NY)", tit: "Block parties no Bronx. O que DJ Kool Herc inventou que fundou a cultura?",
      desc: "Tudo começa com uma observação de pista: qual parte da música fazia todo mundo dançar?",
      ops: [
        { t: "O 'merry-go-round': usar DOIS toca-discos com o mesmo disco para estender o BREAK (a parte só de bateria) sem parar", good: true, fb: "Exato. Herc percebeu que a pista explodia no break — e o estendeu alternando dois discos. Nasce o DJing (e o chão para o hip-hop e os b-boys)." },
        { t: "O sync automático de BPM", good: false, fb: "Sync é tecnologia dos anos 2000 — em 1973 era mão, ouvido e dois Technics." },
        { t: "A live de DJ em rede social", good: false, fb: "Meio século antes das lives: a 'transmissão' era o alto-falante na rua do Bronx." },
      ] },
    { tag: "ERA 2 · FIM DOS 70 — AS TÉCNICAS", tit: "A geração seguinte transformou o toca-discos em instrumento. Quem fez o quê?",
      desc: "O DJing ganha virtuosismo.",
      ops: [
        { t: "Grandmaster Flash sistematizou o corte rápido/backspin e Grand Wizzard Theodore criou o SCRATCH (por acidente, segurando o disco)", good: true, fb: "Isso: Flash trouxe a precisão cirúrgica (quick mix theory) e Theodore, ao segurar o disco quando a mãe o chamou, descobriu o scratch." },
        { t: "Ambos inventaram o CDJ", good: false, fb: "O CDJ só chega em 1994 (Pioneer CDJ-500). Nos anos 70 era vinil, agulha e feltro." },
        { t: "Eles criaram o streaming de música", good: false, fb: "Décadas antes da internet como conhecemos." },
      ] },
    { tag: "ERA 3 · ANOS 80 — A MÚSICA DAS MÁQUINAS", tit: "Duas cidades americanas criam os gêneros que dominam as pistas até hoje. Quais?",
      desc: "Drum machines baratas + clubes lendários = novos gêneros.",
      ops: [
        { t: "Chicago cria a HOUSE (Frankie Knuckles, clube Warehouse) e Detroit cria o TECHNO (Juan Atkins, Derrick May, Kevin Saunderson)", good: true, fb: "House vem de 'Warehouse'; o techno de Detroit veio do trio de Belleville. As duas matrizes de quase toda a música eletrônica de pista." },
        { t: "Miami cria o rock e Seattle cria o samba", good: false, fb: "Geografia trocada — e gêneros também. House = Chicago; techno = Detroit. Guarde isso." },
        { t: "A house nasceu na Europa nos anos 2000", good: false, fb: "A Europa abraçou forte (UK, Alemanha, Ibiza), mas o berço é americano e oitentista." },
      ] },
    { tag: "ERA 4 · ANOS 90 — A PISTA CRESCE", tit: "A cultura sai do underground e vira fenômeno. O que marca os anos 90?",
      desc: "Da warehouse ilegal ao clube gigante.",
      ops: [
        { t: "Raves, superclubs (Ministry of Sound, Tresor), o DJ virando atração principal — e o primeiro CDJ da Pioneer (CDJ-500, 1994)", good: true, fb: "A década em que o DJ vira headliner e o CD entra na cabine. O flyer de rave dos 90 é o avô do line-up de festival de hoje." },
        { t: "O fim das festas de música eletrônica", good: false, fb: "O oposto: foi a década da explosão global." },
        { t: "A invenção do vinil", good: false, fb: "O vinil é dos anos 1940-50 — nos 90 ele já era o veterano da cabine." },
      ] },
    { tag: "ERA 5 · ANOS 2000 — A REVOLUÇÃO DIGITAL", tit: "O notebook entra na cabine. O que muda no trabalho do DJ?",
      desc: "A maior mudança técnica desde os dois toca-discos.",
      ops: [
        { t: "Serato/Traktor com timecode, acervo infinito no HD, o CDJ vira padrão das cabines — e o beatmatch manual ganha o botão SYNC", good: true, fb: "O acervo saiu da mala de discos para o disco rígido. A técnica clássica continua — mas a tecnologia libera as mãos para performance." },
        { t: "Os DJs pararam de mixar", good: false, fb: "Mixou-se mais do que nunca — com mais ferramentas: loops, hot cues, efeitos." },
        { t: "O vinil foi proibido", good: false, fb: "Nunca: o vinil seguiu vivo (e voltou com força no colecionismo e no techno)." },
      ] },
    { tag: "ERA 6 · HOJE — STANDALONE E STREAMING", tit: "A cabine de 2020s: o que define a era atual?",
      desc: "Você está entrando na história exatamente aqui.",
      ops: [
        { t: "Equipamento standalone (CDJ-3000, Prime), pen drive/rekordbox e streaming chegando às cabines — DJ também é produtor e marca digital", good: true, fb: "A era do curso que você está fazendo: hardware potente sem notebook, biblioteca no pen/nuvem, e a carreira construída também online." },
        { t: "Só se toca com orquestra ao vivo", good: false, fb: "Não — a cabine segue sendo o centro, mais poderosa do que nunca." },
        { t: "O DJ foi substituído por playlist automática", good: false, fb: "Playlist não lê pista, não constrói energia, não improvisa. Por isso você está aqui." },
      ] },
  ],
  final: `<ul><li><b>70s</b> Bronx: Kool Herc estende o break · <b>Flash/Theodore</b>: técnicas e scratch</li>
  <li><b>80s</b>: house (Chicago) e techno (Detroit) · <b>90s</b>: raves, superclubs, 1º CDJ</li>
  <li><b>2000s</b>: era digital (Serato/Traktor) · <b>Hoje</b>: standalone, pen drive e streaming</li></ul>`,
  finalTitle: "✓ Você conhece a linhagem!",
};

const TIPOS = {
  file: "dj-tipos-lab.html",
  title: "Que DJ é esse? — os perfis da profissão (SMU)",
  header: "QUE DJ É ESSE? — PERFIS DA PROFISSÃO",
  coach: `<b>Não existe UM jeito de ser DJ.</b> Clube, eventos, rádio, turntablism, produtor, open format — cada perfil tem mercado, repertório e habilidades próprias. Leia cada cena e identifique o perfil (vários se combinam na mesma carreira!).`,
  cen: [
    { tag: "CENA 1", tit: "Sexta à noite, mesmo clube de techno das últimas 40 semanas. Warm-up até o headliner, leitura fina da pista da casa.",
      desc: "Qual perfil de DJ é esse?",
      ops: [
        { t: "DJ residente (de clube)", good: true, fb: "Residente: o coração de uma casa. Conhece a pista como ninguém, constrói a identidade sonora do clube e é a escola clássica do ofício." },
        { t: "DJ de rádio", good: false, fb: "Rádio é programação para ouvintes — aqui é pista, casa fixa e leitura de público ao vivo." },
        { t: "Turntablist", good: false, fb: "Turntablism é performance de técnica (scratch/juggling) — não é o foco de uma residência de techno." },
      ] },
    { tag: "CENA 2", tit: "Casamento: recepção com jazz, valsa dos noivos, depois pista com hits de várias décadas — e microfone para conduzir os momentos.",
      desc: "Qual perfil de DJ é esse?",
      ops: [
        { t: "DJ de eventos (mobile DJ)", good: true, fb: "O mobile/eventos: leva o próprio equipamento, domina repertório amplo, conduz cerimônia no microfone e atende o CLIENTE além da pista. Mercado enorme e constante." },
        { t: "DJ de festival", good: false, fb: "Festival é palco e line-up; casamento é roteiro, formalidades e repertório multigeração." },
        { t: "Produtor de estúdio", good: false, fb: "Produção é criar faixas — aqui o trabalho é operação e condução do evento." },
      ] },
    { tag: "CENA 3", tit: "Duas Technics + battle mixer, 90 segundos no palco: scratches, beat juggling e a plateia julgando cada corte.",
      desc: "Qual perfil de DJ é esse?",
      ops: [
        { t: "Turntablist (battle DJ)", good: true, fb: "O atleta do toca-discos: DMC World Championship, Red Bull 3Style. O toca-discos como instrumento — a técnica que você provou no simulador de scratch." },
        { t: "DJ open format", good: false, fb: "Open format é versatilidade de gêneros numa festa — battle é performance técnica pura." },
        { t: "DJ de rádio", good: false, fb: "Sem pista nem palco de batalha na rádio." },
      ] },
    { tag: "CENA 4", tit: "Lança faixas próprias nas plataformas, e o line-up dos festivais o chama pelo nome das MÚSICAS que ele fez.",
      desc: "Qual perfil de DJ é esse?",
      ops: [
        { t: "DJ/produtor", good: true, fb: "No topo do mercado atual, o produtor-DJ: as próprias faixas são o cartão de visita que abre os grandes palcos. O set vira vitrine do próprio catálogo." },
        { t: "DJ residente", good: false, fb: "Residência é casa fixa — o produtor-DJ roda o circuito pela música autoral." },
        { t: "Mobile DJ", good: false, fb: "O mobile atende eventos privados — o produtor-DJ constrói carreira pelo lançamento de faixas." },
      ] },
    { tag: "CENA 5", tit: "Programa diário às 18h: seleção comentada, entrevistas com artistas e a cidade inteira ouvindo no trânsito.",
      desc: "Qual perfil de DJ é esse?",
      ops: [
        { t: "DJ de rádio", good: true, fb: "O curador da massa: programação, voz e identidade musical de uma emissora. Muitos nomes da pista começaram (ou seguem) na rádio e nas web rádios." },
        { t: "Turntablist", good: false, fb: "A rádio pede curadoria e comunicação — não batalha de scratch." },
        { t: "DJ de clube", good: false, fb: "Sem pista ao vivo: o público está nos carros e casas." },
      ] },
    { tag: "CENA 6", tit: "Festa universitária: funk, pop, reggaeton, anos 2000, sertanejo remix — tudo na mesma noite, emendado com técnica.",
      desc: "Qual perfil de DJ é esse?",
      ops: [
        { t: "DJ open format", good: true, fb: "O canivete suíço: transita entre gêneros com mixagem de verdade (word play, mashups, viradas de BPM). Exige MAIS técnica, não menos — casar 90 com 130 BPM é para quem domina." },
        { t: "DJ de techno underground", good: false, fb: "O residente de techno vive numa cena só — o open format atravessa todas." },
        { t: "DJ de rádio", good: false, fb: "É pista ao vivo com leitura de público — rádio é outro ambiente." },
      ] },
  ],
  final: `<ul><li><b>Residente</b> (a escola do clube) · <b>Mobile/eventos</b> (o maior mercado)</li>
  <li><b>Turntablist</b> (a técnica como arte) · <b>DJ/produtor</b> (a faixa abre o palco)</li>
  <li><b>Rádio</b> (curadoria e voz) · <b>Open format</b> (versatilidade com técnica)</li></ul>`,
  finalTitle: "✓ Você conhece os perfis!",
};

function gen(cfg) {
  let out = base;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${cfg.title}</title>`);
  out = out.replace(/CONSTRUTOR DE MARCA DO DJ/, cfg.header);
  out = out.replace(/<div class="coach">[\s\S]*?<\/div>\n<\/div>\n<\/div>/, `<div class="coach">${cfg.coach}</div>\n</div>\n</div>`);
  out = out.replace(/const CEN=\[[\s\S]*?\n\];/, "const CEN=" + JSON.stringify(cfg.cen, null, 1) + ";");
  out = out.replace(/✓ Marca construída!/, cfg.finalTitle);
  out = out.replace(/<ul><li><b>Nome<\/b>[\s\S]*?<\/ul>/, cfg.final);
  out = out.replace(/Regra de ouro: marca é o que dizem de você quando você não está na sala\./, "Cada era e cada perfil têm algo a te ensinar — a cultura é a base do ofício.");
  fs.writeFileSync(path.join(SIM, cfg.file), out, "utf8");
  console.log("OK ->", cfg.file, (fs.statSync(path.join(SIM, cfg.file)).size / 1024).toFixed(0) + " KB");
}
gen(HIST);
gen(TIPOS);
