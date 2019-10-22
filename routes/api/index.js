const router = require('express').Router()

router.use('/jwt', require('./jwt'))

module.exports = router
