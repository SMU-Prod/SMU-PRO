// Manifesto de imagens realistas do curso VÍDEO BÁSICO (profissional).
// Usado por: (1) driver de geração (Runway) + upload ao Storage;
//            (2) build/apply que embute <figure><img> nas aulas via {{IMG:slug}}.
// URLs -> bucket PÚBLICO "media" do Supabase, pasta img-video-basico/.

export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-video-basico";
export const EXT = "jpg";
export const imgUrl = (slug) => `${SB}${FOLDER}/${slug}.${EXT}`;

const QA = "Photorealistic high-resolution photography, full-frame DSLR, physically accurate materials and reflections, true-to-life proportions and scale, tack-sharp focus, professional live-event/AV context, clean composition, realistic color. Negative constraints: no brand names, no logos, no readable or garbled text, no warped or duplicated parts, no extra or missing components, no distorted faces, no AI artifacts, no watermark.";

export const IMAGES = [
  {
    slug: "estacao-video", ratio: "1280:720",
    alt: "Técnico de vídeo numa cabine de eventos operando um notebook e uma mesa de corte, com vários monitores de multiview à frente e um telão ao fundo.",
    caption: "O posto do técnico de vídeo: notebook de playback, mesa de corte e monitores de multiview, com o telão do evento ao fundo.",
    prompt: "A photograph of a professional video operator seated at a front-of-house video control position during a live event, working on a laptop next to a small video switcher panel, several 16:9 preview monitors in front of him showing multiview grids of different camera feeds, a large LED video wall glowing softly in the background of a dark venue, cables neatly running on the desk. Cinematic low ambient light with screen glow on the operator's face and hands. " + QA,
  },
  {
    slug: "proporcao-telas", ratio: "1280:720",
    alt: "Comparação de telas em diferentes proporções: uma TV widescreen 16:9, um painel quadrado e um painel vertical, lado a lado.",
    caption: "Proporções na prática: 16:9 widescreen, um painel mais quadrado e um formato vertical — cada tela pede um enquadramento diferente.",
    prompt: "A clean studio photograph showing three professional display screens standing side by side on a neutral dark-grey seamless background: on the left a wide 16:9 widescreen monitor, in the middle a nearly square display panel, and on the right a tall vertical portrait display panel, each showing a solid neutral colored test field (no text). Even softbox studio lighting, subtle reflections on the floor, sharp detail. " + QA,
  },
  {
    slug: "sinal-video-cadeia", ratio: "1280:720",
    alt: "Rack de equipamentos de vídeo com conversores e distribuidores ligados por cabos, representando a cadeia do sinal.",
    caption: "A cadeia do sinal em hardware: fontes entram em conversores e distribuidores no rack e seguem, cabo a cabo, até as telas.",
    prompt: "A photograph of a professional AV equipment rack seen from the front, filled with rack-mounted video processing units, converters and distribution amplifiers with small status LEDs, many BNC and HDMI cables neatly patched between them, a couple of small preview screens embedded in the rack. Studio-lit, dark room, blue and green indicator LEDs, sharp focus on the connectors and cabling. " + QA,
  },
  {
    slug: "cabos-video-conectores", ratio: "1280:720",
    alt: "Conectores de vídeo lado a lado sobre superfície escura: HDMI, BNC (SDI), DisplayPort, VGA e RCA/P2.",
    caption: "Os conectores que o técnico de vídeo maneja: HDMI, BNC (SDI), DisplayPort, VGA e RCA — cada um para um tipo de cabo e distância.",
    prompt: "A clean macro product photograph of five different professional video cable connectors laid out in a row on a dark matte surface, clearly separated: a flat HDMI connector, a round metal BNC coaxial connector (for SDI), a DisplayPort connector with its latch, a blue trapezoidal VGA connector with screws, and a yellow RCA composite connector. Even studio lighting, crisp detail on the metal and plastic, shallow depth of field, no labels or text. " + QA,
  },
  {
    slug: "fibra-hdbaset", ratio: "1280:720",
    alt: "Conversor de fibra óptica de vídeo com um cabo de fibra de conector LC e, ao lado, um extensor sobre cabo de rede Cat6.",
    caption: "Para longas distâncias: transceiver de fibra óptica (conector LC) e extensor HDBaseT sobre cabo de rede Cat6.",
    prompt: "A close-up photograph on a dark surface of a professional fiber-optic video transmitter box with a thin duplex fiber optic cable plugged in via a small LC connector, and beside it a small HDBaseT extender box with a blue Cat6 ethernet cable plugged in. Small status LEDs glowing, metal housings, studio lighting, sharp macro detail, no text or logos. " + QA,
  },
  {
    slug: "conversor-scaler", ratio: "1280:720",
    alt: "Conversor/scaler de vídeo compacto de metal com entradas HDMI e SDI (BNC) e saídas, sobre uma mesa.",
    caption: "O conversor/scaler: casa formatos e resoluções diferentes (HDMI↔SDI) para que o sinal chegue certo na tela.",
    prompt: "A macro product photograph of a small professional metal video converter/scaler box on a desk, showing HDMI ports and round BNC/SDI connectors on its rear panel, a couple of tiny buttons and a status LED on the front, a short HDMI cable connected. Neutral studio lighting, sharp detail on the connectors, dark clean background, no readable text. " + QA,
  },
  {
    slug: "estacao-pc-video", ratio: "1280:720",
    alt: "Computador de vídeo com placa de vídeo dedicada, mostrando as saídas HDMI e DisplayPort na traseira e um notebook ao lado.",
    caption: "A estação de vídeo: um PC com placa de vídeo (GPU) dedicada e várias saídas HDMI/DisplayPort para alimentar telas e telões.",
    prompt: "A photograph of a high-performance desktop computer for video playback with its side panel open, revealing a large dedicated graphics card (GPU) with cooling fans, showing the rear bracket with multiple HDMI and DisplayPort outputs, a professional laptop beside it on the same desk. Studio lighting, sharp focus on the graphics card and video output ports, dark tech-workshop background, no text or logos. " + QA,
  },
  {
    slug: "telas-comparativo", ratio: "1280:720",
    alt: "Três tecnologias de tela num mesmo cenário: um monitor de TV num pedestal, um telão de LED modular e um projetor com sua tela.",
    caption: "Escolher a tela certa: monitor/TV para perto, telão de LED para brilho e ambiente claro, projetor para grande área com luz controlada.",
    prompt: "A wide photograph of an event AV showroom showing three display technologies together: on the left a large flat-screen TV monitor on a floor stand, in the center a modular bright LED video wall panel section, and on the right a projector on a stand throwing an image onto a projection screen. Neutral even lighting, professional AV context, clean floor, sharp detail, no text on the screens. " + QA,
  },
  {
    slug: "cabinet-led-modulo", ratio: "1280:720",
    alt: "Gabinete de telão de LED aberto por trás, mostrando os módulos de LED na frente e a placa receptora (receiving card) e fontes atrás.",
    caption: "Por dentro do telão: vários módulos de LED formam um gabinete (cabinet); atrás ficam a placa receptora e as fontes de energia.",
    prompt: "A photograph of a single LED video wall cabinet shown from a three-quarter back angle, its rear service door open to reveal the internal electronics: a green receiving card circuit board, power supply units, ribbon cables and connectors, while the front face shows the dense matrix of small LED modules. Detailed, well-lit close-up in a technical setting, sharp focus on the circuit boards and LED modules, no text or logos. " + QA,
  },
  {
    slug: "processador-led", ratio: "1280:720",
    alt: "Processador de vídeo de LED montado em rack, com entradas HDMI/DVI/SDI e várias saídas de rede RJ45 (Ethernet).",
    caption: "O processador (sending card): recebe o vídeo e distribui para os gabinetes por várias portas de rede Ethernet (RJ45).",
    prompt: "A macro photograph of a professional rack-mounted LED video processor / sending unit, front and rear detail, showing HDMI, DVI and BNC/SDI input connectors and a row of RJ45 gigabit ethernet output ports with green link LEDs, a small LCD screen and a control knob on the front panel, blue network cables plugged into the output ports. Studio lighting, dark rack background, sharp detail on the ports, no readable text or logos. " + QA,
  },
  {
    slug: "projetor-evento", ratio: "1280:720",
    alt: "Projetor profissional de grande porte para eventos, com lente destacada, montado sobre base, projetando um facho de luz.",
    caption: "O projetor de evento: alto fluxo de lúmens e lente intercambiável para cobrir grandes superfícies quando há controle de luz.",
    prompt: "A photograph of a large professional installation projector for events, a big white or black metal body with a prominent glass zoom lens on the front, mounted on a heavy stand or rigging frame, projecting a soft cone of light in a dark venue. Cinematic, sharp detail on the lens and body, atmospheric haze catching the projected light beam, no text or logos. " + QA,
  },
  {
    slug: "switcher-mesa", ratio: "1280:720",
    alt: "Mesa de corte (switcher) de vídeo com botões de barramento PGM/PVW iluminados, T-bar e um operador com a mão nos controles.",
    caption: "A mesa de corte (switcher): fileiras de botões iluminados dos barramentos PGM/PVW, T-bar e teclas de transição sob as mãos do operador.",
    prompt: "A photograph of a professional video production switcher control panel seen at a slight angle, with rows of illuminated square source buttons in red (program) and green (preview), a T-bar transition lever, and a hand of an operator resting on the buttons. Dark control-room ambience, buttons glowing, shallow depth of field, sharp focus on the illuminated buttons and T-bar, no readable text. " + QA,
  },
  {
    slug: "cadeia-video-evento", ratio: "1280:720",
    alt: "Cabine completa de vídeo de um evento: monitores de multiview e programa, mesa de corte, computadores e racks, com o palco iluminado ao fundo.",
    caption: "A cadeia montada: fontes, mesa de corte, processadores e monitores na cabine, alimentando o telão do palco ao fundo.",
    prompt: "A wide photograph of a complete live-event video control booth at the back of a large venue: a desk with several stacked multiview and program monitors, a video switcher panel, two laptops and rack units with glowing LEDs, seen from behind the operators, looking out toward a brightly lit stage with a big LED screen in the distance. Cinematic concert lighting, atmospheric, sharp detail on the equipment in the foreground, no readable text or logos. " + QA,
  },
];
