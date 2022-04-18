const Author = require("./../../../models/author.model");

// Update a Author by the id in the request
exports.update = (req, res) => {
 
  Author.updateById(
    req.params.id,
    new Author(req.body),
    (err, data) => {
    if (err) {
    if (err.kind === "not_found") {
    res.status(404).send({
    message: `Not found Author with id ${req.params.id}.`
    });
    } else {
    res.status(500).send({
    message: "Error updating Author with id " + req.params.id
    });
    }
    } else res.send(data);
    }
    );
    };