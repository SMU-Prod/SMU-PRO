import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

/**
 * POST /api/admin/run-migration
 * Verifica estado do banco e limpa cache. Somente admin.
 */
export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Não autenticado" }, { status: 401 });

  const supabase = createAdminClient();

  const { data: user } = await (supabase as any)
    .from("users").select("role").eq("clerk_id", userId).limit(1);

  if (!user?.[0] || user[0].role !== "admin") {
    return NextResponse.json({ error: "Sem permissão" }, { status: 403 });
  }

  const results: string[] = [];

  // 1. Testar se coluna 'tipo' existe em ai_explanations
  const { data: t1, error: e1 } = await (supabase as any)
    .from("ai_explanations").select("tipo").limit(1);
  results.push(e1 ? `✗ tipo: ${e1.message}` : "✓ coluna tipo OK");

  // 2. Testar se coluna 'content' existe
  const { data: t2, error: e2 } = await (supabase as any)
    .from("ai_explanations").select("content").limit(1);
  results.push(e2 ? `✗ content: ${e2.message}` : "✓ coluna content OK");

  // 3. Testar tabela ai_memory
  const { error: e3 } = await (supabase as any)
    .from("ai_memory").select("id").limit(1);
  results.push(e3 ? `✗ ai_memory: ${e3.message}` : "✓ tabela ai_memory OK");

  // 4. Limpar ai_animations (cache stale)
  const { error: e4 } = await (supabase as any)
    .from("ai_animations").delete().neq("id", "00000000-0000-0000-0000-000000000000");
  results.push(e4 ? `✗ clear animations: ${e4.message}` : "✓ ai_animations limpo");

  // 5. Limpar ai_explanations refined
  const { error: e5 } = await (supabase as any)
    .from("ai_explanations").delete().eq("tipo", "refined_content");
  results.push(e5 ? `✗ clear refined: ${e5.message}` : "✓ refined_content limpo");

  return NextResponse.json({ results });
}
