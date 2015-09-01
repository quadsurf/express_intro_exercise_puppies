var express = require('express'),
  app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

puppies = [
  {name: "Whiskey", age: 2, id: 1}
]
nextPuppyId = 2

app.get('/', function(req, res) {
  res.render('site/index', {puppies: puppies});
});

app.get('/puppies/new', function(req, res) {
  res.render('puppies/new');
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});