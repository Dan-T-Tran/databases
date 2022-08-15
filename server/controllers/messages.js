var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((err, result) => {
      if (err) {
        throw (err);
      } else {
        res.json(result);
      }
    })
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body['text'], req.body['username'], req.body['roomname']];
    models.messages.create(params, (err, result) => {
      if (err) {
        throw (err);
      } else {
        res.json(result);
      }
    })
  } // a function which handles posting a message to the database
};
