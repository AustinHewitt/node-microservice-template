const app = require('../app.js');

const port = process.env.port || 3001;
app.listen(port, () => {
  console.log('server is listening on ', port);
});