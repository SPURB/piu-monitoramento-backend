'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('arquivos', [
      { nome: 'Arquivo 1', id_categorias: 1 },
      { nome: 'Arquivo 2', id_categorias: 2 },
      { nome: 'Arquivo 3', id_categorias: 3 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('arquivos', null, {})
  }
};
