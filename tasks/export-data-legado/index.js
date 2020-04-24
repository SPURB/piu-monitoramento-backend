let projetos = []
let registros_administrativos = []
let arquivos = []
let hiperlinks = []

const propostas = [
  { nome: 'Pública' },
  { nome: 'Privada' }
]

const proponentes = [
  { nome: 'PMSP - SMUL' },
  { nome: 'PMSP - SMDU' },
  { nome: 'PMSP - SMDP/SPP' },
  { nome: 'PMSP - SMDP/SPP e SMT' },
  { nome: 'SPE Horizonte Branco' },
  { nome: 'Votorantim, Urbem, SDI, BVEP S.A.' },
  { nome: 'VS Bandeirante Empreendimentos Imobiliarios LTDAVS Banguera Empreendimentos Imobiliarios LTDAPADESP/NESPCarlos Leite I Stuchi & Leite Projetos (Coordenação)' }
]

const origem = [
  { nome: 'MEM - Setor Central' },
  { nome: 'MEM - proximidade CEAGESP' },
  { nome: 'MEM - Área de influência OUCFL' },
  { nome: 'PDE - Artigo 76' },
  { nome: 'PDE - Artigo 382' },
  { nome: 'PDE Art. 375, parágrafo único e Lei 16.833/18' },
  { nome: 'Programa de Desestatização' },
  { nome: 'Lei 16.211/2015 e 16.703/2017 (Concessão terminais)' },
  { nome: 'ZOE - Novo entreposto SP' },
  { nome: 'ZOE' }
]

const grupo = [
  { nome: 'Audiência Pública' },
  { nome: 'Consulta Caderno' },
  { nome: 'Consulta Instâncias' },
  { nome: 'Consulta Minuta' },
  { nome: 'Reuniões Bilateriais' },
  { nome: 'Projeto Final' },
  { nome: 'Outros' },
  { nome: 'Arquivos' }
]

const tramitacao = [
  { nome: 'Em proposição' },
  { nome: 'Em andamento' },
  { nome: 'Implantação' },
  { nome: 'Suspenso'  },
  { nome: 'Arquivado' }
]

const categorias = [
  { nome: 'Em Proposição dos Elementos Prévios', id_tramitacoes: 1 },
  { nome: 'Consulta Pública Inicial', id_tramitacoes: 1},
  { nome: 'Avaliação SMUL', id_tramitacoes: 1},
  { nome: 'Elaboração', id_tramitacoes: 2 },
  { nome: 'Discussão Pública', id_tramitacoes: 2 },
  { nome: 'Consolidação', id_tramitacoes: 2 },
  { nome: 'Encaminhamento Jurídico', id_tramitacoes: 2 },
  { nome: 'Implantação', id_tramitacoes: 3 }
]


function idProposta (s) {
  switch (s) {
    case 'Pública':
      return 1
    case 'Privado':
      return 2
    default:
      break;
  }
}

function idProponentes (s) {
  switch (s) {
    case 'PMSP - SMUL':
      return 1
    case 'PMSP - SMDU':
      return 2
    case 'PMSP - SMDP/SPP':
      return 3
    case 'PMSP - SMDP/SPP e SMT':
      return 4
    case 'SPE Horizonte Branco':
      return 5
    case 'Votorantim, Urbem, SDI, BVEP S.A.':
      return 6
    case 'VS Bandeirante Empreendimentos Imobiliarios LTDAVS Banguera Empreendimentos Imobiliarios LTDAPADESP/NESPCarlos Leite I Stuchi & Leite Projetos (Coordenação)':
      return 7
    default:
      break;
  }
}

function idOrigem (s) {
  switch (s) {
    case 'MEM - Setor Central':
      return 1
    case 'MEM - proximidade CEAGESP':
      return 2
    case 'MEM - Área de influência OUCFL':
      return 3
    case 'PDE - Artigo 76':
      return 4
    case 'PDE - Artigo 382':
      return 5
    case 'PDE Art. 375, parágrafo único e Lei 16.833/18':
      return 6
    case 'Programa de Desestatização':
      return 7
    case 'Lei 16.211/2015 e 16.703/2017 (Concessão terminais)':
      return 8
    case ' ZOE - Novo entreposto SP' || 'ZOE - Novo entreposto SP':
      return 9
    case 'ZOE':
      return 10
    default:
      break;
  }
}

function idGrupo (s) {
  switch (s) {
    case 'Audiência Pública':
      return 1
    case 'Consulta Caderno':
      return 2
    case 'Consulta Instâncias':
      return 3
    case 'Consulta Minuta':
      return 4
    case 'Reuniões Bilateriais':
      return 5
    case 'Projeto Final':
      return 6
    case 'Outros':
      return 7
    case undefined: // Arquivos que não possuem grupo 'Chamar de Arquivos'
      return 8
    default:
      break;
  }
}

function idCategoria (s) {
  switch (s) {
    case 'Proposição':
      return 1
    case 'Consulta Pública Inicial':
      return 2
    case 'Avaliação SMUL':
      return 3
    case 'Elaboração':
      return 4
    case 'Discussão Pública':
      return 5
    case 'Consolidação':
      return 6
    case 'Encaminhamento Jurídico':
      return 7
    case 'Implantação':
      return 8
    default:
      break;
  }
}

/** projetos */
fetch ('https://spurb.github.io/piu-monitoramento-backend/monitoramento.json', { 
  method: 'GET' 
}).then(response => response.json()
  .then(res => {
    
    let id_projeto = 1
    res.forEach(projeto => {
      let body = {
        id_projetos: undefined,
        nome: undefined,
        descricao: undefined,
        origem: undefined,
        elemento: undefined,
        areaTotal: undefined,
        geometry: [],
        id_propostas: undefined,
        id_tramitacoes: undefined,
        id_proponentes: undefined,
      }

      body.id_projetos = id_projeto
      body.nome = projeto.id_nome
      body.descricao = projeto.urb_descricao_basica
      body.origem = this.idOrigem(projeto.id_origem)
      body.elemento = projeto.urb_elemento_da_rede_de_estruturacao_urbana
      body.areaTotal = projeto.urb_area_total
      body.geometry = [projeto.urb_x, projeto.urb_y]
      body.id_propostas = this.idProposta(projeto.id_iniciativa_da_proposta)
      body.id_tramitacoes =  projeto.etapas_NUM
      body.id_proponentes = this.idProponentes(projeto.id_proponente)
      
      projetos.push(body)    
      
      id_projeto++
      // console.log(projeto.id_nome, projeto.b_status, projeto.etapas_NUM)
    });
  })
)
.catch(error => {
  console.log(error)
})

/** get hiperlinks */
fetch ('https://spurb.github.io/piu-monitoramento-backend/hiperlinks.json', { 
  method: 'GET' 
}).then(response => response.json()
  .then(res => {
    hiperlinks.push(...res)
  })
)
.catch(error => {
  console.log(error)
}).finally(() => {

  hiperlinks.forEach(hiperlink => {
    let body = {
      nome: undefined,
      arquivo_url: undefined,
      id_projetos: undefined
    }
    if (hiperlink.ID_etapa === 200) {
      body.nome = hiperlink.nome_publico_do_arquivo
      body.arquivo_url = hiperlink.arquivo

      projetos.forEach(projeto => {
        if (projeto.nome === hiperlink.PIU) {
          body.id_projetos = projeto.id
        }
      })      
      registros_administrativos.push(body)
    }
  })

  // arquivos
  hiperlinks.forEach(hiperlink => {
    let body = {
      nome: undefined,
      arquivo_url: undefined,
      id_grupos: undefined,
      id_categorias: undefined,
      id_projetos: undefined
    }
    if (hiperlink.ID_etapa !== 200 && hiperlink.ID_etapa !== 100 && hiperlink.ID_etapa) {
      body.nome = hiperlink.nome_publico_do_arquivo
      body.arquivo_url = hiperlink.arquivo
      body.id_categorias = this.idCategoria(hiperlink.etapa)
      body.id_grupos = this.idGrupo(hiperlink[''])

      projetos.forEach(projeto => {
        if (projeto.nome === hiperlink.PIU) {
          body.id_projetos = projeto.id
        }
      })
      
      arquivos.push(body)
    }
  })
})

console.log('Projetos', projetos)
console.log('Registros administrativos', registros_administrativos)
console.log('Arquivos', arquivos)
console.log('Propostas', propostas)
console.log('Proponentes', proponentes)
console.log('Origem', origem)
console.log('Grupos', grupo)

function salvarProjeto () {

  let blobProjetos = new Blob([JSON.stringify(projetos)], { type: "json/plain;charset=utf-8" })
  let blobRegistros = new Blob([JSON.stringify(registros_administrativos)], { type: "json/plain;charset=utf-8" })
  let blobArquivos = new Blob([JSON.stringify(arquivos)], { type: "json/plain;charset=utf-8" })
  let blobPropostas = new Blob([JSON.stringify(propostas)], { type: "json/plain;charset=utf-8" })
  let blobProponentes = new Blob([JSON.stringify(proponentes)], { type: "json/plain;charset=utf-8" })
  let blobOrigems = new Blob([JSON.stringify(origem)], { type: "json/plain;charset=utf-8" })
  let blobGrupos = new Blob([JSON.stringify(grupo)], { type: "json/plain;charset=utf-8" })

  saveAs(blobProjetos, "projetos.json");
  saveAs(blobRegistros, "registros_administrativos.json");
  saveAs(blobArquivos, "arquivos.json");
  saveAs(blobPropostas, "propostas.json");
  saveAs(blobProponentes, "proponentes.json");
  saveAs(blobOrigems, "origems.json");
  saveAs(blobGrupos, "grupos.json");
}

var p = document.getElementById('btnProjeto')
p.onclick = salvarProjeto

