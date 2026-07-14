/**
 * Manuais OFICIAIS de equipamento, por categoria de curso.
 *
 * Cada `url` é um manual oficial do fabricante VERIFICADO (retorna 200).
 * Regra: NUNCA colocar link não verificado aqui — informação técnica errada
 * na frente de aluno pagante é problema. Para adicionar: confirmar que a URL
 * abre o manual oficial (de preferência o domínio do fabricante) antes de incluir.
 *
 * `formato`: "pdf" abre/baixa o PDF; "pagina" abre o manual oficial em HTML.
 * Expansível: basta adicionar itens a EQUIPMENT_MANUALS.
 */
export type EquipmentManual = {
  slug: string;
  fabricante: string;
  modelo: string;
  categoria: string; // "som" | "luz" | "dj" | "vj" | "producao" | "roadie" | "efeitos" | ...
  tipo: string; // "Microfone", "Mesa de som digital", etc.
  url: string;
  formato: "pdf" | "pagina";
  idioma: "pt-BR" | "en" | "es";
};

export const EQUIPMENT_MANUALS: EquipmentManual[] = [
  // ── SOM ──
  {
    slug: "shure-sm58",
    fabricante: "Shure",
    modelo: "SM58",
    categoria: "som",
    tipo: "Microfone dinâmico vocal",
    url: "https://pubs.shure.com/view/guide/SM58/pt-BR.pdf",
    formato: "pdf",
    idioma: "pt-BR",
  },
  {
    slug: "shure-sm57",
    fabricante: "Shure",
    modelo: "SM57",
    categoria: "som",
    tipo: "Microfone dinâmico instrumento",
    url: "https://www.shure.com/en-US/docs/guide/SM57",
    formato: "pagina",
    idioma: "en",
  },
  {
    slug: "shure-beta58a",
    fabricante: "Shure",
    modelo: "Beta 58A",
    categoria: "som",
    tipo: "Microfone dinâmico supercardioide",
    url: "https://pubs.shure.com/view/guide/BETA58A/en-US.pdf",
    formato: "pdf",
    idioma: "en",
  },
  {
    slug: "yamaha-cl5",
    fabricante: "Yamaha",
    modelo: "CL5",
    categoria: "som",
    tipo: "Mesa de som digital",
    url: "https://data.yamaha.com/files/download/other_assets/6/392866/cl5_en_om_e0.pdf",
    formato: "pdf",
    idioma: "en",
  },
  {
    slug: "shure-sm7b",
    fabricante: "Shure",
    modelo: "SM7B",
    categoria: "som",
    tipo: "Microfone dinâmico de estúdio",
    url: "https://pubs.shure.com/view/guide/SM7B/en-US.pdf",
    formato: "pdf",
    idioma: "en",
  },
  {
    slug: "allen-heath-sq5",
    fabricante: "Allen & Heath",
    modelo: "SQ-5",
    categoria: "som",
    tipo: "Mesa de som digital",
    url: "https://www.allen-heath.com/content/uploads/2025/02/SQ_ReferenceGuide_V1_6_0_iss1.pdf",
    formato: "pdf",
    idioma: "en",
  },
  // ── LUZ ──
  {
    slug: "chauvet-rogue-r2x-wash",
    fabricante: "Chauvet Professional",
    modelo: "Rogue R2X Wash",
    categoria: "luz",
    tipo: "Moving head (wash)",
    url: "https://www.chauvetprofessional.com/wp-content/uploads/2019/10/Rogue_R2X_Wash_UM_Rev8-1.pdf",
    formato: "pdf",
    idioma: "en",
  },
  // ── EFEITOS ──
  {
    slug: "antari-z1520",
    fabricante: "Antari",
    modelo: "Z-1520",
    categoria: "efeitos",
    tipo: "Máquina de fumaça (fog)",
    url: "https://www.antari.com/usermanual/Z/Z-1520/Z-1520.pdf",
    formato: "pdf",
    idioma: "en",
  },
];

/** Manuais de uma categoria de curso (ex.: "som"). */
export function manualsForCategory(categoria?: string | null): EquipmentManual[] {
  if (!categoria) return [];
  return EQUIPMENT_MANUALS.filter((m) => m.categoria === categoria);
}
