let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let cartItemSchema = new Schema({
  userId: {type: Schema.Types.ObjectId, ref: 'User'},
  itemId: {type: Schema.Types.ObjectId, ref: 'Item'},
  name: {type: String, trim: true},
  picture: {type: String, trim: true},
  size: {type: String, trim: true},
  color: {type: String, trim: true},
  quantity: {type: Number, default: 1 },
  price: {type: Number}
});

let CartItem = mongoose.model("CartItem", cartItemSchema);

module.exports = CartItem;