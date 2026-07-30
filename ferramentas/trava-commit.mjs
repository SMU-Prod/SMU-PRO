/* trava-commit.mjs — uma sessao commita por vez.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * Varias sessoes trabalham no MESMO working tree (D:\Show smu producoes) e o
 * dono mandou que todas commitem de 2 em 2 horas, a partir das 20:00. Sem
 * combinar nada, as sessoes acordam na MESMA hora cheia e caem em cima uma da
 * outra: duas rodando `git add`/`commit` ao mesmo tempo no mesmo repo dao
 * "index.lock" e, pior, uma stagea o arquivo que a outra esta escrevendo.
 * Ordem do dono: "cada chat deve respeitar que o outro precisa fazer, e
 * terminar; para um tempo, um termina, o outro depois retorna".
 *
 * Esta trava e o "espera a sua vez". Fica em D:\Show smu producoes, que NAO e
 * repositorio git — entao ela nunca entra em commit e vale para os 3 repos
 * (SMU-PRO, SMU-WORLD, SMU-ESTOQUE) ao mesmo tempo, que e o que importa: o
 * perigo nao e o repo, e a maquina.
 *
 * COMO USAR (sempre em par, e soltar no finally)
 *   node ferramentas/trava-commit.mjs pegar "<nome da sessao>"   # 0=peguei 1=ocupada
 *   ... faz os commits ...
 *   node ferramentas/trava-commit.mjs soltar "<nome da sessao>"
 *   node ferramentas/trava-commit.mjs ver                        # quem esta com ela
 *
 * Se der 1, NAO insista e NAO commite assim mesmo: espere e volte depois. A
 * janela e de 2 horas, sobra tempo para todo mundo passar.
 *
 * VELHA (>20 min) e roubada de proposito: sessao que morre no meio do commit
 * deixaria a trava presa para sempre e travaria a frota inteira. Vinte minutos
 * e folgado — a varredura completa dos 3 repos leva menos de 1.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const AQUI = path.dirname(fileURLToPath(import.meta.url));
const TRAVA = path.join(path.resolve(AQUI, "../.."), ".smu-commit.lock");
const VELHA_MIN = 20;

const acao = (process.argv[2] || "ver").toLowerCase();
const dono = process.argv[3] || `sessao-${process.pid}`;

const ler = () => { try { return JSON.parse(fs.readFileSync(TRAVA, "utf8")); } catch { return null; } };
const idade = t => (Date.now() - new Date(t.quando).getTime()) / 60000;

function pegar() {
  const dados = JSON.stringify({ dono, pid: process.pid, quando: new Date().toISOString() }, null, 2);
  try {
    /* 'wx' falha se o arquivo existir — e essa falha, atomica no sistema de
       arquivos, que faz a trava valer. Checar-depois-escrever nao serve: duas
       sessoes checariam "livre" no mesmo instante e as duas escreveriam. */
    fs.writeFileSync(TRAVA, dados, { flag: "wx" });
    console.log(`trava PEGA por ${dono}`);
    return 0;
  } catch (e) {
    if (e.code !== "EEXIST") { console.log(`trava: erro inesperado (${e.code}) — NAO commite`); return 1; }
  }
  const atual = ler();
  if (!atual) { fs.writeFileSync(TRAVA, dados); console.log(`trava ilegivel, refeita por ${dono}`); return 0; }
  if (atual.dono === dono) { console.log(`trava ja era sua (${dono})`); return 0; }
  const min = idade(atual);
  if (min > VELHA_MIN) {
    fs.writeFileSync(TRAVA, dados);
    console.log(`trava VELHA (${min.toFixed(0)} min, era de "${atual.dono}") — roubada por ${dono}`);
    return 0;
  }
  console.log(`OCUPADA por "${atual.dono}" ha ${min.toFixed(0)} min. Espere e volte — nao commite agora.`);
  return 1;
}

function soltar() {
  const atual = ler();
  if (!atual) { console.log("trava ja estava solta"); return 0; }
  if (atual.dono !== dono) { console.log(`trava e de "${atual.dono}", nao de "${dono}" — nao mexo`); return 1; }
  fs.rmSync(TRAVA, { force: true });
  console.log(`trava SOLTA por ${dono}`);
  return 0;
}

function ver() {
  const atual = ler();
  if (!atual) { console.log("trava LIVRE"); return 0; }
  const min = idade(atual);
  console.log(`trava com "${atual.dono}" (pid ${atual.pid}) ha ${min.toFixed(0)} min${min > VELHA_MIN ? " — VELHA, pode ser roubada" : ""}`);
  return min > VELHA_MIN ? 0 : 1;
}

process.exit(acao === "pegar" ? pegar() : acao === "soltar" ? soltar() : ver());
