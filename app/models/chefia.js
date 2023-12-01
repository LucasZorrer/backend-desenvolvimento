'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chefia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Chefia.init({
    inicio: DataTypes.DATE,
    fim: DataTypes.DATE,
    nivel: DataTypes.STRING,
    docente_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Chefia',
  });
  return Chefia;
};