
import { useState } from "react"

interface PerguntaLikertProps {
  name: string
  question: string
  onChange?: (valor: number) => void
  orientation?: "horizontal" | "vertical"
  disabled?: boolean
}

export function PerguntaLikert({
  name,
  question,
  onChange,
  orientation = "horizontal",
  disabled = false,
}: PerguntaLikertProps) {
  const [resposta, setResposta] = useState<number | null>(null)

  const opcoes = [
    { valor: 1, texto: "Discordo totalmente" },
    { valor: 2, texto: "Discordo parcialmente" },
    { valor: 3, texto: "Neutro" },
    { valor: 4, texto: "Concordo parcialmente" },
    { valor: 5, texto: "Concordo totalmente" },
  ]

  return (
    <div className="space-y-2">
      <p className="font-medium text-gray-800">{question}</p>
      <div
        className={`flex ${
          orientation === "horizontal" ? "flex-row gap-4" : "flex-col gap-2"
        }`}
      >
        {opcoes.map((op) => (
          <label
            key={op.valor}
            className={`flex items-center gap-2 cursor-pointer ${
              resposta === op.valor
                ? "text-blue-700 font-semibold"
                : "text-gray-600"
            } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
          >
            <input
              type="radio"
              name={name}
              value={op.valor}
              checked={resposta === op.valor}
              disabled={disabled} 
              onChange={() => {
                if (disabled) return
                setResposta(op.valor)
                onChange?.(op.valor)
              }}
              className="accent-blue-700"
            />
            <span>{op.texto}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

