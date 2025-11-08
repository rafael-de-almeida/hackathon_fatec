package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "resposta_pergunta")
@Getter
@Setter
@NoArgsConstructor
public class RespostaPergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Valor escolhido de 1 a 5
    @Column(nullable = false)
    private Integer respostaEscolhida;

    // A avaliação geral a que essa resposta pertence
    @ManyToOne
    @JoinColumn(name = "resposta_avaliacao_id")
    @JsonBackReference
    private RespostaAvaliacao respostaAvaliacao;


    // A pergunta específica respondida
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "pergunta_id", nullable = false)
    private Pergunta pergunta;
}
