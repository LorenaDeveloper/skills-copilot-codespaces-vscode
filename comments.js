// Create web server
// Load the module
var http = require('http');
var fs = require('fs');

// Create web server
http.createServer(function (req, res) {
    // Read the file
    fs.readFile('comments.html', function(err, data) {
        // Write the file to the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
// Open the browser to localhost:8080/comments.html
// Run the server with node comments.js

