import { grupo_arquivos } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome do grupo na requisição'
    })
    return
  }

  dao.create(res, grupos_arquivos, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de grupos de arquivos', grupos_arquivos)
exports.findOne = (req, res) => dao.findOne(req, res, grupos_arquivos)
exports.update = (req, res) => dao.update(req, res, grupos_arquivos)
exports.delete = (req, res) => dao.delete(req, res, grupos_arquivos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, grupos_arquivos)