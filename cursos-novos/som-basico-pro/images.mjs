// Manifesto de imagens realistas do curso SOM BÁSICO (profissional).
// Usado por: (1) gen-images.mjs para gerar via Runway e subir ao Storage;
//            (2) build-sql.mjs para embutir <figure><img> nas aulas.
// As URLs apontam para o bucket PÚBLICO "media" do Supabase (pasta img-som-basico/).
// Enquanto a imagem não é gerada/subida, o <img> mostra o alt (não quebra o layout).

export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-som-basico";
export const EXT = "jpg"; // geramos jpg (menor); troque se subir png

// url(slug) -> URL pública final da imagem
export const imgUrl = (slug) => `${SB}${FOLDER}/${slug}.${EXT}`;

// Cada imagem: slug, prompt (EN, p/ nano-banana-pro), ratio, alt (PT), caption (PT).
// Prompts pedem FOTO REALISTA de produto, fundo neutro, SEM logos/marcas (evita direito autoral).
// PADRÃO DE QUALIDADE (repetido em cada prompt): fotografia de produto fotorrealista, alta resolução,
// lente 50mm, iluminação de softbox, materiais fisicamente corretos, foco nítido, proporções reais.
// NEGATIVOS: sem nomes/logos de marca, sem texto legível/borrado, sem conectores deformados ou
// duplicados, sem membros/dedos extras, sem artefatos de IA.
const QA = "Photorealistic high-resolution studio product photography, shot on a full-frame DSLR with a 50mm lens, soft diffused softbox lighting with gentle shadows, physically accurate materials and reflections, true-to-life proportions, tack-sharp focus, clean composition. Negative constraints: no brand names, no logos, no readable or garbled text, no warped or duplicated connectors, no extra or missing parts, no AI artifacts, no watermark.";
export const IMAGES = [
  {
    slug: "palco-corporativo",
    ratio: "1280:720",
    alt: "Montagem de som para evento corporativo de menor porte: palco baixo, púlpito, duas caixas em tripé e mesa de som na mesa ao fundo.",
    caption: "Uma montagem típica de evento corporativo: PA em tripé, mesa de som e microfones — o cenário do técnico de menor porte.",
    prompt: "A wide, eye-level photograph of a small corporate event sound setup inside a tidy, empty conference room shortly before the event begins. In the foreground center stands a low carpeted stage with a single wooden lectern holding a gooseneck microphone. On each side of the stage, one black two-way PA loudspeaker sits on a slim black tripod speaker stand at head height, angled slightly inward toward the audience area. At the back-right, on a black skirted table, rests a small analog mixing console with a few visible channel faders. Neat black cables run along the floor and are taped down. A dark draped fabric backdrop behind the stage is lit with warm amber uplighting. The room has soft, even ambient light, empty stackable chairs faintly visible. Professional, calm, well-organized atmosphere. " + "Photorealistic high-resolution photography, natural interior lighting, realistic depth and scale, sharp focus. Negative constraints: no brand names, no logos, no readable text on signage, no people, no clutter, no AI artifacts.",
  },
  {
    slug: "conectores-audio",
    ratio: "1280:720",
    alt: "Conectores de áudio profissionais lado a lado: XLR macho e fêmea, P10 mono (TS) e estéreo (TRS), P2 (mini-jack), RCA e Speakon.",
    caption: "Os conectores que todo técnico precisa reconhecer: XLR (macho/fêmea), P10 TS e TRS, P2 (mini-jack), RCA e Speakon.",
    prompt: "A top-down macro photograph of exactly seven distinct professional audio connectors laid out separated in a single evenly spaced horizontal row on a smooth matte light-grey seamless surface, each connector fully visible and not touching the others, arranged left to right: (1) a silver 3-pin male XLR cable connector with visible pins, (2) a black 3-pin female XLR cable connector with visible receptacle holes, (3) a 1/4-inch TS mono phone plug with a single insulating ring on its shiny metal tip, (4) a 1/4-inch TRS stereo phone plug with two insulating rings on its metal tip, (5) a slim 3.5mm stereo mini-jack plug with two rings, (6) a single RCA phono plug with a red plastic collar and metal center pin, and (7) a round black twist-lock Speakon speaker connector. Polished metal and matte black housings, subtle reflections on the surface, crisp detail on each connector. " + QA,
  },
  {
    slug: "cabo-p2-p10",
    ratio: "1280:720",
    alt: "Cabo adaptador com P2 estéreo numa ponta e dois P10 na outra, ao lado de um notebook.",
    caption: "O cabo do notebook para a mesa: P2 estéreo (3,5 mm) numa ponta, dois P10 na outra — um para o canal esquerdo, outro para o direito.",
    prompt: "A clean product photograph of a single Y-shaped audio adapter cable on a light neutral desk. One end is a slim 3.5mm stereo mini-jack plug (with two insulating rings on the tip); the flexible black cable then splits into two separate branches, each ending in a 1/4-inch mono phone plug, so the frame clearly shows one small plug on the left and two larger plugs on the right. The cable is gently, neatly coiled. In the upper corner of the frame sits the closed silver aluminum corner of a laptop for context and scale. The plugs are the sharp focal point. " + QA,
  },
  {
    slug: "cadeia-sinal",
    ratio: "1280:720",
    alt: "Caminho do sinal no palco: microfone no pedestal, cabo até a mesa de som, amplificador e caixa acústica.",
    caption: "A cadeia do som, da esquerda para a direita: microfone → cabo → mesa → amplificador → caixa acústica.",
    prompt: "A clean, evenly lit horizontal photograph illustrating an audio signal path, with four pieces of equipment placed left to right on a plain neutral light-grey seamless background, connected in sequence by visible black cables: on the far left a black handheld vocal microphone on a straight mic stand; a cable leading to a small black analog mixing console; a cable from the console leading to a single rack-mount power amplifier unit; and on the far right a black loudspeaker on a stand. The four items are clearly separated and equally sized in the frame, like a textbook diagram made of real gear, cables forming a clear left-to-right flow. " + QA,
  },
  {
    slug: "mic-dinamico",
    ratio: "1024:1024",
    alt: "Microfone dinâmico de voz (bastão) profissional, corpo metálico escuro com grade esférica.",
    caption: "O microfone dinâmico de voz — robusto, cardioide, o cavalo de batalha dos vocais ao vivo.",
    prompt: "A close-up studio product photograph of one professional handheld dynamic vocal microphone standing upright in a round matte-black desktop microphone clip. The microphone has a spherical steel wire-mesh windscreen grille on top and a tapered dark satin-metal body with fine knurling near the base. Dramatic but soft studio lighting with a gentle rim light highlighting the grille mesh, set against a smooth dark-to-mid grey gradient seamless background. Extremely sharp macro detail on the mesh and metal texture, subtle reflections. " + QA,
  },
  {
    slug: "mic-kit",
    ratio: "1280:720",
    alt: "Conjunto de microfones para eventos ao vivo num case de espuma: dinâmico de voz, condensador caneta, microfone clip para tom e microfone de bumbo.",
    caption: "Um kit típico de microfones para banda: dinâmico de voz, condensador (caneta), clip de tom e microfone de bumbo.",
    prompt: "A top-down flat-lay studio product photograph of a microphone kit resting in fitted black foam cut-outs inside an open case, showing exactly four different live-event microphones separated in their own foam slots: (1) a handheld dynamic vocal microphone with a spherical grille, (2) a slim pencil/stick condenser microphone, (3) a small clip-on instrument microphone with a flexible gooseneck and a mounting clamp, and (4) a large-diaphragm kick-drum microphone with a wide rounded body. Even, shadowless top lighting, each microphone clearly distinct and fully visible. " + QA,
  },
  {
    slug: "mic-sem-fio",
    ratio: "1280:720",
    alt: "Sistema de microfone sem fio: bastão transmissor ao lado de um receptor meia-rack com duas antenas e display.",
    caption: "Sistema sem fio: o bastão transmissor e o receptor (meia-rack) com antenas e display de canal/frequência.",
    prompt: "A product photograph of a complete wireless microphone system on a neutral mid-grey surface. In front lies one black handheld wireless vocal transmitter microphone (a vocal mic with a slightly thicker body housing the transmitter, no visible cable). Behind it sits a black half-rack receiver unit: a flat rectangular metal box with two short black whip antennas angled up in a V, a small softly glowing display panel on the front, and a couple of control knobs and buttons. Soft even studio lighting, gentle reflections, clearly showing both devices as a matched set. " + QA,
  },
  {
    slug: "mesa-analogica",
    ratio: "1280:720",
    alt: "Mesa de som analógica pequena, cerca de 10 canais, com ganho, EQ de 3 bandas, aux, pan e faders.",
    caption: "A mesa analógica pequena: cada canal com ganho, EQ de 3 bandas (agudo/médio/grave), aux, pan e fader.",
    prompt: "A three-quarter top-down studio product photograph of one small compact analog audio mixing console with a dark charcoal-grey metal chassis, roughly ten input channels. Each vertical channel strip clearly shows, from top to bottom: a gain knob, three stacked rotary EQ knobs of slightly different colors, one aux send knob, a small round pan knob, and a vertical channel fader with a light-grey fader cap, plus a tiny red peak LED. Along the top rear edge are rows of silver XLR and 1/4-inch input jacks. On the right is a slightly wider master section with two long faders. The knobs and faders are neatly aligned in a grid. Set on a plain light-grey seamless background, slightly angled to show depth, crisp high detail on knobs and faders. " + QA,
  },
  {
    slug: "pa-ativa",
    ratio: "1024:1024",
    alt: "Caixa de PA ativa em tripé com subwoofer ativo no chão ao lado.",
    caption: "PA de menor porte: caixa ativa (com amplificador embutido) no tripé e um subwoofer ativo no chão.",
    prompt: "A full-length studio product photograph of a small active PA speaker system on a plain light-grey seamless background. A single black two-way powered loudspeaker cabinet (with a large low-frequency driver and a horn tweeter visible behind a metal grille) is mounted on top of a slim black tripod speaker stand, standing at roughly head height and angled slightly downward. Beside it on the floor stands a matching black powered subwoofer, a larger boxy cabinet with a big round driver behind a grille. Both cabinets have subtle molded handles and rear amplifier panels hinted at. Clean, even studio lighting, realistic scale between the two boxes. " + QA,
  },
  {
    slug: "di-box",
    ratio: "1280:720",
    alt: "Direct box (DI) passiva: caixa metálica pequena com entrada P10, saída XLR e chave de ground-lift.",
    caption: "A DI (direct box): liga instrumentos de saída elétrica (teclado, baixo, violão) na mesa e casa a impedância.",
    prompt: "A close-up studio product photograph of one small passive direct box (DI box) for audio, a rugged compact rectangular metal box with brushed dark-blue and black finish, photographed at a three-quarter angle so both a side and the top are visible. On one side there is a 1/4-inch input jack; on the opposite end a silver male XLR output connector; and on the top a small toggle switch (ground-lift) and a second small switch (pad). Sturdy industrial look with slightly rounded corners and visible screws. Neutral light-grey background, sharp macro detail, subtle metallic reflections. " + QA,
  },
  {
    slug: "amplificador",
    ratio: "1280:720",
    alt: "Amplificador de potência em rack (2U): painel frontal com dois knobs de ganho, botão de power e LEDs de nível.",
    caption: "O amplificador de potência transforma o sinal de linha em força para mover as caixas passivas.",
    prompt: "A studio product photograph of one professional two-rack-unit (2U) power amplifier: a wide, flat, black metal rack-mount chassis with rack-mount ears on the sides and horizontal ventilation slots across the front. The front panel clearly shows two large round volume/gain knobs (one per channel) on the right, a power button on the left, and a row of small green and amber signal/level LED indicators in the middle. Photographed at a slight three-quarter angle so the front face and a hint of the top and the finned heatsink on the side are visible. Set on a plain light-grey seamless background. " + QA,
  },
  {
    slug: "acustica-sala",
    ratio: "1280:720",
    alt: "Sala com tratamento acústico: painéis de espuma nas paredes, bass traps nos cantos e um monitor de estúdio.",
    caption: "Tratamento acústico: painéis absorvem as reflexões e bass traps controlam o grave nos cantos.",
    prompt: "A photograph of a small acoustically treated room, showing how a room is treated to control sound reflections: the walls are covered with panels of dark-grey foam acoustic wedges, there are thick fabric-wrapped corner bass traps in the room corners, a few rectangular cloth-covered absorber panels mounted on the walls, and one black studio monitor loudspeaker sitting on a short stand facing into the room. Soft, even, natural interior lighting, realistic textures on the foam and fabric, calm and tidy, clearly illustrating acoustic treatment. Photorealistic high-resolution interior photography, shot on a full-frame DSLR with a 35mm lens, realistic depth and scale, tack-sharp focus. Negative constraints: no brand names, no logos, no readable text, no people, no clutter, no AI artifacts, no watermark.",
  },
  {
    slug: "dinamica-diagrama",
    ratio: "1280:720",
    alt: "Diagrama: compressor abaixando os picos acima do threshold; gate silenciando o sinal abaixo do threshold.",
    caption: "Compressor: abaixa os picos acima do threshold (som mais constante). Gate: silencia o que está abaixo do threshold (limpa o fundo).",
    prompt: "A clean modern flat-vector educational infographic on a pure white background, illustrating audio dynamics processing, split into two side-by-side panels. LEFT panel COMPRESSOR: blue waveform with tall peaks and a red dashed THRESHOLD line; peaks above the line flattened down with a downward arrow. RIGHT panel GATE: green waveform with loud sections and small noise; red dashed THRESHOLD line near the bottom; signal below silenced. Only labels COMPRESSOR, GATE, THRESHOLD. Minimal, high contrast, professional teaching diagram, no other text, no logos, no watermark.",
  },
  {
    slug: "analog-digital-diagrama",
    ratio: "1280:720",
    alt: "Diagrama: onda senoidal analógica contínua × versão digital em degraus (amostras).",
    caption: "Analógico: onda contínua e suave. Digital: a mesma onda reconstruída em degraus (amostras) — quanto mais amostras, mais fiel.",
    prompt: "A clean modern flat-vector educational infographic on a pure white background comparing analog and digital audio, two side-by-side panels, grey arrow between them. LEFT ANALOG: one smooth continuous blue sine wave. RIGHT DIGITAL: same sine rebuilt as orange discrete stair-step samples following the curve, thin vertical sample lines to a baseline. Only labels ANALOG and DIGITAL. Minimal, high contrast, professional teaching diagram, no other text, no logos, no watermark.",
  },
  {
    slug: "reverb-delay-senoide",
    ratio: "1280:720",
    alt: "Diagrama com senoides: delay como ecos separados e decrescentes; reverb como cauda densa que decai.",
    caption: "Delay: repetições separadas da senoide, cada vez menores (ecos). Reverb: uma cauda densa de reflexões que decai suave.",
    prompt: "A clean modern flat-vector educational infographic on a pure white background illustrating delay and reverb with sine-wave bursts, two stacked rows. TOP DELAY: one bright blue sine burst then three smaller evenly-spaced identical copies (distinct echoes). BOTTOM REVERB: one sine burst then a dense smooth decaying tail of overlapping ripples fading out. Only labels DELAY and REVERB. Minimal, high contrast, professional teaching diagram, no other text, no logos, no watermark.",
  },
  {
    slug: "mesa-setup",
    ratio: "1280:720",
    alt: "Setup completo: mesa analógica com microfone de cabo (XLR), receptor sem fio, régua de energia, cabo P2→P10 do notebook, ganho/fader e EQ do canal ajustados.",
    caption: "O setup completo do corporativo: mic com fio (XLR) e receptor sem fio na mesa, régua de energia, notebook via P2→P10, ganho e fader acionados e o EQ do canal de voz ajustado.",
    // CORRIGIDO: o notebook recebe SÓ UM plugue P2 (3,5mm); o cabo se divide em 2 P10 só na mesa.
    prompt: "A realistic three-quarter top-view photograph of a small analog mixing console on a table. The silver laptop has ONLY ONE cable plugged into it — a single thin 3.5mm (P2) plug in its single headphone port; from that one plug the black cable runs to the mixer and there splits into TWO 1/4-inch (P10) plugs into two adjacent line inputs. Laptop side = ONE small plug; mixer side = TWO larger plugs. Also: a wired handheld mic with XLR into channel 1, a small wireless receiver with two antennas cabled into another channel, both powered by a black power strip; gain knobs and channel faders raised, the three EQ knobs on the vocal channel turned. Tidy cables, neutral background, soft studio light, photorealistic, no logos, no readable text. Negative: do NOT put two plugs into the laptop.",
  },
  {
    slug: "amp-traseira",
    ratio: "1280:720",
    alt: "Traseira do amplificador: saídas Speakon e bornes vermelho/preto para as caixas, entradas XLR/P10, tomada e ventoinha — com cabos de caixa ligados.",
    caption: "A traseira do amplificador: aqui saem as caixas — conectores Speakon e bornes vermelho(+)/preto(−). É onde você pluga cada fio de alto-falante.",
    prompt: "A realistic close-up photograph of the rear panel of a rack-mount power amplifier showing speaker connections: per channel a round twist-lock Speakon connector and a pair of red and black binding posts, plus XLR and 1/4-inch inputs, an IEC power socket, a fan grille and a mode switch; two thick black speaker cables plugged into the Speakon outputs. Neutral background, sharp macro detail, no logos, no readable text.",
  },
];

export const bySlug = Object.fromEntries(IMAGES.map((i) => [i.slug, i]));

// Bloco <figure> pronto p/ embutir no conteudo_rico. align: 'full' (padrão).
export function figure(slug, opts = {}) {
  const im = bySlug[slug];
  if (!im) throw new Error("imagem desconhecida: " + slug);
  const cap = opts.caption ?? im.caption;
  const alt = (opts.alt ?? im.alt).replace(/"/g, "&quot;");
  return (
    `<figure style="margin:16px 0;text-align:center">` +
    `<img src="${imgUrl(slug)}" alt="${alt}" ` +
    `style="max-width:100%;border-radius:10px;border:1px solid rgba(0,0,0,.12)" />` +
    (cap ? `<figcaption style="font-size:12px;opacity:.75;margin-top:6px">${cap}</figcaption>` : ``) +
    `</figure>`
  );
}
