module.exports = (sequelize, Sequelize) => {
  const Origens = sequelize.define("origens", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Origens
}