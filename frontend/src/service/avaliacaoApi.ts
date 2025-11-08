import type { Avaliacao } from "@/model/entities/Avaliacao"

export const consultarAvaliacao = async (id: number): Promise<Avaliacao> => {
    return {
        criadoEm: '',
        dataLimite: new Date(Date.now() + 21),
        descricao: "AA",
        criadoPor: "A",
        quantidadePerguntas: 2,
        titulo: "A",
        perguntas: [
            {
                enunciado: "Qual seu super-herói favorito?",
                alternativaUm: "Batman",
                alternativaDois: "Homem-Aranha",
                alternativaTres: "Mulher-Maravilha"
            }
        ],
    } as Avaliacao;
}