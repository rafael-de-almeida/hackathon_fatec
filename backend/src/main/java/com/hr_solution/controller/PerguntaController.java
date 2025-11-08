package com.hr_solution.controller;

import com.hr_solution.model.entities.Pergunta;
import com.hr_solution.service.PerguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/perguntas")
public class PerguntaController {

    @Autowired
    private PerguntaService perguntaService;

    @GetMapping
    public List<Pergunta> listarTodas() {
        return perguntaService.listarTodas();
    }

    @PostMapping
    public Pergunta criar(@RequestBody Pergunta pergunta) {
        return perguntaService.salvar(pergunta);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pergunta> buscarPorId(@PathVariable Long id) {
        return perguntaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        perguntaService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
