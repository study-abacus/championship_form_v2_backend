const passport = require('../passport')

const ensureLoggedIn = async (req, res, next) => {
  if (req.user) return next()
  passport.authenticate('jwt', function (err, user, info) {
    if (user && !err) {
      req.user = user;
      next()
    } else {
      res.sendStatus(401)
    }
  })(req, res, next)
}

const authenticate = async (req, res, next) => {
  passport.authenticate('jwt', function (err, user, info) {
    if (user && !err) {
      req.user = user;
      next()
    } else {
      res.sendStatus(401)
    }
  })(req, res, next)
}

const authenticateOrPass = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) {
      res.sendStatus(401);
    }
    req.user = user || {}
    next();
  })(req, res, next)
}

module.exports = {
  authenticate,
  authenticateOrPass,
  ensureLoggedIn
}
