const { Curso } = require("../models");

const listAll = async (req, res) => {
  const cursos = await Curso.findAll();
  return res.json({ success: true, cursos });
};

const createCurso = async (req, res) => {
  try {
    const { nome } = req.body;
    if (!nome || nome == "") {
      return res.json({ success: false, message: "Complete the name field" });
    }

    const createdCurso = await Curso.create({
      nome,
    });

    return res.status(201).json({ success: true, curso: createdCurso });
  } catch (error) {
    return res.status(201).json({
      success: false,
      error,
    });
  }
};

const alterCurso = async (req, res) => {
  try {
    const { nome } = req.body;
    const cursoId = req.params.id;

    if (!nome || nome === "") {
      return res.json({ success: false, message: "Complete the name field" });
    }

    const updatedCurso = await Curso.update(
      {
        nome,
      },
      {
        where: {
          id: cursoId,
        },
      }
    );

    if (updatedCurso[0] === 1) {
      return res.json({ success: true, message: "Curso updated successfully" });
    } else {
      return res.json({
        success: false,
        message: "Curso not found or not updated",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

const deleteCurso = async (req, res) => {
  const deleteCurso = await Curso.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true, deleteCurso });
};

module.exports = {
  createCurso,
  listAll,
  alterCurso,
  deleteCurso,
};
