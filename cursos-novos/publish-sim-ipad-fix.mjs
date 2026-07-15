// Publica APENAS o HTML corrigido dos simuladores de mesa (fix de responsividade no iPad:
// coalescência de redraw por frame). Gera uma migration SÓ com UPDATE de ai_animations.urls —
// NÃO recria curso/módulo/aula/quiz e NÃO toca em `ativo` (não despublica nada).
//
// Uso:  node cursos-novos/publish-sim-ipad-fix.mjs
// Saída: supabase/migrations/20260718_sim_ipad_fix.sql
// Aplicar: colar no SQL Editor do Supabase OU `supabase db push`.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// escaping (idêntico aos build-sql.mjs originais)
const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const jsonb = (obj) => q(JSON.stringify(obj)) + "::jsonb";

// lesson_id (fixo) -> arquivo do simulador  (só as mesas que já estão em cursos)
const MAP = [
  { lesson: "5504c000-5011-4a00-9000-0000000000b1", file: "simuladores/som/yamaha-cl5.html",    curso: "som-formacao-completa (Yamaha CL5)" },
  { lesson: "5504c000-5011-4a00-9000-0000000000b2", file: "simuladores/som/mix-show.html",       curso: "pleno-mix-show (Mixagem de Show)" },
  { lesson: "5504c000-5011-4a00-9000-0000000000b3", file: "simuladores/som/allen-heath-sq.html", curso: "pleno-ah-sq (Allen & Heath SQ)" },
  { lesson: "5504c000-5011-4a00-9000-0000000000b4", file: "simuladores/som/digico-sd.html",      curso: "pleno-digico (DiGiCo SD)" },
];

const L = [];
L.push("-- ====================================================================");
L.push("-- SMU PRO — Fix iPad: atualiza SÓ o HTML dos simuladores de mesa.");
L.push("-- Coalescência de redraw (drawScreen/drawEQ = dirty-flag + rAF) para o fader/gate/");
L.push("-- compressor não travarem no toque. NÃO altera curso/aula/quiz nem o campo `ativo`.");
L.push("-- Idempotente: reaplicar apenas reescreve urls[].html. Aplicar via SQL Editor ou db push.");
L.push("-- ====================================================================");
L.push("begin;");
L.push("");

let total = 0;
for (const m of MAP) {
  const abs = path.join(ROOT, m.file);
  const html = fs.readFileSync(abs, "utf8");
  total += html.length;
  L.push(`-- ${m.curso}  <-  ${m.file}  (${(html.length / 1024).toFixed(1)} KB)`);
  L.push(
    `update public.ai_animations set urls = ${jsonb([{ html }])}, updated_at = now() ` +
    `where lesson_id = ${q(m.lesson)} and tipo = 'interactive';`
  );
  L.push("");
}

L.push("commit;");
L.push("");

const out = path.join(ROOT, "supabase/migrations/20260718_sim_ipad_fix.sql");
fs.writeFileSync(out, L.join("\n"), "utf8");
console.log("OK ->", path.relative(ROOT, out));
console.log("Mesas atualizadas:", MAP.length, "| HTML total:", (total / 1024).toFixed(1), "KB | SQL:", (fs.statSync(out).size / 1024).toFixed(1), "KB");
