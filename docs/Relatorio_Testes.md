# Relatório de Testes de Software

## Projeto: TechWave

**Aluno:** Isac Barbosa dos Santos

**Tecnologias utilizadas:**

* React + Vite
* Express.js
* PostgreSQL
* Playwright
* Jest
* Node.js

---

# 8. Descritivo de Casos de Teste de Software

## 8.1 Casos de Teste

| ID    | ID Requisito | Descrição                       | Pré-condições                 | Passos para Execução                                | Resultado Esperado                                  |
| ----- | ------------ | ------------------------------- | ----------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| CT-01 | RF-01        | Login com usuário válido        | Usuário cadastrado            | Informar email e senha válidos e clicar em Entrar   | Usuário é redirecionado para a Home                 |
| CT-02 | RF-01        | Login inválido                  | Sistema em funcionamento      | Informar senha incorreta e clicar em Entrar         | Sistema apresenta mensagem de erro                  |
| CT-03 | RF-02        | Cadastro de usuário             | Sistema disponível            | Preencher nome, email e senha e clicar em Cadastrar | Usuário é cadastrado e redirecionado para login     |
| CT-04 | RF-03        | Cadastro de notebook            | Usuário autenticado           | Preencher formulário e clicar em Cadastrar          | Notebook é salvo e exibido na lista                 |
| CT-05 | RF-04        | Editar notebook                 | Notebook existente            | Selecionar notebook, alterar informações e salvar   | Dados são atualizados corretamente                  |
| CT-06 | RF-05        | Excluir notebook                | Notebook existente            | Selecionar notebook e confirmar exclusão            | Notebook é removido da listagem                     |
| CT-07 | RF-06        | Pesquisar notebook              | Existem notebooks cadastrados | Digitar parte do modelo ou marca                    | Apenas notebooks compatíveis são exibidos           |
| CT-08 | RF-07        | Filtrar notebooks por preço     | Existem notebooks cadastrados | Informar preço máximo                               | Apenas notebooks dentro do valor informado aparecem |
| CT-09 | RF-08        | Visualizar detalhes do notebook | Notebook cadastrado           | Clicar em "Ver Mais"                                | Modal apresenta todas as informações do notebook    |
| CT-10 | RF-09        | Logout                          | Usuário autenticado           | Clicar em "Sair"                                    | Usuário retorna para tela de login                  |

---

# 8.2 Ferramentas e Ambientes de Teste

## Ferramentas

* Playwright (Testes End-to-End)
* Jest (Testes Unitários Front-end e Back-end)

## Ambiente

* Ambiente de Desenvolvimento (Local)

## Servidor

* Node.js

## Banco de Dados

* PostgreSQL

## Front-end

* React + Vite

## Back-end

* Express.js

## Navegadores utilizados

* Google Chrome
* Mozilla Firefox
* Safari (WebKit)

---

# 8.3 Requisitos Funcionais

| ID    | Requisito            | Descrição                                             |
| ----- | -------------------- | ----------------------------------------------------- |
| RF-01 | Login                | Permitir autenticação do usuário                      |
| RF-02 | Cadastro de Usuário  | Permitir criar uma nova conta                         |
| RF-03 | Cadastro de Notebook | Permitir cadastrar notebooks                          |
| RF-04 | Editar Notebook      | Permitir alterar informações do notebook              |
| RF-05 | Excluir Notebook     | Permitir remover notebooks                            |
| RF-06 | Pesquisa             | Permitir pesquisar notebooks                          |
| RF-07 | Filtro por preço     | Permitir filtrar notebooks pelo valor máximo          |
| RF-08 | Visualização         | Permitir visualizar informações completas do notebook |
| RF-09 | Logout               | Permitir encerrar a sessão do usuário                 |

---

# Execução dos Testes Unitários

## Objetivo

Garantir que todas as funcionalidades do sistema operem corretamente, reduzindo falhas e assegurando a confiabilidade da aplicação.

## Escopo

Foram testadas as principais funcionalidades do sistema:

* Login
* Cadastro de usuário
* Cadastro de notebook
* Atualização de notebook
* Exclusão de notebook
* Pesquisa
* Filtro por preço
* Visualização de detalhes

## Tipos de Teste

* Testes Unitários
* Testes Funcionais
* Testes End-to-End (Playwright)

## Ambiente

* Windows 11
* Node.js
* PostgreSQL
* React + Vite
* Express.js

## Ferramentas

* Playwright
* Jest
* Visual Studio Code
* PostgreSQL

---

# Relatório de Execução e Validação dos Testes

## Resultados Obtidos

Todos os testes implementados foram executados com sucesso após as correções realizadas durante o desenvolvimento.

Durante a implementação foram identificados problemas relacionados ao login, atualização de notebooks, exclusão de registros e sincronização entre frontend e backend. Após os ajustes necessários, todos os testes passaram com sucesso.

## Evidências

As evidências da execução encontram-se no relatório HTML gerado pelo Playwright e nos logs produzidos durante a execução dos testes.

Comando utilizado:

```bash
npx playwright test
```

Relatório:

```bash
npx playwright show-report
```

---

## Falhas Encontradas

### Login

Problema:

* Endpoint incorreto (/usuario em vez de /usuarios).

Correção:

* Ajuste da rota utilizada pelo frontend.

---

### Atualização de Notebook

Problema:

* A lista não era atualizada após a edição.

Correção:

* Atualização da lista utilizando `await getNotebooks()` após o PUT.

---

### Exclusão de Notebook

Problema:

* O backend não retornava corretamente o notebook removido.

Correção:

* Ajuste da função DELETE utilizando `RETURNING *`.

---

### Testes Automatizados

Problema:

* Execução paralela gerava conflitos entre os navegadores.

Correção:

* Configuração do Playwright para utilizar apenas um worker.

---

# Análise Crítica

A utilização de testes automatizados permitiu identificar rapidamente inconsistências entre frontend e backend, principalmente relacionadas ao fluxo de autenticação e operações CRUD.

Os testes contribuíram para aumentar a confiabilidade da aplicação, garantindo que alterações realizadas durante o desenvolvimento não introduzissem novos erros.

---

# Soluções Aplicadas

* Correção das rotas da API.
* Ajuste na atualização da interface após operações CRUD.
* Correção das funções do backend.
* Inclusão de atributos `data-testid` para automação.
* Ajuste da configuração do Playwright.
* Sincronização entre frontend e backend.

---

# Repositório de Código

Estrutura do projeto:

```
TechWave/

├── backend/
│   ├── routes/
│   ├── services/
│   ├── config/
│   ├── tests/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── tests/
│   ├── public/
│   └── vite.config.js
│
└── README.md
```

## Tecnologias

Backend

* Express.js
* PostgreSQL

Frontend

* React
* Vite

Testes

* Jest
* Playwright

Versionamento

* Git
* GitHub

---

# Conclusão

O desenvolvimento do projeto TechWave permitiu aplicar conceitos de desenvolvimento Full Stack utilizando React, Express e PostgreSQL, além da implementação de testes automatizados utilizando Jest e Playwright.

Os testes executados demonstraram que as funcionalidades principais do sistema encontram-se operando corretamente após as correções realizadas durante o desenvolvimento.

A utilização de testes automatizados contribuiu significativamente para a identificação precoce de falhas, aumento da confiabilidade da aplicação e validação dos requisitos funcionais propostos.
