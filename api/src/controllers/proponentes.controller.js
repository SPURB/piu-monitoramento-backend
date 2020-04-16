import { proponentes } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome do proponente na requisição'
    })
    return
  }

  dao.create(res, proponentes, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de proponentes', proponentes)
exports.findOne = (req, res) => dao.findOne(req, res, proponentes)
exports.update = (req, res) => dao.update(req, res, proponentes)
exports.delete = (req, res) => dao.delete(req, res, proponentes)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, proponentes)
