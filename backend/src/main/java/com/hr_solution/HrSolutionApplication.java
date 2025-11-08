package com.hr_solution;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(servers = { @Server(url = "/", description = "Default Server URL")})
@SpringBootApplication
public class HrSolutionApplication {

	// TODO: adicionar componente de pergunta alternativa (várias alternativas)
	// TODO: questionário criado p
	// TODO: resumo da IA sobre o questionário
	// TODO: gráfico lindo da análise da resposta do questionário
	// TODO: plano cartesiano da atitude e capacidade
	// TODO: como o perfil do candidato reage a cada tipo de liderança
	public static void main(String[] args) {
		SpringApplication.run(HrSolutionApplication.class, args);
	}

}
