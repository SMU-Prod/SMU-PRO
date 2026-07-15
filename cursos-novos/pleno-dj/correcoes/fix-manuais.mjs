// CORREÇÃO por FONTE DE VERDADE (CLAUDE.md regra 2): dados conferidos nos manuais/suporte oficiais.
// Corrige a teoria das aulas 7.2 (MPC arquivos) e 7.5 (SP-404 cartão/formatos).
//
// FONTES CONSULTADAS (15/07/2026):
//  - Akai support "Understanding and Loading Programs" → XPM = Drum Programs
//  - Akai support "How To Easily Transfer Projects To A Computer" → .xpj + pasta Project Data juntos
//  - Akai support "I Can't See Sequences (.sxq) Files in MPC3" → .sxq = sequences; MPC3 OS NÃO salva mais .sxq
//  - Akai support "Tips & Tricks | Reformatting Storage Devices" → exFAT recomendado; exFAT/FAT32/NTFS/EXT4 r+w, HFS+ read-only
//  - Roland SP-404MK2 Reference "Formatting an SD card" → "you must first format (initialize) it on the unit"
//  - Roland SP-404MK2 Reference "Importing/Exporting (Using the SD Card)" → samples vão na pasta IMPORT
//  - Roland SP-404MK2 support "Audio file formats that can be imported" → 16-bit linear; WAV, AIFF, MP3
//
//   node cursos-novos/pleno-dj/fix-manuais.mjs [--dry]
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dir = path.dirname(fileURLToPath(import.meta.url));
const DRY = process.argv.includes("--dry");
const SVC = fs.readFileSync("C:/Users/SMUSTU~1/AppData/Local/Temp/claude/D--Show-smu-producoes/87b43c42-b06b-409a-a321-75e301124bef/scratchpad/.svckey", "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(m, p, b, x = {}) {
  const r = await fetch(REST + p, { method: m, headers: { ...H, ...x }, body: b ? JSON.stringify(b) : undefined });
  const t = await r.text(); if (!r.ok) throw new Error(`${m} ${p} -> ${r.status}: ${t.slice(0, 200)}`);
  return t ? (t[0] === "[" || t[0] === "{" ? JSON.parse(t) : t) : null;
}
const L72 = "d15d0000-57d1-4d00-9000-000000000072"; // MPC anatomia/arquivos
const L75 = "d15d0000-57d1-4d00-9000-000000000075"; // SP-404

/* ---------- 7.2: bloco de arquivos, agora conferido no manual ---------- */
const MPC_ARQ = `
<h3>Os arquivos certos (MPC moderna — Live II / One / X)</h3>
<ul>
<li><strong>.XPJ</strong> — <strong>Projeto</strong>. É um arquivo de texto com as configurações; ao lado dele a MPC cria a pasta <strong>[Projeto]Project Data</strong> com os samples, programs e sequences. <strong>Os dois viajam juntos:</strong> a Akai instrui a colocar de volta no drive <em>"both the .xpj project file and project data folder"</em>. Copiou só o .XPJ? Perdeu os sons.</li>
<li><strong>.XPM</strong> — <strong>Program</strong> (o kit). No navegador da MPC, os Drum Programs aparecem justamente como arquivos XPM.</li>
<li><strong>.WAV</strong> — <strong>Sample</strong>. <strong>Use WAV, não MP3</strong>: MP3 já vem comprimido com perda e piora a cada exportação.</li>
<li><strong>.SXQ</strong> — <strong>Sequence</strong>. Fica dentro da pasta Project Data. <strong>Atenção à versão:</strong> por mudança de arquitetura, o <strong>MPC3 OS não salva mais sequences em .sxq</strong> — nele o caminho para levar a sequência a outro programa é o <strong>.MID</strong> (MIDI padrão).</li>
<li><strong>Legado:</strong> <strong>.PGM</strong> (program do MPC clássico), <strong>.SND</strong> (sample do MPC3000/2000), <strong>.APS</strong> (MPC1000/2500). A MPC moderna <em>importa</em> esses antigos — bom para usar kits históricos.</li>
</ul>
<h3>Regras de ouro de arquivo (conferidas no suporte oficial)</h3>
<ul>
<li><strong>Formate o pen/SSD em exFAT</strong> — é o formato <strong>recomendado pela Akai</strong>, por ser o mais robusto e funcionar em Windows e macOS. As MPCs atuais leem e gravam em <strong>exFAT, FAT32, NTFS e EXT4</strong>, e leem (sem gravar) <strong>HFS+</strong>.</li>
<li><strong>Salve o projeto com "Save As" a cada etapa</strong> (beat_v1, beat_v2…): a MPC não tem histórico infinito de undo.</li>
<li><strong>Grave seus samples em WAV 44.1 kHz</strong>. Se importar MP3, converta antes — não empilhe compressão.</li>
<li><strong>Ao entregar para outro produtor:</strong> mande o <strong>projeto (.XPJ + pasta Project Data)</strong>, ou exporte <strong>stems em WAV</strong>. Nunca só o .XPM (sem os samples ele abre mudo).</li>
</ul>`.trim();

/* ---------- 7.5: bloco do cartão SD, agora conferido no manual Roland ---------- */
const SP_ARQ = `
<h3>Cartão SD e arquivos (direto do manual da Roland)</h3>
<ul>
<li><strong>Formate o cartão NA PRÓPRIA MÁQUINA.</strong> O manual é explícito: <em>"To use an SD card with this unit, you must first format (initialize) it on the unit."</em> O caminho é <strong>SHIFT + pad 14 → FORMAT SD-CARD</strong>. Não formate pelo computador.</li>
<li><strong>Os samples que você quer importar vão na pasta <code>IMPORT</code></strong> do cartão — o manual exige essa estrutura de pastas. Importar: <strong>SHIFT + pad 13 → IMPORT → IMPORT from SD-CARD → SAMPLE</strong>.</li>
<li><strong>Formatos aceitos na importação: WAV, AIFF e MP3, em 16 bits</strong> (16-bit linear). Ou seja: diferente da MPC, aqui o padrão de import é 16 bits — prepare seus arquivos assim.</li>
<li><strong>Nunca desligue nem tire o cartão durante o "Working…"</strong> — o manual avisa que isso corrompe os dados.</li>
<li><strong>Backup:</strong> copie o cartão inteiro (a estrutura de pastas é parte do funcionamento), não arquivos soltos.</li>
</ul>`.trim();

(async () => {
  const les = await req("GET", `/lessons?id=in.(${L72},${L75})&select=id,titulo,conteudo_rico`);
  const by = Object.fromEntries(les.map(l => [l.id, l]));
  let fixes = 0;

  // 7.2 — troca o bloco de arquivos + regras de ouro
  let h = by[L72].conteudo_rico;
  const a0 = h.indexOf("<h3>Os arquivos certos");
  const a1 = h.indexOf("<h3>Anatomia física</h3>");
  if (a0 > 0 && a1 > a0) { h = h.slice(0, a0) + MPC_ARQ + "\n" + h.slice(a1); fixes++; console.log("✓ 7.2: bloco de arquivos+regras substituído (fonte: suporte Akai)"); }
  else console.log("✗ 7.2: âncoras não encontradas");
  if (!DRY) await req("PATCH", `/lessons?id=eq.${L72}`, { conteudo_rico: h }, { Prefer: "return=minimal" });

  // 7.5 — troca o bloco do cartão SD
  let s = by[L75].conteudo_rico;
  const b0 = s.indexOf("<h3>Arquivos e cartão</h3>");
  const b1 = s.indexOf("<p><strong>No simulador:</strong>");
  if (b0 > 0 && b1 > b0) { s = s.slice(0, b0) + SP_ARQ + "\n" + s.slice(b1); fixes++; console.log("✓ 7.5: bloco do cartão SD substituído (fonte: manual Roland)"); }
  else console.log("✗ 7.5: âncoras não encontradas");
  if (!DRY) await req("PATCH", `/lessons?id=eq.${L75}`, { conteudo_rico: s }, { Prefer: "return=minimal" });

  console.log(DRY ? "\n[dry-run]" : `\n✅ ${fixes} aula(s) corrigida(s) com dados de manual oficial.`);
})();
