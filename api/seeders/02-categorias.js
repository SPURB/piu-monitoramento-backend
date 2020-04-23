'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categorias', [
      { nome: 'Em Proposição dos Elementos Prévios', id_tramitacoes: 1 },
      { nome: 'Consulta Pública Inicial', id_tramitacoes: 1},
      { nome: 'Avaliação SMUL', id_tramitacoes: 1},
      { nome: 'Elaboração', id_tramitacoes: 2 },
      { nome: 'Discussão Pública', id_tramitacoes: 2 },
      { nome: 'Consolidação', id_tramitacoes: 2 },
      { nome: 'Encaminhamento Jurídico', id_tramitacoes: 2 },
      { nome: 'Implantação', id_tramitacoes: 3 }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categorias', null, {})
  }
};
