'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projetos', [
      { 
        nome: 'Projeto 1',
        descricao: 'Descrição projeto 1',
        elemento: 'Elemento projeto 1',
        areaTotal: 10,
        geometry: Sequelize.fn('ST_GeomFromText', 'POINT(52.000001 16.000001)'),
        id_origens: 1,
        id_propostas: 1,
        id_tramitacoes: 1,
        id_proponentes: 1
      },
      { 
        nome: 'Projeto 2',
        descricao: 'Descrição projeto 2',
        elemento: 'Elemento projeto 2',
        areaTotal: 20,
        geometry: Sequelize.fn('ST_GeomFromText', 'POINT(52.000002 16.000002)'),
        id_origens: 2,
        id_propostas: 1,
        id_tramitacoes: 1,
        id_proponentes: 1
      },
      { 
        nome: 'Projeto 3',
        descricao: 'Descrição projeto 3',
        elemento: 'Elemento projeto 3',
        areaTotal: 30,
        geometry: Sequelize.fn('ST_GeomFromText', 'POINT(52.000003 16.000003)'),
        id_origens: 3,
        id_propostas: 3,
        id_tramitacoes: 3,
        id_proponentes: 3
      }
    ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projetos', null, {})
  }
};
