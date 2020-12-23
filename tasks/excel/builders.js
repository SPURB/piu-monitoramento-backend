import { utils, readFile, SSF } from 'xlsx'
import fs from 'fs-extra'
import path from 'path'
import moment from 'moment'

const self = module.exports = {
	read: (inputExcel, tableName, method = 'sheet_to_json') => {
		const worksheet = readFile(inputExcel).Sheets[tableName]
		return utils[method](worksheet,{ raw: true })
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
					const now = SSF.parse_date_code(excelRow[key])
					const parsed = moment({ year: now.y, month: now.m - 1, day: now.d })
					const formated = parsed.format('DD/MM/YYYY')
					mappedRow[key] = parsed.isValid() ? formated : noContentDefaults['datetime']
				}
				else if (excelRow[key] && type === 'boolean') mappedRow[key] = true
				else mappedRow[key] = excelRow[key]
			})
			return mappedRow
		})
		return mapped
	},
	convertArquivo: (filePath, { table }) => {
		const excelRows = self.read(filePath, table, 'sheet_to_json')
		const noContentDefaults = {
			'int': 0,
			'float': 0,
			'boolean': false,
			'string': '',
			'datetime': ''
		}
		return excelRows.map(excelRow => {
			let conteudo = {}
			if (excelRow.rev_proj) {
				conteudo = {
					id: excelRow.id,
					id_projetos: excelRow.id_projetos,
					id_tramitacao: excelRow.id_tramitacao,
					id_grupo: excelRow.id_grupo,
					id_fonte: excelRow.id_fonte,
					documento: excelRow.documento_novo + excelRow.documento_complemento,
					arquivo_url: excelRow.arquivo_url,
					evento: excelRow.evento
				}
			} else {
				conteudo = {
					id: excelRow.id,
					id_projetos: excelRow.id_projetos,
					id_tramitacao: excelRow.id_tramitacao,
					id_grupo: excelRow.id_grupo,
					id_fonte: excelRow.id_fonte,
					documento: excelRow.documento,
					arquivo_url: excelRow.arquivo_url,
					evento: excelRow.evento_ref
				}
			}
			return conteudo
		})
	}
}