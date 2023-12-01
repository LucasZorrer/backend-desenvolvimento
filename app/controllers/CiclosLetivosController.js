const { Ciclo_letivo } = require("../models");

const listAll = async (req, res) => {
    const ciclosLetivos = await Ciclo_letivo.findAll()
    res.json({ success: true, ciclosLetivos })
};

const createCicloLetivo = async (req, res) => {
    try {
        const { ano, semestre, inicio, fim } = req.body;

        if (!ano || ano == "") {
            res.json({ sucess: false, message: "Complete the ano field" });
        }
        if (!semestre || semestre == "") {
            res.json({ sucess: false, message: "Complete the semestre field" });
        }
        if (!inicio || inicio == "") {
            res.json({ success: false, message: "Complete the inicio field" });
        }
        if (!fim || fim == "") {
            res.json({ sucess: false, message: "Complete the fim field" });
        }

        const createdCicloLetivo = await Ciclo_letivo.create({
            ano,
            semestre,
            inicio,
            fim,
        });
        res.status(201).json({ success: true, cicloLetivo: createdCicloLetivo });
    } catch (error) {
        res.status(201).json({
            success: false,
            error,
        });
        console.log(error);
    }
};

const alterCicloLetivo = () => {
    console.log("alterando")
}

const deleteCicloLetivo = async (req, res) => {
    const deleteCicloLetivo = await Ciclo_letivo.destroy({
        where: {
            id:req.params.id,
        }
    })
    res.json({success:true, deleteCicloLetivo})
  };

module.exports = {
    listAll,
    createCicloLetivo,
    alterCicloLetivo,
    deleteCicloLetivo,
}