<h1 align="center"> Sistema de Pedidos 👩🏾‍🍳 </h1>

### 🚀 Tecnologias

#### Back-End

-  [Node.js](https://nodejs.org/en/)
-  [Express](https://expressjs.com/)
-  [Prisma - ORM](https://www.prisma.io/)
-  [Bcrypt](https://www.npmjs.com/package/bcrypt)
-  [JWT](https://jwt.io/)
-  [Jest](https://jestjs.io)
-  [Swagger](https://swagger.io/)


#### Banco de dados

- [PostgresSql](https://www.postgresql.org/)
- [Docker](https://www.docker.com)

#### Front-End 

- [Nextjs](https://nextjs.org/)
- [SAAS](https://sass-lang.com/)

<details open>
  <summary><h3>Arquitetura </h3></summary>
Para execução do projeto eu procurei utilizar Single Responsibility Principle (SRP), que basicamente consiste 
em modulos e funções deve ter uma responsabilidade.
  
</details>  


### 📃 Regras de Négocio

- [x] Cadastrar um novo usuário;
- [x] Logar um usuário;
- [x] Verificar autenticação para rotas privadas;
- [x] Mostar detalhes do usuário;
- [x] Criar e listar categoria;
- [x] Abrir itens a uma mesa e tabém pode retirar os itens;
- [x] Enviar (order) retirar de rascunho;
- [x] Listar todos os pedidos que não estão em rascunho 
- [x] Pode acessar todos os detalhes de uma mesa com pedidos dela;
- [x] Concluir pedido


## ✅ Requisitos Back end

Para executar o projeto você precisa instalar as depedência citadas a cima 

```bash
# Entre na pasta back-end
$ cd back-end

# Execute o comando e o projeto sera aberto no Visual Studio Code
$ code .

# Instale as dependências
$ yarn dev

# Após isso você precisa gerar as tables no DB.

# Não se esqueça de configurar o DB em prisma/schema.prisma e
# também a variável DATABASE_URL e a JWT_SECRET_KEY no arquivo .env

# Após, basta rodar o comando abaixo.
$ npx prisma migrate dev --name init

# Inicialize o servidor em modo desenvolvimento
$ yarn run dev

# O servidor irá iniciar em http://localhost:3333
```

## ✅ Requisitos Front-end

Para executar o projeto você precisa instalar as depedência citadas a cima 

```bash
# Entre na pasta front end
$ cd front-end

# Execute o comando e o projeto sera aberto no Visual Studio Code
$ code .

# Instale as dependências
$ yarn dev

# Após isso você precisa gerar as tables no DB.

# Inicialize o servidor em modo desenvolvimento
$ yarn run dev

# O servidor irá iniciar em http://localhost:3333
```

## in progress unit test e integration test 🚧
