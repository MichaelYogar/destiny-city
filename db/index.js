const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
