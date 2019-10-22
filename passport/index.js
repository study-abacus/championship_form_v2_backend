const passport = require('passport')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const fs = require('fs')
const config = require('../config')
const DB = require('../models')
const publicKey = fs.readFileSync(config.PUBLIC_KEY)

passport.serializeUser((user, done) => {
  return done(null, user.id)
})

passport.deserializeUser(async (userId, done) => {
  try {
    const user = await DB.users.findById(userId)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
  secretOrKey: publicKey,
  algorithms: ['RS256']
}
passport.use(new JwtStrategy(opts, async (payload, done) => {
  if (!payload.clientId) {
    return done(null, false)
  }

  const session = await DB.sessions.findOne({
    where: {
      userId: payload.id,
      clientId: payload.clientId
    }
  })

  if (!session) {
    return done(null, false)
  }

  done(null, payload)
}))

module.exports = passport
