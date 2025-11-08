package com.hr_solution.controller;


import com.hr_solution.model.entities.RespostaPergunta;
import com.hr_solution.service.RespostaPerguntaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/respostas")
public class RespostaPerguntaController {

    @Autowired
    private RespostaPerguntaService RespostaPerguntaService;

    @GetMapping
    public List<RespostaPergunta> listarTodas() {
        return RespostaPerguntaService.listarTodas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RespostaPergunta> buscarPorId(@PathVariable Long id) {
        return RespostaPerguntaService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public RespostaPergunta criar(@RequestBody RespostaPergunta resposta) {
        return RespostaPerguntaService.salvar(resposta);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        RespostaPerguntaService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
