let router = require('express').Router();
let userModel = require('../models/User');
let cartItemModel = require('../models/cart');

router.route('/cart').get((req, res) => {
  console.log('getting cart items')
}).post((req, res)=> {
  //set is to update user object and push items into item array
  console.log(req.body, 'adding item to cart')
  cartItemModel.create({itemId: req.body.itemId, name: req.body.name, picture: req.body.picture, size: req.body.size, color: req.body.color, quantity: req.body.quantity, price: req.body.price})
  .then(cartItem => {
    return userModel.findByIdAndUpdate(req.body.userId, {$push: {cart: cartItem._id}}, { new: true })
  })
  .then(user => {
    res.send(user)
  }).catch(err => console.log(err))
}).delete((req, res)=> {
  userModel.findByIdAndUpdate(req.query.userid, {$pull: {cart: req.query.itemid}})
  .then(user => {
    return cartItemModel.findByIdAndRemove(req.query.itemid)
  })
  .then(item => {
    res.send({message: item._id + ' been removed'})

  })
  .catch(err => {
    res.status(422)
    .send({message: 'couldnt remove item'})
  })
})



module.exports = router;

