const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectionString = process.env.DATABASE_CONNECTION_STRING;

mongoose.connect(connectionString, { useNewUrlParser: true });

const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }

}, { collection: "genres" });

exports.Genre = mongoose.model("Genre", GenreSchema);

