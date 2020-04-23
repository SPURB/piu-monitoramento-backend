'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('origens', [
      { nome: 'MEM - Setor Central' },
      { nome: 'MEM - proximidade CEAGESP' },
      { nome: 'MEM - Área de influência OUCFL' },
      { nome: 'PDE - Artigo 76' },
      { nome: 'PDE - Artigo 382' },
      { nome: 'PDE Art. 375, parágrafo único e Lei 16.833/18' },
      { nome: 'Programa de Desestatização' },
      { nome: 'Lei 16.211/2015 e 16.703/2017 (Concessão terminais)' },
      { nome: 'ZOE - Novo entreposto SP' },
      { nome: 'ZOE' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('origens', null, {})
  }
};
