const router = require("express").Router();
const GenreController = require("../../controllers/GenreController");

router.post('/createGenre', GenreController.createGenre); 
router.get('/getGenres', GenreController.getGenres); 
router.delete('/deleteGenreById', GenreController.deleteGenreById); 
router.post('/updateGenreById', GenreController.updateGenreById); 


module.exports = router;