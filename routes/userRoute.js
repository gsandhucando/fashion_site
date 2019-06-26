let router = require('express').Router();
let userModel = require('../models/User');

router.route('/user').get((req, res) => {
  console.log('getting user')
}).post((req, res)=> {
  console.log('posting user')
  userModel.findById(req.body.id)
  .populate('cart')
  .exec()
  .then((user)=> {
    console.log(user, '$$$$$$$$$$$')
    res.send(user)
  })
})

module.exports = router;