'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('grupo_arquivos', [
      { nome: 'Consulta Instâncias' },
      { nome: 'Consulta Caderno' },
      { nome: 'Consulta Minuta' },
      { nome: 'Audiência Pública' },
      { nome: 'Reuniões Bilateriais' },
      { nome: 'Outros' },
      { nome: 'Projeto Final' },
      { nome: 'Processo Administrativo' },
      { nome: 'Arquivos' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('grupo_arquivos', null, {})
  }
};
