/* verifica-eol.mjs — o mesmo conteudo tem de dar o MESMO numero em LF e em CRLF.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * Em 29/07/2026 o clicar-tudo.mjs dava resultado DIFERENTE para o mesmo
 * simulador so por causa do fim de linha: 29 mortos em LF contra 37 em CRLF no
 * pioneer-djm-900nxs2. Na frota inteira era 1363 contra 1962 — 44% de botao
 * morto FANTASMA. A causa: em JavaScript o `.` da regex NAO casa \r (CR e
 * LineTerminator igual a \n, ao contrario de Perl/PCRE), entao o
 * `nomesDeclarados` fatiando por "\n" puro achava 0 de 124 variaveis do
 * simulador e o sinal `estado` cegava.
 *
 * Foi consertado na leitura (lerTexto), mas o repositorio esta com
 * core.autocrlf=true e a frota e MISTA — 134 LF, 86 CRLF e 14 arquivos com os
 * dois no mesmo corpo. Ou seja: a condicao que revelou o bug continua na mesa
 * todo dia. Este portao existe para a regressao aparecer na hora, e nao seis
 * meses depois num numero que ninguem mais sabe conferir.
 *
 * O QUE ELE MEDE
 * Copia cada simulador para duas arvores identicas a nao ser pelo fim de linha
 * (leitura UNICA por arquivo e duas escritas — assim as duas copias batem entre
 * si mesmo que outra sessao esteja editando o disco no meio) e roda o
 * clicar-tudo em cada uma. Qualquer diferenca e defeito DA FERRAMENTA, nunca do
 * simulador.
 *
 * CUIDADO AO MEXER: "o numero caiu" NAO e criterio de sucesso. O bug era
 * bidirecional — no montagem-trelica.html ele ESCONDIA 5 mortos reais (10->5),
 * porque com o estado cego o simulador nao avancava no exercicio e o portao
 * nunca chegava nos controles do fim. O criterio e: mesma entrada, mesmo
 * numero.
 *
 * uso:  node ferramentas/verifica-eol.mjs --tudo        (frota inteira, ~2 min)
 *       node ferramentas/verifica-eol.mjs <arquivo.html> ...
 * sai 1 se algum simulador der numero diferente entre LF e CRLF.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFile } from "node:child_process";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const RAIZ = path.resolve(AQUI, "..");
const SIMS = path.join(RAIZ, "simuladores");
const PORTAO = path.join(AQUI, "clicar-tudo.mjs");
const TMP = fs.mkdtempSync(path.join(os.tmpdir(), "smu-eol-"));

const paraLF = s => s.replace(/\r\n?/g, "\n");
const paraCRLF = s => paraLF(s).replace(/\n/g, "\r\n");

/* Le UMA vez e escreve as duas versoes: se outra sessao salvar o arquivo no
   meio da varredura, as duas copias ainda sao o mesmo conteudo — sem isso a
   comparacao acusaria diferenca que e do disco, nao da ferramenta. */
function espelhar(origem, rel, alvos) {
  const cru = fs.readFileSync(origem, "utf8");
  for (const [dir, conv] of alvos) {
    const d = path.join(dir, path.dirname(rel));
    fs.mkdirSync(d, { recursive: true });
    fs.writeFileSync(path.join(d, path.basename(rel)), conv(cru));
  }
}

/* mesma regra de pasta do clicar-tudo: _ref/_backup/_viref nao sao simulador.
   Leva .js/.mjs junto porque o portao carrega <script src> vizinho do disco. */
function espelharPasta(rel, alvos, conta = { n: 0 }) {
  for (const e of fs.readdirSync(path.join(SIMS, rel), { withFileTypes: true })) {
    const filho = path.join(rel, e.name);
    if (e.isDirectory()) { if (!/^_(ref|backup|viref)/.test(e.name)) espelharPasta(filho, alvos, conta); continue; }
    if (!/\.(html|js|mjs)$/i.test(e.name)) continue;
    espelhar(path.join(SIMS, filho), filho, alvos);
    conta.n++;
  }
  return conta.n;
}

const rodar = alvo => new Promise(ok => {
  execFile(process.execPath, [PORTAO, alvo], { maxBuffer: 256 << 20, timeout: 900000 }, (_e, out, err) => {
    const txt = String(out || "") + String(err || "");
    const porSim = new Map();
    for (const l of txt.split(/\r?\n/)) {
      const m = /^X (.+?) - (\d+) sem funcao \(de (\d+) controles\)/.exec(l);
      if (m) porSim.set(m[1], { mortos: +m[2], total: +m[3] });
    }
    const s = /(\d+) simuladores \| (\d+) com botao sem funcao \| (\d+) botoes mortos \| (\d+) suspeitos \| (\d+) nao rodaram/.exec(txt);
    ok({ porSim, resumo: s ? { mortos: +s[3], suspeitos: +s[4], naoRodou: +s[5] } : null, txt });
  });
});

const args = process.argv.slice(2);
const dirLF = path.join(TMP, "lf"), dirCRLF = path.join(TMP, "crlf");
const alvos = [[dirLF, paraLF], [dirCRLF, paraCRLF]];
let n = 0;

if (args.includes("--tudo") || !args.length) {
  n = espelharPasta("", alvos);
} else {
  for (const a of args) {
    const p = path.isAbsolute(a) ? a : path.resolve(a);
    if (!fs.existsSync(p)) { console.log(`nao existe: ${a}`); process.exit(2); }
    espelhar(p, path.basename(p), alvos);
    n++;
  }
}
console.log(`fim de linha: LF x CRLF em ${n} arquivo(s)\n`);

const A = await rodar(dirLF), B = await rodar(dirCRLF);
if (!A.resumo || !B.resumo) {
  console.log("o clicar-tudo nao devolveu resumo — o portao nao vale:");
  console.log((A.resumo ? B.txt : A.txt).trim().split("\n").slice(-6).join("\n"));
  process.exit(2);
}

const nomes = [...new Set([...A.porSim.keys(), ...B.porSim.keys()])].sort();
const difs = nomes.filter(x => (A.porSim.get(x)?.mortos || 0) !== (B.porSim.get(x)?.mortos || 0));

const f = r => `${r.mortos} mortos | ${r.suspeitos} suspeitos | ${r.naoRodou} nao rodaram`;
console.log(`  LF   : ${f(A.resumo)}`);
console.log(`  CRLF : ${f(B.resumo)}`);

if (!difs.length && A.resumo.mortos === B.resumo.mortos && A.resumo.suspeitos === B.resumo.suspeitos) {
  console.log(`\nOK — os ${n} arquivos dao o mesmo numero nos dois fins de linha.`);
  fs.rmSync(TMP, { recursive: true, force: true });
  process.exit(0);
}
console.log(`\nX ${difs.length} simulador(es) mudam de numero so por causa do fim de linha:`);
for (const x of difs) console.log(`   ${x}: LF=${A.porSim.get(x)?.mortos || 0}  CRLF=${B.porSim.get(x)?.mortos || 0}`);
console.log(`\nIsso e defeito DA FERRAMENTA (clicar-tudo.mjs), nao do simulador.`);
console.log(`Procure regex que fatie por "\\n" puro ou use (.*) — em JS o . nao casa \\r.`);
console.log(`arvores para depurar: ${TMP}`);
process.exit(1);
