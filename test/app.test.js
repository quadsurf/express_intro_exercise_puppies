var expect = require('chai').expect;
var app = require('../app');
var supertest = require('supertest')(app);

describe('GET /', function() {
  it('should display information about all the puppies');
});

describe('GET /puppies/new', function() {
  it('should get a form to save a new puppy');
  it('should have an input for name');
  it('should have an input for age');
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