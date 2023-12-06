const { Turma } = require("../models");

const listAll = async (req, res) => {
  const turmas = await Turma.findAll();
  res.json({ success: true, turmas });
};

const createTurmas = async (req, res) => {
  try {
    const { nome, curso_id } = req.body;

    if (!nome || nome == "") {
      res.json({ success: false, message: "Complete the nome field" });
    }
    if (!curso_id || curso_id == "") {
      res.json({ success: false, message: "Complete the curso_id field" });
    }

    const createdTurma = await Turma.create({
      nome,
      curso_id,
    });
    res.status(201).json({ success: true, disciplina: createdTurma });
  } catch (error) {
    res.status(201).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const alterTurma = async (req, res) => {
  try {
    const { nome, curso_id } = req.body;
    const turmaId = req.params.id;

    if (!nome || nome === "") {
      res.json({ success: false, message: "Complete the nome field" });
    }
    if (!curso_id || curso_id === "") {
      res.json({ success: false, message: "Complete the curso_id field" });
    }

    const updatedTurma = await Turma.update(
      {
        nome,
        curso_id,
      },
      {
        where: {
          id: turmaId,
        },
      }
    );

    if (updatedTurma[0] === 1) {
      res.json({ success: true, message: "Turma updated successfully" });
    } else {
      res.json({ success: false, message: "Turma not found or not updated" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const deleteTurma = async (req, res) => {
  const deleteTurma = await Turma.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true, deleteTurma });
};

module.exports = {
  listAll,
  createTurmas,
  alterTurma,
  deleteTurma,
};
