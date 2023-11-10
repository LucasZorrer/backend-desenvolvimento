require("dotenv").config();

const express = require("express");
const app = express();
app.use(express.json());

const UserController = require("./app/controllers/UserController");

app.post("/token", UserController.refreshToken);
app.post("/signup", UserController.createUser);
app.post("/login", UserController.loginUser);
app.delete("/logout", UserController.logout);

app.listen(6968, () => {
  console.log("Auth Server is running");
});
