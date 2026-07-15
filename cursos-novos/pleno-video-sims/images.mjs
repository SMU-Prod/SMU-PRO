// Manifesto de imagens realistas do PLENO VÍDEO. Pasta media/img-video-pleno/.
export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-video-pleno";
export const imgUrl = (slug) => `${SB}${FOLDER}/${slug}.jpg`;

export const IMAGES = {
  "vj-operando": { alt:"VJ operando um notebook com controlador MIDI num show, com um grande telão de LED exibindo visuais atrás do palco.", caption:"O VJ ao vivo: laptop, controlador e a composição saindo no telão de LED do palco." },
  "operador-switcher-show": { alt:"Diretor de corte operando uma mesa de corte profissional com botões PGM/PVW iluminados e T-bar, diante de uma parede de monitores multiview de um show.", caption:"O diretor de corte: mãos na mesa, olhos no multiview — prepara no PVW e manda ao PGM." },
  "rack-processadores-led": { alt:"Rack de processadores de LED e switches de rede com dezenas de cabos de rede azuis e verdes plugados em portas RJ45.", caption:"Rack de processadores de LED: cada porta Gigabit alimenta um trecho da parede pelo cabo de rede." },
  "telao-led-palco": { alt:"Telão de LED gigante e curvo num palco de show, exibindo visuais brilhantes, com fachos de luz e plateia em silhueta.", caption:"O telão de LED em escala de show: milhares de cabinets formando uma única imagem." },
  "projecao-mapping": { alt:"Projeção mapeada (video mapping) numa fachada à noite, com padrões geométricos alinhados à arquitetura.", caption:"Video mapping: a imagem projetada é deformada (warp) para encaixar exatamente na superfície." },
  "camera-ptz-imag": { alt:"Câmera de vídeo profissional em tripé captando o palco, com a imagem aparecendo ao vivo num telão de LED (IMAG) ao fundo.", caption:"Captação e IMAG: a câmera alimenta o telão para o público ver de perto quem está no palco." },
  "cabine-video-multiview": { alt:"Cabine de vídeo de evento com uma parede de monitores multiview e programa, mesas de corte e notebooks, vista por trás dos operadores.", caption:"A cabine de vídeo: multiview, programa, mesas e computadores — o centro nervoso do vídeo do evento." },
  "fibra-sdi-pro": { alt:"Conectores profissionais de transporte de vídeo: BNC em cabo coaxial, fibra óptica com conector LC e conector de câmera de fibra.", caption:"Transporte profissional: BNC/coaxial (SDI), fibra óptica (LC) e conectores robustos de câmera." },
};

export function figure(slug){
  const im = IMAGES[slug]; if(!im) return "";
  return `<figure style="margin:18px 0"><img src="${imgUrl(slug)}" alt="${(im.alt||"").replace(/"/g,'&quot;')}" style="width:100%;border-radius:10px;display:block"/>`+
         `<figcaption style="font-size:13px;color:#94a3b8;margin-top:6px;line-height:1.4">${im.caption||""}</figcaption></figure>`;
}
