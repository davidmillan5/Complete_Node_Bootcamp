'use strict';

/**
 *
 * API -> Is a service from which we can request some data
 *
 */

'use strict';

const fs = require('fs'),
  http = require('http'), // Give Me Networking Capabilities
  url = require('url');

/**
 *
 * Create Server
 * Listen to Server
 *
 *
 */

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  console.log(req.url);

  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the Overview');
  } else if (pathName === '/product') {
    res.end('This is the product');
  } else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello world',
    });
    res.end('<h1>Page not Found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log(`Listening to request on port 8000`);
});
