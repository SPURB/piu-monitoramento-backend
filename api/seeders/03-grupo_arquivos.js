'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('grupo_arquivos', [
      { nome: 'Audiência Pública' },
      { nome: 'Consulta Caderno' },
      { nome: 'Consulta Instâncias' },
      { nome: 'Consulta Minuta' },
      { nome: 'Reuniões Bilateriais' },
      { nome: 'Projeto Final' },
      { nome: 'Outros' },
      { nome: 'Arquivos' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('grupo_arquivos', null, {})
  }
};
