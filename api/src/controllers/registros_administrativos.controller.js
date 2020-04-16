import { registros_administrativos } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome do registro administrativo na requisição'
    })
    return
  }

  dao.create(res, registros_administrativos, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de registros administrativos', registros_administrativos)
exports.findOne = (req, res) => dao.findOne(req, res, registros_administrativos)
exports.update = (req, res) => dao.update(req, res, registros_administrativos)
exports.delete = (req, res) => dao.delete(req, res, registros_administrativos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, registros_administrativos)
