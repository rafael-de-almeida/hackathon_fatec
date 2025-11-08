package com.hr_solution.controller;

import com.hr_solution.dto.gemini.PromptContextRequest;
import com.hr_solution.dto.gemini.PromptResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hr_solution.service.GeminiService;

@RestController
@RequestMapping("/api/gemini")
public class GeminiController {

    @Autowired
    private GeminiService geminiService;

    // com contexto dinâmico + fixo
    @PostMapping("/prompt")
    public ResponseEntity<PromptResponse> handlePrompt(@RequestBody PromptContextRequest request) {
        String result = geminiService.sendPromptWithContext(request.getContext(), request.getPrompt());
        return ResponseEntity.ok(new PromptResponse(result));
    }

}
