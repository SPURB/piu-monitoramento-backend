import { fontes } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.status) {
    res.status(400).send({
      message: 'Inclua o status da fonte na requisição'
    })
    return
  }

  dao.create(res, fontes, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de Fontes', fontes)
exports.findOne = (req, res) => dao.findOne(req, res, fontes)
exports.update = (req, res) => dao.update(req, res, fontes)
exports.delete = (req, res) => dao.delete(req, res, fontes)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, fontes)
