const mysql2 = require("mysql2");
const dbConfig = require("./../app/config/db.config");

var connection = mysql2.createPool({
  host: dbConfig.db_host,
  user: dbConfig.db_user,
  password: dbConfig.db_password,
  database: dbConfig.database
});

module.exports = connection;
