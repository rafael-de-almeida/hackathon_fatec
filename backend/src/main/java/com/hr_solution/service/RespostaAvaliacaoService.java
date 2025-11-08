package com.hr_solution.service;

import com.hr_solution.model.entities.RespostaAvaliacao;
import com.hr_solution.repository.RespostaAvaliacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RespostaAvaliacaoService {

    @Autowired
    private RespostaAvaliacaoRepository respostaAvaliacaoRepository;

    public List<RespostaAvaliacao> listarTodas() {
        return respostaAvaliacaoRepository.findAll();
    }

    public RespostaAvaliacao salvar(RespostaAvaliacao respostaAvaliacao) {
        return respostaAvaliacaoRepository.save(respostaAvaliacao);
    }

    public Optional<RespostaAvaliacao> buscarPorId(Long id) {
        return respostaAvaliacaoRepository.findById(id);
    }

    public void deletar(Long id) {
        respostaAvaliacaoRepository.deleteById(id);
    }
}
