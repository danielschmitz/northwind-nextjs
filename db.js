require('dotenv').config()
const env = process.env.NODE_ENV || "development"
const knexfile = require('./knexfile')

const DB_KEY = Symbol.for("MyApp.db");
const globalSymbols = Object.getOwnPropertySymbols(global);
const hasDb = (globalSymbols.indexOf(DB_KEY) > -1);

function getConnection() {

    let connection;

    if (!hasDb) {
        console.log("New Connection");
        connection = require('knex')(knexfile[env])
        global[DB_KEY] = connection
    } else {
        console.log("Reuse Connection");
    }

    const singleton = {};
    Object.defineProperty(singleton, "instance", {
        get: function () {
            return global[DB_KEY];
        }
    });
    Object.freeze(singleton);

    return singleton;
}

const db = getConnection()
module.exports = db.instance