let router = require('express').Router();
let itemRoutes = require('./itemRoutes')

router.use('/api', itemRoutes)

module.exports = router;