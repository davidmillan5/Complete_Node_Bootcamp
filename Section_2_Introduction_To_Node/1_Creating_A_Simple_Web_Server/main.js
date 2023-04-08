'use strict';

const fs = require('fs'),
  http = require('http'); // Give Me Networking Capabilities

/**
 *
 * Create Server
 * Listen to Server
 *
 *
 */

const server = http.createServer((req, res) => {
  console.log(req);
  res.end(`Hello from the server!`);
});

server.listen(8000, '127.0.0.1', () => {
  console.log(`Listening to request on port 8000`);
});
