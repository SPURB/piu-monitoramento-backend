module.exports = (sequelize, Sequelize) => {
  const Fontes = sequelize.define("fontes", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
	})

  return Fontes
}