package com.hr_solution.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hr_solution.model.entities.EntityTest;

public interface EntidadeTesteRepository extends JpaRepository<EntityTest, Integer> {
    
}
