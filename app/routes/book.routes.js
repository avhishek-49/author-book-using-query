const Book = require("./../controllers/BOOK/create.book");
const boooks = require("./../controllers/BOOK/delete.book");
const boooooks = require("./../controllers/BOOK/find.book");
const book = require("./../controllers/BOOK/update.book");

const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/book.validation");

var router = require("express").Router();
// Create a new book
router.post("/", validate(createValidation), Book.create);

// Retrieve all books
router.get("/", boooooks.findAll);



// Update a book with id
router.put("/:id", book.update);

// Delete a book with id
router.delete("/:id", boooks.delete);

// Delete all books
router.delete("/", boooks.deleteAll);

module.exports = router;

