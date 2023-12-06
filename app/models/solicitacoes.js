'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Solicitacao.init({
    data: DataTypes.DATE,
    hora: DataTypes.TIME,
    justificativa: DataTypes.STRING,
    anexo: DataTypes.STRING,
    tipo: DataTypes.STRING,
    ciencia_substituto: DataTypes.DATE,
    data_devolucao: DataTypes.DATE,
    hora_devolucao: DataTypes.DATE,
    autorizacao_chefia: DataTypes.BOOLEAN,
    ciencia_chefia: DataTypes.BOOLEAN,
    ciencia_coordenador: DataTypes.BOOLEAN,
    docente_solicitante_id: DataTypes.INTEGER,
    docente_substituto_id: DataTypes.INTEGER,
    ciclo_letivo_id: DataTypes.INTEGER,
    disciplina_id: DataTypes.INTEGER,
    turma_id: DataTypes.INTEGER,
    disciplina_substituta_id: DataTypes.INTEGER,
    chefia_id: DataTypes.INTEGER,
    coordenador_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Solicitacao',
    tableName: 'solicitacoes',
  });
  return Solicitacao;
};