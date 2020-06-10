import { convertModel, create } from '../builders'
import models from './models'

// console.log('------------------ debug ---------------------------')
// const datas = convertModel('input/piu-monitoramento_v2.xlsx', models[4])
// console.log('')
// console.log('------------------ nacoes-unidas -------------------')
// console.log(datas.filter(data=>data.id_projetos === 10 && data.id_tramitacao === 1))

// console.log('')
// console.log('')
// console.log('------------------ ibirapuera ---------------------')
// console.log(datas.filter(data=>data.id_projetos === 22 && data.id_tramitacao === 1))
models.forEach((model) => {
  const data = convertModel('input/piu-monitoramento_v2.xlsx', model)
  create(`output/v2/${model.table}.json`, data)
})
