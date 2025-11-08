import type { Entidade } from "../model/entities/Entidade";

const PATH = "http://localhost:8080/entidadeteste";

export const consultarTodasEntidades = async () => {
    const resposta = await fetch(`${PATH}/listall`);

    if (resposta.status !== 200){
        throw new Error("Erro ao consultar entidades.");
    }

    const entidades : Entidade[] = await resposta.json();

    return entidades;
}

export const consultarEntidadePorID = async (id:number) => {
    const resposta = await fetch(`${PATH}/list/${id}`);

    if (resposta.status !== 200){
        throw new Error("Erro ao consultar entidades.");
    }

    const entidades : Entidade[] = await resposta.json();

    return entidades;
}

export const adicionarEntidade = async (entidade: Entidade) => {
    const option = {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(entidade)
    }

    const resposta = await fetch(`${PATH}/add`, option);

    if (resposta.status !== 201) {
        throw new Error("Erro ao adicionar atividade.");
    }

    return resposta.json();
}

export const atualizarEntidade = async (entidade: Entidade) => {
    const option = {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(entidade)
    }

    const resposta = await fetch(`${PATH}/update`, option);

    if (resposta.status !== 200) {
        throw new Error("Erro ao atualizar atividade.");
    }

    return entidade;
}

export const deletarEntidade = async (entidade: Entidade) => {
    const option = {
        method: 'DELETE',
        headers:{'Content-Type': 'application/json'},
    }

    const resposta = await fetch(`${PATH}/delete/${entidade.id}`, option);

    if (resposta.status !== 204) {
        throw new Error("Erro ao deletar atividade");
    }
}