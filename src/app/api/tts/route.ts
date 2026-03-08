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
 * Expands abbreviations, handles numbers/units, and adds natural pauses.
 */
function prepareTtsText(text: string): string {
  let t = text;

  // ── Unidades e abreviações técnicas (som/luz/produção) ──
  t = t.replace(/\bdB\b/g, " decibéis");
  t = t.replace(/\bdBu\b/g, " d b u");
  t = t.replace(/\bdBV\b/g, " d b v");
  t = t.replace(/\bdBFS\b/gi, " d b f s");
  t = t.replace(/\bdBSPL\b/gi, " d b s p l");
  t = t.replace(/\bSPL\b/g, " s p l");
  t = t.replace(/(\d+)\s*Hz\b/gi, "$1 hertz");
  t = t.replace(/(\d+)\s*kHz\b/gi, "$1 quilohertz");
  t = t.replace(/(\d+)\s*MHz\b/gi, "$1 megahertz");
  t = t.replace(/(\d+)\s*ms\b/g, "$1 milissegundos");
  t = t.replace(/(\d+)\s*W\b/g, "$1 watts");
  t = t.replace(/(\d+)\s*kW\b/gi, "$1 quilowatts");
  t = t.replace(/(\d+)\s*V\b/g, "$1 volts");
  t = t.replace(/(\d+)\s*A\b/g, "$1 amperes");
  t = t.replace(/(\d+)\s*Ω\b/g, "$1 ohms");
  t = t.replace(/(\d+)\s*lux\b/gi, "$1 lux");
  t = t.replace(/(\d+)\s*lm\b/g, "$1 lúmens");
  t = t.replace(/(\d+)\s*cd\b/g, "$1 candelas");
  t = t.replace(/(\d+)\s*BPM\b/gi, "$1 batidas por minuto");
  t = t.replace(/(\d+)\s*RPM\b/gi, "$1 rotações por minuto");

  // ── Siglas da área de eventos ──
  t = t.replace(/\bPA\b/g, " P A ");
  t = t.replace(/\bFOH\b/g, " F O H ");
  t = t.replace(/\bXLR\b/g, " X L R ");
  t = t.replace(/\bTRS\b/g, " T R S ");
  t = t.replace(/\bTS\b/g, " T S ");
  t = t.replace(/\bRCA\b/g, " R C A ");
  t = t.replace(/\bDMX\b/g, " D M X ");
  t = t.replace(/\bLED\b/g, " L E D ");
  t = t.replace(/\bRGB\b/g, " R G B ");
  t = t.replace(/\bCMY\b/g, " C M Y ");
  t = t.replace(/\bPAR\b/g, " par ");
  t = t.replace(/\bEQ\b/g, " equalizador ");
  t = t.replace(/\bDAW\b/g, " D A W ");
  t = t.replace(/\bMIDI\b/g, " M I D I ");
  t = t.replace(/\bUSB\b/g, " U S B ");
  t = t.replace(/\bHDMI\b/g, " H D M I ");
  t = t.replace(/\bSDI\b/g, " S D I ");
  t = t.replace(/\bIP\b/g, " I P ");
  t = t.replace(/\bDJ\b/g, " D J ");
  t = t.replace(/\bVJ\b/g, " V J ");
  t = t.replace(/\bMC\b/g, " M C ");
  t = t.replace(/\bAC\b/g, " corrente alternada ");
  t = t.replace(/\bDC\b/g, " corrente contínua ");
  t = t.replace(/\bP&D\b/gi, " P e D ");
  t = t.replace(/\bNR-?10\b/gi, " N R dez ");
  t = t.replace(/\bNR-?12\b/gi, " N R doze ");
  t = t.replace(/\bABNT\b/g, " A B N T ");
  t = t.replace(/\bCLT\b/g, " C L T ");
  t = t.replace(/\bMEI\b/g, " M E I ");
  t = t.replace(/\bCNPJ\b/g, " C N P J ");

  // ── Termos musicais e técnicos comuns ──
  t = t.replace(/\bfeedback\b/gi, "fidbéque");
  t = t.replace(/\bsetup\b/gi, "setápe");
  t = t.replace(/\brider\b/gi, "ráider");
  t = t.replace(/\bbackline\b/gi, "béquelaine");
  t = t.replace(/\bsound check\b/gi, "saund tchéque");
  t = t.replace(/\bsoundcheck\b/gi, "saund tchéque");
  t = t.replace(/\bline check\b/gi, "laine tchéque");
  t = t.replace(/\bstage\b/gi, "stêidge");
  t = t.replace(/\bcatering\b/gi, "quêiterin");
  t = t.replace(/\bfreelancer\b/gi, "frilâncer");
  t = t.replace(/\bfreelance\b/gi, "frilânce");
  t = t.replace(/\bcase\b/gi, "quêice");
  t = t.replace(/\bcases\b/gi, "quêices");
  t = t.replace(/\broadie\b/gi, "ródii");
  t = t.replace(/\bmixer\b/gi, "míquisser");
  t = t.replace(/\bcrossover\b/gi, "cróssôver");
  t = t.replace(/\bsubwoofer\b/gi, "subwúfer");
  t = t.replace(/\bwoofer\b/gi, "wúfer");
  t = t.replace(/\btweeter\b/gi, "tuíter");
  t = t.replace(/\bdriver\b/gi, "dráiver");
  t = t.replace(/\bclipping\b/gi, "clípin");
  t = t.replace(/\bgain\b/gi, "guêin");
  t = t.replace(/\bfader\b/gi, "fêider");
  t = t.replace(/\bpan\b/gi, "pén");
  t = t.replace(/\binput\b/gi, "ínpute");
  t = t.replace(/\boutput\b/gi, "áutpute");
  t = t.replace(/\bpatch\b/gi, "pétchi");
  t = t.replace(/\bsplit\b/gi, "splíte");
  t = t.replace(/\bsplitter\b/gi, "splíter");
  t = t.replace(/\bsnake\b/gi, "snêique");
  t = t.replace(/\bmulticore\b/gi, "múlticor");
  t = t.replace(/\bdelay\b/gi, "diléi");
  t = t.replace(/\breverb\b/gi, "rivérbe");
  t = t.replace(/\bchorus\b/gi, "côrus");
  t = t.replace(/\bflanger\b/gi, "flênger");
  t = t.replace(/\bcompressor\b/gi, "compressor");
  t = t.replace(/\blimiter\b/gi, "limíter");
  t = t.replace(/\bgate\b/gi, "guêite");
  t = t.replace(/\bgobo\b/gi, "gôbo");
  t = t.replace(/\btruss\b/gi, "trâsse");
  t = t.replace(/\brigging\b/gi, "ríguim");
  t = t.replace(/\bground support\b/gi, "gráund supórte");
  t = t.replace(/\bfly\b/gi, "flái");
  t = t.replace(/\bhaze\b/gi, "rêize");
  t = t.replace(/\bhazer\b/gi, "rêizer");
  t = t.replace(/\bfog\b/gi, "fóg");
  t = t.replace(/\bstrobe\b/gi, "estróbi");
  t = t.replace(/\bmoving head\b/gi, "múvin réd");
  t = t.replace(/\bwash\b/gi, "uósh");
  t = t.replace(/\bspot\b/gi, "espóte");
  t = t.replace(/\bbeam\b/gi, "bíim");
  t = t.replace(/\bfollow spot\b/gi, "fólou espóte");
  t = t.replace(/\bdimmer\b/gi, "dímer");

  // ── Símbolos e notações ──
  t = t.replace(/\+/g, " mais ");
  t = t.replace(/(\d)\s*-\s*(\d)/g, "$1 a $2"); // "10-20" → "10 a 20"
  t = t.replace(/(\d)\s*x\s*(\d)/g, "$1 por $2"); // "4x3" → "4 por 3"
  t = t.replace(/(\d)\s*%/g, "$1 por cento");
  t = t.replace(/°C/g, " graus celsius");
  t = t.replace(/°/g, " graus ");
  t = t.replace(/\//g, " barra ");
  t = t.replace(/&/g, " e ");
  t = t.replace(/#/g, " número ");
  t = t.replace(/\*/g, " ");

  // ── Listas: adicionar pausa após bullet points ──
  t = t.replace(/•\s*/g, ". ");
  t = t.replace(/(\d+)\.\s+/g, "$1, ");

  // ── Adicionar pausas naturais ──
  // Pausa após dois pontos (contexto explicativo)
  t = t.replace(/:\s*/g, ": ... ");
  // Pausa entre parênteses (apartes)
  t = t.replace(/\(/g, ", ");
  t = t.replace(/\)/g, ", ");

  // ── Limpar espaços extras ──
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
