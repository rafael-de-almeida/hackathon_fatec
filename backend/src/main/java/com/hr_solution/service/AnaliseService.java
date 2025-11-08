package com.hr_solution.service;

import com.hr_solution.model.entities.Analise;
import com.hr_solution.repository.AnaliseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnaliseService {

    @Autowired
    private AnaliseRepository analiseRepository;

    public List<Analise> listarTodas() {
        return analiseRepository.findAll();
    }

    public Optional<Analise> buscarPorId(Long id) {
        return analiseRepository.findById(id);
    }

    public Analise salvar(Analise analise) {
        return analiseRepository.save(analise);
    }
// nem sei se vai precisar atualizar, ent deixa isso ae kkkk
//
//    public Analise atualizar(Long id, Analise analiseAtualizada) {
//        Analise analise = analiseRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Análise não encontrada"));
//        analise.setTitulo(analiseAtualizada.getTitulo());
//        analise.setDescricao(analiseAtualizada.getDescricao());
//        return analiseRepository.save(analise);
//    }

    public void deletar(Long id) {
        analiseRepository.deleteById(id);
    }
}
