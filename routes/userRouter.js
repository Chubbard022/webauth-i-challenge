const express = require("express")
const router = express.Router();
const knex = require("knex");

const knexConfig = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/auth.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
  },
};

const db = knex(knexConfig)


module.exports = router;