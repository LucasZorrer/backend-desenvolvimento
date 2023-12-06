require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(express.json());
app.use(cors())


// IMPORTAÇÃO DAS CONTROLLERS
const professoresController = require("./app/controllers/ProfessorController");
const chefiasController = require("./app/controllers/ChefiaController");
const disciplinasController = require("./app/controllers/DisciplinaController");
const cursosController = require("./app/controllers/CursoController");
const ciclosletivosController = require("./app/controllers/CiclosLetivosController");
const turmasController = require("./app/controllers/TurmasController");
const coordenadoresController = require("./app/controllers/CoordenadoresController");
const docentesciclosletivosController = require("./app/controllers/DocentesCiclosLetivos");

// CRUD DE PROFESSOR
app.get("/professores", professoresController.listAll);
app.get("/professores/:id", professoresController.listUnique);
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
app.put("/curso/:id", cursosController.alterCurso);
app.delete("/curso/delete/:id", cursosController.deleteCurso);

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

//CRUDO DE COORDENADORES
app.get("/coordenadores", coordenadoresController.listAll);
app.post("/coordenador/create", coordenadoresController.createCoordenador);
app.put("/coordenador/:id", coordenadoresController.alterCoordenador);
app.delete("/coordenador/delete/:id", coordenadoresController.deleteCoordenador);

//CRUD DE DOCENTES CICLOS LETIVOS
app.get("/docentes_ciclos_letivos", docentesciclosletivosController.listAll);
app.post("/docente_ciclo_letivo/create", docentesciclosletivosController.createDocenteCicloLetivo);
app.put("/docente_ciclo_letivo/:id", docentesciclosletivosController.alterDocenteCicloLetivo);
app.delete("/docente_ciclo_letivo/delete/:id", docentesciclosletivosController.deleteDocenteCicloLetivo);

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
