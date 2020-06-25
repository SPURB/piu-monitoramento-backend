module.exports = (sequelize, Sequelize, db) => {
  const DataTramitacao = sequelize.define("data_tramitacao", {
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    registroSeiPrimeiro: {
      type: Sequelize.DATEONLY
    },
    registroSeiUltimo: {
      type: Sequelize.DATEONLY
    },
    id_tramitacao: {
      type: Sequelize.INTEGER,
      references: {
        model: db.tramitacao,
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

  return DataTramitacao
}