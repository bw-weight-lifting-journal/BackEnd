// Update with your config settings.
const { DbConnect } = require('./config/config');

module.exports = {
  development: {
    client: "pg", // pg is the database library for postgreSQL on knexjs
    connection: DbConnect, // Your local host IP
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
