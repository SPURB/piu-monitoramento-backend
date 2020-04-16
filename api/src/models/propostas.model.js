module.exports = (sequelize, Sequelize) => {
  const Propostas = sequelize.define("propostas", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Propostas
}