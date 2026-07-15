// Gerador — adiciona a aula "Mixagem de Show ao Vivo" ao curso Pleno "Som — Formação Completa".
// Aditivo/idempotente. Não toca na aula da CL5. Cria novo módulo + aula + quiz + simulador (áudio real).
// Uso: node cursos-novos/pleno-mix-show/build-sql.mjs  -> supabase/migrations/20260712_pleno_mix_show.sql
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "../..");
const q = (s) => "'" + String(s).replace(/'/g, "''") + "'";
const jsonb = (o) => q(JSON.stringify(o)) + "::jsonb";

const COURSE = "5504c000-5011-4a00-9000-000000000001"; // Som — Formação Completa (já existe)
const MODULE = "5504c000-5011-4a00-9000-0000000000a2";
const LESSON = "5504c000-5011-4a00-9000-0000000000b2";
const QUIZ   = "5504c000-5011-4a00-9000-0000000000c2";
const QQ = (n) => "5504c000-5011-4a00-9000-0000000000e" + n.toString(16); // e1..e8

const conteudo = fs.readFileSync(path.join(__dirname, "aula-mix-show.fragment.html"), "utf8").trim();
const simulador = fs.readFileSync(path.join(ROOT, "simuladores/som/mix-show.html"), "utf8");

const questoes = [
  { t:"Numa mixagem de show, o que deve ficar mais em evidência para a plateia?",
    e:"A voz principal precisa estar clara e à frente; junto com uma base sólida de bumbo e baixo. A mix serve a música e à letra.",
    o:[["Os pratos da bateria", false],["A voz principal (com base sólida de bumbo e baixo)", true],["O teclado", false],["Todos no mesmo volume máximo", false]] },
  { t:"Bumbo e baixo, juntos, formam o quê na mixagem?",
    e:"A fundação (base) da mix — o peso e o groove. Acerte os dois juntos antes de subir o resto.",
    o:[["O brilho da mix", false],["A fundação/base da mix", true],["O panorama estéreo", false],["O retorno do palco", false]] },
  { t:"Para que serve um DCA (grupo)?",
    e:"O DCA controla o volume de vários canais de uma vez (ex.: toda a bateria) sem alterar o equilíbrio entre eles.",
    o:[["Controlar o volume de vários canais juntos, mantendo o equilíbrio interno", true],["Adicionar reverb", false],["Ligar o phantom", false],["Trocar a frequência do sem fio", false]] },
  { t:"A mistura de AUX / monitor é:",
    e:"É o que o músico ouve no palco (retorno/in-ear), diferente e independente da mix da plateia.",
    o:[["A mesma coisa que a mix da plateia", false],["A mistura que o músico ouve no palco (retorno)", true],["O volume do master", false],["Um tipo de microfone", false]] },
  { t:"Jogar as guitarras uma para a esquerda e outra para a direita (pan) serve para:",
    e:"Abrir o panorama estéreo — dar largura ao palco. Bumbo, baixo, caixa e voz normalmente ficam no centro.",
    o:[["Aumentar o grave", false],["Abrir o panorama estéreo (largura)", true],["Mutar as guitarras", false],["Economizar canais", false]] },
  { t:"Para que serve o SOLO de um canal?",
    e:"Isolar um canal para ouvi-lo sozinho e ajustar/achar um problema, sem a distração do resto da mix.",
    o:[["Mutar todos os outros para sempre", false],["Ouvir um canal isolado para ajustar/conferir", true],["Aumentar o master", false],["Gravar o canal", false]] },
  { t:"Por que ligar o HPF na voz e nas guitarras?",
    e:"Para tirar os graves desnecessários dessas fontes, limpando a mix e deixando espaço para bumbo e baixo.",
    o:[["Para deixá-las mais graves", false],["Para tirar graves desnecessários e limpar a mix", true],["Para aumentar o volume", false],["Para ligar o compressor", false]] },
  { t:"Qual a melhor ordem para construir a mixagem?",
    e:"Base (bumbo e baixo) → resto da bateria → instrumentos harmônicos → voz por cima de tudo.",
    o:[["Voz → teclado → bateria → baixo", false],["Base (bumbo/baixo) → resto da bateria → instrumentos → voz por cima", true],["Tudo no máximo de uma vez", false],["Pratos → guitarras → bumbo", false]] },
];

const roteiro = { titulo:"Simulador — Mixagem de Show ao Vivo", cenas:[{ numero:1, titulo:"Mixe a banda (áudio real)", modo:"widget",
  narracao:"Mixe uma banda ao vivo ouvindo em tempo real: faders, EQ, HPF, compressor, pan, DCA e solo/mute. Complete as missões.",
  explicacao_texto:"Simulador de mixagem com áudio (placeholder — será trocado pelas músicas reais da SMU). Todas as funções da mesa.",
  destaques:["Canais nomeados por instrumento","EQ de 3 bandas por canal","Grupos/DCA e master","Monitores (AUX), solo e mute"] }] };
const urls = [{ html: simulador }];

const L=[];
L.push("-- ====================================================================");
L.push("-- SMU PRO — Pleno 'Som — Formação Completa': aula MIXAGEM DE SHOW (áudio real)");
L.push("-- Aditivo/idempotente. Adiciona módulo+aula+quiz+simulador ao curso existente.");
L.push("-- ====================================================================");
L.push("begin;");
L.push(`delete from public.ai_animations where lesson_id = ${q(LESSON)};`);
L.push(`delete from public.quizzes where id = ${q(QUIZ)};`);
L.push(`delete from public.lessons where id = ${q(LESSON)};`);
L.push(`delete from public.modules where id = ${q(MODULE)};`);
L.push(`insert into public.modules (id,course_id,titulo,ordem) values (${q(MODULE)},${q(COURSE)},${q("Mixagem ao Vivo")},2);`);
L.push(`insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values`);
L.push(`  (${q(LESSON)},${q(MODULE)},${q("Mixagem de show ao vivo: método, EQ por instrumento, grupos e monitores")},'texto',${q(conteudo)},30,1,true,true);`);
L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(QUIZ)},${q(LESSON)},${q("Quiz — Mixagem de show ao vivo")});`);
questoes.forEach((qq,i)=>{ const id=QQ(i+1);
  L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(id)},${q(QUIZ)},${q(qq.t)},${q(qq.e)},${i+1},1);`);
  qq.o.forEach(([t,c],j)=>L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(id)},${q(t)},${c},${j+1});`));
});
L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,roteiro,urls) values (${q(LESSON)},'interactive','ready','handcrafted-interactive',${jsonb(roteiro)},${jsonb(urls)});`);
L.push(`update public.courses set total_aulas = 2 where id = ${q(COURSE)};`);
L.push("commit;");
L.push("");
const out = path.join(ROOT,"supabase/migrations/20260712_pleno_mix_show.sql");
fs.writeFileSync(out, L.join("\n"), "utf8");
console.log("OK ->", path.relative(ROOT,out), "|", (fs.statSync(out).size/1024).toFixed(1),"KB");
