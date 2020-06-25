'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('arquivos_tramitacao', [
      { 
        data: Sequelize.literal('CURRENT_TIMESTAMP'),
        documento: 'documento 01',
        arquivo_url: 'arquivo-01.pdf',
        evento: 'EVENTO 01',
        id_projetos: 1,
        id_tramitacao: 1,
        id_fonte: 1,
        id_grupo: 1
      },
      { 
        data: Sequelize.literal('CURRENT_TIMESTAMP'),
        documento: 'documento 02',
        arquivo_url: 'arquivo-02.pdf',
        evento: 'EVENTO 02',
        id_projetos: 2,
        id_tramitacao: 2,
        id_fonte: 2,
        id_grupo: 2
      },
      { 
        data: Sequelize.literal('CURRENT_TIMESTAMP'),
        documento: 'documento 03',
        arquivo_url: 'arquivo-03.pdf',
        evento: 'EVENTO 03',
        id_projetos: 3,
        id_tramitacao: 3,
        id_fonte: 3,
        id_grupo: 3
      }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('arquivos_tramitacao', null, {})
  }
};
