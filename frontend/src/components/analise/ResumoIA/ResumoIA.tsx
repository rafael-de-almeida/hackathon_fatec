import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkle } from "lucide-react";

type Props = {
    resumoIA: string;
}

export const ResumoIA = ({resumoIA}: Props) => {
    return (
        <Card>
            <CardHeader>
                <Sparkle/>
            </CardHeader>

            <CardContent>
                <p>Resumo IA</p>
                <p>{resumoIA}</p>
            </CardContent>
        </Card>
    );
}