require("dotenv").config();
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

// IMPORTAÇÃO DAS CONTROLLERS
const professoresController = require("./app/controllers/ProfessorController");
const chefiasController = require("./app/controllers/ChefiaController");

// CRUD DE PROFESSOR
app.get("/professores", professoresController.listAll);
app.post("/professor/create", professoresController.createProfessor);
app.put("/professor/:id", professoresController.alterProfessor);
app.delete("/professor/delete/:id", professoresController.deleteProfessor);

//CRUD DE CHEFIAS
app.get("/chefias", chefiasController.listAll);
// app.post("/chefias/create", chefiasController.createChefia);
// app.put("/chefias/:id", chefiasController.alterChefia);
// app.delete("/chefias/delete/:id", chefiasController.deleteChefia);


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
