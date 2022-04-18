const express = require("express");


const bookRoute = require("./app/routes/book.routes");
const authorRoute = require("./app/routes/author.routes");

const app = express();


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));







// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs-Express application." });
});

app.use('/api/book', bookRoute);
app.use('/api/author', authorRoute);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

