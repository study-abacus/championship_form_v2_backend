const router = require('express').Router()

router.use('/jwt', require('./jwt'))
router.use('/teachers', require('./teachers'))
router.use('/participants', require('./participants'))

module.exports = router
