const Book = require("./../../../models/book.model");

// Create and Save a new Book
exports.findAll = (req, res) => {
  const title = req.query.title;

  Book.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    else res.send(data);
  });
};
