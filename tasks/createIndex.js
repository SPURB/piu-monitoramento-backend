const path = require('path')
const fs = require('fs-extra')
const now = new Date()
const current = path.resolve(__dirname, '..')
const pkg = fs.readFileSync(`${current}/package.json`, 'utf8')

function createIndex(date, baseUrl, packageContent, runLocation) {
	const pkg = JSON.parse(packageContent)
	const info = {
		lastupdate: date,
		endpoints: [
			{
				url: `${baseUrl}monitoramento.json`,
				descricao: 'Dados referentes a cada projeto'
			},
			{
				url: `${baseUrl}hiperlinks.json`,
				descricao: 'Lista de todos os arquivos projetos'
			},
			{
				url: `${baseUrl}/sei/`,
				descricao: 'Processos administrativos'
			},
			{
				url: `${baseUrl}/v1/`,
				descricao: 'Dados de projetos (versão 0.1)'
			}
		]
	}
	info.description = pkg.description
	info.author = pkg.author
	info.bugs = pkg.bugs
	info.repository = pkg.repository
	info.keywords = pkg.keywords

	fs.writeFileSync(`${runLocation}/output/index.json`,JSON.stringify(info))
}

createIndex(now, 'https://spurb.github.io/piu-monitoramento-backend/', pkg, current)
