import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

/** Confere se o usuário logado é admin/content_manager. Retorna o client de service_role. */
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

/** GET /api/admin/bases — lista TODAS as bases (ativas e inativas) para o admin. */
export async function GET() {
  const { supabase, error } = await requireAdmin();
  if (error) return error;

  const { data, error: dbErr } = await (supabase as any)
    .from("sim_bases")
    .select("id,label,folder,ordem,ativo,stems,created_at")
    .order("ordem", { ascending: true })
    .order("created_at", { ascending: true });

  if (dbErr) return NextResponse.json({ error: dbErr.message }, { status: 500 });
  return NextResponse.json({ bases: data ?? [] });
}

/** POST /api/admin/bases — cria uma nova base. Body: {label, folder, ordem?, ativo?, stems} */
export async function POST(req: NextRequest) {
  const { supabase, error } = await requireAdmin();
  if (error) return error;

  let body: any;
  try { body = await req.json(); } catch { return NextResponse.json({ error: "JSON inválido" }, { status: 400 }); }

  const label = String(body?.label ?? "").trim();
  const folder = String(body?.folder ?? "").trim();
  if (!label) return NextResponse.json({ error: "Nome (label) obrigatório" }, { status: 400 });
  if (!folder) return NextResponse.json({ error: "Pasta (folder) obrigatória" }, { status: 400 });

  const stems = Array.isArray(body?.stems) ? body.stems : [];
  const row = {
    label,
    folder,
    ordem: Number.isFinite(body?.ordem) ? Math.trunc(body.ordem) : 0,
    ativo: body?.ativo === undefined ? true : !!body.ativo,
    stems,
  };

  const { data, error: dbErr } = await (supabase as any)
    .from("sim_bases").insert(row).select().limit(1);

  if (dbErr) {
    const status = /duplicate|unique/i.test(dbErr.message) ? 409 : 500;
    return NextResponse.json({ error: dbErr.message }, { status });
  }
  return NextResponse.json({ base: data?.[0] ?? null });
}
