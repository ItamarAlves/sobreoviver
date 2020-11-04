
```shell
$ npx sequelize-cli model:generate --name Persona --attributes pes_name:string,pes_email:string,password:virtual,passwordHash:string,pes_birthDate:date,pes_phone:string

$ npx sequelize-cli migration:generate --name Persona

```


