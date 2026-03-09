"use server";

import { auth } from "@clerk/nextjs/server";
import { createClient, createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import type { CourseInsert, CourseUpdate, ModuleInsert, LessonInsert, Progress } from "@/types/database";

// ============================================================
// Helper: resolve Clerk user ID → Supabase user UUID
// (enrollments/progress usam uuid FK para users.id)
// ============================================================

async function resolveUserUUID(clerkId: string): Promise<string | null> {
  const supabase = createAdminClient();
  const { data } = await supabase.from("users").select("id").eq("clerk_id", clerkId).single();
  return data?.id ?? null;
}

// ============================================================
// Segurança: verifica role admin no nível da action
// ============================================================

async function assertAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users")
    .select("role")
    .eq("clerk_id", userId)
    .order("created_at", { ascending: false })
    .limit(1);
  const role = rows?.[0]?.role ?? null;

  // Both admin and content_manager can manage course content
  if (role !== "admin" && role !== "content_manager") {
    throw new Error("Acesso negado: apenas administradores ou content managers");
  }
  return userId;
}

// Strict: admin-only operations (publish/unpublish, delete course)
async function assertAdminOnly() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users").select("role").eq("clerk_id", userId).limit(1);
  if (rows?.[0]?.role !== "admin") throw new Error("Acesso negado: apenas administradores");
  return userId;
}

// ============================================================
// CURSOS — Queries públicas
// ============================================================

export async function getCourses(filters?: { nivel?: string; categoria?: string; tipo?: string; search?: string }) {
  const supabase = await createClient();
  let query = supabase
    .from("courses")
    .select("*")
    .eq("ativo", true)
    .order("destaque", { ascending: false })
    .order("ordem");

  if (filters?.nivel) query = query.eq("nivel", filters.nivel as any);
  if (filters?.categoria) query = query.or(`categoria.eq.${filters.categoria},categorias.cs.{${filters.categoria}}`);
  if (filters?.tipo) query = query.eq("tipo", filters.tipo as any);
  if (filters?.search) query = query.ilike("titulo", `%${filters.search}%`);

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function getCourseBySlug(slug: string) {
  const supabase = await createClient();
  const { data, error } = await (supabase as any)
    .from("courses")
    .select(`*, modules(*, lessons(*))`)
    .eq("slug", slug)
    .eq("ativo", true)
    .single();
  if (error) throw error;

  const sorted = {
    ...data,
    modules: (data.modules ?? [])
      .sort((a: any, b: any) => a.ordem - b.ordem)
      .map((m: any) => ({
        ...m,
        lessons: (m.lessons ?? []).sort((a: any, b: any) => a.ordem - b.ordem),
      })),
  };
  return sorted;
}

export async function getCourseWithProgress(slug: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const userUuid = await resolveUserUUID(userId);

  // Primeiro busca o course_id pelo slug
  const { data: courseIdData } = await supabase.from("courses").select("id").eq("slug", slug).single();
  const courseId = courseIdData?.id ?? "";

  const [courseResult, enrollmentResult, progressResult] = await Promise.all([
    (supabase as any)
      .from("courses")
      .select(`*, modules(*, lessons(*))`)
      .eq("slug", slug)
      .single(),
    userUuid
      ? supabase
          .from("enrollments")
          .select("*")
          .eq("course_id", courseId)
          .eq("user_id", userUuid)
          .maybeSingle()
      : Promise.resolve({ data: null, error: null }),
    userUuid
      ? supabase
          .from("progress")
          .select("*")
          .eq("user_id", userUuid)
      : Promise.resolve({ data: [], error: null }),
  ]);

  if (courseResult.error) throw courseResult.error;

  const course = courseResult.data as any;
  const sorted = {
    ...course,
    modules: (course.modules ?? [])
      .sort((a: any, b: any) => a.ordem - b.ordem)
      .map((m: any) => ({
        ...m,
        lessons: (m.lessons ?? []).sort((a: any, b: any) => a.ordem - b.ordem),
      })),
  };

  return {
    course: sorted,
    enrollment: enrollmentResult.data,
    progressMap: Object.fromEntries(
      (progressResult.data ?? []).map((p: Progress) => [p.lesson_id, p])
    ) as Record<string, Progress>,
  };
}

export async function getUserEnrolledCourses() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const userUuid = await resolveUserUUID(userId);
  if (!userUuid) return [];

  const { data, error } = await (supabase as any)
    .from("enrollments")
    .select(`*, courses(*)`)
    .eq("user_id", userUuid)
    .eq("status", "ativo")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return data ?? [];
}

// ============================================================
// CURSOS — Admin
// ============================================================

export async function adminGetAllCourses(opts?: { page?: number; limit?: number; search?: string; nivel?: string; tipo?: string }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const page = opts?.page ?? 1;
  const limit = opts?.limit ?? 50;

  let query = supabase
    .from("admin_course_stats")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (opts?.search) query = query.ilike("titulo", `%${opts.search}%`);
  if (opts?.nivel) query = (query as any).eq("nivel", opts.nivel);
  if (opts?.tipo) query = (query as any).eq("tipo", opts.tipo);

  const { data, count, error } = await query;
  if (error) throw error;
  return { courses: data ?? [], total: count ?? 0 };
}

export async function adminCreateCourse(input: CourseInsert) {
  const clerkId = await assertAdmin();
  const supabase = createAdminClient();

  // clerk_id is not a UUID — resolve the internal user UUID first
  const { data: userRow } = await supabase
    .from("users").select("id").eq("clerk_id", clerkId).limit(1).single();

  const { data, error } = await supabase
    .from("courses")
    .insert({ ...input, ...(userRow?.id ? { criado_por: userRow.id } : {}) })
    .select()
    .single();
  if (error) throw error;

  revalidatePath("/admin/cursos");
  revalidatePath("/cursos");
  return data;
}

export async function adminUpdateCourse(id: string, input: CourseUpdate) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("courses")
    .update(input)
    .eq("id", id)
    .select()
    .single();
  if (error) throw error;

  revalidatePath("/admin/cursos");
  revalidatePath("/cursos");
  return data;
}

export async function adminDeleteCourse(id: string) {
  await assertAdminOnly();
  const supabase = createAdminClient();
  const { error } = await supabase.from("courses").delete().eq("id", id);
  if (error) throw error;

  revalidatePath("/admin/cursos");
}

export async function adminToggleCourse(id: string, ativo: boolean) {
  await assertAdminOnly();
  const result = await adminUpdateCourse(id, { ativo });

  // When publishing, notify enrolled students
  if (ativo) {
    const { notifyCourseStudents } = await import("@/lib/actions/notifications");
    const supabase = createAdminClient();
    const { data: course } = await supabase.from("courses").select("titulo, slug").eq("id", id).single();
    if (course) {
      notifyCourseStudents({
        courseId: id,
        titulo: `Curso disponível: ${course.titulo}`,
        mensagem: "O curso foi atualizado e está disponível para acesso.",
        link: `/cursos/${course.slug}`,
      }).catch(() => {});
    }
  }

  return result;
}

// ============================================================
// MÓDULOS
// ============================================================

export async function adminCreateModule(input: ModuleInsert) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("modules").insert(input).select().single();
  if (error) throw error;
  revalidatePath(`/admin/cursos/${input.course_id}`);
  return data;
}

export async function adminUpdateModule(id: string, input: Partial<ModuleInsert>) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("modules").update(input).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function adminDeleteModule(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  await supabase.from("modules").delete().eq("id", id);
}

// ============================================================
// AULAS
// ============================================================

export async function adminCreateLesson(input: LessonInsert) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("lessons").insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function adminUpdateLesson(id: string, input: Partial<LessonInsert>) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("lessons").update(input).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function adminDeleteLesson(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  await supabase.from("lessons").delete().eq("id", id);
}

// ============================================================
// UPLOAD DE ARQUIVOS (Supabase Storage)
// Buckets necessários no Supabase Dashboard:
//   - course-materials (público)  → PDFs e arquivos de aulas
//   - course-thumbnails (público) → Thumbnails dos cursos
// ============================================================

export async function adminUploadFile(formData: FormData): Promise<{ url: string; path: string }> {
  await assertAdmin();
  const supabase = createAdminClient();

  const file = formData.get("file") as File;
  const bucket = (formData.get("bucket") as string) || "course-materials";
  const folder = (formData.get("folder") as string) || "uploads";

  if (!file || file.size === 0) throw new Error("Nenhum arquivo selecionado");
  if (file.size > 50 * 1024 * 1024) throw new Error("Arquivo muito grande (máximo 50MB)");

  const ALLOWED_EXTENSIONS = new Set(["pdf", "jpg", "jpeg", "png", "webp", "gif", "mp4", "mp3", "wav", "doc", "docx", "ppt", "pptx", "xls", "xlsx", "zip"]);
  const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
  if (!ext || !ALLOWED_EXTENSIONS.has(ext)) {
    throw new Error(`Tipo de arquivo não permitido: .${ext}`);
  }
  const safeName = `${folder}/${crypto.randomUUID()}.${ext}`;

  const bytes = await file.arrayBuffer();
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(safeName, bytes, { contentType: file.type, upsert: false });

  if (error) throw new Error(`Erro no upload: ${error.message}`);

  const { data: { publicUrl } } = supabase.storage.from(bucket).getPublicUrl(data.path);
  return { url: publicUrl, path: data.path };
}

export async function adminDeleteFile(path: string, bucket = "course-materials") {
  await assertAdmin();
  const supabase = createAdminClient();
  await supabase.storage.from(bucket).remove([path]);
}

export async function adminDuplicateLesson(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data: original, error: fetchErr } = await supabase
    .from("lessons").select("*").eq("id", id).single();
  if (fetchErr || !original) throw fetchErr ?? new Error("Aula não encontrada");

  const { data, error } = await supabase
    .from("lessons")
    .insert({
      module_id: original.module_id,
      titulo: `${original.titulo} (cópia)`,
      descricao: original.descricao,
      tipo: original.tipo,
      youtube_id: original.youtube_id,
      pdf_path: original.pdf_path,
      conteudo_rico: original.conteudo_rico,
      duracao_min: original.duracao_min,
      ordem: original.ordem + 1,
      tem_quiz: false,
      preview_gratis: false,
    })
    .select().single();
  if (error) throw error;
  return data;
}

export async function adminReorderModules(items: { id: string; ordem: number }[], courseId?: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  await Promise.all(
    items.map(({ id, ordem }) =>
      supabase.from("modules").update({ ordem }).eq("id", id)
    )
  );
  if (courseId) revalidatePath(`/admin/cursos/${courseId}`);
  revalidatePath("/cursos");
}

export async function adminReorderLessons(items: { id: string; ordem: number }[], courseId?: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  await Promise.all(
    items.map(({ id, ordem }) =>
      supabase.from("lessons").update({ ordem }).eq("id", id)
    )
  );
  if (courseId) revalidatePath(`/admin/cursos/${courseId}`);
  revalidatePath("/cursos");
}

// ============================================================
// QUIZZES
// ============================================================

export async function adminGetQuizByLesson(lessonId: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data } = await supabase
    .from("quizzes")
    .select("*, quiz_questions(*, quiz_options(*))")
    .eq("lesson_id", lessonId)
    .maybeSingle();
  return data;
}

export async function adminCreateQuiz(input: { lesson_id: string; titulo: string; descricao?: string | null; nivel_minimo_aprovacao?: number; tentativas_permitidas?: number; embaralhar_questoes?: boolean }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("quizzes").insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function adminUpdateQuiz(id: string, input: { titulo?: string; descricao?: string | null; nivel_minimo_aprovacao?: number; tentativas_permitidas?: number; embaralhar_questoes?: boolean; tempo_limite_min?: number | null }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("quizzes").update(input).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function adminDeleteQuiz(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await supabase.from("quizzes").delete().eq("id", id);
  if (error) throw error;
}

export async function adminCreateQuestion(input: { quiz_id: string; texto: string; tipo?: "multiple_choice" | "true_false"; explicacao?: string | null; ordem?: number; pontos?: number }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("quiz_questions").insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function adminUpdateQuestion(id: string, input: { texto?: string; explicacao?: string | null; ordem?: number; pontos?: number }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("quiz_questions").update(input).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function adminDeleteQuestion(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await supabase.from("quiz_questions").delete().eq("id", id);
  if (error) throw error;
}

export async function adminCreateOption(input: { question_id: string; texto: string; correta?: boolean; ordem?: number }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("quiz_options").insert(input).select().single();
  if (error) throw error;
  return data;
}

export async function adminUpdateOption(id: string, input: { texto?: string; correta?: boolean; ordem?: number }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await supabase.from("quiz_options").update(input).eq("id", id).select().single();
  if (error) throw error;
  return data;
}

export async function adminDeleteOption(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await supabase.from("quiz_options").delete().eq("id", id);
  if (error) throw error;
}

// ============================================================
// COURSE CLONE
// ============================================================

export async function adminDuplicateCourse(id: string) {
  const clerkId = await assertAdmin();
  const supabase = createAdminClient();

  // Load course with full curriculum
  const { data: original, error: fetchErr } = await (supabase as any)
    .from("courses")
    .select(`*, modules(*, lessons(*))`)
    .eq("id", id)
    .single();
  if (fetchErr || !original) throw fetchErr ?? new Error("Curso não encontrado");

  // Resolve internal user UUID
  const { data: userRow } = await supabase
    .from("users").select("id").eq("clerk_id", clerkId).limit(1).single();

  // Clone course (unpublished, unique slug)
  const newSlug = `${original.slug}-copia-${Date.now()}`;
  const { data: newCourse, error: courseErr } = await supabase
    .from("courses")
    .insert({
      titulo: `${original.titulo} (cópia)`,
      slug: newSlug,
      descricao: original.descricao,
      descricao_curta: original.descricao_curta,
      thumbnail_url: original.thumbnail_url,
      nivel: original.nivel,
      categoria: original.categoria,
      tipo: original.tipo,
      preco: original.preco,
      carga_horaria: original.carga_horaria,
      destaque: false,
      ativo: false,
      ordem: (original.ordem ?? 0) + 1,
      ...(userRow?.id ? { criado_por: userRow.id } : {}),
    })
    .select()
    .single();
  if (courseErr) throw courseErr;

  // Clone modules in batch
  const modules: any[] = (original.modules ?? []).sort((a: any, b: any) => a.ordem - b.ordem);

  if (modules.length > 0) {
    const moduleInserts = modules.map((mod: any) => ({
      course_id: newCourse.id,
      titulo: mod.titulo,
      descricao: mod.descricao,
      ordem: mod.ordem,
    }));

    const { data: newModules, error: modErr } = await supabase
      .from("modules")
      .insert(moduleInserts)
      .select();

    if (modErr) throw new Error(`Erro ao clonar módulos: ${modErr.message}`);

    // Map original module order → new module id
    const sortedNewModules = (newModules ?? []).sort((a: any, b: any) => a.ordem - b.ordem);

    // Clone all lessons in batch
    const lessonInserts: any[] = [];
    for (let i = 0; i < modules.length; i++) {
      const originalMod = modules[i];
      const newMod = sortedNewModules[i];
      if (!newMod) continue;

      const lessons: any[] = (originalMod.lessons ?? []).sort((a: any, b: any) => a.ordem - b.ordem);
      for (const lesson of lessons) {
        lessonInserts.push({
          module_id: newMod.id,
          titulo: lesson.titulo,
          descricao: lesson.descricao,
          tipo: lesson.tipo,
          youtube_id: lesson.youtube_id,
          pdf_path: lesson.pdf_path,
          conteudo_rico: lesson.conteudo_rico,
          duracao_min: lesson.duracao_min,
          ordem: lesson.ordem,
          tem_quiz: false,
          preview_gratis: lesson.preview_gratis,
        });
      }
    }

    if (lessonInserts.length > 0) {
      const { error: lessonErr } = await supabase
        .from("lessons")
        .insert(lessonInserts);

      if (lessonErr) throw new Error(`Erro ao clonar aulas: ${lessonErr.message}`);
    }
  }

  revalidatePath("/admin/cursos");
  return newCourse;
}
