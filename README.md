# 🛍️ Digital Store API

> API RESTful desenvolvida para ser o backend da aplicação de e-commerce Drip Store.

[Tecnologias](#-tecnologias) | [Funcionalidades](#-funcionalidades) | [Arquitetura](#-arquitetura-do-sistema) | [Como Executar](#-como-executar-o-projeto) | [Testes](#-testando-a-api)

---

## ✨ Tecnologias

Este projeto utiliza um conjunto de tecnologias robustas para o ecossistema Node.js:

* **Node.js** - Ambiente de execução JavaScript no servidor.
* **Express.js** - Framework minimalista para construção de APIs.
* **Sequelize** - ORM para Node.js (configurado para MySQL).
* **MySQL** - Banco de dados relacional para persistência de dados.
* **JSON Web Tokens (JWT)** - Autenticação baseada em tokens.
* **Bcrypt.js** - Hashing de senhas para segurança.
* **Jest & Supertest** - Testes automatizados.

---

## 🔥 Funcionalidades

✅ **CRUD de Usuários:** Armazenamento seguro de senhas com hashing.
✅ **Sistema de Autenticação:** Baseado em JWT com endpoint de login.
✅ **Middleware de Proteção:** Segurança em rotas que exigem autenticação.
✅ **CRUD de Categorias:** Gestão completa de categorias de produtos.
✅ **CRUD de Produtos:** Gerenciamento de associações, imagens e variantes (cores/tamanhos).
✅ **Busca Avançada:** Filtros por nome, descrição, faixa de preço e categorias.
✅ **Arquitetura Service Layer:** Separação da lógica de negócio dos Controllers.

---

## 📐 Arquitetura do Sistema

```text
├── src/
│   ├── config/      # Configurações de DB e variáveis globais
│   ├── controllers/ # Orquestração das requisições e respostas
│   ├── database/    # Inicialização da conexão e sincronização
│   ├── middleware/  # Camadas de segurança e validação (JWT)
│   ├── models/      # Definição das entidades e relacionamentos
│   ├── routes/      # Mapeamento dos endpoints da API
│   ├── services/    # Lógica de negócio e comunicação com banco
│   ├── app.js       # Configuração do Express
│   └── server.js    # Inicialização do servidor e DB (Entry Point)
├── tests/           # Testes unitários e de integração
└── .env             # Variáveis de ambiente (não versionado)

```

---

## 🛣️ Endpoints Principais

A API está prefixada com `/v1`.

| Método | Endpoint | Descrição | Requer Auth |
| --- | --- | --- | --- |
| **POST** | `/user` | Cria um novo usuário | Não |
| **POST** | `/auth/token` | Realiza login e retorna token JWT | Não |
| **GET** | `/user/:id` | Busca um usuário pelo ID | Não |
| **PUT** | `/user/:id` | Atualiza um usuário | **Sim** |
| **POST** | `/category` | Cria uma nova categoria | **Sim** |
| **GET** | `/product/search` | Busca produtos com filtros avançados | Não |

---

## 🚀 Como Executar o Projeto

### 1️⃣ Instalação

```bash
git clone [https://github.com/talitalima-tech/drip-store-back.git](https://github.com/talitalima-tech/drip-store-back.git)
cd drip-store-back
npm install

```

### 2️⃣ Configuração (Environment)

Crie um arquivo `.env` na raiz do projeto seguindo o modelo:

```env
DB_DIALECT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=digital_store
DB_PORT=3306

JWT_SECRET=coloque_aqui_uma_chave_segura
JWT_EXPIRES_IN=24h
PORT=3000

```

> **Nota:** No MySQL, execute `CREATE DATABASE digital_store;` antes de iniciar.

### 3️⃣ Execução

```bash
npm run dev

```

API disponível em: `http://localhost:3000`

---

## 🧪 Testando a API

### Com Jest

Para rodar os testes automatizados:

```bash
npm test

```

### Com Postman/Insomnia

1. **Criação:** Use o `POST /user` para criar sua conta.
2. **Login:** Use o `POST /auth/token` para receber o seu Token.
3. **Acesso:** Nas rotas protegidas, envie o token no Header como `Authorization: Bearer seu_token`.

---
