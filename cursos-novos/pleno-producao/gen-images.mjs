// Gera as imagens PENDENTES do módulo de viagem via Runway e sobe pro Storage.
// Rode quando o workspace do Runway tiver crédito de novo:
//     node cursos-novos/pleno-producao/gen-images.mjs [--dry]
// Depois republique as aulas:
//     node cursos-novos/pleno-producao/apply-rest.mjs
//
// Precisa de RUNWAY_API_KEY no ambiente. Sem ela o script para e explica — não inventa imagem.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { IMAGES, FOLDER } from "./images.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/8fd20cdc-9ebc-46ef-af35-7d39227ac99c/scratchpad/.svckey","utf8").trim();
const SB  = "https://pshynylvvkhhohftouoe.supabase.co";
const RW_KEY = process.env.RUNWAY_API_KEY;
const RW = "https://api.dev.runwayml.com/v1";

const pend = IMAGES.filter(i => i.pendente);
console.log(`== Gerar imagens do módulo de viagem ${DRY?"(DRY)":""} ==`);
console.log(`   ${pend.length} pendente(s): ${pend.map(p=>p.slug).join(", ")}`);
if (DRY) { pend.forEach(p=>console.log(`\n-- ${p.slug} [${p.ratio}]\n${p.prompt}`)); process.exit(0); }
if (!RW_KEY) { console.error("\nFALTA RUNWAY_API_KEY no ambiente. Exporte a chave e rode de novo. Nada foi gerado."); process.exit(1); }

async function gerar(im){
  const r = await fetch(`${RW}/text_to_image`, {
    method:"POST",
    headers:{ Authorization:`Bearer ${RW_KEY}`, "Content-Type":"application/json", "X-Runway-Version":"2024-11-06" },
    body: JSON.stringify({ model:"gen4_image", promptText:im.prompt, ratio:im.ratio.replace(":","x") })
  });
  const t = await r.text();
  if(!r.ok) throw new Error(`Runway ${r.status}: ${t.slice(0,200)}`);
  const { id } = JSON.parse(t);
  for(let i=0;i<90;i++){
    await new Promise(s=>setTimeout(s,4000));
    const s = await (await fetch(`${RW}/tasks/${id}`, { headers:{ Authorization:`Bearer ${RW_KEY}`, "X-Runway-Version":"2024-11-06" } })).json();
    if(s.status==="SUCCEEDED") return s.output[0];
    if(s.status==="FAILED") throw new Error(`task ${id} falhou: ${JSON.stringify(s.failure||{}).slice(0,160)}`);
  }
  throw new Error(`task ${id}: timeout`);
}

let ok=0, fail=0;
for (const im of pend){
  try{
    const url = await gerar(im);
    const raw = Buffer.from(await (await fetch(url)).arrayBuffer());
    // 2MB de PNG derruba a aula no celular: sempre converter pra jpg <=1280px.
    const jpg = await sharp(raw).resize(1280,null,{withoutEnlargement:true}).jpeg({quality:82, mozjpeg:true}).toBuffer();
    const up = await fetch(`${SB}/storage/v1/object/media/${FOLDER}/${im.slug}.jpg`, {
      method:"POST", headers:{ apikey:SVC, Authorization:`Bearer ${SVC}`, "Content-Type":"image/jpeg", "x-upsert":"true" }, body: jpg });
    if(!up.ok) throw new Error(`upload ${up.status}`);
    ok++; console.log(`   ✓ ${im.slug}  ${(raw.length/1024).toFixed(0)}KB -> ${(jpg.length/1024).toFixed(0)}KB`);
  } catch(e){ fail++; console.log(`   ✗ ${im.slug}: ${e.message}`); }
}
console.log(`\n${ok} gerada(s), ${fail} falha(s).`);
if(ok) console.log(`Agora: marque pendente:false em images.mjs para as que subiram, e rode apply-rest.mjs.`);
