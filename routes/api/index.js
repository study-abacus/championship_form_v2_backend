const router = require('express').Router()

router.use('/jwt', require('./jwt'))
router.use('/teachers', require('./teachers'))
router.use('/participants', require('./participants'))
router.use('/participations', require('./participation'))
router.use('/exams', require('./exam'))
router.use('/dashboard', require('./dashboard'))

module.exports = router
