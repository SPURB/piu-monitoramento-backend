import { tramitacoes } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da tramitação na requisição'
    })
    return
  }

  dao.create(res, tramitacoes, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de tramitações', tramitacoes)
exports.findOne = (req, res) => dao.findOne(req, res, tramitacoes)
exports.update = (req, res) => dao.update(req, res, tramitacoes)
exports.delete = (req, res) => dao.delete(req, res, tramitacoes)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, tramitacoes)
