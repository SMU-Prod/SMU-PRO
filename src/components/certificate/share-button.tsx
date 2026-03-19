"use client";

interface ShareButtonProps {
  url: string;
  title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
  return (
    <button
      onClick={() => {
        if (navigator.share) {
          navigator.share({ url, title });
        } else {
          navigator.clipboard.writeText(url);
          alert("Link copiado!");
        }
      }}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-amber-500/40 transition-colors"
    >
      Compartilhar
    </button>
  );
}
