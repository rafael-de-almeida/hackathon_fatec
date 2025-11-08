package com.hr_solution.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hr_solution.model.entities.EntityTest;
import com.hr_solution.service.EntityService;

@RestController
@RequestMapping("/entidadeteste")
public class EntityController {
    
    @Autowired
    private EntityService service;

    @GetMapping("/listall")
    public ResponseEntity<List<EntityTest>> consultarTodos(){
        return ResponseEntity.ok(service.consultarTodosEntities());
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<Optional<EntityTest>> consultarEntityById(@PathVariable Integer id){
        
        Optional<EntityTest> entity = service.consultarEntityById(id);

        if (entity.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        return ResponseEntity.ok(entity);

    }
    
    @PostMapping("/add")
    public ResponseEntity<?> adicionarEntity(@RequestBody EntityTest e){
        EntityTest entity = service.adicionarEntity(e);
        return new ResponseEntity<>(entity, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<?> atualizarEntity(@RequestBody EntityTest e){
        EntityTest entityAtualizada = service.atualizarEntity(e);

        if (entityAtualizada != null) {
            return ResponseEntity.ok(entityAtualizada);
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletarEntity(@PathVariable Integer id){
        service.deletarEntity(id);
        return ResponseEntity.noContent().build();
    }
}