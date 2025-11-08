import './Avaliacao.css';
import PerguntaAlternativa from '../../components/perguntas/PerguntaAlternativa/PerguntaAlternativa';
import { useEffect, useState } from 'react';
import type { Avaliacao } from '@/model/entities/Avaliacao';
import { consultarAvaliacao } from '@/service/avaliacaoApi';

export function Avaliacao() {

    const [avaliacao, setAvaliacao] = useState<Avaliacao>(
        {
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
        } as Avaliacao
    );

    useEffect(() => {
        const obterDados = async () => {
            const avaliacao = await consultarAvaliacao(-1);
            setAvaliacao(avaliacao);
        }

        obterDados();
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget as HTMLFormElement);
        alert(`
            Valor selecionado: ${data.get("pergunta-0")}
        `);
    };
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {avaliacao && avaliacao.perguntas && avaliacao.perguntas.length > 0 ? (
                    avaliacao.perguntas.map((p, index) => (
                        <PerguntaAlternativa
                        key={p.id ?? index}
                        name={`pergunta-${index}`}
                        pergunta={p.enunciado}
                        alternativaUm={p.alternativaUm}
                        alternativaDois={p.alternativaDois}
                        alternativaTres={p.alternativaTres}
                        alternativaQuatro={p.alternativaQuatro}
                        alternativaCinco={p.alternativaCinco}
                        alternativaSeis={p.alternativaSeis}
                        />
                    ))
                    ) : (
                    <div>
                        <p>Questionário inválido</p>
                    </div>
                    )}

                <button type="submit">Enviar</button>
            </form>
        </div>
    );  
}