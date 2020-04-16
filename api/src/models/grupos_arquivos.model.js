module.exports = (sequelize, Sequelize, categorias) => {
  const GruposArquivos = sequelize.define("grupos_arquivos", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_categorias: {
      type: Sequelize.INTEGER,
      references: {
        model: categorias,
        key: 'id'
      }
    }
	})

  return GruposArquivos
}