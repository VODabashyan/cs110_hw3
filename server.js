const http = require('http');

http.createServer(function(req, res) {
	
    if (req.url === '/hello') {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello World\n');
		
    } else if (req.url === "/Armenia") {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello Armenia\n');
		
    } else if (req.url === "/Yerevan") {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('SunnyYerevan\n');
		
    } else if (req.url === "/Vahe") {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello Vahe\n');
		
    }  else if (req.url === "/Autumn") {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('GoldAutumn\n');
    } else  {

    res.writeHead(404, {'Content-Type' : 'text/plain'});
    res.end("Nope!");

}).listen(8081);