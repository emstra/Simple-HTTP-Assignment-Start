const fs = require('fs'); // use file system module

// reading in files synchronously in this case prevents theme from being sent before being read
const index = fs.readFileSync(`${__dirname}/../client/client.html`);// read in these files
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();// sends response back to client
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();// sends response back to client
};

// export methods
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
