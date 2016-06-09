// Update with your config settings.
// update your knexfile.js with the location of your seed file, and create a seed file
// http://knexjs.org/#Seeds-API
// SEED FILE:
// exports.seed = function(knex, Promise) {
//  return knex(’someTable').insert({name: ’seedName'});
// };

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/puppiesdb'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
