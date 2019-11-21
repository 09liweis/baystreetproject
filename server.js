const express = require('express'),
port = process.env.PORT || 8083
path = require('path'),
app = express(),
session = require('express-session'),
bodyParser = require('body-parser'),
mongoose = require('mongoose')
pageRoute = require('./server/router/page')
propRoute = require('./server/router/prop')
userRoute = require('./server/router/user');

mongoose.Promise = global.Promise;

if (port == 8083) {
  mongoose.connect('mongodb://localhost:27017/samliweisen',{ useNewUrlParser: true });
} else {
  mongoose.connect('mongodb://heroku_6njptcbp:dg8h3o8v9dpjk1osignqn3ibel@ds125489.mlab.com:25489/heroku_6njptcbp');
}

mongoose.connection.on('connected', function() {
  console.log('Connected to db');
});
mongoose.connection.on('error', function() { 
  console.log('connected fail');
});
mongoose.connection.on('disconnected', function () {    
  console.log('Mongoose connection disconnected');
});
app.use(session({ secret: '12345', cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use('/assets', express.static(path.join(__dirname) + '/assets'));
app.use('/dist', express.static(path.join(__dirname) + '/dist'));

app.use('/', pageRoute);

app.use('/api/prop', propRoute);
app.use('/api/user',userRoute);

app.listen(port, () => {
	console.log('Web server runs on: ' + port);
	console.log(new Date());
});