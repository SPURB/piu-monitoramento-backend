'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('grupos_arquivos', [
      { nome: 'Grupo 1', id_categorias: 1 },
      { nome: 'Grupo 2', id_categorias: 2 },
      { nome: 'Grupo 3', id_categorias: 3 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('grupos_arquivos', null, {})
  }
};
