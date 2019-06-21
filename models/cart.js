let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let cartSchema = new Schema({
  email: {type: String, trim: true, required: true},
  items: [new Schema({ item_id: {ref: "Item", type: Schema.Types.ObjectId},
size: {type: String, trim: true}, color: {type: String, trim: true} })]
});

let Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;