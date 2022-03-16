var http = require("http");
var fs = require("fs");

var server = http.createServer(handle);

function handle(req, res) {
  if (req.method === "GET" && req.url === "/node") {
    res.setHeader("Content-Type", "text/html");
    fs.readFile("./node", (err, content) => {
      if (err) console.log(err);
      res.end(content);
    });
  } else if (req.method === "GET" && req.url === "/node") {
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream("./node").pipe(res);
  }
}

server.listen(5555, () => {
  console.log("server started at 5555");
});
