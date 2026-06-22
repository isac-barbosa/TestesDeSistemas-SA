# Tech Wave

## Descrição

O Tech Wave é uma aplicação web para gerenciamento de notebooks, desenvolvida como projeto da disciplina de Testes de Software.

O sistema permite que usuários realizem cadastro, autenticação e gerenciamento de notebooks por meio das operações de cadastro, listagem, edição e exclusão.

---

## Tecnologias Utilizadas

### Frontend
- React
- Vite
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express
- PostgreSQL

### Testes
- Playwright
- Jest

---

## Estrutura do Projeto

```
TestesDeSistemas-SA/
│
├── backend/
│   ├── config/
│   ├── routes/
│   ├── services/
│   ├── tests/
│   ├── app.js
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── tests/
│   ├── public/
│   └── package.json
│
├── docs/
│   └── Relatorio_Testes.md
│
└── README.md
```

---

## Banco de Dados

Banco de dados utilizado:

- PostgreSQL

Tabela principal:

- usuarios
- notebooks

---

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/isac-barbosa/TestesDeSistemas-SA.git
```

---

### 2. Backend

Entrar na pasta:

```bash
cd backend
```

Instalar dependências:

```bash
npm install
```

Executar o servidor:

```bash
npm start
```

### 3. Frontend

Entrar na pasta:

```bash
cd frontend
```

Instalar dependências:

```bash
npm install
```

Executar:

```bash
npm run dev
```

## Funcionalidades

- Cadastro de usuários
- Login de usuários
- Cadastro de notebooks
- Listagem de notebooks
- Pesquisa por notebook
- Filtro por preço
- Edição de notebooks
- Exclusão de notebooks
- Visualização detalhada dos notebooks

---

## Testes

### Frontend

Executar testes Playwright

```bash
npx playwright test
```

Abrir relatório

```bash
npx playwright show-report
```

Executar testes Jest

```bash
npm test
```

---

### Backend

Executar testes

```bash
npm test
```

---

## Relatório

A documentação completa do projeto encontra-se em:

```
docs/Relatorio_Testes.md
```

---

## Desenvolvedores

Projeto desenvolvido para a disciplina de Testes de Software.

Equipe:

- Isac Barbosa dos Santos

---

## Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.