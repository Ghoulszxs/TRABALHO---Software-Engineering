
const request = require("supertest");
const app = require("../server");

describe("API de Gerenciamento de Tarefas", () => {
  test("Deve listar as tarefas", async () => {
    const resposta = await request(app).get("/tarefas");

    expect(resposta.statusCode).toBe(200);
  });

  test("Deve criar uma nova tarefa", async () => {
    const resposta = await request(app)
      .post("/tarefas")
      .send({
        titulo: "Estudar GitHub Actions",
        prioridade: "Alta"
      });

    expect(resposta.statusCode).toBe(201);

    const tarefa = resposta.body.tarefa || resposta.body;

    expect(tarefa).toHaveProperty("id");
    expect(tarefa.titulo).toBe("Estudar GitHub Actions");
    expect(tarefa.prioridade).toBe("Alta");
  });
});