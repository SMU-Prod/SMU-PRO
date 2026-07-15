"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createLive, updateLive } from "@/lib/actions/lives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { LiveEvent, LiveType, LivePortalDb } from "@/types/database";

export function LiveForm({ live }: { live?: LiveEvent }) {
  const router = useRouter();
  const [erro, setErro] = useState<string | null>(null);
  const [salvando, setSalvando] = useState(false);

  const [titulo, setTitulo] = useState(live?.titulo ?? "");
  const [slug, setSlug] = useState(live?.slug ?? "");
  const [descricao, setDescricao] = useState(live?.descricao ?? "");
  const [tipo, setTipo] = useState<LiveType>(live?.tipo ?? "palestra");
  const [portal, setPortal] = useState<LivePortalDb>(live?.portal ?? "main");
  const [youtubeId, setYoutubeId] = useState(live?.youtube_id ?? "");
  const [inicio, setInicio] = useState(
    live?.inicio_previsto ? new Date(live.inicio_previsto).toISOString().slice(0, 16) : "",
  );

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setSalvando(true);
    setErro(null);
    try {
      const payload = {
        titulo, slug, descricao, tipo, portal,
        acesso: "aberto" as const,
        provider: "youtube" as const,
        youtube_id: youtubeId,
        inicio_previsto: new Date(inicio).toISOString(),
      };
      if (live) await updateLive(live.id, payload);
      else await createLive(payload);
      router.push("/admin/lives");
      router.refresh();
    } catch (err: any) {
      setErro(err?.message ?? "Erro ao salvar.");
    } finally {
      setSalvando(false);
    }
  }

  return (
    <form onSubmit={salvar} className="space-y-4 max-w-xl">
      {erro && (
        <p className="rounded-lg bg-red-500/10 border border-red-500/30 px-3 py-2 text-sm text-red-500">{erro}</p>
      )}

      <label className="block">
        <span className="text-sm font-medium text-foreground">Título</span>
        <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} required className="mt-1" />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Slug (URL)</span>
        <Input value={slug} onChange={(e) => setSlug(e.target.value)} required className="mt-1" />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Descrição</span>
        <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} className="mt-1" />
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Tipo</span>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value as LiveType)}
          className="mt-1 w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm text-foreground"
        >
          <option value="aula">Aula</option>
          <option value="palestra">Palestra</option>
          <option value="podcast">Podcast</option>
        </select>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Escola</span>
        <select
          value={portal}
          onChange={(e) => setPortal(e.target.value as LivePortalDb)}
          className="mt-1 w-full rounded-lg bg-background border border-border px-3 py-2.5 text-sm text-foreground"
        >
          <option value="main">Backstage (eventos)</option>
          <option value="aula">Aula (técnico / renda em casa)</option>
          <option value="ambos">Ambas as escolas</option>
        </select>
        <span className="mt-1 block text-xs text-muted">
          &quot;Ambas&quot; só para palestra/podcast de topo de funil — aula de curso pertence a uma escola só.
        </span>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">ID do vídeo no YouTube</span>
        <Input
          value={youtubeId}
          onChange={(e) => setYoutubeId(e.target.value)}
          required
          placeholder="jfKfPfyJRdk"
          className="mt-1"
        />
        <span className="mt-1 block text-xs text-muted">
          Configure Ultra-Low Latency no YouTube Studio ANTES de iniciar — não muda depois, e não suporta 4K.
        </span>
      </label>

      <label className="block">
        <span className="text-sm font-medium text-foreground">Início previsto</span>
        <Input type="datetime-local" value={inicio} onChange={(e) => setInicio(e.target.value)} required className="mt-1" />
      </label>

      <Button type="submit" disabled={salvando}>{salvando ? "Salvando…" : "Salvar"}</Button>
    </form>
  );
}
