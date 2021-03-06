const { DbConnect } = require('./config/config');

module.exports = {
  development: {
    client: "pg", 
    connection: DbConnect, 
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
};
