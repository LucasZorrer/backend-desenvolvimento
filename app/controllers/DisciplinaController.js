const { Disciplina } = require("../models");

const listAll = async (req, res) => {
    const disciplinas = await Disciplina.findAll()
    res.json({ success: true, disciplinas })
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
        res.status(201).json({ success: true, disciplina: createDisciplina });
    } catch (error) {
        res.status(201).json({
            success: false,
            error,
        });
        console.log(error);
    }
};

const alterDisciplina = () => {
    console.log("alterando");
  };
  
  const deleteDisciplina = async (req, res) => {
    const deleteDisciplina = await Disciplina.destroy({
        where: {
            id:req.params.id,
        }
    })
    res.json({success:true, deleteDisciplina})
  };


module.exports = {
    listAll,
    createDisciplina,
    alterDisciplina,
    deleteDisciplina,
}