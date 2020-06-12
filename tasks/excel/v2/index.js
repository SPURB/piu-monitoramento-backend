import { convertModel, create } from '../builders'
import models from './models'

models.forEach((model) => {
  const data = convertModel('input/piu-monitoramento_v2.xlsx', model)
  create(`output/v2/${model.table}.json`, data)
})
