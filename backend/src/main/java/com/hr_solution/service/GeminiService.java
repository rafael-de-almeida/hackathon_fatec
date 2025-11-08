package com.hr_solution.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hr_solution.dto.gemini.GeminiRequest;
import com.hr_solution.dto.gemini.GeminiResponse;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    @Value("${gemini.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String CONTEXTO_FIXO = """
        Você é um assistente do sistema HR Solution.
        Suas respostas devem ser técnicas, claras e sempre relacionadas a Recursos Humanos,
        gestão de pessoas e processos administrativos.
        Evite respostas fora desse escopo.
        """;

    public String sendPromptWithContext(String contextoDinamico, String prompt) {

        String fullPrompt = CONTEXTO_FIXO;

        if (contextoDinamico != null && !contextoDinamico.isBlank()) {
            fullPrompt += "\n\nContexto adicional:\n" + contextoDinamico;
        }

        fullPrompt += "\n\nUsuário: " + prompt;

        GeminiRequest request = GeminiRequest.fromPrompt(fullPrompt);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-goog-api-key", apiKey);

        HttpEntity<GeminiRequest> entity = new HttpEntity<>(request, headers);

        GeminiResponse response = restTemplate.postForObject(apiUrl, entity, GeminiResponse.class);

        if (response != null
                && response.getCandidates() != null
                && !response.getCandidates().isEmpty()
                && response.getCandidates().get(0).getContent() != null
                && !response.getCandidates().get(0).getContent().getParts().isEmpty()) {

            return response.getCandidates()
                    .get(0)
                    .getContent()
                    .getParts()
                    .get(0)
                    .getText();
        }

        throw new RuntimeException("Empty or invalid response from Gemini API");
    }
}
