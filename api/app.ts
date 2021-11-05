import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

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

app.listen(5000, () => {
	console.log('Server is running on port 5000');
});

module.exports = app;
