"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Cursos", [
      {
        nome: "Técnico em Informática para Internet",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Técnico em Agropecuária",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Técnico em Administração",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Técnico em Viticultura e Enologia",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Cursos", null, {});
  },
};
