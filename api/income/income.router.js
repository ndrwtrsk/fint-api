var express = require('express');
var router = express.Router();
var controller = require('./income.controller');

router.route('/incomes')
  .post(controller.addIncome);
  .get(controller.getIncomes);

router.route('/incomes/category')
  .post(controller.addIncomeCategory);

router.route('/incomes/test')
  .get(controller.test);

module.exports = router;