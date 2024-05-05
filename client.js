const { Redis } = require('ioredis')

const client = new Redis(); // default port 6379

module.exports = client 