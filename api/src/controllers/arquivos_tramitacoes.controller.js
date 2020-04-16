import { arquivos_tramitacoes } from '../db'
import * as dao from './dao'

exports.create = (req, res) => {
  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome do arquivo na requisição'
    })
    return
  }

  dao.create(res, arquivos_tramitacoes, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de propostas', arquivos_tramitacoes)
exports.findOne = (req, res) => dao.findOne(req, res, arquivos_tramitacoes)
exports.update = (req, res) => dao.update(req, res, arquivos_tramitacoes)
exports.delete = (req, res) => dao.delete(req, res, arquivos_tramitacoes)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, arquivos_tramitacoes)
