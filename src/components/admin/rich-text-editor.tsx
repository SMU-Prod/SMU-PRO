"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import Image from "@tiptap/extension-image";
import Highlight from "@tiptap/extension-highlight";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Typography from "@tiptap/extension-typography";
import { cn } from "@/lib/utils";
import {
  Bold, Italic, UnderlineIcon, Strikethrough, Link2, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Heading1, Heading2, Heading3, Quote, Minus,
  Undo2, Redo2, Link2Off, ImagePlus, Palette, Highlighter,
  SuperscriptIcon, SubscriptIcon, Table as TableIcon, Code2,
  RemoveFormatting, IndentIncrease, IndentDecrease,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const TEXT_COLORS = [
  { label: "Padrão", value: "" },
  { label: "Amber", value: "#F59E0B" },
  { label: "Vermelho", value: "#EF4444" },
  { label: "Verde", value: "#22C55E" },
  { label: "Azul", value: "#3B82F6" },
  { label: "Roxo", value: "#8B5CF6" },
  { label: "Rosa", value: "#EC4899" },
  { label: "Cinza", value: "#6B7280" },
];

const HIGHLIGHT_COLORS = [
  { label: "Amarelo", value: "#FEF08A" },
  { label: "Verde", value: "#BBF7D0" },
  { label: "Azul", value: "#BFDBFE" },
  { label: "Rosa", value: "#FBCFE8" },
  { label: "Roxo", value: "#DDD6FE" },
];

interface RichTextEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: number;
}

// Custom Tab indent extension
const TabIndent = {
  name: "tabIndent",
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        const { editor } = this as any;
        if (editor.isActive("listItem")) {
          return editor.chain().sinkListItem("listItem").run();
        }
        // Insert 4 spaces as tab
        return editor.chain().insertContent("\u00A0\u00A0\u00A0\u00A0").run();
      },
      "Shift-Tab": () => {
        const { editor } = this as any;
        if (editor.isActive("listItem")) {
          return editor.chain().liftListItem("listItem").run();
        }
        return false;
      },
    };
  },
};

export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Escreva o conteúdo da aula aqui...",
  className,
  minHeight = 240,
}: RichTextEditorProps) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const colorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
        codeBlock: { HTMLAttributes: { class: "rounded-lg bg-surface-2 p-4 font-mono text-sm border border-border" } },
        link: false,
        underline: false,
      }),
      Placeholder.configure({ placeholder }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-amber-400 underline cursor-pointer" },
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
      Image.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: { class: "rounded-lg max-w-full mx-auto" },
      }),
      Superscript,
      Subscript,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      Typography,
      // Tab indent as inline extension
      {
        ...TabIndent,
        addKeyboardShortcuts: TabIndent.addKeyboardShortcuts,
      } as any,
    ],
    immediatelyRender: false,
    content: value,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm max-w-none focus:outline-none px-4 py-3",
          "prose-headings:text-foreground prose-p:text-muted prose-strong:text-foreground",
          "prose-a:text-amber-400 prose-blockquote:border-l-amber-500 prose-blockquote:text-muted",
          "prose-img:rounded-lg prose-img:mx-auto",
          "prose-table:border-collapse prose-td:border prose-td:border-border prose-td:p-2",
          "prose-th:border prose-th:border-border prose-th:p-2 prose-th:bg-surface-2 prose-th:font-semibold",
          "prose-code:text-amber-400 prose-code:bg-surface-2 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-xs",
        ),
      },
      // Handle paste with formatting from Word/Google Docs
      handlePaste(view, event) {
        const html = event.clipboardData?.getData("text/html");
        if (html) {
          // Let TipTap handle the HTML paste (preserves formatting)
          return false;
        }
        return false;
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  // Sync content when value changes externally
  useEffect(() => {
    if (editor && value !== undefined && !editor.isFocused) {
      if (value !== editor.getHTML()) {
        editor.commands.setContent(value || "", { emitUpdate: false });
      }
    }
  }, [value, editor]);

  // Close pickers on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (colorRef.current && !colorRef.current.contains(e.target as Node)) setShowColorPicker(false);
      if (highlightRef.current && !highlightRef.current.contains(e.target as Node)) setShowHighlightPicker(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href ?? "";
    const url = window.prompt("URL do link:", prev);
    if (url === null) return;
    if (url === "") { editor.chain().focus().extendMarkRange("link").unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;
    const url = window.prompt("URL da imagem:");
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const addImageFile = useCallback(() => {
    if (!editor) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      // Convert to base64 for inline embedding
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          editor.chain().focus().setImage({ src: reader.result }).run();
        }
      };
      reader.readAsDataURL(file);
    };
    input.click();
  }, [editor]);

  const insertTable = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={cn("rounded-xl border border-border bg-surface overflow-hidden", className)}>
      {/* Toolbar Row 1 — Text formatting */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-border/50 bg-surface-2 px-2 py-1.5">
        {/* Text style */}
        <ToolGroup>
          <ToolBtn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} title="Negrito (Ctrl+B)"><Bold size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} title="Itálico (Ctrl+I)"><Italic size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Sublinhado (Ctrl+U)"><UnderlineIcon size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()} title="Riscado"><Strikethrough size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("superscript")} onClick={() => editor.chain().focus().toggleSuperscript().run()} title="Sobrescrito"><SuperscriptIcon size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("subscript")} onClick={() => editor.chain().focus().toggleSubscript().run()} title="Subscrito"><SubscriptIcon size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        {/* Color */}
        <ToolGroup>
          <div className="relative" ref={colorRef}>
            <ToolBtn
              active={showColorPicker}
              onClick={() => { setShowColorPicker(!showColorPicker); setShowHighlightPicker(false); }}
              title="Cor do texto"
            >
              <Palette size={13} />
            </ToolBtn>
            {showColorPicker && (
              <div className="absolute top-full left-0 mt-1 z-50 p-2 rounded-lg bg-surface border border-border shadow-xl flex gap-1.5">
                {TEXT_COLORS.map((c) => (
                  <button
                    key={c.value || "default"}
                    onClick={() => {
                      if (c.value) editor.chain().focus().setColor(c.value).run();
                      else editor.chain().focus().unsetColor().run();
                      setShowColorPicker(false);
                    }}
                    title={c.label}
                    className="h-6 w-6 rounded-full border border-border hover:scale-110 transition-transform"
                    style={{ backgroundColor: c.value || "var(--text-primary)" }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="relative" ref={highlightRef}>
            <ToolBtn
              active={showHighlightPicker}
              onClick={() => { setShowHighlightPicker(!showHighlightPicker); setShowColorPicker(false); }}
              title="Destaque"
            >
              <Highlighter size={13} />
            </ToolBtn>
            {showHighlightPicker && (
              <div className="absolute top-full left-0 mt-1 z-50 p-2 rounded-lg bg-surface border border-border shadow-xl flex gap-1.5">
                {HIGHLIGHT_COLORS.map((c) => (
                  <button
                    key={c.value}
                    onClick={() => {
                      editor.chain().focus().toggleHighlight({ color: c.value }).run();
                      setShowHighlightPicker(false);
                    }}
                    title={c.label}
                    className="h-6 w-6 rounded-full border border-border hover:scale-110 transition-transform"
                    style={{ backgroundColor: c.value }}
                  />
                ))}
                <button
                  onClick={() => { editor.chain().focus().unsetHighlight().run(); setShowHighlightPicker(false); }}
                  title="Remover destaque"
                  className="h-6 w-6 rounded-full border border-border hover:scale-110 transition-transform bg-surface text-muted-light text-[10px] font-bold flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
            )}
          </div>
        </ToolGroup>

        <Sep />

        {/* Headings */}
        <ToolGroup>
          <ToolBtn active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title="Título H1"><Heading1 size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Título H2"><Heading2 size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Título H3"><Heading3 size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        {/* Alignment */}
        <ToolGroup>
          <ToolBtn active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Alinhar esquerda"><AlignLeft size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Centralizar"><AlignCenter size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} title="Alinhar direita"><AlignRight size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()} title="Justificar"><AlignJustify size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        {/* Lists & blocks */}
        <ToolGroup>
          <ToolBtn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Lista com marcadores"><List size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Lista numerada"><ListOrdered size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => { if (editor.isActive("listItem")) editor.chain().focus().sinkListItem("listItem").run(); }} title="Aumentar recuo (Tab)"><IndentIncrease size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => { if (editor.isActive("listItem")) editor.chain().focus().liftListItem("listItem").run(); }} title="Diminuir recuo (Shift+Tab)"><IndentDecrease size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        {/* Block elements */}
        <ToolGroup>
          <ToolBtn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Citação"><Quote size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()} title="Bloco de código"><Code2 size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Linha divisória"><Minus size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        {/* Insert */}
        <ToolGroup>
          <ToolBtn active={editor.isActive("link")} onClick={setLink} title="Inserir link (Ctrl+K)"><Link2 size={13} /></ToolBtn>
          {editor.isActive("link") && (
            <ToolBtn active={false} onClick={() => editor.chain().focus().unsetLink().run()} title="Remover link"><Link2Off size={13} /></ToolBtn>
          )}
          <ToolBtn active={false} onClick={addImageFile} title="Inserir imagem (upload)"><ImagePlus size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={insertTable} title="Inserir tabela 3x3"><TableIcon size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        {/* Actions */}
        <ToolGroup>
          <ToolBtn active={false} onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} title="Limpar formatação"><RemoveFormatting size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Desfazer (Ctrl+Z)"><Undo2 size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Refazer (Ctrl+Y)"><Redo2 size={13} /></ToolBtn>
        </ToolGroup>
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} style={{ minHeight }} />

      {/* Table controls — show when cursor is inside a table */}
      {editor.isActive("table") && (
        <div className="flex flex-wrap items-center gap-1 border-t border-border/50 bg-surface-2 px-3 py-1.5 text-xs text-muted-light">
          <span className="font-medium text-foreground mr-2">Tabela:</span>
          <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">+ Coluna antes</button>
          <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">+ Coluna depois</button>
          <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">+ Linha antes</button>
          <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">+ Linha depois</button>
          <Sep />
          <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()} className="px-2 py-0.5 rounded text-red-400 hover:bg-red-500/10 transition-colors">- Coluna</button>
          <button type="button" onClick={() => editor.chain().focus().deleteRow().run()} className="px-2 py-0.5 rounded text-red-400 hover:bg-red-500/10 transition-colors">- Linha</button>
          <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} className="px-2 py-0.5 rounded text-red-400 hover:bg-red-500/10 transition-colors">Remover tabela</button>
        </div>
      )}
    </div>
  );
}

function ToolGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center">{children}</div>;
}

function Sep() {
  return <div className="mx-1 h-4 w-px bg-surface-3" />;
}

function ToolBtn({
  active, onClick, children, title, disabled,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  title?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded transition-colors",
        active ? "bg-amber-500 text-black" : "text-muted-light hover:bg-surface-3 hover:text-foreground",
        disabled && "opacity-30 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
