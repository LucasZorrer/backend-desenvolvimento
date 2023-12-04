"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("docente_ciclo_letivos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nivel: {
        type: Sequelize.STRING,
      },
      docente_id: {
        type: Sequelize.INTEGER,
        references: { model: "docentes", key: "id" },
        onDelete: "CASCADE",
      },
      ciclo_letivo_id: {
        type: Sequelize.INTEGER,
        references: { model: "Ciclo_letivos", key: "id" },
        onDelete: "CASCADE",
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
    await queryInterface.dropTable("docente_ciclo_letivos");
  },
};
