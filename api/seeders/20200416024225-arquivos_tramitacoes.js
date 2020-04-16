'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('arquivos_tramitacoes', [
      { nome: 'Arquivo tramitação 1', id_grupos: 1, id_projetos: 1 },
      { nome: 'Arquivo tramitação 2', id_grupos: 2, id_projetos: 2 },
      { nome: 'Arquivo tramitação 3', id_grupos: 3, id_projetos: 3 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('arquivos_tramitacoes', null, {})
  }
};
