const bcrypt = require('bcrypt')
const saltRounds = 10;

const digest = password => {
  return new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
      if (err) return reject(err)
      return resolve(hash)
    });
  })
}

const compare = (password, hash) => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, function(err, res) {
      if (err) return reject(err) 
      return resolve(res)
    });
  })
}

module.exports = {
  digest,
  compare
}
