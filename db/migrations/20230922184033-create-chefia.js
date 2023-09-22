'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Chefia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inicio: {
        type: Sequelize.DATE
      },
      fim: {
        type: Sequelize.DATE
      },
      nivel: {
        type: Sequelize.STRING
      },
      docente_id: {
        type: Sequelize.INTEGER,
        references: { model: 'docentes', key: 'id' }, 
        onDelete: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Chefia');
  }
};