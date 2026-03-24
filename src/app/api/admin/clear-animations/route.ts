import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

/**
 * DELETE /api/admin/clear-animations
 * Limpa TODAS as simulações interativas do banco (ai_animations).
 * Somente admin pode executar.
 */
export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Não autenticado" }, { status: 401 });
  }

  const supabase = createAdminClient();

  // Verificar se é admin
  const { data: user } = await (supabase as any)
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .limit(1);

  if (!user || user.length === 0 || !["admin", "content_manager"].includes(user[0].role)) {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 });
  }

  // Limpar todos os registros de ai_animations
  const { error, count } = await (supabase as any)
    .from("ai_animations")
    .delete()
    .neq("id", "00000000-0000-0000-0000-000000000000"); // deleta tudo

  if (error) {
    console.error("[Admin] Clear animations error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  // Limpar também ai_explanations do tipo refined_content
  await (supabase as any)
    .from("ai_explanations")
    .delete()
    .eq("tipo", "refined_content");

  console.log(`[Admin] Cleared all ai_animations and refined content`);

  return NextResponse.json({ success: true, message: "Todas as simulações foram limpas" });
}
