const pg = require('pg')

const config = {
    user: null,
    password: null,
    host: 'localhost',
    port: 5432,
    database: 'planet',
    max: 10,
    idleTimeoutMillis: 30000,
  };

module.exports = new pg.Pool(config);