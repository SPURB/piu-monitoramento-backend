'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('propostas', [
      { nome: 'Pública' },
      { nome: 'Privada' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('propostas', null, {})
  }
};
