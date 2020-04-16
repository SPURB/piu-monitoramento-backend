import Router from 'express'
import * as projetos from './controllers/projetos.controller.js'
import * as propostas from './controllers/propostas.controller.js'

module.exports = (app) => {
	const routes = [
		{
			path: 'projetos',
			controller: projetos
		},
		{
			path: 'propostas',
			controller: propostas
		},
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
