// ============================================================
// SMU PRO — Database Types para Supabase JS v2
// Formato exato que supabase-js espera (com Relationships)
// ============================================================

export type UserRole = "visitor" | "trainee" | "junior" | "pleno" | "projeto_cultural" | "admin" | "content_manager";
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
  ativo: boolean; ultimo_acesso: string | null;
  created_at: string; updated_at: string;
};
export type UserInsert = Omit<User, "id" | "created_at" | "updated_at"> & { id?: string };
export type UserUpdate = Partial<Omit<User, "id" | "created_at">>;

export type Course = {
  id: string; titulo: string; slug: string;
  descricao: string | null; descricao_curta: string | null;
  nivel: CourseLevel; categoria: CourseCategory; categorias: string[];
  tipo: CourseType; preco: number | null; carga_horaria: number | null;
  thumbnail_url: string | null; trailer_youtube_id: string | null;
  ativo: boolean; destaque: boolean; ordem: number;
  total_aulas: number; total_alunos: number; avaliacao_media: number;
  criado_por: string | null; created_at: string; updated_at: string;
};
export type CourseInsert = {
  titulo: string; slug: string; nivel: CourseLevel; categoria: CourseCategory; tipo: CourseType;
  descricao?: string | null; descricao_curta?: string | null;
  categorias?: string[]; preco?: number | null; carga_horaria?: number | null;
  thumbnail_url?: string | null; trailer_youtube_id?: string | null;
  ativo?: boolean; destaque?: boolean; ordem?: number; criado_por?: string | null;
};
export type CourseUpdate = Partial<Omit<Course, "id" | "created_at">>;

export type Module = {
  id: string; course_id: string; titulo: string;
  descricao: string | null; ordem: number;
  created_at: string; updated_at: string;
};
export type ModuleInsert = { course_id: string; titulo: string; descricao?: string | null; ordem?: number };
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
};
export type CertificateInsert = {
  user_id: string; course_id: string;
  pdf_path?: string | null; nota_final?: number | null;
  carga_horaria?: number | null; projeto_cultural?: boolean;
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
