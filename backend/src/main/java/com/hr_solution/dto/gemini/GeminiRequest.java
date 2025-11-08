package com.hr_solution.dto.gemini;

import java.util.ArrayList;
import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class GeminiRequest {
    private List<Content> contents;

    @Getter @Setter
    public static class Content {
        private String role; // "user" ou "model"
        private List<Part> parts;
    }

    @Getter @Setter
    public static class Part {
        private String text;
    }

    public static GeminiRequest fromPrompt(String prompt) {
        GeminiRequest request = new GeminiRequest();
        Content content = new Content();
        Part part = new Part();
        part.setText(prompt);
        content.setRole("user");
        content.setParts(List.of(part));
        request.setContents(List.of(content));
        return request;
    }

    // Requisição com contexto
    public static GeminiRequest fromContext(List<String> context, String prompt) {
        GeminiRequest request = new GeminiRequest();
        List<Content> contents = new ArrayList<>();

        // adiciona o histórico (contexto)
        for (String msg : context) {
            Content content = new Content();
            Part part = new Part();
            part.setText(msg);
            content.setRole("user");
            content.setParts(List.of(part));
            contents.add(content);
        }

        // adiciona o prompt atual
        Content newMessage = new Content();
        Part part = new Part();
        part.setText(prompt);
        newMessage.setRole("user");
        newMessage.setParts(List.of(part));
        contents.add(newMessage);

        request.setContents(contents);
        return request;
    }
}
