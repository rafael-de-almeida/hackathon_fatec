package com.hr_solution.dto.gemini;

import lombok.Getter;
import lombok.Setter;

public class PromptResponse {
    @Getter
    @Setter
    private String response;

    public PromptResponse(String response) {
        this.response = response;
    }
}
