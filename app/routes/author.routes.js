const Authoor = require("./../controllers/AUTHOR/create.author");
const Authooor = require("./../controllers/AUTHOR/delete.upadate");
const Authorrr = require("./../controllers/AUTHOR/find.author");
const Aauthor = require("./../controllers/AUTHOR/update.author");
const validate = require("../validations/validation");
const { createValidation, findOneValidation } = require("../validations/author.validation");

var router = require("express").Router();
// Create a new user
router.post("/", validate(createValidation), Authoor.create);

// Retrieve all Author
router.get("/", Authorrr.findAll);





// Update a user with id
router.put("/:id", Aauthor.update);

// Delete a user with id
router.delete("/:id", Authooor.delete);

// Delete all Author

router.delete("/:id", Authooor.deleteAll);



module.exports = router;

