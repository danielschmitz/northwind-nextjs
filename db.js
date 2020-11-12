require('dotenv').config()
const env = process.env.NODE_ENV || "development"
const knexfile = require('./knexfile')

let cachedConnection;

function getConnection() {

    if (cachedConnection) {
        console.log("Cached Connection");
        return cachedConnection;
    }

    console.log("New Connection");
    const connection = require('knex')(knexfile[env])
    cachedConnection = connection;
    return connection;
}

const db = getConnection()
module.exports = db