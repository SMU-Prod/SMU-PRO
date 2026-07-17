# Portal de Simuladores — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Uma página-portal exclusiva para alunos logados que reúne os ~155 simuladores únicos da SMU, navegável estilo Steam (prateleiras por segmento + busca + filtros), cada simulador aberto em tela cheia.

**Architecture:** Um script Node varre `simuladores/`, extrai metadados via funções puras testadas, deduplifica pares `-real`/simples, e gera `src/lib/simulators/catalog.ts` (commitado) + copia os HTMLs para `public/simuladores/` (gitignored, gerado no build). As rotas `/simuladores` (home RSC com prateleiras) e `/simuladores/[id]` (iframe fullscreen) leem o catálogo. Auth pelo layout do segmento.

**Tech Stack:** Next.js 15/16 App Router, TypeScript, Tailwind v4, Clerk (auth), vitest (testes).

## Global Constraints

- Next.js App Router; Server Components por padrão, `"use client"` só onde há interação.
- Auth: `const { userId } = await auth(); if (!userId) redirect("/login");` no layout do segmento (padrão de `src/app/(dashboard)/layout.tsx`), mais `if (user?.ativo === false) redirect("/conta-desativada")`.
- Testes: vitest, arquivos `*.test.ts` em `src/`, `environment: "node"`. Rodar com `npm test`.
- Estilo: Tailwind v4 com tokens semânticos (`bg-background`, `bg-surface`, `text-foreground`, `text-muted`, `border-border`); acento âmbar `#F59E0B`.
- Lint deve passar com 0 erros (CI roda `npm run lint`). Pastas `simuladores/` e `cursos-novos/` já estão no ignore do ESLint.
- Commits frequentes; conta git ativa deve ser `SMU-Prod` (`gh auth switch --user SMU-Prod` antes de push).

---

## File Structure

- `src/lib/simulators/parse.ts` — funções puras: `slugify`, `cleanTitle`, `deriveSegment`, `deriveNivel`, `deriveTipo`, `dedupe`. Sem I/O.
- `src/lib/simulators/parse.test.ts` — testes das funções puras.
- `src/lib/simulators/types.ts` — tipo `Simulator` e união `Segmento`.
- `src/lib/simulators/segments.ts` — metadados de exibição por segmento (label, cor, emoji/ícone).
- `src/lib/simulators/catalog.ts` — **gerado** pelo script; exporta `SIMULATORS: Simulator[]`.
- `scripts/build-simulator-catalog.mjs` — varre `simuladores/`, gera `catalog.ts`, copia HTMLs para `public/simuladores/`.
- `src/app/simuladores/layout.tsx` — auth guard do portal.
- `src/app/simuladores/page.tsx` — home (RSC): agrupa e passa ao browser client.
- `src/app/simuladores/[id]/page.tsx` — simulador em tela cheia.
- `src/components/simulators/simulator-card.tsx` — card com arte por segmento.
- `src/components/simulators/simulator-shelf.tsx` — prateleira (título de segmento + grid de cards).
- `src/components/simulators/simulator-browser.tsx` — `"use client"`: busca + filtros sobre o catálogo, renderiza shelves.
- `src/components/simulators/simulator-frame.tsx` — `"use client"`: iframe + botão Fullscreen API.

---

## Task 1: Funções puras de parse do catálogo

**Files:**
- Create: `src/lib/simulators/types.ts`
- Create: `src/lib/simulators/parse.ts`
- Test: `src/lib/simulators/parse.test.ts`

**Interfaces:**
- Produces:
  - `type Segmento = "som" | "luz" | "dj" | "video" | "producao" | "efeito"`
  - `type Simulator = { id: string; titulo: string; segmento: Segmento; nivel: "basico" | "avancado" | "legado"; tipo: "real" | "lab" | "sim"; arquivo: string }`
  - `slugify(s: string): string`
  - `cleanTitle(raw: string): string`
  - `deriveSegment(topFolder: string): Segmento`
  - `deriveNivel(topFolder: string): "basico" | "avancado" | "legado"`
  - `deriveTipo(basename: string): "real" | "lab" | "sim"`
  - `dedupe(entries: Simulator[]): Simulator[]`

- [ ] **Step 1: Write the types file**

Create `src/lib/simulators/types.ts`:

```ts
export type Segmento = "som" | "luz" | "dj" | "video" | "producao" | "efeito";

export type Simulator = {
  id: string;
  titulo: string;
  segmento: Segmento;
  nivel: "basico" | "avancado" | "legado";
  tipo: "real" | "lab" | "sim";
  arquivo: string; // caminho servido, ex: "/simuladores/som/yamaha-cl5-real.html"
};
```

- [ ] **Step 2: Write the failing test**

Create `src/lib/simulators/parse.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { slugify, cleanTitle, deriveSegment, deriveNivel, deriveTipo, dedupe } from "./parse";
import type { Simulator } from "./types";

describe("slugify", () => {
  it("normaliza para kebab-case sem acento", () => {
    expect(slugify("Yamaha CL5 — CL Editor")).toBe("yamaha-cl5-cl-editor");
    expect(slugify("Produção/Rider Técnico")).toBe("producao-rider-tecnico");
  });
});

describe("cleanTitle", () => {
  it("remove sufixos de marca do <title>", () => {
    expect(cleanTitle("CL Editor — Yamaha CL5 (Simulador SMU)")).toBe("CL Editor — Yamaha CL5");
    expect(cleanTitle("Simulador — grandMA3 (réplica funcional)")).toBe("grandMA3");
    expect(cleanTitle("SMU PRO · Briefing — as perguntas e os buracos")).toBe("Briefing — as perguntas e os buracos");
  });
  it("cai no fallback quando vazio", () => {
    expect(cleanTitle("")).toBe("Simulador");
  });
});

describe("deriveSegment", () => {
  it("mapeia pasta de topo para segmento", () => {
    expect(deriveSegment("som")).toBe("som");
    expect(deriveSegment("som-basico")).toBe("som");
    expect(deriveSegment("producao-legado")).toBe("producao");
    expect(deriveSegment("efeito-basico")).toBe("efeito");
  });
});

describe("deriveNivel", () => {
  it("deriva nível do sufixo da pasta", () => {
    expect(deriveNivel("som-basico")).toBe("basico");
    expect(deriveNivel("producao-legado")).toBe("legado");
    expect(deriveNivel("luz")).toBe("avancado");
  });
});

describe("deriveTipo", () => {
  it("deriva tipo do basename", () => {
    expect(deriveTipo("yamaha-cl5-real")).toBe("real");
    expect(deriveTipo("dj-etica-lab")).toBe("lab");
    expect(deriveTipo("grandma3")).toBe("sim");
  });
});

describe("dedupe", () => {
  it("mantém a versão -real quando há par real/simples do mesmo equipamento", () => {
    const entries: Simulator[] = [
      { id: "som-yamaha-cl5", titulo: "CL5", segmento: "som", nivel: "avancado", tipo: "sim", arquivo: "/simuladores/som/yamaha-cl5.html" },
      { id: "som-yamaha-cl5-real", titulo: "CL5", segmento: "som", nivel: "avancado", tipo: "real", arquivo: "/simuladores/som/yamaha-cl5-real.html" },
    ];
    const out = dedupe(entries);
    expect(out).toHaveLength(1);
    expect(out[0].tipo).toBe("real");
  });
  it("preserva simuladores sem par", () => {
    const entries: Simulator[] = [
      { id: "luz-grandma3", titulo: "grandMA3", segmento: "luz", nivel: "avancado", tipo: "sim", arquivo: "/simuladores/luz/grandma3.html" },
    ];
    expect(dedupe(entries)).toHaveLength(1);
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npx vitest run src/lib/simulators/parse.test.ts`
Expected: FAIL — "Cannot find module './parse'".

- [ ] **Step 4: Write the implementation**

Create `src/lib/simulators/parse.ts`:

```ts
import type { Segmento, Simulator } from "./types";

export function slugify(s: string): string {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// Remove ruído de marca dos <title>: sufixos "(… SMU …)", "(réplica…)",
// prefixos "SMU PRO ·", e "Simulador —"/"— Simulador".
export function cleanTitle(raw: string): string {
  let t = (raw ?? "").trim();
  t = t.replace(/^SMU\s*PRO\s*·\s*/i, "");
  t = t.replace(/\((?:[^)]*\bSMU\b[^)]*|réplica[^)]*)\)\s*$/i, "").trim();
  t = t.replace(/^simulador\s*[—-]\s*/i, "").trim();
  t = t.replace(/\s*[—-]\s*simulador$/i, "").trim();
  return t || "Simulador";
}

export function deriveSegment(topFolder: string): Segmento {
  const base = topFolder.replace(/-(basico|legado)$/i, "");
  const map: Record<string, Segmento> = {
    som: "som", luz: "luz", dj: "dj", video: "video", producao: "producao", efeito: "efeito",
  };
  return map[base] ?? "producao";
}

export function deriveNivel(topFolder: string): "basico" | "avancado" | "legado" {
  if (/-basico$/i.test(topFolder)) return "basico";
  if (/-legado$/i.test(topFolder)) return "legado";
  return "avancado";
}

export function deriveTipo(basename: string): "real" | "lab" | "sim" {
  if (/-real$/i.test(basename)) return "real";
  if (/-lab$/i.test(basename)) return "lab";
  return "sim";
}

// Deduplica pares "x.html" e "x-real.html" do mesmo equipamento: mantém o -real.
export function dedupe(entries: Simulator[]): Simulator[] {
  const realBases = new Set(
    entries
      .filter((e) => e.tipo === "real")
      .map((e) => e.arquivo.replace(/-real\.html$/i, "")),
  );
  return entries.filter((e) => {
    if (e.tipo === "real") return true;
    const base = e.arquivo.replace(/\.html$/i, "");
    return !realBases.has(base);
  });
}
```

- [ ] **Step 5: Run test to verify it passes**

Run: `npx vitest run src/lib/simulators/parse.test.ts`
Expected: PASS (todos os testes verdes).

- [ ] **Step 6: Commit**

```bash
git add src/lib/simulators/types.ts src/lib/simulators/parse.ts src/lib/simulators/parse.test.ts
git commit -m "feat(simuladores): funcoes puras de parse do catalogo"
```

---

## Task 2: Script gerador do catálogo + cópia para public

**Files:**
- Create: `scripts/build-simulator-catalog.mjs`
- Create (gerado pelo script): `src/lib/simulators/catalog.ts`
- Modify: `.gitignore` (adicionar `public/simuladores/`)
- Modify: `package.json` (scripts `catalog` e `prebuild`)

**Interfaces:**
- Consumes: `slugify`, `cleanTitle`, `deriveSegment`, `deriveNivel`, `deriveTipo`, `dedupe` de `src/lib/simulators/parse.ts` (reimplementadas em JS no script, pois `.mjs` não importa `.ts` sem loader — manter idênticas; a versão testada é a de `parse.ts`, a do script é a operacional).
- Produces: `src/lib/simulators/catalog.ts` exportando `export const SIMULATORS: Simulator[]` ordenado por segmento e título.

- [ ] **Step 1: Write the script**

Create `scripts/build-simulator-catalog.mjs`:

```js
import { readdirSync, statSync, readFileSync, writeFileSync, mkdirSync, rmSync, cpSync } from "node:fs";
import { join, relative, basename, sep } from "node:path";

const ROOT = process.cwd();
const SRC_DIR = join(ROOT, "simuladores");
const PUBLIC_DIR = join(ROOT, "public", "simuladores");
const OUT_TS = join(ROOT, "src", "lib", "simulators", "catalog.ts");

function slugify(s) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function cleanTitle(raw) {
  let t = (raw ?? "").trim();
  t = t.replace(/^SMU\s*PRO\s*·\s*/i, "");
  t = t.replace(/\((?:[^)]*\bSMU\b[^)]*|réplica[^)]*)\)\s*$/i, "").trim();
  t = t.replace(/^simulador\s*[—-]\s*/i, "").trim();
  t = t.replace(/\s*[—-]\s*simulador$/i, "").trim();
  return t || "Simulador";
}
function deriveSegment(top) {
  const base = top.replace(/-(basico|legado)$/i, "");
  return ({ som: "som", luz: "luz", dj: "dj", video: "video", producao: "producao", efeito: "efeito" })[base] ?? "producao";
}
function deriveNivel(top) {
  if (/-basico$/i.test(top)) return "basico";
  if (/-legado$/i.test(top)) return "legado";
  return "avancado";
}
function deriveTipo(name) {
  if (/-real$/i.test(name)) return "real";
  if (/-lab$/i.test(name)) return "lab";
  return "sim";
}
function dedupe(entries) {
  const realBases = new Set(entries.filter((e) => e.tipo === "real").map((e) => e.arquivo.replace(/-real\.html$/i, "")));
  return entries.filter((e) => e.tipo === "real" ? true : !realBases.has(e.arquivo.replace(/\.html$/i, "")));
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".html") && !name.startsWith("_")) out.push(full);
  }
  return out;
}

const files = walk(SRC_DIR);
const entries = [];
for (const full of files) {
  const rel = relative(SRC_DIR, full).split(sep).join("/"); // ex: "som/yamaha-cl5-real.html"
  const top = rel.split("/")[0];
  const name = basename(rel, ".html");
  const html = readFileSync(full, "utf8");
  const m = html.match(/<title>([^<]*)<\/title>/i);
  const titulo = cleanTitle(m ? m[1] : name);
  const segmento = deriveSegment(top);
  entries.push({
    id: slugify(`${segmento}-${name}`),
    titulo,
    segmento,
    nivel: deriveNivel(top),
    tipo: deriveTipo(name),
    arquivo: `/simuladores/${rel}`,
  });
}

const deduped = dedupe(entries).sort(
  (a, b) => a.segmento.localeCompare(b.segmento) || a.titulo.localeCompare(b.titulo),
);

// 1) Gera o catálogo TS
const header = `// GERADO por scripts/build-simulator-catalog.mjs — não editar à mão.\n` +
  `import type { Simulator } from "./types";\n\n` +
  `export const SIMULATORS: Simulator[] = ${JSON.stringify(deduped, null, 2)};\n`;
mkdirSync(join(ROOT, "src", "lib", "simulators"), { recursive: true });
writeFileSync(OUT_TS, header);

// 2) Copia os HTMLs para public/ (servidos estáticos)
rmSync(PUBLIC_DIR, { recursive: true, force: true });
mkdirSync(PUBLIC_DIR, { recursive: true });
cpSync(SRC_DIR, PUBLIC_DIR, { recursive: true });

console.log(`[catalog] ${deduped.length} simuladores (de ${entries.length} arquivos) → catalog.ts + public/simuladores/`);
```

- [ ] **Step 2: Add npm scripts and gitignore**

In `package.json`, add to `"scripts"`:

```json
"catalog": "node scripts/build-simulator-catalog.mjs",
"prebuild": "node scripts/build-simulator-catalog.mjs"
```

Append to `.gitignore`:

```
# Simuladores copiados para servir estático (gerados no build)
/public/simuladores/
```

- [ ] **Step 3: Run the script**

Run: `npm run catalog`
Expected: imprime `[catalog] ~155 simuladores (de ~176 arquivos) → catalog.ts + public/simuladores/`; cria `src/lib/simulators/catalog.ts` e popula `public/simuladores/`.

- [ ] **Step 4: Verify catalog compiles and looks right**

Run: `npm run typecheck`
Expected: PASS (catalog.ts é TS válido).
Run: `node -e "import('./src/lib/simulators/catalog.ts').catch(()=>{})"` não é necessário; inspecionar: `head -30 src/lib/simulators/catalog.ts` deve mostrar entradas com id/titulo/segmento.

- [ ] **Step 5: Commit** (catalog.ts é commitado; public/simuladores/ é gitignored)

```bash
git add scripts/build-simulator-catalog.mjs package.json .gitignore src/lib/simulators/catalog.ts
git commit -m "feat(simuladores): script gerador do catalogo + copia para public"
```

---

## Task 3: Metadados de exibição por segmento

**Files:**
- Create: `src/lib/simulators/segments.ts`

**Interfaces:**
- Consumes: `Segmento` de `./types`.
- Produces: `SEGMENT_META: Record<Segmento, { label: string; emoji: string; gradient: string }>` e `SEGMENT_ORDER: Segmento[]`.

- [ ] **Step 1: Write the file**

Create `src/lib/simulators/segments.ts`:

```ts
import type { Segmento } from "./types";

export const SEGMENT_ORDER: Segmento[] = ["som", "luz", "dj", "video", "producao", "efeito"];

export const SEGMENT_META: Record<Segmento, { label: string; emoji: string; gradient: string }> = {
  som:      { label: "Sonorização", emoji: "🎚", gradient: "from-amber-500/30 to-amber-700/10" },
  luz:      { label: "Iluminação",  emoji: "💡", gradient: "from-blue-500/30 to-indigo-700/10" },
  dj:       { label: "DJ",          emoji: "🎛", gradient: "from-fuchsia-500/30 to-purple-700/10" },
  video:    { label: "Vídeo",       emoji: "📺", gradient: "from-cyan-500/30 to-teal-700/10" },
  producao: { label: "Produção",    emoji: "📋", gradient: "from-emerald-500/30 to-green-700/10" },
  efeito:   { label: "Efeitos",     emoji: "🎆", gradient: "from-red-500/30 to-orange-700/10" },
};
```

- [ ] **Step 2: Verify typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/lib/simulators/segments.ts
git commit -m "feat(simuladores): metadados de exibicao por segmento"
```

---

## Task 4: Layout autenticado do portal

**Files:**
- Create: `src/app/simuladores/layout.tsx`

**Interfaces:**
- Consumes: `auth` de `@clerk/nextjs/server`, `getCurrentUser` de `@/lib/actions/users`.

- [ ] **Step 1: Write the layout**

Create `src/app/simuladores/layout.tsx`:

```tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/actions/users";

export default async function SimuladoresLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) redirect("/login");

  const user = await getCurrentUser();
  if (user && user.ativo === false) redirect("/conta-desativada");

  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
```

- [ ] **Step 2: Verify build compiles the route**

Run: `npm run build`
Expected: aparece `/simuladores` na lista de rotas; sem erro. (A page ainda não existe — se o build exigir page, avança para Task 6 antes de buildar; typecheck basta aqui: `npm run typecheck` PASS.)

- [ ] **Step 3: Commit**

```bash
git add src/app/simuladores/layout.tsx
git commit -m "feat(simuladores): layout autenticado do portal"
```

---

## Task 5: SimulatorCard (arte por segmento)

**Files:**
- Create: `src/components/simulators/simulator-card.tsx`

**Interfaces:**
- Consumes: `Simulator` de `@/lib/simulators/types`, `SEGMENT_META` de `@/lib/simulators/segments`.
- Produces: `<SimulatorCard sim={Simulator} />` — um `<Link href={/simuladores/${sim.id}}>`.

- [ ] **Step 1: Write the component**

Create `src/components/simulators/simulator-card.tsx`:

```tsx
import Link from "next/link";
import type { Simulator } from "@/lib/simulators/types";
import { SEGMENT_META } from "@/lib/simulators/segments";

const TIPO_LABEL: Record<Simulator["tipo"], string> = { real: "Réplica fiel", lab: "Laboratório", sim: "Simulador" };
const NIVEL_LABEL: Record<Simulator["nivel"], string> = { basico: "Básico", avancado: "Avançado", legado: "Legado" };

export function SimulatorCard({ sim }: { sim: Simulator }) {
  const meta = SEGMENT_META[sim.segmento];
  return (
    <Link
      href={`/simuladores/${sim.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-amber-500/50"
    >
      <div className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${meta.gradient}`}>
        <span className="text-4xl opacity-80" aria-hidden="true">{meta.emoji}</span>
        {sim.tipo === "real" && (
          <span className="absolute right-2 top-2 rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold text-black">
            RÉPLICA FIEL
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <h3 className="line-clamp-2 text-sm font-semibold text-foreground group-hover:text-amber-400">{sim.titulo}</h3>
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1 text-[11px] text-muted">
          <span>{meta.label}</span><span>·</span><span>{NIVEL_LABEL[sim.nivel]}</span><span>·</span><span>{TIPO_LABEL[sim.tipo]}</span>
        </div>
      </div>
    </Link>
  );
}
```

- [ ] **Step 2: Verify typecheck**

Run: `npm run typecheck`
Expected: PASS.

- [ ] **Step 3: Commit**

```bash
git add src/components/simulators/simulator-card.tsx
git commit -m "feat(simuladores): card com arte por segmento"
```

---

## Task 6: Home do portal com prateleiras + shelf

**Files:**
- Create: `src/components/simulators/simulator-shelf.tsx`
- Create: `src/app/simuladores/page.tsx`

**Interfaces:**
- Consumes: `SIMULATORS` de `@/lib/simulators/catalog`, `SEGMENT_ORDER`/`SEGMENT_META` de `@/lib/simulators/segments`, `SimulatorCard`.
- Produces: `<SimulatorShelf segmento title sims />`; a rota `/simuladores`.

- [ ] **Step 1: Write the shelf**

Create `src/components/simulators/simulator-shelf.tsx`:

```tsx
import type { Simulator } from "@/lib/simulators/types";
import { SimulatorCard } from "./simulator-card";

export function SimulatorShelf({ title, sims }: { title: string; sims: Simulator[] }) {
  if (sims.length === 0) return null;
  return (
    <section className="mb-10">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-foreground">
        {title} <span className="text-sm font-normal text-muted">({sims.length})</span>
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {sims.map((s) => <SimulatorCard key={s.id} sim={s} />)}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write the home page (static shelves first — filters come in Task 8)**

Create `src/app/simuladores/page.tsx`:

```tsx
import type { Metadata } from "next";
import { SIMULATORS } from "@/lib/simulators/catalog";
import { SEGMENT_ORDER, SEGMENT_META } from "@/lib/simulators/segments";
import { SimulatorShelf } from "@/components/simulators/simulator-shelf";

export const metadata: Metadata = { title: "Simuladores — SMU PRO" };

export default function SimuladoresPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Simuladores</h1>
        <p className="mt-1 text-muted">Opere consoles, mesas e equipamentos reais direto do navegador.</p>
      </header>
      {SEGMENT_ORDER.map((seg) => (
        <SimulatorShelf
          key={seg}
          title={SEGMENT_META[seg].label}
          sims={SIMULATORS.filter((s) => s.segmento === seg)}
        />
      ))}
    </div>
  );
}
```

- [ ] **Step 3: Build and verify the route renders**

Run: `npm run build`
Expected: `/simuladores` na lista de rotas, sem erro.

- [ ] **Step 4: Manual check in dev**

Run: `npm run dev`, abrir `http://localhost:3000/simuladores` logado.
Expected: prateleiras por segmento com cards; visitante deslogado é redirecionado a `/login`.

- [ ] **Step 5: Commit**

```bash
git add src/components/simulators/simulator-shelf.tsx src/app/simuladores/page.tsx
git commit -m "feat(simuladores): home do portal com prateleiras por segmento"
```

---

## Task 7: Rota do simulador em tela cheia

**Files:**
- Create: `src/components/simulators/simulator-frame.tsx`
- Create: `src/app/simuladores/[id]/page.tsx`

**Interfaces:**
- Consumes: `SIMULATORS` de `@/lib/simulators/catalog`.
- Produces: rota `/simuladores/[id]`; `<SimulatorFrame src titulo />`.

- [ ] **Step 1: Write the frame (client, Fullscreen API)**

Create `src/components/simulators/simulator-frame.tsx`:

```tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Maximize } from "lucide-react";

export function SimulatorFrame({ src, titulo }: { src: string; titulo: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  const goFullscreen = () => {
    const el = wrapRef.current;
    if (el?.requestFullscreen) el.requestFullscreen().catch(() => {});
  };

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2">
        <Link href="/simuladores" className="flex items-center gap-1.5 text-sm text-muted hover:text-foreground">
          <ArrowLeft size={16} /> Voltar
        </Link>
        <span className="truncate text-sm font-medium text-foreground">{titulo}</span>
        <button
          onClick={goFullscreen}
          className="ml-auto flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-muted hover:text-foreground"
        >
          <Maximize size={15} /> Tela cheia
        </button>
      </div>
      <div ref={wrapRef} className="relative flex-1 bg-black">
        <iframe
          src={src}
          title={titulo}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; microphone; camera; midi"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-pointer-lock"
        />
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write the route page**

Create `src/app/simuladores/[id]/page.tsx`:

```tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SIMULATORS } from "@/lib/simulators/catalog";
import { SimulatorFrame } from "@/components/simulators/simulator-frame";

export function generateStaticParams() {
  return SIMULATORS.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const sim = SIMULATORS.find((s) => s.id === id);
  return { title: sim ? `${sim.titulo} — Simulador SMU` : "Simulador — SMU PRO" };
}

export default async function SimuladorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sim = SIMULATORS.find((s) => s.id === id);
  if (!sim) notFound();
  return <SimulatorFrame src={sim.arquivo} titulo={sim.titulo} />;
}
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: `/simuladores/[id]` na lista; sem erro.

- [ ] **Step 4: Manual check**

Run: `npm run dev`, abrir um card na home → deve carregar o simulador ocupando a tela; botão "Tela cheia" entra em fullscreen; "Voltar" retorna à home.

- [ ] **Step 5: Commit**

```bash
git add src/components/simulators/simulator-frame.tsx "src/app/simuladores/[id]/page.tsx"
git commit -m "feat(simuladores): rota do simulador em tela cheia"
```

---

## Task 8: Busca e filtros (client)

**Files:**
- Create: `src/components/simulators/simulator-browser.tsx`
- Modify: `src/app/simuladores/page.tsx` (usar o browser client em vez das shelves estáticas)

**Interfaces:**
- Consumes: `SIMULATORS`, `SEGMENT_ORDER`/`SEGMENT_META`, `SimulatorShelf`.
- Produces: `<SimulatorBrowser sims={Simulator[]} />`.

- [ ] **Step 1: Write the browser component**

Create `src/components/simulators/simulator-browser.tsx`:

```tsx
"use client";

import { useMemo, useState } from "react";
import type { Simulator, Segmento } from "@/lib/simulators/types";
import { SEGMENT_ORDER, SEGMENT_META } from "@/lib/simulators/segments";
import { SimulatorShelf } from "./simulator-shelf";

const NIVEIS: Simulator["nivel"][] = ["basico", "avancado", "legado"];
const NIVEL_LABEL: Record<Simulator["nivel"], string> = { basico: "Básico", avancado: "Avançado", legado: "Legado" };

export function SimulatorBrowser({ sims }: { sims: Simulator[] }) {
  const [q, setQ] = useState("");
  const [nivel, setNivel] = useState<Simulator["nivel"] | "todos">("todos");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    return sims.filter((s) => {
      if (nivel !== "todos" && s.nivel !== nivel) return false;
      if (term && !s.titulo.toLowerCase().includes(term)) return false;
      return true;
    });
  }, [sims, q, nivel]);

  const bySeg = (seg: Segmento) => filtered.filter((s) => s.segmento === seg);
  const total = filtered.length;

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Buscar simulador…"
          className="w-full max-w-xs rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground placeholder:text-muted"
        />
        <div className="flex gap-1.5">
          <button
            onClick={() => setNivel("todos")}
            className={`rounded-lg border px-3 py-1.5 text-sm ${nivel === "todos" ? "border-amber-500 text-amber-400" : "border-border text-muted"}`}
          >Todos</button>
          {NIVEIS.map((n) => (
            <button
              key={n}
              onClick={() => setNivel(n)}
              className={`rounded-lg border px-3 py-1.5 text-sm ${nivel === n ? "border-amber-500 text-amber-400" : "border-border text-muted"}`}
            >{NIVEL_LABEL[n]}</button>
          ))}
        </div>
      </div>
      {total === 0 ? (
        <p className="py-16 text-center text-muted">Nenhum simulador encontrado.</p>
      ) : (
        SEGMENT_ORDER.map((seg) => (
          <SimulatorShelf key={seg} title={SEGMENT_META[seg].label} sims={bySeg(seg)} />
        ))
      )}
    </div>
  );
}
```

- [ ] **Step 2: Wire the browser into the page**

Replace the shelves loop in `src/app/simuladores/page.tsx` with the browser. New file body:

```tsx
import type { Metadata } from "next";
import { SIMULATORS } from "@/lib/simulators/catalog";
import { SimulatorBrowser } from "@/components/simulators/simulator-browser";

export const metadata: Metadata = { title: "Simuladores — SMU PRO" };

export default function SimuladoresPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Simuladores</h1>
        <p className="mt-1 text-muted">Opere consoles, mesas e equipamentos reais direto do navegador.</p>
      </header>
      <SimulatorBrowser sims={SIMULATORS} />
    </div>
  );
}
```

- [ ] **Step 3: Build and verify**

Run: `npm run build`
Expected: sem erro; typecheck PASS.

- [ ] **Step 4: Manual check**

Run: `npm run dev`, abrir `/simuladores`: busca filtra por título ao vivo; botões de nível filtram; "Nenhum simulador encontrado" aparece quando o filtro zera.

- [ ] **Step 5: Commit**

```bash
git add src/components/simulators/simulator-browser.tsx src/app/simuladores/page.tsx
git commit -m "feat(simuladores): busca e filtros na home"
```

---

## Task 9: Link do portal no menu do dashboard

**Files:**
- Modify: `src/components/layout/sidebar.tsx` (adicionar item "Simuladores" à navegação)

**Interfaces:**
- Consumes: o padrão de itens de nav existente no sidebar.

- [ ] **Step 1: Inspect the nav pattern**

Run: `grep -n "href\|nav\|Link\|icon" src/components/layout/sidebar.tsx | head -30`
Expected: mostra a lista de itens de navegação (label, href, ícone) — seguir exatamente esse formato.

- [ ] **Step 2: Add the "Simuladores" item**

Adicionar um item de nav apontando para `/simuladores` com um ícone do `lucide-react` (ex: `Gamepad2`), seguindo o formato exato encontrado no Step 1 (mesma estrutura de objeto/JSX dos itens vizinhos). Não inventar um formato novo.

- [ ] **Step 3: Verify**

Run: `npm run typecheck && npm run lint`
Expected: PASS, 0 erros de lint.

- [ ] **Step 4: Manual check**

Run: `npm run dev`: item "Simuladores" aparece no menu e leva a `/simuladores`.

- [ ] **Step 5: Commit**

```bash
git add src/components/layout/sidebar.tsx
git commit -m "feat(simuladores): link do portal no menu"
```

---

## Verificação final (após todas as tasks)

- [ ] `npm run typecheck` — PASS
- [ ] `npm test` — todos verdes (inclui `parse.test.ts`)
- [ ] `npm run lint` — 0 erros
- [ ] `npm run build` — sem erro; `/simuladores` e `/simuladores/[id]` presentes
- [ ] Validação visual no navegador: home com prateleiras + busca/filtros; abrir um simulador em tela cheia; fullscreen real; voltar; deslogado redireciona a `/login`
- [ ] Medir peso: `du -sh public/simuladores` — registrar; se muito grande, avaliar no futuro

## Notas de execução

- `public/simuladores/` é gerado por `npm run catalog`/`prebuild` e gitignored — nunca commitar.
- `src/lib/simulators/catalog.ts` é gerado mas **commitado** (o TypeScript precisa dele em build/typecheck).
- Ao adicionar novos simuladores em `simuladores/`, rodar `npm run catalog` e commitar o `catalog.ts` atualizado.
- Simuladores quebrados aparecem quebrados — qualidade é o projeto #3 (auditoria), fora do escopo deste plano.
