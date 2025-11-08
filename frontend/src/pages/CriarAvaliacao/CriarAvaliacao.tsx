import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus } from "lucide-react"
import { PerguntaLikert } from "@/components/perguntas/PerguntaLikert/PerguntaLikert"
import { Navegacao } from "../../components/layout/Navegacao/Navegacao"

type Pergunta = {
  id: string
  texto: string
  categoria: "Atitude" | "Desempenho" | "Preparo" | ""
}

export default function FormBuilderLikert() {
  const [perguntas, setPerguntas] = useState<Pergunta[]>([])
  const [titulo, setTitulo] = useState("Avaliação de Liderança Situacional")
  const [descricao, setDescricao] = useState("Avaliação para identificar o perfil de liderança predominante.")
  const [criadoPor, setCriadoPor] = useState("Val Fuga")
  const [dataLimite, setDataLimite] = useState("2025-12-01")

  const adicionarPergunta = () => {
    const nova: Pergunta = {
      id: crypto.randomUUID(),
      texto: "",
      categoria: "",
    }
    setPerguntas([...perguntas, nova])
  }

  const atualizarPergunta = (id: string, campo: Partial<Pergunta>) => {
    setPerguntas(perguntas.map((p) => (p.id === id ? { ...p, ...campo } : p)))
  }

  const removerPergunta = (id: string) => {
    setPerguntas(perguntas.filter((p) => p.id !== id))
  }

  const montarJSON = () => {
    const json = {
      titulo,
      descricao,
      criadoPor,
      criadoEm: new Date().toISOString().split("T")[0],
      dataLimite,
      quantidadePerguntas: perguntas.length,
      perguntas: perguntas.map((p, i) => ({
        id: i + 1,
        enunciado: p.texto,
        opcao: "",
      })),
    }
    return json
  }

  const exportarJSON = () => {
    const json = montarJSON()
    console.log("JSON exportado:", json)
    alert("JSON exportado! Veja no console.")
  }

  const enviarParaAPI = async () => {
    const json = montarJSON()
    try {
      const resposta = await fetch("http://localhost:8080/api/avaliacoes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(json),
      })
      if (resposta.ok) {
        alert("Formulário enviado com sucesso!")
      } else {
        alert("Erro ao enviar formulário.")
      }
    } catch (erro) {
      console.error(erro)
      alert("Falha na conexão com a API.")
    }
  }

  return (
    <div>
      <Navegacao />
      <div className="min-h-screen bg-gray-50 p-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Painel lateral */}
          <Card className="md:col-span-1 shadow-sm">
            <CardHeader>
              <CardTitle>Ferramentas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button onClick={adicionarPergunta} className="w-full" variant="outline">
                <Plus className="w-4 h-4 mr-2" /> Adicionar Pergunta Likert
              </Button>
              <Separator />
              <Button onClick={exportarJSON} className="w-full" variant="secondary">
                Visualizar JSON
              </Button>
              <Button onClick={enviarParaAPI} className="w-full">
                Enviar para API
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
                <Label>Título</Label>
                <Input value={titulo} onChange={(e) => setTitulo(e.target.value)} />
              </div>

              <div>
                <Label>Descrição</Label>
                <Input value={descricao} onChange={(e) => setDescricao(e.target.value)} />
              </div>

              <div>
                <Label>Criado Por</Label>
                <Input value={criadoPor} onChange={(e) => setCriadoPor(e.target.value)} />
              </div>

              <div>
                <Label>Data Limite</Label>
                <Input
                  type="date"
                  value={dataLimite}
                  onChange={(e) => setDataLimite(e.target.value)}
                />
              </div>

              <Separator />

              {perguntas.map((p, i) => (
                <div key={p.id} className="border rounded-xl p-4 space-y-3 bg-white shadow-sm relative">
                  <button
                    type="button"
                    onClick={() => removerPergunta(p.id)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-red-500"
                  >
                    <Trash2 size={16} />
                  </button>

                  <p className="text-sm text-gray-500 font-semibold">Pergunta {i + 1}</p>

                  <div>
                    <Label>Pergunta</Label>
                    <Input
                      value={p.texto}
                      onChange={(e) =>
                        atualizarPergunta(p.id, { texto: e.target.value })
                      }
                      placeholder="Digite o enunciado da pergunta..."
                    />
                  </div>

                  <div>
                    <Label>Categoria</Label>
                    <Select
                      value={p.categoria}
                      onValueChange={(v) =>
                        atualizarPergunta(p.id, { categoria: v as Pergunta["categoria"] })
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione uma categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Atitude">Atitude</SelectItem>
                        <SelectItem value="Desempenho">Desempenho</SelectItem>
                        <SelectItem value="Preparo">Preparo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="mt-4">
                    <PerguntaLikert
                      name={`pergunta-${p.id}`}
                      question={p.texto || "Pergunta de exemplo"}
                      disabled={true}
                    />
                  </div>
                </div>
              ))}

              {perguntas.length === 0 && (
                <p className="text-gray-500 text-center italic">
                  Nenhuma pergunta adicionada ainda.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}  
