import puppeteer from 'puppeteer'
import cheerio from 'cheerio'

export default async (url) => {
	const browser = await puppeteer.launch({ headless: true })
	const page = await browser.newPage()
	await page.goto(url)
	await page.waitFor(1000)

	const content = await page.content()
	const $ = cheerio.load(content)

	const tableGen = selector => {
		return $(selector) //'table#tblCabecalho tr'
			.get()
			.map(row => {
				return $(row)
					.find('td')
					.get()
					.map(cell => {
						const cellContent = $(cell).html()
						return cellContent
							.replace(new RegExp('<[^>]*>', 'g'), '') //remove html tags
							.trim()
					})
			})
			.filter(row => row.length)
	}

	await browser.close()
	return {
		ficha: (() => {
			let output = {}

			tableGen('table#tblCabecalho tr.infraTrClara')
				.forEach(row => {
					const key = row[0].replace(':', '')
					output[key] = row[1]
				})

			return output
			}
		)(),
		documentos: (() => tableGen('table#tblDocumentos tr.infraTrClara')
			.map(tableRow => {
				const row = tableRow.filter(td => td !== '')
				let output = {}

				output['processo'] = row[0]
				output['tipo'] = row[1]
				output['data'] = row[2]
				output['registro'] = row[3]
				output['unidade'] = row[4]

				return output
			})
		)(),
		historico: (() => tableGen('table#tblHistorico tr')
				.map(row => {
					let output = {}
					output['data'] = row[0]
					output['unidade'] = row[1]
					output['descricao'] = row[2]
					return output
				})
		)()
	}
}
