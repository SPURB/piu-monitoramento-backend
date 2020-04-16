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
# Crie o banco
npx sequelize-cli db:create

# Inicie migrations
npx sequelize-cli db:migrate

# Popule dados com seeders
npx sequelize-cli db:seed:all

# Inicie o servidor para desenvolvimento
npm run dev
```

produção
```bash
npm run build
npm run start
```