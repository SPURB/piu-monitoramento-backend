import builders from '../excel/builders'
import crawler from './crawler'
import projetos from './projetos'
import fs from 'fs-extra'
import path from 'path'
import events from 'events'

const links = builders.convert('input/hiperlinks.xlsx','hiperlinks')
const filteredLinkObjects = projetos(links)

events.EventEmitter.defaultMaxListeners = 100

filteredLinkObjects.forEach(linkObject => {
		const currentPath = path.resolve(__dirname, '../../')
		const folderPath = `${currentPath}/output/sei/${linkObject.nome}`

		if (!fs.existsSync(currentPath + '/output/sei/')){
			fs.mkdirSync(currentPath + '/output/sei/')
		}

		else if (!fs.existsSync(folderPath)){
			fs.mkdirSync(folderPath)
		}

		setTimeout(() => {
			linkObject.sei.forEach((url, index) => {
				crawler(url)
					.then(tables => {
						fs.writeFileSync(`${folderPath}/${index + 1}.json`, JSON.stringify(tables))
					})
					.catch(error => console.error(error))
			})
		}, 1000)

})
