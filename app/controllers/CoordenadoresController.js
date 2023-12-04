const { Coordenador } = require("../models");

const listAll = async (req, res) => {
    const coordenadores = await Coordenador.findAll()
    res.json({ success: true, coordenadores })
};

const createCoordenador = async (req, res) => {
    try {
        const { inicio, fim, curso_id, docente_id } = req.body;

        if (!inicio || inicio == "") {
            res.json({ success: false, message: "Complete the inicio field" });
        }

        if (!fim || fim == "") {
            res.json({ success: false, message: "Complete the fim field" });
        }

        if (!curso_id || curso_id == "") {
            res.json({ success: false, message: "Complete the curso_id field" });
        }

        if (!docente_id || docente_id == "") {
            res.json({ success: false, message: "Complete the docente_id field" });
        }

        const createdCoordenador = await Coordenador.create({
            inicio,
            fim,
            curso_id,
            docente_id
        });
        res.status(201).json({ success: true, coordenador: createdCoordenador });
    } catch (error) {
        res.status(201).json({
            success: false,
            error,
        });
        console.log(error);
    }
};

const alterCoordenador = () => {
    console.log("alterando");
  };

  const deleteCoordenador = async (req, res) => {
    const deleteCoordenador = await Coordenador.destroy({
        where: {
            id:req.params.id,
        }
    })
    res.json({success:true, deleteCoordenador})
  };

module.exports = {
    listAll,
    createCoordenador,
    alterCoordenador,
    deleteCoordenador,
  };
