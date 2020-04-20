module.exports = (sequelize, Sequelize, db) => {
  const ArquivosTramitacoes = sequelize.define("arquivos_tramitacoes", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    arquivo_url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_data_categorias: {
      type: Sequelize.INTEGER,
      references: {
        model: db.data_categorias,
        key: 'id'
      }
    },
    id_projetos: {
      type: Sequelize.INTEGER,
      references: {
        model: db.projetos,
        key: 'id'
      }
    }
	})

  return ArquivosTramitacoes
}