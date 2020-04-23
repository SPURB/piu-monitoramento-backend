import * as db from '../db'
import * as dao from './dao'

exports.create = (req, res) => {

  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da proposta na requisição'
    })
    return
  }

  const body = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    elemento: req.body.elemento,
  }

  dao.create(res, projetos, body)
}

exports.findProject = async (req, res) => {
const { id } = req.params

  try {
    const projeto = await db.projetos.findOne({
      where: { id },
      attributes: ['id', 'nome', 'descricao', 'elemento', 'areaTotal', 'ultimaAtualizacao', 'geometry'],
      include: [
        { model: db.origens },
        { model: db.propostas },
        { model: db.proponentes },
        { model: db.categorias }
      ]
    })

    const registrosAdmin = await db.registros_administrativos.findAll({
      where: { id_projetos: id}
    })

    const data_categoria = await db.data_categorias.findAll({
      where: { id_projetos: id }
    })

    const arquivos = await db.arquivos_tramitacoes.findAll({
      where: { id_projetos: id },
      group: ['id_categorias']
    })

    res.send(arquivos)
    
  } catch (err) {
    res.status(500).send({
      err,
      message: 'Erro'
    })
  }
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de projetos', projetos)
exports.findOne = (req, res) => dao.findOne(req, res, projetos)
exports.update = (req, res) => dao.update(req, res, projetos)
exports.delete = (req, res) => dao.delete(req, res, projetos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, projetos)
