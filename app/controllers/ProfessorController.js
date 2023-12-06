const { User, Docente } = require("../models");
const bcrypt = require("bcrypt");

const listAll = async (req, res) => {
  try {
    const professores = await Docente.findAll({
      include: {
        model: User,

        attributes: {
          exclude: ["createdAt", "updatedAt", "password"],
        },
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    return res.json({ success: true, professores })
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }
};

const listUnique = async (req, res) => {
  try {
    const professor = await Docente.findOne({
      where: {
        id: req.params.id,
      },
      include: {
        model: User,
      }
    });

    return res.json({ success: true, professor })
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }
};


const createProfessor = async (req, res) => {
  try {
    const { siape, login, password } = req.body;

    if (!siape || siape == "") {
      return res.json({ success: false, message: "Complete the siape field" });
    }
    if (!login || login == "") {
      return res.json({ success: false, message: "Complete the login field" });
    }
    if (!password || password == "") {
      return res.json({ success: false, message: "Complete the password field" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
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
      return res.status(201).json({ success: true, message: "User created" });
    } else {
      return res.status(400).json({
        success: false,
        message: "User was not created",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error,
    });
  }
};

const alterProfessor = async (req, res) => {
  const { siape, login, password } = req.body;

  if (!siape || siape == "") {
    return res.json({ success: false, message: "Complete the siape field" });
  }

  if (!login || login == "") {
    return res.json({ success: false, message: "Complete the login field" });
  }

  if (!password || password == "") {
    return res.json({ success: false, message: "Complete the password field" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const alterUser = await User.update(
    {
      login,
      password: hashedPassword,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );

  const alterDocente = await Docente.update(
    {
      siape,
    },
    {
      where: {
        user_id: req.params.id,
      },
    }
  );

  return res.json({ success: true, alterUser, alterDocente });

};

const deleteProfessor = async (req, res) => {
  try {
    const deleteDocente = await Docente.destroy({
      where: {
        id: req.params.id,
      },
    });

    return res.json({ success: true, message: "Professor deleted" })
  } catch (error) {
    return res.status(400).json({ success: false, error })
  }
};

module.exports = {
  listAll,
  createProfessor,
  alterProfessor,
  deleteProfessor,
  listUnique
};
