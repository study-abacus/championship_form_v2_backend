const path = require('path')

module.exports = {
  "DB": {
    "username": process.env.DB_USER || "championship",
    "password": process.env.DB_PASS || "championship",
    "database": process.env.DB_DB || "championship-db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "JWT_TIMEOUT": "10m",
  "PRIVATE_KEY": path.join (__dirname,'/keys/jwtRS256.key'),
  "PUBLIC_KEY": path.join (__dirname,'/keys/jwtRS256.key.pub')
}
