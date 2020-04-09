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
git commmit -m "Atualiza dados"
git push
```

Os dados serão atualizados nas seguintes urls:
 - [https://spurb.github.io/piu-monitoramento-backend/monitoramento.json](https://spurb.github.io/piu-monitoramento-backend/monitoramento.json)
 - [https://spurb.github.io/piu-monitoramento-backend/hiperlinks.json](https://spurb.github.io/piu-monitoramento-backend/hiperlinks.json)
 - [https://spurb.github.io/piu-monitoramento-backend/sei](https://spurb.github.io/piu-monitoramento-backend/sei)

## Desenvolvimento
Instruções para desenvolvimento no seu ambiente local e compilação local dos arquivos

### Requisitos
* Nodejs

1. Instale as dependências do projeto 
```bash
npm install 
```
2. Criar os arquivos `output/monitoramento.json`, `output/hiperlinks.json` e a coleção de processos administrativos `output/sei/Nome do Projeto/:id`
```
npm run build
```

