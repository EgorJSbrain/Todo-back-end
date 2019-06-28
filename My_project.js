const express = require('express');
const app = express();
const router = require('./routes/todo')
var bodyParser = require('body-parser');
const cors = require('cors')


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// app.use( cors({origin: '*'}) )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var todo = require('./routes/todo');

app.use('/', todo);

app.listen(4800, function () {
  console.log('4800');
});