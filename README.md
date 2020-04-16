<h1 align="center">
  <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/masterclass.png" width="120px" />
</h1>

<h3 align="center">
  SQL no Node.js com Sequelize
</h3>

## 🚀 Tecnologias

- ⚡ Express — A web framework for Node.js
- 💾 Sequelize — SQL dialect ORM for Node.js

## ✋🏻 Pré-requisitos

- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/pt-BR/docs/install)
- [Docker Compose - Postgres](https://github.com/khezen/compose-postgres/blob/master/docker-compose.yml)

## 🔥 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta `cd masterclass-nodejs-sql`;
3. Rode `yarn` para instalar as dependências;
4. Rode `docker-compose up -d` na pasta raiz do projeto;
5. Altere as credencias dentro de `/src/config/database.js` de acordo com as configurações da base;
6. Rode `yarn sequelize db:create` para criar o banco de dados;
7. Rode `yarn sequelize db:migrate` para executar as migrations;
8. Rode `yarn dev` para iniciar o servidor.
