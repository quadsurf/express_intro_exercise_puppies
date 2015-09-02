var express = require('express'),
  app = express(),
  bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); // Comment this out and input fields are undefined

puppies = [
  {name: "Whiskey", age: 2, id: 1}
]
nextPuppyId = 2

function findPuppyById(id) {
  return puppies.filter(function(puppy) {
    return puppy.id == id;
  });
}

app.get('/', function(req, res) {
  res.render('site/index', {puppies: puppies});
});

app.get('/puppies', function(req, res) {
  res.render('site/index', {puppies: puppies});
});

app.get('/puppies/new', function(req, res) {
  res.render('puppies/new');
});

app.get('/puppies/:id', function(req, res) {
  var currentPuppy = findPuppyById(req.params.id)[0];
  if (currentPuppy) {
    res.render('puppies/show', {puppy: currentPuppy});
  } else {
    res.render('site/404');
  }
});

app.post('/puppies', function(req, res) {
  var newPuppy = req.body;
  puppies.push({
    name: newPuppy.name,
    age: newPuppy.age,
    id: nextPuppyId
  });
  nextPuppyId++;
  res.render('site/index', {puppies: puppies});
});

app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});

