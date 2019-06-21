let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {type: String, trim: true, required: true, unique: true},
  password: {type: String, trim: true, required: true},
  cart: [new Schema({ item_id: {ref: "Item", type: Schema.Types.ObjectId},
  size: {type: String, trim: true}, color: {type: String, trim: true} })]
});

let User = mongoose.model("User", userSchema);

module.exports = User;