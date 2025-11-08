import type { Avaliacao } from "./Avaliacao";
import type { RespostaPergunta } from "./RespostaPergunta";

export interface RespostaAvaliacao {
  id?: number;
  nomeCandidato: string;
  emailCandidato: string;
  dataAvaliacao: Date;

  eixoAtitude?: number;
  eixoCapacidade?: number;

  eixoLiderancaComandante?: number;
  eixoLiderancaTreinador?: number;
  eixoLiderancaOrientador?: number;
  eixoLiderancaDesafiador?: number;

  avaliacao?: Avaliacao;
  respostas?: RespostaPergunta[];
}
