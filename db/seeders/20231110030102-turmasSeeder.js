"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Turmas", [
      {
        nome: "1º INFO",
        curso_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "2º INFO",
        curso_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "3º INFO",
        curso_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nome: "1º AGRO",
        curso_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "2º AGRO",
        curso_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "3º AGRO",
        curso_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nome: "1º ADM",
        curso_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "2º ADM",
        curso_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "3º ADM",
        curso_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        nome: "1º VITIENO",
        curso_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "2º VITIENO",
        curso_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "3º VITIENO",
        curso_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Turmas", null, {});
  },
};
