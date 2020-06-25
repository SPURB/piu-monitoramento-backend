module.exports = (sequelize, Sequelize) => {
  const Grupos = sequelize.define("grupos", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
	})

  return Grupos
} 