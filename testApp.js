let http = require("http");

http.createServer(function(req,res) {
    // Send HTTP header
    // HTTP Status: 200: OK
    // Content Type: text/plain
    res.writeHead(200, {'Content Type': 'text/plain'});
    res.write('Hello world');
    // Send the response body "this is an example of node.js response"
    res.end("this is an example of node.js response");

}).listen(8080);