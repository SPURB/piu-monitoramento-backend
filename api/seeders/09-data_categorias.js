'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('data_categorias', [
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-17', id_projetos: 1, id_categorias: 1 },
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-18', id_projetos: 2, id_categorias: 2 },
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-18', id_projetos: 2, id_categorias: 1 },
      { status: 'Protocolado', registroSeiPrimeiro: '2020-04-19', id_projetos: 3, id_categorias: 1 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('data_categorias', null, {})
  }
};
