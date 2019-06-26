let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
  email: {type: String, trim: true, required: true, unique: true},
  password: {type: String, trim: true, required: true},
  cart: [{type: Schema.Types.ObjectId, ref: "CartItem"}]
});

let User = mongoose.model("User", userSchema);

module.exports = User;