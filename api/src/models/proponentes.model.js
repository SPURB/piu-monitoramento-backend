module.exports = (sequelize, Sequelize) => {
  const Proponentes = sequelize.define("proponentes", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  return Proponentes
}