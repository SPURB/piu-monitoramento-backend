import XLSX from 'xlsx'
import fs from 'fs-extra'
import path from 'path'
import moment from 'moment'

const { utils, readFile } = XLSX

const self = module.exports = {
	read: (inputExcel, tableName, method = 'sheet_to_json') => {
		const worksheet = readFile(inputExcel).Sheets[tableName]
		return XLSX.utils[method](worksheet,{ raw: true })
	},
	convert: (inputExcel, tableName) => {
		const rows = self.read(inputExcel, tableName)
		let outputJson = []

		rows.forEach(rowLine => { // para cada linha
			const collection = Object.entries(rowLine); 
			let output = {}

			collection.forEach(index => {
				if(index[1] != ''){ //se não tiver dados não inclui no json final
					output[index[0]] = index[1]
				}
			})
			outputJson.push(output)
		})
		return outputJson
	},
	create: async (file, json) => {
		const currentPath = path.resolve(__dirname, '../../')
		const completePath = `${currentPath}/${file}`

		await fs.ensureFile(completePath)
		fs.writeFileSync(completePath, JSON.stringify(json))
		console.log(completePath + ' atualizado')
	},
	convertModel: (filePath, { table, collumns }) => {

		const excelRows = self.read(filePath, table, 'sheet_to_json')

		const noContentDefaults = {
			'int': 0,
			'float': 0,
			'boolean': false,
			'string': '',
			'datetime': ''
		}

		const mapped = excelRows.map(excelRow => {
			let mappedRow = {}

			collumns.forEach(({ key, type }) => {

				if (!excelRow[key]) mappedRow[key] = noContentDefaults[type]
				else if (type === 'datetime') {
					const now = new Date(Math.round((excelRow[key] - (25567 + 1))*86400*1000))
					mappedRow[key] = moment(now).format('YYYY-MM-DD')
				}
				else mappedRow[key] = excelRow[key]
			})

			return mappedRow
		})
		return mapped
	}
}