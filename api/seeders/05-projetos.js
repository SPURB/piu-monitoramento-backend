'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('projetos', [
      { 
        nome: 'Projeto 01',
        descricao: 'Projeto de teste 01',
        consultaAberta: 1,
        elementoMEM: '',
        areaTotal: 2222.5,
        ultimaAtualizacao: '2020-06-24',
        proponentePrivado: false,
        status: 'ABERTO 01',
        kml: 'KMLTESTE 01',
        shape: 'SHAPETESTE 01',
        id_proponentes: 1,
        id_tramitacao: 1  
      },
      { 
        nome: 'Projeto 02',
        descricao: 'Projeto de teste 02',
        consultaAberta: 1,
        elementoMEM: '',
        areaTotal: 2222.5,
        ultimaAtualizacao: '2020-06-24',
        proponentePrivado: false,
        status: 'ABERTO 02',
        kml: 'KMLTESTE',
        shape: 'SHAPETESTE',
        id_proponentes: 1,
        id_tramitacao: 1  
      },
      { 
        nome: 'Projeto 03',
        descricao: 'Projeto de teste 03',
        consultaAberta: 1,
        elementoMEM: '',
        areaTotal: 2222.5,
        ultimaAtualizacao: '2020-06-24',
        proponentePrivado: false,
        status: 'ABERTO 03',
        kml: 'KMLTESTE 03',
        shape: 'SHAPETESTE 03',
        id_proponentes: 2,
        id_tramitacao: 2
      }
    ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('projetos', null, {})
  }
};
