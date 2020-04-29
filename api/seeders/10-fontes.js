'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('fontes', [
      { nome: 'Gestão Urbana' },
      { nome: 'PA' },
      { nome: 'Diário Oficial' },
      { nome: 'Rede SEP' },
      { nome: 'Patricia Saran' },
      { nome: 'CMPU' },
      { nome: 'PA/Marcelo Ignatios' },
      { nome: 'CTLU' },
      { nome: 'CMSP' },
      { nome: 'SEI' },
      { nome: 'Rede PIU' },
      { nome: 'Site SPURB' },
      { nome: 'Ministério Público' },
      { nome: 'Email SEHAB' },
      { nome: 'Marcelo Ignatios' },
      { nome: 'Site PMSP' },
      { nome: 'Site SMDP' },
      { nome: 'DOC' },
      { nome: 'Email SMUL' },
      { nome: 'DDE/SPURB' },
      { nome: 'Imprensa oficial' },
      { nome: 'SIMPROC' },
      { nome: 'SMDP' },
      { nome: 'TJSP' },
      { nome: 'PMSP' },
      { nome: 'Site SMDU' },
      { nome: 'Site CMSP' },
      { nome: 'DOM' }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('fontes', null, {})
  }
};
