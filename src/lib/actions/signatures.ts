"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

// ── Helper ──
async function requireAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");
  const supabase = createAdminClient();
  const { data: user } = await supabase
    .from("users")
    .select("id, role")
    .eq("clerk_id", userId)
    .single();
  if (!user || user.role !== "admin") throw new Error("Acesso negado");
  return { supabase, userId, userUuid: user.id };
}

async function requireAuth() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");
  const supabase = createAdminClient();
  const { data: user } = await supabase
    .from("users")
    .select("id, nome, role")
    .eq("clerk_id", userId)
    .single();
  if (!user) throw new Error("Usuário não encontrado");
  return { supabase, userId, userUuid: user.id, userName: user.nome, role: user.role };
}

// ══════════════════════════════════════════
// INSTRUCTORS (Admin only)
// ══════════════════════════════════════════

export async function listInstructors() {
  const { supabase } = await requireAdmin();
  const { data, error } = await (supabase as any)
    .from("instructors")
    .select("*")
    .eq("ativo", true)
    .order("nome");
  if (error) throw new Error(error.message);
  return data ?? [];
}

export async function createInstructor(formData: {
  nome: string;
  qualificacao?: string;
  formacao?: string;
  registro?: string;
  tipo: "instrutor" | "responsavel_tecnico";
  assinatura_img?: string;
}) {
  const { supabase } = await requireAdmin();
  const { data, error } = await (supabase as any)
    .from("instructors")
    .insert({
      nome: formData.nome,
      qualificacao: formData.qualificacao || null,
      formacao: formData.formacao || null,
      registro: formData.registro || null,
      tipo: formData.tipo,
      assinatura_img: formData.assinatura_img || null,
    })
    .select()
    .single();
  if (error) throw new Error(error.message);
  revalidatePath("/admin/certificados");
  return data;
}

export async function updateInstructor(
  id: string,
  updates: {
    nome?: string;
    qualificacao?: string;
    formacao?: string;
    registro?: string;
    tipo?: "instrutor" | "responsavel_tecnico";
    assinatura_img?: string;
    ativo?: boolean;
  }
) {
  const { supabase } = await requireAdmin();
  const { error } = await (supabase as any).from("instructors").update(updates).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/certificados");
}

export async function deleteInstructor(id: string) {
  const { supabase } = await requireAdmin();
  const { error } = await (supabase as any).from("instructors").update({ ativo: false }).eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/certificados");
}

// ══════════════════════════════════════════
// COURSE ↔ INSTRUCTOR BINDINGS (Admin only)
// ══════════════════════════════════════════

export async function assignInstructor(formData: {
  course_id: string;
  lesson_id?: string;
  instructor_id: string;
  tipo: "instrutor" | "responsavel_tecnico";
}) {
  const { supabase } = await requireAdmin();
  const { error } = await (supabase as any).from("course_instructors").upsert(
    {
      course_id: formData.course_id,
      lesson_id: formData.lesson_id || null,
      instructor_id: formData.instructor_id,
      tipo: formData.tipo,
    },
    { onConflict: "course_id,lesson_id,tipo" }
  );
  if (error) throw new Error(error.message);
  revalidatePath("/admin/certificados");
}

export async function removeInstructorAssignment(id: string) {
  const { supabase } = await requireAdmin();
  const { error } = await (supabase as any).from("course_instructors").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/certificados");
}

export async function listCourseInstructors(courseId: string) {
  const { supabase } = await requireAdmin();
  const { data, error } = await (supabase as any)
    .from("course_instructors")
    .select("*, instructors(*)")
    .eq("course_id", courseId)
    .order("tipo");
  if (error) throw new Error(error.message);
  return data ?? [];
}

// ══════════════════════════════════════════
// CERTIFICATE SIGNATURES (Student + Admin)
// ══════════════════════════════════════════

/** Student signs their own certificate */
export async function signCertificate(certificateId: string, assinaturaImg: string) {
  const { supabase, userUuid, userName } = await requireAuth();

  // Verify this certificate belongs to the user
  const { data: cert } = await supabase
    .from("certificates")
    .select("id, user_id")
    .eq("id", certificateId)
    .single();

  if (!cert || cert.user_id !== userUuid) {
    throw new Error("Certificado não encontrado ou não pertence a você");
  }

  // Validate base64 size (max ~500KB)
  if (assinaturaImg.length > 700000) {
    throw new Error("Assinatura muito grande. Tente novamente com traços mais simples.");
  }

  const { error } = await (supabase as any).from("certificate_signatures").upsert(
    {
      certificate_id: certificateId,
      tipo: "trabalhador",
      assinatura_img: assinaturaImg,
      nome_assinante: userName,
    },
    { onConflict: "certificate_id,tipo" }
  );
  if (error) throw new Error(error.message);
  revalidatePath("/dashboard/certificados");
  return { success: true };
}

/** Admin signs a certificate as instructor or responsavel_tecnico */
export async function adminSignCertificate(
  certificateId: string,
  tipo: "instrutor" | "responsavel_tecnico",
  instructorId: string
) {
  const { supabase } = await requireAdmin();

  // Get instructor signature
  const { data: instructor } = await (supabase as any)
    .from("instructors")
    .select("nome, assinatura_img")
    .eq("id", instructorId)
    .single();

  if (!instructor || !instructor.assinatura_img) {
    throw new Error("Instrutor não encontrado ou sem assinatura cadastrada");
  }

  const { error } = await (supabase as any).from("certificate_signatures").upsert(
    {
      certificate_id: certificateId,
      tipo,
      assinatura_img: instructor.assinatura_img,
      nome_assinante: instructor.nome,
    },
    { onConflict: "certificate_id,tipo" }
  );
  if (error) throw new Error(error.message);
  revalidatePath("/admin/certificados");
  return { success: true };
}

/** Get all signatures for a certificate */
export async function getCertificateSignatures(certificateId: string) {
  const supabase = createAdminClient();
  const { data, error } = await (supabase as any)
    .from("certificate_signatures")
    .select("*")
    .eq("certificate_id", certificateId);
  if (error) throw new Error(error.message);
  return data ?? [];
}
