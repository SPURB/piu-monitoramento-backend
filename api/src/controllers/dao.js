const dataAccessObject = {
  create: (res, Model, body) => {
    Model.create(body)
      .then(data => res.send(data))
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Ocorreu um erro no registro'
        })
      })
  },
  findAll: (res, titulo, Model) => {
    Model.findAll()
      .then(data => {
        const customResponse = {
          titulo,
          values: data
        }
        res.send(customResponse)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Ocorreu um erro na busca'
        })
      })
  },
  findAllWhere: (req, res, Model) => {
    Model.findAll({
      where: {
        ...req.body
      }
    })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Ocorreu um erro na consulta de id: ${id}`
        })
      })
  },
  findOne: (req, res, Model) => {
    const id = req.params.id

    Model.findByPk(id)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Ocorreu um erro na consulta de id: ${id}`
        })
      })
  },
  update: (req, res, Model) => {
    const id = req.params.id

    Model.update(req.body, { where: { id } })
      .then(num => {
        if (num == 1) {
          res.send({
            message: `Sucesso! id: ${id} foi atualizado`
          })
        } else {
          res.send({
            message: `Erro. Não foi possível atualizar id: ${id}. Verifique se o conteúdo da requisição não está vazio`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Erro. Não foi possível atualizar id: ${id}`
        })
      })
  },
  delete: (req, res, Model) => {
    const id = req.params.id

    Model.destroy({ where: { id } })
      .then(num => {
        if (num == 1) {
          res.send({
            message: 'Sucesso! id: ${id} foi deletada'
          })
        } else {
          res.send({
            message: `Erro. Não foi possível deletar id: ${id}. Talvez hora não tenha sido enconcontrada`
          })
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || `Erro. Não foi possível deletar id: ${id}`
        })
      })
  },
  deleteAll: (req, res, Model) => {
    Model.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Sucesso! Todos os itens foram deletados` })
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Erro. Algum erro ocorreu durante a deleção'
        })
      })
  }
}

module.exports = dataAccessObject
