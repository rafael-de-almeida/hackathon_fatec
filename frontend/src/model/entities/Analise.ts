import type { RespostaAvaliacao } from "./RespostaAvaliacao";

export interface Analise {
  id?: number;

  eixoMaxAtitude?: number;
  eixoMaxCapacidade?: number;

  liderancaComandanteTotal?: number;
  liderancaTreinadorTotal?: number;
  liderancaOrientadorTotal?: number;
  liderancaDesafiadorTotal?: number;

  eixoAtitude?: number;
  eixoCapacidade?: number;

  eixoLiderancaComandante?: number;
  eixoLiderancaTreinador?: number;
  eixoLiderancaOrientador?: number;
  eixoLiderancaDesafiador?: number;

  resumoIA?: string;
  respostaAvaliacao?: RespostaAvaliacao;
}
