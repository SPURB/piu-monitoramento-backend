import Router from 'express'
import * as arquivos_tramitacoes from "./controllers/arquivos_tramitacoes.controller"
import * as categorias from "./controllers/categorias.controller"
import * as grupos_arquivos from "./controllers/grupos_arquivos.controller"
import * as projetos from "./controllers/projetos.controller"
import * as proponentes from "./controllers/proponentes.controller"
import * as propostas from "./controllers/propostas.controller"
import * as registros_administrativos from "./controllers/registros_administrativos.controller"
import * as tramitacoes from "./controllers/tramitacoes.controller"

module.exports = (app) => {
	const routes = [
		{
			path: 'arquivos_tramitacoes',
			controller: arquivos_tramitacoes
		},
		{
			path: 'categorias',
			controller: categorias
		},
		{
			path: 'grupos_arquivos',
			controller: grupos_arquivos
		},
		{
			path: 'projetos',
			controller: projetos
		},
		{
			path: 'proponentes',
			controller: proponentes
		},
		{
			path: 'propostas',
			controller: propostas
		},
		{
			path: 'registros_administrativos',
			controller: registros_administrativos
		},
		{
			path: 'tramitacoes',
			controller: tramitacoes
		}
	]

	routes.forEach(route => {
		const controller = route.controller
		const router = new Router()

		router.post('/', controller.create)
		router.get('/', controller.findAll)
		router.get('/:id', controller.findOne)
		router.put('/:id', controller.update)
		router.delete('/:id', controller.delete)
		app.use(`/${route.path}`, router)
	})
}
