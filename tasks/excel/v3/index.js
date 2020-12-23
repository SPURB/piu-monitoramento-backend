import { convertModel, convertArquivo, create } from '../builders'
import models from './models'

models.forEach((model) => {
  let data = undefined
  if (model.table === 'arquivos_tramitacao') {
    data = convertArquivo('input/piu-monitoramento_v3.xlsx', model)
  }
  data = convertModel('input/piu-monitoramento_v3.xlsx', model)
  create(`output/v3/${model.table}.json`, data)
})
