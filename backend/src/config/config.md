# ARQUIVO DE SUPORTE PARA GERAR MODELS, MIGRATIONS & SEEDERS.
## DOCUMENTAÇÃO REFERENCIADA.
- https://sequelize.org/master/manual/migrations.html


## CONFIGURAÇÃO DOS ARQUIVOS AONDE VAI SER GERADO O ARQUIVO ESTÁ NO ARQUIVO > ../.sequelizerc

### Exemplo para criar um model --name User
```shell
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
#### AQUI VAI SER GERADO UM ARQUIVO NA PASTA /models 
#### AQUI TAMBÉM VAI SER GERADO UM ARQUIVO NA PASTA MIGRATIONS

### EXECUTAR A MIGRATION PARA CRIAR A TABLE.
```shell
$ npx sequelize-cli migration:generate --name Persona
```

### EXECUTAR A MIGRATION PARA CRIAR A TABLE.
```shell
$ npx sequelize-cli db:migrate
```

### EXECUTAR A MIGRATION PARA CRIAR A TABLE !VOLTAR.
```shell
$ npx sequelize-cli db:migrate:undo
```