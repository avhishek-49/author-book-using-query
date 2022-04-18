const Book = require("./../../../models/book.model");

 

  exports.delete = (req, res) => {
    Book.remove(req.params.id, (err, data) => {
    if (err) {
    if (err.kind === "not_found") {
    res.status(404).send({
    message: `Not found Book with id ${req.params.id}.`
    });
    } else {
    res.status(500).send({
    message: "Could not delete Book with id " + req.params.id
    });
    }
    } else res.send({ message: `Book was deleted successfully!` });
    });
    };
    
    // Delete all Books from the database.
    exports.deleteAll = (req, res) => {
    Book.removeAll((err, data) => {
    if (err)
    res.status(500).send({
    message:
    err.message || "Some error occurred while removing all Books."
    });
    else res.send({ message: `All Books were deleted successfully!` });
    });
    };