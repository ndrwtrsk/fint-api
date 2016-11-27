var express = require('express');
var router = express.Router();
var controller = require('./user.controller');

router.route('/user')
  .get(controller.get);
module.exports = router;