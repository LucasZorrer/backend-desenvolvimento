const { Turma } = require("../models");

const listAll = async (req, res) => {
    const turmas = await Turma.findAll()
    res.json({ success: true, turmas })
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

const alterTurma = () => {
    console.log("alterando");
  };
  
  const deleteTurma = async (req, res) => {
    const deleteTurma = await Turma.destroy({
        where: {
            id:req.params.id,
        }
    })
    res.json({success:true, deleteTurma})
  };


module.exports = {
    listAll,
    createTurmas,
    alterTurma,
    deleteTurma,
}