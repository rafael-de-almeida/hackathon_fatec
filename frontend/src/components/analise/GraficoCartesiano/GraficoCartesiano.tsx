import React, { useState } from "react";
import "./GraficoCartesiano.css";

export interface Ponto {
  x: number; // 0 a 100
  y: number; // 0 a 100
}

export interface GraficoCartesianoProps {
  pontos?: Ponto[];
  largura?: number;
  altura?: number;
  corPonto?: string;
  espessuraPonto?: number;
  mostrarGrade?: boolean;
}

const CORES = {
    rosa: "var(--rosa-grafico)",
    azul: "var(--azul-grafico)",
    verde: "var(--verde-grafico)",
    amarelo: "var(--amarelo-grafico)",
};

export default function GraficoCartesiano({
  pontos = [],
  largura = 400,
  altura = 400,
  corPonto = "#222",
  espessuraPonto = 6,
  mostrarGrade = true,
}: GraficoCartesianoProps) {
  const margem = 20;
  const eixoX = 100;
  const eixoY = 100;

  const [tooltip, setTooltip] = useState<{
    x: number;
    y: number;
    valorX: number;
    valorY: number;
    visivel: boolean;
  }>({
    x: 0,
    y: 0,
    valorX: 0,
    valorY: 0,
    visivel: false,
  });

  const mapX = (x: number) => (x / eixoX) * (largura - margem * 2) + margem;
  const mapY = (y: number) => altura - ((y / eixoY) * (altura - margem * 2) + margem);

  return (
    <div style={{ position: "relative", width: largura, height: altura }}>
      <svg
        width={largura}
        height={altura}
        viewBox={`0 0 ${largura} ${altura}`}
        className="grafico-cartesiano"
      >
        {/* Quadrantes coloridos */}
        <rect x="0" y="0" width={largura / 2} height={altura / 2} fill={CORES.amarelo} />
        <rect x={largura / 2} y="0" width={largura / 2} height={altura / 2} fill={CORES.verde} />
        <rect x="0" y={altura / 2} width={largura / 2} height={altura / 2} fill={CORES.rosa} />
        <rect x={largura / 2} y={altura / 2} width={largura / 2} height={altura / 2} fill={CORES.azul} />

        {/* Eixos principais */}
        <line x1={largura / 2} y1={margem} x2={largura / 2} y2={altura - margem} stroke="#000" strokeWidth="1.5" />
        <line x1={margem} y1={altura / 2} x2={largura - margem} y2={altura / 2} stroke="#000" strokeWidth="1.5" />

        {/* Grade opcional */}
        {mostrarGrade &&
          Array.from({ length: 10 }).map((_, i) => {
            const pos = (i + 1) * ((largura - margem * 2) / 10) + margem;
            return (
              <React.Fragment key={i}>
                <line x1={pos} y1={margem} x2={pos} y2={altura - margem} stroke="#ddd" strokeWidth="0.5" />
                <line
                  x1={margem}
                  y1={(i + 1) * ((altura - margem * 2) / 10) + margem}
                  x2={largura - margem}
                  y2={(i + 1) * ((altura - margem * 2) / 10) + margem}
                  stroke="#ddd"
                  strokeWidth="0.5"
                />
              </React.Fragment>
            );
          })}

        {/* Pontos */}
        {pontos.map((p, i) => {
          const cx = mapX(p.x);
          const cy = mapY(p.y);
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={espessuraPonto / 2}
              fill={corPonto}
              stroke="white"
              strokeWidth="1"
              style={{ cursor: "pointer" }}
              onMouseEnter={() =>
                setTooltip({ x: cx, y: cy, valorX: p.x, valorY: p.y, visivel: true })
              }
              onMouseLeave={() =>
                setTooltip((t) => ({ ...t, visivel: false }))
              }
            />
          );
        })}
      </svg>

      {/* Tooltip */}
      {tooltip.visivel && (
        <div
          className="grafico-tooltip"
          style={{
            position: "absolute",
            top: tooltip.y - 40,
            left: tooltip.x + 10,
          }}
        >
          <div>Capacidade = {tooltip.valorX}</div>
          <div>Atitude = {tooltip.valorY}</div>
        </div>
      )}
    </div>
  );
}
