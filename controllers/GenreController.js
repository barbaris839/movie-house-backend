const genreDB = require("../models/genre");

class GenreController {
  static async createGenre(req, res) {
    await genreDB.Genre.create({
      name: req.body.name,
    })
      .then((genre) => res.status(200).json(genre))
      .catch((err) => res.status(500).json(err));
  }

  static async getGenres(req, res) {
    await genreDB.Genre.find()
      .then((genres) => res.status(200).json(genres))
      .catch((err) => res.status(500).json(err));
  }

  static async deleteGenreById(req, res) {
    await genreDB.Genre.findByIdAndDelete(req.body.id)
      .then((genre) => res.status(200).json(genre))
      .catch((err) => res.status(500).json(err));
  }

  static async updateGenreById(req, res) {
    await genreDB.Genre.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
    })
      .then((genre) => res.status(200).json(genre))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = GenreController;
