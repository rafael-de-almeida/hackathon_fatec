export const TipoPergunta = {
  OBJETIVA: "PERFIL",
  DISCURSIVA: "LIDERANCA",
} as const;
export type TipoPergunta = typeof TipoPergunta[keyof typeof TipoPergunta];