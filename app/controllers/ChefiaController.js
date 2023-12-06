const { Chefia } = require("../models");

const listAll = async (req, res) => {
  const chefias = await Chefia.findAll();
  res.json({ success: true, chefias });
};

const createChefia = async (req, res) => {
  try {
    const { inicio, fim, nivel, docente_id } = req.body;

    if (!inicio || inicio == "") {
      res.json({ success: false, message: "Complete the inicio field" });
    }
    if (!fim || fim == "") {
      res.json({ sucess: false, message: "Complete the fim field" });
    }
    if (!nivel || nivel == "") {
      res.json({ sucess: false, message: "Complete the nivel field" });
    }
    if (!docente_id || docente_id == "") {
      res.json({ sucess: false, message: "Complete the docente_id field" });
    }

    const createdChefia = await Chefia.create({
      inicio,
      fim,
      nivel,
      docente_id,
    });
    res.status(201).json({ success: true, chefia: createdChefia });
  } catch (error) {
    res.status(201).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const alterChefia = async (req, res) => {
  try {
    const { inicio, fim, nivel, docente_id } = req.body;
    const chefiaId = req.params.id;

    if (!inicio || inicio === "") {
      res.json({ success: false, message: "Complete the inicio field" });
    }
    if (!fim || fim === "") {
      res.json({ success: false, message: "Complete the fim field" });
    }
    if (!nivel || nivel === "") {
      res.json({ success: false, message: "Complete the nivel field" });
    }
    if (!docente_id || docente_id === "") {
      res.json({ success: false, message: "Complete the docente_id field" });
    }

    const updatedChefia = await Chefia.update(
      {
        inicio,
        fim,
        nivel,
        docente_id,
      },
      {
        where: {
          id: chefiaId,
        },
      }
    );

    if (updatedChefia[0] === 1) {
      res.json({ success: true, message: "Chefia updated successfully" });
    } else {
      res.json({ success: false, message: "Chefia not found or not updated" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
    console.log(error);
  }
};

const deleteChefia = async (req, res) => {
  const deleteChefia = await Chefia.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.json({ success: true, deleteChefia });
};

module.exports = {
  listAll,
  createChefia,
  alterChefia,
  deleteChefia,
};
