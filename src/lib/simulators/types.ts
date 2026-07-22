// Segmentos de EVENTOS (www) — não misturar com os da escola (regra do dono).
export type SegmentoEventos = "som" | "luz" | "dj" | "video" | "producao" | "efeito";

// Segmentos da ESCOLA PROFISSIONALIZANTE (aula.smuproducoes.com), um por área de curso.
export type SegmentoEscola =
  | "alarmes"
  | "bicicletas"
  | "carros-eletricos"
  | "celular"
  | "cftv"
  | "construcao"
  | "eletrica"
  | "eletrodomesticos"
  | "energia-solar"
  | "ferramentas"
  | "hidraulica"
  | "informatica"
  | "manicure"
  | "marcenaria"
  | "mecanica"
  | "renda"
  | "tratores";

export type Segmento = SegmentoEventos | SegmentoEscola;

export type Simulator = {
  id: string;
  titulo: string;
  segmento: Segmento;
  nivel: "basico" | "avancado" | "legado";
  tipo: "real" | "lab" | "sim";
  arquivo: string; // caminho servido, ex: "/simuladores/som/yamaha-cl5-real.html"
};
