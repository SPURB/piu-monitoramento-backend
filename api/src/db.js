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
db.projetos = require("./models/projetos.model.js")(sequelize, Sequelize, db)
db.registros_administrativos = require("./models/registros_administrativos.model.js")(sequelize, Sequelize, db.projetos)
db.data_categorias = require("./models/data_categorias.model.js")(sequelize, Sequelize, db.categorias)
db.arquivos_tramitacoes = require("./models/arquivos_tramitacoes.model.js")(sequelize, Sequelize, db)

// a fazer: incluir joins -> https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/

module.exports = db
