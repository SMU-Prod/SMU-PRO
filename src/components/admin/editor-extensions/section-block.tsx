import { Node, mergeAttributes } from "@tiptap/core";
import { ReactNodeViewRenderer, NodeViewWrapper, NodeViewContent } from "@tiptap/react";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import {
  SECTION_ICON_OPTIONS, getIconForKey, getIconKeyForTitle,
} from "@/lib/section-icons";

// ── NodeView (edição): mostra o card com seletor de ícone + input de título + corpo editável ──
function SectionBlockView({ node, updateAttributes }: any) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const title: string = node.attrs.title || "";
  const iconKey: string = node.attrs.icon || "arrow";
  const Icon = getIconForKey(iconKey);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (pickerRef.current && !pickerRef.current.contains(e.target as globalThis.Node)) setPickerOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <NodeViewWrapper className="smu-section rounded-lg bg-surface-2 border border-border p-3.5 my-2">
      <div className="flex items-center gap-2 mb-2" contentEditable={false}>
        {/* Seletor de ícone */}
        <div className="relative" ref={pickerRef}>
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => setPickerOpen((o) => !o)}
            title="Ícone da seção"
            className="flex items-center gap-1 h-7 px-1.5 rounded text-smu-amber hover:bg-surface-3 transition-colors"
          >
            <Icon size={15} />
            <ChevronDown size={10} />
          </button>
          {pickerOpen && (
            <div className="absolute top-full left-0 mt-1 z-50 w-52 max-h-64 overflow-y-auto rounded-lg bg-surface border border-border shadow-xl py-1">
              {SECTION_ICON_OPTIONS.map((opt) => {
                const OptIcon = getIconForKey(opt.key);
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => { updateAttributes({ icon: opt.key }); setPickerOpen(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center gap-2 transition-colors ${
                      iconKey === opt.key ? "bg-amber-500/10 text-amber-400" : "text-muted-light hover:bg-surface-3 hover:text-foreground"
                    }`}
                  >
                    <OptIcon size={13} className="shrink-0" />
                    <span>{opt.label}</span>
                  </button>
                );
              })}
            </div>
          )}
        </div>
        {/* Título da seção */}
        <input
          value={title}
          onChange={(e) => {
            const t = e.target.value;
            // se o ícone ainda é o default, sugere um pelo título
            const patch: any = { title: t };
            if (!node.attrs.icon || node.attrs.icon === "arrow") patch.icon = getIconKeyForTitle(t);
            updateAttributes(patch);
          }}
          placeholder="Título da seção"
          className="flex-1 bg-transparent text-[13px] font-semibold text-foreground placeholder:text-muted-light/60 focus:outline-none"
        />
      </div>
      {/* Corpo editável da seção */}
      <NodeViewContent className="smu-rich pl-[22px] text-[13px] text-muted" />
    </NodeViewWrapper>
  );
}

// ── Node ──
export const SectionBlock = Node.create({
  name: "sectionBlock",
  group: "block",
  content: "block+",
  defining: true,
  isolating: true,

  addAttributes() {
    return {
      title: {
        default: "",
        parseHTML: (el) => el.getAttribute("data-title") || "",
        renderHTML: () => ({}), // título vai como data-title (abaixo) e como <h3>, não como atributo solto
      },
      icon: {
        default: "arrow",
        parseHTML: (el) => el.getAttribute("data-icon") || "arrow",
        renderHTML: (attrs) => ({ "data-icon": attrs.icon || "arrow" }),
      },
    };
  },

  parseHTML() {
    // contentElement: só o corpo vira conteúdo editável — o <h3> do título é ignorado no parse
    return [{ tag: "section[data-section]", contentElement: "[data-section-body]" }];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "section",
      mergeAttributes(HTMLAttributes, { "data-section": "", "data-title": node.attrs.title || "" }),
      ["h3", { "data-section-title": "" }, node.attrs.title || ""],
      ["div", { "data-section-body": "" }, 0],
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(SectionBlockView);
  },

  addCommands() {
    return {
      insertSection:
        () =>
        ({ commands }: any) =>
          commands.insertContent({
            type: this.name,
            attrs: { title: "", icon: "arrow" },
            content: [{ type: "paragraph" }],
          }),
    } as any;
  },
});
