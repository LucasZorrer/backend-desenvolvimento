'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('solicitacoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      hora: {
        type: Sequelize.DATE
      },
      justificativa: {
        type: Sequelize.STRING
      },
      anexo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      ciencia_substituto: {
        type: Sequelize.DATE
      },
      data_devolucao: {
        type: Sequelize.DATE
      },
      hora_devolucao: {
        type: Sequelize.DATE
      },
      autorizacao_chefia: {
        type: Sequelize.BOOLEAN
      },
      ciencia_chefia: {
        type: Sequelize.DATE
      },
      ciencia_coordenador: {
        type: Sequelize.DATE
      },
      docente_solicitante_id: {
        type: Sequelize.INTEGER,
        references: { model: "docentes", key: "id" },
        onDelete: "CASCADE",
      },
      docente_substituto_id: {
        type: Sequelize.INTEGER,
        references: { model: "docentes", key: "id" },
        onDelete: "CASCADE",
      },
      ciclo_letivo_id: {
        type: Sequelize.INTEGER,
        references: { model: "Ciclo_letivos", key: "id" },
        onDelete: "CASCADE",
      },
      disciplina_id: {
        type: Sequelize.INTEGER,
        references: { model: "disciplinas", key: "id" },
        onDelete: "CASCADE",
      },
      turma_id: {
        type: Sequelize.INTEGER,
        references: { model: "turmas", key: "id" },
        onDelete: "CASCADE",
      },
      disciplina_substituta_id: {
        type: Sequelize.INTEGER,
        references: { model: "disciplinas", key: "id" },
        onDelete: "CASCADE",
      },
      chefia_id: {
        type: Sequelize.INTEGER,
        references: { model: "chefia", key: "id" },
        onDelete: "CASCADE",
      },
      coordenador_id: {
        type: Sequelize.INTEGER,
        references: { model: "coordenadores", key: "id" },
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
    await queryInterface.dropTable('solicitacoes');
  }
};