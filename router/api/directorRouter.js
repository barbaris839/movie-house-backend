const router = require("express").Router();
const DirectorController = require("../../controllers/DirectorController");

router.post('/createDirector', DirectorController.createDirector); 
router.get('/getDirectors', DirectorController.getDirectors); 
router.post('/getDirectorById', DirectorController.getDirectorById); 


module.exports = router;