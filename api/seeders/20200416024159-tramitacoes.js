'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tramitacoes', [
      { nome: 'Tramitação 1' },
      { nome: 'Tramitação 2' },
      { nome: 'Tramitação 3' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tramitacoes', null, {})
  }
};
