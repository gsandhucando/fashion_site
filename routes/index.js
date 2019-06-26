let router = require('express').Router();
let itemRoutes = require('./itemRoutes')
let cartRoute = require('./cartRoute');
let UserRoute = require('./userRoute');

router.use('/api', itemRoutes, cartRoute, UserRoute)

module.exports = router;