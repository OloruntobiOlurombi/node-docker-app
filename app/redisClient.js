const redis = require('redis');

// Redis client configuration 
const client = redis.createClient({
    host: 'redis',
    port: 6379,
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

module.exports = {
    get: (key) => new Promise((resolve, reject) => {
        client.get(key, (err, value) => {
            if (err) reject(err);
            else resolve(value);
        });
    }),
    set: (key, value) => new Promise((resolve, reject) => {
        client.set(key, value, (err) => {
            if (err) reject(err);
            else resolve();
        });
    }),
};