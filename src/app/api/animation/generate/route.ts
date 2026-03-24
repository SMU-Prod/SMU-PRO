import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { generateLessonContent } from "@/lib/interactive-engine";
import { getMemories, learnFromGeneration } from "@/lib/ai-memory";
import { tts } from "@/lib/edge-tts";
import { rateLimit } from "@/lib/rate-limit";
import type { CourseCategory } from "@/types/database";

/**
 * POST /api/animation/generate
 *
 * Pipeline v9 HÍBRIDO:
 *   GPT-4o-mini (4 camadas de análise + widgets React + prompts de imagem)
 *   → gpt-image-1-mini (imagens didáticas)
 *   → Edge TTS (narração)
 *
 * Custo: ~$0.065/aula (mix de widgets + imagens)
 */
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { success } = await rateLimit(`ai:${userId}`, 3, 60000);
  if (!success) {
    return NextResponse.json({ error: "Muitas requisições. Aguarde 1 minuto." }, { status: 429 });
  }

  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OPENAI_API_KEY não configurada" },
      { status: 500 }
    );
  }

  const body = await req.json();
  const {
    lessonId,
    titulo,
    conteudo,
    categoria = "som",
    force = false,
  } = body as {
    lessonId: string;
    titulo: string;
    conteudo: string;
    categoria: CourseCategory;
    force?: boolean;
  };

  if (!lessonId || !conteudo) {
    return NextResponse.json(
      { error: "lessonId e conteudo são obrigatórios" },
      { status: 400 }
    );
  }

  const tipo = "interactive";
  const supabase = createAdminClient();

  // ── Check cache ──
  if (!force) {
    const { data: cached } = await (supabase as any)
      .from("ai_animations")
      .select("*")
      .eq("lesson_id", lessonId)
      .eq("tipo", tipo)
      .eq("status", "ready")
      .limit(1);

    if (cached && cached.length > 0) {
      const hasHtml = cached[0].urls?.some((u: any) => u.html || u.image);
      if (hasHtml) {
        return NextResponse.json(cached[0]);
      }
      console.log(`[ContentEngine] Stale cache — regenerating...`);
    }
  }

  // ── Mark as generating ──
  await (supabase as any).from("ai_animations").upsert(
    {
      lesson_id: lessonId,
      tipo,
      status: "generating",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "lesson_id,tipo" }
  );

  try {
    // Ler memória da IA para esta categoria
    let memoria: string | undefined;
    try {
      memoria = await getMemories(categoria, 8) || undefined;
      if (memoria) console.log(`[Engine] Memory loaded: ${memoria.split("\n").length} entries`);
    } catch { /* memory table may not exist yet */ }

    // Pipeline v9: GPT-4.1 análise + widgets + imagens
    const result = await generateLessonContent(titulo, conteudo, categoria, memoria);

    console.log(`[ContentEngine] Uploading ${result.scenes.length} scenes...`);

    const sceneUrls = [];
    for (let i = 0; i < result.scenes.length; i++) {
      const scene = result.scenes[i];
      const urls: Record<string, string> = {};

      // Widget: armazenar HTML inline para srcdoc
      if (scene.modo === "widget" && scene.final_html) {
        urls.html = scene.final_html;
        console.log(`[ContentEngine] ✓ Widget ${i + 1} stored (${(scene.final_html.length / 1024).toFixed(1)}KB)`);
      }

      // Imagem: upload para Supabase Storage
      if (scene.modo === "image") {
        let imgBuffer: Buffer | null = null;

        if (scene.image_b64) {
          imgBuffer = Buffer.from(scene.image_b64, "base64");
        } else if (scene.image_url) {
          try {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 15000);
            try {
              const res = await fetch(scene.image_url, { signal: controller.signal });
              if (res.ok) imgBuffer = Buffer.from(await res.arrayBuffer());
            } finally {
              clearTimeout(timeout);
            }
          } catch { /* skip */ }
        }

        if (imgBuffer) {
          const imgPath = `animations/${lessonId}/interactive/scene-${i + 1}.png`;
          const { error: imgErr } = await supabase.storage
            .from("media")
            .upload(imgPath, imgBuffer, { contentType: "image/png", upsert: true });

          if (!imgErr) {
            const { data: urlData } = supabase.storage.from("media").getPublicUrl(imgPath);
            urls.image = urlData.publicUrl;
            console.log(`[ContentEngine] ✓ Image ${i + 1} uploaded (${(imgBuffer.length / 1024).toFixed(0)}KB)`);
          }
        }
      }

      // TTS narração
      if (scene.narracao) {
        try {
          const audioBuffer = await tts(scene.narracao);
          const audioPath = `animations/${lessonId}/interactive/narration-${i + 1}.mp3`;
          const { error: audioErr } = await supabase.storage
            .from("media")
            .upload(audioPath, audioBuffer, { contentType: "audio/mpeg", upsert: true });

          if (!audioErr) {
            const { data: audioUrl } = supabase.storage.from("media").getPublicUrl(audioPath);
            urls.audio = audioUrl.publicUrl;
          }
        } catch (e) {
          console.error(`[ContentEngine] TTS error scene ${i + 1}:`, e);
        }
      }

      sceneUrls.push(urls);
    }

    const record = {
      lesson_id: lessonId,
      tipo,
      status: "ready",
      roteiro: result.script,
      urls: sceneUrls,
      model: "gpt-4.1+hybrid-v9",
      custo_usd: result.cost_estimate_usd,
      updated_at: new Date().toISOString(),
    };

    await (supabase as any)
      .from("ai_animations")
      .upsert(record, { onConflict: "lesson_id,tipo" });

    // IA aprende com esta geração
    try {
      const widgetCount = result.scenes.filter(s => s.final_html).length;
      const imageCount = result.scenes.filter(s => s.image_b64 || s.image_url).length;
      await learnFromGeneration(
        categoria,
        titulo,
        result.scenes.length,
        widgetCount,
        imageCount,
        result.script.classificacao?.nivel || "basico",
        result.script.diagnostico?.nota_geral || ""
      );
    } catch { /* memory table may not exist yet */ }

    return NextResponse.json(record);
  } catch (error) {
    console.error("[ContentEngine] Pipeline error:", error);

    await (supabase as any)
      .from("ai_animations")
      .update({ status: "error", updated_at: new Date().toISOString() })
      .eq("lesson_id", lessonId)
      .eq("tipo", tipo);

    return NextResponse.json(
      { error: "Erro ao gerar conteúdo. Tente novamente." },
      { status: 500 }
    );
  }
}

/**
 * GET /api/animation/generate?lessonId=xxx&tipo=interactive
 */
export async function GET(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const lessonId = searchParams.get("lessonId");
  const tipo = searchParams.get("tipo") || "interactive";

  if (!lessonId) {
    return NextResponse.json({ error: "lessonId obrigatório" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data } = await (supabase as any)
    .from("ai_animations")
    .select("*")
    .eq("lesson_id", lessonId)
    .eq("tipo", tipo)
    .limit(1);

  if (!data || data.length === 0) {
    return NextResponse.json({ status: "not_found" });
  }

  const record = data[0];

  // Invalidar cache antigo sem HTML inline
  if (record.status === "ready") {
    const hasContent = record.urls?.some((u: any) => u.html || u.image);
    if (!hasContent) {
      await (supabase as any)
        .from("ai_animations")
        .delete()
        .eq("lesson_id", lessonId)
        .eq("tipo", tipo);
      return NextResponse.json({ status: "not_found" });
    }
  }

  return NextResponse.json(record);
}
