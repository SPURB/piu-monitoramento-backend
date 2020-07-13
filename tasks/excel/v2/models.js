module.exports = [
  {
    table: 'origens',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'nome',
        type: 'string'
      }
    ]
  },
  {
    table: 'proponentes',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'nome',
        type: 'string'
      }
    ]
  },
  {
    table: 'fontes',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'nome',
        type: 'string'
      }
    ]
  },
  {
    table: 'grupos',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'nome',
        type: 'string'
      }
    ]
  },
  {
    table: 'data_tramitacao',
    collumns: [
      {
        key: 'id_projetos',
        type: 'int'
      },
      {
        key: 'registroSeiPrimeiro',
        type: 'datetime'
      },
      {
        key: 'registroSeiUltimo',
        type: 'datetime'
      },
      {
        key: 'id_tramitacao',
        type: 'int'
      },
      {
        key: 'status',
        type: 'string'
      }
    ]
  },
  {
    table: 'projetos',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'nome',
        type: 'string'
      },
      {
        key: 'descricao',
        type: 'string'
      },
      {
        key: 'consultaAberta',
        type: 'boolean'
      },
      {
        key: 'elementoMEM',
        type: 'string'
      },
      {
        key: 'areaTotal',
        type: 'float'
      },
      {
        key: 'ultimaAtualizacao',
        type: 'datetime'
      },
      {
        key: 'id_origens',
        type: 'int'
      },
      {
        key: 'proponentePrivado',
        type: 'boolean'
      },
      {
        key: 'id_proponentes',
        type: 'int'
      },
      {
        key: 'id_tramitacao',
        type: 'int'
      },
      {
        key: 'status',
        type: 'string'
      },
      {
        key: 'kml',
        type: 'string'
      },
      {
        key: 'shape',
        type: 'string'
      },
    ]
  },
  {
    table: 'tramitacao',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'nome',
        type: 'string'
      }
    ]
  },
  {
    table: 'arquivos_tramitacao',
    collumns: [
      {
        key: 'id',
        type: 'int'
      },
      {
        key: 'id_projetos',
        type: 'int'
      },
      {
        key: 'id_tramitacao',
        type: 'int'
      },
      {
        key: 'id_grupo',
        type: 'int'
      },
      {
        key: 'id_fonte',
        type: 'int'
      },
      {
        key: 'data',
        type: 'datetime'
      },
      {
        key: 'documento',
        type: 'string'
      },
      {
        key: 'arquivo_url',
        type: 'string'
      },
      {
        key: 'evento',
        type: 'string'
      }
    ]
  }
]
