// require orm
const orm = require("../config/orm.js");

// burger object
const burger = {
    // selectAll
    selectAll: function(cb) {
        // orm.selectAll({})
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // insertOne - objColVals -> array
    insertOne: function(objColVals, cb) {
        // orm.insertOne({})
        orm.insertOne("burgers", objColVals, function(res) {
            cb(res);
        });
    },
    // updateOne
    updateOne: function(objColVals, condition, cb) {
        // orm.updateOne({})
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
  
// Export burger
module.exports = burger;