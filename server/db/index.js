const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
