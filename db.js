require('dotenv').config()
const env = process.env.NODE_ENV || "development"
const knexfile = require('./knexfile')
const db = require('knex')(knexfile[env])
module.exports = db