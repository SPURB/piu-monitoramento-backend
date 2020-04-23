import Router from 'express'
import * as arquivos_tramitacoes from "./controllers/arquivos_tramitacoes.controller"
import * as categorias from "./controllers/categorias.controller"
import * as data_categorias from "./controllers/data_categorias.controller"
import * as origens from "./controllers/origens.controller"
import * as projetos from "./controllers/projetos.controller"
import * as proponentes from "./controllers/proponentes.controller"
import * as propostas from "./controllers/propostas.controller"
import * as grupo_arquivos from "./controllers/grupo_arquivos.controller"
import * as registros_administrativos from "./controllers/registros_administrativos.controller"
import * as tramitacoes from "./controllers/tramitacoes.controller"

module.exports = (app) => {
	const routes = [
		{
			path: 'categorias',
			controller: categorias
    },
    {
			path: 'origens',
			controller: origens
    },
    {
			path: 'grupo_arquivos',
			controller: grupo_arquivos
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
    },    
    {
			path: 'data_categorias',
			controller: data_categorias
    },
    {
      path: 'arquivos_tramitacoes',
      controller: arquivos_tramitacoes
    }
	]

  const router = new Router()

  // rotas padrão
	routes.forEach(route => {
		const controller = route.controller

		router.post('/', controller.create)
		router.get('/', controller.findAll)
		router.get('/:id', controller.findOne)
		router.put('/:id', controller.update)
		router.delete('/:id', controller.delete)
		app.use(`/${route.path}`, router)
  })
  
  // rotas personalizadas
  router.get('/construtor/:id', projetos.findProject)
  app.use('/projetos', router)
}
