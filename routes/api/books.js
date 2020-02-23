const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)

// Matches with "/api/saved"
router
  .route("/saved")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router
  .route("/books")
  .post(booksController.checkAndCreate)
  .get(booksController.findAll);

  router
  .route("/books/:id")
  .delete(booksController.remove);

module.exports = router;
