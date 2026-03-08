import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { tts } from "@/lib/edge-tts";

function stripHtml(html: string): string {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
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

  // Strip HTML and limit text length (Edge TTS has limits)
  const plainText = stripHtml(text);
  if (!plainText || plainText.length < 10) {
    return NextResponse.json({ error: "Conteúdo insuficiente para gerar áudio" }, { status: 400 });
  }

  // Truncate very long texts (Edge TTS works best under ~5000 chars)
  const truncated = plainText.length > 5000
    ? plainText.slice(0, 5000) + "... Fim do conteúdo disponível em áudio."
    : plainText;

  try {
    // Generate audio with Edge TTS
    const audioBuffer = await tts(truncated, {
      rate: "+5%", // Slightly faster for studying
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
