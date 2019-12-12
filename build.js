(function() {
	const path = require('path')
	const fs = require('fs-extra')
	const XLSX = require('xlsx')
	const now = new Date()
	const current = path.resolve(__dirname)
	const package = fs.readFileSync(`${current}/package.json`, 'utf8')

	function createJsFromExcel(inputExcel, tableName, outputJS){
		const worksheet = XLSX.readFile(inputExcel).Sheets[tableName]
		const rows = XLSX.utils.sheet_to_json(worksheet,{raw:true}) //toda planilha
		outputJson = []

		rows.forEach(function(rowLine){ // para cada linha
			const collection = Object.entries(rowLine); 
			let output = {}

			collection.forEach(function(index) {
				if(index[1] != ''){ //se não tiver dados não inclui no json final
					output[index[0]] = index[1]
				}
			})
			outputJson.push(output)
		})

		const json = JSON.stringify(outputJson)

		const filePath = outputJS +'.json'
		fs.writeFile( filePath, json, 'utf8', function (err){
			if(err){
				console.log(err)
			}
		});
		console.log(filePath + ' atualizado')
	}

	function createIndex(date, baseUrl, packageContent, runLocation) {
		const package = JSON.parse(packageContent)
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
				}
			]
		}
		info.description = package.description
		info.author = package.author
		info.bugs = package.bugs
		info.repository = package.repository
		info.keywords = package.keywords

		fs.writeFileSync(`${runLocation}/output/index.json`,JSON.stringify(info))
	}

	createIndex(now, 'https://spurb.github.io/piu-monitoramento-backend/', package, current)
	createJsFromExcel('input/monitoramento.xlsx','COMUNICACAO', 'output/monitoramento')
	createJsFromExcel('input/hiperlinks.xlsx','hiperlinks', 'output/hiperlinks')
})()