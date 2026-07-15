"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/ui";
import {
  Plus, Upload, FolderUp, Trash2, Play, Pause, ArrowUp, ArrowDown,
  Save, X, Music, AlertTriangle, Info, Loader2, CheckCircle2, EyeOff, Eye,
} from "lucide-react";

/* ---------------------------------------------------------------- tipos */
type Stem = { n: string; c: string; f: string; p: number; h: boolean; a?: boolean };
type Base = {
  id?: string;
  label: string;
  folder: string;
  ordem: number;
  ativo: boolean;
  stems: Stem[];
  created_at?: string;
};

const STORAGE_PUBLIC =
  (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "") + "/storage/v1/object/public/media/";

/* Capacidade real de canais por console (para o texto informativo). */
const CONSOLES: { nome: string; ch: number }[] = [
  { nome: "DiGiCo Q338", ch: 96 }, { nome: "Soundcraft Vi", ch: 96 },
  { nome: "Yamaha DM7", ch: 120 }, { nome: "Yamaha CL5", ch: 72 },
  { nome: "Rivage PM", ch: 72 }, { nome: "Yamaha LS9", ch: 64 },
  { nome: "A&H SQ", ch: 48 }, { nome: "Yamaha M7CL", ch: 48 },
  { nome: "PreSonus SL", ch: 40 }, { nome: "Yamaha TF5", ch: 40 },
  { nome: "Behringer X32", ch: 32 }, { nome: "Soundcraft Ui24R", ch: 24 },
  { nome: "Soundcraft Signature", ch: 22 },
];
const MAX_CH = 96; // maior console suportado no DB / grid

const PALETTE = [
  "#e0483f", "#f97316", "#f4a02a", "#eab308", "#84cc16", "#3ad07a",
  "#14b8a6", "#39c0e6", "#3b82f6", "#6366f1", "#8b5cf6", "#a855f7",
  "#c084fc", "#d946ef", "#ec4899", "#f472b6", "#f43f5e", "#fb7185",
  "#94a3b8", "#22c55e", "#0ea5e9", "#818cf8", "#fb923c", "#fbbf24",
];

/* ------------------------------------------------------- helpers puros */
function slugify(s: string): string {
  return s
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function folderFromLabel(label: string): string {
  const s = slugify(label);
  return s ? `mix-${s}` : "";
}
/** Limpa o nome do canal a partir do arquivo. */
function cleanChannelName(filename: string): string {
  let s = filename.replace(/\.[^.]+$/, "");            // extensão
  s = s.replace(/[-_ ]?glued$/i, "");                   // -glued
  s = s.replace(/[-_ ]?(sem[_ ]?audio|semanaudio|saulo)[-_a-z0-9]*$/i, ""); // lixo do cliente
  s = s.replace(/^[\s\-_0-9]+/, "");                    // números/traços iniciais
  s = s.replace(/[-_ ]?\d+$/, "");                      // _1 / -01 no fim
  s = s.replace(/[-_]+$/, "");
  s = s.replace(/[_-]+/g, " ").trim();
  if (!s) s = filename.replace(/\.[^.]+$/, "");
  return s.replace(/\S+/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}
function guessHpf(nameOrFile: string): boolean {
  return !/kick|bumbo|bass|baixo|\bsub\b|sub_|_sub/i.test(nameOrFile);
}
const naturalSort = (a: string, b: string) =>
  a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });

const AUDIO_RE = /\.(mp3|wav|m4a|aiff?|flac|ogg)$/i;

/* upload de 1 arquivo com progresso (XHR — fetch não dá progresso de upload) */
function uploadOne(folder: string, file: File, onProgress: (r: number) => void): Promise<{ skipped?: boolean; uploaded?: boolean }> {
  return new Promise((resolve, reject) => {
    const fd = new FormData();
    fd.append("folder", folder);
    fd.append("file", file);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/api/admin/bases/upload");
    xhr.upload.onprogress = (e) => { if (e.lengthComputable) onProgress(e.loaded / e.total); };
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try { resolve(JSON.parse(xhr.responseText)); } catch { resolve({}); }
      } else {
        let msg = `HTTP ${xhr.status}`;
        try { msg = JSON.parse(xhr.responseText).error ?? msg; } catch {}
        reject(new Error(msg));
      }
    };
    xhr.onerror = () => reject(new Error("Falha de rede"));
    xhr.send(fd);
  });
}

/* percorre um DataTransferItem (arquivo ou pasta) recursivamente */
async function readEntries(items: DataTransferItemList): Promise<File[]> {
  const out: File[] = [];
  const walk = (entry: any): Promise<void> =>
    new Promise((res) => {
      if (!entry) return res();
      if (entry.isFile) {
        entry.file((f: File) => { out.push(f); res(); });
      } else if (entry.isDirectory) {
        const reader = entry.createReader();
        reader.readEntries(async (ents: any[]) => {
          for (const e of ents) await walk(e);
          res();
        });
      } else res();
    });
  const entries: any[] = [];
  for (let i = 0; i < items.length; i++) {
    const it = items[i];
    const entry = it.webkitGetAsEntry?.();
    if (entry) entries.push(entry);
    else { const f = it.getAsFile?.(); if (f) out.push(f); }
  }
  for (const e of entries) await walk(e);
  return out;
}

type UpState = { name: string; ratio: number; status: "pending" | "uploading" | "done" | "skipped" | "error"; msg?: string };

/* ================================================================ COMPONENTE */
export function BasesManager() {
  const t = useT();
  const [bases, setBases] = useState<Base[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Base | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [uploads, setUploads] = useState<UpState[]>([]);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playingFile, setPlayingFile] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dirInputRef = useRef<HTMLInputElement | null>(null);

  /* ---- carrega bases ---- */
  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await fetch("/api/admin/bases");
      const j = await r.json();
      if (!r.ok) throw new Error(j.error ?? "Erro ao carregar");
      setBases(j.bases ?? []);
    } catch (e: any) {
      setMsg({ kind: "err", text: e.message });
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.onended = () => setPlayingFile(null);
    return () => { audioRef.current?.pause(); };
  }, []);

  function flash(kind: "ok" | "err", text: string) {
    setMsg({ kind, text });
    setTimeout(() => setMsg(null), 4000);
  }

  /* ---- abre editor ---- */
  function newBase() {
    setIsNew(true);
    setEditing({ label: "", folder: "", ordem: bases.length, ativo: true, stems: [] });
    setUploads([]);
  }
  function editBase(b: Base) {
    setIsNew(false);
    setEditing(JSON.parse(JSON.stringify(b)));
    setUploads([]);
  }
  function closeEditor() {
    audioRef.current?.pause();
    setPlayingFile(null);
    setEditing(null);
    setUploads([]);
  }

  /* ---- preview de 1 canal ---- */
  function previewStem(st: Stem) {
    if (!editing || !audioRef.current) return;
    const a = audioRef.current;
    const url = STORAGE_PUBLIC + editing.folder + "/" + st.f;
    if (playingFile === st.f) { a.pause(); setPlayingFile(null); return; }
    a.pause();
    a.src = url;
    a.play().then(() => setPlayingFile(st.f)).catch(() => {
      setPlayingFile(null);
      flash("err", t("Não foi possível tocar") + ": " + st.f);
    });
  }

  /* ---- recebe arquivos e faz upload ---- */
  const handleFiles = useCallback(async (rawFiles: File[]) => {
    if (!editing) return;
    const files = rawFiles.filter((f) => AUDIO_RE.test(f.name)).sort((a, b) => naturalSort(a.name, b.name));
    if (!files.length) { flash("err", t("Nenhum arquivo de áudio válido (mp3/wav/m4a/aiff).")); return; }

    // Para base nova: a pasta vem do nome. Exige nome preenchido.
    let folder = editing.folder;
    if (isNew) {
      folder = editing.folder || folderFromLabel(editing.label);
      if (!folder) { flash("err", t("Dê um nome à base antes de enviar os arquivos.")); return; }
      setEditing((e) => (e ? { ...e, folder } : e));
    }

    setUploading(true);
    setUploads(files.map((f) => ({ name: f.name, ratio: 0, status: "pending" as const })));

    const okNames: string[] = [];
    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      setUploads((u) => u.map((x, idx) => idx === i ? { ...x, status: "uploading" } : x));
      try {
        const res = await uploadOne(folder, f, (r) =>
          setUploads((u) => u.map((x, idx) => idx === i ? { ...x, ratio: r } : x)));
        okNames.push(f.name);
        setUploads((u) => u.map((x, idx) => idx === i
          ? { ...x, ratio: 1, status: res.skipped ? "skipped" : "done" } : x));
      } catch (e: any) {
        setUploads((u) => u.map((x, idx) => idx === i ? { ...x, status: "error", msg: e.message } : x));
      }
    }
    setUploading(false);

    // auto-mapeia canais para arquivos ainda não presentes na base
    setEditing((e) => {
      if (!e) return e;
      const existing = new Set(e.stems.map((s) => s.f));
      const newStems = [...e.stems];
      okNames.filter((n) => !existing.has(n)).sort(naturalSort).forEach((fname) => {
        const nm = cleanChannelName(fname);
        newStems.push({
          n: nm, c: PALETTE[newStems.length % PALETTE.length],
          f: fname, p: 0, h: guessHpf(nm + " " + fname), a: true,
        });
      });
      return { ...e, folder, stems: newStems };
    });
    flash("ok", t("Upload concluído."));
  }, [editing, isNew, t]);

  function onDrop(ev: React.DragEvent) {
    ev.preventDefault(); setDragOver(false);
    if (ev.dataTransfer.items?.length) {
      readEntries(ev.dataTransfer.items).then((fs) => handleFiles(fs));
    } else if (ev.dataTransfer.files?.length) {
      handleFiles(Array.from(ev.dataTransfer.files));
    }
  }

  /* ---- edição da grade ---- */
  function updStem(i: number, patch: Partial<Stem>) {
    setEditing((e) => e ? { ...e, stems: e.stems.map((s, idx) => idx === i ? { ...s, ...patch } : s) } : e);
  }
  function move(i: number, dir: -1 | 1) {
    setEditing((e) => {
      if (!e) return e;
      const j = i + dir;
      if (j < 0 || j >= e.stems.length) return e;
      const arr = [...e.stems];
      [arr[i], arr[j]] = [arr[j], arr[i]];
      return { ...e, stems: arr };
    });
  }
  function removeStem(i: number) {
    setEditing((e) => e ? { ...e, stems: e.stems.filter((_, idx) => idx !== i) } : e);
  }

  /* ---- salvar ---- */
  async function save() {
    if (!editing) return;
    const label = editing.label.trim();
    if (!label) { flash("err", t("Informe o nome da base.")); return; }
    const folder = editing.folder || folderFromLabel(label);
    if (!folder) { flash("err", t("Pasta inválida.")); return; }
    if (!editing.stems.length) { flash("err", t("A base precisa de pelo menos um canal.")); return; }

    setSaving(true);
    try {
      const payload = { label, folder, ordem: editing.ordem, ativo: editing.ativo, stems: editing.stems };
      let r: Response;
      if (isNew || !editing.id) {
        r = await fetch("/api/admin/bases", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      } else {
        r = await fetch(`/api/admin/bases/${editing.id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      }
      const j = await r.json();
      if (!r.ok) throw new Error(j.error ?? "Erro ao salvar");
      flash("ok", t("Base salva. Aparece nos simuladores no próximo carregamento."));
      closeEditor();
      load();
    } catch (e: any) {
      flash("err", e.message);
    } finally { setSaving(false); }
  }

  /* ---- excluir ---- */
  async function del(b: Base) {
    if (!b.id) return;
    const alsoStorage = window.confirm(
      t("Excluir a base") + ' "' + b.label + '"?\n\n' +
      t("OK = apaga também os arquivos de áudio da pasta") + " media/" + b.folder + "/.\n" +
      t("Cancelar = mantém os arquivos no Storage (só remove do seletor)."));
    // segunda confirmação para não apagar sem querer
    if (!window.confirm(t("Confirmar exclusão da base") + ' "' + b.label + '"?')) return;
    try {
      const r = await fetch(`/api/admin/bases/${b.id}${alsoStorage ? "?storage=1" : ""}`, { method: "DELETE" });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error ?? "Erro ao excluir");
      flash("ok", alsoStorage
        ? t("Base e arquivos removidos.") + " (" + (j.removedFiles ?? 0) + ")"
        : t("Base removida (arquivos mantidos no Storage)."));
      load();
    } catch (e: any) { flash("err", e.message); }
  }

  /* =============================================================== render */
  return (
    <div className="p-4 sm:p-6 space-y-5">
      {/* mensagem flash */}
      {msg && (
        <div className={`rounded-lg px-4 py-2 text-sm border ${msg.kind === "ok"
          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
          : "bg-red-500/10 border-red-500/30 text-red-300"}`}>
          {msg.text}
        </div>
      )}

      {/* nota prática */}
      <div className="rounded-lg border border-amber-500/20 bg-amber-500/5 p-3 text-xs text-muted-light flex gap-2">
        <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p>{t("Cada base aparece no seletor de músicas de TODOS os simuladores de mesa. A ordem dos canais = o número do canal (canal 1 = primeiro).")}</p>
          <p>{t("Cada mesa abre até a capacidade real dela; se a base tiver mais canais, o console usa os primeiros e ignora o resto (nada é cortado da base).")} <span className="text-muted">{CONSOLES.slice(0, 6).map((c) => `${c.nome} ${c.ch}`).join(" · ")}…</span></p>
        </div>
      </div>

      {!editing && (
        <>
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">{t("Bases cadastradas")} ({bases.length})</h2>
            <Button onClick={newBase} size="sm"><Plus size={15} className="mr-1" />{t("Nova base")}</Button>
          </div>

          {loading ? (
            <div className="flex items-center gap-2 text-muted text-sm"><Loader2 size={16} className="animate-spin" />{t("Carregando…")}</div>
          ) : bases.length === 0 ? (
            <div className="text-muted text-sm">{t("Nenhuma base ainda. Clique em \"Nova base\".")}</div>
          ) : (
            <div className="grid gap-2">
              {bases.map((b) => (
                <div key={b.id} className="flex items-center gap-3 rounded-lg border border-border bg-card px-3 py-2">
                  <Music size={16} className={b.ativo ? "text-amber-400" : "text-muted"} />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-foreground truncate">{b.label} {!b.ativo && <span className="text-xs text-muted">({t("inativa")})</span>}</div>
                    <div className="text-xs text-muted truncate">{b.folder} · {b.stems.length} {t("canais")} · {t("ordem")} {b.ordem}</div>
                  </div>
                  <Button variant="outline" size="sm" onClick={() => editBase(b)}>{t("Editar")}</Button>
                  <Button variant="ghost" size="sm" onClick={() => del(b)} className="text-red-400 hover:text-red-300"><Trash2 size={15} /></Button>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {editing && (
        <div className="space-y-4">
          {/* cabeçalho do editor */}
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">{isNew ? t("Nova base") : t("Editar base")}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={closeEditor}><X size={15} className="mr-1" />{t("Cancelar")}</Button>
              <Button size="sm" onClick={save} disabled={saving || uploading}>
                {saving ? <Loader2 size={15} className="mr-1 animate-spin" /> : <Save size={15} className="mr-1" />}{t("Salvar")}
              </Button>
            </div>
          </div>

          {/* metadados */}
          <div className="grid sm:grid-cols-2 gap-3">
            <label className="text-xs text-muted-light space-y-1">
              <span>{t("Nome da base")}</span>
              <input className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                value={editing.label}
                onChange={(e) => setEditing((s) => s ? { ...s, label: e.target.value, folder: isNew ? folderFromLabel(e.target.value) : s.folder } : s)}
                placeholder={t("Ex.: Queen — Bohemian Rhapsody")} />
            </label>
            <label className="text-xs text-muted-light space-y-1">
              <span>{t("Pasta (Storage)")} {!isNew && <span className="text-muted">· {t("imutável")}</span>}</span>
              <input className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground disabled:opacity-60"
                value={editing.folder} disabled={!isNew}
                onChange={(e) => setEditing((s) => s ? { ...s, folder: slugify(e.target.value).replace(/^mix-?/, "").length ? "mix-" + slugify(e.target.value).replace(/^mix-/, "") : e.target.value } : s)}
                placeholder="mix-queen-bohemian-rhapsody" />
            </label>
            <label className="text-xs text-muted-light space-y-1">
              <span>{t("Ordem no seletor")}</span>
              <input type="number" className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground"
                value={editing.ordem}
                onChange={(e) => setEditing((s) => s ? { ...s, ordem: parseInt(e.target.value) || 0 } : s)} />
            </label>
            <label className="flex items-center gap-2 text-xs text-muted-light mt-5">
              <input type="checkbox" checked={editing.ativo}
                onChange={(e) => setEditing((s) => s ? { ...s, ativo: e.target.checked } : s)} />
              <span>{t("Ativa (visível nos simuladores)")}</span>
            </label>
          </div>

          {/* dropzone */}
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            className={`rounded-xl border-2 border-dashed p-6 text-center transition ${dragOver ? "border-amber-400 bg-amber-500/10" : "border-border bg-card"}`}
          >
            <Upload size={22} className="mx-auto text-muted mb-2" />
            <p className="text-sm text-foreground">{t("Arraste a pasta ou os arquivos de áudio aqui")}</p>
            <p className="text-xs text-muted mt-1">{t("mp3, wav, m4a, aiff — vários de uma vez. Arquivos já enviados são pulados.")}</p>
            <div className="flex gap-2 justify-center mt-3">
              <Button variant="outline" size="sm" type="button" onClick={() => fileInputRef.current?.click()}>
                <Upload size={14} className="mr-1" />{t("Selecionar arquivos")}
              </Button>
              <Button variant="outline" size="sm" type="button" onClick={() => dirInputRef.current?.click()}>
                <FolderUp size={14} className="mr-1" />{t("Selecionar pasta")}
              </Button>
            </div>
            <input ref={fileInputRef} type="file" multiple accept=".mp3,.wav,.m4a,.aiff,.aif,.flac,.ogg,audio/*" className="hidden"
              onChange={(e) => { if (e.target.files) handleFiles(Array.from(e.target.files)); e.target.value = ""; }} />
            {/* @ts-expect-error webkitdirectory não está nos tipos do React */}
            <input ref={dirInputRef} type="file" webkitdirectory="" directory="" multiple className="hidden"
              onChange={(e) => { if (e.target.files) handleFiles(Array.from(e.target.files)); e.target.value = ""; }} />
          </div>

          {/* progresso de upload */}
          {uploads.length > 0 && (
            <div className="rounded-lg border border-border bg-card p-3 space-y-1 max-h-48 overflow-y-auto">
              {uploads.map((u, i) => (
                <div key={i} className="flex items-center gap-2 text-xs">
                  <span className="w-5 shrink-0">
                    {u.status === "done" && <CheckCircle2 size={13} className="text-emerald-400" />}
                    {u.status === "skipped" && <CheckCircle2 size={13} className="text-muted" />}
                    {u.status === "uploading" && <Loader2 size={13} className="animate-spin text-amber-400" />}
                    {u.status === "error" && <AlertTriangle size={13} className="text-red-400" />}
                  </span>
                  <span className="flex-1 truncate text-muted-light">{u.name}</span>
                  <div className="w-24 h-1.5 rounded bg-border overflow-hidden">
                    <div className="h-full bg-amber-400" style={{ width: `${Math.round(u.ratio * 100)}%` }} />
                  </div>
                  <span className="w-16 text-right text-muted">
                    {u.status === "skipped" ? t("já existe") : u.status === "error" ? (u.msg ?? "erro") : `${Math.round(u.ratio * 100)}%`}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* painel informativo de capacidade */}
          {editing.stems.length > 0 && (
            <div className="rounded-lg border border-sky-500/20 bg-sky-500/5 p-3 text-xs text-muted-light flex gap-2">
              <Info size={15} className="text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p>{t("Esta base tem")} <b className="text-foreground">{editing.stems.filter((s) => s.a !== false).length}</b> {t("canais ativos")}
                  {editing.stems.some((s) => s.a === false) && <> ({editing.stems.length} {t("no total")})</>}.
                  {" "}{t("Cada mesa abre até a capacidade dela:")}</p>
                <p className="text-muted mt-1">{CONSOLES.map((c) => `${c.nome} ${c.ch}`).join(" · ")}</p>
                {editing.stems.filter((s) => s.a !== false).length > MAX_CH && (
                  <p className="text-amber-300 mt-1">{t("Acima de")} {MAX_CH} {t("canais: as mesas usam no máximo a capacidade delas; o excedente fica guardado na base.")}</p>
                )}
              </div>
            </div>
          )}

          {/* grade de canais */}
          {editing.stems.length > 0 && (
            <div className="rounded-lg border border-border overflow-hidden">
              <div className="grid grid-cols-[2.2rem_1.6rem_1fr_2.4rem_4rem_2.6rem_2rem_2rem] sm:grid-cols-[2.5rem_2rem_1fr_3rem_5rem_3rem_2.5rem_2.5rem] gap-1 px-2 py-1.5 bg-card text-[10px] uppercase tracking-wide text-muted border-b border-border">
                <span>{t("Canal")}</span><span></span><span>{t("Nome")}</span><span>{t("Cor")}</span><span>{t("Pan")}</span><span>HPF</span><span></span><span></span>
              </div>
              <div className="max-h-[28rem] overflow-y-auto divide-y divide-border">
                {editing.stems.map((s, i) => {
                  const active = s.a !== false;
                  return (
                    <div key={i} className={`grid grid-cols-[2.2rem_1.6rem_1fr_2.4rem_4rem_2.6rem_2rem_2rem] sm:grid-cols-[2.5rem_2rem_1fr_3rem_5rem_3rem_2.5rem_2.5rem] gap-1 items-center px-2 py-1 text-xs ${active ? "" : "opacity-45"}`}>
                      <span className="text-muted tabular-nums">{i + 1}</span>
                      <button type="button" onClick={() => previewStem(s)} title={t("Ouvir")} className="text-amber-400 hover:text-amber-300">
                        {playingFile === s.f ? <Pause size={14} /> : <Play size={14} />}
                      </button>
                      <input className="w-full rounded bg-background border border-border px-2 py-1 text-foreground"
                        value={s.n} onChange={(e) => updStem(i, { n: e.target.value })} />
                      <input type="color" className="w-8 h-7 rounded bg-transparent border border-border cursor-pointer"
                        value={s.c} onChange={(e) => updStem(i, { c: e.target.value })} />
                      <input type="number" min={-30} max={30} className="w-full rounded bg-background border border-border px-1 py-1 text-foreground"
                        value={s.p} onChange={(e) => updStem(i, { p: Math.max(-30, Math.min(30, parseInt(e.target.value) || 0)) })} />
                      <button type="button" onClick={() => updStem(i, { h: !s.h })}
                        className={`rounded px-1 py-1 border text-[10px] ${s.h ? "border-amber-500/40 bg-amber-500/15 text-amber-300" : "border-border text-muted"}`}>
                        {s.h ? "ON" : "OFF"}
                      </button>
                      <div className="flex flex-col">
                        <button type="button" onClick={() => move(i, -1)} className="text-muted hover:text-foreground leading-none"><ArrowUp size={12} /></button>
                        <button type="button" onClick={() => move(i, 1)} className="text-muted hover:text-foreground leading-none"><ArrowDown size={12} /></button>
                      </div>
                      <div className="flex gap-0.5">
                        <button type="button" onClick={() => updStem(i, { a: !active })} title={active ? t("Desativar canal") : t("Ativar canal")} className="text-muted hover:text-foreground">
                          {active ? <Eye size={13} /> : <EyeOff size={13} />}
                        </button>
                        <button type="button" onClick={() => removeStem(i)} title={t("Remover")} className="text-red-400 hover:text-red-300"><Trash2 size={13} /></button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <p className="text-[11px] text-muted">{t("O nome do arquivo vira o nome do canal automaticamente — ajuste se precisar. Use o play para identificar cada faixa antes de nomear.")}</p>
        </div>
      )}
    </div>
  );
}
