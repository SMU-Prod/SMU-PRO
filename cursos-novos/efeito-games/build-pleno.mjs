// Monta o simulador flagship do PLENO inlinando o motor StageFX.
//   node cursos-novos/efeito-games/build-pleno.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dir, "..", "..");
const ENGINE = fs.readFileSync(path.join(ROOT, "simuladores", "efeito-basico", "_engine.js"), "utf8");
const TPL = fs.readFileSync(path.join(__dir, "pleno-show.template.html"), "utf8");
const out = path.join(ROOT, "simuladores", "efeito", "show-pirotecnico.html");
const html = TPL.replace("__ENGINE__", () => ENGINE);
fs.writeFileSync(out, html);
console.log("✓ show-pirotecnico.html (" + (html.length / 1024).toFixed(0) + " KB) →", out);
