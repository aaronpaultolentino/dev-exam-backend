const http = require('http');
const url = require('url');
let {ping} = require('./Controller/PingController');

const server = http.createServer();

server.on('request', (request, response) => {
	//GET

	if (request.method == 'GET') {
		response.writeHead(200, {"Content-Type": "application/json"});
		response.write(JSON.stringify(ping(request)));

		response.end();
	}
});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
console.log('Backend URL: http://192.168.155.10:8081')
server.listen(8081);
