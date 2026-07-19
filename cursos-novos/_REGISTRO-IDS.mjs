// ============================================================================
//  CARTÓRIO DE IDs  —  fonte única de verdade de quem pode escrever onde.
//  LEIA ANTES DE CRIAR QUALQUER CURSO, MÓDULO OU AULA.
// ============================================================================
//
//  POR QUE ISTO EXISTE (caso real, 15/07/2026):
//  Cada script de curso inventava UUID de cabeça, no padrão XXXXXXXX-0000-4000-9000-*.
//  O `apply` do pleno-produtor escolheu 72d00000-…-08 para o módulo novo dele.
//  Esse id JÁ ERA o Módulo 8 do Pleno — Vídeo. O script fez
//  `PATCH /modules?id=eq.<id> {course_id: meu_curso}` e **transferiu o módulo do
//  vídeo para o produtor**, levando junto as 3 aulas flagship (NovaStar/ATEM/Resolume).
//  O Pleno — Vídeo ficou sem o M8 e ninguém teria notado sem auditoria pós-deploy.
//
//  A REGRA, EM UMA FRASE:
//  **Curso nenhum escreve fora da faixa dele.** Se dois cursos podem gerar o mesmo id,
//  é só questão de tempo até um comer o outro.
//
//  COMO USAR:
//    import { faixa, idModulo, idAula, conferirFaixa } from "../_REGISTRO-IDS.mjs";
//    const F = faixa("pleno-produtor");
//    idModulo(F, 4)      -> id do Módulo 4
//    idAula(F, 4, 2)     -> id da aula 2 DO Módulo 4
//
//  COMO LER UM ID (é proposital que dê para ler a olho):
//    7a810000-0000-4000-9000-000000000402
//    ^^^                                ^^^^
//    curso (7a8 = pleno-produtor)       módulo 04, aula 02
//
//  PARA ABRIR UM CURSO NOVO: escolha um prefixo LIVRE (ver lista abaixo), acrescente
//  a entrada aqui, e só então escreva o build. Nunca reaproveite prefixo de outro curso.
// ============================================================================

/**
 * Faixas RESERVADAS. `mod`/`aula` são os prefixos de 8 hex.
 * `nativos` = módulos que NÃO seguem o esquema (uuid aleatório da criação original do
 * curso). São seguros por construção — uuid aleatório não colide — e por isso ficam
 * fora do gerador. Não renumere: mexer no id de aula com progresso apaga o aluno.
 */
export const REGISTRO = {
  "video-basico":     { curso: "video-basico",   mod: "71d00000", aula: "71100000", dono: "cursos-novos/video-basico-pro" },
  "pleno-video":      { curso: "pleno-video",    mod: "72d00000", aula: "72100000", dono: "cursos-novos/pleno-video-sims",
                        obs: "usa sufixo com letra (…b01/b02/b03) nas aulas — ver ARMADILHA abaixo" },
  "pleno-video-m9":   { curso: "pleno-video",    mod: "73d00000", aula: "73100000", dono: "cursos-novos/pleno-video-sims" },
  "pleno-video-m10":  { curso: "pleno-video",    mod: "74d00000", aula: "74100000", dono: "cursos-novos/pleno-video-sims" },
  "pleno-video-m11":  { curso: "pleno-video",    mod: "75d00000", aula: "75100000", dono: "cursos-novos/pleno-video-sims" },
  "pleno-produtor":   { curso: "pleno-produtor", mod: "7a800000", aula: "7a810000", dono: "cursos-novos/pleno-producao" },
  "producao-basico":  { curso: "producao-basico",mod: "7b100000", aula: "7b110000", dono: "cursos-novos/producao-basico-pro" },

  // ── LUZ ── (registrado em 15/07 pela sessão da luz, a pedido da arrumação)
  // ⚠️ FORMATO DIFERENTE: a luz nasceu com o miolo `b551-4c00`, não `0000-4000`. Então
  // `idModulo()`/`idAula()` NÃO reproduzem estes ids — usam o miolo padrão. Para a luz,
  // gere pelos helpers do próprio build (`MOD`/`lidHex`) e valide com `conferirFaixa()`.
  // Trocar para o formato padrão significaria renumerar aula com aluno matriculado: não se faz.
  "luz-basico":       { curso: "luz-basico",     mod: "10c00000", aula: "10c00000", dono: "cursos-novos/luz-basico-pro",
                        obs: "módulos …0000a{n} · aulas …000b{nnnn} — mesmo prefixo, blocos diferentes" },
  // pleno-luz: M1–M7 são NATIVOS (uuid aleatório da criação original) — seguros por construção.
  // M8..M11 foram criados um a um, cada um com o SEU prefixo. Ficam registrados como estão:
  // renumerar não traz ganho e mexer em id de aula é o que apaga aluno.
  "pleno-luz-m8":     { curso: "pleno-luz",      mod: "20d00000", aula: "20d00000", dono: "cursos-novos (consoles por marca)" },
  "pleno-luz-m9":     { curso: "pleno-luz",      mod: "30d00000", aula: "30d00000", dono: "cursos-novos (sistemas avançados)" },
  "pleno-luz-m10":    { curso: "pleno-luz",      mod: "40d00000", aula: "40d00000", dono: "cursos-novos (fixtures por marca)" },
  "pleno-luz-m11":    { curso: "pleno-luz",      mod: "50d00000", aula: "50d00000", dono: "cursos-novos (palco virtual)" },

  // ── SOM e DJ ── (levantados em 14/07 lendo os geradores, não estavam registrados)
  // Mesmo caso da luz: miolo `b551-4c00` / `57d1-4d00`, com o TIPO no bloco final
  // (…0000a{n} módulo · …000b{nnnn} aula · …000c{nnnn} quiz). Os helpers idModulo()/
  // idAula() NÃO reproduzem estes ids — gere pelos helpers do build e valide com
  // conferirFaixa(). Registrados para ninguém reaproveitar o prefixo e o auditor achar o dono.
  // ⚠️ Nestas 3, a CHAVE é o nome do PROJETO (a pasta), e `curso` é o slug real no banco.
  // Não confunda: faixa("som-basico") devolve o projeto cursos-novos/som-basico, cujo
  // curso no banco é "som-basico-formacao".
  // (Comentário aqui em cima de propósito: inline, o `//` engole o resto da linha e come
  //  a propriedade seguinte — foi assim que o `dono` destas 3 sumiu em 14/07.)
  "som-basico-pro":   { curso: "som-basico",          mod: "e6b50000", aula: "e6b50000",
                        dono: "cursos-novos/som-basico-pro",
                        obs: "módulos …0000a{n} · aulas …000b{nnnn}" },
  "som-basico":       { curso: "som-basico-formacao", mod: "5b000000", aula: "5b000000",
                        dono: "cursos-novos/som-basico",
                        obs: "módulo único …0000a1" },
  "pleno-dj":         { curso: "dj",                  mod: "d15d0000", aula: "d15d0000",
                        dono: "cursos-novos/pleno-dj",
                        obs: "miolo 57d1-4d00; curso 127588cc; também aparece d1000000-*" },

  // ⚠️ FAIXA COMPARTILHADA POR 4 SCRIPTS — a que mais exige cuidado hoje.
  // `5504c000` (miolo 5011-4a00) é o espaço do curso PLENO — SOM. Escrevem nela:
  //   som-formacao-completa · pleno-mix-show · pleno-ah-sq · pleno-digico
  // Compartilhar MÓDULO aqui é de propósito e está certo: …0000a1 ("Mesas por
  // Fabricante") recebe a aula do ah-sq (ordem 2) E a do digico (ordem 3). Cada script
  // mexe só na aula DELE.
  // A regra que não pode ser quebrada: **nunca delete/recrie um módulo que não é só seu.**
  // `pleno-mix-show` faz `delete from modules where id=…a2` e recria — só é seguro
  // porque hoje o a2 é exclusivo dele. Se alguém puser outra aula no a2, ela some.
  "pleno-som":        { curso: "pleno-som",      mod: "5504c000", aula: "5504c000",
                        dono: "COMPARTILHADO: som-formacao-completa, pleno-mix-show, pleno-ah-sq, pleno-digico",
                        obs: "módulos de console compartilhados por design — antes de escrever, confira que o id da SUA aula não é de outro script" },
  // Módulo de DSP DENTRO do pleno-som, mas em FAIXA DEDICADA (7c1) — NÃO na faixa
  // compartilhada 5504c000, para não colidir com os 4 scripts de console. O módulo aponta
  // course_id = pleno-som; o id dele e das aulas usam idModulo()/idAula() com prefixo próprio.
  "pleno-som-dsp":    { curso: "pleno-som",      mod: "7c100000", aula: "7c100000",
                        dono: "cursos-novos/pleno-som-dsp (Processadores de Sistema / DSP)",
                        obs: "módulo …-000000000001, aulas …-00000001{nn}; VENU360 é a aula flagship" },
};

/** Prefixos LIVRES para o próximo curso. Risque daqui e registre acima ao usar. */
export const LIVRES = ["7d1", "7e1", "7f1", "8a1", "8b1", "8c1"];

// ⚠️ ARMADILHA HISTÓRICA — `72100000` é COMPARTILHADO no banco:
//    pleno-video  usa 72100000-…-000000000b01 / b02 / b03   (sufixo com 'b')
//    pleno-produtor USAVA 72100000-…-000000000007/008/011/017/025  (só dígitos)
//    Não colidiam por sorte. Mas o gerador do vídeo, ao criar a aula 11, produziria
//    `72100000-…-000000000011` — exatamente a aula "A planilha na prática" do produtor.
//    Bomba desarmada em 15/07: as 5 aulas do produtor foram migradas para 7a81* (a faixa
//    dela), com progresso zero confirmado antes. O vídeo segue dono de 72100000.

const P2 = (n) => String(n).padStart(2, "0");

/** Faixa de um curso. Explode se o curso não estiver registrado — de propósito. */
export function faixa(slug) {
  const f = REGISTRO[slug];
  if (!f) throw new Error(
    `Curso "${slug}" não está no _REGISTRO-IDS.mjs. Registre a faixa dele ANTES de escrever no banco. ` +
    `Prefixos livres: ${LIVRES.join(", ")}`);
  return { slug, ...f };
}

/** id do módulo N (1..99). Cada módulo tem seu bloco. */
export function idModulo(f, n) {
  if (!(n >= 1 && n <= 99)) throw new Error(`módulo fora de 1..99: ${n}`);
  return `${f.mod}-0000-4000-9000-0000000000${P2(n)}`;
}

/** id da aula N (1..99) DO módulo M (1..99) — o bloco da aula carrega o módulo dela. */
export function idAula(f, m, n) {
  if (!(m >= 1 && m <= 99)) throw new Error(`módulo fora de 1..99: ${m}`);
  if (!(n >= 1 && n <= 99)) throw new Error(`aula fora de 1..99: ${n}`);
  return `${f.aula}-0000-4000-9000-00000000${P2(m)}${P2(n)}`;
}

/** true se o id pertence à faixa (módulo ou aula) do curso. */
export function daFaixa(f, id) {
  return typeof id === "string" && (id.startsWith(f.mod + "-") || id.startsWith(f.aula + "-"));
}

/**
 * TRAVA. Chame no apply antes de escrever.
 * `ids` = todos os ids que o script vai criar/alterar. `nativos` = uuids aleatórios
 * pré-existentes (criação original do curso), que passam sem checagem de faixa.
 * Aborta se algum id gerado cair fora da faixa do curso — que é como se rouba o vizinho.
 */
export function conferirFaixa(f, ids, nativos = []) {
  const nat = new Set(nativos);
  const fora = ids.filter((id) => !nat.has(id) && !daFaixa(f, id));
  if (fora.length) throw new Error(
    `IDs fora da faixa de "${f.slug}" (mod ${f.mod}-* / aula ${f.aula}-*):\n` +
    fora.map((x) => "   " + x).join("\n") +
    `\nOu registre-os como nativos, ou gere pelo idModulo()/idAula(). Não escreva fora da sua faixa.`);
  return true;
}

/** Faixa de OUTRO curso reclama este id? Devolve o slug do dono, ou null. */
export function donoDoId(id) {
  for (const [slug, f] of Object.entries(REGISTRO))
    if (id.startsWith(f.mod + "-") || id.startsWith(f.aula + "-")) return slug;
  return null;
}
