# piu-monitoramento-backend [![Build Status](https://travis-ci.org/yubathom/piu-monitoramento-backend.svg?branch=master)](https://travis-ci.org/yubathom/piu-monitoramento-backend)
Backend do sistema de monitormento dos PIU's - Projetos de Intervenção Urbana (Decreto nº 56.901, de 30 de março de 2016) - [http://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento](https://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento)

### Requisitos
* Excel
* Nodejs

Antes de iniciar clone este repositório
```bash
git clone https://github.com/SPURB/piu-monitoramento.git
```

### Atualizações
1. Altere os arquivos `input/dadosexcel.xlsx` e `input/PIU_Documentacao.xlsx` utilizando excel
2. Atualize este repositório
```bash
git add --all
git commmit -m "Atualiza dados"
git push
```

### Crie localmente os arquivos compilados .json
1. Instale as dependências do projeto 
```bash
npm install 
```
3. Criar os arquivos `output/monitoramento.json` e `output/hiperlinks.json`
```
npm run build
```

<!-- 
4. Utilize o `index.php` como endpoint desta aplicação

### Para consumir esta API
- A url referente a este `index.php` (ou `/`) irá retornar dois objetos: `monitoramento` e `hiperlinks`
- `?data=monitoramento` retorna apenas `monitoramento`. [Exemplo](http://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento?data=monitoramento).
- `?data=hiperlinks` retorna apenas `hiperlinks`. [Exemplo](http://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento?data=hiperlinks). -->