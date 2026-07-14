import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

// Upload de arquivo grande de áudio — precisa de body maior e sem cache.
export const runtime = "nodejs";
export const maxDuration = 60;

async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) return { error: NextResponse.json({ error: "Não autenticado" }, { status: 401 }) };
  const supabase = createAdminClient();
  const { data: user } = await (supabase as any)
    .from("users").select("role").eq("clerk_id", userId).limit(1);
  if (!user?.[0] || !["admin", "content_manager"].includes(user[0].role)) {
    return { error: NextResponse.json({ error: "Sem permissão" }, { status: 403 }) };
  }
  return { supabase };
}

const AUDIO_EXT = ["mp3", "wav", "m4a", "aiff", "aif", "flac", "ogg"];
const CT: Record<string, string> = {
  mp3: "audio/mpeg", wav: "audio/wav", m4a: "audio/mp4",
  aiff: "audio/aiff", aif: "audio/aiff", flac: "audio/flac", ogg: "audio/ogg",
};

/** GET /api/admin/bases/upload?folder=xxx — lista arquivos já presentes na pasta (para resume/preview). */
export async function GET(req: NextRequest) {
  const { supabase, error } = await requireAdmin();
  if (error) return error;
  const folder = new URL(req.url).searchParams.get("folder")?.trim();
  if (!folder) return NextResponse.json({ error: "folder obrigatório" }, { status: 400 });

  const { data, error: e } = await (supabase as any).storage.from("media").list(folder, { limit: 1000 });
  if (e) return NextResponse.json({ error: e.message }, { status: 500 });
  const files = (data ?? []).filter((f: any) => f.name && !f.name.startsWith(".")).map((f: any) => f.name);
  return NextResponse.json({ files });
}

/**
 * POST /api/admin/bases/upload — multipart: campos `folder` + `file`.
 * Envia UM arquivo por request (o cliente faz sequencial p/ progresso + resume).
 * `skipExisting=1` pula se o arquivo já existe (upload não sobrescreve por padrão).
 */
export async function POST(req: NextRequest) {
  const { supabase, error } = await requireAdmin();
  if (error) return error;

  const form = await req.formData();
  const folder = String(form.get("folder") ?? "").trim();
  const file = form.get("file");
  const skipExisting = String(form.get("skipExisting") ?? "1") === "1";

  if (!folder) return NextResponse.json({ error: "folder obrigatório" }, { status: 400 });
  if (!(file instanceof File)) return NextResponse.json({ error: "file obrigatório" }, { status: 400 });

  const name = file.name;
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (!AUDIO_EXT.includes(ext)) {
    return NextResponse.json({ error: `Extensão não suportada: .${ext}` }, { status: 415 });
  }

  const path = `${folder}/${name}`;

  if (skipExisting) {
    const { data: existing } = await (supabase as any).storage.from("media").list(folder, { limit: 1000, search: name });
    if (Array.isArray(existing) && existing.some((f: any) => f.name === name)) {
      return NextResponse.json({ skipped: true, path });
    }
  }

  const buf = Buffer.from(await file.arrayBuffer());
  const { error: upErr } = await (supabase as any).storage.from("media").upload(path, buf, {
    contentType: CT[ext] ?? "application/octet-stream",
    upsert: true,
    cacheControl: "3600",
  });
  if (upErr) return NextResponse.json({ error: upErr.message }, { status: 500 });

  return NextResponse.json({ uploaded: true, path });
}
