import { Link } from "react-router-dom";
import { TabelaEntities } from "../../components/outros/TabelaEntities/TabelaEntities";
import { useEffect, useState } from "react";
import { adicionarEntidade, consultarTodasEntidades } from "../../service/api";
import type { Entidade } from "../../model/entities/Entidade";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import { Button } from "@/components/ui/button";

export const CrudSimples = () => {
    const [entidades, setEntidades] = useState<Entidade[]>([]);
    
    useEffect(() => {
        const obterDados = async () => {
            const dados = await consultarTodasEntidades();

            if (dados !== undefined){
                setEntidades(dados);    
            }
            
        };

        obterDados();
    }, []);

    const confirmarAdicaoEntidade = async () => {
        if (confirm("Deseja adicionar nova entidade?")){

            try {
                const nome = prompt("Insira um nome de entidade:")
            
                if (!nome){
                    throw Error("Nome inválido")
                }

                const entidade: Entidade = {
                    id: 0,
                    nome: nome
                };

                const entidadeAdicionada = await adicionarEntidade(entidade);

                const novasEntidades = [...entidades, entidadeAdicionada];

                setEntidades(novasEntidades);
            } catch (error){
                alert(error instanceof Error ? error.message : String(error));
            }            
        }
    }

    return (
        <div>
            <Navegacao/>

            <h3>Tabela de gerenciamento</h3>
        
            <TabelaEntities
                entidades={entidades}
                setEntidades={setEntidades}
            />

            <Button onClick={confirmarAdicaoEntidade}>
                Adicionar nova entidade
            </Button>
        
            <Link to={"/"}>
                <Button>
                    Voltar
                </Button>
            </Link>
        </div>
    );
}