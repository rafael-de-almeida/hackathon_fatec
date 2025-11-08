package com.hr_solution.service;

import com.hr_solution.model.entities.RespostaPergunta;
import com.hr_solution.repository.RespostaPerguntaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RespostaPerguntaService {

    @Autowired
    private RespostaPerguntaRepository respostaRepository;

    public List<RespostaPergunta> listarTodas() {
        return respostaRepository.findAll();
    }

    public RespostaPergunta salvar(RespostaPergunta resposta) {
        return respostaRepository.save(resposta);
    }

    public Optional<RespostaPergunta> buscarPorId(Long id) {
        return respostaRepository.findById(id);
    }

    public void deletar(Long id) {
        respostaRepository.deleteById(id);
    }
}
