var expect = require('chai').expect;
var code = require('../app');
var request = require('supertest');

describe('GET /', function() {
  before(function() {
    code.puppies.push({name: "Whiskey", age: 2, id: 1});
  });

  after(function() {
    code.puppies = [];
  });

  it('should display information about all the puppies', function(done) {
    request(code.app)
      .get('/')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          console.log(res.text)
          expect(res.text.toLowerCase()).to.contain('name');
          expect(res.text.toLowerCase()).to.contain('age');
          expect(res.text.toLowerCase()).to.contain('whiskey');
          done();
        }
      });

  });
});

describe('GET /puppies/new', function() {

  it('should display a form to save a new puppy', function(done) {
    request(code.app)
      .get('/puppies/new')
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        } else {
          expect(res.text.toLowerCase()).to.contain('form');
          expect(res.text.toLowerCase()).to.contain('name');
          expect(res.text.toLowerCase()).to.contain('age');
          done();
        }
      });
  });
});

describe('GET /puppies', function() {
  it('should save the puppy to an array');
  it('should save the puppy with a unique id');
  it('should increment the id with each addition');
});

describe('GET /puppies/:id', function() {
  it('displays information on the puppy with the given id');
});

describe('GET /about', function() {
  it('displays info about your puppies app');
});

describe('GET /contact', function() {
  it('diplays contact info');
});