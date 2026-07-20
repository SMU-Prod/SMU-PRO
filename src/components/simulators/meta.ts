import type { Simulator } from "@/lib/simulators/types";

export const NIVEL_LABEL: Record<Simulator["nivel"], string> = {
  basico: "Básico",
  avancado: "Avançado",
  legado: "Legado",
};

/**
 * Cores do nível reaproveitadas do Badge do design system, alinhadas com o /cursos:
 * verde = porta de entrada, roxo = avançado, cinza = legado.
 */
export const NIVEL_VARIANT: Record<Simulator["nivel"], "junior" | "pleno" | "secondary"> = {
  basico: "junior",
  avancado: "pleno",
  legado: "secondary",
};

export const TIPO_LABEL: Record<Simulator["tipo"], string> = {
  real: "Réplica fiel",
  lab: "Laboratório",
  sim: "Simulador",
};
