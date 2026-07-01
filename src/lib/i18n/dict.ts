/**
 * Dicionário de tradução da INTERFACE (menus, botões, rótulos).
 * Módulo NEUTRO (sem "use client") para ser usado tanto no client (useT)
 * quanto no server (getServerT). Chave = string em PT; valor = { en, es }.
 */
export type Lang = "pt" | "en" | "es";

export const DICT: Record<string, { en: string; es: string }> = {
  // ── Navegação / shell ──
  "Dashboard": { en: "Dashboard", es: "Panel" },
  "Meus Cursos": { en: "My Courses", es: "Mis Cursos" },
  "Trilha de Aprendizado": { en: "Learning Path", es: "Ruta de Aprendizaje" },
  "Certificados": { en: "Certificates", es: "Certificados" },
  "Pagamentos": { en: "Payments", es: "Pagos" },
  "Configurações": { en: "Settings", es: "Configuración" },
  "Visão Geral": { en: "Overview", es: "Visión General" },
  "Cursos": { en: "Courses", es: "Cursos" },
  "Trilhas": { en: "Paths", es: "Rutas" },
  "Blog": { en: "Blog", es: "Blog" },
  "Usuários": { en: "Users", es: "Usuarios" },
  "Instrutores": { en: "Instructors", es: "Instructores" },
  "Parceiros": { en: "Partners", es: "Socios" },
  "Relatórios": { en: "Reports", es: "Informes" },
  "Meu Painel": { en: "My Panel", es: "Mi Panel" },
  "Meus Alunos": { en: "My Students", es: "Mis Alumnos" },
  "Comissões": { en: "Commissions", es: "Comisiones" },
  "Painel Admin": { en: "Admin Panel", es: "Panel de Administrador" },
  "Gestão de Conteúdo": { en: "Content Management", es: "Gestión de Contenido" },
  "Painel Instrutor": { en: "Instructor Panel", es: "Panel de Instructor" },
  "Plataforma de Cursos": { en: "Course Platform", es: "Plataforma de Cursos" },
  "Aluno": { en: "Student", es: "Alumno" },
  "Admin": { en: "Admin", es: "Admin" },
  "Sair": { en: "Log out", es: "Salir" },
  "Modo claro": { en: "Light mode", es: "Modo claro" },
  "Modo escuro": { en: "Dark mode", es: "Modo oscuro" },
  "Ativar modo claro": { en: "Switch to light mode", es: "Activar modo claro" },
  "Ativar modo escuro": { en: "Switch to dark mode", es: "Activar modo oscuro" },
  "Abrir menu": { en: "Open menu", es: "Abrir menú" },
  "Idioma": { en: "Language", es: "Idioma" },

  // ── Dashboard do aluno ──
  "Bem-vindo de volta à SMU PRO": { en: "Welcome back to SMU PRO", es: "Bienvenido de nuevo a SMU PRO" },
  "Sequência de Estudos": { en: "Study Streak", es: "Racha de Estudio" },
  "dias consecutivos": { en: "consecutive days", es: "días consecutivos" },
  "consecutivos": { en: "consecutive", es: "consecutivos" },
  "1 dia": { en: "1 day", es: "1 día" },
  "dias": { en: "days", es: "días" },
  "Continue sua sequência de estudos!": { en: "Keep your study streak going!", es: "¡Mantén tu racha de estudio!" },
  "Cursos Matriculados": { en: "Enrolled Courses", es: "Cursos Inscritos" },
  "Concluídos": { en: "Completed", es: "Completados" },
  "Horas Estudadas": { en: "Hours Studied", es: "Horas Estudiadas" },
  "Seu Progresso": { en: "Your Progress", es: "Tu Progreso" },
  "Progresso geral": { en: "Overall progress", es: "Progreso general" },
  "Em andamento": { en: "In progress", es: "En curso" },
  "Não iniciados": { en: "Not started", es: "No iniciados" },
  "Finalizados": { en: "Finished", es: "Finalizados" },
  "Acesso Rápido": { en: "Quick Access", es: "Acceso Rápido" },
  "Explorar Catálogo": { en: "Explore Catalog", es: "Explorar Catálogo" },
  "Comece sua jornada": { en: "Start your journey", es: "Comienza tu viaje" },
  "Olá": { en: "Hi", es: "Hola" },
  "Aluno Projeto Cultural MIT": { en: "MIT Cultural Project Student", es: "Estudiante Proyecto Cultural MIT" },
  "Acesso gratuito e ilimitado a todos os cursos da plataforma.": { en: "Free, unlimited access to all courses on the platform.", es: "Acceso gratuito e ilimitado a todos los cursos de la plataforma." },
  "Continuar Estudando": { en: "Keep Studying", es: "Seguir Estudiando" },
  "Ver todos": { en: "See all", es: "Ver todos" },
  "Atividade Recente": { en: "Recent Activity", es: "Actividad Reciente" },
  "Certificados Recentes": { en: "Recent Certificates", es: "Certificados Recientes" },
  "Explorar Cursos": { en: "Explore Courses", es: "Explorar Cursos" },
  "Explore nosso catálogo de cursos e inicie sua formação profissional no mercado de eventos.": { en: "Explore our course catalog and start your professional training in the events industry.", es: "Explora nuestro catálogo de cursos y comienza tu formación profesional en el mercado de eventos." },
  "concluído": { en: "completed", es: "completado" },
  "Nota": { en: "Grade", es: "Nota" },

  // ── Player de aula (chrome) ──
  "Próxima": { en: "Next", es: "Siguiente" },
  "Anterior": { en: "Previous", es: "Anterior" },
  "Concluir": { en: "Complete", es: "Completar" },
  "Concluído": { en: "Completed", es: "Completado" },
  "Materiais": { en: "Materials", es: "Materiales" },
  "Quiz": { en: "Quiz", es: "Cuestionario" },
  "Notas": { en: "Notes", es: "Notas" },
  "Conteúdo": { en: "Contents", es: "Contenido" },
  "Conteúdo do Curso": { en: "Course Content", es: "Contenido del Curso" },
  "aulas concluídas": { en: "lessons completed", es: "lecciones completadas" },
  "Agora pratique": { en: "Now practice", es: "Ahora practica" },
  "Sem descrição para esta aula.": { en: "No description for this lesson.", es: "Sin descripción para esta lección." },

  // ── Quiz ──
  "Esta aula não possui quiz.": { en: "This lesson has no quiz.", es: "Esta lección no tiene cuestionario." },
  "Gabarito": { en: "Answer key", es: "Respuestas" },
  "Parabéns!": { en: "Congratulations!", es: "¡Felicidades!" },
  "Tente novamente": { en: "Try again", es: "Inténtalo de nuevo" },
  "Você foi aprovado no quiz desta aula.": { en: "You passed this lesson's quiz.", es: "Aprobaste el cuestionario de esta lección." },
  "Sua nota": { en: "Your score", es: "Tu nota" },
  "Nota mínima": { en: "Minimum score", es: "Nota mínima" },
  "Tentar Novamente": { en: "Try Again", es: "Intentar de Nuevo" },
  "questões": { en: "questions", es: "preguntas" },
  "para passar": { en: "to pass", es: "para aprobar" },
  "tentativas": { en: "attempts", es: "intentos" },
  "tempo limite": { en: "time limit", es: "tiempo límite" },
  "Tentativas esgotadas.": { en: "No attempts left.", es: "Intentos agotados." },
  "Quiz aprovado!": { en: "Quiz passed!", es: "¡Cuestionario aprobado!" },
  "Iniciar Quiz": { en: "Start Quiz", es: "Iniciar Cuestionario" },
  "Enviar Respostas": { en: "Submit Answers", es: "Enviar Respuestas" },
  "respondidas": { en: "answered", es: "respondidas" },
  "Melhor nota": { en: "Best score", es: "Mejor nota" },
};

/** Traduz uma string de interface para o idioma dado (PT devolve a própria string). */
export function tr(s: string, lang: Lang): string {
  if (lang === "pt") return s;
  return DICT[s]?.[lang] ?? s;
}
