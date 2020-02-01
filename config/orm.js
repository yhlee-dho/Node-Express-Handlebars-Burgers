// require connections.js
const connection = require("../config/connection.js");

// orm object
const orm = {
    // selectAll
    selectAll: function(table, cb) {
        // "SELECT * FROM ??"
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // insertOne
    insertOne: function(table, objColVals, cb) {
        // "INSERT INTO ?? SET ?"
        const queryString = "INSERT INTO ?? SET ?";
        connection.query(queryString, [table, objColVals], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // updateOne - obj = {burger_name: classic, devoured: true}
    updateOne: function(table, objColVals, condition, cb) {
        // "UPDATE ?? SET ? WHERE ?"
        const queryString = "UPDATE ?? SET ? WHERE ?";
        connection.query(queryString, [table, objColVals, condition], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export orm
module.exports = orm;