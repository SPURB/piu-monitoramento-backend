module.exports = (sequelize, Sequelize) => {
  const GrupoArquivos = sequelize.define("grupo_arquivos", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
	})

  return GrupoArquivos
} 