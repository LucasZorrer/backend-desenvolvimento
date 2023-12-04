'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coordenador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Coordenador.init({
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
    curso_id: DataTypes.INTEGER,
    docente_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Coordenador',
    tableName: 'coordenadores'
  });
  return Coordenador;
};