var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(handle);

function handle(req, res) {
  var parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl.pathname, req.url);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(parsedUrl.query));
}

server.listen(2345, () => {
  console.log("Server started at 2345");
});
