import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import type { UserRole } from "@/types/database";

export type AdminGuard = { userId: string; userUuid: string; role: UserRole };

/**
 * Guard central para Server Actions/rotas de escrita administrativa.
 *
 * Existe porque `"use server"` transforma todo export em endpoint HTTP: sem este
 * guard, a action roda com service_role (bypassa RLS) para qualquer um que
 * descubra o Next-Action id. Checa role permitido E `ativo` (conta desativada
 * ainda assina POSTs — o gate de layout só cobre navegação de página).
 *
 * Default admin + content_manager (gestão de conteúdo). Passe ["admin"] para
 * operações que exigem admin estrito.
 */
export async function assertAdmin(
  allowed: UserRole[] = ["admin", "content_manager"],
): Promise<AdminGuard> {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("id, role, ativo")
    .eq("clerk_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);

  const u = rows?.[0];
  if (!u) throw new Error("Usuário não encontrado");
  if (u.ativo === false) throw new Error("Conta desativada");
  if (!allowed.includes(u.role as UserRole)) throw new Error("Acesso negado");

  return { userId, userUuid: u.id as string, role: u.role as UserRole };
}
