package com.hr_solution.dto.gemini;

import lombok.Getter;
import lombok.Setter;

// DTOs
public class PromptContextRequest {
    @Getter
    @Setter
    private String context;

    @Getter @Setter
    private String prompt;
}
