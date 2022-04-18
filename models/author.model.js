const sql = require("./db.js");

// constructor
const Author = function(author) {
  this.name = author.name;
  this.email = author.email;
  this.address = author.address;
  this.active = author.active;
};

Author.create = (newauthor, result) => {
  sql.query("INSERT INTO authors SET ?", newauthor, (err, res) => {
  if (err) {
  console.log("error: ", err);
  result(err, null);
  return;
  }
  
  console.log("created author: ", { id: res.insertId, ...newauthor });
  result(null, { id: res.insertId, ...newauthor });
  });
  };
Author.findById = (id, result) => {
  sql.query(`SELECT * FROM authors WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found author: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found author with the id
    result({ kind: "not_found" }, null);
  });
};

Author.getAll = (title, result) => {
  let query = "SELECT * FROM authors";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("authors: ", res);
    result(null, res);
  });
};

Author.getAllPublished = result => {
  sql.query("SELECT * FROM authors WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("authors: ", res);
    result(null, res);
  });
};

Author.updateById = (id, author, result) => {
  sql.query(
    "UPDATE authors SET name = ?, email = ?, address = ?,active=?, WHERE id = ?",
    [author.name, author.email, author.address, author.active,id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found author with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated author: ", { id: id, ...author });
      result(null, { id: id, ...author });
    }
  );
};

Author.remove = (id, result) => {
  sql.query("DELETE FROM authors WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found author with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted author with id: ", id);
    result(null, res);
  });
};

Author.removeAll = result => {
  sql.query("DELETE FROM authors", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} authors`);
    result(null, res);
  });
};

module.exports = Author;
