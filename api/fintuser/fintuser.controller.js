let {FintUser} = require('../db');

exports.get = (req, res) => {
  FintUser.findAll().then(users => {
    res.json(users);
  }).catch(err => {
    console.error(err);
    res.status(500).body(err);
  });
};

exports.register = (req, res) => {
  FintUser.build(req.body)
    .save()
    .then(another => {
      res.send('ok');
    }).catch(err => {
      console.error(err);
      res.status(500).send();
  });
};

exports.getGroups = (req, res) => {
  if (!req.params.id) res.status(400).send();
  FintUser.findById(req.params.id)
    .then(user => {
      return user.getFintGroups();
    })
    .then(groups => {
      res.send(groups);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send(err);
    });
};