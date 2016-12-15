let {FintUser} = require('../db');
let admin = require('../firebase');

exports.get = (req, res) => {
  FintUser.findAll().then(users => {
    res.json(users);
  }).catch(err => {
    console.error(err);
    res.status(500).body(err);
  });
};

exports.register = (req, res) => {
  if (!req.headers.authentication) res.status(403).send();
  admin.auth().verifyIdToken(req.headers.authentication)
    .then(decodedToken => {
      return decodedToken;
    })
    .then(token => {
      var user = {uid: token.uid, name:token.email, photoUrl: "" };
      var findorCreateClause = {
        where: {uid: token.uid},
        defaults: user
      };
      return FintUser.findOrCreate(findorCreateClause);
    })
    .then((result) => {
      var status = result[1] ? 201 : 200;
      res.status(status).send(result[0]);
    })
    .catch(error => {
      console.error('error:', error);
      res.status(500).send()
    });
};

exports.getGroups = (req, res) => {
  if (!req.params.id) res.status(400).send();
  if (!req.headers.authentication) res.status(403).send();
  admin.auth().verifyIdToken(req.headers.authentication)
    .then(decodedToken => {
      res.send(decodedToken);
    })
    .catch(error => {console.error(error); res.status(500).send()});

  // FintUser.findById(req.params.id)
  //   .then(user => {
  //     return user.getFintGroups();
  //   })
  //   .then(groups => {
  //     res.send(groups);
  //   })
  //   .catch(err => {
  //     console.error(err);
  //     res.status(500).send(err);
  //   });
};