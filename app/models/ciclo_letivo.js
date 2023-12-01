'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ciclo_letivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ciclo_letivo.init({
    ano: DataTypes.INTEGER,
    semestre: DataTypes.INTEGER,
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Ciclo_letivo',
  });
  return Ciclo_letivo;
};