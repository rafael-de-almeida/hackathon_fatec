const PATH = "???";

export const consultarPerguntas = async () => {
    /*
    
    const resposta = await fetch(`${PATH}/listall`);

    if (resposta.status !== 200){
        throw new Error("Erro ao consultar entidades.");
    }

    const entidades : Entidade[] = await resposta.json();


    */
    const entidades = [
        {
            pergunta: "Pergunta 1",
            tipo: 'likert'
        },
        {
            pergunta: "Pergunta 1",
            tipo: 'dissertativa'
        },
        {
            pergunta: "Pergunta 1",
            tipo: 'dissertativa'
        }
    ]; 


    return entidades;
}