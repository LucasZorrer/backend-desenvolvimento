const { Docente_ciclo_letivo } = require("../models");

const listAll = async (req, res) => {
  const docentesCiclosLetivos = await Docente_ciclo_letivo.findAll();
  res.json({ success: true, docentesCiclosLetivos });
};

const createDocenteCicloLetivo = async (req, res) => {
  try {
    const { nivel, docente_id, ciclo_letivo_id } = req.body;

    if (!nivel || nivel == "") {
      res.json({ sucess: false, message: "Complete the nivel field" });
    }
    if (!docente_id || docente_id == "") {
      res.json({ sucess: false, message: "Complete the docente_id field" });
    }
    if (!ciclo_letivo_id || ciclo_letivo_id == "") {
      res.json({
        success: false,
        message: "Complete the ciclo_letivo_id field",
      });
    }

    const createdDocenteCicloLetivo = await Docente_ciclo_letivo.create({
      nivel,
      docente_id,
      ciclo_letivo_id,
    });
    res
      .status(201)
      .json({ success: true, docenteCicloLetivo: createdDocenteCicloLetivo });
  } catch (error) {
    res.status(201).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const alterDocenteCicloLetivo = async (req, res) => {
  try {
    const { nivel, docente_id, ciclo_letivo_id } = req.body;
    const docenteCicloLetivoId = req.params.id;

    if (!nivel || nivel === "") {
      res.json({ success: false, message: "Complete the nivel field" });
    }
    if (!docente_id || docente_id === "") {
      res.json({ success: false, message: "Complete the docente_id field" });
    }
    if (!ciclo_letivo_id || ciclo_letivo_id === "") {
      res.json({
        success: false,
        message: "Complete the ciclo_letivo_id field",
      });
    }

    const updatedDocenteCicloLetivo = await Docente_ciclo_letivo.update(
      {
        nivel,
        docente_id,
        ciclo_letivo_id,
      },
      {
        where: {
          id: docenteCicloLetivoId,
        },
      }
    );

    if (updatedDocenteCicloLetivo[0] === 1) {
      res.json({
        success: true,
        message: "Docente Ciclo Letivo updated successfully",
      });
    } else {
      res.json({
        success: false,
        message: "Docente Ciclo Letivo not found or not updated",
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

const deleteDocenteCicloLetivo = async (req, res) => {
  const deleteCicloLetivo = await Docente_ciclo_letivo.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true, deleteCicloLetivo });
};

module.exports = {
  listAll,
  createDocenteCicloLetivo,
  alterDocenteCicloLetivo,
  deleteDocenteCicloLetivo,
};
