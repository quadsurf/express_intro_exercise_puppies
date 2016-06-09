var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

function Puppy(){
  return knex('puppies');//puppies refers to???
}
//or
var knexloc = knex('puppies');

//read all
router.get('/', function(req, res, next) {
  knex.select().from('puppies').then(function(result){
    res.json(result);
  });
});

//read one
router.get('/:id', function(req, res, next) {
  Puppy().where('id',req.params.id).first().then(function(result){
    res.json(result);
  });
});

//create
// router.get('/new', function(req, res, next) {
//
// });

//edit
// router.post('/:id',function(req,res){
//   console.log("patch");
//   var puppy = req.params.id;
//   var puppyDetails = req.body;
//   Puppy().where('id',puppy).first().update({
//     id: puppy,
//     name: puppyDetails.name,
//     breed: puppyDetails.breed,
//     age: puppyDetails.age
//   }).then(function(result){
//     console.log("RESULT:",result);
//     res.redirect("/puppies");
//   })​
// });

//delete
// router.post('/', function(req, res, next) {
//
// });

module.exports = router;


//create

// knex('puppies').insert({
//   name: 'Fido',
//   breed: 'Chuwawa',
//   age: '3',
//   imgurl: 'https://s-media-cache-ak0.pinimg.com/236x/67/f6/18/67f6182991118e97e8aa61605c615434.jpg',
//   about: 'Fido is great!'
// }, 'id').then(function(result){
//   knex('puppies').select().then(function(result){
//     res.json(result);
//   });
// });
