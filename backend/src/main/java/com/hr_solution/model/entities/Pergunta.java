package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "pergunta")
@Getter
@Setter
@NoArgsConstructor
public class Pergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Pergunta digitada pelo criador
    @Column(nullable = false, length = 1000)
    private String enunciado;

    // Cada pergunta tem 5 opções de resposta com pesos 1 a 5
    // Exemplo: "Discordo totalmente" (1) até "Concordo totalmente" (5)
    @Column(nullable = false)
    private String opcao;

    // Ligação com a Avaliacao
    @OneToMany(
            mappedBy = "avaliacao",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "avaliacao_id")
    @JsonBackReference
    private Avaliacao avaliacao;


}
