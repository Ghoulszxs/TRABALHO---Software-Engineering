# TRABALHO---Software-Engineering

## Projeto: Task Manager

Este projeto tem como objetivo desenvolver uma API simples de gerenciamento de tarefas, simulando a construção de um sistema ágil para organização de demandas.

A aplicação foi desenvolvida com Node.js e Express, utilizando conceitos de Engenharia de Software, versionamento com GitHub, quadro Kanban, testes automatizados e integração contínua com GitHub Actions.

---

## Objetivo do Projeto

O objetivo do sistema é permitir que o usuário gerencie tarefas de forma simples, podendo criar, listar, buscar, atualizar e excluir tarefas.

O projeto foi desenvolvido como parte de uma atividade prática de Engenharia de Software, com foco em organização, documentação, controle de qualidade e gestão de mudanças.

---

## Escopo Inicial

Inicialmente, o sistema foi planejado para conter as seguintes funcionalidades:

- Criar tarefas;
- Listar tarefas cadastradas;
- Organizar tarefas por título e prioridade;
- Utilizar um repositório público no GitHub;
- Controlar as atividades por meio de um quadro Kanban.

---

## Metodologia Ágil Utilizada

A metodologia ágil utilizada foi o Kanban.

O Kanban foi escolhido porque permite visualizar o andamento das tarefas de forma simples, dividindo as atividades em etapas como:

- A fazer;
- Em progresso;
- Concluído.

Essa organização facilitou o acompanhamento do desenvolvimento do projeto e ajudou a controlar melhor as entregas.

---

## Funcionalidades Implementadas

A API possui as seguintes rotas:

### Criar tarefa

`POST /tarefas`

Permite cadastrar uma nova tarefa informando título, descrição e prioridade.

### Listar tarefas

`GET /tarefas`

Retorna todas as tarefas cadastradas.

### Buscar tarefa por ID

`GET /tarefas/:id`

Permite buscar uma tarefa específica pelo seu identificador.

### Atualizar tarefa

`PUT /tarefas/:id`

Permite alterar informações de uma tarefa existente.

### Excluir tarefa

`DELETE /tarefas/:id`

Remove uma tarefa cadastrada.

---

## Mudança de Escopo

Durante o desenvolvimento do projeto, foi identificada a necessidade de classificar as tarefas por prioridade.

Por isso, foi adicionada a funcionalidade de prioridade nas tarefas, permitindo classificá-las como:

- Baixa;
- Média;
- Alta.

Essa mudança tornou o sistema mais útil para o gerenciamento das atividades, pois permite identificar quais tarefas devem receber mais atenção.

---

## Tecnologias Utilizadas

- Node.js;
- Express;
- JavaScript;
- Jest;
- Supertest;
- Git;
- GitHub;
- GitHub Actions.

---

## Como Executar o Projeto

Para executar o projeto, primeiro instale as dependências:

```bash
npm install
