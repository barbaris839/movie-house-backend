const bcrypt = require("bcryptjs");
const jsonwebtoken = require("jsonwebtoken");
const userDB = require("../models/user");
const dotenv = require("dotenv");
dotenv.config();

const SECRET_JWT = process.env.JWT;

class AuthController {
  static async signUp(req, res) {
    if (!req.body.email || !req.body.password) {
      res.status(500).json({ error: "All fields are required!" });
    }

    await userDB.User.create({
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      fullName: req.body.fullName,
      role: "user",
      profileImageUrl: req.body.profileImageUrl,
    })
      .then((user) => {
        const token = jsonwebtoken.sign(
          {
            id: user._id,
            email: user.email,
            role: user.role,
            fullName: user.fullName,
            profileImageUrl: user.profileImageUrl,
          },
          SECRET_JWT
        );
        res.status(200).json({ token: token });
      })
      .catch((err) => res.status(500).json({ error: err }));
  }

  static async login(req, res) {
    if (!req.body.email || !req.body.password) {
      res.status(500).json({ error: "All fields are required!" });
    }

    await userDB.User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          res.status(500).json({ error: "User doesn't exist" });
        } else {
          if (!bcrypt.compareSync(req.body.password, user.password)) {
            res.status(500).json({ error: "Wrong password" });
          } else {
            const token = jsonwebtoken.sign(
              {
                id: user._id,
                email: user.email,
                role: user.role,
                fullName: user.fullName,
                profileImageUrl: user.profileImageUrl,
              },
              SECRET_JWT
            );
            res.status(200).json(token);
          }
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }
}

module.exports = AuthController;
