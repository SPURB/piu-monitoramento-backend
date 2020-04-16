module.exports = (sequelize, Sequelize, tramitacoes) => {
  const Categorias = sequelize.define("categorias", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.TEXT
    },
    registroSeiPrimeiro: {
      type: Sequelize.DATEONLY
    },
    registroSeiUltimo: {
      type: Sequelize.DATEONLY
    },
    id_categorias: {
      type: Sequelize.INTEGER,
      references: {
        model: tramitacoes,
        key: 'id'
      }
    }
	})

  return Categorias
}