// Adiciona a aula "DiGiCo SD/Quantum" ao módulo "Mesas de Som Digitais — por Fabricante".
// Aditivo/idempotente. NÃO recria o módulo. node cursos-novos/pleno-digico/build-sql.mjs -> 20260714_pleno_digico.sql
import fs from "node:fs";import path from "node:path";import {fileURLToPath} from "node:url";
import { faixa, conferirFaixa } from "../_REGISTRO-IDS.mjs";
const __dirname=path.dirname(fileURLToPath(import.meta.url));const ROOT=path.resolve(__dirname,"../..");
const q=s=>"'"+String(s).replace(/'/g,"''")+"'";const jsonb=o=>q(JSON.stringify(o))+"::jsonb";
const COURSE="5504c000-5011-4a00-9000-000000000001";
const MODULE="5504c000-5011-4a00-9000-0000000000a1";
const LESSON="5504c000-5011-4a00-9000-0000000000b4";
const QUIZ  ="5504c000-5011-4a00-9000-0000000000c4";
const QQ=n=>"5504c000-5011-4a00-9000-00000000d1"+n.toString(16).padStart(2,"0");

// TRAVA DE FAIXA: 5504c000 é COMPARTILHADA por 4 scripts. Aborta se gerar id fora do pleno-som.
// O MODULE …a1 é compartilhado DE PROPÓSITO com o ah-sq — por isso nunca é deletado aqui.
conferirFaixa(faixa("pleno-som"), [COURSE, MODULE, LESSON, QUIZ, ...Array.from({length:8},(_,i)=>QQ(i+1))]);
const conteudo=fs.readFileSync(path.join(__dirname,"aula-digico.fragment.html"),"utf8").trim();
const sim=fs.readFileSync(path.join(ROOT,"simuladores/som/digico-sd.html"),"utf8");
const questoes=[
  {t:"A DiGiCo (série SD/Quantum) é o padrão-ouro principalmente de:",e:"Grandes turnês, festivais e musicais de teatro — pela potência, tela e snapshots precisos.",
   o:[["Rádios de carro", false],["Grandes turnês, festivais e teatros", true],["Estúdios caseiros só", false],["Karaokê", false]]},
  {t:'O que é um "banco" (bank) na DiGiCo?',e:"Um conjunto de 12 faders. Uma camada (layer) reúne até 4 bancos — você troca para acessar entradas, buses, FX, VCAs.",
   o:[["Um efeito de reverb", false],["Um conjunto de 12 faders", true],["A tela de snapshots", false],["Um tipo de microfone", false]]},
  {t:"A operação da DiGiCo é centrada em:",e:"Na tela sensível ao toque (Channel Overview + canal selecionado), diferente de mesas cheias de botões físicos.",
   o:[["Botões físicos para tudo", false],["Tela sensível ao toque (Channel Overview)", true],["Um teclado de computador", false],["Um pedal", false]]},
  {t:"O que a Channel Overview mostra?",e:"Vários canais lado a lado, cada um com curva de EQ ao vivo, gate/comp, aux, ganho e pan — o estado da mesa de relance.",
   o:[["Só o relógio", false],["Vários canais com EQ, dinâmica e aux de relance", true],["Apenas o master", false],["A lista de músicas", false]]},
  {t:"Para que servem os snapshots na DiGiCo?",e:"Guardar e recuperar o estado da mesa para cada momento do show (com recall safe) — essencial em shows com muitas trocas.",
   o:[["Tirar fotos do público", false],["Guardar/recuperar o estado da mesa por momento do show", true],["Aumentar o volume", false],["Gravar o áudio", false]]},
  {t:"O que é um VCA na DiGiCo?",e:"Um grupo de controle que comanda o volume de vários canais de uma vez, sem somá-los num bus.",
   o:[["Um tipo de cabo", false],["Um grupo de controle de volume de vários canais", true],["Um efeito", false],["Uma entrada de microfone", false]]},
  {t:"O equalizador paramétrico de canal da DiGiCo tem quantas bandas (com a curva na tela)?",e:"4 bandas paramétricas, editáveis diretamente na curva da tela.",
   o:[["1", false],["2", false],["4 bandas paramétricas", true],["30", false]]},
  {t:"O processamento de alta performance da DiGiCo se chama:",e:"Stealth Digital Processing — núcleo em FPGA, altíssima performance e latência baixíssima.",
   o:[["Stealth Digital Processing", true],["Auto-Tune", false],["Dolby Surround", false],["MP3", false]]},
];
const roteiro={titulo:"Simulador — Console DiGiCo SD/Quantum",cenas:[{numero:1,titulo:"Front oficial da DiGiCo",modo:"widget",
  narracao:"Opere a superfície SD/Quantum: Channel Overview, canal selecionado, encoders, camadas, macros/snapshots.",
  explicacao_texto:"Front fiel da DiGiCo SD/Quantum (SMU). Cada botão com sua função. Áudio da banda entra depois com os stems.",
  destaques:["Channel Overview (tela)","Bancos e camadas de fader","EQ 4 bandas na tela","Snapshots e macros"]}]};
const L=[];
L.push("-- Pleno 'Som — Formação Completa' — aula DiGiCo SD/Quantum. Aditivo/idempotente. NÃO recria módulo.");
L.push("begin;");
L.push(`delete from public.ai_animations where lesson_id = ${q(LESSON)};`);
L.push(`delete from public.quizzes where id = ${q(QUIZ)};`);
L.push(`delete from public.lessons where id = ${q(LESSON)};`);
L.push(`insert into public.lessons (id,module_id,titulo,tipo,conteudo_rico,duracao_min,ordem,tem_quiz,preview_gratis) values`);
L.push(`  (${q(LESSON)},${q(MODULE)},${q("DiGiCo SD/Quantum — tela, bancos e snapshots (front oficial)")},'texto',${q(conteudo)},28,3,true,false);`);
L.push(`insert into public.quizzes (id,lesson_id,titulo) values (${q(QUIZ)},${q(LESSON)},${q("Quiz — Console DiGiCo SD/Quantum")});`);
questoes.forEach((qq,i)=>{const id=QQ(i+1);
  L.push(`insert into public.quiz_questions (id,quiz_id,texto,explicacao,ordem,pontos) values (${q(id)},${q(QUIZ)},${q(qq.t)},${q(qq.e)},${i+1},1);`);
  qq.o.forEach(([t,c],j)=>L.push(`insert into public.quiz_options (question_id,texto,correta,ordem) values (${q(id)},${q(t)},${c},${j+1});`));});
L.push(`insert into public.ai_animations (lesson_id,tipo,status,model,custo_usd,roteiro,urls) values (${q(LESSON)},'interactive','ready','handcrafted-interactive',0,${jsonb(roteiro)},${jsonb([{html:sim}])});`);
L.push(`update public.courses set total_aulas = 4 where id = ${q(COURSE)};`);
L.push("commit;");L.push("");
const out=path.join(ROOT,"supabase/migrations/20260714_pleno_digico.sql");
fs.writeFileSync(out,L.join("\n"),"utf8");
console.log("OK ->",path.relative(ROOT,out),"|",(fs.statSync(out).size/1024).toFixed(1),"KB");
