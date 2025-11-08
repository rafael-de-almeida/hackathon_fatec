import { useState } from "react";
import { Link } from "react-router-dom";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import "./ProcessoSeletivo.css";

export function ProcessoSeletivo() {
  //const { id } = useParams(); //identificar o processo na URL futuramente
  const [processo] = useState({
    nome: "Processo Seletivo XYZ",
    vaga: "Analista de Sistemas",
    dataLimite: "26/08/2026",
    linkAvaliacao: "https://seusite.com/avaliacao/xyz",
  });

  const [avaliacoes] = useState([
    { id: 1, nome: "Jorge", link: "/analise/jorge" },
    { id: 2, nome: "Borges", link: "/analise/borges" },
    { id: 3, nome: "Ulysses", link: "/analise/ulysses" },
  ]);

  const handleShare = () => {
    navigator.clipboard.writeText(processo.linkAvaliacao);
    toast.success("Link copiado para a área de transferência!");
  };

  return (
    <div className="page-content min-h-screen bg-gray-100">
      <Navegacao />

      <div className="max-w-4xl mx-auto p-6">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>{processo.nome}</CardTitle>
            <CardDescription>Vaga: {processo.vaga}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              <strong>Data limite:</strong> {processo.dataLimite}
            </p>

            <div className="flex items-center gap-3 mt-4">

              <Button onClick={handleShare}>📋 Copiar Link</Button>
            </div>
          </CardContent>
        </Card>

        <h3 className="text-lg font-semibold mb-3">Candidatos Avaliados</h3>
        <Separator className="mb-4" />

        <div className="grid gap-3">
          {avaliacoes.map((a) => (
            <Card key={a.id} className="flex justify-between items-center p-4">
              <div>
                <p className="font-medium">{a.nome}</p>
              </div>
              <Link to={a.link}>
                <Button variant="secondary">Visualizar</Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
