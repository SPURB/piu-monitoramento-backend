import XLSX from 'xlsx'
import fs from 'fs-extra'
import path from 'path'

export default {
	convert: (inputExcel, tableName) => {
		const worksheet = XLSX.readFile(inputExcel).Sheets[tableName]
		const rows = XLSX.utils.sheet_to_json(worksheet,{ raw: true }) //toda planilha
		let outputJson = []

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
		return outputJson
	},
	create: (file, json)  => {
		const currentPath = path.resolve(__dirname, '../../')
		fs.writeFileSync(`${currentPath}/${file}`, JSON.stringify(json))

		console.log(`${currentPath}/${file}` + ' atualizado')
	}
}