# jmdesignsioapi

### Author: John Montanye ([gatewayitconsulting](https://github.com/gatewayitconsulting/))
 
## Description

Very basic app to setup a POSTgres DB and API to access it.

## Start the Server

"server": "nodemon index.js"

## Knex.js Setup (for dev testing)

npx knex init  
npx knex migrate:make first-migration  
npx knex seed:make 001_first-seed  
npx knex migrate:latest  
npx knex seed:run  

[Knex documentation](https://knexjs.org/#Schema)