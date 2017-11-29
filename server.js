var http = require('http'),
    fs = require('fs');
fs.readFile('visit.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(3000);
});

// var http = require('http');
// var fs = require("fs");
//
// http.createServer(function(request, response) {
//   fs.readFile("visit.html", function(err, data){
//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write(data);
//   response.end();
// });
// }).listen(3000);

// var http = require('http');
//
//
// var server = http.createServer(function(req, res) {
//   res.writeHead(200);
//   res.end('Visit Http');
// });
// server.listen(8080);
