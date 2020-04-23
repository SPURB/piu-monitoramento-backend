module.exports = (sequelize, Sequelize, db) => {
  const DataCategorias = sequelize.define("data_categorias", {
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
    id_categorias: {
      type: Sequelize.INTEGER,
      references: {
        model: db.categorias,
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

  return DataCategorias
}