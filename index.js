require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

// IMPORTAÇÃO DAS CONTROLLERS
const professoresController = require("./app/controllers/ProfessorController");
const chefiasController = require("./app/controllers/ChefiaController");
const disciplinasController = require("./app/controllers/DisciplinaController");
const cursosController = require("./app/controllers/CursoController");
const ciclosletivosController = require("./app/controllers/CiclosLetivosController");
const turmasController = require("./app/controllers/TurmasController");

// CRUD DE PROFESSOR
app.get("/professores", professoresController.listAll);
app.post("/professor/create", professoresController.createProfessor);
app.put("/professor/:id", professoresController.alterProfessor);
app.delete("/professor/delete/:id", professoresController.deleteProfessor);

//CRUD DE CHEFIAS
app.get("/chefias", chefiasController.listAll);
app.post("/chefia/create", chefiasController.createChefia);
app.put("/chefia/:id", chefiasController.alterChefia);
app.delete("/chefia/delete/:id", chefiasController.deleteChefia);

//CRUD DE DISCIPLINAS
app.get("/disciplinas", disciplinasController.listAll);
app.post("/disciplina/create", disciplinasController.createDisciplina);
app.put("/disciplina/:id", disciplinasController.alterDisciplina);
app.delete("/disciplina/delete/:id", disciplinasController.deleteDisciplina);

// CRUD DE CURSO
app.get("/cursos", cursosController.listAll);
app.post("/curso/create", cursosController.createCurso);
// app.put("/curso/:id", cursosController.alterCurso);
// app.delete("/curso/delete/:id", cursosController.deleteCurso);

//CRUD DE CiCLOS LETIVOS
app.get("/ciclos_letivos", ciclosletivosController.listAll);
app.post("/ciclo_letivo/create", ciclosletivosController.createCicloLetivo);
app.put("/ciclo_letivo/:id", ciclosletivosController.alterCicloLetivo);
app.delete("/ciclo_letivo/delete/:id", ciclosletivosController.deleteCicloLetivo);

//CRUDO DE TURMAS
app.get("/turmas", turmasController.listAll);
app.post("/turma/create", turmasController.createTurmas);
app.put("/turma/:id", turmasController.alterTurma);
app.delete("/turma/delete/:id", turmasController.deleteTurma);

// ROTAS GERAIS
app.get("/", authenticateToken, (req, res) => {
  res.json("Welcome");
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(6969, () => {
  console.log("Main Server is running");
});
