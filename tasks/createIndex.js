import path from 'path'
import fs from 'fs-extra'
import modelv2 from './excel/v2/models'

const lastupdate = new Date()
const current = path.resolve(__dirname, '..')
const packageContent = JSON.parse(fs.readFileSync(`${current}/package.json`, 'utf8'))
const baseUrl = `https://spurb.github.io/piu-monitoramento-backend/`

const { description, author, bugs, repository, keywords, version } = packageContent

let endpoints = modelv2
  .map(model => {
    return {
      url: `${baseUrl}v2/${model.table}.json`,
      descricao: `Dados da tabela ${model.table}`
    }
  })

const info = {
  description,
  version,
  lastupdate,
  author,
  bugs,
  repository,
  keywords,
  endpoints
}

fs.writeFileSync(`${current}/output/index.json`,JSON.stringify(info))
