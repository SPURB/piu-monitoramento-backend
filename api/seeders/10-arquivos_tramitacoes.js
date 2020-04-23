'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('arquivos_tramitacoes', [
      { 
        nome: 'Arquivo tramitação 1', 
        arquivo_url: 'arquivo1.pdf', 
        id_grupos: 1, 
        id_categorias: 1, 
        id_projetos: 1
      },
      { 
        nome: 'Arquivo tramitação 2', 
        arquivo_url: 'arquivo2.pdf',
        id_grupos: 1, 
        id_categorias: 1, 
        id_projetos: 2 
      },
      { 
        nome: 'Arquivo tramitação 3', 
        arquivo_url: 'arquivo3.pdf',
        id_grupos: 1, 
        id_categorias: 2, 
        id_projetos: 2 
      },
      { 
        nome: 'Arquivo tramitação 4', 
        arquivo_url: 'arquivo4.pdf', 
        id_grupos: 2, 
        id_categorias: 2, 
        id_projetos: 2
      }
   ], {})
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('arquivos_tramitacoes', null, {})
  }
};
