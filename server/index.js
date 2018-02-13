const app = require('../app.js');
const logger = require('./util/logger');

const port = process.env.port || 3001;
app.listen(port, () => {
  logger.info('server is listening on ', port);
});