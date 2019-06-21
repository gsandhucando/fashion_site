let router = require('express').Router();
let itemRoutes = require('./itemRoutes')
let cartRoute = require('./cartRoute');

router.use('/api', itemRoutes, cartRoute)

module.exports = router;