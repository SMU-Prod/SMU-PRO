"use server";

import { z } from "zod";
import { createAdminClient as _createAdminClient, createClient as _createAnonClient } from "@/lib/supabase/server";
import { auth } from "@clerk/nextjs/server";
import { blogPostCreateSchema } from "@/lib/validations";

// Cast para any porque blog_posts ainda não existe no tipo Database gerado
const createAdminClient = () => _createAdminClient() as any;
const createAnonClient = async () => (await _createAnonClient()) as any;

// ── Public queries ───────────────────────────────────────────────

export async function getPublishedPosts({
  page = 1,
  limit = 12,
  categoria,
}: {
  page?: number;
  limit?: number;
  categoria?: string;
} = {}) {
  const supabase = await createAnonClient();
  let query = supabase
    .from("blog_posts")
    .select("id, titulo, slug, resumo, thumbnail_url, categoria, tags, tempo_leitura, created_at, autor_id, destaque", { count: "exact" })
    .eq("publicado", true)
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  if (categoria) {
    query = query.eq("categoria", categoria);
  }

  const { data, count } = await query;
  return { posts: data ?? [], total: count ?? 0 };
}

export async function getFeaturedPosts() {
  const supabase = await createAnonClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, titulo, slug, resumo, thumbnail_url, categoria, tempo_leitura, created_at")
    .eq("publicado", true)
    .eq("destaque", true)
    .order("created_at", { ascending: false })
    .limit(3);

  return data ?? [];
}

export async function getPostBySlug(slug: string): Promise<any | null> {
  const supabase = await createAnonClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("publicado", true)
    .single();

  if (error || !data) return null;

  // Incrementa views (fire & forget, but handle errors)
  supabase
    .from("blog_posts")
    .update({ views: (data.views ?? 0) + 1 })
    .eq("id", data.id)
    .then(() => {})
    .catch((err: unknown) => console.error("Failed to increment post views:", err));

  return data;
}

export async function getRelatedPosts(categoria: string, excludeId: string) {
  const supabase = await createAnonClient();
  const { data } = await supabase
    .from("blog_posts")
    .select("id, titulo, slug, resumo, thumbnail_url, tempo_leitura, created_at")
    .eq("publicado", true)
    .eq("categoria", categoria)
    .neq("id", excludeId)
    .order("created_at", { ascending: false })
    .limit(3);

  return data ?? [];
}

// ── Admin queries ────────────────────────────────────────────────

export async function adminGetAllPosts({
  page = 1,
  limit = 20,
}: { page?: number; limit?: number } = {}) {
  const supabase = createAdminClient();
  const { data, count } = await supabase
    .from("blog_posts")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range((page - 1) * limit, page * limit - 1);

  return { posts: data ?? [], total: count ?? 0 };
}

export async function adminCreatePost(post: {
  titulo: string;
  slug: string;
  resumo?: string;
  conteudo: string;
  thumbnail_url?: string;
  categoria: string;
  tags?: string[];
  publicado?: boolean;
  destaque?: boolean;
  tempo_leitura?: number;
  meta_title?: string;
  meta_description?: string;
}) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();

  // Validate input with Zod
  let validated: z.infer<typeof blogPostCreateSchema>;
  try {
    validated = blogPostCreateSchema.parse(post);
  } catch (e) {
    if (e instanceof z.ZodError) {
      throw new Error(`Validação falhou: ${e.issues.map((err: { message: string }) => err.message).join(", ")}`);
    }
    throw e;
  }

  // Resolve user UUID
  const { data: user } = await supabase.from("users").select("id").eq("clerk_id", userId).single();

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({ ...validated, autor_id: user?.id })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function adminUpdatePost(id: string, updates: Record<string, any>) {
  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function adminDeletePost(id: string) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("blog_posts").delete().eq("id", id);
  if (error) throw new Error(error.message);
}

export async function adminTogglePostPublish(id: string, publicado: boolean) {
  const supabase = createAdminClient();
  const { error } = await supabase.from("blog_posts").update({ publicado }).eq("id", id);
  if (error) throw new Error(error.message);
}
