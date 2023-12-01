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

module.exports = {
  createCurso,
  listAll,
};
