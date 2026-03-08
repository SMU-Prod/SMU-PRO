"use client";

import { useState, useCallback } from "react";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { cn, formatMinutes, getLevelLabel } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { markLessonComplete } from "@/lib/actions/progress";
import { VideoPlayer } from "./video-player";
import { QuizTab } from "./quiz-tab";
import { NotesTab } from "./notes-tab";
import { AudioPlayer } from "./audio-player";
import { AiExplainer } from "./ai-explainer";
import type { Enrollment, Progress as ProgressType, QuizAttempt, Note } from "@/types/database";
import {
  CheckCircle2, Circle, ChevronDown, ChevronRight, ChevronUp,
  PlayCircle, FileText, HelpCircle, StickyNote,
  Lock, CheckCheck, BookOpen, Clock, Star, ChevronLeft, List,
  Minimize2, Maximize2, Download, Eye, EyeOff,
} from "lucide-react";

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
  notes: Note[];
  userId: string;
}

type Tab = "overview" | "materials" | "quiz" | "notes" | "content";

export function LessonPlayer({
  course,
  lesson,
  enrollment,
  progressMap,
  quizAttempts,
  notes,
  userId,
}: LessonPlayerProps) {
  const router = useRouter();
  const youtubeId = lesson.youtube_id ? extractYoutubeId(lesson.youtube_id) : null;
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>(
    () => {
      const initial: Record<string, boolean> = {};
      for (const mod of course.modules ?? []) {
        const hasCurrentLesson = mod.lessons?.some((l: any) => l.id === lesson.id);
        initial[mod.id] = hasCurrentLesson;
      }
      return initial;
    }
  );
  const [videoExpanded, setVideoExpanded] = useState(true);
  const [marking, setMarking] = useState(false);
  const [isCompleted, setIsCompleted] = useState(
    progressMap[lesson.id]?.concluido ?? false
  );

  const hasAccess = !!enrollment || lesson.preview_gratis;

  const totalLessons =
    course.modules?.reduce((acc: number, mod: any) => acc + (mod.lessons?.length ?? 0), 0) ?? 0;
  const completedLessons = Object.values(progressMap).filter((p) => p.concluido).length;
  const courseProgress = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;

  const allLessons = course.modules?.flatMap((m: any) => m.lessons ?? []) ?? [];
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

  const CourseContentList = () => (
    <div className="flex flex-col">
      {/* Progress header */}
      <div className="px-4 py-3 border-b border-border bg-surface shrink-0">
        <div className="flex items-center gap-2 mb-1">
          <Progress value={courseProgress} className="flex-1 h-2" />
          <span className="text-xs text-amber-400 font-semibold shrink-0">{courseProgress}%</span>
        </div>
        <p className="text-xs text-muted-light">{completedLessons}/{totalLessons} aulas concluídas</p>
      </div>
      {/* Modules */}
      {course.modules?.map((mod: any, modIdx: number) => {
        const expanded = expandedModules[mod.id] ?? false;
        const modCompleted = mod.lessons?.filter((l: any) => progressMap[l.id]?.concluido).length ?? 0;
        const modTotal = mod.lessons?.length ?? 0;
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
                <p className="text-sm font-medium text-foreground truncate">{mod.titulo}</p>
                <p className="text-xs text-muted-light mt-0.5">{modCompleted}/{modTotal} aulas</p>
              </div>
              <ChevronDown
                size={15}
                className={cn("text-muted-light transition-transform shrink-0", expanded && "rotate-180")}
              />
            </button>
            {expanded && (
              <div className="pb-1 bg-surface-2/50">
                {mod.lessons?.map((l: any) => {
                  const done = progressMap[l.id]?.concluido ?? false;
                  const isCurrent = l.id === lesson.id;
                  const locked = !hasAccess && !l.preview_gratis;
                  return (
                    <Link
                      key={l.id}
                      href={locked ? "#" : `/dashboard/cursos/${course.slug}/aulas/${l.id}`}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 text-sm transition-all group",
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
                          {l.titulo}
                        </p>
                        <p className="text-[10px] text-muted-light mt-0.5">{formatMinutes(l.duracao_min)}</p>
                      </div>
                      {l.tem_quiz && <HelpCircle size={12} className="text-amber-400 shrink-0 opacity-70" />}
                    </Link>
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
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-400 flex items-center justify-center text-white font-bold text-sm shrink-0">
            S
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">SMU Escola</p>
            <div className="flex items-center gap-1">
              <Star size={10} className="text-amber-400 fill-amber-400" />
              <span className="text-xs text-muted-light">4.9 · Instrutor Oficial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-surface-2">
      {/* ── Main Content ── */}
      <div className="flex flex-col overflow-hidden w-full lg:w-[65%]">
        {/* Top Bar */}
        <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 border-b border-border bg-surface shrink-0 gap-2">
          <div className="flex items-center gap-1.5 text-sm text-muted-light min-w-0">
            <Link href="/dashboard/cursos" className="hover:text-foreground transition-colors shrink-0 hidden sm:block">
              Meus Cursos
            </Link>
            <ChevronRight size={14} className="text-muted-light shrink-0 hidden sm:block" />
            <Link href={`/cursos/${course.slug}`} className="hover:text-foreground transition-colors shrink-0">
              <ChevronLeft size={16} className="sm:hidden" />
              <span className="hidden sm:inline truncate max-w-[120px]">{course.titulo}</span>
            </Link>
            <ChevronRight size={14} className="text-muted-light shrink-0 hidden sm:block" />
            <span className="text-foreground font-medium truncate max-w-[140px] sm:max-w-[200px] hidden sm:block">
              {lesson.titulo}
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            {prevLesson && (
              <Link href={`/dashboard/cursos/${course.slug}/aulas/${prevLesson.id}`}>
                <Button variant="secondary" size="sm" className="gap-1 px-2 sm:px-3">
                  <ChevronLeft size={14} />
                  <span className="hidden sm:inline">Anterior</span>
                </Button>
              </Link>
            )}
            {nextLesson && (
              <Link href={`/dashboard/cursos/${course.slug}/aulas/${nextLesson.id}`}>
                <Button variant="secondary" size="sm" className="gap-1 px-2 sm:px-3">
                  <span className="hidden sm:inline">Próxima</span>
                  <ChevronRight size={14} />
                </Button>
              </Link>
            )}
            <Button
              onClick={handleMarkComplete}
              loading={marking}
              disabled={isCompleted}
              variant={isCompleted ? "success" : "default"}
              size="sm"
              className="shrink-0 px-2 sm:px-3"
            >
              {isCompleted ? (
                <><CheckCheck size={15} /><span className="hidden sm:inline ml-1">Concluída</span></>
              ) : (
                <><CheckCircle2 size={15} /><span className="hidden sm:inline ml-1">Concluir</span></>
              )}
            </Button>
          </div>
        </div>

        {/* Video — colapsável */}
        <div className="relative bg-black w-full shrink-0 transition-all duration-300 ease-in-out overflow-hidden"
          style={videoExpanded
            ? { aspectRatio: "16/9", maxHeight: "52vh" }
            : { height: 0 }
          }
        >
          {youtubeId ? (
            <VideoPlayer youtubeId={youtubeId} lessonId={lesson.id} />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <div className="text-center">
                <PlayCircle size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">Sem vídeo para esta aula</p>
              </div>
            </div>
          )}
        </div>

        {/* Miniatura do vídeo quando minimizado */}
        {!videoExpanded && youtubeId && (
          <div className="bg-surface-3 border-b border-border px-4 py-2 flex items-center gap-3 shrink-0">
            <button
              onClick={() => setVideoExpanded(true)}
              className="relative w-28 h-16 rounded-lg overflow-hidden bg-black group cursor-pointer shrink-0 border border-border-strong hover:border-amber-500 transition-colors"
            >
              <Image
                src={`https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`}
                alt="Thumbnail do vídeo"
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                sizes="112px"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={24} className="text-white drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              </div>
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-muted truncate">{lesson.titulo}</p>
              <p className="text-[10px] text-muted-light">{formatMinutes(lesson.duracao_min)}</p>
            </div>
            <button
              onClick={() => setVideoExpanded(true)}
              className="p-1.5 rounded-lg text-muted-light hover:text-amber-400 hover:bg-amber-500/10 transition-colors shrink-0"
              title="Expandir vídeo"
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
                <><Minimize2 size={14} /> Minimizar vídeo</>
              ) : (
                <><Maximize2 size={14} /> Expandir vídeo</>
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
                <Badge variant={course.nivel}>{getLevelLabel(course.nivel)}</Badge>
                <Badge variant="secondary">
                  <Clock size={10} className="mr-1" />
                  {formatMinutes(lesson.duracao_min)}
                </Badge>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-foreground">{lesson.titulo}</h1>
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
                      {tab.label}
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
                  Conteúdo
                </button>
              </div>
            </div>

            {/* Tab content */}
            <div className="animate-fade-in">
              {activeTab === "overview" && (
                <div className="space-y-4 text-sm text-muted leading-relaxed">
                  {/* Audio Player + AI Explainer */}
                  {lesson.conteudo_rico && (
                    <div className="space-y-3">
                      <AudioPlayer lessonId={lesson.id} conteudo={lesson.conteudo_rico} />
                      <AiExplainer lessonId={lesson.id} titulo={lesson.titulo} conteudo={lesson.conteudo_rico} />
                    </div>
                  )}

                  {lesson.descricao ? (
                    <p>{lesson.descricao}</p>
                  ) : (
                    <p className="text-muted-light">Sem descrição para esta aula.</p>
                  )}
                  {lesson.conteudo_rico && (
                    <div
                      className="prose-light max-w-none"
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(lesson.conteudo_rico, {
                        ADD_ATTR: ["style", "class", "target", "rel"],
                        ADD_TAGS: ["mark", "sup", "sub", "img", "table", "thead", "tbody", "tr", "td", "th", "colgroup", "col"],
                      }) }}
                    />
                  )}
                </div>
              )}
              {activeTab === "materials" && <MaterialsTab lesson={lesson} />}
              {activeTab === "quiz" && (
                <QuizTab lesson={lesson} quizAttempts={quizAttempts} userId={userId} />
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

      {/* ── Right Sidebar — Course Content (35%) — desktop only ── */}
      <aside className="hidden lg:flex border-l border-border bg-surface flex-col overflow-hidden shrink-0 w-[35%]">
        {/* Header */}
        <div className="px-4 py-4 border-b border-border shrink-0">
          <h3 className="font-semibold text-foreground text-sm mb-2">Conteúdo do Curso</h3>
          <div className="flex items-center gap-2">
            <Progress value={courseProgress} className="flex-1 h-2" />
            <span className="text-xs text-amber-400 font-semibold shrink-0">{courseProgress}%</span>
          </div>
          <p className="text-xs text-muted-light mt-1">{completedLessons}/{totalLessons} aulas concluídas</p>
        </div>
        <div className="flex-1 overflow-y-auto">
          <CourseContentList />
        </div>
      </aside>
    </div>
  );
}

function MaterialsTab({ lesson }: { lesson: any }) {
  const [showPdf, setShowPdf] = useState(false);

  if (!lesson.pdf_path) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <FileText size={40} className="text-muted-light mb-3" />
        <p className="text-muted-light text-sm">Nenhum material disponível para esta aula.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Card do material */}
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
    </div>
  );
}
