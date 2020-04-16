import { categorias } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da categoria na requisição'
    })
    return
  }

  dao.create(res, categorias, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de categorias', categorias)
exports.findOne = (req, res) => dao.findOne(req, res, categorias)
exports.update = (req, res) => dao.update(req, res, categorias)
exports.delete = (req, res) => dao.delete(req, res, categorias)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, categorias)
