package com.hr_solution.controller;

import com.hr_solution.model.entities.RespostaAvaliacao;
import com.hr_solution.service.RespostaAvaliacaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/respostas-avaliacoes")
public class RespostaAvaliacaoController {

    @Autowired
    private RespostaAvaliacaoService respostaAvaliacaoService;

    @GetMapping
    public List<RespostaAvaliacao> listarTodas() {
        return respostaAvaliacaoService.listarTodas();
    }

    @PostMapping
    public RespostaAvaliacao criar(@RequestBody RespostaAvaliacao respostaAvaliacao) {
        return respostaAvaliacaoService.salvar(respostaAvaliacao);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RespostaAvaliacao> buscarPorId(@PathVariable Long id) {
        return respostaAvaliacaoService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        respostaAvaliacaoService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}
