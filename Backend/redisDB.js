// db/index.js

const Redis = require('ioredis');

// Configurar la conexión a Redis
const redisClient = new Redis({
  host: 'localhost',
  port: 6379, // Puerto predeterminado de Redis
});

module.exports = redisClient;
