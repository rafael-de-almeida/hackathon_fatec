const PATH = "http://localhost:8080/api/gemini";

export const enviarPrompt = async (prompt: string): Promise<string> => {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  };

  const resposta = await fetch(`${PATH}/prompt`, options);

  if (!resposta.ok) {
    throw new Error("Erro ao enviar prompt para o Gemini.");
  }

  return resposta.text(); // backend retorna texto simples
};