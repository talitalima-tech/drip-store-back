# 🛍️ Digital Store API

> API para gerenciamento de e-commerce.

[Node.js](https://nodejs.org/) | [Sequelize](https://sequelize.org/) | [JWT](https://jwt.io/) |
---

## 📖 Sobre o Projeto

Esta API é o motor de uma **Digital Store**, permitindo o controle total de um ecossistema de vendas online. Foi desenvolvida seguindo os padrões de arquitetura **MVC** (Model-View-Controller) e as melhores práticas de desenvolvimento, garantindo um código limpo, escalável e de fácil manutenção.

### 🧪 Principais Funcionalidades

* **🔐 Autenticação:** Sistema de login seguro com JWT e criptografia de senhas com `bcryptjs`.
* **👥 Users:** Gestão completa de perfis de usuários e permissões.
* **📦 Products:** Cadastro detalhado de produtos com variantes (cores, tamanhos) e galeria de imagens.
* **📁 Categories:** Organização lógica de produtos com suporte a slugs para rotas amigáveis.
* **🔍 Smart Search:** Filtros avançados para busca de produtos (faixa de preço, termos e categorias).

---

## 🛠️ Stack Tecnológica

| Camada | Tecnologia |
| :--- | :--- |
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Banco de Dados** | MySQL |
| **ORM** | Sequelize |
| **Segurança** | BCrypt + JSON Web Token (JWT) |
| **Testes** | Jest / Supertest |

---

## 📐 Arquitetura do Sistema

A organização das pastas reflete a separação de responsabilidades para facilitar a manutenção:

├── src/
│   ├── config/      # Configurações de DB e variáveis globais
│   ├── controllers/ # Orquestração das requisições e respostas
│   ├── database/    # Inicialização da conexão e sincronização
│   ├── middleware/  # Camadas de segurança e validação
│   ├── models/      # Definição das entidades e relacionamentos
│   ├── routes/      # Mapeamento dos endpoints da API
│   ├── services/    # Lógica de negócio
│   ├── app.js       # Configuração do Express
│   └── server.js    # Inicialização do servidor e DB (Entry Point)
├── tests/           # Testes unitários e de integração

```

---

## 🚀 Como Iniciar

### 1️⃣ Pré-requisitos

* Node.js instalado (v16 ou superior)
* Instância do MySQL rodando localmente

### 2️⃣ Instalação

```bash
# Clone o projeto
git clone [https://github.com/talitalima-tech/drip-store-back.git](https://github.com/talitalima-tech/drip-store-back.git)

# Entre na pasta
cd drip-store-back

# Instale as dependências
npm install

```

### 3️⃣ Configuração (Environment)

Crie um arquivo `.env` na raiz do projeto e preencha conforme o modelo abaixo:

```env
# Banco de Dados
DB_DIALECT=mysql
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=digital_store
DB_PORT=3306

# Autenticação
JWT_SECRET=coloque_aqui_uma_chave_segura
JWT_EXPIRES_IN=24h

# Servidor
PORT=3000

```

> **Nota:** Certifique-se de criar o banco no MySQL antes de rodar: `CREATE DATABASE digital_store;`

### 4️⃣ Execução

```bash
# Modo de Desenvolvimento (com auto-reload)
npm run dev

```

A API estará disponível em: `http://localhost:3000`

---


## 🛣️ API Reference (Principais Endpoints)

### Autenticação

* `POST /v1/auth/token` -> Gera token de acesso via e-mail e senha.

### Usuários

* `POST /v1/user` -> Criação de nova conta de usuário.
* `GET /v1/user/:id` -> Busca detalhes de um perfil específico (Requer Auth).

### Produtos

* `GET /v1/product/search` -> Lista produtos com suporte a filtros via query params:
* `price-range`: Filtrar por valores.
* `match`: Busca por nome/descrição.
* `category_ids`: Filtrar por categorias específicas.



---

