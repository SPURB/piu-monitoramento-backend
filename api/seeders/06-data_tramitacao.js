'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('data_tramitacao', [
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-17', id_projetos: 1, id_tramitacao: 1 },
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-18', id_projetos: 2, id_tramitacao: 2 },
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-18', id_projetos: 2, id_tramitacao: 1 },
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('data_tramitacao', null, {})
  }
};
