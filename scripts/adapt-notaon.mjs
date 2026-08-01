// scripts/adapt-notaon.mjs
// Adapta os 504 capítulos do notaon-preparatorio para o SMU PRO.
// Execução: node scripts/adapt-notaon.mjs
//
// O que faz:
//   1. Para cada disciplina → cada capítulo:
//      - Copia Cap{NN}Page.tsx para src/lib/notaon/content/{subj}/cap{NN}/
//      - Substitui imports de Exercise e M
//      - Adiciona "use client"; se ausente
//   2. Gera src/lib/notaon/registry/{subject}.ts (loaders por capítulo)
//   3. Gera src/lib/notaon/registry/index.ts (mapa disciplina → loader)
//   4. Gera supabase/migrations/20260730_notaon_cursos.sql
//
// Registre as faixas abaixo em cursos-novos/_REGISTRO-IDS.mjs antes de aplicar o SQL.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
const CONTENT_DST = path.resolve(ROOT, "src/lib/notaon/content");
const REGISTRY_DST = path.resolve(ROOT, "src/lib/notaon/registry");
const MIGS_DST = path.resolve(ROOT, "supabase/migrations");
const CONTENT_SRC = "/home/neimerk/notaon-preparatorio/src/content";

// ── Faixas por disciplina ──────────────────────────────────────────────────
// Cada prefixo de 3 hex → id base = "{prefix}00000" (8 chars) = faixa completa.
// course: {prefix}00000-0000-4000-9000-000000000000
// module N: {prefix}00000-0000-4000-9000-{NN padded 12 digits}  (N = 01..99)
// lesson capNum: {prefix}00000-0000-4000-9000-{100+capNum padded 12 digits}
const DISCIPLINES = {
  biologia:   { prefix: "9f1", label: "Biologia",   slug: "preparatorio-biologia"   },
  espanhol:   { prefix: "6a1", label: "Espanhol",   slug: "preparatorio-espanhol"   },
  filosofia:  { prefix: "6b1", label: "Filosofia",  slug: "preparatorio-filosofia"  },
  fisica:     { prefix: "6c1", label: "Física",     slug: "preparatorio-fisica"     },
  geografia:  { prefix: "6d1", label: "Geografia",  slug: "preparatorio-geografia"  },
  historia:   { prefix: "6e1", label: "História",   slug: "preparatorio-historia"   },
  ingles:     { prefix: "aa1", label: "Inglês",     slug: "preparatorio-ingles"     },
  matematica: { prefix: "ab1", label: "Matemática", slug: "preparatorio-matematica" },
  portugues:  { prefix: "ac1", label: "Português",  slug: "preparatorio-portugues"  },
  quimica:    { prefix: "ad1", label: "Química",    slug: "preparatorio-quimica"    },
  redacao:    { prefix: "ae1", label: "Redação",    slug: "preparatorio-redacao"    },
  sociologia: { prefix: "af1", label: "Sociologia", slug: "preparatorio-sociologia" },
};

// ── ID helpers ─────────────────────────────────────────────────────────────
const pad = (n, len = 12) => String(n).padStart(len, "0");
const base = (prefix) => `${prefix}00000`;
const courseId = (prefix) => `${base(prefix)}-0000-4000-9000-${pad(0)}`;
const moduleId = (prefix, n) => `${base(prefix)}-0000-4000-9000-${pad(n)}`;
const lessonId = (prefix, capNum) => `${base(prefix)}-0000-4000-9000-${pad(100 + capNum)}`;

// ── Meta extraction ────────────────────────────────────────────────────────
function extractMeta(content) {
  const modulo = parseInt(content.match(/modulo:\s*(\d+)/)?.[1] ?? "1", 10);
  const titulo = content.match(/titulo:\s*"([^"]+)"/)?.[1] ?? "";
  const slug = content.match(/slug:\s*"([^"]+)"/)?.[1] ?? "";
  const id = content.match(/\bid:\s*"([^"]+)"/)?.[1] ?? "";
  return { id, modulo, titulo, slug };
}

function cleanTitle(titulo) {
  // Remove leading emoji and whitespace
  let t = titulo.replace(/^[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{1F000}-\u{1F02F}\s✍📖📚]+/u, "").trim();
  // Remove "Capítulo N — " or "Aula N — " prefix
  t = t.replace(/^(?:Capítulo|Aula)\s+\d+\s*[—–\-]\s*/i, "").trim();
  return t || titulo;
}

// ── Page adaptation ────────────────────────────────────────────────────────
function adaptPage(content) {
  let out = content;
  // Replace Exercise import (any path)
  out = out.replace(
    /import\s+Exercise\s+from\s+['"][^'"]+['"]\s*;?\s*\n/g,
    'import { ExerciseCard as Exercise } from "@/lib/notaon/components/ExerciseCard";\n'
  );
  // Replace M import (any path)
  out = out.replace(
    /import\s+M\s+from\s+['"][^'"]+['"]\s*;?\s*\n/g,
    'import { MathFormula as M } from "@/lib/notaon/components/MathFormula";\n'
  );
  // Add "use client"; if not present
  if (!out.includes('"use client"') && !out.includes("'use client'")) {
    out = '"use client";\n' + out;
  }
  return out;
}

// ── File system helpers ────────────────────────────────────────────────────
function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function write(file, content) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, content, "utf8");
}

// ── SQL helpers ────────────────────────────────────────────────────────────
function sqlStr(s) {
  return "'" + s.replace(/'/g, "''") + "'";
}
function sqlArr(arr) {
  return "ARRAY[" + arr.map(sqlStr).join(",") + "]";
}

// ══════════════════════════════════════════════════════════════════════════
// MAIN
// ══════════════════════════════════════════════════════════════════════════

console.log("🚀  adapt-notaon — iniciando...\n");

/** allData[subject] = Array<{ capNum, modulo, titulo, slug, srcMeta }> */
const allData = {};

for (const [subject, disc] of Object.entries(DISCIPLINES)) {
  const subjSrc = path.join(CONTENT_SRC, subject);
  if (!fs.existsSync(subjSrc)) {
    console.warn(`  ⚠️  Fonte não encontrada: ${subjSrc}`);
    continue;
  }

  const caps = fs.readdirSync(subjSrc)
    .filter((d) => /^cap\d+$/.test(d))
    .sort();

  const subjectData = [];
  let copied = 0;

  for (const capDir of caps) {
    const capMatch = capDir.match(/^cap(\d+)$/);
    if (!capMatch) continue;
    const capNum = parseInt(capMatch[1], 10);
    const capStr = capDir; // e.g. "cap01"
    const pageFile = `Cap${capStr.slice(3).padStart(2, "0").charAt(0).toUpperCase()}${capStr.slice(4)}Page.tsx`;
    // Build proper filename: cap01 → Cap01Page.tsx
    const nn = String(capNum).padStart(2, "0");
    const pageFileName = `Cap${nn}Page.tsx`;
    const metaFileName = `meta.ts`;

    const srcPage = path.join(subjSrc, capDir, pageFileName);
    const srcMeta = path.join(subjSrc, capDir, metaFileName);

    if (!fs.existsSync(srcPage)) {
      console.warn(`  ⚠️  Não encontrado: ${srcPage}`);
      continue;
    }
    if (!fs.existsSync(srcMeta)) {
      console.warn(`  ⚠️  Meta não encontrado: ${srcMeta}`);
      continue;
    }

    const metaContent = fs.readFileSync(srcMeta, "utf8");
    const meta = extractMeta(metaContent);

    const pageContent = fs.readFileSync(srcPage, "utf8");
    const adapted = adaptPage(pageContent);

    const dstDir = path.join(CONTENT_DST, subject, `cap${nn}`);
    write(path.join(dstDir, pageFileName), adapted);
    copied++;

    subjectData.push({ capNum, modulo: meta.modulo, titulo: meta.titulo, slug: meta.slug });
  }

  allData[subject] = subjectData;
  console.log(`  ✓  ${disc.label.padEnd(12)} ${copied} caps copiados`);
}

// ── Generate registry/{subject}.ts ────────────────────────────────────────
console.log("\n📦  Gerando registry files...");

for (const [subject, caps] of Object.entries(allData)) {
  if (!caps.length) continue;

  const lines = [
    `// Auto-generated by scripts/adapt-notaon.mjs — do not edit.`,
    `import type { ComponentType } from "react";`,
    ``,
    `const reg: Record<number, () => Promise<{ default: ComponentType }>> = {`,
  ];

  for (const { capNum } of caps) {
    const nn = String(capNum).padStart(2, "0");
    lines.push(`  ${capNum}: () => import("../content/${subject}/cap${nn}/Cap${nn}Page"),`);
  }

  lines.push(`};`);
  lines.push(`export default reg;`);

  write(path.join(REGISTRY_DST, `${subject}.ts`), lines.join("\n") + "\n");
}

// ── Generate registry/index.ts ─────────────────────────────────────────────
const indexLines = [
  `// Auto-generated by scripts/adapt-notaon.mjs — do not edit.`,
  `import type { ComponentType } from "react";`,
  ``,
  `export type NotaonCapLoader = () => Promise<{ default: ComponentType }>;`,
  `export type NotaonSubjectReg = Record<number, NotaonCapLoader>;`,
  ``,
  `export const NOTAON_LOADERS: Record<string, () => Promise<{ default: NotaonSubjectReg }>> = {`,
];

for (const subject of Object.keys(allData)) {
  if (allData[subject].length) {
    indexLines.push(`  ${subject}: () => import("./${subject}"),`);
  }
}

indexLines.push(`};`);
write(path.join(REGISTRY_DST, "index.ts"), indexLines.join("\n") + "\n");
console.log("  ✓  registry/index.ts");

// ── Generate SQL migration ─────────────────────────────────────────────────
console.log("\n🗄️   Gerando SQL migration...");

const sql = [];
sql.push(`-- ====================================================================`);
sql.push(`-- SMU PRO — NOTA ON Preparatório: 12 disciplinas, 504 capítulos`);
sql.push(`-- Gerado por scripts/adapt-notaon.mjs — ${new Date().toISOString().slice(0, 10)}`);
sql.push(`--`);
sql.push(`-- Cada aula tem pdf_path = 'notaon:{subject}:{capNum}'`);
sql.push(`-- O lesson-player detecta o prefixo "notaon:" e renderiza o componente JSX.`);
sql.push(`-- Cursos criados com ativo=false — ative manualmente no admin após revisar.`);
sql.push(`-- ====================================================================`);
sql.push(`begin;`);
sql.push(``);

for (const [subject, caps] of Object.entries(allData)) {
  if (!caps.length) continue;
  const disc = DISCIPLINES[subject];
  const { prefix, label, slug } = disc;
  const cId = courseId(prefix);
  const totalCaps = caps.length;
  const cargaMin = totalCaps * 20;
  const descCurta = `NOTA ON — Preparatório ENEM e Vestibular: ${label} completa em ${totalCaps} capítulos com exercícios interativos.`;

  sql.push(`-- ── ${label.toUpperCase()} ─────────────────────────────────────────────────────`);
  sql.push(`insert into public.courses (id, titulo, slug, nivel, categoria, categorias, tipo, descricao_curta, total_aulas, carga_horaria, ativo, destaque, ordem)`);
  sql.push(`values (`);
  sql.push(`  ${sqlStr(cId)},`);
  sql.push(`  ${sqlStr(`NOTA ON — ${label}`)},`);
  sql.push(`  ${sqlStr(slug)},`);
  sql.push(`  'trainee', 'outros', ${sqlArr(["tecnico", "preparatorio"])},`);
  sql.push(`  'pago', ${sqlStr(descCurta)},`);
  sql.push(`  ${totalCaps}, ${cargaMin}, false, false, 200`);
  sql.push(`) on conflict (id) do nothing;`);
  sql.push(``);

  // Group caps by modulo
  const moduloMap = new Map(); // modulo -> [{capNum, titulo, slug}]
  for (const cap of caps) {
    if (!moduloMap.has(cap.modulo)) moduloMap.set(cap.modulo, []);
    moduloMap.get(cap.modulo).push(cap);
  }

  // Modules (sorted by modulo number)
  const modulos = [...moduloMap.keys()].sort((a, b) => a - b);

  for (const modNum of modulos) {
    const mId = moduleId(prefix, modNum);
    sql.push(`insert into public.modules (id, course_id, titulo, ordem)`);
    sql.push(`values (${sqlStr(mId)}, ${sqlStr(cId)}, ${sqlStr(`Módulo ${modNum} — ${label}`)}, ${modNum})`);
    sql.push(`on conflict (id) do nothing;`);
  }
  sql.push(``);

  // Lessons
  for (const modNum of modulos) {
    const mId = moduleId(prefix, modNum);
    const capList = moduloMap.get(modNum);
    let ordemWithinMod = 1;
    for (const cap of capList) {
      const lId = lessonId(prefix, cap.capNum);
      const titulo = cleanTitle(cap.titulo) || `Capítulo ${cap.capNum}`;
      const isFirst = cap.capNum === 1;
      const pdfPath = `notaon:${subject}:${cap.capNum}`;
      sql.push(`insert into public.lessons (id, module_id, titulo, tipo, pdf_path, duracao_min, ordem, tem_quiz, preview_gratis)`);
      sql.push(`values (${sqlStr(lId)}, ${sqlStr(mId)}, ${sqlStr(titulo)}, 'texto', ${sqlStr(pdfPath)}, 20, ${ordemWithinMod}, false, ${isFirst})`);
      sql.push(`on conflict (id) do nothing;`);
      ordemWithinMod++;
    }
  }
  sql.push(``);

  // Update total_aulas
  sql.push(`update public.courses set total_aulas = ${totalCaps} where id = ${sqlStr(cId)};`);
  sql.push(``);
}

sql.push(`commit;`);

const migFile = path.join(MIGS_DST, "20260730_notaon_cursos.sql");
write(migFile, sql.join("\n") + "\n");
console.log(`  ✓  ${migFile}`);

// ── Summary ────────────────────────────────────────────────────────────────
const totalCaps = Object.values(allData).reduce((s, a) => s + a.length, 0);
console.log(`\n✅  Concluído!`);
console.log(`   ${Object.keys(allData).length} disciplinas  ·  ${totalCaps} capítulos copiados`);
console.log(`\nPróximos passos:`);
console.log(`   1. Registrar faixas em cursos-novos/_REGISTRO-IDS.mjs`);
console.log(`   2. Aplicar migration: supabase db push  (ou via Dashboard)`);
console.log(`   3. Testar: abrir uma aula com pdf_path="notaon:matematica:1"`);
