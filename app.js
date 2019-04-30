let createError = require('http-errors');
let express = require('express');
let path = require('path');
let morgan = require('morgan');
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const indexRouter = require('./src/routes/index');
const apiRouter = require('./src/routes/api');

let app = express();

// require('custom-env').env(true);
const dotenv =  require('dotenv').config()

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const APP_PORT = process.env.APP_PORT || 5000;

var listener = app.listen(APP_PORT, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port APP_PORT
});


module.exports = app;
