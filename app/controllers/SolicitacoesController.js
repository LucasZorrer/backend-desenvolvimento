const { Solicitacao } = require("../models");

const listAll = async (req, res) => {
    const solicitacoes = await Solicitacao.findAll()
    res.json({ success: true, solicitacoes })
};

const createSolicitacoes = async (req, res) => {
    try {
        const { data, hora, justificativa, anexo, tipo, ciencia_substituto, data_devolucao, hora_devolucao, autorizacao_chefia, cinecia_chefia, ciencia_coordenador, docente_solicitante_id, docente_substituto_id, ciclo_letivo_id, disciplina_id, turma_id, disciplina_substituta_id, chefia_id, coordenador_id } = req.body;

        if (!data || data == "") {
            res.json({ success: false, message: "Complete the data field" });
        }
        if (!hora || hora == "") {
            res.json({ success: false, message: "Complete the hora field" });
        }
        if (!justificativa || justificativa == "") {
            res.json({ success: false, message: "Complete the justificativa field" });
        }
        if (!anexo || anexo == "") {
            res.json({ success: false, message: "Complete the anexo field" });
        }
        if (!tipo || tipo == "") {
            res.json({ success: false, message: "Complete the tipo field" });
        }
        if (!ciencia_substituto || ciencia_substituto == "") {
            res.json({ success: false, message: "Complete the ciencia_substituto field" });
        }
        if (!data_devolucao || data_devolucao == "") {
            res.json({ success: false, message: "Complete the data_devolucao field" });
        }
        if (!hora_devolucao || hora_devolucao == "") {
            res.json({ success: false, message: "Complete the hora_devolucao field" });
        }
        if (!autorizacao_chefia || autorizacao_chefia == "") {
            res.json({ success: false, message: "Complete the autorizacao_chefia field" });
        }
        if (!cinecia_chefia || cinecia_chefia == "") {
            res.json({ success: false, message: "Complete the cinecia_chefia field" });
        }
        if (!ciencia_coordenador || ciencia_coordenador == "") {
            res.json({ success: false, message: "Complete the ciencia_coordenador field" });
        }
        if (!docente_solicitante_id || docente_solicitante_id == "") {
            res.json({ success: false, message: "Complete the docente_solicitante_id field" });
        }
        if (!docente_substituto_id || docente_substituto_id == "") {
            res.json({ success: false, message: "Complete the docente_substituto_id field" });
        }
        if (!ciclo_letivo_id || ciclo_letivo_id == "") {
            res.json({ success: false, message: "Complete the ciclo_letivo_id field" });
        }
        if (!disciplina_id || disciplina_id == "") {
            res.json({ success: false, message: "Complete the disciplina_id field" });
        }
        if (!turma_id || turma_id == "") {
            res.json({ success: false, message: "Complete the turma_id field" });
        }
        if (!disciplina_substituta_id || disciplina_substituta_id == "") {
            res.json({ success: false, message: "Complete the disciplina_substituta_id field" });
        }
        if (!chefia_id || chefia_id == "") {
            res.json({ success: false, message: "Complete the chefia_id field" });
        }
        if (!coordenador_id || coordenador_id == "") {
            res.json({ success: false, message: "Complete the coordenador_id field" });
        }

        const createdSolicitacao = await Solicitacao.create({
            data, 
            hora, 
            justificativa, 
            anexo, 
            tipo, 
            ciencia_substituto, 
            data_devolucao, 
            hora_devolucao, 
            autorizacao_chefia, 
            cinecia_chefia, 
            ciencia_coordenador, 
            docente_solicitante_id, 
            docente_substituto_id, 
            ciclo_letivo_id, 
            disciplina_id, 
            turma_id, 
            disciplina_substituta_id, 
            chefia_id, 
            coordenador_id
        });
        res.status(201).json({ success: true, solicitacao: createdSolicitacao });
    } catch (error) {
        res.status(201).json({
            success: false,
            error,
        });
        console.log(error);
    }
};

const alterSolicitacao = () => {
    console.log("alterando");
  };
  
  const deleteSolicitacao = async (req, res) => {
    const deleteSolicitacao = await Solicitacao.destroy({
        where: {
            id:req.params.id,
        }
    })
    res.json({success:true, deleteSolicitacao})
  };


module.exports = {
    listAll,
    createSolicitacoes,
    alterSolicitacao,
    deleteSolicitacao,
}