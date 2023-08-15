const router = require("express").Router();
const MovieController = require("../../controllers/MovieController");

router.post('/createMovie', MovieController.createMovie); 
router.get('/getMovies', MovieController.getMovies); 
router.get('/getTopMovies', MovieController.getTopMovies); 
router.get('/getMovieById/:id', MovieController.getMovieById); 
router.post('/getActorMovies', MovieController.getActorMovies); 
router.get('/getMoviesByGenreId/:id', MovieController.getMoviesByGenreId); 


module.exports = router;