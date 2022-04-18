const Book = require("./../../../models/book.model");

// Update a book by the id in the request
exports.update = (req, res) => {
 
Book.updateById(
  req.params.id,
  new Book(req.body),
  (err, data) => {
  if (err) {
  if (err.kind === "not_found") {
  res.status(404).send({
  message: `Not found Book with id ${req.params.id}.`
  });
  } else {
  res.status(500).send({
  message: "Error updating Book with id " + req.params.id
  });
  }
  } else res.send(data);
  }
  );
  };