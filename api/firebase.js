var admin = require("firebase-admin");
var serviceAccount = require('../config/firebase.service.account.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databaseName.firebaseio.com"
});

module.exports = admin;