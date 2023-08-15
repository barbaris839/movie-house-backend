const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const connectionString = process.env.DATABASE_CONNECTION_STRING;

mongoose.connect(connectionString, { useNewUrlParser: true });

const MovieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    actors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor",
      },
    ],
    genres: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Genre",
      },
    ],
	directors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Director",
      },
    ],
  },
  { collection: "movies" }
);

exports.Movie = mongoose.model("Movie", MovieSchema);
