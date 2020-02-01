// Set up MySQL connection.
const mysql = require("mysql");
const { sqlPassword } = require("../config.json");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: sqlPassword,
  database: "burgers_db"
});

// Connect to sql
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;