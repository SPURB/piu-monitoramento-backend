import builders from './builders'

const tables = [
	'origens',
	'proponentes',
	'grupos',
	'tramitacao',
	'data_tramitacao',
	'projetos',
	'arquivos_tramitacao'
]

tables.forEach(table => {
	const data = builders.convert('input/piu-monitoramento.xlsx', table)
	builders.create(`output/v1/${table}.json`, data)
})