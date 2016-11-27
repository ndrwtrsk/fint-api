var express = require('express');
var app = express();
var routes = require('./api/routes');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
routes(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});