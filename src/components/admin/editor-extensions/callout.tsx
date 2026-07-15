import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export type CalloutVariant = "dica" | "atencao" | "importante" | "info";

export const CALLOUT_VARIANTS: { key: CalloutVariant; label: string }[] = [
  { key: "dica", label: "Dica" },
  { key: "atencao", label: "Atenção" },
  { key: "importante", label: "Importante" },
  { key: "info", label: "Info" },
];

function isVariant(v: string): v is CalloutVariant {
  return CALLOUT_VARIANTS.some((c) => c.key === v);
}

// ── NodeView (edição): caixa colorida (via CSS .smu-rich aside[data-callout]) + seletor de variante ──
function CalloutView({ node, updateAttributes }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const variant: string = node.attrs.variant || "dica";
  const label = CALLOUT_VARIANTS.find((c) => c.key === variant)?.label || "Dica";

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as globalThis.Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <NodeViewWrapper as="aside" data-callout={variant} className="smu-callout">
      <div className="smu-callout-picker relative" contentEditable={false} ref={ref}>
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => setOpen((o) => !o)}
          title="Tipo de destaque"
          className="flex items-center gap-1 h-6 px-1.5 rounded text-[11px] font-medium opacity-70 hover:opacity-100 transition-opacity"
        >
          {label}
          <ChevronDown size={10} />
        </button>
        {open && (
          <div className="absolute top-full right-0 mt-1 z-50 w-32 rounded-lg bg-surface border border-border shadow-xl py-1">
            {CALLOUT_VARIANTS.map((c) => (
              <button
                key={c.key}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => { updateAttributes({ variant: c.key }); setOpen(false); }}
                className={`w-full text-left px-3 py-1.5 text-xs transition-colors ${
                  variant === c.key ? "bg-amber-500/10 text-amber-400" : "text-muted-light hover:bg-surface-3 hover:text-foreground"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <NodeViewContent className="smu-callout-body smu-rich" />
    </NodeViewWrapper>
  );
}

// ── Node ──
export const Callout = Node.create({
  name: "callout",
  group: "block",
  content: "block+",
  defining: true,

  addAttributes() {
    return {
      variant: {
        default: "dica",
        parseHTML: (el) => {
          const v = el.getAttribute("data-callout") || "dica";
          return isVariant(v) ? v : "dica";
        },
        renderHTML: (attrs) => ({ "data-callout": attrs.variant || "dica" }),
      },
    };
  },

  parseHTML() {
    return [{ tag: "aside[data-callout]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["aside", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(CalloutView);
  },

  addCommands() {
    return {
      insertCallout:
        (variant: CalloutVariant = "dica") =>
        ({ commands }: any) =>
          commands.insertContent({
            type: this.name,
            attrs: { variant },
            content: [{ type: "paragraph" }],
          }),
    } as any;
  },
});
