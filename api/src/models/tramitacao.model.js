module.exports = (sequelize, Sequelize) => {
  const Tramitacao = sequelize.define("tramitacao", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Tramitacao
}