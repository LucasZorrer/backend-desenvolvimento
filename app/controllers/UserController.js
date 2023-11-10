const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { User } = require("../models");

const refreshToken = async (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null)
    return res.sendStatus(401).json("You are not authenticated!");
  if (!refreshTokens.includes(refreshToken))
    return res.sendStatus(403).json("Refresh token is not valid!");

  if (res.headersSent) {
    return;
  }

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken(user);
    res.json({ accessToken: accessToken });
  });
};

const createUser = async (req, res) => {
  try {
    const { login, papel, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({
      where: {
        login,
      },
    });

    if (existingUser) {
      const errors = [];
      if (existingUser.login === login) {
        errors.push("Username already exists");
      }

      res.status(201).json({ success: false, message: errors.join(", ") });
    }

    const user = await User.create({
      login,
      papel,
      password: hashedPassword,
    });
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(201).json({
      success: false,
      message: error.message,
    });
  }
};

let refreshTokens = [];

const loginUser = async (req, res) => {
  const { login, password } = req.body;
  if (login === undefined) {
    res.status(201).json({ success: false, message: "Enter an email" });
    return;
  }

  try {
    const user = await User.findOne({
      where: {
        login,
      },
    });

    if (!user || user === undefined) {
      res.status(201).json({ success: false, message: "Email not registered" });
      return;
    }

    const hashedPassword = user.password;
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        return err;
      }
      if (isMatch) {
        const accessToken = generateAccessToken(user.id);
        const refreshToken = jwt.sign(
          user.id,
          process.env.REFRESH_TOKEN_SECRET
        );
        refreshTokens.push(refreshToken);
        res.status(201).json({
          success: true,
          message: "User Successfully Created",
          accessToken: accessToken,
          refreshToken: refreshToken,
        });
      } else {
        res.status(201).json({ success: false, message: "Wrong Password." });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
  res.json({ success: true, message: "Logout Successfully done" }).status(204);
};

function generateAccessToken(user) {
  return jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET);
}

module.exports = {
  createUser,
  loginUser,
  refreshToken,
  logout,
};
