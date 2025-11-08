import { useState } from "react";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./Analise.css";

export function Analise() {
  const [loading, setLoading] = useState(false);
  const [respostaIA, setRespostaIA] = useState<string | null>(null);

  const dadosGerais = [
    { name: "Comunicação", score: 8 },
    { name: "Liderança", score: 7 },
    { name: "Flexibilidade", score: 6 },
    { name: "Trabalho em equipe", score: 9 },
    { name: "Gestão de conflitos", score: 7 },
  ];

  async function gerarAnalise() {
    setLoading(true);
    // Exemplo de chamada fictícia à IA
    setTimeout(() => {
      setRespostaIA(`Com base nos princípios da Teoria da Liderança Situacional, o participante demonstra
um perfil predominantemente colaborativo e adaptativo, com alta capacidade de trabalho em equipe
e boa comunicação. Recomenda-se investir no desenvolvimento de habilidades de tomada de decisão
em contextos de alta pressão e liderança diretiva.`);
      setLoading(false);
    }, 1500);
  }

  return (
    <div className="analise-container">
      <Navegacao />

      <main>
        <h2>Análise do Participante</h2>

        <section className="info-card">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Participante</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Nome:</strong> Jorge da Silva</p>
              <p><strong>E-mail:</strong> jorge.silva@email.com</p>
              <p><strong>Data da Avaliação:</strong> 06/11/2025</p>
            </CardContent>
          </Card>
        </section>

        <section className="grafico-card">
          <Card>
            <CardHeader>
              <CardTitle>Desempenho nas Competências</CardTitle>
            </CardHeader>
            <CardContent style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <BarChart data={dadosGerais}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="score" fill="#467FF7" name="Pontuação" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </section>

        <section className="ia-card">
          <Card>
            <CardHeader>
              <CardTitle>Análise por Inteligência Artificial</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="descricao-ia">
                Esta seção fornece uma análise automática das respostas com base na Teoria da Liderança Situacional,
                destacando pontos fortes, oportunidades de desenvolvimento e recomendações para o RH.
              </p>

              <Button onClick={gerarAnalise} disabled={loading}>
                {loading ? "Gerando análise..." : "Gerar análise da IA"}
              </Button>

              {respostaIA && (
                <div className="resposta-ia">
                  <h4>Resultado:</h4>
                  <p>{respostaIA}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
