"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { adminUploadFile } from "@/lib/actions/courses";
import { cn } from "@/lib/utils";
import {
  Upload, X, FileText, ImageIcon, Loader2, CheckCircle2, AlertCircle,
} from "lucide-react";

interface FileUploaderProps {
  onUpload: (url: string, path: string) => void;
  onRemove?: () => void;
  accept?: Record<string, string[]>;
  maxSizeMB?: number;
  bucket?: string;
  folder?: string;
  label?: string;
  hint?: string;
  currentUrl?: string;
  currentPath?: string;
  className?: string;
  /** Se true, mostra preview da imagem */
  imagePreview?: boolean;
}

export function FileUploader({
  onUpload,
  onRemove,
  accept = { "application/pdf": [".pdf"] },
  maxSizeMB = 50,
  bucket = "course-materials",
  folder = "uploads",
  label = "Clique ou arraste um arquivo aqui",
  hint,
  currentUrl,
  currentPath,
  className,
  imagePreview = false,
}: FileUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploaded, setUploaded] = useState(!!currentUrl);
  const [localUrl, setLocalUrl] = useState(currentUrl ?? "");

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) return;

      setError(null);
      setUploading(true);

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("bucket", bucket);
        formData.append("folder", folder);

        const { url, path } = await adminUploadFile(formData);
        setLocalUrl(url);
        setUploaded(true);
        onUpload(url, path);
      } catch (e: any) {
        setError(e.message ?? "Erro ao fazer upload");
      } finally {
        setUploading(false);
      }
    },
    [bucket, folder, onUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxSize: maxSizeMB * 1024 * 1024,
    multiple: false,
    disabled: uploading,
    onDropRejected: (files) => {
      const err = files[0]?.errors[0];
      if (err?.code === "file-too-large") setError(`Arquivo muito grande (máx. ${maxSizeMB}MB)`);
      else if (err?.code === "file-invalid-type") setError("Tipo de arquivo não permitido");
      else setError("Arquivo inválido");
    },
  });

  const isPdf = Object.keys(accept).some((k) => k.includes("pdf"));
  const isImage = Object.keys(accept).some((k) => k.includes("image"));
  const Icon = isPdf ? FileText : ImageIcon;

  const handleRemove = () => {
    setLocalUrl("");
    setUploaded(false);
    setError(null);
    onRemove?.();
  };

  // ── Uploaded state ──────────────────────────────────────────

  if (uploaded && localUrl) {
    return (
      <div className={cn("rounded-xl border border-border overflow-hidden", className)}>
        {imagePreview && isImage ? (
          <div className="relative">
            <img
              src={localUrl}
              alt="Preview"
              className="w-full h-36 object-cover"
              onError={(e) => (e.currentTarget.src = "")}
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-foreground hover:bg-black/70 transition-colors"
            >
              <X size={13} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-3 px-4 py-3 bg-emerald-50">
            <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground truncate font-medium">Arquivo enviado</p>
              <a
                href={localUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-amber-400 hover:underline truncate block"
              >
                {localUrl.split("/").pop()}
              </a>
            </div>
            <button
              onClick={handleRemove}
              className="text-muted-light hover:text-muted transition-colors shrink-0"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── Upload dropzone ─────────────────────────────────────────

  return (
    <div className={cn("space-y-1.5", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "relative rounded-xl border-2 border-dashed px-4 py-5 text-center cursor-pointer transition-all",
          isDragActive
            ? "border-amber-500 bg-amber-500/10"
            : uploading
            ? "border-border bg-surface-2 cursor-not-allowed"
            : "border-border bg-surface hover:border-amber-500/30 hover:bg-amber-500/10/30"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center gap-2">
          {uploading ? (
            <Loader2 size={24} className="text-amber-400 animate-spin" />
          ) : (
            <div className={cn(
              "h-10 w-10 rounded-xl flex items-center justify-center",
              isDragActive ? "bg-amber-500 text-white" : "bg-surface-3 text-muted-light"
            )}>
              {isDragActive ? <Upload size={18} /> : <Icon size={18} />}
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-muted">
              {uploading ? "Enviando..." : isDragActive ? "Solte aqui" : label}
            </p>
            {!uploading && (
              <p className="text-xs text-muted-light mt-0.5">
                {hint ?? `Máx. ${maxSizeMB}MB · ${Object.values(accept).flat().join(", ")}`}
              </p>
            )}
          </div>
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle size={12} className="shrink-0" />
          {error}
        </div>
      )}
    </div>
  );
}
