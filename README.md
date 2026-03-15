# 🛍️ Digital Store API

> API para gerenciamento de e-commerce.

[Node.js](https://nodejs.org/) | [Sequelize](https://sequelize.org/) | [JWT](https://jwt.io/) | [License: MIT](https://opensource.org/licenses/MIT)

---

## 📖 Sobre o Projeto

Esta API é o motor de uma **Digital Store**, permitindo o controle total de um ecossistema de vendas online. Foi desenvolvida seguindo os padrões de arquitetura **MVC** e as melhores práticas de desenvolvimento de software, garantindo um código limpo e de fácil manutenção.

### 🧪 Principais Funcionalidades

* **🔐 Autenticação:** Sistema de login seguro com JWT e criptografia de senhas.
* **👥 Users:** Gestão completa de perfis de usuários.
* **📦 Products:** Cadastro detalhado de produtos com variantes (cores, tamanhos) e galeria de imagens.
* **📁 Categories:** Organização lógica de produtos com suporte a slugs para SEO.
* **🔍 Smart Search:** Filtros avançados para busca de produtos (preço, categoria, atributos).

---

## 🛠️ Stack Tecnológica

Camada: **Runtime** | Tecnologia: Node.js

Camada: **Framework** | Tecnologia: Express.js

Camada: **Banco de Dados** | Tecnologia: MySQL

Camada: **ORM** | Tecnologia: Sequelize

Camada: **Segurança** | Tecnologia: BCrypt + JSON Web Token

Camada: **Documentação** | Tecnologia: Markdown

---

## 📐 Arquitetura do Sistema

A organização das pastas reflete a separação de responsabilidades:

.

├── src/

│   ├── config/ # Configurações de DB e variáveis globais

│   ├── controllers/ # Orquestração das requisições e respostas

│   ├── middleware/ # Camadas de segurança e validação

│   ├── models/ # Definição das entidades e relacionamentos

│   ├── routes/ # Mapeamento dos endpoints

│   └── app.js # Configuração do express

└── server.js # Inicialização do servidor e DB

---

## 🚀 Como Iniciar

### 1️⃣ Pré-requisitos

* Node.js instalado
* Instância do MySQL rodando

### 2️⃣ Instalação

Clone o projeto: `git clone https://github.com/talitalima-tech/drip-store-back.git`

Entre na pasta: `cd drip-store-back`

Instale as dependências: `npm install`

### 3️⃣ Configuração (Environment)

Crie um arquivo `.env` na raiz seguindo o modelo:

DB_NAME=digital_store

DB_USER=root

DB_PASS=suasenha

DB_HOST=localhost

JWT_SECRET=suachavesecreta

### 4️⃣ Execução

Comando: `npm run dev`

---

## 🛣️ API Reference (Principais Endpoints)

### Autenticação

* `POST /v1/auth/token` -> Gera acesso via login.

### Usuários

* `POST /v1/user` -> Criação de conta.
* `GET /v1/user/:id` -> Detalhes do perfil.

### Produtos

* `GET /v1/product/search` -> Lista produtos (Suporta query params: `price-range`, `match`, `category_ids`).

