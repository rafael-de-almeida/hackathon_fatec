package com.hr_solution.model.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.hr_solution.model.enuns.EixoPergunta;
import com.hr_solution.model.enuns.LiderancaPergunta;
import com.hr_solution.model.enuns.TipoPergunta;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pergunta")
@Getter
@Setter
public class Pergunta {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 1000)
    private String enunciado;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TipoPergunta tipo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true)
    private EixoPergunta eixo;

    @Enumerated(EnumType.STRING)
    @Column(nullable = true)    
    private LiderancaPergunta lideranca;

    //Peso da pergunta na avaliação
    @Column(nullable = false)  
    private Integer pesoTotal;

    @Column(nullable = false)
    private Integer NumeroAlternativas;

    @Column(nullable = false, length = 800)
    private String AlternativaUm;

    //Peso da alternativa na pergunta
    @Column(nullable = false)
    private Integer PesoUm;

    @Column(length = 800, nullable = false)
    private String AlternativaDois;

    @Column(nullable = false)
    private Integer PesoDois;

    @Column(length = 800,nullable = true)
    private String AlternativaTres;

    @Column(nullable = true)
    private Integer PesoTres;

    @Column(length = 800, nullable = true)
    private String AlternativaQuatro;
    
    @Column(nullable = true)
    private Integer PesoQuatro;

    @Column(length = 800, nullable = true)
    private String AlternativaCinco;

    @Column(nullable = true)
    private Integer PesoCinco;

    @Column(length = 800, nullable = true)
    private String AlternativaSeis;

    @Column(nullable = true)
    private Integer PesoSeis;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "avaliacao_id")
    @JsonIgnore
    private Avaliacao avaliacao;
}
