var http = require('http'),
    fs = require('fs');

fs.readFile('visit.html', function (err, data) {
    if (err) {
        throw err;
    }

    http.createServer(function(request, response) {
        response.writeHeader(200, {"Content-Type": "text/html", 'Content-Length':data.length});
        response.write(data);
        response.end();
    }).listen(3000);

});
