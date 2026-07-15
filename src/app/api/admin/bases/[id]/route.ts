import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

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

/** PATCH /api/admin/bases/[id] — atualiza label/ordem/ativo/stems. `folder` é imutável. */
export async function PATCH(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { supabase, error } = await requireAdmin();
  if (error) return error;
  const { id } = await ctx.params;

  let body: any;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "JSON inválido" }, { status: 400 }); }

  const patch: any = {};
  if (typeof body?.label === "string") patch.label = body.label.trim();
  if (Number.isFinite(body?.ordem)) patch.ordem = Math.trunc(body.ordem);
  if (typeof body?.ativo === "boolean") patch.ativo = body.ativo;
  if (Array.isArray(body?.stems)) patch.stems = body.stems;
  // folder NUNCA é atualizado — é a chave da pasta no Storage.

  if (Object.keys(patch).length === 0) {
    return NextResponse.json({ error: "Nada para atualizar" }, { status: 400 });
  }

  const { data, error: dbErr } = await (supabase as any)
    .from("sim_bases").update(patch).eq("id", id).select().limit(1);

  if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 });
  if (!data?.[0]) return NextResponse.json({ error: "Base não encontrada" }, { status: 404 });
  return NextResponse.json({ base: data[0] });
}

/**
 * DELETE /api/admin/bases/[id] — remove a base do banco.
 * Por padrão NÃO apaga os arquivos do Storage (só o registro).
 * Passe ?storage=1 para também apagar a pasta media/<folder>/ inteira.
 */
export async function DELETE(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  const { supabase, error } = await requireAdmin();
  if (error) return error;
  const { id } = await ctx.params;
  const alsoStorage = new URL(req.url).searchParams.get("storage") === "1";

  // Busca o folder antes de apagar (necessário se for limpar o Storage).
  const { data: existing } = await (supabase as any)
    .from("sim_bases").select("folder").eq("id", id).limit(1);
  const folder: string | undefined = existing?.[0]?.folder;
  if (!folder) return NextResponse.json({ error: "Base não encontrada" }, { status: 404 });

  let removedFiles = 0;
  if (alsoStorage) {
    const { data: files } = await (supabase as any).storage.from("media").list(folder, { limit: 1000 });
    if (Array.isArray(files) && files.length) {
      const paths = files.map((f: any) => `${folder}/${f.name}`);
      const { error: rmErr } = await (supabase as any).storage.from("media").remove(paths);
      if (rmErr) return NextResponse.json({ error: `Falha ao apagar arquivos: ${rmErr.message}` }, { status: 500 });
      removedFiles = paths.length;
    }
  }

  const { error: dbErr } = await (supabase as any).from("sim_bases").delete().eq("id", id);
  if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 });

  return NextResponse.json({ success: true, removedFiles, storageDeleted: alsoStorage });
}
