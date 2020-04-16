import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

dotenv.config()
const app = express()

const corsOptions = {
  origin: "http://localhost:5000"
}

app.use(cors(corsOptions))

const db = require("./db.js")

// dev only, use migrations -> npx sequelize-cli db:migrations
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require(`./routes.js`)(app)

app.get("/", (req, res) => {
  res.json({ message: "PIU Monitoramento" })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
