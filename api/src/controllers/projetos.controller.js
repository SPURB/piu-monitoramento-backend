import { projetos } from '../db'
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

exports.findAll = (req, res) => dao.findAll(res, 'Lista de projetos', projetos)
exports.findOne = (req, res) => dao.findOne(req, res, projetos)
exports.update = (req, res) => dao.update(req, res, projetos)
exports.delete = (req, res) => dao.delete(req, res, projetos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, projetos)
