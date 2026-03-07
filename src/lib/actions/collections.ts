"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

async function assertAdmin() {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");
  const supabase = createAdminClient();
  const { data: rows } = await supabase
    .from("users").select("role").eq("clerk_id", userId).limit(1);
  if (rows?.[0]?.role !== "admin") throw new Error("Acesso negado");
  return userId;
}

export async function adminGetCollections() {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await (supabase as any)
    .from("collections")
    .select(`*, collection_courses(course_id, ordem, courses(id, titulo, nivel, ativo))`)
    .order("ordem", { ascending: true });
  if (error) throw error;
  return data ?? [];
}

export async function adminCreateCollection(input: { titulo: string; descricao?: string; slug: string; ativo?: boolean; ordem?: number }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { data, error } = await (supabase as any)
    .from("collections")
    .insert({ ...input, ativo: input.ativo ?? false, ordem: input.ordem ?? 0 })
    .select().single();
  if (error) throw error;
  revalidatePath("/admin/trilhas");
  return data;
}

export async function adminUpdateCollection(id: string, input: { titulo?: string; descricao?: string; ativo?: boolean; ordem?: number }) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("collections").update(input).eq("id", id);
  if (error) throw error;
  revalidatePath("/admin/trilhas");
}

export async function adminDeleteCollection(id: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("collections").delete().eq("id", id);
  if (error) throw error;
  revalidatePath("/admin/trilhas");
}

export async function adminAddCourseToCollection(collectionId: string, courseId: string, ordem: number) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("collection_courses")
    .upsert({ collection_id: collectionId, course_id: courseId, ordem }, { onConflict: "collection_id,course_id" });
  if (error) throw error;
  revalidatePath("/admin/trilhas");
}

export async function adminRemoveCourseFromCollection(collectionId: string, courseId: string) {
  await assertAdmin();
  const supabase = createAdminClient();
  const { error } = await (supabase as any)
    .from("collection_courses")
    .delete()
    .eq("collection_id", collectionId)
    .eq("course_id", courseId);
  if (error) throw error;
  revalidatePath("/admin/trilhas");
}
