const express = require("express");
const app = express();

app.use(express.json());

let tarefas = [];
let id = 1;

// Criar tarefa
app.post("/tarefas", (req, res) => {
  const { titulo, prioridade } = req.body;

  if (!titulo || !prioridade) {
    return res.status(400).json({
      erro: "Título e prioridade são obrigatórios."
    });
  }

  const novaTarefa = {
    id: id++,
    titulo,
    prioridade,
    status: "Pendente",
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
  const tarefa = tarefas.find(t => t.id === Number(req.params.id));

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  res.json(tarefa);
});

// Atualizar tarefa
app.put("/tarefas/:id", (req, res) => {
  const tarefa = tarefas.find(t => t.id === Number(req.params.id));

  if (!tarefa) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  const { titulo, prioridade, status } = req.body;

  if (titulo) tarefa.titulo = titulo;
  if (prioridade) tarefa.prioridade = prioridade;
  if (status) tarefa.status = status;

  res.json(tarefa);
});

// Excluir tarefa
app.delete("/tarefas/:id", (req, res) => {
  const tarefaExiste = tarefas.some(t => t.id === Number(req.params.id));

  if (!tarefaExiste) {
    return res.status(404).json({
      erro: "Tarefa não encontrada."
    });
  }

  tarefas = tarefas.filter(t => t.id !== Number(req.params.id));

  res.json({
    mensagem: "Tarefa excluída com sucesso."
  });
});

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
