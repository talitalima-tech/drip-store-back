```markdown
# 🛒 Store API - Digital Store

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)

Uma API REST completa para gerenciamento de um e-commerce, desenvolvida como projeto prático para o curso de Full Stack Development. A aplicação engloba desde o gerenciamento de usuários e autenticação via JWT até o controle de produtos, categorias e estoque.

## 🚀 Funcionalidades

- **Gerenciamento de Usuários:** Cadastro, atualização, busca por ID e remoção.
- **Autenticação Segura:** Proteção de rotas sensíveis utilizando JWT (JSON Web Tokens) e criptografia de senhas com bcrypt.
- **Catálogo de Produtos:** CRUD completo de produtos, incluindo suporte a múltiplas imagens e opções (tamanho, cor, etc.).
- **Categorização:** Sistema de categorias com slugs amigáveis e filtros para menu.
- **Busca Avançada:** Endpoints de pesquisa com filtros por preço, nome e atributos.

## 🛠️ Tecnologias Utilizadas

- **Runtime:** Node.js
- **Framework:** Express.js
- **ORM:** Sequelize
- **Banco de Dados:** MySQL
- **Segurança:** Bcryptjs e Jsonwebtoken
- **Ferramentas:** Nodemon (Desenvolvimento), Sequelize-CLI

## 📂 Estrutura do Projeto

O projeto segue o padrão de arquitetura **MVC (Model-View-Controller)** para garantir escalabilidade e manutenção.

```text
src/
 ├── config/      # Configuração de conexão com o Banco de Dados
 ├── controllers/ # Lógica de controle e regras de negócio
 ├── middleware/  # Middlewares de autenticação e validação
 ├── models/      # Definição das tabelas e relacionamentos
 ├── routes/      # Definição dos endpoints da API
 └── server.js    # Ponto de entrada da aplicação

```

## 🔧 Como Executar o Projeto

1. **Clone o repositório:**
```bash
git clone [https://github.com/talitalima-tech/drip-store-back.git](https://github.com/talitalima-tech/drip-store-back.git)

```


2. **Instale as dependências:**
```bash
npm install

```


3. **Configure as variáveis de ambiente:**
Crie um arquivo `.env` na raiz do projeto e preencha conforme o exemplo:
```env
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASS=sua_senha
DB_NAME=store_api
JWT_SECRET=sua_chave_secreta
JWT_EXPIRES_IN=24h

```


4. **Inicie o servidor:**
```bash
npm run dev

```



## 🛣️ Endpoints Principais

| Método | Endpoint | Descrição |
| --- | --- | --- |
| POST | `/v1/user` | Cadastra um novo usuário |
| POST | `/v1/auth/token` | Gera token de acesso JWT |
| GET | `/v1/product/search` | Lista produtos com filtros |
| GET | `/v1/category/:id` | Detalhes de uma categoria |

---
