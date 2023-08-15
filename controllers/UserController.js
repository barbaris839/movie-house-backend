const userDB = require("../models/user");

class UserController {
  static async getUserById(req, res) {
    //if (!req.body.userId) res.status(500).json({ error: "User Id is null" });

    await userDB.User.findById(req.body.userId)
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(500).json(err));
  }

  static async getUsers(req, res) {
    await userDB.User.find()
      .then((users) => res.status(200).json({ users: users }))
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async deleteUser(req, res) {
    if (!req.body.userId) res.status(500).json({ error: "User Id is null" });

    await userDB.User.findByIdAndDelete(req.body.userId)
      .then((user) =>
        res.status(200).json({
          message: `${user.fullName} was successfuly deleted `,
        })
      )
      .catch((err) => res.status(500).json({ err: err }));
  }

  static async updateUser(req, res) {
    if (!req.body.userId) res.status(500).json({ error: "User Id is null" });

    await userDB.User.findByIdAndUpdate(req.body.userId, {
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      profileImageUrl: req.body.profileImageUrl,
      password: req.body.password,
    })
      .then(() =>
        res.status(200).json({
          message: "User was successfuly updated",
        })
      )
      .catch((err) => res.status(500).json({ err: err }));
  }
}

module.exports = UserController;
