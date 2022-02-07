# jmdesignsioapi

### Author: John Montanye ([gatewayitconsulting](https://github.com/gatewayitconsulting/))
 
## Description

Very basic app to setup a POSTgres DB and API to access it.

https://jmdesignsioapi.herokuapp.com/test

## Languages & Technologies

![JavaScript](https://img.shields.io/badge/-JavaScript-000?&logo=JavaScript)
![JSON](https://img.shields.io/badge/-JSON-000?&logo=JSON)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-000?&logo=PostgreSQL)
![Node.js](https://img.shields.io/badge/-Node.js-000?&logo=Node.js)
![Heroku](https://img.shields.io/badge/-Heroku-000?&logo=Heroku)

## Start the Server

"server": "nodemon index.js"

## Knex.js Setup (for dev testing)

npx knex init  
npx knex migrate:make first-migration  
npx knex seed:make 001_first-seed  
npx knex migrate:latest  
npx knex seed:run  

[Knex documentation](https://knexjs.org/#Schema)