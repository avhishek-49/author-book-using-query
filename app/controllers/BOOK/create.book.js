const Book = require("./../../../models/book.model");
;
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
    res.status(400).send({
    message: "Content can not be empty!"
    });
    }
    
    // Create a Book
    const book = new Book({
      title: req.body.title,
      description: req.body.description,
     published: req.body.published ? req.body.published : false
      });
      
    // Save Book in the database
    Book.create(book, (err, data) => {
    if (err)
    res.status(500).send({
    message:
    err.message || "Some error occurred while creating the Book."
    });
    else res.send(data);
    });
    };


