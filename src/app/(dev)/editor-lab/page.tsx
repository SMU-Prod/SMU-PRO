"use client";

// ⚠️ PÁGINA TEMPORÁRIA DE TESTE — dev-only. Removida na Task 8 do plano.
// Monta o RichTextEditor isolado (sem Clerk) para auditar cada botão da toolbar.

import { useState } from "react";
import { notFound } from "next/navigation";
import { RichTextEditor } from "@/components/admin/rich-text-editor";

export default function EditorLabPage() {
  if (process.env.NODE_ENV === "production") notFound();
  return <EditorLab />;
}

function EditorLab() {
  const [html, setHtml] = useState<string>(
    "<h2>Título de teste</h2><p>Selecione este texto e teste os botões da toolbar.</p><p>Segunda linha para testar alinhamento, listas e recuo.</p>",
  );

  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: 24 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>
        Editor Lab (dev) — auditoria da toolbar
      </h1>
      <RichTextEditor value={html} onChange={setHtml} minHeight={280} maxHeight={480} />
      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6 }}>HTML gerado:</div>
        <pre
          data-testid="editor-html"
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            fontSize: 12,
            background: "#111",
            color: "#eee",
            padding: 12,
            borderRadius: 8,
            maxHeight: 260,
            overflow: "auto",
          }}
        >
          {html}
        </pre>
      </div>
    </div>
  );
}
