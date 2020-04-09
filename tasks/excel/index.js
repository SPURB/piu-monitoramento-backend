import builders from './builders'

const comunicacao = builders.convert('input/monitoramento.xlsx','COMUNICACAO')
const links = builders.convert('input/hiperlinks.xlsx','hiperlinks')

builders.create('output/monitoramento.json', comunicacao)
builders.create('output/hiperlinks.json', links)
