import React from "react";

type Option = {
  value: string;   // valor retornado (ex: "5", "4", ...)
  label: string;   // texto exibido (ex: "Concordo totalmente")
};

type Props = {
  name: string;
  question: string;
  value?: string; // controlled
  defaultValue?: string; // uncontrolled initial
  onChange?: (value: string) => void;
  options?: Option[]; // padrão 5 pontos clássico
  orientation?: "horizontal" | "vertical";
  required?: boolean;
  className?: string;
};

export const PerguntaLikert: React.FC<Props> = ({
  name,
  question,
  value,
  defaultValue,
  onChange,
  options,
  orientation = "horizontal",
  required = false,
  className,
}) => {
  const defaultOptions: Option[] = [
    { value: "5", label: "Concordo totalmente" },
    { value: "4", label: "Concordo parcialmente" },
    { value: "3", label: "Nem concordo nem discordo" },
    { value: "2", label: "Discordo parcialmente" },
    { value: "1", label: "Discordo totalmente" },
  ];

  const opts = options ?? defaultOptions;

  // controlado vs não-controlado: se value definido, componente é controlado
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue);

  React.useEffect(() => {
    if (value !== undefined) return;
    setInternal(defaultValue);
  }, [defaultValue, value]);

  const selected = value !== undefined ? value : internal;

  const handleChange = (v: string) => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };

  return (
    <fieldset
      className={className}
      style={{
        border: "none",
        padding: 0,
        margin: 0,
      }}
    >
      <legend style={{ fontWeight: 600, marginBottom: 8 }}>{question}{required ? " *" : ""}</legend>

      <div
        role="radiogroup"
        aria-label={question}
        style={{
          display: orientation === "horizontal" ? "flex" : "block",
          gap: 12,
          alignItems: "center",
        }}
      >
        {opts.map((opt) => {
          const id = `${name}-${opt.value}`;
          return (
            <label
              key={opt.value}
              htmlFor={id}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                minWidth: orientation === "horizontal" ? 120 : undefined,
                padding: 6,
              }}
            >
              <input
                id={id}
                name={name}
                type="radio"
                value={opt.value}
                checked={selected === opt.value}
                onChange={() => handleChange(opt.value)}
                style={{ marginBottom: 6 }}
                required={required && opts[0].value === opt.value} // required only once in group
              />
              <span style={{ fontSize: 13, textAlign: "center" }}>{opt.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
};

export default PerguntaLikert;