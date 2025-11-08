package com.hr_solution.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hr_solution.model.entities.EntityTest;
import com.hr_solution.repository.EntidadeTesteRepository;


@Service
public class EntityService {

    @Autowired
    private EntidadeTesteRepository repository;

    public List<EntityTest> consultarTodosEntities(){
        return repository.findAll();
    }

    public Optional<EntityTest> consultarEntityById(int id){
        return repository.findById(id);
    }

    public EntityTest adicionarEntity(EntityTest e) {
        return repository.save(e);
    }

    public EntityTest atualizarEntity(EntityTest e) {
        return repository.save(e);
    }

    public void deletarEntity(int id){
        repository.deleteById(id);
    }

}
