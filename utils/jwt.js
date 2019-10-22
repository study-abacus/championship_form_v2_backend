const jwt = require('jsonwebtoken')
const fs = require('fs')
const config = require('../config/config.js/index.js')

const generate = (payload, timeout = config.JWT_TIMEOUT) => {
  const privKey = fs.readFileSync(config.PRIVATE_KEY)
  return jwt.sign(payload, privKey, {
    algorithm: 'RS256',
    expiresIn: timeout
  })
}

const verify = token => {
  const cert = fs.readFileSync(config.PUBLIC_KEY)
  return new Promise((resolve, reject) => {
    jwt.verify(token, cert, {algorithms: ['RS256']}, (err, payload) => {
        if (err)
            return reject(err)
        resolve(payload)
    })
  })
}

module.exports = {
  generate,
  verify
}
