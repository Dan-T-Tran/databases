var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((err, result) => {
      if (err) {
        throw (err);
      } else {
        res.json(result);
      }
    })
  },
  post: function (req, res) {
    console.log(req.body);
    var params = req.body['username'];
    //no need to use array if only single variable parameter
    models.users.create(params, (err, result) => {
      if (err) {
        throw (err);
      } else {
        res.json(result);
      }
    })
  }
};
