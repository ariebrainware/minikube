const http = require('http')

const handleRequest = (request, response) => {
  console.log('Received request for URL: ' + request.url)
  response.writeHead(200);
  response.end('Hello World!')
};
const www = http.createServer(handleRequest)
www.listen(8080)
console.log("Service is running on port 8080")
