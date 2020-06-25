module.exports = (sequelize, Sequelize, db) => {
  const ArquivosTramitacao = sequelize.define("arquivos_tramitacao", {
    data: {
      type: Sequelize.DATE,
      allowNull: false
    },
    documento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    arquivo_url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    evento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_projetos: {
      type: Sequelize.INTEGER,
      references: {
        model: db.projetos,
        key: 'id'
      }
    },
    id_tramitacao: {
      type: Sequelize.INTEGER,
      references: {
        model: db.tramitacao,
        key: 'id'
      }
    },
    id_fonte: {
      type: Sequelize.INTEGER,
      references: {
        model: db.fontes,
        key: 'id'
      }
    },
    id_grupo: {
      type: Sequelize.INTEGER,
      references: {
        model: db.grupos,
        key: 'id'
      }
    },
	})

  return ArquivosTramitacao
}