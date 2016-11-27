var db = require('../db');

exports.get = (req, res) => {
  db.FintUser.findAll().then(users => {
    res.json(users);
  }).catch(err => {
    res.status(500).body(err);
  });
};