"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
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
  Loader2, ImageIcon, AlignHorizontalJustifyCenter,
  Trash2, ChevronDown, Type,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { adminUploadFile } from "@/lib/actions/courses";
import { useT } from "@/lib/i18n/ui";
import { FontSize, TabIndent, ResizableImage } from "./editor-extensions";

// ── Constants ──

const TEXT_COLORS = [
  { label: "Padrão", value: "" },
  { label: "Preto", value: "#000000" },
  { label: "Branco", value: "#FFFFFF" },
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

// Font sizes — same range as Word
const FONT_SIZES = [
  { label: "8", value: "8px" },
  { label: "9", value: "9px" },
  { label: "10", value: "10px" },
  { label: "11", value: "11px" },
  { label: "12", value: "12px" },
  { label: "14", value: "14px" },
  { label: "16", value: "16px" },
  { label: "18", value: "18px" },
  { label: "20", value: "20px" },
  { label: "24", value: "24px" },
  { label: "28", value: "28px" },
  { label: "32", value: "32px" },
  { label: "36", value: "36px" },
  { label: "48", value: "48px" },
  { label: "72", value: "72px" },
];

// Fonts compatible with the project's visual identity
// Space Grotesk = main body, Inter = fallback, Instrument Serif = branding,
// Geist Mono = code, plus web-safe options for variety
const FONT_FAMILIES = [
  { label: "Padrão", value: "", description: "Space Grotesk (projeto)" },
  { label: "Space Grotesk", value: "Space Grotesk", description: "Fonte principal" },
  { label: "Inter", value: "Inter", description: "Fonte secundária" },
  { label: "Instrument Serif", value: "Instrument Serif", description: "Fonte de branding" },
  { label: "Geist Mono", value: "Geist Mono", description: "Monospace do projeto" },
  { label: "Georgia", value: "Georgia, serif", description: "Serifada clássica" },
  { label: "Arial", value: "Arial, sans-serif", description: "Sans-serif universal" },
  { label: "Times New Roman", value: "Times New Roman, serif", description: "Serifada formal" },
  { label: "Courier New", value: "Courier New, monospace", description: "Monospace clássica" },
];

// Impede que clicar num controle da toolbar tire a seleção/foco do editor.
// O default do mousedown muda o foco; sem preventDefault, em contextos com
// scroll/modal (como o admin) o comando pode aplicar a uma seleção já colapsada,
// fazendo o botão "não funcionar". Delegado no container → cobre todos os botões.
function preventEditorBlur(e: React.MouseEvent) {
  if ((e.target as HTMLElement).closest("button")) e.preventDefault();
}

// ── Component ──

interface RichTextEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: number;
  maxHeight?: number;
}

export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Escreva o conteúdo da aula aqui...",
  className,
  minHeight = 240,
  maxHeight = 600,
}: RichTextEditorProps) {
  const t = useT();
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showHighlightPicker, setShowHighlightPicker] = useState(false);
  const [showFontSizePicker, setShowFontSizePicker] = useState(false);
  const [showFontFamilyPicker, setShowFontFamilyPicker] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ pos: number } | null>(null);

  const colorRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const fontSizeRef = useRef<HTMLDivElement>(null);
  const fontFamilyRef = useRef<HTMLDivElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  // Shared upload helper — used by paste, drop, and button upload
  const uploadImageToSupabase = useCallback(async (file: File, view?: any) => {
    if (file.size > 10 * 1024 * 1024) {
      alert(t("Imagem muito grande (máximo 10MB)."));
      return;
    }
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.set("file", file);
      formData.set("bucket", "course-materials");
      formData.set("folder", "editor-images");
      const { url } = await adminUploadFile(formData);
      if (view) {
        const { state } = view;
        const node = state.schema.nodes.image.create({ src: url, alt: file.name });
        const tr = state.tr.replaceSelectionWith(node);
        view.dispatch(tr);
      }
      return url;
    } catch (err: any) {
      console.error("Erro ao fazer upload da imagem:", err);
      alert(`${t("Erro ao fazer upload:")} ${err?.message || t("Erro desconhecido")}`);
    } finally {
      setUploadingImage(false);
    }
    return null;
  }, []);

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
      Placeholder.configure({ placeholder: t(placeholder) }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-amber-400 underline cursor-pointer" },
      }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Highlight.configure({ multicolor: true }),
      ResizableImage.configure({
        inline: false,
        allowBase64: true,
        HTMLAttributes: { class: "rounded-lg max-w-full" },
      }),
      Superscript,
      Subscript,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      Typography,
      TabIndent,
    ],
    immediatelyRender: false,
    content: value,
    editorProps: {
      attributes: {
        // .smu-rich = MESMA fonte de estilo do viewer (globals.css). O projeto NÃO
        // tem @tailwindcss/typography, então as classes `prose-*` eram inertes.
        class: cn("smu-rich max-w-none focus:outline-none px-4 py-3"),
      },
      handlePaste(view, event) {
        const items = event.clipboardData?.items;
        if (!items) return false;
        for (const item of Array.from(items)) {
          if (item.type.startsWith("image/")) {
            event.preventDefault();
            const file = item.getAsFile();
            if (file) uploadImageToSupabase(file, view);
            return true;
          }
        }
        return false;
      },
      // Strip generic black/white/gray inline colors from pasted content
      // so they follow the dark/light theme. Keeps semantic colors intact.
      transformPastedHTML(html) {
        try {
          const doc = new DOMParser().parseFromString(`<div>${html}</div>`, "text/html");
          const container = doc.body.firstElementChild;
          if (!container) return html;
          const els = container.querySelectorAll("[style]");
          for (const el of Array.from(els)) {
            const s = (el as HTMLElement).style;
            if (s.color) {
              const c = s.color;
              // Strip blacks, whites, and grays
              if (/^(#[0-3]|#f[0-9a-f]{2}f|#e[0-9a-f]{2}e|rgb\s*\(\s*[0-2]\d{0,2}\s*,\s*[0-2]\d{0,2}\s*,\s*[0-2]\d{0,2}|rgb\s*\(\s*2[3-5]\d|black|white|gr[ae]y)/i.test(c) ||
                  /^#([0-9a-f])\1{5}$/i.test(c) || /^#([0-9a-f])\1{2}$/i.test(c)) {
                s.removeProperty("color");
              }
            }
            if (s.backgroundColor) {
              const bg = s.backgroundColor;
              if (/white|#fff|rgb\s*\(\s*255|black|#000|rgb\s*\(\s*0\s*,\s*0/i.test(bg)) {
                s.removeProperty("background-color");
              }
            }
          }
          return container.innerHTML;
        } catch { return html; }
      },
      handleDrop(view, event) {
        const files = event.dataTransfer?.files;
        if (!files?.length) return false;
        const imageFile = Array.from(files).find((f) => f.type.startsWith("image/"));
        if (imageFile) {
          event.preventDefault();
          uploadImageToSupabase(imageFile, view);
          return true;
        }
        return false;
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    onSelectionUpdate({ editor }) {
      const { from } = editor.state.selection;
      const node = editor.state.doc.nodeAt(from);
      if (node?.type.name === "image") {
        setSelectedImage({ pos: from });
      } else {
        setSelectedImage(null);
      }
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

  // Close all dropdown pickers on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (colorRef.current && !colorRef.current.contains(e.target as Node)) setShowColorPicker(false);
      if (highlightRef.current && !highlightRef.current.contains(e.target as Node)) setShowHighlightPicker(false);
      if (fontSizeRef.current && !fontSizeRef.current.contains(e.target as Node)) setShowFontSizePicker(false);
      if (fontFamilyRef.current && !fontFamilyRef.current.contains(e.target as Node)) setShowFontFamilyPicker(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const closeAllPickers = useCallback(() => {
    setShowColorPicker(false);
    setShowHighlightPicker(false);
    setShowFontSizePicker(false);
    setShowFontFamilyPicker(false);
  }, []);

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href ?? "";
    const url = window.prompt(t("URL do link:"), prev);
    if (url === null) return;
    if (url === "") { editor.chain().focus().extendMarkRange("link").unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImageFile = useCallback(async () => {
    if (!editor) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;
      const url = await uploadImageToSupabase(file);
      if (url) {
        editor.chain().focus().setImage({ src: url, alt: file.name }).run();
      }
    };
    input.click();
  }, [editor, uploadImageToSupabase]);

  const addImageUrl = useCallback(() => {
    if (!editor) return;
    const url = window.prompt(t("URL da imagem:"));
    if (!url) return;
    editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  const insertTable = useCallback(() => {
    if (!editor) return;
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  }, [editor]);

  const updateImageAttr = useCallback((attr: string, val: string) => {
    if (!editor || !selectedImage) return;
    const { state, view } = editor;
    const node = state.doc.nodeAt(selectedImage.pos);
    if (!node || node.type.name !== "image") return;
    const tr = state.tr.setNodeMarkup(selectedImage.pos, undefined, { ...node.attrs, [attr]: val });
    view.dispatch(tr);
  }, [editor, selectedImage]);

  const deleteSelectedImage = useCallback(() => {
    if (!editor || !selectedImage) return;
    const { state, view } = editor;
    const node = state.doc.nodeAt(selectedImage.pos);
    if (!node) return;
    const tr = state.tr.delete(selectedImage.pos, selectedImage.pos + node.nodeSize);
    view.dispatch(tr);
    setSelectedImage(null);
  }, [editor, selectedImage]);

  if (!editor) return null;

  // Current values for dropdowns
  const currentImgNode = selectedImage ? editor.state.doc.nodeAt(selectedImage.pos) : null;
  const imgWidth = currentImgNode?.attrs?.width || "100%";
  const imgAlignment = currentImgNode?.attrs?.alignment || "center";

  // Get current font size from editor state
  const currentFontSize = editor.getAttributes("textStyle").fontSize || "";
  const currentFontSizeLabel = FONT_SIZES.find((s) => s.value === currentFontSize)?.label || "";

  // Get current font family from editor state
  const currentFontFamily = editor.getAttributes("textStyle").fontFamily || "";
  const currentFontFamilyLabel = FONT_FAMILIES.find((f) => f.value === currentFontFamily)?.label || "Padrão";

  return (
    <div className={cn("rounded-xl border border-border bg-surface overflow-hidden flex flex-col", className)}>
      {/* ── Toolbar Row 1 — Font family + Font size + Text formatting ── */}
      <div className="sticky top-0 z-20 border-b border-border/50 bg-surface-2 px-2 py-1.5" onMouseDown={preventEditorBlur}>
        {/* Row 1: Font Family + Font Size */}
        <div className="flex flex-wrap items-center gap-1 mb-1">
          {/* Font Family Dropdown */}
          <div className="relative" ref={fontFamilyRef}>
            <button
              type="button"
              onClick={() => { closeAllPickers(); setShowFontFamilyPicker(!showFontFamilyPicker); }}
              title={t("Fonte")}
              className={cn(
                "flex items-center gap-1 h-7 px-2 rounded text-xs transition-colors min-w-[120px]",
                showFontFamilyPicker
                  ? "bg-amber-500 text-black"
                  : "text-muted-light hover:bg-surface-3 hover:text-foreground"
              )}
            >
              <Type size={12} />
              <span className="truncate flex-1 text-left">{currentFontFamilyLabel}</span>
              <ChevronDown size={10} />
            </button>
            {showFontFamilyPicker && (
              <div className="absolute top-full left-0 mt-1 z-50 w-56 max-h-64 overflow-y-auto rounded-lg bg-surface border border-border shadow-xl py-1">
                {FONT_FAMILIES.map((f) => (
                  <button
                    key={f.label}
                    type="button"
                    onClick={() => {
                      if (f.value) {
                        editor.chain().focus().setFontFamily(f.value).run();
                      } else {
                        editor.chain().focus().unsetFontFamily().run();
                      }
                      setShowFontFamilyPicker(false);
                    }}
                    className={cn(
                      "w-full text-left px-3 py-1.5 text-xs transition-colors flex items-center justify-between",
                      currentFontFamily === f.value
                        ? "bg-amber-500/10 text-amber-400"
                        : "text-muted-light hover:bg-surface-3 hover:text-foreground"
                    )}
                  >
                    <span style={{ fontFamily: f.value || "inherit" }}>{f.label}</span>
                    <span className="text-[10px] text-muted-light/60 ml-2">{t(f.description)}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Font Size Dropdown */}
          <div className="relative" ref={fontSizeRef}>
            <button
              type="button"
              onClick={() => { closeAllPickers(); setShowFontSizePicker(!showFontSizePicker); }}
              title={t("Tamanho do texto")}
              className={cn(
                "flex items-center gap-1 h-7 px-2 rounded text-xs transition-colors min-w-[60px]",
                showFontSizePicker
                  ? "bg-amber-500 text-black"
                  : "text-muted-light hover:bg-surface-3 hover:text-foreground"
              )}
            >
              <span className="w-4 text-center font-medium">{currentFontSizeLabel || "—"}</span>
              <ChevronDown size={10} />
            </button>
            {showFontSizePicker && (
              <div className="absolute top-full left-0 mt-1 z-50 w-24 max-h-64 overflow-y-auto rounded-lg bg-surface border border-border shadow-xl py-1">
                {/* Reset option */}
                <button
                  type="button"
                  onClick={() => {
                    (editor.commands as any).unsetFontSize();
                    setShowFontSizePicker(false);
                  }}
                  className={cn(
                    "w-full text-left px-3 py-1 text-xs transition-colors",
                    !currentFontSize
                      ? "bg-amber-500/10 text-amber-400"
                      : "text-muted-light hover:bg-surface-3 hover:text-foreground"
                  )}
                >
                  {t("Padrão")}
                </button>
                <div className="h-px bg-border/50 my-0.5" />
                {FONT_SIZES.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => {
                      (editor.commands as any).setFontSize(s.value);
                      setShowFontSizePicker(false);
                    }}
                    className={cn(
                      "w-full text-left px-3 py-1 text-xs transition-colors",
                      currentFontSize === s.value
                        ? "bg-amber-500/10 text-amber-400"
                        : "text-muted-light hover:bg-surface-3 hover:text-foreground"
                    )}
                    style={{ fontSize: Math.min(parseInt(s.label), 20) + "px" }}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Row 2: All formatting tools */}
        <div className="flex flex-wrap items-center gap-0.5">
          {/* Text style */}
          <ToolGroup>
            <ToolBtn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} title={t("Negrito (Ctrl+B)")}><Bold size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} title={t("Itálico (Ctrl+I)")}><Italic size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()} title={t("Sublinhado (Ctrl+U)")}><UnderlineIcon size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()} title={t("Riscado")}><Strikethrough size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("superscript")} onClick={() => editor.chain().focus().toggleSuperscript().run()} title={t("Sobrescrito")}><SuperscriptIcon size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("subscript")} onClick={() => editor.chain().focus().toggleSubscript().run()} title={t("Subscrito")}><SubscriptIcon size={13} /></ToolBtn>
          </ToolGroup>

          <Sep />

          {/* Color */}
          <ToolGroup>
            <div className="relative" ref={colorRef}>
              <ToolBtn
                active={showColorPicker}
                onClick={() => { closeAllPickers(); setShowColorPicker(!showColorPicker); }}
                title={t("Cor do texto")}
              >
                <Palette size={13} />
              </ToolBtn>
              {showColorPicker && (
                <div className="absolute top-full left-0 mt-1 z-50 p-2 rounded-lg bg-surface border border-border shadow-xl flex gap-1.5 flex-wrap max-w-[200px]">
                  {TEXT_COLORS.map((c) => (
                    <button
                      key={c.value || "default"}
                      type="button"
                      onClick={() => {
                        if (c.value) editor.chain().focus().setColor(c.value).run();
                        else editor.chain().focus().unsetColor().run();
                        setShowColorPicker(false);
                      }}
                      title={t(c.label)}
                      className={cn(
                        "h-6 w-6 rounded-full border hover:scale-110 transition-transform",
                        c.value === "#000000" ? "border-gray-500" : "border-border"
                      )}
                      style={{ backgroundColor: c.value || "var(--text-primary)" }}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="relative" ref={highlightRef}>
              <ToolBtn
                active={showHighlightPicker}
                onClick={() => { closeAllPickers(); setShowHighlightPicker(!showHighlightPicker); }}
                title={t("Destaque")}
              >
                <Highlighter size={13} />
              </ToolBtn>
              {showHighlightPicker && (
                <div className="absolute top-full left-0 mt-1 z-50 p-2 rounded-lg bg-surface border border-border shadow-xl flex gap-1.5">
                  {HIGHLIGHT_COLORS.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => {
                        editor.chain().focus().toggleHighlight({ color: c.value }).run();
                        setShowHighlightPicker(false);
                      }}
                      title={t(c.label)}
                      className="h-6 w-6 rounded-full border border-border hover:scale-110 transition-transform"
                      style={{ backgroundColor: c.value }}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => { editor.chain().focus().unsetHighlight().run(); setShowHighlightPicker(false); }}
                    title={t("Remover destaque")}
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
            <ToolBtn active={editor.isActive("heading", { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} title={t("Título H1")}><Heading1 size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title={t("Título H2")}><Heading2 size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title={t("Título H3")}><Heading3 size={13} /></ToolBtn>
          </ToolGroup>

          <Sep />

          {/* Alignment */}
          <ToolGroup>
            <ToolBtn active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} title={t("Alinhar esquerda")}><AlignLeft size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} title={t("Centralizar")}><AlignCenter size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} title={t("Alinhar direita")}><AlignRight size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()} title={t("Justificar")}><AlignJustify size={13} /></ToolBtn>
          </ToolGroup>

          <Sep />

          {/* Lists */}
          <ToolGroup>
            <ToolBtn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} title={t("Lista com marcadores")}><List size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} title={t("Lista numerada")}><ListOrdered size={13} /></ToolBtn>
            <ToolBtn active={false} onClick={() => { if (editor.isActive("listItem")) editor.chain().focus().sinkListItem("listItem").run(); }} title={t("Aumentar recuo (Tab)")}><IndentIncrease size={13} /></ToolBtn>
            <ToolBtn active={false} onClick={() => { if (editor.isActive("listItem")) editor.chain().focus().liftListItem("listItem").run(); }} title={t("Diminuir recuo (Shift+Tab)")}><IndentDecrease size={13} /></ToolBtn>
          </ToolGroup>

          <Sep />

          {/* Block elements */}
          <ToolGroup>
            <ToolBtn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} title={t("Citação")}><Quote size={13} /></ToolBtn>
            <ToolBtn active={editor.isActive("codeBlock")} onClick={() => editor.chain().focus().toggleCodeBlock().run()} title={t("Bloco de código")}><Code2 size={13} /></ToolBtn>
            <ToolBtn active={false} onClick={() => editor.chain().focus().setHorizontalRule().run()} title={t("Linha divisória")}><Minus size={13} /></ToolBtn>
          </ToolGroup>

          <Sep />

          {/* Insert */}
          <ToolGroup>
            <ToolBtn active={editor.isActive("link")} onClick={setLink} title={t("Inserir link (Ctrl+K)")}><Link2 size={13} /></ToolBtn>
            {editor.isActive("link") && (
              <ToolBtn active={false} onClick={() => editor.chain().focus().unsetLink().run()} title={t("Remover link")}><Link2Off size={13} /></ToolBtn>
            )}
            <ToolBtn active={false} onClick={addImageFile} disabled={uploadingImage} title={t("Inserir imagem (upload para nuvem)")}>
              {uploadingImage ? <Loader2 size={13} className="animate-spin" /> : <ImagePlus size={13} />}
            </ToolBtn>
            <ToolBtn active={false} onClick={addImageUrl} title={t("Inserir imagem (URL)")}><ImageIcon size={13} /></ToolBtn>
            <ToolBtn active={false} onClick={insertTable} title={t("Inserir tabela 3x3")}><TableIcon size={13} /></ToolBtn>
          </ToolGroup>

          <Sep />

          {/* Actions */}
          <ToolGroup>
            <ToolBtn active={false} onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()} title={t("Limpar formatação")}><RemoveFormatting size={13} /></ToolBtn>
            <ToolBtn active={false} onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title={t("Desfazer (Ctrl+Z)")}><Undo2 size={13} /></ToolBtn>
            <ToolBtn active={false} onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title={t("Refazer (Ctrl+Y)")}><Redo2 size={13} /></ToolBtn>
          </ToolGroup>
        </div>
      </div>

      {/* ── Image Controls Bar ── */}
      {selectedImage && currentImgNode && (
        <div className="flex flex-wrap items-center gap-1.5 border-b border-border/50 bg-amber-500/5 px-3 py-1.5 text-xs" onMouseDown={preventEditorBlur}>
          <span className="font-medium text-amber-400 mr-1 flex items-center gap-1">
            <ImageIcon size={12} /> {t("Imagem:")}
          </span>
          <span className="text-muted-light mr-1">{t("Tamanho:")}</span>
          {[
            { label: "P", value: "25%", title: t("Pequena (25%)") },
            { label: "M", value: "50%", title: t("Média (50%)") },
            { label: "G", value: "75%", title: t("Grande (75%)") },
            { label: "100%", value: "100%", title: t("Largura total") },
          ].map((s) => (
            <button
              key={s.value}
              type="button"
              onClick={() => updateImageAttr("width", s.value)}
              title={s.title}
              className={cn(
                "px-2 py-0.5 rounded font-medium transition-colors",
                imgWidth === s.value ? "bg-amber-500 text-black" : "text-muted-light hover:bg-surface-3 hover:text-foreground"
              )}
            >
              {s.label}
            </button>
          ))}
          <Sep />
          <span className="text-muted-light mr-1">{t("Posição:")}</span>
          {[
            { icon: AlignLeft, value: "left", title: t("Alinhar esquerda") },
            { icon: AlignHorizontalJustifyCenter, value: "center", title: t("Centralizar") },
            { icon: AlignRight, value: "right", title: t("Alinhar direita") },
          ].map((a) => (
            <button
              key={a.value}
              type="button"
              onClick={() => updateImageAttr("alignment", a.value)}
              title={a.title}
              className={cn(
                "flex h-6 w-6 items-center justify-center rounded transition-colors",
                imgAlignment === a.value ? "bg-amber-500 text-black" : "text-muted-light hover:bg-surface-3 hover:text-foreground"
              )}
            >
              <a.icon size={12} />
            </button>
          ))}
          <Sep />
          <button
            type="button"
            onClick={deleteSelectedImage}
            title={t("Remover imagem")}
            className="flex h-6 items-center gap-1 px-2 rounded text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <Trash2 size={12} /> {t("Remover")}
          </button>
        </div>
      )}

      {/* ── Editor area ── */}
      <div ref={editorContainerRef} className="overflow-y-auto flex-1" style={{ minHeight, maxHeight }}>
        <EditorContent editor={editor} />
      </div>

      {/* ── Upload indicator ── */}
      {uploadingImage && (
        <div className="flex items-center gap-2 border-t border-border/50 bg-amber-500/5 px-3 py-1.5 text-xs text-amber-400">
          <Loader2 size={12} className="animate-spin" />
          {t("Enviando imagem para a nuvem...")}
        </div>
      )}

      {/* ── Table controls ── */}
      {editor.isActive("table") && (
        <div className="flex flex-wrap items-center gap-1 border-t border-border/50 bg-surface-2 px-3 py-1.5 text-xs text-muted-light" onMouseDown={preventEditorBlur}>
          <span className="font-medium text-foreground mr-2">{t("Tabela:")}</span>
          <button type="button" onClick={() => editor.chain().focus().addColumnBefore().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">{t("+ Coluna antes")}</button>
          <button type="button" onClick={() => editor.chain().focus().addColumnAfter().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">{t("+ Coluna depois")}</button>
          <button type="button" onClick={() => editor.chain().focus().addRowBefore().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">{t("+ Linha antes")}</button>
          <button type="button" onClick={() => editor.chain().focus().addRowAfter().run()} className="px-2 py-0.5 rounded hover:bg-hover transition-colors">{t("+ Linha depois")}</button>
          <Sep />
          <button type="button" onClick={() => editor.chain().focus().deleteColumn().run()} className="px-2 py-0.5 rounded text-red-400 hover:bg-red-500/10 transition-colors">{t("- Coluna")}</button>
          <button type="button" onClick={() => editor.chain().focus().deleteRow().run()} className="px-2 py-0.5 rounded text-red-400 hover:bg-red-500/10 transition-colors">{t("- Linha")}</button>
          <button type="button" onClick={() => editor.chain().focus().deleteTable().run()} className="px-2 py-0.5 rounded text-red-400 hover:bg-red-500/10 transition-colors">{t("Remover tabela")}</button>
        </div>
      )}
    </div>
  );
}

// ── Helpers ──

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
