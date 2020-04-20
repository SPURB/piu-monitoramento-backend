module.exports = (sequelize, Sequelize, tramitacoes) => {
  const Categorias = sequelize.define("categorias", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_tramitacoes: {
      type: Sequelize.INTEGER,
      references: {
        model: 'tramitacoes',
        key: 'id'
      },
      allowNull: false
    }
	})

  return Categorias
}