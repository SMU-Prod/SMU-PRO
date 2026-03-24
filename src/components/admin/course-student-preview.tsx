"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CategoryIcon } from "@/components/ui/category-icon";
import { getLevelLabel, formatMinutes, getCategoryLabel } from "@/lib/utils";
import { cn } from "@/lib/utils";
import {
  Play, Trophy, BookOpen, Lock, ChevronRight, CheckCircle2, Circle,
  Eye, Monitor, Smartphone, Tablet, TrendingUp, FileText, ExternalLink,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────
interface Lesson {
  id: string;
  titulo: string;
  duracao?: number | null;
  preview_gratis?: boolean;
  youtube_url?: string | null;
  conteudo_rico?: string | null;
}

interface Module {
  id: string;
  titulo: string;
  lessons: Lesson[];
}

interface CourseData {
  titulo: string;
  slug?: string;
  nivel: string;
  categoria: string;
  tipo?: string;
  preco?: number | null;
  thumbnail_url?: string | null;
  carga_horaria?: number | null;
  descricao_curta?: string | null;
  descricao?: string | null;
  modules?: Module[];
}

type ViewMode = "desktop" | "tablet" | "mobile";

// ── Main Component ───────────────────────────────────────────────
export function CourseStudentPreview({ course }: { course: CourseData }) {
  const [mockProgress, setMockProgress] = useState(35);
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const allLessons = (course.modules ?? []).flatMap((m) => m.lessons);
  const firstLesson = allLessons[0] ?? null;

  const containerClass = cn(
    "mx-auto transition-all duration-300 border border-border rounded-2xl bg-background overflow-hidden",
    viewMode === "desktop" && "max-w-full",
    viewMode === "tablet" && "max-w-[768px]",
    viewMode === "mobile" && "max-w-[375px]",
  );

  return (
    <div className="space-y-5">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-surface rounded-xl border border-border p-4">
        <div className="flex items-center gap-3">
          <Eye size={16} className="text-amber-400" />
          <span className="text-sm font-semibold text-foreground">Visualização do Aluno</span>
          <Badge variant="warning" className="text-[10px]">Simulação</Badge>
          {course.slug && (
            <a href={`/cursos/${course.slug}`} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5 h-7 text-xs">
                <ExternalLink size={12} /> Abrir landing page
              </Button>
            </a>
          )}
        </div>

        <div className="flex items-center gap-3">
          {/* Viewport toggle */}
          <div className="flex items-center gap-1 bg-surface-2 rounded-lg p-0.5">
            {([
              { mode: "desktop" as ViewMode, icon: Monitor, label: "Desktop" },
              { mode: "tablet" as ViewMode, icon: Tablet, label: "Tablet" },
              { mode: "mobile" as ViewMode, icon: Smartphone, label: "Mobile" },
            ]).map(({ mode, icon: Icon, label }) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-colors",
                  viewMode === mode
                    ? "bg-amber-500 text-black"
                    : "text-muted-light hover:text-muted"
                )}
                title={label}
              >
                <Icon size={13} />
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>

          {/* Progress slider */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-muted-light whitespace-nowrap">Progresso:</span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={mockProgress}
              onChange={(e) => setMockProgress(Number(e.target.value))}
              className="w-20 accent-amber-500 h-1"
            />
            <Badge variant="default" className="text-[10px] tabular-nums w-10 justify-center">{mockProgress}%</Badge>
          </div>
        </div>
      </div>

      {/* Preview sections */}
      <div className={containerClass}>
        <div className="p-4 sm:p-6 space-y-8">

          {/* Section 1: Card em "Meus Cursos" */}
          <PreviewSection
            title="Meus Cursos"
            subtitle="Como o card aparece no dashboard do aluno"
            icon={BookOpen}
          >
            <div className={cn(
              "grid gap-5",
              viewMode === "mobile" ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3",
            )}>
              <StudentCourseCard course={course} progress={mockProgress} />
            </div>
          </PreviewSection>

          {/* Section 2: Card na Trilha */}
          <PreviewSection
            title="Trilha de Aprendizado"
            subtitle="Como o card aparece na trilha por nível"
            icon={TrendingUp}
          >
            <div className={cn(
              "grid gap-4",
              viewMode === "mobile" ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3",
            )}>
              <div>
                <p className="text-[10px] text-muted-light mb-2 text-center">Em andamento</p>
                <StudentTrilhaCard course={course} progress={mockProgress} isEnrolled={true} />
              </div>
              <div>
                <p className="text-[10px] text-muted-light mb-2 text-center">Não matriculado</p>
                <StudentTrilhaCard course={course} progress={0} isEnrolled={false} />
              </div>
              <div>
                <p className="text-[10px] text-muted-light mb-2 text-center">Concluído</p>
                <StudentTrilhaCard course={course} progress={100} isEnrolled={true} />
              </div>
            </div>
          </PreviewSection>

          {/* Section 3: Preview de Aula */}
          {allLessons.length > 0 && (
            <PreviewSection
              title="Player de Aula"
              subtitle="Como a aula aparece para o aluno"
              icon={Play}
            >
              {/* Lesson selector */}
              <div className="flex gap-2 flex-wrap mb-4">
                {allLessons.slice(0, 8).map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => setSelectedLesson(lesson)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors",
                      (selectedLesson?.id ?? firstLesson?.id) === lesson.id
                        ? "bg-amber-500 text-black border-amber-500"
                        : "bg-surface text-muted border-border hover:border-amber-500/30"
                    )}
                  >
                    {lesson.titulo}
                    {lesson.preview_gratis && (
                      <span className="ml-1 text-[9px] opacity-70">(preview)</span>
                    )}
                  </button>
                ))}
                {allLessons.length > 8 && (
                  <span className="px-3 py-1.5 text-xs text-muted-light">
                    +{allLessons.length - 8} aulas
                  </span>
                )}
              </div>

              {/* Lesson preview */}
              <LessonPreview lesson={selectedLesson ?? firstLesson} />
            </PreviewSection>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Section wrapper ──────────────────────────────────────────────
function PreviewSection({
  title,
  subtitle,
  icon: Icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-1">
        <Icon size={14} className="text-amber-400" />
        <h3 className="text-sm font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-xs text-muted-light mb-4">{subtitle}</p>
      {children}
    </section>
  );
}

// ── Student Course Card (Meus Cursos) ────────────────────────────
function StudentCourseCard({ course, progress }: { course: CourseData; progress: number }) {
  return (
    <div className="rounded-2xl bg-surface border border-border overflow-hidden hover:border-amber-500/30 hover:shadow-md transition-all">
      <div className="h-36 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-5xl overflow-hidden">
        {course.thumbnail_url ? (
          <img src={course.thumbnail_url} alt={course.titulo} className="w-full h-full object-cover" />
        ) : (
          <CategoryIcon category={course.categoria} size={40} />
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant={course.nivel as any}>{getLevelLabel(course.nivel)}</Badge>
        </div>
        <h3 className="font-bold text-foreground leading-tight mb-3 line-clamp-2">{course.titulo}</h3>
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-light mb-1.5">
            <span>Progresso</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
        <Button variant={progress === 100 ? "secondary" : "default"} size="sm" className="w-full gap-1.5 pointer-events-none">
          {progress === 0 ? <><Play size={14} /> Começar</> : progress === 100 ? <><Trophy size={14} /> Ver certificado</> : <><Play size={14} /> Continuar</>}
        </Button>
      </div>
    </div>
  );
}

// ── Student Trilha Card ──────────────────────────────────────────
function StudentTrilhaCard({ course, progress, isEnrolled }: { course: CourseData; progress: number; isEnrolled: boolean }) {
  const isDone = progress === 100;

  return (
    <div className={cn(
      "rounded-xl border bg-surface p-4 transition-all",
      isDone ? "border-emerald-200 bg-emerald-50/30" : isEnrolled ? "border-amber-500/20" : "border-border"
    )}>
      <div className="flex items-start gap-3 mb-3">
        <div className="shrink-0 mt-0.5">
          <CategoryIcon category={course.categoria} size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">{course.titulo}</p>
          {course.carga_horaria && (
            <p className="text-xs text-muted-light mt-1">{formatMinutes(course.carga_horaria)}</p>
          )}
        </div>
        <div className="shrink-0">
          {isDone ? <CheckCircle2 size={18} className="text-emerald-500" /> : isEnrolled ? <Circle size={18} className="text-amber-400" /> : <Lock size={16} className="text-muted-light" />}
        </div>
      </div>
      {isEnrolled && (
        <div className="mb-3">
          <Progress value={progress} className="h-1.5" />
          <p className="text-xs text-muted-light mt-1">{progress}% concluído</p>
        </div>
      )}
      <Button variant={isDone ? "success" : isEnrolled ? "default" : "secondary"} size="sm" className="w-full gap-1.5 pointer-events-none">
        {isDone ? <><Trophy size={13} /> Ver certificado</> : isEnrolled ? <><Play size={13} /> Continuar</> : <><ChevronRight size={13} /> Ver curso</>}
      </Button>
    </div>
  );
}

// ── Lesson Preview (Player embed) ────────────────────────────────
function LessonPreview({ lesson }: { lesson: Lesson | null }) {
  if (!lesson) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface-2 p-8 text-center">
        <FileText size={32} className="text-muted-light mx-auto mb-2" />
        <p className="text-sm text-muted-light">Nenhuma aula disponível para preview</p>
      </div>
    );
  }

  const youtubeId = lesson.youtube_url ? extractYoutubeId(lesson.youtube_url) : null;

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      {/* Video area */}
      {youtubeId ? (
        <div className="aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={lesson.titulo}
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center">
          <div className="text-center">
            <Play size={48} className="text-muted-light mx-auto mb-2" />
            <p className="text-sm text-muted-light">Sem vídeo — conteúdo rico disponível</p>
          </div>
        </div>
      )}

      {/* Lesson info */}
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h4 className="font-semibold text-foreground text-sm">{lesson.titulo}</h4>
          <div className="flex items-center gap-2 shrink-0">
            {lesson.preview_gratis && <Badge variant="success" className="text-[10px]">Preview</Badge>}
            {lesson.duracao && (
              <span className="text-xs text-muted-light">{formatMinutes(lesson.duracao)}</span>
            )}
          </div>
        </div>

        {/* Rich content preview */}
        {lesson.conteudo_rico && (
          <div
            className="prose prose-sm prose-invert max-w-none text-sm text-muted [&_h1]:text-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground [&_a]:text-amber-400 max-h-48 overflow-hidden relative"
          >
            <div dangerouslySetInnerHTML={{ __html: lesson.conteudo_rico }} />
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-surface to-transparent" />
          </div>
        )}

        {/* Simulated tabs */}
        <div className="flex gap-0 border-t border-border pt-3">
          {["Conteúdo", "Materiais", "Quiz", "Anotações"].map((tab, i) => (
            <div
              key={tab}
              className={cn(
                "px-3 py-1.5 text-xs font-medium border-b-2 transition-colors",
                i === 0 ? "border-amber-500 text-amber-400" : "border-transparent text-muted-light"
              )}
            >
              {tab}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────
function extractYoutubeId(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
  );
  return match?.[1] ?? null;
}
