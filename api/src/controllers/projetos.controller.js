import * as db from '../db'
import * as dao from './dao'


function group_by (lista, coluna) {
  let colunas = {};
  let resultado = [];

  lista = JSON.stringify(lista)
  lista = JSON.parse(lista)

  lista.forEach(function (item) {
    let reg = {};

    colunas[item[coluna]] = colunas[item[coluna]] || [];

    for (let i in item) 
      if (i != coluna) 
        reg[i] = item[i];

    colunas[item[coluna]].push(reg);
  });


  for (let i in colunas) 
    resultado.push({ key: +i, values: colunas[i]});

  return resultado
}

exports.create = (req, res) => {

  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da proposta na requisição'
    })
    return
  }

  /* const body = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    elemento: req.body.elemento,
  } */

  dao.create(res, db.projetos, req.body)
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de projetos', db.projetos)
exports.findOne = (req, res) => dao.findOne(req, res, projetos)
exports.update = (req, res) => dao.update(req, res, db.projetos)
exports.delete = (req, res) => dao.delete(req, res, db.projetos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, db.projetos)
