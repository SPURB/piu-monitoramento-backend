# Backend do Monitoramento dos PIU's [![Build Status](https://travis-ci.org/SPURB/piu-monitoramento-backend.svg?branch=master)](https://travis-ci.org/SPURB/piu-monitoramento-backend)
Backend do sistema de monitormento dos PIU's - Projetos de Intervenção Urbana (Decreto nº 56.901, de 30 de março de 2016). Veja o índice dos dados:

- [https://spurb.github.io/piu-monitoramento-backend/index.json](https://spurb.github.io/piu-monitoramento-backend/index.json)

## Atualizar
Instruções para atualizar o sistema

### Requisitos
* Excel
* Git

1. Clone este repositório
```bash
git clone https://github.com/SPURB/piu-monitoramento.git
```
2. Altere os arquivos `input/monitoramento.xlsx` e `input/hiperlinks.xlsx` utilizando excel
3. Atualize este repositório
```bash
git add --all
git commmit -m "content: atualiza dados de piu X"
git push
```

Os dados serão atualizados nas seguintes urls:
 - [https://spurb.github.io/piu-monitoramento-backend/v2/origens.json](https://spurb.github.io/piu-monitoramento-backend/v2/origens.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/proponentes.json](https://spurb.github.io/piu-monitoramento-backend/v2/proponentes.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/fontes.json](https://spurb.github.io/piu-monitoramento-backend/v2/fontes.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/grupos.json](https://spurb.github.io/piu-monitoramento-backend/v2/grupos.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/data_tramitacao.json](https://spurb.github.io/piu-monitoramento-backend/v2/data_tramitacao.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/projetos.json](https://spurb.github.io/piu-monitoramento-backend/v2/projetos.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/tramitacao.json](https://spurb.github.io/piu-monitoramento-backend/v2/tramitacao.json)
 - [https://spurb.github.io/piu-monitoramento-backend/v2/arquivos_tramitacao.json](https://spurb.github.io/piu-monitoramento-backend/v2/arquivos_tramitacao.json)

## Desenvolvimento
Instruções para desenvolvimento no seu ambiente local e compilação local dos arquivos

### Requisitos
* Nodejs

1. Instale as dependências do projeto 
```bash
npm install 
```

O comando para ciar os arquivos `.json`
```
npm run build
```

Pode-se coletar os dados coleção de processos administrativos. Serão gerados o conteúdo das páginas dos processos administrativos do [SEI](https://sei.prefeitura.sp.gov.br/) 

```
npm run task:sei
```

Os arquivos serão gerados em `output/sei/Nome do Projeto/:id`.

