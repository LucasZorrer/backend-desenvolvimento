'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Docente_ciclo_letivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Docente_ciclo_letivo.init({
    nivel: DataTypes.STRING,
    docente_id: DataTypes.INTEGER,
    ciclo_letivo_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Docente_ciclo_letivo',
  });
  return Docente_ciclo_letivo;
};