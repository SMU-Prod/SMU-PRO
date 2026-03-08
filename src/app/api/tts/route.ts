import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { tts } from "@/lib/edge-tts";

function stripHtml(html: string): string {
  return html
    // Preserve list items as separate lines
    .replace(/<li[^>]*>/gi, "\n• ")
    // Preserve headings with pauses
    .replace(/<h[1-6][^>]*>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, ".\n\n")
    // Preserve paragraphs
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    // Remove scripts/styles
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    // Remove remaining tags
    .replace(/<[^>]+>/g, " ")
    // Decode entities
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Clean up whitespace
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Pre-process text to improve TTS pronunciation for technical content.
 * Comprehensive dictionary for event production: som, luz, produção, DJ, VJ, roadie, marketing, efeitos.
 */
function prepareTtsText(text: string): string {
  let t = text;

  // ══════════════════════════════════════════════════════════
  // 1. UNIDADES TÉCNICAS (com número antes)
  // ══════════════════════════════════════════════════════════
  t = t.replace(/(\d+)\s*kHz\b/gi, "$1 quilohertz");
  t = t.replace(/(\d+)\s*MHz\b/gi, "$1 megahertz");
  t = t.replace(/(\d+)\s*GHz\b/gi, "$1 gigahertz");
  t = t.replace(/(\d+)\s*Hz\b/gi, "$1 hertz");
  t = t.replace(/(\d+)\s*kW\b/gi, "$1 quilowatts");
  t = t.replace(/(\d+)\s*MW\b/g, "$1 megawatts");
  t = t.replace(/(\d+)\s*W\b/g, "$1 watts");
  t = t.replace(/(\d+)\s*kV\b/gi, "$1 quilovolts");
  t = t.replace(/(\d+)\s*mV\b/g, "$1 milivolts");
  t = t.replace(/(\d+)\s*V\b/g, "$1 volts");
  t = t.replace(/(\d+)\s*mA\b/g, "$1 miliamperes");
  t = t.replace(/(\d+)\s*A\b/g, "$1 amperes");
  t = t.replace(/(\d+)\s*Ω\b/g, "$1 ohms");
  t = t.replace(/(\d+)\s*kΩ\b/gi, "$1 quilo-ohms");
  t = t.replace(/(\d+)\s*ms\b/g, "$1 milissegundos");
  t = t.replace(/(\d+)\s*μs\b/g, "$1 microssegundos");
  t = t.replace(/(\d+)\s*ns\b/g, "$1 nanossegundos");
  t = t.replace(/(\d+)\s*lux\b/gi, "$1 lux");
  t = t.replace(/(\d+)\s*lm\b/g, "$1 lúmens");
  t = t.replace(/(\d+)\s*cd\b/g, "$1 candelas");
  t = t.replace(/(\d+)\s*lx\b/g, "$1 lux");
  t = t.replace(/(\d+)\s*K\b/g, "$1 kelvin"); // temperatura de cor
  t = t.replace(/(\d+)\s*BPM\b/gi, "$1 batidas por minuto");
  t = t.replace(/(\d+)\s*RPM\b/gi, "$1 rotações por minuto");
  t = t.replace(/(\d+)\s*FPS\b/gi, "$1 quadros por segundo");
  t = t.replace(/(\d+)\s*fps\b/g, "$1 quadros por segundo");
  t = t.replace(/(\d+)\s*kg\b/g, "$1 quilos");
  t = t.replace(/(\d+)\s*lb\b/g, "$1 libras");
  t = t.replace(/(\d+)\s*mm\b/g, "$1 milímetros");
  t = t.replace(/(\d+)\s*cm\b/g, "$1 centímetros");
  t = t.replace(/(\d+)\s*m\b/g, "$1 metros");
  t = t.replace(/(\d+)\s*km\b/g, "$1 quilômetros");
  t = t.replace(/(\d+)\s*pol\b/g, "$1 polegadas");
  t = t.replace(/(\d+)\s*"\b/g, "$1 polegadas");
  t = t.replace(/(\d+)\s*'\b/g, "$1 pés");
  t = t.replace(/(\d+)\s*GB\b/gi, "$1 gigabáites");
  t = t.replace(/(\d+)\s*MB\b/gi, "$1 megabáites");
  t = t.replace(/(\d+)\s*TB\b/gi, "$1 terabáites");
  t = t.replace(/(\d+)\s*KB\b/gi, "$1 quilobáites");
  t = t.replace(/(\d+)\s*Mbps\b/gi, "$1 megabits por segundo");
  t = t.replace(/(\d+)\s*Gbps\b/gi, "$1 gigabits por segundo");

  // ── Decibéis (variantes) ──
  t = t.replace(/\bdBSPL\b/gi, " d b s p l");
  t = t.replace(/\bdBFS\b/gi, " d b f s");
  t = t.replace(/\bdBu\b/g, " d b u");
  t = t.replace(/\bdBV\b/g, " d b v");
  t = t.replace(/\bdBA\b/g, " d b A");
  t = t.replace(/\bdB\b/g, " decibéis");
  t = t.replace(/\bSPL\b/g, " s p l");
  t = t.replace(/\bRMS\b/g, " R M S");
  t = t.replace(/\bTHD\b/g, " T H D");

  // ══════════════════════════════════════════════════════════
  // 2. SIGLAS — Áudio e Som
  // ══════════════════════════════════════════════════════════
  t = t.replace(/\bPA\b/g, " P A ");
  t = t.replace(/\bFOH\b/g, " F O H ");
  t = t.replace(/\bMON\b/g, " monitor ");
  t = t.replace(/\bXLR\b/g, " X L R ");
  t = t.replace(/\bTRS\b/g, " T R S ");
  t = t.replace(/\bTS\b/g, " T S ");
  t = t.replace(/\bRCA\b/g, " R C A ");
  t = t.replace(/\bAES\b/g, " A E S ");
  t = t.replace(/\bEBU\b/g, " E B U ");
  t = t.replace(/\bSPDIF\b/gi, " S P DIF ");
  t = t.replace(/\bADAT\b/g, " A D A T ");
  t = t.replace(/\bDANTE\b/gi, " Dante ");
  t = t.replace(/\bAVB\b/g, " A V B ");
  t = t.replace(/\bAoIP\b/gi, " áudio sobre I P ");
  t = t.replace(/\bDAW\b/g, " D A W ");
  t = t.replace(/\bDSP\b/g, " D S P ");
  t = t.replace(/\bEQ\b/g, " equalizador ");
  t = t.replace(/\bHPF\b/g, " filtro passa alta ");
  t = t.replace(/\bLPF\b/g, " filtro passa baixa ");
  t = t.replace(/\bPEQ\b/g, " equalizador paramétrico ");
  t = t.replace(/\bGEQ\b/g, " equalizador gráfico ");
  t = t.replace(/\bDCA\b/g, " D C A ");
  t = t.replace(/\bVCA\b/g, " V C A ");
  t = t.replace(/\bAUX\b/gi, " auxiliar ");
  t = t.replace(/\bBUS\b/gi, " barramento ");
  t = t.replace(/\bMIDI\b/g, " M I D I ");
  t = t.replace(/\bOSC\b/g, " O S C ");
  t = t.replace(/\bSNR\b/gi, " relação sinal ruído ");
  t = t.replace(/\bS\/N\b/g, " relação sinal ruído ");
  t = t.replace(/\bPFL\b/g, " P F L ");
  t = t.replace(/\bAFL\b/g, " A F L ");
  t = t.replace(/\bIEM\b/g, " I E M ");
  t = t.replace(/\bUHF\b/g, " U H F ");
  t = t.replace(/\bVHF\b/g, " V H F ");
  t = t.replace(/\bRF\b/g, " R F ");
  t = t.replace(/\bIF\b/g, " I F ");
  t = t.replace(/\bPCM\b/g, " P C M ");
  t = t.replace(/\bWAV\b/g, " uêiv ");
  t = t.replace(/\bMP3\b/g, " M P três ");
  t = t.replace(/\bFLAC\b/g, " fléque ");
  t = t.replace(/\bAAC\b/g, " A A C ");

  // ══════════════════════════════════════════════════════════
  // 3. SIGLAS — Iluminação e Vídeo
  // ══════════════════════════════════════════════════════════
  t = t.replace(/\bDMX\b/g, " D M X ");
  t = t.replace(/\bDMX-?512\b/gi, " D M X quinhentos e doze ");
  t = t.replace(/\bRDM\b/g, " R D M ");
  t = t.replace(/\bsACN\b/g, " s A C N ");
  t = t.replace(/\bArt-?Net\b/gi, " art nét ");
  t = t.replace(/\bLED\b/g, " L E D ");
  t = t.replace(/\bRGB\b/g, " R G B ");
  t = t.replace(/\bRGBW\b/g, " R G B W ");
  t = t.replace(/\bRGBA\b/g, " R G B A ");
  t = t.replace(/\bCMY\b/g, " C M Y ");
  t = t.replace(/\bCRI\b/g, " C R I ");
  t = t.replace(/\bCTO\b/g, " C T O ");
  t = t.replace(/\bCTB\b/g, " C T B ");
  t = t.replace(/\bPWM\b/g, " P W M ");
  t = t.replace(/\bHMI\b/g, " H M I ");
  t = t.replace(/\bHDMI\b/g, " H D M I ");
  t = t.replace(/\bSDI\b/g, " S D I ");
  t = t.replace(/\bHD-?SDI\b/gi, " HD S D I ");
  t = t.replace(/\bNDI\b/g, " N D I ");
  t = t.replace(/\bDVI\b/g, " D V I ");
  t = t.replace(/\bVGA\b/g, " V G A ");
  t = t.replace(/\bHD\b/g, " H D ");
  t = t.replace(/\bFHD\b/g, " full H D ");
  t = t.replace(/\b4K\b/g, " quatro k ");
  t = t.replace(/\b8K\b/g, " oito k ");
  t = t.replace(/\b1080p\b/g, " mil e oitenta p ");
  t = t.replace(/\b720p\b/g, " setecentos e vinte p ");
  t = t.replace(/\b4K60\b/gi, " quatro k sessenta ");
  t = t.replace(/\bIP\b/g, " I P ");
  t = t.replace(/\bLAN\b/g, " L A N ");
  t = t.replace(/\bWiFi\b/gi, " uai fai ");
  t = t.replace(/\bPoE\b/g, " P o E ");

  // ══════════════════════════════════════════════════════════
  // 4. SIGLAS — Produção, Regulamentação, Negócios
  // ══════════════════════════════════════════════════════════
  t = t.replace(/\bAC\b/g, " corrente alternada ");
  t = t.replace(/\bDC\b/g, " corrente contínua ");
  t = t.replace(/\bUSB\b/g, " U S B ");
  t = t.replace(/\bUSB-C\b/gi, " U S B C ");
  t = t.replace(/\bP&D\b/gi, " P e D ");
  t = t.replace(/\bNR-?10\b/gi, " N R dez ");
  t = t.replace(/\bNR-?12\b/gi, " N R doze ");
  t = t.replace(/\bNR-?35\b/gi, " N R trinta e cinco ");
  t = t.replace(/\bABNT\b/g, " A B N T ");
  t = t.replace(/\bAVCB\b/g, " A V C B ");
  t = t.replace(/\bPPCI\b/g, " P P C I ");
  t = t.replace(/\bART\b/g, " A R T ");
  t = t.replace(/\bRRT\b/g, " R R T ");
  t = t.replace(/\bCREA\b/g, " C R E A ");
  t = t.replace(/\bEPI\b/g, " E P I ");
  t = t.replace(/\bEPC\b/g, " E P C ");
  t = t.replace(/\bCLT\b/g, " C L T ");
  t = t.replace(/\bMEI\b/g, " M E I ");
  t = t.replace(/\bCNPJ\b/g, " C N P J ");
  t = t.replace(/\bCPF\b/g, " C P F ");
  t = t.replace(/\bRG\b/g, " R G ");
  t = t.replace(/\bISS\b/g, " I S S ");
  t = t.replace(/\bICMS\b/g, " I C M S ");
  t = t.replace(/\bNF\b/g, " nota fiscal ");
  t = t.replace(/\bNF-?e\b/gi, " nota fiscal eletrônica ");
  t = t.replace(/\bDJ\b/g, " D J ");
  t = t.replace(/\bVJ\b/g, " V J ");
  t = t.replace(/\bMC\b/g, " M C ");
  t = t.replace(/\bPR\b/g, " P R ");
  t = t.replace(/\bROI\b/g, " R O I ");
  t = t.replace(/\bKPI\b/g, " K P I ");
  t = t.replace(/\bCRM\b/g, " C R M ");
  t = t.replace(/\bSEO\b/g, " S E O ");
  t = t.replace(/\bSLA\b/g, " S L A ");
  t = t.replace(/\bB2B\b/g, " B dois B ");
  t = t.replace(/\bB2C\b/g, " B dois C ");

  // ══════════════════════════════════════════════════════════
  // 5. TERMOS EM INGLÊS — Fonética pt-BR (expressões compostas primeiro)
  // ══════════════════════════════════════════════════════════

  // ── Expressões compostas (DEVEM vir antes das palavras individuais) ──
  t = t.replace(/\bsound check\b/gi, "saund tchéque");
  t = t.replace(/\bsoundcheck\b/gi, "saund tchéque");
  t = t.replace(/\bline check\b/gi, "laine tchéque");
  t = t.replace(/\bline array\b/gi, "laine arrei");
  t = t.replace(/\bpoint source\b/gi, "point sôrce");
  t = t.replace(/\bground support\b/gi, "gráund supórte");
  t = t.replace(/\bground stack\b/gi, "gráund stéque");
  t = t.replace(/\bmoving head\b/gi, "múvin réd");
  t = t.replace(/\bmoving light\b/gi, "múvin láite");
  t = t.replace(/\bfollow spot\b/gi, "fólou espóte");
  t = t.replace(/\bstage box\b/gi, "stêidge bóques");
  t = t.replace(/\bstage manager\b/gi, "stêidge méneger");
  t = t.replace(/\bstage hand\b/gi, "stêidge rénd");
  t = t.replace(/\bstage plot\b/gi, "stêidge plóte");
  t = t.replace(/\bsound designer\b/gi, "saund disáiner");
  t = t.replace(/\bsound design\b/gi, "saund disáin");
  t = t.replace(/\blight designer\b/gi, "láit disáiner");
  t = t.replace(/\blighting designer\b/gi, "láitin disáiner");
  t = t.replace(/\blighting design\b/gi, "láitin disáin");
  t = t.replace(/\bfront fill\b/gi, "frânt fíll");
  t = t.replace(/\bout fill\b/gi, "áut fíll");
  t = t.replace(/\bside fill\b/gi, "sáid fíll");
  t = t.replace(/\bdrum fill\b/gi, "drâm fíll");
  t = t.replace(/\bwedge monitor\b/gi, "uédge mônitor");
  t = t.replace(/\bin-ear monitor\b/gi, "ín íar mônitor");
  t = t.replace(/\bin-ear\b/gi, "ín íar");
  t = t.replace(/\bpower amp\b/gi, "páuer émpe");
  t = t.replace(/\bpower supply\b/gi, "páuer suplái");
  t = t.replace(/\bcrowd control\b/gi, "cráud contrôu");
  t = t.replace(/\bcall time\b/gi, "cól táime");
  t = t.replace(/\bcall sheet\b/gi, "cól chíte");
  t = t.replace(/\bday off\b/gi, "dêi ófe");
  t = t.replace(/\bload in\b/gi, "lôud ín");
  t = t.replace(/\bload out\b/gi, "lôud áut");
  t = t.replace(/\bload-in\b/gi, "lôud ín");
  t = t.replace(/\bload-out\b/gi, "lôud áut");
  t = t.replace(/\bget in\b/gi, "guét ín");
  t = t.replace(/\bget out\b/gi, "guét áut");
  t = t.replace(/\bbreak even\b/gi, "brêique íven");
  t = t.replace(/\bkey light\b/gi, "quii láite");
  t = t.replace(/\bfill light\b/gi, "fíll láite");
  t = t.replace(/\bback light\b/gi, "béque láite");
  t = t.replace(/\bblack out\b/gi, "bléque áut");
  t = t.replace(/\bblackout\b/gi, "bléque áut");
  t = t.replace(/\bwhite out\b/gi, "uáite áut");
  t = t.replace(/\bfade in\b/gi, "fêide ín");
  t = t.replace(/\bfade out\b/gi, "fêide áut");
  t = t.replace(/\bcue list\b/gi, "quiú líste");
  t = t.replace(/\bcolor mix\b/gi, "cólor míques");
  t = t.replace(/\bhigh pass\b/gi, "rái pésse");
  t = t.replace(/\blow pass\b/gi, "lôu pésse");
  t = t.replace(/\bband pass\b/gi, "bénd pésse");
  t = t.replace(/\bsignal flow\b/gi, "sígnau flôu");
  t = t.replace(/\bgain stage\b/gi, "guêin stêidge");
  t = t.replace(/\bgain staging\b/gi, "guêin stêidjin");
  t = t.replace(/\bphantom power\b/gi, "fântom páuer");
  t = t.replace(/\bcontrol room\b/gi, "contrôu rúm");
  t = t.replace(/\bgreen room\b/gi, "grín rúm");
  t = t.replace(/\bback stage\b/gi, "béque stêidge");
  t = t.replace(/\bbackstage\b/gi, "béque stêidge");
  t = t.replace(/\bfront stage\b/gi, "frânt stêidge");
  t = t.replace(/\bmain stage\b/gi, "mêin stêidge");
  t = t.replace(/\bside stage\b/gi, "sáid stêidge");
  t = t.replace(/\bopen air\b/gi, "ôpen éar");
  t = t.replace(/\bindoor\b/gi, "índoor");
  t = t.replace(/\boutdoor\b/gi, "áutdoor");
  t = t.replace(/\bplug and play\b/gi, "plâg end plêi");
  t = t.replace(/\bplug-and-play\b/gi, "plâg end plêi");
  t = t.replace(/\bturn around\b/gi, "târn aráund");
  t = t.replace(/\bno-show\b/gi, "nôu chôu");
  t = t.replace(/\bsell out\b/gi, "sél áut");
  t = t.replace(/\bsold out\b/gi, "sôuld áut");
  t = t.replace(/\bwork in progress\b/gi, "uôrk ín progrés");
  t = t.replace(/\bbriefing\b/gi, "brífin");
  t = t.replace(/\bdebriefing\b/gi, "debrífin");

  // ── Palavras individuais (ordem: plurais/derivados antes da raiz) ──
  t = t.replace(/\bfeedbacks\b/gi, "fidbéques");
  t = t.replace(/\bfeedback\b/gi, "fidbéque");
  t = t.replace(/\bsetups\b/gi, "setápes");
  t = t.replace(/\bsetup\b/gi, "setápe");
  t = t.replace(/\briders\b/gi, "ráiders");
  t = t.replace(/\brider\b/gi, "ráider");
  t = t.replace(/\bbacklines\b/gi, "béquelaines");
  t = t.replace(/\bbackline\b/gi, "béquelaine");
  t = t.replace(/\bstages\b/gi, "stêidges");
  t = t.replace(/\bstaging\b/gi, "stêidjin");
  t = t.replace(/\bstage\b/gi, "stêidge");
  t = t.replace(/\bcaterings\b/gi, "quêiterins");
  t = t.replace(/\bcatering\b/gi, "quêiterin");
  t = t.replace(/\bfreelancers\b/gi, "frilâncers");
  t = t.replace(/\bfreelancer\b/gi, "frilâncer");
  t = t.replace(/\bfreelance\b/gi, "frilânce");
  t = t.replace(/\bcases\b/gi, "quêices");
  t = t.replace(/\bcase\b/gi, "quêice");
  t = t.replace(/\broadies\b/gi, "ródiis");
  t = t.replace(/\broadie\b/gi, "ródii");
  t = t.replace(/\bmixers\b/gi, "míquissers");
  t = t.replace(/\bmixer\b/gi, "míquisser");
  t = t.replace(/\bcrossovers\b/gi, "cróssôvers");
  t = t.replace(/\bcrossover\b/gi, "cróssôver");
  t = t.replace(/\bsubwoofers\b/gi, "subwúfers");
  t = t.replace(/\bsubwoofer\b/gi, "subwúfer");
  t = t.replace(/\bwoofers\b/gi, "wúfers");
  t = t.replace(/\bwoofer\b/gi, "wúfer");
  t = t.replace(/\btweeters\b/gi, "tuíters");
  t = t.replace(/\btweeter\b/gi, "tuíter");
  t = t.replace(/\bdrivers\b/gi, "dráivers");
  t = t.replace(/\bdriver\b/gi, "dráiver");
  t = t.replace(/\bclipping\b/gi, "clípin");
  t = t.replace(/\bclips\b/gi, "clíps");
  t = t.replace(/\bclip\b/gi, "clípe");
  t = t.replace(/\bgains\b/gi, "guêins");
  t = t.replace(/\bgain\b/gi, "guêin");
  t = t.replace(/\bfaders\b/gi, "fêiders");
  t = t.replace(/\bfader\b/gi, "fêider");
  t = t.replace(/\bknobs\b/gi, "nóbs");
  t = t.replace(/\bknob\b/gi, "nóbe");
  t = t.replace(/\bpanning\b/gi, "pénin");
  t = t.replace(/\bpan\b/gi, "pén");
  t = t.replace(/\binputs\b/gi, "ínputes");
  t = t.replace(/\binput\b/gi, "ínpute");
  t = t.replace(/\boutputs\b/gi, "áutputes");
  t = t.replace(/\boutput\b/gi, "áutpute");
  t = t.replace(/\bpatching\b/gi, "pétchin");
  t = t.replace(/\bpatchs?\b/gi, "pétchi");
  t = t.replace(/\bsplitters\b/gi, "splíters");
  t = t.replace(/\bsplitter\b/gi, "splíter");
  t = t.replace(/\bsplits\b/gi, "splítes");
  t = t.replace(/\bsplit\b/gi, "splíte");
  t = t.replace(/\bsnakes\b/gi, "snêiques");
  t = t.replace(/\bsnake\b/gi, "snêique");
  t = t.replace(/\bmulticores\b/gi, "múlticores");
  t = t.replace(/\bmulticore\b/gi, "múlticore");
  t = t.replace(/\bdelays\b/gi, "diléis");
  t = t.replace(/\bdelay\b/gi, "diléi");
  t = t.replace(/\breverbs\b/gi, "rivérbes");
  t = t.replace(/\breverb\b/gi, "rivérbe");
  t = t.replace(/\bchorus\b/gi, "côrus");
  t = t.replace(/\bflangers\b/gi, "flêngers");
  t = t.replace(/\bflanger\b/gi, "flênger");
  t = t.replace(/\bphasers?\b/gi, "fêizer");
  t = t.replace(/\bcompressors\b/gi, "compressôres");
  t = t.replace(/\bcompressor\b/gi, "compressor");
  t = t.replace(/\blimiters\b/gi, "limíters");
  t = t.replace(/\blimiter\b/gi, "limíter");
  t = t.replace(/\bgates\b/gi, "guêites");
  t = t.replace(/\bgate\b/gi, "guêite");
  t = t.replace(/\bnoise gate\b/gi, "nóize guêite");
  t = t.replace(/\bgobos\b/gi, "gôbos");
  t = t.replace(/\bgobo\b/gi, "gôbo");
  t = t.replace(/\btrusses\b/gi, "trâsses");
  t = t.replace(/\btruss\b/gi, "trâsse");
  t = t.replace(/\brigging\b/gi, "ríguim");
  t = t.replace(/\brigger\b/gi, "ríger");
  t = t.replace(/\bhazers\b/gi, "rêizers");
  t = t.replace(/\bhazer\b/gi, "rêizer");
  t = t.replace(/\bhaze\b/gi, "rêize");
  t = t.replace(/\bfog\b/gi, "fóg");
  t = t.replace(/\bstrobes\b/gi, "estrôbis");
  t = t.replace(/\bstrobe\b/gi, "estróbi");
  t = t.replace(/\bdimmers\b/gi, "dímers");
  t = t.replace(/\bdimmer\b/gi, "dímer");
  t = t.replace(/\bdimming\b/gi, "dímin");
  t = t.replace(/\bwash\b/gi, "uósh");
  t = t.replace(/\bspot\b/gi, "espóte");
  t = t.replace(/\bbeam\b/gi, "bíim");
  t = t.replace(/\bprofile\b/gi, "profáile");
  t = t.replace(/\bfresnel\b/gi, "frenéu");
  t = t.replace(/\bflood\b/gi, "flâde");
  t = t.replace(/\bcue\b/gi, "quiú");
  t = t.replace(/\bcues\b/gi, "quiús");
  t = t.replace(/\bpresets\b/gi, "prisséts");
  t = t.replace(/\bpreset\b/gi, "prissét");
  t = t.replace(/\bscenes?\b/gi, "cíne");
  t = t.replace(/\bsnapshots?\b/gi, "snépchóte");
  t = t.replace(/\bplayback\b/gi, "plêibéque");
  t = t.replace(/\btimecode\b/gi, "táimcôde");
  t = t.replace(/\btimeout\b/gi, "táimáut");

  // ── DJ / Música ──
  t = t.replace(/\bbeatmatching\b/gi, "bítmétchin");
  t = t.replace(/\bbeatmatch\b/gi, "bítmétchi");
  t = t.replace(/\bbeatgrid\b/gi, "bítgríde");
  t = t.replace(/\bcrossfader\b/gi, "cróssfêider");
  t = t.replace(/\bjog\s*wheel\b/gi, "djóg uíl");
  t = t.replace(/\bpitch\b/gi, "pítch");
  t = t.replace(/\bbpm\b/gi, "bí pí ém");
  t = t.replace(/\bloop\b/gi, "lúpe");
  t = t.replace(/\bloops\b/gi, "lúpes");
  t = t.replace(/\blooping\b/gi, "lúpin");
  t = t.replace(/\bsampler\b/gi, "sémpler");
  t = t.replace(/\bsamples?\b/gi, "sémpol");
  t = t.replace(/\bsampling\b/gi, "sémplin");
  t = t.replace(/\bscratch\b/gi, "scrétchi");
  t = t.replace(/\bscratching\b/gi, "scrétchin");
  t = t.replace(/\bturnta?ble\b/gi, "târntêibou");
  t = t.replace(/\bdecks?\b/gi, "déque");
  t = t.replace(/\bcontroller\b/gi, "controlêr");
  t = t.replace(/\bcontrollers\b/gi, "controlêrs");
  t = t.replace(/\bbuild-?up\b/gi, "bíld âpe");
  t = t.replace(/\bdrop\b/gi, "drópe");
  t = t.replace(/\bdrops\b/gi, "drópes");
  t = t.replace(/\bbreakdown\b/gi, "brêicdáun");
  t = t.replace(/\bbreakdowns\b/gi, "brêicdáuns");
  t = t.replace(/\bmashup\b/gi, "méchâpe");
  t = t.replace(/\bremix\b/gi, "rimíques");
  t = t.replace(/\bremixes\b/gi, "rimíquises");
  t = t.replace(/\bbootleg\b/gi, "bútlegue");
  t = t.replace(/\bplaylist\b/gi, "plêilíste");
  t = t.replace(/\bplaylists\b/gi, "plêilístes");
  t = t.replace(/\bset\b/gi, "séte");
  t = t.replace(/\bsets\b/gi, "sétes");
  t = t.replace(/\bgig\b/gi, "guígue");
  t = t.replace(/\bgigs\b/gi, "guígues");
  t = t.replace(/\bwarmup\b/gi, "uôrm âpe");
  t = t.replace(/\bheadliner\b/gi, "réd láiner");
  t = t.replace(/\bopener\b/gi, "ôpener");
  t = t.replace(/\bcloser\b/gi, "clôuzer");
  t = t.replace(/\bafterhours?\b/gi, "áfter áuers");
  t = t.replace(/\bafter-?party\b/gi, "áfter párty");
  t = t.replace(/\brave\b/gi, "rêive");

  // ── VJ / Visual ──
  t = t.replace(/\bmapping\b/gi, "mépin");
  t = t.replace(/\bvideo mapping\b/gi, "vídiô mépin");
  t = t.replace(/\bprojection mapping\b/gi, "prodjéction mépin");
  t = t.replace(/\brendering\b/gi, "rénderin");
  t = t.replace(/\brender\b/gi, "rénder");
  t = t.replace(/\breal-?time\b/gi, "ríal táime");
  t = t.replace(/\bstreaming\b/gi, "strímin");
  t = t.replace(/\bstream\b/gi, "stríme");
  t = t.replace(/\blivestream\b/gi, "láive stríme");
  t = t.replace(/\bpixel\b/gi, "píquicel");
  t = t.replace(/\bpixels\b/gi, "píquicels");
  t = t.replace(/\bscreen\b/gi, "scrín");
  t = t.replace(/\bscreens\b/gi, "scríns");
  t = t.replace(/\bledwall\b/gi, "léd uól");
  t = t.replace(/\bpanel\b/gi, "péinol");
  t = t.replace(/\bpanels\b/gi, "péinols");
  t = t.replace(/\bdisplay\b/gi, "displêi");
  t = t.replace(/\bdisplays\b/gi, "displêis");
  t = t.replace(/\bprojector\b/gi, "prodjétor");
  t = t.replace(/\bprojectors\b/gi, "prodjétors");
  t = t.replace(/\bsoftware\b/gi, "sóftuér");
  t = t.replace(/\bhardware\b/gi, "rárduér");
  t = t.replace(/\bfirmware\b/gi, "fârmuér");
  t = t.replace(/\bplugin\b/gi, "plâguin");
  t = t.replace(/\bplugins\b/gi, "plâguins");

  // ── Produção e Gestão ──
  t = t.replace(/\bbriefings?\b/gi, "brífin");
  t = t.replace(/\bdeadline\b/gi, "déd láine");
  t = t.replace(/\bdeadlines\b/gi, "déd láines");
  t = t.replace(/\bchecklist\b/gi, "tchéque líste");
  t = t.replace(/\bchecklists\b/gi, "tchéque lístes");
  t = t.replace(/\bworkflow\b/gi, "uôrkflôu");
  t = t.replace(/\bworkflows\b/gi, "uôrkflôus");
  t = t.replace(/\btimeline\b/gi, "táimlaine");
  t = t.replace(/\btimelines\b/gi, "táimlaines");
  t = t.replace(/\bschedule\b/gi, "squédjul");
  t = t.replace(/\bbudget\b/gi, "bâdjet");
  t = t.replace(/\bbudgets\b/gi, "bâdjets");
  t = t.replace(/\bsponsors?\b/gi, "espônsor");
  t = t.replace(/\bsponsorship\b/gi, "espônsorship");
  t = t.replace(/\bbranding\b/gi, "bréndin");
  t = t.replace(/\bbrand\b/gi, "brénd");
  t = t.replace(/\bnetworking\b/gi, "nétuôrkin");
  t = t.replace(/\bnetwork\b/gi, "nétuôrke");
  t = t.replace(/\bmarketing\b/gi, "márquetin");
  t = t.replace(/\btarget\b/gi, "tárguete");
  t = t.replace(/\btargets\b/gi, "tárguetes");
  t = t.replace(/\bleads?\b/gi, "líde");
  t = t.replace(/\bcontent\b/gi, "contênt");
  t = t.replace(/\binsights?\b/gi, "ínsáite");
  t = t.replace(/\btrends?\b/gi, "trénde");
  t = t.replace(/\bstartup\b/gi, "startâpe");
  t = t.replace(/\bstartups\b/gi, "startâpes");
  t = t.replace(/\bpitch\b/gi, "pítchi");
  t = t.replace(/\bstakeholders?\b/gi, "stêiquêrrôulder");
  t = t.replace(/\boutsourcing\b/gi, "áutsôrcin");
  t = t.replace(/\bbenchmark\b/gi, "bêntchmárque");
  t = t.replace(/\bcoworking\b/gi, "couôrkin");
  t = t.replace(/\bhub\b/gi, "râbe");
  t = t.replace(/\bhubs\b/gi, "râbes");
  t = t.replace(/\bonline\b/gi, "onláine");
  t = t.replace(/\boffline\b/gi, "ófláine");
  t = t.replace(/\bwebsite\b/gi, "uébsáite");
  t = t.replace(/\blink\b/gi, "línque");
  t = t.replace(/\blinks\b/gi, "línques");
  t = t.replace(/\bemail\b/gi, "ímeiol");
  t = t.replace(/\be-mail\b/gi, "ímeiol");
  t = t.replace(/\bdownload\b/gi, "dáunlôude");
  t = t.replace(/\bupload\b/gi, "âplôude");
  t = t.replace(/\bbackup\b/gi, "béqueâpe");
  t = t.replace(/\bcloud\b/gi, "cláude");

  // ── Roadie / Estrutura ──
  t = t.replace(/\bfly system\b/gi, "flái sístema");
  t = t.replace(/\bchain hoist\b/gi, "tchêin rrôiste");
  t = t.replace(/\bchain hoists\b/gi, "tchêin rrôistes");
  t = t.replace(/\bhoist\b/gi, "rrôiste");
  t = t.replace(/\bhoists\b/gi, "rrôistes");
  t = t.replace(/\bsleeve\b/gi, "slíve");
  t = t.replace(/\bshackle\b/gi, "chéquol");
  t = t.replace(/\bshackles\b/gi, "chéquols");
  t = t.replace(/\bclamp\b/gi, "clémpe");
  t = t.replace(/\bclamps\b/gi, "clémpes");
  t = t.replace(/\bcoupler\b/gi, "câpler");
  t = t.replace(/\bcouplers\b/gi, "câplers");
  t = t.replace(/\bsafety\b/gi, "sêifti");
  t = t.replace(/\bsling\b/gi, "slíngue");
  t = t.replace(/\bslings\b/gi, "slíngues");
  t = t.replace(/\bcable\b/gi, "quêibol");
  t = t.replace(/\bcables\b/gi, "quêibols");
  t = t.replace(/\btape\b/gi, "têipe");
  t = t.replace(/\btapes\b/gi, "têipes");
  t = t.replace(/\bgaffer\b/gi, "géfer");
  t = t.replace(/\bgaffer tape\b/gi, "géfer têipe");
  t = t.replace(/\brack\b/gi, "réque");
  t = t.replace(/\bracks\b/gi, "réques");
  t = t.replace(/\bflight case\b/gi, "fláite quêice");
  t = t.replace(/\bflight cases\b/gi, "fláite quêices");
  t = t.replace(/\bstand\b/gi, "stênd");
  t = t.replace(/\bstands\b/gi, "stênds");
  t = t.replace(/\btripod\b/gi, "tráipode");
  t = t.replace(/\btripods\b/gi, "tráipodes");
  t = t.replace(/\bbase plate\b/gi, "bêice plêite");
  t = t.replace(/\bballast\b/gi, "balást");

  // ── Efeitos especiais ──
  t = t.replace(/\bpyro\b/gi, "páiro");
  t = t.replace(/\bpyrotechnics\b/gi, "pirotécnica");
  t = t.replace(/\bconfetti\b/gi, "conféti");
  t = t.replace(/\bcryogenics\b/gi, "criodjênica");
  t = t.replace(/\bcryo\b/gi, "cráio");
  t = t.replace(/\bCO2\b/g, " C O dois ");
  t = t.replace(/\bco2\b/g, " C O dois ");
  t = t.replace(/\bflame\b/gi, "flêime");
  t = t.replace(/\bflames\b/gi, "flêimes");
  t = t.replace(/\blaser\b/gi, "lêizer");
  t = t.replace(/\blasers\b/gi, "lêizers");
  t = t.replace(/\bsmoke\b/gi, "smôque");
  t = t.replace(/\bbubble\b/gi, "bâbol");
  t = t.replace(/\bbubbles\b/gi, "bâbols");
  t = t.replace(/\bsnow\b/gi, "snôu");
  t = t.replace(/\bsparkular\b/gi, "espárquilar");
  t = t.replace(/\bgerb\b/gi, "djêrbe");

  // ══════════════════════════════════════════════════════════
  // 6. SÍMBOLOS E NOTAÇÕES
  // ══════════════════════════════════════════════════════════
  t = t.replace(/\+/g, " mais ");
  t = t.replace(/(\d)\s*-\s*(\d)/g, "$1 a $2");
  t = t.replace(/(\d)\s*[xX]\s*(\d)/g, "$1 por $2");
  t = t.replace(/(\d)\s*%/g, "$1 por cento");
  t = t.replace(/°C/g, " graus celsius");
  t = t.replace(/°F/g, " graus fahrenheit");
  t = t.replace(/°/g, " graus ");
  t = t.replace(/\//g, " barra ");
  t = t.replace(/&/g, " e ");
  t = t.replace(/#/g, " número ");
  t = t.replace(/\*/g, " ");
  t = t.replace(/\bvs\.?\b/gi, " versus ");
  t = t.replace(/\betc\.?\b/gi, " etcétera ");
  t = t.replace(/\bex\.?\b/gi, " exemplo ");
  t = t.replace(/\bobs\.?\b/gi, " observação ");
  t = t.replace(/\bqtd\.?\b/gi, " quantidade ");
  t = t.replace(/\bmin\.?\b/gi, " minutos ");
  t = t.replace(/\bmáx\.?\b/gi, " máximo ");
  t = t.replace(/\bmín\.?\b/gi, " mínimo ");
  t = t.replace(/\baprox\.?\b/gi, " aproximadamente ");

  // ══════════════════════════════════════════════════════════
  // 7. PAUSAS NATURAIS E LIMPEZA
  // ══════════════════════════════════════════════════════════
  t = t.replace(/•\s*/g, ". ");
  t = t.replace(/(\d+)\.\s+/g, "$1, ");
  t = t.replace(/:\s*/g, ": ... ");
  t = t.replace(/\(/g, ", ");
  t = t.replace(/\)/g, ", ");
  t = t.replace(/\s{2,}/g, " ");
  t = t.replace(/\.\s*\./g, ".");

  return t.trim();
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { lessonId, text } = await req.json();
  if (!lessonId || !text) {
    return NextResponse.json({ error: "lessonId e text são obrigatórios" }, { status: 400 });
  }

  const supabase = createAdminClient();

  // Check if audio already exists in storage
  const storagePath = `tts/${lessonId}.mp3`;
  const { data: existing } = await supabase.storage
    .from("lesson-audio")
    .createSignedUrl(storagePath, 3600);

  if (existing?.signedUrl) {
    return NextResponse.json({ audioUrl: existing.signedUrl });
  }

  // Strip HTML preserving structure, then prepare for TTS
  const plainText = stripHtml(text);
  if (!plainText || plainText.length < 10) {
    return NextResponse.json({ error: "Conteúdo insuficiente para gerar áudio" }, { status: 400 });
  }

  const prepared = prepareTtsText(plainText);

  // Truncate very long texts (Edge TTS works best under ~5000 chars)
  const truncated = prepared.length > 5000
    ? prepared.slice(0, 5000) + "... Fim do conteúdo disponível em áudio."
    : prepared;

  try {
    // Generate audio with Edge TTS
    // Slightly slower rate for technical content readability
    const audioBuffer = await tts(truncated, {
      rate: "-5%",
      pitch: "+0Hz",
    });

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("lesson-audio")
      .upload(storagePath, audioBuffer, {
        contentType: "audio/mpeg",
        upsert: true,
      });

    if (uploadError) {
      console.error("[TTS] Upload error:", uploadError);
      // Return audio directly if storage upload fails
      return new NextResponse(new Uint8Array(audioBuffer), {
        headers: {
          "Content-Type": "audio/mpeg",
          "Content-Disposition": `inline; filename="lesson-${lessonId}.mp3"`,
        },
      });
    }

    // Get signed URL
    const { data: urlData } = await supabase.storage
      .from("lesson-audio")
      .createSignedUrl(storagePath, 3600);

    return NextResponse.json({ audioUrl: urlData?.signedUrl });
  } catch (error) {
    console.error("[TTS] Generation error:", error);
    return NextResponse.json(
      { error: "Erro ao gerar áudio. Tente novamente." },
      { status: 500 }
    );
  }
}
