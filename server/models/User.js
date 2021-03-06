const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  bio: String,
})

const User = mongoose.model("User", userSchema)
module.exports = User
