var http = require("http");
var fs = require("fs");

var server = http.createServer(handleServer);

function handleServer(req, res) {
  res.setHeader("Content-Type", "text/html");
  fs.createReadStream("./index.html").pipe(res);
}

server.listen(5000);
