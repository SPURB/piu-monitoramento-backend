const dbConfig = require("./db.config.js")

const Sequelize = require("sequelize")
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.propostas = require("./models/propostas.model.js")(sequelize, Sequelize)
db.tramitacoes = require("./models/tramitacoes.model.js")(sequelize, Sequelize)
db.categorias = require("./models/categorias.model.js")(sequelize, Sequelize, db.tramitacoes)
db.proponentes = require("./models/proponentes.model.js")(sequelize, Sequelize)
db.origens = require("./models/origens.model.js")(sequelize, Sequelize)
db.grupo_arquivos = require("./models/grupo_arquivos.model.js")(sequelize, Sequelize)
db.projetos = require("./models/projetos.model.js")(sequelize, Sequelize, db)
db.registros_administrativos = require("./models/registros_administrativos.model.js")(sequelize, Sequelize, db.projetos)
db.data_categorias = require("./models/data_categorias.model.js")(sequelize, Sequelize, db)
db.fontes = require("./models/fontes.model.js")(sequelize, Sequelize)
db.arquivos_tramitacoes = require("./models/arquivos_tramitacoes.model.js")(sequelize, Sequelize, db)

// a fazer: incluir joins -> https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/

// relacionamentos tabela `projetos`
db.projetos.belongsTo(db.origens, { foreignKey: 'id_origens' })
db.projetos.belongsTo(db.propostas, { foreignKey: 'id_propostas' })
db.projetos.belongsTo(db.categorias, { foreignKey: 'id_categorias' })
db.projetos.belongsTo(db.proponentes, { foreignKey: 'id_proponentes' })

// relacionamentos tabela `registros_administrativos`
db.registros_administrativos.belongsTo(db.projetos, { foreignKey: 'id_projetos' })

// relacionamentos tabela `arquivos_tramitacoes`
db.arquivos_tramitacoes.belongsTo(db.categorias, { foreignKey: 'id_categorias' })
db.arquivos_tramitacoes.belongsTo(db.grupo_arquivos, { foreignKey: 'id_grupos' })
db.arquivos_tramitacoes.belongsTo(db.fontes, { foreignKey: 'id_fontes' })
db.arquivos_tramitacoes.belongsTo(db.projetos, { foreignKey: 'id_projetos' })

// relacionamentos tabela `data_categorias`
db.data_categorias.belongsTo(db.categorias, { foreignKey: 'id_categorias' })
db.data_categorias.belongsTo(db.projetos, { foreignKey: 'id_projetos' })

// relacionamentos tabela `categorias`
db.categorias.belongsTo(db.tramitacoes, { foreignKey: 'id_tramitacoes' })

module.exports = db
