"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("docente_ciclo_letivos", {
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("docente_ciclo_letivos");
  },
};
