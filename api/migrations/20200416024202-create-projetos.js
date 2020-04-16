'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projetos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      elemento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      areaTotal: {
        type: Sequelize.INTEGER
      },
      urb_x: {
        type: Sequelize.FLOAT
      },
      urb_y: {
        type: Sequelize.FLOAT
      },
      id_propostas: {
        type: Sequelize.INTEGER,
        references: {
          model: 'propostas',
          key: 'id'
        },
        allowNull: false
      },
      id_tramitacoes: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tramitacoes',
          key: 'id'
        },
        allowNull: false
      },
      id_proponentes: {
        type: Sequelize.INTEGER,
        references: {
          model: 'proponentes',
          key: 'id'
        },
        allowNull: false
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projetos');
  }
}
