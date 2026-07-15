// Adiciona a aula "Allen & Heath SQ" ao módulo "Mesas de Som Digitais — por Fabricante"
// do curso Pleno "Som — Formação Completa". Aditivo/idempotente. NÃO recria o módulo (preserva a CL5).
// node cursos-novos/pleno-ah-sq/build-sql.mjs -> supabase/migrations/20260713_pleno_ah_sq.sql
import fs from "node:fs";import path from "node:path";import {fileURLToPath} from "node:url";
const __dirname=path.dirname(fileURLToPath(import.meta.url));const ROOT=path.resolve(__dirname,"../..");
const q=s=>"'"+String(s).replace(/'/g,"''")+"'";const jsonb=o=>q(JSON.stringify(o))+"::jsonb";
const COURSE="5504c000-5011-4a00-9000-000000000001";
const MODULE="5504c000-5011-4a00-9000-0000000000a1"; // Mesas por Fabricante (já existe — NÃO deletar)
const LESSON="5504c000-5011-4a00-9000-0000000000b3";
const QUIZ  ="5504c000-5011-4a00-9000-0000000000c3";
const QQ=n=>"5504c000-5011-4a00-9000-0000000000f"+n.toString(16);
const conteudo=fs.readFileSync(path.join(__dirname,"aula-ah-sq.fragment.html"),"utf8").trim();
const sim=fs.readFileSync(path.join(ROOT,"simuladores/som/allen-heath-sq.html"),"utf8");
const questoes=[
  {t:'O que é o "SuperStrip" da Allen & Heath SQ?',e:"É uma seção de encoders físicos dedicados — um para cada bloco de processamento (trim, HPF, PEQ, gate, comp, pan) — que agem no canal selecionado, dando operação rápida e tátil.",
   o:[["Um tipo de microfone", false],["Uma seção de botões físicos, um para cada bloco de processamento do canal selecionado", true],["A tela de cenas", false],["Um efeito de reverb", false]]},
  {t:"Como a SQ controla 48 canais com apenas 24 faders?",e:"Com camadas (layers): cada tecla de camada troca o que os faders controlam (canais 1–12, 13–24, mixes, FX, DCA, MIDI).",
   o:[["Não controla, são só 24 canais", false],["Com camadas (layers) que trocam a função dos faders", true],["Com dois monitores", false],["Usando o mouse", false]]},
  {t:"Ao apertar SEL num canal, o SuperStrip passa a controlar:",e:"O canal selecionado — todos os encoders (trim, HPF, PEQ, gate, comp, pan) agem sobre ele.",
   o:[["Todos os canais ao mesmo tempo", false],["O canal selecionado", true],["Apenas o master", false],["Nada", false]]},
  {t:"O equalizador paramétrico (PEQ) de canal da SQ tem quantas bandas?",e:"4 bandas: LF, LM, HM e HF — cada uma com frequência, ganho e Q, com a curva mostrada em tempo real na tela.",
   o:[["1 banda", false],["3 bandas", false],["4 bandas (LF, LM, HM, HF)", true],["10 bandas", false]]},
  {t:"A tela de 7 polegadas da SQ mostra principalmente:",e:"O processamento do canal — curva de EQ ao vivo, medidores de gate/compressor, roteamento, efeitos e cenas.",
   o:[["Só o relógio", false],["O processamento do canal: EQ ao vivo, dinâmica, roteamento e cenas", true],["A previsão do tempo", false],["Apenas o nome do canal", false]]},
  {t:"Para que servem as 16 SoftKeys?",e:"São atalhos programáveis com LED colorido: mutes de grupo, controle de cenas, tap tempo, etc.",
   o:[["Atalhos programáveis (mutes, cenas, tap tempo)", true],["Aumentar o volume geral", false],["Trocar a cor da mesa", false],["Nada, são decorativas", false]]},
  {t:"Na SQ, o HPF de canal serve para:",e:"Cortar as frequências graves abaixo de um ponto, limpando ronco e sujeira — especialmente em vozes e instrumentos sem grave útil.",
   o:[["Cortar os agudos", false],["Cortar os graves desnecessários e limpar a mix", true],["Aumentar o ganho", false],["Ligar o compressor", false]]},
  {t:"O que uma cena (scene) guarda na SQ?",e:"O estado completo da mesa (faders, EQ, dinâmica, envios) para recall entre músicas ou momentos do evento.",
   o:[["Só o volume do master", false],["O estado completo da mesa, para recall", true],["Apenas os nomes dos canais", false],["A gravação do show", false]]},
];
const roteiro={titulo:"Simulador — Console Allen & Heath SQ-6",cenas:[{numero:1,titulo:"Front oficial da A&H SQ-6",modo:"widget",
  narracao:"Opere a superfície da SQ: camadas de fader, SuperStrip, tela com EQ e dinâmica, SoftKeys. Complete as missões.",
  explicacao_texto:"Front fiel da Allen & Heath SQ-6 (SMU). Cada botão com sua função. Áudio da banda entra depois com os stems.",
  destaques:["SuperStrip (botão por bloco)","Camadas de fader","Tela 7\" com EQ ao vivo","SoftKeys e cenas"]}]};
const L=[];
L.push("-- Pleno 'Som — Formação Completa' — aula ALLEN & HEATH SQ (front oficial). Aditivo/idempotente. NÃO recria o módulo.");
L.push("begin;");
L.push(`delete from public.ai_animations where lesson_id = ${q(LESSON)};`);
L.push(`delete from public.quizzes where id = ${q(QUIZ)};`);
L.push(`delete from public.lessons where id = ${q(LESSON)};`);
L.push(`insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values`);
L.push(`  (${q(LESSON)},${q(MODULE)},${q("Allen & Heath SQ — SuperStrip, camadas e tela (front oficial)")},'texto',${q(conteudo)},28,2,true,false);`);
L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(QUIZ)},${q(LESSON)},${q("Quiz — Console Allen & Heath SQ")});`);
questoes.forEach((qq,i)=>{const id=QQ(i+1);
  L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(id)},${q(QUIZ)},${q(qq.t)},${q(qq.e)},${i+1},1);`);
  qq.o.forEach(([t,c],j)=>L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(id)},${q(t)},${c},${j+1});`));});
L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,roteiro,urls) values (${q(LESSON)},'interactive','ready','handcrafted-interactive',${jsonb(roteiro)},${jsonb([{html:sim}])});`);
L.push(`update public.courses set total_aulas = 3 where id = ${q(COURSE)};`);
L.push("commit;");L.push("");
const out=path.join(ROOT,"supabase/migrations/20260713_pleno_ah_sq.sql");
fs.writeFileSync(out,L.join("\n"),"utf8");
console.log("OK ->",path.relative(ROOT,out),"|",(fs.statSync(out).size/1024).toFixed(1),"KB");
