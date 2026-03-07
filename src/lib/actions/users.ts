"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { UserRole } from "@/types/database";

async function assertAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  // Use admin client to bypass RLS (Clerk auth != Supabase auth, anon key has no session)
  // Use limit(1) instead of single() to avoid errors when clerk_id has no unique constraint
  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);
  const user = rows?.[0] ?? null;
  if (user?.role !== "admin") throw new Error("Acesso negado: apenas administradores");
  return userId;
}

/**
 * Verifica se o usuário atual é admin estrito.
 * Redireciona para /admin/cursos se for content_manager ou não tiver acesso.
 * Usar no topo de Server Components de páginas exclusivas de admin.
 */
export async function requireAdminRole() {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .limit(1);
  const role = rows?.[0]?.role ?? null;
  if (role !== "admin") redirect("/admin/cursos");
}

export async function getCurrentUser() {
  const { userId } = await auth();
  if (!userId) return null;

  // Use admin client to bypass RLS (Clerk auth != Supabase auth, anon key has no session)
  // Use limit(1) to safely handle cases where clerk_id may not have a unique constraint
  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("*")
    .eq("clerk_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);

  const data = rows?.[0] ?? null;
  console.log("[getCurrentUser] clerk_id:", userId, "found:", !!data, "role:", data?.role, "email:", data?.email);
  if (data) return data;

  // User exists in Clerk but not in Supabase — create the record automatically
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const email = clerkUser.emailAddresses?.[0]?.emailAddress ?? "";
  const nome =
    [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") ||
    clerkUser.username ||
    email.split("@")[0];

  const { data: newRows } = await supabase
    .from("users")
    .insert({
      id: crypto.randomUUID(), clerk_id: userId, email, nome,
      role: "trainee", projeto_cultural: false, ativo: true,
      avatar_url: clerkUser.imageUrl ?? null, bio: null,
      nivel_atual: "trainee", telefone: null, cidade: null,
      estado: null, ultimo_acesso: new Date().toISOString(),
    })
    .select()
    .limit(1);

  return newRows?.[0] ?? null;
}

export async function updateUserProfile(input: {
  nome?: string;
  bio?: string;
  telefone?: string;
  cidade?: string;
  estado?: string;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { error } = await supabase.from("users").update(input).eq("clerk_id", userId);
  if (error) throw error;

  revalidatePath("/dashboard/perfil");
}

// ============================================================
// Admin
// ============================================================

export async function adminGetUsers(page = 1, limit = 20, search = "", role = "", mit = "") {
  await assertAdmin();
  const supabase = createAdminClient();
  let query = supabase
    .from("users")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (search) {
    query = query.or(`nome.ilike.%${search}%,email.ilike.%${search}%`);
  }
  if (role) {
    query = query.eq("role", role as NonNullable<typeof role>);
  }
  if (mit === "1") {
    query = query.eq("projeto_cultural", true);
  }

  const { data, count, error } = await query;
  if (error) throw error;
  return { users: data ?? [], total: count ?? 0 };
}

export async function adminUpdateUserRole(userId: string, role: UserRole) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data: userRow, error } = await supabase.from("users").update({ role }).eq("clerk_id", userId).select("id").single();
  if (error) throw error;

  if (userRow) {
    await supabase.from("activity_log").insert({
      user_id: userRow.id,
      tipo: "role_change",
      descricao: `Role alterado para ${role}`,
      metadata: { new_role: role },
    });
  }

  revalidatePath("/admin/usuarios");
}

export async function adminToggleMIT(userId: string, projeto_cultural: boolean) {
  await assertAdmin();
  const supabase = createAdminClient();
  const newRole = projeto_cultural ? "projeto_cultural" : "trainee";
  await supabase
    .from("users")
    .update({ projeto_cultural, role: newRole })
    .eq("clerk_id", userId);
  revalidatePath("/admin/usuarios");
}

export async function adminEnrollUserManually(clerkId: string, courseId: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  // Resolver UUID do usuário (enrollments.user_id é uuid FK para users.id)
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", clerkId).single();
  if (!userRow) throw new Error("Usuário não encontrado");
  const { error } = await supabase.from("enrollments").upsert(
    {
      user_id: userRow.id,
      course_id: courseId,
      tipo_acesso: "manual",
      status: "ativo",
    },
    { onConflict: "user_id,course_id" }
  );
  if (error) throw error;
  revalidatePath("/admin/usuarios");
}

export async function adminGetDashboardMetrics() {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("admin_dashboard_metrics")
    .select("*")
    .single();
  if (error) throw error;
  return data;
}
