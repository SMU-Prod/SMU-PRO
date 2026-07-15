// Manifesto de imagens reais do MÓDULO FACULDADE do Pleno de Luz (redes/energia/rigging/pixel).
// Bucket público "media", pasta img-luz-pleno/. Enquanto não gera, o <img> mostra o alt.
export const SB = "https://pshynylvvkhhohftouoe.supabase.co/storage/v1/object/public/media/";
export const FOLDER = "img-luz-pleno";
export const EXT = "jpg";
export const imgUrl = (slug) => `${SB}${FOLDER}/${slug}.${EXT}`;

export const IMAGES = [
  { slug: "node-artnet", ratio: "1280:720",
    alt: "Node de rede para luz: caixa preta com saídas DMX XLR, porta de rede travável (etherCON) e display de status.",
    caption: "O node converte a rede (Art-Net/sACN) em saídas DMX físicas (XLR). Um cabo de rede entra, vários universos saem como DMX." },
  { slug: "ethercon-rj45", ratio: "1280:720",
    alt: "Conector etherCON (RJ45 travável em carcaça metálica) ao lado de um plugue RJ45 comum.",
    caption: "etherCON: o RJ45 blindado e travável (Neutrik) que aguenta o palco — ao lado do RJ45 comum, frágil demais para road." },
  { slug: "distro-trifasica", ratio: "1280:720",
    alt: "Rack de distribuição de energia trifásica com disjuntores, medidor por fase e saídas Socapex e CEE.",
    caption: "O main distro trifásico: entra a rede (L1/L2/L3+N+T), sai dividida em circuitos com disjuntores. Equilibre a carga entre as 3 fases." },
  { slug: "socapex", ratio: "1280:720",
    alt: "Conector Socapex de 19 pinos num multicabo, ao lado do breakout que se divide em 6 tomadas.",
    caption: "Socapex (Soca): um multicabo de 19 pinos leva 6 circuitos de uma vez — do rack de dimmer ao breakout de 6 tomadas." },
  { slug: "cee-p17", ratio: "1280:720",
    alt: "Conectores industriais CEE/P17: azul monofásico e vermelho trifásico, com carcaça de borracha.",
    caption: "CEE / P17: o azul é monofásico (16/32A) e o vermelho é trifásico (16/32/63A) — plugues industriais à prova de intempérie." },
  { slug: "rigging-motor-truss", ratio: "1280:720",
    alt: "Motor de corrente (chain hoist) içando uma truss carregada de fixtures por uma cinta de aço e manilha.",
    caption: "O motor (talha de corrente) iça a truss carregada por cinta e manilha, preso a um ponto de rigging. Respeite a SWL e nunca fique embaixo." },
  { slug: "pixel-batten", ratio: "1280:720",
    alt: "Barras de LED pixel (pixel bars) com cada pixel numa cor diferente, formando um degradê — pixel mapping.",
    caption: "Pixel mapping: cada pixel do LED bar é endereçável (RGB) e vira um ponto de uma 'tela'. Consome muitos universos — daí a rede Art-Net/sACN." },
];

export const bySlug = Object.fromEntries(IMAGES.map((i) => [i.slug, i]));
export function figure(slug, opts = {}) {
  const im = bySlug[slug];
  if (!im) throw new Error("imagem desconhecida: " + slug);
  const cap = opts.caption ?? im.caption;
  const alt = (opts.alt ?? im.alt).replace(/"/g, "&quot;");
  return (
    `<figure style="margin:16px 0;text-align:center">` +
    `<img src="${imgUrl(slug)}" alt="${alt}" style="max-width:100%;border-radius:10px;border:1px solid rgba(0,0,0,.12)" />` +
    (cap ? `<figcaption style="font-size:12px;opacity:.75;margin-top:6px">${cap}</figcaption>` : ``) +
    `</figure>`
  );
}
