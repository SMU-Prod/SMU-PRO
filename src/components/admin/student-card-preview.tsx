"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CategoryIcon } from "@/components/ui/category-icon";
import { getLevelLabel, formatMinutes } from "@/lib/utils";
import { Play, Trophy, BookOpen, Lock, ChevronRight, CheckCircle2, Circle, X, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────
interface CourseData {
  titulo: string;
  slug?: string;
  nivel: string;
  categoria: string;
  thumbnail_url?: string | null;
  carga_horaria?: number | null;
  descricao_curta?: string | null;
}

// ── StudentCourseCard ────────────────────────────────────────────
// Replica EXATAMENTE o card de /dashboard/cursos (visão do aluno matriculado)
function StudentCourseCard({
  course,
  progress = 0,
}: {
  course: CourseData;
  progress?: number;
}) {
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

        {/* Progress */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-muted-light mb-1.5">
            <span>Progresso</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>

        <Button
          variant={progress === 100 ? "secondary" : "default"}
          size="sm"
          className="w-full gap-1.5 pointer-events-none"
        >
          {progress === 0 ? (
            <><Play size={14} /> Começar</>
          ) : progress === 100 ? (
            <><Trophy size={14} /> Ver certificado</>
          ) : (
            <><Play size={14} /> Continuar</>
          )}
        </Button>
      </div>
    </div>
  );
}

// ── StudentTrilhaCard ────────────────────────────────────────────
// Replica EXATAMENTE o card de /dashboard/trilha (visão trilha do aluno)
function StudentTrilhaCard({
  course,
  progress = 0,
  isEnrolled = false,
}: {
  course: CourseData;
  progress?: number;
  isEnrolled?: boolean;
}) {
  const isDone = progress === 100;

  return (
    <div
      className={cn(
        "rounded-xl border bg-surface p-4 transition-all",
        isDone
          ? "border-emerald-200 bg-emerald-50/30"
          : isEnrolled
          ? "border-amber-500/20 hover:shadow-sm"
          : "border-border hover:border-border-strong"
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="shrink-0 mt-0.5">
          <CategoryIcon category={course.categoria} size={24} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground line-clamp-2 leading-snug">
            {course.titulo}
          </p>
          {course.carga_horaria && (
            <p className="text-xs text-muted-light mt-1">
              {formatMinutes(course.carga_horaria)}
            </p>
          )}
        </div>
        <div className="shrink-0">
          {isDone ? (
            <CheckCircle2 size={18} className="text-emerald-500" />
          ) : isEnrolled ? (
            <Circle size={18} className="text-amber-400" />
          ) : (
            <Lock size={16} className="text-muted-light" />
          )}
        </div>
      </div>

      {isEnrolled && (
        <div className="mb-3">
          <Progress value={progress} className="h-1.5" />
          <p className="text-xs text-muted-light mt-1">{progress}% concluído</p>
        </div>
      )}

      <Button
        variant={isDone ? "success" : isEnrolled ? "default" : "secondary"}
        size="sm"
        className="w-full gap-1.5 pointer-events-none"
      >
        {isDone ? (
          <><Trophy size={13} /> Ver certificado</>
        ) : isEnrolled ? (
          <><Play size={13} /> Continuar</>
        ) : (
          <><ChevronRight size={13} /> Ver curso</>
        )}
      </Button>
    </div>
  );
}

// ── StudentPreviewModal ──────────────────────────────────────────
// Modal full-screen que mostra os cards exatamente como o aluno vê
export function StudentPreviewModal({
  course,
  open,
  onClose,
}: {
  course: CourseData;
  open: boolean;
  onClose: () => void;
}) {
  const [mockProgress, setMockProgress] = useState(35);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div
        className="bg-background rounded-2xl border border-border w-full max-w-4xl max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 border-b border-border bg-background/95 backdrop-blur-sm rounded-t-2xl">
          <div className="flex items-center gap-2">
            <Eye size={16} className="text-amber-400" />
            <span className="text-sm font-semibold text-foreground">Preview — Visão do Aluno</span>
          </div>
          <button onClick={onClose} className="text-muted-light hover:text-foreground transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-8">
          {/* Simulated progress slider */}
          <div className="flex items-center gap-4 bg-surface rounded-xl border border-border p-4">
            <span className="text-xs text-muted-light whitespace-nowrap">Simular progresso:</span>
            <input
              type="range"
              min={0}
              max={100}
              step={5}
              value={mockProgress}
              onChange={(e) => setMockProgress(Number(e.target.value))}
              className="flex-1 accent-amber-500 h-1.5"
            />
            <Badge variant="default" className="text-xs tabular-nums w-12 justify-center">{mockProgress}%</Badge>
          </div>

          {/* Card: Meus Cursos */}
          <section>
            <h3 className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen size={13} />
              Dashboard → Meus Cursos
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <StudentCourseCard course={course} progress={mockProgress} />
            </div>
          </section>

          {/* Card: Trilha de Aprendizado */}
          <section>
            <h3 className="text-xs font-semibold text-muted-light uppercase tracking-wider mb-3 flex items-center gap-2">
              <Play size={13} />
              Dashboard → Trilha de Aprendizado
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <StudentTrilhaCard course={course} progress={mockProgress} isEnrolled={mockProgress > 0} />
              <StudentTrilhaCard course={course} progress={0} isEnrolled={false} />
              <StudentTrilhaCard course={course} progress={100} isEnrolled={true} />
            </div>
            <p className="text-[10px] text-muted-light mt-2">
              Esquerda: progresso simulado · Centro: não matriculado · Direita: concluído
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

// ── StudentPreviewButton ─────────────────────────────────────────
// Botão reutilizável que abre o modal de preview
export function StudentPreviewButton({ course }: { course: CourseData }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        title="Preview: como o aluno vê"
        onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(true); }}
      >
        <Eye size={14} />
      </Button>
      <StudentPreviewModal course={course} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
