"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  adminCreatePost, adminUpdatePost, adminDeletePost, adminTogglePostPublish,
} from "@/lib/actions/blog";
import { RichTextEditor } from "@/components/admin/rich-text-editor";
import { FileUploader } from "@/components/admin/file-uploader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn, slugify } from "@/lib/utils";
import {
  Plus, Edit2, Trash2, Save, X, Eye, EyeOff,
  BookOpen, Clock, ExternalLink, FileText, Monitor,
  ChevronRight, Calendar, ArrowLeft,
} from "lucide-react";

const CATEGORIAS = [
  "geral", "som", "luz", "producao", "dj", "vj", "carreira", "equipamentos", "tutoriais",
];

const CAT_LABELS: Record<string, string> = {
  geral: "Geral", som: "Sonorização", luz: "Iluminação", producao: "Produção",
  dj: "DJ", vj: "VJ", carreira: "Carreira", equipamentos: "Equipamentos", tutoriais: "Tutoriais",
};

interface Post {
  id: string;
  titulo: string;
  slug: string;
  resumo?: string;
  conteudo: string;
  thumbnail_url?: string;
  categoria: string;
  tags?: string[];
  publicado: boolean;
  destaque: boolean;
  views: number;
  tempo_leitura: number;
  created_at: string;
}

type View = "list" | "editor" | "preview";

export function BlogManager({ initialPosts }: { initialPosts: Post[] }) {
  const router = useRouter();
  const [posts, setPosts] = useState(initialPosts);
  const [view, setView] = useState<View>("list");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    titulo: "", slug: "", resumo: "", conteudo: "", thumbnail_url: "",
    categoria: "geral", tags: "", publicado: false, destaque: false, tempo_leitura: 5,
  });

  const resetForm = () => setForm({
    titulo: "", slug: "", resumo: "", conteudo: "", thumbnail_url: "",
    categoria: "geral", tags: "", publicado: false, destaque: false, tempo_leitura: 5,
  });

  const handleCreate = async () => {
    if (!form.titulo.trim() || !form.conteudo.trim()) return;
    setLoading(true);
    try {
      const created = await adminCreatePost({
        ...form,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      });
      setPosts((p) => [created as unknown as Post, ...p]);
      setView("list");
      resetForm();
      router.refresh();
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    if (!editingId) return;
    setLoading(true);
    try {
      await adminUpdatePost(editingId, {
        ...form,
        tags: form.tags ? form.tags.split(",").map((t) => t.trim()).filter(Boolean) : [],
      });
      setPosts((p) => p.map((post) => post.id === editingId ? { ...post, ...form, tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) } : post));
      setView("list");
      setEditingId(null);
      resetForm();
      router.refresh();
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Apagar este post permanentemente?")) return;
    await adminDeletePost(id);
    setPosts((p) => p.filter((post) => post.id !== id));
    router.refresh();
  };

  const handleToggle = async (id: string, publicado: boolean) => {
    await adminTogglePostPublish(id, publicado);
    setPosts((p) => p.map((post) => post.id === id ? { ...post, publicado } : post));
    router.refresh();
  };

  const startEdit = (post: Post) => {
    setEditingId(post.id);
    setForm({
      titulo: post.titulo, slug: post.slug, resumo: post.resumo ?? "",
      conteudo: post.conteudo, thumbnail_url: post.thumbnail_url ?? "",
      categoria: post.categoria, tags: post.tags?.join(", ") ?? "",
      publicado: post.publicado, destaque: post.destaque, tempo_leitura: post.tempo_leitura,
    });
    setView("editor");
  };

  const startCreate = () => {
    setEditingId(null);
    resetForm();
    setView("editor");
  };

  // ── LIST VIEW ──────────────────────────────────────────────
  if (view === "list") {
    return (
      <div className="space-y-4 max-w-4xl">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-light">{posts.length} posts total</p>
          <Button size="sm" onClick={startCreate}>
            <Plus size={14} /> Novo Post
          </Button>
        </div>

        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl border-2 border-dashed border-border bg-surface">
            <FileText size={40} className="text-muted-light mb-3" />
            <p className="font-medium text-foreground mb-1">Nenhum post criado</p>
            <p className="text-sm text-muted-light mb-4">Crie o primeiro artigo para impulsionar o SEO.</p>
            <Button size="sm" onClick={startCreate}><Plus size={13} /> Criar Post</Button>
          </div>
        )}

        <div className="space-y-3">
          {posts.map((post) => (
            <div key={post.id} className="rounded-xl border border-border bg-surface p-4 flex items-start gap-4 hover:border-amber-500/20 transition-colors group">
              <div className="h-16 w-24 rounded-lg bg-surface-2 shrink-0 overflow-hidden flex items-center justify-center">
                {post.thumbnail_url ? (
                  <img src={post.thumbnail_url} alt="" className="w-full h-full object-cover" />
                ) : (
                  <BookOpen size={20} className="text-muted-light" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-foreground text-sm truncate">{post.titulo}</h3>
                  <Badge variant={post.publicado ? "success" : "secondary"} className="text-[10px] shrink-0">
                    {post.publicado ? "Publicado" : "Rascunho"}
                  </Badge>
                  {post.destaque && <Badge variant="warning" className="text-[10px] shrink-0">Destaque</Badge>}
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-light">
                  <span>{CAT_LABELS[post.categoria] ?? post.categoria}</span>
                  <span className="flex items-center gap-1"><Clock size={10} /> {post.tempo_leitura} min</span>
                  <span>{post.views} views</span>
                  <span>{new Date(post.created_at).toLocaleDateString("pt-BR")}</span>
                </div>
              </div>

              <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                {post.publicado && (
                  <a href={`/blog/${post.slug}`} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="h-8 w-8" title="Ver post publicado">
                      <ExternalLink size={13} />
                    </Button>
                  </a>
                )}
                <Button variant="ghost" size="icon" className="h-8 w-8" title="Preview"
                  onClick={() => { startEdit(post); setView("preview"); }}>
                  <Monitor size={13} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8"
                  title={post.publicado ? "Despublicar" : "Publicar"}
                  onClick={() => handleToggle(post.id, !post.publicado)}>
                  {post.publicado ? <EyeOff size={13} /> : <Eye size={13} />}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" title="Editar" onClick={() => startEdit(post)}>
                  <Edit2 size={13} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-red-400 hover:text-red-500"
                  title="Apagar" onClick={() => handleDelete(post.id)}>
                  <Trash2 size={13} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── PREVIEW VIEW ───────────────────────────────────────────
  if (view === "preview") {
    const date = new Date().toLocaleDateString("pt-BR", {
      day: "2-digit", month: "long", year: "numeric",
    });

    return (
      <div className="max-w-4xl">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-5 bg-surface rounded-xl border border-border p-3">
          <div className="flex items-center gap-3">
            <Monitor size={16} className="text-amber-400" />
            <span className="text-sm font-semibold text-foreground">Preview — Visão do Leitor</span>
            <Badge variant="warning" className="text-[10px]">Simulação</Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setView("editor")}>
              <Edit2 size={13} /> Editar
            </Button>
            <Button variant="ghost" size="sm" onClick={() => { setView("list"); setEditingId(null); resetForm(); }}>
              <ArrowLeft size={13} /> Voltar
            </Button>
          </div>
        </div>

        {/* Simulated blog post page */}
        <div className="rounded-2xl border border-border bg-background overflow-hidden">
          <article className="max-w-3xl mx-auto px-6 py-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs text-muted-light mb-8">
              <span>Home</span><span>/</span><span>Blog</span><span>/</span>
              <span className="text-muted truncate max-w-[200px]">{form.titulo || "Sem título"}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="default">{CAT_LABELS[form.categoria] ?? form.categoria}</Badge>
                <span className="text-xs text-muted-light flex items-center gap-1"><Clock size={12} /> {form.tempo_leitura} min de leitura</span>
              </div>
              <h1 className="text-3xl font-black text-foreground leading-tight mb-4">{form.titulo || "Título do post"}</h1>
              {form.resumo && <p className="text-lg text-muted-light leading-relaxed">{form.resumo}</p>}
              <div className="flex items-center gap-4 mt-5 text-xs text-muted-light">
                <span className="flex items-center gap-1"><Calendar size={12} /> {date}</span>
              </div>
            </header>

            {/* Thumbnail */}
            {form.thumbnail_url && (
              <div className="rounded-2xl overflow-hidden border border-border mb-10">
                <img src={form.thumbnail_url} alt={form.titulo} className="w-full aspect-video object-cover" />
              </div>
            )}

            {/* Content */}
            {form.conteudo ? (
              <div
                className="prose prose-lg prose-invert max-w-none
                  [&_h1]:text-foreground [&_h1]:font-black [&_h1]:text-2xl [&_h1]:mt-10 [&_h1]:mb-4
                  [&_h2]:text-foreground [&_h2]:font-bold [&_h2]:text-xl [&_h2]:mt-8 [&_h2]:mb-3
                  [&_h3]:text-foreground [&_h3]:font-semibold [&_h3]:text-lg [&_h3]:mt-6 [&_h3]:mb-2
                  [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4
                  [&_a]:text-amber-400 [&_a]:underline [&_a]:underline-offset-2
                  [&_strong]:text-foreground
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:text-muted
                  [&_li]:mb-1.5
                  [&_blockquote]:border-l-4 [&_blockquote]:border-amber-500 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-light
                  [&_code]:bg-surface-3 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-sm [&_code]:text-amber-400
                  [&_img]:rounded-xl [&_img]:border [&_img]:border-border
                  [&_table]:border [&_table]:border-border [&_th]:bg-surface-3 [&_th]:p-2 [&_td]:p-2 [&_td]:border [&_td]:border-border"
                dangerouslySetInnerHTML={{ __html: form.conteudo }}
              />
            ) : (
              <div className="py-16 text-center text-muted-light">
                <FileText size={32} className="mx-auto mb-2" />
                <p>Nenhum conteúdo ainda. Volte ao editor para escrever.</p>
              </div>
            )}

            {/* Tags */}
            {form.tags && (
              <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-border">
                {form.tags.split(",").filter(Boolean).map((tag) => (
                  <span key={tag.trim()} className="px-2.5 py-1 rounded-full bg-surface-3 text-xs text-muted">#{tag.trim()}</span>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 text-center">
              <h3 className="font-bold text-foreground mb-2">Quer aprender na prática?</h3>
              <p className="text-sm text-muted-light mb-4">Explore nossos cursos com certificado, IA e conteúdo interativo.</p>
              <Button className="pointer-events-none">Ver cursos disponíveis <ChevronRight size={14} /></Button>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // ── EDITOR VIEW ────────────────────────────────────────────
  return (
    <div className="max-w-4xl">
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-5 bg-surface rounded-xl border border-border p-3">
        <div className="flex items-center gap-3">
          <Edit2 size={16} className="text-amber-400" />
          <span className="text-sm font-semibold text-foreground">{editingId ? "Editar Post" : "Novo Post"}</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setView("preview")} disabled={!form.titulo}>
            <Monitor size={13} /> Preview
          </Button>
          <Button size="sm" loading={loading}
            onClick={() => editingId ? handleUpdate() : handleCreate()}>
            <Save size={13} /> {editingId ? "Salvar" : "Publicar"}
          </Button>
          <Button variant="ghost" size="sm" onClick={() => { setView("list"); setEditingId(null); resetForm(); }}>
            <X size={13} /> Cancelar
          </Button>
        </div>
      </div>

      <div className="space-y-5">
        {/* Title + Slug */}
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-muted-light mb-1.5">Título *</label>
            <Input
              value={form.titulo}
              onChange={(e) => setForm((f) => ({
                ...f, titulo: e.target.value,
                ...(!editingId ? { slug: slugify(e.target.value) } : {}),
              }))}
              placeholder="Título do artigo"
              className="text-lg font-bold h-12"
              autoFocus
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-muted-light mb-1.5">Slug (URL)</label>
              <Input value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                placeholder="titulo-do-artigo" />
            </div>
            <div>
              <label className="block text-xs text-muted-light mb-1.5">Resumo (meta description)</label>
              <Input value={form.resumo} onChange={(e) => setForm((f) => ({ ...f, resumo: e.target.value }))}
                placeholder="Até 160 caracteres para SEO" maxLength={160} />
            </div>
          </div>
        </div>

        {/* Thumbnail */}
        <div>
          <label className="block text-xs text-muted-light mb-1.5">Thumbnail</label>
          {form.thumbnail_url ? (
            <div className="rounded-xl overflow-hidden border border-border h-40 relative">
              <img src={form.thumbnail_url} alt="" className="w-full h-full object-cover" />
              <button
                onClick={() => setForm((f) => ({ ...f, thumbnail_url: "" }))}
                className="absolute top-2 right-2 h-7 w-7 flex items-center justify-center rounded-full bg-black/50 text-foreground hover:bg-black/70"
              >
                <Trash2 size={12} />
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3">
              <FileUploader
                accept={{ "image/*": [".jpg", ".jpeg", ".png", ".webp"] }}
                bucket="course-thumbnails"
                folder="blog"
                label="Enviar thumbnail"
                hint="JPG, PNG, WEBP · 1200×630px"
                maxSizeMB={10}
                imagePreview
                onUpload={(url) => setForm((f) => ({ ...f, thumbnail_url: url }))}
              />
              <div>
                <Input value={form.thumbnail_url} onChange={(e) => setForm((f) => ({ ...f, thumbnail_url: e.target.value }))}
                  placeholder="Ou cole a URL da imagem" />
              </div>
            </div>
          )}
        </div>

        {/* Rich Text Editor */}
        <div>
          <label className="block text-xs text-muted-light mb-1.5">Conteúdo *</label>
          <RichTextEditor
            value={form.conteudo}
            onChange={(html) => setForm((f) => ({ ...f, conteudo: html }))}
            minHeight={400}
          />
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block text-xs text-muted-light mb-1.5">Categoria</label>
            <select value={form.categoria} onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value }))}
              className="w-full h-9 rounded-lg border border-border bg-surface px-2 text-sm text-foreground focus:outline-none focus:border-amber-500">
              {CATEGORIAS.map((c) => <option key={c} value={c}>{CAT_LABELS[c]}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs text-muted-light mb-1.5">Tempo leitura (min)</label>
            <Input type="number" value={form.tempo_leitura}
              onChange={(e) => setForm((f) => ({ ...f, tempo_leitura: Number(e.target.value) }))} />
          </div>
          <div>
            <label className="block text-xs text-muted-light mb-1.5">Tags (vírgula)</label>
            <Input value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))}
              placeholder="som, iluminação, dicas" />
          </div>
          <div className="flex items-end gap-4 pb-1">
            <label className="flex items-center gap-1.5 text-xs text-muted-light cursor-pointer">
              <input type="checkbox" checked={form.publicado}
                onChange={(e) => setForm((f) => ({ ...f, publicado: e.target.checked }))} className="accent-amber-500" />
              Publicado
            </label>
            <label className="flex items-center gap-1.5 text-xs text-muted-light cursor-pointer">
              <input type="checkbox" checked={form.destaque}
                onChange={(e) => setForm((f) => ({ ...f, destaque: e.target.checked }))} className="accent-amber-500" />
              Destaque
            </label>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <Button variant="ghost" size="sm" onClick={() => setView("preview")} disabled={!form.titulo}>
            <Monitor size={13} /> Preview como leitor
          </Button>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => { setView("list"); setEditingId(null); resetForm(); }}>
              Cancelar
            </Button>
            <Button size="sm" loading={loading}
              onClick={() => editingId ? handleUpdate() : handleCreate()}>
              <Save size={13} /> {editingId ? "Salvar alterações" : "Criar post"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
