'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('arquivos_tramitacao', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false
      },
      documento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      arquivo_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      evento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_projetos: {
        type: Sequelize.INTEGER,
        references: {
          model: 'projetos',
          key: 'id'
        }
      },
      id_tramitacao: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tramitacao',
          key: 'id'
        }
      },
      id_fonte: {
        type: Sequelize.INTEGER,
        references: {
          model: 'fontes',
          key: 'id'
        }
      },
      id_grupo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'grupos',
          key: 'id'
        }
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
    return queryInterface.dropTable('arquivos_tramitacao');
  }
}
