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
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_DB,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "JWT_TIMEOUT": "10m",
  "PRIVATE_KEY": path.join (__dirname,'/keys/jwtRS256.key'),
  "PUBLIC_KEY": path.join (__dirname,'/keys/jwtRS256.key.pub')
}
