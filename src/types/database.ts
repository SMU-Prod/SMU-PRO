// ============================================================
// SMU PRO — Database Types para Supabase JS v2
// Formato exato que supabase-js espera (com Relationships)
// ============================================================

export type UserRole = "visitor" | "trainee" | "junior" | "pleno" | "projeto_cultural" | "admin" | "content_manager" | "instrutor";
export type CourseLevel = "trainee" | "junior" | "pleno";
export type CourseCategory = "som" | "luz" | "producao" | "dj" | "vj" | "roadie" | "marketing" | "efeitos" | "outros";
export type CourseType = "free" | "pago" | "projeto_cultural";
export type AccessType = "free" | "pago" | "projeto_cultural" | "manual";
export type EnrollmentStatus = "pendente" | "ativo" | "expirado" | "cancelado";
export type PaymentProvider = "mercado_pago" | "stripe" | "manual" | "asaas";
export type ContentType = "video" | "pdf" | "texto" | "quiz" | "misto";
export type QuestionType = "multiple_choice" | "true_false";
export type ActivityType = "enrollment" | "lesson_complete" | "quiz_pass" | "quiz_fail" | "certificate_issued" | "login" | "payment" | "role_change";
export type NotificationType = "course_update" | "certificate" | "enrollment" | "quiz_result" | "system" | "welcome" | "payment" | "role_change" | "admin";

// ── Row types ──────────────────────────────────────────────

export type User = {
  id: string; clerk_id: string; nome: string; email: string;
  avatar_url: string | null; bio: string | null; role: UserRole;
  projeto_cultural: boolean; nivel_atual: CourseLevel;
  telefone: string | null; cidade: string | null; estado: string | null;
  cpf: string | null;
  ativo: boolean; ultimo_acesso: string | null;
  created_at: string; updated_at: string;
};
export type UserInsert = Omit<User, "id" | "created_at" | "updated_at" | "cpf"> & { id?: string; cpf?: string | null };
export type UserUpdate = Partial<Omit<User, "id" | "created_at">>;

export type Course = {
  id: string; titulo: string; slug: string;
  descricao: string | null; descricao_curta: string | null;
  nivel: CourseLevel; categoria: CourseCategory; categorias: string[];
  tipo: CourseType; preco: number | null; carga_horaria: number | null;
  thumbnail_url: string | null; trailer_youtube_id: string | null;
  ativo: boolean; destaque: boolean; ordem: number;
  disponivel_assinatura: boolean;
  total_aulas: number; total_alunos: number; avaliacao_media: number;
  criado_por: string | null; created_at: string; updated_at: string;
};
export type CourseInsert = {
  titulo: string; slug: string; nivel: CourseLevel; categoria: CourseCategory; tipo: CourseType;
  descricao?: string | null; descricao_curta?: string | null;
  categorias?: string[]; preco?: number | null; carga_horaria?: number | null;
  thumbnail_url?: string | null; trailer_youtube_id?: string | null;
  ativo?: boolean; destaque?: boolean; ordem?: number; criado_por?: string | null;
  disponivel_assinatura?: boolean;
};
export type CourseUpdate = Partial<Omit<Course, "id" | "created_at">>;

export type Module = {
  id: string; course_id: string; parent_id: string | null;
  titulo: string; descricao: string | null; ordem: number;
  created_at: string; updated_at: string;
};
export type ModuleInsert = { course_id: string; titulo: string; descricao?: string | null; ordem?: number; parent_id?: string | null };
export type ModuleUpdate = Partial<Omit<Module, "id" | "created_at">>;

export type Lesson = {
  id: string; module_id: string; titulo: string;
  descricao: string | null; tipo: ContentType;
  youtube_id: string | null; pdf_path: string | null;
  conteudo_rico: string | null; duracao_min: number; ordem: number;
  tem_quiz: boolean; preview_gratis: boolean;
  created_at: string; updated_at: string;
};
export type LessonInsert = {
  module_id: string; titulo: string;
  descricao?: string | null; tipo?: ContentType;
  youtube_id?: string | null; pdf_path?: string | null; conteudo_rico?: string | null;
  duracao_min?: number; ordem?: number; tem_quiz?: boolean; preview_gratis?: boolean;
};
export type LessonUpdate = Partial<Omit<Lesson, "id" | "created_at">>;

export type Enrollment = {
  id: string; user_id: string; course_id: string;
  tipo_acesso: AccessType; status: EnrollmentStatus;
  payment_id: string | null; payment_provider: PaymentProvider | null;
  valor_pago: number | null; progresso: number;
  created_at: string; updated_at: string; expires_at: string | null;
};
export type EnrollmentInsert = {
  user_id: string; course_id: string; tipo_acesso?: AccessType; status?: EnrollmentStatus;
  payment_id?: string | null; payment_provider?: PaymentProvider | null;
  valor_pago?: number | null; progresso?: number; expires_at?: string | null;
};
export type EnrollmentUpdate = Partial<Omit<Enrollment, "id" | "created_at">>;

export type Progress = {
  id: string; user_id: string; lesson_id: string;
  concluido: boolean; tempo_assistido: number;
  completed_at: string | null; created_at: string; updated_at: string;
};
export type ProgressInsert = {
  user_id: string; lesson_id: string;
  concluido?: boolean; tempo_assistido?: number; completed_at?: string | null;
};
export type ProgressUpdate = Partial<Omit<Progress, "id" | "created_at">>;

export type Quiz = {
  id: string; lesson_id: string; titulo: string; descricao: string | null;
  nivel_minimo_aprovacao: number; tentativas_permitidas: number;
  tempo_limite_min: number | null; embaralhar_questoes: boolean;
  created_at: string; updated_at: string;
};
export type QuizInsert = {
  lesson_id: string; titulo: string; descricao?: string | null;
  nivel_minimo_aprovacao?: number; tentativas_permitidas?: number;
  tempo_limite_min?: number | null; embaralhar_questoes?: boolean;
};
export type QuizUpdate = Partial<Omit<Quiz, "id" | "created_at">>;

export type QuizQuestion = {
  id: string; quiz_id: string; texto: string;
  tipo: QuestionType; explicacao: string | null; ordem: number; pontos: number;
};
export type QuizQuestionInsert = { quiz_id: string; texto: string; tipo?: QuestionType; explicacao?: string | null; ordem?: number; pontos?: number };
export type QuizQuestionUpdate = Partial<Omit<QuizQuestion, "id">>;

export type QuizOption = {
  id: string; question_id: string; texto: string; correta: boolean; ordem: number;
};
export type QuizOptionInsert = { question_id: string; texto: string; correta?: boolean; ordem?: number };
export type QuizOptionUpdate = Partial<Omit<QuizOption, "id">>;

export type QuizAttempt = {
  id: string; user_id: string; quiz_id: string;
  nota: number; aprovado: boolean;
  respostas: Record<string, string> | null;
  tempo_gasto: number | null; created_at: string;
};
export type QuizAttemptInsert = {
  user_id: string; quiz_id: string; nota: number; aprovado: boolean;
  respostas?: Record<string, string> | null; tempo_gasto?: number | null;
};

export type Note = {
  id: string; user_id: string; lesson_id: string; conteudo: string;
  timestamp_video: number | null; created_at: string; updated_at: string;
};
export type NoteInsert = { user_id: string; lesson_id: string; conteudo: string; timestamp_video?: number | null };
export type NoteUpdate = Partial<Omit<Note, "id" | "created_at">>;

export type Certificate = {
  id: string; user_id: string; course_id: string;
  codigo_verificacao: string; pdf_path: string | null;
  emitido_em: string; nota_final: number | null;
  carga_horaria: number | null; projeto_cultural: boolean;
  metadata: Record<string, any> | null;
};
export type CertificateInsert = {
  user_id: string; course_id: string;
  pdf_path?: string | null; nota_final?: number | null;
  carga_horaria?: number | null; projeto_cultural?: boolean;
  metadata?: Record<string, any> | null;
};

export type CourseRating = {
  id: string; user_id: string; course_id: string;
  nota: number; comentario: string | null; created_at: string;
};
export type CourseRatingInsert = { user_id: string; course_id: string; nota: number; comentario?: string | null };
export type CourseRatingUpdate = Partial<Pick<CourseRating, "nota" | "comentario">>;

export type ActivityLog = {
  id: string; user_id: string | null; tipo: ActivityType;
  descricao: string | null; metadata: Record<string, unknown> | null;
  ip_address: string | null; created_at: string;
};
export type ActivityLogInsert = {
  tipo: ActivityType; user_id?: string | null;
  descricao?: string | null; metadata?: Record<string, unknown> | null; ip_address?: string | null;
};

export type Notification = {
  id: string; user_id: string; tipo: NotificationType;
  titulo: string; mensagem: string | null;
  link: string | null; lida: boolean;
  created_at: string;
};
export type NotificationInsert = {
  user_id: string; tipo: NotificationType; titulo: string;
  mensagem?: string | null; link?: string | null; lida?: boolean;
};
export type NotificationUpdate = Partial<Pick<Notification, "lida">>;

export type NotificationPreferences = {
  id: string; user_id: string;
  email_course_updates: boolean;
  email_certificates: boolean;
  email_payments: boolean;
  email_promotions: boolean;
  inapp_course_updates: boolean;
  inapp_certificates: boolean;
  inapp_quiz_results: boolean;
  inapp_payments: boolean;
  inapp_system: boolean;
  study_reminders: boolean;
  created_at: string; updated_at: string;
};
export type NotificationPreferencesInsert = {
  user_id: string;
  email_course_updates?: boolean;
  email_certificates?: boolean;
  email_payments?: boolean;
  email_promotions?: boolean;
  inapp_course_updates?: boolean;
  inapp_certificates?: boolean;
  inapp_quiz_results?: boolean;
  inapp_payments?: boolean;
  inapp_system?: boolean;
  study_reminders?: boolean;
};
export type NotificationPreferencesUpdate = Partial<Omit<NotificationPreferences, "id" | "user_id" | "created_at">>;

export type AnimationQuality = "standard" | "premium";
export type AnimationStatus = "pending" | "generating" | "ready" | "error";

export type AiAnimation = {
  id: string; lesson_id: string;
  tipo: AnimationQuality; status: AnimationStatus;
  roteiro: Record<string, unknown> | null;
  urls: Record<string, string>[] | null;
  model: string | null; custo_usd: number | null;
  created_at: string; updated_at: string;
};
export type AiAnimationInsert = {
  lesson_id: string; tipo?: AnimationQuality; status?: AnimationStatus;
  roteiro?: Record<string, unknown> | null; urls?: Record<string, string>[] | null;
  model?: string | null; custo_usd?: number | null;
};
export type AiAnimationUpdate = Partial<Omit<AiAnimation, "id" | "created_at">>;

export type Setting = {
  key: string; value: unknown; descricao: string | null; updated_at: string;
};
export type SettingInsert = Omit<Setting, "updated_at">;
export type SettingUpdate = Partial<Pick<Setting, "value" | "descricao">>;

export type AdminCourseStat = {
  id: string; titulo: string; nivel: CourseLevel; categoria: CourseCategory;
  tipo: CourseType; ativo: boolean; total_aulas: number;
  avaliacao_media: number; total_alunos: number; total_certificados: number;
  progresso_medio: number; created_at: string;
};

export type AdminDashboardMetrics = {
  total_users: number; alunos_mit: number; total_courses: number;
  total_enrollments: number; total_certificates: number;
  receita_total: number; new_users_30d: number; new_enrollments_30d: number;
};

// ── Blog Posts Types ───────────────────────────────────────

export type BlogPost = {
  id: string; titulo: string; slug: string;
  resumo: string | null; conteudo: string;
  thumbnail_url: string | null; categoria: string;
  tags: string[]; autor_id: string | null;
  publicado: boolean; destaque: boolean;
  views: number; tempo_leitura: number;
  meta_title: string | null; meta_description: string | null;
  og_image_url: string | null;
  created_at: string; updated_at: string;
};
export type BlogPostInsert = {
  titulo: string; slug: string; conteudo: string;
  resumo?: string | null; thumbnail_url?: string | null;
  categoria?: string; tags?: string[]; autor_id?: string | null;
  publicado?: boolean; destaque?: boolean; views?: number;
  tempo_leitura?: number; meta_title?: string | null;
  meta_description?: string | null; og_image_url?: string | null;
};
export type BlogPostUpdate = Partial<Omit<BlogPost, "id" | "created_at">>;

// ── Collections Types ──────────────────────────────────────

export type Collection = {
  id: string; titulo: string; slug: string;
  descricao: string | null; ativo: boolean;
  ordem: number; created_at: string; updated_at: string;
};
export type CollectionInsert = {
  titulo: string; slug: string;
  descricao?: string | null; ativo?: boolean; ordem?: number;
};
export type CollectionUpdate = Partial<Omit<Collection, "id" | "created_at">>;

export type CollectionCourse = {
  id: string; collection_id: string; course_id: string; ordem: number;
};
export type CollectionCourseInsert = { collection_id: string; course_id: string; ordem?: number };
export type CollectionCourseUpdate = Partial<Omit<CollectionCourse, "id">>;

// ── Webhook Log Types ──────────────────────────────────────

export type WebhookLog = {
  id: string; provider: string; event_type: string;
  external_id: string; processed: boolean; created_at: string;
};
export type WebhookLogInsert = {
  provider: string; event_type: string;
  external_id: string; processed?: boolean;
};

// ── AI Explanations Types ──────────────────────────────────

export type AiExplanation = {
  id: string; lesson_id: string; tipo: string;
  explanation: string | null; content: string | null;
  model: string; created_at: string;
};
export type AiExplanationInsert = {
  lesson_id: string; tipo?: string;
  explanation?: string | null; content?: string | null;
  model: string;
};

// ── AI Memory Types ────────────────────────────────────────

export type AiMemory = {
  id: string; categoria: string; tipo: string;
  chave: string; conteudo: string;
  contexto: Record<string, any> | null;
  vezes_usado: number; score: number;
  created_at: string; updated_at: string;
};
export type AiMemoryInsert = {
  categoria: string; tipo?: string;
  chave: string; conteudo: string;
  contexto?: Record<string, any> | null;
  vezes_usado?: number; score?: number;
};
export type AiMemoryUpdate = Partial<Omit<AiMemory, "id" | "created_at">>;

// ── Partner Types ──────────────────────────────────────────

export type InstructorPartner = {
  id: string; nome: string; email: string;
  cpf: string | null; telefone: string | null;
  bio: string | null; avatar_url: string | null;
  instructor_id: string | null; asaas_wallet_id: string | null;
  asaas_customer_id: string | null; comissao_padrao: number;
  ativo: boolean; created_at: string; updated_at: string;
};
export type InstructorPartnerInsert = {
  nome: string; email: string;
  cpf?: string | null; telefone?: string | null;
  bio?: string | null; avatar_url?: string | null;
  instructor_id?: string | null; asaas_wallet_id?: string | null;
  asaas_customer_id?: string | null; comissao_padrao?: number;
  ativo?: boolean;
};
export type InstructorPartnerUpdate = Partial<Omit<InstructorPartner, "id" | "created_at">>;

export type PartnerCourse = {
  id: string; partner_id: string; course_id: string;
  comissao_percentual: number | null; comissao_indicacao: number;
  ativo: boolean; created_at: string;
};
export type PartnerCourseInsert = {
  partner_id: string; course_id: string;
  comissao_percentual?: number | null;
  comissao_indicacao?: number; ativo?: boolean;
};
export type PartnerCourseUpdate = Partial<Omit<PartnerCourse, "id" | "created_at">>;

export type PartnerCommission = {
  id: string; partner_id: string; enrollment_id: string | null;
  course_id: string; valor_venda: number; valor_liquido: number;
  comissao_percentual: number; valor_comissao: number;
  valor_plataforma: number; asaas_split_id: string | null;
  tipo_indicacao: string; status: string;
  pago_em: string | null; created_at: string;
};
export type PartnerCommissionInsert = {
  partner_id: string; course_id: string;
  enrollment_id?: string | null; valor_venda: number;
  valor_liquido: number; comissao_percentual: number;
  valor_comissao: number; valor_plataforma: number;
  asaas_split_id?: string | null; tipo_indicacao?: string;
  status?: string; pago_em?: string | null;
};

// ── Database type (formato supabase-js v2) ─────────────────

export type Database = {
  public: {
    Tables: {
      users: { Row: User; Insert: UserInsert; Update: UserUpdate; Relationships: [] };
      courses: { Row: Course; Insert: CourseInsert; Update: CourseUpdate; Relationships: [] };
      modules: { Row: Module; Insert: ModuleInsert; Update: ModuleUpdate; Relationships: [] };
      lessons: { Row: Lesson; Insert: LessonInsert; Update: LessonUpdate; Relationships: [] };
      enrollments: { Row: Enrollment; Insert: EnrollmentInsert; Update: EnrollmentUpdate; Relationships: [] };
      progress: { Row: Progress; Insert: ProgressInsert; Update: ProgressUpdate; Relationships: [] };
      quizzes: { Row: Quiz; Insert: QuizInsert; Update: QuizUpdate; Relationships: [] };
      quiz_questions: { Row: QuizQuestion; Insert: QuizQuestionInsert; Update: QuizQuestionUpdate; Relationships: [] };
      quiz_options: { Row: QuizOption; Insert: QuizOptionInsert; Update: QuizOptionUpdate; Relationships: [] };
      quiz_attempts: { Row: QuizAttempt; Insert: QuizAttemptInsert; Update: never; Relationships: [] };
      notes: { Row: Note; Insert: NoteInsert; Update: NoteUpdate; Relationships: [] };
      certificates: { Row: Certificate; Insert: CertificateInsert; Update: never; Relationships: [] };
      course_ratings: { Row: CourseRating; Insert: CourseRatingInsert; Update: CourseRatingUpdate; Relationships: [] };
      notifications: { Row: Notification; Insert: NotificationInsert; Update: NotificationUpdate; Relationships: [] };
      notification_preferences: { Row: NotificationPreferences; Insert: NotificationPreferencesInsert; Update: NotificationPreferencesUpdate; Relationships: [] };
      activity_log: { Row: ActivityLog; Insert: ActivityLogInsert; Update: never; Relationships: [] };
      settings: { Row: Setting; Insert: SettingInsert; Update: SettingUpdate; Relationships: [] };
      ai_animations: { Row: AiAnimation; Insert: AiAnimationInsert; Update: AiAnimationUpdate; Relationships: [] };
      blog_posts: { Row: BlogPost; Insert: BlogPostInsert; Update: BlogPostUpdate; Relationships: [] };
      collections: { Row: Collection; Insert: CollectionInsert; Update: CollectionUpdate; Relationships: [] };
      collection_courses: { Row: CollectionCourse; Insert: CollectionCourseInsert; Update: CollectionCourseUpdate; Relationships: [] };
      webhook_log: { Row: WebhookLog; Insert: WebhookLogInsert; Update: never; Relationships: [] };
      ai_explanations: { Row: AiExplanation; Insert: AiExplanationInsert; Update: never; Relationships: [] };
      ai_memory: { Row: AiMemory; Insert: AiMemoryInsert; Update: AiMemoryUpdate; Relationships: [] };
      instructor_partners: { Row: InstructorPartner; Insert: InstructorPartnerInsert; Update: InstructorPartnerUpdate; Relationships: [] };
      partner_courses: { Row: PartnerCourse; Insert: PartnerCourseInsert; Update: PartnerCourseUpdate; Relationships: [] };
      partner_commissions: { Row: PartnerCommission; Insert: PartnerCommissionInsert; Update: never; Relationships: [] };
    };
    Views: {
      admin_course_stats: { Row: AdminCourseStat; Relationships: [] };
      admin_dashboard_metrics: { Row: AdminDashboardMetrics; Relationships: [] };
    };
    Functions: {
      user_has_course_access: { Args: { p_user_id: string; p_course_id: string }; Returns: boolean };
      recalculate_enrollment_progress: { Args: { p_user_id: string; p_course_id: string }; Returns: undefined };
      is_admin: { Args: Record<never, never>; Returns: boolean };
      get_my_role: { Args: Record<never, never>; Returns: UserRole };
    };
    Enums: {
      user_role: UserRole; course_level: CourseLevel; course_category: CourseCategory;
      course_type: CourseType; access_type: AccessType; enrollment_status: EnrollmentStatus;
      payment_provider: PaymentProvider; content_type: ContentType; activity_type: ActivityType;
      notification_type: NotificationType;
    };
    CompositeTypes: Record<never, never>;
  };
};

// ── Composite types (joins) ────────────────────────────────

export type CourseWithModules = Course & { modules: (Module & { lessons: Lesson[] })[] };
export type LessonWithProgress = Lesson & { progress?: Progress | null; quiz?: Quiz | null };
export type ModuleWithLessonsAndProgress = Module & { lessons: LessonWithProgress[] };
export type CourseWithProgress = Course & { enrollment?: Enrollment | null; modules: ModuleWithLessonsAndProgress[] };
export type UserWithStats = User & { total_courses: number; total_certificates: number; total_hours: number };

// ── Subscription types ───────────────────────────────────
export type SubscriptionStatus = "pendente" | "ativo" | "cancelado" | "expirado" | "inadimplente";
export type SubscriptionCiclo = "mensal" | "anual";

export type SubscriptionPlan = {
  id: string; nome: string; descricao: string | null;
  preco_mensal: number; preco_anual: number | null;
  ativo: boolean; max_cursos: number | null;
  features: string[];
  created_at: string; updated_at: string;
};

export type Subscription = {
  id: string; user_id: string; plan_id: string;
  status: SubscriptionStatus;
  asaas_subscription_id: string | null;
  asaas_customer_id: string | null;
  ciclo: SubscriptionCiclo;
  data_inicio: string | null;
  data_proximo_pagamento: string | null;
  data_cancelamento: string | null;
  created_at: string; updated_at: string;
};
