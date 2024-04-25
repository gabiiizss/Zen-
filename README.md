# Sistema de Cadastro de Usuários

Este é um sistema de cadastro de usuários desenvolvido em React no frontend e Node.js no backend, utilizando MySQL como banco de dados.

## Funcionalidades

- **Cadastro de Usuários:** Permite adicionar novos usuários ao sistema.
- **Listagem de Usuários:** Exibe uma lista de todos os usuários cadastrados.
- **Atualização de Usuários:** Permite atualizar as informações de um usuário existente.
- **Exclusão de Usuários:** Permite excluir um usuário do sistema.

## Pré-requisitos

Antes de iniciar, você precisa ter o Node.js e o MySQL instalados na sua máquina.

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/willreis/cadastroUsuario.git

   ```

2. Navegue até o diretório do projeto:
   cd sistema-de-cadastro

3. Instale as dependências do frontend e do backend:
   cd frontend
   npm install
   cd ../backend
   npm install

4. Configuração do Banco de Dados:
   Execute o script SQL fornecido (script.sql) para criar a tabela cadastros.

5. Inicie o servidor backend:
   cd backend
   node server.js

6. Inicie o servidor frontend:
   cd frontend
   npm start

7. Acesse o sistema em http://localhost:3000.

Tecnologias Utilizadas
    .React
    .Node.js
    .Express
    .MySQL
    .Axios

Estrutura de Arquivos

    sistema-de-cadastro/
    ├── backend/
    │   ├── db.js
    │   ├── routes.js
    │   └── server.js
    ├── frontend/
    │   ├── public/
    │   ├── src/
    │   │   ├── components/
    │   │   │   ├── CadastroForm.jsx
    │   │   │   ├── CadastroItem.jsx
    |   |   |   ├── Navegacao.jsx
    │   │   │   └── TabelaCadastro.jsx
    │   │   ├── App.js
    │   │   ├── index.js
    │   │   └── Routes.js
    │   └── ...
    └── README.md

Banco de Dados (MySQL)
   Siga o script para criar a tabela "cadastro"
````
CREATE TABLE `cadastro` ( 
  `idCadastro` INT AUTO_INCREMENT NOT NULL,
  `nome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telefone` VARCHAR(20) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `endereco` VARCHAR(250) NOT NULL,
  `senha` VARCHAR(45) NOT NULL,
  CONSTRAINT `PRIMARY` PRIMARY KEY (`idCadastro`)
);
````

Criado e idealizado por:
> William Reis, Rodrigo Alvarez e Enzo Patti

Contribuição:
> Contribuições são bem-vindas! Se encontrar algum problema ou tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.

Licença:
> Este projeto está licenciado sob a Licença MIT - consulte o arquivo LICENSE.md para mais detalhes.

