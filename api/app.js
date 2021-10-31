var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
// var serveIndex = require('serve-index')

var indexRouter = require('./routes/index');
var articlesRouter = require('./routes/articles');

var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/articles', express.static(path.join(__dirname, '../articles')));

app.use('/', indexRouter);
app.use('/articles', articlesRouter);

module.exports = app;
