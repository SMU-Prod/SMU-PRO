"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  adminCreateCourse, adminUpdateCourse,
  adminCreateModule, adminCreateLesson,
} from "@/lib/actions/courses";
import { slugify, getCategoryIcon } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { FileUploader } from "@/components/admin/file-uploader";
import { cn } from "@/lib/utils";
import {
  Check, ChevronRight, Info, Settings, Eye, EyeOff, Star,
  AlertCircle, Layers, Plus, Video, FileText, BookOpen,
  HelpCircle, Trash2, ChevronDown, Rocket,
} from "lucide-react";
import type { Course } from "@/types/database";

const schema = z.object({
  titulo: z.string().min(3, "Mínimo 3 caracteres"),
  slug: z.string().min(3).regex(/^[a-z0-9-]+$/, "Apenas letras minúsculas, números e hífens"),
  descricao: z.string().optional().nullable(),
  descricao_curta: z.string().max(160).optional().nullable(),
  nivel: z.enum(["trainee", "junior", "pleno"]),
  categoria: z.enum(["som", "luz", "producao", "dj", "vj", "roadie", "marketing", "efeitos", "outros"]),
  categorias: z.array(z.string()).default([]),
  tipo: z.enum(["free", "pago", "projeto_cultural"]),
  preco: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().optional()),
  carga_horaria: z.preprocess((v) => (v === "" || v == null ? undefined : Number(v)), z.number().optional()),
  thumbnail_url: z.string().optional().nullable(),
  trailer_youtube_id: z.string().optional().nullable(),
  ativo: z.boolean(),
  destaque: z.boolean(),
  ordem: z.preprocess((v) => (v === "" || v == null ? 0 : Number(v)), z.number()),
});

type FormValues = z.infer<typeof schema>;

const CATEGORIAS = [
  ["som", "Sonorização"], ["luz", "Iluminação"], ["producao", "Produção"],
  ["dj", "DJ"], ["vj", "VJ / Vídeo"], ["roadie", "Roadie"],
  ["marketing", "Marketing"], ["efeitos", "Efeitos Especiais"], ["outros", "Outros"],
] as const;

const NIVEIS = [
  { value: "trainee", label: "Trainee", desc: "Nível inicial, acesso gratuito", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { value: "junior", label: "Junior", desc: "Nível intermediário", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { value: "pleno", label: "Pleno", desc: "Nível avançado", color: "bg-amber-500/15 text-amber-400 border-amber-500/20" },
] as const;

const TIPOS = [
  { value: "free", label: "Gratuito", desc: "Acesso livre para todos os alunos", icon: "🆓" },
  { value: "pago", label: "Pago", desc: "Requer pagamento para acesso", icon: "💳" },
  { value: "projeto_cultural", label: "MIT", desc: "Exclusivo para Projeto Cultural", icon: "🎓" },
] as const;

const LESSON_TYPES = [
  { value: "video", label: "Vídeo", icon: Video },
  { value: "pdf", label: "PDF", icon: FileText },
  { value: "texto", label: "Texto", icon: BookOpen },
  { value: "quiz", label: "Quiz", icon: HelpCircle },
  { value: "misto", label: "Misto", icon: BookOpen },
] as const;

const STEP_LABELS = ["Identidade", "Mídia", "Config.", "Revisar"];

interface ModuleDraft {
  id: string;
  titulo: string;
  dbId?: string;
  lessons: { id: string; titulo: string; tipo: string }[];
  expanded: boolean;
}

// ── Main component ────────────────────────────────────────────

export function CourseForm({ course }: { course?: Course }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [createdCourseId, setCreatedCourseId] = useState<string | null>(null);
  const isEditing = !!course;

  // Step 5 — structure
  const [modules, setModules] = useState<ModuleDraft[]>([]);
  const [newModuleName, setNewModuleName] = useState("");
  const [savingStructure, setSavingStructure] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema) as any,
    defaultValues: course
      ? {
          ...course,
          descricao: course.descricao ?? undefined,
          descricao_curta: course.descricao_curta ?? undefined,
          thumbnail_url: course.thumbnail_url ?? undefined,
          trailer_youtube_id: course.trailer_youtube_id ?? undefined,
          preco: course.preco ?? undefined,
          carga_horaria: course.carga_horaria ?? undefined,
        }
      : { nivel: "trainee", categoria: "som", categorias: [], tipo: "free", ativo: false, destaque: false, ordem: 0 },
  });

  const { register, handleSubmit, setValue, watch, formState: { errors } } = form;
  const titulo = watch("titulo");
  const tipo = watch("tipo");
  const nivel = watch("nivel");
  const categoria = watch("categoria");
  const categorias = watch("categorias") ?? [];
  const ativo = watch("ativo");
  const destaque = watch("destaque");
  const thumbnail_url = watch("thumbnail_url");

  const allowMultiCategory = nivel === "trainee" || nivel === "junior";

  const toggleCategoria = (val: string) => {
    if (allowMultiCategory) {
      const current = categorias as string[];
      const next = current.includes(val) ? current.filter((c) => c !== val) : [...current, val];
      setValue("categorias", next);
      // Keep primary categoria in sync
      if (next.length > 0) setValue("categoria", next[0] as any);
    } else {
      setValue("categoria", val as any);
      setValue("categorias", [val]);
    }
  };

  const handleTituloChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    register("titulo").onChange(e);
    if (!isEditing) setValue("slug", slugify(e.target.value));
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setError("");
    try {
      // Ensure categorias includes the primary categoria
      const cats = data.categorias?.length ? data.categorias : [data.categoria];
      const payload = { ...data, categorias: cats, categoria: (cats[0] ?? data.categoria) as any };
      if (isEditing) {
        await adminUpdateCourse(course.id, payload);
        router.push(`/admin/cursos/${course.id}?tab=curriculo`);
      } else {
        const created = await adminCreateCourse(payload as any);
        setCreatedCourseId((created as any).id);
        setStep(5);
      }
    } catch (e: any) {
      setError(e.message ?? "Erro ao salvar");
    } finally {
      setLoading(false);
    }
  };

  // ── Step 5 handlers ─────────────────────────────────────────

  const addModule = async () => {
    if (!newModuleName.trim() || !createdCourseId) return;
    setSavingStructure(true);
    try {
      const created = await adminCreateModule({ course_id: createdCourseId, titulo: newModuleName.trim(), ordem: modules.length });
      setModules((prev) => [
        ...prev,
        { id: crypto.randomUUID(), titulo: newModuleName.trim(), dbId: created.id, lessons: [], expanded: true },
      ]);
      setNewModuleName("");
    } finally { setSavingStructure(false); }
  };

  const addLesson = async (moduleId: string, titulo: string, tipo: string) => {
    const mod = modules.find((m) => m.id === moduleId);
    if (!mod?.dbId || !titulo.trim()) return;
    setSavingStructure(true);
    try {
      await adminCreateLesson({ module_id: mod.dbId, titulo: titulo.trim(), tipo: tipo as any, ordem: mod.lessons.length, duracao_min: 0 });
      setModules((prev) =>
        prev.map((m) =>
          m.id === moduleId ? { ...m, lessons: [...m.lessons, { id: crypto.randomUUID(), titulo: titulo.trim(), tipo }] } : m
        )
      );
    } finally { setSavingStructure(false); }
  };

  // If editing — show flat form
  if (isEditing) {
    return (
      <FlatForm
        form={form}
        loading={loading}
        error={error}
        onSubmit={handleSubmit(onSubmit)}
        onCancel={() => router.back()}
        handleTituloChange={handleTituloChange}
        setValue={setValue}
      />
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step indicator — hidden on step 5 */}
      {step < 5 && (
        <div className="flex items-center mb-8">
          {STEP_LABELS.map((label, i) => {
            const sid = i + 1;
            const done = step > sid;
            const active = step === sid;
            return (
              <div key={sid} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1">
                  <button
                    type="button"
                    onClick={() => done && setStep(sid)}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all text-sm font-bold",
                      done ? "border-amber-500 bg-amber-500 text-white cursor-pointer" :
                      active ? "border-amber-500 bg-surface text-amber-400" :
                      "border-border bg-surface text-muted-light"
                    )}
                  >
                    {done ? <Check size={15} /> : sid}
                  </button>
                  <span className={cn("text-[10px] font-medium whitespace-nowrap", active ? "text-amber-400" : done ? "text-muted" : "text-muted-light")}>
                    {label}
                  </span>
                </div>
                {i < 3 && (
                  <div className={cn("flex-1 h-0.5 mx-2 mb-4", step > sid ? "bg-amber-500" : "bg-surface-3")} />
                )}
              </div>
            );
          })}
        </div>
      )}

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 mb-4">
          <AlertCircle size={15} className="shrink-0" /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* ── STEP 1 ── */}
        {step === 1 && (
          <div className="space-y-6">
            <StepHeader title="Identidade do Curso" desc="Nome, categoria e tipo de acesso." />
            <div className="space-y-4">
              <Field label="Título do curso *">
                <Input {...register("titulo")} onChange={handleTituloChange} placeholder="Ex: Fundamentos de Áudio ao Vivo" error={errors.titulo?.message} />
              </Field>
              <Field label="Slug (URL) *">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-muted-light">/cursos/</span>
                  <Input {...register("slug")} className="pl-16" placeholder="fundamentos-audio-ao-vivo" error={errors.slug?.message} />
                </div>
              </Field>
              <Field label="Descrição curta">
                <Input {...register("descricao_curta")} placeholder="Resumo de até 160 caracteres" />
              </Field>

              <Field label="Nível *">
                <div className="grid grid-cols-3 gap-3">
                  {NIVEIS.map((n) => (
                    <button key={n.value} type="button" onClick={() => setValue("nivel", n.value)}
                      className={cn("rounded-xl border-2 p-3 text-left transition-all",
                        nivel === n.value ? `${n.color} border-current` : "border-border bg-surface hover:border-border-strong"
                      )}>
                      <Badge variant={n.value as any} className="text-[10px] mb-1.5">{n.label}</Badge>
                      <p className="text-xs text-muted-light leading-tight">{n.desc}</p>
                    </button>
                  ))}
                </div>
              </Field>

              <Field label={allowMultiCategory ? "Categorias * (selecione várias)" : "Categoria *"}>
                {allowMultiCategory && (
                  <p className="text-xs text-muted-light mb-2">Cursos {nivel} podem ter múltiplas matérias. Clique para selecionar/deselecionar.</p>
                )}
                <div className="grid grid-cols-3 gap-2">
                  {CATEGORIAS.map(([val, label]) => {
                    const isSelected = allowMultiCategory
                      ? (categorias as string[]).includes(val)
                      : categoria === val;
                    return (
                      <button key={val} type="button" onClick={() => toggleCategoria(val)}
                        className={cn("flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all",
                          isSelected ? "border-amber-500 bg-amber-500/10 text-amber-400" : "border-border bg-surface text-muted hover:border-amber-500/20"
                        )}>
                        <span>{getCategoryIcon(val)}</span>
                        <span className="truncate text-xs">{label}</span>
                        {allowMultiCategory && isSelected && <Check size={12} className="ml-auto text-amber-400" />}
                      </button>
                    );
                  })}
                </div>
              </Field>

              <Field label="Tipo de Acesso *">
                <div className="grid grid-cols-3 gap-3">
                  {TIPOS.map((t) => (
                    <button key={t.value} type="button" onClick={() => setValue("tipo", t.value)}
                      className={cn("rounded-xl border-2 p-3 text-left transition-all",
                        tipo === t.value ? "border-amber-500 bg-amber-500/10" : "border-border bg-surface hover:border-border-strong"
                      )}>
                      <span className="text-xl">{t.icon}</span>
                      <p className="text-sm font-medium text-foreground mt-1">{t.label}</p>
                      <p className="text-xs text-muted-light leading-tight mt-0.5">{t.desc}</p>
                    </button>
                  ))}
                </div>
              </Field>

              {tipo === "pago" && (
                <Field label="Preço (R$) *">
                  <Input type="number" step="0.01" {...register("preco")} placeholder="97.00" />
                </Field>
              )}
            </div>
            <div className="flex justify-end">
              <Button type="button" onClick={async () => {
                const ok = await form.trigger(["titulo", "slug", "nivel", "categoria"]);
                if (ok) setStep(2);
              }}>
                Próximo <ChevronRight size={15} />
              </Button>
            </div>
          </div>
        )}

        {/* ── STEP 2 ── */}
        {step === 2 && (
          <div className="space-y-6">
            <StepHeader title="Mídia e Conteúdo" desc="Thumbnail, descrição e trailer." />
            <div className="space-y-5">
              <Field label="Thumbnail do Curso">
                {thumbnail_url ? (
                  <div className="rounded-xl overflow-hidden border border-border h-40 relative">
                    <img src={thumbnail_url} alt="" className="w-full h-full object-cover" />
                    <button type="button" onClick={() => setValue("thumbnail_url", "")}
                      className="absolute top-2 right-2 h-7 w-7 flex items-center justify-center rounded-full bg-black/50 text-foreground hover:bg-black/70">
                      <Trash2 size={12} />
                    </button>
                  </div>
                ) : (
                  <>
                    <FileUploader
                      accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }}
                      bucket="course-thumbnails"
                      folder="thumbnails"
                      label="Enviar thumbnail do curso"
                      hint="JPG, PNG, WEBP · 1280×720px recomendado · Máx. 10MB"
                      maxSizeMB={10}
                      imagePreview
                      onUpload={(url) => setValue("thumbnail_url", url)}
                    />
                    <p className="text-xs text-muted-light mt-1.5">Ou cole uma URL:</p>
                    <Input {...register("thumbnail_url")} placeholder="https://..." className="mt-1" />
                  </>
                )}
              </Field>

              <Field label="Descrição Completa">
                <textarea
                  {...register("descricao")}
                  placeholder="Descreva o conteúdo, o que o aluno vai aprender, pré-requisitos..."
                  className="w-full min-h-[140px] rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 resize-none"
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="YouTube ID do Trailer">
                  <Input {...register("trailer_youtube_id")} placeholder="dQw4w9WgXcQ" />
                </Field>
                <Field label="Carga Horária (min)">
                  <Input type="number" {...register("carga_horaria")} placeholder="120" />
                  <p className="text-xs text-muted-light mt-1">Aparece no certificado</p>
                </Field>
              </div>
            </div>
            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={() => setStep(1)}>Voltar</Button>
              <Button type="button" onClick={async () => {
                const ok = await form.trigger(["thumbnail_url", "trailer_youtube_id"]);
                if (ok) setStep(3);
              }}>Próximo <ChevronRight size={15} /></Button>
            </div>
          </div>
        )}

        {/* ── STEP 3 ── */}
        {step === 3 && (
          <div className="space-y-6">
            <StepHeader title="Configurações" desc="Visibilidade e destaque." />
            <div className="space-y-3">
              <ToggleCard active={ativo} onToggle={() => setValue("ativo", !ativo)}
                activeIcon={<Eye size={18} />} inactiveIcon={<EyeOff size={18} />}
                title={ativo ? "Publicado" : "Rascunho"}
                desc={ativo ? "Visível para alunos elegíveis." : "Invisível para alunos. Edite com calma."}
                activeColor="bg-amber-500" activeBorder="border-amber-500" activeBg="bg-amber-500/10" />
              <ToggleCard active={destaque} onToggle={() => setValue("destaque", !destaque)}
                activeIcon={<Star size={18} />} inactiveIcon={<Star size={18} />}
                title="Curso em Destaque" desc="Aparece no topo da listagem e na home."
                activeColor="bg-amber-400" activeBorder="border-amber-400" activeBg="bg-amber-50" />
              <Field label="Ordem de exibição">
                <Input type="number" {...register("ordem")} placeholder="0" className="w-32" />
                <p className="text-xs text-muted-light mt-1">Número menor = aparece primeiro.</p>
              </Field>
            </div>
            <div className="flex justify-between">
              <Button type="button" variant="ghost" onClick={() => setStep(2)}>Voltar</Button>
              <Button type="button" onClick={async () => {
                const ok = await form.trigger(["tipo", "preco"]);
                if (ok) setStep(4);
              }}>Revisar <ChevronRight size={15} /></Button>
            </div>
          </div>
        )}

        {/* ── STEP 4 ── */}
        {step === 4 && (
          <div className="space-y-6">
            <StepHeader title="Revisar e Criar" desc="Confira tudo antes de salvar." />

            <CoursePreviewCard watch={watch} />

            <div className="rounded-xl border border-border bg-surface-2 p-4 space-y-2">
              <p className="text-xs font-semibold text-muted-light uppercase tracking-wide mb-3">Checklist</p>
              {[
                { label: "Título preenchido", ok: !!watch("titulo") },
                { label: "Slug definido", ok: !!watch("slug") },
                { label: "Categoria e nível", ok: !!watch("categoria") && !!watch("nivel") },
                { label: "Tipo de acesso", ok: !!watch("tipo") },
                { label: "Thumbnail", ok: !!watch("thumbnail_url"), optional: true },
                { label: "Descrição curta", ok: !!watch("descricao_curta"), optional: true },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  <div className={cn("h-4 w-4 rounded-full flex items-center justify-center shrink-0",
                    item.ok ? "bg-emerald-500" : item.optional ? "bg-surface-3" : "bg-amber-400"
                  )}>
                    {item.ok && <Check size={10} className="text-foreground" />}
                  </div>
                  <span className={item.ok ? "text-muted" : item.optional ? "text-muted-light" : "text-amber-700"}>
                    {item.label}{item.optional && <span className="text-muted-light ml-1">(opcional)</span>}
                  </span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-700">
              ✨ Após criar, você será levado para a <strong>Etapa 5</strong> onde adiciona módulos e aulas diretamente.
            </div>

            <div className="flex justify-between gap-3">
              <Button type="button" variant="ghost" onClick={() => setStep(3)}>Voltar</Button>
              <div className="flex gap-2">
                <Button type="submit" variant="secondary" loading={loading} onClick={() => setValue("ativo", false)}>
                  Salvar como Rascunho
                </Button>
                <Button type="submit" loading={loading} onClick={() => setValue("ativo", true)}>
                  Criar e Publicar
                </Button>
              </div>
            </div>
          </div>
        )}
      </form>

      {/* ── STEP 5: ESTRUTURA ── */}
      {step === 5 && createdCourseId && (
        <div className="space-y-5">
          {/* Success */}
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
              <Check size={20} className="text-foreground" />
            </div>
            <div>
              <p className="font-semibold text-emerald-800">Curso criado com sucesso!</p>
              <p className="text-sm text-emerald-700 mt-0.5">
                Agora crie a estrutura: adicione módulos e as aulas de cada módulo.
                Você pode detalhar cada aula (vídeo, PDF, quiz) no editor completo depois.
              </p>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-3">
            {modules.map((mod, modIdx) => (
              <div key={mod.id} className="rounded-xl border border-border bg-surface overflow-hidden">
                <div
                  className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-surface-3 transition-colors select-none group"
                  onClick={() =>
                    setModules((prev) =>
                      prev.map((m) => (m.id === mod.id ? { ...m, expanded: !m.expanded } : m))
                    )
                  }
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-500/15 text-xs font-bold text-amber-400 shrink-0">
                    {modIdx + 1}
                  </div>
                  <p className="flex-1 font-medium text-sm text-foreground">{mod.titulo}</p>
                  <span className="text-xs text-muted-light">{mod.lessons.length} aula{mod.lessons.length !== 1 ? "s" : ""}</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setModules((p) => p.filter((m) => m.id !== mod.id)); }}
                    className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-500 transition-opacity p-1"
                  >
                    <Trash2 size={13} />
                  </button>
                  <ChevronDown size={15} className={cn("text-muted-light transition-transform", mod.expanded && "rotate-180")} />
                </div>

                {mod.expanded && (
                  <div className="border-t border-border/50">
                    {mod.lessons.map((lesson, li) => (
                      <div key={lesson.id} className="flex items-center gap-3 px-4 py-2.5 border-b border-border/50 group/l">
                        <span className="text-xs text-muted-light w-4">{li + 1}</span>
                        <LessonTypeIconSmall tipo={lesson.tipo} />
                        <p className="flex-1 text-sm text-foreground">{lesson.titulo}</p>
                        <button
                          onClick={() =>
                            setModules((prev) =>
                              prev.map((m) =>
                                m.id === mod.id ? { ...m, lessons: m.lessons.filter((l) => l.id !== lesson.id) } : m
                              )
                            )
                          }
                          className="opacity-0 group-hover/l:opacity-100 text-red-400 hover:text-red-500 transition-opacity"
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    ))}
                    <AddLessonInline moduleId={mod.id} onAdd={addLesson} loading={savingStructure} />
                  </div>
                )}
              </div>
            ))}

            {/* Add module */}
            <div className="flex items-center gap-2">
              <input
                value={newModuleName}
                onChange={(e) => setNewModuleName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addModule()}
                placeholder="Nome do módulo... (Enter para adicionar)"
                className="flex-1 h-10 rounded-xl border border-dashed border-border-strong bg-surface px-4 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 transition-colors"
              />
              <Button type="button" variant="secondary" size="sm" loading={savingStructure} onClick={addModule} disabled={!newModuleName.trim()}>
                <Plus size={14} /> Módulo
              </Button>
            </div>
          </div>

          {modules.length === 0 && (
            <div className="text-center py-8 rounded-xl border border-dashed border-border">
              <Layers size={28} className="text-muted-light mx-auto mb-2" />
              <p className="text-sm text-muted-light">Digite o nome de um módulo acima e pressione Enter.</p>
              <p className="text-xs text-muted-light mt-1">Ex: "Fundamentos", "Técnicas Avançadas", "Avaliação Final"</p>
            </div>
          )}

          <div className="flex items-center justify-between pt-2 border-t border-border/50">
            <p className="text-sm text-muted-light">
              {modules.length} módulo{modules.length !== 1 ? "s" : ""} · {modules.reduce((a, m) => a + m.lessons.length, 0)} aulas
            </p>
            <Button onClick={() => router.push(`/admin/cursos/${createdCourseId}?tab=curriculo`)}>
              <Rocket size={15} /> Ir para o Editor Completo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

// ── AddLessonInline ───────────────────────────────────────────

function AddLessonInline({
  moduleId,
  onAdd,
  loading,
}: {
  moduleId: string;
  onAdd: (moduleId: string, titulo: string, tipo: string) => void;
  loading: boolean;
}) {
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState("video");
  const submit = () => {
    if (!titulo.trim()) return;
    onAdd(moduleId, titulo, tipo);
    setTitulo("");
  };
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-surface-2">
      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="h-7 rounded-lg border border-border bg-surface px-2 text-xs text-muted focus:outline-none"
      >
        {LESSON_TYPES.map((t) => (
          <option key={t.value} value={t.value}>{t.label}</option>
        ))}
      </select>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
        placeholder="Nome da aula... (Enter)"
        className="flex-1 h-7 rounded-lg border border-border bg-surface px-2 text-xs text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500"
      />
      <button
        onClick={submit}
        disabled={loading || !titulo.trim()}
        className="h-7 w-7 flex items-center justify-center rounded-lg bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-50 transition-colors"
      >
        <Plus size={13} />
      </button>
    </div>
  );
}

// ── LessonTypeIconSmall ───────────────────────────────────────

function LessonTypeIconSmall({ tipo }: { tipo: string }) {
  const map: Record<string, { icon: React.ElementType; color: string }> = {
    video: { icon: Video, color: "text-blue-500" },
    pdf: { icon: FileText, color: "text-red-400" },
    quiz: { icon: HelpCircle, color: "text-amber-500" },
    texto: { icon: BookOpen, color: "text-emerald-500" },
    misto: { icon: BookOpen, color: "text-amber-400" },
  };
  const { icon: Icon, color } = map[tipo] ?? map.video;
  return <Icon size={13} className={cn("shrink-0", color)} />;
}

// ── ToggleCard ────────────────────────────────────────────────

function ToggleCard({ active, onToggle, activeIcon, inactiveIcon, title, desc, activeColor, activeBorder, activeBg }: any) {
  return (
    <button type="button" onClick={onToggle}
      className={cn("w-full flex items-center gap-4 rounded-xl border-2 p-4 text-left transition-all",
        active ? `${activeBorder} ${activeBg}` : "border-border bg-surface"
      )}>
      <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center shrink-0", active ? `${activeColor} text-foreground` : "bg-surface-3 text-muted-light")}>
        {active ? activeIcon : inactiveIcon}
      </div>
      <div className="flex-1">
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-light">{desc}</p>
      </div>
      <div className={cn("h-5 w-9 rounded-full transition-colors relative", active ? activeColor : "bg-surface-3")}>
        <div className={cn("absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform", active ? "translate-x-4" : "translate-x-0.5")} />
      </div>
    </button>
  );
}

// ── CoursePreviewCard ─────────────────────────────────────────

function CoursePreviewCard({ watch }: { watch: any }) {
  const titulo = watch("titulo");
  const descricao_curta = watch("descricao_curta");
  const nivel = watch("nivel");
  const categoria = watch("categoria");
  const tipo = watch("tipo");
  const thumbnail_url = watch("thumbnail_url");
  const preco = watch("preco");
  const nivelColors: Record<string, string> = { trainee: "bg-blue-100 text-blue-700", junior: "bg-emerald-100 text-emerald-700", pleno: "bg-amber-500/15 text-amber-400" };
  const nivelLabels: Record<string, string> = { trainee: "Trainee", junior: "Junior", pleno: "Pleno" };
  const tipoLabel = tipo === "pago" ? (preco ? `R$ ${preco}` : "Pago") : tipo === "free" ? "Grátis" : "MIT";
  return (
    <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
      <div className="h-24 bg-gradient-to-br from-surface-2 to-surface-3 flex items-center justify-center text-4xl relative overflow-hidden">
        {thumbnail_url
          ? <img src={thumbnail_url} alt="" className="w-full h-full object-cover absolute inset-0" onError={(e) => (e.currentTarget.style.display = "none")} />
          : <span>{getCategoryIcon(categoria)}</span>}
        <div className="absolute top-2 right-2">
          <span className={cn("px-2 py-0.5 rounded-full text-[10px] font-medium", nivelColors[nivel])}>{nivelLabels[nivel]}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-foreground text-sm">{titulo || "Título do curso"}</h3>
          <span className="text-xs font-medium text-amber-400 shrink-0">{tipoLabel}</span>
        </div>
        <p className="text-xs text-muted-light">{descricao_curta || "Descrição curta aparecerá aqui..."}</p>
      </div>
    </div>
  );
}

// ── FlatForm (edição) ─────────────────────────────────────────

function FlatForm({ form, loading, error, onSubmit, onCancel, handleTituloChange, setValue }: any) {
  const { register, watch, formState: { errors } } = form;
  const tipo = watch("tipo");
  const nivel = watch("nivel");
  const categorias = watch("categorias") ?? [];
  const thumbnail_url = watch("thumbnail_url");
  const allowMultiCat = nivel === "trainee" || nivel === "junior";

  const toggleCat = (val: string) => {
    if (allowMultiCat) {
      const current = categorias as string[];
      const next = current.includes(val) ? current.filter((c: string) => c !== val) : [...current, val];
      setValue("categorias", next);
      if (next.length > 0) setValue("categoria", next[0]);
    } else {
      setValue("categoria", val);
      setValue("categorias", [val]);
    }
  };
  return (
    <form onSubmit={onSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
          <AlertCircle size={15} className="shrink-0" /> {error}
        </div>
      )}
      <Section title="Informações Básicas">
        <Field label="Título *"><Input {...register("titulo")} onChange={handleTituloChange} placeholder="Ex: Fundamentos de Áudio ao Vivo" error={errors.titulo?.message} /></Field>
        <Field label="Slug (URL) *"><Input {...register("slug")} placeholder="fundamentos-audio-ao-vivo" error={errors.slug?.message} /></Field>
        <Field label="Descrição Curta"><Input {...register("descricao_curta")} placeholder="Até 160 caracteres" /></Field>
        <Field label="Descrição Completa">
          <textarea {...register("descricao")} placeholder="Descreva o conteúdo do curso..." className="w-full min-h-[120px] rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-light focus:outline-none focus:border-amber-500 resize-none" />
        </Field>
      </Section>

      <Section title="Classificação">
        <div className="grid grid-cols-2 gap-3">
          <Field label="Nível *"><select {...register("nivel")} className={selectCls}><option value="trainee">Trainee</option><option value="junior">Junior</option><option value="pleno">Pleno</option></select></Field>
          <Field label="Tipo *"><select {...register("tipo")} className={selectCls}><option value="free">Gratuito</option><option value="pago">Pago</option><option value="projeto_cultural">MIT</option></select></Field>
        </div>
        <Field label={allowMultiCat ? "Categorias * (selecione várias)" : "Categoria *"}>
          {allowMultiCat && <p className="text-xs text-muted-light mb-2">Cursos {nivel} podem ter múltiplas matérias.</p>}
          <div className="grid grid-cols-3 gap-2">
            {CATEGORIAS.map(([val, label]) => {
              const isSel = allowMultiCat ? (categorias as string[]).includes(val) : watch("categoria") === val;
              return (
                <button key={val} type="button" onClick={() => toggleCat(val)}
                  className={cn("flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all",
                    isSel ? "border-amber-500 bg-amber-500/10 text-amber-400" : "border-border bg-surface text-muted hover:border-amber-500/20"
                  )}>
                  <span>{getCategoryIcon(val)}</span>
                  <span className="truncate text-xs">{label}</span>
                  {allowMultiCat && isSel && <Check size={12} className="ml-auto text-amber-400" />}
                </button>
              );
            })}
          </div>
        </Field>
        {tipo === "pago" && <Field label="Preço (R$)"><Input type="number" step="0.01" {...register("preco")} placeholder="97.00" className="w-40" /></Field>}
      </Section>

      <Section title="Thumbnail">
        {thumbnail_url ? (
          <div className="rounded-xl overflow-hidden border border-border h-36 relative">
            <img src={thumbnail_url} alt="" className="w-full h-full object-cover" />
            <button type="button" onClick={() => setValue("thumbnail_url", "")} className="absolute top-2 right-2 h-7 w-7 flex items-center justify-center rounded-full bg-black/50 text-foreground hover:bg-black/70"><Trash2 size={12} /></button>
          </div>
        ) : (
          <>
            <FileUploader accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }} bucket="course-thumbnails" folder="thumbnails" label="Enviar nova thumbnail" hint="JPG, PNG, WEBP · 1280×720px" maxSizeMB={10} imagePreview onUpload={(url) => setValue("thumbnail_url", url)} />
            <Field label="Ou cole a URL"><Input {...register("thumbnail_url")} placeholder="https://..." /></Field>
          </>
        )}
      </Section>

      <Section title="Mídia Adicional">
        <Field label="YouTube ID do Trailer"><Input {...register("trailer_youtube_id")} placeholder="dQw4w9WgXcQ" /></Field>
        <Field label="Carga Horária (minutos)"><Input type="number" {...register("carga_horaria")} placeholder="120" className="w-32" /></Field>
      </Section>

      <Section title="Configurações">
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center gap-2 cursor-pointer select-none"><input type="checkbox" {...register("ativo")} className="h-4 w-4 rounded border-border-strong accent-amber-500" /><span className="text-sm text-muted">Publicado</span></label>
          <label className="flex items-center gap-2 cursor-pointer select-none"><input type="checkbox" {...register("destaque")} className="h-4 w-4 rounded border-border-strong accent-amber-500" /><span className="text-sm text-muted">Em destaque</span></label>
        </div>
        <Field label="Ordem"><Input type="number" {...register("ordem")} placeholder="0" className="w-24" /></Field>
      </Section>

      <div className="flex gap-3 pt-2">
        <Button type="submit" loading={loading} size="lg">Salvar Alterações</Button>
        <Button type="button" variant="secondary" size="lg" onClick={onCancel}>Cancelar</Button>
      </div>
    </form>
  );
}

// ── Helpers ───────────────────────────────────────────────────

const selectCls = "w-full h-10 rounded-lg border border-border bg-surface px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-amber-500";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <div className="px-4 py-3 border-b border-border/50 bg-surface-2">
        <p className="text-sm font-semibold text-foreground">{title}</p>
      </div>
      <div className="p-4 space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-sm text-muted mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function StepHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground mb-1">{title}</h2>
      <p className="text-sm text-muted-light">{desc}</p>
    </div>
  );
}
