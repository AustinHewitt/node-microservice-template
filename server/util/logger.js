const winston = require('winston');
const tsFormat = () => (new Date()).toLocaleTimeString();

const logLevel = process.env.LOG_LEVEL || 'info';
const logger = new (winston.Logger)({
  level: logLevel,
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
    })
  ]
});

module.exports = logger;