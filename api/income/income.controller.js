let {FintUser, PersonalIncome, PersonalIncomeCategory} = require('../db');
let admin = require('../firebase');

exports.addIncome = (req, res) => {
  if (!req.headers.authentication) res.sendStatus(403);
  var body = req.body;
  //todo check if category exists
  admin.auth().verifyIdToken(req.headers.authentication).then(decodedToken => {
    return FintUser.findById(decodedToken.uid);
  }).then(user => {
    if (!user) throw {code: 404, msg: 'user not found'};
    else {
      return PersonalIncome.create(
        {
          userUid: user.uid,
          value: body.value,
          categoryId: body.categoryId,
          dateTime: new Date()
        });
    }
  }).then(() => {
    res.send(201);
  }).catch(error => {
    console.error('error', error);
    res.status(error.code).send(error);
  });
};

exports.addIncomeCategory = (req, res) => {
  if (!req.headers.authentication) res.sendStatus(403);
  var body = req.body;
  admin.auth().verifyIdToken(req.headers.authentication).then(decodedToken => {
    return FintUser.findById(decodedToken.uid);
  }).then(user => {
    if (!user) throw {code: 404, msg: 'user not found'};
    else {
      return PersonalIncomeCategory.create(
        {
          userUid: user.uid,
          name: body.name
        });
    }
  }).then(() => {
    res.send(201);
  }).catch(error => {
    console.error('error', error);
    res.status(error.code).send(error);
  });
};

exports.test = (req, res) => {
  FintUser.findById('fyL4ZxcZ3MVoUn4nxXj7WreQ7G').then(user => {
    if (!user) throw {code: 404, msg: 'user not found'};
    else {
      return PersonalIncomeCategory.create(
        {
          userUid: user.uid,
          name: 'best'
        });
    }
  }).then(() => {
    res.sendStatus(201);
  }).catch(error => {
    console.error('error', error);
    res.status(error.code).send(error);
  });
};