const knex = require('knex');

const config = require('../knexfile.js');

const env = "development";

module.exports = knex(config[env]);