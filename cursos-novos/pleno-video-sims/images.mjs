// Manifesto de imagens realistas do PLENO VÍDEO. Pasta media/img-video-pleno/.
export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-video-pleno";

// Algumas imagens boas moram na pasta do BÁSICO e são reaproveitadas aqui (não faz
// sentido gerar de novo o mesmo projetor/conversor). Este mapa diz onde cada uma está;
// o que não estiver listado assume a pasta do pleno.
const NO_BASICO = new Set([
  "proporcao-telas", "estacao-pc-video", "conversor-scaler",
  "telas-comparativo", "projetor-evento", "cabos-video-conectores",
]);
export const imgUrl = (slug) =>
  `${SB}${NO_BASICO.has(slug) ? "img-video-basico" : FOLDER}/${slug}.jpg`;

export const IMAGES = {
  "vj-operando": { alt:"VJ operando um notebook com controlador MIDI num show, com um grande telão de LED exibindo visuais atrás do palco.", caption:"O VJ ao vivo: laptop, controlador e a composição saindo no telão de LED do palco." },
  "operador-switcher-show": { alt:"Diretor de corte operando uma mesa de corte profissional com botões PGM/PVW iluminados e T-bar, diante de uma parede de monitores multiview de um show.", caption:"O diretor de corte: mãos na mesa, olhos no multiview — prepara no PVW e manda ao PGM." },
  "rack-processadores-led": { alt:"Rack de processadores de LED e switches de rede com dezenas de cabos de rede azuis e verdes plugados em portas RJ45.", caption:"Rack de processadores de LED: cada porta Gigabit alimenta um trecho da parede pelo cabo de rede." },
  "telao-led-palco": { alt:"Telão de LED gigante e curvo num palco de show, exibindo visuais brilhantes, com fachos de luz e plateia em silhueta.", caption:"O telão de LED em escala de show: milhares de cabinets formando uma única imagem." },
  "projecao-mapping": { alt:"Projeção mapeada (video mapping) numa fachada à noite, com padrões geométricos alinhados à arquitetura.", caption:"Video mapping: a imagem projetada é deformada (warp) para encaixar exatamente na superfície." },
  "camera-ptz-imag": { alt:"Câmera de vídeo profissional em tripé captando o palco, com a imagem aparecendo ao vivo num telão de LED (IMAG) ao fundo.", caption:"Captação e IMAG: a câmera alimenta o telão para o público ver de perto quem está no palco." },
  "cabine-video-multiview": { alt:"Cabine de vídeo de evento com uma parede de monitores multiview e programa, mesas de corte e notebooks, vista por trás dos operadores.", caption:"A cabine de vídeo: multiview, programa, mesas e computadores — o centro nervoso do vídeo do evento." },
  "fibra-sdi-pro": { alt:"Conectores profissionais de transporte de vídeo: BNC em cabo coaxial, fibra óptica com conector LC e conector de câmera de fibra.", caption:"Transporte profissional: BNC/coaxial (SDI), fibra óptica (LC) e conectores robustos de câmera." },

  // ── Conectores em macro (aula de cabos) — cada cabo com o SEU conector ──
  "conector-bnc-sdi": { alt:"Macro de dois conectores BNC: o macho na ponta do cabo coaxial, com anel de baioneta e pino central dourado, e o fêmea de painel.", caption:"BNC (SDI): o anel de baioneta gira 1/4 de volta e TRAVA — por isso é o padrão de câmera. Repare no pino central e nas ranhuras da trava." },
  "conector-fibra-lc": { alt:"Macro de um conector duplex LC de fibra óptica com dois ferrolhos cerâmicos e travas azuis, ao lado de um cabo tático de fibra com conector militar robusto.", caption:"Fibra: conector LC duplex (dois ferrolhos cerâmicos — um TX, um RX) e, ao lado, o cabo tático de campo com conector robusto." },
  "conector-hdmi-dp": { alt:"Macro comparando o conector HDMI tipo A, com seus 19 pinos dourados, e o DisplayPort, com o canto chanfrado e as travas laterais.", caption:"HDMI (esq.) não trava e vive caindo; DisplayPort (dir.) tem canto chanfrado e travas laterais — aperte para soltar." },
  "conector-rj45-hdbaset": { alt:"Macro de um plugue RJ45 transparente com os 8 contatos dourados, ligado a uma caixa extensora HDBaseT preta, com a segunda caixa do par ao lado.", caption:"RJ45/Cat: o par de caixas HDBaseT leva HDMI por cabo de rede até ~100 m — o mesmo cabo serve para NDI e Art-Net/sACN." },
  "conector-dvi-vga": { alt:"Macro do conector DVI branco com seu bloco de pinos e parafusos, ao lado do VGA azul com 15 pinos em três fileiras.", caption:"Legado: DVI (digital, parafusa) e VGA (analógico, 15 pinos). Ainda aparecem em projetor antigo — evite VGA quando houver alternativa." },

  // ── Equipamentos (aulas do pleno que estavam sem imagem) ──
  "media-server-rack": { alt:"Rack de media servers em produção ao vivo, com unidades de rack, LEDs de status e cabeamento organizado, com um monitor de preview acima.", caption:"O media server não é 'um PC com player': é rack, saídas sincronizadas, redundância e controle externo." },
  "sending-receiving-card": { alt:"Duas placas de circuito verdes lado a lado: a sending card com fileira de portas RJ45 e conector DVI, e a receiving card menor com pinos de cabo flat.", caption:"As duas placas do sistema de LED: a SENDING card (esq., no processador) e a RECEIVING card (dir., dentro do cabinet)." },
  "edicao-timeline": { alt:"Estação de edição de vídeo com timeline de várias trilhas coloridas e formas de onda, monitor de preview e mesa de controle com jog.", caption:"Edição para evento: a escolha do codec na exportação decide se o vídeo vai rodar liso no playback ou engasgar." },
  "rider-tecnico": { alt:"Mesa de produção vista de cima com desenhos técnicos do palco, checklist em prancheta, notebook com planilha, trena e rádio.", caption:"O rider técnico é o contrato do vídeo: medidas, resolução, quem fornece o quê, energia e horários — no papel, antes do dia." },
  "switchers-hardware": { alt:"Duas mesas de corte de hardware lado a lado: uma compacta com botões iluminados e T-bar pequeno, e uma de broadcast com duas fileiras de botões vermelhos e verdes.", caption:"Mesas de corte de hardware: botões que a mão acha no escuro e T-bar — confiabilidade que não depende de PC." },

  // ── Reaproveitadas da pasta do BÁSICO (ver NO_BASICO acima) ──
  // Precisam estar AQUI também: o figure() busca o slug neste mapa e, se não achar,
  // devolve string vazia — a imagem sumiria da aula sem nenhum aviso.
  "proporcao-telas": { alt:"Três telas em proporções diferentes lado a lado: widescreen 16:9, um painel quase quadrado e um painel vertical.", caption:"Proporções: 16:9, quase-quadrado e vertical. A resolução de trabalho tem que casar com a proporção real do telão." },
  "estacao-pc-video": { alt:"Computador de vídeo com a lateral aberta, mostrando a placa de vídeo dedicada e as saídas HDMI/DisplayPort na traseira.", caption:"A GPU é o coração da estação: é ela que decodifica o codec e alimenta as várias saídas." },
  "conversor-scaler": { alt:"Conversor/scaler de vídeo compacto de metal com portas HDMI e conectores BNC/SDI na traseira.", caption:"Conversor, scaler e frame-sync são coisas diferentes — e cada estágio na cadeia acrescenta latência." },
  "telas-comparativo": { alt:"Showroom de AV com as três tecnologias: monitor de TV em pedestal, painel modular de LED e projetor com tela.", caption:"A escolha da tela é decidida por nits, distância do público e controle de luz — nessa ordem." },
  "projetor-evento": { alt:"Projetor profissional de grande porte com lente de zoom destacada, projetando um facho de luz num ambiente escuro.", caption:"Projetor de evento: a lente (throw ratio) define o tamanho da imagem na distância disponível." },
};

export function figure(slug){
  const im = IMAGES[slug];
  // Falhar CALADO aqui já custou caro: o token virava string vazia e a aula era
  // publicada sem a imagem, sem ninguém perceber. Agora explode na cara.
  if(!im) throw new Error(`figure(): slug "${slug}" não está em IMAGES (images.mjs). Cadastre-o antes de usar o token {{IMG:${slug}}}.`);
  return `<figure style="margin:18px 0"><img src="${imgUrl(slug)}" alt="${(im.alt||"").replace(/"/g,'&quot;')}" style="width:100%;border-radius:10px;display:block"/>`+
         `<figcaption style="font-size:13px;color:#94a3b8;margin-top:6px;line-height:1.4">${im.caption||""}</figcaption></figure>`;
}
