const express = require("express");

const app = express();

app.use(express.json());

let tarefas = [];
let proximoId = 1;

const prioridadesPermitidas = ["Baixa", "Média", "Alta"];
const statusPermitidos = ["Pendente", "Em andamento", "Concluída"];

// Rota inicial
app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Gerenciamento de Tarefas funcionando!"
  });
});

// Criar tarefa
app.post("/tarefas", (req, res) => {
  const { titulo, descricao, prioridade } = req.body;

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({
      erro: "O título da tarefa é obrigatório."
    });
  }

  if (!prioridade || !prioridadesPermitidas.includes(prioridade)) {
    return res.status(400).json({
      erro: "A prioridade deve ser: Baixa, Média ou Alta."
    });
  }

  const novaTarefa = {
    id: proximoId++,
    titulo,
    descricao: descricao || "",
    prioridade,
    status: "Pendente",
    criadoEm: new Date().toLocaleDateString("pt-BR")
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

// Listar tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// Buscar tarefa por ID
app.get("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);

  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  res.json(tarefa);
});

// Atualizar tarefa
app.put("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);
  const { titulo, descricao, prioridade, status } = req.body;

  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  if (titulo !== undefined && titulo.trim() === "") {
    return res.status(400).json({
      erro: "O título não pode ser vazio."
    });
  }

  if (prioridade !== undefined && !prioridadesPermitidas.includes(prioridade)) {
    return res.status(400).json({
      erro: "A prioridade deve ser: Baixa, Média ou Alta."
    });
  }

  if (status !== undefined && !statusPermitidos.includes(status)) {
    return res.status(400).json({
      erro: "O status deve ser: Pendente, Em andamento ou Concluída."
    });
  }

  if (titulo !== undefined) tarefa.titulo = titulo;
  if (descricao !== undefined) tarefa.descricao = descricao;
  if (prioridade !== undefined) tarefa.prioridade = prioridade;
  if (status !== undefined) tarefa.status = status;

  res.json(tarefa);
});

// Excluir tarefa
app.delete("/tarefas/:id", (req, res) => {
  const id = Number(req.params.id);

  const tarefaExiste = tarefas.some((tarefa) => tarefa.id === id);

  if (!tarefaExiste) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  tarefas = tarefas.filter((tarefa) => tarefa.id !== id);

  res.json({
    mensagem: "Tarefa excluída com sucesso."
  });
});

// Iniciar servidor somente quando executar npm start
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
}

// Exportar app para os testes automatizados
module.exports = app;
