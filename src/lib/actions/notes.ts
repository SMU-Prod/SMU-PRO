"use server";

import { auth } from "@clerk/nextjs/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function createNote(lessonId: string, conteudo: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  if (!userRow) throw new Error("Usuário não encontrado");

  const { data, error } = await supabase
    .from("notes")
    .insert({ user_id: userRow.id, lesson_id: lessonId, conteudo })
    .select()
    .single();

  if (error) throw new Error(error.message);
  return data;
}

export async function deleteNote(noteId: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("Não autenticado");

  const supabase = createAdminClient();
  const { data: userRow } = await supabase.from("users").select("id").eq("clerk_id", userId).single();
  if (!userRow) throw new Error("Usuário não encontrado");

  // Only delete if the note belongs to this user
  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", noteId)
    .eq("user_id", userRow.id);

  if (error) throw new Error(error.message);
}
