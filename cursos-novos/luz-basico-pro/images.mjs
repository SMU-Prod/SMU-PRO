// Manifesto de imagens realistas do curso LUZ BÁSICO (profissional).
// Usado por: (1) gen-images.mjs (gera via Runway + sobe ao Storage);
//            (2) build-sql.mjs (embute <figure><img> nas aulas via {{IMG:slug}}).
// URLs -> bucket PÚBLICO "media" do Supabase, pasta img-luz-basico/.
// Enquanto a imagem não é gerada/subida, o <img> mostra o alt (não quebra o layout).

export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-luz-basico";
export const EXT = "jpg";
export const imgUrl = (slug) => `${SB}${FOLDER}/${slug}.${EXT}`;

// Padrão de qualidade + negativos (repetido em cada prompt de FOTO real de equipamento).
const QA = "Photorealistic high-resolution photography, full-frame DSLR, physically accurate materials and reflections, true-to-life proportions and scale, tack-sharp focus, professional stage-lighting context, clean composition. Negative constraints: no brand names, no logos, no readable or garbled text, no warped or duplicated parts, no extra or missing components, no people faces in focus, no AI artifacts, no watermark.";

export const IMAGES = [
  {
    slug: "palco-show-luz",
    ratio: "1280:720",
    alt: "Palco de show visto da plateia com moving heads acesos, fachos de luz colorida cortando a fumaça e contraluz sobre a banda.",
    caption: "O trabalho do técnico de luz: fachos coloridos, contraluz e atmosfera com fumaça compõem o show que a plateia vê.",
    prompt: "A wide eye-level photograph of a concert stage seen from the audience at night, filled with dramatic stage lighting: several moving-head fixtures on an overhead aluminium truss projecting sharp colored light beams (blue, magenta, amber) that cut through a light haze in the air, strong backlight rimming the silhouettes of a band, colored wash on a dark backdrop. Atmospheric, cinematic, professional live-event look, deep blacks with vivid saturated beams. " + QA,
  },
  {
    slug: "par-led",
    ratio: "1280:720",
    alt: "Refletores PAR de LED alinhados, cada um com uma matriz de LEDs coloridos (vermelho, verde, azul, branco) na frente.",
    caption: "O PAR LED — o 'cavalo de batalha' do banho de cor: uma matriz de LEDs RGBW num corpo compacto de alumínio.",
    prompt: "A clean product photograph of three professional LED PAR can stage light fixtures standing in a row on a neutral dark-grey seamless surface, each a short cylindrical black cast-aluminium housing whose front face is packed with a dense honeycomb array of small colored LEDs (mix of red, green, blue and white emitters visible but switched off), a yoke bracket with knobs on each side, DMX and power connectors on the back. Even studio softbox lighting, subtle reflections, sharp detail on the LED array. " + QA,
  },
  {
    slug: "moving-heads",
    ratio: "1280:720",
    alt: "Três moving heads profissionais lado a lado: um wash de lente grande, um spot e um beam de lente pequena, sobre suas bases.",
    caption: "Moving heads: da esquerda para a direita, o wash (lente grande, banho), o spot (recorte com gobo) e o beam (facho estreito e denso).",
    prompt: "A studio product photograph of three professional motorized moving-head stage light fixtures standing side by side on a dark seamless surface, each with a heavy base, a U-shaped yoke and a rotating head: on the left a WASH type with a very large frosted front lens, in the middle a SPOT type with a medium lens, on the right a BEAM type with a small bright lens. Black cast-aluminium bodies, cooling vents, professional look, even soft lighting, sharp detail, subtle reflections on the floor. " + QA,
  },
  {
    slug: "elipsoidal-fresnel",
    ratio: "1280:720",
    alt: "Dois refletores convencionais de teatro: à esquerda um elipsoidal (recorte) com facas de corte; à direita um fresnel com a lente de anéis concêntricos.",
    caption: "Convencionais de teatro: o elipsoidal/recorte (esquerda, com as facas de corte e porta-gobo) e o fresnel (direita, com a lente de anéis que suaviza a borda).",
    prompt: "A product photograph of two classic tungsten theatrical stage lighting fixtures side by side on a neutral surface: on the LEFT an ellipsoidal reflector spotlight (ERS 'profile' fixture) — a long black barrel with a lens tube at the front and four metal shutter-blade handles sticking out of the middle for beam shaping, plus a gobo slot; on the RIGHT a Fresnel spotlight — a compact box body with a large round stepped Fresnel lens (concentric ring pattern clearly visible) and barn-door flaps on the front. Matte black metal, sturdy yokes, even studio lighting, sharp detail. " + QA,
  },
  {
    slug: "fixture-menu-dmx",
    ratio: "1280:720",
    alt: "Painel traseiro de um moving head com o pequeno display digital mostrando o menu de endereço DMX e botões de navegação.",
    caption: "No display da fixture você ajusta o endereço DMX inicial e o modo (footprint). O que está aqui tem que bater com o patch da mesa.",
    prompt: "A close-up photograph of the rear control panel of a professional moving-head stage light, centered on a small rectangular digital display screen showing a simple menu with a numeric address value and menu items, surrounded by four navigation buttons (up, down, enter, escape). Around the panel: a locking power input connector, DMX in and out XLR connectors. Matte black aluminium, blue backlit screen glow, sharp macro focus, realistic. " + QA,
  },
  {
    slug: "conectores-dmx",
    ratio: "1280:720",
    alt: "Conectores DMX lado a lado: XLR de 3 pinos (macho e fêmea) e XLR de 5 pinos, com cabo blindado, comparados a um conector de energia travável.",
    caption: "Conectores de luz: cabo DMX com XLR de 3 e 5 pinos (dados) e o conector de energia travável (força) — dados e energia andam separados.",
    prompt: "A top-down macro photograph on a matte light-grey surface of stage-lighting connectors laid out separated in a row: a 3-pin male XLR connector and a 3-pin female XLR connector on shielded DMX cable, a larger 5-pin XLR connector, and to the right a round blue twist-lock power connector (powerCON-style) on a black power cable. Each connector fully visible and not touching the others, polished metal pins and matte housings, subtle reflections, crisp detail. " + QA,
  },
  {
    slug: "terminador-dmx",
    ratio: "1024:1024",
    alt: "Um plugue terminador DMX (XLR macho de 3 pinos) isolado, com a indicação de resistor de 120 ohms, encaixando na saída DMX da última fixture.",
    caption: "O terminador DMX: um plugue XLR macho com um resistor de 120Ω dentro, encaixado no DMX OUT da última fixture da linha.",
    prompt: "A close-up studio product photograph of a single DMX terminator plug — a short black 3-pin male XLR connector barrel with no cable, just the connector housing (containing a 120-ohm resistor), shown being inserted into the female DMX-out socket on the back of a black stage fixture. Clean neutral background, dramatic soft lighting, sharp macro detail on the metal pins and connector. " + QA,
  },
  {
    slug: "dimmer-rack",
    ratio: "1280:720",
    alt: "Rack de dimmers de iluminação com vários canais, disjuntores por circuito e saídas de tomada, com PARes convencionais plugados.",
    caption: "O rack de dimmer: cada canal recebe um endereço DMX e alimenta um circuito de tomadas onde entram os refletores convencionais (PAR de lâmpada). LED não vai no dimmer.",
    prompt: "A photograph of a professional theatrical dimmer rack / dimmer pack unit, a black metal rack-mount chassis with a front row of circuit-breaker switches and a small display, and an output panel with several power sockets; a few thick black power cables from conventional PAR-can fixtures are plugged into the outputs. Industrial, sturdy, well-organized cabling, neutral background, even lighting, sharp detail. " + QA,
  },
  {
    slug: "distro-energia",
    ratio: "1280:720",
    alt: "Distribuidor de energia (power distro) de evento com disjuntores, medidor e várias saídas, alimentando réguas que vão para as fixtures.",
    caption: "A distribuição de energia (distro): entra a rede, sai dividida em circuitos com disjuntores; some os watts das fixtures para não estourar o disjuntor.",
    prompt: "A photograph of a professional event power distribution box (power distro) on a road case, a rugged metal enclosure with a row of labeled circuit breakers, a digital voltage/amperage meter, and multiple heavy-duty output sockets, with thick black feeder cables coming in and several power strips fanning out toward stage lighting. Industrial, safety-focused, tidy cable management, neutral background, sharp detail. " + QA,
  },
  {
    slug: "mesa-luz",
    ratio: "1280:720",
    alt: "Mesa/console de iluminação com banco de faders, teclado numérico, botões de playback e duas telas mostrando o show.",
    caption: "A mesa de luz — o cérebro do show: bancos de faders (playbacks), teclado de comando e telas com as fixtures, grupos e cues.",
    prompt: "A three-quarter photograph of a professional stage lighting control console on a desk, a wide black control surface with multiple banks of motorized channel faders, illuminated playback and flash buttons, a numeric command keypad, encoder wheels, and two angled display screens showing lighting cue and fixture data (abstract colorful grids and levels, no readable text). Studio product look, cool blue ambient glow, sharp detail, subtle reflections. " + QA,
  },
  {
    slug: "truss-clamp-safety",
    ratio: "1280:720",
    alt: "Detalhe de uma fixture pendurada numa truss de alumínio por uma garra (clamp) e presa também por um cabo de aço de segurança.",
    caption: "Toda fixture na truss leva a garra (clamp) firme E o cabo de aço de segurança — se a garra falhar, o safety segura. Fixture caindo mata.",
    prompt: "A close-up photograph of a stage light fixture rigged onto a horizontal aluminium truss tube: a heavy-duty steel hook clamp bolted through the fixture's mounting bracket and tightened around the truss with a wing bolt, and clearly visible a separate steel safety cable (safety bond) with a carabiner looping from the fixture around the truss as a secondary attachment. Industrial rigging detail, matte black and raw aluminium, sharp macro focus, professional and safety-focused, neutral background. " + QA,
  },
  {
    slug: "talha-truss",
    ratio: "1280:720",
    alt: "Truss de alumínio sendo içada por uma talha/moitão de corrente, com as luzes montadas, numa montagem de palco.",
    caption: "A truss de alumínio com as luzes é içada por talhas (moitão de corrente) — respeite sempre o limite de carga (kg) da estrutura e da talha, e ninguém passa embaixo.",
    prompt: "A photograph looking up at an aluminium box-truss being hoisted into the air by a black electric chain hoist (motor) during a stage rig build; several stage light fixtures are already clamped along the truss, chains hanging, an empty venue ceiling above. Industrial event-rigging scene, sense of height and weight, moody warehouse lighting, sharp detail, professional. " + QA,
  },
  {
    slug: "rig-montado",
    ratio: "1280:720",
    alt: "Rig de iluminação pequeno montado numa truss em H com PARes LED e dois moving heads, endereçado e pronto para o teste.",
    caption: "Um rig pequeno montado: truss com PARes LED e moving heads, cabeamento de DMX e energia feito, pronto para o endereçamento e o channel check.",
    prompt: "A photograph of a small tidy stage lighting rig set up in an empty venue before a show: an aluminium truss goalpost/H-frame holding a row of LED PAR cans and two moving-head fixtures, neat DMX and power cabling running along the truss and down to the floor, fixtures switched off, ready for patching. Clean professional setup, wide shot, even ambient light, sharp detail, no people. " + QA,
  },
  {
    slug: "mistura-cor-led",
    ratio: "1280:720",
    alt: "PAR LED aceso projetando um facho de cor saturada pela fumaça, com os emissores vermelho, verde e azul visíveis na frente.",
    caption: "Mistura aditiva na prática: os emissores R, G e B do PAR LED somam-se e projetam a cor no facho — mais luz, mais claro.",
    prompt: "A close-up photograph of a professional LED PAR stage fixture with its front face of colored LED emitters lit up, projecting a vivid saturated colored beam through light haze against a dark background — the beam clearly tinted (for example magenta blending from red and blue), showing additive color mixing of the red, green and blue LEDs. Some individual emitters glow red, some green, some blue on the fixture face. Dramatic, cinematic, deep black background, glowing beam, sharp detail on the LED array. Photorealistic. No brand names, no logos, no readable text, no watermark.",
  },
  {
    slug: "dmx-daisy-chain",
    ratio: "1280:720",
    alt: "Duas fixtures ligadas por um cabo DMX em cadeia: o cabo sai do DMX OUT de uma e entra no DMX IN da outra.",
    caption: "O daisy chain: o cabo DMX sai do OUT de uma fixture e entra no IN da próxima — o sinal viaja em cadeia até o terminador.",
    prompt: "A close-up photograph showing two black stage lighting fixtures connected by a black DMX cable in a daisy chain: the cable runs from the DMX-out (thru) connector on the back of the first fixture to the DMX-in connector on the back of the second fixture, both XLR connectors clearly seated and labeled DMX OUT / DMX IN. Focus on the cable link between the two rear panels. Neutral dark background, soft even lighting, sharp macro detail. Photorealistic. No brand names, no logos, no readable garbled text, no watermark.",
  },
  {
    slug: "luz-3-pontos-palco",
    ratio: "1280:720",
    alt: "Artista no palco com iluminação de 3 pontos: rosto iluminado pela frontal, sombra suavizada pelo fill e contorno brilhante do contraluz.",
    caption: "Os 3 pontos no palco: a frontal (key) mostra o rosto, o fill suaviza a sombra e o contraluz recorta o contorno, separando do fundo.",
    prompt: "A photograph of a single performer on a dark stage, their FACE clearly and brightly lit by a warm frontal KEY light at ~45 degrees (features plainly visible, NOT a silhouette), a softer FILL on the opposite side lifting the shadow, and a cool BACK light rimming the hair and shoulders to separate from the dark curtain. All three roles visible: lit face, soft shadow side, glowing edge. Cinematic professional stage look, subtle haze. Photorealistic, natural skin tones, correctly exposed face. No brand names, no logos, no readable text, no watermark.",
  },
];

export const bySlug = Object.fromEntries(IMAGES.map((i) => [i.slug, i]));

// Bloco <figure> pronto p/ embutir no conteudo_rico via token {{IMG:slug}}.
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
