const router = require('express').Router()
const { ensureLoggedIn } = require('../../../middlewares/authentication')

const controller = require('./controller')

router.use(ensureLoggedIn)

router.get('/', controller.handleQuery)
router.post('/', controller.handleCreate)
router.get('/:id', controller.handleQueryById)
router.patch('/:id', controller.handleUpdateById)

module.exports = router
