let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let itemSchema = new Schema({
  category: String,
  title: String,
  price: Number,
  menu: [
    new Schema({
      button: String,
      img: String,
      color: String,
      frontImg: String,
      sideImg: String,
      backImg: String
    })
  ]
})

let Item = mongoose.model('Item', itemSchema)

module.exports = Item;