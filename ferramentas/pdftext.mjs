// Extrator de texto de PDF, sem dependência externa (não precisa de poppler/pdftotext).
//
// PARA QUE SERVE: ler a tabela de ESPECIFICAÇÕES nos manuais oficiais dos fabricantes —
// a regra nº 2 do projeto ("vá na fonte de verdade antes de construir") só funciona se a
// fonte abrir. Foi assim que se descobriu que a Sennheiser não publica o driver do HD 25 e
// que o HDJ-X10 pesa 328 g (e não 330).
//
//   node ferramentas/pdftext.mjs manual.pdf ["regex-filtro"]
//   node ferramentas/pdftext.mjs hdj-x10.pdf "Impedance|SPECIFICATIONS"
//
// Baixe o manual direto do fabricante, ex.:
//   curl -sL -o hdj-x10.pdf https://downloads.support.alphatheta.com/manuals/headphones/HDJ-X10/HDJ-X10_DRC1760F_manual.pdf
// Dica: a página "specifications" do produto costuma revelar a URL real do PDF do manual.
//
// DETALHES QUE CUSTARAM CARO (não "simplifique" sem ler):
//  - Manuais da AlphaTheta/Pioneer vêm CRIPTOGRAFADOS (Standard Security Handler, AESV2).
//    A senha de usuário é VAZIA — o PDF abre em qualquer leitor, a criptografia só carrega
//    restrições de permissão. A chave sai do algoritmo 2 da especificação e é validada aqui
//    contra o /U do próprio arquivo.
//  - O /O e o /U têm 32 bytes ALEATÓRIOS: um indexOf("/O ") acha um falso "/O " DENTRO do /U
//    e deriva a chave errada. Por isso readString casa a chave como token (regex), não substring.
//  - O tamanho do stream vem do /Length do dicionário. Fatiar até "endstream" arrasta o EOL
//    que o escritor insere antes da palavra-chave e o bloco AES fica com 1 byte sobrando
//    ("wrong final block length").
//  - O OpenSSL 3 tirou o RC4 do provider padrão; por isso o RC4 aqui é em JS puro.
//
// Suporta: RC4 e AESV2/AESV3, FlateDecode. Ignora imagens (JPXDecode) e streams sem texto —
// os avisos de inflate em objetos não-texto são esperados e inofensivos.
import fs from "node:fs";
import zlib from "node:zlib";
import crypto from "node:crypto";

const PAD = Buffer.from([
  0x28, 0xbf, 0x4e, 0x5e, 0x4e, 0x75, 0x8a, 0x41, 0x64, 0x00, 0x4e, 0x56, 0xff, 0xfa, 0x01, 0x08,
  0x2e, 0x2e, 0x00, 0xb6, 0xd0, 0x68, 0x3e, 0x80, 0x2f, 0x0c, 0xa9, 0xfe, 0x64, 0x53, 0x69, 0x7a,
]);
const md5 = b => crypto.createHash("md5").update(b).digest();

// OpenSSL 3 tirou o RC4 do provider padrão; o PDF ainda precisa dele para R<=4.
function rc4(key, data) {
  const S = new Uint8Array(256);
  for (let i = 0; i < 256; i++) S[i] = i;
  for (let i = 0, j = 0; i < 256; i++) {
    j = (j + S[i] + key[i % key.length]) & 255;
    [S[i], S[j]] = [S[j], S[i]];
  }
  const out = Buffer.alloc(data.length);
  for (let n = 0, i = 0, j = 0; n < data.length; n++) {
    i = (i + 1) & 255; j = (j + S[i]) & 255;
    [S[i], S[j]] = [S[j], S[i]];
    out[n] = data[n] ^ S[(S[i] + S[j]) & 255];
  }
  return out;
}

/** Lê uma string PDF literal `(...)` a partir de `pos` (que aponta para o "("), devolvendo os bytes. */
function readLiteral(buf, pos) {
  const out = [];
  let depth = 0;
  for (let i = pos; i < buf.length; i++) {
    const c = buf[i];
    if (c === 0x5c) { // backslash
      const n = buf[i + 1];
      const map = { 0x6e: 10, 0x72: 13, 0x74: 9, 0x62: 8, 0x66: 12 };
      if (n >= 0x30 && n <= 0x37) { // octal
        let o = "";
        let j = i + 1;
        while (j < buf.length && o.length < 3 && buf[j] >= 0x30 && buf[j] <= 0x37) o += String.fromCharCode(buf[j++]);
        out.push(parseInt(o, 8) & 0xff); i = j - 1;
      } else if (map[n] !== undefined) { out.push(map[n]); i++; }
      else if (n === 10) { i++; }
      else { out.push(n); i++; }
      continue;
    }
    if (c === 0x28) { depth++; if (depth === 1) continue; }
    if (c === 0x29) { depth--; if (depth === 0) return { bytes: Buffer.from(out), end: i }; }
    if (depth >= 1) out.push(c);
  }
  return { bytes: Buffer.from(out), end: buf.length };
}
/** Lê a string `(literal)` ou `<hex>` da chave `/Nome`. Casa a chave como TOKEN: um
 *  indexOf simples acha "/O " dentro dos bytes aleatórios da string /U e deriva chave errada. */
function readString(buf, s, key) {
  let m = new RegExp(`${key}\\s*\\(`).exec(s);
  if (m) return readLiteral(buf, m.index + m[0].length - 1).bytes;
  m = new RegExp(`${key}\\s*<([0-9a-fA-F\\s]+)>`).exec(s);
  if (m) return Buffer.from(m[1].replace(/\s/g, ""), "hex");
  return null;
}

const file = process.argv[2];
const filtro = process.argv[3] ? new RegExp(process.argv[3], "i") : null;
const buf = fs.readFileSync(file);
const s = buf.toString("latin1");

/* ---------- chave do arquivo (Algoritmo 2 da especificação PDF) ---------- */
let fileKey = null, cfm = "None";
const encIdx = s.indexOf("/Filter/Standard") >= 0 ? s.indexOf("/Filter/Standard") : s.indexOf("/Standard");
if (encIdx >= 0) {
  const dictStart = s.lastIndexOf("obj", encIdx);
  const dict = s.slice(dictStart, s.indexOf("endobj", encIdx));
  const dbuf = Buffer.from(dict, "latin1");
  const R = +(/\/R\s+(\d+)/.exec(dict)?.[1] || 4);
  const V = +(/\/V\s+(\d+)/.exec(dict)?.[1] || 4);
  const P = +(/\/P\s+(-?\d+)/.exec(dict)?.[1] || -1);
  // O /Length do DOCUMENTO (em bits, ex.: 128) vive na raiz do dicionário. Dentro de /CF há OUTRO
  // /Length, do crypt filter, em BYTES (ex.: 16). A ordem das chaves muda de PDF para PDF:
  //   HDJ-X10: <<…/Length 128/CF<</StdCF<<…/Length 16>>>>   -> o primeiro é o certo
  //   SP-404 : <</CF<</StdCF<<…/Length 16>>>>/…/Length 128   -> o primeiro é o do CF!
  // Pegar "o primeiro /Length" dava chave de 2 bytes (16>>3) no SP-404 e decifrava tudo como lixo —
  // sem lançar erro, o que é pior: parecia PDF sem texto. Por isso o /CF é removido antes.
  const dictRaiz = dict.replace(/\/CF\s*<<[\s\S]*?>>\s*>>/, "");
  const len = +(/\/Length\s+(\d+)/.exec(dictRaiz)?.[1] || 128);
  cfm = /\/CFM\s*\/(\w+)/.exec(dict)?.[1] || (V >= 4 ? "AESV2" : "V2");
  const O = readString(dbuf, dict, "/O");
  const encMeta = !/\/EncryptMetadata\s+false/.test(dict);
  const id0 = Buffer.from(/\/ID\s*\[\s*<([0-9a-fA-F]+)>/.exec(s)?.[1] || "", "hex");
  const n = R === 2 ? 5 : len >> 3;

  const pb = Buffer.alloc(4);
  pb.writeInt32LE(P, 0);
  let h = Buffer.concat([PAD, O.subarray(0, 32), pb, id0, R >= 4 && !encMeta ? Buffer.from([0xff, 0xff, 0xff, 0xff]) : Buffer.alloc(0)]);
  let key = md5(h);
  if (R >= 3) for (let i = 0; i < 50; i++) key = md5(key.subarray(0, n));
  fileKey = key.subarray(0, n);
  console.error(`[cripto] PDF protegido: R=${R} V=${V} CFM=${cfm} — senha de usuário vazia, decifrando`);
}
function objKey(num, gen) {
  const e = Buffer.alloc(5);
  e.writeUIntLE(num, 0, 3); e.writeUIntLE(gen, 3, 2);
  const salt = cfm.startsWith("AES") ? Buffer.from([0x73, 0x41, 0x6c, 0x54]) : Buffer.alloc(0);
  return md5(Buffer.concat([fileKey, e, salt])).subarray(0, Math.min(fileKey.length + 5, 16));
}
function decrypt(data, num, gen) {
  if (!fileKey) return data;
  const k = objKey(num, gen);
  if (cfm.startsWith("AES")) {
    const iv = data.subarray(0, 16);
    const d = crypto.createDecipheriv("aes-128-cbc", k, iv);
    d.setAutoPadding(false);
    const out = Buffer.concat([d.update(data.subarray(16)), d.final()]);
    const pad = out[out.length - 1];
    return pad >= 1 && pad <= 16 ? out.subarray(0, out.length - pad) : out;
  }
  return rc4(k, data);
}

/* ---------- percorre os objetos ---------- */
const objs = new Map();   // num -> {head, data|null}
const falhas = { dec: 0, inf: 0 };
let perdidos = 0;   // glifos sem entrada no /ToUnicode — cada um vira "�" no texto (ver extrairTexto)

function lerStream(head, stStart, num, gen) {
  let a = stStart + 6;
  if (buf[a] === 0x0d) a++;
  if (buf[a] === 0x0a) a++;
  const e = s.indexOf("endstream", a);
  if (e < 0) return null;
  // O tamanho vem do /Length do dicionário: fatiar até "endstream" arrasta o EOL que o
  // escritor insere antes da palavra-chave, e o bloco AES fica com 1 byte sobrando.
  const declared = /\/Length\s+(\d+)(?!\s+\d+\s+R)/.exec(head)?.[1];
  let end = declared ? a + +declared : e;
  if (end > e || end <= a) end = e;
  let raw = buf.subarray(a, end);
  if (!declared) while (raw.length && (raw[raw.length - 1] === 0x0a || raw[raw.length - 1] === 0x0d)) raw = raw.subarray(0, raw.length - 1);
  try { raw = decrypt(raw, num, gen); } catch { falhas.dec++; return null; }
  if (!/FlateDecode/.test(head)) return raw;
  try { return zlib.inflateSync(raw); } catch { falhas.inf++; return null; } // stream não-texto: esperado
}

const objRe = /(\d+)\s+(\d+)\s+obj/g;
let m;
while ((m = objRe.exec(s))) {
  const num = +m[1], gen = +m[2];
  const st = s.indexOf("stream", m.index);
  const fim = s.indexOf("endobj", m.index);
  const temStream = st > 0 && (fim < 0 || st < fim);
  const head = s.slice(m.index, temStream ? st : (fim < 0 ? m.index + 400 : fim));
  objs.set(num, { head, data: temStream ? lerStream(head, st, num, gen) : null });
}

// Object streams (/Type/ObjStm) guardam objetos SEM stream comprimidos juntos — as fontes
// costumam morar aí. Sem expandir isso, o /ToUnicode simplesmente não é encontrado.
for (const [, o] of [...objs]) {
  if (!/\/ObjStm/.test(o.head) || !o.data) continue;
  const first = +(/\/First\s+(\d+)/.exec(o.head)?.[1] || 0);
  const n = +(/\/N\s+(\d+)/.exec(o.head)?.[1] || 0);
  const txt = o.data.toString("latin1");
  const nums = txt.slice(0, first).trim().split(/\s+/).map(Number);
  for (let i = 0; i < n; i++) {
    const on = nums[i * 2], off = nums[i * 2 + 1], nxt = i + 1 < n ? nums[i * 2 + 3] : o.data.length - first;
    if (!Number.isFinite(on)) continue;
    if (!objs.has(on) || objs.get(on).data === null) objs.set(on, { head: txt.slice(first + off, first + nxt), data: null, dentroDeObjStm: true });
  }
}

const resolve = ref => { const r = /^\s*(\d+)\s+\d+\s+R/.exec(ref); return r ? objs.get(+r[1]) : null; };

/* ---------- CMaps: o que traduz glifo -> letra ----------
   Os manuais da Pioneer usam fontes CID (Identity-H): o literal do PDF guarda o ÍNDICE DO GLIFO,
   não o código da letra. Sem o /ToUnicode da fonte, "SPECIFICATIONS" sai como bytes sem sentido.
   Cada fonte traz seu próprio mapa — e códigos iguais em fontes diferentes significam letras
   diferentes, por isso o mapa é resolvido POR FONTE (via Tf), nunca num dicionário global. */
const hexToStr = h => {
  let out = "";
  for (let i = 0; i + 3 < h.length + 1; i += 4) out += String.fromCharCode(parseInt(h.substr(i, 4), 16));
  // O destino do CMap costuma vir em UTF-16BE COM BOM (FEFF...); sem tirar, ele vaza para o texto.
  return out.replace(/﻿/g, "");
};
const cmapCache = new Map();
function parseToUnicode(fontObj) {
  if (!fontObj) return null;
  if (cmapCache.has(fontObj)) return cmapCache.get(fontObj);
  const tu = /\/ToUnicode\s+(\d+\s+\d+\s+R)/.exec(fontObj.head);
  let map = null;
  if (tu) {
    const st = resolve(tu[1]);
    if (st?.data) {
      map = new Map();
      const t = st.data.toString("latin1");
      // beginbfchar: <src> <dst>
      for (const b of t.match(/beginbfchar([\s\S]*?)endbfchar/g) || [])
        for (const p of b.match(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/g) || []) {
          const [, srcH, dstH] = /<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/.exec(p);
          map.set(parseInt(srcH, 16), hexToStr(dstH));
        }
      // beginbfrange: <lo> <hi> <dst>  |  <lo> <hi> [<d1> <d2> ...]
      for (const b of t.match(/beginbfrange([\s\S]*?)endbfrange/g) || []) {
        for (const p of b.match(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/g) || []) {
          const [, lo, hi, dst] = /<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>/.exec(p);
          const L = parseInt(lo, 16), Hh = parseInt(hi, 16), base = parseInt(dst, 16);
          for (let c = L; c <= Hh && c - L < 65536; c++) map.set(c, String.fromCharCode(base + (c - L)));
        }
        for (const p of b.match(/<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*\[([\s\S]*?)\]/g) || []) {
          const [, lo, , arr] = /<([0-9a-fA-F]+)>\s*<([0-9a-fA-F]+)>\s*\[([\s\S]*?)\]/.exec(p);
          let c = parseInt(lo, 16);
          for (const d of arr.match(/<([0-9a-fA-F]+)>/g) || []) map.set(c++, hexToStr(d.slice(1, -1)));
        }
      }
      if (!map.size) map = null;
    }
  }
  // 2 bytes por código quando é CID/Identity-H; 1 byte nas fontes simples (Latin1)
  const doisBytes = /Identity-H|\/Type0/.test(fontObj.head);
  const r = map ? { map, doisBytes } : (doisBytes ? { map: new Map(), doisBytes } : null);
  cmapCache.set(fontObj, r);
  return r;
}

/** /Resources /Font << /F1 10 0 R >> da página -> { F1: cmap } */
function fontesDaPagina(head) {
  const out = {};
  const fr = /\/Font\s*<<([\s\S]*?)>>/.exec(head);
  let dict = fr?.[1];
  if (!dict) { // /Resources pode ser referência indireta
    const rr = /\/Resources\s+(\d+\s+\d+\s+R)/.exec(head);
    const ro = rr && resolve(rr[1]);
    if (ro) dict = /\/Font\s*<<([\s\S]*?)>>/.exec(ro.head)?.[1];
  }
  if (!dict) return out;
  for (const p of dict.match(/\/(\w+)\s+(\d+\s+\d+\s+R)/g) || []) {
    const [, nome, ref] = /\/(\w+)\s+(\d+\s+\d+\s+R)/.exec(p);
    const c = parseToUnicode(resolve(ref));
    if (c) out[nome] = c;
  }
  return out;
}

/** Percorre o content stream rastreando a fonte ativa (Tf) e decodifica cada literal com o CMap dela. */
function extrairTexto(txt, fontes) {
  let atual = null, out = "";
  // Em Identity-H o texto vem quase todo como `[<0029004800...> -20 <004C>] TJ` — hex DENTRO de
  // um array TJ. Casar só `<hex> Tj` (fora de array) perde a maior parte da página e devolve
  // frases pela metade, que é pior que não devolver nada: parece texto legítimo e engana.
  const tok = /\/(\w+)\s+[\d.-]+\s+Tf|\((?:\\.|[^\\()])*\)|<([0-9a-fA-F\s]+)>|\bT[Jj]\b|\bTd\b|\bTD\b|\bT\*\b|\bET\b/g;
  let x;
  while ((x = tok.exec(txt))) {
    if (x[1] !== undefined) { atual = fontes[x[1]] || null; continue; }
    if (/^(TJ|Tj|Td|TD|T\*|ET)$/.test(x[0])) { if (/^(Td|TD|T\*|ET)$/.test(x[0])) out += " "; continue; }
    let bytes;
    if (x[2] !== undefined) {
      const h = x[2].replace(/\s/g, "");
      if (h.length % 2) continue;                    // não é string hex de verdade
      bytes = Buffer.from(h, "hex");                 // <hex>, dentro ou fora de array TJ
    } else bytes = readLiteral(Buffer.from(x[0], "latin1"), 0).bytes;  // (literal)
    // BOM FE FF = a string é UTF-16BE, independente da fonte. Tem de ser testado ANTES de escolher
    // o caminho: tratada byte a byte (fonte de 1 byte), ela vira o lixo "þÿPower section" — foi
    // assim que "þÿ" apareceu grudado em cada bullet do manual do XDJ-RX2.
    if (bytes.length >= 2 && bytes[0] === 0xfe && bytes[1] === 0xff) {
      out += bytes.subarray(2).swap16().toString("utf16le");
      continue;
    }
    if (!atual) { out += bytes.toString("latin1"); continue; }
    if (!atual.doisBytes) {
      for (const b of bytes) out += atual.map.get(b) ?? String.fromCharCode(b);
    } else {
      for (let i = 0; i + 1 < bytes.length; i += 2) {
        const c = (bytes[i] << 8) | bytes[i + 1];
        const ch = atual.map.get(c);
        // Glifo fora do /ToUnicode: NÃO inventar letra — mas também NÃO sumir calado.
        // Omitir em silêncio faz "PASTE" virar "PAS" e a frase continuar parecendo inteira; foi
        // assim que o manual do VENU360 devolveu "the COPY/PAS the processing module" e passou
        // batido. Buraco marcado com "�" é honesto: dá para ver na tela e contar no rodapé.
        if (ch === undefined) { perdidos++; out += "�"; } else out += ch;
      }
    }
  }
  return out;
}

/* ---------- --diag: por que o texto sai truncado? ---------- */
if (process.argv.includes("--diag")) {
  const t = {};
  let comTU = 0, semTU = 0;
  for (const [num, o] of objs) {
    if (!/\/Type\s*\/Font/.test(o.head)) continue;
    const sub = /\/Subtype\s*\/(\w+)/.exec(o.head)?.[1] || "?";
    const tu = /\/ToUnicode/.test(o.head);
    const nome = /\/BaseFont\s*\/([\w+\-]+)/.exec(o.head)?.[1] || "(sem BaseFont)";
    tu ? comTU++ : semTU++;
    const k = `${sub.padEnd(12)} ${tu ? "TEM ToUnicode" : "SEM ToUnicode"}  ${nome}`;
    (t[k] ??= []).push(num);
  }
  for (const [k, v] of Object.entries(t)) console.log(`${k}  x${v.length}  objs: ${v.slice(0, 8).join(",")}${v.length > 8 ? "…" : ""}`);
  console.log(`\ntotal de fontes: ${comTU + semTU}  (${comTU} com ToUnicode, ${semTU} sem)`);
  const semFonte = [...objs].filter(([, o]) => /\/Type\s*\/Font/.test(o.head) && !/\/ToUnicode/.test(o.head));
  if (semFonte.length) console.log(`\nexemplo de fonte SEM ToUnicode:\n${semFonte[0][1].head.slice(0, 400)}`);
  process.exit(0);
}

/* ---------- extrai página a página ---------- */
const paginas = [];
for (const [num, o] of objs) {
  if (!o.data) continue;
  const txt = o.data.toString("latin1");
  if (!/\b(Tj|TJ)\b/.test(txt)) continue;
  // acha a página dona deste content stream, p/ pegar as fontes certas
  let fontes = fontesDaPagina(o.head);
  if (!Object.keys(fontes).length)
    for (const [, p] of objs)
      if (/\/Type\s*\/Page\b/.test(p.head) && new RegExp(`\\/Contents\\s+${num}\\s`).test(p.head)) { fontes = fontesDaPagina(p.head); break; }
  const texto = extrairTexto(txt, fontes).replace(/\s+/g, " ").trim();
  if (texto) paginas.push({ num, texto });
}
console.error(`[pdf] ${objs.size} objetos, ${paginas.length} com texto`, falhas);
if (perdidos) console.error(
  `[⚠️ BURACOS] ${perdidos} glifo(s) sem /ToUnicode viraram "�". O texto NÃO está completo:\n` +
  `   frase quebrada ("COPY/PAS…") passa por inteira e vira fato errado. Antes de concluir\n` +
  `   "o fabricante não publica X" neste PDF, confira as passagens com "�" em outro leitor.`);
for (const p of paginas) {
  if (filtro && !filtro.test(p.texto)) continue;
  console.log(`\n=========== obj ${p.num} ===========`);
  console.log(p.texto.slice(0, 6000));
}
