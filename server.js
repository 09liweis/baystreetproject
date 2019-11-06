const express = require('express'),
port = process.env.PORT || 8082
path = require('path'),
app = express(),
mongoose = require('mongoose')
propRoute = require('./server/router/prop');

mongoose.Promise = global.Promise;

if (port == 8082) {
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

app.use('/assets', express.static(path.join(__dirname) + '/assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets/index.html'));
});

app.use('/api/prop', propRoute);

app.listen(port, () => {
	console.log('Web server runs on: ' + port);
	console.log(new Date());
});