// Import MySQL connection.
const connection = require("../config/connection.js");

let orm = {
  all: function (table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    connection.query(`insert into ${table} (${cols}) values ("${vals}")`, function(err, result) {
      if (err) {
        throw err;
      } 
      cb(result);
    });
  },

  update: function(table, ColVals, condition, cb) {
    connection.query(`update ${table} set ${ColVals} where ${condition}`, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
