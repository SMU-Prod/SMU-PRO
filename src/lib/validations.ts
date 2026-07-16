import { z } from "zod";

/**
 * Validação de entrada compartilhada — usada em Server Actions/rotas.
 *
 * Regra de ouro: um `.update(input)` com service_role (que bypassa RLS) só pode
 * receber um payload construído por ALLOWLIST no servidor. O tipo TypeScript do
 * parâmetro some na compilação; sem validação em runtime, um POST direto com
 * campos extras (role, ativo, projeto_cultural) cai inteiro no banco.
 */

// Espelha o schema do client (components/profile/profile-form.tsx). Chaves
// desconhecidas são removidas pelo strip padrão do zod — role/ativo/etc. nunca
// chegam ao payload.
export const profileUpdateSchema = z.object({
  nome: z.string().min(2).max(120).optional(),
  bio: z.string().max(500).optional(),
  telefone: z.string().max(20).optional(),
  cidade: z.string().max(80).optional(),
  estado: z.string().max(2).optional(),
  cpf: z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos").optional(),
});

export type ProfileUpdate = z.infer<typeof profileUpdateSchema>;

/**
 * Recebe entrada não-confiável e devolve APENAS os campos de perfil permitidos,
 * validados. Campos não listados (role, ativo, projeto_cultural…) são descartados.
 * Retorna só as chaves realmente presentes, para não sobrescrever colunas com
 * `undefined` num update parcial.
 */
export function parseProfileUpdate(input: unknown): ProfileUpdate {
  const parsed = profileUpdateSchema.parse(input ?? {});
  const out: ProfileUpdate = {};
  for (const k of ["nome", "bio", "telefone", "cidade", "estado", "cpf"] as const) {
    if (parsed[k] !== undefined) out[k] = parsed[k];
  }
  return out;
}

// ── Blog ────────────────────────────────────────────────────────────
// Colunas que um admin/content_manager pode editar. Fora daqui (id, autor_id,
// views, created_at) nunca deve vir do cliente. Bloqueia o `Record<string,any>`
// que permitia sobrescrever qualquer coluna via adminUpdatePost.
const BLOG_FIELDS = [
  "titulo", "slug", "resumo", "conteudo", "thumbnail_url", "categoria",
  "tags", "publicado", "destaque", "tempo_leitura", "meta_title", "meta_description",
] as const;

export const blogPostUpdateSchema = z.object({
  titulo: z.string().min(1).max(200).optional(),
  slug: z.string().min(1).max(200).optional(),
  resumo: z.string().max(500).optional(),
  conteudo: z.string().optional(),
  thumbnail_url: z.string().optional(),
  categoria: z.string().max(60).optional(),
  tags: z.array(z.string()).optional(),
  publicado: z.boolean().optional(),
  destaque: z.boolean().optional(),
  tempo_leitura: z.number().int().nonnegative().optional(),
  meta_title: z.string().max(200).optional(),
  meta_description: z.string().max(300).optional(),
});

export type BlogPostUpdate = z.infer<typeof blogPostUpdateSchema>;

export function parseBlogPostUpdate(input: unknown): BlogPostUpdate {
  const parsed = blogPostUpdateSchema.parse(input ?? {});
  const out: Record<string, unknown> = {};
  for (const k of BLOG_FIELDS) {
    if (parsed[k as keyof BlogPostUpdate] !== undefined) out[k] = parsed[k as keyof BlogPostUpdate];
  }
  return out as BlogPostUpdate;
}
