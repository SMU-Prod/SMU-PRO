"use client";

import { useLocale } from "./locale";

/**
 * Tradução da INTERFACE (menus, botões, rótulos do sistema).
 * Chave = string em português; valor = { en, es }. Em PT devolve a própria chave.
 * Uso: `const t = useT();` e envolver textos → `{t("Meus Cursos")}`.
 * Para traduzir uma tela: envolver as strings com t() e adicionar as entradas aqui.
 */
const DICT: Record<string, { en: string; es: string }> = {
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
};

export type TFn = (s: string) => string;

/** Hook: retorna a função de tradução da interface conforme o idioma escolhido. */
export function useT(): TFn {
  const locale = useLocale();
  return (s: string) => (locale === "pt" ? s : DICT[s]?.[locale] ?? s);
}
