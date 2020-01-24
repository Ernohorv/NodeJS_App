const logger = require('winston');
const winston = require('winston');

logger.add(new logger.transports.Console());

module.exports = logger;