"use client";

interface ShareButtonProps {
  url: string;
  title: string;
}

export function ShareButton({ url, title }: ShareButtonProps) {
  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
    window.open(linkedInUrl, "_blank", "width=550,height=680");
  };

  return (
    <div className="inline-flex items-center gap-2">
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
      <button
        onClick={handleLinkedInShare}
        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-foreground hover:border-blue-600/40 hover:bg-blue-50 transition-colors"
        aria-label="Compartilhar no LinkedIn"
        title="Compartilhar no LinkedIn"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: "#0A66C2" }}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
        LinkedIn
      </button>
    </div>
  );
}
