'use-strict'

const winston = require('winston');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'error',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint()
  ),
  transports: [
    new winston.transports.Console()
  ]
});

module.exports = logger;