"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle } from "@tiptap/extension-text-style";
import { cn } from "@/lib/utils";
import {
  Bold, Italic, UnderlineIcon, Strikethrough, Link2, List, ListOrdered,
  AlignLeft, AlignCenter, AlignRight, Heading2, Heading3, Quote, Minus,
  Undo2, Redo2, Link2Off,
} from "lucide-react";
import { useCallback, useEffect } from "react";

interface RichTextEditorProps {
  value?: string;
  onChange?: (html: string) => void;
  placeholder?: string;
  className?: string;
  minHeight?: number;
}

export function RichTextEditor({
  value = "",
  onChange,
  placeholder = "Escreva o conteúdo da aula aqui...",
  className,
  minHeight = 240,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
        bulletList: { keepMarks: true },
        orderedList: { keepMarks: true },
        // Desativar extensões que adicionamos abaixo com configuração própria
        link: false,
        underline: false,
      }),
      Placeholder.configure({ placeholder }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: "text-[#6C3CE1] underline cursor-pointer" } }),
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
    ],
    immediatelyRender: false,
    content: value,
    editorProps: {
      attributes: {
        class: cn(
          "prose prose-sm max-w-none focus:outline-none px-4 py-3",
          "prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900",
          "prose-a:text-[#6C3CE1] prose-blockquote:border-l-[#6C3CE1] prose-blockquote:text-gray-600"
        ),
      },
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
  });

  // Sincroniza o conteúdo quando a prop value muda externamente (ex: form.reset)
  useEffect(() => {
    if (editor && value !== undefined && !editor.isFocused) {
      if (value !== editor.getHTML()) {
        editor.commands.setContent(value || "", { emitUpdate: false });
      }
    }
  }, [value, editor]);

  const setLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href ?? "";
    const url = window.prompt("URL do link:", prev);
    if (url === null) return;
    if (url === "") { editor.chain().focus().extendMarkRange("link").unsetLink().run(); return; }
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <div className={cn("rounded-xl border border-gray-200 bg-white overflow-hidden", className)}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-100 bg-gray-50 px-2 py-1.5">
        <ToolGroup>
          <ToolBtn active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()} title="Negrito"><Bold size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()} title="Itálico"><Italic size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("underline")} onClick={() => editor.chain().focus().toggleUnderline().run()} title="Sublinhado"><UnderlineIcon size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()} title="Riscado"><Strikethrough size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        <ToolGroup>
          <ToolBtn active={editor.isActive("heading", { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Título H2"><Heading2 size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("heading", { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} title="Título H3"><Heading3 size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        <ToolGroup>
          <ToolBtn active={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} title="Alinhar esquerda"><AlignLeft size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} title="Centralizar"><AlignCenter size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} title="Alinhar direita"><AlignRight size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        <ToolGroup>
          <ToolBtn active={editor.isActive("bulletList")} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Lista com marcadores"><List size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("orderedList")} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Lista numerada"><ListOrdered size={13} /></ToolBtn>
          <ToolBtn active={editor.isActive("blockquote")} onClick={() => editor.chain().focus().toggleBlockquote().run()} title="Citação"><Quote size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Linha divisória"><Minus size={13} /></ToolBtn>
        </ToolGroup>

        <Sep />

        <ToolGroup>
          <ToolBtn active={editor.isActive("link")} onClick={setLink} title="Inserir link"><Link2 size={13} /></ToolBtn>
          {editor.isActive("link") && (
            <ToolBtn active={false} onClick={() => editor.chain().focus().unsetLink().run()} title="Remover link"><Link2Off size={13} /></ToolBtn>
          )}
        </ToolGroup>

        <Sep />

        <ToolGroup>
          <ToolBtn active={false} onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Desfazer"><Undo2 size={13} /></ToolBtn>
          <ToolBtn active={false} onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Refazer"><Redo2 size={13} /></ToolBtn>
        </ToolGroup>
      </div>

      {/* Editor area */}
      <EditorContent editor={editor} style={{ minHeight }} />
    </div>
  );
}

function ToolGroup({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center">{children}</div>;
}

function Sep() {
  return <div className="mx-1 h-4 w-px bg-gray-200" />;
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
        active ? "bg-[#6C3CE1] text-white" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900",
        disabled && "opacity-30 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
}
