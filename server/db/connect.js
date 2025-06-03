const { Pool } = require('pg');

const pool = new Pool({
  user: 'alpha',
  host: 'localhost',
  database: 'alphaai_tasks',
  password: 'secret123',
  port: 5432,
});

module.exports = pool;
