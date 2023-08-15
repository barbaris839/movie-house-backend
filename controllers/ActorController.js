const actorDB = require("../models/actor");

class ActorController {
  static async createActor(req, res) {
    await actorDB.Actor.create({
      fullName: req.body.fullName,
      age: req.body.age,
      imageUrl: req.body.imageUrl,
    })
      .then((actor) => res.status(200).json({ actor: actor }))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async getActors(req, res) {
    await actorDB.Actor.find()
      .then((actors) => res.status(200).json(actors))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async getActorById(req, res) {
    await actorDB.Actor.findById(req.body.id)
      .then((actor) => res.status(200).json(actor))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = ActorController;
