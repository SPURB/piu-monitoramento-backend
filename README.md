# piu-monitoramento-backend [![Build Status](https://travis-ci.org/SPURB/piu-monitoramento-backend.svg?branch=master)](https://travis-ci.org/SPURB/piu-monitoramento-backend)
Backend do sistema de monitormento dos PIU's - Projetos de Intervenção Urbana (Decreto nº 56.901, de 30 de março de 2016) - [https://spurb.github.io/piu-monitoramento-backend/index.json](https://spurb.github.io/piu-monitoramento-backend/index.json)

### Requisitos
* Excel
* Nodejs

Antes de iniciar clone este repositório
```bash
git clone https://github.com/SPURB/piu-monitoramento.git
```

### Atualizações
1. Altere os arquivos `input/monitoramento.xlsx` e `input/hiperlinks.xlsx` utilizando excel
2. Atualize este repositório
```bash
git add --all
git commmit -m "Atualiza dados"
git push
```
3. Os dados podem ser acessados pelas seguintes urls:
 - [monitoramento](https://spurb.github.io/piu-monitoramento-backend/monitoramento.json)
 - [hiperlinks](https://spurb.github.io/piu-monitoramento-backend/hiperlinks.json)

### Crie localmente os arquivos compilados .json
1. Instale as dependências do projeto 
```bash
npm install 
```
3. Criar os arquivos `output/monitoramento.json` e `output/hiperlinks.json`
```
npm run build
```

