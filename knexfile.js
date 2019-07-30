const { DbConnect } = require('./config/config');

module.exports = {
  development: {
    client: "pg", 
    connection: DbConnect, 
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
};
