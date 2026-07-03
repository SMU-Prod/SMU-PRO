"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { adminRemoveEnrollment, adminRemoveAllCourseEnrollments } from "@/lib/actions/users";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Trash2, Mail, AlertTriangle, Search } from "lucide-react";

interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  tipo_acesso: string;
  status: string;
  progresso: number;
  created_at: string;
  valor_pago?: number | null;
  users: {
    id: string;
    nome: string;
    email: string;
    avatar_url?: string | null;
    clerk_id: string;
  };
  courses: {
    id: string;
    titulo: string;
    slug: string;
  };
}

interface Props {
  courseId: string;
  courseTitulo: string;
  enrollments: Enrollment[];
}

export function CourseEnrollmentManager({ courseId, courseTitulo, enrollments: initialEnrollments }: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [removing, setRemoving] = useState<string | null>(null);
  const [removingAll, setRemovingAll] = useState(false);

  const filtered = initialEnrollments.filter((e) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      e.users?.nome?.toLowerCase().includes(q) ||
      e.users?.email?.toLowerCase().includes(q)
    );
  });

  const handleRemove = async (enrollmentId: string, studentName: string) => {
    if (!confirm(`Remover a matrícula de "${studentName}" deste curso?\n\nO aluno perderá acesso e todo o progresso será apagado.`)) return;
    setRemoving(enrollmentId);
    try {
      await adminRemoveEnrollment(enrollmentId);
      router.refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao remover matrícula");
    } finally {
      setRemoving(null);
    }
  };

  const handleRemoveAll = async () => {
    if (initialEnrollments.length === 0) return;
    const confirmMsg = `Remover TODAS as ${initialEnrollments.length} matrículas de "${courseTitulo}"?\n\n⚠️ Todos os alunos perderão acesso e progresso. Esta ação é irreversível!`;
    if (!confirm(confirmMsg)) return;

    const confirmText = prompt(`Para confirmar, digite "REMOVER TODOS"`);
    if (confirmText !== "REMOVER TODOS") {
      alert("Texto não confere. Operação cancelada.");
      return;
    }

    setRemovingAll(true);
    try {
      await adminRemoveAllCourseEnrollments(courseId);
      router.refresh();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao remover matrículas");
    } finally {
      setRemovingAll(false);
    }
  };

  const tipoLabel = (tipo: string) => {
    switch (tipo) {
      case "pago": return "Pago";
      case "projeto_cultural": return "MIT";
      case "manual": return "Manual";
      default: return "Grátis";
    }
  };

  const statusLabel = (status: string) => {
    switch (status) {
      case "ativo": return { label: "Ativo", variant: "success" as const };
      case "pendente": return { label: "Pendente", variant: "secondary" as const };
      case "expirado": return { label: "Expirado", variant: "secondary" as const };
      case "cancelado": return { label: "Cancelado", variant: "danger" as const };
      default: return { label: status, variant: "secondary" as const };
    }
  };

  return (
    <div className="space-y-4">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-sm">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-light" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar aluno por nome ou email..."
            className="w-full h-9 rounded-lg border border-border bg-surface pl-8 pr-3 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 transition-colors"
          />
        </div>

        {initialEnrollments.length > 0 && (
          <Button
            variant="destructive"
            size="sm"
            onClick={handleRemoveAll}
            loading={removingAll}
            className="gap-1.5"
          >
            <AlertTriangle size={14} />
            Remover todas ({initialEnrollments.length})
          </Button>
        )}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <Card>
          <CardContent className="py-16 text-center">
            <Users size={48} className="mx-auto text-muted-light mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {search ? "Nenhum aluno encontrado" : "Nenhuma matrícula"}
            </h3>
            <p className="text-sm text-muted-light">
              {search
                ? "Tente ajustar a busca."
                : "Este curso ainda não possui alunos matriculados."}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Student list */}
      <div className="space-y-2">
        {filtered.map((enrollment) => {
          const { label: statusLbl, variant: statusVar } = statusLabel(enrollment.status);
          return (
            <Card key={enrollment.id}>
              <CardContent className="p-4 flex items-center gap-4">
                {/* Avatar */}
                <div className="h-10 w-10 rounded-full bg-surface-3 flex items-center justify-center shrink-0 overflow-hidden">
                  {enrollment.users?.avatar_url ? (
                    <Image
                      src={enrollment.users.avatar_url}
                      alt={enrollment.users?.nome ?? "Avatar"}
                      width={40}
                      height={40}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-sm font-bold text-muted-light">
                      {(enrollment.users?.nome ?? "?")[0]?.toUpperCase()}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-foreground truncate">{enrollment.users?.nome ?? "—"}</p>
                  <p className="text-xs text-muted-light truncate flex items-center gap-1">
                    <Mail size={10} /> {enrollment.users?.email ?? "—"}
                  </p>
                </div>

                {/* Progresso */}
                <div className="hidden lg:block text-center">
                  <p className="text-sm font-semibold text-foreground">{enrollment.progresso}%</p>
                  <p className="text-[10px] text-muted-light">Progresso</p>
                </div>

                {/* Tipo acesso */}
                <Badge
                  variant={enrollment.tipo_acesso === "pago" ? "default" : "free"}
                  className="shrink-0 text-xs"
                >
                  {tipoLabel(enrollment.tipo_acesso)}
                </Badge>

                {/* Status */}
                <Badge variant={statusVar} className="shrink-0 text-xs">
                  {statusLbl}
                </Badge>

                {/* Data */}
                <span className="text-xs text-muted-light shrink-0 hidden md:block">
                  {new Date(enrollment.created_at).toLocaleDateString("pt-BR")}
                </span>

                {/* Remover */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-red-400 hover:text-red-300 hover:bg-red-500/10 shrink-0"
                  title="Remover matrícula"
                  aria-label={`Remover matrícula de ${enrollment.users?.nome}`}
                  loading={removing === enrollment.id}
                  onClick={() => handleRemove(enrollment.id, enrollment.users?.nome ?? "aluno")}
                >
                  <Trash2 size={14} />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
