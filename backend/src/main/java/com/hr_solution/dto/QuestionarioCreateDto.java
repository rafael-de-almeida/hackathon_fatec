package com.hr_solution.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionarioCreateDto {
    private String titulo;
    private String descricao;
    private String criadoPor;
    private List<PerguntaDto> perguntas;

    @Getter
    @Setter
    public static class PerguntaDto {
        private String enunciado;
        private String tipo;
        private Integer ordem;
    }
}
