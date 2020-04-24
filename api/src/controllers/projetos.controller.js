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
    resultado.push({key: +i, values: colunas[i]});

  return resultado
}

exports.create = (req, res) => {

  if (!req.body.nome) {
    res.status(400).send({
      message: 'Inclua o nome da proposta na requisição'
    })
    return
  }

  const body = {
    nome: req.body.nome,
    descricao: req.body.descricao,
    elemento: req.body.elemento,
  }

  dao.create(res, projetos, body)
}

exports.findProject = async (req, res) => {
const { id } = req.params

  try {
    const projeto = await db.projetos.findOne({
      where: { id },
      attributes: ['id', 'nome', 'descricao', 'elemento', 'areaTotal', 'ultimaAtualizacao', 'geometry'],
      include: [
        { model: db.origens, attributes: ['id', 'nome'] },
        { model: db.propostas, attributes: ['id', 'nome'] },
        { model: db.proponentes, attributes: ['id', 'nome'] },
        { model: db.categorias, attributes: ['id', 'nome'] }
      ]
    })

    const registrosAdmin = await db.registros_administrativos.findAll({
      where: { id_projetos: id},
      attributes: ['id', 'nome', 'arquivo_url']
    })

    const data_categoria = await db.data_categorias.findAll({
      where: { id_projetos: id },
      attributes: ['id', 'status', 'registroSeiPrimeiro', 'registroSeiUltimo', 'id_categorias']
    })
    
    let arquivos = await db.arquivos_tramitacoes.findAll({
      where: { id_projetos: id },
      attributes: ['id', 'nome', 'arquivo_url', 'id_categorias','id_grupos'],
      include: [
        { model: db.grupo_arquivos, attributes: ['id', 'nome']}
      ]
    })
    arquivos = group_by(arquivos, 'id_categorias')
    
    res.status(200).send({
      projeto,
      registrosAdmin,
      data_categoria,
      arquivos
    })

  } catch (err) {
    res.status(500).send({
      err,
      message: 'Erro'
    })
  }
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de projetos', projetos)
exports.findOne = (req, res) => dao.findOne(req, res, projetos)
exports.update = (req, res) => dao.update(req, res, projetos)
exports.delete = (req, res) => dao.delete(req, res, projetos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, projetos)
