export type Segmento = "som" | "luz" | "dj" | "video" | "producao" | "efeito";

export type Simulator = {
  id: string;
  titulo: string;
  segmento: Segmento;
  nivel: "basico" | "avancado" | "legado";
  tipo: "real" | "lab" | "sim";
  arquivo: string; // caminho servido, ex: "/simuladores/som/yamaha-cl5-real.html"
};
