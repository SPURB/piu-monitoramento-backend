module.exports = (sequelize, Sequelize) => {
  const Tramitacoes = sequelize.define("tramitacoes", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Tramitacoes
}