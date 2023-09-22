'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class docente_ciclo_letivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  docente_ciclo_letivo.init({
    nivel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'docente_ciclo_letivo',
  });
  return docente_ciclo_letivo;
};