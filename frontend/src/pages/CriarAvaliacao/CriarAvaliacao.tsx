import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Navegacao } from "../../components/layout/Navegacao/Navegacao"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Trash2, Plus } from "lucide-react";

type Campo = {
  id: string;
  tipo: "dissertativa" | "likert" | "texto" | "selecao";
  pergunta: string;
  opcoes?: string[];
};

export default function FormBuilder() {
  const [campos, setCampos] = useState<Campo[]>([]);
  const [nomeFormulario, setNomeFormulario] = useState("Novo Formulário");

  const adicionarCampo = (tipo: Campo["tipo"]) => {
    const novo: Campo = {
      id: crypto.randomUUID(),
      tipo,
      pergunta: "",
      opcoes: tipo === "selecao" || tipo === "likert" ? ["Opção 1", "Opção 2"] : [],
    };
    setCampos([...campos, novo]);
  };

  const atualizarCampo = (id: string, campoAtualizado: Partial<Campo>) => {
    setCampos(campos.map(c => (c.id === id ? { ...c, ...campoAtualizado } : c)));
  };

  const removerCampo = (id: string) => {
    setCampos(campos.filter(c => c.id !== id));
  };

  const exportarJSON = () => {
    const json = JSON.stringify({ nomeFormulario, campos }, null, 2);
    console.log(json);
    alert("JSON do formulário exportado no console!");
  };

  return (<div>
    <Navegacao />
    <div className="min-h-screen bg-gray-50 p-10">

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Painel lateral */}
        <Card className="md:col-span-1 shadow-sm">
          <CardHeader>
            <CardTitle>Ferramentas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button onClick={() => adicionarCampo("dissertativa")} className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" /> Pergunta Dissertativa
            </Button>
            <Button onClick={() => adicionarCampo("likert")} className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" /> Pergunta Likert
            </Button>
            <Button onClick={() => adicionarCampo("texto")} className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" /> Campo de Texto
            </Button>
            <Button onClick={() => adicionarCampo("selecao")} className="w-full" variant="outline">
              <Plus className="w-4 h-4 mr-2" /> Seleção
            </Button>
            <Separator />
            <Button onClick={exportarJSON} className="w-full">
              Exportar JSON
            </Button>
          </CardContent>
        </Card>

        {/* Área de edição */}
        <Card className="md:col-span-2 shadow-md">
          <CardHeader>
            <CardTitle>Editor de Formulário</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="nome">Nome do Formulário</Label>
              <Input
                id="nome"
                value={nomeFormulario}
                onChange={e => setNomeFormulario(e.target.value)}
              />
            </div>

            <Separator />

            {campos.map((campo) => (
              <div
                key={campo.id}
                className="border rounded-xl p-4 space-y-3 bg-white shadow-sm relative"
              >
                <button
                  type="button"
                  onClick={() => removerCampo(campo.id)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>

                <Select
                  value={campo.tipo}
                  onValueChange={(v) =>
                    atualizarCampo(campo.id, { tipo: v as Campo["tipo"] })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tipo de campo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dissertativa">Dissertativa</SelectItem>
                    <SelectItem value="likert">Likert</SelectItem>
                    <SelectItem value="texto">Texto</SelectItem>
                    <SelectItem value="selecao">Seleção</SelectItem>
                  </SelectContent>
                </Select>

                <div>
                  <Label>Pergunta</Label>
                  <Input
                    value={campo.pergunta}
                    onChange={(e) =>
                      atualizarCampo(campo.id, { pergunta: e.target.value })
                    }
                    placeholder="Digite a pergunta..."
                  />
                </div>

                {(campo.tipo === "likert" || campo.tipo === "selecao") && (
                  <div>
                    <Label>Opções</Label>
                    {campo.opcoes?.map((op, i) => (
                      <Input
                        key={i}
                        value={op}
                        onChange={(e) => {
                          const novas = [...(campo.opcoes || [])];
                          novas[i] = e.target.value;
                          atualizarCampo(campo.id, { opcoes: novas });
                        }}
                        className="mt-1"
                      />
                    ))}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        atualizarCampo(campo.id, {
                          opcoes: [...(campo.opcoes || []), "Nova opção"],
                        })
                      }
                      className="mt-2"
                    >
                      <Plus size={14} className="mr-2" /> Adicionar opção
                    </Button>
                  </div>
                )}
              </div>
            ))}

            {campos.length === 0 && (
              <p className="text-gray-500 text-center italic">
                Nenhum campo adicionado ainda.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  );
}