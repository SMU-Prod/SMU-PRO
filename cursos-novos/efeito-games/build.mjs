// Gera os HTMLs autocontidos dos games do EFEITO BÁSICO.
//   node cursos-novos/efeito-games/build.mjs
// Inlina _engine.js + a config do game dentro de _shell.html.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { GAMES } from "./games.mjs";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");                 // SMU-PRO
const SIMDIR = path.join(ROOT, "simuladores", "efeito-basico");
const ENGINE = fs.readFileSync(path.join(SIMDIR, "_engine.js"), "utf8");
const SHELL = fs.readFileSync(path.join(__dir, "_shell.html"), "utf8");

function esc(s) { return s; }

let n = 0;
for (const g of GAMES) {
  const html = SHELL
    .replaceAll("__TITLE__", g.title)
    .replaceAll("__SUBTITLE__", g.subtitle)
    .replace("__ENGINE__", () => ENGINE)     // function form: não interpreta $&
    .replace("__GAME__", () => g.src);
  const out = path.join(SIMDIR, g.slug + ".html");
  fs.writeFileSync(out, html);
  n++;
  console.log("✓", g.slug, "(" + (html.length / 1024).toFixed(0) + " KB) →", g.frag);
}
console.log("\n" + n + " games gerados em simuladores/efeito-basico/");
