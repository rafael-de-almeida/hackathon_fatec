import type { Entidade } from "../../../model/entities/Entidade";
import { atualizarEntidade, deletarEntidade } from "../../../service/api";
import "./TabelaEntities.css";

type Props = {
    entidades: Entidade[];
    setEntidades: (e: Entidade[]) => void;
}

export const TabelaEntities = ({entidades, setEntidades}: Props) => {

    const confirmarAtualizacaoEntidade = async (entidade: Entidade) => {
        const nome = prompt(`Insira um novo nome para a entidade (nome atual = ${entidade.nome})`);
        
        const novaEntidade: Entidade = {
            id: entidade.id,
            nome: nome ? nome : entidade.nome
        }

        try {
            await atualizarEntidade(novaEntidade);

            const novasEntidades = entidades.map(entidade => 
                entidade.id === novaEntidade.id ? novaEntidade : entidade
            );

            setEntidades(novasEntidades);
        } catch (error){
            alert(error instanceof Error ? error.message : String(error));
        }
        
    }

    const confirmarDelecaoEntidade = async (entidadeADeletar: Entidade) => {
        if (confirm("Deseja deletar essa entidade?")){
            try {
                await deletarEntidade(entidadeADeletar);

                const novasEntidades = entidades.filter((entidade) => entidadeADeletar.id !== entidade.id);

                setEntidades(novasEntidades);
            } catch (error){
                alert(error instanceof Error ? error.message : String(error));
            }
        }
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Operações</th>
                </tr>
            </thead>

            <tbody>
                {
                    entidades.length === 0 ?
                        <tr>
                            <td>Nada</td>
                            <td>Nada</td>
                            <td>Nada</td>
                        </tr>

                        :
                
                
                        entidades.map((entidade, index) => {
                            return (
                                <tr key={index}>
                                    <td>{entidade.id}</td>
                                    <td>{entidade.nome}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => confirmarAtualizacaoEntidade(entidade)}
                                        >
                                            Atualizar
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => confirmarDelecaoEntidade(entidade)}
                                        >
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                }
            </tbody>
        </table>
    )
}