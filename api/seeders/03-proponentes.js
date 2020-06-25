'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('proponentes', [
      { nome: 'PMSP - SMUL' },
      { nome: 'PMSP - SMDU' },
      { nome: 'PMSP - SMDP/SPP' },
      { nome: 'PMSP - SMDP/SPP e SMT' },
      { nome: 'SPE Horizonte Branco' },
      { nome: 'Votorantim, Urbem, SDI, BVEP S.A.' },
      { nome: 'VS Bandeirante Empreendimentos Imobiliarios LTDAVS Banguera Empreendimentos Imobiliarios LTDAPADESP/NESPCarlos Leite I Stuchi & Leite Projetos (Coordenação)' },
      { nome: 'Governo do Estado de São Paulo' }
    ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('proponentes', null, {})
  }
};
