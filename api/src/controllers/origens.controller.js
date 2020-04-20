import { origens } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da origem na requisição'
    })
    return
  }

  dao.create(res, origens, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de Origens', origens)
exports.findOne = (req, res) => dao.findOne(req, res, origens)
exports.update = (req, res) => dao.update(req, res, origens)
exports.delete = (req, res) => dao.delete(req, res, origens)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, origens)
