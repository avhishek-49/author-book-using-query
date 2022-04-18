const Author = require("./../../../models/author.model");

// Create and Save a new book
exports.findAll = (req, res) => {
  const title = req.query.title;

  Author.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
