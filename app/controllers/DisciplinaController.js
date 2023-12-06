const { Disciplina } = require("../models");

const listAll = async (req, res) => {
  const disciplinas = await Disciplina.findAll();
  res.json({ success: true, disciplinas });
};

const createDisciplina = async (req, res) => {
  try {
    const { nome } = req.body;

    if (!nome || nome == "") {
      res.json({ success: false, message: "Complete the nome field" });
    }

    const createdDisciplina = await Disciplina.create({
      nome,
    });
    res.status(201).json({ success: true, disciplina: createdDisciplina });
  } catch (error) {
    res.status(201).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const alterDisciplina = async (req, res) => {
  try {
    const { nome } = req.body;
    const disciplinaId = req.params.id;

    if (!nome || nome === "") {
      res.json({ success: false, message: "Complete the nome field" });
    }

    const updatedDisciplina = await Disciplina.update(
      {
        nome,
      },
      {
        where: {
          id: disciplinaId,
        },
      }
    );

    if (updatedDisciplina[0] === 1) {
      res.json({ success: true, message: "Disciplina updated successfully" });
    } else {
      res.json({
        success: false,
        message: "Disciplina not found or not updated",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const deleteDisciplina = async (req, res) => {
  const deleteDisciplina = await Disciplina.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true, deleteDisciplina });
};

module.exports = {
  listAll,
  createDisciplina,
  alterDisciplina,
  deleteDisciplina,
};
