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
    consultaAberta: {
      type: Sequelize.BOOLEAN,
      default: 0
    },
    elementoMEM: {
      type: Sequelize.STRING,
      allowNull: false
    },
    areaTotal: {
      type: Sequelize.FLOAT,
      allowNull: false
    },
    ultimaAtualizacao: {
      type: Sequelize.DATE,
      allowNull: false
    },
    proponentePrivado: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    kml: {
      type: Sequelize.STRING,
      allowNull: false
    },
    shape: {
      type: Sequelize.STRING,
      allowNull: false
    },
    id_proponentes: {
      type: Sequelize.INTEGER,
      references: {
        model: db.proponentes,
        key: 'id'
      }
    },
    id_tramitacao: {
      type: Sequelize.INTEGER,
      references: {
        model: db.tramitacao,
        key: 'id'
      }
    }    
  })

  return Projetos
}