const { Pool } = require('pg');

// PostgreSQL cooection configuration 
const pool = new Pool({
    user: 'user',
    host: 'db',
    database: 'nodeapp',
    password: 'password',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
}