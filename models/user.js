const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectionString = process.env.DATABASE_CONNECTION_STRING;

mongoose.connect(connectionString, { useNewUrlParser: true });

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  },
  profileImageUrl: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: true,
    lowercase: true
  }
}, { collection: "users" });

exports.User = mongoose.model("User", UserSchema);

