"use client";

import { useState, useEffect, useRef, useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  adminCreateModule, adminUpdateModule, adminDeleteModule, adminMoveModule,
  adminCreateLesson, adminUpdateLesson, adminDeleteLesson, adminDuplicateLesson,
  adminReorderModules, adminReorderLessons,
  adminGetQuizByLesson, adminCreateQuiz, adminUpdateQuiz, adminDeleteQuiz,
  adminCreateQuestion, adminUpdateQuestion, adminDeleteQuestion,
  adminCreateOption, adminUpdateOption, adminDeleteOption,
} from "@/lib/actions/courses";
import { FileUploader } from "@/components/admin/file-uploader";
import { RichTextEditor } from "@/components/admin/rich-text-editor";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn, formatMinutes } from "@/lib/utils";
import {
  Plus, ChevronDown, Edit2, Trash2, GripVertical,
  Video, FileText, HelpCircle, BookOpen, Save, X,
  CheckCircle2, Circle, Settings2, ChevronRight, Copy, Sparkles,
  FolderTree, ArrowUp, CornerDownRight, ClipboardPaste, AlertTriangle,
} from "lucide-react";
import { parseQuizText } from "@/lib/quiz-parser";

const moduleSchema = z.object({
  titulo: z.string().min(2),
  descricao: z.string().optional(),
  ordem: z.coerce.number().default(0),
});

const lessonSchema = z.object({
  titulo: z.string().min(2),
  descricao: z.string().nullish(),
  tipo: z.enum(["video", "pdf", "texto", "quiz", "misto"]).default("video"),
  youtube_id: z.string().nullish(),
  pdf_path: z.string().nullish(),
  conteudo_rico: z.string().nullish(),
  duracao_min: z.coerce.number().default(0),
  ordem: z.coerce.number().default(0),
  tem_quiz: z.boolean().default(false),
  preview_gratis: z.boolean().default(false),
});

export function CourseContentManager({ course }: { course: any }) {
  const [modules, setModules] = useState<any[]>(course.modules ?? []);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [editingModule, setEditingModule] = useState<string | null>(null);
  const [addingModule, setAddingModule] = useState(false);
  const [addingSubmodule, setAddingSubmodule] = useState<string | null>(null); // parent module id
  const [addingLesson, setAddingLesson] = useState<string | null>(null);
  const [editingLesson, setEditingLesson] = useState<string | null>(null);
  const [quizLesson, setQuizLesson] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // ── Derived: separate root modules from submodules ──
  const rootModules = modules.filter((m) => !m.parent_id).sort((a, b) => a.ordem - b.ordem);
  const childrenMap = new Map<string, any[]>();
  for (const m of modules) {
    if (m.parent_id) {
      const list = childrenMap.get(m.parent_id) ?? [];
      list.push(m);
      childrenMap.set(m.parent_id, list.sort((a, b) => a.ordem - b.ordem));
    }
  }

  const moduleForm = useForm({ resolver: zodResolver(moduleSchema) });
  const lessonForm = useForm({ resolver: zodResolver(lessonSchema) });

  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const dndId = useId();

  const toggleModule = (id: string) =>
    setExpandedModules((p) => ({ ...p, [id]: !p[id] }));

  // ── CREATE MODULE (root)
  const handleCreateModule = async (data: any) => {
    setLoading(true);
    try {
      const mod = await adminCreateModule({ ...data, course_id: course.id, parent_id: null });
      setModules((prev) => [...prev, { ...mod, lessons: [] }]);
      setAddingModule(false);
      moduleForm.reset();
    } finally { setLoading(false); }
  };

  // ── CREATE SUB-MODULE
  const handleCreateSubmodule = async (parentId: string, data: any) => {
    setLoading(true);
    try {
      const siblings = modules.filter((m) => m.parent_id === parentId);
      const sub = await adminCreateModule({ ...data, course_id: course.id, parent_id: parentId, ordem: siblings.length });
      setModules((prev) => [...prev, { ...sub, lessons: [] }]);
      setAddingSubmodule(null);
      moduleForm.reset();
    } finally { setLoading(false); }
  };

  // ── MOVE MODULE (change parent or promote to root)
  const handleMoveModuleToParent = async (moduleId: string, newParentId: string | null) => {
    setLoading(true);
    try {
      await adminMoveModule(moduleId, newParentId, course.id);
      setModules((prev) => prev.map((m) => m.id === moduleId ? { ...m, parent_id: newParentId } : m));
    } finally { setLoading(false); }
  };

  // ── UPDATE MODULE
  const handleUpdateModule = async (id: string, data: any) => {
    setLoading(true);
    try {
      await adminUpdateModule(id, data);
      setModules((prev) => prev.map((m) => (m.id === id ? { ...m, ...data } : m)));
      setEditingModule(null);
    } finally { setLoading(false); }
  };

  // ── DELETE MODULE
  const handleDeleteModule = async (id: string) => {
    if (!confirm("Tem certeza? Todas as aulas deste módulo serão removidas.")) return;
    await adminDeleteModule(id);
    setModules((prev) => prev.filter((m) => m.id !== id));
  };

  // ── REORDER ROOT MODULES (drag-drop)
  const handleModuleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = rootModules.findIndex((m) => m.id === active.id);
    const newIndex = rootModules.findIndex((m) => m.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const reorderedRoots = arrayMove(rootModules, oldIndex, newIndex).map((m, i) => ({ ...m, ordem: i }));
    // Update full modules state
    setModules((prev) => {
      const children = prev.filter((m) => m.parent_id);
      return [...reorderedRoots, ...children];
    });
    await adminReorderModules(reorderedRoots.map((m) => ({ id: m.id, ordem: m.ordem })), course.id);
  };

  // ── REORDER SUB-MODULES within parent (drag-drop)
  const handleSubmoduleDragEnd = async (parentId: string, event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const children = childrenMap.get(parentId) ?? [];
    const oldIndex = children.findIndex((m) => m.id === active.id);
    const newIndex = children.findIndex((m) => m.id === over.id);
    if (oldIndex === -1 || newIndex === -1) return;
    const reordered = arrayMove(children, oldIndex, newIndex).map((m, i) => ({ ...m, ordem: i }));
    setModules((prev) =>
      prev.map((m) => {
        const updated = reordered.find((r) => r.id === m.id);
        return updated ? { ...m, ordem: updated.ordem } : m;
      })
    );
    await adminReorderModules(reordered.map((m) => ({ id: m.id, ordem: m.ordem })), course.id);
  };

  // ── CREATE LESSON
  const handleCreateLesson = async (moduleId: string, data: any) => {
    setLoading(true);
    try {
      const lesson = await adminCreateLesson({ ...data, module_id: moduleId });
      setModules((prev) =>
        prev.map((m) => m.id === moduleId ? { ...m, lessons: [...(m.lessons ?? []), lesson] } : m)
      );
      setAddingLesson(null);
      lessonForm.reset();
    } finally { setLoading(false); }
  };

  // ── UPDATE LESSON (salvar manual — fecha o form)
  const handleUpdateLesson = async (lessonId: string, moduleId: string, data: any) => {
    setLoading(true);
    try {
      await adminUpdateLesson(lessonId, data);
      setModules((prev) =>
        prev.map((m) =>
          m.id === moduleId
            ? { ...m, lessons: m.lessons.map((l: any) => (l.id === lessonId ? { ...l, ...data } : l)) }
            : m
        )
      );
      setEditingLesson(null);
    } catch (err) {
      console.error("Erro ao salvar aula:", err);
      alert("Erro ao salvar aula. Verifique o console.");
    } finally { setLoading(false); }
  };

  // ── AUTO-SAVE LESSON (NÃO fecha o form)
  const handleAutoSaveLesson = async (lessonId: string, moduleId: string, data: any) => {
    try {
      await adminUpdateLesson(lessonId, data);
      setModules((prev) =>
        prev.map((m) =>
          m.id === moduleId
            ? { ...m, lessons: m.lessons.map((l: any) => (l.id === lessonId ? { ...l, ...data } : l)) }
            : m
        )
      );
    } catch (err) {
      console.error("Erro no auto-save:", err);
    }
  };

  // ── DELETE LESSON
  const handleDeleteLesson = async (lessonId: string, moduleId: string) => {
    if (!confirm("Remover esta aula?")) return;
    await adminDeleteLesson(lessonId);
    setModules((prev) =>
      prev.map((m) =>
        m.id === moduleId ? { ...m, lessons: m.lessons.filter((l: any) => l.id !== lessonId) } : m
      )
    );
  };

  // ── MOVE LESSON TO ANOTHER MODULE
  const handleMoveLesson = async (lessonId: string, fromModuleId: string, toModuleId: string) => {
    if (fromModuleId === toModuleId) return;
    await adminUpdateLesson(lessonId, { module_id: toModuleId } as any);
    setModules((prev) => {
      const lesson = prev.find((m) => m.id === fromModuleId)?.lessons?.find((l: any) => l.id === lessonId);
      if (!lesson) return prev;
      return prev.map((m) => {
        if (m.id === fromModuleId) return { ...m, lessons: m.lessons.filter((l: any) => l.id !== lessonId) };
        if (m.id === toModuleId) return { ...m, lessons: [...(m.lessons ?? []), { ...lesson, module_id: toModuleId }] };
        return m;
      });
    });
  };

  // ── DUPLICATE LESSON
  const handleDuplicateLesson = async (lessonId: string, moduleId: string) => {
    setLoading(true);
    try {
      const copy = await adminDuplicateLesson(lessonId);
      setModules((prev) =>
        prev.map((m) => m.id === moduleId ? { ...m, lessons: [...(m.lessons ?? []), copy] } : m)
      );
    } finally { setLoading(false); }
  };

  // ── REORDER LESSONS (drag-drop)
  const handleLessonDragEnd = async (moduleId: string, event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod) return;
    const oldIndex = mod.lessons.findIndex((l: any) => l.id === active.id);
    const newIndex = mod.lessons.findIndex((l: any) => l.id === over.id);
    const reordered = arrayMove(mod.lessons, oldIndex, newIndex).map((l: any, i: number) => ({ ...l, ordem: i }));
    setModules((prev) =>
      prev.map((m) => m.id === moduleId ? { ...m, lessons: reordered } : m)
    );
    await adminReorderLessons(reordered.map((l: any) => ({ id: l.id, ordem: l.ordem })), course.id);
  };

  const totalLessons = modules.reduce((a, m) => a + (m.lessons?.length ?? 0), 0);
  const totalSubmodules = modules.filter((m) => m.parent_id).length;

  return (
    <div className="space-y-4">
      {/* Header stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-light">
          <span>{rootModules.length} módulos</span>
          {totalSubmodules > 0 && <><span>·</span><span>{totalSubmodules} sub-módulos</span></>}
          <span>·</span>
          <span>{totalLessons} aulas</span>
          <span className="text-[11px] text-muted-light hidden sm:inline">Arraste pelo ⠿ para reordenar</span>
        </div>
        <Button size="sm" onClick={() => { setAddingModule(true); moduleForm.reset({ ordem: rootModules.length }); }}>
          <Plus size={15} /> Novo Módulo
        </Button>
      </div>

      {/* Add Module Form */}
      {addingModule && (
        <Card className="border-amber-500/30">
          <CardHeader><CardTitle className="text-sm">Novo Módulo</CardTitle></CardHeader>
          <CardContent>
            <form onSubmit={moduleForm.handleSubmit(handleCreateModule)} className="space-y-3">
              <Input {...moduleForm.register("titulo")} placeholder="Título do módulo" autoFocus />
              <Input {...moduleForm.register("descricao")} placeholder="Descrição (opcional)" />
              <div className="flex gap-2">
                <Button type="submit" size="sm" loading={loading}><Save size={14} /> Salvar</Button>
                <Button type="button" variant="ghost" size="sm" onClick={() => setAddingModule(false)}>
                  <X size={14} /> Cancelar
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Modules list with drag-drop */}
      <DndContext id={`${dndId}-modules`} sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleModuleDragEnd}>
        <SortableContext items={rootModules.map((m) => m.id)} strategy={verticalListSortingStrategy}>
          {rootModules.map((mod, modIdx) => (
            <SortableModule
              key={mod.id}
              mod={mod}
              modIdx={modIdx}
              submodules={childrenMap.get(mod.id) ?? []}
              expanded={!!expandedModules[mod.id]}
              editingModule={editingModule}
              addingLesson={addingLesson}
              editingLesson={editingLesson}
              quizLesson={quizLesson}
              moduleForm={moduleForm}
              lessonForm={lessonForm}
              loading={loading}
              sensors={sensors}
              onToggle={() => toggleModule(mod.id)}
              onEditModule={() => { setEditingModule(mod.id); moduleForm.setValue("titulo", mod.titulo); }}
              onCancelEditModule={() => setEditingModule(null)}
              onUpdateModule={(d: any) => handleUpdateModule(mod.id, d)}
              onDeleteModule={(targetId?: string) => handleDeleteModule(targetId ?? mod.id)}
              onCreateLesson={(d: any, targetModuleId?: string) => handleCreateLesson(targetModuleId ?? mod.id, d)}
              onUpdateLesson={(lessonId: string, d: any, targetModuleId?: string) => handleUpdateLesson(lessonId, targetModuleId ?? mod.id, d)}
              onAutoSaveLesson={(lessonId: string, d: any, targetModuleId?: string) => handleAutoSaveLesson(lessonId, targetModuleId ?? mod.id, d)}
              onUpdateLessonState={(lessonId: string, updates: any, targetModuleId?: string) => {
                const modId = targetModuleId ?? mod.id;
                setModules((prev) =>
                  prev.map((m) =>
                    m.id === modId
                      ? { ...m, lessons: m.lessons.map((l: any) => (l.id === lessonId ? { ...l, ...updates } : l)) }
                      : m
                  )
                );
              }}
              onDeleteLesson={(lessonId: string, targetModuleId?: string) => handleDeleteLesson(lessonId, targetModuleId ?? mod.id)}
              onDuplicateLesson={(lessonId: string, targetModuleId?: string) => handleDuplicateLesson(lessonId, targetModuleId ?? mod.id)}
              onMoveLesson={(lessonId: string, toModuleId: string, fromModuleId?: string) => handleMoveLesson(lessonId, fromModuleId ?? mod.id, toModuleId)}
              allModules={modules}
              onStartAddLesson={(targetModuleId?: string) => { const id = targetModuleId ?? mod.id; const targetMod = modules.find((m) => m.id === id); lessonForm.reset({ tipo: "video", duracao_min: 0, ordem: targetMod?.lessons?.length ?? 0 }); setAddingLesson(id); setEditingLesson(null); }}
              onCancelAddLesson={() => setAddingLesson(null)}
              onStartEditLesson={(lesson: any) => { setEditingLesson(lesson.id); lessonForm.reset(lesson); setAddingLesson(null); setQuizLesson(null); }}
              onCancelEditLesson={() => setEditingLesson(null)}
              onToggleQuiz={(lessonId: string) => { setQuizLesson(quizLesson === lessonId ? null : lessonId); setEditingLesson(null); }}
              onLessonDragEnd={(e: DragEndEvent) => handleLessonDragEnd(mod.id, e)}
              courseCategoria={course.categoria}
              // ── Sub-module props ──
              addingSubmodule={addingSubmodule}
              onStartAddSubmodule={() => { moduleForm.reset({ titulo: "", descricao: "" }); setAddingSubmodule(mod.id); }}
              onCancelAddSubmodule={() => setAddingSubmodule(null)}
              onCreateSubmodule={(d: any) => handleCreateSubmodule(mod.id, d)}
              onMoveModuleToParent={handleMoveModuleToParent}
              onSubmoduleDragEnd={(e: DragEndEvent) => handleSubmoduleDragEnd(mod.id, e)}
              expandedModules={expandedModules}
              onToggleSubmodule={(id: string) => setExpandedModules((p) => ({ ...p, [id]: !p[id] }))}
              rootModules={rootModules}
            />
          ))}
        </SortableContext>
      </DndContext>

      {modules.length === 0 && !addingModule && (
        <div className="flex flex-col items-center justify-center py-16 text-center border-2 border-dashed border-border rounded-xl">
          <BookOpen size={40} className="text-muted-light mb-3" />
          <p className="text-foreground font-medium mb-1">Nenhum módulo ainda</p>
          <p className="text-sm text-muted-light mb-4">Crie o primeiro módulo para começar.</p>
          <Button size="sm" onClick={() => setAddingModule(true)}>
            <Plus size={14} /> Criar Primeiro Módulo
          </Button>
        </div>
      )}
    </div>
  );
}

// ── SortableModule ────────────────────────────────────────────

function SortableModule({ mod, modIdx, submodules = [], expanded, editingModule, addingLesson, editingLesson, quizLesson, moduleForm, lessonForm, loading, sensors, onToggle, onEditModule, onCancelEditModule, onUpdateModule, onDeleteModule, onCreateLesson, onUpdateLesson, onAutoSaveLesson, onUpdateLessonState, onDeleteLesson, onDuplicateLesson, onMoveLesson, allModules, onStartAddLesson, onCancelAddLesson, onStartEditLesson, onCancelEditLesson, onToggleQuiz, onLessonDragEnd, courseCategoria, addingSubmodule, onStartAddSubmodule, onCancelAddSubmodule, onCreateSubmodule, onMoveModuleToParent, onSubmoduleDragEnd, expandedModules, onToggleSubmodule, rootModules }: any) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: mod.id });
  const lessonDndId = useId();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style}>
      <Card className={cn("overflow-hidden", isDragging && "shadow-lg ring-2 ring-amber-500/20")}>
        {/* Module header */}
        <div
          className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-surface-3 transition-colors select-none group"
          onClick={onToggle}
        >
          {/* Drag handle */}
          <div
            {...attributes}
            {...listeners}
            className="cursor-grab active:cursor-grabbing p-0.5 rounded text-muted-light hover:text-muted-light hover:bg-surface-3 transition-colors shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <GripVertical size={16} />
          </div>

          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-xs font-bold text-amber-400 shrink-0">
            {modIdx + 1}
          </div>

          <div className="flex-1 min-w-0">
            {editingModule === mod.id ? (
              <form
                onSubmit={moduleForm.handleSubmit(onUpdateModule)}
                className="flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <Input {...moduleForm.register("titulo")} defaultValue={mod.titulo} className="h-7 text-xs" autoFocus />
                <Button type="submit" size="icon" className="h-7 w-7" loading={loading}><Save size={12} /></Button>
                <Button type="button" variant="ghost" size="icon" className="h-7 w-7" onClick={onCancelEditModule}><X size={12} /></Button>
              </form>
            ) : (
              <p className="font-medium text-sm text-foreground truncate">{mod.titulo}</p>
            )}
            <p className="text-xs text-muted-light">
              {submodules.length > 0 && <>{submodules.length} sub-módulo{submodules.length !== 1 ? "s" : ""} · </>}
              {mod.lessons?.length ?? 0} aulas
            </p>
          </div>

          <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onEditModule}>
              <Edit2 size={13} />
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:text-red-500" onClick={onDeleteModule}>
              <Trash2 size={13} />
            </Button>
          </div>

          <ChevronDown size={16} className={cn("text-muted-light transition-transform shrink-0", expanded && "rotate-180")} />
        </div>

        {/* Sub-modules + Lessons */}
        {expanded && (
          <div className="border-t border-border/50">

            {/* ── Sub-modules section ── */}
            {(submodules.length > 0 || addingSubmodule === mod.id) && (
              <div className="bg-surface-2/30">
                <DndContext id={`${lessonDndId}-subs`} sensors={sensors} collisionDetection={closestCenter} onDragEnd={onSubmoduleDragEnd}>
                  <SortableContext items={submodules.map((s: any) => s.id)} strategy={verticalListSortingStrategy}>
                    {submodules.map((sub: any, subIdx: number) => {
                      const subExpanded = !!expandedModules?.[sub.id];
                      return (
                        <SortableSubmodule
                          key={sub.id}
                          sub={sub}
                          subIdx={subIdx}
                          expanded={subExpanded}
                          onToggle={() => onToggleSubmodule(sub.id)}
                          editingModule={editingModule}
                          moduleForm={moduleForm}
                          loading={loading}
                          sensors={sensors}
                          onEditModule={() => { /* reuse parent's edit state */ }}
                          onDeleteModule={() => onDeleteModule(sub.id)}
                          onUpdateModule={(d: any) => onUpdateModule(d)}
                          onCancelEditModule={onCancelEditModule}
                          onPromoteToRoot={() => onMoveModuleToParent(sub.id, null)}
                          onMoveToModule={(targetParentId: string) => onMoveModuleToParent(sub.id, targetParentId)}
                          rootModules={rootModules}
                          currentParentId={mod.id}
                          // Pass lesson management through for sub-module's lessons
                          addingLesson={addingLesson}
                          editingLesson={editingLesson}
                          quizLesson={quizLesson}
                          lessonForm={lessonForm}
                          onCreateLesson={(d: any) => onCreateLesson(d)}
                          onUpdateLesson={onUpdateLesson}
                          onAutoSaveLesson={onAutoSaveLesson}
                          onUpdateLessonState={onUpdateLessonState}
                          onDeleteLesson={onDeleteLesson}
                          onDuplicateLesson={onDuplicateLesson}
                          onMoveLesson={onMoveLesson}
                          allModules={allModules}
                          onStartAddLesson={onStartAddLesson}
                          onCancelAddLesson={onCancelAddLesson}
                          onStartEditLesson={onStartEditLesson}
                          onCancelEditLesson={onCancelEditLesson}
                          onToggleQuiz={onToggleQuiz}
                          courseCategoria={courseCategoria}
                        />
                      );
                    })}
                  </SortableContext>
                </DndContext>

                {/* Add sub-module form */}
                {addingSubmodule === mod.id && (
                  <div className="px-4 py-3 ml-6 border-l-2 border-amber-500/20">
                    <form onSubmit={moduleForm.handleSubmit(onCreateSubmodule)} className="space-y-2">
                      <p className="text-xs font-semibold text-muted-light flex items-center gap-1.5">
                        <CornerDownRight size={12} /> Novo Sub-módulo
                      </p>
                      <Input {...moduleForm.register("titulo")} placeholder="Título do sub-módulo" className="h-8 text-xs" autoFocus />
                      <div className="flex gap-2">
                        <Button type="submit" size="sm" loading={loading} className="h-7 text-xs"><Save size={12} /> Criar</Button>
                        <Button type="button" variant="ghost" size="sm" className="h-7 text-xs" onClick={onCancelAddSubmodule}><X size={12} /> Cancelar</Button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            )}

            {/* ── Add sub-module button (when not already adding) ── */}
            {addingSubmodule !== mod.id && (
              <button
                className="w-full flex items-center gap-2 px-4 py-2 text-xs text-muted-light hover:text-amber-400 hover:bg-amber-500/5 transition-colors border-b border-border/30"
                onClick={onStartAddSubmodule}
              >
                <FolderTree size={13} /> Adicionar Sub-módulo
              </button>
            )}

            {/* ── Lessons of this root module ── */}
            <DndContext id={lessonDndId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={onLessonDragEnd}>
              <SortableContext items={(mod.lessons ?? []).map((l: any) => l.id)} strategy={verticalListSortingStrategy}>
                {(mod.lessons ?? []).map((lesson: any, lessonIdx: number) => (
                  <SortableLesson
                    key={lesson.id}
                    lesson={lesson}
                    lessonIdx={lessonIdx}
                    editingLesson={editingLesson}
                    quizLesson={quizLesson}
                    lessonForm={lessonForm}
                    loading={loading}
                    onStartEdit={() => onStartEditLesson(lesson)}
                    onCancelEdit={onCancelEditLesson}
                    onUpdate={(d: any) => onUpdateLesson(lesson.id, d)}
                    onAutoSave={(d: any) => onAutoSaveLesson(lesson.id, d)}
                    onDelete={() => onDeleteLesson(lesson.id)}
                    onDuplicate={() => onDuplicateLesson(lesson.id)}
                    onToggleQuiz={() => onToggleQuiz(lesson.id)}
                    onMoveToModule={(toModuleId: string) => onMoveLesson(lesson.id, toModuleId)}
                    allModules={allModules}
                    currentModuleId={mod.id}
                    onLessonStateChange={(updates: any) => onUpdateLessonState(lesson.id, updates)}
                    courseCategoria={courseCategoria}
                  />
                ))}
              </SortableContext>
            </DndContext>

            {/* Add lesson */}
            {addingLesson === mod.id ? (
              <LessonForm
                form={lessonForm}
                loading={loading}
                onSubmit={onCreateLesson}
                onCancel={onCancelAddLesson}
                label="Criar Aula"
                categoria={courseCategoria}
              />
            ) : (
              <button
                className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-muted-light hover:text-amber-400 hover:bg-amber-500/5 transition-colors"
                onClick={() => onStartAddLesson()}
              >
                <Plus size={14} /> Adicionar Aula
              </button>
            )}
          </div>
        )}
      </Card>
    </div>
  );
}

// ── SortableSubmodule ─────────────────────────────────────────

function SortableSubmodule({ sub, subIdx, expanded, onToggle, editingModule, moduleForm, loading, sensors, onDeleteModule, onPromoteToRoot, onMoveToModule, rootModules, currentParentId, addingLesson, editingLesson, quizLesson, lessonForm, onCreateLesson, onUpdateLesson, onAutoSaveLesson, onUpdateLessonState, onDeleteLesson, onDuplicateLesson, onMoveLesson, allModules, onStartAddLesson, onCancelAddLesson, onStartEditLesson, onCancelEditLesson, onToggleQuiz, courseCategoria }: any) {
  const [showMoveMenu, setShowMoveMenu] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: sub.id });
  const subDndId = useId();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const lessons = sub.lessons ?? [];

  return (
    <div ref={setNodeRef} style={style} className="ml-6 border-l-2 border-amber-500/10">
      {/* Sub-module header */}
      <div
        className="flex items-center gap-2.5 px-3 py-2.5 cursor-pointer hover:bg-surface-3/50 transition-colors select-none group"
        onClick={onToggle}
      >
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-0.5 rounded text-muted-light hover:text-muted transition-colors shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          <GripVertical size={14} />
        </div>

        <CornerDownRight size={13} className="text-amber-400/50 shrink-0" />

        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/10 text-[10px] font-bold text-amber-400 shrink-0">
          {subIdx + 1}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-medium text-xs text-foreground truncate">{sub.titulo}</p>
          <p className="text-[10px] text-muted-light">{lessons.length} aulas</p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.stopPropagation()}>
          {/* Promote to root */}
          <Button variant="ghost" size="icon" className="h-6 w-6" title="Promover a módulo raiz" onClick={onPromoteToRoot}>
            <ArrowUp size={11} />
          </Button>

          {/* Move to another parent */}
          {rootModules.length > 1 && (
            <div className="relative">
              <Button variant="ghost" size="icon" className="h-6 w-6" title="Mover para outro módulo" onClick={() => setShowMoveMenu((p) => !p)}>
                <ChevronRight size={11} />
              </Button>
              {showMoveMenu && (
                <div className="absolute right-0 top-7 z-50 w-44 rounded-lg border border-border bg-surface shadow-lg py-1">
                  <p className="px-3 py-1 text-[10px] text-muted-light uppercase tracking-wide font-semibold">Mover para</p>
                  {rootModules.filter((m: any) => m.id !== currentParentId).map((m: any) => (
                    <button
                      key={m.id}
                      className="w-full text-left px-3 py-1.5 text-xs text-muted hover:bg-surface-3 transition-colors truncate"
                      onClick={() => { onMoveToModule(m.id); setShowMoveMenu(false); }}
                    >
                      {m.titulo}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <Button variant="ghost" size="icon" className="h-6 w-6 text-red-400 hover:text-red-500" onClick={() => onDeleteModule(sub.id)}>
            <Trash2 size={11} />
          </Button>
        </div>

        <ChevronDown size={14} className={cn("text-muted-light transition-transform shrink-0", expanded && "rotate-180")} />
      </div>

      {/* Sub-module lessons (expanded) */}
      {expanded && (
        <div className="border-t border-border/30 ml-3">
          <DndContext id={subDndId} sensors={sensors} collisionDetection={closestCenter} onDragEnd={() => {}}>
            <SortableContext items={lessons.map((l: any) => l.id)} strategy={verticalListSortingStrategy}>
              {lessons.map((lesson: any, idx: number) => (
                <SortableLesson
                  key={lesson.id}
                  lesson={lesson}
                  lessonIdx={idx}
                  editingLesson={editingLesson}
                  quizLesson={quizLesson}
                  lessonForm={lessonForm}
                  loading={loading}
                  onStartEdit={() => onStartEditLesson(lesson)}
                  onCancelEdit={onCancelEditLesson}
                  onUpdate={(d: any) => onUpdateLesson(lesson.id, d, sub.id)}
                  onAutoSave={(d: any) => onAutoSaveLesson(lesson.id, d, sub.id)}
                  onDelete={() => onDeleteLesson(lesson.id, sub.id)}
                  onDuplicate={() => onDuplicateLesson(lesson.id, sub.id)}
                  onToggleQuiz={() => onToggleQuiz(lesson.id)}
                  onMoveToModule={(toModuleId: string) => onMoveLesson(lesson.id, toModuleId, sub.id)}
                  allModules={allModules}
                  currentModuleId={sub.id}
                  onLessonStateChange={(updates: any) => onUpdateLessonState(lesson.id, updates, sub.id)}
                  courseCategoria={courseCategoria}
                />
              ))}
            </SortableContext>
          </DndContext>

          {/* Add lesson to sub-module */}
          {addingLesson === sub.id ? (
            <LessonForm
              form={lessonForm}
              loading={loading}
              onSubmit={(d: any) => onCreateLesson(d, sub.id)}
              onCancel={onCancelAddLesson}
              label="Criar Aula"
              categoria={courseCategoria}
            />
          ) : (
            <button
              className="w-full flex items-center gap-2 px-4 py-2 text-xs text-muted-light hover:text-amber-400 hover:bg-amber-500/5 transition-colors"
              onClick={() => onStartAddLesson(sub.id)}
            >
              <Plus size={12} /> Adicionar Aula
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// ── SortableLesson ────────────────────────────────────────────

function SortableLesson({ lesson, lessonIdx, editingLesson, quizLesson, lessonForm, loading, onStartEdit, onCancelEdit, onUpdate, onAutoSave, onDelete, onDuplicate, onToggleQuiz, onLessonStateChange, onMoveToModule, allModules, currentModuleId, courseCategoria }: any) {
  const [showMoveMenu, setShowMoveMenu] = useState(false);
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: lesson.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className={cn("group", isDragging && "z-10 relative")}>
      <div className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-3 transition-colors border-b border-border/50">
        {/* Drag handle */}
        <div
          {...attributes}
          {...listeners}
          className="cursor-grab active:cursor-grabbing p-0.5 rounded text-muted-light hover:text-muted-light hover:bg-surface-3 transition-colors shrink-0"
        >
          <GripVertical size={14} />
        </div>

        <span className="text-xs text-muted-light w-4 shrink-0">{lessonIdx + 1}</span>
        <LessonTypeIcon tipo={lesson.tipo} />

        <div className="flex-1 min-w-0">
          <p className="text-sm text-foreground truncate">{lesson.titulo}</p>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-muted-light">{formatMinutes(lesson.duracao_min)}</span>
            {lesson.youtube_id && <Badge variant="secondary" className="text-[10px] px-1.5 py-0">YouTube</Badge>}
            {lesson.tem_quiz && <Badge variant="default" className="text-[10px] px-1.5 py-0">Quiz</Badge>}
            {lesson.preview_gratis && <Badge variant="success" className="text-[10px] px-1.5 py-0">Preview</Badge>}
          </div>
        </div>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
          <Button
            variant="ghost" size="icon"
            className={cn("h-7 w-7", quizLesson === lesson.id && "bg-amber-500/10 text-amber-400")}
            title="Gerenciar Quiz"
            onClick={onToggleQuiz}
          >
            <HelpCircle size={13} />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" title="Duplicar aula" onClick={onDuplicate}>
            <Copy size={12} />
          </Button>
          {allModules && allModules.length > 1 && (
            <div className="relative">
              <Button
                variant="ghost" size="icon" className="h-7 w-7"
                title="Mover para módulo"
                onClick={() => setShowMoveMenu((p) => !p)}
              >
                <ChevronRight size={13} />
              </Button>
              {showMoveMenu && (
                <div className="absolute right-0 top-8 z-50 w-48 rounded-xl border border-border bg-surface shadow-lg py-1">
                  <p className="px-3 py-1.5 text-[10px] text-muted-light uppercase tracking-wide font-semibold">Mover para</p>
                  {allModules.filter((m: any) => m.id !== currentModuleId).map((m: any) => (
                    <button
                      key={m.id}
                      className="w-full text-left px-3 py-2 text-sm text-muted hover:bg-surface-3 transition-colors truncate"
                      onClick={() => { onMoveToModule(m.id); setShowMoveMenu(false); }}
                    >
                      {m.titulo}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onStartEdit}>
            <Edit2 size={13} />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7 text-red-400 hover:text-red-500" onClick={onDelete}>
            <Trash2 size={13} />
          </Button>
        </div>
      </div>

      {editingLesson === lesson.id && (
        <LessonForm
          form={lessonForm}
          loading={loading}
          onSubmit={onUpdate}
          onAutoSave={onAutoSave}
          onCancel={onCancelEdit}
          label="Salvar Alterações"
          lessonId={lesson.id}
          categoria={courseCategoria}
        />
      )}

      {quizLesson === lesson.id && (
        <QuizBuilder
          lessonId={lesson.id}
          lessonTitulo={lesson.titulo}
          lessonConteudo={lesson.conteudo_rico}
          onClose={onToggleQuiz}
          onQuizCreated={() => onLessonStateChange?.({ tem_quiz: true })}
          onQuizDeleted={() => onLessonStateChange?.({ tem_quiz: false })}
        />
      )}
    </div>
  );
}

// ── LessonTypeIcon ────────────────────────────────────────────

function LessonTypeIcon({ tipo }: { tipo: string }) {
  const map: Record<string, { icon: React.ElementType; color: string }> = {
    video: { icon: Video, color: "text-blue-500" },
    pdf: { icon: FileText, color: "text-red-400" },
    quiz: { icon: HelpCircle, color: "text-amber-500" },
    texto: { icon: BookOpen, color: "text-emerald-500" },
    misto: { icon: BookOpen, color: "text-amber-400" },
  };
  const { icon: Icon, color } = map[tipo] ?? map.video;
  return <Icon size={15} className={cn("shrink-0", color)} />;
}

// ── LessonForm ────────────────────────────────────────────────

function LessonForm({ form, loading, onSubmit, onAutoSave, onCancel, label, lessonId, categoria }: any) {
  const tipo = form.watch("tipo");
  const pdfPath = form.watch("pdf_path");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isFirstRender = useRef(true);
  const [autoSaving, setAutoSaving] = useState(false);
  const [autoSaved, setAutoSaved] = useState(false);

  const watchedFields = form.watch([
    "titulo", "tipo", "youtube_id", "duracao_min",
    "preview_gratis", "tem_quiz", "conteudo_rico", "ordem",
  ]);

  // Auto-save usa onAutoSave (não fecha o form) quando disponível, senão usa onSubmit
  const autoSaveHandler = onAutoSave ?? onSubmit;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    setAutoSaved(false);
    timerRef.current = setTimeout(() => {
      form.handleSubmit(async (data: any) => {
        setAutoSaving(true);
        await autoSaveHandler(data);
        setAutoSaving(false);
        setAutoSaved(true);
        setTimeout(() => setAutoSaved(false), 3000);
      })();
    }, 2000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(watchedFields)]);

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="border-t border-border/50 bg-surface-2 px-4 py-4 space-y-3"
    >
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-muted-light mb-1">Título *</label>
          <Input {...form.register("titulo")} placeholder="Título da aula" className="h-8 text-xs" autoFocus />
        </div>
        <div>
          <label className="block text-xs text-muted-light mb-1">Tipo</label>
          <select
            {...form.register("tipo")}
            className="w-full h-8 rounded-lg border border-border bg-surface px-2 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="video">Vídeo</option>
            <option value="pdf">PDF</option>
            <option value="texto">Texto</option>
            <option value="quiz">Quiz</option>
            <option value="misto">Misto</option>
          </select>
        </div>
      </div>

      {(tipo === "video" || tipo === "misto") && (
        <div>
          <label className="block text-xs text-muted-light mb-1">
            YouTube ID <span className="text-[10px] text-muted-light">(ex: dQw4w9WgXcQ)</span>
          </label>
          <div className="flex gap-2">
            <Input {...form.register("youtube_id")} placeholder="YouTube Video ID" className="h-8 text-xs flex-1" />
            {form.watch("youtube_id") && (
              <a
                href={`https://www.youtube.com/watch?v=${form.watch("youtube_id")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-2 h-8 text-[10px] text-amber-400 border border-amber-500/30 rounded-lg hover:bg-amber-500/10 transition-colors shrink-0"
              >
                ▶ Preview
              </a>
            )}
          </div>
        </div>
      )}

      {(tipo === "texto" || tipo === "misto") && (
        <div>
          <label className="block text-xs text-muted-light mb-1">Conteúdo Rico</label>
          <RichTextEditor
            value={form.watch("conteudo_rico") ?? ""}
            onChange={(html) => form.setValue("conteudo_rico", html, { shouldDirty: true })}
            minHeight={180}
          />
        </div>
      )}

      {(tipo === "pdf" || tipo === "misto") && (
        <div>
          <label className="block text-xs text-muted-light mb-1">Arquivo PDF</label>
          <FileUploader
            bucket="course-materials"
            folder="lessons"
            accept={{ "application/pdf": [".pdf"] }}
            maxSizeMB={50}
            label="Arraste o PDF ou clique para selecionar"
            hint="PDF até 50 MB"
            currentUrl={pdfPath}
            onUpload={(url) => form.setValue("pdf_path", url)}
            onRemove={() => form.setValue("pdf_path", "")}
          />
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs text-muted-light mb-1">Duração (min)</label>
          <Input type="number" {...form.register("duracao_min")} placeholder="15" className="h-8 text-xs" />
        </div>
        <div>
          <label className="block text-xs text-muted-light mb-1">Ordem</label>
          <Input type="number" {...form.register("ordem")} placeholder="0" className="h-8 text-xs" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer text-xs text-muted">
          <input type="checkbox" {...form.register("tem_quiz")} className="accent-amber-500" />
          Tem Quiz
        </label>
        <label className="flex items-center gap-2 cursor-pointer text-xs text-muted">
          <input type="checkbox" {...form.register("preview_gratis")} className="accent-amber-500" />
          Preview Gratuito
        </label>
      </div>

      <div className="flex items-center gap-2">
        <Button type="submit" size="sm" loading={loading}><Save size={13} /> {label}</Button>
        <Button type="button" variant="ghost" size="sm" onClick={onCancel}><X size={13} /> Cancelar</Button>
        {autoSaving && <span className="text-xs text-muted-light ml-auto animate-pulse">Salvando...</span>}
        {autoSaved && !autoSaving && <span className="text-xs text-emerald-600 ml-auto">✓ Salvo automaticamente</span>}
      </div>
    </form>
  );
}

// ── QuizBuilder ───────────────────────────────────────────────

function QuizBuilder({ lessonId, lessonTitulo, lessonConteudo, onClose, onQuizCreated, onQuizDeleted }: { lessonId: string; lessonTitulo?: string; lessonConteudo?: string | null; onClose: () => void; onQuizCreated?: () => void; onQuizDeleted?: () => void }) {
  const [quiz, setQuiz] = useState<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addingQuestion, setAddingQuestion] = useState(false);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const [editingSettings, setEditingSettings] = useState(false);
  const [generatingAI, setGeneratingAI] = useState(false);
  const [showPasteModal, setShowPasteModal] = useState(false);
  const [pasteText, setPasteText] = useState("");
  const [pasteErrors, setPasteErrors] = useState<string[]>([]);
  const [importingPaste, setImportingPaste] = useState(false);
  const [settingsForm, setSettingsForm] = useState({ nivel_minimo_aprovacao: 70, tentativas_permitidas: 3, embaralhar_questoes: true, tempo_limite_min: null as number | null });

  useEffect(() => {
    setLoading(true);
    adminGetQuizByLesson(lessonId).then((data) => {
      setQuiz(data);
      if (data) {
        setSettingsForm({
          nivel_minimo_aprovacao: data.nivel_minimo_aprovacao ?? 70,
          tentativas_permitidas: data.tentativas_permitidas ?? 3,
          embaralhar_questoes: data.embaralhar_questoes ?? true,
          tempo_limite_min: data.tempo_limite_min ?? null,
        });
      }
      setLoaded(true);
      setLoading(false);
    });
  }, [lessonId]);

  const handleCreateQuiz = async () => {
    setLoading(true);
    try {
      const created = await adminCreateQuiz({
        lesson_id: lessonId, titulo: "Quiz",
        nivel_minimo_aprovacao: 70, tentativas_permitidas: 3, embaralhar_questoes: true,
      });
      setQuiz({ ...created, quiz_questions: [] });
      await adminUpdateLesson(lessonId, { tem_quiz: true });
      onQuizCreated?.();
    } finally { setLoading(false); }
  };

  const handleSaveSettings = async () => {
    setLoading(true);
    try {
      await adminUpdateQuiz(quiz.id, settingsForm);
      setQuiz((prev: any) => ({ ...prev, ...settingsForm }));
      setEditingSettings(false);
    } finally { setLoading(false); }
  };

  const handleDeleteQuiz = async () => {
    if (!confirm("Remover o quiz e todas as questões?")) return;
    await adminDeleteQuiz(quiz.id);
    await adminUpdateLesson(lessonId, { tem_quiz: false });
    setQuiz(null);
    onQuizDeleted?.();
  };

  const handleAddQuestion = async (texto: string, tipo: "multiple_choice" | "true_false") => {
    if (!texto.trim()) return;
    setLoading(true);
    try {
      const q = await adminCreateQuestion({ quiz_id: quiz.id, texto, tipo, ordem: quiz.quiz_questions?.length ?? 0, pontos: 1 });
      let newQuestion: any = { ...q, quiz_options: [] };

      // Para V/F, cria automaticamente as opções "Verdadeiro" e "Falso"
      if (tipo === "true_false") {
        const optV = await adminCreateOption({ question_id: q.id, texto: "Verdadeiro", correta: true, ordem: 0 });
        const optF = await adminCreateOption({ question_id: q.id, texto: "Falso", correta: false, ordem: 1 });
        newQuestion = { ...newQuestion, quiz_options: [optV, optF] };
      }

      setQuiz((prev: any) => ({ ...prev, quiz_questions: [...(prev.quiz_questions ?? []), newQuestion] }));
      setAddingQuestion(false);
      setExpandedQuestion(q.id);
    } finally { setLoading(false); }
  };

  const handleUpdateQuestion = async (qId: string, updates: { texto?: string; explicacao?: string | null }) => {
    await adminUpdateQuestion(qId, updates);
    setQuiz((prev: any) => ({
      ...prev,
      quiz_questions: prev.quiz_questions.map((q: any) => q.id === qId ? { ...q, ...updates } : q),
    }));
  };

  const handleDeleteQuestion = async (qId: string) => {
    await adminDeleteQuestion(qId);
    setQuiz((prev: any) => ({ ...prev, quiz_questions: prev.quiz_questions.filter((q: any) => q.id !== qId) }));
  };

  const handleAddOption = async (questionId: string, texto: string, correta: boolean) => {
    if (!texto.trim()) return;
    setLoading(true);
    try {
      const opt = await adminCreateOption({ question_id: questionId, texto, correta, ordem: quiz.quiz_questions.find((q: any) => q.id === questionId)?.quiz_options?.length ?? 0 });
      setQuiz((prev: any) => ({
        ...prev,
        quiz_questions: prev.quiz_questions.map((q: any) =>
          q.id === questionId ? { ...q, quiz_options: [...(q.quiz_options ?? []), opt] } : q
        ),
      }));
    } finally { setLoading(false); }
  };

  const handleSetCorrect = async (questionId: string, optionId: string) => {
    const question = quiz.quiz_questions.find((q: any) => q.id === questionId);
    if (!question) return;
    await Promise.all(question.quiz_options.map((opt: any) => adminUpdateOption(opt.id, { correta: opt.id === optionId })));
    setQuiz((prev: any) => ({
      ...prev,
      quiz_questions: prev.quiz_questions.map((q: any) =>
        q.id === questionId ? { ...q, quiz_options: q.quiz_options.map((o: any) => ({ ...o, correta: o.id === optionId })) } : q
      ),
    }));
  };

  const handleDeleteOption = async (questionId: string, optionId: string) => {
    await adminDeleteOption(optionId);
    setQuiz((prev: any) => ({
      ...prev,
      quiz_questions: prev.quiz_questions.map((q: any) =>
        q.id === questionId ? { ...q, quiz_options: q.quiz_options.filter((o: any) => o.id !== optionId) } : q
      ),
    }));
  };

  const handleGenerateWithAI = async () => {
    if (!lessonConteudo) return;
    setGeneratingAI(true);
    try {
      const res = await fetch("/api/quiz/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo: lessonTitulo, conteudo: lessonConteudo, numQuestions: 5 }),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Erro ao gerar quiz");
      }
      const { questions } = await res.json();

      // Save each generated question + options via existing server actions
      const startOrder = quiz.quiz_questions?.length ?? 0;
      for (let i = 0; i < questions.length; i++) {
        const gen = questions[i];
        const q = await adminCreateQuestion({
          quiz_id: quiz.id,
          texto: gen.texto,
          tipo: "multiple_choice",
          explicacao: gen.explicacao || null,
          ordem: startOrder + i,
          pontos: 1,
        });
        const savedOptions: any[] = [];
        for (let j = 0; j < gen.opcoes.length; j++) {
          const opt = await adminCreateOption({
            question_id: q.id,
            texto: gen.opcoes[j].texto,
            correta: gen.opcoes[j].correta,
            ordem: j,
          });
          savedOptions.push(opt);
        }
        setQuiz((prev: any) => ({
          ...prev,
          quiz_questions: [...(prev.quiz_questions ?? []), { ...q, quiz_options: savedOptions }],
        }));
      }
    } catch (err: any) {
      alert(err.message || "Erro ao gerar quiz com IA");
    } finally {
      setGeneratingAI(false);
    }
  };

  const handleImportFromPaste = async () => {
    if (!pasteText.trim()) return;
    setPasteErrors([]);
    const result = parseQuizText(pasteText);

    if (result.errors.length > 0 && result.questions.length === 0) {
      setPasteErrors(result.errors);
      return;
    }

    setImportingPaste(true);
    try {
      // Update quiz settings if approval minimum was found
      if (result.aprovacao_minima && quiz) {
        await adminUpdateQuiz(quiz.id, { nivel_minimo_aprovacao: result.aprovacao_minima });
        setQuiz((prev: any) => ({ ...prev, nivel_minimo_aprovacao: result.aprovacao_minima }));
        setSettingsForm((p) => ({ ...p, nivel_minimo_aprovacao: result.aprovacao_minima! }));
      }

      // Import each question with options
      const startOrder = quiz.quiz_questions?.length ?? 0;
      for (let i = 0; i < result.questions.length; i++) {
        const pq = result.questions[i];
        const q = await adminCreateQuestion({
          quiz_id: quiz.id,
          texto: pq.texto,
          tipo: pq.tipo,
          explicacao: pq.explicacao,
          ordem: startOrder + i,
          pontos: 1,
        });
        const savedOptions: any[] = [];
        for (let j = 0; j < pq.opcoes.length; j++) {
          const opt = await adminCreateOption({
            question_id: q.id,
            texto: pq.opcoes[j].texto,
            correta: pq.opcoes[j].correta,
            ordem: j,
          });
          savedOptions.push(opt);
        }
        setQuiz((prev: any) => ({
          ...prev,
          quiz_questions: [...(prev.quiz_questions ?? []), { ...q, quiz_options: savedOptions }],
        }));
      }

      // Show warnings if any
      if (result.errors.length > 0) {
        setPasteErrors(result.errors);
      } else {
        setShowPasteModal(false);
        setPasteText("");
      }
    } catch (err: any) {
      setPasteErrors([`Erro ao importar: ${err.message || "Erro desconhecido"}`]);
    } finally {
      setImportingPaste(false);
    }
  };

  return (
    <div className="border-t border-amber-500/15 bg-amber-500/5 px-4 py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <HelpCircle size={15} className="text-amber-400" />
          <span className="text-sm font-semibold text-foreground">Builder de Quiz</span>
          {quiz && <Badge variant="secondary" className="text-[10px]">{quiz.quiz_questions?.length ?? 0} questões</Badge>}
        </div>
        <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose}><X size={14} /></Button>
      </div>

      {loading && !loaded ? (
        <div className="text-sm text-muted-light py-4 text-center">Carregando...</div>
      ) : !quiz ? (
        <div className="text-center py-6">
          <HelpCircle size={32} className="text-muted-light mx-auto mb-2" />
          <p className="text-sm text-muted-light mb-3">Nenhum quiz criado ainda para esta aula.</p>
          <Button size="sm" onClick={handleCreateQuiz} loading={loading}><Plus size={13} /> Criar Quiz</Button>
        </div>
      ) : (
        <div className="space-y-3">
          {editingSettings ? (
            <div className="bg-surface rounded-lg border border-amber-500/20 px-3 py-3 space-y-3">
              <p className="text-xs font-semibold text-muted">Configurações do Quiz</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[10px] text-muted-light mb-1">Aprovação mínima (%)</label>
                  <input
                    type="number" min={0} max={100}
                    value={settingsForm.nivel_minimo_aprovacao}
                    onChange={(e) => setSettingsForm((p) => ({ ...p, nivel_minimo_aprovacao: Number(e.target.value) }))}
                    className="w-full h-7 text-xs border border-border rounded-lg px-2 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-muted-light mb-1">Tentativas</label>
                  <input
                    type="number" min={1} max={10}
                    value={settingsForm.tentativas_permitidas}
                    onChange={(e) => setSettingsForm((p) => ({ ...p, tentativas_permitidas: Number(e.target.value) }))}
                    className="w-full h-7 text-xs border border-border rounded-lg px-2 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-muted-light mb-1">Tempo limite (min)</label>
                  <input
                    type="number" min={0} max={120}
                    value={settingsForm.tempo_limite_min ?? ""}
                    placeholder="Sem limite"
                    onChange={(e) => setSettingsForm((p) => ({ ...p, tempo_limite_min: e.target.value ? Number(e.target.value) : null }))}
                    className="w-full h-7 text-xs border border-border rounded-lg px-2 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="flex items-end pb-1">
                  <label className="flex items-center gap-1.5 cursor-pointer text-xs text-muted">
                    <input
                      type="checkbox"
                      checked={settingsForm.embaralhar_questoes}
                      onChange={(e) => setSettingsForm((p) => ({ ...p, embaralhar_questoes: e.target.checked }))}
                      className="accent-amber-500"
                    />
                    Embaralhar
                  </label>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" loading={loading} onClick={handleSaveSettings}><Save size={11} /> Salvar</Button>
                <Button size="sm" variant="ghost" onClick={() => setEditingSettings(false)}><X size={11} /> Cancelar</Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 bg-surface rounded-lg border border-border px-3 py-2 text-xs text-muted-light flex-wrap">
              <Settings2 size={13} className="text-muted-light" />
              <span>Aprovação: <strong className="text-foreground">{quiz.nivel_minimo_aprovacao}%</strong></span>
              <span>·</span>
              <span>Tentativas: <strong className="text-foreground">{quiz.tentativas_permitidas}x</strong></span>
              <span>·</span>
              <span className={quiz.embaralhar_questoes ? "text-emerald-600" : "text-muted-light"}>
                {quiz.embaralhar_questoes ? "Embaralhar ✓" : "Ordem fixa"}
              </span>
              {quiz.tempo_limite_min && (
                <>
                  <span>·</span>
                  <span>Tempo: <strong className="text-foreground">{quiz.tempo_limite_min} min</strong></span>
                </>
              )}
              <div className="ml-auto flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-light hover:text-muted" onClick={() => setEditingSettings(true)} title="Editar configurações">
                  <Edit2 size={11} />
                </Button>
                <Button variant="ghost" size="icon" className="h-6 w-6 text-red-400 hover:text-red-500" onClick={handleDeleteQuiz} title="Remover quiz">
                  <Trash2 size={11} />
                </Button>
              </div>
            </div>
          )}

          {(quiz.quiz_questions ?? []).map((question: any, qIdx: number) => (
            <QuestionCard
              key={question.id}
              question={question}
              index={qIdx + 1}
              expanded={expandedQuestion === question.id}
              onToggle={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
              onDelete={() => handleDeleteQuestion(question.id)}
              onUpdate={(updates: any) => handleUpdateQuestion(question.id, updates)}
              onAddOption={(texto: string, correta: boolean) => handleAddOption(question.id, texto, correta)}
              onSetCorrect={(optId: string) => handleSetCorrect(question.id, optId)}
              onDeleteOption={(optId: string) => handleDeleteOption(question.id, optId)}
              loading={loading}
            />
          ))}

          {/* ── Paste Quiz Modal ── */}
          {showPasteModal && (
            <div className="bg-surface rounded-lg border border-amber-500/20 p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                  <ClipboardPaste size={13} className="text-amber-400" /> Colar Quiz Completo
                </p>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => { setShowPasteModal(false); setPasteErrors([]); }}><X size={12} /></Button>
              </div>
              <p className="text-[10px] text-muted-light">
                Cole o texto do quiz com perguntas numeradas (1, 2, 3...), alternativas com letras (a, b, c, d)
                e gabarito no final. O sistema detecta automaticamente as respostas corretas.
              </p>
              <textarea
                value={pasteText}
                onChange={(e) => setPasteText(e.target.value)}
                placeholder={"1. Qual a capital do Brasil?\n   a) São Paulo\n   b) Brasília\n   c) Rio de Janeiro\n   d) Salvador\n\nGABARITO\n1 B"}
                className="w-full h-48 text-xs font-mono bg-background border border-border rounded-lg p-3 focus:outline-none focus:border-amber-500 resize-y"
                autoFocus
              />
              {pasteErrors.length > 0 && (
                <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-2.5 space-y-1">
                  {pasteErrors.map((err, i) => (
                    <p key={i} className="text-[10px] text-red-400 flex items-start gap-1.5">
                      <AlertTriangle size={10} className="shrink-0 mt-0.5" /> {err}
                    </p>
                  ))}
                </div>
              )}
              {pasteText.trim() && (() => {
                const preview = parseQuizText(pasteText);
                return preview.questions.length > 0 ? (
                  <p className="text-[10px] text-emerald-500">
                    {preview.questions.length} questões detectadas
                    {preview.aprovacao_minima ? ` · Aprovação: ${preview.aprovacao_minima}%` : ""}
                    {preview.errors.length > 0 ? ` · ${preview.errors.length} avisos` : " · Tudo OK"}
                  </p>
                ) : null;
              })()}
              <div className="flex gap-2">
                <Button size="sm" onClick={handleImportFromPaste} loading={importingPaste} disabled={!pasteText.trim()}>
                  <ClipboardPaste size={11} /> Importar {parseQuizText(pasteText).questions.length} questões
                </Button>
                <Button size="sm" variant="ghost" onClick={() => { setShowPasteModal(false); setPasteText(""); setPasteErrors([]); }}>
                  Cancelar
                </Button>
              </div>
            </div>
          )}

          {addingQuestion ? (
            <AddQuestionForm onSave={handleAddQuestion} onCancel={() => setAddingQuestion(false)} loading={loading} />
          ) : !showPasteModal && (
            <div className="flex gap-2 flex-wrap">
              <button
                className="flex-1 flex items-center gap-2 px-3 py-2 text-sm text-muted-light hover:text-amber-400 hover:bg-surface border border-dashed border-border hover:border-amber-500/30 rounded-lg transition-colors"
                onClick={() => setAddingQuestion(true)}
              >
                <Plus size={13} /> Adicionar Questão
              </button>
              <button
                className="flex items-center gap-2 px-3 py-2 text-sm text-blue-500 hover:text-blue-600 hover:bg-blue-50 border border-dashed border-blue-300 hover:border-blue-400 rounded-lg transition-colors"
                onClick={() => { setShowPasteModal(true); setPasteText(""); setPasteErrors([]); }}
              >
                <ClipboardPaste size={13} /> Colar Quiz
              </button>
              {lessonConteudo && (
                <button
                  className="flex items-center gap-2 px-3 py-2 text-sm text-amber-500 hover:text-amber-600 hover:bg-amber-50 border border-dashed border-amber-300 hover:border-amber-400 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleGenerateWithAI}
                  disabled={generatingAI}
                >
                  <Sparkles size={13} className={generatingAI ? "animate-spin" : ""} />
                  {generatingAI ? "Gerando..." : "Gerar com IA"}
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── QuestionCard ──────────────────────────────────────────────

function QuestionCard({ question, index, expanded, onToggle, onDelete, onUpdate, onAddOption, onSetCorrect, onDeleteOption, loading }: any) {
  const [newOption, setNewOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [editingText, setEditingText] = useState(false);
  const [editText, setEditText] = useState(question.texto);
  const [editExplicacao, setEditExplicacao] = useState(question.explicacao ?? "");
  const hasCorrect = (question.quiz_options ?? []).some((o: any) => o.correta);
  const isTrueFalse = question.tipo === "true_false";

  return (
    <div className="bg-surface rounded-lg border border-border overflow-hidden">
      <div className="flex items-center gap-3 px-3 py-2.5 cursor-pointer hover:bg-surface-3 select-none" onClick={onToggle}>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/15 text-[10px] font-bold text-amber-400 shrink-0">{index}</span>
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          {isTrueFalse && <Badge variant="secondary" className="text-[9px] px-1 py-0 shrink-0">V/F</Badge>}
          <p className="text-sm text-foreground truncate">{question.texto}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {hasCorrect
            ? <CheckCircle2 size={13} className="text-emerald-500" />
            : <span title="Nenhuma resposta correta marcada"><Circle size={13} className="text-amber-400" /></span>}
          <span className="text-[10px] text-muted-light">{question.quiz_options?.length ?? 0} opções</span>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-red-400 hover:text-red-500" onClick={(e: React.MouseEvent) => { e.stopPropagation(); onDelete(); }}>
            <Trash2 size={11} />
          </Button>
          <ChevronRight size={13} className={cn("text-muted-light transition-transform", expanded && "rotate-90")} />
        </div>
      </div>

      {expanded && (
        <div className="border-t border-border/50 px-3 py-3 space-y-2">
          {/* Edição do texto da questão */}
          {editingText ? (
            <div className="space-y-2 mb-3 p-2 rounded-lg bg-surface-2 border border-border">
              <textarea
                className="w-full text-sm border border-border rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-500 resize-none"
                rows={2}
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                autoFocus
              />
              <input
                className="w-full text-xs border border-border rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-500"
                placeholder="Explicação da resposta (opcional)"
                value={editExplicacao}
                onChange={(e) => setEditExplicacao(e.target.value)}
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={() => { onUpdate({ texto: editText, explicacao: editExplicacao || null }); setEditingText(false); }}><Save size={11} /> Salvar</Button>
                <Button size="sm" variant="ghost" onClick={() => { setEditText(question.texto); setEditExplicacao(question.explicacao ?? ""); setEditingText(false); }}><X size={11} /></Button>
              </div>
            </div>
          ) : (
            <button
              className="text-[10px] text-amber-400 hover:underline mb-1"
              onClick={() => setEditingText(true)}
            >
              Editar questão{question.explicacao ? " · tem explicação" : ""}
            </button>
          )}

          {/* Opções */}
          {(question.quiz_options ?? []).map((opt: any) => (
            <div key={opt.id} className="flex items-center gap-2 group">
              <button
                className={cn("flex h-5 w-5 items-center justify-center rounded-full border-2 shrink-0 transition-colors", opt.correta ? "border-emerald-500 bg-emerald-500" : "border-border-strong hover:border-emerald-400")}
                onClick={() => onSetCorrect(opt.id)}
                title="Marcar como correta"
              >
                {opt.correta && <span className="text-white text-[8px]">✓</span>}
              </button>
              <span className="flex-1 text-sm text-muted">{opt.texto}</span>
              {!isTrueFalse && (
                <button className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition-opacity" onClick={() => onDeleteOption(opt.id)}>
                  <X size={12} />
                </button>
              )}
            </div>
          ))}

          {/* Adicionar opção — escondido para V/F (já tem Verdadeiro/Falso fixos) */}
          {!isTrueFalse && (
            <>
              <div className="flex items-center gap-2 pt-1">
                <button
                  className={cn("flex h-5 w-5 items-center justify-center rounded-full border-2 shrink-0 transition-colors", isCorrect ? "border-emerald-500 bg-emerald-500" : "border-border-strong hover:border-emerald-400")}
                  onClick={() => setIsCorrect(!isCorrect)}
                  title="Marcar como correta"
                >
                  {isCorrect && <span className="text-white text-[8px]">✓</span>}
                </button>
                <input
                  className="flex-1 text-sm border border-border rounded-lg px-2 py-1 focus:outline-none focus:border-amber-500"
                  placeholder="Nova opção..."
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); onAddOption(newOption, isCorrect); setNewOption(""); setIsCorrect(false); } }}
                />
                <Button size="sm" variant="ghost" className="h-7 px-2 text-amber-400" loading={loading} onClick={() => { onAddOption(newOption, isCorrect); setNewOption(""); setIsCorrect(false); }}>
                  <Plus size={12} />
                </Button>
              </div>
              <p className="text-[10px] text-muted-light">Clique no círculo para marcar a resposta correta. Enter para adicionar.</p>
            </>
          )}

          {isTrueFalse && (
            <p className="text-[10px] text-muted-light">Clique no círculo para definir se a afirmação é verdadeira ou falsa.</p>
          )}
        </div>
      )}
    </div>
  );
}

// ── AddQuestionForm ───────────────────────────────────────────

function AddQuestionForm({ onSave, onCancel, loading }: { onSave: (texto: string, tipo: "multiple_choice" | "true_false") => void; onCancel: () => void; loading: boolean }) {
  const [texto, setTexto] = useState("");
  const [tipo, setTipo] = useState<"multiple_choice" | "true_false">("multiple_choice");
  return (
    <div className="bg-surface rounded-lg border border-amber-500/20 px-3 py-3 space-y-2">
      <div className="flex items-center gap-3 mb-1">
        <label className="block text-xs text-muted-light">Tipo:</label>
        <div className="flex gap-1">
          <button
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-medium transition-colors",
              tipo === "multiple_choice" ? "bg-amber-500 text-white" : "bg-surface-3 text-muted-light hover:bg-surface-3"
            )}
            onClick={() => setTipo("multiple_choice")}
          >
            Múltipla Escolha
          </button>
          <button
            className={cn(
              "px-2.5 py-1 rounded-lg text-xs font-medium transition-colors",
              tipo === "true_false" ? "bg-amber-500 text-white" : "bg-surface-3 text-muted-light hover:bg-surface-3"
            )}
            onClick={() => setTipo("true_false")}
          >
            Verdadeiro / Falso
          </button>
        </div>
      </div>
      <textarea
        className="w-full text-sm border border-border rounded-lg px-2 py-1.5 focus:outline-none focus:border-amber-500 resize-none"
        rows={2}
        placeholder={tipo === "true_false"
          ? "Ex: O compressor de áudio reduz a faixa dinâmica do sinal."
          : "Ex: Qual a função principal do compressor de áudio?"}
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        autoFocus
      />
      {tipo === "true_false" && (
        <p className="text-[10px] text-muted-light">As opções &quot;Verdadeiro&quot; e &quot;Falso&quot; serão criadas automaticamente.</p>
      )}
      <div className="flex gap-2">
        <Button size="sm" loading={loading} onClick={() => onSave(texto, tipo)}><Save size={12} /> Salvar Questão</Button>
        <Button size="sm" variant="ghost" onClick={onCancel}><X size={12} /> Cancelar</Button>
      </div>
    </div>
  );
}
