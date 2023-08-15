const router = require("express").Router();
const UserController = require("../../controllers/UserController");

router.get('/getUsers', UserController.getUsers);
router.post('/getUserById', UserController.getUserById);
router.delete('/deleteUser', UserController.deleteUser);
router.post('/updateUser', UserController.updateUser);

module.exports = router;