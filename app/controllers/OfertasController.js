const { Oferta } = require("../models");

const listAll = async (req, res) => {
  const ofertas = await Oferta.findAll();
  return res.json({ success: true, ofertas });
};

const createOferta = async (req, res) => {
  try {
    const { docente_id, turma_id, ciclo_letivo_id, disciplina_id } = req.body;
    if (!docente_id || docente_id == "") {
      return res.json({
        success: false,
        message: "Complete the docente_id field",
      });
    }
    if (!turma_id || turma_id == "") {
      return res.json({
        success: false,
        message: "Complete the turma_id field",
      });
    }
    if (!ciclo_letivo_id || ciclo_letivo_id == "") {
      return res.json({
        success: false,
        message: "Complete the ciclo_letivo_id field",
      });
    }
    if (!disciplina_id || disciplina_id == "") {
      return res.json({
        success: false,
        message: "Complete the disciplina_id field",
      });
    }

    const createdOferta = await Oferta.create({
      docente_id,
      turma_id,
      ciclo_letivo_id,
      disciplina_id,
    });

    return res.status(201).json({ success: true, curso: createdOferta });
  } catch (error) {
    return res.status(201).json({
      success: false,
      error,
    });
  }
};

const alterOferta = async (req, res) => {
  try {
    const { docente_id, turma_id, ciclo_letivo_id, disciplina_id } = req.body;
    const ofertaId = req.params.id;

    if (!docente_id || docente_id === "") {
      return res.json({
        success: false,
        message: "Complete the docente_id field",
      });
    }
    if (!turma_id || turma_id === "") {
      return res.json({
        success: false,
        message: "Complete the turma_id field",
      });
    }
    if (!ciclo_letivo_id || ciclo_letivo_id === "") {
      return res.json({
        success: false,
        message: "Complete the ciclo_letivo_id field",
      });
    }
    if (!disciplina_id || disciplina_id === "") {
      return res.json({
        success: false,
        message: "Complete the disciplina_id field",
      });
    }

    const updatedOferta = await Oferta.update(
      {
        docente_id,
        turma_id,
        ciclo_letivo_id,
        disciplina_id,
      },
      {
        where: {
          id: ofertaId,
        },
      }
    );

    if (updatedOferta[0] === 1) {
      return res.json({
        success: true,
        message: "Oferta updated successfully",
      });
    } else {
      return res.json({
        success: false,
        message: "Oferta not found or not updated",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

const deleteOferta = async (req, res) => {
  const deleteOferta = await Oferta.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true, deleteOferta });
};

module.exports = {
  listAll,
  createOferta,
  alterOferta,
  deleteOferta,
};
