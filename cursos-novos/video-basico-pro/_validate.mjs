import { COURSE, MODULES, LAYOUT, readFrag, readQuiz, readSim, figure } from "./build.mjs";
let totalQ=0, sims=0, imgs=0;
for(const it of LAYOUT){
  const frag=readFrag(it.frag);
  const q=readQuiz(it.frag);
  const nImg=(frag.match(/<figure/g)||[]).length;
  imgs+=nImg;
  const leftover=(frag.match(/\{\{IMG:/g)||[]).length;
  if(q) totalQ+=q.questoes.length;
  let simLen=0; if(it.sim){ simLen=(readSim(it.sim)||'').length; sims++; }
  console.log(`M${it.mod} ${it.frag.padEnd(34)} ${frag.length}B img=${nImg} leftover=${leftover} quiz=${q?q.questoes.length:'—'} sim=${simLen? (simLen/1024|0)+'KB':'—'}`);
}
console.log(`\nMódulos=${MODULES.length} Aulas=${LAYOUT.length} Quizzes-Q=${totalQ} Figuras=${imgs} Sims=${sims}`);
