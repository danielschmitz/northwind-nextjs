const env = process.env.NODE_ENV || "development"
const knexfile = require('./knexfile')

let cachedConnection = global.cachedConnection

function getConnection() {

  if (!cachedConnection) {
    console.log('New Connection')
    cachedConnection =  require('knex')(knexfile[env])
    global.cachedConnection = cachedConnection
    return cachedConnection
  }

  console.log('Reuse Connection')
  return cachedConnection;

}
module.exports = getConnection()