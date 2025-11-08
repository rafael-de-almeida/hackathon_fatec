import type { Pergunta } from "./Pergunta";
import type { RespostaAvaliacao } from "./RespostaAvaliacao";

export interface RespostaPergunta {
  id?: number;
  respostaEscolhida: number;
  pesoObtido: number;

  respostaAvaliacao?: RespostaAvaliacao;
  pergunta?: Pergunta;
}
