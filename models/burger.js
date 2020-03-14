// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(ColVals, condition, cb) {
    orm.update("burger", ColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
