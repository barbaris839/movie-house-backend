const router = require("express").Router();

router.use("/", require("./authRouter"));
router.use("/users", require("./userRouter"));
router.use("/actors", require("./actorRouter"));
router.use("/movies", require("./movieRouter"));
router.use("/genres", require("./genreRoute"));
router.use("/directors", require("./directorRouter"));

module.exports = router;