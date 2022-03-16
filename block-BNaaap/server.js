var http = require("http");

var server = http.createServer(handleReq);

function handleReq(req, res) {
  res.statusCode = 201;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello ");
  res.end("World!");
}

server.listen(4444, () => {
  console.log("server listening at 4444");
});
