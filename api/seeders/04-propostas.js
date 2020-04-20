'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('propostas', [
      { nome: 'Proposta 1' },
      { nome: 'Proposta 2' },
      { nome: 'Proposta 3' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('propostas', null, {})
  }
};
