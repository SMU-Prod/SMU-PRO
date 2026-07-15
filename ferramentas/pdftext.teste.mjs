// Teste de regressão do ferramentas/pdftext.mjs.
//
// POR QUE ESTE TESTE EXISTE
// Um extrator que devolve o texto PELA METADE é pior que um que falha: ele produz uma tabela
// com cara de completa, e daí se conclui "o fabricante não publica esse dado" quando o dado
// está lá. Foi assim que a impedância de 32 Ω do HDJ-X10 foi removida do curso por engano
// (o texto vinha em arrays TJ, que o regex não casava). Este teste trava esse caso.
//
// Duas âncoras, uma por armadilha já vivida:
//   1. HDJ-X10 (AlphaTheta) — texto em array TJ. A tabela SPECIFICATIONS inteira tem de sair;
//      foi a linha "Impedance 32 Ω" sumindo que fez o curso publicar "não consta no manual".
//   2. SP-404MK2 (Roland)   — o /Length do crypt filter vem ANTES do /Length do documento no
//      dicionário /Encrypt. Pegar "o primeiro" dava chave de 2 bytes, decifrava tudo como lixo
//      SEM lançar erro, e o manual parecia não ter texto nenhum.
// Rode ANTES de confiar em qualquer conclusão do tipo "não consta no manual".
//
//   node ferramentas/pdftext.teste.mjs [caminho-do-hdj-x10.pdf] [caminho-do-sp404.pdf]
//   (sem argumento, baixa os manuais oficiais em arquivos temporários)
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dir = path.dirname(fileURLToPath(import.meta.url));

const CASOS = [
  {
    nome: "HDJ-X10 (AlphaTheta) — texto em array TJ",
    arg: 2,
    tmp: "hdj-x10-teste.pdf",
    url: "https://downloads.support.alphatheta.com/manuals/headphones/HDJ-X10/HDJ-X10_DRC1760F_manual.pdf",
    // cada linha da tabela SPECIFICATIONS: se UMA sumir, a extração está incompleta
    espera: [
      ["Closed, Dynamic", "tipo"],
      ["32 Ω", "IMPEDÂNCIA — a linha que o bug engolia"],
      ["106 dB", "sensibilidade"],
      ["5 Hz to 40 000 Hz", "resposta de frequência"],
      ["3 500 mW", "potência máxima de entrada"],
      ["ø50 mm", "driver"],
      ["328 g", "peso sem cabo"],
      ["One-side, Detachable", "cabo"],
      ["SPECIFICATIONS", "título (se sumir, o decodificador CID quebrou)"],
    ],
  },
  {
    nome: "SP-404MK2 (Roland) — /Length do crypt filter antes do documento",
    arg: 3,
    tmp: "sp404-teste.pdf",
    url: "https://static.roland.com/assets/media/pdf/SP-404MK2_v4_reference_eng02_W.pdf",
    espera: [
      ["VinylSim", "o efeito assinatura (prova que decifrou certo)"],
      ["WOW FLUT", "parâmetro do VinylSim"],
      ["SP-303", "referência histórica no texto"],
    ],
  },
];

let falhas = 0;
for (const c of CASOS) {
  console.log(`\n── ${c.nome}`);
  let pdf = process.argv[c.arg];
  if (!pdf) {
    pdf = path.join(os.tmpdir(), c.tmp);
    if (!fs.existsSync(pdf)) {
      console.log(`   baixando o manual oficial…`);
      try { execFileSync("curl", ["-sL", "--max-time", "150", "-o", pdf, c.url]); } catch { }
    }
  }
  if (!fs.existsSync(pdf)) { console.log(`   ⚠️  manual não disponível (${pdf}) — caso pulado`); continue; }

  const saida = execFileSync("node", [path.join(__dir, "pdftext.mjs"), pdf], { encoding: "utf8", maxBuffer: 64 << 20 });
  const txt = saida.replace(/\0/g, "").replace(/\s+/g, " ");
  for (const [agulha, oque] of c.espera) {
    const ok = txt.includes(agulha);
    if (!ok) falhas++;
    console.log(`   ${ok ? "✓" : "✗"} ${agulha.padEnd(20)} ${oque}`);
  }
}

console.log(falhas
  ? `\n❌ ${falhas} item(ns) faltando: a extração está INCOMPLETA. NÃO conclua "o fabricante não publica X" com esta ferramenta até consertar.`
  : "\n✅ os manuais saem completos — a ferramenta está lendo o texto inteiro.");
process.exit(falhas ? 1 : 0);
