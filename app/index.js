const express = require('express');
const redisClient = require('./redisClient');
const db = require('./db');

const app = express();

// Root endpoint 
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Node.js App!' });
});

// Redis endpoint
app.get('/cache/:key', async (req, res) => {
    const { key } = req.params;
    const value = await redisClient.get(key);

    if (value) {
        return res.status(200).json({ key, value });
    }
    return res.status(404).json({ error: 'key not found' });
});

// PostgreSQL test endpoint
app.get('/db', async (req, res) => {
    try {
        const result = await db.query('SELECT NOW() AS current_time');
        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});