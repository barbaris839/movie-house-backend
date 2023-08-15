const router = require("express").Router();
const ActorController = require("../../controllers/ActorController");

router.post('/createActor', ActorController.createActor); 
router.get('/getActors', ActorController.getActors); 
router.post('/getActorById', ActorController.getActorById); 


module.exports = router;