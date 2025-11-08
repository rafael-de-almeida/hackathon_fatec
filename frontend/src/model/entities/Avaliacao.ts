import type { Pergunta } from "./Pergunta";

export interface Avaliacao {
  id?: number;
  titulo: string;
  descricao: string;
  criadoPor: string;
  criadoEm: string; // ISO date string (OffsetDateTime)
  dataLimite: Date;
  quantidadePerguntas: number;

  eixoMaxAtitude?: number;
  eixoMaxCapacidade?: number;

  liderancaComandanteTotal?: number;
  liderancaTreinadorTotal?: number;
  liderancaOrientadorTotal?: number;
  liderancaDesafiadorTotal?: number;

  perguntas?: Pergunta[];
}
