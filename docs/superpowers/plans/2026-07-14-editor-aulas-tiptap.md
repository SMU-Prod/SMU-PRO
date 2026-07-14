# Editor de Aulas (TipTap) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deixar o editor de aulas TipTap 100% funcional (toolbar), previsível (WYSIWYG via seções explícitas + preview) e mais rico (matemática KaTeX, callouts, contagem/tempo de leitura), sem migração de banco.

**Architecture:** Extensões novas isoladas em `src/components/admin/editor-extensions/`, compostas pelo `rich-text-editor.tsx`. Conteúdo continua sendo 1 string HTML por aula; o `RichContentViewer` passa a renderizar blocos explícitos (seção/callout/matemática) com fallback para o comportamento legado.

**Tech Stack:** TipTap 3.20 (ProseMirror), Next 16 (App Router), React 19, Tailwind v4, KaTeX, DOMPurify.

## Global Constraints

- Framework do editor: **TipTap** (não trocar). Versões: `@tiptap/*` 3.20.x.
- **Sem migração de banco.** Conteúdo permanece string HTML em `lesson.conteudo`.
- **Zero quebra de aulas legadas:** viewer mantém fallback `parseIntoSections()` quando não há blocos explícitos.
- Estilo do conteúdo com **fonte única** compartilhada editor↔viewer (`.smu-rich` em `globals.css`).
- Cores/estética: âmbar `#F59E0B`, dark-default + light. Ícones via `lucide-react`.
- Toda tag/atributo novo no HTML precisa ser liberado no `DOMPurify` do viewer.
- Verificação final: `npx tsc --noEmit` e `next build` limpos.
- Commits frequentes, mensagens em PT, com trailer `Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>`.

---

### Task 1: Extrair extensões inline para arquivos próprios

**Files:**
- Create: `src/components/admin/editor-extensions/font-size.ts`
- Create: `src/components/admin/editor-extensions/tab-indent.ts`
- Create: `src/components/admin/editor-extensions/resizable-image.ts`
- Create: `src/components/admin/editor-extensions/index.ts`
- Modify: `src/components/admin/rich-text-editor.tsx` (remover as defs inline, importar do index)

**Interfaces:**
- Produces: `FontSize`, `TabIndent`, `ResizableImage` (TipTap `Extension`/`Node`), reexportados por `index.ts`.

- [ ] **Step 1:** Mover `FontSize` (linhas ~96-130), `TabIndent` (~133-156), `ResizableImage` (~159-192) para os arquivos, mantendo o código idêntico. `index.ts` reexporta os três.
- [ ] **Step 2:** No `rich-text-editor.tsx`, remover as defs inline e `import { FontSize, TabIndent, ResizableImage } from "./editor-extensions"`.
- [ ] **Step 3:** `npx tsc --noEmit` → limpo.
- [ ] **Step 4:** Commit: `refactor(editor): extrai extensões inline para editor-extensions/`.

---

### Task 2: Página de teste dev-only + auditoria/conserto da toolbar

**Files:**
- Create: `src/app/(dev)/editor-lab/page.tsx` (TEMPORÁRIA)
- Modify: `src/components/admin/rich-text-editor.tsx` (correções dos bugs encontrados)

**Interfaces:**
- Consumes: `RichTextEditor` de `@/components/admin/rich-text-editor`.

- [ ] **Step 1:** Criar `editor-lab/page.tsx` client component: guarda `if (process.env.NODE_ENV === "production") notFound();`, estado local `const [html, setHtml] = useState("")`, monta `<RichTextEditor value={html} onChange={setHtml} />` + um `<pre>` mostrando o HTML atual.
- [ ] **Step 2:** `next dev` e abrir `/editor-lab` no browser (Claude in Chrome).
- [ ] **Step 3:** Percorrer cada grupo da toolbar, clicando cada botão com texto selecionado e sem seleção, observando: (a) efeito aplicado no conteúdo, (b) erros/warns no console, (c) estado "ativo" correto. Registrar falhas reais.
- [ ] **Step 4:** Para cada bug confirmado: reproduzir → causa-raiz → corrigir no `rich-text-editor.tsx`/extensão → reconfirmar ao vivo. (systematic-debugging)
- [ ] **Step 5:** `npx tsc --noEmit` limpo. Commit: `fix(editor): corrige botões da toolbar (<lista dos que falhavam>)`.

> Nota: a página `editor-lab` permanece durante o desenvolvimento (útil pra testar as próximas tasks) e é **removida na Task 8**.

---

### Task 3: Fonte única de estilo do conteúdo (`.smu-rich`)

**Files:**
- Modify: `src/app/globals.css` (consolidar em `.smu-rich`)
- Modify: `src/components/admin/rich-text-editor.tsx` (aplicar `.smu-rich` na área de edição)
- Modify: `src/components/lesson/rich-content-viewer.tsx` (aplicar `.smu-rich` no lugar de `.prose-light`)

**Interfaces:**
- Produces: classe CSS `.smu-rich` cobrindo tipografia, listas, tabela (borda), código, citação, figura/img, mark/highlight, sup/sub.

- [ ] **Step 1:** Em `globals.css`, criar `.smu-rich` unindo o que existe em `.prose-light` + os estilos de tabela/figura já usados no editor. Manter `.prose-light` como alias (`.prose-light { @apply ... }` ou duplicar) para não quebrar outros usos até migrarmos.
- [ ] **Step 2:** No editor, trocar as classes `prose prose-*` da `editorProps.attributes.class` por `smu-rich`.
- [ ] **Step 3:** No viewer, trocar `prose-light` por `smu-rich` nos blocos `dangerouslySetInnerHTML`.
- [ ] **Step 4:** Verificar ao vivo na `editor-lab` + numa aula: tabela com borda, citação, código iguais nos dois lados.
- [ ] **Step 5:** `npx tsc --noEmit` limpo. Commit: `style(editor): fonte única .smu-rich compartilhada editor↔viewer`.

---

### Task 4: Nó `SectionBlock` + inserção + render no viewer (com fallback)

**Files:**
- Create: `src/components/admin/editor-extensions/section-block.tsx` (nó + NodeView React)
- Modify: `src/components/admin/editor-extensions/index.ts` (reexport)
- Modify: `src/components/admin/rich-text-editor.tsx` (registrar + botão "Inserir seção")
- Modify: `src/components/lesson/rich-content-viewer.tsx` (renderizar seções explícitas; fallback)
- Modify: `src/app/globals.css` (estilo do card de seção, se necessário)

**Interfaces:**
- Produces: `SectionBlock` (TipTap `Node`, `name: "sectionBlock"`, attrs `title:string`, `icon:string`, content `block+`). Serializa `<section data-section data-icon="…"><h3 data-section-title>…</h3><div data-section-body>…</div></section>`.
- Consumes (viewer): catálogo de ícones `getIconForTitle` + mapa `icon key → componente lucide`.

- [ ] **Step 1:** Implementar `SectionBlock` com `addAttributes` (title/icon), `parseHTML` (`section[data-section]`), `renderHTML` (estrutura acima), `addNodeView` (React) mostrando input de título + seletor de ícone (reusar as chaves de `SECTION_ICONS` do viewer, extraídas para um módulo comum `src/lib/section-icons.tsx`).
- [ ] **Step 2:** Extrair `SECTION_ICONS`/`getIconForTitle` + mapa `key→Icon` para `src/lib/section-icons.tsx` (usado por editor e viewer). Viewer passa a importar de lá.
- [ ] **Step 3:** Registrar `SectionBlock` no editor + botão "Inserir seção" na toolbar (grupo de blocos) que faz `insertContent` de uma seção vazia.
- [ ] **Step 4:** No viewer: se `sanitized` contém `section[data-section]`, renderizar cada uma como card (ícone via `data-icon`, título via `[data-section-title]`, corpo via `[data-section-body]`); senão, fallback `parseIntoSections()` atual. Liberar `section`/`div`/`data-section`/`data-icon`/`data-section-title`/`data-section-body` no `DOMPurify`.
- [ ] **Step 5:** Ao vivo: criar seção no editor → conferir HTML → conferir render idêntico. Testar aula legada (string sem `data-section`) → fallback intacto.
- [ ] **Step 6:** `npx tsc --noEmit` limpo. Commit: `feat(editor): bloco de seção explícito + render no viewer com fallback legado`.

---

### Task 5: Preview ao vivo (editor mostra o que o aluno verá)

**Files:**
- Create: `src/components/admin/editor-preview.tsx`
- Modify: `src/components/admin/rich-text-editor.tsx` (botão "Pré-visualizar" + estado)

**Interfaces:**
- Consumes: `RichContentViewer` de `@/components/lesson/rich-content-viewer`, recebe `html`.
- Produces: `<EditorPreview html={string} open={boolean} onClose={() => void} />` (modal/painel).

- [ ] **Step 1:** `EditorPreview`: modal simples (overlay) que renderiza `<RichContentViewer html={html} />` dentro de um container `.smu-rich`.
- [ ] **Step 2:** No editor, adicionar botão "Pré-visualizar" (ícone `Eye`) na toolbar de ações; abre o modal com `editor.getHTML()`.
- [ ] **Step 3:** Ao vivo: editar seção/callout/texto → abrir preview → confere que bate com o resultado final.
- [ ] **Step 4:** `npx tsc --noEmit` limpo. Commit: `feat(editor): botão de pré-visualização usando o viewer real`.

---

### Task 6: Matemática (KaTeX)

**Files:**
- Modify: `package.json` (deps `@tiptap/extension-mathematics`, `katex`)
- Modify: `src/components/admin/rich-text-editor.tsx` (registrar extensão + botão ∑)
- Modify: `src/components/lesson/rich-content-viewer.tsx` (render KaTeX + DOMPurify)
- Modify: `src/app/globals.css` ou layout (import do CSS do KaTeX, uma vez)

**Interfaces:**
- Produces: botão de fórmula inline e bloco; HTML de math serializado pela extensão (formato **confirmado em runtime** via `getHTML()` antes de escrever o render do viewer).

- [ ] **Step 1:** `npm i @tiptap/extension-mathematics katex`.
- [ ] **Step 2:** Importar o CSS do KaTeX globalmente (uma vez).
- [ ] **Step 3:** Registrar a extensão de matemática no editor; adicionar botão ∑ que insere fórmula (inline via prompt de LaTeX; bloco via variante). Confirmar ao vivo o HTML gerado (`<pre>` da editor-lab).
- [ ] **Step 4:** No viewer: após sanitizar, localizar os nós de math (conforme formato confirmado no Step 3) e renderizar com `katex.render`/`renderToString`. Liberar as tags/attrs no `DOMPurify`.
- [ ] **Step 5:** Ao vivo: fórmula inline e bloco renderizam no editor e no viewer.
- [ ] **Step 6:** `npx tsc --noEmit` limpo. Commit: `feat(editor): fórmulas matemáticas com KaTeX (inline e bloco)`.

---

### Task 7: Callout (Dica/Atenção/Importante/Info) + Contagem/tempo de leitura

**Files:**
- Create: `src/components/admin/editor-extensions/callout.tsx` (nó + NodeView)
- Create: `src/lib/reading-time.ts`
- Create: `src/lib/reading-time.test.ts`
- Modify: `src/components/admin/editor-extensions/index.ts`
- Modify: `src/components/admin/rich-text-editor.tsx` (botão callout + rodapé de contagem)
- Modify: `src/components/lesson/rich-content-viewer.tsx` (render callout + DOMPurify)

**Interfaces:**
- Produces:
  - `Callout` (TipTap `Node`, `name: "callout"`, attr `variant: "dica"|"atencao"|"importante"|"info"`, content `block+`). Serializa `<aside data-callout="dica">…</aside>`.
  - `countWords(text: string): number` e `readingMinutes(words: number, wpm?: number): number` em `reading-time.ts`.

- [ ] **Step 1 (reading-time TDD):** Escrever `reading-time.test.ts`:
```ts
import { countWords, readingMinutes } from "./reading-time";
test("countWords conta palavras ignorando espaços extras", () => {
  expect(countWords("  um   dois três ")).toBe(3);
  expect(countWords("")).toBe(0);
});
test("readingMinutes arredonda pra cima, mínimo 1", () => {
  expect(readingMinutes(0)).toBe(1);
  expect(readingMinutes(200)).toBe(1);
  expect(readingMinutes(201)).toBe(2);
  expect(readingMinutes(100, 100)).toBe(1);
});
```
- [ ] **Step 2:** Rodar teste → falha (módulo não existe).
- [ ] **Step 3:** Implementar `reading-time.ts`:
```ts
export function countWords(text: string): number {
  const t = text.trim();
  return t ? t.split(/\s+/).length : 0;
}
export function readingMinutes(words: number, wpm = 200): number {
  return Math.max(1, Math.ceil(words / wpm));
}
```
- [ ] **Step 4:** Rodar teste → passa.
- [ ] **Step 5:** Implementar `Callout` (attrs/parseHTML `aside[data-callout]`/renderHTML/NodeView com ícone+cor por variante; usar `lucide`: Lightbulb=dica, AlertTriangle=atencao, Star=importante, Info=info).
- [ ] **Step 6:** Editor: botão callout (dropdown de variante) + rodapé "N palavras · ~M min" usando `countWords(editor.getText())` e `readingMinutes`.
- [ ] **Step 7:** Viewer: renderizar `aside[data-callout]` com estilo por variante; liberar tag/attrs no `DOMPurify`.
- [ ] **Step 8:** Ao vivo: cada variante renderiza no editor e no viewer; rodapé conta certo.
- [ ] **Step 9:** `npx tsc --noEmit` limpo. Commit: `feat(editor): callouts + contagem de palavras e tempo de leitura`.

---

### Task 8: Verificação final + remoção da página de teste

**Files:**
- Delete: `src/app/(dev)/editor-lab/page.tsx` (e a pasta se vazia)

- [ ] **Step 1:** Remover `editor-lab`.
- [ ] **Step 2:** `npx tsc --noEmit` → limpo.
- [ ] **Step 3:** `next build` → limpo.
- [ ] **Step 4:** Rodar testes: `reading-time.test.ts` passa (+ suíte existente sem regressão).
- [ ] **Step 5:** Checklist DoD da spec (seção 6) item a item.
- [ ] **Step 6:** Commit: `chore(editor): remove página de teste e valida build`.

---

## Self-Review (cobertura vs spec)

- Toolbar (spec §3.1) → Task 2 ✅
- Fidelidade editor↔viewer (§3.2) → Task 3 ✅
- Seções explícitas + preview (§3.3) → Tasks 4 e 5 ✅
- Matemática KaTeX (§3.4) → Task 6 ✅
- Callout (§3.5) → Task 7 ✅
- Contagem/tempo de leitura (§3.6) → Task 7 ✅
- Compatibilidade/fallback + DOMPurify (§5) → Tasks 4/6/7 ✅
- Verificação/DoD (§6) → Task 8 ✅
- Página dev-only guard + remoção → Tasks 2 e 8 ✅
