module.exports = (sequelize, Sequelize, categorias) => {
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
        model: categorias,
        key: 'id'
      }
    }
	})

  return DataCategorias
}