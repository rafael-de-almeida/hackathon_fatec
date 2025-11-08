package com.hr_solution.model.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "resposta_avaliacao")
public class RespostaAvaliacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 200)
    private String nomeCandidato;

    @Column(nullable = false, length = 200)
    private String emailCandidato;

    @Column(nullable = false)
    private LocalDate dataAvaliacao;
    
    //Eixos do Perfil

    //Valor atingido nos eixos de Perfil
    @Column(nullable = true)
    private Integer eixoAtitude;

    @Column(nullable = true)
    private Integer eixoCapacidade;

    //Eixos da Liderança

    //Valor atingido nos eixos de Liderança
    @Column(nullable = true)
    private Integer eixoLiderancaComandante;

    @Column(nullable = true)
    private Integer eixoLiderancaTreinador;
    
    @Column(nullable = true)
    private Integer eixoLiderancaOrientador;

    @Column(nullable = true)
    private Integer eixoLiderancaDesafiador;

    @ManyToOne
    @JoinColumn(name = "avaliacao_id")
    private Avaliacao avaliacao;

    @OneToMany(mappedBy = "respostaAvaliacao", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<RespostaPergunta> respostas;

    public void adicionarResposta(RespostaPergunta r) {
        respostas.add(r);
        r.setRespostaAvaliacao(this);
    }

    public void removerResposta(RespostaPergunta r) {
        respostas.remove(r);
        r.setRespostaAvaliacao(null);
    }

    public void setRespostas(List<RespostaPergunta> respostas) {
        this.respostas = respostas;
        if (respostas != null) {
            respostas.forEach(r -> r.setRespostaAvaliacao(this));
        }
    }
}
