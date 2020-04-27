module.exports = (sequelize, Sequelize, db) => {
  const Projetos = sequelize.define("projetos", {
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false
    },
    statusConsulta: {
      type: Sequelize.BOOLEAN,
      default: 0
    },
    elemento: {
      type: Sequelize.STRING,
      allowNull: false
    },
    areaTotal: {
      type: Sequelize.INTEGER
    },
    ultimaAtualizacao: {
      type: Sequelize.DATEONLY
    },
    geometry: {
      type: Sequelize.GEOMETRY
    },
    id_origens: {
      type: Sequelize.INTEGER,
      references: {
        model: db.origens,
        key: 'id'
      }
    },
    id_propostas: {
      type: Sequelize.INTEGER,
      references: {
        model: db.propostas,
        key: 'id'
      }
    },
    id_categorias: {
      type: Sequelize.INTEGER,
      references: {
        model: db.categorias,
        key: 'id'
      }
    },
    id_proponentes: {
      type: Sequelize.INTEGER,
      references: {
        model: db.proponentes,
        key: 'id'
      }
    }
  })

  return Projetos
}