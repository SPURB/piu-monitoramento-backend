import { propostas } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da proposta na requisição'
    })
    return
  }

  dao.create(res, propostas, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de propostas', propostas)
exports.findOne = (req, res) => dao.findOne(req, res, propostas)
exports.update = (req, res) => dao.update(req, res, propostas)
exports.delete = (req, res) => dao.delete(req, res, propostas)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, propostas)
