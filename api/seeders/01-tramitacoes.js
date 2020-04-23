'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tramitacoes', [
      { nome: 'Em proposição' },
      { nome: 'Em andamento' },
      { nome: 'Implantação' },
      { nome: 'Suspenso'  },
      { nome: 'Arquivado' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tramitacoes', null, {})
  }
};
