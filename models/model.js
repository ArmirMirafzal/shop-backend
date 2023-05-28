/* models */
const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: false },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const User = model("User", userSchema);
User.create;
module.export = { User };