import { z } from "zod";

// UUID v4 format
export const uuidSchema = z.string().uuid("ID inválido");

// Slug: lowercase, hyphens, no spaces
export const slugSchema = z
  .string()
  .min(2)
  .max(200)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug inválido");

// Email
export const emailSchema = z.string().email("Email inválido");

// CPF (11 digits only)
export const cpfSchema = z.string().regex(/^\d{11}$/, "CPF deve ter 11 dígitos");

// Course creation/update
export const courseCreateSchema = z.object({
  titulo: z.string().min(3, "Título mínimo 3 caracteres").max(200),
  slug: slugSchema,
  nivel: z.enum(["trainee", "junior", "pleno"]),
  categoria: z.enum(["som", "luz", "producao", "dj", "vj", "roadie", "marketing", "efeitos", "outros"]),
  tipo: z.enum(["free", "pago", "projeto_cultural"]),
  descricao: z.string().max(5000).optional().nullable(),
  descricao_curta: z.string().max(300).optional().nullable(),
  preco: z.number().min(0).max(99999).optional().nullable(),
  carga_horaria: z.number().min(0).max(9999).optional().nullable(),
  thumbnail_url: z.string().url().optional().nullable(),
  trailer_youtube_id: z.string().max(20).optional().nullable(),
  ativo: z.boolean().optional(),
  destaque: z.boolean().optional(),
});

// Module creation
export const moduleCreateSchema = z.object({
  course_id: uuidSchema,
  titulo: z.string().min(1).max(200),
  descricao: z.string().max(1000).optional().nullable(),
  ordem: z.number().int().min(0).optional(),
});

// Lesson creation
export const lessonCreateSchema = z.object({
  module_id: uuidSchema,
  titulo: z.string().min(1).max(200),
  tipo: z.enum(["video", "pdf", "texto", "quiz", "misto"]).optional(),
  youtube_id: z.string().max(20).optional().nullable(),
  duracao_min: z.number().min(0).max(9999).optional(),
  ordem: z.number().int().min(0).optional(),
});

// Checkout
export const checkoutSchema = z.object({
  courseId: uuidSchema,
  billingType: z.enum(["PIX", "BOLETO", "CREDIT_CARD"]).default("PIX"),
  cpf: z.string().optional(),
});

// Blog post creation
export const blogPostCreateSchema = z.object({
  titulo: z.string().min(3).max(200),
  slug: slugSchema,
  resumo: z.string().max(500).optional(),
  conteudo: z.string().min(1),
  thumbnail_url: z.string().url().optional(),
  categoria: z.string().min(1).max(50),
  tags: z.array(z.string().max(50)).max(20).optional(),
  publicado: z.boolean().optional(),
  destaque: z.boolean().optional(),
  tempo_leitura: z.number().int().min(0).max(999).optional(),
  meta_title: z.string().max(100).optional(),
  meta_description: z.string().max(200).optional(),
});

// Partner creation
export const partnerCreateSchema = z.object({
  nome: z.string().min(2).max(200),
  email: emailSchema,
  cpf: z.string().optional(),
  telefone: z.string().max(20).optional(),
  bio: z.string().max(1000).optional(),
  comissao_padrao: z.number().min(0).max(100).optional(),
  asaas_wallet_id: z.string().max(100).optional(),
  instructor_id: z.string().optional(),
});

// User role change
export const roleChangeSchema = z.object({
  userId: uuidSchema,
  role: z.enum(["visitor", "trainee", "junior", "pleno", "projeto_cultural", "admin", "content_manager", "instrutor"]),
});
