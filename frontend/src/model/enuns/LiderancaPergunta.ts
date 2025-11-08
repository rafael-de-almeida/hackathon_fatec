export const LiderancaPergunta = {
  COMANDANTE: "COMANDANTE",
  TREINADOR: "TREINADOR",
  ORIENTADOR: "ORIENTADOR",
  DESAFIADOR: "DESAFIADOR",
} as const;
export type LiderancaPergunta = typeof LiderancaPergunta[keyof typeof LiderancaPergunta];