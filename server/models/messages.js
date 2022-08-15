var db = require('../db');

// a function which produces all the messages
module.exports = {
  // a function which can be used to insert a message into the database
  getAll: function (callback) {
    var queryString = 'SELECT messages.content, messages.user_id, messages.roomname, users.username FROM messages \
                       left outer join users on (messages.user_id = users.user_id)';
    db.query(queryString, (err, result) => {
      if (err) {
        throw(err);
      } else {
        callback(null, result);
      }
    });
  },
  create: function (params, callback) {
    var queryString = 'INSERT INTO messages (content, user_id, roomname) VALUES (?, (SELECT user_id from users where username = ?), ?)';
    db.query(queryString, params, (err, result) => {
      if (err) {
        throw(err);
      } else {
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};
