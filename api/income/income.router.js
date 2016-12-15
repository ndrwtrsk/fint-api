var express = require('express');
var router = express.Router();
var controller = require('./fintuser.controller');

router.route('/users')
  .get(controller.get)
  .post(controller.register);

router.route('/users/:id')
  .get(controller.getGroups);

module.exports = router;