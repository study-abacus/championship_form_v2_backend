const router = require('express').Router()
const { ensureLoggedIn } = require('../../../middlewares/authentication')

const controller = require('./controller')

router.get('/stats', ensureLoggedIn, controller.handleGetStats)

module.exports = router
