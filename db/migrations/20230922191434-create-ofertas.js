"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ofertas", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      docente_id: {
        type: Sequelize.INTEGER,
        references: { model: "docentes", key: "id" },
        onDelete: "CASCADE",
      },
      turma_id: {
        type: Sequelize.INTEGER,
        references: { model: "turmas", key: "id" },
        onDelete: "CASCADE",
      },
      ano_letivo_id: {
        type: Sequelize.INTEGER,
        references: { model: "Ciclo_letivos", key: "id" },
        onDelete: "CASCADE",
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        references: { model: "disciplinas", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ofertas");
  },
};
