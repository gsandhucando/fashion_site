let router = require('express').Router();
let cartModel = require('../models/cart');

router.route('/cart').get((req, res) => {
  console.log('getting cart items')
}).post((req, res)=> {
  console.log('posting cart items')
  cartModel.create({email: req.body.email, items: [{item_id: req.body.item_id, color: req.body.color, size: req.body.size}]})
  .then((cart)=> {
    res.send({message: 'cart was created', cart })
  })
})

module.exports = router;