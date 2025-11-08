package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "resposta_pergunta")
public class RespostaPergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer respostaEscolhida;

    @Column(nullable = false)
    private Integer pesoObtido;

    @ManyToOne
    @JoinColumn(name = "resposta_avaliacao_id")
    @JsonIgnore
    private RespostaAvaliacao respostaAvaliacao;

    @ManyToOne
    @JoinColumn(name = "pergunta_id")
    private Pergunta pergunta;


}
