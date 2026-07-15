// Publica os simuladores de mesa REFEITOS (fiéis por marca/modelo) no curso pleno-som.
// Gera uma migration SÓ com UPDATE de ai_animations.urls[0].html — NÃO recria curso/aula/quiz,
// NÃO toca em `ativo` (não despublica nada) e só altera as aulas mapeadas abaixo.
//
// Uso:   node cursos-novos/publish-faithful-sims.mjs
// Saída: supabase/migrations/20260719_sims_faithful.sql
// Aplicar: colar no SQL Editor do Supabase (produção) OU `supabase db push`.
//
// Adicione uma linha ao MAP conforme cada mesa for reconstruída e verificada.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const jsonb = (obj) => q(JSON.stringify(obj)) + "::jsonb";

// lesson_id (curso pleno-som) -> arquivo do simulador refeito.
// IDs confirmados pelas URLs do painel: CL5=...b1, DiGiCo=...b4, DM7=c7dc8eb4..., X32=e7281a26...
// SQ=...b3 (mesmo id herdado do curso pleno-ah-sq).
const MAP = [
  { lesson: "5504c000-5011-4a00-9000-0000000000b3", file: "simuladores/som/allen-heath-sq-real.html", mesa: "Allen & Heath SQ-6" },
  { lesson: "5504c000-5011-4a00-9000-0000000000b4", file: "simuladores/som/digico-sd-real.html",     mesa: "DiGiCo Quantum 338" },
  { lesson: "e7281a26-f496-41d2-8dd8-e7a13bd8debd", file: "simuladores/som/behringer-x32-real.html",  mesa: "Behringer X32 / Midas M32" },
  // ainda a refazer (descomentar conforme cada mesa for reconstruída e verificada):
  // { lesson: "5504c000-5011-4a00-9000-0000000000b1", file: "simuladores/som/yamaha-cl5-real.html",    mesa: "Yamaha CL5" },
  // { lesson: "c7dc8eb4-1734-4492-bafa-e96663f5e5b8", file: "simuladores/som/yamaha-dm7-real.html",     mesa: "Yamaha DM7" },
];

const L = [];
L.push("-- ====================================================================");
L.push("-- SMU PRO — Simuladores de mesa REFEITOS (fiéis por marca/modelo).");
L.push("-- Atualiza SÓ ai_animations.urls[0].html das aulas mapeadas. NÃO recria");
L.push("-- curso/aula/quiz e NÃO altera `ativo`. Idempotente (reaplicar reescreve o html).");
L.push("-- Aplicar via SQL Editor do Supabase (produção) ou supabase db push.");
L.push("-- ====================================================================");
L.push("begin;");
L.push("");

let total = 0;
for (const m of MAP) {
  const abs = path.join(ROOT, m.file);
  const html = fs.readFileSync(abs, "utf8");
  total += html.length;
  L.push(`-- ${m.mesa}  <-  ${m.file}  (${(html.length / 1024).toFixed(1)} KB)`);
  L.push(
    `update public.ai_animations set urls = ${jsonb([{ html }])}, updated_at = now() ` +
    `where lesson_id = ${q(m.lesson)} and tipo = 'interactive';`
  );
  L.push("");
}

L.push("commit;");
L.push("");

const out = path.join(ROOT, "supabase/migrations/20260719_sims_faithful.sql");
fs.writeFileSync(out, L.join("\n"), "utf8");
console.log("OK ->", path.relative(ROOT, out));
console.log("Mesas:", MAP.length, "| HTML total:", (total / 1024).toFixed(1), "KB | SQL:", (fs.statSync(out).size / 1024).toFixed(1), "KB");
