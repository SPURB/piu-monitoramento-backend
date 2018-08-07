# piu-monitoramento-backend
Backend do sistema de monitormento dos PIU's - Projetos de Intervenção Urbana (Decreto nº 56.901, de 30 de março de 2016) - gestaourbana.prefeitura.sp.gov.br/piu-monitoramento

### Requisitos
* Excel
* Nodejs
* NPM

### Setup
1. Incluir os arquivos `dadosexcel.xlsx` e `PIU_Documentacao.xlsx` no formato excel no diretório `/input` (atualmente este arquivo se encontra na rede interna da São Paulo Urbanismo em `\\spurbsp01\PIUs_Monitoramento\02_Sistema monitoramento`)

2. Instalar as dependências do projeto 
```bash
# instalar dependências
npm install 
```

3. Criar os arquivos `output/monitoramento.json` e `output/hiperlinks.json`
```
node createJson
```
