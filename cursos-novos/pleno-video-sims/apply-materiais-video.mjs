// Aba MATERIAIS dos cursos de VÍDEO (video-basico + pleno-video) — ordem do dono 04/08:
// cada aula linka o MATERIAL OFICIAL do fabricante dos equipamentos que ela trata.
// PDF nunca entra no repo/Storage: aqui é só lessons.material_links (jsonb).
// Uso: node cursos-novos/pleno-video-sims/apply-materiais-video.mjs [--check] [--dry]
//   --check  só valida as URLs (HEAD/GET) e não escreve nada
//   --dry    mostra o que escreveria por aula, sem PATCH
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const DRY = process.argv.includes("--dry");
const CHECK = process.argv.includes("--check");
const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..");
const SVC = process.env.SUPABASE_SERVICE_KEY?.trim()
  || fs.readFileSync(path.join(RAIZ, ".local", "svckey"), "utf8").trim();
const REST = "https://pshynylvvkhhohftouoe.supabase.co/rest/v1";
const H = { apikey: SVC, Authorization: `Bearer ${SVC}`, "Content-Type": "application/json" };
async function req(method,p,body,extra={}){ const r=await fetch(REST+p,{method,headers:{...H,...extra},body:body?JSON.stringify(body):undefined}); const t=await r.text(); if(!r.ok) throw new Error(`${method} ${p} -> ${r.status}: ${t.slice(0,300)}`); return t?(t[0]==='['||t[0]==='{'?JSON.parse(t):t):null; }

// ── CATÁLOGO DE LINKS OFICIAIS ──────────────────────────────────────────────
// Um lugar só: corrigir link = 1 linha. `pt` quando o material tem português.
const L = {
  novalct:     { url:"https://oss.novastar.tech/uploads/2025/03/NovaLCT-LED-Configuration-Tool-for-Synchronous-Control-System-User-Manual-V5.7.1.pdf", idioma:"en", titulo:"NovaStar NovaLCT — User Manual V5.7.1", formato:"pdf" },
  novastar:    { url:"https://www.novastar.tech/", idioma:"en", titulo:"NovaStar — site oficial (processadores de LED)", formato:"pagina" },
  colorlight:  { url:"https://en.colorlightinside.com/product/download/381", idioma:"en", titulo:"Colorlight LEDVISION — downloads oficiais", formato:"pagina" },
  brompton:    { url:"https://www.bromptontech.com/wp-content/uploads/2025/11/Tessera-User-Manual-V3.5-Rev-D.pdf", idioma:"en", titulo:"Brompton Tessera — User Manual V3.5", formato:"pdf" },
  bromptonsite:{ url:"https://www.bromptontech.com/", idioma:"en", titulo:"Brompton Technology — site oficial", formato:"pagina" },
  atemman:     { url:"https://documents.blackmagicdesign.com/UserManuals/ATEM_Mini_Manual.pdf?_v=1783580410000", idioma:"pt", titulo:"Blackmagic ATEM Mini — manual oficial (inclui PT)", formato:"pdf" },
  atembr:      { url:"https://www.blackmagicdesign.com/br/products/atemmini", idioma:"pt", titulo:"Blackmagic ATEM Mini — página oficial (BR)", formato:"pagina" },
  v60hd:       { url:"https://static.roland.com/assets/media/pdf/V-60HD_v31_eng02_W.pdf", idioma:"en", titulo:"Roland V-60HD — Owner's Manual v3.1", formato:"pdf" },
  v60hdsite:   { url:"https://proav.roland.com/global/products/v-60hd/", idioma:"en", titulo:"Roland V-60HD — página oficial Pro A/V", formato:"pagina" },
  aquilon:     { url:"https://dwn01.analogway.com/Site+Internet/Series/LivePremier/Common/User+Manual/Aquilon_User_Manual_v6.2.pdf", idioma:"en", titulo:"Analog Way Aquilon — User Manual v6.2", formato:"pdf" },
  analogway:   { url:"https://www.analogway.com/", idioma:"en", titulo:"Analog Way — site oficial (LivePremier)", formato:"pagina" },
  resolume:    { url:"https://resolume.com/support/en", idioma:"en", titulo:"Resolume Arena — manual oficial (online)", formato:"pagina" },
  resolumeqs:  { url:"https://resolume.com/support/en/quickstart-tutorial", idioma:"en", titulo:"Resolume Arena — Quickstart Tutorial", formato:"pagina" },
  disguise:    { url:"https://help.disguise.one/", idioma:"en", titulo:"disguise — User Guide oficial", formato:"pagina" },
  watchout:    { url:"https://www.dataton.com/watchout", idioma:"en", titulo:"Dataton WATCHOUT — página oficial", formato:"pagina" },
  greenhippo:  { url:"https://www.green-hippo.com/", idioma:"en", titulo:"Green Hippo (Hippotizer) — site oficial", formato:"pagina" },
  modulopi:    { url:"https://www.modulo-pi.com/", idioma:"en", titulo:"Modulo Pi — site oficial (media servers)", formato:"pagina" },
  madmapper:   { url:"https://madmapper.com/", idioma:"en", titulo:"MadMapper — site oficial (video mapping)", formato:"pagina" },
  heavym:      { url:"https://www.heavym.net/", idioma:"en", titulo:"HeavyM — site oficial (video mapping)", formato:"pagina" },
  obs:         { url:"https://obsproject.com/", idioma:"pt", titulo:"OBS Studio — site oficial (gratuito)", formato:"pagina" },
  obskb:       { url:"https://obsproject.com/kb/", idioma:"en", titulo:"OBS Studio — Knowledge Base oficial", formato:"pagina" },
  vmix:        { url:"https://www.vmix.com/", idioma:"en", titulo:"vMix — site oficial", formato:"pagina" },
  vmixhelp:    { url:"https://www.vmix.com/help/", idioma:"en", titulo:"vMix — documentação oficial", formato:"pagina" },
  ndi:         { url:"https://ndi.video/", idioma:"en", titulo:"NDI — site oficial (vídeo por rede)", formato:"pagina" },
  hdmi:        { url:"https://www.hdmi.org/", idioma:"en", titulo:"HDMI.org — especificação oficial HDMI", formato:"pagina" },
  hdbaset:     { url:"https://hdbaset.org/", idioma:"en", titulo:"HDBaseT Alliance — site oficial", formato:"pagina" },
  neutrik:     { url:"https://www.neutrik.com/", idioma:"en", titulo:"Neutrik — conectores profissionais (opticalCON/etherCON)", formato:"pagina" },
  decimator:   { url:"https://decimator.com/", idioma:"en", titulo:"Decimator Design — conversores SDI/HDMI", formato:"pagina" },
  aja:         { url:"https://www.aja.com/", idioma:"en", titulo:"AJA — Mini-Converters (site oficial)", formato:"pagina" },
  bmdconv:     { url:"https://www.blackmagicdesign.com/br/products/microconverters", idioma:"pt", titulo:"Blackmagic Micro Converters — página oficial (BR)", formato:"pagina" },
  decklink:    { url:"https://www.blackmagicdesign.com/br/products/decklink", idioma:"pt", titulo:"Blackmagic DeckLink (placas de captura) — página oficial (BR)", formato:"pagina" },
  resolve:     { url:"https://www.blackmagicdesign.com/br/products/davinciresolve", idioma:"pt", titulo:"DaVinci Resolve — página oficial (BR, gratuito)", formato:"pagina" },
  premiere:    { url:"https://www.adobe.com/br/products/premiere.html", idioma:"pt", titulo:"Adobe Premiere Pro — página oficial (BR)", formato:"pagina" },
  hap:         { url:"https://hap.video/", idioma:"en", titulo:"Codec HAP — site oficial", formato:"pagina" },
  epson:       { url:"https://epson.com.br/", idioma:"pt", titulo:"Epson Brasil — projetores", formato:"pagina" },
  panaproj:    { url:"https://panasonic.net/cns/projector/", idioma:"en", titulo:"Panasonic Projector — site oficial", formato:"pagina" },
  christie:    { url:"https://www.christiedigital.com/", idioma:"en", titulo:"Christie — projetores profissionais", formato:"pagina" },
  // barco: responde 403 para checagem automatizada (anti-bot, caso igual ao da Colorlight
  // no LINKS.md) — o site abre normal em navegador. Não é link morto.
  barco:       { url:"https://www.barco.com/", idioma:"en", titulo:"Barco — projetores e LED profissionais", formato:"pagina" },
  absen:       { url:"https://www.absen.com/", idioma:"en", titulo:"Absen — painéis de LED (site oficial)", formato:"pagina" },
  unilumin:    { url:"https://en.unilumin.com/", idioma:"en", titulo:"Unilumin — painéis de LED (site oficial)", formato:"pagina" },
  sonyptz:     { url:"https://pro.sony/br_BR/products/ptz-network-cameras", idioma:"pt", titulo:"Sony PTZ — câmeras profissionais (BR)", formato:"pagina" },
  panaptz:     { url:"https://pro-av.panasonic.net/en/", idioma:"en", titulo:"Panasonic ProAV — câmeras e PTZ", formato:"pagina" },
  bmdcam:      { url:"https://www.blackmagicdesign.com/br/products/blackmagicstudiocamera", idioma:"pt", titulo:"Blackmagic Studio Camera — página oficial (BR)", formato:"pagina" },
  clearcom:    { url:"https://www.clearcom.com/", idioma:"en", titulo:"Clear-Com — intercom profissional", formato:"pagina" },
  hollyland:   { url:"https://www.hollyland.com/", idioma:"en", titulo:"Hollyland — intercom e link de vídeo sem fio", formato:"pagina" },
  teradek:     { url:"https://teradek.com/", idioma:"en", titulo:"Teradek — encoders de streaming profissionais", formato:"pagina" },
  ytlive:      { url:"https://support.google.com/youtube/answer/2474026", idioma:"pt", titulo:"YouTube — Introdução a transmissões ao vivo (oficial)", formato:"pagina" },
  ytbitrate:   { url:"https://support.google.com/youtube/answer/2853702", idioma:"pt", titulo:"YouTube — resoluções e bitrates recomendados (oficial)", formato:"pagina" },
  twitch:      { url:"https://help.twitch.tv/s/article/broadcasting-guidelines", idioma:"en", titulo:"Twitch — Broadcasting Guidelines (oficial)", formato:"pagina" },
};

// ── MAPA aula -> links ──────────────────────────────────────────────────────
// video-basico 711* / pleno-video (nativos + faixas 721/731/741/751/7f1).
const A = (n)=>`71100000-0000-4000-9000-0000000000${String(n).padStart(2,"0")}`;
const MAPA = {
  // ===== VÍDEO BÁSICO =====
  [A(1)]:  ["atemman","resolumeqs","novalct"],              // 1.1 função do técnico
  [A(2)]:  ["hdmi","atemman"],                              // 1.2 resolução/proporção
  [A(3)]:  ["atemman","v60hd"],                             // 1.3 frame rate/sinal
  [A(4)]:  ["hdmi","neutrik","decimator"],                  // 2.1 cabos e conectores
  [A(5)]:  ["hdbaset","ndi","neutrik"],                     // 2.2 fibra/HDBaseT/rede
  [A(6)]:  ["decimator","bmdconv","aja"],                   // 2.3 conversores/scalers
  [A(7)]:  ["resolume","obs"],                              // 2.4 estação do técnico
  [A(8)]:  ["absen","unilumin","epson"],                    // 2.5 escolha da tela
  [A(9)]:  ["novalct","colorlight","brompton"],             // 3.1 telão de LED por dentro
  [A(10)]: ["epson","panaproj","christie"],                 // 3.2 projeção
  [A(11)]: ["atemman","atembr","v60hd"],                    // 3.3 mesa de corte básica
  [A(12)]: ["atemman","novalct","resolumeqs"],              // 3.4 cadeia/checklist

  // ===== PLENO VÍDEO — nativos =====
  "86afa2ea-8e43-4458-96fc-7a12b6b6dec1": ["atemman","resolume","disguise"],        // 1.1 função
  "fe816937-1c38-4c2b-92d2-f03af6cfb138": ["hdmi","atemman"],                       // 1.2 resolução/fps
  "0d50ba2c-29f5-40a2-809c-7e3467852c18": ["resolume","obs","vmix"],                // 2.1 estação
  "1e38a69a-2351-4d7d-ad41-27f278f9e49e": ["hdmi","neutrik","hdbaset"],             // 2.2 cabos
  "b7a403fa-e75c-4240-8988-bf6949592d06": ["decimator","aja","decklink"],           // 2.3 conversores/captura
  "afbd3452-6272-4f3c-82b3-acc06ca9e63e": ["absen","unilumin","barco"],             // 3.1 tecnologias de tela
  "f62fc874-4863-4615-9181-70c5897a6998": ["novalct","brompton","colorlight"],      // 3.2 anatomia do telão
  "9d5f181a-170a-4593-919d-5a119a3b25d1": ["epson","panaproj","christie"],          // 3.3 projeção
  "015f5acc-0d96-43ca-920c-1184115b904e": ["atemman","atembr","v60hd"],             // 4.1 switchers
  "54cd80d5-8c82-4c15-99a1-e411c851ec62": ["resolume","resolumeqs"],                // 4.2 Resolume
  "9f3894e5-b753-4183-a302-c5374c579115": ["watchout","modulopi","disguise","greenhippo"], // 4.3 media servers
  "3fcd525f-7bb3-4a36-b52c-3806a5702d90": ["madmapper","heavym","resolume"],        // 5.1 mapping
  "fb55c65c-c367-48c1-8961-74cd0f6c8062": ["resolve","premiere"],                   // 5.2 edição
  "1659c14b-12d7-40e3-aede-ec54126a8bea": ["hap","resolume"],                       // 6.1 encode/mídia
  "6ebdfbb2-c6b9-4bd9-b486-03f040b2aa0e": ["v60hd","aquilon"],                      // 6.2 rider/documentação
  "8cd7ef59-d8dc-41c9-8c4e-2dc90d04f317": ["atemman","v60hd","aquilon"],            // 7.1 switchers catálogo
  "13e8692d-5ad5-4b97-9235-59d47d847911": ["resolume","watchout","disguise","greenhippo"], // 7.2 media servers
  "d7bafede-fd0f-44fe-be6f-c0bcbcc89874": ["novalct","colorlight","brompton"],      // 7.3 LED/processadores
  "200cf42a-7ac2-4138-81b0-1e97e3b5d526": ["epson","christie","barco","panaproj"],  // 7.4 projeção
  "da0574ff-8ddf-4059-85db-b5b005f987c7": ["sonyptz","panaptz","decklink"],         // 7.5 câmeras/PTZ
  "eeb3d3a7-838f-4662-abdf-e3e42083ec25": ["ndi","hdbaset","neutrik"],              // 7.6 conexões/NDI

  // ===== PLENO VÍDEO — M8 sims =====
  "72100000-0000-4000-9000-000000000b01": ["novalct","novastar"],                   // 8.1 NovaStar
  "72100000-0000-4000-9000-000000000b02": ["atemman","v60hd"],                      // 8.2 mesa de corte
  "72100000-0000-4000-9000-000000000b03": ["resolume","resolumeqs"],                // 8.3 Resolume
  // ===== M9 processadores por marca =====
  "73100000-0000-4000-9000-000000000c01": ["novalct","novastar"],                   // 9.1 NovaLCT
  "73100000-0000-4000-9000-000000000c02": ["colorlight"],                           // 9.2 LEDVISION
  "73100000-0000-4000-9000-000000000c03": ["brompton","bromptonsite"],              // 9.3 Tessera
  // ===== M10 dia a dia =====
  "74100000-0000-4000-9000-000000000d01": ["hdmi","novalct"],                       // 10.1 ligação
  "74100000-0000-4000-9000-000000000d02": ["novalct","resolume"],                   // 10.2 mapeamento
  // ===== M11 switchers por marca =====
  "75100000-0000-4000-9000-000000000e01": ["atemman","atembr"],                     // 11.1 ATEM
  "75100000-0000-4000-9000-000000000e02": ["v60hd","v60hdsite"],                    // 11.2 V-60HD
  "75100000-0000-4000-9000-000000000e03": ["aquilon","analogway"],                  // 11.3 Aquilon
  // ===== M12 transmissão =====
  "7f100000-0000-4000-9000-000000001201": ["obs","vmix","ytlive"],                  // 12.1 cadeia
  "7f100000-0000-4000-9000-000000001202": ["obs","obskb","vmixhelp"],               // 12.2 OBS/vMix
  "7f100000-0000-4000-9000-000000001203": ["ytbitrate","twitch"],                   // 12.3 bitrate
  "7f100000-0000-4000-9000-000000001204": ["obskb","vmixhelp"],                     // 12.4 áudio da live
  "7f100000-0000-4000-9000-000000001205": ["obs","vmix","teradek"],                 // 12.5 operação
  "7f100000-0000-4000-9000-000000001206": ["ytlive","vmix"],                        // 12.6 estudo de caso
  // ===== M13 câmera e IMAG =====
  "7f100000-0000-4000-9000-000000001301": ["sonyptz","panaptz","bmdcam"],           // 13.1 câmera
  "7f100000-0000-4000-9000-000000001302": ["atemman","sonyptz"],                    // 13.2 IMAG
  "7f100000-0000-4000-9000-000000001303": ["clearcom","hollyland"],                 // 13.3 intercom
  "7f100000-0000-4000-9000-000000001304": ["watchout","disguise","modulopi"],       // 13.4 media server
  "7f100000-0000-4000-9000-000000001305": ["brompton","novalct"],                   // 13.5 cor/engenharia
  "7f100000-0000-4000-9000-000000001306": ["atemman","novalct"],                    // 13.6 dia do técnico
};

// ── validação de URL (HEAD; cai para GET se o site não aceitar HEAD) ────────
async function checkUrl(url){
  const tryOnce = async (method) => {
    const ctl = new AbortController(); const t = setTimeout(()=>ctl.abort(), 15000);
    try {
      const r = await fetch(url, { method, redirect:"follow", signal: ctl.signal,
        headers: { "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) smu-linkcheck" } });
      return r.status;
    } finally { clearTimeout(t); }
  };
  try { const s = await tryOnce("HEAD"); if (s < 400) return s; if (s===405||s===403||s===404) { const g = await tryOnce("GET"); return g; } return s; }
  catch { try { return await tryOnce("GET"); } catch(e){ return "ERR " + (e.cause?.code || e.name); } }
}

(async()=>{
  console.log(`== Materiais VÍDEO ${CHECK?"(CHECK)":DRY?"(DRY)":""} ==`);
  // consistência do mapa
  for(const [lid,keys] of Object.entries(MAPA)) for(const k of keys)
    if(!L[k]) throw new Error(`aula ${lid}: chave desconhecida "${k}"`);

  if(CHECK){
    const usados = [...new Set(Object.values(MAPA).flat())];
    let ruins=0;
    for(const k of usados){
      const s = await checkUrl(L[k].url);
      const ok = typeof s==="number" && s<400;
      if(!ok) ruins++;
      console.log(`  ${ok?"ok ":"!! "} [${k}] ${s}  ${L[k].url}`);
    }
    console.log(ruins? `\n${ruins} link(s) com problema — corrija antes do apply.` : "\nTodos os links respondem.");
    await new Promise(r=>setTimeout(r,250));
    return;
  }

  let n=0;
  for(const [lid,keys] of Object.entries(MAPA)){
    const links = keys.map(k=>L[k]);
    if(DRY){ console.log(`  ${lid.slice(0,8)}… -> ${keys.join(", ")}`); continue; }
    const rows = await req("GET", `/lessons?id=eq.${lid}&select=id,titulo`);
    if(!rows.length){ console.log(`  ! aula ${lid} NÃO EXISTE — pulei`); continue; }
    await req("PATCH", `/lessons?id=eq.${lid}`, { material_links: links }, {Prefer:"return=minimal"});
    n++;
    console.log(`  ${rows[0].titulo.slice(0,58)} <- ${keys.length} link(s)`);
  }
  console.log(`DONE. ${n} aulas atualizadas.`);
  await new Promise(r=>setTimeout(r,250));
})().catch(async e=>{ console.error("FALHOU:", e.message); await new Promise(r=>setTimeout(r,250)); process.exit(1); });
