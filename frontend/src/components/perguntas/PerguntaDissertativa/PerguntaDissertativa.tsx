import React from "react";

type PerguntaDissertativaProps = {
  name: string;
  pergunta: string;
  placeholder?: string;
  valor?: string;
  onChange?: (valor: string) => void;
  obrigatoria?: boolean;
  linhas?: number;
  maxLength?: number;
  className?: string;
};

export const PerguntaDissertativa: React.FC<PerguntaDissertativaProps> = ({
  name,
  pergunta,
  placeholder = "Digite sua resposta...",
  valor,
  onChange,
  obrigatoria = false,
  linhas = 4,
  maxLength,
  className,
}) => {
  const [interna, setInterna] = React.useState<string>("");

  const controlado = valor !== undefined;
  const texto = controlado ? valor : interna;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!controlado) setInterna(e.target.value);
    onChange?.(e.target.value);
  };

  return (
    <div className={className} style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label htmlFor={name} style={{ fontWeight: 600 }}>
        {pergunta}
        {obrigatoria && <span style={{ color: "red" }}> *</span>}
      </label>

      <textarea
        id={name}
        name={name}
        rows={linhas}
        maxLength={maxLength}
        placeholder={placeholder}
        value={texto}
        onChange={handleChange}
        required={obrigatoria}
        style={{
          resize: "vertical",
          padding: 10,
          borderRadius: 8,
          border: "1px solid #ccc",
          fontFamily: "inherit",
          fontSize: 14,
          outlineColor: "#007bff",
        }}
      />

      {maxLength && (
        <small style={{ textAlign: "right", color: "#666" }}>
          {texto.length}/{maxLength}
        </small>
      )}
    </div>
  );
};

export default PerguntaDissertativa;