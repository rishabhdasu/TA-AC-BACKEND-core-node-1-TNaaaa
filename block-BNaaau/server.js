var http = require("http");

var server = http.createServer(handle);

function handle(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end(req);
}

server.listen(7000, () => {
  console.log("Server started at 7000");
});
