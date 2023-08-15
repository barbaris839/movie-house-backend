const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectionString = process.env.DATABASE_CONNECTION_STRING;

mongoose.connect(connectionString, { useNewUrlParser: true });

const DirectorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }

}, { collection: "directors" });

exports.Director = mongoose.model("Director", DirectorSchema);