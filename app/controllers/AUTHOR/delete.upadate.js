const Author = require("./../../../models/author.model");


// Delete a author with the specified id in the request
exports.delete = (req, res) => {
  Author.remove(req.params.id, (err, data) => {
  if (err) {
  if (err.kind === "not_found") {
  res.status(404).send({
  message: `Not found Author with id ${req.params.id}.`
  });
  } else {
  res.status(500).send({
  message: "Could not delete Author with id " + req.params.id
  });
  }
  } else res.send({ message: `Author was deleted successfully!` });
  });
  };
  
  // Delete all Authors from the database.
  exports.deleteAll = (req, res) => {
  Author.removeAll((err, data) => {
  if (err)
  res.status(500).send({
  message:
  err.message || "Some error occurred while removing all Authors."
  });
  else res.send({ message: `All Authors were deleted successfully!` });
  });
  };