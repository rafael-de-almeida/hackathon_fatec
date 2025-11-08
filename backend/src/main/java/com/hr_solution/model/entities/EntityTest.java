package com.hr_solution.model.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "entidade_teste")
public class EntityTest {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "entidade_teste_seq")
    @SequenceGenerator(name = "entidade_teste_seq", sequenceName = "entidade_teste_seq", allocationSize = 1)
    @Column(name = "ent_id")
    private int id;

    @Column(name = "ent_nome", nullable = false, length = 100)
    private String nome;

}
