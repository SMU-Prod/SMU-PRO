// Gerador da migration SQL — Curso "Som — Formação Completa" (aula-modelo Yamaha CL5).
// Lê a teoria (fragment) e o simulador (HTML), monta INSERTs aditivos (ativo=false).
// Uso:  node cursos-novos/som-formacao-completa/build-sql.mjs
// Saída: supabase/migrations/20260710_som_formacao_completa.sql
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");

// ---- escaping helpers ----
const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";        // SQL text literal
const jsonb = (obj) => q(JSON.stringify(obj)) + "::jsonb";          // SQL jsonb literal

// ---- IDs fixos (idempotência: reaplicar não duplica) ----
const ID = {
  course:  "5504c000-5011-4a00-9000-000000000001",
  module:  "5504c000-5011-4a00-9000-0000000000a1",
  lesson:  "5504c000-5011-4a00-9000-0000000000b1",
  quiz:    "5504c000-5011-4a00-9000-0000000000c1",
};
const Q = (n) => `5504c000-5011-4a00-9000-0000000000${(0xd0 + n).toString(16)}`; // question ids

// ---- conteúdo ----
const conteudo = fs.readFileSync(path.join(__dirname, "aula-01-yamaha-cl5.fragment.html"), "utf8").trim();
const simulador = fs.readFileSync(path.join(ROOT, "simuladores/som/yamaha-cl5.html"), "utf8");

// ---- quiz ----
const quiz = {
  titulo: "Quiz — Console Yamaha CL5: arquitetura e operação",
  questoes: [
    { texto: 'O que representa o conceito "Centralogic" da série CL?',
      explicacao: "CL = Centralogic: uma faixa central de 8 faders + tela sensível ao toque que concentra o controle, mostrando 8 canais por vez para agilizar a operação.",
      opcoes: [
        ["Um tipo de microfone sem fio da Yamaha", false],
        ["Uma faixa central de 8 faders + tela que concentra o controle da mesa", true],
        ["O protocolo de rede que substitui o Dante", false],
        ["Um plugin de reverb exclusivo do console", false],
      ]},
    { texto: "Ao ajustar o ganho (gain staging) de um canal, qual é o alvo prático de nível nos medidores?",
      explicacao: "A referência profissional é ajustar o head amp para o sinal picar em torno de −18 dBFS na intensidade real, garantindo headroom para picos e boa relação sinal/ruído.",
      opcoes: [
        ["Picar em 0 dBFS para aproveitar o máximo de nível", false],
        ["Picar em torno de −18 dBFS", true],
        ["Deixar sempre no vermelho (clip) para ter mais volume", false],
        ["Não importa, o ganho é ajustado depois do EQ", false],
      ]},
    { texto: "Para que serve o recurso Gain Compensation quando FOH e monitor dividem o mesmo stagebox Rio?",
      explicacao: "Ele congela o ganho analógico do Rio e compensa digitalmente em cada mesa, para que um operador ajuste o nível sem alterar o do outro.",
      opcoes: [
        ["Aumenta automaticamente o volume geral do show", false],
        ["Permite que FOH e monitor mexam no nível sem um estragar o ganho do outro", true],
        ["Substitui o compressor do canal", false],
        ["Liga a redundância de rede Dante", false],
      ]},
    { texto: "Qual é a função do HPF (filtro passa-altas) num canal de voz?",
      explicacao: "O HPF corta as frequências graves abaixo de um ponto (ex.: ~100 Hz), tirando ronco de palco e sujeira de subgrave que a voz não usa. É a primeira limpeza do canal.",
      opcoes: [
        ["Cortar os agudos para a voz ficar mais grave", false],
        ["Cortar os graves abaixo de um ponto, limpando ronco e sujeira", true],
        ["Aumentar o volume do canal", false],
        ["Adicionar reverb à voz", false],
      ]},
    { texto: "Quantos barramentos de mixagem a CL5 oferece?",
      explicacao: "São 24 MIX + 8 MATRIX, além do Stereo e do Mono — 35 saídas de mixagem no total.",
      opcoes: [
        ["8 MIX + 4 MATRIX", false],
        ["16 MIX + 16 MATRIX", false],
        ["24 MIX + 8 MATRIX (+ Stereo e Mono)", true],
        ["48 MIX sem MATRIX", false],
      ]},
    { texto: "Qual a principal diferença de um DCA em relação a um MIX bus?",
      explicacao: "O DCA é um controle mestre que comanda o volume de vários canais de uma vez SEM somá-los num barramento e sem alterar os envios de monitor. O MIX bus soma o áudio numa saída.",
      opcoes: [
        ["O DCA soma o áudio dos canais numa nova saída física", false],
        ["O DCA controla o volume de vários canais sem somá-los num bus e sem mexer nos envios de monitor", true],
        ["Não há diferença, são a mesma coisa", false],
        ["O DCA só funciona com efeitos", false],
      ]},
    { texto: 'O que acontece quando você ativa "Sends on Fader"?',
      explicacao: "Os 8 faders deixam de controlar o volume da casa e passam a controlar quanto cada canal envia para um MIX escolhido — é a forma rápida de montar a mistura de monitor de um músico.",
      opcoes: [
        ["Os faders passam a controlar o envio de cada canal para um MIX escolhido", true],
        ["Todos os canais são mutados", false],
        ["A mesa salva uma cena automaticamente", false],
        ["Os faders viram controle de EQ", false],
      ]},
    { texto: "Qual é a ordem correta de preparação de um canal ao vivo?",
      explicacao: "Ganho primeiro (senão você refaz tudo quando o ganho mudar), depois HPF, EQ, dinâmica e por fim os envios de monitor.",
      opcoes: [
        ["EQ → Ganho → Monitores → HPF → Compressor", false],
        ["Ganho → HPF → EQ → Dinâmica → Monitores", true],
        ["Compressor → EQ → Ganho → HPF → Monitores", false],
        ["Monitores → EQ → HPF → Ganho → Gate", false],
      ]},
  ],
};

// ---- roteiro/urls do simulador (formato ai_animations que o AnimationPlayer lê) ----
const roteiro = {
  titulo: "Simulador — Console Digital CL5",
  cenas: [{
    numero: 1,
    titulo: "Réplica funcional da Yamaha CL5",
    modo: "widget",
    narracao: "Opere um canal de voz do começo ao fim: ganho, HPF, EQ, compressor e envio de monitor. Complete as 5 missões no topo.",
    explicacao_texto: "Simulador interativo (SMU) baseado no console Yamaha CL5. Arraste faders e knobs, use o touchscreen e o sends on fader.",
    destaques: ["Gain staging (-18 dBFS)", "HPF e EQ arrastável", "Compressor e gate", "Sends on fader para monitor"],
  }],
};
const urls = [{ html: simulador }];

// ---- monta SQL ----
const L = [];
L.push("-- ====================================================================");
L.push("-- SMU PRO — Curso 'Som — Formação Completa' (AULA-MODELO: Yamaha CL5)");
L.push("-- Aditivo e idempotente: cria curso NOVO com ativo=false. Revise e publique.");
L.push("-- Inclui: curso + módulo + aula (teoria) + quiz (8 questões) + simulador (ai_animations).");
L.push("-- Aplicar: colar no SQL Editor do Supabase OU supabase db push.");
L.push("-- ====================================================================");
L.push("begin;");
L.push("");
L.push("-- Limpeza para reaplicar sem duplicar");
L.push(`delete from public.ai_animations where lesson_id = ${q(ID.lesson)};`);
L.push(`delete from public.quizzes where id = ${q(ID.quiz)};`);
L.push(`delete from public.lessons where id = ${q(ID.lesson)};`);
L.push(`delete from public.modules where id = ${q(ID.module)};`);
L.push(`delete from public.courses where id = ${q(ID.course)};`);
L.push("");
L.push("-- CURSO (ativo=false)");
L.push(`insert into public.courses (id,titulo,slug,descricao_curta,nivel,categoria,categorias,tipo,carga_horaria,total_aulas,ativo,destaque,ordem) values`);
L.push(`  (${q(ID.course)},${q("Som — Formação Completa")},${q("som-formacao-completa")},${q("Formação profissional em som ao vivo: teoria de fontes técnicas + simuladores-réplica por marca (Yamaha, Allen & Heath, Soundcraft, DiGiCo…).")},'pleno','som','{som}','pago',40,1,false,false,20);`);
L.push("");
L.push("-- MÓDULO");
L.push(`insert into public.modules (id,course_id,titulo,ordem) values (${q(ID.module)},${q(ID.course)},${q("Mesas de Som Digitais — por Fabricante")},1);`);
L.push("");
L.push("-- AULA (teoria)");
L.push(`insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values`);
L.push(`  (${q(ID.lesson)},${q(ID.module)},${q("Yamaha CL5 — arquitetura, Dante e fluxo de mixagem")},'texto',${q(conteudo)},35,1,true,true);`);
L.push("");
L.push("-- QUIZ");
L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(ID.quiz)},${q(ID.lesson)},${q(quiz.titulo)});`);
quiz.questoes.forEach((qq, i) => {
  const qid = Q(i);
  L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(qid)},${q(ID.quiz)},${q(qq.texto)},${q(qq.explicacao)},${i + 1},1);`);
  qq.opcoes.forEach(([texto, correta], j) => {
    L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(qid)},${q(texto)},${correta},${j + 1});`);
  });
});
L.push("");
L.push("-- SIMULADOR (ai_animations: o AnimationPlayer renderiza urls[].html em iframe)");
L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,roteiro,urls) values`);
L.push(`  (${q(ID.lesson)},'interactive','ready','handcrafted-interactive',${jsonb(roteiro)},${jsonb(urls)});`);
L.push("");
L.push("commit;");
L.push("");

const out = path.join(ROOT, "supabase/migrations/20260710_som_formacao_completa.sql");
fs.writeFileSync(out, L.join("\n"), "utf8");
console.log("OK ->", path.relative(ROOT, out));
console.log("Tamanho:", (fs.statSync(out).size / 1024).toFixed(1), "KB | questões:", quiz.questoes.length);
