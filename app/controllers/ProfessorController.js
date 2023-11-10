const { User } = require("../models");
const bcrypt = require("bcrypt");
const { Docente } = require("../models");
const res = require("express/lib/response");

const listAll = async (req,res) => {
    const professores = await Docente.findAll()
    res.json({success:true, professores})
};

const createProfessor = async (req, res) => {
  try {
    const { siape, login, password } = req.body;

    if (!siape || siape == "") {
      res.json({ success: false, message: "Complete the siape field" });
    }
    if (!login || login == "") {
      res.json({ success: false, message: "Complete the login field" });
    }
    if (!password || password == "") {
      res.json({ success: false, message: "Complete the password field" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      login,
      password: hashedPassword,
      papel: "Professor",
    });

    const isUserCreated = await User.findOne({
      where: {
        login,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (isUserCreated) {
      const createDocente = await Docente.create({
        siape,
        user_id: isUserCreated.id,
      });
      res.status(201).json({ success: true, docente: createDocente });
    } else {
      console.log("n criou");
    }
  } catch (error) {
    res.status(201).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const alterProfessor = () => {
  console.log("alterando");
};

const deleteProfessor = async (req, res) => {
  const deleteProfessor = await User.destroy({
      where: {
          id:req.params.id,
      }
  })
  res.json({success:true, deleteProfessor})
};

module.exports = {
  listAll,
  createProfessor,
  alterProfessor,
  deleteProfessor,
};
