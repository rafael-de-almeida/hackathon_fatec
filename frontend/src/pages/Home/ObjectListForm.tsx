import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SelecaoProcessos } from "@/components/processosSeletivos/SelecaoProcessos/SelecaoProcessos"
import { Link } from "react-router-dom"

export default function ObjectListForm() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6 pt-40">

      {/* Botão acima do card */}
      <div id="adicionar-novo-processo" className="mb-4 self-start max-w-md w-full">
        <Link to="/criarAvaliacao">
          <Button variant="outline">Criar novo processo</Button>
        </Link>
      </div>

      {/* Card logo abaixo */}
      <Card className="w-full max-w-md bg-white shadow-md rounded-2xl p-4">
        <SelecaoProcessos />
      </Card>
    </div>
  )
}
