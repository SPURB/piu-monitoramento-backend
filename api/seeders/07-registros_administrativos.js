'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('registros_administrativos', [
      { nome: 'Registro administrativo 1', id_projetos: 1 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registros_administrativos', null, {})
  }
};
