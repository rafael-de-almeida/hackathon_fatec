export const EixoPergunta = {
  ATITUDE: "ATITUDE",
  CAPACIDADE: "CAPACIDADE",
} as const;
export type EixoPergunta = typeof EixoPergunta[keyof typeof EixoPergunta];