setup
```bash
npm i

# Ignore alterações no arquivo .env
git update-index --add .env

# Se necessário, altere o arquivo .env com as configurações de acesso ao banco mysql. Arquivo .env:
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=piu_monitoramento
```


desenvolvimento
```bash
# Inicie o banco
npm run db:init

# Inicie o servidor para desenvolvimento em localhost:5000
npm run dev

# Ao alterar o modelo, migrations e seeders pode rodar o reset para resetar os dados do banco
npm run db:reset
```

produção
```bash
npm run build
npm run start
```