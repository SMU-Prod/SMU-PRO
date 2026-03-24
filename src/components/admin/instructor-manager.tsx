"use client";

import { useState, useTransition } from "react";
import { SignaturePad } from "@/components/certificate/signature-pad";
import {
  createInstructor,
  updateInstructor,
  deleteInstructor,
  assignInstructor,
  removeInstructorAssignment,
} from "@/lib/actions/signatures";
import { PenTool, Trash2, Plus, UserCheck, Link2, X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  instructors: any[];
  courses: any[];
  lessons: any[];
  assignments: any[];
}

export function InstructorManager({ instructors, courses, lessons, assignments }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [showNewForm, setShowNewForm] = useState(false);
  const [signingId, setSigningId] = useState<string | null>(null);
  const [assigningId, setAssigningId] = useState<string | null>(null);

  // New instructor form state
  const [newName, setNewName] = useState("");
  const [newQual, setNewQual] = useState("");
  const [newFormacao, setNewFormacao] = useState("");
  const [newRegistro, setNewRegistro] = useState("");
  const [newTipo, setNewTipo] = useState<"instrutor" | "responsavel_tecnico">("instrutor");

  // Assignment form state
  const [assignCourseId, setAssignCourseId] = useState("");
  const [assignLessonId, setAssignLessonId] = useState("");
  const [assignTipo, setAssignTipo] = useState<"instrutor" | "responsavel_tecnico">("instrutor");

  const handleCreate = () => {
    if (!newName.trim()) return;
    startTransition(async () => {
      await createInstructor({
        nome: newName.trim(),
        qualificacao: newQual.trim() || undefined,
        formacao: newFormacao.trim() || undefined,
        registro: newRegistro.trim() || undefined,
        tipo: newTipo,
      });
      setNewName("");
      setNewQual("");
      setNewFormacao("");
      setNewRegistro("");
      setShowNewForm(false);
      router.refresh();
    });
  };

  const handleSignatureSave = (instructorId: string) => async (dataUrl: string) => {
    startTransition(async () => {
      await updateInstructor(instructorId, { assinatura_img: dataUrl });
      setSigningId(null);
      router.refresh();
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm("Desativar este instrutor?")) return;
    startTransition(async () => {
      await deleteInstructor(id);
      router.refresh();
    });
  };

  const handleAssign = (instructorId: string) => {
    if (!assignCourseId) return;
    startTransition(async () => {
      await assignInstructor({
        course_id: assignCourseId,
        lesson_id: assignLessonId || undefined,
        instructor_id: instructorId,
        tipo: assignTipo,
      });
      setAssigningId(null);
      setAssignCourseId("");
      setAssignLessonId("");
      router.refresh();
    });
  };

  const handleRemoveAssignment = (id: string) => {
    startTransition(async () => {
      await removeInstructorAssignment(id);
      router.refresh();
    });
  };

  const courseLessons = lessons.filter(
    (l: any) => l.modules?.course_id === assignCourseId
  );

  return (
    <div className="space-y-6">
      {/* ── Add new instructor ── */}
      {!showNewForm ? (
        <button
          onClick={() => setShowNewForm(true)}
          className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} /> Novo Instrutor
        </button>
      ) : (
        <div className="rounded-xl border border-border bg-surface p-4 sm:p-6 space-y-4">
          <h3 className="text-lg font-semibold text-foreground">Novo Instrutor</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-muted-light mb-1">Nome *</label>
              <input
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nome completo"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-light mb-1">Tipo *</label>
              <select
                value={newTipo}
                onChange={(e) => setNewTipo(e.target.value as any)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              >
                <option value="instrutor">Instrutor</option>
                <option value="responsavel_tecnico">Responsável Técnico</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-light mb-1">Qualificação</label>
              <input
                value={newQual}
                onChange={(e) => setNewQual(e.target.value)}
                placeholder="Ex: Eng. Segurança do Trabalho"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-light mb-1">Formação</label>
              <input
                value={newFormacao}
                onChange={(e) => setNewFormacao(e.target.value)}
                placeholder="Ex: Engenharia Civil"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-light mb-1">Registro Profissional</label>
              <input
                value={newRegistro}
                onChange={(e) => setNewRegistro(e.target.value)}
                placeholder="Ex: CREA-SP 123456"
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCreate}
              disabled={!newName.trim() || isPending}
              className="flex items-center gap-1.5 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-40"
            >
              <UserCheck size={14} /> {isPending ? "Salvando..." : "Criar Instrutor"}
            </button>
            <button
              onClick={() => setShowNewForm(false)}
              className="rounded-lg border border-border px-4 py-2 text-sm text-muted-light hover:bg-surface"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* ── Instructor list ── */}
      {instructors.length === 0 ? (
        <div className="rounded-xl border border-border bg-surface p-8 text-center">
          <PenTool size={32} className="mx-auto mb-3 text-muted-light opacity-40" />
          <p className="text-sm text-muted-light">Nenhum instrutor cadastrado</p>
          <p className="text-xs text-muted-light mt-1">Cadastre instrutores para assinar certificados NR digitalmente</p>
        </div>
      ) : (
        <div className="grid gap-4">
          {instructors.map((inst: any) => {
            const instAssignments = assignments.filter((a: any) => a.instructor_id === inst.id);

            return (
              <div key={inst.id} className="rounded-xl border border-border bg-surface p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground truncate">{inst.nome}</h3>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        inst.tipo === "instrutor"
                          ? "bg-blue-500/10 text-blue-400"
                          : "bg-emerald-500/10 text-emerald-400"
                      }`}>
                        {inst.tipo === "instrutor" ? "Instrutor" : "Resp. Técnico"}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-light">
                      {inst.qualificacao && <span>{inst.qualificacao}</span>}
                      {inst.formacao && <span>• {inst.formacao}</span>}
                      {inst.registro && <span>• {inst.registro}</span>}
                    </div>
                  </div>

                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSigningId(signingId === inst.id ? null : inst.id)}
                      className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                        inst.assinatura_img
                          ? "border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
                          : "border border-border text-muted-light hover:bg-surface"
                      }`}
                    >
                      <PenTool size={12} /> {inst.assinatura_img ? "Editar Assinatura" : "Assinar"}
                    </button>
                    <button
                      onClick={() => setAssigningId(assigningId === inst.id ? null : inst.id)}
                      className="flex items-center gap-1 rounded-lg border border-border px-3 py-1.5 text-xs text-muted-light hover:bg-surface"
                    >
                      <Link2 size={12} /> Vincular Curso
                    </button>
                    <button
                      onClick={() => handleDelete(inst.id)}
                      className="rounded-lg border border-red-500/20 px-2 py-1.5 text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>

                {/* Preview signature */}
                {inst.assinatura_img && signingId !== inst.id && (
                  <div className="mt-3 p-2 rounded-lg bg-white inline-block border border-gray-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={inst.assinatura_img} alt="Assinatura" className="h-12 object-contain" />
                  </div>
                )}

                {/* Signature pad */}
                {signingId === inst.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <SignaturePad
                      label={`Assinatura de ${inst.nome}`}
                      onSave={handleSignatureSave(inst.id)}
                      onCancel={() => setSigningId(null)}
                    />
                  </div>
                )}

                {/* Assignment form */}
                {assigningId === inst.id && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3">
                    <p className="text-sm font-medium text-foreground">Vincular a NR</p>
                    <div className="flex flex-wrap gap-3 items-end">
                      <div>
                        <label className="block text-xs text-muted-light mb-1">Curso</label>
                        <select
                          value={assignCourseId}
                          onChange={(e) => { setAssignCourseId(e.target.value); setAssignLessonId(""); }}
                          className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                        >
                          <option value="">Selecione...</option>
                          {courses.map((c: any) => (
                            <option key={c.id} value={c.id}>{c.titulo}</option>
                          ))}
                        </select>
                      </div>
                      {assignCourseId && courseLessons.length > 0 && (
                        <div>
                          <label className="block text-xs text-muted-light mb-1">Aula (opcional)</label>
                          <select
                            value={assignLessonId}
                            onChange={(e) => setAssignLessonId(e.target.value)}
                            className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                          >
                            <option value="">Todas as aulas</option>
                            {courseLessons.map((l: any) => (
                              <option key={l.id} value={l.id}>{l.titulo}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      <div>
                        <label className="block text-xs text-muted-light mb-1">Função</label>
                        <select
                          value={assignTipo}
                          onChange={(e) => setAssignTipo(e.target.value as any)}
                          className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-foreground"
                        >
                          <option value="instrutor">Instrutor</option>
                          <option value="responsavel_tecnico">Resp. Técnico</option>
                        </select>
                      </div>
                      <button
                        onClick={() => handleAssign(inst.id)}
                        disabled={!assignCourseId || isPending}
                        className="rounded-lg bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white hover:bg-blue-600 disabled:opacity-40"
                      >
                        Vincular
                      </button>
                    </div>
                  </div>
                )}

                {/* Current assignments */}
                {instAssignments.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {instAssignments.map((a: any) => {
                      const courseName = courses.find((c: any) => c.id === a.course_id)?.titulo ?? "Curso";
                      const lessonName = a.lesson_id
                        ? lessons.find((l: any) => l.id === a.lesson_id)?.titulo
                        : null;
                      return (
                        <span
                          key={a.id}
                          className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-2.5 py-1 text-[11px] text-blue-400"
                        >
                          {lessonName ?? courseName}
                          <span className="text-blue-400/50">({a.tipo === "instrutor" ? "Inst." : "RT"})</span>
                          <button
                            onClick={() => handleRemoveAssignment(a.id)}
                            className="ml-0.5 hover:text-red-400"
                          >
                            <X size={10} />
                          </button>
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
