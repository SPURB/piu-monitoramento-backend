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

exports.findOne = async (req, res) => {
  const { id } = req.params

  try {
    const projeto = await db.projetos.findOne({
      where: { id },
      attributes: [
        'id',
        'nome',
        'descricao',
        'statusConsulta',
        'elemento',
        'areaTotal',
        'ultimaAtualizacao',
        'geometry'
      ],
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
    
    let aux = []

    arquivos.forEach(arquivo => {
      const key = arquivo.key
      const data = group_by(arquivo.values, 'id_grupos')
      aux.push({ categoria: key, arquivos: data })
    })

    res.status(200).send({
      projeto,
      registrosAdmin,
      data_categoria,
      arquivos: aux
    })

  } catch (err) {
    res.status(500).send({
      err,
      message: 'Erro'
    })
  }
}

exports.projectForTramit = async (req, res) => {
  db.projetos.findAll({
    attributes: ['id', 'nome', 'statusConsulta', 'id_categorias', 'id_propostas'],
    include: [
      { 
        model: db.categorias,
        attributes: ['id', 'nome'], 
        include: [{ model: db.tramitacoes, attributes: ['id', 'nome']}]
      }
    ]
  }).then(data => {
    let etapaPreposicao = { title: 'Em proposição', etapa: [] }
    let etapaAndamento = { title: 'Em andamento', etapa: [] }
    let etapaImplantacao = { title: 'Em implantação', etapa: [] }
    let etapaSuspenso = { title: 'Suspenso', etapa: [] }
    let etapaArquivado = { title: 'Arquivado', etapa: [] }

    let preposicao = { marcadorNumber: '01', marcadorTitle: 'EM PROPOSIÇÃO DOS ELEMENTOS PRÉVIOS', publico: [], privado: [] }
    let consulta = { marcadorNumber: '02', marcadorTitle: 'CONSULTA PÚBLICA INICIAL', publico: [], privado: [] }
    let avaliacao = { marcadorNumber: '03', marcadorTitle: 'AVALIAÇÃO SMUL', publico: [], privado: [] }

    let elaboracao = { marcadorNumber: '04', marcadorTitle: 'ELABORAÇÃO', publico: [], privado: [] }
    let discussao = { marcadorNumber: '05', marcadorTitle: 'DISCUSSÃO PÚBLICA', publico: [], privado: [] }
    let consolidacao = { marcadorNumber: '06', marcadorTitle: 'CONSOLIDAÇÃO', publico: [], privado: [] }
    let encaminhamento  = { marcadorNumber: '07', marcadorTitle: 'ENCAMINHAMENTO JURÍDICO', publico: [], privado: [] }

    let implantacao  = { marcadorNumber: '08', marcadorTitle: 'IMPLANTAÇÃO', publico: [], privado: [] }

    let suspenso  = { marcadorNumber: 0, marcadorTitle: 'Suspenso', publico: [], privado: [] }
    let arquivado  = { marcadorNumber: 0, marcadorTitle: 'Arquivado', publico: [], privado: [] }

    data.forEach(projeto => {
      if (projeto.id_categorias === 1 && projeto.categoria.tramitaco.id === 1) {
        if (projeto.id_propostas === 1) { preposicao.publico.push(projeto) }
        else { preposicao.privado.push(projeto) }

      } else if (projeto.id_categorias === 2 && projeto.categoria.tramitaco.id === 1) {
        if (projeto.id_propostas === 1) { consulta.publico.push(projeto) }
        else { consulta.privado.push(projeto) }

      } else if (projeto.id_categorias === 3 && projeto.categoria.tramitaco.id === 1) {
        if (projeto.id_propostas === 1) { avaliacao.publico.push(projeto) }
        else { avaliacao.privado.push(projeto) }

      }

      if (projeto.id_categorias === 4 && projeto.categoria.tramitaco.id === 2) {
        if (projeto.id_propostas === 1) { elaboracao.publico.push(projeto) }
        else { elaboracao.privado.push(projeto) }

      } else if (projeto.id_categorias === 5 && projeto.categoria.tramitaco.id === 2) {
        if (projeto.id_propostas === 1) { discussao.publico.push(projeto) }
        else { discussao.privado.push(projeto) }

      } else if (projeto.id_categorias === 6 && projeto.categoria.tramitaco.id === 2) {
        if (projeto.id_propostas === 1) { consolidacao.publico.push(projeto) }
        else { consolidacao.privado.push(projeto) }

      } else if (projeto.id_categorias === 7 && projeto.categoria.tramitaco.id === 2) {
        if (projeto.id_propostas === 1) { encaminhamento.publico.push(projeto) }
        else { encaminhamento.privado.push(projeto) }

      }

      if (projeto.id_categorias === 8 && projeto.categoria.tramitaco.id === 3) {
        if (projeto.id_propostas === 1) { implantacao.publico.push(projeto) }
        else { implantacao.privado.push(projeto) }

      }

      if (projeto.id_categorias === 9 && projeto.categoria.tramitaco.id === 4) {
        if (projeto.id_propostas === 1) { suspenso.publico.push(projeto) }
        else { suspenso.privado.push(projeto) }

      }

      if (projeto.id_categorias === 10 && projeto.categoria.tramitaco.id === 5) {
        if (projeto.id_propostas === 1) { arquivado.publico.push(projeto) }
        else { arquivado.privado.push(projeto) }

      }
    })
    
    etapaPreposicao.etapa.push(preposicao)
    etapaPreposicao.etapa.push(consulta)
    etapaPreposicao.etapa.push(avaliacao)

    etapaAndamento.etapa.push(elaboracao)
    etapaAndamento.etapa.push(discussao)
    etapaAndamento.etapa.push(consolidacao)
    etapaAndamento.etapa.push(encaminhamento)

    etapaImplantacao.etapa.push(implantacao)
    etapaSuspenso.etapa.push(suspenso)
    etapaArquivado.etapa.push(arquivado)

    res.send({
      etapaPreposicao,
      etapaAndamento,
      etapaImplantacao,
      etapaSuspenso,
      etapaArquivado
    })
  }).catch(err => {
    res.status(500).send({
      err
    })
  })
  
}

exports.findAll = (req, res) => dao.findAll(res, 'Lista de projetos', db.projetos)
// exports.findOne = (req, res) => dao.findOne(req, res, projetos)
exports.update = (req, res) => dao.update(req, res, db.projetos)
exports.delete = (req, res) => dao.delete(req, res, db.projetos)
exports.deleteAll = (req, res) => dao.deleteAll(req, res, db.projetos)
