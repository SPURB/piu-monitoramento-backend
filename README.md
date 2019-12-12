# piu-monitoramento-backend
Backend do sistema de monitormento dos PIU's - Projetos de Intervenção Urbana (Decreto nº 56.901, de 30 de março de 2016) - [http://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento](https://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento)
### Requisitos
* Excel
* Nodejs
* NPM
* Apache

### Setup
1. Incluir os arquivos `dadosexcel.xlsx` e `PIU_Documentacao.xlsx` no formato excel no diretório `/input` 
    > Atualmente estes arquivos se encontram na rede interna da São Paulo Urbanismo em `\\spurbsp01\PIUs_Monitoramento\02_Sistema monitoramento`

2. Instalar as dependências do projeto 
```bash
# instalar dependências
npm install 
```

3. Criar os arquivos `output/monitoramento.json` e `output/hiperlinks.json`
```
npm run build
```

4. Utilize o `index.php` como endpoint desta aplicação

### Para consumir esta API
- A url referente a este `index.php` (ou `/`) irá retornar dois objetos: `monitoramento` e `hiperlinks`
- `?data=monitoramento` retorna apenas `monitoramento`. [Exemplo](http://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento?data=monitoramento).
- `?data=hiperlinks` retorna apenas `hiperlinks`. [Exemplo](http://api.gestaourbana.prefeitura.sp.gov.br/piu-monitoramento?data=hiperlinks).