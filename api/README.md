base das endpoints para desenvolvimento frontend
https://piumonitoramento.herokuapp.com/

setup
```bash
# Instale as dependências
npm i

# Ignore alterações no arquivo .env
git update-index --assume-unchanged .env

# Se necessário, altere o arquivo .env com as configurações de acesso ao banco mysql. Arquivo .env:
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=piu_monitoramento
```

desenvolvimento
```bash
# Inicie o banco com migrations e seeders
npm run db:init

# Inicie o servidor para desenvolvimento em localhost:5000
npm run dev

# Ao alterar o modelo, migrations e seeders pode-se rodar o reset para resetar os dados do banco
npm run db:reset
```

produção
```bash
npm run build
npm run start
```