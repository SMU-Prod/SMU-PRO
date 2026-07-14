# SMU PRO — Editor de Aulas (TipTap) · Revisão e Novos Recursos

**Data:** 2026-07-14
**Status:** Aprovado para plano de implementação
**Autor:** Erick + Claude
**Branch base:** `fix/p0-seguranca-lms` (já com merge do `origin/master` — separação de escolas + cache)

---

## 0. Contexto

O admin do SMU PRO tem um editor de texto rico ("tipo Word") usado para escrever o **Conteúdo Rico** das aulas (`course-content-manager.tsx`) e do blog (`blog-manager.tsx`). Ele é construído em **TipTap 3.20** (ProseMirror) — a ferramenta correta e moderna para a stack (Next 16 · React 19 · Tailwind v4). **Não há troca de framework:** TipTap permanece.

O conteúdo é salvo como **uma única string HTML** no banco (`lesson.conteudo`) e exibido ao aluno pelo `RichContentViewer` (`src/components/lesson/rich-content-viewer.tsx`).

Foi avaliada e **descartada** a hipótese de adotar LaTeX como framework (paradigma compile-to-PDF, incompatível com editor WYSIWYG web). Do "mundo LaTeX" aproveitamos apenas a **notação matemática** via **KaTeX**, através da extensão oficial do TipTap.

---

## 1. Objetivo e não-objetivos

### Objetivo
Deixar o editor de aulas **100% funcional, previsível e mais rico**, mantendo tudo em TipTap e sem migração de banco.

### Escopo (in)
1. **Conserto da toolbar** — revisar e corrigir *todos* os botões/ferramentas que falham (queixa principal do usuário), com reprodução ao vivo.
2. **Fidelidade editor ↔ viewer** — acabar com o descompasso "o que edito ≠ o que o aluno vê".
3. **Seções explícitas + preview** — substituir a inferência de seção (por negrito/título) por um bloco de seção intencional, com preview ao vivo.
4. **Extensão de matemática (KaTeX)** — inserir fórmulas inline e em bloco.
5. **Blocos de destaque (callout)** — Dica / Atenção / Importante / Info, no idioma visual da SMU.
6. **Contagem de palavras + tempo de leitura** — no rodapé do editor.

### Não-objetivos (fora deste spec)
- Correção da separação das escolas (`aula.smuproducoes` × `smuproducoes`) — mistura de conteúdo e login cruzado → **próximo spec** (já discutido, tratado à parte).
- Menu "/" (slash) e toolbar flutuante (bubble menu) — não escolhidos agora; podem entrar num spec futuro.
- Embed de vídeo (YouTube) no conteúdo — não escolhido agora.
- Qualquer mudança no schema do banco.

---

## 2. Estado atual (diagnóstico)

### 2.1 Toolbar
Editor bem estruturado (`rich-text-editor.tsx`, ~850 linhas). StarterKit v3.20 já inclui `Link`/`Underline` e o código **corretamente** os desabilita para registrar os próprios — logo, **não** é o bug clássico de extensão duplicada. Os pacotes `@tiptap/extension-color` e `@tiptap/extension-font-family` continuam separados e funcionais. **A(s) falha(s) específica(s) precisam de reprodução ao vivo** — não serão corrigidas por adivinhação.

### 2.2 O viewer NÃO é WYSIWYG (raiz provável do "não funciona")
`RichContentViewer.parseIntoSections()` **reconstrói** o conteúdo: cria um "card com ícone automático" toda vez que encontra um título (h1–h3) **ou um parágrafo que começa em negrito** (`<strong>`/`<b>`). Consequências:
- Documento corrido no editor → cards fragmentados para o aluno.
- Negrito de ênfase (ex.: "**Comissão:**") vira card com ícone e título.
- Resultado **imprevisível** durante a edição.

### 2.3 Estilo editor × viewer
Editor usa classes utilitárias `prose prose-*`; viewer usa `.prose-light` (definido em `globals.css`). Há estilos de tabela/figura em ambos, mas **não são a mesma fonte de verdade** → pequenas divergências de aparência.

---

## 3. Design da solução

Todas as extensões novas ficam isoladas em `src/components/admin/editor-extensions/`, cada uma com responsabilidade única, importadas pelo `rich-text-editor.tsx`. O viewer (`rich-content-viewer.tsx`) passa a **renderizar** esses blocos (não a inferir).

### 3.1 Conserto da toolbar (frente 1)
**Abordagem — reprodução ao vivo, não estática:**
1. Página de teste **dev-only**: `src/app/(dev)/editor-lab/page.tsx`. Retorna `notFound()` quando `process.env.NODE_ENV === "production"` (nunca exposta em produção) e monta apenas `<RichTextEditor>` com estado local, sem Clerk.
2. Automação de browser (Claude in Chrome) percorre **cada grupo**:
   texto (negrito/itálico/sublinhado/riscado/sup/sub) · cor + destaque · fonte + tamanho · H1/H2/H3 · alinhamento · listas + recuo · citação/código/divisória · link/imagem(upload+URL)/tabela · limpar formatação/desfazer/refazer.
3. Para cada botão: registrar se aplica o efeito, se dá erro no console, se o estado "ativo" reflete corretamente. Corrigir os confirmadamente quebrados (systematic-debugging: reproduzir → causa-raiz → corrigir → confirmar).
4. Ao final, **remover** a página de teste.

**Saída esperada:** lista de bugs reais encontrados + correção de cada um. (A lista concreta só existe após a reprodução.)

### 3.2 Fidelidade editor ↔ viewer (frente 2)
Consolidar os estilos de conteúdo numa **única fonte de verdade** em `globals.css`: uma classe base (ex.: `.smu-rich`) aplicada tanto na área de edição do TipTap quanto no viewer, cobrindo tipografia, listas, tabela (bordas), código, citação, figura/imagem, mark/highlight, sup/sub. O editor e o viewer passam a herdar os mesmos tokens. Objetivo: o bloco de conteúdo aparece igual nos dois lados.

### 3.3 Seções explícitas + preview (frente 3)
**Nó novo `SectionBlock`** (`editor-extensions/section-block.ts`), um container:
- **Attrs:** `title: string`, `icon: string` (chave do catálogo de ícones existente — objetivo, orçamento, local, etc.).
- **Content:** `block+` (parágrafos, listas, tabelas… dentro da seção).
- **NodeView (React):** no editor renderiza o **card** (mesmo visual do viewer) com input de título e seletor de ícone no topo, e a área de conteúdo editável abaixo.
- **Serialização (`renderHTML`):** `<section data-section data-icon="target"><h3 data-section-title>Título</h3><div data-section-body>…</div></section>`.
- **`parseHTML`:** reconhece `section[data-section]` (round-trip estável).

**Inserção:** botão "Inserir seção" na toolbar (grupo de blocos).

**Preview ao vivo:** botão **"Pré-visualizar"** no editor abre um painel/modal que renderiza o `RichContentViewer` real com o HTML atual — o autor vê exatamente o que o aluno verá.

**Viewer — nova lógica (não-quebra):**
```
se (html contém <section data-section ...>)        → renderiza seções EXPLÍCITAS (card + ícone via data-icon)
senão (conteúdo legado sem seções explícitas)      → fallback parseIntoSections() atual (comportamento de hoje)
```
Aulas antigas continuam renderizando como hoje; aulas novas usam seções intencionais. **Sem migração de banco.**

### 3.4 Matemática (KaTeX) (frente 4)
- Dependências: `@tiptap/extension-mathematics` + `katex`.
- Editor: registrar a extensão; botão **∑** na toolbar para inserir fórmula **inline** (`$…$`) e em **bloco**. Um prompt/campo recebe o LaTeX.
- CSS do KaTeX importado globalmente (uma vez), para editor e viewer.
- **Viewer:** passe de renderização — localizar os nós de matemática salvos (ex.: `[data-latex]` / `[data-type="inline-math"]`) e renderizar com `katex.render`. Liberar as tags/attrs correspondentes no `DOMPurify`.
- Confirmar, na implementação, o formato exato de serialização da extensão (inspeção do `getHTML()`), já que o viewer depende dele.

### 3.5 Callout / blocos de destaque (frente 5)
**Nó novo `Callout`** (`editor-extensions/callout.ts`):
- **Attrs:** `variant: "dica" | "atencao" | "importante" | "info"` → ícone + cor.
- **Content:** `block+`.
- **NodeView:** caixa com ícone e cor da variante (mesma linguagem visual dos ícones SMU).
- **Serialização:** `<aside data-callout="dica">…</aside>`.
- **Inserção:** botão na toolbar (dropdown de variante).
- **Viewer:** renderiza `aside[data-callout]` com a estilização correspondente; liberar tag/attrs no `DOMPurify`.

### 3.6 Contagem + tempo de leitura (frente 6)
- Lógica **pura** em `src/lib/reading-time.ts`: `words(text)` e `readingMinutes(words, wpm=200)` → **com teste unitário** (`reading-time.test.ts`).
- Fonte de palavras: `editor.getText()` (via extensão `CharacterCount` ou cálculo direto).
- Exibição: rodapé do editor — "N palavras · ~M min de leitura".

---

## 4. Arquitetura e componentes

```
src/components/admin/
  rich-text-editor.tsx            (orquestra: registra extensões, toolbar, rodapé, preview)
  editor-extensions/
    section-block.ts              (nó SectionBlock + NodeView)
    callout.ts                    (nó Callout + NodeView)
    (font-size.ts, tab-indent.ts, resizable-image.ts)  ← extrair as extensões inline já existentes p/ isolar
  editor-preview.tsx              (painel de preview usando RichContentViewer)
src/components/lesson/
  rich-content-viewer.tsx         (renderiza seções/callouts explícitos; fallback legado; render KaTeX)
src/lib/
  reading-time.ts (+ .test.ts)    (lógica pura)
src/app/globals.css               (classe única .smu-rich compartilhada editor↔viewer)
src/app/(dev)/editor-lab/page.tsx (TEMPORÁRIA — removida ao fim da frente 1)
```

**Fluxo de dados:** autor edita → TipTap gera HTML (`getHTML()`) → salvo em `lesson.conteudo` (string) → viewer sanitiza (`DOMPurify`, com as novas tags liberadas) → renderiza seções/callouts/matemática.

**Isolamento:** cada nó novo é um arquivo próprio, entendível e testável isoladamente; o editor só os compõe.

---

## 5. Compatibilidade e riscos

| Risco | Mitigação |
|---|---|
| Aulas antigas dependem da inferência por negrito | Viewer mantém fallback `parseIntoSections()` quando não há seção explícita — zero quebra. |
| Formato de serialização do KaTeX incerto | Confirmar via `getHTML()` na implementação antes de escrever o render do viewer. |
| DOMPurify remover as novas tags (`section`/`aside`/math) | Adicionar explicitamente a `ADD_TAGS`/`ADD_ATTR`. |
| Página de teste exposta em produção | `notFound()` guard por `NODE_ENV` + remoção ao fim. |
| Divergência de estilo reaparecer | Fonte única `.smu-rich` para os dois lados. |

**Sem migração de banco. Sem mudança de contrato de dados** (continua 1 string HTML por aula).

---

## 6. Verificação (Definition of Done)

1. `npx tsc --noEmit` limpo.
2. `next build` limpo.
3. Toolbar: cada botão testado ao vivo na `editor-lab` — todos aplicam efeito e refletem estado; console sem erros.
4. Seção explícita: criar → salvar → abrir como aluno → aparência idêntica ao preview.
5. Aula legada (sem seção explícita): renderiza como antes (fallback).
6. Matemática: fórmula inline e bloco renderizam no editor e no viewer.
7. Callout: cada variante renderiza com ícone/cor no editor e no viewer.
8. Reading-time: teste unitário passa; rodapé mostra contagem correta.
9. Página `editor-lab` removida; sem resíduos de debug.

---

## 7. Ordem de implementação sugerida

1. Extrair extensões inline existentes → `editor-extensions/` (base limpa).
2. Página `editor-lab` dev-only → **auditar e consertar a toolbar** (frente 1).
3. Fonte de estilo única `.smu-rich` (frente 2).
4. `SectionBlock` + preview + nova lógica do viewer com fallback (frente 3).
5. Matemática KaTeX (frente 4).
6. Callout (frente 5).
7. Reading-time + rodapé (frente 6).
8. Verificação completa (seção 6) + remover `editor-lab`.
