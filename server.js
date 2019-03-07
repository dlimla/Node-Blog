//requirements
const express = require('express'); // importing a CommonJS module
const logger = require('morgan')
const helmet = require('helmet') //important SECURITY FEATURE!! HIDES EXPRESS FROM not needed people

//different doc imports 
const userRouter = require('./data/helpers/helpers-router.js');
const postRouter = require('./data/helpers/blogPost-router.js');

//server functions
const server = express();
const parser = express.json();
const logMiddleware = logger('dev');
const securityMiddleware = helmet();

server.use(parser, logMiddleware, securityMiddleware);

server.use('/api/user', userRouter);
server.use('/api/post', postRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Blog</h2>
    `);
});

server.use((err, req, res, next) => {
  res.status(400).json({
    message: "error thrown in server",
    err: err
  })
})

module.exports = server;
