const Author = require("./../../../models/author.model");
;
exports.create = (req, res) => {
 
    // Create a Author
    const  author = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      active: req.body.active ? req.body.active : false
      };
    // Save Author in the database
    Author.create(author, (err, data) => {
    if (err)
    res.status(500).send({
    message:
    err.message || "Some error occurred while creating the Author."
    });
    else res.send(data);
    });
    };