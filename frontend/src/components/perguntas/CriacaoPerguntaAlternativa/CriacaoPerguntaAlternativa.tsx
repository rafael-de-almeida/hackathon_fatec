import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"

type Props = {
    enunciado: string;
    onRemoverPergunta: () => void;
    alternativaUm: string;
    alternativaDois: string;
    alternativaTres?: string;
    alternativaQuatro?: string;
    alternativaCinco?: string;
    alternativaSeis?: string;
}

export const CriacaoPerguntaAlternativa = (
    {
        enunciado,
        onRemoverPergunta,
        alternativaUm,
        alternativaDois,
        alternativaTres,
        alternativaQuatro,
        alternativaCinco,
        alternativaSeis,
    } : Props
) => {
    return (
        <Card>
            {enunciado}

            <p>{alternativaUm}</p>
            <p>{alternativaDois}</p>

            <Button onClick={onRemoverPergunta}>Remover</Button>
        </Card>
    )
}