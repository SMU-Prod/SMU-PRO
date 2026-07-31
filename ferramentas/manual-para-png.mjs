#!/usr/bin/env node
/**
 * manual-para-png — vira PÁGINA DE MANUAL em PNG, para o layout-tracer medir.
 *
 * POR QUE ESTE ARQUIVO EXISTE
 * O pdftext.mjs lê o TEXTO do manual (spec, faixa de dB, comportamento de botão) e
 * foi escrito de propósito sem depender de poppler. Mas layout é DESENHO, não texto:
 * para copiar a posição das peças é preciso a página como IMAGEM. Faltava essa ponte,
 * e sem ela o layout de um aparelho novo saía no olho — que é o que a Regra 2 proíbe.
 *
 * DUAS PEGADINHAS QUE CUSTARAM TEMPO (não "simplifique" sem ler):
 *  1. O winget instala o poppler e cria alias, MAS o alias não resolve no Git Bash
 *     desta máquina: `pdftoppm` dá "command not found" mesmo depois de instalado.
 *     Por isso aqui o binário é procurado pelo CAMINHO REAL, em WinGet/Packages.
 *  2. Existe um `pdftotext` do mingw no PATH que NÃO é o do poppler. Se você testar
 *     com ele vai achar que está tudo certo e o pdftoppm continuar faltando.
 *
 * uso:
 *   node ferramentas/manual-para-png.mjs achar <manual.pdf>
 *        → varre o PDF e diz em que página está o diagrama do painel
 *   node ferramentas/manual-para-png.mjs <manual.pdf> <pagina> <saida-sem-extensao>
 *        → grava <saida>-NNN.png a 250 dpi, pronto para o layout-tracer
 *
 * depois:
 *   node ferramentas/layout-tracer.mjs grid  <png>      (grade para ler pixel)
 *   node ferramentas/layout-tracer.mjs build <spec.json> (gera -coords.js e -verify.png)
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

/* ---- acha o binário do poppler, sem depender do PATH ---- */
function bin(nome){
  const base=path.join(process.env.LOCALAPPDATA||"", "Microsoft","WinGet","Packages");
  const candidatos=[];
  const varrer=(dir,prof)=>{ if(prof>4)return;
    let itens=[]; try{ itens=fs.readdirSync(dir,{withFileTypes:true}); }catch(e){ return; }
    for(const it of itens){
      const p=path.join(dir,it.name);
      if(it.isDirectory()) varrer(p,prof+1);
      else if(it.name.toLowerCase()===nome+".exe") candidatos.push(p);
    } };
  if(fs.existsSync(base)) varrer(base,0);
  if(candidatos.length) return candidatos[0];
  /* fora do Windows / instalado no sistema */
  return nome;
}

const [,, a1, a2, a3] = process.argv;

if(!a1){ console.error("uso: manual-para-png.mjs [achar] <manual.pdf> [pagina] [saida]"); process.exit(1); }

/* ---- modo ACHAR: descobre a página do diagrama do painel ---- */
if(a1==="achar"){
  const pdf=a2; if(!pdf||!fs.existsSync(pdf)){ console.error("PDF não encontrado: "+pdf); process.exit(1); }
  const ptext=bin("pdftotext");
  /* os manuais da Pioneer/AlphaTheta chamam essa seção de "Part names" e o desenho
     de cima de "Top panel"/"Control Panel". A página do DESENHO é a que tem os dois
     títulos e quase nenhum texto corrido. */
  const alvos=[/Top panel/i,/Control Panel/i,/Part names and functions/i,/Part names/i];
  let achou=[];
  for(let p=1;p<=60;p++){
    let t=""; try{ t=execFileSync(ptext,["-f",String(p),"-l",String(p),pdf,"-"],{encoding:"utf8"}); }catch(e){ continue; }
    const limpo=t.replace(/\s+/g," ").trim();
    if(alvos.some(re=>re.test(limpo)) && limpo.length<1200)
      achou.push({pagina:p, tamanho:limpo.length, inicio:limpo.slice(0,70)});
  }
  if(!achou.length){ console.log("não achei página de diagrama nas primeiras 60."); process.exit(0); }
  /* a página do DESENHO tem pouco texto: as de texto corrido vêm depois */
  achou.sort((x,y)=>x.tamanho-y.tamanho);
  console.log("candidatas (a de MENOS texto costuma ser a do desenho):");
  for(const c of achou.slice(0,6)) console.log("  pág "+String(c.pagina).padStart(3)+"  ("+c.tamanho+" car)  "+c.inicio);
  process.exit(0);
}

/* ---- modo RENDER ---- */
const pdf=a1, pagina=a2, saida=a3;
if(!fs.existsSync(pdf)){ console.error("PDF não encontrado: "+pdf); process.exit(1); }
if(!pagina||!saida){ console.error("faltou a página ou o nome de saída"); process.exit(1); }
const ppm=bin("pdftoppm");
try{
  execFileSync(ppm,["-png","-r","250","-f",String(pagina),"-l",String(pagina),pdf,saida],{stdio:"inherit"});
}catch(e){
  console.error("pdftoppm falhou. Instale o poppler:  winget install --id oschwartz10612.Poppler -e");
  process.exit(1);
}
const gerado=fs.readdirSync(path.dirname(saida)||".")
  .filter(f=>f.startsWith(path.basename(saida))&&f.endsWith(".png"));
console.log("gerado: "+gerado.join(", "));
console.log("\npróximo passo:\n  node ferramentas/layout-tracer.mjs grid "+path.dirname(saida)+"/"+gerado[0]);
