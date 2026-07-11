"use client";

import { useState, useCallback, useEffect } from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn, formatMinutes, getLevelLabel } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ErrorBoundary } from "@/components/ui/error-boundary";
import { markLessonComplete } from "@/lib/actions/progress";
import { VideoPlayer } from "./video-player";
import { QuizTab } from "./quiz-tab";
import { NotesTab } from "./notes-tab";
import { AudioPlayer } from "./audio-player";
import { AnimationPlayer } from "./animation-player";
import { RichContentViewer } from "./rich-content-viewer";
import { EquipmentManuals } from "./equipment-manuals";
import { manualsForCategory } from "@/lib/equipment-manuals";
import { useLocale } from "@/lib/i18n/locale";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { courseMeta } from "@/lib/i18n/courses-meta";
import { useCourseTr } from "@/lib/i18n/pilot";
import { trModule } from "@/lib/i18n/modules";
import { useT } from "@/lib/i18n/ui";
import type { Enrollment, Progress as ProgressType, QuizAttempt, Note } from "@/types/database";
import {
  CheckCircle2, Circle, ChevronDown, ChevronRight, ChevronUp,
  PlayCircle, FileText, HelpCircle, StickyNote,
  Lock, CheckCheck, BookOpen, Clock, Star, ChevronLeft, List,
  Minimize2, Maximize2, Download, Eye, EyeOff, Menu,
  PanelRightOpen, PanelRightClose,
} from "lucide-react";
import { useSidebar } from "@/components/layout/sidebar-context";

/** Extrai o ID puro do YouTube de qualquer formato (URL completa, watch?v=, etc.) */
function extractYoutubeId(raw: string): string {
  if (!raw) return "";
  // Se já é só o ID (11 chars alfanuméricos + _-)
  if (/^[\w-]{11}$/.test(raw)) return raw;
  // youtu.be/ID
  const shortMatch = raw.match(/youtu\.be\/([\w-]{11})/);
  if (shortMatch) return shortMatch[1];
  // youtube.com/watch?v=ID ou youtube.com/embed/ID
  const longMatch = raw.match(/(?:v=|embed\/)([\w-]{11})/);
  if (longMatch) return longMatch[1];
  // Fallback: pega os últimos 11 caracteres alfanuméricos
  const fallback = raw.match(/([\w-]{11})/);
  return fallback ? fallback[1] : raw;
}

interface LessonPlayerProps {
  course: any;
  lesson: any;
  enrollment: Enrollment | null;
  progressMap: Record<string, ProgressType>;
  quizAttempts: QuizAttempt[];
  quizData?: any;
  notes: Note[];
  userId: string;
  userRole?: string | null;
}

type Tab = "overview" | "materials" | "quiz" | "notes" | "content";

export function LessonPlayer({
  course,
  lesson,
  enrollment,
  progressMap,
  quizAttempts,
  quizData,
  notes,
  userId,
  userRole,
}: LessonPlayerProps) {
  const router = useRouter();
  const youtubeId = lesson.youtube_id ? extractYoutubeId(lesson.youtube_id) : null;
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      for (const mod of course.modules ?? []) {
        const hasCurrentLesson = mod.lessons?.some((l: any) => l.id === lesson.id);
        if (hasCurrentLesson) {
          initial[mod.id] = true;
          // If this is a submodule, also expand its parent
          if (mod.parent_id) {
            initial[mod.parent_id] = true;
          }
        }
      }
      return initial;
    }
  );
  const [videoExpanded, setVideoExpanded] = useState(true);
  // Painel "Conteúdo do Curso" (direita) recolhível — libera a tela principal.
  // Inicia aberto no SSR (evita mismatch de hidratação) e aplica a preferência salva após montar.
  const [contentOpen, setContentOpen] = useState(true);
  useEffect(() => {
    try {
      const v = localStorage.getItem("smu:lessonContentOpen");
      if (v !== null) setContentOpen(v === "1");
    } catch { /* localStorage indisponível */ }
  }, []);
  const toggleContent = useCallback(() => {
    setContentOpen((prev) => {
      const next = !prev;
      try { localStorage.setItem("smu:lessonContentOpen", next ? "1" : "0"); } catch { /* noop */ }
      return next;
    });
  }, []);
  const [marking, setMarking] = useState(false);
  const [isCompleted, setIsCompleted] = useState(
    progressMap[lesson.id]?.concluido ?? false
  );

  const isAdmin = userRole === "admin";
  const hasAccess = isAdmin || enrollment?.status === "ativo" || lesson.preview_gratis;

  // ── Idioma do curso (multilíngue): carrega a tradução do curso sob demanda ──
  const locale = useLocale();
  const t = useT();
  const courseTr = useCourseTr(course.slug, locale);
  const { toggle: toggleSidebar } = useSidebar();
  const tr = courseTr?.lessons?.[lesson.id] ?? null;
  const quizTr = courseTr?.quiz ?? null;
  const dispTitulo = tr?.titulo ?? lesson.titulo;
  const dispDescricao = tr?.descricao ?? lesson.descricao;
  const dispConteudo = tr?.conteudo_rico ?? lesson.conteudo_rico;

  // ── Quiz gate: bloqueia "Concluir" se a aula tem quiz e o aluno ainda não foi aprovado ──
  const quizPassRequired = lesson.tem_quiz === true;
  const [quizJustPassed, setQuizJustPassed] = useState(false);
  const quizPassed = quizAttempts.some((a) => a.aprovado) || quizJustPassed;
  const canComplete = !quizPassRequired || quizPassed;

  // ── Flatten all lessons from all modules (root + submodules) ──
  const allLessons = course.modules?.flatMap((m: any) => m.lessons ?? []) ?? [];
  const totalLessons = allLessons.length;
  // Only count completed lessons that belong to THIS course (not other courses)
  const completedLessons = allLessons.filter((l: any) => progressMap[l.id]?.concluido).length;
  const courseProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  const currentIndex = allLessons.findIndex((l: any) => l.id === lesson.id);
  const nextLesson = allLessons[currentIndex + 1];
  const prevLesson = allLessons[currentIndex - 1];

  const handleMarkComplete = useCallback(async () => {
    if (marking || isCompleted) return;
    setMarking(true);
    try {
      await markLessonComplete(lesson.id, course.slug);
      setIsCompleted(true);
      if (nextLesson) {
        setTimeout(() => {
          router.push(`/dashboard/cursos/${course.slug}/aulas/${nextLesson.id}`);
        }, 800);
      }
    } finally {
      setMarking(false);
    }
  }, [marking, isCompleted, lesson.id, course.slug, nextLesson, router]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules((prev) => ({ ...prev, [moduleId]: !prev[moduleId] }));
  };

  const tabs: { id: Tab; label: string; icon: React.ElementType; mobileOnly?: boolean }[] = [
    { id: "overview", label: "Visão Geral", icon: BookOpen },
    { id: "materials", label: "Materiais", icon: FileText },
    { id: "quiz", label: "Quiz", icon: HelpCircle },
    { id: "notes", label: "Notas", icon: StickyNote },
    { id: "content", label: "Conteúdo", icon: List, mobileOnly: true },
  ];

  // ── Build hierarchical module structure ──
  const allModules: any[] = course.modules ?? [];
  const rootMods = allModules.filter((m: any) => !m.parent_id).sort((a: any, b: any) => a.ordem - b.ordem);
  const childModsMap = new Map<string, any[]>();
  for (const m of allModules) {
    if (m.parent_id) {
      const list = childModsMap.get(m.parent_id) ?? [];
      list.push(m);
      childModsMap.set(m.parent_id, list.sort((a: any, b: any) => a.ordem - b.ordem));
    }
  }

  // Count total lessons including submodule lessons for a root module
  const countModuleLessons = (mod: any): { total: number; completed: number } => {
    let total = mod.lessons?.length ?? 0;
    let completed = mod.lessons?.filter((l: any) => progressMap[l.id]?.concluido).length ?? 0;
    const children = childModsMap.get(mod.id) ?? [];
    for (const child of children) {
      total += child.lessons?.length ?? 0;
      completed += child.lessons?.filter((l: any) => progressMap[l.id]?.concluido).length ?? 0;
    }
    return { total, completed };
  };

  const LessonItem = ({ l, indent = false }: { l: any; indent?: boolean }) => {
    const done = progressMap[l.id]?.concluido ?? false;
    const isCurrent = l.id === lesson.id;
    const locked = !hasAccess && !l.preview_gratis;
    return (
      <Link
        key={l.id}
        href={locked ? "#" : `/dashboard/cursos/${course.slug}/aulas/${l.id}`}
        className={cn(
          "flex items-center gap-3 py-2.5 text-sm transition-all group",
          indent ? "px-6" : "px-4",
          isCurrent
            ? "bg-amber-500/10 border-l-2 border-amber-500"
            : "hover:bg-hover border-l-2 border-transparent",
          locked && "opacity-50 cursor-not-allowed"
        )}
      >
        <div className="shrink-0">
          {done ? (
            <CheckCircle2 size={16} className="text-amber-400" />
          ) : locked ? (
            <Lock size={14} className="text-muted-light" />
          ) : (
            <Circle
              size={16}
              className={cn(
                "transition-colors",
                isCurrent ? "text-amber-400" : "text-muted-light group-hover:text-muted-light"
              )}
            />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p
            className={cn(
              "truncate text-xs leading-snug",
              isCurrent ? "text-amber-400 font-medium" : done ? "text-muted-light" : "text-muted"
            )}
          >
            {courseTr?.lessons?.[l.id]?.titulo ?? l.titulo}
          </p>
          <p className="text-[10px] text-muted-light mt-0.5">{formatMinutes(l.duracao_min)}</p>
        </div>
        {l.tem_quiz && <HelpCircle size={12} className="text-amber-400 shrink-0 opacity-70" />}
      </Link>
    );
  };

  const CourseContentList = () => (
    <div className="flex flex-col">
      {/* Progress header */}
      <div className="px-4 py-3 border-b border-border bg-surface shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <Progress value={courseProgress} className="flex-1 h-2" />
          <span className="text-xs text-amber-400 font-semibold shrink-0">{courseProgress}%</span>
        </div>
        <p className="text-xs text-muted-light">{completedLessons}/{totalLessons} {t("aulas concluídas")}</p>
      </div>
      {/* Modules (only root modules, with submodules nested inside) */}
      {rootMods.map((mod: any, modIdx: number) => {
        const expanded = expandedModules[mod.id] ?? false;
        const { total: modTotal, completed: modCompleted } = countModuleLessons(mod);
        const children = childModsMap.get(mod.id) ?? [];
        return (
          <div key={mod.id} className="border-b border-border/50">
            <button
              onClick={() => toggleModule(mod.id)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-hover transition-colors text-left"
            >
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-surface-3 text-xs font-bold text-muted-light">
                {modIdx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{trModule(mod.titulo, locale)}</p>
                <p className="text-xs text-muted-light mt-0.5">{modCompleted}/{modTotal} {t("aulas")}</p>
              </div>
              <ChevronDown
                size={15}
                className={cn("text-muted-light transition-transform shrink-0", expanded && "rotate-180")}
              />
            </button>
            {expanded && (
              <div className="pb-1 bg-surface-2/50">
                {/* Root module's own lessons (direct, no submodule) */}
                {(mod.lessons ?? []).map((l: any) => (
                  <LessonItem key={l.id} l={l} />
                ))}

                {/* Sub-modules with their lessons */}
                {children.map((sub: any) => {
                  const subExpanded = expandedModules[sub.id] ?? false;
                  const subCompleted = sub.lessons?.filter((l: any) => progressMap[l.id]?.concluido).length ?? 0;
                  const subTotal = sub.lessons?.length ?? 0;
                  return (
                    <div key={sub.id} className="border-t border-border/30">
                      <button
                        onClick={() => toggleModule(sub.id)}
                        className="w-full flex items-center gap-2.5 px-4 py-2 hover:bg-hover transition-colors text-left"
                      >
                        <ChevronRight size={12} className="text-amber-400/50 shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-foreground truncate">{trModule(sub.titulo, locale)}</p>
                          <p className="text-[10px] text-muted-light">{subCompleted}/{subTotal} {t("aulas")}</p>
                        </div>
                        <ChevronDown
                          size={13}
                          className={cn("text-muted-light transition-transform shrink-0", subExpanded && "rotate-180")}
                        />
                      </button>
                      {subExpanded && (
                        <div className="bg-surface-2/80">
                          {(sub.lessons ?? []).map((l: any) => (
                            <LessonItem key={l.id} l={l} indent />
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
      {/* Instructor */}
      <div className="px-4 py-3 border-t border-border bg-surface mt-auto">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="SMU" className="h-9 w-9 rounded-full object-cover shrink-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">SMU Produções</p>
            <div className="flex items-center gap-1">
              <Star size={10} className="text-amber-400 fill-amber-400" />
              <span className="text-xs text-muted-light">4.9 · {t("Instrutor Oficial")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-surface-2">
      {/* ── Main Content ── */}
      <div className={cn("flex flex-col overflow-hidden w-full", contentOpen ? "lg:w-[65%]" : "lg:w-full")}>
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-border bg-surface shrink-0 gap-2">
          <div className="flex items-center gap-1.5 text-sm text-muted-light min-w-0">
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 -ml-1 rounded-lg text-muted hover:text-foreground hover:bg-hover transition-colors shrink-0"
              aria-label={t("Abrir menu")}
              title={t("Menu")}
            >
              <Menu size={20} />
            </button>
            <Link href="/dashboard/cursos" className="hover:text-foreground transition-colors shrink-0 hidden sm:block">
              {t("Meus Cursos")}
            </Link>
            <ChevronRight size={14} className="text-muted-light shrink-0 hidden sm:block" />
            <Link href={`/cursos/${course.slug}`} className="hover:text-foreground transition-colors shrink-0 flex items-center gap-1">
              <ChevronLeft size={16} className="sm:hidden" />
              <span className="truncate max-w-[100px] sm:max-w-[120px] text-xs sm:text-sm">{courseMeta(course.slug, locale)?.titulo ?? course.titulo}</span>
            </Link>
            <ChevronRight size={14} className="text-muted-light shrink-0 hidden sm:block" />
            <span className="text-foreground font-medium truncate max-w-[140px] sm:max-w-[200px] hidden sm:block">
              {dispTitulo}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Recolher/mostrar o painel "Conteúdo do Curso" — só desktop (no mobile a lista vem pelo menu) */}
            <button
              onClick={toggleContent}
              className={cn(
                "hidden lg:inline-flex items-center gap-1.5 rounded-lg transition-colors shrink-0",
                contentOpen
                  ? "p-2 text-muted hover:text-foreground hover:bg-hover"
                  : "px-2.5 py-2 text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 font-medium"
              )}
              aria-label={contentOpen ? t("Ocultar conteúdo do curso") : t("Mostrar conteúdo do curso")}
              title={contentOpen ? t("Ocultar conteúdo do curso") : t("Mostrar conteúdo do curso")}
            >
              {contentOpen ? <PanelRightClose size={18} /> : <PanelRightOpen size={18} />}
              {!contentOpen && <span className="text-xs">{t("Conteúdo")}</span>}
            </button>
            <LanguageSelector />
            {prevLesson && (
              <Link href={`/dashboard/cursos/${course.slug}/aulas/${prevLesson.id}`}>
                <Button variant="secondary" size="sm" className="gap-1 px-2 sm:px-3">
                  <ChevronLeft size={14} />
                  <span className="hidden sm:inline">{t("Anterior")}</span>
                </Button>
              </Link>
            )}
            {nextLesson && (
              <Link href={`/dashboard/cursos/${course.slug}/aulas/${nextLesson.id}`}>
                <Button variant="secondary" size="sm" className="gap-1 px-2 sm:px-3">
                  <span className="hidden sm:inline">{t("Próxima")}</span>
                  <ChevronRight size={14} />
                </Button>
              </Link>
            )}
            <Button
              onClick={handleMarkComplete}
              loading={marking}
              disabled={isCompleted || !canComplete}
              variant={isCompleted ? "success" : "default"}
              size="sm"
              className="shrink-0 px-2 sm:px-3"
              title={!canComplete ? "Aprove no quiz para concluir esta aula" : undefined}
            >
              {isCompleted ? (
                <><CheckCheck size={15} /><span className="hidden sm:inline ml-1">{t("Concluída")}</span></>
              ) : !canComplete ? (
                <><Lock size={15} /><span className="hidden sm:inline ml-1">Quiz pendente</span></>
              ) : (
                <><CheckCircle2 size={15} /><span className="hidden sm:inline ml-1">{t("Concluir")}</span></>
              )}
            </Button>
          </div>
        </div>

        {/* Video — colapsável (só renderiza se tiver vídeo) */}
        {youtubeId && (
          <div className="relative bg-black w-full shrink-0 transition-all duration-300 ease-in-out overflow-hidden"
            style={videoExpanded
              ? { aspectRatio: "16/9", maxHeight: "40vh" }
              : { height: 0 }
            }
          >
            <VideoPlayer youtubeId={youtubeId} lessonId={lesson.id} />
          </div>
        )}

        {/* Miniatura do vídeo quando minimizado */}
        {!videoExpanded && youtubeId && (
          <div className="bg-surface-3 border-b border-border px-4 py-2 flex items-center gap-3 shrink-0">
            <button
              onClick={() => setVideoExpanded(true)}
              className="relative w-28 h-16 rounded-lg overflow-hidden bg-black group cursor-pointer shrink-0 border border-border-strong hover:border-amber-500 transition-colors"
            >
              <Image
                src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                alt={t("Thumbnail do vídeo")}
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                sizes="112px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={24} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-muted truncate">{dispTitulo}</p>
              <p className="text-[10px] text-muted-light">{formatMinutes(lesson.duracao_min)}</p>
            </div>
            <button
              onClick={() => setVideoExpanded(true)}
              className="p-1.5 rounded-lg text-muted-light hover:text-amber-400 hover:bg-amber-500/10 transition-colors shrink-0"
              title={t("Expandir vídeo")}
            >
              <Maximize2 size={16} />
            </button>
          </div>
        )}

        {/* Botão minimizar/expandir vídeo */}
        {youtubeId && (
          <div className="flex justify-end px-3 py-1.5 bg-surface border-b border-border/50 shrink-0">
            <button
              onClick={() => setVideoExpanded((v) => !v)}
              className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-amber-500 transition-colors py-1 px-3 rounded-lg hover:bg-amber-500/10 border border-transparent hover:border-amber-500/20"
            >
              {videoExpanded ? (
                <><Minimize2 size={14} /> {t("Minimizar vídeo")}</>
              ) : (
                <><Maximize2 size={14} /> {t("Expandir vídeo")}</>
              )}
            </button>
          </div>
        )}

        {/* Lesson info + tabs */}
        <div className="flex-1 overflow-y-auto bg-surface border-t border-border">
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            {/* Title + badges */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <Badge variant={course.nivel}>{t(getLevelLabel(course.nivel))}</Badge>
                <Badge variant="secondary">
                  <Clock size={10} className="mr-1" />
                  {formatMinutes(lesson.duracao_min)}
                </Badge>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-foreground">{dispTitulo}</h1>
            </div>

            {/* Tabs */}
            <div className="border-b border-border mb-4 sm:mb-5 -mx-4 sm:-mx-6 px-4 sm:px-6">
              <div className="flex gap-0 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {tabs.map((tab) => {
                  if (!tab.mobileOnly) return null; // handled below
                  return null;
                })}
                {tabs.filter((t) => !t.mobileOnly).map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={cn(
                        "flex items-center gap-1.5 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium transition-all border-b-2 -mb-px whitespace-nowrap",
                        activeTab === tab.id
                          ? "text-amber-400 border-amber-500"
                          : "text-muted-light border-transparent hover:text-muted hover:border-border-strong"
                      )}
                    >
                      <Icon size={14} />
                      {t(tab.label)}
                      {tab.id === "quiz" && lesson.tem_quiz && (
                        <span className="ml-0.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                      )}
                    </button>
                  );
                })}
                {/* "Conteúdo" tab only on mobile */}
                <button
                  onClick={() => setActiveTab("content")}
                  className={cn(
                    "lg:hidden flex items-center gap-1.5 px-3 py-2.5 text-xs font-medium transition-all border-b-2 -mb-px whitespace-nowrap",
                    activeTab === "content"
                      ? "text-amber-400 border-amber-500"
                      : "text-muted-light border-transparent hover:text-muted hover:border-border-strong"
                  )}
                >
                  <List size={14} />
                  {t("Conteúdo")}
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="animate-fade-in">
              {activeTab === "overview" && (
                <div className="space-y-4 text-sm text-muted leading-relaxed">
                  {/* 1) Ouvir o conteúdo */}
                  {dispConteudo && (
                    <AudioPlayer key={locale} lessonId={lesson.id} conteudo={dispConteudo} lang={locale} title={dispTitulo} />
                  )}

                  {/* 2) Descrição */}
                  {dispDescricao ? (
                    <p>{dispDescricao}</p>
                  ) : (
                    <p className="text-muted-light">{t("Sem descrição para esta aula.")}</p>
                  )}

                  {/* 3) Explicação (texto da aula) — vem ANTES da prática */}
                  {dispConteudo && (
                    <ErrorBoundary>
                      <RichContentViewer
                        key={locale}
                        html={dispConteudo}
                        lessonId={lesson.id}
                        titulo={dispTitulo}
                        categoria={course.categoria ?? "outros"}
                        isAdmin={isAdmin}
                        locale={locale}
                      />
                    </ErrorBoundary>
                  )}

                  {/* 4) Prática — Simulação Interativa (game) por último */}
                  {lesson.conteudo_rico && (
                    <div className="pt-2">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="h-px flex-1 bg-border" />
                        <span className="text-xs font-semibold uppercase tracking-wide text-muted-light">
                          {t("Agora pratique")}
                        </span>
                        <span className="h-px flex-1 bg-border" />
                      </div>
                      <ErrorBoundary>
                        <AnimationPlayer
                          lessonId={lesson.id}
                          titulo={lesson.titulo}
                          conteudo={lesson.conteudo_rico}
                          categoria={course.categoria ?? "outros"}
                          isAdmin={isAdmin}
                        />
                      </ErrorBoundary>
                    </div>
                  )}
                </div>
              )}
              {activeTab === "materials" && <MaterialsTab lesson={lesson} categoria={course.categoria} />}
              {activeTab === "quiz" && (
                <QuizTab lesson={lesson} quizAttempts={quizAttempts} quizData={quizData} userId={userId} onQuizPassed={() => setQuizJustPassed(true)} quizTr={quizTr} locale={locale} lessonTitulo={dispTitulo} />
              )}
              {activeTab === "notes" && (
                <NotesTab lessonId={lesson.id} notes={notes} userId={userId} />
              )}
              {activeTab === "content" && (
                <div className="-mx-4 sm:-mx-6 -mb-4 sm:-mb-5">
                  <CourseContentList />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Sidebar — Course Content (35%) — desktop only, recolhível ── */}
      <aside
        className={cn(
          "border-l border-border bg-surface flex-col overflow-hidden shrink-0 w-[35%]",
          contentOpen ? "hidden lg:flex" : "hidden"
        )}
        aria-label="Lista de aulas"
      >
        {/* Header */}
        <div className="px-4 py-4 border-b border-border shrink-0">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-foreground text-sm">{t("Conteúdo do Curso")}</h3>
            <button
              onClick={toggleContent}
              className="p-1 rounded text-muted hover:text-foreground hover:bg-hover transition-colors shrink-0"
              aria-label={t("Ocultar conteúdo do curso")}
              title={t("Ocultar conteúdo do curso")}
            >
              <PanelRightClose size={16} />
            </button>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={courseProgress} className="flex-1 h-2" />
            <span className="text-xs text-amber-400 font-semibold shrink-0">{courseProgress}%</span>
          </div>
          <p className="text-xs text-muted-light mt-1">{completedLessons}/{totalLessons} {t("aulas concluídas")}</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          <CourseContentList />
        </div>
      </aside>
    </div>
  );
}

function MaterialsTab({ lesson, categoria }: { lesson: any; categoria?: string }) {
  const t = useT();
  const [showPdf, setShowPdf] = useState(false);
  const temManuais = manualsForCategory(categoria).length > 0;

  if (!lesson.pdf_path && !temManuais) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText size={40} className="text-muted-light mb-3" />
        <p className="text-muted-light text-sm">{t("Nenhum material disponível para esta aula.")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Card do material da aula */}
      {lesson.pdf_path && (
      <>
      <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface-2">
        <div className="h-10 w-10 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
          <FileText size={18} className="text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground">Material da Aula</p>
          <p className="text-xs text-muted-light">PDF · Visualize ou baixe</p>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <Button
            variant={showPdf ? "default" : "secondary"}
            size="sm"
            onClick={() => setShowPdf((v) => !v)}
            className="gap-1"
          >
            {showPdf ? <EyeOff size={14} /> : <Eye size={14} />}
            {showPdf ? "Fechar" : "Visualizar"}
          </Button>
          <a href={lesson.pdf_path} target="_blank" rel="noopener noreferrer" download>
            <Button variant="secondary" size="sm" className="gap-1">
              <Download size={14} /> Baixar
            </Button>
          </a>
        </div>
      </div>

      {/* Visualizador de PDF inline */}
      {showPdf && (
        <div className="rounded-xl border border-border overflow-hidden bg-surface-3 animate-fade-in">
          <iframe
            src={`${lesson.pdf_path}#toolbar=1&navpanes=0`}
            className="w-full border-0"
            style={{ height: "70vh", minHeight: 400 }}
            title="Visualizador de PDF"
          />
        </div>
      )}
      </>
      )}

      {/* Manuais oficiais dos equipamentos da categoria */}
      <EquipmentManuals categoria={categoria} />
    </div>
  );
}
