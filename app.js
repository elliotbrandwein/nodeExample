var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();
var quotes = ["You are inspired when you find inspiration", "If you seek inspiration, look for it", "I am always inspired by inspirational quotes"];

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  console.log('served homepage');
  res.render('home');
});
app.get('/about', function (req, res) {
  console.log('served about page');
  res.render('about');
});
app.get('/special', function (req, res) {
	console.log('served the special page');
	res.render('special');
  
});

app.listen(3000, function () {
  console.log('Inspiration app listening on port 3000!');
});