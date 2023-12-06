require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const UserController = require("./app/controllers/UserController");

app.use(express.json());
app.use(cors())

app.post("/token", UserController.refreshToken);
app.post("/signup", UserController.createUser);
app.post("/login", UserController.loginUser);
app.delete("/logout", UserController.logout);

app.listen(6968, () => {
  console.log("Auth Server is running");
});
