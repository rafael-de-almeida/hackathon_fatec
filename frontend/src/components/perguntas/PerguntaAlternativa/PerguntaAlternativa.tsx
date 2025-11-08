import { useState, useEffect, type KeyboardEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils"; // caso já tenha o utilitário do Shadcn

interface PerguntaAlternativaProps {
  pergunta: string;
  alternativaUm: string;
  alternativaDois: string;
  alternativaTres?: string;
  alternativaQuatro?: string;
  alternativaCinco?: string;
  alternativaSeis?: string;

  desativado?: boolean;
  onResponder?: (selecionado: number | null) => void;
  name: string;
}

export default function PerguntaAlternativa({
  pergunta,
  alternativaUm,
  alternativaDois,
  alternativaTres,
  alternativaQuatro,
  alternativaCinco,
  alternativaSeis,
  desativado = false,
  onResponder = () => {},
  name,
}: PerguntaAlternativaProps) {
  const alternativas = [
    alternativaUm,
    alternativaDois,
    alternativaTres,
    alternativaQuatro,
    alternativaCinco,
    alternativaSeis,
  ].filter(Boolean) as string[];

  const [selecionado, setSelecionado] = useState<number | null>(null);

  useEffect(() => {
    setSelecionado(null);
  }, [pergunta]);

  const alternaSelecionado = (index: number) => {
    if (desativado) return;
    setSelecionado(index);
    onResponder(index);
  };

  const teclaHandler = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      alternaSelecionado(index);
    }
  };

  return (
    <Card className="w-full p-4 shadow-md border rounded-2xl">
      <CardContent>
        <h3 className="text-lg font-semibold mb-4">{pergunta}</h3>

        <div className="grid gap-2">
          {alternativas.map((texto, index) => {
            const ativo = selecionado === index;
            return (
              <div
                key={index}
                role="radio"
                aria-checked={ativo}
                tabIndex={desativado ? -1 : 0}
                onKeyDown={(e) => teclaHandler(e, index)}
                className={cn(
                  "flex items-center gap-3 p-3 border rounded-xl cursor-pointer transition-colors",
                  ativo
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted",
                  desativado && "opacity-50 cursor-not-allowed"
                )}
                onClick={() => alternaSelecionado(index)}
              >
                <input
                  type="radio"
                  name={name}
                  value={index}
                  checked={ativo}
                  disabled={desativado}
                  onChange={() => alternaSelecionado(index)}
                  className="hidden"
                />
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-2 flex items-center justify-center",
                    ativo ? "border-primary bg-primary" : "border-muted"
                  )}
                >
                  {ativo && <div className="w-2 h-2 bg-white rounded-full" />}
                </div>
                <Label className="text-base cursor-pointer">{texto}</Label>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
