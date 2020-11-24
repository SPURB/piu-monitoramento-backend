import puppeteer from 'puppeteer'
import path from 'path'
import {
  // writeJsonSync,
  // ensureFile,
  writeFileSync
} from 'fs-extra'

// import models from './models'
import {
  // convertModel,
  read
} from '../builders'

console.log('------------------ debugging ---------------------------')
// const datas = convertModel('input/piu-monitoramento_v3.xlsx', models[4])
// console.log('')
// console.log('')
// console.log('------------------ nações unidas ---------------------')
// console.log(datas.filter(data=>data.id_projetos === 10 && data.id_tramitacao === 3))

/*
  checa links da tabela 'arquivos_tramitação'
  criará arquivos de imagem com screenshots das urls em output/v3/checagem
*/
async function checkLinks (files) {
	const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  const outputPath = file => `${path.resolve(__dirname, '../../../')}/output/v3/checagem/${file}`

  for (const { id, url } of files) {
    const filename = `${id}`
    try {
      await page.goto(url, { timeout: 30000, waitUntil: 'networkidle0' })
      await page.screenshot({ path: `${outputPath(filename)}.png` })
    }
    catch ({ message }) {
      writeFileSync( `${outputPath(filename)}--erro--.txt`, message)
    }
  }

  await browser.close()
}

const files = read('input/piu-monitoramento_v3.xlsx', 'arquivos_tramitacao', 'sheet_to_json')
const mappedFiles = files.map(({ id, arquivo_url }) => {
  return {
    id,
    url: arquivo_url
  }
})

checkLinks(mappedFiles)