var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryString = 'SELECT * from users';
    db.query(queryString, (err, result) => {
      if (err) {
        throw (err);
      } else {
        callback(null, result);
      }
    });
  },
  create: function (params, callback) {
    var queryString = 'INSERT INTO users (username) VALUES (?)';
    db.query(queryString, params, (err, result) => {
      if (err) {
        throw (err);
      } else {
        callback(null, result);
      }
    });
  }
};
