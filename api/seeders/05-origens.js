'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('origens', [
      { nome: 'Origem 1' },
      { nome: 'Origem 2' },
      { nome: 'Origem 3' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('origens', null, {})
  }
};
