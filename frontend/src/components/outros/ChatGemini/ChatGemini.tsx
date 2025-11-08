import { useState } from "react";
import "./ChatGemini.css";
import { enviarPrompt } from "../../../service/geminiApi";

interface Mensagem {
  remetente: "user" | "bot";
  texto: string;
}

export default function ChatGemini() {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState<Mensagem[]>([]);
  const [carregando, setCarregando] = useState(false);

  const enviarMensagem = async () => {
    const texto = mensagem.trim();
    if (!texto) return;

    // Adiciona a mensagem do usuário
    setConversa((prev) => [...prev, { remetente: "user", texto }]);
    setMensagem("");
    setCarregando(true);

    try {
      const resposta = await enviarPrompt(texto);

      // Adiciona a resposta do bot
      setConversa((prev) => [...prev, { remetente: "bot", texto: resposta }]);
    } catch (erro) {
      console.error(erro);
      setConversa((prev) => [
        ...prev,
        { remetente: "bot", texto: "❌ Erro ao obter resposta do servidor." },
      ]);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="chat-container">
      <h2 className="chat-title">Chat com Gemini 🤖</h2>

      <div className="chat-box">
        {conversa.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${
              msg.remetente === "user" ? "user" : "bot"
            }`}
          >
            {msg.texto}
          </div>
        ))}
        {carregando && <div className="chat-loading">Digitando...</div>}
      </div>

      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && enviarMensagem()}
          className="chat-input"
          disabled={carregando}
        />
        <button
          onClick={enviarMensagem}
          className="chat-button"
          disabled={carregando}
        >
          {carregando ? "Enviando..." : "Enviar"}
        </button>
      </div>
    </div>
  );
}
