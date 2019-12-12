const fs = require('fs')
const XLSX = require('xlsx')

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

createJsFromExcel('input/monitoramento.xlsx','COMUNICACAO', 'output/monitoramento')
createJsFromExcel('input/hiperlinks.xlsx','hiperlinks', 'output/hiperlinks')