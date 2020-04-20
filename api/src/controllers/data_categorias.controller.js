import { data_categorias } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.status) {
    res.status(400).send({
      message: 'Inclua o status da Data Categoria na requisição'
    })
    return
  }

  dao.create(res, data_categorias, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de Data Categorias', data_categorias)
exports.findOne = (req, res) => dao.findOne(req, res, data_categorias)
exports.update = (req, res) => dao.update(req, res, data_categorias)
exports.delete = (req, res) => dao.delete(req, res, data_categorias)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, data_categorias)
