module.exports = (sequelize, Sequelize, projetos) => {
  const RegistrosAdminitrativos = sequelize.define("registros_administrativos", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    arquivo_url: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_projetos: {
      type: Sequelize.INTEGER,
      references: {
        model: projetos,
        key: 'id'
      }
    }
	})

  return RegistrosAdminitrativos
}