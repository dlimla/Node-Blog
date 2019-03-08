
const server = require('./server.js');

PORT = process.env.PORT || 4000


server.listen(PORT, () => {
  console.log(`\n*** Server Running on PORT ${PORT} ***\n`);
});
