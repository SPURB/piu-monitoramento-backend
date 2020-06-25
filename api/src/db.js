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

db.tramitacao = require("./models/tramitacao.model.js")(sequelize, Sequelize)
db.proponentes = require("./models/proponentes.model.js")(sequelize, Sequelize)
db.origens = require("./models/origens.model.js")(sequelize, Sequelize)
db.grupos = require("./models/grupos.model.js")(sequelize, Sequelize)
db.projetos = require("./models/projetos.model.js")(sequelize, Sequelize, db)
db.data_tramitacao = require("./models/data_tramitacao.model.js")(sequelize, Sequelize, db)
db.fontes = require("./models/fontes.model.js")(sequelize, Sequelize)
db.arquivos_tramitacao = require("./models/arquivos_tramitacao.model.js")(sequelize, Sequelize, db)

// relacionamentos tabela `projetos`
db.projetos.belongsTo(db.origens, { foreignKey: 'id_origens' })
db.projetos.belongsTo(db.proponentes, { foreignKey: 'id_proponentes' })

// relacionamentos tabela `arquivos_tramitacoes`
db.arquivos_tramitacao.belongsTo(db.tramitacao, { foreignKey: 'id_tramitacao' })
db.arquivos_tramitacao.belongsTo(db.grupos, { foreignKey: 'id_grupo' })
db.arquivos_tramitacao.belongsTo(db.fontes, { foreignKey: 'id_fonte' })
db.arquivos_tramitacao.belongsTo(db.projetos, { foreignKey: 'id_projetos' })

// relacionamentos tabela `data_tramitacao`
db.data_tramitacao.belongsTo(db.tramitacao, { foreignKey: 'id_tramitacao' })
db.data_tramitacao.belongsTo(db.projetos, { foreignKey: 'id_projetos' })


module.exports = db
