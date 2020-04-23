'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('registros_administrativos', [
      { nome: 'Registro administrativo 1', arquivo_url: 'registro1.pdf', id_projetos: 1 },
      { nome: 'Registro administrativo 2', arquivo_url: 'registro2.pdf', id_projetos: 2 },
      { nome: 'Registro administrativo 3', arquivo_url: 'registro3.pdf', id_projetos: 2 },
      { nome: 'Registro administrativo 4', arquivo_url: 'registro4.pdf', id_projetos: 3 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('registros_administrativos', null, {})
  }
};
