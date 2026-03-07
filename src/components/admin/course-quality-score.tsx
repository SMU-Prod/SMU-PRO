"use client";

import { useState } from "react";
import { adminToggleCourse } from "@/lib/actions/courses";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, XCircle, Zap, Eye, Loader2 } from "lucide-react";
import Link from "next/link";

interface QualityItem {
  label: string;
  status: "ok" | "warn" | "error";
  detail?: string;
}

function computeChecks(course: any): QualityItem[] {
  const modules: any[] = course.modules ?? [];
  const allLessons: any[] = modules.flatMap((m: any) => m.lessons ?? []);

  const checks: QualityItem[] = [];

  checks.push({
    label: "Curso tem thumbnail",
    status: course.thumbnail_url ? "ok" : "warn",
    detail: course.thumbnail_url ? undefined : "Adicione uma imagem de capa atraente",
  });

  checks.push({
    label: "Descrição completa",
    status: course.descricao && course.descricao.length >= 50 ? "ok" : "warn",
    detail: !course.descricao ? "Nenhuma descrição cadastrada" : course.descricao.length < 50 ? "Descrição muito curta (< 50 caracteres)" : undefined,
  });

  checks.push({
    label: "Descrição curta",
    status: course.descricao_curta ? "ok" : "warn",
    detail: "Aparece nos cards de busca",
  });

  checks.push({
    label: "Tem pelo menos 1 módulo",
    status: modules.length > 0 ? "ok" : "error",
    detail: modules.length === 0 ? "Crie módulos no Currículo" : undefined,
  });

  checks.push({
    label: "Tem pelo menos 3 aulas",
    status: allLessons.length >= 3 ? "ok" : allLessons.length > 0 ? "warn" : "error",
    detail: allLessons.length === 0 ? "Nenhuma aula criada" : allLessons.length < 3 ? `Apenas ${allLessons.length} aula(s) — recomendado mínimo 3` : undefined,
  });

  const lessonsWithoutVideo = allLessons.filter(
    (l: any) => (l.tipo === "video" || l.tipo === "misto") && !l.youtube_id
  );
  checks.push({
    label: "Aulas de vídeo têm YouTube ID",
    status: lessonsWithoutVideo.length === 0 ? "ok" : "warn",
    detail: lessonsWithoutVideo.length > 0 ? `${lessonsWithoutVideo.length} aula(s) sem vídeo: ${lessonsWithoutVideo.slice(0, 2).map((l: any) => l.titulo).join(", ")}` : undefined,
  });

  const hasPreview = allLessons.some((l: any) => l.preview_gratis);
  checks.push({
    label: "Tem aula de preview gratuito",
    status: hasPreview ? "ok" : "warn",
    detail: !hasPreview ? "Nenhuma aula marcada como preview — alunos não podem experimentar o curso" : undefined,
  });

  if (course.tipo === "pago") {
    checks.push({
      label: "Preço configurado",
      status: course.preco && course.preco > 0 ? "ok" : "error",
      detail: "Curso pago sem preço definido",
    });
  }

  const emptyModules = modules.filter((m: any) => (m.lessons ?? []).length === 0);
  if (modules.length > 0) {
    checks.push({
      label: "Todos os módulos têm aulas",
      status: emptyModules.length === 0 ? "ok" : "warn",
      detail: emptyModules.length > 0 ? `${emptyModules.length} módulo(s) vazio(s): ${emptyModules.slice(0, 2).map((m: any) => m.titulo).join(", ")}` : undefined,
    });
  }

  if (course.carga_horaria) {
    checks.push({
      label: "Carga horária configurada",
      status: "ok",
    });
  } else {
    checks.push({
      label: "Carga horária configurada",
      status: "warn",
      detail: "Aparece no certificado — configure nas informações do curso",
    });
  }

  return checks;
}

function computeScore(checks: QualityItem[]): number {
  const total = checks.length;
  const ok = checks.filter((c) => c.status === "ok").length;
  const warn = checks.filter((c) => c.status === "warn").length;
  return Math.round(((ok + warn * 0.5) / total) * 100);
}

export function CourseQualityScore({ course }: { course: any }) {
  const checks = computeChecks(course);
  const score = computeScore(checks);
  const errors = checks.filter((c) => c.status === "error");
  const warnings = checks.filter((c) => c.status === "warn");
  const [publishing, setPublishing] = useState(false);

  const scoreColor =
    score >= 80 ? "text-emerald-600" :
    score >= 50 ? "text-amber-600" :
    "text-red-500";

  const scoreRing =
    score >= 80 ? "stroke-emerald-500" :
    score >= 50 ? "stroke-amber-400" :
    "stroke-red-400";

  const canPublish = errors.length === 0;

  const handlePublish = async () => {
    setPublishing(true);
    try {
      await adminToggleCourse(course.id, true);
      window.location.reload();
    } finally {
      setPublishing(false);
    }
  };

  const circumference = 2 * Math.PI * 28;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  return (
    <div className="space-y-4">
      {/* Score card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="flex items-center gap-6">
          {/* Circle progress */}
          <div className="relative shrink-0">
            <svg width={72} height={72} className="-rotate-90">
              <circle cx={36} cy={36} r={28} fill="none" stroke="#e5e7eb" strokeWidth={6} />
              <circle
                cx={36} cy={36} r={28}
                fill="none"
                className={scoreRing}
                strokeWidth={6}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.6s ease" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={cn("text-lg font-bold", scoreColor)}>{score}</span>
            </div>
          </div>

          <div className="flex-1">
            <p className="font-semibold text-gray-900 text-lg">
              {score >= 80 ? "Pronto para publicar! 🎉" : score >= 50 ? "Quase lá..." : "Precisa de atenção"}
            </p>
            <p className="text-sm text-gray-500 mt-0.5">
              {checks.filter((c) => c.status === "ok").length}/{checks.length} critérios atendidos
            </p>
            <div className="flex items-center gap-2 mt-2 text-xs">
              {errors.length > 0 && (
                <span className="flex items-center gap-1 text-red-600">
                  <XCircle size={12} /> {errors.length} erro{errors.length > 1 ? "s" : ""}
                </span>
              )}
              {warnings.length > 0 && (
                <span className="flex items-center gap-1 text-amber-600">
                  <AlertCircle size={12} /> {warnings.length} aviso{warnings.length > 1 ? "s" : ""}
                </span>
              )}
              {errors.length === 0 && warnings.length === 0 && (
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 size={12} /> Tudo certo!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Publish action */}
        {!course.ativo && (
          <div className={cn(
            "mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3",
          )}>
            <p className="text-sm text-gray-500">
              {canPublish
                ? "Curso pronto para publicação."
                : "Corrija os erros antes de publicar."}
            </p>
            <Button
              size="sm"
              onClick={handlePublish}
              disabled={!canPublish || publishing}
            >
              {publishing ? <Loader2 size={13} className="animate-spin" /> : <Zap size={13} />}
              Publicar Agora
            </Button>
          </div>
        )}
        {course.ativo && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-emerald-600">
            <Eye size={14} />
            <span>Curso publicado e visível para alunos</span>
          </div>
        )}
      </div>

      {/* Checklist */}
      <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
        <div className="px-5 py-3 border-b border-gray-100 bg-gray-50">
          <p className="text-sm font-semibold text-gray-900">Checklist de Qualidade</p>
        </div>
        <div className="divide-y divide-gray-100">
          {checks.map((item, i) => (
            <div key={i} className="flex items-start gap-3 px-5 py-3">
              <div className="mt-0.5 shrink-0">
                {item.status === "ok" && <CheckCircle2 size={16} className="text-emerald-500" />}
                {item.status === "warn" && <AlertCircle size={16} className="text-amber-400" />}
                {item.status === "error" && <XCircle size={16} className="text-red-500" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className={cn("text-sm", item.status === "ok" ? "text-gray-700" : item.status === "warn" ? "text-amber-700" : "text-red-700")}>
                  {item.label}
                </p>
                {item.detail && item.status !== "ok" && (
                  <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick links */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Ações Rápidas</p>
        <Link
          href={`/admin/cursos/${course.id}`}
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Editar currículo
          <span className="text-gray-300">→</span>
        </Link>
        <Link
          href={`/admin/cursos/${course.id}/editar`}
          className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Editar informações
          <span className="text-gray-300">→</span>
        </Link>
      </div>
    </div>
  );
}
