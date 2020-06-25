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
      consultaAberta: {
        type: Sequelize.BOOLEAN,
        default: 0
      },
      elementoMEM: {
        type: Sequelize.STRING,
        allowNull: false
      },
      areaTotal: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      ultimaAtualizacao: {
        type: Sequelize.DATE,
        allowNull: false
      },
      proponentePrivado: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      kml: {
        type: Sequelize.STRING,
        allowNull: false
      },
      shape: {
        type: Sequelize.STRING,
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
      id_tramitacao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tramitacao',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('projetos');
  }
}
