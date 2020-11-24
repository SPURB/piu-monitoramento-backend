import { convertModel, create } from '../builders'
import models from './models'

models.forEach((model) => {
  const data = convertModel('input/piu-monitoramento_v3.xlsx', model)
  create(`output/v3/${model.table}.json`, data)
})
