# piu-monitoramento-backend
Backend do sistema de monitormento dos PIU's - Projetos de Intervenção Urbana (Decreto nº 56.901, de 30 de março de 2016) - gestaourbana.prefeitura.sp.gov.br/piu-monitoramento

### Requisitos
* Nodejs
* NPM
* Excel

### Setup
1. Inclua o arquivo excel `input/monitoramento.xlsx` (versão => office 2007, extensão `xlsx`). 
```bash
# instalar dependências
npm install 
```

2. Converta  `input/monitoramento.xlsx` para `output/monitoramento.json`
```
node index.js
```
