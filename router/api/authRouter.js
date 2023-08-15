const router = require("express").Router();
const AuthController = require("../../controllers/authController");

router.post('/login', AuthController.login);
router.post('/signUp', AuthController.signUp);

module.exports = router;