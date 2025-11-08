# HR-Solution
Solução desenvolvida para Hackaton da FATEC Mogi das Cruzes sobre aplicação de teoria de liderança de RH

### Tecnologias
- Java 21
- Spring Boot
- React
- MySQL

### Como executar

#### Backend

Antes de executar o backend, é necessário já se ter criado um banco no MySQL.

Para configurar o aplicativo, é necessário alterar as properties do arquivo disponível em backend/src/main/resources/application.properties, colocando as credenciais corretas para acesso ao banco de dados MySQL.
```
# ===============================
# = CONFIGURAÇÃO DO BANCO MYSQL =
# ===============================
spring.datasource.url=jdbc:mysql://localhost:3306/hr_solution
spring.datasource.username=root
spring.datasource.password=admin123
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
```

Também deve-se colocar a chave do API do Gemini no mesmo arquivo: 
```
# ===============================
# = CONFIGURAÇÃO DO GEMINI =
# ===============================
gemini.api.key=SUA_CHAVE_API
gemini.api.url=https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent

```

Para acessar a documentação da API usando Swagger, navegue para: ```http://localhost:8080/swagger-ui/index.html```.

#### Frontend

```
cd frontend/

# Instalar dependências
npm install

# Executar o frontend
npm run dev
```

### Referências

- [Guia Vite](https://pt.vite.dev/guide/)
- [Spring initializr](https://start.spring.io)
- [Shadcn](https://ui.shadcn.com/docs/components)