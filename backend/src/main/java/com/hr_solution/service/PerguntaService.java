package com.hr_solution.service;

import com.hr_solution.model.entities.Pergunta;
import com.hr_solution.repository.PerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PerguntaService {

    @Autowired
    private PerguntaRepository perguntaRepository;

    public List<Pergunta> listarTodas() {
        return perguntaRepository.findAll();
    }

    public Pergunta salvar(Pergunta pergunta) {
        return perguntaRepository.save(pergunta);
    }

    public Optional<Pergunta> buscarPorId(Long id) {
        return perguntaRepository.findById(id);
    }

    public void deletar(Long id) {
        perguntaRepository.deleteById(id);
    }
}
