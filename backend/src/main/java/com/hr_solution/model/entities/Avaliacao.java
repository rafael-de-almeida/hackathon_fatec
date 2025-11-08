package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "avaliacao")
@Getter
@Setter
@NoArgsConstructor
public class Avaliacao {

    /*
        TODO: pensar nos dados certinho
        - descrição
        - qual o processo seletivo
        - tipo de vaga
        - data do processo
        - data limite
        - quantidade perguntas
        - pergunta com peso maior 
        - qual eixo a pergunta avalia
        - porcentagens (o cara é 70% atitude, 50% capacidade)
    */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(length = 2000, nullable = false)
    private String descricao;

    @Column(nullable = false)
    private String criadoPor;

    @Column(nullable = false)
    private LocalDate criadoEm = LocalDate.now();

    @Column(nullable = false)
    private LocalDate dataLimite;

    @Column(nullable = false)
    private Integer quantidadePerguntas;



    @OneToMany(
            mappedBy = "avaliacao",
            cascade = CascadeType.ALL,
            orphanRemoval = true,
            fetch = FetchType.LAZY
    )
    @JsonManagedReference
    private List<Pergunta> perguntas = new ArrayList<>();



    public void adicionarPergunta(Pergunta p) {
        perguntas.add(p);
        p.setAvaliacao(this);
    }

    public void removerPergunta(Pergunta p) {
        perguntas.remove(p);
        p.setAvaliacao(null);
    }

    public void setPerguntas(List<Pergunta> perguntas) {
        this.perguntas = perguntas;
        if (perguntas != null) {
            perguntas.forEach(p -> p.setAvaliacao(this));
        }
    }
}
