'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias', [
      { nome: 'Categoria 1', id_tramitacoes: 1 },
      { nome: 'Categoria 2', id_tramitacoes: 2 },
      { nome: 'Categoria 3', id_tramitacoes: 3 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias', null, {})
  }
};
