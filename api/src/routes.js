import Router from 'express'
import * as fontes from "./controllers/fontes.controller"
import * as arquivos_tramitacao from "./controllers/arquivos_tramitacao.controller"
import * as data_tramitacao from "./controllers/data_tramitacao.controller"
import * as origens from "./controllers/origens.controller"
import * as projetos from "./controllers/projetos.controller"
import * as proponentes from "./controllers/proponentes.controller"
import * as grupos from "./controllers/grupos.controller"
import * as tramitacao from "./controllers/tramitacao.controller"


module.exports = (app) => {
	const routes = [
    {
			path: 'origens',
			controller: origens
    },
    {
			path: 'grupos',
			controller: grupos
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
			path: 'tramitacao',
			controller: tramitacao
    },    
    {
			path: 'data_tramitacao',
			controller: data_tramitacao
    },
    {
      path: 'fontes',
      controller: fontes
    },
    {
      path: 'arquivos_tramitacao',
      controller: arquivos_tramitacao
    }
	]
   
  // rotas padrão
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

  /* const customRoute = new Router()
  
  customRoute.get('/sumario', projetos.projectForTramit)
  app.use('/', customRoute) */
}