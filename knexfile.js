require('dotenv').config();
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const HOST = 'ec2-54-167-168-52.compute-1.amazonaws.com'
const DB = 'd9ia1c36hb2574';
const USER = 'fzyvkhbcrlpogt';
const PASSWORD = '35538c1afc8d98af92ebeb643fff4d7ba1c872b97ba6116f8adc375dc439eeb8';

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: HOST,
      database: DB,
      user:     USER,
      password: PASSWORD,
      ssl: true
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: DB,
      user:     USER,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: DB,
      user:     USER,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
