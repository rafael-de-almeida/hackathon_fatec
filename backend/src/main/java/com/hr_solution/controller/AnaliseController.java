package com.hr_solution.controller;

import com.hr_solution.model.entities.Analise;
import com.hr_solution.service.AnaliseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/analises")
public class AnaliseController {

    @Autowired
    private AnaliseService analiseService;

    @GetMapping
    public List<Analise> listarTodas() {
        return analiseService.listarTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Analise> buscarPorId(@PathVariable Long id) {
        return analiseService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Analise criar(@RequestBody Analise analise) {
        return analiseService.salvar(analise);
    }
// nem sei se vai precisar atualizar analise
//    @PutMapping("/{id}")
//    public Analise atualizar(@PathVariable Long id, @RequestBody Analise analise) {
//        return analiseService.atualizar(id, analise);
//    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        analiseService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
