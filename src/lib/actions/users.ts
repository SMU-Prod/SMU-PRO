"use server";

import { auth, currentUser, clerkClient } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createNotification } from "@/lib/actions/notifications";
import { assertOwner } from "@/lib/auth/owner";
import { parseProfileUpdate } from "@/lib/validations";
import type { UserRole } from "@/types/database";

async function assertAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  // Use admin client to bypass RLS (Clerk auth != Supabase auth, anon key has no session)
  // Use limit(1) instead of single() to avoid errors when clerk_id has no unique constraint
  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("role, ativo")
    .eq("clerk_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);
  const user = rows?.[0] ?? null;
  if (user?.ativo === false) throw new Error("Conta desativada");
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
    .select("role, ativo")
    .eq("clerk_id", userId)
    .limit(1);
  const row = rows?.[0] ?? null;
  if (row?.ativo === false) redirect("/conta-desativada");
  if (row?.role !== "admin") redirect("/admin/cursos");
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
  cpf?: string;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  // NUNCA repassar o input do cliente direto ao .update() com service_role:
  // um POST com {role:"admin"} escalaria privilégio. Allowlist no servidor.
  const dados = parseProfileUpdate(input);

  const supabase = createAdminClient();
  const { error } = await supabase.from("users").update(dados).eq("clerk_id", userId);
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
    query = query.eq("role", role as UserRole);
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

    const roleLabels: Record<string, string> = {
      admin: "Administrador", content_manager: "Gestor de Conteúdo",
      projeto_cultural: "Projeto Cultural MIT", pleno: "Pleno", junior: "Junior", trainee: "Trainee",
    };
    createNotification({
      userUuid: userRow.id,
      tipo: "role_change",
      titulo: `Seu nível foi atualizado para ${roleLabels[role] ?? role}`,
      mensagem: "Suas permissões e acessos foram atualizados.",
      link: "/dashboard",
    }).catch(() => {});
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

  // Se ativando MIT → matricular automaticamente em TODOS os cursos ativos
  if (projeto_cultural) {
    const { data: userRow } = await supabase
      .from("users")
      .select("id, nome")
      .eq("clerk_id", userId)
      .single();

    if (userRow) {
      const { data: allCourses } = await supabase
        .from("courses")
        .select("id, titulo, slug")
        .eq("ativo", true);

      const enrollErrors: string[] = [];
      for (const course of allCourses ?? []) {
        const { error } = await supabase.from("enrollments").upsert(
          {
            user_id: userRow.id,
            course_id: course.id,
            tipo_acesso: "projeto_cultural",
            status: "ativo",
          },
          { onConflict: "user_id,course_id" }
        );
        if (error) enrollErrors.push(`${course.titulo}: ${error.message}`);
      }

      // Notificar o aluno
      createNotification({
        userUuid: userRow.id,
        tipo: "enrollment",
        titulo: "Bem-vindo ao Projeto MIT!",
        mensagem: `Seu acesso foi liberado a ${(allCourses ?? []).length} cursos gratuitamente. Bons estudos!`,
        link: "/dashboard",
      }).catch(() => {});

      if (enrollErrors.length > 0) {
        console.error("[MIT] Erros ao matricular:", enrollErrors);
      }
    }
  }

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

  // Notify user about manual enrollment
  const { data: course } = await supabase.from("courses").select("titulo, slug").eq("id", courseId).single();
  if (course) {
    createNotification({
      userUuid: userRow.id,
      tipo: "enrollment",
      titulo: `Acesso liberado: ${course.titulo}`,
      mensagem: "Um administrador liberou seu acesso a este curso. Bons estudos!",
      link: `/cursos/${course.slug}`,
    }).catch(() => {});
  }

  revalidatePath("/admin/usuarios");
}

// ============================================================
// ODIN (dono) — controle máximo: acesso e senhas
// ============================================================

/** Senha temporária forte (cross-runtime, via Web Crypto). */
function generateTempPassword(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789!@#$%&*";
  const arr = new Uint32Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr, (n) => chars[n % chars.length]).join("");
}

/**
 * Desativa/reativa uma conta. EXCLUSIVO DO ODIN.
 * - Marca ativo=false/true no banco (o app bloqueia o acesso mesmo com sessão viva).
 * - Revoga/restaura a sessão no Clerk (ban/unban) para matar o acesso na hora.
 */
export async function ownerSetUserActive(clerkId: string, active: boolean) {
  await assertOwner();
  const supabase = createAdminClient();
  const { data: userRow, error } = await supabase
    .from("users")
    .update({ ativo: active })
    .eq("clerk_id", clerkId)
    .select("id")
    .single();
  if (error) throw error;

  // Revoga/restaura a sessão no Clerk (mata o acesso imediatamente).
  // Se falhar (ex: permissão da chave), o gate de 'ativo' no app já barra o acesso.
  try {
    const client = await clerkClient();
    if (active) await client.users.unbanUser(clerkId);
    else await client.users.banUser(clerkId);
  } catch (e) {
    console.error("[ownerSetUserActive] Clerk ban/unban falhou:", e);
  }

  if (userRow) {
    await supabase.from("activity_log").insert({
      user_id: userRow.id,
      tipo: "role_change",
      descricao: active ? "Conta reativada pelo dono" : "Conta desativada pelo dono",
      metadata: { ativo: active },
    });
  }

  revalidatePath("/admin/usuarios");
}

/**
 * Redefine a senha de um usuário e retorna a senha temporária para o Odin
 * entregar em mãos. EXCLUSIVO DO ODIN. NÃO envia e-mail — o dono controla.
 * A senha antiga deixa de funcionar imediatamente.
 */
export async function ownerResetPassword(clerkId: string): Promise<{ tempPassword: string }> {
  await assertOwner();
  const tempPassword = generateTempPassword();
  const client = await clerkClient();
  await client.users.updateUser(clerkId, {
    password: tempPassword,
    skipPasswordChecks: true,
  });
  return { tempPassword };
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

/**
 * Public landing page stats — no auth required.
 * Uses the admin client to bypass RLS and queries real data.
 * Cached via ISR (revalidate in page.tsx).
 */
export async function getLandingPageStats() {
  const supabase = createAdminClient();

  const [usersRes, coursesRes, hoursRes, completionRes] = await Promise.all([
    // Total active users
    supabase.from("users").select("id", { count: "exact", head: true }).eq("ativo", true),
    // Active courses
    supabase.from("courses").select("id", { count: "exact", head: true }).eq("ativo", true),
    // Total content hours (sum of carga_horaria in minutes from active courses)
    supabase.from("courses").select("carga_horaria").eq("ativo", true),
    // Completion rate: certificates issued / total enrollments
    supabase.from("admin_dashboard_metrics").select("total_enrollments, total_certificates").single(),
  ]);

  const totalUsers = usersRes.count ?? 0;
  const totalCourses = coursesRes.count ?? 0;

  // Sum hours from course carga_horaria (stored in minutes)
  const totalMinutes = (hoursRes.data ?? []).reduce(
    (sum: number, c: { carga_horaria: number | null }) => sum + (c.carga_horaria ?? 0),
    0
  );
  const totalHours = Math.floor(totalMinutes / 60);

  // Completion rate
  const enrollments = completionRes.data?.total_enrollments ?? 0;
  const certificates = completionRes.data?.total_certificates ?? 0;
  const completionRate = enrollments > 0 ? Math.round((certificates / enrollments) * 100) : 0;

  return { totalUsers, totalCourses, totalHours, completionRate };
}
