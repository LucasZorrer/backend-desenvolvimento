'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Coordenadores', {
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
      curso_id: {
        type: Sequelize.INTEGER,
        references: { model: 'cursos', key: 'id' }, 
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('Coordenadors');
  }
};