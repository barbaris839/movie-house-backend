const movieDB = require("../models/movie");
const actorDB = require("../models/actor");
const genreDb = require("../models/genre");

class MovieController {
  static async createMovie(req, res) {
    await movieDB.Movie.create({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      rate: req.body.rate,
      videoUrl: req.body.videoUrl,
      actors: req.body.actors,
      genres: req.body.genres,
    })
      .then((movie) => res.status(200).json({ movie: movie }))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async getMovies(req, res) {
    await movieDB.Movie.find()
      .populate("actors genres")
      .select("name description imageUrl rate videoUrl actors genres")
      .then((movies) => res.status(200).json({ movies: movies }))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async getMovieById(req, res) {
    await movieDB.Movie.findById(req.params.id)
      .populate("actors genres")
      .then((movie) => res.status(200).json(movie))
      .catch((err) => res.status(500).json(err));
  }

  static async getActorMovies(req, res) {
    await movieDB.Movie.find({ "actors": { _id: req.body.id } })
      .select("name")
      .then((movie) => res.status(200).json(movie))
      .catch((err) => res.status(500).json(err));
  }

  static async getTopMovies(req, res) {
    await movieDB.Movie.find({ rate: { $gt: 8 } })
      .populate("actors genres")
      .select("name description imageUrl rate videoUrl actors genres")
      .then((movies) => res.status(200).json(movies))
      .catch((err) => res.status(500).json(err));
  }

  static async getMoviesByGenreId(req, res) {
    await movieDB.Movie.find({ "genres": { _id: req.params.id } })
      .populate("actors genres")
      .select("name description imageUrl rate videoUrl actors genres")
      .then((movies) => res.status(200).json(movies))
      .catch((err) => res.status(500).json(err));
  }

}

module.exports = MovieController;
