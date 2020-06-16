import models from './models'
import { convertModel } from '../builders'
console.log('------------------ debug ---------------------------')
console.log(models[4].table)

const datas = convertModel('input/piu-monitoramento_v2.xlsx', models[4])

console.log('')
console.log('')
console.log('------------------ capelinha ---------------------')
console.log(datas.filter(data=>data.id_projetos === 18 && data.id_tramitacao === 1))

console.log('')
console.log('')
console.log('------------------ nações unidas ---------------------')
console.log(datas.filter(data=>data.id_projetos === 10 && data.id_tramitacao === 3))
