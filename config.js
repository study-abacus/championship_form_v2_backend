const path = require('path')

module.exports = {
  "development": {
    "username": "championship",
    "password": "championship",
    "database": "championship-db",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "JWT_TIMEOUT": "10m",
  "PRIVATE_KEY": path.join (__dirname,'/keys/jwtRS256.key'),
  "PUBLIC_KEY": path.join (__dirname,'/keys/jwtRS256.key.pub')
}
