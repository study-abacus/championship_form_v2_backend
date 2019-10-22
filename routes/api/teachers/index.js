const router = require('express').Router()

const controller = require('./controller')

router.get('/', controller.handleQuery)
router.get('/:id', controller.handleQueryById)

module.exports = router
