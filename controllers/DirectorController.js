const directorDB = require("../models/director");

class DirectorController {
  static async createDirector(req, res) {
    await directorDB.Director.create({
      fullName: req.body.fullName,
      age: req.body.age,
      imageUrl: req.body.imageUrl,
    })
      .then((director) => res.status(200).json({ director: director }))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async getDirectors(req, res) {
    await directorDB.Director.find()
      .then((director) => res.status(200).json(director))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async getDirectorById(req, res) {
    await directorDB.Director.findById(req.body.id)
      .then((director) => res.status(200).json(director))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = DirectorController;
