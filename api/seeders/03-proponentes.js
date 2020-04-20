'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('proponentes', [
      { nome: 'Proponente 1' },
      { nome: 'Proponente 2' },
      { nome: 'Proponente 3' }
    ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('proponentes', null, {})
  }
};
